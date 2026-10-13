---
title: "Web Components Rating"
description: With Ignite UI for Web Components Rating, allows users to view and provide feedback using unicode symbols, svg, or icons.
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Rating components, Web Components Rating controls"
license: MIT
mentionedTypes: ["Rating"]
llms:
  description: "The Ignite UI for Web Components Rating component allows users to view and provide feedback."
_tocName: Rating
---
# Web Components Rating Overview

The Ignite UI for Web Components Rating component allows users to view and provide feedback.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.size-large {
    --ig-size: var(--ig-size-large);
}
```

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcRating`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent), you need to register it as follows:

```ts
import { defineComponents, IgcRatingComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcRatingComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcRating`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent) is as follows:

```html
<igc-rating></igc-rating>
```

This will create a five-star rating component that can be used to input and read data from.

## Using Custom Symbols

The [`IgcRating`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent) component allows you to use custom symbols in place of the default star symbols. If you want to use a different symbol, like SVG, icon or another unicode symbol, you should place [`IgcRatingSymbol`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingSymbolComponent) components between the opening and closing brackets of the [`IgcRating`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent):

```html
<igc-rating>
  <igc-rating-symbol> <span>💙</span> <span slot="empty">💙</span> </igc-rating-symbol>
  <igc-rating-symbol> <span>💙</span> <span slot="empty">💙</span> </igc-rating-symbol>
  <igc-rating-symbol> <span>💙</span> <span slot="empty">💙</span> </igc-rating-symbol>
  <igc-rating-symbol> <span>💙</span> <span slot="empty">💙</span> </igc-rating-symbol>
</igc-rating>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

> The number of rating symbols between the opening and closing brackets of the rating component determines the max value.

## Single Selection

The Ignite UI for Web Components Rating component has a single selection mode that allows users to provide different icons/elements for the different rating values. In this case, only one of the icons/elements can be selected and reflect the feedback given by the user.

```html
<igc-rating single>
  <igc-rating-symbol> <span>😣</span> <span slot="empty">😣</span> </igc-rating-symbol>
  <igc-rating-symbol> <span>😣</span> <span slot="empty">😣</span> </igc-rating-symbol>
  <igc-rating-symbol> <span>😣</span> <span slot="empty">😣</span> </igc-rating-symbol>
  <igc-rating-symbol> <span>😣</span> <span slot="empty">😣</span> </igc-rating-symbol>
  <igc-rating-symbol> <span>😣</span> <span slot="empty">😣</span> </igc-rating-symbol>
</igc-rating>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
igc-rating::part(symbols) {
    gap: 8px; 
}
```

> Keep in mind that the `step` attribute doesn't work with single selection mode.

## Empty & Selected

The Ignite UI for Web Components Rating component allows users to use different icons or elements for the 'selected' and 'empty' states of each rating symbol. It is mandatory to provide two icons for each symbol, even if they are the same. One is used for the 'selected' state, which is defined by not specifying any slot, and the other is used for the 'empty' state, which you can define using the `empty` slot. For instance:

```html
<igc-rating-symbol>
  <igc-icon collection="default" name="bandage"></igc-icon>
  <igc-icon collection="default" name="bacteria" slot="empty"></igc-icon>
</igc-rating-symbol>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

As shown above, the best practice is to use icons for the rating symbols. We recommend using an [`igc-icon`](../layouts/icon.md) component for the 'empty' and 'selected' icons. However, if you prefer to use symbols or emojis instead of icons, we recommend using a `<span>` element for them, like so:

```html
<igc-rating>
  <igc-rating-symbol>
    <span>😣</span>
    <span slot="empty">😣</span>
  </igc-rating-symbol>
  <igc-rating-symbol>
    <span>😔</span>
    <span slot="empty">😔</span>
  </igc-rating-symbol>
  ...
</igc-rating>
```

## Configuration

### Single

Turns on the [`Single`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent&member=single) visual mode for the rating. Useful when using symbols that communicate unique values, like feedback emoji faces.

### Value

The [`Value`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent&member=value) attribute sets the current value of the component.

### Label

The [`Label`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent&member=label) attribute allows setting the label value of the rating component.

### Value Format

A format string which sets [aria-valuetext](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext). All instances of it will be replaced with the current value of the control. Important for screen-readers and useful for localization.

### Max Value

The [`Max`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent&member=max) attribute sets the maximum allowed value of the rating component.

### Step

The [`Step`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent&member=step) attribute sets the allowed fraction of steps between two symbols. Useful when splitting the rating symbols in halves.

### Hover Preview

The `hover-preview` attribute makes the component show the possible outcome of user selection on hover. It is useful when you want to give instant feedback about what the selected value could be.

### Read-Only

The [`ReadOnly`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent&member=readOnly) attribute allows the users to set the [`IgcRating`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent) in read-only mode. This attribute is useful when you want to use the component for information purposes only.

### Disabled

The [`Disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent&member=disabled) attribute disables the component, making it impossible to select a value using the mouse or keyboard.

## Methods

### Step Up

The [`StepUp`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent&member=stepUp) method increments the value of the component by `n` steps. Determined by the `step` factor.

### Step Down

The [`StepDown`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent&member=stepDown) method decrements the value of the component by `n` steps. Determined by the `step` factor.

## Events

The [`IgcRating`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent) component emits two separate events - `igcHover` and `igcChange`.

### Hover Event

The `igcHover` event is fired when hovering over a symbol. It provides the value of the symbol under the mouse cursor. Useful for creating custom value labels and readouts.

### Change Event

The `igcChange` event is fired when the selected value changes.

## Styling

The [`IgcRating`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `base` | The main wrapper which holds all of the rating elements. |
| `label` | The label part. |
| `value-label` | The value label part. |
| `symbols` | A wrapper for all rating symbols. |
| `symbol` | The part of the encapsulated default symbol. |
| `full` | The part of the encapsulated full symbols. |
| `empty` | The part of the encapsulated empty symbols. |

```css
igc-rating::part(full) {
  color: var(--ig-primary-500)
}

igc-rating::part(empty) {
  color: var(--ig-secondary-200);
}
```

```css
igc-rating::part(full) {
  color: var(--ig-primary-500)
}

igc-rating::part(empty) {
  color: var(--ig-secondary-200);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
igc-rating {
    --symbol-size: 44px;
    --symbol-full-color: var(--ig-primary-500);
    --symbol-empty-color: var(--ig-secondary-200);
    --label-color: var(--ig-gray-600);
    --ig-size: var(--ig-size-large);
}

igc-rating[disabled] {
    --symbol-full-color: var(--ig-gray-400);
    --symbol-empty-color: var(--ig-gray-400);
    --disabled-label-color: var(--ig-gray-400);
}

igc-rating::part(label) {
    font-size: 18px;
    font-weight: 600;
    text-transform: var(--ig-overline-text-transform);
}

igc-rating::part(symbols) {
    gap: 8px; 
}
```

## API References

[`IgcRating`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingComponent)<br />
[`IgcRatingSymbol`](mcp:get_api_reference?platform=webcomponents&component=IgcRatingSymbolComponent)<br />

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
