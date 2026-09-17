import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // Aap apni pasand ka port number (e.g. 3000, 8080) yahan likh sakti hain
  }
})