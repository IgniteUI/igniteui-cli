---
title: React Grid Cell Editing - Ignite UI for React
_description: The Grid is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, excel editing, React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/cell-editing
_tocName: Cell Editing
_premium: true
---

# React Grid Cell Editing

The Ignite UI for React Cell Editing in React Grid provides a great data manipulation capability of the content of individual cells within the React Grid component and comes with powerful API for React CRUD operations. It is a fundamental feature in apps like spreadsheets, data tables, and data grids, allowing users to add, edit, or update data within specific cells.
By default, the Grid in Ignite UI for React is used in cell editing. And due to the **default cell editing template**, there will be different editors based on the column data type Top of Form.

In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.

## React Grid Cell Editing and Edit Templates Example

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

import { IgrGridModule, IgrPaginatorModule } from 'igniteui-react-grids';
import { IgrInputModule } from 'igniteui-react';
import { IgrGrid, IgrPaginator, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebPaginatorDescriptionModule, WebInputDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';
import { IgrGridEditEventArgs } from 'igniteui-react-grids';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrInput } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrPaginatorModule,
    IgrInputModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridOnEditEnter = this.webGridOnEditEnter.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    id="grid"
                    ref={this.gridRef}
                    data={this.nwindData}
                    primaryKey="ProductID"
                    allowFiltering={true}
                    onCellEditEnter={this.webGridOnEditEnter}>
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
                        inlineEditorTemplate={this.webGridNumericColEditCellTemplate}
                        editable={true}
                        filterable={false}>
                    </IgrColumn>
                </IgrGrid>
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
            WebGridDescriptionModule.register(context);
            WebPaginatorDescriptionModule.register(context);
            WebInputDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridOnEditEnter(args: IgrGridEditEventArgs): void {

        const column = args.detail.owner.getColumnByVisibleIndex(args.detail.cellID.columnID);
        if(column.field === 'ReorderLevel') {
            setTimeout(() => {
                const rowId = args.detail.cellID.rowID;
                const columnId = args.detail.cellID.columnID;
                const inputTemplateId = `edit-cell-${rowId}-${columnId}`;
                const element = document.getElementById(inputTemplateId);
                element?.focus();
            });
        }
    }

    public webGridNumericColEditCellTemplate = (e: { dataContext: IgrCellTemplateContext }) => {

        const cell = e.dataContext.cell;
        const rowId = cell.id.rowID;
        const columnId = cell.id.columnID;
        const inputTemplateId = `edit-cell-${rowId}-${columnId}`;

        return (
            <IgrInput
                type="number"
                id={inputTemplateId}
                name={cell.id.rowID}
                value={cell.editValue}
                onInput={(e: CustomEvent<string>) => {
                    cell.editValue = e.detail;
                }}
                style={{width: "100%"}}
            />
        );
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
- on single click to another cell - when you click on another cell in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html), your changes will be submitted.
- operations like paging, resize, pin or move will exit edit mode and changes will be submitted.

> [!Note]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). This is valid for both cell editing and row editing.

### Editing through API

You can also modify the cell value through the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) API but only if primary key is defined:

```typescript
function updateCell() {
    grid1Ref.current.updateCell(newValue, rowID, 'ReorderLevel');
}
```

<!-- ComponentEnd: Grid -->

Another way to update cell is directly through `Update` method of `Cell`:

```typescript
function updateCell() {
    const cell = grid1Ref.current.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = grid1Ref.current.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
}
```

<!-- ComponentEnd: Grid -->

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
.size-large {
    --ig-size: var(--ig-size-large);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrSelectModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebSelectDescriptionModule } from 'igniteui-react-core';
import { RoleplayDataStatsItem, RoleplayDataStats } from './RoleplayDataStats';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrSelect, IgrSelectItem } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrSelectModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid1: IgrGrid
    private grid1Ref(r: IgrGrid) {
        this.grid1 = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.grid1Ref = this.grid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.grid1Ref}
                    data={this.roleplayDataStats}
                    primaryKey="Name">
                    <IgrColumn
                        field="Name"
                        header="Character Name"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Race"
                        header="Race"
                        dataType="string"
                        inlineEditorTemplate={this.webGridCellEditCellTemplate}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Class"
                        header="Class"
                        inlineEditorTemplate={this.webGridCellEditCellTemplate}
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
                        inlineEditorTemplate={this.webGridCellEditCellTemplate}
                        editable={true}
                        dataType="string">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _roleplayDataStats: RoleplayDataStats = null;
    public get roleplayDataStats(): RoleplayDataStats {
        if (this._roleplayDataStats == null)
        {
            this._roleplayDataStats = new RoleplayDataStats();
        }
        return this._roleplayDataStats;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
            WebSelectDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridCellEditCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
        let cellValues: any = [];
        let uniqueValues: any = [];
        const cell = e.dataContext.cell;
        const colIndex = cell.id.columnID;
        let grid1 = this.grid1;
        const field: string = grid1.getColumnByVisibleIndex(colIndex).field;
        const key = field + "_" + cell.id.rowID;
        let index = 0;
        let roleplayDataStats = grid1.data;
        for(const i of (roleplayDataStats as any)){
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


<!-- ComponentStart: Grid -->

### Grid Excel Style Editing

Using Excel Style Editing allows the user to navigate trough the cells just as he would using the Excel, and ever so quickly edit them.

Implementing this custom functionality can be done by utilizing the events of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). First we hook up to the grid's keydown events, and from there we can implement two functionalities:

```tsx
const gridRef = useRef<IgrGrid>();
useEffect(() => {
    gridRef.current.addEventListener("keydown", handleKeyDown);
    return () => {
        gridRef.current.removeEventListener("keydown", handleKeyDown);
    };
}, []);
<IgrGrid ref={gridRef} autoGenerate={false} data={NwindData} primaryKey="ProductID">
</IgrGrid>
```

> [!Note]
> We are using the native browser keydown event instead of React’s synthetic onKeyDown event. When a cell enters edit mode and the ENTER key is pressed to move to the next row, the grid’s editing feature updates the cell value and closes the edit mode. As a result, the input element used for editing is removed from the DOM. Due to React’s event system optimizations, the onKeyDown synthetic event does not bubble up to the grid because the element no longer exists in the React tree at that moment. Therefore, using the native event listener is necessary to ensure the expected behavior.

- Constant edit mode

```typescript
function handleKeyDown(event: KeyBoardEvent) {
    const code = event.code;
    const grid = event.currentTarget as IgrGrid;
    const activeElem = grid.selectedCells[0];

    if ((event.code >= "Digit0" && event.code <= "Digit9") || (event.code >= "KeyA" && event.code <= "KeyZ")
        || (event.code >= "Numpad0" && event.code <= "Numpad9" && event.code !== "Enter" && event.code !== "NumpadEnter")) {
        if (activeElem && !activeElem.editMode) {
            activeElem.editMode = true;
            activeElem.editValue = event.key;
        } else if (activeElem && activeElem.editMode) {
            event.preventDefault();
            activeElem.editValue = activeElem.editValue + event.key;
        }
    }
}
```

- <kbd>ENTER</kbd>/<kbd>SHIFT</kbd> + <kbd>ENTER</kbd> navigation

```typescript
if (code === "Enter" || code === "NumpadEnter") {
    const thisRow = activeElem.row.index;
    const dataView = grid.dataView;
    const nextRowIndex = getNextEditableRowIndex(thisRow, dataView, event.shiftKey);

    grid.navigateTo(nextRowIndex, activeElem.column.visibleIndex, (obj: any) => {
        obj.target.activate();
        grid.endEdit(true);
        grid.markForCheck();
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

#### React Grid Excel Style Editing Sample

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrGrid, IgrColumn, IgrGridKeydownEventArgs } from "igniteui-react-grids";
import NwindData from "./NwindData.json";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

function Sample() {
  const gridRef = useRef<IgrGrid>();
  useEffect(() => {
    gridRef.current.addEventListener("keydown", handleKeyDown);
    return () => {
      gridRef.current.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    const code = event.code;
    const grid = event.currentTarget as IgrGrid;
    const activeElem = grid.selectedCells[0];

    if ((event.code >= "Digit0" && event.code <= "Digit9") || (event.code >= "KeyA" && event.code <= "KeyZ") || (event.code >= "Numpad0" && event.code <= "Numpad9" && event.code !== "Enter" && event.code !== "NumpadEnter")) {
      if (activeElem && !activeElem.editMode) {
        activeElem.editMode = true;
        activeElem.editValue = event.key;
      } else if (activeElem && activeElem.editMode) {
        event.preventDefault();
        activeElem.editValue = activeElem.editValue + event.key;
      }
    }

    if (code === "Enter" || code === "NumpadEnter") {
      const thisRow = activeElem.row.index;
      const dataView = grid.dataView;
      const nextRowIndex = getNextEditableRowIndex(thisRow, dataView, event.shiftKey);

      grid.navigateTo(nextRowIndex, activeElem.column.visibleIndex, (obj: any) => {
        obj.target.activate();
        grid.endEdit(true);
        grid.markForCheck();
      });
    }
  };

  const getNextEditableRowIndex = (currentRowIndex: number, dataView: any, previous: boolean) => {
    if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
      return currentRowIndex;
    }
    if (previous) {
      return dataView.findLastIndex((rec: any, index: number) => index < currentRowIndex && isEditableDataRecordAtIndex(index, dataView));
    }
    return dataView.findIndex((rec: any, index: number) => index > currentRowIndex && isEditableDataRecordAtIndex(index, dataView));
  };

  const isEditableDataRecordAtIndex = (dataViewIndex: number, dataView: any) => {
    const rec = dataView[dataViewIndex];
    return !rec.expression && !rec.summaries && !rec.childGridsData && !rec.detailsData;
  };

  const cancelGridKeydown = (args: IgrGridKeydownEventArgs) => {
    if(args.detail.event.code === "Enter" || args.detail.event.code === "NumpadEnter") {
      args.detail.cancel = true; 
    }
  };

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrGrid ref={gridRef} autoGenerate={false} data={NwindData} primaryKey="ProductID" onGridKeydown={cancelGridKeydown}>
          <IgrColumn field="ProductID" header="Product ID" editable={true} groupable={true} hidden={true} />
          <IgrColumn field="ProductName" header="Product Name" dataType="string" editable={true} />
          <IgrColumn field="UnitPrice" header="Unit Price" dataType="number" editable={true} />
          <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit" groupable={true} dataType="string" editable={true} />
          <IgrColumn field="ReorderLevel" header="Reorder Level" dataType="number" groupable={true} editable={true} />
        </IgrGrid>
      </div>
    </div>
  );
}

export default Sample;

// Render the component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sample />);
```


Main benefits of the above approach include:

- Constant edit mode: typing while a cell is selected will immediately enter edit mode with the value typed, replacing the existing one
- Any non-data rows are skipped when navigating with <kbd>ENTER</kbd>/<kbd>SHIFT</kbd> + <kbd>ENTER</kbd>. This allows users to quickly cycle through their values.

<!-- ComponentEnd: Grid -->

## CRUD operations

> [!Note]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.

The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) provides a straightforward API for basic CRUD operations.

### Adding a new record

The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) component exposes the [`addRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#addRow) method which will add the provided data to the data source itself.

```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = getNewRecord();
grid1Ref.current.addRow(record);
```

<!-- ComponentEnd: Grid -->

### Updating data in the Grid

Updating data in the Grid is achieved through [`updateRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#updateRow) and [`updateCell`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#updateCell) methods but **only if the PrimaryKey for the grid is defined**. You can also directly update a cell and/or a row value through their respective **update** methods.

<!-- ComponentStart: Grid -->

```typescript
// Updating the whole row
grid1Ref.current.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
grid1Ref.current.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
selectedCell.update(newData);

// Directly using the row `update` method
const row = grid1Ref.current.getRowByKey(rowID);
row.update(newData);
```

<!-- ComponentEnd: Grid -->

### Deleting data from the Grid

Please keep in mind that [`deleteRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#deleteRow) method will remove the specified row only if a [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey) is defined.

<!-- ComponentStart: Grid -->

```typescript
// Delete row through Grid API
grid1Ref.current.deleteRow(selectedCell.cellID.rowID);
// Delete row through row object
const row = grid1Ref.current.getRowByIndex(rowIndex);
row.delete();
```

### Cell Validation on Edit Event

Using the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)'s editing events, we can alter how the user interacts with the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

In this example, we'll validate a cell based on the data entered in it by binding to the `CellEdit` event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event.

The first thing we need to do is bind to the grid's event:

```tsx
<IgrGrid onCellEdit={handleCellEdit}>
</IgrGrid>
```

The `CellEdit` emits whenever **any** cell's value is about to be committed. In our **CellEdit** definition, we need to make sure that we check for our specific column before taking any action:

<!-- ComponentStart: Grid -->

```typescript
function handleCellEdit(args: IgrGridEditEventArgs): void {
    const column = args.detail.column;

    if (column.field === 'UnitsOnOrder') {
        const rowData = args.detail.rowData;
        if (!rowData) {
            return;
        }
        if (args.detail.newValue > rowData.UnitsInStock) {
            args.detail.cancel = true;
            alert("You cannot order more than the units in stock!");
        }
    }
}
```

If the value entered in a cell under the **Units On Order** column is larger than the available amount (the value under **Units in Stock**), the editing will be cancelled and the user will be alerted to the cancellation.

<!-- ComponentEnd: Grid -->

<!-- ComponentEnd: TreeGrid -->

The result of the above validation being applied to our [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) can be seen in the below demo:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';
import { IgrGridEditEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private column: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridEditingEventsCellEdit = this.webGridEditingEventsCellEdit.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.nwindData}
                    primaryKey="ProductID"
                    onCellEdit={this.webGridEditingEventsCellEdit}>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="number"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units In Stock"
                        dataType="number"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsOnOrder"
                        header="Units on Order"
                        dataType="number"
                        editable={true}>
                    </IgrColumn>
                </IgrGrid>
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
            WebGridDescriptionModule.register(context);
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
<IgrGrid className="grid"></IgrGrid>
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrPaginatorModule } from 'igniteui-react-grids';
import { IgrGrid, IgrPaginator, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebPaginatorDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrPaginatorModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
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
                <IgrGrid
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
                </IgrGrid>
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
            WebGridDescriptionModule.register(context);
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

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

<!---->

- [`IgrDatePicker`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdatepicker.html)

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
