---
title: Web Components Icon Button Component
_description: Developers can utilize and use various icons interchangeably as buttons with custom colors and more with Ignite UI for Web Components Icon Button component.
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Icon Button components, Web Components Icon Button controls
_license: MIT
mentionedTypes: ["IconButton", "ButtonBase", "Button", "Icon"]
_tocName: Icon Button
---

# Web Components Icon Button Overview

The Ignite UI for Web Components Icon Button component allows developers to use registered icons as buttons in their application. It carries all features of the [icon](../layouts/icon.md) component but adds features from the [button](button.md) component as well.

## Web Components Icon Button Example

```css
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


<div class="divider"></div>

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html), you need to register it as follows:

```ts
import { defineComponents, IgcIconButtonComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcIconButtonComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html) is as follows:

```html
<igc-icon-button name="thumb-up" collection="material"></igc-icon-button>
```

## Examples

### Variant

Similar to the regular button components, the icon button supports several variants - `flat` (default), `contained`, and `outlined`; To change the icon button type set the `variant` attribute of the icon button.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


```html
<igc-icon-button name="search" variant="contained"></igc-icon-button>
```

### Size

The size of the button can be changed by utilizing the `--ig-size` CSS variable to any of the three supported sizes: `--ig-size-small`, `--ig-size-medium`, `--ig-size-large`(default).

```css
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


```css
igc-icon-button {
    --ig-size: var(--ig-size-medium);
}
```

### Type

The icon button component will change its internal structure from `<button>` to an `<a>` type element when the `href` attribute is set. In that case the icon button can be thought of as a regular link. Setting the `href` attribute will allow you to also set the `rel`, `target`, and `download` attributes of the icon button.

```html
<igc-icon-button
  name="thumb-up"
  collection="material"
  href="https://duckduckgo.com"
  target="_blank">
</igc-icon-button>
```

### Mirrored

Some icons need to look a little different when used in Right-to-Left(RTL) mode. For that reason we provide a `mirrored` attribute that, when set, flips the icon button horizontally.

```html
<igc-icon-button name="thumb-up" mirrored></igc-icon-button>
```

## Styling

The [`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html) component exposes two CSS parts - `base` and `icon` that allow you to style the wrapping element (`<button>` or `<a>`) and the wrapped `<igc-icon>` element.

```css
igc-icon-button[variant="contained"]:not([disabled])::part(base) {
  padding: 12px;
  background-color: var(--ig-success-500);
}

igc-icon-button::part(icon) {
  --size: 22px;
  color: var(--ig-success-500-contrast);
}
```

```css
igc-icon-button[variant="contained"]:not([disabled])::part(base) {
  padding: 12px;
  background-color: var(--ig-success-500);
}

igc-icon-button::part(icon) {
  --size: 22px;
  color: var(--ig-success-500-contrast);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## API References

- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)
- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)
- [`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html)
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
