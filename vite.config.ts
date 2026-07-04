import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base must match your GitHub Pages repo name, e.g. https://<user>.github.io/<repo>/
export default defineConfig({
  base: '/Traumreise/',
  plugins: [react(), tailwindcss()],
})
