---
title: Blazor Expansion Panel | Expansion Panel | Infragistics
_description: Expansion Panel component provides an easily configurable expandable component with two states - collapsed and expanded.
_keywords: Blazor Expansion Panel, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["Infragistics.Controls.Layouts.Implementation.ExpansionPanel"]
namespace: Infragistics.Controls
_tocName: Expansion Panel
---

# Blazor Expansion Panel Overview

The Ignite UI for Blazor Expansion Panel is a lightweight accordion component which can be rendered in two states - collapsed or expanded. The expansion panel can be toggled using mouse click, or keyboard interactions.

## Blazor Expansion Panel Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbExpansionPanel>
        <span slot="title">Golden Retriever</span>
        <span slot="subtitle">Medium-large gun dog</span>
        <span>
            The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
            and upland game birds, during hunting and shooting parties. The name "retriever" refers to the breed's ability
            to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
            are easy to train to basic or advanced obedience standards.
        </span>
    </IgbExpansionPanel>
</div>
```

<div class="divider--half"></div>

## Usage

The simplest way to start using the [`IgbExpansionPanel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbExpansionPanel.html) is as follows:

## Binding to events

The Expansion Panel component raises the following events:

The following sample demonstrates how we can add some logic to our component to make it show/hide the `subtitle` depending on the current state of the panel.

```razor
@using IgniteUI.Blazor.Controls


<style>
    span#fired-event {
        background-color: rgba(0,0,0,0.5);
        border-radius: 26px;
        padding: 1rem 1.5rem;
        color: white;
    }
</style>

<div class="container vertical" style="align-items: center;">
    <IgbExpansionPanel style="width: 100%" Opened="OnOpened" Closed="OnClosed">
        <span slot="title">Golden Retriever</span>
        <span slot="subtitle" style="@SubtitleVisibility">Medium-large gun dog</span>
        <span>
            The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
            and upland game birds, during hunting and shooting parties.[3] The name "retriever" refers to the breed's ability
            to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
            are easy to train to basic or advanced obedience standards.
        </span>
    </IgbExpansionPanel>
    <span style="@ToastVisibility" id="fired-event">@ToastText</span>
</div>

@code {
    public string SubtitleVisibility = "display: block;";
    public string ToastVisibility = "display: none;";
    public string ToastText = "Hello";

    private string _visibleStyle = "display: block;";
    private string _invisibleStyle = "display: none;";
    private System.Timers.Timer _timer;

    public void OnOpened(IgbExpansionPanelComponentEventArgs args)
    {
        SubtitleVisibility = _invisibleStyle;
        ToastVisibility = _visibleStyle;
        ToastText = "Opened event fired!";

        if (_timer == null)
        {
            _timer = new System.Timers.Timer(2000);
            _timer.Elapsed += (s, e) =>
            {
                ToastVisibility = _invisibleStyle;
                _timer.Enabled = false;
                StateHasChanged();
            };
        }
        _timer.Start();
    }

    public void OnClosed(IgbExpansionPanelComponentEventArgs args)
    {
        SubtitleVisibility = _visibleStyle;
        ToastVisibility = _visibleStyle;
        ToastText = "Closed event fired!";
        _timer.Start();
    }
}
```

<div class="divider--half"></div>

## Component Customization

The [`IgbExpansionPanel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbExpansionPanel.html) control allows all sorts of content to be added inside of its body. It can render [input](../inputs/input.md), charts and even other expansion panels!

The [`IgbExpansionPanel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbExpansionPanel.html) allows for easy customization of the header through the exposed **title**, **subTitle** and **indicator** slots.

Configuring the position of the expansion indicator can be done through the [`IndicatorPosition`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbExpansionPanel.html#IgniteUI_Blazor_Controls_IgbExpansionPanel_IndicatorPosition) property of the Expansion Panel. The possible options are **start**, **end** or **none**.

The next code sample demonstrates how to configure the component's button to go on the **right**side.

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-expansion-panel {
        max-width: 500px;
        min-width: 300px;
        width: 100%;
        border: 1px solid rgba(171, 171, 171, 0.3);
        padding: 0;
    }

    igc-button {
        display: flex;
        margin-top: 16px;
    }

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        margin-bottom: 8px;
    }
</style>

<div class="container vertical">
    <IgbExpansionPanel IndicatorPosition="ExpansionPanelIndicatorPosition.End" Opened="OnOpened" Closed="OnClosed">
        <span slot="title">Golden Retriever</span>
        <span slot="subtitle">Medium-large gun dog</span>
        <div slot="indicator">@IndicatorText</div>
        <img height="100" src="https://i.ibb.co/6ZdY7cn/Untitled-design-3.png" alt="">
        <span>
            The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
            and upland game birds, during hunting and shooting parties.[3] The name "retriever" refers to the breed's ability
            to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
            are easy to train to basic or advanced obedience standards.
        </span>
        <IgbButton href="https://en.wikipedia.org/wiki/Golden_Retriever" Variant="ButtonVariant.Outlined" Target="ButtonBaseTarget._blank">Read more</IgbButton>
    </IgbExpansionPanel>
</div>

@code {
    public string IndicatorText = "Show more";

    public void OnOpened(IgbExpansionPanelComponentEventArgs args)
    {
        IndicatorText = "Show less";
    }

    public void OnClosed(IgbExpansionPanelComponentEventArgs args)
    {
        IndicatorText = "Show more";
    }
}
```

<div class="divider--half"></div>

## Keyboard Navigation

The Ignite UI for Blazor Expansion Panel keyboard navigation is compliant with W3C accessibility standards and convenient to use.

**Key Combinations**

- <kbd>ALT</kbd> + <kbd>↓</kbd> - expands the focused panel
- <kbd>ALT</kbd> + <kbd>↑</kbd> - collapses the focused panel
- <kbd>SPACE</kbd>/<kbd>ENTER</kbd> - toggle the expansion state of the focused panel

## Styling

The [`IgbExpansionPanel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbExpansionPanel.html) component exposes several CSS parts, giving you full control over its style:

|Name|Description|
|--|--|
| `header` | The container of the expansion indicator, title and subtitle. |
| `title` | The title container. |
| `subtitle` | The subtitle container. |
| `indicator` | The indicator container. |
| `content` | The expansion panel's content wrapper. |

```css
igc-expansion-panel {
  background-color: var(--ig-secondary-900);
  color: var(--ig-secondary-900-contrast);
}

igc-button::part(base) {
  color: var(--ig-secondary-900-contrast);
}

igc-button::part(base)::before {
  background-color: var(--ig-warn-500);
}

igc-expansion-panel::part(indicator) {
  color: var(--ig-warn-500);
}

igc-expansion-panel::part(header) {
  background-color: var(--ig-secondary-900);
}

igc-expansion-panel::part(title),
igc-expansion-panel::part(subtitle) {
  color: var(--ig-warn-500);
}
```

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-expansion-panel {
        width: 500px;
        background-color: #18203b;
        color: white;
        border-radius: 8px;
    }

    igc-button::part(base) {
        color: #18203b;
    }

    igc-button::part(base)::before {
        background-color: #ffd351;
    }

    igc-expansion-panel::part(indicator) {
        color: #ffd351;
    }

    igc-expansion-panel::part(header) {
        background-color: #18203b;
    }

    igc-expansion-panel::part(title),
    igc-expansion-panel::part(subtitle) {
        color: #ffd351;
    }

    igc-button {
        display: flex;
        margin-top: 16px;
    }

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        margin-bottom: 8px;
        border-radius: 8px;
    }
</style>

<div class="container vertical">
    <IgbExpansionPanel IndicatorPosition="ExpansionPanelIndicatorPosition.End">
        <span slot="title">Golden Retriever</span>
        <span slot="subtitle">Medium-large gun dog</span>
        <img height="100" src="https://i.ibb.co/6ZdY7cn/Untitled-design-3.png" alt="">
        <span>
            The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
            and upland game birds, during hunting and shooting parties. The name "retriever" refers to the breed's ability
            to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
            are easy to train to basic or advanced obedience standards.
        </span>
        <IgbButton href="https://en.wikipedia.org/wiki/Golden_Retriever" Variant="ButtonVariant.Contained" Target="ButtonBaseTarget._blank">Read more</IgbButton>
    </IgbExpansionPanel>
</div>
```

<div class="divider"></div>

## API References

- [`IgbExpansionPanel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbExpansionPanel.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
