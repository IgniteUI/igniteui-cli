---
title: Blazor Tabs Control | Layout Controls | Ignite UI for Blazor
_description: Blazor Tabs component allows users to place tabs at the top and switch between similar data sets. Try it Now
_keywords: Blazor, UI controls, web widgets, UI widgets, Blazor Tabs Component, Infragistics
_license: MIT
mentionedTypes: ["Tabs", "Tab", "Icon", "IconButton", "RadioGroup"]
_tocName: Tabs
---

# Blazor Tabs Overview

The Blazor Tabs is a lightweight and user-friendly component that organizes corresponding content in a tab format or a collection of tabs typically placed horizontally. The Blazor Tab enables end-users to easily click through and display different views. There are several features and customization options like tab orientation, templating, built-in header styles, animation, scroll buttons, and more.

The Ignite UI for Blazor Tabs organizes and switches between similar data sets. The tabs are placed at the top of the data content. When a tab is selected its corresponding content is displayed.

## Blazor Tabs Example

The Blazor Tabs example below displays three different tabs aligned in a single line so you can navigate across each in a fast and easy way.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbTabs>
        <IgbTab>
            <IgbIcon slot="label" @ref=ChildIcon IconName="home" Collection="material"/>
            Home tab panel
        </IgbTab>
        <IgbTab>
            <IgbIcon slot="label" IconName="search" Collection="material"/>
            Search tab panel
        </IgbTab>
        <IgbTab>
            <IgbIcon slot="label" IconName="favorite" Collection="material"/>
            Favorite tab panel
        </IgbTab>
    </IgbTabs>
</div>

@code {

    public IgbIcon ChildIcon { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.ChildIcon != null)
        {
            await this.ChildIcon.EnsureReady();

            string homeIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0z' fill='none'/><path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/></svg>";
            string searchIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>";
            string favoriteIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>";

            await this.ChildIcon.RegisterIconFromTextAsync("home", homeIcon, "material");
            await this.ChildIcon.RegisterIconFromTextAsync("search", searchIcon, "material");
            await this.ChildIcon.RegisterIconFromTextAsync("favorite", favoriteIcon, "material");
        }
    }
}
```

## How to use Tabs with Ignite UI for Blazor

Before using the [`IgbTabs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTabs.html), you need to import it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTabsModule));
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

Simple [`IgbTabs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTabs.html) declaration is done as follows:

```razor
<IgbTabs>
    <IgbTab Panel="first">Tab 1</IgbTab>
    <IgbTab Panel="second">Tab 2</IgbTab>
    <IgbTab Panel="third">Tab 3</IgbTab>
    <IgbTabPanel Id="first">Panel 1</IgbTabPanel>
    <IgbTabPanel Id="second">Panel 2</IgbTabPanel>
    <IgbTabPanel Id="third">Panel 3</IgbTabPanel>
</IgbTabs>
```

### Selection

The [`IgbTabs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTabs.html) emits `Change` event when the user selects an item either by key press or click. The [`Select`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTabs.html#IgniteUI_Blazor_Controls_IgbTabs_Select) method allows you to select a tab by specifying the [`IgbTab`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTab.html) or its id.

If the selected tab is not specified on initial load, the first tab that is not disabled will be selected.

The default behavior, which selects a tab when the user is navigating with the arrow keys, could be modified by the [`Activation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTabs.html#IgniteUI_Blazor_Controls_IgbTabs_Activation) property. Setting it to `Manual` will focus the next/previous tab on arrow key press, but the tab will be selected only after pressing <kbd>SPACE</kbd> or <kbd>ENTER</kbd>

### Disabled Tab

A tab is disabled by setting the [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTab.html#IgniteUI_Blazor_Controls_IgbTab_Disabled) attribute:

```razor
<IgbTab Panel="first" Disabled>Tab 1</IgbTab>
```

### Alignment

The [`Alignment`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTabs.html#IgniteUI_Blazor_Controls_IgbTabs_Alignment) property controls how Blazor tabs are positioned. It accepts the following values:

- `Start` (default): the width of the tab depends on the content (label, icon, both) and all tabs have equal padding. First tab is aligned to the tabs container's left side.
- `Center`: the width of the tab depends on the content and occupies the tabs container's center.
- `End`: the width of the tab depends on the content and all tabs have equal padding. Last tab is aligned to the tabs container's right side.
- `Justify`: all tabs are equal in width and fully fit the tabs container.

If the space is not enough to fit all tabs, scroll buttons are displayed.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">

    <IgbRadioGroup Alignment=@ContentOrientation.Horizontal>
        <IgbRadio name="alignment" Value="Start" label-position="after" Checked=true Change="OnRadioOptionClick">Start</IgbRadio>
        <IgbRadio name="alignment" Value="Center" label-position="after" Change="OnRadioOptionClick">Center</IgbRadio>
        <IgbRadio name="alignment" Value="End" label-position="after" Change="OnRadioOptionClick">End</IgbRadio>
        <IgbRadio name="alignment" Value="Justify" label-position="after" Change="OnRadioOptionClick">Justify</IgbRadio>
    </IgbRadioGroup>

    <IgbTabs Alignment=@TabAlignment>
        <IgbTab Label="Basics">
            Basics tab content
        </IgbTab>
        <IgbTab Label="Details">
            Details tab content
        </IgbTab>
        <IgbTab Label="Custom">
            Custom tab content
        </IgbTab>
        <IgbTab Disabled="true" Label="Disabled">
            Disabled tab content will not be displayed
        </IgbTab>
    </IgbTabs>
</div>

@code {

    public TabsAlignment TabAlignment { get; set; }

    protected override void OnInitialized()
    {
        TabAlignment = TabsAlignment.Start;
    }

    public void OnRadioOptionClick(IgbRadioChangeEventArgs e)
    {
        IgbRadio radio = e.Parent as IgbRadio;

        switch (radio.Value)
        {
            case "Start":
                {
                    this.TabAlignment = TabsAlignment.Start;
                    break;
                }
            case "Center":
                {
                    this.TabAlignment = TabsAlignment.Center;
                    break;
                }
            case "End":
                {
                    this.TabAlignment = TabsAlignment.End;
                    break;
                }
            case "Justify":
                {
                    this.TabAlignment = TabsAlignment.Justify;
                    break;
                }
        }
    }
}
```

### Scrolling

Scroll buttons are shown when the available space is not enough to render all Blazor tabs. The start scroll button is disabled if the first tab is in view. Respectively, when last tab is in view the end scroll button is disabled. By pressing one of the scroll buttons the tabs are scrolled so the tab in that direction is fully visible, or if it is already visible the previous/next tab in that direction is displayed.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbTabs>
        @for(int i=1; i<=20; i++)
        {
            string tabName = "Tab " + i.ToString();
            string tabContent = "Tab Content " + i.ToString();

            <IgbTab Label=@tabName>@tabContent</IgbTab>
        }
    </IgbTabs>
</div>

@code {

}
```

### Keyboard Navigation

|Keys|Description|
|----|-----------|
| <kbd>←</kbd> | Selects previous (next in Right-to-Left mode) tab. If [`Activation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTabs.html#IgniteUI_Blazor_Controls_IgbTabs_Activation) is set to `Manual` only focuses the tab. Scrolls to end if on first tab. |
| <kbd>→</kbd> | Selects next (previous in Right-to-Left mode) tab. If [`Activation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTabs.html#IgniteUI_Blazor_Controls_IgbTabs_Activation) is set to `Manual` only focuses the tab. Scrolls to start if on last tab. |
| <kbd>HOME</kbd> | Selects the first tab. |
| <kbd>END</kbd> | Selects the last tab. |
| <kbd>ENTER</kbd> / <kbd>SPACE</kbd> | Selects the focused tab when [`Activation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTabs.html#IgniteUI_Blazor_Controls_IgbTabs_Activation) is `Manual` |

### Prefix / Suffix

Each tab has default slot to display information - icon, text or both and `prefix` and `suffix` slots to show additional content in the beginning and/or in the end.

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <IgbTabs>
        <IgbTab>
            <IgbIcon slot="prefix" @ref=ChildIcon IconName="home" Collection="material"/>
            <span slot="label">Home</span>
            <IgbIconButton slot="suffix" IconName="close" Collection="material" class="size-small" Variant=@IconButtonVariant.Flat/>
            <span>Home tab content</span>
        </IgbTab>
        <IgbTab>
            <IgbIcon slot="prefix" IconName="search" Collection="material"/>
            <span slot="label">Search</span>
            <IgbIconButton slot="suffix" IconName="close" Collection="material" class="size-small" Variant=@IconButtonVariant.Flat/>
            <span>Search tab content</span>
        </IgbTab>
        <IgbTab>
            <IgbIcon slot="prefix" IconName="favorite" Collection="material"/>
            <span slot="label">Favorite</span>
            <IgbIconButton slot="suffix" IconName="close" Collection="material" class="size-small" Variant=@IconButtonVariant.Flat/>
            <span>Favorite tab content</span>
        </IgbTab>
    </IgbTabs>
</div>

@code {

    public IgbIcon ChildIcon { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.ChildIcon != null)
        {
            await this.ChildIcon.EnsureReady();

            string homeIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0z' fill='none'/><path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/></svg>";
            string searchIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>";
            string favoriteIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>";
            string closeIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0z' fill='none'/><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>";

            await this.ChildIcon.RegisterIconFromTextAsync("home", homeIcon, "material");
            await this.ChildIcon.RegisterIconFromTextAsync("search", searchIcon, "material");
            await this.ChildIcon.RegisterIconFromTextAsync("favorite", favoriteIcon, "material");
            await this.ChildIcon.RegisterIconFromTextAsync("close", closeIcon, "material");

        }
    }
}
```

## Styling

The [`IgbTabs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTabs.html) component exposes several CSS parts, giving you full control over its style:

| Name | Description |
|--|--|
| `headers` | The wrapper which includes the tabs and the scroll buttons. |
| `headers-content` | The container for the tabs which represents the available space for rendering of the tabs. |
| `headers-wrapper` | The wrapper for the tabs and the selected indicator. |
| `headers-scroll` | The container for the tabs. |
| `selected-indicator` | The selected indicator. |
| `start-scroll-button` | The start scroll button displayed when the tabs overflow. |
| `end-scroll-button` | The end scroll button displayed when the tabs overflow. |
| `content` | The container for the content where the data is displayed. |

The [`IgbTab`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTab.html) component exposes the following CSS parts:

|Name|Description|
|--|--|
| `content` | Tab header's label slot container. |
| `prefix` | Tab header's label prefix. |
| `suffix` | Tab header's label suffix. |
| `tab-header` | The header of a single tab. |
| `tab-body` | Holds the body content of a single tab, only the body of the selected tab is visible. |

```css
igc-tab::part(tab-header),
igc-tabs::part(inner)::after {
    --item-background: var(--ig-surface-600);
    --border-color: var(--ig-success-300);
}

igc-tab::part(tab-body),
igc-tab[selected] igc-icon {
    --item-active-icon-color: var(--ig-success-300);
}

igc-tab:not([selected]) igc-icon {
    --item-icon-color: var(--ig-gray-500);
}

igc-tabs::part(start-scroll-button),
igc-tabs::part(end-scroll-button) {
    --background: var(--ig-surface-600);
    --hover-background: var(--ig-surface-700);
    --active-background: var(--ig-surface-700);
    --disabled-background: var(--ig-gray-100);
    --button-color: var(--ig-gray-700);
    --button-hover-color: var(--ig-gray-800);
    --button-disabled-color: var(--ig-gray-300);
    --border-color: var(--ig-surface-600);
}

igc-tab::part(tab-header) {
    --item-hover-color: var(--ig-success-500);
}

igc-tab::part(tab-header)::before {
    --border-color--hover: var(--ig-gray-500);
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbTabs>
        <IgbTab>
            <IgbIcon slot="label" @ref=ChildIcon IconName="home" Collection="material"/>
            Home tab panel
        </IgbTab>
        <IgbTab>
            <IgbIcon slot="label" IconName="search" Collection="material"/>
            Search tab panel
        </IgbTab>
        <IgbTab>
            <IgbIcon slot="label" IconName="favorite" Collection="material"/>
            Favorite tab panel
        </IgbTab>
    </IgbTabs>
</div>

@code {

    public IgbIcon ChildIcon { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.ChildIcon != null)
        {
            await this.ChildIcon.EnsureReady();

            string homeIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0z' fill='none'/><path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/></svg>";
            string searchIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>";
            string favoriteIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>";

            await this.ChildIcon.RegisterIconFromTextAsync("home", homeIcon, "material");
            await this.ChildIcon.RegisterIconFromTextAsync("search", searchIcon, "material");
            await this.ChildIcon.RegisterIconFromTextAsync("favorite", favoriteIcon, "material");
        }
    }
}
```

## API Reference

- [`IgbTabs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTabs.html)
- [`IgbTab`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTab.html)
- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`IgbIconButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIconButton.html)
- [`IgbRadioGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadioGroup.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
