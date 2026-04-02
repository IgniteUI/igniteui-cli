---
title: Web Components Grid Keyboard Navigation - Ignite UI for Web Components
_description: Learn how to use Grid Keyboard Navigation with Ignite UI for Web Components. With Keyboard interaction, users can quickly navigate between cells, rows, and columns.
_keywords: keyboard navigation, Ignite UI for Web Components, infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["GridBaseDirective"]
namespace: Infragistics.Controls
_tocName: Keyboard navigation
_premium: true
---

# Web Components Grid Keyboard Navigation

The Ignite UI for Web Components Keyboard Navigation feature in Web Components Grid provides a rich variety of keyboard interactions for the user. It enhances the accessibility of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) and allows the user to navigate through any type of elements inside (cell, row, column header, toolbar, footer, etc.). This functionality is enabled by default, and the developer has the option to override any of the default behaviors in an easy way.

The tabulations of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) has been reduced so that the navigation is compliant with W3C accessibility standards and convenient to use.

Currently, the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) introduces the following tab stops:

- **GroupBy or Toolbar area** (if enabled).
- **Grid header**.
- **Grid body**.
- **Column summaries** (if enabled).
- **Grid paginator** (if enabled).

> [!Note]
> Due to this change, navigating between the cells with <kbd>TAB</kbd> and <kbd>SHIFT</kbd> + <kbd>TAB</kbd> is no longer supported in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html).
> Pressing the <kbd>TAB</kbd> key now goes through the tab stops in the following order: **GroupBy** / **Toolbar** -> **Headers** -> **Body** -> **Summaries** -> **Footer / Paginator**.

> [!Note]
> Exposing any **focusable** element into the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) body via template may introduce **side effects** in the keyboard navigation, since the default
> browser behavior is not prevented. It is the developer's responsibility to prevent or modify it appropriately.

## Header Navigation

A full **keyboard navigation** support in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) header is now introduced. Column headers can be easily traversed with the arrow keys. Additionally, there are a number of key combinations that trigger actions on the columns like **filtering**, **sorting**, **grouping** and etc.
When the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) header container is focused, the following key combinations are available:

### Key Combinations

- <kbd>↑</kbd> navigates one cell up in the headers (no looping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined.
- <kbd>↓</kbd> navigates one cell down in the headers (no wrapping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined.
- <kbd>←</kbd> navigates one cell left (no looping).
- <kbd>→</kbd> navigates one cell right (no wrapping between lines).
- <kbd>CTRL</kbd> + <kbd>←</kbd> navigates to the leftmost cell in the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level.
- <kbd>HOME</kbd> navigates to the leftmost cell in  the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level.
- <kbd>CTRL</kbd> + <kbd>→</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level.
- <kbd>END</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level.
- <kbd>ALT</kbd> + <kbd>L</kbd> opens Advanced Filtering dialog if Advanced Filtering is enabled.
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>L</kbd> opens the Excel Style Filter dialog or the default (row) filter if the column is filterable.
- <kbd>CTRL</kbd> + <kbd>↑</kbd> sorts the active column header in ASC order. If the column is already sorted in ASC, sorting state is cleared.
- <kbd>CTRL</kbd> + <kbd>↓</kbd> sorts the active column header in DSC order. If the column is already sorted in DSC, sorting state is cleared.
- <kbd>SPACE</kbd> selects the column. If the column is already selected, selection is cleared.

 <!-- ComponentStart: Grid -->

- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>←</kbd> groups the column, if the column is marked as groupable.

 <!-- ComponentEnd: Grid -->

- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>→</kbd> ungroups the column, if the column is marked as groupable.
- <kbd>ALT</kbd> + <kbd>←</kbd> or <kbd>ALT</kbd> + <kbd>↑</kbd> collapses the column group header, if the header is not already collapsed.
- <kbd>ALT</kbd> + <kbd>→</kbd> or <kbd>ALT</kbd> + <kbd>↓</kbd> expands the column group header, if the header is not already expanded.

## Body navigation

When the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) body is focused, the following key combinations are available:

### Key Combination

<!-- ComponentStart: Grid, TreeGrid -->

- <kbd>↑</kbd>- navigates one cell up.
- <kbd>↓</kbd> navigates one cell down.

<!-- ComponentEnd: Grid, TreeGrid -->

- <kbd>←</kbd> navigates one cell left (no wrapping between lines).
- <kbd>→</kbd> - navigates one cell right (no wrapping between lines).
- <kbd>CTRL</kbd> + <kbd>←</kbd> navigates to the leftmost cell in the row.
- <kbd>CTRL</kbd> + <kbd>→</kbd> navigates to the rightmost cell in the row.
- <kbd>CTRL</kbd> + <kbd>↑</kbd> navigates to the first cell in the column.
- <kbd>CTRL</kbd> + <kbd>↓</kbd> navigates to the last cell in the column.
- <kbd>HOME</kbd> navigates to the leftmost cell in the row.
- <kbd>END</kbd> navigates to the rightmost cell in the row.
- <kbd>CTRL</kbd> + <kbd>HOME</kbd> navigates to the top leftmost data cell in the grid.
- <kbd>CTRL</kbd> + <kbd>END</kbd> navigates to the bottom rightmost data cell in the grid.
- <kbd>PAGE UP</kbd> scrolls one page (view port) up.
- <kbd>PAGE DOWN</kbd> scrolls one page (view port) down.
- <kbd>ENTER</kbd> enters edit mode.
- <kbd>F2</kbd> enters edit mode.
- <kbd>ESC</kbd> exits edit mode.
- <kbd>TAB</kbd> available only if there is a cell in edit mode; moves the focus to the next editable cell in the row; after reaching the last cell in the row, moves te focus to the first editable cell in the next row. When [Row Editing](row-editing.md) is enabled, moves the focus from the right-most editable cell to the **CANCEL** and **DONE** buttons, and from **DONE** button to the left-most editable cell in the row.
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - available only if there is a cell in edit mode; moves the focus to the previous editable cell in the row; after reaching the first cell in the row, moves the focus to the last editable cell in the previous row. When [Row Editing](row-editing.md) is enabled, moves the focus from the right-most editable cell to **CANCEL** and **DONE** buttons, and from **DONE** button to the right-most editable cell in the row.
- <kbd>SPACE</kbd> - selects the row, if [Row Selection](row-selection.md) is enabled.
- <kbd>ALT</kbd> + <kbd>←</kbd> or <kbd>ALT</kbd> + <kbd>↑</kbd> -

 <!-- ComponentStart: Grid -->

over Group Row - collapses the group.

 <!-- ComponentEnd: Grid -->

 

 

- <kbd>ALT</kbd> + <kbd>→</kbd> or <kbd>ALT</kbd> + <kbd>↓</kbd> - <!-- ComponentStart: Grid -->
    over Group Row - expands the group.

 <!-- ComponentEnd: Grid -->

 

 

 <!-- ComponentStart: Grid -->

- <kbd>ALT</kbd> + <kbd>←</kbd> or <kbd>ALT</kbd> + <kbd>↑</kbd> - over Master Detail Row - collapses the details view.
- <kbd>ALT</kbd> + <kbd>→</kbd> or <kbd>ALT</kbd> + <kbd>↓</kbd> - over Master Detail Row - expands the details view.
- <kbd>SPACE</kbd> - over Group Row - selects all rows in the group, if [`rowSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelection) property is set to multiple.

 <!-- ComponentEnd: Grid -->

Practice all of the above mentioned actions in the demo sample below. Focus any navigable grid element and a list with some of the available actions for the element will be shown to guide you through.

## Demo

```typescript
export class InvoicesDataItem {
    public constructor(init: Partial<InvoicesDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipPostalCode: number;
    public ShipCountry: string;
    public ShipRegion: string;
    public ShipperName: string;
    public CustomerID: number;
    public CustomerName: string;
    public CustomerFirstName: string;
    public CustomerLastName: string;
    public CustomerAddress: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public ExtendedPrice: number;
    public Freight: number;
    public Discontinued: boolean;
    public Region: string;
    public Address: string;
    public City: string;
    public Country: string;
    public PostalCode: number;

}
export class InvoicesData extends Array<InvoicesDataItem> {
    public constructor() {
        super();
        this.push(new InvoicesDataItem(
        {
            ShipName: `Jefferson Home`,
            ShipAddress: `124 Wall Street`,
            ShipCity: `Miami`,
            ShipPostalCode: 60098,
            ShipCountry: `USA`,
            ShipRegion: `South East`,
            ShipperName: `Federal Shipping`,
            CustomerID: 1000,
            CustomerName: `Martin Jefferson`,
            CustomerFirstName: `Martin`,
            CustomerLastName: `Jefferson`,
            CustomerAddress: `124 Wall Street, Miami, USA, 60098`,
            Salesperson: `Nancy Jefferson`,
            OrderID: 1931,
            OrderDate: `3/14/2022`,
            ProductID: 189,
            ProductName: `IPad`,
            UnitPrice: 16150.61,
            Quantity: 3,
            ExtendedPrice: 48451.83,
            Freight: 980.61,
            Discontinued: false,
            Region: `South East`,
            Address: `124 Wall Street`,
            City: `Miami`,
            Country: `USA`,
            PostalCode: 60098
        }));
        this.push(new InvoicesDataItem(
        {
            ShipName: `Black Home`,
            ShipAddress: `162 Main Street`,
            ShipCity: `Miami`,
            ShipPostalCode: 80193,
            ShipCountry: `USA`,
            ShipRegion: `West`,
            ShipperName: `United Package`,
            CustomerID: 1001,
            CustomerName: `Anna Black`,
            CustomerFirstName: `Anna`,
            CustomerLastName: `Black`,
            CustomerAddress: `162 Main Street, Miami, USA, 80193`,
            Salesperson: `Anna Smith`,
            OrderID: 1163,
            OrderDate: `5/22/2022`,
            ProductID: 138,
            ProductName: `Mac Book Pro`,
            UnitPrice: 18520.59,
            Quantity: 4,
            ExtendedPrice: 74082.36,
            Freight: 850.59,
            Discontinued: false,
            Region: `West`,
            Address: `162 Main Street`,
            City: `Miami`,
            Country: `USA`,
            PostalCode: 80193
        }));
        this.push(new InvoicesDataItem(
        {
            ShipName: `Watson Townhouse`,
            ShipAddress: `164 Wall Street`,
            ShipCity: `Miami`,
            ShipPostalCode: 50111,
            ShipCountry: `USA`,
            ShipRegion: `West`,
            ShipperName: `United Package`,
            CustomerID: 1002,
            CustomerName: `Max Watson`,
            CustomerFirstName: `Max`,
            CustomerLastName: `Watson`,
            CustomerAddress: `164 Wall Street, Miami, USA, 50111`,
            Salesperson: `Martin Watson`,
            OrderID: 1230,
            OrderDate: `2/9/2022`,
            ProductID: 118,
            ProductName: `Mac Book Air`,
            UnitPrice: 25310.39,
            Quantity: 3,
            ExtendedPrice: 75931.17,
            Freight: 210.39,
            Discontinued: false,
            Region: `West`,
            Address: `164 Wall Street`,
            City: `Miami`,
            Country: `USA`,
            PostalCode: 50111
        }));
        // ... 496 more items
    }
}
```
```typescript
export enum ItemAction {
    Filterable,
    Sortable,
    Selectable,
    Groupable,
    Collapsible,
    Expandable,
    Editable,
    Always
}

export enum GridSection {
    THEAD = 'igx-grid__thead-wrapper',
    TBODY = 'igx-grid__tbody-content',
    FOOTER = 'igx-grid__tfoot'
}
export class Item {
    public title: string;
    public subTitle: string;
    public action: ItemAction;
    public active = false;

    private _completed: boolean;

    public constructor(title: string, subTitle: string, completed: boolean, itemAction?: ItemAction) {
        this.title = title;
        this.subTitle = subTitle;
        this.completed = completed;
        this.action = itemAction;

        if (itemAction === ItemAction.Always) {
            this.active = true;
        }
    }

    public set completed(value: boolean) {
        if (this.active || (!value && !this.completed)) {
            this._completed = value;
        }
    }

    public get completed() {
        return this._completed;
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Custom Keyboard Navigation

Overriding the default behavior for a certain key or keys combination is one of the benefits that the **Keyboard Navigation** feature provides. For example: press the <kbd>ENTER</kbd> or <kbd>TAB</kbd> key to navigate to the next cell or the cell below. This or any other navigation scenario is easily achieved by the **Keyboard Navigation** API:

| API | Description | Arguments |
|---------|-------------|-----------|
| `GridKeydown` | An event that is emitted when any of key press/combinations described above is performed. Can be canceled. For any other key press/combination, use the default `onkeydown` event. | [`IgcGridKeydownEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridkeydowneventargs.html) |
| `ActiveNodeChange` | An event that is emitted when the active node is changed. You can use it to determine the Active focus position (header, tbody etc.), column index, row index or nested level. | [`IgcActiveNodeChangeEventArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcactivenodechangeeventargs.html) |
| [`navigateTo`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#navigateTo) | Navigates to a position in the grid, based on provided `Rowindex` and `VisibleColumnIndex`. It can also execute a custom logic over the target element, through a callback function that accepts param of type `{ targetType: GridKeydownTargetType, target: Object }` . Usage: <br />`grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });` | `RowIndex: number, VisibleColumnIndex: number, callback: ({ targetType: GridKeydownTargetType, target: Object }`) => {} |
| [`getNextCell`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#getNextCell)| returns `ICellPosition` object, which defines the next cell by `RowIndex` and `VisibleColumnIndex`. A callback function can be passed as a third parameter of [`getNextCell`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#getNextCell) method. The callback function accepts [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) as a param and returns a `boolean` value indication if a given criteria is met: <br />`const nextEditableCell = grid.getNextCell(0, 4, (col) => col.editable);` | `currentRowIndex: number, currentVisibleColumnIndex: number, callback: (Column) => boolean` |
| [`getPreviousCell`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#getPreviousCell) | returns `ICellPosition` object, which defines the previous cell by `RowIndex` and `VisibleColumnIndex`. A callback function can be passed as a third parameter of [`getPreviousCell`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#getPreviousCell) method. The callback function accepts [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) as a param and returns a `boolean` value indication if a given criteria is met: <br />`const prevEditableCell = grid.getPreviousCell(0, 4, (col) => col.editable);` | `CurrentRowIndex: number, CurrentVisibleColumnIndex: number, callback: (Column) => boolean` |

<br />

Let's try the API to demonstrate how to achieve common scenarios like user input validation and custom navigation. First we need to register an event handler for the `GridKeydown` event:

```html
<igc-grid id="grid1" primary-key="ProductID">
</igc-grid>
```

```ts
constructor() {
        const grid = this.grid = document.getElementById('grid1') as IgcGridComponent;
        grid.data = this.data
        grid.addEventListener("gridKeydown", this.customKeydown);
    }
```

<!-- WebComponents -->

```typescript
public customKeydown(args: : CustomEvent<IgcGridKeydownEventArgs>) {
    const evt = args.detail;
    const target = evt.target as IgcCellType;
    const evt: KeyboardEvent = evt.event as KeyboardEvent;
    const type = evt.targetType;

    if (type === 'dataCell' && target.inEditMode && evt.key.toLowerCase() === 'tab') {
        // 1. USER INPUT VALIDATION ON TAB
    }
    if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
        // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    }
}
```

<!-- WebComponents -->

Based on the event arg values we identified two cases, where to provide our own logic (see above). Now, using the methods from the API, let's perform the desired - if the user is pressing <kbd>TAB</kbd> key over a cell in edit mode, we will perform validation on the input. If the user is pressing <kbd>ENTER</kbd> key over a cell, we will move focus to cell in the next row:

```typescript
    // 1. USER INPUT VALIDATION ON TAB
    if (target.column.dataType === 'number' && target.editValue < 10) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    this.grid1.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj) => {
            obj.target.activate();
        });
```

> [!Note]
> Please refer to the sample code for full implementation details.

Use the demo below to try out the custom scenarios that we just implemented:

- Double click or press <kbd>F2</kbd> key on a cell in a numeric column, change the value to **7** and press <kbd>TAB</kbd> key. Prompt message will be shown.
- Select a cell and press <kbd>ENTER</kbd> key a couple of times. Every key press will move the focus to a cell in the next row, under the same column.

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-size: var(--ig-size-medium);
    }
```


## Known Limitations

|Limitation|Description|
|--- |--- |
| Navigating inside а grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates to a grid cell that is out of view, parent container will not be scrolled.|

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
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
