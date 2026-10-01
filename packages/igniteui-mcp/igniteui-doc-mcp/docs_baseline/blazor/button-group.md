---
title: "Button Group"
description: The Ignite UI for Blazor Button Group component organizes related toggle buttons and supports horizontal or vertical alignment, single or multiple selection, and toggling.
keywords: "Blazor, UI controls, web widgets, UI widgets, Blazor Button Group Components, Infragistics"
mentionedTypes: ["ToggleButton", "ButtonGroup"]
relatedComponents: [ToggleButton]
license: MIT
last_updated: "2026-07-28"
llms:
    description: "The Ignite UI for Blazor Button Group organizes related toggle buttons into a group with horizontal or vertical alignment, single or multiple selection, and toggling."
_tocName: Button Group
---
# Button Group Component

The Blazor Button Group component is used to organize [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton)'s into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.

## Live Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="states-container">
    <div class="sample-layout">
        <IgbButtonGroup Selection="ButtonGroupSelection.SingleRequired" Select="OnSelect">
            <IgbToggleButton Value="device">Device<IgbRipple /></IgbToggleButton>
            <IgbToggleButton Value="cloud" Selected="true">Cloud<IgbRipple /></IgbToggleButton>
        </IgbButtonGroup>

        <div class="album">
            <p class="album-title">Trip around the world</p>
            <div class="album-photos">
                @foreach (var photo in Photos)
                {
                    <img src="@photo" alt="Trip around the world" />
                }
            </div>
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

## Anatomy

The Blazor Button Group organizes related Toggle Buttons into a single group with a shared container and individual button items.

**Button Group anatomy:** The Button Group component organizes related Toggle Buttons within a shared container, allowing users to make single or multiple selections.

<style>{`
  .button-group-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .button-group-anatomy .igd-anatomy__image {
    max-width: 520px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Container:</strong> Wraps the button's contents.<br />
<strong>2. Icon:</strong> Adds context to the button. Could be left, right, left and right or only icon.<br />
<strong>3. Label:</strong> The textual content that describes the button’s action to the user.</span>

The Blazor Button Group contains Toggle Buttons, and each button can contain an icon and a label.

```text
Button Group
└── Toggle Button
    ├── Icon
    └── Label
```

## Getting Started

To use the Blazor Button Group, follow the [Ignite UI for Blazor Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

For Blazor using the **IgniteUI.Blazor** package, register the Button Group module as follows:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbButtonGroupModule));
```

Then link the additional CSS file in the **wwwroot/index.html** file for a **Blazor WebAssembly** project or in the **Pages/_Host.cshtml** file for a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup) is as follows:

```razor
<IgbButtonGroup />
```

## Usage

Use the [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup) to wrap your [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton) components. To select a button by default, use the [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton&member=selected) attribute:

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

### Alignment

The Button Group supports horizontal and vertical layouts. Use the [`Alignment`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup&member=alignment) property to set the orientation of the buttons in the group.

```razor
@using IgniteUI.Blazor.Controls

<div class="sample-layout states-container">
    @foreach (var alignment in Alignments)
    {
        <div class="sample-inner-layout">
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
In order to configure the Ignite UI for Blazor Button Group selection, use its platform-specific selection property.

For Blazor, use the [`selection`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup&member=selection) property. The available modes are:

- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **single-required** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multiple** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup) selection modes:

```razor
@using IgniteUI.Blazor.Controls

<div class="selection-samples states-container">
    @foreach (var selection in modes)
    {
        <span class="sample-label">@(selection == ButtonGroupSelection.SingleRequired ? "Single-Required" : selection.ToString())</span>
        <IgbButtonGroup Selection="@selection">
            <IgbToggleButton Value="bold" Selected="@(selection != ButtonGroupSelection.Single)">
                <IgbIcon @ref="iconRef" IconName="bold" Collection="material" />
                <IgbRipple />
            </IgbToggleButton>
            <IgbToggleButton Value="italic" Selected="@(selection == ButtonGroupSelection.Multiple)">
                <IgbIcon IconName="italic" Collection="material" />
                <IgbRipple />
            </IgbToggleButton>
            <IgbToggleButton Value="underlined">
                <IgbIcon IconName="underlined" Collection="material" />
                <IgbRipple />
            </IgbToggleButton>
        </IgbButtonGroup>
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

A [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton) could be marked as selected via its [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton&member=selected) attribute or through the [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup) [`SelectedItems`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup&member=selectedItems) attribute:

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

**Note:** 

Setting the [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton) [`Value`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton&member=value) attribute is mandatory for using the [`SelectedItems`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup&member=selectedItems) property of the [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup).

### States

Each button in the group supports enabled and disabled variants, which can also be selected or not selected. Use the state behavior provided by the contained [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton) components.

```razor
@using IgniteUI.Blazor.Controls

<div class="states-matrix states-container">
    <header class="states-row">
        <span class="row-label"></span>
        <span class="column-label">Enabled</span>
        <span class="column-label">Disabled</span>
    </header>
    @foreach (var row in Rows)
    {
        <section class="states-row">
            <span class="row-label">@row.Label</span>
            <div class="state-cell">
                <span class="cell-label">Enabled</span>
                <IgbButtonGroup Selection="ButtonGroupSelection.Multiple">
                    <IgbToggleButton Value="device" Selected="@row.Selected">
                        Device
                        <IgbRipple />
                    </IgbToggleButton>
                </IgbButtonGroup>
            </div>
            <div class="state-cell">
                <span class="cell-label">Disabled</span>
                <IgbButtonGroup Selection="ButtonGroupSelection.Multiple">
                    <IgbToggleButton Value="cloud" Disabled="true" Selected="@row.Selected">
                        Cloud
                    </IgbToggleButton>
                </IgbButtonGroup>
            </div>
        </section>
    }
</div>

@code {
    private record StateRow(string Label, bool Selected);

    private static readonly StateRow[] Rows =
    {
        new StateRow("Selected / Off", false),
        new StateRow("Selected / On", true)
    };
}
```

### Interaction States

The enabled buttons in the group support idle, hover, and focused interaction states. Use the state behavior provided by the contained [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton) components.

```razor
@using IgniteUI.Blazor.Controls

<div class="states-matrix states-container">
    <header class="states-row">
        <span class="row-label"></span>
        @foreach (var state in States)
        {
            <span class="column-label">@(char.ToUpperInvariant(state[0]) + state.Substring(1))</span>
        }
    </header>
    @foreach (var row in Rows)
    {
        <section class="states-row">
            <span class="row-label">@row.Label</span>
            @foreach (var state in States)
            {
                <div class="state-cell">
                    <span class="cell-label">@(char.ToUpperInvariant(state[0]) + state.Substring(1))</span>
                    <IgbButtonGroup>
                    <IgbToggleButton class="@($"state-{state}")" Selected="@row.Selected" Value="button">
                        <IgbIcon @ref="iconRef" IconName="notifications" Collection="material" />
                        Button
                        <IgbIcon IconName="notifications" Collection="material" />
                        <IgbRipple />
                    </IgbToggleButton>
                    </IgbButtonGroup>
                </div>
            }
        </section>
    }
</div>

@code {
    private record StateRow(string Label, bool Selected);

    private static readonly StateRow[] Rows =
    {
        new StateRow("Selected / Off", false),
        new StateRow("Selected / On", true)
    };

    private static readonly string[] States = { "idle", "hover", "focused" };

    private const string NotificationsIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z'/></svg>";

    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && iconRef != null)
        {
            iconRef.EnsureReady().ContinueWith(_ =>
            {
                iconRef.RegisterIconFromText("notifications", NotificationsIcon, "material");
            });
        }
    }
}
```

### Layout Template

Each button can use text, an icon, or both. Keep the content style consistent across the group, and use the button content APIs to control the icon and label shown in each button.

```razor
@using IgniteUI.Blazor.Controls

<div class="sample-layout states-container">
    <IgbButtonGroup>
        <IgbToggleButton Value="left">Left<IgbRipple /></IgbToggleButton>
        <IgbToggleButton Value="center">Center<IgbRipple /></IgbToggleButton>
        <IgbToggleButton Value="right">Right<IgbRipple /></IgbToggleButton>
    </IgbButtonGroup>
    <IgbButtonGroup>
        <IgbToggleButton Value="left">
            <IgbIcon @ref="iconRef" IconName="align-left" Collection="material" />
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="center">
            <IgbIcon IconName="align-center" Collection="material" />
            <IgbRipple />
        </IgbToggleButton>
        <IgbToggleButton Value="right">
            <IgbIcon IconName="align-right" Collection="material" />
            <IgbRipple />
        </IgbToggleButton>
    </IgbButtonGroup>
</div>

@code {
    private const string AlignLeftIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z'/></svg>";
    private const string AlignCenterIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z'/></svg>";
    private const string AlignRightIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z'/></svg>";

    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && iconRef != null)
        {
            iconRef.EnsureReady().ContinueWith(_ =>
            {
                iconRef.RegisterIconFromText("align-left", AlignLeftIcon, "material");
                iconRef.RegisterIconFromText("align-center", AlignCenterIcon, "material");
                iconRef.RegisterIconFromText("align-right", AlignRightIcon, "material");
            });
        }
    }
}
```

### Custom Toggle Buttons

For Blazor, use individual Toggle Buttons to create a custom Button Group. Each button can define its own value, icon, label, selected state, and disabled state.

Register the Button Group module in `Program.cs`:

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbButtonGroupModule));
```

Then define the custom buttons in Razor markup:

```razor
<IgbButtonGroup>
    <IgbToggleButton Value="align-left">
        <IgbIcon IconName="format_align_left" Collection="material"></IgbIcon>
    </IgbToggleButton>
    <IgbToggleButton Value="align-center" Selected="true">
        <IgbIcon IconName="format_align_center" Collection="material"></IgbIcon>
    </IgbToggleButton>
    <IgbToggleButton Value="align-right" Disabled="true">
        <IgbIcon IconName="format_align_right" Collection="material"></IgbIcon>
    </IgbToggleButton>
</IgbButtonGroup>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="states-container">
    <IgbButtonGroup Selection="@ButtonGroupSelection.Multiple">
        <IgbToggleButton Selected="true">
            <IgbIcon @ref="iconRef" IconName="border_top" Collection="material" />
        </IgbToggleButton>
        <IgbToggleButton>
            <IgbIcon IconName="border_right" Collection="material" />
        </IgbToggleButton>
        <IgbToggleButton>
            <IgbIcon IconName="border_bottom" Collection="material" />
        </IgbToggleButton>
        <IgbToggleButton>
            <IgbIcon IconName="border_left" Collection="material" />
        </IgbToggleButton>
    </IgbButtonGroup>
</div>

@code {
    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && iconRef != null)
        {
            iconRef.EnsureReady().ContinueWith(_ =>
            {
                iconRef.RegisterIconFromText("border_top", "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 3h18v2H3V3zm0 4h2v14H3V7zm4 0h2v14H7V7zm4 0h2v14h-2V7zm4 0h2v14h-2V7zm4 0h2v14h-2V7z'/></svg>", "material");
                iconRef.RegisterIconFromText("border_right", "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19 3h2v18h-2V3zM3 3h2v2H3V3zm4 0h2v2H7V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zM3 7h2v2H3V7zm4 0h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM3 11h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 15h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 19h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z'/></svg>", "material");
                iconRef.RegisterIconFromText("border_bottom", "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 19h18v2H3v-2zM3 3h2v14H3V3zm4 0h2v14H7V3zm4 0h2v14h-2V3zm4 0h2v14h-2V3zm4 0h2v14h-2V3z'/></svg>", "material");
                iconRef.RegisterIconFromText("border_left", "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 3h2v18H3V3zM7 3h2v2H7V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zM7 7h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 15h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 19h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z'/></svg>", "material");
            });
        }
    }
}
```

### Size
The `--ig-size` CSS custom property can be used to control the size of the button group.

```razor
<IgbButtonGroup Style="--ig-size: var(--ig-size-small)"></IgbButtonGroup>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="states-container">
<article class="button-group-size">
    <span class="sample-label">Small</span>
    <IgbButtonGroup>
        <IgbToggleButton Value="sofia">Sofia<IgbRipple /></IgbToggleButton>
        <IgbToggleButton Value="london">London<IgbRipple /></IgbToggleButton>
        <IgbToggleButton Value="new-york">New York<IgbRipple /></IgbToggleButton>
    </IgbButtonGroup>
    <span class="sample-label">Medium</span>
    <IgbButtonGroup>
        <IgbToggleButton Value="sofia">Sofia<IgbRipple /></IgbToggleButton>
        <IgbToggleButton Value="london">London<IgbRipple /></IgbToggleButton>
        <IgbToggleButton Value="new-york">New York<IgbRipple /></IgbToggleButton>
    </IgbButtonGroup>
    <span class="sample-label">Large</span>
    <IgbButtonGroup>
        <IgbToggleButton Value="sofia">Sofia<IgbRipple /></IgbToggleButton>
        <IgbToggleButton Value="london">London<IgbRipple /></IgbToggleButton>
        <IgbToggleButton Value="new-york">New York<IgbRipple /></IgbToggleButton>
    </IgbButtonGroup>
</article>
</div>

@code {
}
```

### Do/Don't

**When to use:** Use a Button Group to organize related toggle actions where users may select one or more options.

**When not to use:** Do not use a Button Group for unrelated actions or for a single toggle action; use a standalone [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton) instead.

<div class="table-responsive">
    <table class="table" style="width: 100%; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3;">
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
            <tr>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
            </tr>
            <tr>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
            </tr>
        </tbody>
    </table>
</div>

## Properties

The Blazor Button Group exposes the following properties.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`alignment`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup&member=alignment) | `ButtonGroupAlignment` | `horizontal` | Sets the orientation of the buttons in the group. |
| [`selection`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup&member=selection) | `ButtonGroupSelection` | `single` | Sets the selection mode for the buttons in the group. |
| [`selectedItems`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup&member=selectedItems) | `string[]` | `[]` | Gets or sets the values of the selected buttons. |

## Styling

The Blazor Button Group uses CSS parts to style the group container and the individual Toggle Buttons. Use the `group` part on the Button Group and the `toggle` part on each Toggle Button to customize their appearance.

### Sass Theming

Use the Ignite UI for Blazor theme system to style the Button Group consistently with the rest of your application.

Import the theming functions before creating a custom Button Group theme:

```scss
@use "igniteui-theming" as *;
```

Create a theme with `button-group-theme` and include it in the global stylesheet. The `$item-background` parameter is used as the base for the related interaction-state colors. Override additional parameters when you need more control over the Button Group appearance:

```scss
$custom-button-group: button-group-theme(
    $item-background: #57a5cd,
);

igc-button-group {
    @include button-group($custom-button-group);
}
```

The same theme applies to Web Components directly and to the underlying `igc-button-group` element rendered by the React and Blazor wrappers.

### CSS Variables

Use the following CSS variables to customize the Button Group item colors and interaction states. Set them on the Button Group element to apply the styles to its contained Toggle Buttons:

| Primary property | Dependent property | Description |
| --- | --- | --- |
| `$item-background` | `$item-hover-background` | Hover background for items. |
|  | `$item-selected-background` | Selected item background. |
|  | `$item-focused-background` | Focused item background. |
|  | `$disabled-background-color` | Disabled item background. |
|  | `$item-border-color` | Default item border color. |
|  | `$item-text-color` | Default item text color. |
|  | `$idle-shadow-color` | Idle item shadow color. |
| `$item-hover-background` | `$item-selected-hover-background` | Selected item hover background. |
|  | `$item-focused-hover-background` | Focused hover background. |
|  | `$item-hover-text-color` | Hovered item text color. |
|  | `$item-hover-icon-color` | Hovered item icon color. |
| `$item-selected-background` | `$item-selected-focus-background` | Selected item focus background. |
|  | `$disabled-selected-background` | Disabled selected background. |
|  | `$item-selected-text-color` | Selected item text color. |
|  | `$item-selected-icon-color` | Selected item icon color. |
|  | `$item-selected-hover-text-color` | Selected hovered item text color. |
|  | `$item-selected-hover-icon-color` | Selected hovered item icon color. |
| `$item-border-color` | `$item-hover-border-color` | Hovered item border color. |
|  | `$item-focused-border-color` | Focused item border color. |
|  | `$item-selected-border-color` | Selected item border color. |
|  | `$item-selected-hover-border-color` | Selected hovered item border color. |
|  | `$item-disabled-border` | Disabled item border color. |
|  | `$disabled-selected-border-color` | Disabled selected border color. |

### Style Parts

Use the following CSS parts to target the Button Group and its contained Toggle Buttons:

| Part | Component | What it styles |
| --- | --- | --- |
| `group` | [`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup) | The Button Group container. |
| `toggle` | [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton) | An individual Toggle Button. |

### Custom Styling

The following example changes the group background and padding, and changes the text color of the contained Toggle Buttons:

| Selector | Declaration | Effect |
| --- | --- | --- |
| `igc-button-group::part(group)` | `background-color`, `padding` | Changes the Button Group container background and spacing. |
| `igc-toggle-button::part(toggle)` | `color` | Changes the text color of an individual Toggle Button. |

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

<div class="states-container">
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

### Styling with Tailwind

You can style the Blazor Button Group with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```razor
<IgbButtonGroup Class="!light-button-group ![--item-background:#7B9E89]"></IgbButtonGroup>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Button Group's default theme styles.

```razor
@using IgniteUI.Blazor.Controls

<div class="states-container box-border h-full min-h-28 w-full bg-violet-50 p-6">
    <IgbButtonGroup class="button-group-style w-[420px] overflow-hidden">
        @foreach (var view in Views)
        {
            <IgbToggleButton Value="@view.ToLowerInvariant()" Selected="@(view == "Week")">
                @view
                <IgbRipple />
            </IgbToggleButton>
        }
    </IgbButtonGroup>
</div>

@code {
    private static readonly string[] Views = { "Day", "Week", "Month" };
}
```

## Accessibility

The Blazor Button Group organizes related Toggle Buttons while exposing each button's selected and disabled state.

### Keyboard Interaction

The Button Group delegates keyboard interaction to its contained Toggle Buttons. Each Toggle Button renders a native button, so standard button keyboard behavior activates the focused item and updates its selection according to the configured selection mode.

| Key | Action |
| --- | --- |
| Tab / Shift+Tab | Moves focus to the next or previous enabled Toggle Button in the group. |
| Enter / Space | Activates the focused Toggle Button and selects or deselects it according to the configured selection mode. |

When the Button Group is disabled, it disables its contained Toggle Buttons so they are not keyboard interactive.

### Screen Readers / ARIA

The Button Group exposes a group relationship and each Toggle Button exposes its state through native button semantics.

- The group container uses `role="group"` and reflects the group disabled state through `aria-disabled`.
- Each Toggle Button renders a native `button` with `aria-pressed` for selection state and `aria-disabled` for disabled state.
- The group emits `igcSelect` and `igcDeselect` after user interaction changes a Toggle Button selection. The event detail is the Toggle Button `value`.
- Provide visible text or an `aria-label` for every Toggle Button, especially for icon-only controls.

### Accessibility Compliance

Infragistics documents Ignite UI for Blazor accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | Each Toggle Button uses a native button, so the group selection behavior is available through standard button keyboard activation. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The group exposes `role="group"`. Toggle Buttons expose native button semantics and update `aria-pressed` when selection changes; xplat Toggle Buttons also expose `aria-disabled`. |

Your responsibilities:

- Give each Toggle Button a clear visible label or accessible name, especially when it contains only an icon.
- Keep the group selection mode aligned with the control purpose, so users can understand whether one or multiple options may be selected.
- Preserve the logical button order and sufficient color contrast when customizing the group or its selected state.

## Troubleshooting

Use this section to check boundaries and common decisions before treating Button Group as a single toggle, form field, or action group.

### Why does selectedItems not select a button?

Ensure every Toggle Button has a unique `value` attribute. The `selectedItems` property depends on those values.

### Known Limitations

The Blazor Button Group coordinates Toggle Buttons but does not replace their individual labels or accessible names.

- Selection behavior depends on the configured `selection` mode.
- The `selectedItems` property depends on unique `value` attributes on the contained Toggle Buttons.
- The Button Group does not provide labels or icons for its buttons; define the content of each Toggle Button separately.

## API References

The Blazor Button Group API reference provides the complete API surface for the component and its related button functionality.

[`IgbButtonGroup`](mcp:get_api_reference?platform=blazor&component=IgbButtonGroup)
[`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton)
[`IgbRipple`](mcp:get_api_reference?platform=blazor&component=IgbRipple)
[`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon)

## Dependencies

The Blazor Button Group requires the Blazor package and its theme stylesheet. The examples also use the [`IgbToggleButton`](mcp:get_api_reference?platform=blazor&component=IgbToggleButton), [`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon), and [`IgbRipple`](mcp:get_api_reference?platform=blazor&component=IgbRipple) components.

## Additional Resources

Use the following Blazor resources for API details and project support:

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

## Related Components

- [Button](./button.md) - Use Button when you need an individual action instead of a selectable group.

## FAQ

**Q: How do I set the selected buttons in a Button Group?**

Give every button item a unique value, then use the platform-specific selected-items setting to identify the items that should start selected. Unique values allow the group to track selection consistently across all supported platforms.

**Q: Can I use icons and labels in a Button Group?**

Yes. Each button item can contain an icon, a label, or both. Keep the content pattern consistent across the group and provide a visible label or accessible name when an icon alone does not explain the option.

**Q: Can I display a Button Group vertically?**

Yes. Set the platform-specific alignment property to the vertical option. Use horizontal alignment when the related choices should be presented in a single row.

