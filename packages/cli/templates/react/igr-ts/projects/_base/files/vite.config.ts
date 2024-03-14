/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: process.env.VITEST ? {} : { global: 'window' },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    deps: {
      inline: ['vitest-canvas-mock'],
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
