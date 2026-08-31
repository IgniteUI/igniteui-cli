---
title: Blazor Button Group Component | Ignite UI for Blazor
_description: Get started with the Blazor Button Group Component - series of Blazor Toggle Buttons, exposing features such as layout and selection.
_keywords: Blazor, UI controls, web widgets, UI widgets, Blazor Button Group Components, Infragistics
mentionedTypes: ["ToggleButton", "ButtonGroup"]
_license: MIT
_tocName: Button Group
---

# Blazor Button Group Overview

The Blazor Button Group component is used to organize [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton)'s into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.

## Blazor Button Example

```razor
@using IgniteUI.Blazor.Controls

<link href="_content/IgniteUI.Blazor/themes/light/material.css" rel="stylesheet" />

<div class="container sample">
    <IgbButtonGroup Selection="ButtonGroupSelection.SingleRequired" Select="OnSelect">
        <IgbToggleButton Value="device">Device<IgbRipple /></IgbToggleButton>
        <IgbToggleButton Value="cloud" Selected="true">Cloud<IgbRipple /></IgbToggleButton>
    </IgbButtonGroup>

    <div class="album">
        <span class="album-title">Trip around the world</span>
        <div class="album-photos">
            @foreach (var photo in Photos)
            {
                <img src="@photo" alt="Trip around the world" />
            }
        </div>
    </div>
</div>

@code {
    private static readonly string[] DevicePhotos = {
        "https://picsum.photos/id/1015/300/220",
        "https://picsum.photos/id/1016/300/220",
        "https://picsum.photos/id/1018/300/220",
        "https://picsum.photos/id/1019/300/220"
    };

    private static readonly string[] CloudPhotos = {
        "https://picsum.photos/id/1036/300/220",
        "https://picsum.photos/id/1051/300/220",
        "https://picsum.photos/id/1062/300/220",
        "https://picsum.photos/id/1067/300/220"
    };

    private string[] Photos { get; set; } = CloudPhotos;

    private void OnSelect(IgbComponentValueChangedEventArgs args)
    {
        this.Photos = args.Detail == "device" ? DevicePhotos : CloudPhotos;
    }
}
```

## Usage

Before using the [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbButtonGroupModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

Now that you have the Ignite UI for Blazor Button Group imported, you can start with a basic configuration of the [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup) and its buttons.

Use the [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup) selector to wrap your [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton)s and display them into a button group. If you want a button to be selected by default, use the [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton&member=Selected) attribute:

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

Use the [`Alignment`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup&member=Alignment) property to set the orientation of the buttons in the button group.

```razor
@using IgniteUI.Blazor.Controls

<link href="_content/IgniteUI.Blazor/themes/light/material.css" rel="stylesheet" />

<div class="button-group-alignment">
    @foreach (var alignment in Alignments)
    {
        <div class="button-group-alignment-item">
            <span>@(alignment == ContentOrientation.Horizontal ? "Horizontal" : "Vertical")</span>
            <IgbButtonGroup Alignment="@alignment">
                @foreach (var city in Cities)
                {
                    <IgbToggleButton Value="@city.ToLowerInvariant()">
                        @city
                        <IgbRipple />
                    </IgbToggleButton>
                }
            </IgbButtonGroup>
        </div>
    }
</div>

@code {
    private static readonly string[] Cities = { "Sofia", "London", "New York" };

    private static readonly ContentOrientation[] Alignments = { ContentOrientation.Horizontal, ContentOrientation.Vertical };
}
```

### Selection

In order to configure the Ignite UI for Blazor [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup) selection, you could use its [`Selection`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup&member=Selection) property. This property accepts the following three modes:

- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **single-required** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multiple** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup) selection modes:

```razor
@using IgniteUI.Blazor.Controls

<link href="_content/IgniteUI.Blazor/themes/light/material.css" rel="stylesheet" />

<style>
    .selection-samples {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
        padding-left: 32px;
    }

    .selection-sample {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .selection-sample > span {
        width: 120px;
        text-align: right;
        color: #556c86;
        font-size: 13px;
        line-height: 20px;
        letter-spacing: 0.3px;
    }

    .selection-sample igc-button-group {
        width: 200px;
    }

    igc-ripple {
        --color: gray;
    }
</style>

<div class="container sample selection-samples">
    @foreach (var selection in modes)
    {
    <div class="selection-sample">
        <span>@(selection == ButtonGroupSelection.SingleRequired ? "Single-Required" : selection.ToString())</span>
        <IgbButtonGroup Selection="@selection">
        <IgbToggleButton Value="bold" Selected="@(selection != ButtonGroupSelection.Single)">
            <IgbIcon @ref="iconRef" IconName="bold" Collection="material"></IgbIcon>
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="italic" Selected="@(selection == ButtonGroupSelection.Multiple)">
            <IgbIcon IconName="italic" Collection="material"></IgbIcon>
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="underlined">
            <IgbIcon IconName="underlined" Collection="material"></IgbIcon>
            <IgbRipple />
        </IgbToggleButton>
        </IgbButtonGroup>
    </div>
    }
</div>

 @code {
    private string boldIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z'/></svg>";
    private string italicIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z'/></svg>";
    private string underlinedIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z'/></svg>";

    private IgbIcon iconRef;
    private readonly ButtonGroupSelection[] modes = { ButtonGroupSelection.Single, ButtonGroupSelection.SingleRequired, ButtonGroupSelection.Multiple };

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

}
```

A [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton) could be marked as selected via its [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton&member=Selected) attribute or through the [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup) [`SelectedItems`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup&member=SelectedItems) attribute:

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

> [!Note]
> Setting [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton) [`Value`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton&member=Value) attribute is mandatory for using the [`SelectedItems`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup&member=SelectedItems) property of the [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup).

### Size

The `--ig-size` CSS custom property can be used to control the size of the button group.

```razor
@using IgniteUI.Blazor.Controls

<link href="_content/IgniteUI.Blazor/themes/light/material.css" rel="stylesheet" />

<div class="button-group-size">
    @foreach (var size in Sizes)
    {
        <div class="button-group-size-item">
            <span>@(char.ToUpperInvariant(size[0]) + size.Substring(1))</span>
            <IgbButtonGroup style="@($"--ig-size: var(--ig-size-{size})")">
                @foreach (var city in Cities)
                {
                    <IgbToggleButton Value="@city.ToLowerInvariant()">
                        @city
                        <IgbRipple />
                    </IgbToggleButton>
                }
            </IgbButtonGroup>
        </div>
    }
</div>

@code {
    private static readonly string[] Cities = { "Sofia", "London", "New York" };

    private static readonly string[] Sizes = { "small", "medium", "large" };
}
```

## Styling

The [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup) component exposes `group` CSS part that allows us to style the button group container.
Also, the [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton)s provide `toggle` CSS part that could be used to style the button element.

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

<link href="_content/IgniteUI.Blazor/themes/light/material.css" rel="stylesheet" />

<div class="button-group-styling">
    <IgbButtonGroup>
        @foreach (var alignmentOption in Layouts)
        {
            <IgbToggleButton Value="@alignmentOption.ToLowerInvariant()" Selected="@(alignmentOption == "Left")">
                @alignmentOption
                <IgbRipple />
            </IgbToggleButton>
        }
    </IgbButtonGroup>
</div>

@code {
    private static readonly string[] Layouts = { "Left", "Center", "Right" };
}
```

## API Reference

- [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup)
- [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton)
- [`IgbRipple`](mcp:get_api_reference?platform=blazor&component=IgbRipple)
- [`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
