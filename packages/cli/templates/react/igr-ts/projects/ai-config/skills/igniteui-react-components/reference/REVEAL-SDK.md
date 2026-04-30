# Reveal SDK Integration

Reveal SDK is a companion product for embedding interactive BI dashboards and data visualizations inside your React application. It requires client-side runtime dependencies, a backend Reveal server, and proper initialization.

> **⚠️ IMPORTANT:** `RvRevealView` is NOT self-sufficient. You must load the Reveal client runtime, configure the backend URL, and initialize Reveal properly using `useEffect` after mount — never in the render phase.

## Step 1: Install Dependencies

```bash
npm install reveal-sdk-wrappers-react reveal-sdk-wrappers
```

## Step 2: Load Reveal Client Runtime

Reveal SDK requires these client-side scripts to be loaded **before** using any Reveal components. Add them to your `index.html` or load them dynamically:

```html
<!-- In public/index.html (or equivalent) -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.5/dayjs.min.js"></script>
<script src="https://dl.revealbi.io/reveal/libs/1.6.4/infragistics.reveal.js"></script>
```

Replace `1.6.4` with your Reveal SDK version.

> **Note:** The Reveal SDK exposes its API through the `$.ig` global namespace. If TypeScript reports that `$` is not defined, add this declaration:
> ```tsx
> declare const $: any;
> ```

## Step 3: Container Sizing (REQUIRED)

Reveal views require a **properly sized container**. Without explicit dimensions, the dashboard will not render:

```css
/* dashboard.module.css */
.reveal-container {
  width: 100%;
  height: 100%;
  min-width: 400px;
  min-height: 400px;
}
```

## Step 4: Basic Integration Pattern

> **⚠️ CRITICAL:** Always initialize Reveal in `useEffect` after the component mounts — never during render. Add guards for missing `$` and `$.ig` to prevent errors if scripts haven't loaded.

```tsx
import { useEffect, useRef } from 'react';
import styles from './dashboard.module.css';

declare const $: any;

export default function DashboardView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealViewRef = useRef<any>(null);

  useEffect(() => {
    // Guard: Ensure Reveal runtime is loaded
    if (typeof $ === 'undefined' || !$.ig) {
      console.error('Reveal SDK runtime not loaded. Ensure jQuery, Day.js, and infragistics.reveal.js are included.');
      return;
    }

    // Guard: Prevent double initialization
    if (revealViewRef.current) {
      return;
    }

    // Guard: Ensure container exists
    if (!containerRef.current) {
      return;
    }

    // Configure Reveal SDK backend URL (REQUIRED)
    $.ig.RevealSdkSettings.setBaseUrl('https://your-reveal-server/reveal-api/');

    // Initialize RevealView with the container element
    revealViewRef.current = new $.ig.RevealView(containerRef.current);

    // Optional: Load a specific dashboard
    // $.ig.RVDashboard.loadDashboard('your-dashboard-id').then((dashboard: any) => {
    //   revealViewRef.current.dashboard = dashboard;
    // });

    // Cleanup on unmount
    return () => {
      if (revealViewRef.current) {
        revealViewRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className={styles['reveal-container']} />;
}
```

## Using RvRevealView Wrapper (Alternative)

The `RvRevealView` wrapper simplifies some boilerplate but still requires proper runtime setup and `useEffect` initialization:

```tsx
import { useEffect } from 'react';
import { RvRevealView } from 'reveal-sdk-wrappers-react';
import { RevealViewOptions } from 'reveal-sdk-wrappers';
import styles from './dashboard.module.css';

declare const $: any;

export default function DashboardView() {
  useEffect(() => {
    // Guard: Ensure Reveal runtime is loaded
    if (typeof $ === 'undefined' || !$.ig) {
      console.error('Reveal SDK runtime not loaded.');
      return;
    }

    // Configure backend URL (REQUIRED) — must be done before render
    $.ig.RevealSdkSettings.setBaseUrl('https://your-reveal-server/reveal-api/');

    // Optional: Apply theme sync with Ignite UI
    setRevealTheme();
  }, []);

  const options: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };

  return (
    <div className={styles['reveal-container']}>
      <RvRevealView options={options} />
    </div>
  );
}

function setRevealTheme() {
  // Guard: Ensure $.ig exists
  if (typeof $ === 'undefined' || !$.ig) return;

  const style = window.getComputedStyle(document.body);
  const theme = new $.ig.RevealTheme();

  // Sync fonts with Ignite UI
  theme.regularFont = style.getPropertyValue('--ig-font-family').trim() || 'sans-serif';
  theme.mediumFont = theme.regularFont;
  theme.boldFont = theme.regularFont;

  // Auto-detect light/dark mode
  const color = style.getPropertyValue('--ig-surface-500').trim() || '#fff';
  const [r, g, b] = [1, 3, 5].map(i => parseInt(color.substring(i, i + 2), 16));
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  theme.isDark = brightness < 128;
  theme.fontColor = theme.isDark ? 'white' : 'black';
  theme.dashboardBackgroundColor = style.getPropertyValue('--ig-gray-100').trim();
  theme.visualizationBackgroundColor = style.getPropertyValue('--ig-surface-500').trim();

  $.ig.RevealSdkSettings.theme = theme;
}
```

## Token Mapping Reference (Theme Sync)

| Reveal Theme Property | Ignite UI CSS Token | Purpose |
|---|---|---|
| `regularFont`, `mediumFont`, `boldFont` | `--ig-font-family` | Font family |
| `isDark` | Computed from `--ig-surface-500` brightness | Light/dark mode detection |
| `fontColor` | Derived from `isDark` | Text color (white for dark, black for light) |
| `dashboardBackgroundColor` | `--ig-gray-100` | Dashboard background |
| `visualizationBackgroundColor` | `--ig-surface-500` | Individual visualization card background |

## Common Issues

### Reveal view is blank or throws errors
- **Cause:** Reveal runtime scripts not loaded (jQuery, Day.js, infragistics.reveal.js)
- **Solution:** Add the required scripts to `index.html` before your React app loads

### `$` or `$.ig` is undefined
- **Cause:** Scripts not loaded or loaded after React component renders
- **Solution:** Ensure scripts are in `<head>` or loaded before React mounts; add guards in `useEffect`

### Dashboard not visible
- **Cause:** Container has no dimensions
- **Solution:** Add explicit `width`, `height`, `min-width`, `min-height` to the container

### Double initialization errors
- **Cause:** `useEffect` running multiple times (Strict Mode) without cleanup
- **Solution:** Use a ref to track initialization state and prevent re-initialization

> **Tip:** When switching between light and dark Ignite UI themes, call `setRevealTheme()` again after the theme change so Reveal dashboards stay in sync.

See the [customize-theme skill](../../igniteui-react-customize-theme/SKILL.md) for more details on Ignite UI CSS custom properties and theme switching.
