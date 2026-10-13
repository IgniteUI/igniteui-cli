---
title: "Web Components Radial Chart | Data Visualization | Infragistics"
description: Infragistics' Web Components Radial Chart
keywords: "Web Components Charts, Radial Chart, Infragistics"
license: commercial
mentionedTypes: ["DataChart", "RadialLineSeries", "Series"]
namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for Web Components Radial Chart takes data and render it as collection of data points wrapped around a circle (rather than stretching along a horizontal line)."
_tocName: Radial Chart
_premium: true
---
# Web Components Radial Chart

The Ignite UI for Web Components Radial Chart takes data and render it as collection of data points wrapped around a circle (rather than stretching along a horizontal line). Radial Chart is also mapping a list of categories from the minimum to the maximum of the extent of the chart, and support the category grouping mechanisms.

## Web Components Radial Area Chart

The Web Components Radial Area Chart has a shape of a filled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the [Area Chart](area-chart.md), but wraps the data points around a circular axis rather than stretching them horizontally. You can create this type of chart in [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) control by binding your data to [`IgcRadialAreaSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcRadialAreaSeriesComponent), as shown in the example below.

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

## Web Components Radial Column Chart

The Radial Column Chart is visualized by using a collection of rectangles that extend from the center of the chart toward the locations of data points. This utilizes the same concepts of data plotting as the [Column Chart](column-chart.md), but wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) control by binding your data to a [`IgcRadialColumnSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcRadialColumnSeriesComponent), as shown in the example below:

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

## Web Components Radial Line Chart

The Web Components Radial Line Chart has renders as a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the [Line Chart](line-chart.md), but wraps the data points around a circular axis rather than stretching them horizontally. You can create this type of chart in the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) control by binding your data to [`IgcRadialLineSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcRadialLineSeriesComponent), as shown in the example below:

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

## Web Components Radial Pie Chart

The Radial Pie Chart uses pie slices that extend from the center of chart towards locations of data points. This chart type takes concepts of categorizing multiple series of data points and wraps them around a circular axis rather than stretching data points along a horizontal line. You can create this type of chart in the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) control by binding your data to a [`IgcRadialPieSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcRadialPieSeriesComponent), as shown in the example below:

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

## Web Components Radial Chart Styling

Once our radial chart is created, we may want to make some further styling customizations such as a change of the line colors, marker types, or outline colors of those markers. This example demonstrates how to customize styling in [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) control.

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

## Web Components Radial Chart Settings

In addition, the labels can be configured to appear near or wide from the chart. This can be configured with the [`LabelMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryAngleAxisComponent&member=labelMode) property for the [`IgcCategoryAngleAxis`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryAngleAxisComponent).

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Column Chart](column-chart.md)
- [Donut Chart](donut-chart.md)
- [Line Chart](line-chart.md)
- [Pie Chart](pie-chart.md)

## API References

[`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)<br />
[`IgcRadialAreaSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcRadialAreaSeriesComponent)<br />
[`IgcRadialColumnSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcRadialColumnSeriesComponent)<br />
[`IgcRadialLineSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcRadialLineSeriesComponent)<br />
[`IgcRadialPieSeries`](mcp:get_api_reference?platform=webcomponents&component=IgcRadialPieSeriesComponent)<br />
[`IgcCategoryAngleAxis`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryAngleAxisComponent)<br />
[`IgcNumericRadiusAxis`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericRadiusAxisComponent)<br />
