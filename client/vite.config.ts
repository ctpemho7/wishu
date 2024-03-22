import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8001,
    strictPort: true,
  },
  server: {
    port: 8001,
    strictPort: true,
    host: true
  }
})
