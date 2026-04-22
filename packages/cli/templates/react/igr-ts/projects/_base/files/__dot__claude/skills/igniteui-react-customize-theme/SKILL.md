---
name: igniteui-react-customize-theme
description: This skill customizes Ignite UI for React component styling using CSS custom properties, Sass, and the full theming system and should be used when applying brand colors, dark mode, component-level overrides, or scoped themes in a React application
user-invocable: true
---

# Ignite UI for React — Theming Skill

## Description

This skill teaches AI agents how to theme Ignite UI for React applications. Two approaches are supported:

- **CSS custom properties** — works in any project without additional build tooling
- **Sass** — available when the project has Sass configured; provides the full palette/typography/elevation API

The skill also covers component-level theming, layout controls (spacing, sizing, roundness), and how to use the **Ignite UI Theming MCP server** for AI-assisted code generation — all in a React application context.

## Example Usage

- "How do I change the primary color in my Ignite UI React app?"
- "Apply a dark theme to my React app"
- "Customize the grid header colors"
- "How do I scope a theme to a specific section of my React app?"
- "Set up Material Design theming for Ignite UI components"

## Prerequisites

- A React project with `igniteui-react` installed
- A theme CSS file imported in your entry point (see [igniteui-react-components](../igniteui-react-components/SKILL.md))
- **Optional**: Sass configured in the project (enables the Sass-based theming API)
- **Optional**: The **Ignite UI Theming MCP server** (`igniteui-theming`) for AI-assisted code generation

## Related Skills

- [igniteui-react-components](../igniteui-react-components/SKILL.md) — Choose the right components and set up your React project
- [igniteui-react-optimize-bundle-size](../igniteui-react-optimize-bundle-size/SKILL.md) — Optimize after theming

## When to Use

- Applying custom brand colors or a dark theme to an Ignite UI React app
- Overriding individual component styles (e.g., grid header color, button appearance)
- Switching between light and dark mode in a React app
- Scoping different themes to different sections of a React app
- Setting up the Ignite UI Theming MCP server for AI-assisted theming

---

## Content Guide

This skill is organized into focused sections. Refer to the appropriate file for detailed instructions:

| Topic | File | When to Use |
|---|---|---|
| CSS Theming | [CSS-THEMING.md](./reference/CSS-THEMING.md) | Pre-built themes, CSS custom properties, scoped overrides, layout controls, light/dark switching |
| Sass Theming | [SASS-THEMING.md](./reference/SASS-THEMING.md) | Sass-based theming with palette(), component theme functions |
| MCP Server | [MCP-SERVER.md](./reference/MCP-SERVER.md) | AI-assisted theming code generation |
| Troubleshooting | [TROUBLESHOOTING.md](./reference/TROUBLESHOOTING.md) | Common issues and solutions |

---

## Quick Start

### 1. Import a Pre-built Theme (REQUIRED)

```tsx
// main.tsx
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

**For grids**, also import:

```tsx
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
```

### 2. Override with CSS Custom Properties

```css
/* src/index.css */
:root {
  --ig-primary-h: 211deg;
  --ig-primary-s: 100%;
  --ig-primary-l: 50%;
}
```

```tsx
// main.tsx
import 'igniteui-webcomponents/themes/light/bootstrap.css'; // Theme first
import './index.css'; // Overrides second
```

---

## Theming Architecture

The Ignite UI theming system is built on four pillars:

| Concept | Purpose |
|---|---|
| **Palette** | Color system with primary, secondary, surface, gray, info, success, warn, error families |
| **Typography** | Font family, type scale (h1–h6, subtitle, body, button, caption, overline) |
| **Elevations** | Box-shadow levels 0–24 for visual depth |
| **Schema** | Per-component recipes mapping palette colors to component tokens |

### Design Systems

- **Bootstrap** (default), **Material**, **Fluent**, **Indigo**
- Each has light and dark variants

---

## Key Concepts

### CSS Custom Properties

Override tokens in your CSS:

```css
:root { --ig-primary-h: 211deg; }
.admin-panel { --ig-primary-h: 260deg; }
```

### Component-Level Theming

Target web component tag names in CSS:

```css
igc-button { --ig-button-foreground: var(--ig-secondary-500); }
```

### CSS `::part()` Selectors

```css
igc-input::part(input) { font-size: 1.1rem; }
```

### Layout Controls

```css
:root {
  --ig-size: 2;          /* 1=small, 2=medium, 3=large */
  --ig-spacing: 1;       /* 0.5=compact, 1=default, 2=spacious */
  --ig-radius-factor: 1; /* 0=square, 1=max radius */
}
```

### Light/Dark Switching

See [CSS-THEMING.md](./reference/CSS-THEMING.md) for approaches: class toggle, media query, or stylesheet swap.

---

## Best Practices

1. **Import theme CSS first**, then your custom overrides
2. **Use palette tokens** (`var(--ig-primary-500)`) for all colors — never hardcode hex values
3. **Use CSS custom properties on `:root`** for global theme adjustments
4. **Scope overrides with CSS classes** for different sections
5. **Use `::part()` selectors** to style shadow DOM internals
6. **In CSS selectors, use web component tag names** (`igc-button`), not React names (`IgrButton`)
7. **Test both light and dark themes**
8. **Use the MCP server** for AI-assisted theme generation when available

## Key Rules

1. **Never overwrite existing files directly** — propose theme code as an update for user review
2. **Always call `detect_platform` first** when using MCP tools
3. **Always call `get_component_design_tokens` before `create_component_theme`**
4. **Palette shades**: 50 = lightest, 900 = darkest
5. **Surface color must match variant** — light color for `light`, dark for `dark`
6. **Sass**: Use `@use 'igniteui-theming'` — not `igniteui-angular/theming`
7. **Sass**: Component themes use `@include tokens($theme)` inside a selector
8. **Never hardcode colors after palette generation**

## Additional Resources

- [Ignite UI for React — Themes Overview](https://www.infragistics.com/products/ignite-ui-react/react/components/themes/overview)
- [igniteui-theming npm package](https://www.npmjs.com/package/igniteui-theming)
- [CSS Custom Properties on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS ::part() on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)
