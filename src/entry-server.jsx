// Build-time renderer used by scripts/prerender.mjs — never shipped to the
// browser. `vite build --ssr src/entry-server.jsx` bundles it to dist-ssr/.

import { PassThrough } from "node:stream";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";
import servicesData from "./data/servicesData";
import productsData from "./data/productsData";
import technologiesData from "./data/technologiesData";
import trainingData from "./data/trainingData";
import blogData from "./data/blogData";
import caseStudiesData from "./data/caseStudiesData";

/** Render one route to HTML, waiting for lazy page chunks to resolve. */
export async function render(url) {
  const helmetContext = {};
  const errors = [];
  const { prelude } = await prerenderToNodeStream(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
    // Collect instead of only logging, so the build fails on a broken page.
    { onError: (error) => { errors.push(error); } }
  );
  if (errors.length) throw new Error(`Render failed for ${url}: ${errors[0].message}`);
  const chunks = [];
  for await (const chunk of prelude.pipe(new PassThrough())) chunks.push(chunk);
  return { html: Buffer.concat(chunks).toString("utf8"), helmet: helmetContext.helmet };
}

// One entry per public page. `crumbs` drives BreadcrumbList structured data,
// `image` the social-share image, `service` the Service structured data.
const section = (name, path) => ({ name, path });
const SOLUTIONS = section("Solutions", "/Services");
const PRODUCTS = section("Products", "/Productes");
const TRAINING = section("Training", "/TrainingList");
const BLOG = section("Blog", "/blog");
const CASE_STUDIES = section("Case Studies", "/case-studies");

export function getRoutes() {
  return [
    { path: "/" },
    { path: "/about", crumbs: [section("About", "/about")] },
    { path: "/Services", crumbs: [SOLUTIONS] },
    ...servicesData.map((s) => ({
      path: `/services/${s.slug}`,
      crumbs: [SOLUTIONS, section(s.title, `/services/${s.slug}`)],
      service: { name: s.title, description: s.metaDescription || s.shortDescription },
    })),
    { path: "/Productes", crumbs: [PRODUCTS] },
    ...productsData.map((p) => ({
      path: `/products/${p.slug}`,
      crumbs: [PRODUCTS, section(p.name, `/products/${p.slug}`)],
      image: p.image,
    })),
    ...technologiesData.map((t) => ({
      path: `/technologies/${t.slug}`,
      crumbs: [section(t.name, `/technologies/${t.slug}`)],
    })),
    { path: "/TrainingList", crumbs: [TRAINING] },
    ...trainingData.map((c) => ({
      path: `/training/${c.slug}`,
      crumbs: [TRAINING, section(c.title, `/training/${c.slug}`)],
      image: c.image,
    })),
    { path: "/blog", crumbs: [BLOG] },
    ...blogData.map((b) => ({
      path: `/blog/${b.slug}`,
      crumbs: [BLOG, section(b.title, `/blog/${b.slug}`)],
      image: b.image,
    })),
    { path: "/case-studies", crumbs: [CASE_STUDIES] },
    ...caseStudiesData.map((cs) => ({
      path: `/case-studies/${cs.slug}`,
      crumbs: [CASE_STUDIES, section(cs.title, `/case-studies/${cs.slug}`)],
      image: cs.image,
    })),
    { path: "/why-choose-us/industry-leading-solutions", crumbs: [section("Industry-Leading Solutions", "/why-choose-us/industry-leading-solutions")] },
    { path: "/why-choose-us/products", crumbs: [section("Our Products", "/why-choose-us/products")] },
    { path: "/why-choose-us/clients", crumbs: [section("Our Clients", "/why-choose-us/clients")] },
    { path: "/why-choose-us/global-reach", crumbs: [section("Global Reach", "/why-choose-us/global-reach")] },
    { path: "/Gallery", crumbs: [section("Gallery", "/Gallery")] },
    { path: "/contact", crumbs: [section("Contact", "/contact")] },
    { path: "/terms-of-service", crumbs: [section("Terms of Service", "/terms-of-service")] },
    { path: "/privacy-notice", crumbs: [section("Privacy Notice", "/privacy-notice")] },
  ];
}
