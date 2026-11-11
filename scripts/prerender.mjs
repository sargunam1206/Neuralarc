// Build step 3 of 3 (see "build" in package.json): renders every public route
// to static HTML so search engines and link previews get real content, titles
// and descriptions without running JavaScript. React then hydrates the page.
//
//   dist/index.html            -> "/" (pre-rendered home page)
//   dist/services/iot.html     -> "/services/iot"  (.htaccess maps clean URLs)
//   dist/404.html              -> "page not found" for any other URL
//   dist/sitemap.xml           -> generated from the same route list

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SITE = "https://www.neuralarc.com"; // canonical origin (www + HTTPS)
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const SSR_ENTRY = path.join(ROOT, "dist-ssr", "entry-server.js");
const DEFAULT_IMAGE = `${SITE}/logos/Logo-icon.png`;
const ORG_ID = `${SITE}/#organization`;

// Use React's production server build (faster, and matches what ships).
process.env.NODE_ENV = "production";
const { render, getRoutes } = await import(pathToFileURL(SSR_ENTRY).href);
const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
const TITLE_TAG = "<title>NeuralArc</title>";
const ROOT_DIV = '<div id="root"></div>';
if (!template.includes(TITLE_TAG) || !template.includes(ROOT_DIV)) {
  throw new Error("dist/index.html no longer contains the expected <title> or root div");
}

const escapeAttr = (s) => s.replace(/&(?!amp;|lt;|gt;|quot;|#39;)/g, "&amp;").replace(/"/g, "&quot;");
const absolute = (url) => (url && !url.startsWith("data:") ? new URL(url, SITE).href : null);
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

// 1. 404 page for any URL that isn't a real page (e.g. old .php addresses).
//    .htaccess serves it with a real 404 status. The root is marked so the
//    browser renders it fresh (main.jsx) instead of hydrating, because the same
//    file is served for many different URLs.
{
  const { html, helmet } = await render("/__not-found__");
  const page = template
    .replace(TITLE_TAG, [helmet.title.toString(), helmet.meta.toString()].join("\n    "))
    .replace(ROOT_DIV, `<div id="root" data-not-found>${html}</div>`);
  fs.writeFileSync(path.join(DIST, "404.html"), page);
}

// 2. Pre-render every route.
const routes = getRoutes();
const seen = new Set();
for (const route of routes) {
  if (seen.has(route.path)) throw new Error(`Duplicate route ${route.path}`);
  seen.add(route.path);

  const { html, helmet } = await render(route.path);
  if (!html || !helmet) throw new Error(`Empty render for ${route.path}`);

  const titleHtml = helmet.title.toString();
  const metaHtml = helmet.meta.toString();
  let linkHtml = helmet.link.toString();
  const title = (titleHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1] || "NeuralArc";
  const description = (metaHtml.match(/name="description" content="([^"]*)"/) || [])[1] || "";

  let canonical = (linkHtml.match(/rel="canonical" href="([^"]*)"/) || [])[1];
  if (!canonical) {
    canonical = SITE + route.path;
    linkHtml += `<link rel="canonical" href="${canonical}"/>`;
  }

  const image = absolute(route.image) || DEFAULT_IMAGE;
  const social = [
    ["og:type", route.path === "/" ? "website" : "article"],
    ["og:site_name", "NeuralArc"],
    ["og:title", title],
    ["og:description", description],
    ["og:url", canonical],
    ["og:image", image],
    ["og:locale", "en_IN"],
  ]
    .map(([p, c]) => `<meta property="${p}" content="${escapeAttr(c)}"/>`)
    .concat(
      [
        ["twitter:card", route.image ? "summary_large_image" : "summary"],
        ["twitter:title", title],
        ["twitter:description", description],
        ["twitter:image", image],
      ].map(([n, c]) => `<meta name="${n}" content="${escapeAttr(c)}"/>`)
    )
    .join("");

  const structured = [];
  if (route.crumbs?.length) {
    const items = [{ name: "Home", path: "/" }, ...route.crumbs];
    structured.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: SITE + c.path,
      })),
    });
  }
  if (route.service) {
    structured.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: route.service.name,
      description: route.service.description,
      url: canonical,
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Coimbatore" },
        { "@type": "Country", name: "India" },
      ],
    });
  }

  const head = [titleHtml, metaHtml, linkHtml, social, ...structured.map(jsonLd)].join("\n    ");
  const page = template
    .replace(TITLE_TAG, head)
    .replace(ROOT_DIV, `<div id="root">${html}</div>`);

  const file = route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  const out = path.join(DIST, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page);
}

// 3. Sitemap from the same list, so it can't drift from the real pages.
//    No <lastmod>: we don't track real modification dates.
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  routes.map((r) => `  <url><loc>${SITE}${r.path}</loc></url>`).join("\n") +
  "\n</urlset>\n";
fs.writeFileSync(path.join(DIST, "sitemap.xml"), sitemap);

console.log(`Pre-rendered ${routes.length} routes; wrote 404.html and sitemap.xml`);
