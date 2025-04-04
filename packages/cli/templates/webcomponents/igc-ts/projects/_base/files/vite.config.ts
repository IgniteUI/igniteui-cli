import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import fs from 'fs';
import path from 'path';

const themeColors = ["light", "dark"];
const themeTypes = ["material", "bootstrap", "indigo", "fluent"];
const basePaths = [
  "node_modules/igniteui-webcomponents-grids/grids/themes",
  "node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes"
];
const themeFiles = themeColors.flatMap(color =>
  themeTypes.flatMap(theme => basePaths.map(basePath => `${basePath}/${color}/${theme}.css`))
).filter(fs.existsSync);

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
        if (id.endsWith('.js')) {
          themeFiles.forEach(t => { code = code.replaceAll(t, `../../${path.basename(t)}`); });
          return code;
        }
      }
    },
    /** Copy static assets */
    viteStaticCopy({
      targets: [
        { src: 'src/assets', dest: 'src' },
        { src: 'ig-theme.css', dest: '' },
        ...themeFiles.map(themePath => ({ src: themePath, dest: '' }))
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
