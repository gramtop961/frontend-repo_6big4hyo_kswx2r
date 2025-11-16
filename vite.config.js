import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 5 config with explicit allowedHosts for the preview domain
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    cors: true,
    // Allow the Modal preview hosts (dynamic subdomains) to access the dev server
    // Include both exact host (if present via env) and wildcard-style suffixes
    allowedHosts: [
      // Common Modal domains used for previews
      '.modal.host',
      '.modal.run',
      // Fallback: explicitly allow the current preview hostname if Vite performs exact matching
      'ta-01ka6kkbwaax96zqazsvjqh407-3000.wo-zlgecfl1vj6lieiy7uxqrr.w.modal.host'
    ],
  },
})
