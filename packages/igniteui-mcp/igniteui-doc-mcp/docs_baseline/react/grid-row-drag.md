---
title: React Grid Row Dragging - Ignite UI for React
_description: Row dragging in React Grid is used to quickly rearrange rows by dragging them with the mouse. See how to configure row dragging in your project.
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-drag
_tocName: Row Dragging
_premium: true
---

# Row Dragging in React Grid

The Ignite UI for React Row Dragging feature in React Grid is easily configurable and is used for rearranging rows within the grid by dragging and dropping them to a new position using the mouse. It is initialized on the root [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) component and is configurable via the [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable) input.

## React Grid Row Drag Example

```typescript
export class CustomersDataItem {
    public constructor(init: Partial<CustomersDataItem>) {
        Object.assign(this, init);
    }
    
    public ID: string;
    public CompanyName: string;
    public ContactName: string;
    public ContactTitle: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: string;
    public Country: string;
    public Phone: string;
    public Fax: string;

}
export class CustomersData extends Array<CustomersDataItem> {
    public constructor() {
        super();
        this.push(new CustomersDataItem(
        {
            ID: `ALFKI`,
            CompanyName: `Alfreds Futterkiste`,
            ContactName: `Maria Anders`,
            ContactTitle: `Sales Representative`,
            Address: `Obere Str. 57`,
            City: `Berlin`,
            Region: `East`,
            PostalCode: `12209`,
            Country: `Germany`,
            Phone: `030-0074321`,
            Fax: `030-0076545`
        }));
        this.push(new CustomersDataItem(
        {
            ID: `ANATR`,
            CompanyName: `Ana Trujillo Emparedados y helados`,
            ContactName: `Ana Trujillo`,
            ContactTitle: `Owner`,
            Address: `Avda. de la Constitución 2222`,
            City: `México D.F.`,
            Region: `South`,
            PostalCode: `05021`,
            Country: `Mexico`,
            Phone: `(5) 555-4729`,
            Fax: `(5) 555-3745`
        }));
        this.push(new CustomersDataItem(
        {
            ID: `ANTON`,
            CompanyName: `Antonio Moreno Taquería`,
            ContactName: `Antonio Moreno`,
            ContactTitle: `Owner`,
            Address: `Mataderos 2312`,
            City: `México D.F.`,
            Region: `South`,
            PostalCode: `05023`,
            Country: `Mexico`,
            Phone: `(5) 555-3932`,
            Fax: `(5) 555-3745`
        }));
        // ... 24 more items
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.wrapper {
    justify-content: space-evenly;
    margin: 1rem;
}
```
```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrRowDragEndEventArgs } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersData } from './CustomersData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

export default function App() {
    const data = new CustomersData();
    const rightGridRef = useRef<IgrGrid>(null);

    const onGridRowDragEnd = (evt: IgrRowDragEndEventArgs) => {
        const leftGrid = evt.target as IgrGrid;
        const ghostElement = evt.detail.dragDirective.ghostElement;
        if (ghostElement != null) {
            const dragElementPos = ghostElement.getBoundingClientRect();
            const gridPosition = document.getElementById("rightGrid").getBoundingClientRect();

            const withinXBounds = dragElementPos.x >= gridPosition.x && dragElementPos.x <= gridPosition.x + gridPosition.width;
            const withinYBounds = dragElementPos.y >= gridPosition.y && dragElementPos.y <= gridPosition.y + gridPosition.height;
            if (withinXBounds && withinYBounds) {
                leftGrid.deleteRow(evt.detail.dragData.key);
                rightGridRef.current.addRow(evt.detail.dragData.data);
            }
        }
    }

    return (
        <div className="container sample">
            <div className="container horizontal wrapper">
                <IgrGrid data={data} width="40%" primaryKey='ID' autoGenerate={false} rowDraggable={true} onRowDragEnd={onGridRowDragEnd}>
                    <IgrColumn field="ID" width="100px"></IgrColumn>
                    <IgrColumn field="CompanyName" width="100px"></IgrColumn>
                    <IgrColumn field="ContactName" width="100px"></IgrColumn>
                    <IgrColumn field="ContactTitle" width="100px"></IgrColumn>
                    <IgrColumn field="Address" width="100px"></IgrColumn>
                    <IgrColumn field="City" width="100px"></IgrColumn>
                    <IgrColumn field="Region" width="100px"></IgrColumn>
                    <IgrColumn field="PostalCode" width="100px"></IgrColumn>
                    <IgrColumn field="Phone" width="100px"></IgrColumn>
                    <IgrColumn field="Fax" width="100px"></IgrColumn>
                </IgrGrid>

                <IgrGrid id="rightGrid" ref={rightGridRef} data={[]} autoGenerate={false} width="40%"
                    emptyGridMessage="Drag and Drop a row from the left grid to this grid">
                    <IgrColumn field="ID" width="100px"></IgrColumn>
                    <IgrColumn field="CompanyName" width="100px"></IgrColumn>
                    <IgrColumn field="ContactName" width="100px"></IgrColumn>
                    <IgrColumn field="ContactTitle" width="100px"></IgrColumn>
                    <IgrColumn field="Address" width="100px"></IgrColumn>
                    <IgrColumn field="City" width="100px"></IgrColumn>
                    <IgrColumn field="Region" width="100px"></IgrColumn>
                    <IgrColumn field="PostalCode" width="100px"></IgrColumn>
                    <IgrColumn field="Phone" width="100px"></IgrColumn>
                    <IgrColumn field="Fax" width="100px"></IgrColumn>
                </IgrGrid>
            </div>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```


## Configuration

In order to enable row-dragging for your [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html), all you need to do is set the grid's [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable) to **true**. Once this is enabled, a row-drag handle will be displayed on each row. This handle can be used to initiate row dragging. Clicking on the drag-handle and **moving the cursor** while holding down the button will cause the grid's `RowDragStart` event to fire. Releasing the click at any time will cause `RowDragEnd` event to fire.

```tsx
<IgrGrid rowDraggable={true}>
</IgrGrid>
```

### Templating the Drag Icon

The drag handle icon can be templated using the grid's [`dragIndicatorIconTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#dragIndicatorIconTemplate). In the example we're building, let's change the icon from the default one (**drag_indicator**) to **drag_handle**.

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: Grid -->

```tsx
const dragIndicatorIconTemplate = (ctx: IgrGridEmptyTemplateContext) => {
    return (
        <>
            <IgrIcon name="drag_handle" collection="material" />
        </>
    );
}

<IgrGrid rowDraggable={true} dragIndicatorIconTemplate={dragIndicatorIconTemplate}>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

## Application Demo

<!-- ComponentStart: Grid -->

<!-- ComponentEnd: Grid -->

### Row Reordering Demo

With the help of the grid's row drag events you can create a grid that allows you to reorder rows by dragging them.

<!-- ComponentStart: Grid -->

```tsx
<IgrGrid rowDraggable={true} primaryKey="ID" onRowDragEnd={webGridReorderRowHandler}>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

> [!Note]
> Make sure that there is a [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey) specified for the grid! The logic needs an unique identifier for the rows so they can be properly reordered.

Once [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable) is enabled and a drop zone has been defined, you need to implement a simple handler for the drop event. When a row is dragged, check the following:

<!-- ComponentStart: Grid -->

- Was the row dropped inside of the grid?
- If so, on which **other** row was the dragged row dropped?
- Once you've found the **target** row, swap the records' places in the [`data`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#data) array

<!-- ComponentEnd: Grid -->

Below, you can see this implemented:

```tsx
const webGridReorderRowHandler = (args: IgrRowDragEndEventArgs): void => {
    const ghostElement = args.detail.dragDirective.ghostElement;
    const dragElementPos = ghostElement.getBoundingClientRect();
    const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-grid-row"));
    const currRowIndex = getCurrentRowIndex(rows,
    { x: dragElementPos.x, y: dragElementPos.y });
    if (currRowIndex === -1) { return; }
    // remove the row that was dragged and place it onto its new location
    gridRef.current.deleteRow(args.detail.dragData.key);
    gridRef.current.data.splice(currRowIndex, 0, args.detail.dragData.data);
}

const getCurrentRowIndex = (rowList: any[], cursorPosition) => {
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

<!-- ComponentEnd: Grid -->

With these few easy steps, you've configured a grid that allows reordering rows via drag/drop! You can see the above code in action in the following demo.

<!-- ComponentStart: Grid -->

Holding onto the drag icon will allow you to move a row anywhere in the grid:

<!-- ComponentEnd: Grid -->

```typescript
export class CustomersDataItem {
    public constructor(init: Partial<CustomersDataItem>) {
        Object.assign(this, init);
    }

    public ID: string;
    public Company: string;
    public ContactName: string;
    public ContactTitle: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: number;
    public Country: string;
    public Phone: string;
    public Fax: string;

}
export class CustomersData extends Array<CustomersDataItem> {
    public constructor(items: Array<CustomersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CustomersDataItem({ ID: `ALFKI`, Company: `Alfreds Futterkiste`, ContactName: `Maria Anders`, ContactTitle: `Sales Representative`, Address: `Obere Str. 57`, City: `Berlin`, Region: `East`, PostalCode: 12209, Country: `Germany`, Phone: `030-0074321`, Fax: `030-0076545` }),
                new CustomersDataItem({ ID: `ANATR`, Company: `Ana Trujillo Emparedados y helados`, ContactName: `Ana Trujillo`, ContactTitle: `Owner`, Address: `Avda. de la Constitución 2222`, City: `México D.F.`, Region: `South`, PostalCode: 5021, Country: `Mexico`, Phone: `(5) 555-4729`, Fax: `(5) 555-3745` }),
                new CustomersDataItem({ ID: `ANTON`, Company: `Antonio Moreno Taquería`, ContactName: `Antonio Moreno`, ContactTitle: `Owner`, Address: `Mataderos 2312`, City: `México D.F.`, Region: `South`, PostalCode: 5023, Country: `Mexico`, Phone: `(5) 555-3932`, Fax: `(5) 555-3745` }),
                // ... 24 more items
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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrRowDragEndEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
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
        this.webGridReorderRowHandler = this.webGridReorderRowHandler.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    ref={this.gridRef}
                    data={this.customersData}
                    rowDraggable={true}
                    primaryKey="ID"
                    onRowDragEnd={this.webGridReorderRowHandler}>
                    <IgrColumn
                        field="ID"
                        header="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Name"
                        minWidth="60px"
                        maxWidth="230px">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title">
                    </IgrColumn>
                    <IgrColumn
                        field="Address">
                    </IgrColumn>
                    <IgrColumn
                        field="City">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersData: CustomersData = null;
    public get customersData(): CustomersData {
        if (this._customersData == null)
        {
            this._customersData = new CustomersData();
        }
        return this._customersData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridReorderRowHandler(args: IgrRowDragEndEventArgs): void {
        const ghostElement = args.detail.dragDirective.ghostElement;
        if (!ghostElement) {
            return;
        }
        const dragElementPos = ghostElement.getBoundingClientRect();
        const grid = this.grid;
        const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-grid-row"));
        const currRowIndex = this.getCurrentRowIndex(rows,
        { x: dragElementPos.x, y: dragElementPos.y });
        if (currRowIndex === -1) { return; }
        // remove the row that was dragged and place it onto its new location
        grid.deleteRow(args.detail.dragData.key);
        grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
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


<!-- ComponentStart: Grid -->

<!-- ComponentEnd: Grid -->

## Limitations

Currently, there are no known limitations for the [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable).

## API References

- [`rowDraggable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowDraggable)
- `RowDragStart`
- `RowDragEnd`
- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
