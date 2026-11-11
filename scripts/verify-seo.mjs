// Checks the pre-rendered build in dist/ (run `npm run build` first):
//   npm run verify:seo
// Exits non-zero if any page is missing SEO essentials. This checks the files
// we ship; it can't tell you whether Google has crawled or indexed them.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://www.neuralarc.com";
const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");

const failures = [];
const fail = (page, msg) => failures.push(`${page}: ${msg}`);
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const text = (html) => decode(html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ");

// Pages = sitemap entries; every one must have a pre-rendered file.
const sitemap = fs.readFileSync(path.join(DIST, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) fail("sitemap.xml", "no <loc> entries");
const routes = urls.map((u) => {
  if (!u.startsWith(SITE)) fail("sitemap.xml", `non-canonical URL ${u}`);
  return u.slice(SITE.length) || "/";
});
const fileFor = (route) => path.join(DIST, route === "/" ? "index.html" : `${route.slice(1)}.html`);

const robots = fs.readFileSync(path.join(DIST, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail("robots.txt", "missing Sitemap line");
if (/^\s*Disallow:\s*\/\s*$/m.test(robots)) fail("robots.txt", "blocks the whole site");

const titles = new Map();
const descriptions = new Map();
const pages = {};

for (const route of routes) {
  const file = fileFor(route);
  if (!fs.existsSync(file)) { fail(route, "no pre-rendered HTML file"); continue; }
  const html = fs.readFileSync(file, "utf8");
  pages[route] = html;

  const titleTags = html.match(/<title[^>]*>[\s\S]*?<\/title>/g) || [];
  if (titleTags.length !== 1) fail(route, `${titleTags.length} <title> tags`);
  const title = decode((titleTags[0] || "").replace(/<[^>]+>/g, "").trim());
  if (!title || title === "NeuralArc") fail(route, "generic or empty title");
  if (title.length > 70) fail(route, `title is ${title.length} chars (keep under ~70)`);
  titles.set(title, [...(titles.get(title) || []), route]);

  const desc = decode((html.match(/<meta[^>]*name="description" content="([^"]*)"/) || [])[1] || "");
  if (desc.length < 50) fail(route, "missing or very short meta description");
  descriptions.set(desc, [...(descriptions.get(desc) || []), route]);

  const canonical = (html.match(/rel="canonical" href="([^"]*)"/g) || []);
  if (canonical.length !== 1) fail(route, `${canonical.length} canonical tags`);
  else if (!canonical[0].includes(`"${SITE}${route === "/" ? "/" : route}"`)) fail(route, `canonical ${canonical[0]} doesn't match page URL`);

  for (const tag of ["og:title", "og:description", "og:url", "og:image", "twitter:card"]) {
    if (!html.includes(`"${tag}"`)) fail(route, `missing ${tag}`);
  }

  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) fail(route, `${h1s.length} <h1> elements`);

  const body = (html.match(/<div id="root">([\s\S]*)<\/div>\s*<\/body>/) || [])[1] || "";
  if (text(body).length < 300) fail(route, "very little visible text in the initial HTML");

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { fail(route, `invalid JSON-LD: ${e.message}`); }
  }

  for (const m of body.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="[^"]+"/.test(m[0]) && !/aria-hidden="true"|\salt=""/.test(m[0])) fail(route, `image without alt text: ${m[0].slice(0, 80)}`);
  }
}

for (const [title, r] of titles) if (r.length > 1) fail(r.join(", "), `duplicate title "${title}"`);
for (const [desc, r] of descriptions) if (desc && r.length > 1) fail(r.join(", "), "duplicate meta description");

// Internal links must point at a pre-rendered page (or a real file).
const known = new Set(routes);
for (const [route, html] of Object.entries(pages)) {
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = m[1] === "/" ? "/" : m[1].replace(/\/$/, "");
    if (known.has(href) || fs.existsSync(path.join(DIST, href))) continue;
    fail(route, `link to unknown page ${href}`);
  }
}

// Keyword placement for the primary targets.
const expect = (route, phrase, where) => {
  const html = pages[route] || "";
  const scope = where === "title" ? (html.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1] || ""
    : where === "h1" ? (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || ""
    : html;
  if (!text(scope).toLowerCase().includes(phrase.toLowerCase())) fail(route, `"${phrase}" not in ${where}`);
};
expect("/services/iot", "IoT Solutions in Coimbatore", "title");
expect("/services/iot", "IoT Solutions in Coimbatore", "h1");
expect("/services/iot", "Industrial IoT", "page");
expect("/", "IoT Development Company in Coimbatore", "title");
expect("/", "IoT Development Company in Coimbatore", "h1");

console.log(`Checked ${routes.length} pages from sitemap.xml`);
if (failures.length) {
  console.error(`\n${failures.length} problem(s):\n  ` + failures.join("\n  "));
  process.exit(1);
}
console.log("All SEO checks passed.");
