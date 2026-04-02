---
title: Blazor NavDrawer | Infragistics
_description: Infragistics' Blazor NavDrawer provides side navigation that can be expanded or collapsed within the content
_keywords: Blazor navbar, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["NavDrawer"]
_tocName: Navigation Drawer
---

# Blazor Navigation Drawer Overview

The Ignite UI for Blazor Navigation Drawer provides side navigation that can be expanded or collapsed within the content. A mini version provides quick access to navigation even when closed. Its content is completely customizable while also providing default menu item styling.

## Blazor Navigation Drawer Example

This sample demonstrates how to create [`IgbNavDrawer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavDrawer.html) component.

```razor
@using IgniteUI.Blazor.Controls

<style>
    igc-icon-button::part(base):hover {
        background-color: lightgray;
    }

    .container{
        padding: 16px;
    }
</style>

<div class="container vertical">
    <IgbIconButton @ref="MenuIconButton" @onclick="ToggleNavDrawer" IconName="menu" Collection="material" Variant="@IconButtonVariant.Flat" />
    <IgbNavDrawer Open="true" @ref="NavDrawerRef">
        <IgbNavDrawerHeaderItem>
            Sample Drawer
        </IgbNavDrawerHeaderItem>

        <IgbNavDrawerItem @ref="HomeItemRef" @onclick="(args) => NavDrawerItemClick(args, HomeItemRef)">
            <IgbIcon @ref="@IconRef" slot="icon" IconName="home" Collection="material"></IgbIcon>
            <span slot="content">Home</span>
        </IgbNavDrawerItem>

        <IgbNavDrawerItem @ref="SearchItemRef" @onclick="(args) => NavDrawerItemClick(args, SearchItemRef)">
            <IgbIcon @ref="@IconRef" slot="icon" IconName="search" Collection="material"></IgbIcon>
            <span slot="content">Search</span>
        </IgbNavDrawerItem>
    </IgbNavDrawer>
</div>

@code {

    public IgbIconButton MenuIconButton { get; set; }
    public IgbIcon IconRef { get; set; }

    public IgbNavDrawer NavDrawerRef { get; set; }
    public IgbNavDrawerItem HomeItemRef { get; set; }
    public IgbNavDrawerItem SearchItemRef { get; set; }

    public List<IgbNavDrawerItem> NavDrawerItemRefs { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.MenuIconButton != null)
        {
            await this.MenuIconButton.EnsureReady();
            await this.MenuIconButton.RegisterIconAsync("menu", "https://unpkg.com/material-design-icons@3.0.1/navigation/svg/production/ic_menu_24px.svg", "material");
        }

        if (firstRender && this.IconRef != null)
        {
            await this.IconRef.EnsureReady();
            await this.IconRef.RegisterIconAsync("home", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_home_24px.svg", "material");
            await this.IconRef.RegisterIconAsync("search", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_search_24px.svg", "material");
        }

        if (firstRender)
        {
            NavDrawerItemRefs = new List<IgbNavDrawerItem>();
            await this.HomeItemRef.EnsureReady();
            NavDrawerItemRefs.Add(HomeItemRef);
            await this.SearchItemRef.EnsureReady();
            NavDrawerItemRefs.Add(SearchItemRef);
        }
    }

    public void ToggleNavDrawer(MouseEventArgs args)
    {
        NavDrawerRef.Toggle();
    }

    public void NavDrawerItemClick(MouseEventArgs args, IgbNavDrawerItem item)
    {
        item.Active = true;
        foreach (IgbNavDrawerItem i in NavDrawerItemRefs)
        {
            if(i != item)
            {
                i.Active = false;
            }
        }
    }
}
```


## Usage

Before using the [`IgbNavDrawer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavDrawer.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
  typeof(IgbNavDrawerModule),
  typeof(IgbNavDrawerHeaderItemModule)
);
```

You will also need to link an additional CSS file to apply the styling to the [`IgbNavDrawer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavDrawer.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

## Adding Navigation Drawer Items

The simplest way to start using the [`IgbNavDrawer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavDrawer.html) is as follows:

```razor
<IgbNavDrawer Open="true">
    <IgbNavDrawerHeaderItem>
        Sample Drawer
    </IgbNavDrawerHeaderItem>
    <IgbNavDrawerItem>
        <IgbIcon @ref="@HomeIcon" slot="icon" IconName="home" Collection="material"></IgbIcon>
        <span slot="content">Home</span>
    </IgbNavDrawerItem>
    <IgbNavDrawerItem>
        <IgbIcon @ref="@SearchIcon" slot="icon" IconName="search" Collection="material"></IgbIcon>
        <span slot="content">Search</span>
    </IgbNavDrawerItem>
</IgbNavDrawer>
```

If all went well, you should see the following in your browser:

```razor
@using IgniteUI.Blazor.Controls

<style>
    igc-icon-button::part(base):hover {
        background-color: lightgray;
    }

    .container{
        padding: 16px;
    }
</style>

<div class="container vertical">
    <IgbIconButton @ref="MenuIconButton" @onclick="ToggleNavDrawer" IconName="menu" Collection="material" Variant="@IconButtonVariant.Flat" />
    <IgbNavDrawer Open="true" @ref="NavDrawerRef">
        <IgbNavDrawerHeaderItem>
            Sample Drawer
        </IgbNavDrawerHeaderItem>

        <IgbNavDrawerItem @ref="HomeItemRef" @onclick="(args) => NavDrawerItemClick(args, HomeItemRef)">
            <IgbIcon @ref="@IconRef" slot="icon" IconName="home" Collection="material"></IgbIcon>
            <span slot="content">Home</span>
        </IgbNavDrawerItem>

        <IgbNavDrawerItem @ref="SearchItemRef" @onclick="(args) => NavDrawerItemClick(args, SearchItemRef)">
            <IgbIcon @ref="@IconRef" slot="icon" IconName="search" Collection="material"></IgbIcon>
            <span slot="content">Search</span>
        </IgbNavDrawerItem>
    </IgbNavDrawer>
</div>

@code {

    public IgbIconButton MenuIconButton { get; set; }
    public IgbIcon IconRef { get; set; }

    public IgbNavDrawer NavDrawerRef { get; set; }
    public IgbNavDrawerItem HomeItemRef { get; set; }
    public IgbNavDrawerItem SearchItemRef { get; set; }

    public List<IgbNavDrawerItem> NavDrawerItemRefs { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.MenuIconButton != null)
        {
            await this.MenuIconButton.EnsureReady();
            await this.MenuIconButton.RegisterIconAsync("menu", "https://unpkg.com/material-design-icons@3.0.1/navigation/svg/production/ic_menu_24px.svg", "material");
        }

        if (firstRender && this.IconRef != null)
        {
            await this.IconRef.EnsureReady();
            await this.IconRef.RegisterIconAsync("home", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_home_24px.svg", "material");
            await this.IconRef.RegisterIconAsync("search", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_search_24px.svg", "material");
        }

        if (firstRender)
        {
            NavDrawerItemRefs = new List<IgbNavDrawerItem>();
            await this.HomeItemRef.EnsureReady();
            NavDrawerItemRefs.Add(HomeItemRef);
            await this.SearchItemRef.EnsureReady();
            NavDrawerItemRefs.Add(SearchItemRef);
        }
    }

    public void ToggleNavDrawer(MouseEventArgs args)
    {
        NavDrawerRef.Toggle();
    }

    public void NavDrawerItemClick(MouseEventArgs args, IgbNavDrawerItem item)
    {
        item.Active = true;
        foreach (IgbNavDrawerItem i in NavDrawerItemRefs)
        {
            if(i != item)
            {
                i.Active = false;
            }
        }
    }
}
```


## Navbar Integration

While any content can be provided in the drawer, the [`IgbNavDrawerItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavDrawerItem.html) is available to apply out-of-the-box styling to the items.

To enhance our component a bit, we can use it in conjunction with the [`IgbNavbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavbar.html). This way we can achieve a more completed look and use the drawer's methods. Let's look at how we can use this in the next example:

```razor
<IgbNavbar>
    <IgbIcon slot="start" IconName="menu" Collection="material" />
    <h2>Home</h2>
</IgbNavbar>

<IgbNavDrawer @ref="NavDrawerRef">
    <IgbNavDrawerHeaderItem>
        Sample Drawer
    </IgbNavDrawerHeaderItem>
    <IgbNavDrawerItem>
        <IgbIcon slot="icon" IconName="home" Collection="material" />
        <span slot="content">Home</span>
    </IgbNavDrawerItem>
    <IgbNavDrawerItem>
        <IgbIcon slot="icon" IconName="search" Collection="material" @onclick="OnMenuIconClick" />
        <span slot="content">Search</span>
    </IgbNavDrawerItem>
</IgbNavDrawer>
```

Let's also add some radio buttons to display all `position` values. This way whenever one gets selected, we will change the position of the drawer.

```razor
<IgbRadioGroup id="radio-group" Alignment="ContentOrientation.Horizontal">
    <IgbRadio Value="Start" LabelPosition="RadioLabelPosition.After" Checked="true" Change="OnRadioOptionClick">Start</IgbRadio>
    <IgbRadio Value="End" LabelPosition="RadioLabelPosition.After" Change="OnRadioOptionClick">End</IgbRadio>
    <IgbRadio Value="Top" LabelPosition="RadioLabelPosition.After" Change="OnRadioOptionClick">Top</IgbRadio>
    <IgbRadio Value="Bottom" LabelPosition="RadioLabelPosition.After" Change="OnRadioOptionClick">Bottom</IgbRadio>
</IgbRadioGroup>

@code {

    public IgbNavDrawer NavDrawerRef { get; set; }

    public void OnRadioOptionClick(IgbComponentBoolValueChangedEventArgs args)
    {
        IgbRadio radio = args.Parent as IgbRadio;

        if (this.NavDrawerRef != null)
        {
            switch (radio.Value)
            {
                case "Start":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.Start;
                        break;
                    }
                case "End":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.End;
                        break;
                    }
                case "Top":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.Top;
                        break;
                    }
                case "Bottom":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.Bottom;
                        break;
                    }
            }
        }
    }
}
```

And finally, we need a way to open and close our navigation drawer. There are a couple of ways to achieve this, but for the sake of this example we will do the following:

```razor
public void OnMenuIconClick()
{
    if (this.NavDrawerRef != null)
    {
        this.NavDrawerRef.Show();
    }
}
```

If all goes well, your component should now look like this:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical" >
    <IgbNavDrawer @ref="@NavDrawerRef" style="position: relative">
        <IgbNavDrawerHeaderItem>
            Sample Drawer
        </IgbNavDrawerHeaderItem>

        <IgbNavDrawerItem @ref="HomeItemRef" @onclick="(args) => NavDrawerItemClick(args, HomeItemRef)">
            <IgbIcon @ref="@IconRef" slot="icon" IconName="home" Collection="material" />
            <span slot="content">Home</span>
        </IgbNavDrawerItem>

        <IgbNavDrawerItem @ref="SearchItemRef" @onclick="(args) => NavDrawerItemClick(args, SearchItemRef)">
            <IgbIcon @ref="@IconRef" slot="icon" IconName="search" Collection="material" />
            <span slot="content">Search</span>
        </IgbNavDrawerItem>
    </IgbNavDrawer>

    <div id="content" style="width: 100%">
        <IgbRadioGroup id="radio-group" Alignment="ContentOrientation.Horizontal">
            <IgbRadio name="position" Value="Start" LabelPosition="ToggleLabelPosition.After" Checked="true" Change="OnRadioOptionClick">Start</IgbRadio>
            <IgbRadio name="position" Value="End" LabelPosition="ToggleLabelPosition.After" Change="OnRadioOptionClick">End</IgbRadio>
            <IgbRadio name="position" Value="Top" LabelPosition="ToggleLabelPosition.After" Change="OnRadioOptionClick">Top</IgbRadio>
            <IgbRadio name="position" Value="Bottom" LabelPosition="ToggleLabelPosition.After" Change="OnRadioOptionClick">Bottom</IgbRadio>
        </IgbRadioGroup>

        <IgbNavbar>
            <IgbIcon @ref="@IconRef" slot="start" IconName="menu" Collection="material" @onclick="OnMenuIconClick" />
            <h2>@Title</h2>
        </IgbNavbar>
    </div>
</div>

@code {

    public IgbIcon IconRef { get; set; }

    public IgbNavDrawer NavDrawerRef { get; set; }
    public IgbNavDrawerItem HomeItemRef { get; set; }
    public IgbNavDrawerItem SearchItemRef { get; set; }

    public Dictionary<string, IgbNavDrawerItem> NavDrawerTitlesItemRefs { get; set; }

    public string Title { get; set; } = "Home";

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.IconRef != null)
        {
            await this.IconRef.EnsureReady();
            await this.IconRef.RegisterIconAsync("menu", "https://unpkg.com/material-design-icons@3.0.1/navigation/svg/production/ic_menu_24px.svg", "material");
            await this.IconRef.RegisterIconAsync("home", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_home_24px.svg", "material");
            await this.IconRef.RegisterIconAsync("search", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_search_24px.svg", "material");
        }

        if (firstRender)
        {
            NavDrawerTitlesItemRefs = new Dictionary<string, IgbNavDrawerItem>();
            await this.HomeItemRef.EnsureReady();
            NavDrawerTitlesItemRefs.Add("Home", HomeItemRef);
            HomeItemRef.Active = true;
            await this.SearchItemRef.EnsureReady();
            NavDrawerTitlesItemRefs.Add("Search", SearchItemRef);
        }
    }

    public void OnRadioOptionClick(IgbRadioChangeEventArgs args)
    {
        IgbRadio radio = args.Parent as IgbRadio;

        if (this.NavDrawerRef != null)
        {
            switch (radio.Value)
            {
                case "Start":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.Start;
                        break;
                    }
                case "End":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.End;
                        break;
                    }
                case "Top":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.Top;
                        break;
                    }
                case "Bottom":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.Bottom;
                        break;
                    }
            }
        }
    }

    public void OnMenuIconClick()
    {
        if(this.NavDrawerRef != null)
        {
            this.NavDrawerRef.Show();
        }
    }

    public void NavDrawerItemClick(MouseEventArgs args, IgbNavDrawerItem item)
    {
        item.Active = true;
        Title = NavDrawerTitlesItemRefs.Where(pair => pair.Value == item).Select(pair => pair.Key).ToList()[0];
        foreach (IgbNavDrawerItem i in NavDrawerTitlesItemRefs.Values)
        {
            if (i != item)
            {
                i.Active = false;
            }
        }
    }
}
```


## Mini Variant

With the mini variant, the Navigation Drawer changes its width instead of closing. It is used to maintain quick navigation, available at all times, leaving just the icons. To achieve that, you only need to set up the `mini` slot of the drawer.

```razor
<IgbNavDrawer @ref="@NavDrawerRef" Open="true" style="position: relative">
    <IgbNavDrawerHeaderItem>
        Sample Drawer
    </IgbNavDrawerHeaderItem>
    <IgbNavDrawerItem>
        <IgbIcon @ref="@HomeIcon" slot="icon" Collection="material" IconName="home" />
        <span slot="content">Home</span>
    </IgbNavDrawerItem>
    <IgbNavDrawerItem>
        <IgbIcon @ref="@SearchIcon" slot="icon" Collection="material" IconName="search" />
        <span slot="content">Search</span>
    </IgbNavDrawerItem>
    <div slot="mini">
        <IgbNavDrawerItem>
            <IgbIcon slot="icon" Collection="material" IconName="home" />
        </IgbNavDrawerItem>
        <IgbNavDrawerItem>
            <IgbIcon slot="icon" Collection="material" IconName="search" />
        </IgbNavDrawerItem>
    </div>
</IgbNavDrawer>
```

And here's the result:

```razor
@using IgniteUI.Blazor.Controls

<style>
    .container{
        padding: 16px;
    }
</style>

<div class="container vertical">
    <div id="nav-drawer-container" style="display: flex;">
        <IgbNavDrawer @ref="@NavDrawerRef" Open="true" style="position: relative">
            <IgbNavDrawerHeaderItem>
                Sample Drawer
            </IgbNavDrawerHeaderItem>

            <IgbNavDrawerItem @ref="HomeItemRef" @onclick='(args) => NavDrawerItemClick(args, "home")'>
                <IgbIcon @ref="@IconRef" slot="icon" Collection="material" IconName="home" />
                <span slot="content">Home</span>
            </IgbNavDrawerItem>

            <IgbNavDrawerItem @ref="SearchItemRef" @onclick='(args) => NavDrawerItemClick(args, "search")'>
                <IgbIcon @ref="@IconRef" slot="icon" Collection="material" IconName="search" />
                <span slot="content">Search</span>
            </IgbNavDrawerItem>

            <div slot="mini">
                <IgbNavDrawerItem @ref="HomeMiniRef" @onclick='(args) => NavDrawerItemClick(args, "home")'>
                    <IgbIcon slot="icon" Collection="material" IconName="home" />
                </IgbNavDrawerItem>

                <IgbNavDrawerItem @ref="SearchMiniRef" @onclick='(args) => NavDrawerItemClick(args, "search")'>
                    <IgbIcon slot="icon" Collection="material" IconName="search" />
                </IgbNavDrawerItem>
            </div>
        </IgbNavDrawer>

        <div id="content" style="width: 100%">
            <IgbButton id="toggleBtn" style="margin-left: 50px;" @onclick="OnButtonClick">Toggle</IgbButton>
        </div>
    </div>
</div>

@code {

    public IgbIcon IconRef { get; set; }

    public IgbNavDrawer NavDrawerRef { get; set; }
    public IgbNavDrawerItem HomeItemRef { get; set; }
    public IgbNavDrawerItem HomeMiniRef { get; set; }
    public IgbNavDrawerItem SearchItemRef { get; set; }
    public IgbNavDrawerItem SearchMiniRef { get; set; }

    public Dictionary<IgbNavDrawerItem, string> NavDrawerItemsIcons { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.IconRef != null)
        {
            await this.IconRef.EnsureReady();
            await this.IconRef.RegisterIconAsync("home",
                    "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_home_24px.svg",
                    "material");
            await this.IconRef.RegisterIconAsync("search",
                    "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_search_24px.svg",
                    "material");
        }

        if (firstRender)
        {
            NavDrawerItemsIcons = new Dictionary<IgbNavDrawerItem, string>();
            await this.HomeItemRef.EnsureReady();
            await this.HomeMiniRef.EnsureReady();
            NavDrawerItemsIcons.Add(HomeItemRef, "home");
            NavDrawerItemsIcons.Add(HomeMiniRef, "home");
            await this.SearchItemRef.EnsureReady();
            await this.SearchMiniRef.EnsureReady();
            NavDrawerItemsIcons.Add(SearchItemRef, "search");
            NavDrawerItemsIcons.Add(SearchMiniRef, "search");
        }
    }

    public void OnButtonClick()
    {
        this.NavDrawerRef.Toggle();
    }

    public void NavDrawerItemClick(MouseEventArgs args, string icon)
    {
        IEnumerable<IgbNavDrawerItem> itemsToBeActive = NavDrawerItemsIcons
                                                           .Where(pair => pair.Value == icon)
                                                           .Select(pair => pair.Key);

        foreach (IgbNavDrawerItem item in itemsToBeActive)
        {
            item.Active = true;
        }

        IEnumerable<IgbNavDrawerItem> itemsToBeInactive = NavDrawerItemsIcons
                                                            .Where(pair => pair.Value != icon)
                                                            .Select(pair => pair.Key);

        foreach (IgbNavDrawerItem item in itemsToBeInactive)
        {
            item.Active = false;
        }
    }
}
```


## Styling

The [`IgbNavDrawer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavDrawer.html) exposes several CSS parts - `base`, `main`, and `mini`, giving you full control over their styling.

```scss
igc-nav-drawer::part(base) {
  background: var(--ig-secondary-500);
}

igc-nav-drawer-item::part(base) {
  color: var(--ig-secondary-500-contrast);
}

igc-nav-drawer-item::part(base):hover {
  background-color: var(--ig-gray-800);
}

igc-nav-drawer-item[active]::part(base) {
  background: var(--ig-warn-500);
  color: var(--ig-warn-500-contrast);
}

igc-nav-drawer-header-item {
  color: var(--ig-warn-500);
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div id="root" style="display: flex;">
        <style>
            igc-nav-drawer::part(base) {
                background: #2d313a;
            }

            igc-nav-drawer-item::part(base) {
                color: #fff;
            }

            igc-nav-drawer-item::part(base):hover {
                background-color: #3D4149;
            }

            igc-nav-drawer-item[active]::part(base) {
                background: #f3c03e;
                color: #2c2c2c
            }

            igc-nav-drawer-header-item {
                color: #f3c03e
            }

            igc-icon-button::part(icon) {
                --size: 32px;
                color: #f3c03e
            }

            igc-icon-button::part(base) {
                background-color: #2c2c2c;
            }

            igc-icon-button::part(base):hover {
                background-color: #3D4149;
            }

            .container {
                padding: 16px;
            }
        </style>
        <IgbIconButton @ref="MenuIconButton" @onclick="ToggleNavDrawer" IconName="menu" Collection="material" Variant="@IconButtonVariant.Flat" />
        <IgbNavDrawer @ref="NavDrawerRef" id="navDrawer" Open="true" style="position: relative">
            <IgbNavDrawerHeaderItem>
                Sample Drawer
            </IgbNavDrawerHeaderItem>

            <IgbNavDrawerItem @ref="HomeItemRef" @onclick="(args) => NavDrawerItemClick(args, HomeItemRef)">
                <IgbIcon @ref="@IconRef" slot="icon" Collection="material" IconName="home" />
                <span slot="content">Home</span>
            </IgbNavDrawerItem>

            <IgbNavDrawerItem @ref="SearchItemRef" @onclick="(args) => NavDrawerItemClick(args, SearchItemRef)">
                <IgbIcon @ref="IconRef" slot="icon" Collection="material" IconName="search" />
                <span slot="content">Search</span>
            </IgbNavDrawerItem>
        </IgbNavDrawer>
    </div>
</div>

@code {
    public IgbIconButton MenuIconButton { get; set; }
    public IgbIcon IconRef { get; set; }

    public IgbNavDrawer NavDrawerRef { get; set; }
    public IgbNavDrawerItem HomeItemRef { get; set; }
    public IgbNavDrawerItem SearchItemRef { get; set; }
    public List<IgbNavDrawerItem> NavDrawerItemRefs { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.MenuIconButton != null)
        {
            await this.MenuIconButton.EnsureReady();
            await this.MenuIconButton.RegisterIconAsync("menu", "https://unpkg.com/material-design-icons@3.0.1/navigation/svg/production/ic_menu_24px.svg", "material");
        }

        if (firstRender && this.IconRef != null)
        {
            await this.IconRef.EnsureReady();
            await this.IconRef.RegisterIconAsync("home", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_home_24px.svg", "material");
            await this.IconRef.RegisterIconAsync("search", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_search_24px.svg", "material");
        }

        if (firstRender)
        {
            NavDrawerItemRefs = new List<IgbNavDrawerItem>();
            await this.HomeItemRef.EnsureReady();
            NavDrawerItemRefs.Add(HomeItemRef);
            await this.SearchItemRef.EnsureReady();
            NavDrawerItemRefs.Add(SearchItemRef);
        }
    }

    public void ToggleNavDrawer(MouseEventArgs args)
    {
        NavDrawerRef.Toggle();
    }

    public void NavDrawerItemClick(MouseEventArgs args, IgbNavDrawerItem item)
    {
        item.Active = true;
        foreach (IgbNavDrawerItem i in NavDrawerItemRefs)
        {
            if (i != item)
            {
                i.Active = false;
            }
        }
    }
}
```


## API References

- [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html)
- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`IgbNavDrawerHeaderItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavDrawerHeaderItem.html)
- [`IgbNavDrawerItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavDrawerItem.html)
- [`IgbNavDrawer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavDrawer.html)
- [`IgbNavbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNavbar.html)
- [`IgbRadioGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadioGroup.html)
- [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
