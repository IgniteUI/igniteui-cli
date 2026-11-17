---
title: "Blazor Icon Component"
description: "The Ignite UI for Blazor Icon renders named icons from registered icon sets, including custom SVG icons, with theme-based sizes and custom colors."
keywords: "Blazor Icon, Ignite UI for Blazor, SVG icon, icon set"
license: MIT
last_updated: "2026-10-06"
relatedComponents: ["IconButton"]
mentionedTypes: ["Icon"]
llms:
  description: "The Ignite UI for Blazor Icon is a component that renders a named icon from a registered icon set, such as a collection of custom SVG icons."
_tocName: Icon
---
# Icon

The Ignite UI for Blazor Icon is a component that renders a named icon from a registered icon set, such as a collection of custom SVG icons.

Register SVG icons by name in a collection, then display each icon at a theme-based size in the color of the surrounding text.

## Live Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <IgbNavDrawer class="menu" Position="NavDrawerPosition.Relative" Open="true">
        @foreach (var item in MenuItems)
        {
            <IgbNavDrawerItem Active="@(item.Label == ActiveItem)" @onclick="@(() => ActiveItem = item.Label)">
                <IgbIcon @ref="IconRef" slot="icon" IconName="@item.Icon" Collection="material" />
                <span slot="content">@item.Label</span>
            </IgbNavDrawerItem>
        }
    </IgbNavDrawer>
</div>

@code {
    private const string HomeIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/></svg>";
    private const string MailIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/></svg>";
    private const string AssignmentIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'/></svg>";
    private const string SettingsIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z'/></svg>";
    private const string FeedbackIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z'/></svg>";

    private IgbIcon IconRef;

    private string ActiveItem = "Home";

    private class MenuItem
    {
        public string Label { get; set; }
        public string Icon { get; set; }
    }

    private List<MenuItem> MenuItems { get; set; } = new List<MenuItem>
    {
        new MenuItem { Label = "Home", Icon = "home" },
        new MenuItem { Label = "Inbox", Icon = "mail" },
        new MenuItem { Label = "Reports", Icon = "assignment" },
        // ... 2 more items
    };

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            IconRef.EnsureReady().ContinueWith(_ =>
            {
                IconRef.RegisterIconFromText("home", HomeIcon, "material");
                IconRef.RegisterIconFromText("mail", MailIcon, "material");
                IconRef.RegisterIconFromText("assignment", AssignmentIcon, "material");
                IconRef.RegisterIconFromText("settings", SettingsIcon, "material");
                IconRef.RegisterIconFromText("feedback", FeedbackIcon, "material");
            });
        }
    }
}
```

## Anatomy

An icon is a symbol representing a command, device, directory, or common action.

**Icon anatomy:** The Icon component draws one glyph from a registered icon set.

<style>{`
  .icon-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .icon-anatomy .igd-anatomy__image {
    max-width: 94.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Icon:</strong> a visual symbol used to represent actions, objects or ideas</span>

The Blazor Icon renders an `igc-icon` element, which draws the registered SVG in its shadow root and exposes no CSS parts:

```text
igc-icon                 // host - inline box sized by --size
└─ #shadow-root
   └─ svg                // the registered SVG, 1em × 1em, filled with the current color
```

## Getting Started

To use the Blazor Icon, follow the [Ignite UI for Blazor Getting Started](../general-getting-started.md) topic for the basic project setup, then add the component for your target platform.

Register the Ignite UI for Blazor services:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor();
```

Registering [`IgbIconModule`](mcp:get_api_reference?platform=blazor&component=IgbIconModule), the client resource module of the [`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon), is **optional**: the component loads its resources when it first renders. Listing it in `builder.Services.AddIgniteUIBlazor(typeof(IgbIconModule))` can be used to preload resources or to support elements created only on the client (see [Component Modules](../general-getting-started.md#component-modules)).

Then link the theme CSS file in the app's host page (**wwwroot/index.html** in a standalone Blazor WebAssembly or Blazor Hybrid app, **Pages/_Host.cshtml** in a Blazor Server app, **Components/App.razor** in a Blazor Web App):

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

After registration, render the [`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon) with an icon name and a collection:

```razor
<IgbIcon IconName="search" Collection="material" />
```

The icon stays empty until you register an SVG icon under the same name and collection, as described in [Name and Collection](#name-and-collection).

## Usage

Use the Blazor Icon to add a recognizable symbol to labels, buttons, list items, and navigation, or to show a status at a glance.

### Name and Collection

The Blazor Icon draws the SVG that is registered under its name in its collection. The collection defaults to `default`. All icons on the page share one registry, so an icon that you register once is available to every Icon, and an Icon that renders before its SVG is registered updates as soon as you register it.

Register SVG markup with the [`RegisterIconFromTextAsync`](mcp:get_api_reference?platform=blazor&component=IgbIcon&member=RegisterIconFromTextAsync) method, or fetch an SVG file from a URL with [`RegisterIconAsync`](mcp:get_api_reference?platform=blazor&component=IgbIcon&member=RegisterIconAsync). Call them on a referenced `IgbIcon` after it's ready, then set the same `IconName` and `Collection` on each icon:

```razor
<IgbIcon @ref="SearchIcon" IconName="search" Collection="material" />
<IgbIcon IconName="build" Collection="material" />

@code {
    private IgbIcon SearchIcon { get; set; }

    private const string SearchSvg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>";

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && SearchIcon != null)
        {
            await SearchIcon.EnsureReady();
            await SearchIcon.RegisterIconFromTextAsync("search", SearchSvg, "material");
            await SearchIcon.RegisterIconAsync("build", "/icons/build.svg", "material");
        }
    }
}
```

### Icon References

An icon reference points an icon name to another registered icon. Components such as the Combo and the Date Picker render their built-in icons through references in the `default` collection, and a reference that you set takes precedence over them. For example, point the `input_clear` reference to your own icon to replace the clear icon of these two components:

```razor
<IgbIcon @ref="CloseIcon" IconName="close" Collection="my-icons" />

@code {
    private IgbIcon CloseIcon { get; set; }

    private const string CloseSvg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>";

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && CloseIcon != null)
        {
            await CloseIcon.EnsureReady();
            await CloseIcon.RegisterIconFromTextAsync("close", CloseSvg, "my-icons");
            await CloseIcon.SetIconRefAsync("input_clear", "default", new IgbIconMeta()
            {
                Name = "close",
                Collection = "my-icons",
            });
        }
    }
}
```

### Size

The Blazor Icon supports the small, medium, and large size presets of the theme, and uses the large preset by default. Set the `--ig-size` CSS variable to `--ig-size-small`, `--ig-size-medium`, or `--ig-size-large` to choose a preset:

```css
.small {
  --ig-size: var(--ig-size-small);
}

.medium {
  --ig-size: var(--ig-size-medium);
}
```

```razor
<IgbIcon Class="small" IconName="build" Collection="material" />
```

For a size outside the presets, set `--size` on the icon. To resize all icons inside a container, set `--ig-icon-size` on the container:

```css
.custom-size {
  --size: 56px;
}

.toolbar {
  --ig-icon-size: 2rem;
}
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="icon-sizes">
        <IgbIcon @ref="IconRef" class="size-large" IconName="notifications" Collection="material" />
        <span class="size-label">Large</span>
        <IgbIcon class="size-medium" IconName="notifications" Collection="material" />
        <span class="size-label">Medium</span>
        <IgbIcon class="size-small" IconName="notifications" Collection="material" />
        <span class="size-label">Small</span>
    </div>
</div>

@code {
    private const string NotificationsIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z'/></svg>";

    private IgbIcon IconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            IconRef.EnsureReady().ContinueWith(_ =>
            {
                IconRef.RegisterIconFromText("notifications", NotificationsIcon, "material");
            });
        }
    }
}
```

### Mirrored

Set [`mirrored`](mcp:get_api_reference?platform=blazor&component=IgbIcon&member=mirrored) to flip the icon horizontally. Use it for directional icons, such as arrows, in right-to-left layouts.

```razor
<IgbIcon IconName="arrow_forward" Collection="material" Mirrored="true" />
```

### Accessible Name

Hide a decorative icon from assistive technology, and give an icon that conveys meaning on its own an accessible name that describes that meaning.

Set `aria-label` on the icon to name it. The `<title>` element of a registered SVG also names the icon. Set `aria-hidden="true"` on a decorative icon next to visible text:

```razor
<IgbIcon IconName="warning" Collection="material" aria-label="Warning" />

<span>
    <IgbIcon IconName="search" Collection="material" aria-hidden="true" />
    Search
</span>
```

### Do/Don't

Carefully pick the Icon color to assure good contrast with the background and definitely avoid similar shades of the same color or combinations that create chromatic aberrations.

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 24px 0 16px;">
  
  
</div>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-bottom: 32px;">
  <div>
    <p style="color: #258b3b; font-weight: 600; margin: 0 0 8px;">Do</p>
    <p style="margin: 0;">Pick icon colors with strong contrast against the background.</p>
  </div>
  <div>
    <p style="color: #e40046; font-weight: 600; margin: 0 0 8px;">Don't</p>
    <p style="margin: 0;">Avoid shades similar to the background and color combinations that cause chromatic aberration.</p>
  </div>
</div>

## Properties

The Blazor Icon exposes the following properties. See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`IconName`](mcp:get_api_reference?platform=blazor&component=IgbIcon&member=IconName) | `string` | — | The name of the icon to draw. |
| [`Collection`](mcp:get_api_reference?platform=blazor&component=IgbIcon&member=Collection) | `string` | `default` | The registered collection in which the icon name is looked up. |
| [`Mirrored`](mcp:get_api_reference?platform=blazor&component=IgbIcon&member=Mirrored) | `bool` | `false` | Whether the icon is flipped horizontally. |

## Methods

The Blazor Icon draws icons that you register with the following API.

Register icons with the following methods of an `IgbIcon` instance. Each method also has a synchronous version without the `Async` suffix.

| Method | Description |
| --- | --- |
| [`RegisterIconAsync`](mcp:get_api_reference?platform=blazor&component=IgbIcon&member=RegisterIconAsync) | Fetches an SVG file from a URL and registers it under a name in a collection. |
| [`RegisterIconFromTextAsync`](mcp:get_api_reference?platform=blazor&component=IgbIcon&member=RegisterIconFromTextAsync) | Registers SVG markup under a name in a collection. |
| [`SetIconRefAsync`](mcp:get_api_reference?platform=blazor&component=IgbIcon&member=SetIconRefAsync) | Points an icon name in a collection to the icon that an `IgbIconMeta` describes. |

## Styling

The Blazor Icon takes the color of the surrounding text by default. Change its color and size with the following CSS variables:

| Variable | What it changes |
| --- | --- |
| `--ig-icon-color` | The icon color. Set it on an icon, or on a container to recolor all icons inside it. |
| `--ig-icon-size` | The icon size. Set it on an icon, or on a container to resize all icons inside it. |
| `--size` | The size of the icon on which you set it. |
| `--ig-size` | The size preset: `--ig-size-small`, `--ig-size-medium`, or `--ig-size-large`. |

The `igc-icon` element exposes no CSS parts, so apply the styles to the element itself.

### Sass Theming

Create a theme with the `icon-theme` function and include it with the `tokens()` mixin. The function accepts the `$color`, `$size`, and `$disabled-color` parameters, and the mixin emits the matching `--ig-icon-*` variables in the scope where you include it.

The Sass functions come from the `igniteui-theming` package. See the [Theming](../themes/overview.md) topic for the Sass setup.

```scss
@use "igniteui-theming" as *;

$custom-icon-theme: icon-theme(
  $color: #1481b8
);

:root {
  @include tokens($custom-icon-theme);
}
```

### CSS Variables

Set the color and size on an icon or a container when you need local styling without a Sass build step:

```css
igc-icon {
  --size: 28px;
  color: var(--ig-primary-500);
}
```

```css
.toolbar {
  --ig-icon-color: var(--ig-primary-500);
}
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="icon-styling">
        <div class="button-row">
            <IgbButton Variant="ButtonVariant.Contained" class="download-button">
                <IgbIcon @ref="IconRef" slot="prefix" IconName="download" Collection="material" />
                Download
            </IgbButton>
            <IgbButton Variant="ButtonVariant.Outlined" class="continue-button">
                Continue
                <IgbIcon slot="suffix" IconName="arrow_forward" Collection="material" />
            </IgbButton>
            <IgbButton Variant="ButtonVariant.Outlined" class="delete-button">
                <IgbIcon slot="prefix" IconName="delete" Collection="material" />
                Delete
            </IgbButton>
            <IgbButton Variant="ButtonVariant.Fab" class="add-button" aria-label="Add">
                <IgbIcon IconName="add" Collection="material" />
            </IgbButton>
        </div>
        <div class="icon-toolbar">
            @foreach (var action in Actions)
            {
                <IgbButton id="@action.Id" Variant="ButtonVariant.Flat" aria-label="@action.Label">
                    <IgbIcon IconName="@action.Icon" Collection="material" />
                </IgbButton>
                <IgbTooltip Anchor="@action.Id" Placement="PopoverPlacement.Bottom" WithArrow="true" Offset="25">
                    @action.Label
                </IgbTooltip>
            }
        </div>
    </div>
</div>

@code {
    private const string DownloadIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z'/></svg>";
    private const string ArrowForwardIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z'/></svg>";
    private const string DeleteIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'/></svg>";
    private const string AddIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>";
    private const string EditIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'/></svg>";
    private const string ContentCopyIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'/></svg>";
    private const string ShareIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/></svg>";

    private IgbIcon IconRef;

    private class ToolbarAction
    {
        public string Id { get; set; }
        public string Icon { get; set; }
        public string Label { get; set; }
    }

    private List<ToolbarAction> Actions { get; set; } = new List<ToolbarAction>
    {
        new ToolbarAction { Id = "edit-action", Icon = "edit", Label = "Edit" },
        new ToolbarAction { Id = "copy-action", Icon = "content_copy", Label = "Copy" },
        new ToolbarAction { Id = "share-action", Icon = "share", Label = "Share" },
        // ... 1 more items
    };

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            IconRef.EnsureReady().ContinueWith(_ =>
            {
                IconRef.RegisterIconFromText("download", DownloadIcon, "material");
                IconRef.RegisterIconFromText("arrow_forward", ArrowForwardIcon, "material");
                IconRef.RegisterIconFromText("delete", DeleteIcon, "material");
                IconRef.RegisterIconFromText("add", AddIcon, "material");
                IconRef.RegisterIconFromText("edit", EditIcon, "material");
                IconRef.RegisterIconFromText("content_copy", ContentCopyIcon, "material");
                IconRef.RegisterIconFromText("share", ShareIcon, "material");
            });
        }
    }
}
```

### Styling with Tailwind

You can style the Blazor Icon with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](../themes/tailwind.md) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

Use the `light-icon` or `dark-icon` class for the corresponding theme, and override the generated CSS variables with arbitrary properties:

```razor
<IgbIcon IconName="search" Collection="material" Class="!light-icon ![--color:#7B9E89] ![--size:48px]" />
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the default theme styles of the Icon.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@tailwind utilities;

:root {
    --color-form-ink: #344b65;
    --color-form-error: #ff134a;
    --color-form-border: #d2dbe8;
}
```

## Accessibility

The Blazor Icon is a non-interactive visual that either decorates nearby content or conveys meaning on its own.

### Keyboard Interaction

The Blazor Icon doesn't receive focus and has no keyboard interaction: it sets no `tabindex` and handles no keyboard or pointer events. Use the [Icon Button](../inputs/icon-button.md) when users must activate an icon with the keyboard.

| Key | Action |
| --- | --- |
| n/a | The Icon is not keyboard interactive. |

### Screen Readers / ARIA

The Blazor Icon makes no announcements of its own. What assistive technology reports depends on the accessible name of the icon:

- A `<title>` element that is a direct child of the root `<svg>` of the registered icon becomes the accessible name of the icon.
- An `aria-label` attribute on the icon names an icon whose SVG has no title, and takes precedence over the title.
- An `aria-hidden="true"` attribute hides a decorative icon from assistive technology.

### Accessibility Compliance

Infragistics documents Ignite UI for Blazor accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) | The icon uses the `aria-label` that you set, or the `<title>` of the registered SVG, as its text alternative. |

Your responsibilities:

- Give every icon that conveys meaning on its own an accessible name, and keep decorative icons hidden. See [Accessible Name](#accessible-name).
- Keep a contrast ratio of at least 3:1 between an icon that conveys information and its background, as [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) requires, especially when you override the theme color.
- Use an Icon Button, not an Icon, for actions that users activate.
- Set `mirrored` on directional icons in right-to-left layouts so that their direction matches the reading order.

## Troubleshooting

Use these answers when a Blazor Icon doesn't render or doesn't look as expected.

### Why is my icon empty?

The Blazor Icon draws only an SVG that is registered under the same name and collection. Check the following causes:

- The name or the collection doesn't match the registration exactly. The collection defaults to `default`.
- The SVG markup is malformed. Registration throws the `SVG element not found or malformed SVG string.` error when the text has no root `<svg>` element or doesn't parse.
- The request for an SVG file failed. The registration from a URL fails for a non-OK response, so check the browser console and the network panel. A file on another origin also needs a server that allows cross-origin requests.

### Why doesn't my SVG icon take the theme color?

The Blazor Icon applies its color to the root `<svg>` element, and the child elements inherit it as their fill. A child element with a hardcoded color keeps that color:

```html
<svg viewBox="0 0 24 24">
  <path fill="#050d42" d="..." />
</svg>
```

Remove hardcoded colors from the child elements, or set the color on the root `<svg>` element, where the theme overrides it. To color part of an icon on purpose, use a theme color variable, such as `fill="var(--ig-primary-500)"`.

### Why does a tooltip appear when I hover an icon?

Browsers show the `<title>` element of an SVG as a native tooltip.

Remove the `<title>` element from the SVG markup before you register it, and set `aria-label` on icons that need an accessible name.

### Known Limitations

The Blazor Icon has the following limitations:

- The Icon is a non-interactive visual: it doesn't receive focus or handle keyboard input.
- Theme colors reach the root `<svg>` element and the child elements that inherit its fill. Child elements with hardcoded colors keep them.
- The Icon draws registered SVG icons only. Icon fonts and ligatures aren't supported.

## API References

The Blazor Icon API reference lists the complete API surface for the target platform.

- [`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon)
- [`IgbIconMeta`](mcp:get_api_reference?platform=blazor&component=IgbIconMeta)

## Dependencies

The Blazor Icon requires a theme stylesheet to apply its theme-based size and color. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

## Additional Resources

The following resources provide more Blazor Icon guidance and project support:

- [Icon - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/icon)
- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

## Related Components

The Blazor Icon often appears inside other components. Use these components when an icon needs to do more than display a symbol:

- [Icon Button](../inputs/icon-button.md) - Use Icon Button when users click or press the icon to run an action.
- [Avatar](./avatar.md) - Use Avatar to represent a person or entity with an icon, initials, or an image.
- [Badge](../inputs/badge.md) - Use Badge to show a short status or count next to another element.

## FAQ

These questions cover common Blazor Icon setup, accessibility, and usage scenarios.

  **Q: Does the Icon include Material Icons?**

    No. The Blazor Icon draws SVG icons that you register by name, so register each Material icon that you need from its SVG markup or file. The Blazor Icon doesn't support icon fonts or ligatures.
  
  **Q: How do I add a custom SVG icon?**

    Call the `RegisterIconAsync` or `RegisterIconFromTextAsync` method of a referenced `IgbIcon`, then set the same `IconName` and `Collection` on the Blazor Icon. All Blazor Icons on the page share one registry, so the registered icon is available everywhere.
  
  **Q: How do I make an icon accessible to screen readers?**

    Give a Blazor Icon that conveys meaning on its own an accessible name with `aria-label`, or register an SVG that contains a `<title>` element. Hide a decorative Blazor Icon next to visible text with `aria-hidden="true"`.
  
  **Q: Can I make an Icon clickable?**

    The Blazor Icon doesn't receive focus or handle keyboard input, so a click handler on it excludes keyboard users. Use the Blazor Icon Button for actions, because it places an icon inside a focusable button.
  
  **Q: Does the Icon support right-to-left layouts?**

    Yes. Set the `mirrored` property of the Blazor Icon to flip a directional icon, such as an arrow, horizontally in a right-to-left layout. Non-directional icons don't need mirroring.
  

