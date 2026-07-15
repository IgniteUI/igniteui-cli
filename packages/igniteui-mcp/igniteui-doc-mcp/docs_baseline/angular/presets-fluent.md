---
_tocName: Fluent
---
# Switching from Material to Fluent Theme

Since version `8.2` our components include a new theme inspired by the [`Microsoft Fluent Design System`](https://www.microsoft.com/design/fluent/)

In order to switch from `Material` to `Fluent`, you can use the [theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-theme) build-in mixin.

We also support Word and Excel palettes. To use them just pass one of the two _**light**_ maps `$light-fluent-excel-palette`, `$light-fluent-word-palette` or one of the two _**dark**_ maps `dark-fluent-excel-palette`, `$light-fluent-word-palette` to the `theme` mixin:

## Fluent Light Theme

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $light-fluent-palette, 
  $schema: $light-fluent-schema
);

// We can also include the Indigo font and font scaling
@include typography(
  $font-family: $fluent-typeface,
  $type-scale: $fluent-type-scale
);
```

## Fluent Dark Theme

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $dark-fluent-palette, 
  $schema: $dark-fluent-schema
);

@include typography(
  $font-family: $fluent-typeface,
  $type-scale: $fluent-type-scale
);
```

## API Overview

- [Global Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-theme)
