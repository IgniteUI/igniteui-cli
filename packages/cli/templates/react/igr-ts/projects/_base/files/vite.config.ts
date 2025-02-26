/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 10 * 1024 * 1024, // 10 MB
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    deps: {
      optimizer: {
        web: {
          include: ['vitest-canvas-mock'],
        },
      },
    },
  },
  resolve: {
    mainFields: ['module'],
  },
  server: {
    open: true,
    port: 3003
  }
})
