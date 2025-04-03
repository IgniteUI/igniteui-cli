import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import fs from 'fs';

const gridMaterialCssPath = [
  'node_modules/igniteui-webcomponents-grids/grids/themes/light/material.css',
  'node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/material.css'
].find(fs.existsSync) || null;

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
    chunkSizeWarningLimit: 10 * 1024 * 1024 // 10 MB
  },
  plugins: [
    {
      name: 'replace-grid-material-css-path',
      apply: 'build',
      transform(code, id) {
        if (gridMaterialCssPath && id.endsWith('.js')) {
          return code.replace(gridMaterialCssPath, '../../material.css');
        }
      }
    },
    /** Copy static assets */
    viteStaticCopy({
      targets: [
        { src: 'src/assets', dest: 'src' },
        { src: 'ig-theme.css', dest: '' },
        ...(gridMaterialCssPath ? [{ src: gridMaterialCssPath, dest: '' }] : [])
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
      manifest: {
        theme_color: "#ffffff"
      }
    }),
  ],
});
