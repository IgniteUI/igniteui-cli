import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 10 * 1024 * 1024, // 10 MB
  },
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }]
    }
  },
  resolve: {
    mainFields: ['module'],
  },
  server: {
    open: true,
    port: 3003
  }
})
