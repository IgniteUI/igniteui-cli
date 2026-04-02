---
title: Blazor Switch Component – Ignite UI for Blazor
_description: Ignite UI for Blazor Switch component enables developers to use binary on/off or true/false data input functions within their applications.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Switch components, Blazor Switch controls
mentionedTypes: ["Switch"]
_license: MIT
_tocName: Switch
---

# Blazor Switch

The Ignite UI for Blazor Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.

## Blazor Switch Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbSwitch>Switch</IgbSwitch>
</div>

@code {


}
```


<div class="divider--half"></div>

## Usage

At its core, the [`IgbSwitch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSwitch.html) component allows for toggling between on/off states. The default styling is done according to the selection controls specification in the Material Design guidelines.

Before using the [`IgbSwitch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSwitch.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbSwitchModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbSwitch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSwitch.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbSwitch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSwitch.html) is as follows:

```razor
<IgbSwitch />
```

> [!WARNING]
> The [`IgbSwitch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSwitch.html) component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the switch, simply place some text between the opening and closing tags:

```razor
<IgbSwitch>Label</IgbSwitch>
```

You can specify if the label should be positioned before or after the switch toggle by setting the [`LabelPosition`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckboxBase.html#IgniteUI_Blazor_Controls_IgbCheckboxBase_LabelPosition) attribute of the switch. Allowed values are `before` and `after`(default):

```razor
<IgbSwitch LabelPosition="@ToggleLabelPosition.Before">Label</IgbSwitch>
```

The switch can also be labelled by elements external to the switch. In this case, the user is given full control to position and style the label in accordance with their needs.

```razor
<span id="switch-label>Label</span>
<IgbSwitch AriaLabelledBy="switch-label" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbSwitch LabelPosition="ToggleLabelPosition.Before">Label</IgbSwitch>
    <div class="wrapper" style="display: flex; align-items: center; gap: 0.5rem;">
        <span id="switch-label">Label</span>
        <IgbSwitch AriaLabelledby="switch-label"/>
    </div>
</div>

@code {


}
```


### Checked

You can use the `checked` attribute to toggle on the switch.

```razor
<IgbSwitch Checked="true" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbSwitch Checked="true">Label</IgbSwitch>
</div>

@code {

}
```


### Required

You can use the `required` attribute to mark the switch as required.

```razor
<IgbSwitch Required="true" />
```

### Invalid

You can use the `invalid` attribute to mark the switch as invalid.

```razor
<IgbSwitch Invalid="true" />
```

### Disabled

You can use the `disabled` attribute to disable the switch.

```razor
<IgbSwitch Disabled="true" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbSwitch Disabled="true">Label</IgbSwitch>
</div>

@code {

}
```


### Forms

You can use the `name` and `value` attributes when using the switch with `Form`.

```razor
<IgbSwitch Name="wifi" Value="enabled" />
```

## Styling

The [`IgbSwitch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSwitch.html) component exposes several CSS parts to give you full control over its styling:

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

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbSwitch Checked="true">Label</IgbSwitch>
</div>

@code {

}
```


<div class="divider--half"></div>

## API References

- [`LabelPosition`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckboxBase.html#IgniteUI_Blazor_Controls_IgbCheckboxBase_LabelPosition)
- [`IgbSwitch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSwitch.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
