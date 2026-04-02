---
title: Blazor Rating
_description: With Ignite UI for Blazor Rating, allows users to view and provide feedback using unicode symbols, svg, or icons.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Rating components, Blazor Rating controls
_license: MIT
mentionedTypes: ["Rating"]
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


Before using the [`IgbRating`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbRatingModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbRating`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbRating`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html) is as follows:

```razor
<IgbRating></IgbRating>
```

This will create a five-star rating component that can be used to input and read data from.

## Using Custom Symbols

The [`IgbRating`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html) component allows you to use custom symbols in place of the default star symbols. If you want to use a different symbol, like SVG, icon or another unicode symbol, you should place [`IgbRatingSymbol`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRatingSymbol.html) components between the opening and closing brackets of the [`IgbRating`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html):

```razor
<IgbRating>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>💙</div> <div slot="empty">💙</div> </IgbRatingSymbol>
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
            string emptyHeart = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 241.597 220.057' version='1.0'><path style='opacity:.98000004;fill:none;stroke:#000;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0' d='M243.452 1708.979c-26.934.23-51.58 21.476-55.081 48.293-3.114 23.844 7.33 47.4 23.968 64.215 27.515 27.805 61.227 49.794 83.447 82.547 4.39-4.689 9.278-12.066 14.227-17.529 25.23-27.85 58.166-48.013 80.865-78.155 17.175-22.806 19.103-58.113-.538-80.405-18.25-20.712-51.76-25.17-74.37-9.254-8.226 5.791-15.274 13.37-19.932 22.312-10.053-19.32-30.534-32.214-52.586-32.024z' transform='translate(-175.323 -1696.476)'/></svg>";
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
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
  <IgbRatingSymbol> <div>😣</div> <div slot="empty">😣</div> </IgbRatingSymbol>
</IgbRating>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbRating class="size-large" Label="Rate Experience" Single>
        <IgbRatingSymbol>
          <div>😣</div>
          <div slot="empty">😣</div>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
          <div>😔</div>
          <div slot="empty">😔</div>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
          <div>😐</div>
          <div slot="empty">😐</div>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
          <div>🙂</div>
          <div slot="empty">🙂</div>
        </IgbRatingSymbol>
        <IgbRatingSymbol>
          <div>😆</div>
          <div slot="empty">😆</div>
        </IgbRatingSymbol>
    </IgbRating>
</div>

@code { }
```


> Keep in mind that the `step` attribute doesn't work with single selection mode.

## Empty & Selected

The Ignite UI for Blazor Rating component allows users to use different icons/elements for the empty and the selected state of a single rating value. It is mandatory to provide 2 icons for each slot (empty and full) when declaring a symbol, even if they are the same. For instance:

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


## Configuration

### Single

Turns on the [`Single`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html#IgniteUI_Blazor_Controls_IgbRating_Single) visual mode for the rating. Useful when using symbols that communicate unique values, like feedback emoji faces.

### Value

The [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html#IgniteUI_Blazor_Controls_IgbRating_Value) attribute sets the current value of the component.

### Label

The [`Label`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html#IgniteUI_Blazor_Controls_IgbRating_Label) attribute allows setting the label value of the rating component.

### Value Format

A format string which sets [aria-valuetext](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext). All instances of it will be replaced with the current value of the control. Important for screen-readers and useful for localization.

### Max Value

The [`Max`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html#IgniteUI_Blazor_Controls_IgbRating_Max) attribute sets the maximum allowed value of the rating component.

### Step

The [`Step`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html#IgniteUI_Blazor_Controls_IgbRating_Step) attribute sets the allowed fraction of steps between two symbols. Useful when splitting the rating symbols in halves.

### Hover Preview

The [`HoverPreview`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html#IgniteUI_Blazor_Controls_IgbRating_HoverPreview) attribute makes the component show the possible outcome of user selection on hover. It is useful when you want to give instant feedback about what the selected value could be.

### Read-Only

The [`ReadOnly`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html#IgniteUI_Blazor_Controls_IgbRating_ReadOnly) attribute allows the users to set the [`IgbRating`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html) in read-only mode. This attribute is useful when you want to use the component for information purposes only.

### Disabled

The [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html#IgniteUI_Blazor_Controls_IgbRating_Disabled) attribute disables the component, making it impossible to select a value using the mouse or keyboard.

## Methods

### Step Up

The [`StepUp`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html#IgniteUI_Blazor_Controls_IgbRating_StepUp) method increments the value of the component by `n` steps. Determined by the `step` factor.

### Step Down

The [`StepDown`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html#IgniteUI_Blazor_Controls_IgbRating_StepDown) method decrements the value of the component by `n` steps. Determined by the `step` factor.

## Events

The [`IgbRating`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html) component emits two separate events - `Hover` and `Change`.

### Hover Event

The `Hover` event is fired when hovering over a symbol. It provides the value of the symbol under the mouse cursor. Useful for creating custom value labels and readouts.

### Change Event

The `Change` event is fired when the selected value changes.

## Styling

The [`IgbRating`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

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


## API Reference

- [`IgbRating`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRating.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
