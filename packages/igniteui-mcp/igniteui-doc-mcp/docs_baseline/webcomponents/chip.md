---
title: "Web Components Chip | Infragistics"
description: Infragistics' Web Components Chip component allows you to display content in a predefined style to decorate other components anywhere in an application.
keywords: "Web Components, UI controls, web widgets, UI widgets, Web Components, Web Components Chip Components, Infragistics"
license: MIT
mentionedTypes: ["Chip"]
llms:
  description: "Ignite UI for Web Components Chips help people enter information, make selections, filter content, or trigger actions."
_tocName: Chip
---
# Web Components Chip Overview

Ignite UI for Web Components Chips help people enter information, make selections, filter content, or trigger actions.

## Web Components Chip Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<igc-divider></igc-divider>

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcChip`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcChipComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcChipComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcChip`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent) is as follows:

```html
<igc-chip></igc-chip>
```

To display a selectable chip, you can use the [`Selectable`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=selectable) property of the chip.

```html
<igc-chip selectable></igc-chip>
```

To display a removable chip, you can use the [`Removable`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=removable) property of the chip.

```html
<igc-chip removable></igc-chip>
```

## Examples

### Variants

The Ignite UI for Web Components chip supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `Primary`, `Info`, `Success`, `Warning`, or `Danger` to the [`Variant`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=variant) property.

```html
<igc-chip variant="success"></igc-chip>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Outlined

The Ignite UI for Web Components chip can be rendered in an outlined style and have a border around it by setting the [`Outlined`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=outlined) property.

```html
<igc-chip outlined></igc-chip>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Disabled

The Ignite UI for Web Components chip can be disabled by using the [`Disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=disabled) property.

```html
<igc-chip disabled></igc-chip>
```

### Slots

With the exposed component slots, you can add custom content to different parts of the [`IgcChip`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent). The component provides default select and remove icons, but you can customize them using the `select` and `remove` slots. You can also add additional content before or after the main content using the `start` and `end` slots.

We recommend using a `<span>` element when adding simple text, symbols, or emojis, and an [`<igc-icon>`](../layouts/icon.md) component when adding icons to the `remove`, `select`, `start`, and `end` slots.

```html
<igc-chip selectable removable>
    <igc-icon slot="select" name="verified-account"></igc-icon>
    <igc-icon slot="start" name="brush"></igc-icon>
    Chip
    <igc-icon slot="end" name="blood"></igc-icon>
    <igc-icon slot="remove" name="pacifier"></igc-icon>
</igc-chip>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Size

We allow the user to choose the size of the [`IgcChip`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent) by utilizing the `--ig-size` CSS variable:

```css
.size-small {
  --ig-size: var(--ig-size-small);
}

.size-medium {
  --ig-size: var(--ig-size-medium);
}

.size-large {
  --ig-size: var(--ig-size-large);
}
```

```css
.container {
  align-items: flex-start !important;
}

.small {
    --ig-size: var(--ig-size-small);
}

.medium {
    --ig-size: var(--ig-size-medium);
}

.large {
    --ig-size: var(--ig-size-large);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Styling

The [`IgcChip`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent) component exposes a `base`, `prefix`, `suffix` CSS parts that can be used to change all of its style properties.

```css
igc-chip::part(base) {
  background: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-chip::part(suffix) {
  color: var(--ig-gray-400);
}
```

```css
igc-chip::part(base) {
  background: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-chip::part(suffix) {
  color: var(--ig-gray-400);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## API References
[`IgcChip`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent)
## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
