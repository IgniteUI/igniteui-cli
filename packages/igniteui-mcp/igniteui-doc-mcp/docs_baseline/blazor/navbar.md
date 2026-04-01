---
title: Blazor Navbar | Infragistics
_description: Infragistics' Blazor navbar provides optimal UI experience with seamless integration to allow users to move within an application smoothly. Improve your application with Ignite UI for  Blazor!
_keywords: Blazor navbar, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["Navbar"]
_tocName: Navbar
---

# Blazor Navbar Overview

The Ignite UI for Blazor Navbar informs the user of their current position in an app. The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.

## Blazor Navbar Example

The following example represents a [`IgbNavbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavbar.html) with icons and text header:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbNavbar style="height:4rem">
        <IgbIcon @ref="@HomeIcon" slot="start" IconName="home" Collection="material" />
        <h3>Sample App</h3>
        <IgbIcon @ref="@SearchIcon" slot="end" IconName="search" Collection="material" />
        <IgbIcon @ref="@FavoriteIcon" slot="end" IconName="favorite" Collection="material" />
        <IgbIcon @ref="@MoreVertIcon" slot="end" IconName="more_vert" Collection="material" />
    </IgbNavbar>
</div>

@code {

    public IgbIcon HomeIcon { get; set; }
    public IgbIcon SearchIcon { get; set; }
    public IgbIcon FavoriteIcon { get; set; }
    public IgbIcon MoreVertIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if(this.HomeIcon != null && firstRender)
        {
            this.HomeIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.HomeIcon.RegisterIconFromText("home",
                    "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0z' fill='none' /><path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' /></svg>",
                    "material");
            }));
        }

        if (this.SearchIcon != null && firstRender)
        {
            this.SearchIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.SearchIcon.RegisterIconFromText("search",
                    "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0z' fill='none'/><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>",
                    "material");
            }));
        }

        if (this.FavoriteIcon != null && firstRender)
        {
            this.FavoriteIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.FavoriteIcon.RegisterIconFromText("favorite",
                    "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>",
                    "material");
            }));
        }

        if (this.MoreVertIcon != null && firstRender)
        {
            this.MoreVertIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.MoreVertIcon.RegisterIconFromText("more_vert",
                    "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/></svg>",
                    "material");
            }));
        }
    }
}
```


## Usage

Before using the [`IgbNavbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavbar.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbNavbarModule));
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the [`IgbNavbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavbar.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

Then in the template of [`IgbNavbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavbar.html), you can add the following code to show a basic [`IgbNavbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavbar.html) with a title only:

```razor
<IgbNavbar>Navigation Title</IgbNavbar>
```

### Content

You can enhance the [`IgbNavbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavbar.html) component by adding [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html) or other components at the start or end position as content, allowing users to navigate to key positions directly from the bar:

```Razor
<IgbNavbar>
    <IgbIcon @ref="@HomeIcon" slot="start" IconName="home" Collection="material" />
    <h3>Sample App</h3>
    <IgbIcon @ref="@SearchIcon" slot="end" IconName="search" Collection="material" />
    ...
</IgbNavbar>
```

## Styling

The `NavBar` component exposes several CSS parts, giving you full control over its style:

|Name|Description|
|--|--|
| `base` | The base wrapper of the navigation bar. |
| `start` | The left aligned icon container. |
| `middle` | The navigation bar title container. |
| `end` | The right aligned action icons container. |

```css
igc-icon {
  color: var(--ig-primary-500);
}

igc-navbar {
  background-color: var(--ig-secondary-200);
}

igc-navbar::part(middle) {
  font-family: Titillium Web, sans-serif;
  color: var(--ig-primary-500);;
}
```

If all went well, you should see the following in your browser:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <style>
        igc-icon {
            color: currentColor;
        }

        igc-navbar {
            background-color: #232121
        }

        igc-navbar::part(start) {
            color: #f23269;
        }

        igc-navbar::part(middle) {
            font-family: Titillium Web,sans-serif;
            color: #e9e8ea
        }

        igc-navbar::part(end) {
            color: #e9e8ea
        }
    </style>

    <IgbNavbar style="height: 4rem;">
        <IgbIcon @ref="@HomeIcon" slot="start" IconName="home" Collection="material" />
        <h3>Sample App</h3>
        <IgbIcon @ref="@SearchIcon" slot="end" IconName="search" Collection="material" />
        <IgbIcon @ref="@FavoriteIcon" slot="end" IconName="favorite" Collection="material" />
        <IgbIcon @ref="@MoreVertIcon" slot="end" IconName="more_vert" Collection="material" />
    </IgbNavbar>
</div>

@code {

    public IgbIcon HomeIcon { get; set; }
    public IgbIcon SearchIcon { get; set; }
    public IgbIcon FavoriteIcon { get; set; }
    public IgbIcon MoreVertIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.HomeIcon != null && firstRender)
        {
            this.HomeIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.HomeIcon.RegisterIconFromText("home",
                    "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none' /><path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' /></svg>",
                    "material");
            }));
        }

        if (this.SearchIcon != null && firstRender)
        {
            this.SearchIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.SearchIcon.RegisterIconFromText("search",
                    "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>",
                    "material");
            }));
        }

        if (this.FavoriteIcon != null && firstRender)
        {
            this.FavoriteIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.FavoriteIcon.RegisterIconFromText("favorite",
                    "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>",
                    "material");
            }));
        }

        if (this.MoreVertIcon != null && firstRender)
        {
            this.MoreVertIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.MoreVertIcon.RegisterIconFromText("more_vert",
                    "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/></svg>",
                    "material");
            }));
        }
    }
}
```


<div class="divider"></div>

## API References

- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`IgbNavbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavbar.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
