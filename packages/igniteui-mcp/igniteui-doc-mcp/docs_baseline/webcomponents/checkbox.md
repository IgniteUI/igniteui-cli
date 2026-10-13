---
title: "Web Components Checkbox Component | Ignite UI for Web Components"
description: Learn how to use the Web Components Checkbox Component to add checkboxes and enable checked, unchecked or indeterminate state for end-users.
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Checkbox components, Web Components Checkbox controls"
license: MIT
mentionedTypes: ["Checkbox", "Form"]
llms:
  description: "The Web Components Checkbox is a component that lets you add checkboxes to your Web Components apps."
_tocName: Checkbox
---
# Web Components Checkbox Overview

The Web Components Checkbox is a component that lets you add checkboxes to your Web Components apps. It behaves as a standard HTML checkbox, enabling users to select basic checked and unchecked states or an additional indeterminate state. You also get full control over the styling of the Web Components checkbox component and ability to use it with forms.

## Checkbox Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Usage

At its core, the [`IgcCheckbox`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent) allows for a choice between selected/unselected state. The default styling is done according to the selection controls specification in the Material Design guidelines.

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcCheckbox`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcCheckboxComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcCheckboxComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcCheckbox`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent) is as follows:

```html
<igc-checkbox></igc-checkbox>
```

**Warning:** 
The [`IgcCheckbox`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent) component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the checkbox, simply place some text between the opening and closing tags:

```html
<igc-checkbox>Label</igc-checkbox>
```

You can specify if the label should be positioned before or after the checkbox toggle by setting the [`LabelPosition`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=labelPosition) attribute of the checkbox. Allowed values are `before` and `after` (default):

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

You can use the [`Checked`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=checked) attribute of the component to determine whether the checkbox should be toggled on or off by default.

```html
<igc-checkbox checked></igc-checkbox>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Indeterminate

You can use the [`Indeterminate`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=indeterminate) property of the component to set the checkbox's value to neither **true** nor **false**.

```html
<igc-checkbox indeterminate></igc-checkbox>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Required

You can use the [`Required`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=required) property to mark the checkbox as required.

```html
<igc-checkbox required></igc-checkbox>
```

### Invalid

You can use the [`Invalid`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=invalid) attribute to mark the checkbox as invalid.

```html
<igc-checkbox invalid></igc-checkbox>
```

### Disabled

You can use the [`Disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=disabled) attribute to disable the checkbox.

```html
<igc-checkbox disabled></igc-checkbox>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Forms

You can use the [`Name`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=name) and [`Value`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=value) attributes when using the checkbox with `Form`.

```html
<igc-checkbox name="wifi" value="enabled"></igc-checkbox>
```

## Styling

The [`IgcCheckbox`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent) component exposes four CSS parts which we can use for styling:

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
[`IgcCheckbox`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent)
## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
