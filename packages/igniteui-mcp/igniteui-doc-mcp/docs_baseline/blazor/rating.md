---
title: "Blazor Rating"
description: With Ignite UI for Blazor Rating, allows users to view and provide feedback using unicode symbols, svg, or icons.
keywords: "Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Rating components, Blazor Rating controls"
license: MIT
mentionedTypes: ["Rating"]
llms:
  description: "The Ignite UI for Blazor Rating component allows users to view and provide feedback."
_tocName: Rating
---
# Blazor Rating Overview

The Ignite UI for Blazor Rating component allows users to view and provide feedback.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbRating class="size-large" Label="Rate Experience" Max="5" Step=".5" HoverPreview></IgbRating>
</div>

@code { }
```

Before using the [`IgbRating`](mcp:get_api_reference?platform=blazor&component=IgbRating), you need to register it as follows:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbRatingModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbRating`](mcp:get_api_reference?platform=blazor&component=IgbRating) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbRating`](mcp:get_api_reference?platform=blazor&component=IgbRating) is as follows:

```razor
<IgbRating></IgbRating>
```

This will create a five-star rating component that can be used to input and read data from.

## Using Custom Symbols

The [`IgbRating`](mcp:get_api_reference?platform=blazor&component=IgbRating) component allows you to use custom symbols in place of the default star symbols. If you want to use a different symbol, like SVG, icon or another unicode symbol, you should place [`IgbRatingSymbol`](mcp:get_api_reference?platform=blazor&component=IgbRatingSymbol) components between the opening and closing brackets of the [`IgbRating`](mcp:get_api_reference?platform=blazor&component=IgbRating):

```razor
<IgbRating>
  <IgbRatingSymbol> <span>💙</span> <span slot="empty">💙</span> </IgbRatingSymbol>
  <IgbRatingSymbol> <span>💙</span> <span slot="empty">💙</span> </IgbRatingSymbol>
  <IgbRatingSymbol> <span>💙</span> <span slot="empty">💙</span> </IgbRatingSymbol>
  <IgbRatingSymbol> <span>💙</span> <span slot="empty">💙</span> </IgbRatingSymbol>
  <IgbRatingSymbol> <span>💙</span> <span slot="empty">💙</span> </IgbRatingSymbol>
</IgbRating>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbRating Label="Rate Experience" Value="3" Step=".5" HoverPreview class="size-large">
        <IgbRatingSymbol>
            <IgbIcon @ref="RegisterIconRef" IconName="heart-full" Collection="material"></IgbIcon>
            <IgbIcon @ref="RegisterIconRef" IconName="heart-empty" Collection="material" slot="empty"></IgbIcon>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
            <IgbIcon @ref="RegisterIconRef" IconName="heart-full" Collection="material"></IgbIcon>
            <IgbIcon @ref="RegisterIconRef" IconName="heart-empty" Collection="material" slot="empty"></IgbIcon>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
            <IgbIcon @ref="RegisterIconRef" IconName="heart-full" Collection="material"></IgbIcon>
            <IgbIcon @ref="RegisterIconRef" IconName="heart-empty" Collection="material" slot="empty"></IgbIcon>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
            <IgbIcon @ref="RegisterIconRef" IconName="heart-full" Collection="material"></IgbIcon>
            <IgbIcon @ref="RegisterIconRef" IconName="heart-empty" Collection="material" slot="empty"></IgbIcon>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
            <IgbIcon @ref="RegisterIconRef" IconName="heart-full" Collection="material"></IgbIcon>
            <IgbIcon @ref="RegisterIconRef" IconName="heart-empty" Collection="material" slot="empty"></IgbIcon>
        </IgbRatingSymbol>
    </IgbRating>
</div>

@code { 
    private IgbIcon RegisterIconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.RegisterIconRef != null)
        {
            await this.RegisterIconRef.EnsureReady();
            string fullHeart = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 475.82 442.01' version='1.0'><path d='M129.35 9.35c-66.24 0-120 53.76-120 120 0 134.75 135.93 170.08 228.56 303.3 87.57-132.4 228.56-172.85 228.56-303.3 0-66.24-53.76-120-120-120-48.05 0-89.4 28.37-108.56 69.18-19.16-40.81-60.52-69.18-108.56-69.18z' stroke='#000' stroke-width='18.7' fill='#e60000'/></svg>";
            string emptyHeart = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 475.82 442.01' version='1.0'><path d='M129.35 9.35c-66.24 0-120 53.76-120 120 0 134.75 135.93 170.08 228.56 303.3 87.57-132.4 228.56-172.85 228.56-303.3 0-66.24-53.76-120-120-120-48.05 0-89.4 28.37-108.56 69.18-19.16-40.81-60.52-69.18-108.56-69.18z' stroke='#000' stroke-width='18.7' fill='#fff'/></svg>";
            await this.RegisterIconRef.RegisterIconFromTextAsync("heart-full", fullHeart, "material");
            await this.RegisterIconRef.RegisterIconFromTextAsync("heart-empty", emptyHeart, "material");
        }
    }
}
```

> The number of rating symbols between the opening and closing brackets of the rating component determines the max value.

## Single Selection

The Ignite UI for Blazor Rating component has a single selection mode that allows users to provide different icons/elements for the different rating values. In this case, only one of the icons/elements can be selected and reflect the feedback given by the user.

```razor
<IgbRating>
  <IgbRatingSymbol> <span>😣</span> <span slot="empty">😣</span> </IgbRatingSymbol>
  <IgbRatingSymbol> <span>😣</span> <span slot="empty">😣</span> </IgbRatingSymbol>
  <IgbRatingSymbol> <span>😣</span> <span slot="empty">😣</span> </IgbRatingSymbol>
  <IgbRatingSymbol> <span>😣</span> <span slot="empty">😣</span> </IgbRatingSymbol>
  <IgbRatingSymbol> <span>😣</span> <span slot="empty">😣</span> </IgbRatingSymbol>
</IgbRating>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbRating class="size-large" Label="Rate Experience" Single>
        <IgbRatingSymbol>
          <span>😣</span>
          <span slot="empty">😣</span>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
          <span>😔</span>
          <span slot="empty">😔</span>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
          <span>😐</span>
          <span slot="empty">😐</span>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
          <span>🙂</span>
          <span slot="empty">🙂</span>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
          <span>😆</span>
          <span slot="empty">😆</span>
        </IgbRatingSymbol>
    </IgbRating>
</div>

@code { }
```

> Keep in mind that the `step` attribute doesn't work with single selection mode.

## Empty & Selected

The Ignite UI for Blazor Rating component allows users to use different icons or elements for the 'selected' and 'empty' states of each rating symbol. It is mandatory to provide two icons for each symbol, even if they are the same. One is used for the 'selected' state, which is defined by not specifying any slot, and the other is used for the 'empty' state, which you can define using the `empty` slot. For instance:

```razor
<IgbRatingSymbol>
  <IgbIcon Collection="material" IconName="bandage"></IgbIcon>
  <IgbIcon Collection="material" IconName="bacteria" slot="empty"></IgbIcon>
</IgbRatingSymbol>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbRating class="size-large">
        <IgbRatingSymbol>
            <IgbIcon @ref="RegisterIconRef" IconName="bandage" Collection="material"></IgbIcon>
            <IgbIcon @ref="RegisterIconRef" IconName="bacteria" Collection="material" slot="empty"></IgbIcon>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
            <IgbIcon @ref="RegisterIconRef" IconName="bandage" Collection="material"></IgbIcon>
            <IgbIcon @ref="RegisterIconRef" IconName="bacteria" Collection="material" slot="empty"></IgbIcon>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
            <IgbIcon @ref="RegisterIconRef" IconName="bandage" Collection="material"></IgbIcon>
            <IgbIcon @ref="RegisterIconRef" IconName="bacteria" Collection="material" slot="empty"></IgbIcon>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
            <IgbIcon @ref="RegisterIconRef" IconName="bandage" Collection="material"></IgbIcon>
            <IgbIcon @ref="RegisterIconRef" IconName="bacteria" Collection="material" slot="empty"></IgbIcon>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
            <IgbIcon @ref="RegisterIconRef" IconName="bandage" Collection="material"></IgbIcon>
            <IgbIcon @ref="RegisterIconRef" IconName="bacteria" Collection="material" slot="empty"></IgbIcon>
        </IgbRatingSymbol>
    </IgbRating>
</div>

@code { 
    private IgbIcon RegisterIconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.RegisterIconRef != null)
        {
            await this.RegisterIconRef.EnsureReady();
            string bandage = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='512' height='512'><path d='M3.212 10.03a3 3 0 010-4.242l2.576-2.576a3 3 0 014.242 0l.556.556-6.818 6.818zm17.5.334L10.364 20.707a4 4 0 01-5.657 0l-1.414-1.414a4 4 0 010-5.657L13.636 3.293a4 4 0 015.657 0l1.414 1.414a4 4 0 010 5.657zM14 5a1 1 0 101-1 1 1 0 00-1 1zm-2.5 2.5a1 1 0 101-1 1 1 0 00-1 1zM9 10a1 1 0 101-1 1 1 0 00-1 1zm-4 6a1 1 0 10-1-1 1 1 0 001 1zm1.75 2.25a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zm.75 3.25a1 1 0 10-1-1 1 1 0 001 1zM10 19a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zm1.75 2.25a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zM15 14a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zm1.75 2.25a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zM20 9a1 1 0 10-1 1 1 1 0 001-1zm.232 4.414l-6.818 6.818.556.556a3 3 0 004.242 0l2.576-2.576a3 3 0 000-4.242z'/></svg>";
            string bacteria = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='512' height='512'><path d='M20.867 7.664h-1.3a4.439 4.439 0 00-.467-1.157l.914-.915a1.132 1.132 0 00-1.6-1.6l-.915.914a4.477 4.477 0 00-1.157-.478V3.133a1.133 1.133 0 10-2.265 0v1.294a4.491 4.491 0 00-1.157.478L12 3.991a1.132 1.132 0 00-1.6 1.6l.8.8L9.6 8l-.8-.8a1.133 1.133 0 10-1.6 1.6l.8.8-1.6 1.6-.8-.8A1.132 1.132 0 004 12l.914.914a4.453 4.453 0 00-.477 1.157H3.133a1.133 1.133 0 100 2.265h1.3a4.439 4.439 0 00.477 1.157l-.914.915a1.132 1.132 0 001.6 1.6l.915-.914a4.439 4.439 0 001.157.477v1.3a1.133 1.133 0 102.265 0v-1.3a4.453 4.453 0 001.157-.477l.914.914a1.132 1.132 0 001.6-1.6l-.8-.8 1.6-1.6.8.8a1.133 1.133 0 101.6-1.6l-.8-.8 1.6-1.6.8.8a1.132 1.132 0 101.6-1.6l-.914-.914a4.453 4.453 0 00.477-1.157h1.3a1.133 1.133 0 100-2.265zM15 11a2 2 0 112-2 2 2 0 01-2 2zm-5.5 5a1.5 1.5 0 111.5-1.5A1.5 1.5 0 019.5 16z'/></svg>";
            await this.RegisterIconRef.RegisterIconFromTextAsync("bandage", bandage, "material");
            await this.RegisterIconRef.RegisterIconFromTextAsync("bacteria", bacteria, "material");
        }
    }
}
```

As shown above, the best practice is to use icons for the rating symbols. We recommend using an [`igc-icon`](../layouts/icon.md) component for the 'empty' and 'selected' icons. However, if you prefer to use symbols or emojis instead of icons, we recommend using a `<span>` element for them, like so:

```razor
<IgbRating>
  <IgbRatingSymbol>
    <span>😣</span>
    <span slot="empty">😣</span>
  </IgbRatingSymbol>
  <IgbRatingSymbol>
    <span>😔</span>
    <span slot="empty">😔</span>
  </IgbRatingSymbol>
  ...
</IgbRating>
```

## Configuration

### Single

Turns on the [`Single`](mcp:get_api_reference?platform=blazor&component=IgbRating&member=single) visual mode for the rating. Useful when using symbols that communicate unique values, like feedback emoji faces.

### Value

The [`Value`](mcp:get_api_reference?platform=blazor&component=IgbRating&member=value) attribute sets the current value of the component.

### Label

The [`Label`](mcp:get_api_reference?platform=blazor&component=IgbRating&member=label) attribute allows setting the label value of the rating component.

### Value Format

A format string which sets [aria-valuetext](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext). All instances of it will be replaced with the current value of the control. Important for screen-readers and useful for localization.

### Max Value

The [`Max`](mcp:get_api_reference?platform=blazor&component=IgbRating&member=max) attribute sets the maximum allowed value of the rating component.

### Step

The [`Step`](mcp:get_api_reference?platform=blazor&component=IgbRating&member=step) attribute sets the allowed fraction of steps between two symbols. Useful when splitting the rating symbols in halves.

### Hover Preview

The [`HoverPreview`](mcp:get_api_reference?platform=blazor&component=IgbRating&member=hoverPreview) attribute makes the component show the possible outcome of user selection on hover. It is useful when you want to give instant feedback about what the selected value could be.

### Read-Only

The [`ReadOnly`](mcp:get_api_reference?platform=blazor&component=IgbRating&member=readOnly) attribute allows the users to set the [`IgbRating`](mcp:get_api_reference?platform=blazor&component=IgbRating) in read-only mode. This attribute is useful when you want to use the component for information purposes only.

### Disabled

The [`Disabled`](mcp:get_api_reference?platform=blazor&component=IgbRating&member=disabled) attribute disables the component, making it impossible to select a value using the mouse or keyboard.

## Methods

### Step Up

The [`StepUp`](mcp:get_api_reference?platform=blazor&component=IgbRating&member=stepUp) method increments the value of the component by `n` steps. Determined by the `step` factor.

### Step Down

The [`StepDown`](mcp:get_api_reference?platform=blazor&component=IgbRating&member=stepDown) method decrements the value of the component by `n` steps. Determined by the `step` factor.

## Events

The [`IgbRating`](mcp:get_api_reference?platform=blazor&component=IgbRating) component emits two separate events - `Hover` and `Change`.

### Hover Event

The `Hover` event is fired when hovering over a symbol. It provides the value of the symbol under the mouse cursor. Useful for creating custom value labels and readouts.

### Change Event

The `Change` event is fired when the selected value changes.

## Styling

The [`IgbRating`](mcp:get_api_reference?platform=blazor&component=IgbRating) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `base` | The main wrapper which holds all of the rating elements. |
| `label` | The label part. |
| `value-label` | The value label part. |
| `symbols` | A wrapper for all rating symbols. |
| `symbol` | The part of the encapsulated default symbol. |
| `full` | The part of the encapsulated full symbols. |
| `empty` | The part of the encapsulated empty symbols. |

```css
igc-rating::part(full) {
  color: var(--ig-primary-500)
}

igc-rating::part(empty) {
  color: var(--ig-secondary-200);
}
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbRating 
        class="size-large"
        Label="Styled rating"
        Value="2.5"
        Step=".5"
        HoverPreview>
    </IgbRating>
</div>

@code { }
```

## API References

[`IgbRating`](mcp:get_api_reference?platform=blazor&component=IgbRating)<br />
[`IgbRatingSymbol`](mcp:get_api_reference?platform=blazor&component=IgbRatingSymbol)<br />

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
