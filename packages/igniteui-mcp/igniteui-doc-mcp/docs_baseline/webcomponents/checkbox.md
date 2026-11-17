---
title: "Checkbox"
description: "The Web Components Checkbox lets users select, clear, or set an indeterminate option in forms and interactive interfaces."
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Checkbox components, Web Components Checkbox controls"
license: MIT
last_updated: "2026-08-25"
relatedComponents: [Switch]
mentionedTypes: ["Checkbox"]
llms:
  description: "The Web Components Checkbox is a component that lets you add checkboxes to your Web Components apps."
_tocName: Checkbox
---
# Web Components Checkbox Component

The Web Components Checkbox is a component that lets you add checkboxes to your Web Components apps. It behaves as a standard HTML checkbox, enabling users to select basic checked and unchecked states or an additional indeterminate state. You also get full control over the styling of the Web Components checkbox component and ability to use it with forms.

## Live Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.shopping-list {
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 1rem;
    width: 22.5rem;
    height: 24.3125rem;
    padding: 1rem 0;
    border-radius: 0.25rem;
    background: var(--ig-surface-100);
    box-shadow: 0 0.0625rem 0.25rem rgb(0 0 0 / 16%);
}

.list {
    background: transparent;
    border: none;
    gap: 0.25rem;
}

.group-header {
    padding: 0 1rem;
    background: transparent;
    font-family: var(--ig-font-family);
    font-size: var(--ig-overline-font-size);
    font-weight: var(--ig-overline-font-weight);
    line-height: var(--ig-overline-line-height);
    letter-spacing: var(--ig-overline-letter-spacing);
    text-transform: var(--ig-overline-text-transform);
}

.shopping-item + .group-header {
    margin-top: 0.75rem;
}

.group-title {
    color: var(--ig-secondary-500);
}

.shopping-item {
    padding: 0 1rem;
    gap: 0.5rem;
    background: transparent;
    border-bottom: none;
    --border-color: transparent;
    --border-width: 0;
}

.shopping-item:hover,
.shopping-item:focus-within {
    background: transparent;
}

.shopping-item::part(content) {
    display: none;
}

.shopping-item::part(start) {
    margin-inline-start: 0.125rem;
}

.shopping-item::part(end) {
    margin-inline-start: auto;
}

.shopping-item igc-checkbox::part(base) {
    gap: 1.125rem;
}

.shopping-item-checked,
.shopping-item-checked:hover,
.shopping-item-checked:focus-within {
    background: var(--ig-gray-100);
}

.item-menu::part(base) {
    color: var(--ig-gray-700);
}

.add-item {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
}

.add-item::part(base) {
    border-radius: 50%;
}
```

## Anatomy

The Web Components Checkbox renders a selectable control with an optional label.

**Checkbox anatomy:** The Checkbox component presents a selectable control with checked, unchecked, and indeterminate states.

<style>{`
  .checkbox-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .checkbox-anatomy .igd-anatomy__image {
    max-width: 142.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Checkbox Indicator:</strong> indicates the current state. By default it is unselected. Could be before or after the label<br />
<strong>2. Label (optional):</strong> specifies the target data available for selection and deselection</span>

The Web Components Checkbox consists of an indicator and optional label content. Set the label position when the label should appear before or after the indicator.

```text
Checkbox
├── Checkbox Indicator
└── Label (optional)
```

## Getting Started

To use the Web Components Checkbox, follow the [Ignite UI for Web Components Getting Started](../general-getting-started.md) topic for the basic project setup, then install or register the component for your target platform.

Using the **igniteui-webcomponents** package, install the package before importing and registering the Checkbox:

```cmd
npm install igniteui-webcomponents
```

Then import the [`IgcCheckbox`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent), its theme CSS, and register the component module:

```ts
import { defineComponents, IgcCheckboxComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcCheckboxComponent);
```

After registration, render the [`IgcCheckbox`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent) with the platform-specific element or wrapper:

```html
<igc-checkbox></igc-checkbox>
```

## Usage

At its core, the [`IgcCheckbox`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent) lets users choose between selected and unselected states, with support for an indeterminate state when an option represents a partial selection.

You can specify if the label should be positioned before or after the checkbox toggle by setting the [`LabelPosition`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=labelPosition) attribute of the checkbox. Allowed values are `before` and `after` (default):

```html
<igc-checkbox label-position="before">Label</igc-checkbox>
```

The checkbox can also be labelled by elements external to the checkbox. In this case, the user is given full control to position and style the label in accordance with their needs.

```html
<span id="checkbox-label">Label</span>
<igc-checkbox aria-labelledby="checkbox-label"></igc-checkbox>
```

### States

The Checkbox supports different state-related attributes. You can use the [`checked`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=checked) attribute to set the initial state of the checkbox to on or off.

```html
<igc-checkbox checked></igc-checkbox>
```

You can use the [`indeterminate`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=indeterminate) attribute to set the checkbox's value to neither **true** nor **false**.

```html
<igc-checkbox indeterminate></igc-checkbox>
```

You can use the [`disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=disabled) attribute to disable the Checkbox.

```html
<igc-checkbox disabled></igc-checkbox>
```

You can use the [`invalid`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=invalid) attribute to mark the Checkbox as invalid.

```html
<igc-checkbox invalid></igc-checkbox>
```

You can use the [`required`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=required) property to mark the Checkbox as required.

```html
<igc-checkbox required></igc-checkbox>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 1rem;
}

.states {
	display: flex;
	align-items: flex-end;
	gap: 4.5rem;
}

.state {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
}

.state igc-checkbox::part(base) {
	cursor: default;
}

.state-label {
	font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
	letter-spacing: 0.1px;
	color: var(--ig-gray-600);
}
```

### Do/Don't

When many Checkboxes are necessary, arrange them in a column group so users can quickly scan the list. Fewer Checkboxes may be arranged on a single line next to each other, but avoid arranging them in multiple columns.

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 24px 0 16px;">
  
  
</div>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px;">
  <div>
    <p style="color: #258b3b; font-weight: 600; margin: 0 0 8px;">Do</p>
    <p style="margin: 0;">Stack checkboxes vertically in a single column to make options easy to scan and read.</p>
  </div>
  <div>
    <p style="color: #e40046; font-weight: 600; margin: 0 0 8px;">Don't</p>
    <p style="margin: 0;">Avoid arranging checkboxes into multiple columns, as this breaks vertical reading patterns and makes scanning difficult.</p>
  </div>
</div>

## Properties

The following properties cover the main Checkbox configuration options documented on this page. See the full API reference for the complete generated list.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`checked`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=checked) | `boolean` | `false` | Gets or sets whether the checkbox is selected. |
| [`indeterminate`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=indeterminate) | `boolean` | `false` | Gets or sets whether the checkbox is in an indeterminate state. |
| [`labelPosition`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=labelPosition) | `ToggleLabelPosition` | `after` | Sets the position of the checkbox label. |
| [`required`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=required) | `boolean` | `false` | Gets or sets whether the Checkbox is required. |
| [`invalid`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=invalid) | `boolean` | `false` | Gets or sets whether the Checkbox is invalid. |
| [`disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=disabled) | `boolean` | `false` | Gets or sets whether the Checkbox is disabled. |
| [`value`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=value) | `string` | — | Gets or sets the value used when the Checkbox is submitted with a form. |
| [`name`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent&member=name) | `string` | — | Gets or sets the name used when the Checkbox is submitted with a form. |

## Styling

The Web Components Checkbox uses CSS parts and CSS variables to customize its appearance.

### Sass Theming

Use the Ignite UI for Web Components theme system to style the Checkbox consistently with the rest of your application. Verify the available Sass theme parameters in the API documentation before adding a custom theme.

### CSS Variables

Use the following styling properties to customize the Checkbox indicator and selected-state appearance:

| Variable | What it changes |
| --- | --- |
| `--tick-color` | The color of the check icon. |
| `--fill-color` | The background color of the selected checkbox. |

### Style Parts

Use the following CSS parts to target the Checkbox structure:

| Part | What it styles |
| --- | --- |
| `base` | The base wrapper of the Checkbox. |
| `control` | The checkbox control element. |
| `indicator` | The checkbox indicator icon. |
| `label` | The Checkbox label. |

### Custom Styling

The following selectors customize the Checkbox indicator color and selected-state fill:

| Selector | Declaration | Effect |
| --- | --- | --- |
| `igc-checkbox::part(indicator)` | `--tick-color` | Changes the check icon color. |
| `igc-checkbox::part(control checked)::after` | `--fill-color` | Changes the selected checkbox background color. |

```css
igc-checkbox::part(indicator) {
  --tick-color: var(--ig-secondary-500-contrast); /* check icon color */
}
```

```css
igc-checkbox::part(control checked)::after {
  --fill-color: var(--ig-secondary-500); /* checkbox background color */
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@import url("https://use.typekit.net/bng2zgw.css");

.sample {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.team-card {
    /* The design's own palette and typeface. They are set here instead of
       coming from the theme, so the sample keeps its custom look in every theme. */
    --team-surface: #fff;
    --team-primary: #0176ff;
    --team-gray-100: #f3f6fa;
    --team-gray-200: #e5ebf3;
    --team-gray-400: #a9b8cc;
    --team-gray-500: #7d91ab;
    --team-gray-600: #556c86;
    --team-gray-700: #344b65;
    --team-gray-900: #00142b;
    /* aktiv-grotesk is the kit's family name. */
    --ig-font-family: aktiv-grotesk, sans-serif;

    --ig-checkbox-empty-color: var(--team-gray-400);
    --ig-checkbox-empty-color-hover: var(--team-gray-400);
    --ig-checkbox-fill-color: var(--team-primary);
    --ig-checkbox-fill-color-hover: var(--team-primary);
    --ig-checkbox-tick-color: #fff;
    --ig-checkbox-tick-color-hover: #fff;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 26.3125rem;
    padding: 0.5rem 0;
    border: 1px solid var(--team-gray-200);
    border-radius: 0.75rem;
    background: var(--team-surface);
    font-family: var(--ig-font-family);
}

.team-title {
    display: flex;
    align-items: center;
    height: 2rem;
    margin: 0;
    padding: 0 1rem;
    color: var(--team-gray-500);
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
}

.select-all {
    --ig-checkbox-empty-color: var(--team-gray-500);
    --ig-checkbox-empty-color-hover: var(--team-gray-500);
}

.select-all::part(base) {
    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    padding: 0.5rem 1rem;
}

.select-all::part(label) {
    color: var(--team-gray-600);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
}

/* A 24px slot around the 20px box, as in the design, without the padding the
   theme adds around the box for its ripple. */
.select-all::part(control),
.member-check::part(control) {
    margin: 0.125rem;
    padding: 0;
}

.members {
    background: transparent;
    border: none;
    overflow: hidden;
}

.member {
    gap: 1rem;
    padding: 0.5rem 1rem;
    background: transparent;
    border-bottom: none;
    --border-color: transparent;
    --border-width: 0;
}

.member:hover,
.member:focus-within {
    background: transparent;
}

.member-selected,
.member-selected:hover,
.member-selected:focus-within {
    background: var(--team-gray-100);
}

.member igc-avatar {
    --ig-size: var(--ig-size-small);
}

.member-name {
    display: block;
    color: var(--team-gray-900);
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
}

.member-email {
    display: block;
    color: var(--team-gray-700);
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.4px;
}

.continue-button {
    align-self: flex-end;
    margin: 1rem 1rem 0;
}

.continue-button::part(base) {
    min-width: auto;
    width: 5.25rem;
    height: 1.875rem;
    padding: 0 0.75rem;
    border-color: var(--team-primary);
    background: var(--team-primary);
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.1px;
    text-transform: none;
}
```

### Styling with Tailwind

You can style the Web Components Checkbox with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```html
<igc-checkbox class="![--tick-color:var(--ig-secondary-500)]"></igc-checkbox>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Checkbox's default theme styles.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@import url("https://use.typekit.net/bng2zgw.css");
@source "./index.ts";
@source "../index.html";

@theme {
    /* The design's own palette. It lives here instead of coming from the theme
       palette, so the sample keeps its colors in every theme. */
    --color-filter-primary: #0176ff;
    --color-filter-title: #004699;
    --color-filter-divider: #e5ebf3;
    --color-filter-ink: #1a314a;
    --color-filter-empty: #a9b8cc;
}

/* The design's 44px header: an 8px inset around the title's 28px box. */
igc-expansion-panel::part(header) {
    padding: 0.5rem 1rem;
}

/* A 40px row in every theme. The padding sits on the base rather than on the
   control, so the padding a theme adds around the box for its ripple can no
   longer stretch the row. */
.filter-option::part(base) {
    gap: 0.75rem;
    padding: 0.5rem 0.625rem;
}

.filter-option::part(control) {
    padding: 0;
}

.filter-option::part(indicator) {
    --indicator-size: 1rem;
}
```

## Accessibility

The Web Components Checkbox provides a selectable control with a label and state that must remain understandable for keyboard and assistive technology users.

### Keyboard Interaction

The Checkbox uses the keyboard behavior provided by its rendered control. A disabled Checkbox is
not keyboard interactive, and the Space key changes its checked state.

Use the keyboard interaction provided by the Checkbox and verify the focus and state-change behavior for the target platform.

| Key / interaction | Action |
| --- | --- |
| Tab / Shift+Tab | Moves focus to or away from the Checkbox when it is enabled and focusable. |
| Space | Toggles the checked state of the focused Checkbox. |
| Indeterminate state | The Checkbox exposes its current state when the indeterminate state is enabled. |

### Screen Readers / ARIA

The Checkbox exposes its checked state, disabled state, and, when configured, required, invalid,
and indeterminate states through the semantics of its rendered control.

- Provide meaningful label content for every Checkbox so assistive technology users can identify
  its purpose.
- When the label is outside the component, connect it with the supported labelling mechanism and
  verify the announcement in the target platform.
- Preserve the Checkbox state semantics when customizing or wrapping the control.
- Change event handlers report state changes; they do not replace the accessible name or state.

The checked, unchecked, required, invalid, disabled, and indeterminate states must remain available to assistive technology through the component's supported semantics. Verify the rendered announcement against the platform API documentation.

### Accessibility Compliance

Verify the rendered Web Components Checkbox against the accessibility requirements of the application.

| Criterion | How the component supports the requirement |
| --- | --- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The enabled Checkbox can receive keyboard focus and its checked state can be changed with Space. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The Checkbox exposes its accessible name and current selection state through the rendered control and supported state semantics. |
| [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification) | When the Checkbox is invalid, expose the validation state and provide an appropriate message in the surrounding form. |

Your responsibilities:

- Give every Checkbox a meaningful accessible name.
- Keep focus visible and preserve sufficient contrast when customizing the Checkbox theme.
- Ensure required, invalid, disabled, and indeterminate states are also communicated when visual
  styling alone is insufficient.
- Test the rendered Checkbox with keyboard navigation and supported assistive technologies.

## API References

The Web Components Checkbox API reference provides the complete API surface for the component.

[`IgcCheckbox`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent)

## Dependencies

The Web Components Checkbox requires a theme stylesheet to apply its visual styling. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

## Additional Resources

Use the following Web Components resources for API details and project support:

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## Related Components

The Web Components Checkbox is intended for selectable form options. Use the following related component when you need an immediate on/off action instead:

- [`IgcSwitch`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent)

## FAQ

These frequently asked questions cover common Web Components Checkbox selection, accessibility, form, and validation scenarios.

  **Q: Can I use the Checkbox with a form?**

    The Web Components Checkbox is form-associated and participates in a native HTML `<form>`. Set a unique `name` and a `value` so the checked state is submitted with the form.
  
  **Q: How do I show a partially selected Checkbox?**

    The Web Components Checkbox supports a third, indeterminate state for partially selected options. Set the `indeterminate` property to enable that state.
  
  **Q: How do I provide an accessible Checkbox label?**

    The Web Components Checkbox should have meaningful label content so assistive technology users can identify its purpose. When the label is outside the component, connect it with the supported labelling mechanism such as `aria-labelledby`.
  
  **Q: How do I mark a Checkbox as required or invalid?**

    Set the `required` property to indicate that the Checkbox must be selected and the `invalid` property to expose a validation state. Provide an appropriate validation message in the surrounding form when the Checkbox is invalid.
  

