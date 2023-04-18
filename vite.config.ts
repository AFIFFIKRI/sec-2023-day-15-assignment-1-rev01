import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sec-2023-day-15-assignment-1-rev01",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})
