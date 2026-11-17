---
title: "Web Components Vertical Charts | Data Visualization | Infragistics"
description: "The Web Components vertical category series draw line, spline, point, step, area and waterfall charts with the categories running down the chart and the values across it."
keywords: "Web Components Charts, Vertical Line Chart, Vertical Area Chart, Vertical Spline Chart, Vertical Step Chart, Vertical Point Chart, Vertical Waterfall Chart, Infragistics"
license: commercial
mentionedTypes: ["DataChart", "VerticalLineSeries", "VerticalSplineSeries", "VerticalPointSeries", "VerticalStepLineSeries", "VerticalAreaSeries", "VerticalSplineAreaSeries", "VerticalStepAreaSeries", "VerticalWaterfallSeries", "BarSeries", "CategoryYAxis", "NumericXAxis", "DataToolTipLayer", "Legend"]
namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for Web Components vertical category series are the line, spline, point, step, area and waterfall series turned on their side: the categories run down a CategoryYAxis and the values run across a NumericXAxis, like a bar chart."
platformType: xplat
_tocName: Vertical Chart
_premium: true
---
# Web Components Vertical Charts

The Ignite UI for Web Components vertical category series draw the familiar line, spline, point, step, area and waterfall charts turned on their side. The categories run down the chart on a [`IgcCategoryYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryYAxisComponent) and the values run across it on a [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent), the same arrangement as a [Bar Chart](bar-chart.md). Each series is the vertical counterpart of a horizontal series you may already use, and shares its options: `VerticalLineSeries` mirrors the [`IgcLineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcLineSeriesComponent), `VerticalAreaSeries` the [`IgcAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcAreaSeriesComponent), and so on.

## Web Components Vertical Chart Example

The following example plots sea temperature against depth, with the surface at the top, for a summer and a winter day.



Like this sample? Try the complete Ignite UI for Web Components toolkit and begin building your own apps. <a href="https://www.infragistics.com/products/ignite-ui-web-components/download">Download free trial.</a>

## Vertical Chart Recommendations

### Are Web Components Vertical Charts right for your project?

Turn a chart on its side when the categories read better from top to bottom than from left to right:

- The categories are a physical vertical dimension, such as depth, altitude or the floors of a building.
- The category labels are long, such as survey questions, product features or account names. Running down the chart, each label gets the full width of the axis instead of being rotated or cut off.
- There are many categories, such as the hours of a day, and the chart has more room vertically than horizontally.
- The chart sits beside a bar chart or a table whose rows it should line up with.

### Vertical Chart Use Cases

- Ocean, soil or atmosphere profiles, where the value changes with depth or altitude.
- Survey and ranking results with long category names.
- Timelines that read from top to bottom, such as the hours of a day or the months of a year.
- Profit bridges and other waterfall charts with long step names.
- Bar charts with a target or an average drawn over the bars.

### When not to Use a Vertical Chart

- The categories are a time series that readers expect to run from left to right, such as stock prices. Use the horizontal [Line Chart](line-chart.md) or [Area Chart](area-chart.md).
- You need to compare the magnitudes of separate categories. A [Bar Chart](bar-chart.md) shows each value as the length of a bar, which is easier to compare than the position of a point.

### Vertical Chart Data Structure

- The data source must be an array or a list of data items.
- Each item must have a category, such as a string or a date, which labels its row on the [`IgcCategoryYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryYAxisComponent).
- Each series reads one numeric field through its [`valueMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcAreaSeriesComponent&member=valueMemberPath).

## Web Components Vertical Chart Axes

A vertical series takes a [`IgcCategoryYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryYAxisComponent) for its categories and a [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) for its values. Bind the category axis to the same data as the series and name the category field with `label`. Set [`isInverted`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=isInverted) on the category axis to run the categories from top to bottom; without it the first item is at the bottom, which suits altitude but not depth.

```html
<igc-data-chart
    id="chart">
    <igc-category-y-axis
        id="yAxis"
        label="depth"
        interval="1"
        is-inverted="true">
    </igc-category-y-axis>
    <igc-numeric-x-axis
        id="xAxis"
        title="Temperature (°C)">
    </igc-numeric-x-axis>
    <igc-vertical-line-series
        id="VerticalLineSeries1"
        title="Summer"
        value-member-path="summer"
        marker-type="Circle"
        thickness="2">
    </igc-vertical-line-series>
</igc-data-chart>
```

```ts
yAxis.dataSource = this.oceanTemperatureByDepth;
verticalLineSeries1.xAxis = this.xAxis;
verticalLineSeries1.yAxis = this.yAxis;
verticalLineSeries1.dataSource = this.oceanTemperatureByDepth;
```

## Web Components Vertical Line Chart

The `VerticalLineSeries` joins the values of neighboring categories with straight lines, as in the [example above](#web-components-vertical-chart-example). It takes the same marker, thickness and brush options as the [`IgcLineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcLineSeriesComponent).

## Web Components Vertical Spline Chart

The `VerticalSplineSeries` joins the values with smooth curves. The example below plots air temperature against altitude, with the ground at the bottom, so the category axis is not inverted.



```html
<igc-vertical-spline-series
    marker-type="Circle">
</igc-vertical-spline-series>
```

## Web Components Vertical Point Chart

The `VerticalPointSeries` draws a marker for each value without joining them, which suits categories that have no order, such as the features in the survey below. Two point series side by side compare two sets of results, row by row.



## Web Components Vertical Step Line Chart

The `VerticalStepLineSeries` holds each value until the next category and then steps to the next value, which suits values that change at set times and stay put in between, such as interest rates.



## Web Components Vertical Area Chart

The `VerticalAreaSeries` fills the space between the line and the value axis. Lower [`areaFillOpacity`](mcp:get_api_reference?platform=webcomponents&component=IgcLineSeriesComponent&member=areaFillOpacity) when areas overlap, so the series behind stays visible.



```html
<igc-vertical-area-series
    area-fill-opacity="0.5">
</igc-vertical-area-series>
```

## Web Components Vertical Spline Area Chart

The `VerticalSplineAreaSeries` fills the space under a smooth curve. The example below shows website visits through the day, from midnight at the top.



## Web Components Vertical Step Area Chart

The `VerticalStepAreaSeries` fills the space under a stepped line, so each category reads as a solid band.



## Web Components Vertical Waterfall Chart

The `VerticalWaterfallSeries` draws each category as a bar from the previous value to its own, so a running total reads as a series of gains and losses. Each value is the running total after that step, not the change. Bars that fall from the previous value use `negativeBrush` and `negativeOutline`.



```html
<igc-vertical-waterfall-series
    brush="rgba(46, 125, 50, 1)"
    outline="rgba(46, 125, 50, 1)"
    negative-brush="rgba(198, 40, 40, 1)"
    negative-outline="rgba(198, 40, 40, 1)">
</igc-vertical-waterfall-series>
```

## Web Components Combining Vertical Series with Bar Series

The vertical series share their axes with the [`IgcBarSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBarSeriesComponent), so they can be drawn over bars in the same chart. The example below draws each region's sales target as a `VerticalLineSeries` over a [`IgcBarSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBarSeriesComponent) of the actual sales.



```html
<igc-bar-series
    title="Actual"
    value-member-path="actual">
</igc-bar-series>
<igc-vertical-line-series
    title="Target"
    value-member-path="target"
    marker-type="Diamond">
</igc-vertical-line-series>
```

## Web Components Vertical Chart Tooltips

Add a [`IgcDataToolTipLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataToolTipLayerComponent) to describe the category under the cursor. By default the tooltip ends with a total of the series' values, which is useful when the series add up, such as desktop and mobile visits, but not when they are separate measurements, such as summer and winter temperatures. Set [`summaryType`](mcp:get_api_reference?platform=webcomponents&component=IgcDataToolTipLayerComponent&member=summaryType) to `None` to leave it out.

```html
<igc-data-tool-tip-layer
    summary-type="None">
</igc-data-tool-tip-layer>
```

## Additional Resources

You can find more information about related chart types in these topics:

- [Bar Chart](bar-chart.md)
- [Line Chart](line-chart.md)
- [Area Chart](area-chart.md)
- [Spline Chart](spline-chart.md)
- [Step Chart](step-chart.md)
- [Point Chart](point-chart.md)

## API References

- [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)
- `VerticalLineSeries`
- `VerticalSplineSeries`
- `VerticalPointSeries`
- `VerticalStepLineSeries`
- `VerticalAreaSeries`
- `VerticalSplineAreaSeries`
- `VerticalStepAreaSeries`
- `VerticalWaterfallSeries`
- [`IgcBarSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBarSeriesComponent)
- [`IgcCategoryYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryYAxisComponent)
- [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent)
- [`IgcDataToolTipLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataToolTipLayerComponent)
