---
title: Blazor Icon Component | Ignite UI for Blazor
_description: See how you can easily get started with Blazor Icon Component. Choose icons and select from different styling options to customize them further.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Icon components, Blazor Icon controls
_license: MIT
mentionedTypes: ["Icon"]
_tocName: Icon
---

# Blazor Icon Overview

The Blazor Icon component allows you to easily display font or choose from a large set of predefined SVG icons, but it also gives you the ability to create custom font icons for your project. Benefiting from a number of attributes, you can define or change the size of the icon in use or apply different styles to it.

## Blazor Icon Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical" style="display: block; align-items: center; width: 25rem; height: 2rem; border: 1px solid gainsboro">
    <IgbIcon @ref="IconRef" class="size-small" IconName="build" Collection="material" />
    <IgbIcon class="size-medium" IconName="build" Collection="material" />
    <IgbIcon class="size-large" IconName="build" Collection="material" />
</div>

@code {

    public IgbIcon IconRef { get; set; }

    const string buildIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z'/></svg>";
    protected override void OnAfterRender(bool firstRender)
    {
        if (this.IconRef != null && firstRender)
        {
            this.IconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
            //this.SmallIcon.RegisterIcon("build", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg", "material");
                this.IconRef.RegisterIconFromText("build", buildIcon, "material");
            }));
        }
    }
}
```


<div class="divider--half"></div>

## Usage

Before using the [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbIconModule));
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

The [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html) doesn't contain any icons on its own. It's a conduit for displaying any *registered* SVG images.

### Adding Icons

<!-- Blazor -->

To register an image as an icon, all you need to do is call one of the 2 "register" methods on a single [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html) element that allow you to add icons to an icon collection on your page.

The [`RegisterIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html#IgniteUI_Blazor_Controls_IgbIcon_RegisterIcon) method allows you to register an SVG image as an icon from an external file:

```razor
<IgbIcon @ref="@IconRef" />

@code {
  private IgbIcon IconRef { get; set; }

  protected override void OnAfterRender(bool firstRender)
  {
     base.OnAfterRender(firstRender);
     if (this.IconRef != null && firstRender)
     {
       this.IconRef.RegisterIcon("search", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg", "material");
     }
  }
}
```

<!-- end: Blazor -->

The method above will add an icon named `search` to a cached collection named `material`.

In order to use the newly registered icon, all you have to do is to pass the name and collection to the [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html) element:

```razor
IgbIcon IconName="search" Collection="material" />
```

The second method for registering icons is by passing an SVG string to the [`RegisterIconFromText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html#IgniteUI_Blazor_Controls_IgbIcon_RegisterIconFromText) method:

```razor
<IgbIcon @ref="@IconRef" />

@code {
  private IgbIcon IconRef { get; set; }

  protected override void OnAfterRender(bool firstRender)
  {
     base.OnAfterRender(firstRender);
     if (this.IconRef != null && firstRender)
     {
       const string searchIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>";
       this.IconRef.RegisterIconFromText("search", searchIcon, "material");
     }
  }
}
```

Then you'd use it in the same way as described in the component sample above.

### Size

The icon component supports three icon sizes - `small`, `medium`(default), and `large`. In order to change the size of the icon, you can utilize the `--ig-size` CSS variable as follows:

<!-- Blazor, WebComponents -->

```css
igc-icon {
  --ig-size: var(--ig-size-large);
}
```

```razor
<IgbIcon Size="@SizableComponentSize.Large">
```

<!-- end: Blazor, WebComponents -->

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical" style="display: block; align-items: center; width: 25rem; height: 2rem; border: 1px solid gainsboro">
    <IgbIcon @ref="IconRef" class="size-small" IconName="build" Collection="material" />
    <IgbIcon class="size-medium" IconName="build" Collection="material" />
    <IgbIcon class="size-large" IconName="build" Collection="material" />
</div>

@code {

    public IgbIcon IconRef { get; set; }

    const string buildIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z'/></svg>";
    protected override void OnAfterRender(bool firstRender)
    {
        if (this.IconRef != null && firstRender)
        {
            this.IconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
            //this.SmallIcon.RegisterIcon("build", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_build_24px.svg", "material");
                this.IconRef.RegisterIconFromText("build", buildIcon, "material");
            }));
        }
    }
}
```


You can also set a custom size for the icon component. The best way to do this is by using the `--size` CSS variable.

```css
igc-icon {
  --size: 32px;
}
```

### Mirrored

Some icons need to look a little different when used in Right-to-Left(RTL) mode. For that reason we provide a `mirrored` attribute that, when set, flips the icon horizontally.

```razor
IgbIcon IconName="search" Collection="material" Mirrored="true" />
```

## Styling

The icon component can be styled by applying styles directly to the [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html) element;

```css
igc-icon {
  --size: 28px;
  color: var(--ig-primary-500);
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical" style="width: 16rem; height: 3rem; border: 1px solid gainsboro;">
    <style>
        igc-icon {
           --size: 48px;
           color: olive;
        }
    </style>
    <IgbIcon @ref="SearchIcon" IconName="search" Collection="material"></IgbIcon>
</div>

@code {

    public IgbIcon SearchIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.SearchIcon != null && firstRender)
        {
            this.SearchIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.SearchIcon.RegisterIconFromText("search", "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' /></svg>", "material");
            }));
        }
    }
}
```


## API References

- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`RegisterIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html#IgniteUI_Blazor_Controls_IgbIcon_RegisterIcon)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
