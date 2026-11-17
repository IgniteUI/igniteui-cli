---
title: "Blazor Ripple"
description: With Ignite UI for Blazor Ripple, developers can define an area which received a ripple animation effect for a visually enticing UI enhancement.
keywords: "Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Ripple components, Blazor Ripple controls"
license: MIT
mentionedTypes: ["Ripple", "Button"]
llms:
  description: "The Ignite UI for Blazor Ripple component creates an animation in response to a touch or a mouse click."
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

Register the Ignite UI for Blazor services:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor();
```

Registering [`IgbRippleModule`](mcp:get_api_reference?platform=blazor&component=IgbRippleModule), the client resource module of the [`IgbRipple`](mcp:get_api_reference?platform=blazor&component=IgbRipple), is **optional**: the component loads its resources when it first renders. Listing it in `builder.Services.AddIgniteUIBlazor(typeof(IgbRippleModule))` can be used to preload resources or to support elements created only on the client (see [Component Modules](../general-getting-started.md#component-modules)).

You will also need to link an additional CSS file to apply the styling to the [`IgbRipple`](mcp:get_api_reference?platform=blazor&component=IgbRipple) component. The following needs to be placed in the app's host page (**wwwroot/index.html** in a standalone Blazor WebAssembly or Blazor Hybrid app, **Pages/_Host.cshtml** in a Blazor Server app, **Components/App.razor** in a Blazor Web App):

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbRipple`](mcp:get_api_reference?platform=blazor&component=IgbRipple) is as follows:

```razor
<IgbButton Variant="@ButtonVariant.Contained">
    Ripple Button
    <IgbRipple></IgbRipple>
</IgbButton>
```

You can add the [`IgbRipple`](mcp:get_api_reference?platform=blazor&component=IgbRipple) component to any web element as long as its CSS `position` property is set to any other value than `static`;

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

[`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton)<br />
[`IgbRipple`](mcp:get_api_reference?platform=blazor&component=IgbRipple)<br />

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
