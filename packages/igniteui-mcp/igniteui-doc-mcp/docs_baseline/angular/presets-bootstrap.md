---
title: "Switching from Material to Bootstrap Theme"
llms:
  description: "Since version 9.0 our components include a new theme inspired by Bootstrap 4 and ng-bootstrap."
_tocName: Bootstrap
---
# Switching from Material to Bootstrap Theme

Since version `9.0` our components include a new theme inspired by [Bootstrap 4](https://getbootstrap.com/) and [ng-bootstrap](https://ng-bootstrap.github.io/#/home).
In order to switch from `Material` to `Bootstrap`, you can use the `theme` build-in mixin.

## Bootstrap Light Theme

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $light-bootstrap-palette,
  $schema: $light-bootstrap-schema
);

// We can also include the Indigo font and font scaling
@include typography(
  $font-family: $bootstrap-typeface,
  $type-scale: $bootstrap-type-scale
);
```

## Bootstrap Dark Theme

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
@include core();
@include theme(
  $palette: $dark-bootstrap-palette,
  $schema: $dark-bootstrap-schema
);

@include typography(
  $font-family: $bootstrap-typeface,
  $type-scale: $bootstrap-type-scale
);
```

## API Overview

- `Global Theme`
