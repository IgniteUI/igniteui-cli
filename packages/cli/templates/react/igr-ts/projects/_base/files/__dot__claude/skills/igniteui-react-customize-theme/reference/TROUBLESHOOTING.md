# Theming Troubleshooting

## Issue: Theme overrides not taking effect

**Cause:** Override CSS is loaded before the theme CSS.

**Solution:** Make sure your custom CSS is imported *after* the theme:

```tsx
// main.tsx
import 'igniteui-webcomponents/themes/light/bootstrap.css'; // Theme first
import './custom-overrides.css'; // Overrides second
```

## Issue: CSS custom properties not recognized by TypeScript in inline styles

**Solution:** Cast to `React.CSSProperties`:

```tsx
<div style={{ '--ig-primary-h': '260deg' } as React.CSSProperties}>
```

## Issue: Component-level CSS selectors don't match

**Cause:** Using React component name instead of web component tag name in CSS.

**Solution:** Use the underlying web component tag name in CSS selectors:

```css
/* ✅ Correct — web component tag */
igc-button { --ig-size: 1; }

/* ❌ Wrong — React wrapper name */
IgrButton { --ig-size: 1; }
```
