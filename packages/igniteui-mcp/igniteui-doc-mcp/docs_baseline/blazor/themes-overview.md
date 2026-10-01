---
title: "Blazor Styling and Themes | Blazor Theming | Theme Switching | Infragistics"
description: Use Infragistics' Blazor components to create apps and improve data visualization with the world's fastest, virtualized, real-time Blazor data grid and streaming financial and business and financial charts.
keywords: "Ignite UI for Blazor, Infragistics, Themes, Styling"
license: MIT
mentionedTypes: ["ConfigureTheme"]
llms:
  description: "Ignite UI for Blazor ships with four distinct themes - Bootstrap, Material, Fluent, and Indigo."
_tocName: Overview
---
# Themes in Ignite UI for Blazor

Ignite UI for Blazor ships with four distinct themes - Bootstrap, Material, Fluent, and Indigo. All component themes are baked into the components, however, a global style file is required for palettes, typography, and other global configurations to work.

## Loading a Theme

To enable a theme, a theme file should be loaded. Depending on your project configuration you can either `import` or `link`.

Here's the complete list of all bundled themes and their path:

| Name        | Variant | Location                                          |
| ----------- | ------- | ------------------------------------------------- |
| **Bootstrap**   | Light   | _content/IgniteUI.Blazor/themes/light/bootstrap.css |
| **Material**    | Light   | _content/IgniteUI.Blazor/themes/light/material.css  |
| **Fluent**      | Light   | _content/IgniteUI.Blazor/themes/light/fluent.css    |
| **Indigo**      | Light   | _content/IgniteUI.Blazor/themes/light/indigo.css    |
| **Bootstrap**   | Dark    | _content/IgniteUI.Blazor/themes/dark/bootstrap.css  |
| **Material**    | Dark    | _content/IgniteUI.Blazor/themes/dark/material.css   |
| **Fluent**      | Dark    | _content/IgniteUI.Blazor/themes/dark/fluent.css     |
| **Indigo**      | Dark    | _content/IgniteUI.Blazor/themes/dark/indigo.css     |

## Customizing with Sass

The theme files above are prebuilt CSS, and the topics in this section customize them by overriding CSS variables - see [Palettes](palettes.md), [Typography](typography.md), [Elevations](elevations.md), and [Configuration](configuration.md). That path needs no build configuration and covers most customization.

Some capabilities are only reachable from Sass, because they run at compile time rather than through a variable. The contrast and chart-palette functions on the [Accessibility](accessibility.md) topic are the main example. To use them, install `igniteui-theming` and import it:

```scss
@use 'igniteui-theming' as *;

// Required for $material-type-scale, $indigo-type-scale, and similar preset variables
@use 'igniteui-theming/sass/typography/presets' as *;

// Required for $material-elevations and $indigo-elevations
@use 'igniteui-theming/sass/elevations/presets' as *;
```

**Note:** 
If `@use 'igniteui-theming' as *;` does not resolve, your Sass compiler is missing `node_modules` in its load paths. Set `css.preprocessorOptions.scss.loadPaths` in Vite, or `sassOptions.loadPaths` in Next.js.

