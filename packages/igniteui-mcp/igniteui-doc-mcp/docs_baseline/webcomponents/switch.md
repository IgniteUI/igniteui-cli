---
title: "Switch"
description: "Ignite UI for Web Components Switch component enables developers to use binary on/off or true/false data input functions within their applications."
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Switch components, Web Components Switch controls"
mentionedTypes: ["Switch"]
relatedComponents: [Checkbox, ToggleButton]
license: MIT
last_updated: "2026-08-31"
llms:
  description: "The Ignite UI for Web Components Switch component is a binary choice selection component that behaves similarly to the switch component in iOS."
_tocName: Switch
---
# Switch Component

The Ignite UI for Web Components Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.

## Live Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}

.notifications {
    inline-size: 100%;
    max-inline-size: 384px;
    background: var(--ig-surface-500);
    border-radius: 4px;
    overflow: hidden;

    & .notifications__title {
        margin: 0;
        padding: 16px;
        font: 400 10px / 16px "Titillium Web", sans-serif;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: var(--ig-primary-500);
    }

    & .notifications__row {
        padding-block: 12px;
        padding-inline: 16px;

        & igc-switch {
            display: block;
            inline-size: 100%;

            &::part(base) {
                inline-size: 100%;
                justify-content: space-between;
                gap: 16px;
            }
        }
    }
}

.option {
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: start;
    white-space: normal;

    & .option__label {
        font-size: 16px;
        color: var(--ig-gray-900);
    }

    & .option__hint {
        font-size: 13px;
        color: var(--ig-gray-700);
    }
}
```

## Anatomy

The Web Components Switch contains a control for changing a binary state and an optional label.

**Switch anatomy:** The Switch component contains a control for changing a binary state and an optional label.

<style>{`
  .switch-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .switch-anatomy .igd-anatomy__image {
    max-width: 142.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Track:</strong> indicates the switch path between on and off states.<br />
<strong>2. Thumb:</strong> changes the current state.<br />
<strong>3. Label (optional):</strong> describes what the switch controls.</span>

The following diagram shows the logical structure of the Web Components Switch. The control manages the binary state, while the optional label describes the setting controlled by the switch.

```text
Switch
├── Control
└── Label (optional)
```

## Getting Started

To use the Web Components Switch, follow the [Ignite UI for Web Components Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

At its core, the [`IgcSwitch`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent) component allows for toggling between on/off states. The default styling is done according to the selection controls specification in the Material Design guidelines.

For Web Components using the **igniteui-webcomponents** package, install the package:

```cmd
npm install igniteui-webcomponents
```

Then import the [`IgcSwitch`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent), its theme CSS, and register the component:

```ts
import { defineComponents, IgcSwitchComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcSwitchComponent);
```

The simplest way to start using the [`IgcSwitch`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent) is as follows:

```html
<igc-switch></igc-switch>
```

## Usage

Use the Web Components Switch as a binary choice control for settings that take effect immediately when the user changes their state.

The following example shows the basic Switch configuration. To provide a meaningful label for the switch, simply place some text between the opening and closing tags:

```html
<igc-switch>Accept terms</igc-switch>
```

You can use the [`required`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=required) property to mark the switch as required.

```html
<igc-switch required></igc-switch>
```

You can use the [`invalid`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=invalid) property to mark the switch as invalid.

```html
<igc-switch invalid></igc-switch>
```

### Interaction States

The Switch can be inserted in an `Enabled` or `Disabled` state. In `Enabled` state, the switch also supports `Hover`, `Focused` and `Focused & Hover` states.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}

.states {
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    gap: 32px;

    & :is(.states__column, .states__row) {
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }

    & .states__column {
        text-align: center;
    }

    & .states__row {
        text-align: end;
    }

    & igc-switch {
        justify-self: center;
    }
}
```

### Disabled States

You may also set the state of the switch to `Disabled` to disallow user interaction with it. You can use the [`disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=disabled) attribute to set this state.

```html
<igc-switch disabled></igc-switch>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}

.states {
    --variant-gap: 60px;
    --label-gap: 30px;

    display: flex;
    align-items: center;
    gap: var(--variant-gap);

    & .states__variant {
        display: flex;
        align-items: center;
        gap: var(--label-gap);
    }

    & .states__label {
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }
}
```

### On/Off States

The Switch can be set to an `On` or `Off` state to indicate whether a setting is enabled or disabled.

```html
<igc-switch checked>On</igc-switch>
<igc-switch>Off</igc-switch>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}

.states {
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    gap: 32px;

    & .states__row {
        text-align: end;
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }

    & .states__disabled {
        margin-inline-start: 16px;
    }
}
```

### Layout

You can specify if the label should be positioned before or after the switch toggle by setting the [`LabelPosition`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=labelPosition) property of the switch. Allowed values are `before` and `after` (default):

```html
<igc-switch label-position="before">Label</igc-switch>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}

.variants {
    --variant-gap: 60px;
    --label-gap: 30px;

    display: flex;
    align-items: center;
    gap: var(--variant-gap);

    & .variants__item {
        display: flex;
        align-items: center;
        gap: var(--label-gap);
    }

    & .variants__label {
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }
}
```

The switch can also be labelled by elements external to the switch. In this case, the user is given full control to position and style the label in accordance with their needs.

```html
<span id="switch-label">Label</span>
<igc-switch aria-labelledby="switch-label"></igc-switch>
```

### Do/Don't

**When to use:** Use Switch for an immediate on/off setting that takes effect when the user changes it.

**When not to use:** Use [Checkbox](./checkbox.md) when users select one or more options for a later form submission, or [Button](./button.md) when the control represents an action or a toggleable command.

<div class="table-responsive">
  <table class="table" style="width: 100%; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3; margin-bottom: 24px;">
    <thead>
      <tr>
        <th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Do</th>
        <th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Don't</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
        <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
      </tr>
    </tbody>
  </table>
</div>

## Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`checked`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=checked) | `boolean` | `false` | Gets or sets whether the switch is on. |
| [`disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=disabled) | `boolean` | `false` | Gets or sets whether the switch is disabled. |
| [`invalid`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=invalid) | `boolean` | `false` | Gets or sets whether the switch is invalid. |
| [`labelPosition`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=labelPosition) | `ToggleLabelPosition` | `after` | Sets the position of the label relative to the control. |
| [`name`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=name) | `string` | `-` | Sets the name used when the switch is submitted with a form. |
| [`required`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=required) | `boolean` | `false` | Gets or sets whether the switch is required. |
| [`value`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=value) | `string` | `-` | Sets the value used when the switch is submitted with a form. |

```html
<igc-switch name="wifi" value="enabled"></igc-switch>
```

## Styling

The Web Components Switch uses CSS parts and CSS variables to style its track, thumb, and label.

### Sass Theming

Use the Ignite UI for Web Components theme system to style the Switch consistently with the rest of your application.

Import the theming functions before creating a custom Switch theme:

```scss
@use "igniteui-theming" as *;
```

Create a theme with `switch-theme` and include it in the global stylesheet. The track and thumb parameters are used as the base for the related interaction-state colors:

```scss
$custom-switch: switch-theme(
    $track-on-color: #57a5cd,
);

igc-switch {
    @include switch($custom-switch);
}
```

The same theme applies to Web Components directly and to the underlying `igc-switch` element rendered by the React and Blazor wrappers.

### CSS Variables

Use the following CSS variables to customize the Switch colors and interaction states. Set them on the Switch element to apply the styles to its track, thumb, and label:

| Primary property | Dependent property | Description |
| --- | --- | --- |
| `--track-on-color` | `--track-on-hover-color` | Track background when the switch is checked. |
|  | `--track-off-color` | Track background when the switch is unchecked. |
| `--thumb-on-color` | `--thumb-off-color` | Thumb color for the checked and unchecked states. |
| `--label-color` | `--label-disabled-color` | Label color for the default and disabled states. |

### Style Parts

Use the following CSS parts to target the Switch and its inner elements:

| Part | Component | What it styles |
| --- | --- | --- |
| `base` | [`IgcSwitch`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent) | The base wrapper of the switch. |
| `control` | [`IgcSwitch`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent) | The switch input element. |
| `thumb` | [`IgcSwitch`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent) | The position indicator of the switch. |
| `label` | [`IgcSwitch`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent) | The switch label. |

### Custom Styling

The following example changes the track and thumb colors for the checked and unchecked states:

| Selector | Declaration | Effect |
| --- | --- | --- |
| `igc-switch` | `--track-on-color`, `--track-off-color` | Changes the track background for the checked and unchecked states. |
| `igc-switch` | `--thumb-on-color`, `--thumb-off-color` | Changes the thumb color for the checked and unchecked states. |

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

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}

.security {
    display: block;
    inline-size: 100%;
    max-inline-size: 348px;
    background: var(--ig-surface-500);
    border: 1px solid var(--ig-gray-300);
    border-radius: 16px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%);
    overflow: hidden;

    &::part(header) {
        padding: 16px;
        padding-inline-end: 6px;
        gap: 16px;
    }

    &[open]::part(header) {
        border-block-end: 1px solid var(--ig-gray-300);
    }

    &::part(indicator) {
        transform: none;
    }

    &::part(content) {
        padding-left: 5px;
    }

    & igc-switch {
        display: block;
        inline-size: 60px;
        block-size: 40px;

        &::part(base) {
            inline-size: 60px;
            block-size: 40px;
            justify-content: center;
            align-items: center;
            overflow: visible;
        }

        &::part(control) {
            overflow: visible;
        }
    }

    & igc-radio-group {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-inline-start: 0;
    }

    & igc-radio {
        font: 600 12px / 16px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.15px;
        color: var(--ig-primary-900);

        &::part(label) {
            padding-inline-start: 4px;
        }

        &::part(control) {
            transform: translateX(-4px);
            --fill-color: var(--ig-primary-500);
            --fill-color-border: var(--ig-primary-500);
            --fill-color-hover: var(--ig-primary-500);
            --fill-hover-border-color: var(--ig-primary-500);
        }
    }
}

.option {
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: start;
    white-space: normal;

    & .option__label {
        font: 600 16px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.15px;
        color: var(--ig-gray-700);
    }

    & .option__hint {
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }
}
```

### Styling with Tailwind

You can style the Web Components Switch with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```html
<igc-switch class="!light-switch ![--track-on-color:#7B9E89]"></igc-switch>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Switch's default theme styles.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}
```

## Accessibility

The Web Components Switch exposes a binary state and supports an accessible name through its label or ARIA attributes.

### Keyboard Interaction

| Key | Action |
| --- | --- |
| Tab / Shift+Tab | Moves focus to or from the switch. |
| Space | Toggles the focused switch. |

### Screen Readers / ARIA

The Switch renders an interactive control with a binary checked state. Provide visible label content or an accessible name with `aria-label` or `aria-labelledby`, and keep the label specific to the setting controlled by the switch.

- The control exposes its checked state and disabled state to assistive technology.
- The `igcChange` event is emitted when the checked state changes.

### Accessibility Compliance

Infragistics documents Ignite UI for Web Components accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The switch can be reached with the keyboard and toggled with Space. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The switch exposes an accessible name and its binary checked state through the rendered control. |

## Troubleshooting

Use this section to check boundaries and common decisions before treating Switch as a form field, interactive command, or setting control.

### Why does the Switch not submit with my form?

The Switch is form-associated but requires a `name` and `value` to contribute a value when the form is submitted. Set both properties and use the form integration supported by your target platform.

### Why is the Switch not announced correctly by a screen reader?

The Switch needs an accessible name. Add visible label content or reference an external label with `aria-labelledby`; use `aria-label` when visible text is not available.

### Known Limitations

The Web Components Switch has the following platform-independent limitations:

- A Switch represents one binary setting; use a different control when users need multiple choices or a deferred form selection.
- A Switch does not provide an accessible name automatically when it has no label or ARIA naming attribute.

## API References

See the complete Web Components Switch API reference:

[`IgcSwitch`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent)

## Dependencies

The Web Components Switch requires a theme stylesheet to apply its visual styling. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

## Additional Resources

Use the following Web Components resources for API details, examples, and project support:

- [Lists - Design System Pattern](https://www.infragistics.com/products/indigo-design/help/patterns/lists)
- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## Related Components

- [Checkbox](./checkbox.md) - Use Checkbox when users select one or more options, especially as part of a form.

- [Button](./button.md) - Use Button when the control represents a command or action rather than a setting.

## FAQ

  **Q: How do I set the Switch to its initial on or off state?**

    Set the [`checked`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=checked) property to `true` for the on state or `false` for the off state. The property uses a Boolean value in React, Web Components, and Blazor syntax.
  
  **Q: How do I position the Switch label?**

    Place the label text inside the Switch and set the [`labelPosition`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=labelPosition) property to `before` or `after`. The default label position is `after`.
  
  **Q: How do I submit a Switch value with a form?**

    Set both the [`name`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=name) and [`value`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=value) properties. In Blazor, use the `EditForm` component instead of a standard HTML `form`.
  
  **Q: How do I make a Switch required or invalid?**

    Set the [`required`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=required) property when the setting must be selected, and set [`invalid`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=invalid) when the control is in an invalid state. Use [`disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcSwitchComponent&member=disabled) when users must not be able to change the setting.
  

