---
title: React Grid Editing Rows - Ignite UI for React
_description: Want to enable row editing in React Grid? Need a powerful API for CRUD operations? Try our Ignite UI for React Grid rows editing component!
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-editing
_tocName: Row Editing
_premium: true
---

# React Grid Row Editing

The Ignite UI for React Row Editing feature in React Grid allows editing data directly within the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). On top of this convenient way to manipulate data, there’s a powerful API for full CRUD operations. You can perform grid row editing by clicking on a row and pressing **Enter key**. Another quick way is to double click with the mouse on the row that needs to be modified.

## React Grid Row Editing Example

The following sample demonstrates how to enable row editing in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). Changing a cell value and then clicking or navigating to another cell on the same row won't  update the row value until confirmed by using the **Done** button, or discarded by using **Cancel** button.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-size: var(--ig-size-small);
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import NwindData from './NwindData.json';

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
    private  _columnPipeArgs1: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs1(): IgrColumnPipeArgs {
        if (this._columnPipeArgs1 == null)
        {
            var columnPipeArgs1: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs1.format = "mediumDate";

            this._columnPipeArgs1 = columnPipeArgs1;
        }
        return this._columnPipeArgs1;
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
                    data={this.nwindData}
                    ref={this.gridRef}
                    id="grid"
                    primaryKey="ProductID"
                    rowEditable={true}>
                    <IgrColumn
                        field="ProductID"
                        header="Product ID"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="ReorderLevel"
                        header="Reorder Level"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Prod. Name"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units In Stock"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        pipeArgs={this.columnPipeArgs1}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="boolean">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

> [!Note]
> When a row is in edit mode, clicking on a cell in another row will act like the "Done" button is pressed, submitting all changes made in the previous row. If the newly focused cell is editable, the new row enters edit mode as well. However, if the cell is not editable, only the previous row exits edit mode.

## Row Editing Usage

Define a [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) with bound data source and [`rowEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowEditable) set to true:

<!-- ComponentStart: Grid -->

```tsx
const unitsInStockCellTemplate = (ctx: IgrCellTemplateContext) => {
    return (
        <>
            <input name="units" value={ctx.cell.value} style={{color: "black"}} />;
        </>
    );
}

<IgrGrid primaryKey="ProductID" width="100%" height="500px" rowEditable={true}>
    <IgrColumn field="ProductID" header="Product ID" editable={false}></IgrColumn>
    <IgrColumn field="ReorderLevel" header="ReorderLever" dataType="number"></IgrColumn>
    <IgrColumn field="ProductName" header="ProductName" dataType="string"></IgrColumn>
    <IgrColumn field="UnitsInStock" header="UnitsInStock" dataType="number" bodyTemplate={unitsInStockCellTemplate}></IgrColumn>
    <IgrColumn field="OrderDate" dataType="date"></IgrColumn>
    <IgrColumn field="Discontinued" header="Discontinued" dataType="boolean"></IgrColumn>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

> [!Note]
> Setting primary key is mandatory for row editing operations.

> [!Note]
> Enabling editing for individual columns is not necessary. Using the [`rowEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowEditable) property in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html), all rows, with defined [`field`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#field) property (excluding the primary row) will be editable. If you want to disable editing for a specific column, simply set the [`editable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#editable) input of that column to `false`.

> [!Note]
> The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) utilizes `BaseTransactionService` - an internal provider that holds pending cell changes until the row state is either submitted or cancelled.

## Positioning

- Default position of the overlay will be below the row that is in edit mode

- If there is no space below the row then overlay will appear above the row.

- Once shown - top or bottom, overlay will maintain this position during scrolling, until the overlay is closed.

## Behavior

- If row is in edit mode, then editing will continue, if a cell from the same row is clicked.

- Clicking "Done" button will finish row editing and will submit changes either to the data source, or to a transaction if available. In addition row will exit edit mode.

- Clicking "Cancel" button will revert all current changes in the row and row will exit edit mode.

- If row is in edit mode, then clicking a cell from another row will finish the current row edit and will submit new row changes (the same behavior clicking "Done" button). If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

- If row is in edit mode and [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) is scrolled so that row goes outside the visible area, the latter will be still in edit mode. When [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) is scrolled, so that the row is visible again, the row will be still in edit mode. When clicked outside the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html), the cell will also stay in edit mode.

- When perform **sorting**, **filtering**, **searching** and **hiding** operations, will revert all current changes in the row and row will exit edit mode.

- When perform **paging**, **resizing**, **pinning** and **moving** operations, will exit edit mode and will submit latest value.

- Each modified cell gets edited style until row edit is finished. This is the behavior, when [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) is not provided with transactions. When transactions are available - then cell edit style is applied until all the changes are committed.

## Keyboard Navigation

- <kbd>ENTER</kbd> and <kbd>F2</kbd> enters row edit mode

- <kbd>ESC</kbd> exits row edit mode and doesn't submit any of the cell changes, made while the row was in edit mode.

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any data changing operation will terminate row editing operations and will submit current row changes. This will include operations like sorting, changing grouping and filtering criteria, paging, etc.

- Summaries will be updated after row edit is finished. Same is valid for the other features like sorting, filtering, etc.

<!-- ComponentStart: Grid -->

- Expanding and collapsing grouped rows will not terminate editing for the current row.

<!-- ComponentEnd: Grid -->

## Customizing Row Editing Overlay

### Customizing Text

Customizing the text of the row editing overlay is possible using via templating.

The `RowChangesCount` property is exposed and it holds the count of the changed cells.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
const rowEditTextTemplate = (ctx: IgrGridRowEditTextTemplateContext) =>{
    return (
        <>
            Changes: {ctx.implicit}
        </>
    );
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Customizing Buttons

Customizing the buttons of the row editing overlay also possible via templating.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
const rowEditActionsTemplate =(ctx: IgrGridRowEditActionsTemplateContext) => {
    const endRowEdit = ctx.implicit;
    return (
        <>
            <button onClick={(event) => endRowEdit(false, event)}>Cancel</button>
            <button onClick={(event) => endRowEdit(true, event)}>Apply</button>
        </>
    );
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrGrid className="grid"></IgrGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-banner-banner-background: #e3e3e3;
    --ig-banner-banner-message-color: #423589;
}
```

<!-- ComponentEnd: TreeGrid -->

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#grid {
    --ig-banner-banner-background: #292826;
    --ig-banner-banner-message-color: #ffcd0f;
    --ig-button-foreground: #ffcd0f;
    --ig-button-hover-foreground: white;
    --ig-button-font-weight: 600;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import NwindData from './NwindData.json';

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
    private  _columnPipeArgs1: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs1(): IgrColumnPipeArgs {
        if (this._columnPipeArgs1 == null)
        {
            var columnPipeArgs1: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs1.format = "mediumDate";

            this._columnPipeArgs1 = columnPipeArgs1;
        }
        return this._columnPipeArgs1;
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
                    data={this.nwindData}
                    ref={this.gridRef}
                    id="grid"
                    primaryKey="ProductID"
                    rowEditable={true}>
                    <IgrColumn
                        field="ProductID"
                        header="Product ID"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="ReorderLevel"
                        header="Reorder Level"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Prod. Name"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units In Stock"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        pipeArgs={this.columnPipeArgs1}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="boolean">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Known Issues and Limitations

- When the grid has no [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection

- Row Expand/collapse

- Row Editing

- Row Pinning

## API References

- [`rowEditable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowEditable)
- `RowEditEnter`
- `RowEdit`
- `RowEditDone`
- [`endEdit`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#endEdit)
- [`field`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#field)
- [`editable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#editable)
- [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey)
- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
