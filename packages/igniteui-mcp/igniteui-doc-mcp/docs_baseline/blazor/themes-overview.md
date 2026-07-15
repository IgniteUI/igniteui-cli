---
title: Blazor Styling and Themes | Blazor Theming | Theme Switching | Infragistics
_description: Use Infragistics' Blazor components to create apps and improve data visualization with the world’s fastest, virtualized, real-time Blazor data grid and streaming financial and business and financial charts.
_keywords: Ignite UI for Blazor, Infragistics, Themes, Styling
_license: MIT
mentionedTypes: ["ConfigureTheme"]
_tocName: Overview
---

# Themes in Ignite UI for Blazor

Ignite UI for Blazor ships with four distinct themes - Bootstrap, Material, Fluent, and Indigo. All component themes are baked into the components, however, a global style file is required for palettes, typography, and other global configurations to work.

## Loading a Theme

To enable a theme, a theme file should be loaded. Depending on your project configuration you can either `import` or `link`.

Here's the complete list of all bundled themes and their path:

| Name        | Variant | Location                                          |
| ----------- | ------- | ------------------------------------------------- |
| **Bootstrap*- | Light   | \_content/IgniteUI.Blazor/themes/light/bootstrap.css |
| **Material*-  | Light   | \_content/IgniteUI.Blazor/themes/light/material.css  |
| **Fluent*-    | Light   | \_content/IgniteUI.Blazor/themes/light/fluent.css    |
| **Indigo*-    | Light   | \_content/IgniteUI.Blazor/themes/light/indigo.css    |
| **Bootstrap*- | Dark    | \_content/IgniteUI.Blazor/themes/dark/bootstrap.css  |
| **Material*-  | Dark    | \_content/IgniteUI.Blazor/themes/dark/material.css   |
| **Fluent*-    | Dark    | \_content/IgniteUI.Blazor/themes/dark/fluent.css     |
| **Indigo*-    | Dark    | \_content/IgniteUI.Blazor/themes/dark/indigo.css     |
