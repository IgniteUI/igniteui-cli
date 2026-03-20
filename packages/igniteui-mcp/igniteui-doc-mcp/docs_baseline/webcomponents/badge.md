---
title: Web Components Badge | Infragistics
_description: Infragistics' Web Components Badge component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: Web Components, UI controls, web widgets, UI widgets, Web Components, Web Components Badge Components, Infragistics
_license: MIT
mentionedTypes: ["Badge"]
_tocName: Badge
---

# Web Components Badge Overview

The Ignite UI for Web Components Badge is a component used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined styles to communicate information, success, warnings, or errors.

## Web Components Badge Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider"></div>

## Usage

<!-- WebComponents -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcBadgeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcBadgeComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcBadgeComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

<!-- end: WebComponents -->

The simplest way to start using the [`IgcBadgeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html) is as follows:

```html
<igc-badge></igc-badge>
```

To display a subtle border around the badge, you can set the [`outlined`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html#outlined) attribute of the badge.

```html
<igc-badge outlined></igc-badge>
```

## Examples

### Variants

The Ignite UI for Web Components badge supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `primary`(default), `info`, `success`, `warning`, or `danger` to the [`variant`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html#variant) attribute.

```html
<igc-badge variant="success"></igc-badge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Shape

The badge component supports `rounded`(default) and `square` shapes. These values can be assigned to the [`shape`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html#shape) attribute.

```html
<igc-badge shape="square"></igc-badge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Dot

The Ignite UI for Web Components badge component can also render as a minimal dot indicator for notifications by setting its `dot` attribute. Dot badges do not support content, but they can be outlined and can use any of the available dot types (e.g., primary, success, info, etc.).

```html
<igc-badge dot></igc-badge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Styling

The [`IgcBadgeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html) component exposes a `base` CSS part that can be used to change all of its style properties.

```css
igc-badge::part(base) {
    --background-color: var(--ig-error-A100);
    --border-radius: 2px;
}
```

```css
igc-badge::part(base) {
  --background-color: var(--ig-error-A100);
  --border-radius: 2px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## API References

- [`IgcBadgeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
