/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright'
import angular from '@analogjs/vite-plugin-angular';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [angular()],
  test: {
    globals: true,
    setupFiles: ['./src/test.ts'],
    include: ['src/**/*.spec.ts'],
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        {
          browser: 'chromium'
        },
      ],
    }
  },
  resolve: {
    mainFields: ['module'],
    alias: {
      'igniteui-theming': path.resolve(__dirname, 'node_modules/igniteui-theming')
    }
  },
  server: {
    open: true,
    port: 3003
  }
})
