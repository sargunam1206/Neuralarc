import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";

import './index.css'
import App from './App.jsx'

const rootEl = document.getElementById('root')
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
)

// The prerender step (scripts/prerender.mjs) ships each route's HTML already
// rendered, so production hydrates onto that markup instead of discarding it
// and rendering from scratch. `vite dev` always starts with an empty #root,
// so it falls through to a normal client render exactly as before.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
