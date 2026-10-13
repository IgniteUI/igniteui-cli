---
title: "Web Components Slider & Range Slider Components | Ignite UI for Web Components"
description: Learn how to configure a selection in a given range by using the thumb track with Web Components Slider & Range Slider part of Ignite UI for Web Components. Choose between single and range slider.
keywords: "Web Components, UI controls, web widgets, UI widgets, Web Components Slider Components, Infragistics"
mentionedTypes: ["Slider", "SliderLabel", "RangeSlider"]
license: MIT
llms:
  description: "The Web Components Slider & Range Slider components allow selection in a given range by moving the thumb along the track."
_tocName: Slider & Range Slider
---
# Web Components Slider & Range Slider Overview

The Web Components Slider & Range Slider components allow selection in a given range by moving the thumb along the track. The track can be defined as continuous or stepped and you can choose between single and range slider.

## Web Components Slider & Range Slider Example

```css
igc-slider,
igc-range-slider {
    padding: 30px 30px  0px 30px;
    flex-grow: 1;
}

.slider-container {
    display: flex;
    align-items: baseline;
}

.slider-label {
    width: 100px;
    text-align: end;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcSlider`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent) and [`IgcRangeSlider`](mcp:get_api_reference?platform=webcomponents&component=IgcRangeSliderComponent), you need to register them as follows:

```ts
import { defineComponents, IgcSliderComponent, IgcRangeSliderComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcSliderComponent, IgcRangeSliderComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcSlider`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent) and [`IgcRangeSlider`](mcp:get_api_reference?platform=webcomponents&component=IgcRangeSliderComponent) is as follows:

```html
<igc-slider value="40"></igc-slider>
<igc-range-slider lower="20" upper="70"></igc-range-slider>
```

### Value

The main difference between the Slider and Range Slider components is that the Slider component has a single thumb, while the Range Slider component has two thumbs. The single thumb of the Slider component displays its [`Value`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=value) property. The two thumbs of the Range Slider component display its [`Lower`](mcp:get_api_reference?platform=webcomponents&component=IgcRangeSliderComponent&member=lower) and [`Upper`](mcp:get_api_reference?platform=webcomponents&component=IgcRangeSliderComponent&member=upper) value properties.

Both sliders emit two events when any of the values is changed. The [`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent) event is emitted whenever a value is changed using keyboard or drag interaction while the `Change` event is emitted when the value change is committed on drag end or keyboard interaction.

```css
igc-slider,
igc-range-slider {
    padding: 30px 30px  0px 30px;
}

.value-container {
    padding-left: 30px;
    display: flex;
}

.slider-label {
    white-space: pre;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

While dragging a slider thumb, it displays its value in a tooltip. You could hide this tooltip using the [`HideTooltip`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=hideTooltip) property.

### Disabled

You can use the [`Disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=disabled) property of the sliders to disable their user interactions.

```css
igc-slider {
    padding: 30px 30px  0px 30px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Constraints

The track of the sliders has a minimum and maximum values which are configured using the [`Min`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=min) and [`Max`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=max) properties. Additionally, you can restrict the thumb dragging using the [`LowerBound`](mcp:get_api_reference?platform=webcomponents&component=IgcRangeSliderComponent&member=lowerBound) and [`UpperBound`](mcp:get_api_reference?platform=webcomponents&component=IgcRangeSliderComponent&member=upperBound) properties.

```css
igc-slider {
    padding: 30px 30px  0px 30px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Step

The [`Step`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=step) property specifies the granularity of the slider that the value must adhere to. By default, the slider track looks continuous. Setting the [`DiscreteTrack`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=discreteTrack) property of the slider to **true** will make it to display the steps on the track.

```css
igc-slider {
    padding: 30px 30px  0px 30px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

If the [`Step`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=step) property is set to `0`, no stepping is implied and any value in the slider range is allowed. In this case, the slider will look continuous even if [`DiscreteTrack`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=discreteTrack) is set to **true**.

### Tick Marks

The slider components could display tick marks and labels. The slider components support two types of tick marks: primary and secondary. In order to display the primary tick marks, you should set the [`PrimaryTicks`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=primaryTicks) property to a value greater than `1`. The number of primary ticks will be evenly distributed on the track. In order to display the secondary tick marks, you should set the [`SecondaryTicks`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=secondaryTicks) property to a value greater than `0`. The value of [`SecondaryTicks`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=secondaryTicks) specifies the number of secondary ticks between every two primary ticks.

```css
igc-slider {
    padding: 30px 30px  0px 30px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

Additionally, you could configure the orientation of the tick marks using the [`TickOrientation`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=tickOrientation) property. By default, the [`TickOrientation`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=tickOrientation) value is `end` which displays the ticks below the slider track. You could set it to `start` which displays them above the track and `mirror` which mirrors the ticks above and below the track.

By default, the tick marks display labels with their values. You could modify the rotation of the tick labels using the [`SliderTickLabelRotation`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=tickLabelRotation) property. Additionally, you could hide the labels of the primary and secondary ticks using the [`HidePrimaryLabels`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=hidePrimaryLabels) and [`HideSecondaryLabels`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=hideSecondaryLabels) properties.

```css
igc-slider {
    padding: 30px 30px  0px 30px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Value Format

If you want to format the thumb and tick label values, the slider provides [`ValueFormat`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=valueFormat), [`ValueFormatOptions`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=valueFormatOptions) and [`Locale`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=locale) properties. The [`ValueFormatOptions`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=valueFormatOptions) allows you to specify the number of fraction and significant digits, style (decimal, currency, percent, unit), notation and others taking into account the specified [`Locale`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=locale). The [`ValueFormat`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=valueFormat) is a string which may contain the `{0}` identifier which will be replaced by the value with applied format options.

```css
igc-slider {
    padding: 30px 50px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Labels

In some cases you would want to format the values of the slider as string values i.e. map the values **[0, 1, 2]** to **['Low', 'Medium', 'High']**. For this scenario the slider allows you to define [`IgcSliderLabel`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderLabelComponent) elements inside it. The text content of the slider labels is going to be used for thumb and tick labels. Please note that when slider labels are provided, the [`Min`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=min), [`Max`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=max) and [`Step`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=step) properties are automatically calculated so that they do not allow values that do not map to the provided labels. In the case of 'Low', 'Medium' and 'High' labels, [`Min`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=min) is set to `0`, [`Max`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=max) is set to `2` and [`Step`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent&member=step) is set to `1`.

```css
igc-slider {
    padding: 30px 30px  0px 30px;
    width: 300px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Styling

The [`IgcSlider`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `base` | The base wrapper of the slider. |
| `ticks` | The ticks container. |
| `tick-group` | The tick group container. |
| `tick` | The tick element. |
| `tick-label` | The tick label element. |
| `tick-label-inner` | The inner element of the tick label. |
| `thumbs` | The thumbs container. |
| `thumb` | The thumb element. |
| `thumb-label` | The label container of the thumb tooltip. |
| `thumb-label-inner` | The label element of the thumb tooltip. |
| `track` | The track container. |
| `steps` | The track steps element. |
| `inactive` | The inactive element of the track. |
| `fill` | The filled part of the track. |

The following sample demonstrates how to style the track fill and thumb parts:

```css
igc-slider::part(thumb) {
  background: var(--ig-success-500);
}

igc-slider::part(thumb):focus {
  background: var(--ig-success-200);
  box-shadow: 0 0 0 2px var(--ig-success-200);
}

igc-slider::part(fill) {
  display: block;
  background: var(--ig-success-500);
}

igc-range-slider::part(thumb) {
  background: var(--ig-warn-600);
}

igc-range-slider::part(thumb):focus {
  background: var(--ig-warn-400);
  box-shadow: 0 0 0 2px var(--ig-warn-500);
}

igc-range-slider::part(track) {
  display: block;
  background: var(--ig-primary-800);
}

igc-range-slider::part(thumb-label-inner) {
  background: var(--ig-primary-800);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```css
igc-slider {
  padding: 30px 30px 0px 30px;
}

igc-range-slider {
  padding: 30px 30px 0px 30px;
}
```

## API References

[`IgcRangeSlider`](mcp:get_api_reference?platform=webcomponents&component=IgcRangeSliderComponent)<br />
[`IgcSliderLabel`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderLabelComponent)<br />
[`IgcSlider`](mcp:get_api_reference?platform=webcomponents&component=IgcSliderComponent)<br />

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
