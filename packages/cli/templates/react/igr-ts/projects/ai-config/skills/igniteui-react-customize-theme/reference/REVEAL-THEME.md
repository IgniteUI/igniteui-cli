# Reveal SDK Theme Sync

When the project includes Reveal SDK (`reveal-sdk-wrappers-react`) alongside Ignite UI for React, the Reveal dashboard theme should be synced with the active Ignite UI theme.

> **⚠️ IMPORTANT:** Reveal SDK requires client runtime scripts (jQuery, Day.js, infragistics.reveal.js) to be loaded and initialization must happen in `useEffect` after mount. See [REVEAL-SDK.md](../../igniteui-react-components/reference/REVEAL-SDK.md) for full setup instructions.

## How It Works

Ignite UI themes expose CSS custom properties (`--ig-font-family`, `--ig-surface-500`, `--ig-gray-100`, etc.) on the page. The Reveal SDK has its own `$.ig.RevealTheme` object that controls dashboard appearance. The sync function reads the Ignite UI tokens from computed styles and maps them to Reveal's theme properties.

## Reveal Theme Sync Function

Call this function in `useEffect` when initializing a component that uses Reveal. Always guard against missing `$` and `$.ig`:

```tsx
import { useEffect } from 'react';

declare const $: any;

function setRevealTheme() {
  // Guard: Ensure Reveal runtime is loaded
  if (typeof $ === 'undefined' || !$.ig) {
    console.error('Reveal SDK runtime not loaded.');
    return;
  }

  const style = window.getComputedStyle(document.body);
  const theme = new $.ig.RevealTheme();

  // 1. Sync fonts with the Ignite UI --ig-font-family token
  theme.regularFont = style.getPropertyValue('--ig-font-family')?.trim() || 'sans-serif';
  theme.mediumFont = theme.regularFont;
  theme.boldFont = theme.regularFont;

  // 2. Auto-detect light/dark from surface color brightness
  const color = style.getPropertyValue('--ig-surface-500').trim() || '#fff';
  const [r, g, b] = [1, 3, 5].map(i => parseInt(color.substring(i, i + 2), 16));
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  theme.isDark = brightness < 128;
  theme.fontColor = theme.isDark ? 'white' : 'black';

  // 3. Sync background colors with Ignite UI palette tokens
  theme.dashboardBackgroundColor = style.getPropertyValue('--ig-gray-100').trim();
  theme.visualizationBackgroundColor = style.getPropertyValue('--ig-surface-500').trim();

  $.ig.RevealSdkSettings.theme = theme;
}

// Example usage in a component
function DashboardView() {
  useEffect(() => {
    // Initialize theme sync after mount
    setRevealTheme();
  }, []);

  // ... component implementation
}
```

## Token Mapping Reference

| Reveal Theme Property | Ignite UI CSS Token | Purpose |
|---|---|---|
| `regularFont`, `mediumFont`, `boldFont` | `--ig-font-family` | Font family |
| `isDark` | Computed from `--ig-surface-500` brightness | Light/dark mode detection |
| `fontColor` | Derived from `isDark` | Text color (white for dark, black for light) |
| `dashboardBackgroundColor` | `--ig-gray-100` | Dashboard background |
| `visualizationBackgroundColor` | `--ig-surface-500` | Individual visualization card background |

## Re-syncing After Theme Switch

When the user switches between light and dark Ignite UI themes, call `setRevealTheme()` again to update the Reveal dashboard:

```tsx
function handleThemeToggle() {
  // ... toggle Ignite UI theme (e.g., swap CSS imports)
  
  // Re-sync Reveal theme after DOM updates
  requestAnimationFrame(() => {
    setRevealTheme();
  });
}
```

See the [components skill](../../igniteui-react-components/reference/REVEAL-SDK.md) for full Reveal SDK setup instructions including installation, runtime scripts, and `$.ig.RevealView` initialization.
