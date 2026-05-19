---
title: Web Components Linear Gauge | Data Visualization Tools | Infragistics
_description: Use Infragistics' Web Components linear gauge control to visualize data with a simple and concise view. Learn about the Ignite UI for Web Components linear gauge configurable elements!
_keywords: linear gauge, Ignite UI for Web Components, Infragistics, animation, labels, needle, scales, ranges, tick marks
_license: commercial
mentionedTypes: ["XamLinearGauge"]
namespace: Infragistics.Controls.Gauges
_tocName: Linear Gauge
_premium: true
---

# Web Components Linear Gauge Overview

The Ignite UI for Web Components linear gauge component allows for visualizing data in the form of a linear gauge. The [`IgcLinearGaugeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargaugecomponent.html) provides a simple and concise view of a value compared against a scale and one or more ranges. It supports one scale, one set of tick marks and one set of labels. The component has also a built-in support for animated transitions. This animation is easily customizable by setting the [`transitionDuration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargaugecomponent.html#transitionDuration) property. The features of the linear gauge component include configurable orientation and direction, configurable visual elements such as the needle, and more.

## Web Components Linear Gauge Example

The following sample demonstrates how setting multiple properties on the same [`IgcLinearGaugeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargaugecomponent.html) can transform it to completely different linear gauge.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Dependencies

When installing the Web Components gauge component, the core package must also be installed.

```cmd
npm install --save igniteui-webcomponents-core
npm install --save igniteui-webcomponents-gauges
```

## Component Modules

The [`IgcLinearGaugeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargaugecomponent.html) requires the following modules:

```ts
import { IgcLinearGaugeModule } from 'igniteui-webcomponents-gauges';

ModuleManager.register(
    IgcLinearGaugeModule
    );
```

<div class="divider--half"></div>

## Usage

The following code demonstrates how create a linear gauge containing a needle and three comparative ranges on the scale.

```html
<igc-linear-gauge
    height="80px" width="400px"
    minimum-value=5 value=43
    maximum-value=55>
    <igc-linear-graph-range
        start-value=0
        end-value=15
        brush="red">
    </igc-linear-graph-range>
    <igc-linear-graph-range
        start-value=50
        end-value=30
         brush="yellow">
    </igc-linear-graph-range>
     <igc-linear-graph-range
        start-value=30
        end-value=55
        brush="green">
    </igc-linear-graph-range>
</igc-linear-gauge>
```

<div class="divider--half"></div>

## Needle

This is the primary measure displayed by the linear gauge component and is visualized as a bar or you can customize it to show almost any shape as is demonstrated below.

```html
  <igc-linear-gauge
    height="80px" width="400px"
    minimum-value=0
    maximum-value=100
    interval=10
    value=50
    is-needle-dragging-enabled=true
    needle-shape="Custom"
    needle-brush="DodgerBlue"
    needle-out-line="DodgerBlue"
    needle-stroke-thickness=1
    needle-breadth=15
    needle-inner-extent=0.35
    needle-outer-extent=0.65
    needle-outer-point-extent=0.8
    needle-inner-point-extent=0.325
    needle-inner-point-width=0
    needle-outer-point-width=0.3
    needle-inner-base-width=0
    needle-outer-base-width=0.07>
</igc-linear-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Highlight Needle

The linear gauge can be modified to show a second needle. This will make the main needle's [`value`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargaugecomponent.html#value) appear with a lower opacity. To enable this first set [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargaugecomponent.html#highlightValueDisplayMode) to Overlay and then apply a [`highlightValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargaugecomponent.html#highlightValue).

```html
<igc-linear-gauge
    id="gauge"
    height="80px"
    width="100%"
    minimum-value="0"
    maximum-value="100"
    value="75"
    interval="10"
    label-interval="10"
    label-extent="0.025"
    labels-pre-terminal="0"
    labels-post-initial="0"
    needle-brush="blue"
    highlight-value-display-mode="Overlay"
    highlight-value=25
    is-highlight-needle-dragging-enabled=true>
</igc-linear-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Ranges

The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same times the degree to which it resides within that state.

```html
<igc-linear-gauge
    height="80px" width="400px"
    minimum-value=0 value=50
    maximum-value=100 interval=10
    range-brushes="#a4bd29, #F86232"
    range-outlines="#a4bd29, #F86232" >
    <igc-linear-graph-range
        start-value=0 end-value=50
        inner-start-extent=0.075 inner-end-extent=0.075
        outer-start-extent=0.25 outer-end-extent=0.4>
    </igc-linear-graph-range>
    <igc-linear-graph-range
        start-value=50 end-value=100
        inner-start-extent=0.075 inner-end-extent=0.075
        outer-start-extent=0.4 outer-end-extent=0.55>
    </igc-linear-graph-range>
</igc-linear-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Tick Marks

The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the linear gauge.

Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting their corresponding properties.

Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

```html
<igc-linear-gauge
    height="80px" width="400px"
    minimum-value=0 value=50
    maximum-value=100
    interval=10
    tick-brush="DodgerBlue"
    ticks-pre-terminal=0
    ticks-post-initial=0
    tick-stroke-thickness=2
    tick-start-extent=0.25
    tick-end-extent=0.05
    minor-tick-count=4
    minor-tick-brush="DarkViolet"
    minor-tick-end-extent=0.05
    minor-tick-start-extent=0.15
    minor-tick-stroke-thickness=1>
</igc-linear-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Labels

The labels indicate the measures on the scale.

```html
<igc-linear-gauge
    height="80px" width="400px"
    minimum-value=0 value=50
    maximum-value=100 interval=10
    label-interval=10
    label-extent=0.025
    labels-pre-terminal=0
    labels-post-initial=0
    font-brush="DodgerBlue"
    font="11px Verdana">
</igc-linear-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Backing

The backing element represents background and border of the linear gauge component. It is always the first element rendered and all the rest of elements such as labels, and tick marks are overlaid on top of it.

```html
<igc-linear-gauge
    height="80px" width="400px"
    minimum-value=0 value=20
    maximum-value=100 interval=10
    backing-brush="#bddcfc"
    backing-outline="DodgerBlue"
    backing-stroke-thickness=4
    backing-inner-extent=0
    backing-outer-extent=1>
</igc-linear-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Scale

The scale is a visual element that highlights the full range of values in the linear gauge. You can customize the appearance and the shape of the scale. It can also be inverted (using [`isScaleInverted`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargaugecomponent.html#isScaleInverted) property) and all labels will be rendered from right-to-left instead of left-to-right.

```html
<igc-linear-gauge
    height="80px" width="400px"
    minimum-value=0 value=50
    maximum-value=100 interval=10
    isScale-inverted=false
    scale-brush="DodgerBlue"
    scale-outline="DarkViolet"
    scale-stroke-thickness=1
    scale-inner-extent=0.05
    scale-outer-extent=0.65
    scale-start-extent=0.05
    scale-end-extent=0.95>
</igc-linear-gauge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the linear gauge with all features and visuals enabled.

```html
<igc-linear-gauge id="lineargauge"
    height="80px" width="400px"
    minimum-value=0
    maximum-value=100

    label-interval=10
    label-extent=0.025
    labels-pre-terminal=0
    labels-post-initial=0
    font-brush="Black"
    font="11px Verdana"

    interval=10
    tick-brush="Black"
    ticks-pre-terminal=0
    ticks-post-initial=0
    tick-stroke-thickness=2
    tick-start-extent=0.25
    tick-end-extent=0.05

    minor-tick-count=4
    minor-tick-brush="Black"
    minor-tick-end-extent=0.05
    minor-tick-start-extent=0.15
    minor-tick-stroke-thickness=1

    value=50
    is-needle-dragging-enabled=true
    needle-shape="Custom"
    needle-brush="Black"
    needle-outline="Black"
    needle-stroke-thickness=1
    needle-breadth=15
    needle-inner-extent=0.35
    needle-outer-extent=0.65
    needle-outer-point-extent=0.8
    needle-inner-point-extent=0.325
    needle-inner-point-width=0
    needle-outer-point-width=0.3
    needle-inner-base-width=0
    needle-outer-base-width=0.07

    is-scale-inverted=false
    scale-brush="Gray"
    scale-outline="Gray"
    scale-stroke-thickness=1
    scale-inner-extent=0.05
    scale-outer-extent=0.65
    scale-start-extent=0.05
    scale-end-extent=0.95

    backing-brush="#cecece"
    backing-outline="#cecece"
    backing-stroke-thickness=4
    backing-inner-extent=0
    backing-outer-extent=1

    range-brushes ="#C62828, #F96232, #FF9800"
    range-outlines="#C62828, #F96232, #FF9800">
    <igc-linear-graph-range
        start-value=0 end-Value=50
        inner-start-extent=0.075 inner-end-extent=0.075
        outer-start-extent=0.25 outer-end-extent=0.4>
    </igc-linear-graph-range>
    <igc-linear-graph-range
        start-value=50 end-value=100
        inner-start-extent=0.075 inner-end-extent=0.075
        outer-start-extent=0.4 outer-end-extent=0.55>
    </igc-linear-graph-range>
</igc-linear-gauge>
```

<div class="divider--half"></div>

## API References

The following is a list of API members mentioned in the above sections:

- [`IgcLinearGaugeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargaugecomponent.html)
- [`IgcLinearGraphRangeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargraphrangecomponent.html)

## Additional Resources

You can find more information about other types of gauges in these topics:

- [Bullet Graph](bullet-graph.md)
- [Radial Gauge](radial-gauge.md)
