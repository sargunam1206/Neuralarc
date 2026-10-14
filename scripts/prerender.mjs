// Prerenders every route in public/sitemap.xml into static HTML under dist/,
// using a real headless browser so react-helmet-async's per-page <title> and
// <meta> tags (and all the page's visible content) land in the HTML that
// search engines and link-unfurlers see — not just the empty SPA shell.
//
// Runs as a "postbuild" step after `vite build`. Framework-agnostic: it
// drives the already-built app in a browser and snapshots the DOM, so it
// doesn't care which React Router version the app uses and can't break
// client-side routing — the same JS bundle still ships and hydrates.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "vite";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const sitemapPath = path.join(root, "public", "sitemap.xml");

const SITE_ORIGIN = "https://www.neuralarc.com";

async function getRoutesFromSitemap() {
  const xml = await readFile(sitemapPath, "utf-8");
  const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
  const routes = locs.map((url) => {
    const path = url.replace(SITE_ORIGIN, "");
    return path === "" ? "/" : path;
  });
  // De-dupe and make sure the homepage is first (nice for log readability).
  const unique = [...new Set(routes)];
  unique.sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : 0));
  return unique;
}

function outputFileForRoute(route) {
  if (route === "/") return path.join(distDir, "index.html");
  const trimmed = route.replace(/^\/+/, "").replace(/\/+$/, "");
  return path.join(distDir, trimmed, "index.html");
}

async function main() {
  if (!existsSync(distDir)) {
    console.error('dist/ not found — run "vite build" before prerendering.');
    process.exit(1);
  }

  const routes = await getRoutesFromSitemap();
  console.log(`Prerendering ${routes.length} routes from public/sitemap.xml...\n`);

  const server = await preview({
    root,
    preview: { port: 4173, strictPort: false, host: "127.0.0.1" },
  });
  const resolvedUrls = server.resolvedUrls;
  const baseURL = resolvedUrls.local[0].replace(/\/$/, "");

  const browser = await chromium.launch();
  const page = await browser.newPage();

  const failures = [];
  const warnings = [];

  for (const route of routes) {
    const url = baseURL + route;
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      // Wait for React to have actually painted something into #root.
      await page.waitForSelector("#root > *", { timeout: 15000 });
      // Let react-helmet-async's effect and any late AOS/image work settle.
      await page.waitForTimeout(200);

      const title = await page.title().catch(() => "");
      const descriptionCount = await page.locator('meta[name="description"]').count();
      const description = descriptionCount
        ? await page.locator('meta[name="description"]').first().getAttribute("content")
        : "";
      const canonicalCount = await page.locator('link[rel="canonical"]').count();
      const h1Count = await page.locator("h1").count().catch(() => 0);

      if (!title || title.trim() === "") {
        warnings.push(`${route} — missing <title>`);
      }
      if (descriptionCount === 0 || !description || description.trim() === "") {
        warnings.push(`${route} — missing meta description`);
      } else if (descriptionCount > 1) {
        // A static fallback tag in index.html and this page's <Helmet> tag
        // both present — Helmet only dedupes tags it rendered itself, so a
        // static one left in index.html never gets removed. Google treats
        // multiple description tags as a conflicting signal.
        warnings.push(`${route} — ${descriptionCount} meta description tags (should be 1)`);
      }
      if (canonicalCount === 0) {
        warnings.push(`${route} — missing canonical link`);
      } else if (canonicalCount > 1) {
        warnings.push(`${route} — ${canonicalCount} canonical links (should be 1)`);
      }
      if (h1Count === 0) {
        warnings.push(`${route} — no <h1> found`);
      } else if (h1Count > 1) {
        warnings.push(`${route} — ${h1Count} <h1> tags (should be 1)`);
      }

      const html = await page.content();
      const outFile = outputFileForRoute(route);
      await mkdir(path.dirname(outFile), { recursive: true });
      await writeFile(outFile, html, "utf-8");

      console.log(`  ok  ${route}  →  ${path.relative(root, outFile)}  (title: "${title}")`);
    } catch (err) {
      failures.push({ route, error: err.message });
      console.error(`  FAIL  ${route}  —  ${err.message}`);
    }
  }

  await browser.close();
  await server.httpServer.close();

  console.log("\n--- Prerender summary ---");
  console.log(`Routes prerendered: ${routes.length - failures.length}/${routes.length}`);
  if (warnings.length) {
    console.log(`\nWarnings (${warnings.length}):`);
    warnings.forEach((w) => console.log(`  - ${w}`));
  }
  if (failures.length) {
    console.log(`\nFailures (${failures.length}):`);
    failures.forEach((f) => console.log(`  - ${f.route}: ${f.error}`));
    console.log("\nPrerender failed for one or more routes.");
    process.exit(1);
  }

  console.log("\nPrerender complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
