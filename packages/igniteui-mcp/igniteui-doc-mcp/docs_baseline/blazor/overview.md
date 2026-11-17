---
title: "Blazor Styling and Themes | Blazor Theming | Theme Switching | Infragistics"
description: Use Infragistics' Blazor components to create apps and improve data visualization with the world's fastest, virtualized, real-time Blazor data grid and streaming financial and business and financial charts.
keywords: "Ignite UI for Blazor, Infragistics, Themes, Styling"
license: MIT
mentionedTypes: ["ConfigureTheme"]
last_updated: "2026-10-09"
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

The prebuilt themes are compiled from `igniteui-theming`, the Sass library behind every Ignite UI for Blazor theme, and the same library is available to your application. Some capabilities are only reachable from it, because they run at compile time rather than through a variable:

- Generating a palette from your own seed colors, as described in [Palette Generation](palette-generation.md).
- The contrast and chart-palette functions on the [Accessibility](accessibility.md) topic.

A Sass build with `igniteui-theming` produces plain CSS: a stylesheet of `--ig-*` variables that you load after the theme file, the same way you load your own CSS overrides. Your framework only needs a way to run the Sass compiler. Install both packages:

```cmd
npm install igniteui-theming sass --save-dev
```

Then import the library in a `.scss` file:

```scss
@use 'igniteui-theming' as *;

// Required for $material-type-scale, $indigo-type-scale, and similar preset variables
@use 'igniteui-theming/sass/typography/presets' as *;

// Required for $material-elevations and $indigo-elevations
@use 'igniteui-theming/sass/elevations/presets' as *;

:root {
  @include palette(palette($primary: #0099ff, $secondary: #df1b74, $surface: #ffffff));
}
```

### Compiling the Stylesheet

A Blazor project has no JavaScript bundler, so compile the stylesheet with the Sass command line, for example from an npm script or a pre-build step, and write the result into `wwwroot`:

```cmd
npx sass --load-path=node_modules Styles/theme.scss wwwroot/css/theme.css
```

Link the compiled file after the theme file in your host page:

```html
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
<link href="css/theme.css" rel="stylesheet" />
```

**Note:** 
If `@use 'igniteui-theming' as *;` does not resolve, your Sass compiler is missing `node_modules` in its load paths. Pass `--load-path=node_modules` to the Sass command line, set `css.preprocessorOptions.scss.loadPaths` in Vite, or set `sassOptions.loadPaths` in Next.js.

### Without a Sass Toolchain

The output does not have to be rebuilt with your application. Compile the stylesheet once and commit the CSS, then recompile it only when you change the Sass. The [Theming MCP server](../ai/theming-mcp.md) can also generate palettes and component themes as ready-to-use CSS, with no local Sass compiler.
