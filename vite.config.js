import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  ssr: {
    // Only used by the build-time pre-render (src/entry-server.jsx).
    // These packages ship CommonJS, which Node's ESM loader can't import the
    // way the app does (named / default imports), so bundle them instead.
    noExternal: [
      'react-helmet-async',
      'react-countup',
      'countup.js',
      'react-intersection-observer',
      '@react-google-maps/api',
      'emailjs-com',
      'aos',
    ],
  },
})
