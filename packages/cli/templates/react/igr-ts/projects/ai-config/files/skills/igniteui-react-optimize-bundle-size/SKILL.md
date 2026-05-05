---
name: igniteui-react-optimize-bundle-size
description: This skill optimizes application bundle size when using Ignite UI for React and should be used when the bundle is too large, when setting up tree-shaking, or when lazy loading heavy components like grids and charts
user-invocable: true
---

# Optimize Bundle Size

This skill helps users minimize their React application's bundle size when using Ignite UI for React by importing only the components they need, leveraging tree-shaking, and applying lazy loading strategies.

## Example Usage

- "My bundle size is too large"
- "How do I reduce the size of igniteui-react?"
- "Import only the components I need"
- "Tree-shake unused components"
- "Optimize imports for production"
- "How do I lazy load the data grid?"

## Related Skills

- [igniteui-react-components](../igniteui-react-components/SKILL.md) — Choose only the components you need and set up your React project
- [igniteui-react-customize-theme](../igniteui-react-customize-theme/SKILL.md) — Theming after optimization

## When to Use

- Application bundle size is too large
- User wants to optimize for production
- User is importing more components than needed
- User asks about tree-shaking or optimization
- User wants to improve load times
- User wants to code-split heavy components like grids or charts

---

## Key Principles

1. **Install only the packages you need** — don't install `igniteui-react-grids` if you only use core UI components
2. **Use named imports** — enable tree-shaking by importing specific components
3. **Lazy load heavy components** — use `React.lazy` + `Suspense` for grids, charts, and other large components
4. **Analyze your bundle** — use tools to identify what's being included

---

## Granular Package Imports

Only install the packages you actually use:

| Package | Contains | Install only if you need… |
|---|---|---|
| `igniteui-react` | Buttons, inputs, dialogs, calendars, lists, etc. | Core UI components |
| `igniteui-react` + `igniteui-grid-lite` | Lightweight grid (`IgrGridLite` from `igniteui-react/grid-lite`) | Simple tabular data (MIT, requires both packages) |
| `igniteui-react-grids` | DataGrid, TreeGrid, PivotGrid, HierarchicalGrid | Advanced data grids (commercial) |
| `igniteui-react-charts` | Category, Pie, Financial, Scatter charts | Charts and data visualization (commercial) |
| `igniteui-react-maps` | Geographic maps | Map visualizations (commercial) |
| `igniteui-react-gauges` | Radial and linear gauges | Gauge indicators (commercial) |

```bash
# Only install what you need:
npm install igniteui-react                # Core UI only
npm install igniteui-react-grids          # Only if you need advanced grids
npm install igniteui-react-charts         # Only if you need charts
```

---

## Import Strategies

### ❌ Bad: Wildcard / Barrel Imports

```tsx
// DON'T DO THIS — imports everything from the package
import * as IgniteUI from 'igniteui-react';

function App() {
  return <IgniteUI.IgrButton>Click</IgniteUI.IgrButton>;
}
```

**Impact:** Tree-shaking cannot eliminate unused components.

### ✅ Good: Named Imports

```tsx
// DO THIS — import only what you use
import { IgrButton, IgrInput, IgrCard } from 'igniteui-react';

function App() {
  return (
    <div>
      <IgrInput label="Name" />
      <IgrButton><span>Submit</span></IgrButton>
      <IgrCard>Content</IgrCard>
    </div>
  );
}
```

**Impact:** Bundle includes only the three components and their dependencies. Tree-shaking removes everything else.

---

## Lazy Loading with `React.lazy` + `Suspense`

Code-split heavy components behind lazy imports to reduce initial bundle size.

### Lazy Loading a Single Component

```tsx
import { lazy, Suspense, useState } from 'react';

// Lazy load the dialog component
const IgrDialog = lazy(() =>
  import('igniteui-react').then(module => ({ default: module.IgrDialog }))
);

function App() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <button onClick={() => setShowDialog(true)}>Open Dialog</button>
      {showDialog && (
        <Suspense fallback={<div>Loading...</div>}>
          <IgrDialog open title="Hello">
            <p>Lazy loaded dialog content</p>
          </IgrDialog>
        </Suspense>
      )}
    </>
  );
}
```

### Lazy Loading a Heavy Page Component

This is the recommended approach for code-splitting: wrap entire page components that use heavy Ignite UI components.

```tsx
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/Home'));
const DashboardPage = lazy(() => import('./pages/Dashboard'));
const AnalyticsPage = lazy(() => import('./pages/Analytics'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

```tsx
// pages/Dashboard.tsx — only loaded when navigating to /dashboard
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

export default function Dashboard() {
  return (
    <IgrGrid data={data} autoGenerate={false}>
      <IgrColumn field="name" header="Name" />
      <IgrColumn field="value" header="Value" />
    </IgrGrid>
  );
}
```

```tsx
// pages/Analytics.tsx — only loaded when navigating to /analytics
import { IgrCategoryChart, IgrCategoryChartModule } from 'igniteui-react-charts';

IgrCategoryChartModule.register();

export default function Analytics() {
  return <IgrCategoryChart dataSource={data} width="100%" height="500px" />;
}
```

**Result:** The grid and chart bundles are only downloaded when the user navigates to those routes.

---

## Analyzing Your Bundle

### Using Vite's Rollup Visualizer

```bash
npm install --save-dev rollup-plugin-visualizer
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ]
});
```

```bash
npm run build
# Opens stats.html automatically — inspect which igniteui-react modules are included
```

### Using Webpack Bundle Analyzer

```bash
npm install --save-dev webpack-bundle-analyzer
```

```javascript
// webpack.config.js (or CRA with react-app-rewired)
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle-report.html'
    })
  ]
};
```

### Using source-map-explorer

```bash
npm install --save-dev source-map-explorer
```

```json
{
  "scripts": {
    "analyze": "source-map-explorer 'dist/**/*.js'"
  }
}
```

```bash
npm run build
npm run analyze
```

**What to look for:** Check if `igniteui-react-grids` or `igniteui-react-charts` appear in the initial bundle even though they're only used on specific routes.

---

## Audit Your Component Usage

### 1. Find What Components You're Actually Using

```bash
# Search for Igr component usage in your source files
grep -roh "Igr[A-Z][a-zA-Z]*" src/ --include="*.tsx" --include="*.ts" | sort | uniq

# Example output:
# IgrButton
# IgrCard
# IgrInput
```

### 2. Compare with Your Imports

```bash
# Find all import statements from igniteui-react packages
grep -r "from 'igniteui-react" src/ --include="*.tsx" --include="*.ts"
```

### 3. Remove Unused Imports

```tsx
// Before: 5 components imported
import { IgrButton, IgrInput, IgrCard, IgrSelect, IgrCombo } from 'igniteui-react';

// After audit: only 3 are actually used in JSX
import { IgrButton, IgrInput, IgrCard } from 'igniteui-react';
```

---

## Build Configuration Optimizations

### Vite Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'igniteui-core': ['igniteui-react'],
          // Only include if you use these packages:
          // 'igniteui-grids': ['igniteui-react-grids'],
          // 'igniteui-charts': ['igniteui-react-charts'],
        }
      }
    },
    chunkSizeWarningLimit: 600,
  },
  optimizeDeps: {
    include: ['igniteui-react']
  }
});
```

### Webpack Configuration

```javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        igniteui: {
          test: /[\\/]node_modules[\\/]igniteui-react[\\/]/,
          name: 'igniteui',
          priority: 20,
        },
        igniteuiGrids: {
          test: /[\\/]node_modules[\\/]igniteui-react-grids[\\/]/,
          name: 'igniteui-grids',
          priority: 20,
        }
      }
    },
    minimize: true,
  },
  mode: 'production',
};
```

---

## Best Practices Checklist

- [ ] **Install only the packages you need** — don't install `igniteui-react-grids` if you only use buttons and inputs
- [ ] **Use named imports** — `import { IgrButton } from 'igniteui-react'`, not `import * as`
- [ ] **Don't import from `igniteui-webcomponents` directly** — use the `igniteui-react` wrappers
- [ ] **Lazy load heavy components** — use `React.lazy` + `Suspense` for grids, charts, and dialogs
- [ ] **Split by routes** — load component-heavy pages only when navigated to
- [ ] **Audit your imports regularly** — remove unused components
- [ ] **Analyze your bundle** — use bundle analyzer tools to verify tree-shaking is working
- [ ] **Minify in production** — ensure build tool minification is enabled
- [ ] **Use compression** — enable gzip/brotli on your server

---

## Common Issues & Solutions

### Issue: Bundle still large after using named imports

**Investigate:**
1. Check if you're importing from `igniteui-webcomponents` instead of `igniteui-react`
2. Verify tree-shaking is working (check build output with a bundle analyzer)
3. Look for barrel imports (`import * as`)
4. Check if large packages like `igniteui-react-grids` are in the initial bundle instead of being lazy loaded

### Issue: Lazy loaded component flashes or shows fallback too long

**Solution:** Preload the component on hover or route prefetch:

```tsx
const DashboardPage = lazy(() => import('./pages/Dashboard'));

// Preload on hover
function NavLink() {
  const preload = () => { import('./pages/Dashboard'); };
  return <a href="/dashboard" onMouseEnter={preload}>Dashboard</a>;
}
```

### Issue: Tree-shaking not working

**Cause:** Using `require()` instead of `import`, or a build tool that doesn't support ES module tree-shaking.

**Solution:** Ensure your project uses ES modules:

```json
// tsconfig.json
{
  "compilerOptions": {
    "module": "esnext",
    "moduleResolution": "bundler"
  }
}
```

---

## Expected Results

After optimization, you should see:

- **Initial load time reduced** by 40–60%
- **Bundle size reduced** by 50–80% (compared to importing everything)
- **Better Core Web Vitals** scores
- **Faster time to interactive**
- **Lower bandwidth usage** for users

## Additional Resources

- [Vite Build Optimizations](https://vitejs.dev/guide/build.html)
- [React.lazy Documentation](https://react.dev/reference/react/lazy)
- [Webpack Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
- [Web Performance Optimization](https://web.dev/fast/)
- [Bundle Size Analysis Tools](https://bundlephobia.com/)
