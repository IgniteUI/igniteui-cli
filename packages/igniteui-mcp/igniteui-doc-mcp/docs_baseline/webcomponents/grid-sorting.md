---
title: Web Components Grid Sorting - Ignite UI for Web Components
_description: Get started with the Web Components sorting feature of Ignite UI for Web Components Grid! Configure a mix of sortable columns & change the display order of data records.
_keywords: Web Components sort, Web Components, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/sorting
_tocName: Sorting
_premium: true
---

# Web Components Grid Sorting

The Ignite UI for Web Components Data Sorting feature in Web Components Grid is enabled on a per-column level, meaning that the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) can have a mix of sortable and non-sortable columns. Performing Web Components sort actions enables you to change the display order of the records based on specified criteria.

## Web Components Grid Sorting Overview Example

```typescript
export class ProductSalesItem {
    public constructor(init: Partial<ProductSalesItem>) {
        Object.assign(this, init);
    }

    public OrderID: number;
    public SaleAmount: number;
    public Category: string;
    public Company: string;
    public ShipCountry: string;
    public ShippedDate: string;

}
export class ProductSales extends Array<ProductSalesItem> {
    public constructor(items: Array<ProductSalesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new ProductSalesItem({ OrderID: 10524, SaleAmount: 3192.65, Category: `Beverages`, Company: `Berglunds snabbköp`, ShipCountry: `France`, ShippedDate: `1997-05-07T00:00:00Z` }),
                new ProductSalesItem({ OrderID: 10672, SaleAmount: 3815.25, Category: `Beverages`, Company: `Berglunds snabbköp`, ShipCountry: `Germany`, ShippedDate: `1997-09-26T00:00:00Z` }),
                new ProductSalesItem({ OrderID: 10801, SaleAmount: 3026.85, Category: `Beverages`, Company: `Bólido Comidas preparadas`, ShipCountry: `Brazil`, ShippedDate: `1997-12-31T00:00:00Z` }),
                // ... 63 more items
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


This is done via the [`sortable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#sortable) input. With the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) sorting, you can also set the [`sortingIgnoreCase`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#sortingIgnoreCase) property to perform case sensitive sorting:

```html
<igc-column field="ProductName" header="Product Name" data-type="string" sortable="true"></igc-column>
```

## Sorting Indicators

Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order.

The [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) provides a solution for this problem by indicating the index of each sorted column.

```typescript
export class FinancialDataAllItem {
    public constructor(init: Partial<FinancialDataAllItem>) {
        Object.assign(this, init);
    }

    public Category: string;
    public Type: string;
    public Spread: number;
    public Open: number;
    public Price: number;
    public Buy: number;
    public Sell: number;
    public Change: number;
    public ChangePercent: number;
    public Volume: number;
    public High: number;
    public Low: number;
    public YearlyHigh: number;
    public YearlyLow: number;
    public YearlyStart: number;
    public YearlyChange: number;
    public Settlement: string;
    public Contract: string;
    public Region: string;
    public Country: string;
    public Risk: string;
    public Sector: string;
    public Currency: string;
    public Security: string;
    public Issuer: string;
    public Maturity: string;
    public IndGroup: string;
    public IndSector: string;
    public IndCategory: string;
    public CUSIP: string;
    public Cpn: string;
    public KRD_3YR: number;
    public ZV_SPREAD: number;
    public KRD_5YR: number;
    public KRD_1YR: number;
    public ID: number;

}
export class FinancialDataAll extends Array<FinancialDataAllItem> {
    public constructor(items: Array<FinancialDataAllItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new FinancialDataAllItem({ Category: `Fuel`, Type: `Ethanol`, Spread: 0.01, Open: 1.512, Price: 2.76, Buy: 2.75, Sell: 2.76, Change: 0.01, ChangePercent: 0.2, Volume: 14, High: 2.75, Low: 1.12, YearlyHigh: 2.75, YearlyLow: 1.12, YearlyStart: 1.48, YearlyChange: 86.7, Settlement: `Cash`, Contract: `CFD`, Region: `Middle East`, Country: `Saudi Arabia`, Risk: `Low`, Sector: `Government`, Currency: `EUR`, Security: `Good`, Issuer: `American Airlines`, Maturity: `2022-02-11`, IndGroup: `Airlines`, IndSector: `Consumer, Cyclical`, IndCategory: `Airlines`, CUSIP: `1765866`, Cpn: `7.875`, KRD_3YR: 6E-05, ZV_SPREAD: 28.302, KRD_5YR: 0, KRD_1YR: -0.00187, ID: 0 }),
                new FinancialDataAllItem({ Category: `Fuel`, Type: `Natural Gas`, Spread: 0.02, Open: 2.094, Price: 2.07, Buy: 2.09, Sell: 2.09, Change: -0.03, ChangePercent: -1.8, Volume: 2783, High: 2.11, Low: 2.09, YearlyHigh: 3.2, YearlyLow: 1.84, YearlyStart: 2.52, YearlyChange: -16.51, Settlement: `Credit`, Contract: `Options`, Region: `Middle East`, Country: `Saudi Arabia`, Risk: `High`, Sector: `Public`, Currency: `PLN`, Security: `High`, Issuer: `Delta Airlines`, Maturity: `2022-02-22`, IndGroup: `Airlines`, IndSector: `Consumer, Cyclical`, IndCategory: `Airlines`, CUSIP: `1765866`, Cpn: `7.875`, KRD_3YR: 6E-05, ZV_SPREAD: 28.302, KRD_5YR: 0, KRD_1YR: -0.00187, ID: 1 }),
                new FinancialDataAllItem({ Category: `Agriculture`, Type: `Cotton`, Spread: 0.01, Open: 61.77, Price: 62.9, Buy: 61.77, Sell: 61.77, Change: 1.14, ChangePercent: 1.84, Volume: 3612, High: 62.06, Low: 61.32, YearlyHigh: 67.59, YearlyLow: 54.33, YearlyStart: 60.96, YearlyChange: 1.31, Settlement: `Cash`, Contract: `Options`, Region: `North America`, Country: `United States`, Risk: `Low`, Sector: `Private`, Currency: `EUR`, Security: `Good`, Issuer: `Southwest`, Maturity: `2022-05-23`, IndGroup: `Airlines`, IndSector: `Consumer, Cyclical`, IndCategory: `Airlines`, CUSIP: `1765866`, Cpn: `7.875`, KRD_3YR: 6E-05, ZV_SPREAD: 28.302, KRD_5YR: 0, KRD_1YR: -0.00187, ID: 2 }),
                // ... 997 more items
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


## Sorting through the API

You can sort any column or a combination of columns through the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) API using the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) [`sort`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#sort) method:

<!-- WebComponents -->

```typescript
import { SortingDirection } from 'igniteui-webcomponents-grids';
```

<!-- ComponentStart: Grid -->

<!-- WebComponents -->

```typescript

// Perform a case insensitive ascending sort on the ProductName column.
this.grid.sort([{ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true }]);

// Perform sorting on both the ProductName and Price columns.
this.grid.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

<!-- ComponentEnd: Grid -->

> \[!Note]
> Sorting is performed using our `DefaultSortingStrategy` algorithm. Any [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) or `ISortingExpression` can use a custom implementation of the `ISortingStrategy` as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the [`clearSort`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#clearSort) method:

<!-- ComponentStart: Grid -->

<!-- Angular, WebComponents -->

```typescript
// Removes the sorting state from the ProductName column
this.grid.clearSort('ProductName');

// Removes the sorting state from every column in the Grid
this.grid.clearSort();
```

<!-- ComponentEnd: Grid -->

> \[!Note]
> The [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#sortStrategy) of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) is of different type compared to the [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#sortStrategy) of the [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html), since they work in different scopes and expose different parameters.

> \[!Note]
> The sorting operation **DOES NOT** change the underlying data source of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html).

## Initial Sorting State

It is possible to set the initial sorting state of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) by passing an array of sorting expressions to the [`sortingExpressions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#sortingExpressions) property of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html).

<!-- WebComponents -->

```typescript
public connectedCallback() {
    this.grid.sortingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```

<!-- ComponentEnd: Grid -->

> \[!Note]
> If values of type `string` are used by a column of [`dataType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#dataType) `Date`, the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) won't parse them to `Date` objects and using [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) `Sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

<!-- ComponentStart: Grid -->

<!-- ComponentEnd: Grid -->

## Sorting Indicators Templates

The sorting indicator icon in the column header can be customized using a template. The following properties are available for templating the sorting indicator for any sorting state (ascending, descending, none):

- [`sortHeaderIconTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#sortHeaderIconTemplate) – re-templates the sorting icon when no sorting is applied.

<!-- WebComponents -->

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.sortHeaderIconTemplate = this.sortHeaderIconTemplate;
}

public sortHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon name="unfold_more"></igc-icon>`;
}
```

<!-- end: WebComponents -->

- [`sortAscendingHeaderIconTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#sortAscendingHeaderIconTemplate) – re-templates the sorting icon when the column is sorted in ascending order.

<!-- WebComponents -->

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.sortAscendingHeaderIconTemplate = this.sortAscendingHeaderIconTemplate;
}

public sortAscendingHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon name="expand_less"></igc-icon>`;
}
```

<!-- end: WebComponents -->

- [`sortDescendingHeaderIconTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#sortDescendingHeaderIconTemplate) – re-templates the sorting icon when the column is sorted in descending order.

<!-- WebComponents -->

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.sortDescendingHeaderIconTemplate = this.sortDescendingHeaderIconTemplate;
}

public sortDescendingHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon name="expand_more"></igc-icon>`;
}
```

<!-- end: WebComponents -->

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-grid class="grid">
</igc-grid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-sorted-header-icon-color: #ffb06a;
    --ig-grid-sortable-header-icon-hover-color: black;
}
```

### Demo

```typescript
export class ProductSalesItem {
    public constructor(init: Partial<ProductSalesItem>) {
        Object.assign(this, init);
    }

    public OrderID: number;
    public SaleAmount: number;
    public Category: string;
    public Company: string;
    public ShipCountry: string;
    public ShippedDate: string;

}
export class ProductSales extends Array<ProductSalesItem> {
    public constructor(items: Array<ProductSalesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new ProductSalesItem({ OrderID: 10524, SaleAmount: 3192.65, Category: `Beverages`, Company: `Berglunds snabbköp`, ShipCountry: `France`, ShippedDate: `1997-05-07T00:00:00Z` }),
                new ProductSalesItem({ OrderID: 10672, SaleAmount: 3815.25, Category: `Beverages`, Company: `Berglunds snabbköp`, ShipCountry: `Germany`, ShippedDate: `1997-09-26T00:00:00Z` }),
                new ProductSalesItem({ OrderID: 10801, SaleAmount: 3026.85, Category: `Beverages`, Company: `Bólido Comidas preparadas`, ShipCountry: `Brazil`, ShippedDate: `1997-12-31T00:00:00Z` }),
                // ... 63 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#grid {
    --ig-grid-sorted-header-icon-color: #ffb06a;
    --ig-grid-sortable-header-icon-hover-color: black;
}
```


<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgcSortingExpression`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsortingexpression.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
