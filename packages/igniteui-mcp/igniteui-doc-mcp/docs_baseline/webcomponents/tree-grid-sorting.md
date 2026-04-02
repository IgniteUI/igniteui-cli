---
title: Web Components Tree Grid Sorting - Ignite UI for Web Components
_description: Get started with the Web Components sorting feature of Ignite UI for Web Components Tree Grid! Configure a mix of sortable columns & change the display order of data records.
_keywords: Web Components sort, Web Components, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/sorting
_tocName: Sorting
_premium: true
---

# Web Components Tree Grid Sorting

The Ignite UI for Web Components Data Sorting feature in Web Components Tree Grid is enabled on a per-column level, meaning that the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) can have a mix of sortable and non-sortable columns. Performing Web Components sort actions enables you to change the display order of the records based on specified criteria.

## Web Components Tree Grid Sorting Overview Example

```typescript
export class OrdersTreeDataItem {
    public constructor(init: Partial<OrdersTreeDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersTreeData extends Array<OrdersTreeDataItem> {
    public constructor(items: Array<OrdersTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersTreeDataItem({ ID: 1, ParentID: -1, Name: `Order 1`, Category: ``, OrderDate: `2010-02-17`, Units: 1844, UnitPrice: 3.73, Price: 6884.38, Delivered: true }),
                new OrdersTreeDataItem({ ID: 101, ParentID: 1, Name: `Chocolate Chip Cookies`, Category: `Cookies`, OrderDate: `2010-02-17`, Units: 834, UnitPrice: 3.59, Price: 2994.06, Delivered: true }),
                new OrdersTreeDataItem({ ID: 102, ParentID: 1, Name: `Red Apples`, Category: `Fruit`, OrderDate: `2010-02-17`, Units: 371, UnitPrice: 3.66, Price: 1357.86, Delivered: true }),
                // ... 19 more items
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


This is done via the [`sortable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#sortable) input. With the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) sorting, you can also set the [`sortingIgnoreCase`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#sortingIgnoreCase) property to perform case sensitive sorting:

```html
<igc-column field="ProductName" header="Product Name" data-type="string" sortable="true"></igc-column>
```

## Sorting Indicators

Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order.

The [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) provides a solution for this problem by indicating the index of each sorted column.

```typescript
export class OrdersTreeDataItem {
    public constructor(init: Partial<OrdersTreeDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersTreeData extends Array<OrdersTreeDataItem> {
    public constructor(items: Array<OrdersTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersTreeDataItem({ ID: 1, ParentID: -1, Name: `Order 1`, Category: ``, OrderDate: `2010-02-17`, Units: 1844, UnitPrice: 3.73, Price: 6884.38, Delivered: true }),
                new OrdersTreeDataItem({ ID: 101, ParentID: 1, Name: `Chocolate Chip Cookies`, Category: `Cookies`, OrderDate: `2010-02-17`, Units: 834, UnitPrice: 3.59, Price: 2994.06, Delivered: true }),
                new OrdersTreeDataItem({ ID: 102, ParentID: 1, Name: `Red Apples`, Category: `Fruit`, OrderDate: `2010-02-17`, Units: 371, UnitPrice: 3.66, Price: 1357.86, Delivered: true }),
                // ... 19 more items
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

You can sort any column or a combination of columns through the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) API using the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) `Sort` method:

```typescript
import { SortingDirection } from 'igniteui-webcomponents-grids';
```

<!-- ComponentStart: TreeGrid -->

```typescript

// Perform a case insensitive ascending sort on the Category column.
this.treeGrid.sort([{ fieldName: 'Category', dir: SortingDirection.Asc, ignoreCase: true }]);

// Perform sorting on both the Category and Price columns.
this.treeGrid.sort([
    { fieldName: 'Category', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

<!-- ComponentEnd: TreeGrid -->

> [!Note]
> Sorting is performed using our `DefaultSortingStrategy` algorithm. Any [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) or `ISortingExpression` can use a custom implementation of the `ISortingStrategy` as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the `ClearSort` method:

<!-- ComponentStart: TreeGrid -->

```typescript
// Removes the sorting state from the Category column
this.treeGrid.clearSort('Category');

// Removes the sorting state from every column in the Tree Grid
this.treeGrid.clearSort();
```

<!-- ComponentEnd: TreeGrid -->

> [!Note]
> The [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#sortStrategy) of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) is of different type compared to the [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#sortStrategy) of the [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html), since they work in different scopes and expose different parameters.

> [!Note]
> The sorting operation **DOES NOT** change the underlying data source of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html).

## Initial Sorting State

It is possible to set the initial sorting state of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) by passing an array of sorting expressions to the `SortingExpressions` property of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html).

```typescript
public connectedCallback() {
    this.treeGrid.sortingExpressions = [
        { fieldName: 'Category', dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```

<!-- ComponentEnd: TreeGrid -->

> [!Note]
> If values of type `string` are used by a column of [`dataType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#dataType) `Date`, the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) won't parse them to `Date` objects and using [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) `Sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

## Sorting Indicators Templates

The sorting indicator icon in the column header can be customized using a template. The following properties are available for templating the sorting indicator for any sorting state (ascending, descending, none):

- `SortHeaderIconTemplate` – re-templates the sorting icon when no sorting is applied.

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcTreeGridComponent;
    grid.data = this.data;
    grid.sortHeaderIconTemplate = this.sortHeaderIconTemplate;
}

public sortHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon name="unfold_more"></igc-icon>`;
}
```

- `SortAscendingHeaderIconTemplate` – re-templates the sorting icon when the column is sorted in ascending order.

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcTreeGridComponent;
    grid.data = this.data;
    grid.sortAscendingHeaderIconTemplate = this.sortAscendingHeaderIconTemplate;
}

public sortAscendingHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon name="expand_less"></igc-icon>`;
}
```

- `SortDescendingHeaderIconTemplate` – re-templates the sorting icon when the column is sorted in descending order.

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcTreeGridComponent;
    grid.data = this.data;
    grid.sortDescendingHeaderIconTemplate = this.sortDescendingHeaderIconTemplate;
}

public sortDescendingHeaderIconTemplate = (ctx: IgcGridHeaderTemplateContext) => {
    return html`<igc-icon name="expand_more"></igc-icon>`;
}
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-tree-grid class="grid">
</igc-tree-grid>
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
export class OrdersTreeDataItem {
    public constructor(init: Partial<OrdersTreeDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersTreeData extends Array<OrdersTreeDataItem> {
    public constructor(items: Array<OrdersTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersTreeDataItem({ ID: 1, ParentID: -1, Name: `Order 1`, Category: ``, OrderDate: `2010-02-17`, Units: 1844, UnitPrice: 3.73, Price: 6884.38, Delivered: true }),
                new OrdersTreeDataItem({ ID: 101, ParentID: 1, Name: `Chocolate Chip Cookies`, Category: `Cookies`, OrderDate: `2010-02-17`, Units: 834, UnitPrice: 3.59, Price: 2994.06, Delivered: true }),
                new OrdersTreeDataItem({ ID: 102, ParentID: 1, Name: `Red Apples`, Category: `Fruit`, OrderDate: `2010-02-17`, Units: 371, UnitPrice: 3.66, Price: 1357.86, Delivered: true }),
                // ... 19 more items
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


## API References

- [`IgcSortingExpression`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsortingexpression.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
