---
title: Radio and Radio Group
_description: With Ignite UI for Blazor Radio Button and Radio Group controls, developers can seamlessly present lists of options for users to select for better UI in template-driven and reactive forms.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Radio Button components, Blazor Radio Button controls, Blazor Radio Group component, Blazor Radio Group control
_license: MIT
mentionedTypes: ["Radio", "RadioGroup", "Form"]
_tocName: Radio & Radio Group
---

# Blazor Radio & Radio Group

The Ignite UI for Blazor Radio component allows the user to select a single option from an available set of options that are listed side by side.

## Ignite UI for Blazor Radio Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div style="width: 25rem; border: 1px solid gainsboro">
        <IgbRadioGroup>
            <IgbRadio name="fruit">Apple</IgbRadio>
            <IgbRadio name="fruit" Checked="true">Banana</IgbRadio>
            <IgbRadio name="fruit">Mango</IgbRadio>
            <IgbRadio name="fruit">Orange</IgbRadio>
        </IgbRadioGroup>
    </div>
</div>

@code {


}
```


<div class="divider--half"></div>

### Usage

Before using the [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html) and the [`IgbRadioGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadioGroup.html), you need to register them as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
  typeof(IgbRadioModule),
  typeof(IgbRadioGroupModule)
);
```

You will also need to link an additional CSS file to apply the styling to the [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html) and the [`IgbRadioGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadioGroup.html) components. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html) is as follows:

```razor
<IgbRadioGroup>
    <IgbRadio>Apple</IgbRadio>
    <IgbRadio>Banana</IgbRadio>
    <IgbRadio>Mango</IgbRadio>
    <IgbRadio>Orange</IgbRadio>
</IgbRadioGroup>
```

> [!WARNING]
> The [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html) component doesn't work with the standard `<form>` element. Use `Form` instead.

## Examples

### Label

To provide a meaningful label for the [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html), simply place some text between the opening and closing tags:

```razor
<IgbRadio>Apple</IgbRadio>
```

You can specify if the label should be positioned before or after the [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html) button by setting the `label-position` attribute. Allowed values are `before` and `after`(default):

```razor
<IgbRadio LabelPosition="@RadioLabelPosition.Before">Apple</IgbRadio>
```

The [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html) can also be labelled by elements external to it. In this case the user is given full control to position and style the label in accordance to their needs.

```razor
<span id="radio-label">Label</span>
<IgbRadio AriaLabelledBy="radio-label" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbRadioGroup>
        <IgbRadio name="fruit" LabelPosition="ToggleLabelPosition.Before" Value="apple">Apple</IgbRadio>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span id="radio-label">Orange</span>
            <IgbRadio name="fruit" AriaLabelledby="radio-label" Value="orange"></IgbRadio>
        </div>
    </IgbRadioGroup>
</div>

@code {

}
```


### Checked

You can use the `checked` attribute to toggle on the radio.

```razor
<IgbRadioGroup>
    <IgbRadio>Apple</IgbRadio>
    <IgbRadio Checked="true">Banana</IgbRadio>
    <IgbRadio>Mango</IgbRadio>
    <IgbRadio>Orange</IgbRadio>
</IgbRadioGroup>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div style="width: 25rem; border: 1px solid gainsboro">
        <IgbRadioGroup>
            <IgbRadio name="fruit">Apple</IgbRadio>
            <IgbRadio name="fruit" Checked="true">Banana</IgbRadio>
            <IgbRadio name="fruit">Mango</IgbRadio>
            <IgbRadio name="fruit">Orange</IgbRadio>
        </IgbRadioGroup>
    </div>
</div>

@code {


}
```


### Invalid

You can use the `invalid` attribute to mark the radio as invalid.

```razor
<IgbRadio Invalid="true" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical" style="width: 25rem; height: 1.5rem; border: 1px solid gainsboro">
    <IgbRadio Invalid="true">Invalid</IgbRadio>
</div>

@code {

}
```


### Disabled

You can use the `disabled` attribute to disable the radio.

```razor
<IgbRadioGroup>
    <IgbRadio>Apple</IgbRadio>
    <IgbRadio Disabled="true">Banana</IgbRadio>
    <IgbRadio>Mango</IgbRadio>
    <IgbRadio>Orange</IgbRadio>
</IgbRadioGroup>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical" >
    <div style="width: 25rem; border: 1px solid gainsboro">
        <IgbRadioGroup>
            <IgbRadio name="fruit">Apple</IgbRadio>
            <IgbRadio name="fruit" Disabled="true">Banana</IgbRadio>
            <IgbRadio name="fruit">Mango</IgbRadio>
            <IgbRadio name="fruit">Orange</IgbRadio>
        </IgbRadioGroup>
    </div>
</div>

@code {


}
```


### Group Alignment

The [`IgbRadioGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadioGroup.html) allows you to easily change the placement directionality of the radio buttons it contains using the `alignment` attribute. Allowed values are `vertical`(default) and `horizontal`.

```razor
<IgbRadioGroup Alignment="@ContentOrientation.Horizontal">
    <IgbRadio>Apple</IgbRadio>
    <IgbRadio>Banana</IgbRadio>
    <IgbRadio>Mango</IgbRadio>
    <IgbRadio>Orange</IgbRadio>
</IgbRadioGroup>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical" style="width: 26.875rem; height: 1.5rem; border: 1px solid gainsboro">
    <IgbRadioGroup Alignment="ContentOrientation.Horizontal">
        <IgbRadio name="fruit">Apple</IgbRadio>
        <IgbRadio name="fruit" Checked="true">Banana</IgbRadio>
        <IgbRadio name="fruit">Mango</IgbRadio>
        <IgbRadio name="fruit">Orange</IgbRadio>
    </IgbRadioGroup>
</div>

@code {

}
```


### Forms

You can use the `name` and `value` attributes when using the radio with `Form`.

```razor
<IgbRadioGroup>
    <IgbRadio Name="fruit" Value="apple">Apple</IgbRadio>
    <IgbRadio Name="fruit" Value="banana">Banana</IgbRadio>
    <IgbRadio Name="fruit" Value="mango">Mango</IgbRadio>
    <IgbRadio Name="fruit" Value="orange">Orange</IgbRadio>
</IgbRadioGroup>
```

## Styling

The [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html) component exposes several CSS parts (`base`, `control`, and `label`) to give you full control over its styling.

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

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div style="width: 16rem; border: 1px solid gainsboro">
        <style>
            :root {
                --igc-primary-h: 60deg;
                --igc-primary-s: 100%;
                --igc-primary-l: 25%;
            }

            igc-radio::part(control) {
                --size: 18px;
            }
        </style>
        <IgbRadioGroup>
            <IgbRadio name="fruit">Apple</IgbRadio>
            <IgbRadio name="fruit" Checked="true">Banana</IgbRadio>
            <IgbRadio name="fruit">Mango</IgbRadio>
            <IgbRadio name="fruit">Orange</IgbRadio>
        </IgbRadioGroup>
    </div>
</div>

@code {


}
```


<div class="divider--half"></div>

## API References

- [`IgbRadioGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadioGroup.html)
- [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
