---
title: "Web Components Chart Tooltips | Data Visualization | Infragistics"
description: Infragistics' Web Components Chart Tooltips
keywords: "Web Components Charts, Tooltips, Infragistics"
license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "ToolTipType"]
namespace: Infragistics.Controls.Charts
llms:
  description: "In Web Components charts, tooltips provide details about bound data and they are rendered in popups when the end-user hovers over data points."
_tocName: Chart Tooltips
_premium: true
---
# Web Components Chart Tooltips

In Web Components charts, tooltips provide details about bound data and they are rendered in popups when the end-user hovers over data points. Tooltips are supported by the [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent), [`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent), and [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) controls.

## Web Components Chart Tooltip Types

Web Components Chart provide three types of tooltips that you can with tooltips enabled by setting the [`ToolTipType`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=toolTipType) property. The following example shows the [Column Chart](../types/column-chart.md) with a combo-box that you can use to change type of tooltips.

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

The [`ToolTipType`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=toolTipType) property is configurable and can be set to one of the following options:

| Property Value     | Description  |
| -------------------|----------------|
| [`Default`](mcp:get_api_reference?platform=webcomponents&component=ToolTipType&member=Default)  Tooltip | Display a tooltip for a single item when the pointer is positioned over it.  |
| [`Data`](mcp:get_api_reference?platform=webcomponents&component=ToolTipType&member=Data) Tooltip | Display the data tooltips for all series in the chart.  |
| [`Item`](mcp:get_api_reference?platform=webcomponents&component=ToolTipType&member=Item)  Tooltip    | Display a tooltip for each data item in the category that the pointer is positioned over.  |
| [`Category`](mcp:get_api_reference?platform=webcomponents&component=ToolTipType&member=Category) Tooltip | Display a grouped tooltip for all data points in the category that the pointer is positioned over.  |

## Web Components Chart Tooltip Template

If none of built-in types of tooltips are matching your requirements, you can create your own tooltips to display and style series title, data values, and axis values. The following sections demonstrate how to do this in different types of Web Components charts.

## Custom Tooltips in Category Chart

This example shows how to create custom tooltips for all series in Web Components [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) control. Note that you can also apply the same logic to custom tooltips in Web Components [`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) control.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Custom Tooltips in Data Chart

This example shows how to create custom tooltips for each series in Web Components Data Chart control.

```typescript
export class SampleCategoryData {

    public static create(): any[] {
        const data: any[] = [];
        data.push({ "Country": "Canada", "Coal": 400000000, "Oil": 100000000, "Gas": 175000000, "Nuclear": 225000000, "Hydro": 350000000 });
        data.push({ "Country": "China", "Coal": 925000000, "Oil": 200000000, "Gas": 350000000, "Nuclear": 400000000, "Hydro": 625000000 });
        data.push({ "Country": "Russia", "Coal": 550000000, "Oil": 200000000, "Gas": 250000000, "Nuclear": 475000000, "Hydro": 425000000 });
        data.push({ "Country": "Australia", "Coal": 450000000, "Oil": 100000000, "Gas": 150000000, "Nuclear": 175000000, "Hydro": 350000000 });
        data.push({ "Country": "United States", "Coal": 800000000, "Oil": 250000000, "Gas": 475000000, "Nuclear": 575000000, "Hydro": 750000000 });
        data.push({ "Country": "France", "Coal": 375000000, "Oil": 150000000, "Gas": 350000000, "Nuclear": 275000000, "Hydro": 325000000 });
        return data;
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Markers](chart-markers.md)

## API References
[`IgcDataToolTipLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcDataToolTipLayerComponent)
[`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent)
[`IgcFinancialChart`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent)
[`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)
