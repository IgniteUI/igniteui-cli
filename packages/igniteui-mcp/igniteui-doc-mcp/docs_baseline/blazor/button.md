---
title: "Button Component"
description: Get started with the Blazor Button Component. Select button variants, configure sizes, define styling, and gain flexibility through the Blazor Button OnClick event.
keywords: "Blazor, UI controls, web widgets, UI widgets, Blazor Button Components, Infragistics"
mentionedTypes: ["Button", "ButtonBase"]
license: MIT
last_updated: 2026-08-13
relatedComponents: ["IconButton"]
llms:
  description: "The Blazor Button Component lets you enable clickable elements that trigger actions in your Blazor app."
_tocName: Button
---
# Button Component

The Blazor Button component lets you enable clickable elements that trigger actions in your Blazor app. You get full control over button variants, styling, and sizes. The Button component also lets you handle clicks, toggle the button, and disable it when needed.

## Live Demo

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">
    <div class="form">
        <IgbAvatar Shape="AvatarShape.Circle" Src="https://dl.infragistics.com/x/img/avatars/14.jpg" Alt="profile picture" />
        <div class="fields">
            <IgbInput Placeholder="First Name" />
            <IgbInput Placeholder="Last Name" />
            <div class="actions">
                <IgbButton Variant="ButtonVariant.Flat">Cancel</IgbButton>
                <IgbButton Variant="ButtonVariant.Contained">Save</IgbButton>
            </div>
        </div>
    </div>
</div>

@code {

}
```

## Anatomy

The Blazor Button renders its label and optional prefix and suffix content in the component shadow DOM.

**Button anatomy:** The Button component renders an actionable control with optional prefix and suffix content.

<style>{`
    .button-anatomy {
        --igd-anatomy-padding: 64px;
    }

    .button-anatomy .igd-anatomy__image {
        max-width: 100%;
    }

    .button-anatomy-legend {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        column-gap: 48px;
        margin-bottom: 24px;
    }

    .button-anatomy-legend div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .button-anatomy-legend strong {
        margin-bottom: 12px;
    }

    .button-anatomy-legend span {
        display: block;
    }

    @media (max-width: 768px) {
        .button-anatomy-legend {
            grid-template-columns: 1fr 1fr;
            row-gap: 24px;
        }
    }

    @media (max-width: 480px) {
        .button-anatomy-legend {
            grid-template-columns: 1fr;
        }
    }
`}</style>

<div class="button-anatomy-legend ig-typography__body-2">
    <div>
        <strong>A - Contained Button</strong>
        <span>1. Icon (optional)</span>
        <span>2. Label</span>
        <span>3. Container</span>
    </div>
    <div>
        <strong>B - Outlined Button</strong>
        <span>4. Icon (optional)</span>
        <span>5. Label</span>
        <span>6. Container</span>
    </div>
    <div>
        <strong>C - Flat Button</strong>
        <span>7. Icon (optional)</span>
        <span>8. Label</span>
    </div>
    <div>
        <strong>D - Fab Icon Button</strong>
        <span>9. Icon</span>
        <span>10. Container</span>
    </div>
</div>

The Button renders its content inside the `base` CSS part. Use the default slot for the label and the `prefix` and `suffix` slots for optional content before and after the label.

```text
<igc-button>
├── ::part(base)
├── prefix slot
├── default slot content
└── suffix slot
</igc-button>
```

## Getting Started

To use the Blazor Button, follow the [Ignite UI for Blazor Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

For Blazor using the **IgniteUI.Blazor** package, register the Button module as follows:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbButtonModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton) is as follows:

```razor
<IgbButton />
```

## Usage

Use the Blazor Button to trigger an action, submit form data, or navigate to another page. Choose the appropriate button type and variant for the action, then add optional content such as icons when needed.

The Button content is placed in its default slot. Add the action label as the button content so that the purpose of the action is clear to all users.

```razor
<IgbButton>Save changes</IgbButton>
```

With `prefix` and `suffix` slots of the [`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton) component, we can add different content before and after the main content of the button.

We recommend using a `<span>` element when adding simple text, symbols, or emojis, and an [`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon) component when adding icons to the `prefix` and `suffix` slots.

```razor
<IgbButton Variant="@ButtonVariant.Contained">
    <span slot="prefix">Download</span>
    <IgbIcon slot="suffix" IconName="download"></IgbIcon>
</IgbButton>
```

### Type

The button component will change its internal structure from a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) type element when the [`Href`](mcp:get_api_reference?platform=blazor&component=IgbButton&member=href) attribute is set. In that case the button can be thought of as a regular link. Setting the [`Href`](mcp:get_api_reference?platform=blazor&component=IgbButton&member=href) attribute will allow you to also set the [`Rel`](mcp:get_api_reference?platform=blazor&component=IgbButton&member=rel), [`Target`](mcp:get_api_reference?platform=blazor&component=IgbButton&member=target) and [`Download`](mcp:get_api_reference?platform=blazor&component=IgbButton&member=download) attributes.
In the case when the button component uses an actual [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element internally, we can specify its [`DisplayType`](mcp:get_api_reference?platform=blazor&component=IgbButton&member=type) by setting the property to any of the following values:

- `Submit` - when we want to submit the form data
- `reset` - when we want to reset form data to its initial values
- `button` - when we want to add button with a custom functionality anywhere on a webpage

### Variants

Five types of Buttons are supported: `contained` button for prominent primary actions, `outlined` button for secondary actions, `flat` button for subtle actions, `floating action` button (Fab) for prominent main actions, and `icon` button for actions represented by an icon. Icon Buttons can also use any of the other four variants.

#### Contained Button

Use the [`Variant`](mcp:get_api_reference?platform=blazor&component=IgbButton&member=variant) attribute to add a simple contained button in your component template. Note that if you do not set variant, by default it will be set to contained.

```razor
<IgbButton Variant="@ButtonVariant.Contained" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">
    <IgbButton Variant="ButtonVariant.Contained">
        <IgbIcon @ref="NotificationsIcon" Slot="prefix" Name="notifications" Collection="material" />
        Contained
        <IgbIcon Slot="suffix" Name="notifications" Collection="material" />
    </IgbButton>
</div>

@code {
    private IgbIcon NotificationsIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && NotificationsIcon != null)
        {
            string notificationsIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 22c1.1 0 2-.9 2-2h-4c0-1.1.89-2 2-2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z\"/></svg>";
            NotificationsIcon.EnsureReady().ContinueWith(_ => NotificationsIcon.RegisterIconFromText("notifications", notificationsIcon, "material"));
        }
    }

}
```

#### Outlined Button

All you have to do to create an `outlined` button is to change the value of the [`Variant`](mcp:get_api_reference?platform=blazor&component=IgbButton&member=variant) property:

```razor
<IgbButton Variant="@ButtonVariant.Outlined" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">
    <IgbButton Variant="ButtonVariant.Outlined">
        <IgbIcon @ref="NotificationsIcon" Slot="prefix" Name="notifications" Collection="material" />
        Outlined
        <IgbIcon Slot="suffix" Name="notifications" Collection="material" />
    </IgbButton>
</div>

@code {
    private IgbIcon NotificationsIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && NotificationsIcon != null)
        {
            string notificationsIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 22c1.1 0 2-.9 2-2h-4c0-1.1.89-2 2-2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z\"/></svg>";
            NotificationsIcon.EnsureReady().ContinueWith(_ => NotificationsIcon.RegisterIconFromText("notifications", notificationsIcon, "material"));
        }
    }
}
```

#### Flat Button

Analogically, we can switch to `flat` variant.

```razor
<IgbButton Variant="@ButtonVariant.Flat" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">
    <IgbButton Variant="ButtonVariant.Flat">
        <IgbIcon @ref="NotificationsIcon" Slot="prefix" Name="notifications" Collection="material" />
        Flat
        <IgbIcon Slot="suffix" Name="notifications" Collection="material" />
    </IgbButton>
</div>

@code {
    private IgbIcon NotificationsIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && NotificationsIcon != null)
        {
            string notificationsIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 22c1.1 0 2-.9 2-2h-4c0-1.1.89-2 2-2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z\"/></svg>";
            NotificationsIcon.EnsureReady().ContinueWith(_ => NotificationsIcon.RegisterIconFromText("notifications", notificationsIcon, "material"));
        }
    }

}
```

#### Floating Action Button

We can create a floating action button by setting the [`Variant`](mcp:get_api_reference?platform=blazor&component=IgbButton&member=variant) property to `fab`:

```razor
<IgbButton Variant="@ButtonVariant.Fab" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">
    <IgbButton Variant="ButtonVariant.Fab">
        <IgbIcon @ref="AddIcon" Slot="prefix" Name="add" Collection="material" />
        Floating Action
        <IgbIcon Slot="suffix" Name="add" Collection="material" />
    </IgbButton>
</div>

@code {
    private IgbIcon AddIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && AddIcon != null)
        {
            string addIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>";
            AddIcon.EnsureReady().ContinueWith(_ => AddIcon.RegisterIconFromText("add", addIcon, "material"));
        }
    }
}
```

### States

You may also insert each Button in a disabled state because they all support both Enabled and Disabled variants. In Figma, you can switch between the two using a boolean property in the properties panel. In code, use the `disabled` property or attribute when an action is not currently available.

```razor
<IgbButton Variant="@ButtonVariant.Contained" Disabled="true">Disabled</IgbButton>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">
    <div class="button-container">
        <IgbButton Variant="ButtonVariant.Contained" Disabled="true">
            <IgbIcon @ref="NotificationsIcon" Slot="prefix" Name="notifications" Collection="material" />
            Contained
            <IgbIcon Slot="suffix" Name="notifications" Collection="material" />
        </IgbButton>
        <IgbButton Variant="ButtonVariant.Outlined" Disabled="true">
            <IgbIcon Slot="prefix" Name="notifications" Collection="material" />
            Outlined
            <IgbIcon Slot="suffix" Name="notifications" Collection="material" />
        </IgbButton>
        <IgbButton Variant="ButtonVariant.Flat" Disabled="true">
            <IgbIcon Slot="prefix" Name="notifications" Collection="material" />
            Flat
            <IgbIcon Slot="suffix" Name="notifications" Collection="material" />
        </IgbButton>
        <IgbButton Variant="ButtonVariant.Fab" Disabled="true">
            <IgbIcon @ref="AddIcon" Slot="prefix" Name="add" Collection="material" />
            Floating Action
            <IgbIcon Slot="suffix" Name="add" Collection="material" />
        </IgbButton>
    </div>
</div>

@code {

    private IgbIcon NotificationsIcon { get; set; }
    private IgbIcon AddIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && NotificationsIcon != null && AddIcon != null)
        {
            string notificationsIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z\"/></svg>";
            string addIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>";
            NotificationsIcon.EnsureReady().ContinueWith(_ => NotificationsIcon.RegisterIconFromText("notifications", notificationsIcon, "material"));
            AddIcon.EnsureReady().ContinueWith(_ => AddIcon.RegisterIconFromText("add", addIcon, "material"));
        }
    }

}
```

### Interaction States

In Figma the Enabled buttons support **Idle**, **Hover**, **Focused** and **Focused & Hover** states which can be switched between by changing the `State` property. In code, these interaction states are provided by the platform Button component and should preserve a visible focus indicator for keyboard users.

```html
<igc-button variant="contained">Ripple and focus states</igc-button>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">
    <div class="button-container">
        <div class="button-item">
            <span class="button-label">Idle</span>
            <IgbButton Variant="ButtonVariant.Contained">
                <IgbIcon @ref="NotificationsIcon" Slot="prefix" Name="notifications" Collection="material" />
                Contained
                <IgbIcon Slot="suffix" Name="notifications" Collection="material" />
            </IgbButton>
        </div>
        <div class="button-item">
            <span class="button-label">Hover</span>
            <IgbButton class="state-hover" Variant="ButtonVariant.Contained">
                <IgbIcon Slot="prefix" Name="notifications" Collection="material" />
                Contained
                <IgbIcon Slot="suffix" Name="notifications" Collection="material" />
            </IgbButton>
        </div>
        <div class="button-item">
            <span class="button-label">Focused</span>
            <IgbButton class="state-focused" Variant="ButtonVariant.Contained">
                <IgbIcon Slot="prefix" Name="notifications" Collection="material" />
                Contained
                <IgbIcon Slot="suffix" Name="notifications" Collection="material" />
            </IgbButton>
        </div>
        <div class="button-item">
            <span class="button-label">Focused &amp; Hover</span>
            <IgbButton class="state-focused-hover" Variant="ButtonVariant.Contained">
                <IgbIcon Slot="prefix" Name="notifications" Collection="material" />
                Contained
                <IgbIcon Slot="suffix" Name="notifications" Collection="material" />
            </IgbButton>
        </div>
    </div>
</div>

@code {

    private IgbIcon NotificationsIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && NotificationsIcon != null)
        {
            string notificationsIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z\"/></svg>";
            NotificationsIcon.EnsureReady().ContinueWith(_ => NotificationsIcon.RegisterIconFromText("notifications", notificationsIcon, "material"));
        }
    }

}
```

### Layout Template

Contained, Outlined, Flat, and Floating Action Buttons support flexible icon and label templates. In Figma, to show or hide the icons, you can use the `Left Icon` and `Right Icon` boolean properties. If you want to have an Icon Button, you can set the `Content` property to `Icon`.

```razor
<IgbButton Variant="@ButtonVariant.Outlined">
    <span slot="prefix">★</span>
    Save changes
    <span slot="suffix">→</span>
</IgbButton>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">
    <div class="button-container">
        <div class="button-item">
            <IgbButton Variant="ButtonVariant.Outlined"><IgbIcon @ref="AddIcon" Slot="prefix" Name="add" Collection="material" />Add</IgbButton>
        </div>
        <div class="button-item"><IgbButton Variant="ButtonVariant.Outlined">Buy Now</IgbButton></div>
        <div class="button-item">
            <IgbButton Variant="ButtonVariant.Outlined">Add<IgbIcon Slot="suffix" Name="add" Collection="material" /></IgbButton>
        </div>
        <div class="button-item">
            <IgbButton Variant="ButtonVariant.Outlined"><IgbIcon Slot="prefix" Name="add" Collection="material" />Floating Action</IgbButton>
        </div>
        <div class="button-item"><IgbButton Variant="ButtonVariant.Outlined"><IgbIcon Name="add" Collection="material" /></IgbButton></div>
        <div class="button-item"><IgbButton Variant="ButtonVariant.Outlined">Floating Action</IgbButton></div>
        @* Legacy selector layout retained below for reference.
            <div class="button-row">
                <div class="button-item">
                    <span class="button-sublabel">Left</span>
                    <IgbButton Variant="@CurrentVariant">
                        <IgbIcon @ref="AddIcon" Slot="prefix" Name="add" Collection="material" />
                        Add
                    </IgbButton>
                </div>
                <div class="button-item">
                    <span class="button-sublabel">Right</span>
                    <IgbButton Variant="@CurrentVariant">
                        Add
                        <IgbIcon Slot="suffix" Name="add" Collection="material" />
                    </IgbButton>
                </div>
            </div> *@
    </div>
</div>

@code {

    private IgbIcon AddIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && AddIcon != null)
        {
            string addIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>";
            AddIcon.EnsureReady().ContinueWith(_ => AddIcon.RegisterIconFromText("add", addIcon, "material"));
        }
    }

}
```

### Size

Users can change the size of the [`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton) using the `--ig-size` CSS variable.

```razor
<IgbButton Class="button-size-small" Variant="ButtonVariant.Contained">
    Small
</IgbButton>
```

```css
.button-size-small {
    --ig-size: var(--ig-size-small);
}
```

The result of implementing the above code should look like the following:

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">
    <div class="size-grid">
        <div class="size-header"><span></span><span>Contained</span><span>Outlined</span><span>Flat</span><span>Fab</span></div>
        @Button("size-large")
        @Button("size-medium")
        @Button("size-small")
    </div>
</div>

@code {

    private RenderFragment Button(string size) => @<div class="size-row">
        <span class="size-label @size">@char.ToUpperInvariant(size[5])@size[6..]</span>
        <IgbButton class="@size" Variant="ButtonVariant.Contained"><IgbIcon Slot="prefix" Name="notifications" Collection="material" />Contained<IgbIcon Slot="suffix" Name="notifications" Collection="material" /></IgbButton>
        <IgbButton class="@size" Variant="ButtonVariant.Outlined"><IgbIcon Slot="prefix" Name="notifications" Collection="material" />Outlined<IgbIcon Slot="suffix" Name="notifications" Collection="material" /></IgbButton>
        <IgbButton class="@size" Variant="ButtonVariant.Flat"><IgbIcon @ref="NotificationsIcon" Slot="prefix" Name="notifications" Collection="material" />Flat<IgbIcon Slot="suffix" Name="notifications" Collection="material" /></IgbButton>
        <IgbButton class="@size" Variant="ButtonVariant.Fab"><IgbIcon @ref="AddIcon" Slot="prefix" Name="add" Collection="material" />Floating Action<IgbIcon Slot="suffix" Name="add" Collection="material" /></IgbButton>
    </div>;

    private IgbIcon NotificationsIcon { get; set; }
    private IgbIcon AddIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && NotificationsIcon != null && AddIcon != null)
        {
            string notificationsIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z\"/></svg>";
            string addIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>";
            NotificationsIcon.EnsureReady().ContinueWith(_ => NotificationsIcon.RegisterIconFromText("notifications", notificationsIcon, "material"));
            AddIcon.EnsureReady().ContinueWith(_ => AddIcon.RegisterIconFromText("add", addIcon, "material"));
        }
    }
}
```

### Download

Setting the [`Download`](mcp:get_api_reference?platform=blazor&component=IgbButton&member=download) property will prompt the user to save the linked URL instead of navigating to it.

```razor
<IgbButton Variant="@ButtonVariant.Contained" Download="Url" Href="https://www.infragistics.com/" Target="@ButtonBaseTarget._blank">
    Download
</IgbButton>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">
    <IgbButton Variant="ButtonVariant.Contained" Download="Url" Href="https://www.infragistics.com/" Target="ButtonBaseTarget._blank">
        Download
    </IgbButton>
</div>

@code {

}
```

### Do/Don't

**When to use:** Use Button for actions that change state, submit data, or trigger an application command.

**When not to use:** Use [Icon Button](./icon-button.md) when the action is represented only by an icon and does not require a text label.

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

The Blazor Button exposes platform-specific properties for controlling its content, appearance, and behavior.

The Blazor Button exposes the following properties.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`variant`](mcp:get_api_reference?platform=blazor&component=IgbButton&member=variant) | ButtonVariant | `contained` | Selects the Button visual variant. |
| [`type`](mcp:get_api_reference?platform=blazor&component=IgbButton&member=type) | string | `button` | Sets the native button type. |
| [`href`](mcp:get_api_reference?platform=blazor&component=IgbButton&member=href) | string | — | Sets the destination for navigation. |

## Styling

Customize the Button with theme settings, CSS variables, or CSS parts to match the visual language of your application.

### Sass Theming

Use the standard Ignite UI for Blazor theme workflow to customize the Button consistently with the rest of the application.

### CSS Variables

Use the generated CSS variables on the Button element to override the theme values for a specific instance. The variant-specific theme functions derive related interaction-state values from the primary theme parameters.

| Primary property | Dependent property | Description |
| --- | --- | --- |
| `$background` | `$hover-background`, `$focus-background`, `$active-background` | Button background colors for the interaction states. |
| `$foreground` | `$hover-foreground`, `$focus-foreground`, `$active-foreground` | Button text colors for the interaction states. |
| `$border-color` | `$hover-border-color`, `$focus-border-color`, `$active-border-color` | Button border colors for the interaction states. |
| `$shadow-color` | `$resting-shadow`, `$hover-shadow`, `$focus-shadow`, `$active-shadow` | Button shadow colors and elevations. |
| `$disabled-background` | `$disabled-foreground`, `$disabled-icon-color`, `$disabled-border-color` | Button colors when it is disabled. |

### Style Parts

The [`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton) exposes three CSS parts which we can use for styling:

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


<div class="container sample">
    <div class="button-grid">
        <div class="button-row">
            <IgbButton class="confirm-button" Variant="ButtonVariant.Contained">Confirm</IgbButton>
            <IgbButton class="send-button" Variant="ButtonVariant.Outlined"><IgbIcon @ref="SendIcon" Slot="prefix" Name="send" Collection="material" />Send</IgbButton>
            <IgbButton class="cancel-button" Variant="ButtonVariant.Flat">Cancel</IgbButton>
            <IgbButton class="add-button" Variant="ButtonVariant.Fab">Add<IgbIcon @ref="AddIcon" Slot="suffix" Name="add" Collection="material" /></IgbButton>
        </div>
    </div>
</div>

@code {

    private IgbIcon SendIcon { get; set; }
    private IgbIcon AddIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && SendIcon != null && AddIcon != null)
        {
            string sendIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z\"/></svg>";
            string addIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>";
            SendIcon.EnsureReady().ContinueWith(_ => SendIcon.RegisterIconFromText("send", sendIcon, "material"));
            AddIcon.EnsureReady().ContinueWith(_ => AddIcon.RegisterIconFromText("add", addIcon, "material"));
        }
    }

}
```

### Styling with Tailwind

You can style the Button with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```razor
<IgbButton Class="!light-contained-button ![--background:#7B9E89]">Contained Button</IgbButton>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Button's default theme styles.

```razor
@using IgniteUI.Blazor.Controls


<div class="button-grid">
    <div class="button-row">
        <IgbButton class="confirm-button" Variant="ButtonVariant.Contained">
            Confirm
        </IgbButton>
        <IgbButton class="send-button" Variant="ButtonVariant.Outlined">
            <IgbIcon @ref="SendIcon" Slot="prefix" Name="send" Collection="material" />
            Send
        </IgbButton>
        <IgbButton class="cancel-button" Variant="ButtonVariant.Flat">
            Cancel
        </IgbButton>
        <IgbButton class="add-button" Variant="ButtonVariant.Fab">
            Add
            <IgbIcon @ref="AddIcon" Slot="suffix" Name="add" Collection="material" />
        </IgbButton>
    </div>
</div>

@code {

    private IgbIcon SendIcon { get; set; }
    private IgbIcon AddIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && SendIcon != null && AddIcon != null)
        {
            string sendIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z\"/></svg>";
            string addIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>";
            SendIcon.EnsureReady().ContinueWith(_ => SendIcon.RegisterIconFromText("send", sendIcon, "material"));
            AddIcon.EnsureReady().ContinueWith(_ => AddIcon.RegisterIconFromText("add", addIcon, "material"));
        }
    }

}
```

## Accessibility

The Blazor Button is an interactive control for actions and, when `href` is set, navigation.
Use the native button behavior for commands and preserve the link behavior for navigation.

### Keyboard Interaction

The Button uses the keyboard behavior of its rendered native control. A disabled Button is not
interactive, and a Button with `href` is rendered as a link instead of a command button.

| Key | Action |
| -- | -- |
| Tab / Shift+Tab | Moves focus to or away from the Button when it is keyboard-focusable. |
| Enter / Space | Activates a focused command Button. Enter activates a Button used as a link. |

### Screen Readers / ARIA

The Button renders a native `button` for command actions and an `a` element when `href` is set.
The native element supplies the appropriate role and keyboard semantics.

- The Button's visible content is used as its accessible name when it contains meaningful text.
- Provide an `aria-label` or another accessible naming mechanism for an icon-only Button.
- A disabled Button exposes its disabled state through the rendered native control.
- Button click event handlers perform application actions; they do not replace the Button's
    accessible name, role, or state.

### Accessibility Compliance

This topic does not make a product-level WCAG, Section 508, or EN 301 549 conformance claim. Verify the rendered Button and its surrounding application against the accessibility requirements that apply to the target project.

| Criterion | How the component supports the requirement |
| -- | -- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The native command button supports keyboard activation, and a Button with `href` uses native link activation. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The rendered native element supplies the role and state semantics. The visible Button content supplies the accessible name when it is meaningful. |
| [2.4.4 Link Purpose](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context) | When `href` is set, the Button becomes a navigation link; provide a name that identifies its destination or purpose. |

Your responsibilities:

- Give every Button a meaningful accessible name, especially icon-only Buttons.
- Use a command Button for actions and `href` for navigation; do not emulate one with the other.
- Do not rely on color, hover, or focus styling alone to communicate the action or state.
- Preserve sufficient contrast and a visible focus indicator when customizing the Button theme.

## Troubleshooting

Use this section to check boundaries and common decisions before treating Button as a command, navigation link, or form control.

### Why does the Button behave like a link?

When `href` is set, the Button is used for navigation rather than for a command action. Remove `href` when the control should trigger application logic instead of navigating to a URL.

### Why is the Button not keyboard-focusable?

Check whether the Button is disabled or whether the surrounding application changes its focus behavior. Use a focusable Button for actions that must be available through keyboard navigation.

### Known Limitations

The Button has the following platform-independent boundaries:

- Use a text label or another accessible naming mechanism for every action; an unlabeled icon-only Button does not communicate its purpose by itself.
- Setting `href` changes the Button from an action control to a navigation control. Use [Icon Button](./icon-button.md) for icon-only actions and verify its accessible name separately.
- The Button's visual appearance does not determine whether the surrounding application action is available or valid; application logic must provide that state and feedback.

## API References

The Blazor Button API reference lists the complete verified API surface for the target platform.

[`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton)

## Dependencies

The Blazor Button requires the corresponding Blazor package and theme stylesheet. The sizing example also uses the [`IgbRadio`](mcp:get_api_reference?platform=blazor&component=IgbRadio) and [`IgbRadioGroup`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup) components.

## Additional Resources

The following resources provide additional Blazor Button guidance and project support.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

## Related Components

The Blazor Button is commonly used with related components when an action needs a specialized presentation.

- [Icon Button](./icon-button.md) is intended for icon-only actions.

## FAQ

    **Q: Which component should I use for an icon-only action?**

        Use the [Icon Button](./icon-button.md) component and provide an accessible name for the action.
    
    **Q: How do I disable a Button?**

        Set the verified `disabled` property to make the Button unavailable and prevent it from being activated.
    
    **Q: How do I change the Button size?**

        Use the platform's supported sizing options or the `--ig-size` CSS variable to customize the Button density.
    

