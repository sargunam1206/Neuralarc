// Guards public/.htaccess against redirect loops: no 301 rule may match the
// URL of a real page (every page in the generated sitemap), and every rule
// meant for an old address must point at a real page. Run after a build:
//   npm run check:htaccess
// (Approximates Apache's matching: per-directory paths without the leading
// "/", [NC] = case-insensitive. Conditions on rules are ignored, which can
// only make this check stricter.)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://www.neuralarc.com";
const htaccess = fs.readFileSync(path.join(ROOT, "public", ".htaccess"), "utf8");
const sitemap = fs.readFileSync(path.join(ROOT, "dist", "sitemap.xml"), "utf8");
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].slice(SITE.length) || "/");
const pageSet = new Set(pages);

const rules = [...htaccess.matchAll(/^\s*RewriteRule\s+(\S+)\s+(\S+)\s+\[([^\]]+)\]/gm)]
  .map(([line, pattern, target, flags]) => ({ line: line.trim(), pattern, target, flags: flags.split(",") }))
  .filter((r) => r.flags.some((f) => /^R=301$/i.test(f)) && r.pattern !== "^");

const problems = [];
for (const rule of rules) {
  const re = new RegExp(rule.pattern, rule.flags.includes("NC") ? "i" : "");
  for (const page of pages) {
    const subject = page === "/" ? "" : page.slice(1);
    if (re.test(subject)) problems.push(`redirects a real page ${page}: ${rule.line}`);
  }
  if (rule.target.startsWith("/") && !rule.target.includes("$") && !pageSet.has(rule.target)) {
    problems.push(`redirects to ${rule.target}, which is not a page: ${rule.line}`);
  }
}

console.log(`Checked ${rules.length} redirect rules against ${pages.length} pages`);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):\n  ` + problems.join("\n  "));
  process.exit(1);
}
console.log("No redirect rule matches a real page; all fixed targets exist.");
