---
title: Blazor Tooltip | Infragistics
_description: The Ignite UI for Blazor Tooltip component provides us with the ability to easily create a tooltip and attach it into an element.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Tooltip components
_license: MIT
mentionedTypes: ["Tooltip", "PopoverPlacement"]
_tocName: Tooltip
---

# Blazor Tooltip

The Ignite UI for Blazor Tooltip component provides a way to display a tooltip for a specific element. A tooltip is a popup that displays information related to an element, usually when the element receives keyboard focus or when the mouse hovers over it.

## Ignite UI for Blazor Tooltip Example

```razor
@using IgniteUI.Blazor.Controls

<style>
    igc-avatar {
        --ig-size: var(--ig-size-medium);
    }
</style>

<div class="container sample">
    <IgbAvatar id="avatar" Shape="AvatarShape.Circle" Src="https://dl.infragistics.com/x/img/avatars/10.jpg" />
    <IgbTooltip Placement="PopoverPlacement.BottomStart" Anchor="avatar" DisableArrow="true">
        Her name is Madelyn James
    </IgbTooltip>
</div>

@code { }
```

### Getting Started

Before using the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTooltipModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

Now you can start with a basic configuration of the Blazor [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html).

```razor
<IgbTooltip Anchor="hover-button">
  Congrats you have hovered the button!
</IgbTooltip>

<IgbButton id="hover-button">Hover me</IgbButton>
```

## Usage

### Tooltip target

To attach a tooltip to the desired element, use the [`Anchor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Anchor) property of the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) and set it to the ID of the target element.

```razor
<IgbButton id="target-button">Hover me</IgbButton>
<IgbTooltip Anchor="target-button">
  Congrats you have hovered the button!
</IgbTooltip>
```

### Tooltip content

The tooltip content is defined by placing custom content between the opening and closing tags of the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html).

```razor
<IgbTooltip>
  Congrats you have hovered the button!
</IgbTooltip>
```

The [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) content can be more than just simple text. Since the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) is a regular element in the markup, you can enhance its content by adding any elements you need and styling them accordingly.

```razor
@using IgniteUI.Blazor.Controls

<style>
    igc-icon:hover {
        cursor: pointer;
        color: var(--ig-primary-500);
    }

    .map {
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 250px;
        height: 272px;
        background-image: url("https://dl.infragistics.com/x/img/card/media/infragisticsMap.png");
        border: 1px solid var(--ig-gray-300);
    }

    .locationTooltipContent {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo {
        margin-right: 10px;
        width: 45px;
    }

    igc-tooltip::part(base) {
        max-width: 240px;
    }
</style>

<div class="container">
    <div class="map">
        <IgbIcon @ref="iconRef"
                 id="location_icon"
                 slot="actions"
                 Collection="material"
                 IconName="location_on"></IgbIcon>
        <IgbTooltip Anchor="location_icon" class="locationTooltip" Placement="PopoverPlacement.Bottom" DisableArrow="true">
            <div class="locationTooltipContent">
                <IgbAvatar class="logo"
                           Src="https://dl.infragistics.com/x/img/card/avatars/igLogo.png"
                           Shape="AvatarShape.Square"></IgbAvatar>
                <div>
                    <div>Infragistics Inc. HQ</div>
                    <div>2 Commerce Dr, Cranbury, NJ 08512, USA</div>
                </div>
            </div>
        </IgbTooltip>
    </div>
</div>

@code {
    private string location = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#e3e3e3'><path d='M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z'/></svg>";

    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.iconRef != null && firstRender)
        {
            this.iconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.iconRef.RegisterIconFromText("location_on", location, "material");
            }));
        }
    }
}
```

### Show/Hide delay settings

If you want to control the delay before showing and hiding the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html), you can use the [`ShowDelay`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_ShowDelay) and [`HideDelay`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_HideDelay) properties. Both properties accept a number value representing time in milliseconds.

```razor
<IgbTooltip ShowDelay="600" HideDelay="800">
  Her name is Madelyn James.
</IgbTooltip>
```

> [!NOTE]
> It's important to note that the Tooltip API methods — [`Show`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Show), [`Hide`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Hide), and [`Toggle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Toggle) — DO NOT take the [`ShowDelay`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_ShowDelay) and [`HideDelay`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_HideDelay) properties into account. They act immediately when invoked.

### Placement

The [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) can also be positioned relative to its target element with ease. All you need to do is use the [`Placement`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Placement) property along with one of the `PopoverPlacement` options.

If the [`Placement`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Placement) property is not set, the default value is `Bottom`, which places the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) below the target element.

Additionally, you can make the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) "sticky" using the [`Sticky`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Sticky) property, which adds a close button and keeps the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) visible until the user closes it manually - either by clicking the close button or pressing the `Esc` key. This behavior overrides the default hover behavior, preventing the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) from disappearing when the user stops hovering over the target element.

The [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) also includes an optional arrow indicator that can be configured via the [`WithArrow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_WithArrow) property. The arrow visually connects the tooltip to its anchor element and its position automatically adjusts based on the tooltip's [`Placement`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Placement).

```razor
<IgbButton id="target-button">Hover me</IgbButton>
<IgbTooltip Anchor="target-button" Placement="PopoverPlacement.TopStart" Sticky="true" DisableArrow="true">
  Congrats you have hovered the button!
</IgbTooltip>
```

In the following example, you can see a demonstration of all tooltip placement options, arrow positioning behavior, and the [`Sticky`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Sticky) property in action:

```razor
@using IgniteUI.Blazor.Controls

<style>
    #tooltip-position {
        margin: 40px 0 0 120px;
        width: 400px;
        height: 120px;
    }

    igc-button::part(base) {
        height: 100%;
        border-radius: 0.5rem;
    }
</style>

<div class="container">
    <IgbButton id="tooltip-position" Variant="ButtonVariant.Outlined">
        Click to trigger all supported placements
    </IgbButton>

    @foreach (var pos in Positions)
    {
        <IgbTooltip Anchor="tooltip-position"
                    ShowTriggers="click"
                    ShowDelay="0"
                    HideDelay="0"
                    Sticky="true"
                    Placement="@pos.Value">
            <div>
                <strong>@pos.Key</strong>
            </div>
        </IgbTooltip>
    }
</div>

@code {
    private Dictionary<string, PopoverPlacement> Positions = new()
    {
        { "top", PopoverPlacement.Top },
        { "top-start", PopoverPlacement.TopStart },
        { "top-end", PopoverPlacement.TopEnd },
        { "bottom", PopoverPlacement.Bottom },
        { "bottom-start", PopoverPlacement.BottomStart },
        { "bottom-end", PopoverPlacement.BottomEnd },
        { "right", PopoverPlacement.Right },
        { "right-start", PopoverPlacement.RightStart },
        { "right-end", PopoverPlacement.RightEnd },
        { "left", PopoverPlacement.Left },
        { "left-start", PopoverPlacement.LeftStart },
        { "left-end", PopoverPlacement.LeftEnd }
    };
}
```

### Triggers

By default, the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) is triggered only while hovering over the target element. However, you can change this behavior using the [`ShowTriggers`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_ShowTriggers) and [`HideTriggers`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_HideTriggers) properties, which allow you to control when the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) appears and disappears. These properties accept event names as values—such as `click`, `focus`, or `keypress`—letting you trigger the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) in different scenarios.

```razor
@using IgniteUI.Blazor.Controls

<style>
    #triggers-container {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        gap: 0.6rem;

        & igc-card {
            max-width: 320px;
        }

        & igc-card-header {
            min-height: 3rem;
        }

        & igc-card-content {
            display: flex;
            height: 100%;
            flex-direction: column;
            gap: 0.5rem;
            justify-content: space-between;
        }
    }

    h4 {
        font-size: 1.25rem;
    }

    h4, p {
        margin: 0px;
    }
</style>


<div id="triggers-container">
    <IgbCard>
        <IgbCardHeader>
            <h4 slot="title">Default triggers</h4>
        </IgbCardHeader>
        <IgbCardContent>
            <p>
                Hovering over the button below will display the tooltip using
                its default configuration: it appears on 
                <strong>pointer enter</strong> and hides on 
                <strong>pointer leave</strong> or <strong>click</strong>.
            </p>
            <IgbButton Variant="ButtonVariant.Outlined" id="triggers-default">
                Hover over me
            </IgbButton>
            <IgbTooltip Anchor="triggers-default" DisableArrow="true">
                I am show on pointer enter and hidden on pointer leave and/or
                click.
            </IgbTooltip>
        </IgbCardContent>
    </IgbCard>

    <IgbCard>
        <IgbCardHeader>
            <h4 slot="title">Focus based</h4>
        </IgbCardHeader>
        <IgbCardContent>
            <p>
                In this instance, the tooltip is bound to show on its anchor
                <strong>focus</strong> and will hide when its anchor is
                <strong>blurred</strong>.
            </p>
            <p>
                Try to navigate with a Tab key to the anchor to see the effect.
            </p>
            <IgbButton Variant="ButtonVariant.Outlined" id="triggers-focus-blur">
                Focus me
            </IgbButton>
            <IgbTooltip Anchor="triggers-focus-blur"
                        ShowDelay="0"
                        HideDelay="0"
                        ShowTriggers="focus"
                        HideTriggers="blur"
                        DisableArrow="true">
                I am shown on focus and hidden on blur.
            </IgbTooltip>
        </IgbCardContent>
    </IgbCard>

    <IgbCard>
        <IgbCardHeader>
            <h4 slot="title">Same trigger(s) for showing and hiding</h4>
        </IgbCardHeader>
        <IgbCardContent>
            <p>
                The same trigger can be bound to both show and hide the tooltip.
                The button below has its tooltip bound to show/hide on
                <strong>click</strong>.
            </p>
            <IgbButton Variant="ButtonVariant.Outlined" id="triggers-click">
                Click
            </IgbButton>
            <IgbTooltip Anchor="triggers-click"
                        ShowDelay="0"
                        HideDelay="0"
                        ShowTriggers="click"
                        HideTriggers="click"
                        DisableArrow="true">
                I am show on click and will hide on Anchor click.
            </IgbTooltip>
        </IgbCardContent>
    </IgbCard>

    <IgbCard>
        <IgbCardHeader>
            <h4 slot="title">Keyboard interactions</h4>
        </IgbCardHeader>
        <IgbCardContent>
            <p>
                Keyboard interactions are also supported. The button below has
                its tooltip bound to show on a <strong>keypress</strong> and
                hide on a <strong>keypress</strong> or <strong>blur</strong>.
            </p>
            <p>Try it out by focusing the button and pressing a key.</p>
            <IgbButton Variant="ButtonVariant.Outlined" id="triggers-keypress">
                Press a key
            </IgbButton>
            <IgbTooltip Anchor="triggers-keypress"
                        ShowTriggers="keypress"
                        HideTriggers="keypress blur"
                        DisableArrow="true">
                I am shown on a keypress and will hide on a keypress or blur.
            </IgbTooltip>
        </IgbCardContent>
    </IgbCard>

    <IgbCard>
        <IgbCardHeader>
            <h4 slot="title">Custom events</h4>
        </IgbCardHeader>
        <IgbCardContent>
            <p>
                The tooltip supports any DOM event, including custom events. Try
                entering a value in the input below, then &quot;commit&quot; it
                by either <strong>blurring</strong> the input or pressing 
                <strong>Enter</strong>.
            </p>
            <IgbInput id="triggers-custom" Label="Username"></IgbInput>
            <IgbTooltip Anchor="triggers-custom" ShowTriggers="igcChange" DisableArrow="true">
                Value changed!
            </IgbTooltip>
        </IgbCardContent>
    </IgbCard>
</div>

@code { }
```

### Advanced Example

The [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) integrates seamlessly with other components, allowing you to create advanced tooltips that contain components within them.
In the following example, you can see how we create descriptive tooltips by using the [`IgbList`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbList.html), [`IgbAvatar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAvatar.html), [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html), [`IgbBadge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBadge.html), [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html), [`IgbCard`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCard.html) and [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) components.

```razor
@using IgniteUI.Blazor.Controls

<head>
    <link href="_content/IgniteUI.Blazor/themes/light/material.css" rel="stylesheet" />
</head>

<style>
</style>

<div class="container sample">
    <IgbCard class="triggerWrapper">
        <IgbCardHeader>
            <h3 slot="title">Containing list</h3>
        </IgbCardHeader>
        <IgbList class="trigger" id="trigger1">
            <IgbListItem>
                <p slot="start">Credits</p>
                <span slot="end">($2.4T)</span>
            </IgbListItem>
        </IgbList>
    </IgbCard>
    <IgbTooltip class="list"
                Anchor="trigger1"
                Placement="PopoverPlacement.Bottom"
                HideDelay="0"
                ShowDelay="0">
        <IgbList>
            <h6>Credits</h6>
            <IgbListItem>
                <IgbIcon IconName="dollar" Collection="material"></IgbIcon>Amount - 1,678,345
            </IgbListItem>
            <div class="toolsWrapper">
                <IgbListHeader>Tools</IgbListHeader>
                <IgbListItem>
                    <IgbIcon IconName="filter" Collection="material"></IgbIcon>Filter
                </IgbListItem>
                <IgbListItem>
                    <IgbIcon IconName="link" Collection="material"></IgbIcon>Retail Banking
                </IgbListItem>
                <IgbListItem>
                    <IgbIcon IconName="info" Collection="material"></IgbIcon>More Info
                </IgbListItem>
            </div>
        </IgbList>
    </IgbTooltip>
    <IgbCard class="triggerWrapper">
        <IgbCardHeader>
            <h3 slot="title">Containing chart</h3>
        </IgbCardHeader>
        <IgbList class="trigger" id="trigger2">
            <IgbListItem>
                <p slot="start">Individual Income Taxes</p>
                <span slot="end">($2.4T)</span>
            </IgbListItem>
        </IgbList>
    </IgbCard>
    <IgbTooltip class="chart"
                Anchor="trigger2"
                Placement="PopoverPlacement.Bottom"
                HideDelay="0"
                ShowDelay="0">
        <h6>Individual Income Taxes</h6>
        <IgbCategoryChart @ref="chartRef"
                          ChartType="CategoryChartType.SplineArea"
                          DataSource="IncomeTaxesData"
                          IncludedProperties="@(new string[] { "Year", "Revenue" })"
                          YAxisTitle="IFT"
                          YAxisTitleLeftMargin="10"
                          YAxisTitleRightMargin="5"
                          YAxisLabelLeftMargin="0"
                          ToolTipType="ToolTipType.None"
                          IsHorizontalZoomEnabled="false"
                          IsVerticalZoomEnabled="false"></IgbCategoryChart>
        <p class="content">
            In fiscal year (FY) 2024, the largest source of federal revenue was
            Individual Income Taxes (49.3% of total revenue). So far in fiscal
            year 2025, the largest source of federal revenue is Individual
            Income Taxes (50.6% of total revenue).
        </p>
    </IgbTooltip>
    <IgbCard class="triggerWrapper">
        <IgbCardHeader>
            <h3 slot="title">Containing badge</h3>
        </IgbCardHeader>
        <IgbList class="trigger" id="trigger3">
            <IgbListItem>
                <div class="avatarWrapper" slot="start">
                    <IgbAvatar id="avatar"
                               Src="https://dl.infragistics.com/x/img/avatars/10.jpg"
                               Shape="AvatarShape.Circle"></IgbAvatar>
                    <IgbBadge>
                        <IgbIcon @ref="iconRef" IconName="block" Collection="material"></IgbIcon>
                    </IgbBadge>
                </div>
                <p slot="title">Eliza Morales</p>
            </IgbListItem>
        </IgbList>
    </IgbCard>
    <IgbTooltip class="employee"
                Anchor="trigger3"
                Placement="PopoverPlacement.Bottom"
                HideDelay="0"
                ShowDelay="0">
        <div class="avatarWrapper">
            <IgbAvatar id="avatar"
                       Src="https://dl.infragistics.com/x/img/avatars/10.jpg"
                       Shape="AvatarShape.Circle"></IgbAvatar>
            <IgbBadge>
                <IgbIcon IconName="block" Collection="material"></IgbIcon>
            </IgbBadge>
        </div>
        <div class="textWrapper">
            <h6>Eliza Morales</h6>
            <p class="occupation">Software Engineer</p>
            <p class="status">In a meeting</p>
            <p class="availability">Available at 2:00 pm</p>
        </div>
    </IgbTooltip>
    <IgbCard class="triggerWrapper">
        <IgbCardHeader>
            <h3 slot="title">Containing icon</h3>
        </IgbCardHeader>
        <IgbList class="trigger" id="trigger4">
            <IgbListItem>
                <div class="avatarWrapper" slot="start">
                    <IgbAvatar id="avatar"
                               Src="https://dl.infragistics.com/x/img/avatars/5.jpg"
                               Shape="AvatarShape.Circle"></IgbAvatar>
                    <IgbBadge>
                        <IgbIcon IconName="block" Collection="material"></IgbIcon>
                    </IgbBadge>
                </div>
                <p slot="title">Aron Watson</p>
            </IgbListItem>
        </IgbList>
    </IgbCard>
    <IgbTooltip class="multiline"
                Anchor="trigger4"
                Placement="PopoverPlacement.Bottom"
                HideDelay="0"
                ShowDelay="0">
        <IgbIcon IconName="block" Collection="material"></IgbIcon>
        <p>
            Notifications are silenced while I focus. Please reach out only for
            urgent matters.
        </p>
    </IgbTooltip>
    <IgbCard class="triggerWrapper">
        <IgbCardHeader>
            <h3 slot="title">Containing buttons</h3>
        </IgbCardHeader>
        <IgbList class="trigger" id="trigger5">
            <IgbListItem>
                <div class="headingWrapper" slot="start">
                    <IgbIcon slot="start" IconName="btc" Collection="material"></IgbIcon>
                    <h6 slot="title" class="heading">
                        BTC
                    </h6>
                </div>
                <p slot="end" class="secondary">
                    Daily: + $45
                </p>
            </IgbListItem>
        </IgbList>
    </IgbCard>
    <IgbTooltip class="btcBtn"
                Anchor="trigger5"
                Placement="PopoverPlacement.Bottom"
                HideDelay="0"
                ShowDelay="0">
        <IgbCard class="contentWrapper">
            <div class="titleWrapper">
                <h6>BTC</h6>
                <IgbIcon IconName="btc" Collection="material"></IgbIcon>
            </div>
            <div class="exchangeWrapper">
                <p class="detail">Exchange Balance</p>
                <p class="subtitle">USD 356.12.45</p>
            </div>
            <div class="assetsWrapper">
                <p class="detail">Assets Balance</p>
                <p class="subtitle">USD 46.28.79</p>
            </div>
        </IgbCard>
        <div class="footerWrapper">
            <IgbButton Variant="ButtonVariant.Flat">Deposit</IgbButton>
            <IgbButton Variant="ButtonVariant.Flat">Withdraw</IgbButton>
        </div>
    </IgbTooltip>
    <IgbCard class="triggerWrapper">
        <IgbCardHeader>
            <h3 slot="title">Advanced sticky tooltip</h3>
        </IgbCardHeader>
        <IgbList class="trigger" id="trigger6">
            <IgbListItem>
                <div class="headingWrapper" slot="start">
                    <IgbIcon slot="start" IconName="btc" Collection="material"></IgbIcon>
                    <h6 slot="title" class="heading">
                        BTC
                    </h6>
                </div>
                <p slot="end" class="secondary">
                    Daily: + 2,6%
                </p>
            </IgbListItem>
        </IgbList>
    </IgbCard>
    <IgbTooltip class="btc"
                Anchor="trigger6"
                Sticky="true"
                Placement="PopoverPlacement.Bottom"
                HideDelay="0"
                ShowDelay="0">
        <IgbCard class="contentWrapper">
            <div class="titleWrapper">
                <h6>BTC</h6>
                <IgbIcon IconName="btc" Collection="material"></IgbIcon>
            </div>
            <div class="exchangeWrapper">
                <p class="detail">Exchange Balance</p>
                <p class="subtitle">USD 356.12.45</p>
            </div>
            <div class="assetsWrapper">
                <p class="detail">Assets Balance</p>
                <p class="subtitle">USD 46.28.79</p>
            </div>
        </IgbCard>
    </IgbTooltip>
</div>

@code {

    private string dollarIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#999999'><path d='M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z'/></svg>";
    private string filterIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#999999'><path d='M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z'/></svg>";
    private string linkIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#999999'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z'/></svg>";
    private string infoIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#999999'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/></svg>";
    private string blockIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#999999'><path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z'/></svg>";
    private string btcIcon = "<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M12.339 11.5126C12.339 12.9126 9.93898 12.7486 9.17798 12.7476L9.18298 10.2676C9.94498 10.2686 12.34 10.0526 12.339 11.5126ZM11.82 8.01263C11.82 6.68463 9.82001 6.88363 9.18701 6.88363V9.13263C9.81901 9.13263 11.817 9.28463 11.82 8.01163V8.01263ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM12.952 9.406C13.6673 9.0676 14.0651 8.29005 13.921 7.512C13.8 6.177 12.644 5.728 11.189 5.6V3.749H10.062V5.549C9.762 5.549 9.462 5.549 9.162 5.559V3.745H8.036V5.595C7.792 5.6 7.553 5.604 7.319 5.604V5.6H5.765V6.8C5.765 6.8 6.597 6.785 6.584 6.8C6.89841 6.76025 7.18651 6.98023 7.231 7.294L7.223 12.365C7.20855 12.5849 7.01895 12.7517 6.799 12.738C6.813 12.751 5.98 12.738 5.98 12.738L5.754 14.083C6.308 14.083 7.488 14.083 8.025 14.093V15.966H9.15V14.113C9.459 14.12 9.758 14.123 10.05 14.123V15.967H11.177V14.098C13.072 13.992 14.398 13.517 14.565 11.739C14.6866 11.213 14.581 10.6602 14.274 10.2161C13.967 9.77207 13.487 9.47797 12.952 9.406Z' fill='#DF1B74'/></svg>";

    private IgbIcon iconRef;
    private IgbCategoryChart chartRef;
    private IncomeTaxes incomeTaxes = null;

    public IncomeTaxes IncomeTaxesData
    {
        get
        {
            if (this.incomeTaxes == null)
            {
                this.incomeTaxes = new IncomeTaxes();
            }
            return this.incomeTaxes;
        }
    }

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.iconRef != null && firstRender)
        {
            this.iconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.iconRef.RegisterIconFromText("dollar", dollarIcon, "material");
                this.iconRef.RegisterIconFromText("filter", filterIcon, "material");
                this.iconRef.RegisterIconFromText("link", linkIcon, "material");
                this.iconRef.RegisterIconFromText("info", infoIcon, "material");
                this.iconRef.RegisterIconFromText("block", blockIcon, "material");
                this.iconRef.RegisterIconFromText("btc", btcIcon, "material");
            }));
        }

        this.chartRef.MarkerTypes.Add(MarkerType.None);
    }
}
```
```csharp
using System.Collections.Generic;

namespace Infragistics.Samples
{
    public class IncomeTaxesItem
    {
        public string Year { get; set; }
        public double Revenue { get; set; }

        public IncomeTaxesItem(string year, double revenue)
        {
            Year = year;
            Revenue = revenue;
        }
    }

    public class IncomeTaxes : List<IncomeTaxesItem>
    {
        public IncomeTaxes()
        {
            this.AddRange(new List<IncomeTaxesItem>
            {
                new IncomeTaxesItem("2021", 15),
                new IncomeTaxesItem("2022", 30),
                new IncomeTaxesItem("2023", 18),
                // ... 2 more items
        }
    }
}
```

### Additional Properties

Apart from the properties we've already covered, the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) component offers a variety of additional properties that allow you to further configure its behavior, position, and appearance.

|Name|Type|Description|
|--|--|--|
| [`Open`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Open) | boolean | Determines whether the tooltip is visible. |
| [`WithArrow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_WithArrow) | boolean | Determines whether to render an arrow indicator for the tooltip. |
| [`Offset`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Offset) | number | Sets the pixel distance between the tooltip and its [`Anchor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Anchor). |

### Methods

In addition to its configurable properties, the [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) also exposes three methods that you can use:

|Name|Description|
|--|--|
| [`Show`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Show) | Displays the tooltip if it’s not already shown. If a target is provided, it sets the target as a transient [`Anchor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Anchor). |
| [`Hide`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Hide) | Hides the tooltip if it’s not already hidden. |
| [`Toggle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Toggle) |  Toggles the tooltip between the shown and hidden states. |

## Accessibility & ARIA Support

The [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) is built with accessibility in mind and includes the following ARIA attributes:

- `role` - When the tooltip is in its default behavior, `role="tooltip"` is applied. If the [`Sticky`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html#IgniteUI_Blazor_Controls_IgbTooltip_Sticky) property is enabled, the role changes to `status`.
- `inert` - Dynamically toggled based on visibility. When the tooltip is hidden, it becomes inert.
- `aria-atomic` - Set to true, ensuring that the entire tooltip content is announced when it changes.
- `aria-live` - Set to polite, indicating to screen readers that updates should be announced only when the user is idle.

## Styling

The [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html) component exposes two CSS parts that you can use for styling:

|Name|Description|
|--|--|
| `base` | The base wrapper of the tooltip component. |
| `top, right, bottom, left ...` | The area containing the tooltip arrow. The part name matches the value of the tooltip placement property. |

```css
igc-tooltip::part(base) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-tooltip::part(bottom) {
  border-bottom-color: var(--ig-primary-500);
}
```

```razor
@using IgniteUI.Blazor.Controls

<style>
    igc-avatar {
        --ig-size: var(--ig-size-medium);
    }

    igc-tooltip::part(base) {
        background-color: var(--ig-primary-300);
        color: var(--ig-primary-300-contrast);
    }

    igc-tooltip::part(bottom) {
        border-bottom-color: var(--ig-primary-300);
    }
</style>

<div class="container sample">
    <IgbAvatar id="avatar" Shape="AvatarShape.Circle" Src="https://dl.infragistics.com/x/img/avatars/10.jpg" />
    <IgbTooltip Placement="PopoverPlacement.BottomStart" Anchor="avatar">
        Her name is Madelyn James
    </IgbTooltip>
</div>

@code { }
```

<div class="divider--half"></div>

## API References

- [`IgbTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTooltip.html)
- [`IgbAvatar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAvatar.html)
- [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html)
- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`IgbCard`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCard.html)
- [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html)
- [`IgbBadge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBadge.html)
- [`IgbList`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbList.html)
- [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
