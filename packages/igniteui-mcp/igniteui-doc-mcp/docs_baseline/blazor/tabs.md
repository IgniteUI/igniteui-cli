---
title: "Blazor Tabs Component"
description: "The Ignite UI for Blazor Tabs component organizes related content into tabs, shows the content of the selected tab, and adds scroll buttons when the tabs don't fit."
keywords: "Blazor Tabs, Ignite UI for Blazor, tab header, tab panel, scroll buttons"
license: MIT
last_updated: "2026-11-11"
relatedComponents: ["Stepper", "Accordion"]
mentionedTypes: ["Tabs", "Tab"]
llms:
  description: "The Ignite UI for Blazor Tabs component organizes related content at the same level of hierarchy into tabs and shows the content of the selected tab."
platformType: web-only
_tocName: Tabs
---
# Tabs

The Ignite UI for Blazor Tabs component organizes related content at the same level of hierarchy into tabs and shows the content of the selected tab.

Each tab holds its header and its content in one element. The Tabs component supports keyboard navigation, and it shows scroll buttons when the tab headers don't fit.

## Live Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="team-tabs">
        <IgbTabs Alignment="TabsAlignment.Justify">
            @foreach (var team in Teams)
            {
                <IgbTab Label="@team">
                    <IgbList>
                        @foreach (var person in People.Where(p => team == "Everyone" || p.Team == team))
                        {
                            <IgbListItem>
                                <IgbAvatar slot="start" Src="@person.Avatar" Alt="@person.Name" Shape="AvatarShape.Circle" />
                                <span slot="title">@person.Name</span>
                                <span slot="end" class="team-name">@person.Team</span>
                            </IgbListItem>
                        }
                    </IgbList>
                </IgbTab>
            }
        </IgbTabs>
    </div>
</div>

@code {
    private class Person
    {
        public string Name { get; set; }
        public string Team { get; set; }
        public string Avatar { get; set; }
    }

    private List<Person> People { get; set; } = new List<Person>
    {
        new Person { Name = "Emily Carter", Team = "Finance", Avatar = "https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png" },
        new Person { Name = "Jose Diaz", Team = "Engineering", Avatar = "https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png" },
        new Person { Name = "Kira Tanaka", Team = "Finance", Avatar = "https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png" },
        // ... 1 more items
    };

    private List<string> Teams { get; set; } = new List<string> { "Everyone", "Finance", "Engineering" };
}
```

## Anatomy

The Blazor Tabs component consists of a container with tab items, optional scroll buttons, and a content area for the selected tab.

**Tabs anatomy:** The Tabs component shows a row of tab headers above the content area of the selected tab.

<style>{`
  .tabs-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .tabs-anatomy .igd-anatomy__image {
    max-width: 701px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Tabs Container:</strong> groups and aligns all tab items<br />
<strong>2. Header Button (optional):</strong> navigation arrows appear for tabs that aren't visible in the tab container<br />
<strong>3. Label:</strong> text that names the tab and indicates what content it opens<br />
<strong>4. Active Tab Item:</strong> a single selectable tab element that is active<br />
<strong>5. Left Icon (optional):</strong> icon shown before the label to add context to the tab<br />
<strong>6. Top Icon (optional):</strong> icon shown above the label to add context to the tab<br />
<strong>7. Right Icon (optional):</strong> icon shown after the label to add context to the tab<br />
<strong>8. Content Area:</strong> the panel where content for the selected tab is displayed</span>

The `igc-tabs` element renders the header strip and the scroll buttons. Each `igc-tab` renders its own header and content, and the Tabs component places the content of all tabs below the header strip:

```text
igc-tabs[role="tablist"]
└─ #shadow-root
   └─ div[part="tabs"]                                 // the scrollable header strip
      └─ div[part="inner"]
         ├─ igc-icon-button[part="start-scroll-button"] // rendered when the headers overflow
         ├─ slot                                       // the igc-tab elements
         │  └─ igc-tab
         │     └─ #shadow-root
         │        ├─ div[part="tab-header"][role="tab"]
         │        │  └─ div[part="base"]
         │        │     ├─ slot[name="prefix"][part="prefix"]
         │        │     ├─ div[part="content"]
         │        │     │  └─ slot[name="label"]        // falls back to the label property
         │        │     └─ slot[name="suffix"][part="suffix"]
         │        └─ div[part="tab-body"][role="tabpanel"] // visible only for the selected tab
         │           └─ slot                           // the content of the tab
         ├─ igc-icon-button[part="end-scroll-button"]   // rendered when the headers overflow
         └─ div[part="selected-indicator"]
            └─ span                                    // follows the selected tab header
```

## Getting Started

To use the Blazor Tabs, follow the [Ignite UI for Blazor Getting Started](../general-getting-started.md) topic for the basic project setup, then add the component for your target platform.

Register the Ignite UI for Blazor services:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor();
```

Registering [`IgbTabsModule`](mcp:get_api_reference?platform=blazor&component=IgbTabsModule), the client resource module of the [`IgbTabs`](mcp:get_api_reference?platform=blazor&component=IgbTabs), is **optional**: the component loads its resources when it first renders. Listing it in `builder.Services.AddIgniteUIBlazor(typeof(IgbTabsModule))` can be used to preload resources or to support elements created only on the client (see [Component Modules](../general-getting-started.md#component-modules)).

Then link the theme CSS file in the app's host page (**wwwroot/index.html** in a standalone Blazor WebAssembly or Blazor Hybrid app, **Pages/_Host.cshtml** in a Blazor Server app, **Components/App.razor** in a Blazor Web App):

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

After registration, render the [`IgbTabs`](mcp:get_api_reference?platform=blazor&component=IgbTabs) with a [`IgbTab`](mcp:get_api_reference?platform=blazor&component=IgbTab) for each section. The label of a tab becomes its header, and the children of the tab become its content:

```razor
<IgbTabs>
    <IgbTab Label="Overview">
        <p>The overview content.</p>
    </IgbTab>
    <IgbTab Label="Details">
        <p>The details content.</p>
    </IgbTab>
</IgbTabs>
```

When no tab is selected on the first render, the Blazor Tabs component selects the first enabled tab. When you later set `selected` to `false` on the selected tab, no tab is selected.

## Usage

Use the Blazor Tabs to organize different views of the same information or switch between similar or related data sets.

### Type

The Tabs are available in two types - Short, showing only text by default, with the option to have prefix and suffix icons, and Tall, which also has an additional third icon on top of the text.

For a short tab, set the `label` of the tab. For a tall tab, place an Icon and a `<span>` in the `label` slot instead, and the Tabs component shows the icon above the text. The `label` slot takes precedence over the `label` property. Register the icons first, as described in the [Icon](./icon.md) topic:

```razor
<IgbTabs>
    <IgbTab Label="Cart" />
    <IgbTab Label="Shipping" />
</IgbTabs>

<IgbTabs>
    <IgbTab>
        <IgbIcon slot="label" IconName="shopping_basket" Collection="material" />
        <span slot="label">Cart</span>
    </IgbTab>
    <IgbTab>
        <IgbIcon slot="label" IconName="delivery" Collection="material" />
        <span slot="label">Shipping</span>
    </IgbTab>
</IgbTabs>
```

To show content before and after the label, such as an icon or a badge, place it in the `prefix` and `suffix` slots of the tab:

```razor
<IgbTab>
    <IgbIcon slot="prefix" IconName="inbox" Collection="material" />
    <span slot="label">Inbox</span>
    <IgbBadge slot="suffix">12</IgbBadge>
</IgbTab>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="types">
        <span class="type-label">Short Bar</span>
        <IgbTabs Alignment="TabsAlignment.Justify">
            @foreach (var step in Steps)
            {
                <IgbTab Label="@step.Label" />
            }
        </IgbTabs>
        <span class="type-label">Tall Bar</span>
        <IgbTabs Alignment="TabsAlignment.Justify">
            @foreach (var step in Steps)
            {
                <IgbTab>
                    <IgbIcon slot="label" @ref="IconRef" IconName="@step.Icon" Collection="material" />
                    <span slot="label">@step.Label</span>
                </IgbTab>
            }
        </IgbTabs>
    </div>
</div>

@code {
    private const string ShoppingBasketIcon = """<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.21 8.99953L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953H17.21ZM9 8.99953L12 4.59953L15 8.99953H9ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z"/></svg>""";
    private const string DeliveryIcon = """<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12L20 7H15V5H2V15H4.184C4.06556 15.3203 4.00331 15.6586 4 16C4 17.6569 5.34315 19 7 19C8.65685 19 10 17.6569 10 16C9.99669 15.6586 9.93444 15.3203 9.816 15H15.184C15.0655 15.3202 15.0032 15.6586 15 16C15 17.6569 16.3431 19 18 19C19.6569 19 21 17.6569 21 16C20.9968 15.6586 20.9345 15.3202 20.816 15H22V12ZM7 17C6.44772 17 6 16.5523 6 16C6 15.4477 6.44772 15 7 15C7.55228 15 8 15.4477 8 16C8 16.5523 7.55228 17 7 17ZM18 17C17.4477 17 17 16.5523 17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17ZM17 12V9H19L20 12H17Z"/></svg>""";
    private const string CreditCardIcon = """<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z"/></svg>""";

    private class Step
    {
        public string Label { get; set; }
        public string Icon { get; set; }
    }

    private List<Step> Steps { get; set; } = new List<Step>
    {
        new Step { Label = "Cart", Icon = "shopping_basket" },
        new Step { Label = "Shipping", Icon = "delivery" },
        new Step { Label = "Payment", Icon = "credit_card" },
    };

    private IgbIcon IconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.IconRef != null)
        {
            await this.IconRef.EnsureReady();
            await this.IconRef.RegisterIconFromTextAsync("shopping_basket", ShoppingBasketIcon, "material");
            await this.IconRef.RegisterIconFromTextAsync("delivery", DeliveryIcon, "material");
            await this.IconRef.RegisterIconFromTextAsync("credit_card", CreditCardIcon, "material");
        }
    }
}
```

### Responsiveness

The Tabs can be Content Fit to fill up the available horizontal space by adapting their width, or Fixed with scrolling buttons to navigate a large number of tab items. This allows fitting more content than what is normally possible with the other mode in the same total space.

The [`alignment`](mcp:get_api_reference?platform=blazor&component=IgbTabs&member=alignment) property sets how the Blazor Tabs component arranges the tab headers:

- `start` (default): each tab header is as wide as its content, and the headers start at the start edge of the Tabs.
- `center`: each tab header is as wide as its content, and the headers are centered.
- `end`: each tab header is as wide as its content, and the headers end at the end edge of the Tabs.
- `justify`: the tab headers stretch to fill the width of the Tabs. Use it for the Content Fit mode.

```razor
<IgbTabs Alignment="TabsAlignment.Justify">
    <IgbTab Label="Podcasts" />
    <IgbTab Label="Playlists" />
    <IgbTab Label="Genres" />
</IgbTabs>
```

When the tab headers don't fit, the Blazor Tabs component shows a scroll button at each end of the header strip, which is the Fixed mode. A scroll button scrolls the strip to the next tab header that is out of view in its direction, and it's disabled when the strip is scrolled to that end. When the user selects a tab, the Tabs component scrolls its header into view.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="modes">
        <span class="mode-label">Content Fit</span>
        <IgbTabs Alignment="TabsAlignment.Justify">
            @foreach (var category in Categories)
            {
                <IgbTab Label="@category" />
            }
        </IgbTabs>
        <span class="mode-label">Content Fix</span>
        <IgbTabs>
            @foreach (var day in Days)
            {
                <IgbTab Label="@day" />
            }
        </IgbTabs>
    </div>
</div>

@code {
    private List<string> Categories { get; set; } = new List<string> { "Podcasts", "Playlists", "Genres" };

    private List<string> Days { get; set; } = new List<string> { "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" };
}
```

### Amount

For most scenarios, the Tabs need to contain between two and five items. If your use case requires more than five tabs, you should consider the Fixed mode explained above.

You can add and remove tabs at run time. A tab that you add with `selected` set becomes the selected tab, and when you remove the selected tab, the Blazor Tabs component selects the first enabled tab.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="amounts">
        <span class="amount-label">Two Tabs</span>
        <IgbTabs class="two-tabs" Alignment="TabsAlignment.Justify">
            @foreach (var category in Categories.Take(2))
            {
                <IgbTab Label="@category" />
            }
        </IgbTabs>
        <span class="amount-label">Five Tabs</span>
        <IgbTabs class="five-tabs" Alignment="TabsAlignment.Justify">
            @foreach (var category in Categories.Take(5))
            {
                <IgbTab Label="@category" />
            }
        </IgbTabs>
        <span class="amount-label">5+ Tabs</span>
        <IgbTabs>
            @foreach (var category in Categories)
            {
                <IgbTab Label="@category" />
            }
        </IgbTabs>
    </div>
</div>

@code {
    private List<string> Categories { get; set; } = new List<string>
    {
    };
}
```

### States

Tab Items support Active, Inactive, Active & Hover, Inactive & Hover and Disabled states. In Tabs there is always one Active tab and an arbitrary number of Inactive and Disabled ones.

Set `selected` on a tab to make it the active tab, and `disabled` to turn it off. Users can't select a disabled tab, and the keyboard navigation skips it. When you disable the selected tab, the Blazor Tabs component selects the first enabled tab.

```razor
<IgbTabs>
    <IgbTab Label="Overview" />
    <IgbTab Label="Activity" Selected="true" />
    <IgbTab Label="Billing" Disabled="true" />
</IgbTabs>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    @* the tabs are display-only, so inert blocks the keyboard and the pointer from changing the selection *@
    <div class="states" inert>
        <span></span>
        <span class="state-label state-column">Active</span>
        <span class="state-label state-column">Inactive</span>
        <span class="state-label state-column">Disabled</span>
        <span class="state-label">Hover / Off</span>
        <IgbTabs class="state-tabs" Alignment="TabsAlignment.Justify">
            <IgbTab Label="Active" Selected="true" />
            <IgbTab Label="Inactive" />
            <IgbTab Label="Disabled" Disabled="true" />
        </IgbTabs>
        <span class="state-label">Hover / On</span>
        <IgbTabs class="state-tabs" Alignment="TabsAlignment.Justify">
            <IgbTab class="hover" Label="Active" Selected="true" />
            <IgbTab class="hover" Label="Inactive" />
        </IgbTabs>
    </div>
</div>

@code {

}
```

### Selection

The Blazor Tabs component raises `Change` with the newly selected tab when the user selects a tab with a click or a key. To select a tab in code, call [`SelectAsync`](mcp:get_api_reference?platform=blazor&component=IgbTabs&member=SelectAsync) with the `id` or the `Label` of the tab:

```razor
<IgbTabs @ref="Tabs" Change="OnTabChange">
    <IgbTab Label="Overview" />
    <IgbTab Label="Details" />
</IgbTabs>

<button @onclick="ShowDetails">Show details</button>

@code {
    private IgbTabs Tabs { get; set; }

    private async Task ShowDetails()
    {
        await Tabs.SelectAsync("Details");
    }

    private void OnTabChange(IgbTabComponentEventArgs e)
    {
        Console.WriteLine(e.Detail.Label);
    }
}
```

Selecting a tab in code, or setting `selected` on a tab, changes the selection without the change event. The Tabs component ignores disabled tabs and values that match no tab.

### Activation

By default, the Blazor Tabs component selects a tab as soon as the arrow keys, Home, or End move the focus to its header. Set [`activation`](mcp:get_api_reference?platform=blazor&component=IgbTabs&member=activation) to `manual` to move only the focus with these keys, and to select the focused tab with Enter or Space. Use the manual activation when showing the content of a tab is slow, for example when it loads data.

```razor
<IgbTabs Activation="TabsActivation.Manual">
    <IgbTab Label="Overview" />
    <IgbTab Label="Reports" />
</IgbTabs>
```

### Do/Don't

The Tabs are appropriate for organizing information, and one should avoid using them as a way to design workflows and actions that come in a logical sequence, e.g. checkout process or configuration wizard. When using the short Tabs, never combine a text tab with an icon tab in the same bar. Choose one of the two content modes and use it consistently for all the items in the bar.

<Fragment slot="do">

Use tabs to organize related information.

</Fragment>
<Fragment slot="dont">

Avoid tabs for the steps of a sequential workflow, such as a checkout process.

</Fragment>

<Fragment slot="do">

Use the same content mode, text or icons, for all tabs in a bar.

</Fragment>
<Fragment slot="dont">

Avoid combining text tabs and icon tabs in the same bar.

</Fragment>

## Properties

The Blazor Tabs component exposes the following properties. See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`Alignment`](mcp:get_api_reference?platform=blazor&component=IgbTabs&member=Alignment) | `TabsAlignment` | `Start` | How the tab headers are arranged in the header strip. |
| [`Activation`](mcp:get_api_reference?platform=blazor&component=IgbTabs&member=Activation) | `TabsActivation` | `Auto` | Whether moving the focus to a tab header with the keyboard also selects the tab. |
| [`IgbTab.Label`](mcp:get_api_reference?platform=blazor&component=IgbTab&member=Label) | `string` | — | The text of the tab header. The `label` slot takes precedence over it. |
| [`IgbTab.Selected`](mcp:get_api_reference?platform=blazor&component=IgbTab&member=Selected) | `bool` | `false` | Whether the tab is selected. |
| [`IgbTab.Disabled`](mcp:get_api_reference?platform=blazor&component=IgbTab&member=Disabled) | `bool` | `false` | Whether the tab is disabled. |

## Methods

The Blazor Tabs component exposes the following methods. Each method also has a synchronous version without the `Async` suffix.

| Method | Description |
| --- | --- |
| [`SelectAsync`](mcp:get_api_reference?platform=blazor&component=IgbTabs&member=SelectAsync) | Selects the tab whose `id` or `Label` matches the string that you pass, without raising `Change`. Ignores disabled tabs and strings that match no tab. |
| [`GetSelectedAsync`](mcp:get_api_reference?platform=blazor&component=IgbTabs&member=GetSelectedAsync) | Returns the `Label` of the selected tab, or its `id` when the tab has no `Label`. |

## Events

The Blazor Tabs component emits the following events.

| Name | Type | Description |
| --- | --- | --- |
| [`Change`](mcp:get_api_reference?platform=blazor&component=IgbTabs&member=Change) | `EventCallback<IgbTabComponentEventArgs>` | Emitted when the user selects a tab with a click or a key. The event detail holds the selected tab. |

## Styling

The Blazor Tabs component takes its colors from the theme. Change them with the following CSS variables:

| Variable | What it changes |
| --- | --- |
| `--ig-tabs-item-background` | The background of the tab headers. |
| `--ig-tabs-item-text-color` | The text color of the tab headers. |
| `--ig-tabs-item-icon-color` | The icon color of the tab headers. |
| `--ig-tabs-item-hover-background` | The background of a hovered or focused tab header. |
| `--ig-tabs-item-hover-color` | The text color of a hovered or focused tab header. |
| `--ig-tabs-item-active-background` | The background of the selected tab header. |
| `--ig-tabs-item-active-color` | The text color of the selected tab header. |
| `--ig-tabs-item-active-icon-color` | The icon color of the selected tab header. |
| `--ig-tabs-item-disabled-color` | The text color of a disabled tab header. |
| `--ig-tabs-item-disabled-icon-color` | The icon color of a disabled tab header. |
| `--ig-tabs-indicator-color` | The color of the indicator of the selected tab header. |
| `--ig-tabs-button-background` | The background of the scroll buttons. |
| `--ig-tabs-button-color` | The icon color of the scroll buttons. |
| `--ig-tabs-button-hover-background` | The background of a hovered scroll button. |
| `--ig-tabs-button-disabled-color` | The icon color of a disabled scroll button. |

The `igc-tabs` element exposes the following CSS parts:

| Part | What it styles |
| --- | --- |
| `start-scroll-button` | The start scroll button. |
| `end-scroll-button` | The end scroll button. |
| `selected-indicator` | The indicator of the selected tab header. |

The `igc-tab` element exposes the following CSS parts:

| Part | What it styles |
| --- | --- |
| `tab-header` | The header of the tab. |
| `prefix` | The container of the `prefix` slot. |
| `content` | The container of the `label` slot. |
| `suffix` | The container of the `suffix` slot. |
| `tab-body` | The content of the tab, which is visible only for the selected tab. |

### Sass Theming

When you modify a primary property, all related dependent properties are automatically updated to reflect the change. The primary parameters of the `tabs-theme` function are `$item-background`, from which the theme derives the colors of all tab states, and `$item-active-color`, from which it derives the indicator color. Create a theme with the function and include it with the `tokens()` mixin, which emits the matching `--ig-tabs-*` variables in the scope where you include it.

The Sass functions come from the `igniteui-theming` package. See the [Theming](../themes/overview.md) topic for the Sass setup.

```scss
@use "igniteui-theming" as *;

$custom-tabs-theme: tabs-theme(
  $item-background: #292826,
  $item-active-color: #f4d45c
);

:root {
  @include tokens($custom-tabs-theme);
}
```

### CSS Variables

Set the CSS variables on a Tabs component or on a container when you need local styling without a Sass build step:

```css
.profile-tabs {
  --ig-tabs-item-active-color: #e41c77;
  --ig-tabs-indicator-color: #e41c77;
}
```

Use the CSS parts for other styles:

```css
igc-tab::part(tab-header) {
  font-weight: 600;
}

igc-tabs::part(selected-indicator) {
  opacity: 0.8;
}
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div class="profile-card">
        <IgbList class="profile-header">
            <IgbListItem>
                <IgbAvatar slot="start" Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-09.png" Alt="Emily Carter" Shape="AvatarShape.Circle" />
                <span slot="title" class="profile-name">Emily Carter</span>
                <span slot="subtitle" class="profile-role">Finance lead - Sofia</span>
                <IgbChip slot="end" class="profile-status">Active</IgbChip>
            </IgbListItem>
        </IgbList>
        <IgbTabs class="profile-tabs" Alignment="TabsAlignment.Justify">
            @foreach (var profileSection in Sections)
            {
                <IgbTab Label="@profileSection.Label" Disabled="profileSection.Disabled">
                    <IgbList class="profile-details">
                        @foreach (var detail in profileSection.Details)
                        {
                            <IgbListItem>
                                <span slot="title" class="detail-label">@detail.Label</span>
                                <span slot="end" class="detail-value">@detail.Value</span>
                            </IgbListItem>
                        }
                    </IgbList>
                </IgbTab>
            }
        </IgbTabs>
    </div>
</div>

@code {
    private class ProfileDetail
    {
        public string Label { get; set; }
        public string Value { get; set; }
    }

    private class ProfileSection
    {
        public string Label { get; set; }
        public bool Disabled { get; set; }
        public List<ProfileDetail> Details { get; set; }
    }

    private List<ProfileSection> Sections { get; set; } = new List<ProfileSection>
    {
        new ProfileSection
                new ProfileDetail { Label = "Email", Value = "emily.carter@gmail.com" },
                new ProfileDetail { Label = "Team", Value = "Finance, 8 members" },
        // ... 1 more items
            }
        },
        new ProfileSection
        {
            Label = "Activity",
            Details = new List<ProfileDetail>
            {
                new ProfileDetail { Label = "Last login", Value = "Today, 09:24" },
                new ProfileDetail { Label = "Reports", Value = "12 this month" },
                new ProfileDetail { Label = "Approvals", Value = "3 pending" },
            }
        },
        new ProfileSection
        {
            Label = "Billing",
            Disabled = true,
            Details = new List<ProfileDetail>()
            Details = new List<ProfileDetail>()
        }
    };
}
```

### Styling with Tailwind

You can style the Blazor Tabs using our custom Tailwind utility classes. Make sure to [set up Tailwind](../themes/tailwind.md) first.

Set the `--ig-tabs-*` CSS variables with Tailwind arbitrary properties:

```razor
<IgbTabs Class="[--ig-tabs-item-background:#011627] [--ig-tabs-item-active-color:#FF8040] [--ig-tabs-indicator-color:#FF8040]">
    ...
</IgbTabs>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@import url("https://use.typekit.net/bng2zgw.css");

@tailwind utilities;

:root {
    --color-nav-surface: #112031;
    --color-nav-hover: #1a314a;
    --color-nav-active: #006ae6;
    --color-nav-ink: #3392ff;
}
```

## Accessibility

The Blazor Tabs component uses the roles of the WAI-ARIA tabs pattern: users reach the tab headers with the Tab key, move between them with the arrow keys, and select a tab to show its content.

### Keyboard Interaction

The header strip of the Blazor Tabs component is a single tab stop: only the selected tab header is in the tab order, or the first enabled tab header when no tab is selected. The content of the selected tab is the next tab stop. The following keys work while a tab header has the focus:

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves the focus out of the header strip, to the content of the selected tab or to the previous focusable element. The Tabs component doesn't handle these keys. |
| <kbd>Arrow Right</kbd> | Moves the focus to the next enabled tab header, and from the last one to the first. In a right-to-left layout, moves it to the previous one. With the `auto` activation, also selects the tab. |
| <kbd>Arrow Left</kbd> | Moves the focus to the previous enabled tab header, and from the first one to the last. In a right-to-left layout, moves it to the next one. With the `auto` activation, also selects the tab. |
| <kbd>Home</kbd> | Moves the focus to the first enabled tab header. With the `auto` activation, also selects the tab. |
| <kbd>End</kbd> | Moves the focus to the last enabled tab header. With the `auto` activation, also selects the tab. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Selects the focused tab. |

The Blazor Tabs component handles these keys on `keydown`:

- It prevents their default action, so the arrow keys that move the focus, Home, End, and Space don't scroll the page.
- A key that you hold doesn't repeat its action.
- A key that you press together with Shift, Ctrl, Alt, or Meta does nothing.
- The Tabs component scrolls the header that receives the focus into view.

With a pointer, a click on a tab header focuses and selects the tab. A disabled tab ignores clicks. The scroll buttons aren't in the tab order.

### Screen Readers / ARIA

The Blazor Tabs component renders the following roles and attributes:

| Element | Role | Attributes |
| --- | --- | --- |
| `igc-tabs` | `tablist` | `aria-orientation="horizontal"`, set through element internals |
| The `tab-header` part of each tab | `tab` | `aria-selected`, `aria-disabled`, `aria-controls` that points to the content of the tab, `aria-posinset`, and `aria-setsize` |
| The `tab-body` part of each tab | `tabpanel` | `aria-labelledby` that points to the header of the tab |

The Blazor Tabs component also behaves as follows for assistive technology:

- A tab takes its accessible name from its header content: the `label` property or the `label` slot, and the content of the `prefix` and `suffix` slots.
- The content of the tabs that aren't selected is hidden and `inert`, so assistive technology and the keyboard skip it.
- The `aria-posinset` and `aria-setsize` attributes of each tab header give screen readers the position of the tab in the set, such as "2 of 3".
- The Tabs component doesn't use a live region. A changed selection reaches assistive technology through the `aria-selected` state and the focus.

### Accessibility Compliance

Infragistics documents Ignite UI for Blazor accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) | The `tablist`, `tab`, and `tabpanel` roles expose the structure, and each tab panel is labeled by its tab header through `aria-labelledby`. |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color) | In the Material, Fluent, and Indigo themes, the selected tab header shows an indicator line under it, so the selection doesn't depend on color alone. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The arrow keys, Home, and End move between the tab headers, and Enter and Space select the focused tab. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap) | The Tabs component doesn't handle the Tab key, so Tab and Shift + Tab move the focus out of the header strip. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) | The header strip is a single tab stop, followed by the content of the selected tab. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible) | The focused tab header takes the hover colors of the theme, so it stands out from the other tab headers. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | Each tab header exposes the `tab` role, a name from its content, and its selected and disabled states through `aria-selected` and `aria-disabled`. |

Your responsibilities:

- Give every tab a text label that names its content. A tab takes its accessible name from its header content, so a header with an icon only needs a text alternative. See [Type](#type).
- When you override the theme colors, keep a contrast ratio of at least 3:1 between the selected indicator and the background, as [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) requires, and keep the focused tab header distinct from the other headers.
- Don't use the Tabs for the steps of a sequential process. Use a Stepper, which communicates the order of the steps.

## API References

The Blazor Tabs API reference lists the complete API surface for the target platform.

- [`IgbTabs`](mcp:get_api_reference?platform=blazor&component=IgbTabs)
- [`IgbTab`](mcp:get_api_reference?platform=blazor&component=IgbTab)

## Dependencies

The Blazor Tabs component requires a theme to apply its colors and sizes. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

Register the modules of the components that you place in the tabs, such as the `IgbIconModule`, separately.

## Additional Resources

The following resources provide more Blazor Tabs guidance and project support:

- [Tabs - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/tabs)
- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

## Related Components

The Blazor Tabs component shows one section of related content at a time. Use these components when the content needs a different structure:

- [Stepper](./stepper.md) - Use Stepper when users complete a sequence of steps, such as a checkout process.
- [Accordion](./accordion.md) - Use Accordion when users need to expand several sections of a vertical list at the same time.

## FAQ

These questions cover common Blazor Tabs setup, accessibility, and usage scenarios.

  **Q: How do I select a tab in code?**

    Call the `SelectAsync` method of the Blazor Tabs with the `id` or the `Label` of a tab, or set `Selected` on the tab. The Blazor Tabs component doesn't raise `Change` for a selection that you make in code.
  
  **Q: Can I prevent users from switching to another tab?**

    The change event of the Blazor Tabs component isn't cancelable, because the Blazor Tabs component emits it after the selection changes. Set `disabled` on the tabs that users must not open, and enable them when they become available.
  
  **Q: Does the Tabs component keep the content of hidden tabs in the DOM?**

    Yes. The Blazor Tabs component keeps the content of every tab in the DOM, hides the content of the tabs that aren't selected, and makes it `inert`, so users and assistive technology can't reach it until its tab is selected.
  
  **Q: Should I use the Tabs for a checkout or another step-by-step process?**

    No. The Blazor Tabs component organizes related information that users can open in any order, and it doesn't communicate an order of steps. Use the Blazor Stepper for a sequential process, such as a checkout or a configuration wizard.
  

