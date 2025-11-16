import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simplified, Vite 5-compatible config
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    cors: true,
  },
})
