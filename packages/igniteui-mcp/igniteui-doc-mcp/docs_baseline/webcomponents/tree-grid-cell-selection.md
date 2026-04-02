---
title: Web Components Tree Grid Cell Selection - Ignite UI for Web Components
_description: Check how easy it is to use cell data selection using variety of events, rich API or mouse interactions. The Tree Grid supports 3 modes for cell selection. Try it now!
_keywords: data select, igniteui for Web Components, infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/cell-selection
_tocName: Cell Selection
_premium: true
---

# Web Components Tree Grid Cell Selection

The Ignite UI for Web Components Cell Selection in Web Components Tree Grid enables rich data select capabilities and offers powerful API in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) component. The Web Components Tree Grid supports three selection modes:

- Tree Grid Multiple Cell Selection
- Tree Grid Single Selection
- Tree Grid None Selection

Let's dive deeper into each of these options.

## Web Components Tree Grid Cell Selection Example

The sample below demonstrates the three types of [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)'s **cell selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.

```typescript
export class EmployeesFlatDataItem {
    public constructor(init: Partial<EmployeesFlatDataItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public Phone: string;
    public OnPTO: boolean;
    public ParentID: number;
    public Title: string;

}
export class EmployeesFlatData extends Array<EmployeesFlatDataItem> {
    public constructor(items: Array<EmployeesFlatDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDataItem({ Age: 55, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, Phone: `0251-031259`, OnPTO: false, ParentID: -1, Title: `Development Manager` }),
                new EmployeesFlatDataItem({ Age: 42, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, Phone: `(21) 555-0091`, OnPTO: true, ParentID: -1, Title: `CEO` }),
                new EmployeesFlatDataItem({ Age: 49, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, Phone: `(071) 23 67 22 20`, OnPTO: true, ParentID: -1, Title: `Accounting Manager` }),
                // ... 15 more items
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


## Selection Types

### Tree Grid Multiple-Cell Selection

How to select cells:

- By **Mouse drag** - Rectangular data selection of cells would be performed.
- By <kbd>CTRL</kbd> key press + **Mouse drag** - Multiple range selections would be performed. Any other existing cell selection will be persisted.
- Instant multi-cell selection by using <kbd>SHIFT</kbd> key. Select single cell and select another single cell by holding the <kbd>SHIFT</kbd> key. Cell range between the two cells will be selected. Keep in mind that if another second cell is selected while holding <kbd>SHIFT</kbd> key the cell selection range will be updated based on the first selected cell position (starting point).
- Keyboard multi-cell selection by using the <kbd>Arrow</kbd> keys while holding <kbd>SHIFT</kbd> key. Multi-cell selection range will be created based on the focused cell.
- Keyboard multi-cell selection by using the <kbd>CTRL</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd>  keys and <kbd>CTRL</kbd> + <kbd>HOME</kbd>/<kbd>END</kbd> while holding <kbd>SHIFT</kbd> key. Multi-cell selection range will be created based on the focused cell.
- Clicking with the **Left Mouse** key while holding <kbd>CTRL</kbd> key will add single cell ranges into the selected cells collection.
- Continuous multiple cell selection is available, by clicking with the mouse and dragging.

<!-- ComponentStart: Grid, TreeGrid -->

#### Demo

<!-- TODO sample does not load any data in Blazor -->

```typescript
export class EmployeesFlatDataItem {
    public constructor(init: Partial<EmployeesFlatDataItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public Phone: string;
    public OnPTO: boolean;
    public ParentID: number;
    public Title: string;
    public hasEmployees: boolean;

}
export class EmployeesFlatData extends Array<EmployeesFlatDataItem> {
    public constructor() {
        super();
        this.push(new EmployeesFlatDataItem(
        {
            Age: 55,
            HireDate: `2008, 3, 20`,
            ID: 1,
            Name: `Johnathan Winchester`,
            Phone: `0251-031259`,
            OnPTO: false,
            ParentID: -1,
            Title: `Development Manager`
        }));
        this.push(new EmployeesFlatDataItem(
        {
            Age: 42,
            HireDate: `2014, 1, 22`,
            ID: 4,
            Name: `Ana Sanders`,
            Phone: `(21) 555-0091`,
            OnPTO: true,
            ParentID: -1,
            Title: `CEO`
        }));
        this.push(new EmployeesFlatDataItem(
        {
            Age: 49,
            HireDate: `2014, 1, 22`,
            ID: 18,
            Name: `Victoria Lincoln`,
            Phone: `(071) 23 67 22 20`,
            OnPTO: true,
            ParentID: -1,
            Title: `Accounting Manager`
        }));
        // ... 15 more items
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<!-- ComponentEnd: Grid, TreeGrid -->

### Tree Grid Single Selection

When you set the `CellSelection` to **single**, this allows you to have only one selected cell in the grid at a time. Also the mode **mouse drag** will not work and instead of selecting a cell, this will make default text selection.

> When single cell is selected [`selected`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#selected) event is emitted, no matter if the **selection mode** is **single** or **multiple**. In multi-cell selection mode when you select a range of cells `RangeSelected` event is emitted.

### Tree Grid None Selection

If you want to disable cell selection you can just set `CellSelection` to **none**. In this mode when you click over the cell or try to navigate with keyboard, the cell is **not selected**, only the **activation style** is applied and it is going to be lost when you scroll or click over other element on the page. The only way for you to define selection is by using the API methods that are described below.

## Keyboard Navigation Interactions

### While Shift Key is Pressed

- <kbd>SHIFT</kbd> + <kbd>↑</kbd> to add above cell to the current selection.
- <kbd>SHIFT</kbd> + <kbd>↓</kbd> to add below cell to the current selection.
- <kbd>SHIFT</kbd> + <kbd>←</kbd> to add left cell to the current selection.
- <kbd>SHIFT</kbd> + <kbd>→</kbd> to add right cell to the current selection.

### While Ctrl + Shift Keys are Pressed

- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>↑</kbd> to select all cells above the focused cell in the column.
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>↓</kbd> to select all cells below the focused cell in the column.
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>←</kbd> to select all cells till the start of the row.
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>→</kbd> to select all cells till the end of the row.
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>HOME</kbd> to select all cells from the focused cell till the first-most cell in the grid
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>END</kbd> to select all cells from the focused cell till the last-most cell in the grid

> [!Note]
> Continuous scroll is possible only within Grid's body.

## Api Usage

Below are the methods that you can use in order to select ranges, clear selection or get selected cells data.

### Select range

`SelectRange` - Select a range of cells with the API. rowStart and rowEnd should use row indexes and columnStart and columnEnd could use column index or column data field value.

```ts
const range = { rowStart: 2, rowEnd: 2, columnStart: 1, columnEnd: 1 };
this.grid.selectRange(range);
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Clear cell selection

`ClearCellSelection` will clear the current cell selection.

```ts
this.grid.clearCellSelection();
```

### Get Selected Data

[`getSelectedData`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html#getSelectedData) will return array of the selected data in format depending on the selection. Examples below:

- If three different single cells are selected:

```typescript
expectedData = [
    { CompanyName: 'Infragistics' },
    { Name: 'Michael Langdon' },
    { ParentID: 147 }
];
```

- If three cells from one column are selected:

```typescript
expectedData = [
    { Address: 'Obere Str. 57'},
    { Address: 'Avda. de la Constitución 2222'},
    { Address: 'Mataderos 2312'}
];
```

- If three cells are selected with mouse drag from one row and three columns:

```typescript
expectedData = [
    { Address: 'Avda. de la Constitución 2222', City: 'México D.F.', ContactTitle: 'Owner' }
];
```

- If three cells are selected with mouse drag from two rows and three columns:

```typescript
expectedData = [
    { ContactTitle: 'Sales Agent', Address: 'Cerrito 333', City: 'Buenos Aires'},
    { ContactTitle: 'Marketing Manager', Address: 'Sierras de Granada 9993', City: 'México D.F.'}
];
```

- If two different ranges are selected:

```typescript
expectedData = [
    { ContactName: 'Martín Sommer', ContactTitle: 'Owner'},
    { ContactName: 'Laurence Lebihan', ContactTitle: 'Owner'},
    { Address: '23 Tsawassen Blvd.', City: 'Tsawassen'},
    { Address: 'Fauntleroy Circus', City: 'London'}
];
```

- If two overlapping ranges are selected, the format would be:

```typescript
expectedData = [
    { ContactName: 'Diego Roel', ContactTitle: 'Accounting Manager', Address: 'C/ Moralzarzal, 86'},
    { ContactName: 'Martine Rancé', ContactTitle: 'Assistant Sales Agent', Address: '184, chaussée de Tournai', City: 'Lille'},
    { ContactName: 'Maria Larsson', ContactTitle: 'Owner', Address: 'Åkergatan 24', City: 'Bräcke'},
    { ContactTitle: 'Marketing Manager', Address: 'Berliner Platz 43', City: 'München'}
];
```

## Features Integration

The multi-cell selection is index based (DOM elements selection).

- `Sorting` - When sorting is performed selection will not be cleared. It will leave currently selected cells the same while sorting ascending or descending.
- `Paging` - On paging selected cells will be cleared. Selection wont be persisted across pages.
- `Filtering` - When filtering is performed selection will not be cleared. If filtering is cleared it will return - the initially selected cells.
- `Resizing` - On column resizing selected cells will not be cleared.
- `Hiding` - It will not clear the selected cells. If column is hidden, the cells from the next visible column will be selected.
- `Pinning` - Selected cell will not be cleared. Same as hiding
- `GroupBy` - On column grouping selected cells will not be cleared.

<!-- ComponentEnd: Grid, TreeGrid -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

<!-- ComponentStart: TreeGrid -->

```ts
<igc-tree-grid class="treeGrid"></igc-tree-grid>
```

Then set the related CSS properties for that class:

```css
.treeGrid {
    --ig-grid-cell-selected-text-color: #fff;
    --ig-grid-cell-active-border-color: #f2c43c;
    --ig-grid-cell-selected-background: #0062a3;
    --ig-grid-cell-editing-background: #0062a3;
}
```

<!-- ComponentEnd: TreeGrid -->

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
    --cell-selected-text-color: #FFFFFF;
    --cell-active-border-color: #f2c43c;
    --cell-selected-background: #0062a3;
}
```


## API References

- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)

## Additional Resources

<!-- ComponentStart: Grid, HierarchicalGrid -->

- [Selection](selection.md)
- [Row Selection](row-selection.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Virtualization and Performance](virtualization.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
