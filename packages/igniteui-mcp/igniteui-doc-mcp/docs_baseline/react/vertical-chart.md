---
title: "React Vertical Charts | Data Visualization | Infragistics"
description: "The React vertical category series draw line, spline, point, step, area and waterfall charts with the categories running down the chart and the values across it."
keywords: "React Charts, Vertical Line Chart, Vertical Area Chart, Vertical Spline Chart, Vertical Step Chart, Vertical Point Chart, Vertical Waterfall Chart, Infragistics"
license: commercial
mentionedTypes: ["DataChart", "VerticalLineSeries", "VerticalSplineSeries", "VerticalPointSeries", "VerticalStepLineSeries", "VerticalAreaSeries", "VerticalSplineAreaSeries", "VerticalStepAreaSeries", "VerticalWaterfallSeries", "BarSeries", "CategoryYAxis", "NumericXAxis", "DataToolTipLayer", "Legend"]
namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for React vertical category series are the line, spline, point, step, area and waterfall series turned on their side: the categories run down a CategoryYAxis and the values run across a NumericXAxis, like a bar chart."
platformType: xplat
_tocName: Vertical Chart
_premium: true
---
# React Vertical Charts

The Ignite UI for React vertical category series draw the familiar line, spline, point, step, area and waterfall charts turned on their side. The categories run down the chart on a `IgrCategoryYAxis` and the values run across it on a `IgrNumericXAxis`, the same arrangement as a [Bar Chart](bar-chart.md). Each series is the vertical counterpart of a horizontal series you may already use, and shares its options: `VerticalLineSeries` mirrors the `IgrLineSeries`, `VerticalAreaSeries` the `IgrAreaSeries`, and so on.

## React Vertical Chart Example

The following example plots sea temperature against depth, with the surface at the top, for a summer and a winter day.



Like this sample? Try the complete Ignite UI for React toolkit and begin building your own apps. <a href="https://www.infragistics.com/products/ignite-ui-react/download">Download free trial.</a>

## Vertical Chart Recommendations

### Are React Vertical Charts right for your project?

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
- Each item must have a category, such as a string or a date, which labels its row on the `IgrCategoryYAxis`.
- Each series reads one numeric field through its `valueMemberPath`.

## React Vertical Chart Axes

A vertical series takes a `IgrCategoryYAxis` for its categories and a `IgrNumericXAxis` for its values. Bind the category axis to the same data as the series and name the category field with `label`. Set `isInverted` on the category axis to run the categories from top to bottom; without it the first item is at the bottom, which suits altitude but not depth.

```tsx
<IgrDataChart
    ref={this.chartRef}>
    <IgrCategoryYAxis
        name="yAxis"
        ref={ref => { this.yAxis = ref; }}
        label="depth"
        dataSource={this.oceanTemperatureByDepth}
        interval={1}
        isInverted={true} />
    <IgrNumericXAxis
        name="xAxis"
        ref={ref => { this.xAxis = ref; }}
        title="Temperature (°C)" />
    <IgrVerticalLineSeries
        name="VerticalLineSeries1"
        ref={ref => { this.verticalLineSeries1 = ref; }}
        title="Summer"
        xAxisName="xAxis"
        yAxisName="yAxis"
        dataSource={this.oceanTemperatureByDepth}
        valueMemberPath="summer"
        markerType="Circle"
        thickness={2} />
</IgrDataChart>
```

## React Vertical Line Chart

The `VerticalLineSeries` joins the values of neighboring categories with straight lines, as in the [example above](#react-vertical-chart-example). It takes the same marker, thickness and brush options as the `IgrLineSeries`.

## React Vertical Spline Chart

The `VerticalSplineSeries` joins the values with smooth curves. The example below plots air temperature against altitude, with the ground at the bottom, so the category axis is not inverted.



```tsx
<IgrVerticalSplineSeries
    markerType="Circle" />
```

## React Vertical Point Chart

The `VerticalPointSeries` draws a marker for each value without joining them, which suits categories that have no order, such as the features in the survey below. Two point series side by side compare two sets of results, row by row.



## React Vertical Step Line Chart

The `VerticalStepLineSeries` holds each value until the next category and then steps to the next value, which suits values that change at set times and stay put in between, such as interest rates.



## React Vertical Area Chart

The `VerticalAreaSeries` fills the space between the line and the value axis. Lower `areaFillOpacity` when areas overlap, so the series behind stays visible.



```tsx
<IgrVerticalAreaSeries
    areaFillOpacity={0.5} />
```

## React Vertical Spline Area Chart

The `VerticalSplineAreaSeries` fills the space under a smooth curve. The example below shows website visits through the day, from midnight at the top.



## React Vertical Step Area Chart

The `VerticalStepAreaSeries` fills the space under a stepped line, so each category reads as a solid band.



## React Vertical Waterfall Chart

The `VerticalWaterfallSeries` draws each category as a bar from the previous value to its own, so a running total reads as a series of gains and losses. Each value is the running total after that step, not the change. Bars that fall from the previous value use `negativeBrush` and `negativeOutline`.



```tsx
<IgrVerticalWaterfallSeries
    brush="rgba(46, 125, 50, 1)"
    outline="rgba(46, 125, 50, 1)"
    negativeBrush="rgba(198, 40, 40, 1)"
    negativeOutline="rgba(198, 40, 40, 1)" />
```

## React Combining Vertical Series with Bar Series

The vertical series share their axes with the `IgrBarSeries`, so they can be drawn over bars in the same chart. The example below draws each region's sales target as a `VerticalLineSeries` over a `IgrBarSeries` of the actual sales.



```tsx
<IgrBarSeries
    title="Actual"
    valueMemberPath="actual" />
<IgrVerticalLineSeries
    title="Target"
    valueMemberPath="target"
    markerType="Diamond" />
```

## React Vertical Chart Tooltips

Add a `IgrDataToolTipLayer` to describe the category under the cursor. By default the tooltip ends with a total of the series' values, which is useful when the series add up, such as desktop and mobile visits, but not when they are separate measurements, such as summer and winter temperatures. Set `summaryType` to `None` to leave it out.

```tsx
<IgrDataToolTipLayer
    summaryType="None" />
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

- `IgrDataChart`
- `VerticalLineSeries`
- `VerticalSplineSeries`
- `VerticalPointSeries`
- `VerticalStepLineSeries`
- `VerticalAreaSeries`
- `VerticalSplineAreaSeries`
- `VerticalStepAreaSeries`
- `VerticalWaterfallSeries`
- `IgrBarSeries`
- `IgrCategoryYAxis`
- `IgrNumericXAxis`
- `IgrDataToolTipLayer`
