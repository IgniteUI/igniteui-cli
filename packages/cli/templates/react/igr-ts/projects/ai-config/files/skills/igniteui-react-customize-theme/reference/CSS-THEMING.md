# CSS Theming

This guide covers theming Ignite UI for React using CSS custom properties — works in any project without additional build tooling.

## Pre-built Themes

Import a pre-built CSS file in your React entry point:

```tsx
// main.tsx or index.tsx
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

> **CRITICAL:** Theme CSS imports are **required** for components to render correctly.

**For grids**, you **must also** import the grid theme CSS:

```tsx
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
```

### Available Pre-built CSS Files

| Import path | Theme |
|---|---|
| `igniteui-webcomponents/themes/light/bootstrap.css` | Bootstrap Light |
| `igniteui-webcomponents/themes/dark/bootstrap.css` | Bootstrap Dark |
| `igniteui-webcomponents/themes/light/material.css` | Material Light |
| `igniteui-webcomponents/themes/dark/material.css` | Material Dark |
| `igniteui-webcomponents/themes/light/fluent.css` | Fluent Light |
| `igniteui-webcomponents/themes/dark/fluent.css` | Fluent Dark |
| `igniteui-webcomponents/themes/light/indigo.css` | Indigo Light |
| `igniteui-webcomponents/themes/dark/indigo.css` | Indigo Dark |

Grid theme CSS files follow the same pattern under `igniteui-react-grids/grids/themes/`.

### Next.js

In Next.js, import the theme CSS in each client component file or in a shared root layout:

```tsx
// app/layout.tsx
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## Custom Theme via CSS Custom Properties

After importing a pre-built theme, override individual design tokens with CSS custom properties.

### Global Overrides (in your CSS file)

```css
/* src/index.css */
:root {
  --ig-primary-h: 211deg;
  --ig-primary-s: 100%;
  --ig-primary-l: 50%;

  --ig-secondary-h: 33deg;
  --ig-secondary-s: 100%;
  --ig-secondary-l: 50%;
}
```

Import it in your entry point:

```tsx
// main.tsx
import 'igniteui-webcomponents/themes/light/bootstrap.css'; // Theme first
import './index.css'; // Overrides — must come after the theme import
```

### Scoped Overrides

Use a CSS class to scope theme overrides to a specific container:

```css
/* src/AdminPanel.css */
.admin-panel {
  --ig-primary-h: 260deg;
  --ig-primary-s: 60%;
  --ig-primary-l: 45%;
}
```

```tsx
// AdminPanel.tsx
import './AdminPanel.css';
import { IgrButton, IgrInput } from 'igniteui-react';

function AdminPanel() {
  return (
    <div className="admin-panel">
      <IgrInput label="Admin Search" />
      <IgrButton>Save</IgrButton>
    </div>
  );
}
```

### CSS Modules

```css
/* AdminPanel.module.css */
.panel {
  --ig-primary-h: 260deg;
  --ig-primary-s: 60%;
  --ig-primary-l: 45%;
}
```

```tsx
import styles from './AdminPanel.module.css';
import { IgrButton } from 'igniteui-react';

function AdminPanel() {
  return (
    <div className={styles.panel}>
      <IgrButton>Save</IgrButton>
    </div>
  );
}
```

### Inline Styles on a Wrapper

For truly dynamic one-off overrides:

```tsx
<div style={{ '--ig-primary-h': '260deg', '--ig-primary-s': '60%', '--ig-primary-l': '45%' } as React.CSSProperties}>
  <IgrButton>Custom Color Button</IgrButton>
</div>
```

> **Note:** TypeScript requires the `as React.CSSProperties` cast. Prefer CSS classes when possible.

## Component-Level Theming

Override individual component appearance using CSS custom properties.

```css
/* Target the Ignite UI web component tag name */
igc-avatar {
  --ig-avatar-background: var(--ig-primary-500);
  --ig-avatar-color: var(--ig-primary-500-contrast);
}

igc-button {
  --ig-button-foreground: var(--ig-secondary-500);
}
```

> **IMPORTANT — No Hardcoded Colors**
>
> ✅ **Right:** `--ig-avatar-background: var(--ig-primary-500);`
> ❌ **Wrong:** `--ig-avatar-background: #E91E63;`

### CSS `::part()` Selectors

Use `::part()` selectors to style shadow DOM internal elements:

```css
igc-input::part(input) {
  font-size: 1.1rem;
}

igc-card::part(header) {
  padding: 1rem;
}
```

> **Note:** In CSS, use web component tag names (`igc-input`), not React component names (`IgrInput`).

## Layout Controls

### Sizing

```css
:root { --ig-size: 2; }  /* 1 = small, 2 = medium, 3 = large */
igc-button { --ig-size: 1; }
```

### Spacing

```css
:root { --ig-spacing: 1; }  /* 0.5 = compact, 1 = default, 2 = spacious */
.compact-section { --ig-spacing: 0.75; }
```

### Roundness

```css
:root { --ig-radius-factor: 1; }  /* 0 = square, 1 = maximum radius */
igc-avatar { --ig-radius-factor: 0.5; }
```

## Switching Between Light and Dark Themes

### Approach 1: CSS class toggle

```tsx
import { useState } from 'react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './theme-overrides.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark-theme' : ''}>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
    </div>
  );
}
```

```css
/* theme-overrides.css */
.dark-theme {
  --ig-surface-h: 0deg;
  --ig-surface-s: 0%;
  --ig-surface-l: 7%;

  --ig-gray-h: 0deg;
  --ig-gray-s: 0%;
  --ig-gray-l: 100%;
}
```

### Approach 2: CSS media query

```css
@media (prefers-color-scheme: dark) {
  :root {
    --ig-surface-h: 0deg;
    --ig-surface-s: 0%;
    --ig-surface-l: 7%;
  }
}
```

### Approach 3: Dynamically swap theme stylesheet

```tsx
import { useEffect } from 'react';

function useTheme(variant: 'light' | 'dark', design = 'bootstrap') {
  useEffect(() => {
    const link = document.getElementById('igc-theme') as HTMLLinkElement;
    if (link) {
      link.href = `node_modules/igniteui-webcomponents/themes/${variant}/${design}.css`;
    }
  }, [variant, design]);
}
```
