---
title: Web Components Button Group Component | Ignite UI for Web Components
_description: Get started with the Web Components Button Group Component - series of Web Components Toggle Buttons, exposing features such as layout and selection.
_keywords: Web Components, UI controls, web widgets, UI widgets, Web Components Button Group Components, Infragistics
mentionedTypes: ["ToggleButton", "ButtonGroup"]
_license: MIT
_tocName: Button Group
---

# Web Components Button Group Overview

The Web Components Button Group component is used to organize [`IgcToggleButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctogglebuttoncomponent.html)'s into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.

## Web Components Button Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
igc-button-group {
    max-width: 400px;
}

igc-ripple {
    --color: gray;
}
```

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcButtonGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcButtonGroupComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcButtonGroupComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

Now that you have the Ignite UI for Web Components Button Group imported, you can start with a basic configuration of the [`IgcButtonGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html) and its buttons.

Use the [`IgcButtonGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html) selector to wrap your [`IgcToggleButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctogglebuttoncomponent.html)s and display them into a button group. If you want a button to be selected by default, use the [`selected`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctogglebuttoncomponent.html#selected) attribute:

```html
 <igc-button-group>
    <igc-toggle-button value="left">
        <igc-icon name="format_align_left" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="center">
        <igc-icon name="format_align_center" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="right">
        <igc-icon name="format_align_right" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="justify" selected>
        <igc-icon name="format_align_justify" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>
</igc-button-group>
```

## Examples

### Alignment

Use the [`alignment`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html#alignment) property to set the orientation of the buttons in the button group.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
igc-button-group {
    width: 200px;
}

igc-ripple {
    --color: gray;
}
```

### Selection

In order to configure the Ignite UI for Web Components [`IgcButtonGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html) selection, you could use its [`selection`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html#selection) property. This property accepts the following three modes:

- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **single-required** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multiple** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed [`IgcButtonGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html) selection modes:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.radio-group-container {
    width: 400px;
    margin-bottom: 1rem;
}

igc-radio-group {
    padding: 0.5rem;
}

igc-button-group {
    width: 200px;
}

igc-ripple {
    --color: gray;
}
```

A [`IgcToggleButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctogglebuttoncomponent.html) could be marked as selected via its [`selected`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctogglebuttoncomponent.html#selected) attribute or through the [`IgcButtonGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html) [`selectedItems`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html#selectedItems) attribute:

```html
<igc-button-group selected-items='["bold"]'>
    <igc-toggle-button value="bold">
        <igc-icon name="bold" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="italic">
        <igc-icon name="italic" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>

    <igc-toggle-button value="underlined">
        <igc-icon name="underlined" collection="material"></igc-icon>
        <igc-ripple></igc-ripple>
    </igc-toggle-button>
</igc-button-group>
```

> [!Note]
> Setting [`IgcToggleButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctogglebuttoncomponent.html) [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctogglebuttoncomponent.html#value) attribute is mandatory for using the [`selectedItems`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html#selectedItems) property of the [`IgcButtonGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html).

### Size

The `--ig-size` CSS custom property can be used to control the size of the button group.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Styling

The [`IgcButtonGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html) component exposes `group` CSS part that allows us to style the button group container.
Also, the [`IgcToggleButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctogglebuttoncomponent.html)s provide `toggle` CSS part that could be used to style the button element.

```css
igc-button-group::part(group) {
  background-color: var(--ig-primary-500);
  padding: 8px;
}

igc-toggle-button::part(toggle) {
  color: var(--ig-secondary-300);
}
```

```css
igc-button-group::part(group) {
  background-color: var(--ig-primary-500);
  padding: 8px;
}

igc-toggle-button::part(toggle) {
  color: var(--ig-secondary-300);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
igc-button-group {
    width: 200px;
}

igc-ripple {
    --color: gray;
}

igc-toggle-button::part(toggle) {
    color: #fdfdfd;
    background: #2f4d6a;
}

igc-toggle-button::part(toggle):hover {
    color: #fdfdfd;
    background: #1f3347;
}

igc-toggle-button[disabled]::part(toggle) {
    color: gray;
    background: lightgray;
}

igc-toggle-button[selected]::part(toggle) {
    color: #fdfdfd;
    background: #1f3347;
}
```

## API Reference

- [`IgcButtonGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttongroupcomponent.html)
- [`IgcToggleButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctogglebuttoncomponent.html)
- [`IgcRippleComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcripplecomponent.html)
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
