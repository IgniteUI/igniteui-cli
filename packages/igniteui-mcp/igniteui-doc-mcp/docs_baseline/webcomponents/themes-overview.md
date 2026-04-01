---
title: Web Components Styling and Themes | Web Components Theming | Theme Switching | Infragistics
_description: Use Infragistics' Web Components components to create apps and improve data visualization with the world’s fastest, virtualized, real-time Web Components data grid and streaming financial and business and financial charts.
_keywords: Ignite UI for Web Components, Infragistics, Themes, Styling
_license: MIT
mentionedTypes: ["ConfigureTheme"]
_tocName: Overview
---

# Themes in Ignite UI for Web Components

Ignite UI for Web Components ships with four distinct themes - Bootstrap, Material, Fluent, and Indigo. All component themes are baked into the components, however, a global style file is required for palettes, typography, and other global configurations to work.

## Loading a Theme

To enable a theme, a theme file should be loaded. Depending on your project configuration you can either `import` or `link`.

Here's the complete list of all bundled themes and their path:

<!-- WebComponents -->

| Name        | Variant | Location                                          |
| ----------- | ------- | ------------------------------------------------- |
| **Bootstrap*- | Light   | igniteui-webcomponents/themes/light/bootstrap.css |
| **Material*-  | Light   | igniteui-webcomponents/themes/light/material.css  |
| **Fluent*-    | Light   | igniteui-webcomponents/themes/light/fluent.css    |
| **Indigo*-    | Light   | igniteui-webcomponents/themes/light/indigo.css    |
| **Bootstrap*- | Dark    | igniteui-webcomponents/themes/dark/bootstrap.css  |
| **Material*-  | Dark    | igniteui-webcomponents/themes/dark/material.css   |
| **Fluent*-    | Dark    | igniteui-webcomponents/themes/dark/fluent.css     |
| **Indigo*-    | Dark    | igniteui-webcomponents/themes/dark/indigo.css     |

## Runtime Theme Switching

> \[!Note]
> Changing the theme at runtime also requires you to replace the global stylesheet from the table above.

Ignite UI for Web Components allows you to switch the component themes at runtime by using the `ConfigureTheme` function exported by the library.

Calling it and passing one of the four valid themes - `bootstrap`, `material`, `fluent`, or `indigo` as a string will change the loaded component styles;

```ts
import { configureTheme } from "igniteui-webcomponents";

// Sets material as the theme to be used by all components
configureTheme("material");
```

> \[!Note]
> This only tells components to switch their internal styles to the desired theme, you should also switch the global theme file to one of the listed files above.

<!-- end: WebComponents -->

## API References

- `ConfigureTheme`
