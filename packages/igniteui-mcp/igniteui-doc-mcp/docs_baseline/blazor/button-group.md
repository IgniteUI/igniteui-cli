---
title: Blazor Button Group Component | Ignite UI for Blazor
_description: Get started with the Blazor Button Group Component - series of Blazor Toggle Buttons, exposing features such as layout and selection.
_keywords: Blazor, UI controls, web widgets, UI widgets, Blazor Button Group Components, Infragistics
mentionedTypes: ["ToggleButton", "ButtonGroup"]
_license: MIT
_tocName: Button Group
---

# Blazor Button Group Overview

The Blazor Button Group component is used to organize [`IgbToggleButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToggleButton.html)'s into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.

## Blazor Button Example

```razor
@using IgniteUI.Blazor.Controls

<style>
    igc-button-group {
        max-width: 400px;
    }

    igc-ripple {
        --color: gray;
    }
</style>

<div class="container sample">
    <IgbButtonGroup>
        <IgbToggleButton Value="left">
            <IgbIcon @ref="iconRef" IconName="format_align_left" Collection="material"></IgbIcon>
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="center">
            <IgbIcon IconName="format_align_center" Collection="material"></IgbIcon>
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="right">
            <IgbIcon IconName="format_align_right" Collection="material"></IgbIcon>
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="justify" Selected="true">
            <IgbIcon IconName="format_align_justify" Collection="material"></IgbIcon>
            <IgbRipple />
        </IgbToggleButton>
    </IgbButtonGroup>
</div>

 @code {
    private string formatAlignLeft = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z'/></svg>";
    private string formatAlignCenter = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z'/></svg>";
    private string formatAlignRight = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z'/></svg>";
    private string formatAlignJustify = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z'/></svg>";

    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.iconRef != null && firstRender)
        {
            this.iconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.iconRef.RegisterIconFromText("format_align_left", formatAlignLeft, "material"); ;
                this.iconRef.RegisterIconFromText("format_align_center", formatAlignCenter, "material"); ;
                this.iconRef.RegisterIconFromText("format_align_right", formatAlignRight, "material"); ;
                this.iconRef.RegisterIconFromText("format_align_justify", formatAlignJustify, "material"); ;
            }));
        }
    }
}
```


## Usage

<!-- Blazor -->

Before using the [`IgbButtonGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbButtonGroupModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbButtonGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

Now that you have the Ignite UI for Blazor Button Group imported, you can start with a basic configuration of the [`IgbButtonGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html) and its buttons.

Use the [`IgbButtonGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html) selector to wrap your [`IgbToggleButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToggleButton.html)s and display them into a button group. If you want a button to be selected by default, use the [`Selected`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToggleButton.html#IgniteUI_Blazor_Controls_IgbToggleButton_Selected) attribute:

```razor
<IgbButtonGroup>
    <IgbToggleButton Value="left">
        <IgbIcon @ref="iconRef" IconName="format_align_left" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="center">
        <IgbIcon IconName="format_align_center" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="right">
        <IgbIcon IconName="format_align_right" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="justify" Selected="true">
        <IgbIcon IconName="format_align_justify" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
</IgbButtonGroup>
```

## Examples

### Alignment

Use the [`Alignment`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html#IgniteUI_Blazor_Controls_IgbButtonGroup_Alignment) property to set the orientation of the buttons in the button group.

```razor
@using IgniteUI.Blazor.Controls

<style>
    igc-button-group {
        width: 200px;
    }

    igc-ripple {
        --color: gray;
    }
</style>

<div class="container sample">
    <IgbButtonGroup Alignment="ContentOrientation.Vertical">
        <IgbToggleButton Value="sofia">
            Sofia
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="london">
            London
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="new york" Selected="true">
            New York
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="tokyo">
            Tokyo
            <IgbRipple />
        </IgbToggleButton>
    </IgbButtonGroup>
</div>

 @code {

}
```


### Selection

In order to configure the Ignite UI for Blazor [`IgbButtonGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html) selection, you could use its [`Selection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html#IgniteUI_Blazor_Controls_IgbButtonGroup_Selection) property. This property accepts the following three modes:

- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **single-required** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multiple** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed [`IgbButtonGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html) selection modes:

```razor
@using IgniteUI.Blazor.Controls

<style>
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
</style>

<div class="container sample">
    <div class="radio-group-container">
        <label>Selection Mode</label>
        <IgbRadioGroup Alignment="ContentOrientation.Horizontal">
            <IgbRadio Name="mode" Value="single" Checked @onclick="OnSingleClick">Single</IgbRadio>
            <IgbRadio Name="mode" Value="single-required" @onclick="OnSingleRequiredClick">Single-Required</IgbRadio>
            <IgbRadio Name="mode" Value="Multiple" @onclick="OnMultipleClick">Multiple</IgbRadio>
        </IgbRadioGroup>
    </div>
    <IgbButtonGroup @ref="buttonGroupRef">
        <IgbToggleButton Value="bold">
            <IgbIcon @ref="iconRef" IconName="bold" Collection="material"></IgbIcon>
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="italic">
            <IgbIcon IconName="italic" Collection="material"></IgbIcon>
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="underlined">
            <IgbIcon IconName="underlined" Collection="material"></IgbIcon>
            <IgbRipple />
        </IgbToggleButton>
    </IgbButtonGroup>
</div>

 @code {
    private string boldIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z'/></svg>";
    private string italicIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z'/></svg>";
    private string underlinedIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z'/></svg>";

    private IgbIcon iconRef;
    private IgbButtonGroup buttonGroupRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.iconRef != null && firstRender)
        {
            this.iconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.iconRef.RegisterIconFromText("bold", boldIcon, "material");;
                this.iconRef.RegisterIconFromText("italic", italicIcon, "material"); ;
                this.iconRef.RegisterIconFromText("underlined", underlinedIcon, "material"); ;
            }));
        }
    }

    private void OnSingleClick()
    {
        this.buttonGroupRef.Selection = ButtonGroupSelection.Single;
    }

    private void OnSingleRequiredClick()
    {
        this.buttonGroupRef.Selection = ButtonGroupSelection.SingleRequired;
    }

    private void OnMultipleClick()
    {
        this.buttonGroupRef.Selection = ButtonGroupSelection.Multiple;
    }
}
```


A [`IgbToggleButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToggleButton.html) could be marked as selected via its [`Selected`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToggleButton.html#IgniteUI_Blazor_Controls_IgbToggleButton_Selected) attribute or through the [`IgbButtonGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html) [`SelectedItems`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html#IgniteUI_Blazor_Controls_IgbButtonGroup_SelectedItems) attribute:

```razor
<IgbButtonGroup SelectedItems='["bold"]'>
    <IgbToggleButton Value="bold">
        <IgbIcon @ref="iconRef" IconName="bold" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="italic">
        <IgbIcon IconName="italic" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
    <IgbToggleButton Value="underlined">
        <IgbIcon IconName="underlined" Collection="material"></IgbIcon>
        <IgbRipple />
    </IgbToggleButton>
</IgbButtonGroup>
```

> \[!Note]
> Setting [`IgbToggleButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToggleButton.html) [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToggleButton.html#IgniteUI_Blazor_Controls_IgbToggleButton_Value) attribute is mandatory for using the [`SelectedItems`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html#IgniteUI_Blazor_Controls_IgbButtonGroup_SelectedItems) property of the [`IgbButtonGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html).

### Size

The `--ig-size` CSS custom property can be used to control the size of the button group.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <IgbButtonGroup style="@style" Select="OnSelect">
        <IgbToggleButton Value="small">
            Small
        </IgbToggleButton>
        <IgbToggleButton Value="medium">
            Medium
        </IgbToggleButton>
        <IgbToggleButton Value="large" Selected="true">
            Large
        </IgbToggleButton>
    </IgbButtonGroup>
</div>

@code {
    private string style = "--ig-size: var(--ig-size-large)";

    private void OnSelect(IgbComponentValueChangedEventArgs args)
    {
        this.style = $"--ig-size: var(--ig-size-{args.Detail})";
    }
}
```


## Styling

The [`IgbButtonGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html) component exposes `group` CSS part that allows us to style the button group container.
Also, the [`IgbToggleButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToggleButton.html)s provide `toggle` CSS part that could be used to style the button element.

```css
igc-button-group::part(group) {
  background-color: var(--ig-primary-500);
  padding: 8px;
}

igc-toggle-button::part(toggle) {
  color: var(--ig-secondary-300);
}
```

```razor
@using IgniteUI.Blazor.Controls

<style>
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
</style>

<div class="container sample">
    <IgbButtonGroup Alignment="ContentOrientation.Vertical">
        <IgbToggleButton Value="sofia">
            Sofia
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="london">
            London
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="new york">
            New York
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="tokyo" Disabled="true">
            Tokyo
            <IgbRipple />
        </IgbToggleButton>
    </IgbButtonGroup>
</div>

 @code {

}
```


## API Reference

- [`IgbButtonGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonGroup.html)
- [`IgbToggleButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToggleButton.html)
- [`IgbRipple`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRipple.html)
- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
