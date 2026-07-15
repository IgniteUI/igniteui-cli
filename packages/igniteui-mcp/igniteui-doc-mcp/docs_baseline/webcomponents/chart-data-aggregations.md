---
title: Web Components Data Aggregations | Data Visualization | Infragistics
_description: Infragistics' Web Components Data Aggregations
_keywords: Web Components Charts, Markers, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Aggregations
_premium: true
---

# Web Components Data Aggregations

In the Ignite UI for Web Components [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) control Data Aggregations feature allows you to group data in the chart by unique values on the `XAxis` and then sort those groups. You may then apply summaries which will be reflected by the range of the `YAxis` and will be displayed in the tooltip when hovering the series.

## Web Components Data Aggregations Example

The following example depicts a [Column Chart](../types/column-chart.md) that groups by the Country member of the `XAxis` and can be changed to other properties within each data item such as Product, MonthName, and Year to aggregate the sales data. Also a summary and sort option is available to get a desirable order for the grouped property.

Note, the abbreviated functions found within the dropdowns for [`initialSummaries`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=initialSummaries) and [`groupSorts`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=groupSorts) have be applied as shown to get a correct result based on the property you assign. eg. Sum(sales) as Sales | Sales Desc

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

The following is a list of API members mentioned in the above sections:

- [`initialSortDescriptions`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=initialSortDescriptions)
- [`initialSorts`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=initialSorts)
- [`sortDescriptions`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=sortDescriptions)
- [`initialGroups`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=initialGroups)
- [`initialGroupDescriptions`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=initialGroupDescriptions)
- [`groupDescriptions`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=groupDescriptions)
- [`initialSummaries`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=initialSummaries)
- [`initialSummaryDescriptions`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=initialSummaryDescriptions)
- [`summaryDescriptions`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=summaryDescriptions)
- [`initialGroupSortDescriptions`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=initialGroupSortDescriptions)
- [`groupSorts`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=groupSorts)
- [`groupSortDescriptions`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=groupSortDescriptions)

> [!Note]
> Chart Aggregation will not work when using [`includedProperties`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=includedProperties) | [`excludedProperties`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=excludedProperties). These properties on the chart are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render. The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.
