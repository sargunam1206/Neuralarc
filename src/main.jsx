import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import './index.css'
import App from './App.jsx'

const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
)

// Pre-rendered pages (see scripts/prerender.mjs) already contain the page's
// HTML, so React hydrates it. 404.html is served for many different URLs, so
// it's rendered from scratch for whatever URL the visitor actually opened.
const root = document.getElementById('root')
if (root.hasChildNodes() && !root.hasAttribute('data-not-found')) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
