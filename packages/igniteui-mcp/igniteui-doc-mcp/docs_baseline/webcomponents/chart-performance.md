---
title: "Web Components Chart Performance | Data Visualization | Infragistics"
description: Infragistics' Web Components Chart Performance
keywords: "Web Components Charts, Performance, Infragistics"
license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "DataChart", "FinancialChartVolumeType", "FinancialChartZoomSliderType"]
namespace: Infragistics.Controls.Charts
llms:
  description: "Web Components charts are optimized for high performance of rendering millions of data points and updating them every few milliseconds."
_tocName: Chart Performance
_premium: true
---
# Web Components Chart Performance

Web Components charts are optimized for high performance of rendering millions of data points and updating them every few milliseconds. However, there are several chart features that affect performance of the chart and they should be considered when optimizing performance in your application. This topic will guide you to make Web Components charts work as fast as possible in your application.

## Web Components Chart Performance Examples

The following examples demonstrates two high performance scenarios of Web Components charts.

## Web Components Chart with High-Frequency

In High-Frequency scenario, the Web Components Charts can render data items that are updating in real time or at specified milliseconds intervals. You will experience no lag, no screen-flicker, and no visual delays, even as you interact with the chart on a touch-device. The following sample demonstrates the [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) in High-Frequency scenario.

```typescript
export class CategoryChartSharedData {

    public static generateItems(startValue: number, maxPoints: number, useShortLabels?: boolean): any[] {

        const data: any[] = [];
        let value = startValue;
        for (let i = 0; i <= maxPoints; i++) {
            value += Math.random() * 4.0 - 2.0;
            const v = Math.round(value);
            let l = i.toString();
            if (useShortLabels) {
                l = this.toShortString(i);
            }
            data.push({ Label: l, Value: v });
        }
        return data;
    }

    public static getTemperatures(startValue: number, startYear: number, endYear: number): any[] {
        const data: any[] = [];
        let value = startValue;
        for (let i = startYear; i <= endYear; i++) {
            value += (Math.random() - 0.5) * 0.5;
            const v = Math.abs(Math.round(value * 10) / 10);
            data.push({ Label: i.toString(), Value: v });
        }
        return data;
    }

    public static getLastItem(array: any[]): any {
        if (array.length === 0) {
            return null;
        }
        return array[array.length - 1];
    }

    public static getNewItem(array: any[], index: number): any {
        const lastItem = this.getLastItem(array);
        const newValue = lastItem.Value + Math.random() * 4.0 - 2.0;
        return { Label: index.toString(), Value: newValue };
    }

    public static toShortString(largeValue: number): string {
        let roundValue: number;

        if (largeValue >= 1000000) {
            roundValue = Math.round(largeValue / 100000) / 10;
            return roundValue + "m";
        }
        if (largeValue >= 1000) {
            roundValue = Math.round(largeValue / 100) / 10;
            return roundValue + "k";
        }

        roundValue = Math.round(largeValue);
        return roundValue + "";
    }

    public static addDays(date: Date, days: number): Date {
        date.setDate(date.getDate() + days);
        return date;
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Web Components Chart with High-Volume

In High-Volume scenario, the Web Components Charts can render 1 million of data points while the chart keeps providing smooth performance when end-users tries zooming in/out or navigating chart content. The following sample demonstrates the [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) in High-Volume scenario.

```typescript
export class CategoryChartSharedData {

    public static generateItems(startValue: number, maxPoints: number, useShortLabels?: boolean): any[] {

        const data: any[] = [];
        let value = startValue;
        for (let i = 0; i <= maxPoints; i++) {
            value += Math.random() * 4.0 - 2.0;
            const v = Math.round(value);
            let l = i.toString();
            if (useShortLabels) {
                l = this.toShortString(i);
            }
            data.push({ Label: l, Value: v });
        }
        return data;
    }

    public static getTemperatures(startValue: number, startYear: number, endYear: number): any[] {
        const data: any[] = [];
        let value = startValue;
        for (let i = startYear; i <= endYear; i++) {
            value += (Math.random() - 0.5) * 0.5;
            const v = Math.abs(Math.round(value * 10) / 10);
            data.push({ Label: i.toString(), Value: v });
        }
        return data;
    }

    public static getLastItem(array: any[]): any {
        if (array.length === 0) {
            return null;
        }
        return array[array.length - 1];
    }

    public static getNewItem(array: any[], index: number): any {
        const lastItem = this.getLastItem(array);
        const newValue = lastItem.Value + Math.random() * 4.0 - 2.0;
        return { Label: index.toString(), Value: newValue };
    }

    public static toShortString(largeValue: number): string {
        let roundValue: number;

        if (largeValue >= 1000000) {
            roundValue = Math.round(largeValue / 100000) / 10;
            return roundValue + "m";
        }
        if (largeValue >= 1000) {
            roundValue = Math.round(largeValue / 100) / 10;
            return roundValue + "k";
        }

        roundValue = Math.round(largeValue);
        return roundValue + "";
    }

    public static addDays(date: Date, days: number): Date {
        date.setDate(date.getDate() + days);
        return date;
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## General Performance Guidelines

This section lists guidelines and chart features that add to the overhead and processing updates in the Web Components charts.

### Data Size

If you need to plot data sources with large number of data points (e.g. 10,000+), we recommend using Web Components [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) with one of the following type of series which where designed for specially for that purpose.

- [Scatter HD Chart](../types/scatter-chart.md#web-components-scatter-high-density-chart) instead of [Category Point Chart](../types/point-chart.md) or [Scatter Marker Chart](../types/scatter-chart.md#web-components-scatter-marker-chart)
- [Scatter Polyline Chart](../types/shape-chart.md#web-components-scatter-polyline-chart) instead of [Category Line Chart](../types/line-chart.md#web-components-line-chart-example) or [Scatter Line Chart](../types/scatter-chart.md#web-components-scatter-line-chart)
- [Scatter Polygon Chart](../types/shape-chart.md#web-components-scatter-polygon-chart) instead of [Category Area Chart](../types/area-chart.md#web-components-area-chart-example) or [Column Chart](../types/column-chart.md#web-components-column-chart-example)

### Data Structure

Although Web Components charts support rendering of multiple data sources by binding array of arrays of data points to [`ItemsSource`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=DataSource) property. It is much faster for charts if multiple data sources are flatten into single data source where each data item contains multiple data columns rather just one data column. For example:

```ts
this.CategoryChart.dataSource = FlattenDataSource.create();
this.FinancialChart.dataSource = FlattenDataSource.create();

export class FlattenDataSource {
    public static create(): any[] {
        const data: any[] = [];
        data.push({ "Year": "1996", "USA": 148, "CHN": 110 });
        data.push({ "Year": "2000", "USA": 142, "CHN": 115 });
        return data;
    }
}
// instead of this data structure:
export class MultiDataSources {
    public static create(): any[] {
        const dataSource1: any[] = [];
        dataSource1.push({ "Year": "1996", "Value": 148 });
        dataSource1.push({ "Year": "2000", "Value": 142 });
        const dataSource2: any[] = [];
        dataSource2.push({ "Year": "1996", "Value": 110 });
        dataSource2.push({ "Year": "2000", "Value": 115 });
        const multipleSources: any[] = [dataSource1, dataSource2];
        return multipleSources;
    }
}
```

### Data Filtering

Web Components [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) and the [`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) controls have built-in data adapter that analyzes your data and generates chart series for you. However, it works faster if you use [`IncludedProperties`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=includedProperties) and [`ExcludedProperties`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=excludedProperties) to filter only those data columns that you actually want to render. For example,

```ts
this.Chart.includedProperties = [ "Year", "USA", "RUS" ];
this.Chart.excludedProperties = [ "CHN",  "FRN", "GER" ];
```

## Chart Performance Guidelines

### Chart Types

Simpler chart types such as [Line Chart](../types/line-chart.md) have faster performance than using [Spline Chart](../types/spline-chart.md) because of the complex interpolation of spline lines between data points. Therefore, you should use [`CategoryChart.ChartType`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=chartType) property of Web Components [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) or the [`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) control to select type of chart that renders faster. Alternatively, you can change a type of series to a faster series in Web Components [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) control.

The following table lists chart types in order from the fastest performance to slower performance in each group of charts:

| Chart Group     | Chart Type |
| ----------------|--------------------------------- |
| Pie Charts       | - [Pie Chart](../types/pie-chart.md) <br /> - [Donut Chart](../types/donut-chart.md) <br /> - [Radial Pie Chart](../types/radial-chart.md#web-components-radial-pie-chart) |
| Line Charts      | - [Category Line Chart](../types/line-chart.md#web-components-line-chart-example) <br /> - [Category Spline Chart](../types/spline-chart.md#web-components-spline-chart-example) <br /> - [Step Line Chart](../types/step-chart.md#web-components-step-line-chart) <br /> - [Radial Line Chart](../types/radial-chart.md#web-components-radial-line-chart) <br /> - [Polar Line Chart](../types/polar-chart.md#web-components-polar-line-chart) <br /> - [Scatter Line Chart](../types/scatter-chart.md#web-components-scatter-line-chart) <br /> - [Scatter Polyline Chart](../types/shape-chart.md#web-components-scatter-polyline-chart) (\*)  <br /> - [Scatter Contour Chart](../types/scatter-chart.md#web-components-scatter-contour-chart) <br /> - [Stacked Line Chart](../types/stacked-chart.md#web-components-stacked-line-chart) <br /> - [Stacked 100% Line Chart](../types/stacked-chart.md#web-components-stacked-100-line-chart) <br /> |
| Area Charts      | - [Category Area Chart](../types/area-chart.md#web-components-area-chart-example) <br /> - [Step Area Chart](../types/step-chart.md#web-components-step-area-chart) <br /> - [Range Area Chart](../types/area-chart.md#web-components-range-area-chart) <br /> - [Radial Area Chart](../types/radial-chart.md#web-components-radial-area-chart) <br /> - [Polar Area Chart](../types/polar-chart.md#web-components-polar-area-chart) <br /> - [Scatter Polygon Chart](../types/shape-chart.md#web-components-scatter-polygon-chart) (\*) <br /> - [Scatter Area Chart](../types/scatter-chart.md#web-components-scatter-area-chart) <br /> - [Stacked Area Chart](../types/stacked-chart.md#web-components-stacked-area-chart) <br /> - [Stacked 100% Area Chart](../types/stacked-chart.md#web-components-stacked-100-area-chart) <br /> |
| Column Charts    | - [Column Chart](../types/column-chart.md#web-components-column-chart-example) <br /> - [Bar Chart](../types/bar-chart.md#web-components-bar-chart-example) <br /> - [Waterfall Chart](../types/column-chart.md#web-components-waterfall-chart) <br /> - [Range Column Chart](../types/column-chart.md#web-components-range-column-chart) <br /> - [Range Bar Chart](../types/bar-chart.md#web-components-range-bar-chart) <br /> - [Radial Column Chart](../types/radial-chart.md#web-components-radial-column-chart) <br /> - [Stacked Column Chart](../types/stacked-chart.md#web-components-stacked-column-chart) <br /> - [Stacked Bar Chart](../types/stacked-chart.md#web-components-stacked-bar-chart) <br /> - [Stacked 100% Column Chart](../types/stacked-chart.md#web-components-stacked-100-column-chart) <br /> - [Stacked 100% Bar Chart](../types/stacked-chart.md#web-components-stacked-100-bar-chart) |
| Spline Charts    | - [Category Spline Chart](../types/spline-chart.md#web-components-spline-chart-example) <br /> - [Polar Spline Chart](../types/polar-chart.md#web-components-polar-spline-chart) <br /> - [Scatter Spline Chart](../types/scatter-chart.md#web-components-scatter-spline-chart) <br /> - [Stacked Spline Chart](../types/stacked-chart.md#web-components-stacked-spline-chart) <br /> - [Stacked 100% Spline Chart](../types/stacked-chart.md#web-components-stacked-100-spline-chart) <br /> |
| Point Charts     | - [Category Point Chart](../types/point-chart.md) <br /> - [Scatter HD Chart](../types/scatter-chart.md#web-components-scatter-high-density-chart)  <br /> - [Scatter Marker Chart](../types/scatter-chart.md#web-components-scatter-marker-chart) <br /> - [Scatter Bubble Chart](../types/bubble-chart.md) <br /> - [Polar Marker Chart](../types/polar-chart.md#web-components-polar-marker-chart) <br /> |
| Financial Charts | - [Stock Chart in Line Mode](../types/stock-chart.md) <br /> - [Stock Chart in Column Mode](../types/stock-chart.md) <br /> - [Stock Chart in Bar Mode](../types/stock-chart.md) <br /> - [Stock Chart in Candle Mode](../types/stock-chart.md) <br /> - [Stock Chart with Overlays](../types/stock-chart.md) <br /> - [Stock Chart with Zoom Pane](../types/stock-chart.md) <br /> - [Stock Chart with Volume Pane](../types/stock-chart.md#volume-pane) <br /> - [Stock Chart with Indicator Pane](../types/stock-chart.md#indicator-pane) <br /> |
| Scatter Charts   | - [Scatter HD Chart](../types/scatter-chart.md#web-components-scatter-high-density-chart) <br /> - [Scatter Marker Chart](../types/scatter-chart.md#web-components-scatter-marker-chart) <br /> - [Scatter Line Chart](../types/scatter-chart.md#web-components-scatter-line-chart) <br /> - [Scatter Bubble Chart](../types/bubble-chart.md) <br /> - [Scatter Spline Chart](../types/scatter-chart.md#web-components-scatter-spline-chart) <br /> - [Scatter Area Chart](../types/scatter-chart.md#web-components-scatter-area-chart) <br /> - [Scatter Contour Chart](../types/scatter-chart.md#web-components-scatter-contour-chart) <br /> - [Scatter Polyline Chart](../types/shape-chart.md#web-components-scatter-polyline-chart) (\*) <br /> - [Scatter Polygon Chart](../types/shape-chart.md#web-components-scatter-polygon-chart) (\*) <br /> |
| Radial Charts    | - [Radial Line Chart](../types/radial-chart.md#web-components-radial-line-chart) <br /> - [Radial Area Chart](../types/radial-chart.md#web-components-radial-area-chart) <br /> - [Radial Pie Chart](../types/radial-chart.md#web-components-radial-pie-chart) <br /> - [Radial Column Chart](../types/radial-chart.md#web-components-radial-column-chart) <br /> |
| Polar Charts     | - [Polar Marker Chart](../types/polar-chart.md#web-components-polar-marker-chart) <br /> - [Polar Line Chart](../types/polar-chart.md#web-components-polar-line-chart) <br /> - [Polar Area Chart](../types/polar-chart.md#web-components-polar-area-chart) <br /> - [Polar Spline Chart](../types/polar-chart.md#web-components-polar-spline-chart) <br /> - [Polar Spline Area Chart](../types/polar-chart.md#web-components-polar-spline-area-chart) <br /> |
| Stacked Charts   | - [Stacked Line Chart](../types/stacked-chart.md#web-components-stacked-line-chart) <br /> - [Stacked Area Chart](../types/stacked-chart.md#web-components-stacked-area-chart) <br /> - [Stacked Column Chart](../types/stacked-chart.md#web-components-stacked-column-chart) <br /> - [Stacked Bar Chart](../types/stacked-chart.md#web-components-stacked-bar-chart) <br /> - [Stacked Spline Chart](../types/stacked-chart.md#web-components-stacked-spline-chart) <br /> - [Stacked 100% Line Chart](../types/stacked-chart.md#web-components-stacked-100-line-chart) <br /> - [Stacked 100% Area Chart](../types/stacked-chart.md#web-components-stacked-100-area-chart) <br /> - [Stacked 100% Column Chart](../types/stacked-chart.md#web-components-stacked-100-column-chart) <br /> - [Stacked 100% Bar Chart](../types/stacked-chart.md#web-components-stacked-100-bar-chart) <br /> - [Stacked 100% Spline Chart](../types/stacked-chart.md#web-components-stacked-100-spline-chart) <br /> |

\* Note that the [Scatter Polygon Chart](../types/shape-chart.md) and [Scatter Polyline Chart](../types/shape-chart.md) have better performance than rest of charts if you have a lot of data sources bound to the chart. For more info, see [Series Collection](#series-collection) section. Otherwise, other chart types are faster.

### Chart Animations

Enabling [Chart Animations](chart-animations.md) will slightly delay final rendering series in the Web Components charts while they play transition-in animations.

### Chart Annotations

Enabling [Chart Annotations](chart-annotations.md) such as the Callout Annotations, Crosshairs Annotations, or Final Value Annotations, will slightly decrease performance of the Web Components chart.

### Chart Highlighting

Enabling the [Chart Highlighting](chart-highlighting.md) will slightly decrease performance of the Web Components chart.

### Chart Legend

Adding a legend to the Web Components charts might decrease performance if titles of series or data items mapped to legend are changing often at runtime.

### Chart Markers

In Web Components charts, [Markers](chart-markers.md) are especially expensive when it comes to chart performance because they add to the layout complexity of the chart, and perform data binding to obtain certain information. Also, markers decrease performance when there are a lot of data points or if there are many data sources bound. Therefore, if markers are not needed, they should be removed from the chart.

This code snippet shows how to remove markers from the Web Components charts.

```ts
// on CategoryChart or FinancialChart
this.Chart.markerTypes.clear();
this.Chart.markerTypes.add(MarkerType.None);

// on LineSeries of DataChart
this.LineSeries.markerType = MarkerType.None;

```

### Chart Resolution

Setting the [`Resolution`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=resolution) property to a higher value will improve performance, but it will lower the graphical fidelity of lines of plotted series. As such, it can be increased up until the fidelity is unacceptable.

This code snippet shows how to decrease resolution in the Web Components charts.

```ts
// on CategoryChart or FinancialChart:
this.Chart.Resolution = 10;

// on LineSeries of DataChart:
this.LineSeries.Resolution = 10;

```

### Chart Overlays

Enabling [Chart Overlays](chart-overlays.md) will slightly decrease performance of the Web Components chart.

### Chart Trendlines

Enabling [Chart Trendlines](chart-trendlines.md) will slightly decrease performance of the Web Components chart.

### Axis Types

Usage of x-axis with DateTime support is not recommended if spaces between data points, based on the amount of time span between them, are not important. Instead, ordinal/category axis should be used because it is more efficient in the way it coalesces data. Also, ordinal/category axis doesn’t perform any sorting on the data like the time-based x-axis does.

**Note:** 
The [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) already uses ordinal/category axis so there is no need to change its properties.

This code snippet shows how to ordinal/category x-axis in the [`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) and [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) controls.

```html
<igc-financial-chart x-axis-mode="Ordinal"></igc-financial-chart>

<igc-data-chart>
    <igc-category-x-axis label="Time"></igc-category-x-axis>
</igc-data-chart>
```

### Axis Intervals

By default, Web Components charts will automatically calculate [`YAxisInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisInterval) based on range of your data. Therefore, you should avoid setting axis interval especially to a small value to prevent rendering of too many of axis gridlines and axis labels. Also, you might want to consider increasing [`YAxisInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisInterval) property to a larger value than the automatically calculated axis interval if you do not need many axis gridlines or axis labels.

**Note:** 
We do not recommend setting axis minor interval as it will decrease chart performance.

This code snippet shows how to set axis major interval in the Web Components charts.

```html
<igc-category-chart x-axis-interval="5" y-axis-interval="50"></igc-category-chart>

<igc-financial-chart x-axis-interval="5" y-axis-interval="50"></igc-financial-chart>

<igc-data-chart>
    <igc-category-x-axis name="xAxis" interval="5"></igc-category-x-axis>
    <igc-numeric-y-axis name="yAxis" interval="50"></igc-numeric-y-axis>
</igc-data-chart>
```

### Axis Scale

Setting the [`YAxisIsLogarithmic`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisIsLogarithmic) property to false is recommended for higher performance, as fewer operations are needed than calculating axis range and values of axis labels in logarithmic scale.

### Axis Labels Visibility

In the same way as Markers, axis labels are also expensive because they use templates and bindings, and may have their data context changed often. If labels are not used, they should be hidden or their interval should be increased to decrease number of axis labels.

This code snippet shows how to hide axis labels in the Web Components charts.

```html
<igc-category-chart x-axis-label-visibility="Collapsed" y-axis-label-visibility="Collapsed">
</igc-category-chart>

<igc-financial-chart x-axis-label-visibility="Collapsed" y-axis-label-visibility="Collapsed">
</igc-financial-chart>

<igc-data-chart>
    <igc-category-x-axis name="xAxis" label-visibility="Collapsed"></igc-category-x-axis>
    <igc-numeric-y-axis name="yAxis" label-visibility="Collapsed"></igc-numeric-y-axis>
</igc-data-chart>
```

### Axis Labels Abbreviation

Although, the Web Components charts support abbreviation of large numbers (e.g. 10,000+) displayed in axis labels when [`YAxisAbbreviateLargeNumbers`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisAbbreviateLargeNumbers) is set to true. We recommend, instead pre-processing large values in your data items by dividing them a common factor and then setting [`YAxisTitle`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisTitle) to a string that represents factor used used to abbreviate your data values.

This code snippet shows how to set axis title in the Web Components charts.

```html
<igc-category-chart y-axis-title="In millions of Dollars"></igc-category-chart>

<igc-financial-chart y-axis-title="In millions of Dollars"></igc-financial-chart>

<igc-data-chart>
    <igc-numeric-y-axis title="In millions of Dollars"></igc-numeric-y-axis>
</igc-data-chart>
```

### Axis Labels Extent

At runtime, the Web Components charts adjust extent of labels on y-axis based on a label with longest value. This might decrease chart performance if range of data changes and labels need to be updated often. Therefore, it is recommended to set label extent at design time in order to improve chart performance.

The following code snippet shows how to set a fixed extent for labels on y-axis in the Web Components charts.

```html
<igc-category-chart x-axis-label-extent="50" y-axis-label-extent="50"></igc-category-chart>

<igc-financial-chart x-axis-label-extent="50" y-axis-label-extent="50"></igc-financial-chart>

<igc-data-chart>
    <igc-category-x-axis name="xAxis" label-extent="50"></igc-category-x-axis>
    <igc-numeric-y-axis name="yAxis" label-extent="50"></igc-numeric-y-axis>
</igc-data-chart>
```

### Axis Other Visuals

Enabling additional axis visuals (e.g. axis titles) or changing their default values might decrease performance in the Web Components charts.

For example, changing these properties on the [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) or [`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) control:

| Axis Visual          | X-Axis Properties | Y-Axis Properties |
| ---------------------|-------------------|------------------- |
| All Axis Visual      | [`XAxisInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisInterval)<br />  [`XAxisMinorInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMinorInterval) | [`YAxisInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisInterval)<br />  [`YAxisMinorInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMinorInterval) |
| Axis Tickmarks       | [`XAxisTickStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisTickStroke) <br />  [`XAxisTickStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisTickStrokeThickness)<br />  [`XAxisTickLength`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisTickLength)<br />  | [`YAxisTickStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisTickStroke) <br />  [`YAxisTickStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisTickStrokeThickness)<br />  [`YAxisTickLength`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisTickLength)<br /> |
| Axis Major Gridlines | [`XAxisMajorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMajorStroke)<br />  [`XAxisMajorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMajorStrokeThickness)<br />   | [`YAxisMajorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMajorStroke)<br />  [`YAxisMajorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMajorStrokeThickness)<br /> |
| Axis Minor Gridlines | [`XAxisMinorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMinorStroke)<br />  [`XAxisMinorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMinorStrokeThickness)<br />   | [`YAxisMinorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMinorStroke)<br />  [`YAxisMinorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMinorStrokeThickness)<br /> |
| Axis Main Line       | [`XAxisStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisStroke)<br />  [`XAxisStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisStrokeThickness)<br />   | [`YAxisStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisStroke)<br />  [`YAxisStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisStrokeThickness)<br /> |
| Axis Titles          | [`XAxisTitle`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisTitle)<br />  [`XAxisTitleAngle`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisTitleAngle)<br />    | [`YAxisTitle`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisTitle)<br />  [`YAxisTitleAngle`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisTitleAngle)<br /> |
| Axis Strips          | [`XAxisStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisStrip)<br />   | [`YAxisStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisStrip)<br /> |

Or changing properties of an [`IgcAxis`](mcp:get_api_reference?platform=webcomponents&component=IgcAxisComponent) in the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) control:

| Axis Visual          | Axis Properties |
| ---------------------|------------------- |
| All Axis Visuals     | `Interval`, `MinorInterval` |
| Axis Tickmarks       | [`TickStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcAxisComponent&member=tickStroke) , [`TickStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcAxisComponent&member=tickStrokeThickness), [`TickLength`](mcp:get_api_reference?platform=webcomponents&component=IgcAxisComponent&member=tickLength) |
| Axis Major Gridlines | [`MajorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcAxisComponent&member=majorStroke), [`MajorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcAxisComponent&member=majorStrokeThickness) |
| Axis Minor Gridlines | [`MinorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcAxisComponent&member=minorStroke), [`MinorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcAxisComponent&member=minorStrokeThickness) |
| Axis Main Line       | [`Stroke`](mcp:get_api_reference?platform=webcomponents&component=IgcAxisComponent&member=stroke), [`StrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcAxisComponent&member=strokeThickness) |
| Axis Titles          | [`Title`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=chartTitle), `TitleAngle` |
| Axis Strips          | [`Strip`](mcp:get_api_reference?platform=webcomponents&component=IgcAxisComponent&member=strip) |

## Performance in Financial Chart

In addition to above performance guidelines, the Web Components [`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) control has the following unique features that affect performance.

### Y-Axis Mode

Setting the [`YAxisMode`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent&member=yAxisMode) option to `Numeric` is recommended for higher performance, as fewer operations are needed than using [`PercentChange`](mcp:get_api_reference?platform=webcomponents&component=IgcLineSeriesComponent&member=percentChange) mode.

### Chart Panes

Setting a lot of panes using [`IndicatorTypes`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent&member=indicatorTypes) and [`OverlayTypes`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent&member=overlayTypes) options, might decrease performance and it is recommended to use a few financial indicators and one financial overlay.

### Zoom Slider

Setting the [`ZoomSliderType`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent&member=zoomSliderType) option to [`None`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartVolumeType&member=None) will improve chart performance and enable more vertical space for other indicators and the volume pane.

### Volume Type

Setting the [`VolumeType`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent&member=volumeType) property can have the following impact on chart performance:

- [`None`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartVolumeType&member=None) - is the least expensive since it does not display the volume pane.
- [`Line`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartVolumeType&member=Line) - is more expensive volume type to render and it is recommended when rendering a lot of data points or when plotting a lot of data sources.
- [`Area`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartVolumeType&member=Area) - is more expensive to render than the [`Line`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartVolumeType&member=Line) volume type.
- [`Column`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartVolumeType&member=Column) - is more expensive to render than the [`Area`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartVolumeType&member=Area) volume type and it is recommended when rendering volume data of 1-3 stocks.

## Performance in Data Chart

In addition to the general performance guidelines, the Web Components [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) control has the following unique features that affect performance.

### Axes Collection

Adding too many axis to the [`Axes`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=Axes) collection of the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) control will decrease chart performance and we recommend [Sharing Axes](chart-axis-layouts.md#axis-sharing-example) between series.

### Series Collection

Also, adding a lot of series to the [`Series`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=Series) collection of the Web Components [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) control will add overhead to rendering because each series has its own rendering canvas. This is especially important if you have more than 10 series in the Data Chart. We recommend combining multiple data sources into flatten data source (see [Data Structure](#data-structure) section) and then using conditional styling feature of the following series:

| Slower Performance Scenario | Faster Scenario with Conditional Styling |
| ----------------------------|---------------------------------------- |
| 10+ of [`IgcLineSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcLineSeriesComponent)         | Single [`IgcScatterLineSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterLineSeriesComponent) |
| 20+ of [`IgcLineSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcLineSeriesComponent)         | Single [`IgcScatterPolylineSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterPolylineSeriesComponent) |
| 10+ of [`IgcScatterLineSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterLineSeriesComponent)  | Single [`IgcScatterPolylineSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterPolylineSeriesComponent) |
| 10+ of [`IgcPointSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcPointSeriesComponent)        | Single [`IgcScatterSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterSeriesComponent) |
| 20+ of [`IgcPointSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcPointSeriesComponent)        | Single [`IgcHighDensityScatterSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcHighDensityScatterSeriesComponent) |
| 20+ of [`IgcScatterSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterSeriesComponent)      | Single [`IgcHighDensityScatterSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcHighDensityScatterSeriesComponent) |
| 10+ of [`IgcAreaSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcAreaSeriesComponent)         | Single [`IgcScatterPolygonSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterPolygonSeriesComponent) |
| 10+ of [`IgcColumnSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnSeriesComponent)       | Single [`IgcScatterPolygonSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterPolygonSeriesComponent) |

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](../types/area-chart.md)
- [Bar Chart](../types/bar-chart.md)
- [Bubble Chart](../types/bubble-chart.md)
- [Column Chart](../types/column-chart.md)
- [Donut Chart](../types/donut-chart.md)
- [Pie Chart](../types/pie-chart.md)
- [Point Chart](../types/point-chart.md)
- [Polar Chart](../types/polar-chart.md)
- [Radial Chart](../types/radial-chart.md)
- [Shape Chart](../types/shape-chart.md)
- [Spline Chart](../types/spline-chart.md)
- [Scatter Chart](../types/scatter-chart.md)
- [Stacked Chart](../types/stacked-chart.md)
- [Step Chart](../types/shape-chart.md)
- [Stock Chart](../types/stock-chart.md)
- [Chart Animations](chart-animations.md)
- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)
- [Chart Markers](chart-markers.md)
- [Chart Overlays](chart-overlays.md)
- [Chart Trendlines](chart-trendlines.md)

## API References
[`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent)
[`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent)
[`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)
