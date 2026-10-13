---
title: "Web Components Styling and Themes | Web Components Theming | Theme Switching | Infragistics"
description: Use Infragistics' Web Components components to create apps and improve data visualization with the world's fastest, virtualized, real-time Web Components data grid and streaming financial and business and financial charts.
keywords: "Ignite UI for Web Components, Infragistics, Themes, Styling"
license: MIT
mentionedTypes: ["ConfigureTheme"]
llms:
  description: "Ignite UI for Web Components ships with four distinct themes - Bootstrap, Material, Fluent, and Indigo."
_tocName: Overview
---
# Themes in Ignite UI for Web Components

Ignite UI for Web Components ships with four distinct themes - Bootstrap, Material, Fluent, and Indigo. All component themes are baked into the components, however, a global style file is required for palettes, typography, and other global configurations to work.

## Loading a Theme

To enable a theme, a theme file should be loaded. Depending on your project configuration you can either `import` or `link`.

Here's the complete list of all bundled themes and their path:

| Name        | Variant | Location                                          |
| ----------- | ------- | ------------------------------------------------- |
| **Bootstrap**   | Light   | igniteui-webcomponents/themes/light/bootstrap.css |
| **Material**    | Light   | igniteui-webcomponents/themes/light/material.css  |
| **Fluent**      | Light   | igniteui-webcomponents/themes/light/fluent.css    |
| **Indigo**      | Light   | igniteui-webcomponents/themes/light/indigo.css    |
| **Bootstrap**   | Dark    | igniteui-webcomponents/themes/dark/bootstrap.css  |
| **Material**    | Dark    | igniteui-webcomponents/themes/dark/material.css   |
| **Fluent**      | Dark    | igniteui-webcomponents/themes/dark/fluent.css     |
| **Indigo**      | Dark    | igniteui-webcomponents/themes/dark/indigo.css     |

## Runtime Theme Switching

**Note:** 
Changing the theme at runtime also requires you to replace the global stylesheet from the table above.

Ignite UI for Web Components allows you to switch the component themes at runtime by using the `ConfigureTheme` function exported by the library.

It takes the theme as its first argument - `bootstrap`, `material`, `fluent`, or `indigo` - and an optional variant as its second, either `light` or `dark`. Omit the variant to keep the one currently active.

```ts
import { configureTheme } from "igniteui-webcomponents";

// Sets material as the theme to be used by all components
configureTheme("material");

// Sets material and switches to its dark variant
configureTheme("material", "dark");
```

**Note:** 
This only tells components to switch their internal styles to the desired theme, you should also switch the global theme file to one of the listed files above.

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

## API References
[`IgcconfigureTheme`](mcp:get_api_reference?platform=webcomponents&component=configureTheme)
