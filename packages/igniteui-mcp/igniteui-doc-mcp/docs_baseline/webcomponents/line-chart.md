---
title: Web Components Line Chart and Graph | Ignite UI for Web Components
_description: The Web Components Line chart is capable of handling high volumes of data, ranging into millions of data points, and updating them every few milliseconds. Try for FREE.
_keywords: Web Components Charts, Line Chart, Line Graph, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "XamDataChart", "Legend", "PolarLineSeries", "RadialLineSeries", "StackedLineSeries", "Stacked100LineSeries", "Series", "CategoryChartType"]
namespace: Infragistics.Controls.Charts
_tocName: Line Chart
_premium: true
---

# Web Components Line Chart

The Ignite UI for Web Components Line Chart or Line Graph is a type of category charts that show the continuous data values represented by points connected by straight line segments of one or more quantities over a period of time. It’s often used to show trends and perform comparative analysis. The Y-Axis (labels on left side) show a numeric value, while the X-Axis (bottom labels) show a time-series or comparison category. You can include one or more data sets to compare, which would render as multiple lines in the chart.

## Web Components Line Chart Example

You can create the Web Components Line Chart in the [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) control by binding your data to `ItemsSource` property and setting [`chartType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.categorycharttype.html#Line) enum, as shown in the example below.

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Line Chart Recommendations

### Are Web Components Line Charts right for your project?

- Different than an [area chart](area-chart.md), the line chart does not fill the area between the X-Axis (bottom axis) and the line.
- The Web Components line chart is identical to the Web Components [spline chart](spline-chart.md) in all aspects except that the line connecting data points does not have spline interpolation and smoothing for improved presentation of data.

A Line Chart includes several variants based on your data or how you want to tell the correct story with your data. These include:

- Layered Line Chart
- Stacked Line Chart
- Stepped Line Chart
- Polar Line Chart
- Stacked 100 Line Chart

### Line Chart Use Cases

There are several common use cases for choosing a Line Chart:

- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming and Drill-down.
- Need to compare the trends over time.
- Want to show the difference between 2 or more data series.
- Want to show cumulative part-to-whole comparisons of distinct categories.
- Need to show data trends for one or more categories for comparative analysis.
- Need to visualize detailed time-series data.

### Line Chart Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data  from left to right.
- Use visual attributes like solid lines to show a series of data.

### When Not to Use Line Chart

- You have many (more than 7 or 10) series of data. Your goal is to ensure the chart is readable.
- Time-series data has similar values (data over the same period), it makes overlapped lines impossible to differentiate.

### Line Chart Data Structure

- The data source must be an array or a list of data items (for single series).
- The data source must be an array of arrays or a list of lists (for multiple series).
- The data source must contain at least one data item.
- All data items must contain at least one data column (string or date time).
- All data items must contain at least one numeric data column.

## Web Components Line Chart with Single Series

The Web Components Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced since 2009 over a ten-year period, as we have shown in the example below.

You can create this type of chart in the [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.categorycharttype.html#Line), as shown in the example below:

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Web Components Line Chart with Multiple Series

Since the Web Components Line Chart allows you to combine multiple series and compare or see how they change over time, let’s see how easy it is to achieve this. All we need to do is bind to a data source containing the data for China and the USA, and the line chart will automatically update to fit the additional data.

You can create this type of chart in the [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.categorycharttype.html#Line), as shown in the example below:

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Web Components Line Chart with Live Data

The Web Components Line chart is capable of handling high volumes of data, ranging into millions of data points, and updating them every few milliseconds as demonstrated in the following demo.

In this example, we are streaming live data into the Web Components Line Chart at an interval of your choosing. You can set the data points from 5,000 to 1 million and update the chart to optimize the scale based on the device you are rendering the chart on.

You can create this type of chart in the [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.categorycharttype.html#Line), as shown in the example below:

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

<div class="divider--half"></div>

## Web Components Styling Line Chart

Once our chart is set up, we may want to make some further styling customizations such as change the line colors, change the legend font family, and/or increase the size of the axis labels to make it easier to read.

You can create this type of chart in the [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.categorycharttype.html#Line), as shown in the example below:

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

You can also create a dashed line within the [`IgcLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igclineseriescomponent.html) by using the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) and setting the [`dashArray`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriescomponent.html#dashArray) property on the series. This property takes an array of numbers that will describe the length of the resulting dashes in the line.

The following example demonstrates usage of the [`dashArray`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriescomponent.html#dashArray) in a [`IgcLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igclineseriescomponent.html) in [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html):

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem(
                {
                    year: `2009`,
                    europe: 34,
                    china: 21,
                    america: 19
                }),
                new CountryRenewableElectricityItem(
                {
                    year: `2010`,
                    europe: 43,
                    china: 26,
                    america: 24
                }),
                new CountryRenewableElectricityItem(
                {
                    year: `2011`,
                    europe: 66,
                    china: 29,
                    america: 28
                }),
                // ... 9 more items
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Advanced Types of Line Charts

The following sections explain more advanced types of Web Components Line Charts that can be created using the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control instead of [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) control with simplified API.

## Web Components Stacked Line Chart

The Stacked Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions. You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStackedLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedlineseriescomponent.html), as shown in the example below:

```typescript
export class ContinentsBirthRateItem {
    public constructor(init: Partial<ContinentsBirthRateItem>) {
        Object.assign(this, init);
    }

    public Year: string;
    public Asia: number;
    public Africa: number;
    public Europe: number;
    public NorthAmerica: number;
    public SouthAmerica: number;
    public Oceania: number;

}
export class ContinentsBirthRate extends Array<ContinentsBirthRateItem> {
    public constructor(items: Array<ContinentsBirthRateItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new ContinentsBirthRateItem({ Year: `1950`, Asia: 62, Africa: 13, Europe: 10, NorthAmerica: 4, SouthAmerica: 8, Oceania: 1 }),
                new ContinentsBirthRateItem({ Year: `1960`, Asia: 68, Africa: 12, Europe: 15, NorthAmerica: 4, SouthAmerica: 9, Oceania: 2 }),
                new ContinentsBirthRateItem({ Year: `1970`, Asia: 80, Africa: 17, Europe: 11, NorthAmerica: 3, SouthAmerica: 9, Oceania: 1 }),
                // ... 5 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Web Components Stacked 100% Line Chart

The Stacked 100% Line Chart is identical to the Stacked Line Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Line Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStacked100LineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100lineseriescomponent.html), as shown in the example below:

```typescript
export class ContinentsBirthRateItem {
    public constructor(init: Partial<ContinentsBirthRateItem>) {
        Object.assign(this, init);
    }

    public Year: string;
    public Asia: number;
    public Africa: number;
    public Europe: number;
    public NorthAmerica: number;
    public SouthAmerica: number;
    public Oceania: number;

}
export class ContinentsBirthRate extends Array<ContinentsBirthRateItem> {
    public constructor(items: Array<ContinentsBirthRateItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new ContinentsBirthRateItem({ Year: `1950`, Asia: 62, Africa: 13, Europe: 10, NorthAmerica: 4, SouthAmerica: 8, Oceania: 1 }),
                new ContinentsBirthRateItem({ Year: `1960`, Asia: 68, Africa: 12, Europe: 15, NorthAmerica: 4, SouthAmerica: 9, Oceania: 2 }),
                new ContinentsBirthRateItem({ Year: `1970`, Asia: 80, Africa: 17, Europe: 11, NorthAmerica: 3, SouthAmerica: 9, Oceania: 1 }),
                // ... 5 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Web Components Radial Line Chart

The Radial Line Chart belongs to a group of radial charts and has a shape of an unfilled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the Line Chart, but wraps the data points around a circular axis rather than stretching them horizontally.

You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcRadialLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcradiallineseriescomponent.html), as shown in the example below:

```typescript
export class FootballPlayerStatsItem {
    public constructor(init: Partial<FootballPlayerStatsItem>) {
        Object.assign(this, init);
    }

    public attribute: string;
    public ronaldo: number;
    public messi: number;

}
export class FootballPlayerStats extends Array<FootballPlayerStatsItem> {
    public constructor(items: Array<FootballPlayerStatsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new FootballPlayerStatsItem({ attribute: `Dribbling`, ronaldo: 8, messi: 10 }),
                new FootballPlayerStatsItem({ attribute: `Passing`, ronaldo: 8, messi: 10 }),
                new FootballPlayerStatsItem({ attribute: `Finishing`, ronaldo: 10, messi: 10 }),
                // ... 5 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Web Components Polar Line Chart

The Polar Line Chart belongs to a group of polar charts and is rendered using a collection of straight lines connecting data points in polar (angle/radius) coordinate system. Polar Line Charts use the same concepts of data plotting as the [Scatter Line Chart](scatter-chart.md) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcPolarLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcpolarlineseriescomponent.html), as shown in the example below:

```typescript
export class BoatSailingDataItem {
    public constructor(init: Partial<BoatSailingDataItem>) {
        Object.assign(this, init);
    }

    public direction: number;
    public boatSpeed: number;
    public windSpeed: number;

}
export class BoatSailingData extends Array<BoatSailingDataItem> {
    public constructor(items: Array<BoatSailingDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new BoatSailingDataItem({ direction: 0, boatSpeed: 70, windSpeed: 90 }),
                new BoatSailingDataItem({ direction: 45, boatSpeed: 35, windSpeed: 65 }),
                new BoatSailingDataItem({ direction: 90, boatSpeed: 25, windSpeed: 45 }),
                // ... 6 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Column Chart](column-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)
- [Spline Chart](spline-chart.md)
- [Stacked Chart](stacked-chart.md)

## API References

The following table lists API members mentioned in the above sections:

| Chart Type        | Control Name       | API Members |
| ------------------|--------------------|----------------------- |
| Line              | [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html)    | [`chartType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#chartType) = [`Line`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.categorycharttype.html#Line) |
| Polar Line        | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html)     | [`IgcPolarLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcpolarlineseriescomponent.html) |
| Radial Line       | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html)     | [`IgcRadialLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcradiallineseriescomponent.html) |
| Stacked Line      | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html)     | [`IgcStackedLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedlineseriescomponent.html) |
| Stacked 100% Line | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html)     | [`IgcStacked100LineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100lineseriescomponent.html) |
