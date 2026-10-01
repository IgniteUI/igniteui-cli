---
title: Radio and Radio Group
description: With Ignite UI for Web Components Radio Button and Radio Group controls, developers can seamlessly present lists of options for users to select for better UI in template-driven and reactive forms.
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Radio Button components, Web Components Radio Button controls, Web Components Radio Group component, Web Components Radio Group control"
license: MIT
mentionedTypes: ["Radio", "RadioGroup", "Form"]
llms:
  description: "The Ignite UI for Web Components Radio component allows the user to select a single option from an available set of options that are listed side by side."
_tocName: Radio & Radio Group
---
# Web Components Radio & Radio Group

The Ignite UI for Web Components Radio component allows the user to select a single option from an available set of options that are listed side by side.

## Ignite UI for Web Components Radio Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcRadio`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent) and the [`IgcRadioGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioGroupComponent), you need to register them as follows:

```ts
import { defineComponents, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcRadioComponent, IgcRadioGroupComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcRadio`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent) is as follows:

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

**Warning: Warning**

The [`IgcRadio`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent) component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the [`IgcRadio`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent), simply place some text between the opening and closing tags:

```html
<igc-radio>Apple</igc-radio>
```

You can specify if the label should be positioned before or after the [`IgcRadio`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent) button by setting the [`LabelPosition`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent&member=labelPosition) attribute. Allowed values are `before` and `after`(default):

```html
<igc-radio label-position="before">Apple</igc-radio>
```

The [`IgcRadio`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent) can also be labelled by elements external to it. In this case the user is given full control to position and style the label in accordance to their needs.

```html
<span id="radio-label">Label</span>
<igc-radio aria-labelledby="radio-label"></igc-radio>
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

You can use the [`Checked`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent&member=checked) attribute to toggle on the radio.

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio checked>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Invalid

You can use the [`Invalid`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent&member=invalid) attribute to mark the radio as invalid.

```html
<igc-radio invalid></igc-radio>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Disabled

You can use the [`Disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent&member=disabled) attribute to disable the radio.

```html
<igc-radio-group>
  <igc-radio>Apple</igc-radio>
  <igc-radio disabled>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Group Alignment

The [`IgcRadioGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioGroupComponent) allows you to easily change the placement directionality of the radio buttons it contains using the [`alignment`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioGroupComponent&member=alignment) attribute. Allowed values are `vertical`(default) and `horizontal`.

```html
<igc-radio-group alignment="horizontal">
  <igc-radio>Apple</igc-radio>
  <igc-radio>Banana</igc-radio>
  <igc-radio>Mango</igc-radio>
  <igc-radio>Orange</igc-radio>
</igc-radio-group>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Forms

You can use the [`Name`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent&member=name) and [`Value`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent&member=value) attributes when using the radio with `Form`.

```html
<igc-radio-group>
  <igc-radio name="fruit" value="apple">Apple</igc-radio>
  <igc-radio name="fruit" value="banana">Banana</igc-radio>
  <igc-radio name="fruit" value="mango">Mango</igc-radio>
  <igc-radio name="fruit" value="banana">Orange</igc-radio>
</igc-radio-group>
```

## Styling

The [`IgcRadio`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent) component exposes several CSS parts (`base`, `control`, and `label`) to give you full control over its styling.

```css
igc-radio::part(control) {
  --size: 18px;
}

igc-radio-group {
  padding: 12px;
}

igc-radio::part(checked)::after {
  background-color: var(--ig-success-500);
}

igc-radio::part(label) {
  color: var(--ig-secondary-800);
}
```

```css
igc-radio::part(control) {
  --size: 18px;
}

igc-radio-group {
  padding: 12px;
}

igc-radio::part(checked)::after {
  background-color: var(--ig-success-500);
}

igc-radio::part(label) {
  color: var(--ig-secondary-800);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
:root {
    --ig-primary-h: 60deg;
    --ig-primary-s: 100%;
    --ig-primary-l: 25%;
}

igc-radio::part(control) {
    --size: 18px;
}
```

## API References

[`IgcRadioGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioGroupComponent)<br />
[`IgcRadio`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent)<br />

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
