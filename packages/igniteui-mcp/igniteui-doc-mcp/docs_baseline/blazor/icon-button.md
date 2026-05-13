---
title: Blazor Icon Button Component
_description: Developers can utilize and use various icons interchangeably as buttons with custom colors and more with Ignite UI for Blazor Icon Button component.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Icon Button components, Blazor Icon Button controls
_license: MIT
mentionedTypes: ["IconButton", "ButtonBase", "Button", "Icon"]
_tocName: Icon Button
---

# Blazor Icon Button Overview

The Ignite UI for Blazor Icon Button component allows developers to use registered icons as buttons in their application. It carries all features of the [icon](../layouts/icon.md) component but adds features from the [button](button.md) component as well.

## Blazor Icon Button Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical" style="display: list-item">

    <style>
        igc-icon{
            height: 0rem;
            width: 0rem;
        }
    </style>

    <IgbIcon @ref="RegisterIconRef" />
    <IgbIconButton class="size-small" IconName="thumb-up" Collection="material" Variant="@IconButtonVariant.Contained" />
    <IgbIconButton class="size-medium" IconName="thumb-up" Collection="material" Variant="@IconButtonVariant.Contained" />
    <IgbIconButton class="size-large" IconName="thumb-up" Collection="material" Variant="@IconButtonVariant.Contained" />
</div>

@code {

    public IgbIcon RegisterIconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if(firstRender && this.RegisterIconRef != null)
        {
            await this.RegisterIconRef.EnsureReady();
            string thumbUpIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'></path></svg>";
            await this.RegisterIconRef.RegisterIconFromTextAsync("thumb-up", thumbUpIcon, "material");
        }
    }
}
```

<div class="divider"></div>

## Usage

Before using the [`IgbIconButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIconButton.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbIconButtonModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbIconButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIconButton.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbIconButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIconButton.html) is as follows:

```razor
<IgbIconButton IconName="thumb-up" Collection="material" />
```

## Examples

### Variant

Similar to the regular button components, the icon button supports several variants - `flat` (default), `contained`, and `outlined`; To change the icon button type set the `variant` attribute of the icon button.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical" style="display: list-item">
    <style>
        igc-icon{
            height: 0rem;
            width: 0rem;
        }
    </style>

    <IgbIcon @ref="@RegisterIconRef"/>
    <IgbIconButton IconName="thumb-up" Collection="material" Variant="@IconButtonVariant.Flat" />
    <IgbIconButton IconName="thumb-up" Collection="material" Variant="@IconButtonVariant.Contained" />
    <IgbIconButton IconName="thumb-up" Collection="material" Variant="@IconButtonVariant.Outlined" />
</div>

@code {

    private IgbIcon RegisterIconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if(firstRender && this.RegisterIconRef != null)
        {
            await this.RegisterIconRef.EnsureReady();
            string thumbUpIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'></path></svg>";
            await this.RegisterIconRef.RegisterIconFromTextAsync("thumb-up", thumbUpIcon, "material");
        }
    }
}
```

```razor
<IgbIconButton IconName="search" Variant="@IconButtonVariant.Contained" Collection="material" />
```

### Size

The size of the button can be changed by utilizing the `--ig-size` CSS variable to any of the three supported sizes: `--ig-size-small`, `--ig-size-medium`, `--ig-size-large`(default).

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical" style="display: list-item">

    <style>
        igc-icon{
            height: 0rem;
            width: 0rem;
        }
    </style>

    <IgbIcon @ref="RegisterIconRef" />
    <IgbIconButton class="size-small" IconName="thumb-up" Collection="material" Variant="@IconButtonVariant.Contained" />
    <IgbIconButton class="size-medium" IconName="thumb-up" Collection="material" Variant="@IconButtonVariant.Contained" />
    <IgbIconButton class="size-large" IconName="thumb-up" Collection="material" Variant="@IconButtonVariant.Contained" />
</div>

@code {

    public IgbIcon RegisterIconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if(firstRender && this.RegisterIconRef != null)
        {
            await this.RegisterIconRef.EnsureReady();
            string thumbUpIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'></path></svg>";
            await this.RegisterIconRef.RegisterIconFromTextAsync("thumb-up", thumbUpIcon, "material");
        }
    }
}
```

```css
igc-icon-button {
    --ig-size: var(--ig-size-medium);
}
```

```razor
<IgbIconButton IconName="thumb-up" Collection="material" Size="@SizableComponentSize.Medium" />
```

### Type

The icon button component will change its internal structure from `<button>` to an `<a>` type element when the `href` attribute is set. In that case the icon button can be thought of as a regular link. Setting the `href` attribute will allow you to also set the `rel`, `target`, and `download` attributes of the icon button.

```razor
<IgbIconButton IconName="thumb-up" Collection="material" Href="https://duckduckgo.com" Target="_blank" />
```

### Mirrored

Some icons need to look a little different when used in Right-to-Left(RTL) mode. For that reason we provide a `mirrored` attribute that, when set, flips the icon button horizontally.

```razor
<IgbIconButton IconName="thumb-up" Collection="material" Mirrored="true" />
```

## Styling

The [`IgbIconButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIconButton.html) component exposes two CSS parts - `base` and `icon` that allow you to style the wrapping element (`<button>` or `<a>`) and the wrapped `<igc-icon>` element.

```css
igc-icon-button[variant="contained"]:not([disabled])::part(base) {
  padding: 12px;
  background-color: var(--ig-success-500);
}

igc-icon-button::part(icon) {
  --size: 22px;
  color: var(--ig-success-500-contrast);
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <style>
        igc-icon-button[variant=contained]:not([disabled])::part(base) {
            padding: 0.75rem;
            color: olive;
            background-color: lightgray;
        }

        igc-icon-button::part(icon) {
            --size: 2rem;
        }

        igc-icon{
            height: 0rem;
            width: 0rem;
        }
    </style>

    <IgbIcon @ref="@RegisterIconRef" />
    <IgbIconButton IconName="thumb-up" Collection="material" Variant="@IconButtonVariant.Contained"/>
</div>

@code {

    private IgbIcon RegisterIconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if(firstRender && this.RegisterIconRef != null)
        {
            await this.RegisterIconRef.EnsureReady();
            string thumbUpIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'></path></svg>";
            await this.RegisterIconRef.RegisterIconFromTextAsync("thumb-up", thumbUpIcon, "material");
        }
    }
}
```

## API References

- [`IgbButtonBase`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButtonBase.html)
- [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html)
- [`IgbIconButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIconButton.html)
- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
