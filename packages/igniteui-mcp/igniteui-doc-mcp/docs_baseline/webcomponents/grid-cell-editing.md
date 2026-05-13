---
title: Web Components Grid Cell Editing - Ignite UI for Web Components
_description: The Grid is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, excel editing, Web Components, Grid, IgcGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/cell-editing
_tocName: Cell Editing
_premium: true
---

# Web Components Grid Cell Editing

The Ignite UI for Web Components Cell Editing in Web Components Grid provides a great data manipulation capability of the content of individual cells within the Web Components Grid component and comes with powerful API for React CRUD operations. It is a fundamental feature in apps like spreadsheets, data tables, and data grids, allowing users to add, edit, or update data within specific cells.
By default, the Grid in Ignite UI for Web Components is used in cell editing. And due to the **default cell editing template**, there will be different editors based on the column data type Top of Form.

In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.

## Web Components Grid Cell Editing and Edit Templates Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-size: var(--ig-size-medium);
    }
```

## Cell Editing

### Editing through UI

You can enter edit mode for specific cell, when an editable cell is focused in one of the following ways:

- on double click;
- on single click - Single click will enter edit mode only if the previously selected cell was in edit mode and currently selected cell is editable. If the previously selected cell was not in edit mode, single click will select the cell without entering edit mode;
- on key press <kbd>ENTER</kbd>;
- on key press <kbd>F2</kbd>;

You can exit edit mode **without committing** the changes in one of the following ways:

- on key press <kbd>Escape</kbd>;
- when you perform **sorting**, **filtering**, **searching** and **hiding** operations;

You can exit edit mode and **commit** the changes in one of the following ways:

- on key press <kbd>ENTER</kbd>;
- on key press <kbd>F2</kbd>;
- on key press <kbd>TAB</kbd>;
- on single click to another cell - when you click on another cell in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html), your changes will be submitted.
- operations like paging, resize, pin or move will exit edit mode and changes will be submitted.

> [!Note]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html). This is valid for both cell editing and row editing.

### Editing through API

You can also modify the cell value through the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) API but only if primary key is defined:

<!-- ComponentStart: Grid -->

```typescript
public updateCell() {
    this.grid1.updateCell(newValue, rowID, 'ReorderLevel');
}
```

<!-- ComponentEnd: Grid -->

Another way to update cell is directly through [`update`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowdirective.html#update) method of `Cell`:

<!-- ComponentStart: Grid -->

```typescript
public updateCell() {
    const cell = this.grid1.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = this.grid1.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
}
```

<!-- ComponentEnd: Grid -->

### Cell Editing Templates

You can see and learn more for default cell editing templates in the [general editing topic](editing.md#editing-templates).

If you want to provide a custom template which will be applied to a cell, you can pass such template either to the cell itself, or to its header. First create the column as you usually would:

<!-- ComponentStart: Grid -->

```html
<igc-column
    field="Race"
    data-type="string"
    editable="true"
    id="column1">
</igc-column>
```

and pass the templates to this column in the index.ts file:

```typescript
constructor() {
    var grid1 = document.getElementById('grid1') as IgcGridComponent;
    var column1 = document.getElementById('column1') as IgcColumnComponent;
    var column2 = document.getElementById('column2') as IgcColumnComponent;
    var column3 = document.getElementById('column3') as IgcColumnComponent;

    grid1.data = this.webGridCellEditSampleRoleplay;
    column1.inlineEditorTemplate = this.webGridCellEditCellTemplate;
    column2.inlineEditorTemplate = this.webGridCellEditCellTemplate;
    column3.inlineEditorTemplate = this.webGridCellEditCellTemplate;
}


public webGridCellEditCellTemplate = (ctx: IgcCellTemplateContext) => {
    let cellValues: any = [];
    let uniqueValues: any = [];
    for(const i of (this.webGridCellEditSampleRoleplay as any)){
        const field: string = ctx.cell.column.field;
        if(uniqueValues.indexOf(i[field]) === -1 )
        {
            cellValues.push(html`<igc-select-item value=${i[field]}>${(i[field])}</igc-select-item>`);
            uniqueValues.push(i[field]);
        }
    }
    return html`
        <igc-select style="width:100%; height:100%" size="large" @igcChange=${(e: any) => ctx.cell.editValue = e.detail.value}>
            ${cellValues}
        </igc-select>
    `;
}
```

<!-- ComponentEnd: Grid -->

Working sample of the above can be found here for further reference:

```typescript
export class RoleplayDataStatsItem {
    public constructor(init: Partial<RoleplayDataStatsItem>) {
        Object.assign(this, init);
    }

    public Name: string;
    public Age: string;
    public Alignment: string;
    public Race: string;
    public Class: string;

}
export class RoleplayDataStats extends Array<RoleplayDataStatsItem> {
    public constructor(items: Array<RoleplayDataStatsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new RoleplayDataStatsItem({ Name: `Stredo`, Age: `244`, Alignment: `💜 Lawful evil`, Race: `👩 Human`, Class: `🎻 Bard` }),
                new RoleplayDataStatsItem({ Name: `Haluun`, Age: `40`, Alignment: `🤍 Unaligned`, Race: `🧒🏻 Hafling`, Class: `🙏🏻 Monk` }),
                new RoleplayDataStatsItem({ Name: `Ivellios`, Age: `244`, Alignment: `🧡 Chaotic good`, Race: `👩 Human`, Class: `⚔️ Paladin` }),
                // ... 20 more items
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

<!-- ComponentStart: Grid -->

### Grid Excel Style Editing

Using Excel Style Editing allows the user to navigate trough the cells just as he would using the Excel, and ever so quickly edit them.

Implementing this custom functionality can be done by utilizing the events of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html). First we hook up to the grid's keydown events, and from there we can implement two functionalities:

- Constant edit mode

```typescript
public keydownHandler(event) {
  const key = event.keyCode;
  const grid = this.grid;
  const activeElem = grid.navigation.activeNode;

  if ((key >= 48 && key <= 57) ||
      (key >= 65 && key <= 90) ||
      (key >= 97 && key <= 122)) {
        // Number or Alphabet upper case or Alphabet lower case
        const columnName = grid.getColumnByVisibleIndex(activeElem.column).field;
        const cell = grid.getCellByColumn(activeElem.row, columnName);
        if (cell && !grid.crudService.cellInEditMode) {
            grid.crudService.enterEditMode(cell);
            cell.editValue = event.key;
        }
    }
}
```

- <kbd>ENTER</kbd>/<kbd>SHIFT</kbd> + <kbd>ENTER</kbd> navigation

```typescript
if (key == 13) {
    let thisRow = activeElem.row;
    const column = activeElem.column;
    const rowInfo = grid.dataView;

    // to find the next eligible cell, we will use a custom method that will check the next suitable index
    let nextRow = this.getNextEditableRowIndex(thisRow, rowInfo, event.shiftKey);

    // and then we will navigate to it using the grid's built in method navigateTo
    this.grid.navigateTo(nextRow, column, (obj) => {
        obj.target.activate();
        this.grid.clearCellSelection();
        this.cdr.detectChanges();
    });
}
```

Key parts of finding the next eligible index would be:

```typescript
//first we check if the currently selected cell is the first or the last
if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
    return currentRowIndex;
}
// in case using shift + enter combination, we look for the first suitable cell going up the field
if (previous) {
    return  dataView.findLastIndex((rec, index) => index < currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
}
// or for the next one down the field
return dataView.findIndex((rec, index) => index > currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
```

Please check the full sample for further reference:

#### Web Components Grid Excel Style Editing Sample

```typescript
export class NwindDataItem {
    public constructor(init: Partial<NwindDataItem>) {
        Object.assign(this, init);
    }

    public ProductID: number;
    public ProductName: string;
    public SupplierID: number;
    public CategoryID: number;
    public QuantityPerUnit: string;
    public UnitPrice: number;
    public UnitsInStock: number;
    public UnitsOnOrder: number;
    public ReorderLevel: number;
    public Discontinued: boolean;
    public OrderDate: string;
    public Rating: number;
    public Locations: NwindDataItem_LocationsItem[];

}
export class NwindDataItem_LocationsItem {
    public constructor(init: Partial<NwindDataItem_LocationsItem>) {
        Object.assign(this, init);
    }

    public Shop: string;
    public LastInventory: string;

}
export class NwindData extends Array<NwindDataItem> {
    public constructor(items: Array<NwindDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new NwindDataItem(
                {
                    ProductID: 1,
                    ProductName: `Chai`,
                    SupplierID: 1,
                    CategoryID: 1,
                    QuantityPerUnit: `10 boxes x 20 bags`,
                    UnitPrice: 18,
                    UnitsInStock: 39,
                    UnitsOnOrder: 30,
                    ReorderLevel: 10,
                    Discontinued: false,
                    OrderDate: `2012-02-12`,
                    Rating: 5,
                    Locations: [
                        new NwindDataItem_LocationsItem(
                        {
                            Shop: `Fun-Tasty Co.`,
                            LastInventory: `2018-06-12`
                        }),
                        new NwindDataItem_LocationsItem(
                        {
                            Shop: `Farmer Market`,
                            LastInventory: `2018-04-04`
                        })]

                }),
                // ... 51 more items
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

Main benefits of the above approach include:

- Constant edit mode: typing while a cell is selected will immediately enter edit mode with the value typed, replacing the existing one
- Any non-data rows are skipped when navigating with <kbd>ENTER</kbd>/<kbd>SHIFT</kbd> + <kbd>ENTER</kbd>. This allows users to quickly cycle through their values.

<!-- ComponentEnd: Grid -->

## CRUD operations

> [!Note]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.

The [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) provides a straightforward API for basic CRUD operations.

### Adding a new record

The [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) component exposes the [`addRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#addRow) method which will add the provided data to the data source itself.

<!-- ComponentStart: Grid -->

```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = this.getNewRecord();
this.grid.addRow(record);
```

<!-- ComponentEnd: Grid -->

### Updating data in the Grid

Updating data in the Grid is achieved through [`updateRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#updateRow) and [`updateCell`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#updateCell) methods but **only if the PrimaryKey for the grid is defined**. You can also directly update a cell and/or a row value through their respective **update** methods.

<!-- ComponentStart: Grid -->

```typescript
// Updating the whole row
this.grid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
this.grid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.grid.getRowByKey(rowID);
row.update(newData);
```

<!-- ComponentEnd: Grid -->

### Deleting data from the Grid

Please keep in mind that [`deleteRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#deleteRow) method will remove the specified row only if a [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey) is defined.

<!-- ComponentStart: Grid -->

```typescript
// Delete row through Grid API
this.grid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.grid.getRowByIndex(rowIndex);
row.delete();
```

### Cell Validation on Edit Event

Using the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)'s editing events, we can alter how the user interacts with the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html).

In this example, we'll validate a cell based on the data entered in it by binding to the `CellEdit` event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event.

The first thing we need to do is bind to the grid's event:

<!-- ComponentStart: Grid -->

```typescript
constructor() {
    var grid = document.getElementById('grid') as IgcGridComponent;
    this.webGridCellEdit = this.webGridCellEdit.bind(this);
    grid.addEventListener("cellEdit", this.webGridCellEdit);
}
```

<!-- ComponentEnd: Grid -->

The `CellEdit` emits whenever **any** cell's value is about to be committed. In our **CellEdit** definition, we need to make sure that we check for our specific column before taking any action:

<!-- ComponentStart: Grid -->

```typescript
public webGridCellEdit(event: CustomEvent<IgcGridEditEventArgs>): void {
    const column = event.detail.column;
    if (column.field === 'UnitsOnOrder') {
            const rowData = event.detail.rowData;
            if (!rowData) {
                return;
            }
            if (event.detail.newValue > rowData.UnitsInStock) {
                event.cancel = true;
                alert("You cannot order more than the units in stock!");
            }
    }
}

```

If the value entered in a cell under the **Units On Order** column is larger than the available amount (the value under **Units in Stock**), the editing will be cancelled and the user will be alerted to the cancellation.

<!-- ComponentEnd: Grid -->

<!-- Blazor -->

<!-- ComponentEnd: TreeGrid -->

The result of the above validation being applied to our [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) can be seen in the below demo:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

<!-- ComponentStart: Grid -->

```html
<igc-grid class="grid"></igc-grid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-edit-mode-color: #FFA500;
    --ig-grid-cell-active-border-color: #FFA500;
    --ig-grid-cell-editing-background: #add8e6;
}
```

<!-- ComponentEnd: Grid -->

### Styling Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-size: var(--ig-size-medium);
    }

    #grid {
        --ig-grid-edit-mode-color: #FFA500;
        --ig-grid-cell-active-border-color: #AAFF00;
        --ig-grid-cell-editing-background: #ADD8E6;
    }
```

## API References

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)
- [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
- [Searching](search.md)

<!-- ComponentEnd: Grid -->
