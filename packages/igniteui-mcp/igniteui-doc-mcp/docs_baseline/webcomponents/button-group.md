---
title: Web Components Button Group Component | Ignite UI for Web Components
_description: Get started with the Web Components Button Group Component - series of Web Components Toggle Buttons, exposing features such as layout and selection.
_keywords: Web Components, UI controls, web widgets, UI widgets, Web Components Button Group Components, Infragistics
mentionedTypes: ["ToggleButton", "ButtonGroup"]
_license: MIT
_tocName: Button Group
---

# Web Components Button Group Overview

The Web Components Button Group component is used to organize [`IgcToggleButtonComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent)'s into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.

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

You will then need to import the [`IgcButtonGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcButtonGroupComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcButtonGroupComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

Now that you have the Ignite UI for Web Components Button Group imported, you can start with a basic configuration of the [`IgcButtonGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent) and its buttons.

Use the [`IgcButtonGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent) selector to wrap your [`IgcToggleButtonComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent)s and display them into a button group. If you want a button to be selected by default, use the [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent&member=selected) attribute:

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

Use the [`alignment`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent&member=alignment) property to set the orientation of the buttons in the button group.

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

In order to configure the Ignite UI for Web Components [`IgcButtonGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent) selection, you could use its [`selection`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent&member=selection) property. This property accepts the following three modes:

- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **single-required** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multiple** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed [`IgcButtonGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent) selection modes:

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

A [`IgcToggleButtonComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent) could be marked as selected via its [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent&member=selected) attribute or through the [`IgcButtonGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent) [`selectedItems`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent&member=selectedItems) attribute:

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
> Setting [`IgcToggleButtonComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent) [`value`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent&member=value) attribute is mandatory for using the [`selectedItems`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent&member=selectedItems) property of the [`IgcButtonGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent).

### Size

The `--ig-size` CSS custom property can be used to control the size of the button group.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Styling

The [`IgcButtonGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent) component exposes `group` CSS part that allows us to style the button group container.
Also, the [`IgcToggleButtonComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent)s provide `toggle` CSS part that could be used to style the button element.

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

- [`IgcButtonGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonGroupComponent)
- [`IgcToggleButtonComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcToggleButtonComponent)
- [`IgcRippleComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcRippleComponent)
- [`IgcIconComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
