---
title: Blazor Ripple
_description: With Ignite UI for Blazor Ripple, developers can define an area which received a ripple animation effect for a visually enticing UI enhancement.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Ripple components, Blazor Ripple controls
_license: MIT
mentionedTypes: ["Ripple", "Button"]
_tocName: Ripple
---

# Blazor Ripple Overview

The Ignite UI for Blazor Ripple component creates an animation in response to a touch or a mouse click.

## Blazor Ripple Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbButton Variant="ButtonVariant.Contained">
        Ripple Button
        <IgbRipple></IgbRipple>
    </IgbButton>
</div>

@code {

}
```


## Usage

<!-- Blazor -->

Before using the [`IgbRipple`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRipple.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbRippleModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbRipple`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRipple.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

```razor
<IgbButton Variant="@ButtonVariant.Contained">
    Ripple Button
    <IgbRipple></IgbRipple>
</IgbButton>
```

You can add the [`IgbRipple`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRipple.html) component to any web element as long as its CSS `position` property is set to any other value than `static`;

## Examples

### Color

You can change the color of the ripple by setting the `--color` CSS property to any valid CSS color:

```css
igc-ripple {
  --color: olive;
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <style>
        igc-ripple {
            --color: olive;
        }
    </style>
    <div>
        <IgbButton>
            Ripple Color
            <IgbRipple></IgbRipple>
        </IgbButton>
    </div>
</div>

@code {

}
```


## API References

- [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html)
- [`IgbRipple`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRipple.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
