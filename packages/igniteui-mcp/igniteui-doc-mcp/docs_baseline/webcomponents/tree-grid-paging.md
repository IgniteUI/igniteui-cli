---
title: Web Components Tree Grid Paging - Ignite UI for Web Components
_description: Configure Web Components pagination and create custom pages in the Web Components table by Ignite UI, get data for the requested pages with variety of events.
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
_keywords: Paging, Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics
_license: commercial
namespace: Infragistics.Controls
_canonicalLink: grids/grid/paging
_tocName: Paging
_premium: true
---

# Web Components Tree Grid Pagination Overview

The Ignite UI for Web Components Pagination feature in Web Components Tree Grid is used to split a large set of data into a sequence of pages that have similar content. React grid pagination improves user experience and data interaction. [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) pagination is configurable via a separate component projected in the grid tree by defining a [`IgcPaginator`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpaginator.html)  tag, similar to adding of a column. As in any Web Components table, the pagination in the Web Components Tree Grid supports template for custom pages.

## Web Components Tree Grid Pagination Example

The following example represents [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) pagination and exposes the options usage of items per page and how paging can be enabled. The user can also quickly navigate through the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) pages via "Go to last page" and "Go to first page" buttons.

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

```css
.gridSize {
    --ig-size: var(--ig-size-small);
}
```

```html
<igc-tree-grid id="grid" class="gridSize" height="500px" width="100%" >
    <igc-paginator per-page="10">
    </igc-paginator>
</igc-tree-grid>
```

## Usage

The [`IgcPaginator`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpaginator.html) component is used along with the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) component in the example below, but you can use it with any other component in case paging functionality is needed.

```html
<igc-tree-grid id="grid" className="gridSize">
    <igc-paginator id="paginator" per-page="10">
    </igc-paginator>
</igc-tree-grid>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcTreeGrid;
    var paginator = this.paginator = document.getElementById('paginator') as IgcPaginatorComponent;
    const selectOptions = [5, 15, 20, 50];
    grid.data = this.data;
    paginator.page = grid.page;
    paginator.totalRecords = grid.totalRecords;
    paginator.selectOptions = selectOptions;
}
```

<!-- ComponentEnd: Grid, TreeGrid -->

### Paginator Component Demo

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

    #treeGrid {
        --ig-size: var(--ig-size-medium);
    }
```

<div class="divider--half"></div>

## API References

- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)
- [`IgcPaginator`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpaginator.html)

## Additional Resources

<!-- ComponentStart: Grid, TreeGrid -->

<!-- * [Paginator](../paginator.md) -->

- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid, TreeGrid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
