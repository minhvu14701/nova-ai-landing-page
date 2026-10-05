import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths so the build works at a domain root (Vercel, Cloudflare Pages)
  // and inside a sub-folder on a plain static server (e.g. nginx).
  base: './',
  plugins: [react(), tailwindcss()],
})
