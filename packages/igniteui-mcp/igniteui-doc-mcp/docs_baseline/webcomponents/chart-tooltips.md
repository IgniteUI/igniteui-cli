---
title: Web Components Chart Tooltips | Data Visualization | Infragistics
_description: Infragistics' Web Components Chart Tooltips
_keywords: Web Components Charts, Tooltips, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "ToolTipType"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Tooltips
_premium: true
---

# Web Components Chart Tooltips

In Web Components charts, tooltips provide details about bound data and they are rendered in popups when the end-user hovers over data points. Tooltips are supported by the [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html), [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html), and [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) controls.

## Web Components Chart Tooltip Types

Web Components Chart provide three types of tooltips that you can with tooltips enabled by setting the [`toolTipType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#toolTipType) property. The following example shows the [Column Chart](../types/column-chart.md) with a combo-box that you can use to change type of tooltips.

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

The [`toolTipType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#toolTipType) property is configurable and can be set to one of the following options:

| Property Value     | Description  |
| -------------------|----------------|
| [`Default`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.tooltiptype.html#Default)  Tooltip | Display a tooltip for a single item when the pointer is positioned over it. |
| [`Data`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.tooltiptype.html#Data) Tooltip | Display the data tooltips for all series in the chart. |
| [`Item`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.tooltiptype.html#Item)  Tooltip    | Display a tooltip for each data item in the category that the pointer is positioned over. |
| [`Category`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.tooltiptype.html#Category) Tooltip | Display a grouped tooltip for all data points in the category that the pointer is positioned over. |

<div class="divider--half"></div>

## Web Components Chart Tooltip Template

If none of built-in types of tooltips are matching your requirements, you can create your own tooltips to display and style series title, data values, and axis values. The following sections demonstrate how to do this in different types of Web Components charts.

## Custom Tooltips in Category Chart

This example shows how to create custom tooltips for all series in Web Components [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) control. Note that you can also apply the same logic to custom tooltips in Web Components [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html) control.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

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

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Markers](chart-markers.md)

## API References

The [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) and [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html) components share the following API properties:

- [`toolTipType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#toolTipType)

In the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) component, you can use the following API components and properties:

- [`IgcDataToolTipLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatatooltiplayercomponent.html)
- [`IgcItemToolTipLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcitemtooltiplayercomponent.html)
- [`IgcCategoryToolTipLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorytooltiplayercomponent.html)
- `ShowDefaultToolTip`
