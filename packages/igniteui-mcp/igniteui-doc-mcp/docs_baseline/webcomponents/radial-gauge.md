---
title: "Web Components Radial Gauge Chart | Data Visualization Tools | Infragistics"
description: Use Infragistics' Web Components radial gauge control to create engaging data visualizations and dashboards and show off KPIs with rich style and interactivity. Learn about the Ignite UI for Web Components radial gauge configurable elements!
keywords: Radial Gauge, Ignite UI for Web Components, Infragistics, animation, labels, needle, scales, ranges, tick marks
license: commercial
mentionedTypes: ["RadialGauge", "RadialGaugeRange"]
namespace: Infragistics.Controls.Gauges
llms:
  description: "The Web Components radial gauge component provides a number of visual elements, like a needle, tick marks, ranges, and labels, in order to create a predefined shape and scale."
platformType: xplat
_tocName: Radial Gauge
_premium: true
---
# Web Components Radial Gauge Overview

The Web Components radial gauge component provides a number of visual elements, like a needle, tick marks, ranges, and labels, in order to create a predefined shape and scale. The `IgcRadialGaugeComponent` also has built-in support for animated transitions. This animation is easily customizable by setting the `transitionDuration` property.

## Web Components Radial Gauge Example

The following sample demonstrates how setting multiple properties on the same `IgcRadialGaugeComponent` can transform it to completely different radial gauge.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Dependencies

When installing the gauge component, the core package must also be installed.

```cmd
npm install --save igniteui-webcomponents-core
npm install --save igniteui-webcomponents-gauges
```

## Component Modules

The `IgcRadialGaugeComponent` requires the following modules:

```ts
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcRadialGaugeModule } from 'igniteui-webcomponents-gauges';
// ...
ModuleManager.register(
    IgcRadialGaugeModule
);
```

## Usage

The following code demonstrates how create a radial gauge containing a needle and three comparative ranges on the scale.

```html
<igc-radial-gauge
    height="400px"
    width="400px"
    minimum-value="0"
    maximum-value="100"
    value="25"
    interval="5">
    <igc-radial-gauge-range
        start-value="0"
        end-value="30"
        brush="Red">
    </igc-radial-gauge-range>
    <igc-radial-gauge-range
        start-value="30"
        end-value="60"
        brush="Yellow">
    </igc-radial-gauge-range>
    <igc-radial-gauge-range
        start-value="60"
        end-value="100"
        brush="Green">
    </igc-radial-gauge-range>
</igc-radial-gauge>
```

## Backing

The radial gauge component comes with a backing shape drawn behind the scale that acts as a background for the radial gauge.

The backing element represents background and border of the radial gauge component. It is always the first element rendered and all the rest of elements such as needle, labels, and tick marks are overlay on top of it.

The backing can be circular or fitted. A circular shape creates a 360 degree circle gauge while a fitted shape creates a filled arc segment encompassing the `scaleStartAngle` and `scaleEndAngle` properties. This can be set by setting the `backingShape` property.

```html
<igc-radial-gauge
    height="300px"
    width="300px"
    minimum-value="0"
    maximum-value="80"
    value="50"
    interval="10"
    backing-shape="Fitted"
    backing-brush="rgba(252, 252, 252, 1)"
    backing-outline="DodgerBlue"
    backing-oversweep="5"
    backing-corner-radius="10"
    backing-stroke-thickness="5"
    backing-outer-extent="0.8"
    backing-inner-extent="0.15"
    scale-start-angle="135"
    scale-end-angle="45">
</igc-radial-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Scale

The scale is visual element that highlights full range of values in the gauge which can be created by supplying `minimumValue` and `maximumValue` values. Together with backing, it defines overall shape of gauge. The `scaleStartAngle` and `scaleEndAngle` properties define bounds of arc of the scale. While, the `scaleSweepDirection` property specifies whether the scale sweeps in clockwise or counter-clockwise direction. You can customize appearance of the scale by setting `scaleBrush`, `scaleStartExtent`, and `scaleEndExtent` properties.

```html
<igc-radial-gauge
    height="300px"
    width="300px"
    minimum-value="0"
    maximum-value="80"
    value="50"
    interval="10"
    scale-start-angle="135"
    scale-end-angle="45"
    scale-brush="DodgerBlue"
    scale-sweep-direction="Clockwise"
    scale-oversweep="1"
    scale-oversweep-shape="Fitted"
    scale-start-extent="0.45"
    scale-end-extent="0.575">
</igc-radial-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Labels and Titles

The radial gauge labels are visual elements displaying numeric values at a specified interval between values of the `minimumValue` and `maximumValue` properties. You can position labels by setting the `labelExtent` property to a fraction, where 0 represents center of gauge and 1 represents outer extent of the gauge backing. Also, you can customize labels setting various styling properties such as `fontBrush` and `IgcRadialGaugeComponent.font`.

Each of these labels for the needle have various styling attributes you can apply to change the font, angle, brush and distance from the center of the gauge such as `titleExtent`, `titleAngle`, `subtitleTextStyle`, `highlightLabelBrush`.

```html
<igc-radial-gauge
    height="300px"
    width="300px"
    minimum-value="0"
    maximum-value="80"
    value="50"
    interval="10"
    label-interval="10"
    label-extent="0.65"
    font="11px Verdana"
    font-brush="DodgerBlue">
</igc-radial-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Title & Subtitle

`titleText` and `subtitleText` properties are available and can both be used to display custom text for the needle. Alternatively, `titleDisplaysValue` and `subtitleDisplaysValue`, when set to true, will let display the needle's value and override `titleText` and `subtitleText`. So you can occupy custom text for the title but show the value via the subtitle and vice versa.

If the highlight needle is shown, as explained below, then custom text can be shown via  `highlightLabelText`, otherwise `highlightLabelDisplaysValue` can be enabled and display it's value.

```html
<igc-radial-gauge
    title-text="Global Sales"
    subtitle-text="2024">
</igc-radial-gauge>
```

## Optical Scaling

The radial gauge's labels and titles can change it's scaling. To enable this, first set `opticalScalingEnabled` to true. Then you can set `opticalScalingSize` which manages the size at which labels have 100% optical scaling. Labels will have larger fonts when gauge's size is larger. For example, labels will have a 200% larger font size when this property is set to 500 and the gauge px size is doubled to eg. 1000.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Tick Marks

Tick marks are thin lines radiating from the center of the radial gauge. There are two types of tick marks: major and minor. Major tick marks are displayed at the `IgcRadialGaugeComponent.interval` between the `minimumValue` and `maximumValue` properties. Use the `minorTickCount` property to specify the number of minor tick marks displayed between each major tick mark. You can control the length of tick marks by setting a fraction (between 0 and 1) to `tickStartExtent`, `tickEndExtent`, `minorTickStartExtent`, and `minorTickEndExtent` properties.

```html
<igc-radial-gauge
    height="300px"
    width="300px"
    minimum-value="0"
    maximum-value="80"
    value="50"
    interval="10"
    tick-start-extent="0.45"
    tick-end-extent="0.575"
    tick-stroke-thickness="2"
    tick-brush="DodgerBlue"
    minor-tick-count="4"
    minor-tick-start-extent="0.575"
    minor-tick-end-extent="0.5"
    minor-tick-stroke-thickness="1"
    minor-tick-brush="DarkViolet">
</igc-radial-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Ranges

A range highlights a set of continuous values bound by a specified `minimumValue` and `maximumValue` properties. You can add multiple ranges to the radial gauge by specifying their starting and ending values. Each range has a few customization properties such as `IgcRadialGaugeRangeComponent.brush` and `IgcRadialGaugeRangeComponent.outline`. Alternatively, you can set `rangeBrushes` and `rangeOutlines` properties to a list of colors for the ranges.

```html
<igc-radial-gauge
    height="300px"
    width="300px"
    minimum-value="0"
    maximum-value="80"
    value="50"
    interval="10"
    range-brushes="Red Yellow Green"
    range-outlines="Red Yellow Green">
    <igc-radial-gauge-range
        start-value="5"
        end-value="15"
        brush="Red">
    </igc-radial-gauge-range>
    <igc-radial-gauge-range
        start-value="15"
        end-value="35"
        brush="Yellow">
    </igc-radial-gauge-range>
    <igc-radial-gauge-range
        start-value="35"
        end-value="45"
        brush="Green">
    </igc-radial-gauge-range>
</igc-radial-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Needle

Radial gauge needles are visual elements used to signify a gauge set value. Needles are available in one of the several predefined shapes. The needle can have a pivot shape, which is placed in the center of the gauge. The pivot shape also takes one of the predefined shapes. Pivot shapes that include an overlay or an underlay can have a separate pivot brush applied to the shape.

The supported needle shapes and caps are set using the `needleShape` and `needlePivotShape` properties.

You can enable an interactive mode of the gauge (using `isNeedleDraggingEnabled` property) and the end-user will be able to change value by dragging the needle between values of `minimumValue` and `maximumValue` properties.

```html
<igc-radial-gauge
    height="300px"
    width="300px"
    minimum-value="0"
    maximum-value="80"
    value="50"
    interval="10"
    is-needle-dragging-enabled="true"
    is-needle-dragging-constrained="true"
    needle-shape="NeedleWithBulb"
    needle-brush="DodgerBlue"
    needle-outline="DodgerBlue"
    needle-end-extent="0.475"
    needle-stroke-thickness="1"
    needle-pivot-shape="CircleOverlay"
    needle-pivot-brush="rgba(159, 159, 160, 1)"
    needle-pivot-outline="rgba(159, 159, 160, 1)"
    needle-pivot-width-ratio="0.2"
    needle-pivot-stroke-thickness="1">
</igc-radial-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Highlight Needle

The radial gauge can be modified to show a second needle. This will make the main needle's `IgcRadialGaugeComponent.value` appear with a lower opacity. To enable this first set `highlightValueDisplayMode` to Overlay and then apply a `highlightValue`.

```html
<igc-radial-gauge
    height="100%"
    width="100%"
    minimum-value="0"
    maximum-value="100"
    value="30"
    interval="10"
    label-interval="10"
    label-extent="0.65"
    is-highlight-needle-dragging-enabled="true"
    highlight-value-display-mode="Overlay"
    highlight-value="50"
    highlight-label-displays-value="true"
    highlight-label-snaps-to-needle-pivot="true">
</igc-radial-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the radial gauge with all features and visuals enabled.

```html
<igc-radial-gauge
    height="300px"
    width="300px"
    minimum-value="0"
    maximum-value="80"
    value="50"
    interval="10"
    title-text="Global Sales"
    subtitle-text="2024"
    backing-shape="Fitted"
    backing-brush="rgba(252, 252, 252, 1)"
    backing-outline="DodgerBlue"
    backing-oversweep="5"
    backing-corner-radius="10"
    backing-stroke-thickness="5"
    backing-outer-extent="0.8"
    backing-inner-extent="0.15"
    scale-start-angle="135"
    scale-end-angle="45"
    scale-brush="DodgerBlue"
    scale-sweep-direction="Clockwise"
    scale-oversweep="1"
    scale-oversweep-shape="Fitted"
    scale-start-extent="0.45"
    scale-end-extent="0.575"
    label-interval="10"
    label-extent="0.65"
    font="11px Verdana"
    font-brush="DodgerBlue"
    tick-start-extent="0.45"
    tick-end-extent="0.575"
    tick-stroke-thickness="2"
    tick-brush="DodgerBlue"
    minor-tick-count="4"
    minor-tick-start-extent="0.575"
    minor-tick-end-extent="0.5"
    minor-tick-stroke-thickness="1"
    minor-tick-brush="DarkViolet"
    is-needle-dragging-enabled="true"
    is-needle-dragging-constrained="true"
    needle-shape="NeedleWithBulb"
    needle-brush="DodgerBlue"
    needle-outline="DodgerBlue"
    needle-end-extent="0.475"
    needle-stroke-thickness="1"
    needle-pivot-shape="CircleOverlay"
    needle-pivot-brush="rgba(159, 159, 160, 1)"
    needle-pivot-outline="rgba(159, 159, 160, 1)"
    needle-pivot-width-ratio="0.2"
    needle-pivot-stroke-thickness="1"
    is-highlight-needle-dragging-enabled="true"
    highlight-value-display-mode="Overlay"
    highlight-value="50"
    highlight-label-displays-value="true"
    highlight-label-snaps-to-needle-pivot="true"
    range-brushes="Red Yellow Green"
    range-outlines="Red Yellow Green">
    <igc-radial-gauge-range
        start-value="5"
        end-value="15"
        brush="Red">
    </igc-radial-gauge-range>
    <igc-radial-gauge-range
        start-value="15"
        end-value="35"
        brush="Yellow">
    </igc-radial-gauge-range>
    <igc-radial-gauge-range
        start-value="35"
        end-value="45"
        brush="Green">
    </igc-radial-gauge-range>
</igc-radial-gauge>
```

## API References
`IgcRadialGaugeComponent`
`IgcRadialGaugeRangeComponent`
## Additional Resources

You can find more information about other types of gauges in these topics:

- [Bullet Graph](./bullet-graph.md)
- [Linear Gauge](./linear-gauge.md)
