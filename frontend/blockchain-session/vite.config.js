import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get base path from environment variable or use default
// For GitHub Pages: set VITE_BASE_PATH to your repository name (e.g., '/repo-name/')
// For local development: leave empty or use '/'
const basePath = process.env.VITE_BASE_PATH || '/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basePath,
  server: {
    port: 5173,
    host: true,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  preview: {
    port: 4173,
    open: true // Automatically open browser
  }
})
