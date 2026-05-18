---
title: Web Components Stacked Chart | Data Visualization | Infragistics
_description: Infragistics' Web Components Stacked Chart
_keywords: Web Components Charts, Stacked Chart, Stacked 100% Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "StackedAreaSeries", "Stacked100AreaSeries", "StackedBarSeries", "Stacked100BarSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "StackedLineSeries", "Stacked100LineSeries", "StackedSplineSeries", "Stacked100SplineSeries", "StackedSplineAreaSeries", "Stacked100SplineAreaSeries", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Stacked Chart
_premium: true
---

# Web Components Stacked Chart

The Ignite UI for Web Components Stacked Chart belongs to a special group of charts that render multiple values of data items as stacked area/polygons, bars, columns, lines, or splines. Standard Stacked Charts render actual values of data items while Stacked 100% Charts render values as percentage of total values.

## Web Components Stacked Chart Types

The following example, you can use the drop-down to switch between all of the different types stacked charts available in the Web Components [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

The following sections demonstrate individual types of Ignite UI for Web Components Stacked Charts.

## Web Components Stacked Area Chart

Stacked Area Charts are rendered using a collection of points connected by line segments, with the area below the line filled in and stacked on top of each other. Stacked Area Charts follow all the same requirements as [Area Chart](area-chart.md), with the only difference being that visually, the shaded areas are stacked on top of each other.

You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStackedAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedareaseriescomponent.html), as shown in the example below.

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

## Web Components Stacked 100 Area Chart

Sometimes the series represent part of a whole being changed over time e.g. a country's energy consumption related to the sources from which it is produced. In such cases representing all stacked elements equally may be a better idea.

You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStacked100AreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100areaseriescomponent.html), as shown in the example below.

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

## Web Components Stacked Bar Chart

A Stacked Bar Chart, or Stacked Bar Graph, is a type of category chart that is used to compare the composition of different categories of data by displaying different sized fragments in the horizontal bars of the chart. The length of each bar, or stack of fragments, is proportionate to its overall value.

The Stacked Bar Chart differs from the [Bar Chart](bar-chart.md) in that the data points representing your data are stacked next to each other horizontally to visually group your data. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the X-Axis, and all negative values are grouped on the negative side of the X-Axis.

In this example of an Stacked Bar Chart, we have a Numeric X Axis (bottom labels of the chart) and a Category Y Axis (left labels of the chart). You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedbarseriescomponent.html), as shown in the example below.

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

The Web Components Stacked 100% Bar Chart is identical to the Web Components stacked bar chart in all aspects except in their treatment of the values on X-Axis (bottom labels of the chart). Instead of presenting a direct representation of the data, the stacked 100% bar chart presents the data in terms of percent of the sum of all values in a data point.

In this example of a Stacked 100% Bar Chart, the Energy Product values are shown as a 100% value of all of the data in the fragments of the horizontal bars. You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100barseriescomponent.html), as shown in the example below.

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

## Web Components Stacked Column Chart

The Stacked Column Chart is identical to the [Column Chart](column-chart.md) in all aspects, except the series are represented on top of one another rather than to the side. The Stacked Column Chart is used to show comparing results between series. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the Y-Axis, and all negative values are grouped on the negative side of the Y-Axis. The Stacked Column Chart uses the same concepts of data plotting as the Stacked Bar Chart but data points are stacked along vertical line (Y-Axis) rather than along horizontal line (X-Axis).

You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStackedColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedcolumnseriescomponent.html), as shown in the example below.

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

## Web Components Stacked 100% Column Chart

The Stacked 100% Column Chart is identical to the Stacked Column Chart in all aspects except in their treatment of the values on Y-Axis. Instead of presenting a direct representation of the data, the Stacked 100% Column Chart presents the data in terms of percent of the sum of all values in a data point.

The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers. You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStacked100ColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100columnseriescomponent.html), as shown in the example below.

```typescript
export class OnlineTrafficByDeviceItem {
    public constructor(init: Partial<OnlineTrafficByDeviceItem>) {
        Object.assign(this, init);
    }

    public category: string;
    public desktop: number;
    public mobile: number;
    public tablet: number;

}
export class OnlineTrafficByDevice extends Array<OnlineTrafficByDeviceItem> {
    public constructor(items: Array<OnlineTrafficByDeviceItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OnlineTrafficByDeviceItem({ category: `Apparel`, desktop: 27, mobile: 66, tablet: 7 }),
                new OnlineTrafficByDeviceItem({ category: `Beauty`, desktop: 29, mobile: 66, tablet: 5 }),
                new OnlineTrafficByDeviceItem({ category: `Travel`, desktop: 41, mobile: 51, tablet: 8 }),
                // ... 4 more items
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

## Web Components Stacked Spline Area Chart

Stacked Spline Area Charts are rendered using a collection of points connected by curved spline segments, with the area below the curved spline fill in and stacked on top of each other. Stacked Spline Area Charts follow all of the same requirements as [Area Chart](area-chart.md), with the only difference being that the visually shaded areas are stacked on top of each other.

You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStackedSplineAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedsplineareaseriescomponent.html), as shown in the example below.

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

## Web Components Stacked 100% Spline Area Chart

The Stacked 100% Spline Area Chart is identical to the Stacked Spline Area Chart in all aspects except for the treatment of the values on the y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Spline Area Chart presents the data in terms of a percent of the sum of all values in a particular data point. Sometimes the chart represents part of a whole being changed over time. For example, a country's energy consumption related to the sources from which it is produced. In such cases, representing all stacked elements equally may be a better idea.

You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStacked100SplineAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100splineareaseriescomponent.html), as shown in the example below.

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

## Web Components Stacked Spline Chart

The Stacked Spline Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions. You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStackedSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedsplineseriescomponent.html), as shown in the example below.

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

## Web Components Stacked 100% Spline Chart

The Stacked 100% Spline Chart is identical to the Stacked Spline Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Spline Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcStacked100SplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100splineseriescomponent.html).

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

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Bar Chart](bar-chart.md)
- [Column Chart](column-chart.md)
- [Line Chart](line-chart.md)
- [Spline Chart](spline-chart.md)

## API References

The following table lists API members mentioned in the above sections:

| Chart Type               | Control Name   | API Members |
| -------------------------|----------------|-------------------------------- |
| Stacked Area             | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) | [`IgcStackedAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedareaseriescomponent.html) |
| Stacked Bar              | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) | [`IgcStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedbarseriescomponent.html) |
| Stacked Column           | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) | [`IgcStackedColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedcolumnseriescomponent.html) |
| Stacked Line             | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) | [`IgcStackedLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedlineseriescomponent.html) |
| Stacked Spline           | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) | [`IgcStackedSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedsplineseriescomponent.html) |
| Stacked Spline Area      | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) | [`IgcStackedSplineAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedsplineareaseriescomponent.html) |
| Stacked 100% Area        | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) | [`IgcStacked100AreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100areaseriescomponent.html) |
| Stacked 100% Bar         | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) | [`IgcStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100barseriescomponent.html) |
| Stacked 100% Column      | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) | [`IgcStacked100ColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100columnseriescomponent.html) |
| Stacked 100% Line        | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) | [`IgcStacked100LineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100lineseriescomponent.html) |
| Stacked 100% Spline      | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) | [`IgcStacked100SplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100splineseriescomponent.html) |
| Stacked 100% Spline Area | [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) | [`IgcStacked100SplineAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100splineareaseriescomponent.html) |
