---
title: "Switching from Material to Indigo Theme"
llms:
  description: "Since version 10.1 our components include a new theme inspired by our own design language."
_tocName: Indigo
---
# Switching from Material to Indigo Theme

Since version `10.1` our components include a new theme inspired by our own design language.

In order to switch from `Material` to `Indigo`, you can use the `theme` build-in mixin.

## Indigo Light Theme

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $light-indigo-palette, 
  $schema: $light-indigo-schema
);

// We can also include the Indigo font and font scaling
@include typography(
  $font-family: $indigo-typeface,
  $type-scale: $indigo-type-scale
);
```

## Indigo Dark Theme

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $dark-indigo-palette, 
  $schema: $dark-indigo-schema
);

@include typography(
  $font-family: $indigo-typeface,
  $type-scale: $indigo-type-scale
);
```

## API Overview

- `Global Theme`
