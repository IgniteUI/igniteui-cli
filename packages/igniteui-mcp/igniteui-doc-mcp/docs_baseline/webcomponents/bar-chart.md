---
title: Web Components Bar Chart and Graph | Ignite UI for Web Components
_description: Web Components Bar Chart is among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories. Try for FREE.
_keywords: Web Components Charts, Bar Chart, Bar Graph, Horizontal Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "BarSeries", "StackedBarSeries", "Stacked100BarSeries", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Bar Chart
_premium: true
---

# Web Components Bar Chart

The Ignite UI for Web Components Bar Chart, Bar Graph, or Horizontal Bar Chart, is among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by horizontal bars with equal heights but different lengths. This chart is ideal for showing variations in the value of an item over time. Data is represented using a collection of rectangles that extend from the left to right of the chart towards the values of data points. Bar Chart is very similar to [Column Chart](column-chart.md) except that Bar Chart renders with 90 degrees clockwise rotation and therefore it has horizontal orientation (left to right) while [Column Chart](column-chart.md) has vertical orientation (up and down)

## Web Components Bar Chart Example

You can create Web Components Bar Chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data sources to multiple [`IgcBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcbarseriescomponent.html), as shown in the example below:

```typescript
export class HighestGrossingMoviesItem {
    public constructor(init: Partial<HighestGrossingMoviesItem>) {
        Object.assign(this, init);
    }

    public franchise: string;
    public totalRevenue: number;
    public highestGrossing: number;

}
export class HighestGrossingMovies extends Array<HighestGrossingMoviesItem> {
    public constructor(items: Array<HighestGrossingMoviesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new HighestGrossingMoviesItem({ franchise: `Marvel Universe`, totalRevenue: 22.55, highestGrossing: 2.8 }),
                new HighestGrossingMoviesItem({ franchise: `Star Wars`, totalRevenue: 10.32, highestGrossing: 2.07 }),
                new HighestGrossingMoviesItem({ franchise: `Harry Potter`, totalRevenue: 9.19, highestGrossing: 1.34 }),
                // ... 3 more items
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

## Bar Chart Recommendations

### Are Web Components Bar Charts right for your project?

Web Components Bar Chart includes several variants based on your data or how you want to tell the correct story with your data. These include:

- Grouped Bar Chart
- Stacked Bar Chart
- Polar Bar Chart
- Stacked 100 Bar Chart

### Bar Chart Use Cases

There are several common use cases for choosing a Bar Chart:

- You need to show trends over time or a numeric value change in a category of data.
- You need to compare data values of 1 or more data series.
- You want to show a part-to-whole comparison.
- You want to show top or bottom percentage of categories.
- Analyzing multiple data points grouped in sub-categories (Stacked Bar).

These use cases are commonly used for the following scenarios:

- Sales Management.
- Inventory Management.
- Stock Charts.
- Any String Value Comparing a Numeric Value or Time-Series Value.

### Bar Chart Best Practices

- Start you numeric Axis at 0.
- Use a single color for the bars.
- Be sure the space separating each bar is 1/2 the width of the bar itself.
- Be sure ranking or comparing ordered categories (items) are sorted in increasing or decreasing order.
- Right-align category values on the Y-Axis (left side labels of chart) for readability.

### When Not to Use Bar Chart

- You have too much data so the Y-Axis can't fit in the space or is not legible.
- You need a detailed Time-Series analysis  - consider a [Line Chart](line-chart.md) with a Time-Series for this type of data.

### Bar Chart Data Structure

- The data source must be an array or a list of data items.
- The data source must contain at least one data item.
- The list must contain at least one data column (string or date time).
- The list must contain at least one numeric data column.

<div class="divider--half"></div>

## Web Components Bar Chart with Single Series

Bar Chart belongs to a group of Category Series and it is rendered using a collection of rectangles that extend from the left to right of the chart towards the values of data points. You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcbarseriescomponent.html), as shown in the example below:

```typescript
export class OnlineShoppingSearchesItem {
    public constructor(init: Partial<OnlineShoppingSearchesItem>) {
        Object.assign(this, init);
    }

    public x: number;
    public y: number;
    public label: string;
    public percent: number;
    public shop: string;

}
export class OnlineShoppingSearches extends Array<OnlineShoppingSearchesItem> {
    public constructor(items: Array<OnlineShoppingSearchesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OnlineShoppingSearchesItem({ x: 63, y: 0, label: `63%`, percent: 63, shop: `Amazon` }),
                new OnlineShoppingSearchesItem({ x: 48, y: 1, label: `48%`, percent: 48, shop: `Search Engines` }),
                new OnlineShoppingSearchesItem({ x: 33, y: 2, label: `33%`, percent: 33, shop: `Retailer Sites` }),
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

## Web Components Bar Chart with Multiple Series

The Bar Chart is able to render multiple bars per category for comparison purposes. In this example, the Bar Chart is comparing box office revenue amongst popular movie franchises. You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to multiple [`IgcBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcbarseriescomponent.html), as shown in the example below:

```typescript
export class HighestGrossingMoviesItem {
    public constructor(init: Partial<HighestGrossingMoviesItem>) {
        Object.assign(this, init);
    }

    public franchise: string;
    public totalRevenue: number;
    public highestGrossing: number;

}
export class HighestGrossingMovies extends Array<HighestGrossingMoviesItem> {
    public constructor(items: Array<HighestGrossingMoviesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new HighestGrossingMoviesItem({ franchise: `Marvel Universe`, totalRevenue: 22.55, highestGrossing: 2.8 }),
                new HighestGrossingMoviesItem({ franchise: `Star Wars`, totalRevenue: 10.32, highestGrossing: 2.07 }),
                new HighestGrossingMoviesItem({ franchise: `Harry Potter`, totalRevenue: 9.19, highestGrossing: 1.34 }),
                // ... 3 more items
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

## Web Components Bar Chart Styling

The Bar Chart can be styled, and allows for the ability to use [annotation values](../features/chart-annotations.md) for each bar, for example, to demonstrate percent comparisons. You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcbarseriescomponent.html) and adding a [`IgcCalloutLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html), as shown in the example below:

```typescript
export class OnlineShoppingSearchesItem {
    public constructor(init: Partial<OnlineShoppingSearchesItem>) {
        Object.assign(this, init);
    }

    public x: number;
    public y: number;
    public label: string;
    public percent: number;
    public shop: string;

}
export class OnlineShoppingSearches extends Array<OnlineShoppingSearchesItem> {
    public constructor(items: Array<OnlineShoppingSearchesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OnlineShoppingSearchesItem({ x: 63, y: 0, label: `63%`, percent: 63, shop: `Amazon` }),
                new OnlineShoppingSearchesItem({ x: 48, y: 1, label: `48%`, percent: 48, shop: `Search Engines` }),
                new OnlineShoppingSearchesItem({ x: 33, y: 2, label: `33%`, percent: 33, shop: `Retailer Sites` }),
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

## Web Components Stacked Bar Chart

A Stacked Bar Chart, or Stacked Bar Graph, is a type of category chart that is used to compare the composition of different categories of data by displaying different sized fragments in the horizontal bars of the chart. The length of each bar, or stack of fragments, is proportionate to its overall value.

The Stacked Bar Chart differs from the Bar Chart in that the data points representing your data are stacked next to each other horizontally to visually group your data. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the X-Axis, and all negative values are grouped on the negative side of the X-Axis.

You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedbarseriescomponent.html), as shown in the example below:

```typescript
export class EnergyRenewableConsumptionItem {
    public constructor(init: Partial<EnergyRenewableConsumptionItem>) {
        Object.assign(this, init);
    }

    public location: string;
    public year: number;
    public hydro: number;
    public solar: number;
    public wind: number;
    public other: number;

}
export class EnergyRenewableConsumption extends Array<EnergyRenewableConsumptionItem> {
    public constructor(items: Array<EnergyRenewableConsumptionItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyRenewableConsumptionItem({ location: `China`, year: 2019, hydro: 1269.5, solar: 223, wind: 405.2, other: 102.8 }),
                new EnergyRenewableConsumptionItem({ location: `Europe`, year: 2019, hydro: 632.54, solar: 154, wind: 461.3, other: 220.3 }),
                new EnergyRenewableConsumptionItem({ location: `USA`, year: 2019, hydro: 271.16, solar: 108, wind: 303.4, other: 78.34 }),
                // ... 2 more items
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

## Web Components Stacked 100% Bar Chart

The Web Components Stacked 100% Bar Chart is identical to the Web Components Stacked Bar Chart in all aspects except in their treatment of the values on X-Axis (bottom labels of the chart). Instead of presenting a direct representation of the data, the stacked 100 bar chart presents the data in terms of percent of the sum of all values in a data point.

You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100barseriescomponent.html), as shown in the example below:

```typescript
export class EnergyRenewableConsumptionItem {
    public constructor(init: Partial<EnergyRenewableConsumptionItem>) {
        Object.assign(this, init);
    }

    public location: string;
    public year: number;
    public hydro: number;
    public solar: number;
    public wind: number;
    public other: number;

}
export class EnergyRenewableConsumption extends Array<EnergyRenewableConsumptionItem> {
    public constructor(items: Array<EnergyRenewableConsumptionItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyRenewableConsumptionItem({ location: `China`, year: 2019, hydro: 1269.5, solar: 223, wind: 405.2, other: 102.8 }),
                new EnergyRenewableConsumptionItem({ location: `Europe`, year: 2019, hydro: 632.54, solar: 154, wind: 461.3, other: 220.3 }),
                new EnergyRenewableConsumptionItem({ location: `USA`, year: 2019, hydro: 271.16, solar: 108, wind: 303.4, other: 78.34 }),
                // ... 2 more items
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
- [Line Chart](line-chart.md)
- [Spline Chart](spline-chart.md)
- [Stacked Chart](stacked-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html)
- `ItemsSource`
- [`IgcBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcbarseriescomponent.html)
- [`IgcCalloutLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html)
- [`IgcStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedbarseriescomponent.html)
- [`IgcStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100barseriescomponent.html)
- [`IgcStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedbarseriescomponent.html)
