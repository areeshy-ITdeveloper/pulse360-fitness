import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pulse360-fitness/', // Repository ka exact name
  server: {
    port: 8080,
  }
})