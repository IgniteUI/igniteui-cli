---
title: React Tree Grid Row Dragging - Ignite UI for React
_description: Row dragging in React Tree Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: React, Tree Grid, IgrTreeGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-drag
_tocName: Row Dragging
_premium: true
---

# Row Dragging in React Tree Grid

The Ignite UI for React Row Dragging feature in React Tree Grid is easily configurable and is used for rearranging rows within the grid by dragging and dropping them to a new position using the mouse. It is initialized on the root [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) component and is configurable via the [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable) input.

## React Tree Grid Row Drag Example

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
                new EmployeesNestedTreeDataItem(
                {
                    Age: 55,
                    HireDate: `2008-03-20`,
                    ID: 1,
                    Name: `Johnathan Winchester`,
                    Phone: `0251-031259`,
                    OnPTO: false,
                    ParentID: -1,
                    Title: `Development Manager`
                }),
                new EmployeesNestedTreeDataItem(
                {
                    Age: 42,
                    HireDate: `2014-01-22`,
                    ID: 4,
                    Name: `Ana Sanders`,
                    Phone: `(21) 555-0091`,
                    OnPTO: true,
                    ParentID: -1,
                    Title: `CEO`
                }),
                new EmployeesNestedTreeDataItem(
                {
                    Age: 49,
                    HireDate: `2014-01-22`,
                    ID: 18,
                    Name: `Victoria Lincoln`,
                    Phone: `(071) 23 67 22 20`,
                    OnPTO: true,
                    ParentID: -1,
                    Title: `Accounting Manager`
                }),
                // ... 15 more items
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
}

.drop-area {
  width: 240px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px dashed rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  background: #dcdcdc;
  color: #111;
  text-align: center;
}
```
```tsx
import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrTreeGrid,
  IgrColumn,
  IgrRowDragEndEventArgs,
} from "igniteui-react-grids";
import { IgrIcon } from "igniteui-react";
import { EmployeesNestedTreeData } from "./EmployeesNestedTreeData";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function App() {
  const treeGridRef = useRef<IgrTreeGrid>(null);
  const employeesData = new EmployeesNestedTreeData();

  const onRowDragEnd = (evt: IgrRowDragEndEventArgs) => {
    const ghostElement = evt.detail.dragDirective.ghostElement;

    if (ghostElement != null) {
      const dragElementPos = ghostElement.getBoundingClientRect();
      const dropAreaPosition = document
        .getElementById("dropArea")
        .getBoundingClientRect();

      const withinXBounds =
        dragElementPos.x >= dropAreaPosition.x &&
        dragElementPos.x <= dropAreaPosition.x + dropAreaPosition.width;
      const withinYBounds =
        dragElementPos.y >= dropAreaPosition.y &&
        dragElementPos.y <= dropAreaPosition.y + dropAreaPosition.height;

      if (withinXBounds && withinYBounds) {
        treeGridRef.current.deleteRow(evt.detail.dragData.key);
      }
    }
  };

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <div className="container horizontal wrapper">
          <div className="drop-area" id="dropArea">
            <IgrIcon>delete</IgrIcon>
            <div>Drag a row here to delete it</div>
          </div>

          <IgrTreeGrid
            ref={treeGridRef}
            data={employeesData}
            primaryKey="ID"
            foreignKey="ParentID"
            height="480px"
            width="70%"
            autoGenerate={false}
            moving={true}
            rowDraggable={true}
            allowFiltering={true}
            onRowDragEnd={onRowDragEnd}
          >
            <IgrColumn
              field="Name"
              header="Full Name"
              dataType="string"
              resizable={true}
              sortable={true}
              editable={true}
            ></IgrColumn>
            <IgrColumn
              field="Age"
              dataType="number"
              resizable={false}
              sortable={false}
              filterable={false}
              editable={true}
            ></IgrColumn>
            <IgrColumn
              field="Title"
              dataType="string"
              resizable={true}
              sortable={true}
              editable={true}
            ></IgrColumn>
            <IgrColumn
              field="HireDate"
              header="Hire Date"
              dataType="date"
              resizable={true}
              sortable={true}
              editable={true}
            ></IgrColumn>
          </IgrTreeGrid>
        </div>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

## Configuration

In order to enable row-dragging for your [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html), all you need to do is set the grid's [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable) to **true**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging. Clicking on the drag-handle and **moving the cursor** while holding down the button will cause the grid's `RowDragStart` event to fire. Releasing the click at any time will cause `RowDragEnd` event to fire.

```tsx
<IgrTreeGrid rowDraggable={true}>
</IgrTreeGrid>
```

### Templating the Drag Icon

The drag handle icon can be templated using the grid's [`dragIndicatorIconTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#dragIndicatorIconTemplate). In the example we're building, let's change the icon from the default one (**drag_indicator**) to **drag_handle**.

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: TreeGrid -->

```tsx
    const dragIndicatorIconTemplate = (ctx: IgrGridEmptyTemplateContext) => {
        return (
            <>
                <IgrIcon name="drag_handle" collection="material" />
            </>
        );
    }

    <IgrTreeGrid rowDraggable={true} dragIndicatorIconTemplate={dragIndicatorIconTemplate}>
    </IgrTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

## Application Demo

### Row Reordering Demo

With the help of the grid's row drag events you can create a grid that allows you to reorder rows by dragging them.

<!-- ComponentStart: TreeGrid -->

```tsx
<IgrTreeGrid rowDraggable={true} primaryKey="ID" onRowDragStart={webTreeGridReorderRowStartHandler} onRowDragEnd={webTreeGridReorderRowStartHandler}>
</IgrTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

> [!Note]
> Make sure that there is a [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey) specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered.

Once [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable) is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

- Is the row expanded? If so, collapse it.
- Was the row dropped inside of the grid?
- If so, on which **other** row was the dragged row dropped?
- Once you've found the **target** row, swap the records' places in the [`data`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html#data) array
- Was the row initially selected? If so, mark it as selected.

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

Below, you can see this implemented:

<!-- ComponentStart: TreeGrid -->

```tsx
const webTreeGridReorderRowStartHandler = (args: IgrRowDragStartEventArgs) => {
    const draggedRow = args.detail.dragData;
    if (draggedRow.expanded) {
        draggedRow.expanded = false;
    }
}

const webTreeGridReorderRowHandler = (args: IgrRowDragEndEventArgs): void => {
    const ghostElement = args.detail.dragDirective.ghostElement;
    const dragElementPos = ghostElement.getBoundingClientRect();
    const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-tree-grid-row"));
    const currRowIndex = getCurrentRowIndex(rows,
    { x: dragElementPos.x, y: dragElementPos.y });
    if (currRowIndex === -1) { return; }
    const draggedRow = args.detail.dragData.data;
    const childRows = findChildRows(treeGridRef.current.data, draggedRow);
    //remove the row that was dragged and place it onto its new location
    treeGridRef.current.deleteRow(args.detail.dragData.key);
    treeGridRef.current.data.splice(currRowIndex, 0, args.detail.dragData.data);
    // reinsert the child rows
    childRows.reverse().forEach(childRow => {
        treeGridRef.current.data.splice(currRowIndex + 1, 0, childRow);
    });
}

const findChildRows = (rows: any[], parent: any): any[] => {
    const childRows: any[] = [];
    rows.forEach(row => {
        if (row.ParentID === parent.ID) {
            childRows.push(row);
            // Recursively find children of current row
            const grandchildren = findChildRows(rows, row);
            childRows.push(...grandchildren);
        }
    });
    return childRows;
}

const getCurrentRowIndex = (rowList: any[], cursorPosition: any) => {
    for (const row of rowList) {
        const rowRect = row.getBoundingClientRect();
        if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
            cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
            // return the index of the targeted row
            return parseInt(row.attributes["data-rowindex"].value);
        }
    }
    return -1;
}
```

<!-- ComponentEnd: TreeGrid -->

With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.

<!-- ComponentStart: TreeGrid, HierarchicalGrid -->

Notice that we also have row selection enabled and we preserve the selection when dropping the dragged row.

<!-- ComponentEnd: TreeGrid, HierarchicalGrid -->

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
import { IgrRowDragStartEventArgs, IgrRowDragEndEventArgs } from 'igniteui-react-grids';

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
        this.webTreeGridReorderRowStartHandler = this.webTreeGridReorderRowStartHandler.bind(this);
        this.webTreeGridReorderRowHandler = this.webTreeGridReorderRowHandler.bind(this);
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
                    foreignKey="ParentID"
                    onRowDragStart={this.webTreeGridReorderRowStartHandler}
                    rowDraggable={true}
                    onRowDragEnd={this.webTreeGridReorderRowHandler}>
                    <IgrColumn
                        field="Name"
                        header="Full Name"
                        dataType="string"
                        resizable={true}
                        sortable={true}
                        filterable={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        resizable={false}
                        sortable={false}
                        filterable={false}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string"
                        resizable={true}
                        sortable={true}
                        filterable={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="date"
                        resizable={true}
                        sortable={true}
                        filterable={true}
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

    public webTreeGridReorderRowStartHandler(args: IgrRowDragStartEventArgs){
        const draggedRow = args.detail.dragData;
        if(draggedRow.expanded){
            draggedRow.expanded = false;
        }
    }

    public webTreeGridReorderRowHandler(args: IgrRowDragEndEventArgs): void {
        const ghostElement = args.detail.dragDirective.ghostElement;
        if (!ghostElement) {
            return;
        }
        const dragElementPos = ghostElement.getBoundingClientRect();
        const grid = this.treeGrid;
        const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-tree-grid-row"));
        const currRowIndex = this.getCurrentRowIndex(rows,
        { x: dragElementPos.x, y: dragElementPos.y });
        if (currRowIndex === -1) { return; }
        const draggedRow = args.detail.dragData.data;
        const childRows = this.findChildRows(grid.data, draggedRow);
        //remove the row that was dragged and place it onto its new location
        grid.deleteRow(args.detail.dragData.key);
        grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
        // reinsert the child rows
        childRows.reverse().forEach(childRow => {
            grid.data.splice(currRowIndex + 1, 0, childRow);
        });
    }

    private findChildRows(rows: any[], parent: any): any[] {
        const childRows: any[] = [];
        rows.forEach(row => {
            if (row.ParentID === parent.ID) {
                childRows.push(row);
                // Recursively find children of current row
                const grandchildren = this.findChildRows(rows, row);
                childRows.push(...grandchildren);
            }
        });
        return childRows;
    }

    public getCurrentRowIndex(rowList: any[], cursorPosition: any) {
        for (const row of rowList) {
            const rowRect = row.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                // return the index of the targeted row
                return parseInt(row.attributes["data-rowindex"].value);
            }
        }
        return -1;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Limitations

Currently, there are no known limitations for the [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable).

## API References

- [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable)
- `RowDragStart`
- `RowDragEnd`
- [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
