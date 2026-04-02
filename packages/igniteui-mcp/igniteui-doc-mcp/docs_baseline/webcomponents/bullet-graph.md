---
title: Web Components Bullet Graph | Data Visualization Tools | Infragistics
_description: Infragistics' Web Components bullet graph control allows you to create dashboards displaying ranges or comparing multiple measurements. View our data visualization tools!
_keywords: Web Components Bullet Graph, animation, labels, needle, scales, ranges, tick marks, Infragistics
_license: commercial
mentionedTypes: ["XamBulletGraph"]
namespace: Infragistics.Controls.Gauges
_tocName: Bullet Graph
_premium: true
---

# Web Components Bullet Graph Overview

The Web Components bullet graph component allows for a linear and concise view of measures compared against a scale.

The Ignite UI for Web Components bullet graph component provides you with the ability to create attractive data presentations, replacing meters and gauges that are used on dashboards with simple yet straightforward and clear bar charts. A bullet graph is one of the most effective and efficient ways to present progress towards goals, good/better/best ranges, or compare multiple measurements in as little horizontal or vertical space as possible.

## Web Components Bullet Graph Example

The following sample demonstrates how setting multiple properties on the same [`IgcBulletGraphComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html) can transform it to completely different bullet graph.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

The bullet graph supports one scale, one set of tick marks and one set of labels. The bullet graph component also has built-in support for animated transitions. This animation is easily customizable by setting the [`transitionDuration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html#transitionDuration) property.
The features of the bullet graph include configurable orientation and direction, configurable visual elements such as the needle, and more.

## Dependencies

When installing the gauge package, the core package must also be installed.

```cmd
npm install --save igniteui-webcomponents-core
npm install --save igniteui-webcomponents-gauges
```

## Component Modules

The [`IgcBulletGraphComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html) requires the following modules:

```ts
import { IgcBulletGraphCoreModule  } from 'igniteui-webcomponents-gauges';
import { IgcBulletGraphModule } from 'igniteui-webcomponents-gauges';
import { ModuleManager } from 'igniteui-webcomponents-core';

// register the modules
ModuleManager.register(
    IgcBulletGraphCoreModule,
    IgcBulletGraphModule
);
```

<div class="divider--half"></div>

## Usage

The following code walks through creating a bullet graph component, and configuring a performance bar, comparative measure marker, and three comparative ranges on the scale.

```html
  <igc-bullet-graph height="100px"
    width="300px"
    minimum-value="5"
    maximum-value="55"
    value="35"
    target-value="43">
    <igc-linear-graph-range
      start-value="0"
      end-value="15"
      brush="#828181">
    </igc-linear-graph-range>
    <igc-linear-graph-range
      start-value="15"
      end-value="30"
      brush="#AAAAAA">
    </igc-linear-graph-range>
    <igc-linear-graph-range
      start-value="30"
      end-value="55"
      brush="#D0D0D0">
    </igc-linear-graph-range>
  </igc-bullet-graph>
```

<div class="divider--half"></div>

## Comparative Measures

The bullet graph can show two measures: performance value and target value.

Performance value is the primary measure displayed by the component and it is visualized as a bar that stretches along the length of the whole graph. The target value is a measure which the performance value compares against. It is displayed as a small block that runs perpendicular to the orientation of the performance bar.

```html
  <igc-bullet-graph
    height="80px"
    width="400px"
    value="50"
    value-brush="DodgerBlue"
    value-stroke-thickness="1"
    value-inner-extent="0.5"
    value-outer-extent="0.65"
    target-value="80"
    target-value-breadth="10"
    target-value-brush="LimeGreen"
    target-value-outline="LimeGreen"
    target-value-stroke-thickness="1"
    target-value-inner-extent="0.3"
    target-value-outer-extent="0.85"
    minimum-value="0"
    maximum-value="100">
  </igc-bullet-graph>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Highlight Value

The bullet graph's performance value can be further modified to show progress represented as a highlighted value. This will make the [`value`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html#value) appear with a lower opacity. A good example is if [`value`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html#value) is 50 and  [`highlightValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html#highlightValue) is set to 25. This would represent a performance of 50% regardless of what the value of [`targetValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html#targetValue) is set to. To enable this first set [`highlightValueDisplayMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html#highlightValueDisplayMode) to Overlay and then apply a [`highlightValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html#highlightValue) to something lower than [`value`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html#value).

```html
<igc-bullet-graph
    id="gauge"
    height="80px"
    width="100%"
    minimum-value="0"
    maximum-value="100"
    value="70"
    interval="10"
    target-value="90"
    label-interval="10"
    label-extent="0.025"
    labels-pre-terminal="0"
    labels-post-initial="0"
    highlight-value-display-mode="Overlay"
    highlight-value="25" >
</igc-bullet-graph>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Comparative Ranges

The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same time the degree to which it resides within that state.

```html
  <igc-bullet-graph
    height="80px" width="400px"
    minimum-value="0" value="80" interval="10"
    maximum-value="100" target-value="90"
    range-brushes ="#C62828, #F96232, #FF9800"
    range-outlines="#C62828, #F96232, #FF9800">
    <igc-linear-graph-range
      start-value="0" end-value="40"
      inner-start-extent="0.075" inner-end-extent="0.075"
      outer-start-extent="0.95" outer-end-extent="0.95">
    </igc-linear-graph-range>
    <igc-linear-graph-range
      start-value="40" end-value="70"
      inner-start-extent="0.075" inner-end-extent="0.075"
      outer-start-extent="0.95" outer-end-extent="0.95">
    </igc-linear-graph-range>
    <igc-linear-graph-range
      start-value="70" end-value="100"
      inner-start-extent="0.075" inner-end-extent="0.075"
      outer-start-extent="0.95" outer-end-extent="0.95">
    </igc-linear-graph-range>
  </igc-bullet-graph>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Tick Marks

The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the bullet graph.

- Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting their corresponding properties.
- Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

```html
  <igc-bullet-graph
    height="80px" width="400px"
    minimum-value="0" value="70"
    maximum-value="100" target-value="90"
    interval="10"
    tick-brush="DodgerBlue"
    ticks-pre-terminal="0"
    ticks-post-initial="0"
    tick-stroke-thickness="2"
    tick-start-extent="0.2"
    tick-end-extent="0.075"
    minor-tick-count="4"
    minor-tick-brush="DarkViolet"
    minor-tick-end-extent="0.1"
    minor-tick-start-extent="0.2"
    minor-tick-stroke-thickness="1">
  </igc-bullet-graph>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Labels

The labels indicate the measures on the scale.

```html
  <igc-bullet-graph
    height="80px" width="400px"
    minimum-value="0" value="70" interval="10"
    maximum-value="100" target-value="90"
    label-interval="10"
    label-extent="0.025"
    labels-pre-terminal="0"
    labels-post-initial="0"
    font-brush="DodgerBlue"
    font="11px Verdana">
  </igc-bullet-graph>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Backing

The backing element represents background and border of the bullet graph component. It is always the first element rendered and all the rest of elements such as labels, and tick marks are overlaid on top of it.

```html
  <igc-bullet-graph
    height="80px" width="400px"
    minimum-value="0" value="70" interval="10"
    maximum-value="100" target-value="90"
    backing-brush="#bddcfc"
    backing-outline="DodgerBlue"
    backing-stroke-thickness="4"
    backing-inner-extent="0"
    backing-outer-extent="1">
  </igc-bullet-graph>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Scale

The scale is visual element that highlights the full range of values in the gauge. You can customize appearance and shape of the scale. The scale can also be inverted (using [`isScaleInverted`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html#isScaleInverted) property) and all labels will be rendered from right-to-left instead of left-to-right.

```html
  <igc-bullet-graph
    height="80px" width="400px"
    minimum-value="0" value="70" interval="10"
    maximum-value="100" target-value="90"
    is-scale-inverted="false"
    scale-background-brush="DodgerBlue"
    scale-background-outline="DarkViolet"
    scale-background-thickness="2"
    scale-start-extent="0.05"
    scale-end-extent="0.95">
  </igc-bullet-graph>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the bullet graph with all features and visuals enabled.

```html
  <igc-bullet-graph
    height="80px" width="400px"
    minimum-value="0"
    maximum-value="100"
    is-scale-inverted="false"
    scale-background-brush="Gray"
    scale-background-outline="Gray"
    scale-background-thickness="2"
    scale-start-extent="0.05"
    scale-end-extent="0.95"

    value="50"
    value-brush="Black"
    value-stroke-thickness="1"
    value-inner-extent="0.5"
    value-outer-extent="0.65"
    target-value="80"
    target-value-breadth="7.5"
    target-value-brush="Black"
    target-value-outline="Black"
    target-value-stroke-thickness="1"
    target-value-inner-extent="0.3"
    target-value-outer-extent="0.85"

    label-interval="10"
    label-extent="0.025"
    labels-pre-terminal="0"
    labels-post-initial="0"
    font-brush="Black"
    font="11px Verdana"

    backing-brush="#cecece"
    backing-outline="#cecece"
    backing-stroke-thickness="4"
    backing-inner-extent="0"
    backing-outer-extent="1"

    interval="10"
    tick-brush="Black"
    ticks-pre-terminal="0"
    ticks-post-initial="0"
    tick-stroke-thickness="2"
    tick-start-extent="0.2"
    tick-end-extent="0.075"

    minor-tick-count="4"
    minor-tick-brush="Black"
    minor-tick-end-extent="0.1"
    minor-tick-start-extent="0.2"
    minor-tick-stroke-thickness="1"

    range-brushes="#C62828, #F96232, #FF9800"
    range-outlines="#C62828, #F96232, #FF9800">
    <igc-linear-graph-range
      start-value="20" end-value="40"
      inner-start-extent="0.25" inner-end-extent="0.25"
      outer-start-extent="0.9" outer-end-extent="0.9">
    </igc-linear-graph-range>
    <igc-linear-graph-range
      start-value="40" end-value="60"
      inner-start-extent="0.25" inner-end-extent="0.25"
      outer-start-extent="0.9" outer-end-extent="0.9">
    </igc-linear-graph-range>
    <igc-linear-graph-range
      start-value="60" end-value="90"
      inner-start-extent="0.25" inner-end-extent="0.25"
      outer-start-extent="0.9" outer-end-extent="0.9">
    </igc-linear-graph-range>
  </igc-bullet-graph>
```

## API References

The following is a list of API members mentioned in the above sections:

- [`IgcBulletGraphComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igcbulletgraphcomponent.html)
- [`IgcLinearGraphRangeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_gauges.igclineargraphrangecomponent.html)

## Additional Resources

You can find more information about other types of gauges in these topics:

- [Linear Gauge](linear-gauge.md)
- [Radial Gauge](radial-gauge.md)
