---
title: Theming
description: Ignite UI for Angular theming lets you restyle components with CSS custom properties and an optional Sass engine, from a single component to your entire application.
keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Engine, Angular Theming, CSS variables, Sass theming, palettes, elevations, roundness
llms:
  description: "Ignite UI for Angular allows you to modify the styles of all component themes using CSS variables, or go deeper with its Sass theming engine."
last_updated: "2026-09-10"
_tocName: Overview
---
# Theming

Ignite UI for Angular allows you to modify the styles of all component themes using CSS variables, or go deeper with a powerful Sass theming engine that lets you create global or component themes tailored to your specific design language, in all modern browsers.

**Note:** 
This document describes the theming system in Ignite UI for Angular from version 12 forward. Starting with version 12, **CSS variables are the recommended way to modify the global and component themes**. The Sass theming library is still available and works alongside CSS variables.

## Key Features

| Feature | Description | Benefit |
| :------ | :----------- | :------ |
| Bundled design-system themes | Material, Bootstrap, Fluent, and Indigo themes, each with light and dark variants and built-in LTR/RTL support. | Get a production-ready look with a single stylesheet reference — no build step required. |
| CSS custom properties | Every theme exposes color, elevation, typography, and configuration values as `--ig-*` CSS variables. | Restyle components at runtime, per-application or per-instance, without recompiling Sass. |
| Sass theming engine | The same Sass API used internally to build every bundled theme, exposed as public mixins and functions. | Generate palettes, exclude unused component tokens, and build fully custom themes at compile time. |
| Global and local component variables | Each component exposes a global (`--ig-[component]-*`) and a local (`--*`) variable for the same property. | Override a look application-wide, then selectively override individual instances without extra CSS specificity tricks. |
| Configurable roundness and elevation | Single `--ig-radius-factor` and `--ig-elevation-factor` variables scale every component's corners and shadows. | Change the overall shape and depth of the UI without touching individual component styles. |

## Bundled Themes

All themes ship with light and dark variants and support left-to-right (LTR) and right-to-left (RTL) content by default. The easiest way to use a bundled theme is to reference its CSS file in your `angular.json` configuration. For example, to use the dark Material theme:

```json
"styles": [
  "node_modules/igniteui-angular/styles/igniteui-angular-dark.css",
  "src/styles.css"
]
```

**Note:** 
If you installed Ignite UI for Angular using `ng add igniteui-angular`, `igniteui-angular.css` is already added to the styles array for you.

Here's the full list of themes included in the styles folder:

| Theme Name              | Path                                                                   |
| :---------------------- | :--------------------------------------------------------------------- |
| **Material Light**      | `node_modules/igniteui-angular/styles/igniteui-angular.css`            |
| **Material Dark**       | `node_modules/igniteui-angular/styles/igniteui-angular-dark.css`       |
| **Bootstrap Light**     | `node_modules/igniteui-angular/styles/igniteui-bootstrap-light.css`    |
| **Bootstrap Dark**      | `node_modules/igniteui-angular/styles/igniteui-bootstrap-dark.css`     |
| **Material Dark Green** | `node_modules/igniteui-angular/styles/igniteui-dark-green.css`         |
| **Fluent Light**        | `node_modules/igniteui-angular/styles/igniteui-fluent-light.css`       |
| **Fluent Dark**         | `node_modules/igniteui-angular/styles/igniteui-fluent-dark.css`        |
| **Fluent Light Excel**  | `node_modules/igniteui-angular/styles/igniteui-fluent-light-excel.css` |
| **Fluent Dark Excel**   | `node_modules/igniteui-angular/styles/igniteui-fluent-dark-excel.css`  |
| **Fluent Light Word**   | `node_modules/igniteui-angular/styles/igniteui-fluent-light-word.css`  |
| **Fluent Dark Word**    | `node_modules/igniteui-angular/styles/igniteui-fluent-dark-word.css`   |
| **Indigo Light**        | `node_modules/igniteui-angular/styles/igniteui-indigo-light.css`       |
| **Indigo Dark**         | `node_modules/igniteui-angular/styles/igniteui-indigo-dark.css`        |

All bundled themes are compiled from the same Sass source, using the theming engine's public `mixins` and `functions`. If Sass isn't your thing, that's fine — every compiled theme also exposes its values as [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), so you can restyle it without a Sass build step. You can also combine both approaches in the same project.

## Customizing with CSS Variables

Every bundled CSS theme declares its variables in the `:root` scope, covering `colors`, `shadows`, `typography`, and `configuration`. Changing any of them updates the corresponding component styles across your application.

### Palette Colors

To change the primary and secondary colors, set the corresponding variables in your `styles.css` file:

```css
/* styles.css */
:root {
  --ig-primary-500: #09f;
  --ig-secondary-500: red;
  --ig-surface-500: rgb(221 211 211);
}
```

The `ig` prefix identifies the variable as part of an Ignite UI for Angular theme, `primary` names the color variable, and `500` is the color variant. Ignite UI for Angular ships several base color variables (`primary`, `secondary`, `surface`, `success`, `info`, and more), each with a range of variants generated from its `500` (main) value. Changing the `500` variant regenerates the rest of that color's palette. See [Palettes](/themes/palettes) for the full list of variants.

**Warning:** 
Some components do not use colors from the palettes. In those instances, target the component's CSS variables directly to modify their colors. To find out which palette colors a component uses, see the `Sass Theming API Reference`.

### Elevations

Elevations (shadows) work the same way, across 25 levels (0–24):

```css
/* styles.css */
:root {
  --ig-elevation-0: none;
  --ig-elevation-1: 0 1px 3px 0 rgba(0, 0, 0, 0.26),
                    0 1px 1px 0 rgba(0, 0, 0, 0.12),
                    0 2px 1px -1px rgba(0, 0, 0, 0.08);
  /* ... */
  --ig-elevation-24: 0 11px 15px -7px rgba(0, 0, 0, 0.26),
                  0 24px 38px 3px rgba(0, 0, 0, 0.12),
                  0 9px 46px 8px rgba(0, 0, 0, 0.08);
}
```

Each variable is a stacked CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) declaration; you can replace any of them with another valid `box-shadow` value. The higher the elevation level, the larger the shadow. Different components use different elevation levels by default — see [Elevations](/themes/elevations) for the full breakdown, and the `Sass Theming API Reference` for which level each component uses.

### Roundness and Elevation Factor

Two variables configure component shape and depth globally:

- `--ig-radius-factor` sets the radius factor of all components. The default is `1`. Set it to `0` to make every component's corners square:

  ```css
  /* Makes all components appear blocky in shape */
  :root {
    --ig-radius-factor: 0;
  }
  ```

- `--ig-elevation-factor` sets the elevation (shadow) factor of all components. The default is `1`. Set it to `0` to remove shadows entirely:

  ```css
  /* Makes all components appear flat (no shadows) */
  :root {
    --ig-elevation-factor: 0;
  }
  ```

See [Roundness](/themes/roundness) to scope `--ig-radius-factor` to individual components instead of the whole application.

### Component Variables

Every component exposes two variables for each themeable property: a **global** variable (prefixed `--ig-[component-name]-`) and a **local** variable (`--*`). Both modify the same property; the difference is scope. Global variables apply from any parent selector to all instances of a component. Local variables apply only to the instances matched by the selector that sets them, and always take priority over the global variable.

For example, the avatar component looks for `--ig-avatar-background` (global) and `--background` (local):

```css
/* styles.css */
:root {
  --ig-avatar-background: black;
}

igx-avatar {
  --background: orange;
}
```

This sets the background of every avatar to orange, because the local `--background` variable overrides the global one wherever it's set on `igx-avatar` directly. Here's how the avatar implements this internally:

```css
igx-avatar {
  --background: var(--ig-avatar-background, var(--ig-gray-400));
  background: var(--background);
}
```

Use the global variable to restyle all instances of a component at once; use the local variable to target specific instances. For example:

```html
{/* app.component.html */}
<igx-avatar>AB</igx-avatar>
<igx-avatar>CD</igx-avatar>
<app-contacts></app-contacts>
```

```html
{/* contacts.component.html */}
<igx-avatar>EF</igx-avatar>
<igx-avatar>GH</igx-avatar>
```

```css
/* styles.css */
:root {
  --ig-avatar-background: lavender;
}
```

```css
/* contacts.component.css */
igx-avatar {
  --background: purple;
}
```

Avatars `AB` and `CD` use the globally set _lavender_ background, while avatars `EF` and `GH` — scoped under `contacts.component.css` — use _purple_.

**Each component documents its own theme properties in the styling section of its topic.**

## Sass Theming Engine

If CSS variables don't give you enough control — for example, you need several reusable theme variants of the same component, or you want to tree-shake the generated CSS down to only the components you use — use the Sass theming engine directly. It exposes the same `palette`, `core`, and `theme` APIs used to build every bundled theme:

```scss
// Import the theming module
@use "igniteui-angular/theming" as *;

$my-color-palette: palette(
  $primary: #2ab759,
  $secondary: #f96a88,
  $surface: #e5e5e5
);

// IMPORTANT: Always include core() first — it provides the base
// definitions theme() depends on.
@include core();
@include theme($my-color-palette);
```

See [Theming with Sass](/themes/sass) for the full concept breakdown — palettes, schemas, typography, roundness, elevations, and animations — and how to build global or component-scoped themes with it.

## Accessibility

Palette colors and their contrast text colors are generated together: every color variant in a palette has a matching `-contrast` variant (black or white) chosen for readable contrast against it, retrievable with the Sass `contrast-color` function — see [Contrast Text Colors](/themes/sass/palettes#contrast-text-colors). Compiled themes also expose each one as a `--ig-*-contrast` CSS variable; see [Palettes](/themes/palettes).

The `core()` Sass mixin accepts an `$enhanced-accessibility` argument (default `false`). Enabling it switches chart color brushes to a color-blind–friendly palette instead of the regular one:

```scss
@include core($enhanced-accessibility: true);
```

## API References

- `Sass Theming API Reference`

## Next Steps

- [Palettes](/themes/palettes)
- [Elevations](/themes/elevations)
- [Typography](/themes/typography)
- [Roundness](/themes/roundness)
- [Spacing](/themes/spacing)
- [Theming with Sass](/themes/sass)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
