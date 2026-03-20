---
title: Web Components Switch Component – Ignite UI for Web Components
_description: Ignite UI for Web Components Switch component enables developers to use binary on/off or true/false data input functions within their applications.
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Switch components, Web Components Switch controls
mentionedTypes: ["Switch"]
_license: MIT
_tocName: Switch
---

# Web Components Switch

The Ignite UI for Web Components Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.

## Web Components Switch Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Usage

At its core, the [`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html) component allows for toggling between on/off states. The default styling is done according to the selection controls specification in the Material Design guidelines.

<!-- WebComponents -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html)and its necessary CSS, like so:

```ts
import { defineComponents, IgcSwitchComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcSwitchComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

<!-- end: WebComponents -->

The simplest way to start using the [`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html) is as follows:

```html
<igc-switch></igc-switch>
```

> \[!WARNING]
> The [`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html) component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the switch, simply place some text between the opening and closing tags:

```html
<igc-switch>Label</igc-switch>
```

You can specify if the label should be positioned before or after the switch toggle by setting the [`labelPosition`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html#labelPosition) attribute of the switch. Allowed values are `before` and `after`(default):

```html
<igc-switch label-position="before">Label</igc-switch>
```

The switch can also be labelled by elements external to the switch. In this case, the user is given full control to position and style the label in accordance with their needs.

```html
<span id="switch-label">Label</span>
<igc-switch aria-labelledby="switch-label"></igc-switch>
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

You can use the `checked` attribute to toggle on the switch.

```html
<igc-switch checked></igc-switch>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Required

You can use the `required` attribute to mark the switch as required.

```html
<igc-switch required></igc-switch>
```

### Invalid

You can use the `invalid` attribute to mark the switch as invalid.

```html
<igc-switch invalid></igc-switch>
```

### Disabled

You can use the `disabled` attribute to disable the switch.

```html
<igc-switch disabled></igc-switch>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Forms

You can use the `name` and `value` attributes when using the switch with `Form`.

```html
<igc-switch name="wifi" value="enabled"></igc-switch>
```

## Styling

The [`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html) component exposes several CSS parts to give you full control over its styling:

|Name|Description|
|--|--|
| `base` | The base wrapper of the switch. |
| `control` | The switch input element. |
| `thumb` | The position indicator of the switch. |
| `label` | The switch label. |

```css
  igc-switch {
    --thumb-on-color: white;
    --thumb-off-color: var(--ig-success-500);
    --track-on-color: var(--ig-success-500); /* Background color when checked */
    --track-off-color: white; /* Background color when unchecked */
    --track-on-hover-color: var(--ig-success-500); /* Background hover color when checked */
  }
```

```css
igc-switch {
  --thumb-on-color: white;
  --thumb-off-color: var(--ig-success-500);
  --track-on-color: var(--ig-success-500); /* Background color when checked */
  --track-off-color: white; /* Background color when unchecked */
  --track-on-hover-color: var(--ig-success-500); /* Background hover color when checked */
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## API References

- [`labelPosition`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html#labelPosition)
- [`IgcSwitchComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcswitchcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
