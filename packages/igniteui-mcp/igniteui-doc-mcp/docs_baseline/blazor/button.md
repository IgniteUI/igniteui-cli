---
title: Blazor Button Component | Ignite UI for Blazor
_description: Get started with the Blazor Button Component. Select button variants, configure sizes, define styling, and gain flexibility through the Blazor Button OnClick event.
_keywords: Blazor, UI controls, web widgets, UI widgets, Blazor Button Components, Infragistics
mentionedTypes: ["Button", "ButtonBase"]
_license: MIT
_tocName: Button
---

# Blazor Button Overview

The Blazor Button Component lets you enable clickable elements that trigger actions in your Blazor app. You get full control over how you set button variants, configure styles for the wrapped element, and define sizes. The Button Component also gives flexibility through the Blazor Button OnClick event, toggle the Blazor button, disable the Blazor button, and more.

## Blazor Button Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <style>
        .buttonContainer {
            display: flex;
            justify-content: space-evenly;
            margin-top: 20px;
        }
    </style>

    <div class="buttonContainer">
        <IgbButton style="margin:5px" Variant="ButtonVariant.Flat">Flat</IgbButton>
        <IgbButton style="margin:5px" Variant="ButtonVariant.Contained">Contained</IgbButton>
        <IgbButton style="margin:5px" Variant="ButtonVariant.Outlined">Outlined</IgbButton>
    </div>
</div>

@code {

}
```

## Usage

Before using the [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbButtonModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html) is as follows:

```razor
<IgbButton />
```

## Prefix / Suffix

With `prefix` and `suffix` slots of the [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html) component, we can add different content before and after the main content of the button.

```razor
<IgbButton Variant="@ButtonVariant.Contained">
    <span slot="prefix">+</span>Click me<span slot="suffix">-</span>
</IgbButton>
```

## Type

The button component will change its internal structure from a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) type element when the [`Href`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonBase.html#IgniteUI_Blazor_Controls_IgbButtonBase_Href) attribute is set. In that case the button can be thought of as a regular link. Setting the [`Href`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonBase.html#IgniteUI_Blazor_Controls_IgbButtonBase_Href) attribute will allow you to also set the [`Rel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonBase.html#IgniteUI_Blazor_Controls_IgbButtonBase_Rel), [`Target`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonBase.html#IgniteUI_Blazor_Controls_IgbButtonBase_Target) and [`Download`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonBase.html#IgniteUI_Blazor_Controls_IgbButtonBase_Download) attributes.
In the case when the button component uses an actual [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element internally, we can specify its [`DisplayType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonBase.html#IgniteUI_Blazor_Controls_IgbButtonBase_DisplayType) by setting the property to any of the following values:

- `Submit` - when we want to submit the form data
- `reset` - when we want to reset form data to its initial values
- `button` - when we want to add button with a custom functionality anywhere on a webpage

## Button Variants

### Contained Button

Use the [`Variant`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html#IgniteUI_Blazor_Controls_IgbButton_Variant) attribute to add a simple contained button in your component template. Note that if you do not set variant, by default it will be set to contained.

```razor
<IgbButton Variant="@ButtonVariant.Contained" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbButton Variant="ButtonVariant.Contained">Contained</IgbButton>
</div>

@code {


}
```

### Outlined Button

All you have to do to create an `outlined` button is to change the value of the [`Variant`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html#IgniteUI_Blazor_Controls_IgbButton_Variant) property:

```razor
<IgbButton Variant="@ButtonVariant.Outlined" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbButton style="margin:5px" Variant="ButtonVariant.Outlined">Outlined</IgbButton>
</div>

@code {

}
```

### Flat Button

Analogically, we can switch to `flat` variant.

```razor
<IgbButton Variant="@ButtonVariant.Flat" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbButton Variant="ButtonVariant.Flat">Flat</IgbButton>
</div>

@code {


}
```

### Floating Action Button

We can create a floating action button by setting the [`Variant`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html#IgniteUI_Blazor_Controls_IgbButton_Variant) property to `fab`:

```razor
<IgbButton Variant="@ButtonVariant.Fab" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbButton Variant="ButtonVariant.Fab">
        <span slot="prefix">+</span>
        Add
    </IgbButton>
</div>

@code {

}
```

## Button Sizing

Users can change the size of the [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html) using the `--ig-size` CSS variable. In the following example, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size of the button.

```razor
<IgbRadioGroup id="radioGroup" Alignment="ContentOrientation.Horizontal" >
    <IgbRadio Value="small" LabelPosition="RadioLabelPosition.After" @onclick="OnSmallClick">Small</IgbRadio>
    <IgbRadio Value="medium" LabelPosition="RadioLabelPosition.After" @onclick="OnMediumClick">Medium</IgbRadio>
    <IgbRadio Value="large" LabelPosition="RadioLabelPosition.After" Checked="true" @onclick="OnLargeClick">Large</IgbRadio>
</IgbRadioGroup>

@code {
    private SizableComponentSize SizableComponentSize = SizableComponentSize.Large;

    protected override void OnInitialized()
    {
    }

    public void OnSmallClick(EventArgs e)
    {
        SizableComponentSize = SizableComponentSize.Small;
    }

    public void OnMediumClick(EventArgs e)
    {
        SizableComponentSize = SizableComponentSize.Medium;
    }

    public void OnLargeClick(EventArgs e)
    {
        SizableComponentSize = SizableComponentSize.Large;
    }
}
```

The result of implementing the above code should look like the following:

```razor
@using IgniteUI.Blazor.Controls


<style>
    .buttonContainer {
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
    }

    #radioGroup {
        display: flex;
        margin: 0 auto;
        width: 15%;
    }
</style>

<div class="container vertical">
    <IgbRadioGroup id="radioGroup" Alignment="ContentOrientation.Horizontal" >
        <IgbRadio name="size" Value="small" LabelPosition="ToggleLabelPosition.After" Change="OnRadioSizeClick">Small</IgbRadio>
        <IgbRadio name="size" Value="medium" LabelPosition="ToggleLabelPosition.After" Checked="true" Change="OnRadioSizeClick">Medium</IgbRadio>
        <IgbRadio name="size" Value="large" LabelPosition="ToggleLabelPosition.After" Change="OnRadioSizeClick">Large</IgbRadio>
    </IgbRadioGroup>

    <div class="buttonContainer">
        <IgbButton class="@ButtonsSize" Variant="ButtonVariant.Flat">Flat</IgbButton>
        <IgbButton class="@ButtonsSize" Variant="ButtonVariant.Contained">Contained</IgbButton>
        <IgbButton class="@ButtonsSize" Variant="ButtonVariant.Outlined">Outlined</IgbButton>
        <IgbButton class="@ButtonsSize" Variant="ButtonVariant.Fab">Like</IgbButton>
    </div>
</div>

@code {

    private string ButtonsSize = "size-medium";

    public void OnRadioSizeClick(IgbRadioChangeEventArgs e)
    {
        this.ButtonsSize = $"size-{e.Detail.Value.ToLower()}";
    }
}
```

### Download

Setting the [`Download`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonBase.html#IgniteUI_Blazor_Controls_IgbButtonBase_Download) property will prompt the user to save the linked URL instead of navigating to it.

```razor
<IgbButton Variant="@ButtonVariant.Contained" Download="Url" Href="https://www.infragistics.com/" Target="@ButtonBaseTarget._blank">
    Download
</IgbButton>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbButton Variant="ButtonVariant.Contained" Download="Url" Href="https://www.infragistics.com/" Target="ButtonBaseTarget._blank">
        Download
    </IgbButton>
</div>

@code {

}
```

## Styling

The [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html) exposes three CSS parts which we can use for styling:

|Name|Description|
|--|--|
| `base` | The native button element of the igc-button component. |
| `prefix` | The prefix container of the igc-button component. |
| `suffix` | The suffix container of the igc-button component. |

The `base` CSS part allows us to style the wrapped element (`<button>` or `<a>`).

```css
igc-button::part(base) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
  padding: 18px;
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <style>
        igc-button::part(base) {
            background-color: #e99221;
            color: #011627;
            padding: 18px;
        }
    </style>
    <div>
        <IgbButton Variant="ButtonVariant.Contained">Contained</IgbButton>
    </div>

</div>

@code {

}
```

## API References

- [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html)
- [`DisplayType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonBase.html#IgniteUI_Blazor_Controls_IgbButtonBase_DisplayType)
- [`Download`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonBase.html#IgniteUI_Blazor_Controls_IgbButtonBase_Download)
- [`Href`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonBase.html#IgniteUI_Blazor_Controls_IgbButtonBase_Href)
- [`IgbRadioGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadioGroup.html)
- [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
