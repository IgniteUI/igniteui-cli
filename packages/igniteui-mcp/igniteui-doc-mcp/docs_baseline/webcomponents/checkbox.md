---
title: Web Components Checkbox Component | Ignite UI for Web Components
_description: Learn how to use the Web Components Checkbox Component to add checkboxes and enable checked, unchecked or indeterminate state for end-users.
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Checkbox components, Web Components Checkbox controls
_license: MIT
mentionedTypes: ["Checkbox", "Form"]
_tocName: Checkbox
---

# Web Components Checkbox Overview

The Web Components Checkbox is a component that lets you add checkboxes to your Web Components apps. It behaves as a standard HTML checkbox, enabling users to select basic checked and unchecked states or an additional indeterminate state. You also get full control over the styling of the Web Components checkbox component and ability to use it with forms.

## Checkbox Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Usage

At its core, the [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html) allows for a choice between selected/unselected state. The default styling is done according to the selection controls specification in the Material Design guidelines.

<!-- WebComponents -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcCheckboxComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcCheckboxComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

<!-- end: WebComponents -->

<div class="divider--half"></div>

The simplest way to start using the [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html) is as follows:

```html
<igc-checkbox></igc-checkbox>
```

> \[!WARNING]
> The [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html) component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the checkbox, simply place some text between the opening and closing tags:

```html
<igc-checkbox>Label</igc-checkbox>
```

You can specify if the label should be positioned before or after the checkbox toggle by setting the `label-position` attribute of the checkbox. Allowed values are `before` and `after` (default):

```html
<igc-checkbox label-position="before">Label</igc-checkbox>
```

The checkbox can also be labelled by elements external to the checkbox. In this case, the user is given full control to position and style the label in accordance with their needs.

```html
<span id="checkbox-label">Label</span>
<igc-checkbox aria-labelledby="checkbox-label"></igc-checkbox>
```

```css
.wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Checked

You can use the [`checked`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html#checked) attribute of the component to determine whether the checkbox should be toggled on or off by default.

```html
<igc-checkbox checked></igc-checkbox>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Indeterminate

You can use the [`indeterminate`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html#indeterminate) property of the component to set the checkbox's value to neither **true** nor **false**.

```html
<igc-checkbox indeterminate></igc-checkbox>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Required

You can use the [`required`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html#required) property to mark the checkbox as required.

```html
<igc-checkbox required></igc-checkbox>
```

### Invalid

You can use the [`invalid`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html#invalid) attribute to mark the checkbox as invalid.

```html
<igc-checkbox invalid></igc-checkbox>
```

### Disabled

You can use the [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html#disabled) attribute to disable the checkbox.

```html
<igc-checkbox disabled></igc-checkbox>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Forms

You can use the [`name`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html#name) and [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html#value) attributes when using the checkbox with `Form`.

```html
<igc-checkbox name="wifi" value="enabled"></igc-checkbox>
```

## Styling

The [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html) component exposes four CSS parts which we can use for styling:

|Name|Description|
|--|--|
| `base` | The base wrapper of the checkbox. |
| `control` | The checkbox input element. |
| `indicator` | The checkbox indicator icon. |
| `label` | The checkbox label. |

With this four CSS parts we have full control over the Checkbox styling.

```css
igc-checkbox::part(indicator) {
  --tick-color: var(--ig-secondary-500-contrast); /* check icon color */
}

igc-checkbox::part(control checked)::after {
  --fill-color: var(--ig-secondary-500); /* checkbox background color */
}
```

```css
igc-checkbox::part(indicator) {
  --tick-color: var(--ig-secondary-500-contrast);
}

igc-checkbox::part(control checked)::after {
  --fill-color: var(--ig-secondary-500);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## API References

- [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html)
- [`checked`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html#checked)
- [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html#disabled)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
