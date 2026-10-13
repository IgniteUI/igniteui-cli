---
title: "Web Components Step Chart | Data Visualization | Infragistics"
description: Infragistics' Web Components Step Chart
keywords: "Web Components Charts, Step Chart, Step Area Chart, Step Line Chart, Infragistics"
license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "CategoryChartType", "Series", "CategoryChartType"]
namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for Web Components Step Chart belongs to a group of category charts that render as a collection of points connected by continuous vertical and horizontal lines."
_tocName: Step Chart
_premium: true
---
# Web Components Step Chart

The Ignite UI for Web Components Step Chart belongs to a group of category charts that render as a collection of points connected by continuous vertical and horizontal lines. Values are represented on the y-axis and categories are displayed on the x-axis. Step Chart emphasizes the amount of change over a period of time or compares multiple items.

## Web Components Step Area Chart

You can create Web Components Step Area Chart in the [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) control by setting [`CategoryChart.ChartType`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=chartType) property to [`StepArea`](mcp:get_api_reference?platform=webcomponents&component=CategoryChartType&member=StepArea) enum, as shown in the example below.

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

## Web Components Step Line Chart

The Web Components Step Line Chart is very similar to Step Area Chart, except that the area below lines are filled in.

You can create Step Line Chart in the [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) control by binding your data and setting [`CategoryChart.ChartType`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=chartType) property to [`StepLine`](mcp:get_api_reference?platform=webcomponents&component=CategoryChartType&member=StepLine) value, as shown in the example below.

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

## Web Components Step Chart Styling

If you need Step Charts with more features such as composite other series, you can configure the [`MarkerTypes`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=markerTypes), [`MarkerBrushes`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=markerBrushes), [`MarkerOutlines`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=markerOutlines), lines' [`Brushes`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=brushes), and lines' [`Outlines`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=outlines) properties on the [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) control as demonstrated below.

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

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](./area-chart.md)
- [Line Chart](./line-chart.md)
- [Chart Markers](../features/chart-markers.md)

## API References
[`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent)
