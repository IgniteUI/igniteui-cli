---
title: React Tree Grid Cell Editing - Ignite UI for React
_description: The Tree Grid is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, excel editing, React, Tree Grid, IgrTreeGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/cell-editing
_tocName: Cell Editing
_premium: true
---

# React Tree Grid Cell Editing

The Ignite UI for React Cell Editing in React Tree Grid provides a great data manipulation capability of the content of individual cells within the React Tree Grid component and comes with powerful API for React CRUD operations. It is a fundamental feature in apps like spreadsheets, data tables, and data grids, allowing users to add, edit, or update data within specific cells.
By default, the Grid in Ignite UI for React is used in cell editing. And due to the **default cell editing template**, there will be different editors based on the column data type Top of Form.

In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.

## React Tree Grid Cell Editing and Edit Templates Example

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPaginatorModule, IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrPaginator, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebPaginatorDescriptionModule, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesNestedTreeDataItem, EmployeesNestedTreeData } from './EmployeesNestedTreeData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPaginatorModule,
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesNestedTreeData}
                    primaryKey="ID"
                    allowFiltering={true}
                    foreignKey="ParentID">
                    <IgrPaginator
                        perPage={10}>
                    </IgrPaginator>
                    <IgrColumn
                        field="Name"
                        dataType="string"
                        editable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string"
                        editable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        editable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="date"
                        editable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OnPTO"
                        dataType="boolean"
                        editable={true}
                        hasSummary={true}
                        width="130px">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesNestedTreeData: EmployeesNestedTreeData = null;
    public get employeesNestedTreeData(): EmployeesNestedTreeData {
        if (this._employeesNestedTreeData == null)
        {
            this._employeesNestedTreeData = new EmployeesNestedTreeData();
        }
        return this._employeesNestedTreeData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebPaginatorDescriptionModule.register(context);
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
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
- on single click to another cell - when you click on another cell in the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html), your changes will be submitted.
- operations like paging, resize, pin or move will exit edit mode and changes will be submitted.

> [!Note]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html). This is valid for both cell editing and row editing.

### Editing through API

You can also modify the cell value through the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) API but only if primary key is defined:

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

```tsx
<IgrColumn
    field="race"
    header="Race"
    dataType="string"
    editable={true}
    inlineEditorTemplate={this.webGridCellEditCellTemplate}>
</IgrColumn>
```

and pass the templates to this column in the index.ts file:

```typescript
public webGridCellEditCellTemplate = (e: IgrCellTemplateContext) => {
    let cellValues: any = [];
    let uniqueValues: any = [];
    const cell = e.cell;
    const colIndex = cell.id.columnID;
    const field: string = this.grid1.getColumnByVisibleIndex(colIndex).field;
    let index = 0;
    for (const i of this.roleplayDataStats as any) {
      if (uniqueValues.indexOf(i[field]) === -1) {
        cellValues.push(
          <>
            <IgrSelectItem
              selected={e.cell.value == i[field]}
              value={i[field]}
            >
              <div>{i[field]}</div>
            </IgrSelectItem>
          </>
        );
        uniqueValues.push(i[field]);
      }
      index++;
    }
    return (
      <>
        <IgrSelect
          onChange={(x: any) => {
            setTimeout(() => {
              cell.editValue = x.target.value;
            });
          }}
        >
          {cellValues}
        </IgrSelect>
      </>
    );
  };
```

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
.size-large {
    --ig-size: var(--ig-size-large);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrSelectModule } from 'igniteui-react';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule, WebSelectDescriptionModule } from 'igniteui-react-core';
import { RoleplayTreeGridDataItem, RoleplayTreeGridData } from './RoleplayTreeGridData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrSelect, IgrSelectItem } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule,
    IgrSelectModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid1: IgrTreeGrid
    private treeGrid1Ref(r: IgrTreeGrid) {
        this.treeGrid1 = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGrid1Ref = this.treeGrid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGrid1Ref}
                    id="treeGrid1"
                    data={this.roleplayTreeGridData}
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="Name"
                        header="Character Name"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Race"
                        header="Race"
                        dataType="string"
                        editable={true}
                        inlineEditorTemplate={this.webTreeGridCellEditCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Class"
                        header="Class"
                        inlineEditorTemplate={this.webTreeGridCellEditCellTemplate}
                        dataType="string"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        header="Age"
                        dataType="string"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Alignment"
                        header="Alignment"
                        inlineEditorTemplate={this.webTreeGridCellEditCellTemplate}
                        dataType="string"
                        editable={true}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _roleplayTreeGridData: RoleplayTreeGridData = null;
    public get roleplayTreeGridData(): RoleplayTreeGridData {
        if (this._roleplayTreeGridData == null)
        {
            this._roleplayTreeGridData = new RoleplayTreeGridData();
        }
        return this._roleplayTreeGridData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
            WebSelectDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webTreeGridCellEditCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
        let cellValues: any = [];
        let uniqueValues: any = [];
        const cell = e.dataContext.cell;
        const colIndex = cell.id.columnID;
        var treeGrid1 = this.treeGrid1;
        const field: string = treeGrid1.getColumnByVisibleIndex(colIndex).field;
        let roleplayTreeGridData = treeGrid1.data;
        const key = field + "_" + cell.id.rowID;
        let index = 0;
        for(const i of (roleplayTreeGridData as any)){
            if(uniqueValues.indexOf(i[field]) === -1 )
            {
                cellValues.push(<><IgrSelectItem selected={e.dataContext.cell.value == i[field]}
                 value={i[field]} key={key + "_" + index}>
                    <div key={key + "_" + index}>{i[field]}</div>
            </IgrSelectItem></>);
                uniqueValues.push(i[field]);

            }
            index++;
        }
        return (
            <IgrSelect className="size-large" key={key} onChange={(x: any) => {
                    setTimeout(() => {
                        cell.editValue = x.target.value;
                    });
                }}>
                {cellValues}
            </IgrSelect>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## CRUD operations

> [!Note]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.

The [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) provides a straightforward API for basic CRUD operations.

### Adding a new record

The [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) component exposes the [`addRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html#addRow) method which will add the provided data to the data source itself.

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

Updating data in the Tree Grid is achieved through [`updateRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#updateRow) and [`updateCell`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#updateCell) methods but **only if the PrimaryKey for the grid is defined**. You can also directly update a cell and/or a row value through their respective **update** methods.

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

Please keep in mind that [`deleteRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#deleteRow) method will remove the specified row only if a [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey) is defined.

<!-- ComponentStart: TreeGrid -->

```typescript
// Delete row through Tree Grid API
this.treeGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.treeGrid.getRowByIndex(rowIndex);
row.delete();
```

### Cell Validation on Edit Event

Using the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html)'s editing events, we can alter how the user interacts with the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html).

In this example, we'll validate a cell based on the data entered in it by binding to the `CellEdit` event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event.

The first thing we need to do is bind to the grid's event:

```tsx
<IgrTreeGrid onCellEdit={handleCellEdit}>
</IgrTreeGrid>
```

The `CellEdit` emits whenever **any** cell's value is about to be committed. In our **CellEdit** definition, we need to make sure that we check for our specific column before taking any action:

<!-- ComponentStart: TreeGrid -->

```tsx
public webTreeGridCellEdit(args: IgrGridEditEventArgs): void {
    const column = args.detail.column;

    if (column.field === 'Age') {
        if (args.detail.newValue < 18) {
            args.detail.cancel = true;
            alert('Employees must be at least 18 years old!');
        }
    } else if (column.field === 'HireDate') {
        if (args.detail.newValue > new Date().getTime()) {
            args.detail.cancel = true;
            alert('The employee hire date must be in the past!');
        }
    }
}
```

<!-- ComponentEnd: TreeGrid -->

<!-- Blazor -->

<!-- ComponentEnd: TreeGrid -->

The result of the above validation being applied to our [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) can be seen in the below demo:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesNestedTreeDataItem, EmployeesNestedTreeData } from './EmployeesNestedTreeData';
import { IgrGrid, IgrGridEditEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
        this.webTreeGridCellEdit = this.webTreeGridCellEdit.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesNestedTreeData}
                    primaryKey="ID"
                    onCellEdit={this.webTreeGridCellEdit}
                    foreignKey="ParentID">
                    <IgrColumn
                        field="Name"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="date"
                        editable={true}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesNestedTreeData: EmployeesNestedTreeData = null;
    public get employeesNestedTreeData(): EmployeesNestedTreeData {
        if (this._employeesNestedTreeData == null)
        {
            this._employeesNestedTreeData = new EmployeesNestedTreeData();
        }
        return this._employeesNestedTreeData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webTreeGridCellEdit(args: IgrGridEditEventArgs): void {
        const column = args.detail.column;

        if (column.field === 'Age') {
            if (args.detail.newValue < 18) {
                args.detail.cancel = true;
                alert('Employees must be at least 18 years old!');
            }
        } else if (column.field === 'HireDate') {
            if (args.detail.newValue > new Date().getTime()) {
                args.detail.cancel = true;
                alert('The employee hire date must be in the past!');
            }
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrTreeGrid className="treeGrid"></IgrTreeGrid>
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPaginatorModule, IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrPaginator, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebPaginatorDescriptionModule, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesNestedTreeDataItem, EmployeesNestedTreeData } from './EmployeesNestedTreeData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPaginatorModule,
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesNestedTreeData}
                    primaryKey="ID"
                    allowFiltering={true}
                    foreignKey="ParentID">
                    <IgrPaginator
                        perPage={10}>
                    </IgrPaginator>
                    <IgrColumn
                        field="Name"
                        dataType="string"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="date"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OnPTO"
                        dataType="boolean"
                        editable={true}
                        width="130px">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesNestedTreeData: EmployeesNestedTreeData = null;
    public get employeesNestedTreeData(): EmployeesNestedTreeData {
        if (this._employeesNestedTreeData == null)
        {
            this._employeesNestedTreeData = new EmployeesNestedTreeData();
        }
        return this._employeesNestedTreeData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebPaginatorDescriptionModule.register(context);
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## API References

- [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html)
- [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html)

## Additional Resources
