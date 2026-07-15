---
title: Spacing | Ignite UI for Angular 
_description: The Ignite UI for Angular provides a way of adjusting paddings and margins with ease on application or component level. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Native Angular Controls, Native Angular Components Library, spacing, padding, margin
_tocName: Spacing
---

# Spacing

Spacing configuration can significantly improve the visual representation of large amounts of data. In Ignite UI for Angular, we provide a pre-defined set of options for adjusting paddings and margins.

Instead of using fixed values, we use CSS custom properties to adjust the spacing on an application or a component level.

## How Spacing Works

Ignite UI for Angular provides a sophisticated spacing system that scales dynamically based on component sizes (small, medium, large). The spacing system is built around CSS custom properties that allow you to control spacing at a global or component level without writing custom CSS.

## The Relationship Between Sizing and Spacing

The spacing system in Ignite UI is closely tied to component sizing. Components can have three different sizes:

- **Small** - Compact spacing for dense layouts
- **Medium** - Default balanced spacing.  
- **Large** - Comfortable spacing for touch-friendly interfaces

The spacing automatically adapts based on which size is active, ensuring consistent visual hierarchy throughout your application.

## Core CSS Custom Properties

The spacing system revolves around several key CSS custom properties:

### Global Spacing Properties

- `--ig-spacing` - The base spacing multiplier (default: 1)
- `--ig-spacing-small` - Spacing for small-sized components
- `--ig-spacing-medium` - Spacing for medium-sized components.  
- `--ig-spacing-large` - Spacing for large-sized components

### Directional Spacing Properties

- `--ig-spacing-inline` - Controls horizontal spacing
- `--ig-spacing-block` - Controls vertical spacing
- `--ig-spacing-inline-small` - Horizontal spacing for small components
- `--ig-spacing-inline-medium` - Horizontal spacing for medium components
- `--ig-spacing-inline-large` - Horizontal spacing for large components
- `--ig-spacing-block-small` - Vertical spacing for small components
- `--ig-spacing-block-medium` - Vertical spacing for medium components
- `--ig-spacing-block-large` - Vertical spacing for large components

## Size Detection Variables

Components use CSS custom properties to automatically detect their current size:

- `--is-small` - Set to 1 when component is small-sized, 0 otherwise.
- `--is-medium` - Set to 1 when component is medium-sized, 0 otherwise  
- `--is-large` - Set to 1 when component is large-sized, 0 otherwise.
- `--component-size` - Numeric value indicating current size (1=small, 2=medium, 3=large).

These variables are automatically managed by the theming system and change based on the component's size setting, controlled by `--ig-size`.

## Practical Usage Examples

### Global Spacing Control

To make all components more compact across your entire application:

```css
:root {
  --ig-spacing: 0.8; /* 20% less spacing */
}
```

To increase spacing for better touch accessibility:

```css
:root {
  --ig-spacing: 1.2; /* 20% more spacing */
}
```

### Component-Specific Spacing

To adjust spacing for a specific component type:

```css
.my-grid {
  --ig-spacing: 0.5; /* More compact grid, 50% of the original spacing in all sizes */
}
```

### Directional Spacing Control

To reduce only horizontal spacing while keeping vertical spacing normal:

```css
:root {
  --ig-spacing-inline: 0.7;
  --ig-spacing-block: 1.0;
}
```

### Size-Specific Spacing

To customize spacing for specific component sizes:

```css
:root {
  --ig-spacing-small: 0.5;   /* Very tight for small components */
  --ig-spacing-medium: 1.0;  /* Normal for medium components */
  --ig-spacing-large: 1.5;   /* Extra spacious for large components */
}
```

## How Spacing Multipliers Work

The spacing system uses multipliers to scale base values:

- Spacing values in components are multiplied by the active spacing variables
- For example, if a component has `8px` base padding and you set `--ig-spacing: 1.5`, the actual padding becomes `12px`
- Size-specific multipliers like `--ig-spacing-large` override the global `--ig-spacing` for large-sized components
- Directional multipliers like `--ig-spacing-inline` allow you to scale horizontal and vertical spacing independently

This cascading approach ensures consistent spacing relationships while giving you fine-grained control through CSS custom properties alone.

## API References

- [Utilities - Pad](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/utilities#function-pad)
- [Utilities - Pad Inline](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/utilities#function-pad-inline)
- [Utilities - Pad Block](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/utilities#function-pad-block)

### Sizing Functions and Mixins

- [Themes - Sizable Mixin](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-sizable)
- [Themes - Sizable Function](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-sizable)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
