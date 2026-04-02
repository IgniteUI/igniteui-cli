---
title: Blazor Checkbox Component | Ignite UI for Blazor
_description: Learn how to use the Blazor Checkbox Component to add checkboxes and enable checked, unchecked or indeterminate state for end-users.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Checkbox components, Blazor Checkbox controls
_license: MIT
mentionedTypes: ["Checkbox", "Form"]
_tocName: Checkbox
---

# Blazor Checkbox Overview

The Blazor Checkbox is a component that lets you add checkboxes to your Blazor apps. It behaves as a standard HTML checkbox, enabling users to select basic checked and unchecked states or an additional indeterminate state. You also get full control over the styling of the Blazor checkbox component and ability to use it with forms.

## Checkbox Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbCheckbox>Checkbox</IgbCheckbox>
</div>

@code {

}
```


<div class="divider--half"></div>

## Usage

At its core, the [`IgbCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckbox.html) allows for a choice between selected/unselected state. The default styling is done according to the selection controls specification in the Material Design guidelines.

Before using the [`IgbCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckbox.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbCheckboxModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckbox.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<div class="divider--half"></div>

The simplest way to start using the [`IgbCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckbox.html) is as follows:

```razor
<IgbCheckbox />
```

> [!WARNING]
> The [`IgbCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckbox.html) component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the checkbox, simply place some text between the opening and closing tags:

```razor
<IgbCheckbox>Label</IgbCheckbox>
```

You can specify if the label should be positioned before or after the checkbox toggle by setting the `label-position` attribute of the checkbox. Allowed values are `before` and `after` (default):

```razor
<IgbCheckbox LabelPosition="@ToggleLabelPosition.Before">Label</IgbCheckbox>
```

The checkbox can also be labelled by elements external to the checkbox. In this case, the user is given full control to position and style the label in accordance with their needs.

```razor
<span id="checkbox-label">Label</span>
<IgbCheckbox AriaLabelledby="checkbox-label" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <style>
        .wrapper {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    </style>

    <IgbCheckbox LabelPosition=ToggleLabelPosition.Before>Label</IgbCheckbox>
    <div class="wrapper">
        <span id="checkbox-label">Label</span>
        <IgbCheckbox AriaLabelledby="checkbox-label"/>
    </div>

</div>

@code {


}
```


### Checked

You can use the [`Checked`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckboxBase.html#IgniteUI_Blazor_Controls_IgbCheckboxBase_Checked) attribute of the component to determine whether the checkbox should be toggled on or off by default.

```razor
<IgbCheckbox Checked="true" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbCheckbox Checked=true>Label</IgbCheckbox>
</div>

@code {

}
```


### Indeterminate

You can use the [`Indeterminate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckbox.html#IgniteUI_Blazor_Controls_IgbCheckbox_Indeterminate) property of the component to set the checkbox's value to neither **true** nor **false**.

```razor
<IgbCheckbox Indeterminate="true" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbCheckbox Indeterminate=true>Label</IgbCheckbox>
</div>

@code {


}
```


### Required

You can use the [`Required`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckboxBase.html#IgniteUI_Blazor_Controls_IgbCheckboxBase_Required) property to mark the checkbox as required.

```razor
<IgbCheckbox Required="true" />
```

### Invalid

You can use the [`Invalid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckboxBase.html#IgniteUI_Blazor_Controls_IgbCheckboxBase_Invalid) attribute to mark the checkbox as invalid.

```razor
<IgbCheckbox Invalid="true" />
```

### Disabled

You can use the [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckboxBase.html#IgniteUI_Blazor_Controls_IgbCheckboxBase_Disabled) attribute to disable the checkbox.

```razor
<IgbCheckbox Disabled="true" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbCheckbox Disabled=true>Label</IgbCheckbox>
</div>

@code {

}
```


### Forms

You can use the `Name` and [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckboxBase.html#IgniteUI_Blazor_Controls_IgbCheckboxBase_Value) attributes when using the checkbox with `Form`.

```razor
<IgbCheckbox Name="wifi" Value="enabled" />
```

## Styling

The [`IgbCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckbox.html) component exposes four CSS parts which we can use for styling:

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

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbCheckbox Checked=true>Label</IgbCheckbox>
</div>

@code {

}
```


## API References

- [`IgbCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckbox.html)
- [`Checked`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckboxBase.html#IgniteUI_Blazor_Controls_IgbCheckboxBase_Checked)
- [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckboxBase.html#IgniteUI_Blazor_Controls_IgbCheckboxBase_Disabled)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
