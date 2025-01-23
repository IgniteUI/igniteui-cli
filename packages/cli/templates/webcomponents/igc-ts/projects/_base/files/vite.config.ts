import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[hash].js',
        chunkFileNames: '[hash].js',
        assetFileNames: '[hash][extname]',
      },
      onwarn: (warning, warn) => {
        if (warning.code === 'THIS_IS_UNDEFINED') return;
        warn(warning);
      },
    },
    target: 'es2021',
    minify: 'terser',
    emptyOutDir: false,
  },
  plugins: [
    /** Copy static assets */
    viteStaticCopy({
      targets: [
        { src: 'src/assets', dest: 'src' },
      ],
      silent: true,
    }),
    /** PWA Plugin for service worker generation */
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      workbox: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{html,js,css,webmanifest}'],
        globIgnores: ['polyfills/*.js', 'nomodule-*.js'],
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: /^polyfills\/.*\.js$/,
            handler: 'CacheFirst',
          },
        ],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024 // 10 MB
      },
    }),
  ],
});
