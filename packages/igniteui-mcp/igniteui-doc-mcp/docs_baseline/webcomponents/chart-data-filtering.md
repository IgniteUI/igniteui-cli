---
title: Web Components Chart Data Filtering | Data Visualization | Infragistics
_description: Infragistics' Web Components Chart Data Filtering
_keywords: Web Components Charts, Filtering, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Filtering
_premium: true
---

# Web Components Chart Data Filtering

Data Filtering allows you to query large data in order to analyze and plot small subset of data entries via filter expressions, all without having to manually modify the datasource bound to the chart.

A complete list of valid expressions and keywords to form a query string can be found here:

[Filter expressions](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/webservices/use-filter-expressions-in-odata-uris)

> NOTE: Any incorrect filter applied will result with an empty chart.

## Web Components Chart Data Filter Example

The following example depicts a [Column Chart](../types/column-chart.md) of annual birth rates across several decades. The drop-down allows you to select a decade, which inserts an expression via the [`initialFilter`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#initialFilter) property, to update the chart visual and thus filtering out the other decades out.

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

The [`initialFilter`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#initialFilter) property is a string that requires the following syntax in order to filter properly. The value requires sets of parentheses that include both the filter expression definition, column and value associated with the record(s) filtering in.

eg. To show all countries that start with the letter B:

"(startswith(Country, 'B'))"

eg. Concatenating more than one expression:

"(startswith(Country, 'B') and endswith(Country, 'L') and contains(Product, 'Royal Oak') and contains(Date, '3/1/20'))"

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)
- [Chart Tooltips](chart-tooltips.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html)
- [`isTransitionInEnabled`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#isTransitionInEnabled)
- [`transitionInDuration`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#transitionInDuration)
- [`transitionInMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#transitionInMode)
