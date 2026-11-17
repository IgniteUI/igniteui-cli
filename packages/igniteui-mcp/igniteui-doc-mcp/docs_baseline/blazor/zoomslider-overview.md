---
title: "Blazor ZoomSlider | Data Visualization Tools | Navigation | Zooming | DataChart | Data Binding | Infragistics"
description: Use Infragistics' Blazor zoom slider control to easily display a subset of data with two handles representing minimum and maximum values. Improve your data visualization with Ignite UI for Blazor zoom slider!
keywords: zoom slider, Ignite UI for Blazor, Infragistics, data chart
license: commercial
mentionedTypes: ["ZoomSlider", "DataChart"]
llms:
  description: "The Blazor ZoomSlider control provides zooming functionality to range-enabled controls."
platformType: xplat
_tocName: Zoom Slider
---
# Blazor Zoom Slider Overview

The Blazor ZoomSlider control provides zooming functionality to range-enabled controls. The ZoomSlider features a horizontal scroll bar, a thumbnail of the whole range, and a resizable zoom-range window. The ZoomSlider cannot work as a standalone control and it acts as an enhancement for range-based controls like the DataChart or CategoryChart.

## Blazor Zoom Slider Example

The following sample demonstrates how to use [`IgbZoomSlider`](mcp:get_api_reference?platform=blazor&component=IgbZoomSlider) to navigate content in [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart).



## Usage

| Feature Name        | Description |
| --------------------|----------------------- |
| Scrollbar navigation       | Users can change scale and scroll through ranges of data using the built-in capabilities of the ZoomSlider scrollbar. |
| Panning and zooming       | Users can adjust the display scale by dragging the edges of the thumb pad to either make the current display cover a larger range (zoom out) or a smaller range (zoom in). |
| Multiple user interaction options       | All mouse user interactions are redundantly supported through touch and most of them – through the keyboard. For details, see User Interactions and Usability. |
| Touch support       |  On touch-enabled devices, users can enjoy the full ZoomSlider functionality. All mouse interactions are supported in touch environment. |
| Extensibility       | The ZoomSlider control supports DataChart control out-of the box. |
| Configurable zoom-range window       | The initial zoom-range window width and position, as well as its minimum size, are configurable. |

## Component Modules

Register the Ignite UI for Blazor services:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor();
```

Registering [`IgbZoomSliderModule`](mcp:get_api_reference?platform=blazor&component=IgbZoomSliderModule), the client resource module of the [`IgbZoomSlider`](mcp:get_api_reference?platform=blazor&component=IgbZoomSlider), is **optional**: the component loads its resources when it first renders. Listing it in `builder.Services.AddIgniteUIBlazor(typeof(IgbZoomSliderModule))` can be used to preload resources or to support elements created only on the client (see [Component Modules](general-getting-started.md#component-modules)).

## Code Snippet

The following code demonstrates how to setup the ZoomSlider.

```razor
<IgbZoomSlider
    @ref="zoomSlider"
    AreThumbCalloutsEnabled="true"
    Height="100%"
    Width="100%" />
```

## Additional Resources

You can find more information about charts in [Chart Features](./charts/chart-features.md) topic.

## API References
[`IgbZoomSlider`](mcp:get_api_reference?platform=blazor&component=IgbZoomSlider)
[`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart)
