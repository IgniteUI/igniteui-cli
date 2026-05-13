---
title: React Hierarchical Grid Cell Editing - Ignite UI for React
_description: The Hierarchical Grid is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, excel editing, React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/cell-editing
_tocName: Cell Editing
_premium: true
---

# React Hierarchical Grid Cell Editing

The Ignite UI for React Cell Editing in React Hierarchical Grid provides a great data manipulation capability of the content of individual cells within the React Hierarchical Grid component and comes with powerful API for React CRUD operations. It is a fundamental feature in apps like spreadsheets, data tables, and data grids, allowing users to add, edit, or update data within specific cells.
By default, the Grid in Ignite UI for React is used in cell editing. And due to the **default cell editing template**, there will be different editors based on the column data type Top of Form.

In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.

## React Hierarchical Grid Cell Editing and Edit Templates Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-size: var(--ig-size-medium);
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrPaginatorModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrPaginator, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, WebHierarchicalGridDescriptionModule, WebPaginatorDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrPaginatorModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    id="grid"
                    ref={this.gridRef}
                    data={this.nwindData}
                    primaryKey="ProductID"
                    allowFiltering={true}>
                    <IgrPaginator
                        perPage={10}>
                    </IgrPaginator>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units in Stock"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="boolean"
                        sortable={true}
                        hasSummary={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ReorderLevel"
                        header="Reorder Level"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        filterable={false}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Locations"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Shop"
                            header="Shop"
                            dataType="string"
                            editable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LastInventory"
                            header="Last Inventory"
                            dataType="date"
                            editable={true}
                            resizable={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _nwindData: any[] = NwindData;
    public get nwindData(): any[] {
        return this._nwindData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebHierarchicalGridDescriptionModule.register(context);
            WebPaginatorDescriptionModule.register(context);
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
- on single click to another cell - when you click on another cell in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html), your changes will be submitted.
- operations like paging, resize, pin or move will exit edit mode and changes will be submitted.

> [!Note]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html). This is valid for both cell editing and row editing.

### Editing through API

You can also modify the cell value through the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) API but only if primary key is defined:

<!-- ComponentStart: HierarchicalGrid -->

```typescript
public updateCell() {
    this.hierarchicalGrid.updateCell(newValue, rowID, 'Age');
}
```

<!-- ComponentEnd: HierarchicalGrid -->

Another way to update cell is directly through `Update` method of `Cell`:

<!-- ComponentStart: HierarchicalGrid -->

```typescript
public updateCell() {
    const cell = this.hierarchicalGrid.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = this.hierarchicalGrid.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
}
```

<!-- ComponentEnd: HierarchicalGrid -->

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

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrSelectModule } from 'igniteui-react';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, WebHierarchicalGridDescriptionModule, WebSelectDescriptionModule } from 'igniteui-react-core';
import HGridDndData from './HGridDndData.json';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrSelect, IgrSelectItem } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrSelectModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid1: IgrHierarchicalGrid
    private hierarchicalGrid1Ref(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid1 = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.hierarchicalGrid1Ref = this.hierarchicalGrid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.hGridDndData}
                    primaryKey="Name"
                    ref={this.hierarchicalGrid1Ref}>
                    <IgrColumn
                        field="Name"
                        header="Character Name"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Race"
                        header="Race"
                        dataType="string"
                        inlineEditorTemplate={this.hGridCellEditCellTemplate}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Class"
                        header="Class"
                        inlineEditorTemplate={this.hGridCellEditCellTemplate}
                        editable={true}
                        dataType="string">
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
                        inlineEditorTemplate={this.hGridCellEditCellTemplate}
                        editable={true}
                        dataType="string">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Skills"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Skill"
                            header="Skill"
                            dataType="string"
                            editable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Level"
                            header="Level"
                            dataType="string"
                            editable={true}
                            resizable={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hGridDndData: any[] = HGridDndData;
    public get hGridDndData(): any[] {
        return this._hGridDndData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebHierarchicalGridDescriptionModule.register(context);
            WebSelectDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public hGridCellEditCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
        let cellValues: any = [];
        let uniqueValues: any = [];
        const cell = e.dataContext.cell;
        const colIndex = cell.id.columnID;
        let hierarchicalGrid1 = this.hierarchicalGrid1;
        const field: string = hierarchicalGrid1.getColumnByVisibleIndex(colIndex).field;
        const key = field + "_" + cell.id.rowID;
        let index = 0;
        let hGridDndData = hierarchicalGrid1.data;
        for(const i of (hGridDndData as any)){
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

The [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) provides a straightforward API for basic CRUD operations.

### Adding a new record

The [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) component exposes the `AddRow` method which will add the provided data to the data source itself.

<!-- ComponentStart: HierarchicalGrid -->

```typescript
public addRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    const record = this.getNewRecord();
    this.hierarchicalGrid.addRow(record);
}
```

<!-- ComponentEnd: HierarchicalGrid -->

### Updating data in the Hierarchical Grid

Updating data in the Hierarchical Grid is achieved through [`updateRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#updateRow) and [`updateCell`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#updateCell) methods but **only if the PrimaryKey for the grid is defined**. You can also directly update a cell and/or a row value through their respective **update** methods.

<!-- ComponentStart: HierarchicalGrid -->

```typescript
// Updating the whole row
this.hierarchicalGrid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
this.hierarchicalGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.hierarchicalGrid.getRowByKey(rowID);
row.update(newData);
```

<!-- ComponentEnd: HierarchicalGrid -->

### Deleting data from the Hierarchical Grid

Please keep in mind that [`deleteRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#deleteRow) method will remove the specified row only if a [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey) is defined.

<!-- ComponentStart: HierarchicalGrid -->

```typescript
// Delete row through Grid API
this.hierarchicalGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
row.delete();
```

### Cell Validation on Edit Event

Using the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)'s editing events, we can alter how the user interacts with the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html).

In this example, we'll validate a cell based on the data entered in it by binding to the `CellEdit` event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event.

The first thing we need to do is bind to the grid's event:

```tsx
<IgrHierarchicalGrid onCellEdit={handleCellEdit}>
</IgrHierarchicalGrid>
```

The `CellEdit` emits whenever **any** cell's value is about to be committed. In our **CellEdit** definition, we need to make sure that we check for our specific column before taking any action:

<!-- Blazor -->

<!-- ComponentStart: HierarchicalGrid -->

If the value entered in a cell under the **Units On Order** column is larger than the available amount (the value under **Units in Stock**), the editing will be cancelled and the user will be alerted to the cancellation.

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```tsx
public handleCellEdit(event: IgrGridEditEventArgs): void {
    const detail = args.detail;
    if (detail.column != null && d.column.field == "UnitsOnOrder") {
        if (detail.newValue > detail.rowData.UnitsInStock) {
            detail.cancel = true;
            alert("You cannot order more than the units in stock!");
        }
    }
}
```

<!-- ComponentEnd: HierarchicalGrid -->

The result of the above validation being applied to our [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) can be seen in the below demo:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-size: var(--ig-size-medium);
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrPaginatorModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrPaginator, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, WebHierarchicalGridDescriptionModule, WebPaginatorDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';
import { IgrGrid, IgrGridEditEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrPaginatorModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridEditingEventsCellEdit = this.webGridEditingEventsCellEdit.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    id="grid"
                    ref={this.gridRef}
                    data={this.nwindData}
                    onCellEdit={this.webGridEditingEventsCellEdit}
                    primaryKey="ProductID"
                    allowFiltering={true}>
                    <IgrPaginator
                        perPage={10}>
                    </IgrPaginator>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units in Stock"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsOnOrder"
                        header="Units in Order"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="boolean"
                        sortable={true}
                        hasSummary={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ReorderLevel"
                        header="Reorder Level"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        filterable={false}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Locations"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Shop"
                            header="Shop"
                            dataType="string"
                            editable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LastInventory"
                            header="Last Inventory"
                            dataType="date"
                            editable={true}
                            resizable={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _nwindData: any[] = NwindData;
    public get nwindData(): any[] {
        return this._nwindData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebHierarchicalGridDescriptionModule.register(context);
            WebPaginatorDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridEditingEventsCellEdit(args: IgrGridEditEventArgs): void {
        var d = args.detail;

        if (d.column != null && d.column.field == "UnitsOnOrder") {
            if (d.newValue > d.rowData.UnitsInStock) {
                d.cancel = true;
                alert("You cannot order more than the units in stock!")
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
<IgrHierarchicalGrid className="hierarchicalGrid"></IgrHierarchicalGrid>
```

Then set the related CSS properties for that class:

```css
.hierarchicalGrid {
    --ig-grid-edit-mode-color: #FFA500;
    --ig-grid-cell-active-border-color: #FFA500;
    --ig-grid-cell-editing-background: #add8e6;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrPaginatorModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrPaginator, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, WebHierarchicalGridDescriptionModule, WebPaginatorDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrPaginatorModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    id="grid"
                    ref={this.gridRef}
                    data={this.nwindData}
                    primaryKey="ProductID"
                    allowFiltering={true}>
                    <IgrPaginator
                        perPage={10}>
                    </IgrPaginator>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units in Stock"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="boolean"
                        sortable={true}
                        hasSummary={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ReorderLevel"
                        header="Reorder Level"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        filterable={false}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Locations"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Shop"
                            header="Shop"
                            dataType="string"
                            editable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LastInventory"
                            header="Last Inventory"
                            dataType="date"
                            editable={true}
                            resizable={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _nwindData: any[] = NwindData;
    public get nwindData(): any[] {
        return this._nwindData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebHierarchicalGridDescriptionModule.register(context);
            WebPaginatorDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## API References

- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)
- [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html)

## Additional Resources
