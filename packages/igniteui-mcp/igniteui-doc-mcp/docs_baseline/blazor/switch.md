---
title: "Switch"
description: "Ignite UI for Blazor Switch component enables developers to use binary on/off or true/false data input functions within their applications."
keywords: "Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Switch components, Blazor Switch controls"
mentionedTypes: ["Switch"]
relatedComponents: [Checkbox, ToggleButton]
license: MIT
last_updated: "2026-08-31"
llms:
  description: "The Ignite UI for Blazor Switch component is a binary choice selection component that behaves similarly to the switch component in iOS."
_tocName: Switch
---
# Switch Component

The Ignite UI for Blazor Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.

## Live Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="notifications">
        <h6 class="notifications__title">Notifications</h6>
        <div class="notifications__row">
            <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Checked="true">
                <span class="option">
                    <span class="option__label">Push notifications</span>
                    <span class="option__hint">Deliver alerts to this device</span>
                </span>
            </IgbSwitch>
        </div>
        <div class="notifications__row">
            <IgbSwitch LabelPosition="ToggleLabelPosition.Before">
                <span class="option">
                    <span class="option__label">Weekly digest</span>
                    <span class="option__hint">Summary email every Monday</span>
                </span>
            </IgbSwitch>
        </div>
        <div class="notifications__row">
            <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Disabled="true">
                <span class="option">
                    <span class="option__label">SMS alerts</span>
                    <span class="option__hint">Unavailable on your plan</span>
                </span>
            </IgbSwitch>
        </div>
    </div>
</div>

@code {

}
```

## Anatomy

The Blazor Switch contains a control for changing a binary state and an optional label.

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

The following diagram shows the logical structure of the Blazor Switch. The control manages the binary state, while the optional label describes the setting controlled by the switch.

```text
Switch
├── Control
└── Label (optional)
```

## Getting Started

To use the Blazor Switch, follow the [Ignite UI for Blazor Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

At its core, the [`IgbSwitch`](mcp:get_api_reference?platform=blazor&component=IgbSwitch) component allows for toggling between on/off states. The default styling is done according to the selection controls specification in the Material Design guidelines.

For Blazor using the **IgniteUI.Blazor** package, register the Switch module as follows:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbSwitchModule));
```

Then link the additional CSS file in the **wwwroot/index.html** file for a **Blazor WebAssembly** project or in the **Pages/_Host.cshtml** file for a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbSwitch`](mcp:get_api_reference?platform=blazor&component=IgbSwitch) is as follows:

```razor
<IgbSwitch />
```

**Warning: Warning**

The [`IgbSwitch`](mcp:get_api_reference?platform=blazor&component=IgbSwitch) component doesn't work with a standard HTML `<form>` element in Blazor. Use the Blazor `EditForm` component instead.

## Usage

Use the Blazor Switch as a binary choice control for settings that take effect immediately when the user changes their state.

The following example shows the basic Switch configuration. To provide a meaningful label for the switch, simply place some text between the opening and closing tags:

```razor
<IgbSwitch>Accept terms</IgbSwitch>
```

You can use the [`required`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=required) property to mark the switch as required.

```razor
<IgbSwitch Required="true" />
```

You can use the [`invalid`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=invalid) property to mark the switch as invalid.

```razor
<IgbSwitch Invalid="true" />
```

### Interaction States

The Switch can be inserted in an `Enabled` or `Disabled` state. In `Enabled` state, the switch also supports `Hover`, `Focused` and `Focused & Hover` states.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="states">
        <span class="states__corner"></span>
        <span class="states__column">Hover</span>
        <span class="states__column">Focused</span>
        <span class="states__column">Focused &amp; Hover</span>

        <span class="states__row">Enabled / On</span>
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Checked="true">
            <span>Power</span>
        </IgbSwitch>
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Checked="true">
            <span>Power</span>
        </IgbSwitch>
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Checked="true">
            <span>Power</span>
        </IgbSwitch>

        <span class="states__row">Enabled / Off</span>
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before">
            <span>Power</span>
        </IgbSwitch>
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before">
            <span>Power</span>
        </IgbSwitch>
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before">
            <span>Power</span>
        </IgbSwitch>
    </div>
</div>

@code {

}
```

### Disabled States

You may also set the state of the switch to `Disabled` to disallow user interaction with it. You can use the [`disabled`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=disabled) attribute to set this state.

```razor
<IgbSwitch Disabled="true" />
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="states">
        <div class="states__variant">
            <span class="states__label">Disabled Checked</span>
            <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Disabled="true" Checked="true">
                <span>Power</span>
            </IgbSwitch>
        </div>
        <div class="states__variant">
            <span class="states__label">Disabled Unchecked</span>
            <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Disabled="true">
                <span>Power</span>
            </IgbSwitch>
        </div>
    </div>
</div>

@code {

}
```

### On/Off States

The Switch can be set to an `On` or `Off` state to indicate whether a setting is enabled or disabled.

```razor
<IgbSwitch Checked="true">On</IgbSwitch>
<IgbSwitch Checked="false">Off</IgbSwitch>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="states">
        <span class="states__row">On</span>
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Checked="true">
            <span>Power</span>
        </IgbSwitch>
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Checked="true" Disabled="true">
            <span>Power</span>
        </IgbSwitch>

        <span class="states__row">Off</span>
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before">
            <span>Power</span>
        </IgbSwitch>
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Disabled="true">
            <span>Power</span>
        </IgbSwitch>
    </div>
</div>

@code {

}
```

### Layout

You can specify if the label should be positioned before or after the switch toggle by setting the [`LabelPosition`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=labelPosition) property of the switch. Allowed values are `before` and `after` (default):

```razor
<IgbSwitch LabelPosition="@ToggleLabelPosition.Before">Label</IgbSwitch>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="variants">
        <div class="variants__item">
            <span class="variants__label">Label Before</span>
            <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Checked="true">
                <span>Power</span>
            </IgbSwitch>
        </div>
        <div class="variants__item">
            <span class="variants__label">Label After</span>
            <IgbSwitch LabelPosition="ToggleLabelPosition.After" Checked="true">
                <span>Power</span>
            </IgbSwitch>
        </div>
    </div>
</div>

@code {

}
```

The switch can also be labelled by elements external to the switch. In this case, the user is given full control to position and style the label in accordance with their needs.

```razor
<span id="switch-label">Label</span>
<IgbSwitch AriaLabelledBy="switch-label" />
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
| [`checked`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=checked) | `boolean` | `false` | Gets or sets whether the switch is on. |
| [`disabled`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=disabled) | `boolean` | `false` | Gets or sets whether the switch is disabled. |
| [`invalid`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=invalid) | `boolean` | `false` | Gets or sets whether the switch is invalid. |
| [`labelPosition`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=labelPosition) | `ToggleLabelPosition` | `after` | Sets the position of the label relative to the control. |
| [`name`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=name) | `string` | `-` | Sets the name used when the switch is submitted with a form. |
| [`required`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=required) | `boolean` | `false` | Gets or sets whether the switch is required. |
| [`value`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=value) | `string` | `-` | Sets the value used when the switch is submitted with a form. |

```razor
<IgbSwitch Name="wifi" Value="enabled" />
```

## Styling

The Blazor Switch uses CSS parts and CSS variables to style its track, thumb, and label.

### Sass Theming

Use the Ignite UI for Blazor theme system to style the Switch consistently with the rest of your application.

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
| `base` | [`IgbSwitch`](mcp:get_api_reference?platform=blazor&component=IgbSwitch) | The base wrapper of the switch. |
| `control` | [`IgbSwitch`](mcp:get_api_reference?platform=blazor&component=IgbSwitch) | The switch input element. |
| `thumb` | [`IgbSwitch`](mcp:get_api_reference?platform=blazor&component=IgbSwitch) | The position indicator of the switch. |
| `label` | [`IgbSwitch`](mcp:get_api_reference?platform=blazor&component=IgbSwitch) | The switch label. |

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

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    @* a click on the switch bubbles up to the panel header, so only the open state has to be mirrored back *@
    <IgbExpansionPanel class="security"
                       IndicatorPosition="ExpansionPanelIndicatorPosition.End"
                       Open="IsOpen"
                       Opened="OnOpened"
                       Closed="OnClosed">
        <div slot="title" class="option">
            <span class="option__label">Two-factor authentication</span>
            <span class="option__hint">Extra sign-in verification</span>
        </div>
        <IgbSwitch slot="indicator" Checked="IsOpen" />
        <IgbRadioGroup Alignment="ContentOrientation.Vertical">
            <IgbRadio Name="method" Value="app" Checked="true">Authenticator app</IgbRadio>
            <IgbRadio Name="method" Value="key">Security key</IgbRadio>
            <IgbRadio Name="method" Value="codes">Backup codes</IgbRadio>
        </IgbRadioGroup>
    </IgbExpansionPanel>
</div>

@code {
    private bool IsOpen { get; set; } = true;

    private void OnOpened(IgbExpansionPanelComponentEventArgs args)
    {
        this.IsOpen = true;
    }

    private void OnClosed(IgbExpansionPanelComponentEventArgs args)
    {
        this.IsOpen = false;
    }
}
```

### Styling with Tailwind

You can style the Blazor Switch with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```razor
<IgbSwitch Class="!light-switch ![--track-on-color:#7B9E89]" />
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Switch's default theme styles.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@tailwind utilities;

.container.sample {
    display: flex;
    place-content: center;
    place-items: center;
}

.dashboard-card {
    border-radius: 8px;
    overflow: hidden;
}
```

## Accessibility

The Blazor Switch exposes a binary state and supports an accessible name through its label or ARIA attributes.

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

Infragistics documents Ignite UI for Blazor accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

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

The Blazor Switch has the following platform-independent limitations:

- A Switch represents one binary setting; use a different control when users need multiple choices or a deferred form selection.
- A Switch does not provide an accessible name automatically when it has no label or ARIA naming attribute.

## API References

See the complete Blazor Switch API reference:

[`IgbSwitch`](mcp:get_api_reference?platform=blazor&component=IgbSwitch)

## Dependencies

The Blazor Switch requires a theme stylesheet to apply its visual styling. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

## Additional Resources

Use the following Blazor resources for API details, examples, and project support:

- [Lists - Design System Pattern](https://www.infragistics.com/products/indigo-design/help/patterns/lists)
- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

## Related Components

- [Checkbox](./checkbox.md) - Use Checkbox when users select one or more options, especially as part of a form.

- [Button](./button.md) - Use Button when the control represents a command or action rather than a setting.

## FAQ

  **Q: How do I set the Switch to its initial on or off state?**

    Set the [`checked`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=checked) property to `true` for the on state or `false` for the off state. The property uses a Boolean value in React, Web Components, and Blazor syntax.
  
  **Q: How do I position the Switch label?**

    Place the label text inside the Switch and set the [`labelPosition`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=labelPosition) property to `before` or `after`. The default label position is `after`.
  
  **Q: How do I submit a Switch value with a form?**

    Set both the [`name`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=name) and [`value`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=value) properties. In Blazor, use the `EditForm` component instead of a standard HTML `form`.
  
  **Q: How do I make a Switch required or invalid?**

    Set the [`required`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=required) property when the setting must be selected, and set [`invalid`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=invalid) when the control is in an invalid state. Use [`disabled`](mcp:get_api_reference?platform=blazor&component=IgbSwitch&member=disabled) when users must not be able to change the setting.
  

