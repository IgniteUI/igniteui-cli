---
title: Web Components Tree Grid Cell Editing - Ignite UI for Web Components
_description: The Tree Grid is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, excel editing, Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/cell-editing
_tocName: Cell Editing
_premium: true
---

# Web Components Tree Grid Cell Editing

The Ignite UI for Web Components Cell Editing in Web Components Tree Grid provides a great data manipulation capability of the content of individual cells within the Web Components Tree Grid component and comes with powerful API for React CRUD operations. It is a fundamental feature in apps like spreadsheets, data tables, and data grids, allowing users to add, edit, or update data within specific cells.
By default, the Grid in Ignite UI for Web Components is used in cell editing. And due to the **default cell editing template**, there will be different editors based on the column data type Top of Form.

In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.

## Web Components Tree Grid Cell Editing and Edit Templates Example

```typescript
export class EmployeesNestedTreeDataItem {
    public constructor(init: Partial<EmployeesNestedTreeDataItem>) {
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
export class EmployeesNestedTreeData extends Array<EmployeesNestedTreeDataItem> {
    public constructor(items: Array<EmployeesNestedTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesNestedTreeDataItem({ Age: 55, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, Phone: `0251-031259`, OnPTO: false, ParentID: -1, Title: `Development Manager` }),
                new EmployeesNestedTreeDataItem({ Age: 42, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, Phone: `(21) 555-0091`, OnPTO: true, ParentID: -1, Title: `CEO` }),
                new EmployeesNestedTreeDataItem({ Age: 49, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, Phone: `(071) 23 67 22 20`, OnPTO: true, ParentID: -1, Title: `Accounting Manager` }),
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
- on single click to another cell - when you click on another cell in the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html), your changes will be submitted.
- operations like paging, resize, pin or move will exit edit mode and changes will be submitted.

> [!Note]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html). This is valid for both cell editing and row editing.

### Editing through API

You can also modify the cell value through the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) API but only if primary key is defined:

<!-- ComponentStart: TreeGrid -->

```typescript
public updateCell() {
    this.treeGrid.updateCell(newValue, rowID, 'Age');
}
```

<!-- ComponentEnd: TreeGrid -->

Another way to update cell is directly through `Update` method of `Cell`:

<!-- ComponentStart: TreeGrid -->

```typescript
public updateCell() {
    const cell = this.treeGrid.getCellByColumn(rowIndex, 'Age');
    // You can also get cell by rowID if primary key is defined
    // const cell = this.treeGrid.getCellByKey(rowID, 'Age');
    cell.update(9999);
}
```

<!-- ComponentEnd: TreeGrid -->

### Cell Editing Templates

You can see and learn more for default cell editing templates in the [general editing topic](editing.md#editing-templates).

If you want to provide a custom template which will be applied to a cell, you can pass such template either to the cell itself, or to its header. First create the column as you usually would:

<!-- ComponentStart: TreeGrid -->

```html
<igc-column
    field="Category"
    data-type="string"
    editable="true"
    id="column1">
</igc-column>
```

and pass the templates to this column in the index.ts file:

```ts

constructor() {
    var treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    var column1 = document.getElementById('column1') as IgcColumnComponent;

    treeGrid.data = this.webGridCellEditSampleRoleplay;
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

<!-- ComponentEnd: TreeGrid -->

Working sample of the above can be found here for further reference:

```typescript
export class RoleplayTreeGridDataItem {
    public constructor(init: Partial<RoleplayTreeGridDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Age: string;
    public Alignment: string;
    public Race: string;
    public Class: string;

}
export class RoleplayTreeGridData extends Array<RoleplayTreeGridDataItem> {
    public constructor(items: Array<RoleplayTreeGridDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new RoleplayTreeGridDataItem({ ID: 1, ParentID: 8, Name: `Stredo`, Age: `244`, Alignment: `💜 Lawful evil`, Race: `👩 Human`, Class: `🎻 Bard` }),
                new RoleplayTreeGridDataItem({ ID: 2, ParentID: 7, Name: `Haluun`, Age: `40`, Alignment: `🤍 Unaligned`, Race: `🧒🏻 Hafling`, Class: `🙏🏻 Monk` }),
                new RoleplayTreeGridDataItem({ ID: 3, ParentID: 9, Name: `Ivellios`, Age: `244`, Alignment: `🧡 Chaotic good`, Race: `👩 Human`, Class: `⚔️ Paladin` }),
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

## CRUD operations

> [!Note]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.

The [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) provides a straightforward API for basic CRUD operations.

### Adding a new record

The [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) component exposes the [`addRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html#addRow) method which will add the provided data to the data source itself.

<!-- ComponentStart: TreeGrid -->

```typescript
public addNewChildRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    // And specifying the parentRowID.
    const record = this.getNewRecord();
    this.treeGrid.addRow(record, 1);
}
```

<!-- ComponentEnd: TreeGrid -->

### Updating data in the Tree Grid

Updating data in the Tree Grid is achieved through [`updateRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#updateRow) and [`updateCell`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#updateCell) methods but **only if the PrimaryKey for the grid is defined**. You can also directly update a cell and/or a row value through their respective **update** methods.

<!-- ComponentStart: TreeGrid -->

```typescript
// Updating the whole row
this.treeGrid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Tree Grid API
this.treeGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.treeGrid.getRowByKey(rowID);
row.update(newData);
```

<!-- ComponentEnd: TreeGrid -->

### Deleting data from the Tree Grid

Please keep in mind that [`deleteRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#deleteRow) method will remove the specified row only if a [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey) is defined.

<!-- ComponentStart: TreeGrid -->

```typescript
// Delete row through Tree Grid API
this.treeGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.treeGrid.getRowByIndex(rowIndex);
row.delete();
```

### Cell Validation on Edit Event

Using the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)'s editing events, we can alter how the user interacts with the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html).

In this example, we'll validate a cell based on the data entered in it by binding to the `CellEdit` event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event.

The first thing we need to do is bind to the grid's event:

<!-- ComponentStart: TreeGrid -->

```typescript
constructor() {
    var treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    this.webTreeGridCellEdit = this.webTreeGridCellEdit.bind(this);
    treeGrid.addEventListener("cellEdit", this.webTreeGridCellEdit);
}
```

<!-- ComponentEnd: TreeGrid -->

The `CellEdit` emits whenever **any** cell's value is about to be committed. In our **CellEdit** definition, we need to make sure that we check for our specific column before taking any action:

<!-- ComponentStart: TreeGrid -->

```typescript
public webTreeGridCellEdit(event: CustomEvent<IgcGridEditEventArgs>): void {
    const column = event.detail.column;
        
    if (column.field === 'Age') {
        if (event.detail.newValue < 18) {
            event.detail.cancel = true;
            alert('Employees must be at least 18 years old!');
        }
    } else if (column.field === 'HireDate') {
        if (event.detail.newValue > new Date().getTime()) {
            event.detail.cancel = true;
            alert('The employee hire date must be in the past!');
        }
    }
}

```

<!-- Blazor -->

<!-- ComponentEnd: TreeGrid -->

The result of the above validation being applied to our [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) can be seen in the below demo:

```typescript
export class EmployeesNestedTreeDataItem {
    public constructor(init: Partial<EmployeesNestedTreeDataItem>) {
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
export class EmployeesNestedTreeData extends Array<EmployeesNestedTreeDataItem> {
    public constructor(items: Array<EmployeesNestedTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesNestedTreeDataItem({ Age: 55, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, Phone: `0251-031259`, OnPTO: false, ParentID: -1, Title: `Development Manager` }),
                new EmployeesNestedTreeDataItem({ Age: 42, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, Phone: `(21) 555-0091`, OnPTO: true, ParentID: -1, Title: `CEO` }),
                new EmployeesNestedTreeDataItem({ Age: 49, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, Phone: `(071) 23 67 22 20`, OnPTO: true, ParentID: -1, Title: `Accounting Manager` }),
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

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

<!-- ComponentStart: TreeGrid -->

```html
<igc-tree-grid class="treeGrid"></igc-tree-grid>
```

Then set the related CSS properties for that class:

```css
.treeGrid {
    --ig-grid-edit-mode-color: #FFA500;
    --ig-grid-cell-active-border-color: #FFA500;
    --ig-grid-cell-editing-background: #add8e6;
}
```

<!-- ComponentEnd: TreeGrid -->

### Styling Example

```typescript
export class EmployeesNestedTreeDataItem {
    public constructor(init: Partial<EmployeesNestedTreeDataItem>) {
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
export class EmployeesNestedTreeData extends Array<EmployeesNestedTreeDataItem> {
    public constructor(items: Array<EmployeesNestedTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesNestedTreeDataItem({ Age: 55, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, Phone: `0251-031259`, OnPTO: false, ParentID: -1, Title: `Development Manager` }),
                new EmployeesNestedTreeDataItem({ Age: 42, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, Phone: `(21) 555-0091`, OnPTO: true, ParentID: -1, Title: `CEO` }),
                new EmployeesNestedTreeDataItem({ Age: 49, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, Phone: `(071) 23 67 22 20`, OnPTO: true, ParentID: -1, Title: `Accounting Manager` }),
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

#treeGrid {
	--cell-editing-background: #4567bb;
    --cell-active-border-color: #4567bb;
    --cell-edited-value-color: #fff;
}
```

## API References

- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)
- [`IgcDatePickerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatepickercomponent.html)

## Additional Resources
