---
title: React Hierarchical Grid Column Reordering & Moving - Ignite UI for React
_description: Set custom column order & enable columns reordering via drag/drop mouse or touch gestures, or by using the React Column Moving API. Try Ignite UI for React!
_keywords: React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-moving
_tocName: Column Moving
_premium: true
---

# Hierarchical Grid Column Reordering & Moving

The React Hierarchical Grid Column Moving feature in Ignite UI for React allows quick and easy column reordering. This can be done through the Column Moving API or by dragging and dropping the headers to another position via mouse or touch gestures. In the React Hierarchical Grid, you can enable Column Moving for pinned and unpinned columns and for [Multi-Column Headers](multi-column-headers.md) as well.

> [!Note]
> Reordering between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same group. Moving is allowed between columns/column-groups, if they are top level columns.

> [!Note]
> If a column header is templated and the Column Moving is enabled or the corresponding column is groupable, then the templated elements need to have the **draggable** attribute set to **false**!

> [!Note]
> If the pinned area exceeds its maximum allowed width (80% of the total [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) width), a visual clue notifies the end user that the drop operation is forbidden and pinning is not possible. This means you won't be allowed to drop a column in the pinned area.

```tsx
const headerTemplate = (ctx: IgrCellTemplateContext) => {
    return (
    <>
       <IgrIcon draggable={false} onClick={onClick}></IgrIcon>
    </>
    );
}
```

## React Hierarchical Grid Column Moving Overview Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrPaginator, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomers from './HierarchicalCustomers.json';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }
    private paginator: IgrPaginator
    private column: IgrColumn
    private rowIsland: IgrRowIsland

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.hierarchicalCustomers}
                    moving={true}>
                    <IgrPaginator
                        perPage={15}>
                    </IgrPaginator>
                    <IgrColumn
                        field="CustomerID"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        dataType="string"
                        width="150px"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        dataType="string"
                        width="150px"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        dataType="string"
                        width="150px"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}
                        moving={true}>
                        <IgrColumn
                            field="OrderID"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="EmployeeID"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="OrderDate"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipVia"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipAddress"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCity"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipPostalCode"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCountry"
                            dataType="string">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}
                            moving={true}>
                            <IgrColumn
                                field="ProductID"
                                dataType="number">
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice"
                                dataType="number">
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                dataType="number">
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                dataType="number">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomers: any[] = HierarchicalCustomers;
    public get hierarchicalCustomers(): any[] {
        return this._hierarchicalCustomers;
    }


    public hierarchicalGridPinHeaderTemplate = (props: {dataContext: IgrColumnTemplateContext}) => {
        const column = (props.dataContext as any).column;
        return (
            <div style={{display: 'flex'}}>
                <span>{column.field}</span>
                <span style={{marginLeft: 'auto', cursor: 'pointer'}} onClick={(e: any) => this.toggleColumnPin(column)}>📌</span>
            </div>
        );
    }

        public toggleColumnPin(field: IgrColumn) {
            if(field) {
                field.pinned = !field.pinned;
            }
        }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Overview

**Column moving** feature is enabled on a per-grid level, meaning that the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) could have either movable or immovable columns. This is done via the [`moving`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#moving) input of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html).

```tsx
<IgrHierarchicalGrid moving={true}>
    ...
    <IgrRowIsland moving={true}></IgrRowIsland>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

## API

In addition to the drag and drop functionality, the Column Moving feature also provides API methods to allow moving a column/reordering columns programmatically:

[`moveColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#moveColumn) - Moves a column before or after another column (a target). The first parameter is the column to be moved, and the second parameter is the target column. Also accepts an optional third parameter `Position` (representing a `DropPosition` value), which determines whether to place the column before or after the target column.

```typescript
// Move the ID column after the Name column
const idColumn = grid.getColumnByName("ID");
const nameColumn = grid.getColumnByName("Name");

grid.moveColumn(idColumn, nameColumn, DropPosition.AfterDropTarget);
```

[`move`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#move) - Moves a column to a specified visible index. If the passed index parameter is invalid (is negative, or exceeds the number of columns), or if the column is not allowed to move to this index (if inside another group), no operation is performed.

```typescript
// Move the ID column at 3rd position.
const idColumn = grid.getColumnByName("ID");
idColumn.move(3);
```

Note that when using the column moving feature, the `ColumnMovingEnd` event will be emitted if the operation was successful. Also note that in comparison to the drag and drop functionality, using the column moving feature does not require setting the [`moving`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#moving) property to true.

## Events

There are several events related to the column moving to provide a means for tapping into the columns' drag and drop operations. These are `ColumnMovingStart`, `ColumnMoving` and `ColumnMovingEnd`.

You can subscribe to the `ColumnMovingEnd` event of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) to implement some custom logic when a column is dropped to a new position. For example, you can cancel dropping the **Category** column after the **Change On Year(%)** column in the following code snippet.

<!-- ComponentStart: Grid, HierarchicalGrid -->

```tsx
const onColumnMovingEnd = (event: IgrColumnMovingEndEventArgs) => {
   if (event.detail.source.field === "Category" && event.detail.target.field === "Change On Year(%)") {
        event.detail.cancel = true;
    }
}

<IgrHierarchicalGrid autoGenerate={false} moving={true} data={data} onColumnMovingEnd={onColumnMovingEnd}>
    <IgrColumn field="Category"></IgrColumn>
    <IgrColumn field="Change On Year(%)" dataType="number"></IgrColumn>
</IgrHierarchicalGrid>
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).

In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrHierarchicalGrid className="grid"></IgrHierarchicalGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-ghost-header-text-color: #f4d45c;
    --ig-grid-ghost-header-background: #ad9d9d;
    --ig-grid-ghost-header-icon-color: #f4d45c;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#grid {
    --ig-grid-ghost-header-text-color: #f4d45c;
    --ig-grid-ghost-header-background: #ad9d9d;
    --ig-grid-ghost-header-icon-color: #f4d45c;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrPaginator, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomers from './HierarchicalCustomers.json';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }
    private paginator: IgrPaginator

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
                    data={this.hierarchicalCustomers}
                    moving={true}
                    ref={this.gridRef}
                    id="grid">
                    <IgrPaginator
                        perPage={15}>
                    </IgrPaginator>
                    <IgrColumn
                        field="CustomerID"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        dataType="string"
                        width="150px"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        dataType="string"
                        width="150px"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        dataType="string"
                        width="150px"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}
                        moving={true}>
                        <IgrColumn
                            field="OrderID"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="EmployeeID"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="OrderDate"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipVia"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipAddress"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCity"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipPostalCode"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCountry"
                            dataType="string">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}
                            moving={true}>
                            <IgrColumn
                                field="ProductID"
                                dataType="number">
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice"
                                dataType="number">
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                dataType="number">
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                dataType="number">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomers: any[] = HierarchicalCustomers;
    public get hierarchicalCustomers(): any[] {
        return this._hierarchicalCustomers;
    }


    public hierarchicalGridPinHeaderTemplate = (props: {dataContext: IgrColumnTemplateContext}) => {
        const column = (props.dataContext as any).column;
        return (
            <div style={{display: 'flex'}}>
                <span>{column.field}</span>
                <span style={{marginLeft: 'auto', cursor: 'pointer'}} onClick={(e: any) => this.toggleColumnPin(column)}>📌</span>
            </div>
        );
    }

        public toggleColumnPin(field: IgrColumn) {
            if(field) {
                field.pinned = !field.pinned;
            }
        }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## API References

- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
