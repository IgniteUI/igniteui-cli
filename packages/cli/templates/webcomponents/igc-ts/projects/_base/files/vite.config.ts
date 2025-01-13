import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import babel from 'vite-plugin-babel';
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
    target: 'esnext',
    minify: 'terser',
    emptyOutDir: false,
  },
  plugins: [
    /** Copy static assets */
    viteStaticCopy({
      targets: [
        { src: 'src/assets', dest: 'src' },
      ],
    }),
    /** HTML Plugin with service worker injection */
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
        },
      },
    }),
    /** Babel Plugin for JS transpilation */
    babel({
      babelConfig: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: [
                'last 3 Chrome major versions',
                'last 3 Firefox major versions',
                'last 3 Edge major versions',
                'last 3 Safari major versions',
              ],
              modules: false,
              bugfixes: true,
            },
          ],
        ],
        plugins: [
          [
            'babel-plugin-template-html-minifier',
            {
              modules: { lit: ['html', { name: 'css', encapsulation: 'style' }] },
              failOnError: false,
              strictCSS: true,
              htmlMinifier: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                removeComments: true,
                caseSensitive: true,
                minifyCSS: true,
              },
            },
          ],
        ],
      },
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
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
      },
    }),
  ],
});
