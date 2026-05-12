# Sass Theming

> Requires Sass configured in the project (e.g., `sass` in `devDependencies` and Vite/webpack configured to handle `.scss` files).

## Basic Setup

```scss
// src/styles.scss
@use 'igniteui-theming' as *;

// 1. Define a palette
$my-palette: palette(
  $primary: #1976D2,
  $secondary: #FF9800,
  $surface: #FAFAFA
);

// 2. Apply the palette
@include palette($my-palette);

// 3. Optional: Typography
@include typography($font-family: "'Roboto', sans-serif");

// 4. Optional: Elevations
@include elevations();

// 5. Optional: Spacing
@include spacing();
```

Import in your React entry point:

```tsx
// main.tsx
import './styles.scss';
```

## Dark Theme

For dark themes, use a dark surface color and a dark schema:

```scss
@use 'igniteui-theming' as *;

$dark-palette: palette(
  $primary: #90CAF9,
  $secondary: #FFB74D,
  $surface: #121212
);

@include palette($dark-palette, $schema: $dark-material-schema);
```

> **Important:** Use `@use 'igniteui-theming'` — not `igniteui-angular/theming` or Angular-specific `core()` / `theme()` mixins.

## Component-Level Theming with Sass

When Sass is configured, use component theme functions and the `tokens` mixin:

```scss
@use 'igniteui-theming' as *;

$custom-avatar: avatar-theme(
  $schema: $light-material-schema,
  $background: var(--ig-primary-500),
  $color: var(--ig-primary-500-contrast)
);

igc-avatar {
  @include tokens($custom-avatar);
}
```

## Light/Dark Toggle with Sass

```scss
@use 'igniteui-theming' as *;

$light-palette: palette($primary: #1976D2, $secondary: #FF9800, $surface: #FAFAFA);
$dark-palette: palette($primary: #90CAF9, $secondary: #FFB74D, $surface: #121212);

@include typography($font-family: "'Roboto', sans-serif");
@include elevations();

// Light is default
@include palette($light-palette, $schema: $light-material-schema);

// Dark via class on a container or <body>
.dark-theme {
  @include palette($dark-palette, $schema: $dark-material-schema);
}
```

## Theming Architecture

The Ignite UI theming system is built on four pillars:

| Concept | Purpose |
|---|---|
| **Palette** | Color system with primary, secondary, surface, gray, info, success, warn, error families, each with shades 50–900 + accents A100–A700 |
| **Typography** | Font family, type scale (h1–h6, subtitle, body, button, caption, overline) |
| **Elevations** | Box-shadow levels 0–24 for visual depth |
| **Schema** | Per-component recipes mapping palette colors to component tokens |

### Design Systems

Four built-in design systems are available:

- **Material** (default) — Material Design 3
- **Bootstrap** — Bootstrap-inspired
- **Fluent** — Microsoft Fluent Design
- **Indigo** — Infragistics Indigo Design

Each has light and dark variants (e.g., `$light-material-schema`, `$dark-fluent-schema`).

### Palette Shades

- Shades 50 = lightest, 900 = darkest for all chromatic colors
- Surface color must match the variant — light color for `light`, dark color for `dark`

## Key Rules

1. **Sass**: Use `@use 'igniteui-theming'` — not `igniteui-angular/theming`
2. **Sass**: Component themes use `@include tokens($theme)` inside a selector
3. **Never hardcode colors after palette generation** — use `var(--ig-<family>-<shade>)` palette tokens everywhere
