---
title: Web Components Data Aggregations | Data Visualization | Infragistics
description: Infragistics' Web Components Data Aggregations
keywords: Web Components Charts, Markers, Infragistics
license: commercial

namespace: Infragistics.Controls.Charts
llms:
  description: "In the Ignite UI for Web Components CategoryChart control Data Aggregations feature allows you to group data in the chart by unique values on the XAxis and then sort those groups."
_tocName: Chart Data Aggregations
_premium: true
---
# Web Components Data Aggregations

In the Ignite UI for Web Components [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) control Data Aggregations feature allows you to group data in the chart by unique values on the [`XAxis`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMemberPath) and then sort those groups. You may then apply summaries which will be reflected by the range of the [`YAxis`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMemberPath) and will be displayed in the tooltip when hovering the series.

## Web Components Data Aggregations Example

The following example depicts a [Column Chart](../types/column-chart.md) that groups by the Country member of the [`XAxis`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMemberPath) and can be changed to other properties within each data item such as Product, MonthName, and Year to aggregate the sales data. Also a summary and sort option is available to get a desirable order for the grouped property.

Note, the abbreviated functions found within the dropdowns for [`InitialSummaries`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=initialSummaries) and [`GroupSorts`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=groupSorts) have be applied as shown to get a correct result based on the property you assign. eg. Sum(sales) as Sales | Sales Desc

```typescript
export class SalesDataItem {
    public constructor(init: Partial<SalesDataItem>) {
        Object.assign(this, init);
    }

    public Country: string;
    public Product: string;
    public UnitsSold: number;
    public ManufacturingPrice: number;
    public SalePrice: number;
    public GrossSales: number;
    public Discounts: number;
    public Sales: number;
    public COGS: number;
    public Profit: number;
    public Date: string;
    public Month: string;
    public Year: string;

}
export class SalesData extends Array<SalesDataItem> {
    public constructor(items: Array<SalesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SalesDataItem({ Country: `UK`, Product: `Vermont`, UnitsSold: 501, ManufacturingPrice: 15, SalePrice: 23, GrossSales: 26440, Discounts: 0, Sales: 26440, COGS: 16185, Profit: 11255, Date: `1/1/20`, Month: `January`, Year: `2020` }),
                new SalesDataItem({ Country: `Japan`, Product: `Kensington`, UnitsSold: 1372, ManufacturingPrice: 3, SalePrice: 20, GrossSales: 27440, Discounts: 0, Sales: 27440, COGS: 16185, Profit: 11255, Date: `1/1/20`, Month: `January`, Year: `2020` }),
                new SalesDataItem({ Country: `India`, Product: `Kensington`, UnitsSold: 2762, ManufacturingPrice: 3, SalePrice: 20, GrossSales: 55240, Discounts: 0, Sales: 55240, COGS: 13210, Profit: 42030, Date: `1/1/20`, Month: `January`, Year: `2020` }),
                // ... 1039 more items
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

```html
<igc-category-chart
     id="chart"
     initial-groups="country"
     initial-summaries="Sum(sales) as Sales"
     group-sorts="Sales Desc">
</igc-category-chart>
```

## API References
[`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent)
