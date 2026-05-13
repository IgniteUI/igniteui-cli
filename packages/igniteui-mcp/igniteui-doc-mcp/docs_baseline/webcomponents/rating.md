---
title: Web Components Rating
_description: With Ignite UI for Web Components Rating, allows users to view and provide feedback using unicode symbols, svg, or icons.
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Rating components, Web Components Rating controls
_license: MIT
mentionedTypes: ["Rating"]
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

Before using the [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html), you need to register it as follows:

```ts
import { defineComponents, IgcRatingComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcRatingComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html) is as follows:

```html
<igc-rating></igc-rating>
```

This will create a five-star rating component that can be used to input and read data from.

## Using Custom Symbols

The [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html) component allows you to use custom symbols in place of the default star symbols. If you want to use a different symbol, like SVG, icon or another unicode symbol, you should place [`IgcRatingSymbolComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingsymbolcomponent.html) components between the opening and closing brackets of the [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html):

```html
<igc-rating>
  <igc-rating-symbol> <div>💙</div> <div slot="empty">💙</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>💙</div> <div slot="empty">💙</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>💙</div> <div slot="empty">💙</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>💙</div> <div slot="empty">💙</div> </igc-rating-symbol>
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
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
  <igc-rating-symbol> <div>😣</div> <div slot="empty">😣</div> </igc-rating-symbol>
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

The Ignite UI for Web Components Rating component allows users to use different icons/elements for the empty and the selected state of a single rating value. It is mandatory to provide 2 icons for each slot (empty and full) when declaring a symbol, even if they are the same. For instance:

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

## Configuration

### Single

Turns on the [`single`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html#single) visual mode for the rating. Useful when using symbols that communicate unique values, like feedback emoji faces.

### Value

The [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html#value) attribute sets the current value of the component.

### Label

The [`label`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html#label) attribute allows setting the label value of the rating component.

### Value Format

A format string which sets [aria-valuetext](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext). All instances of it will be replaced with the current value of the control. Important for screen-readers and useful for localization.

### Max Value

The [`max`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html#max) attribute sets the maximum allowed value of the rating component.

### Step

The [`step`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html#step) attribute sets the allowed fraction of steps between two symbols. Useful when splitting the rating symbols in halves.

### Hover Preview

The `hover-preview` attribute makes the component show the possible outcome of user selection on hover. It is useful when you want to give instant feedback about what the selected value could be.

### Read-Only

The [`readOnly`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html#readOnly) attribute allows the users to set the [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html) in read-only mode. This attribute is useful when you want to use the component for information purposes only.

### Disabled

The [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html#disabled) attribute disables the component, making it impossible to select a value using the mouse or keyboard.

## Methods

### Step Up

The [`stepUp`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html#stepUp) method increments the value of the component by `n` steps. Determined by the `step` factor.

### Step Down

The [`stepDown`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html#stepDown) method decrements the value of the component by `n` steps. Determined by the `step` factor.

## Events

The [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html) component emits two separate events - `igcHover` and `igcChange`.

### Hover Event

The `igcHover` event is fired when hovering over a symbol. It provides the value of the symbol under the mouse cursor. Useful for creating custom value labels and readouts.

### Change Event

The `igcChange` event is fired when the selected value changes.

## Styling

The [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

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

## API Reference

- [`IgcRatingComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcratingcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
