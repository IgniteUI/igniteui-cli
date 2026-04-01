---
title: React Grid Row Pinning in - Ignite UI for React
_description: Use the React Row pinning feature to lock rows with a rich and easy to use API. Let users pin rows in a particular order or duplicate them in a special area.
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-pinning
_tocName: Row Pinning
_premium: true
---

# React Grid Row Pinning

The Ignite UI for React Row Pinning feature in React Grid allows you to  pin one or multiple rows to the top or bottom of grid. Row Pinning allows end-users to pin rows in a particular order, duplicating them in a special area that is always visible even when they scroll the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) vertically. The React Grid has a built-in row pinning UI, which is enabled by initializing an [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) component in the context of Grid. In addition, you can define custom UI and change the pin state of the rows via the Row Pinning API.

## React Grid Row Pinning Example

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
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrPinningConfig, RowPinningPosition, IgrColumn, IgrActionStrip, IgrGridPinningActions } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import CustomersDataLocal from './CustomersDataLocal.json';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private rowPinningEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.rows = RowPinningPosition.Top;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }
    private actionStrip: IgrActionStrip

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.webGridSetRowPinning = this.webGridSetRowPinning.bind(this);
        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="false"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        name="rowPinningEditor"
                        valueType="EnumValue"
                        label="Row Pinning toggle"
                        dropDownNames={["Top", "Bottom"]}
                        dropDownValues={["Top", "Bottom"]}
                        changed={this.webGridSetRowPinning}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    id="grid"
                    data={this.customersDataLocal}
                    pinning={this.pinningConfig1}
                    primaryKey="ID"
                    cellSelection="none"
                    rowEditable={true}>
                    <IgrColumn
                        field="Company"
                        header="Company"
                        width="300px">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Name">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        header="Phone">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        header="Fax">
                    </IgrColumn>
                    <IgrActionStrip
                    >
                        <IgrGridPinningActions
                        >
                        </IgrGridPinningActions>
                    </IgrActionStrip>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersDataLocal: any[] = CustomersDataLocal;
    public get customersDataLocal(): any[] {
        return this._customersDataLocal;
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

    public webGridSetRowPinning(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var item = sender as IgrPropertyEditorPropertyDescription;
        var newVal = item.primitiveValue;
        var grid = this.grid;
        grid.pinning.rows = newVal === "Top" ? RowPinningPosition.Top : RowPinningPosition.Bottom;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Row Pinning UI

The built-in row pinning UI is enabled by adding an [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) component with the [`IgrGridPinningActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridpinningactions.html) component. The action strip is automatically shown when hovering a row and will display a pin or unpin button icon based on the state of the row it is shown for. An additional action allowing to scroll the copy of the pinned row into view is shown for each pinned row as well.

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

```tsx
<IgrGrid>
    <IgrColumn field="Country" header="Country"> </IgrColumn>
    <IgrActionStrip>
        <IgrGridPinningActions></IgrGridPinningActions>
        <IgrGridEditingActions></IgrGridEditingActions>
    </IgrActionStrip>
</IgrGrid>
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

## Row Pinning API

Row pinning is controlled through the [`pinned`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pinned) input of the `Row`. Pinned rows are rendered at the top of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) by default and stay fixed through vertical scrolling of the unpinned rows in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) body.

```tsx
gridRef.current.getRowByIndex(0).pinned = true;
```

You may also use the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)'s [`pinRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#pinRow) or [`unpinRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#unpinRow) methods of the to pin or unpin records by their ID:

```tsx
gridRef.current.pinRow('ALFKI');
gridRef.current.unpinRow('ALFKI');
```

Note that the row ID is the primary key value, defined by the [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey) of the grid, or the record instance itself. Both methods return a boolean value indicating whether their respective operation is successful or not. Usually the reason they fail is that the row is already in the desired state.

A row is pinned below the last pinned row. Changing the order of the pinned rows can be done by subscribing to the `RowPinning` event and changing the `InsertAtIndex` property of the event arguments to the desired position index.

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

```tsx
const rowPinning = (event: IgrPinRowEventArgs) => {
    event.detail.insertAtIndex = 0;
}

<IgrGrid autoGenerate={true} onRowPinning={rowPinning}>
</IgrGrid>
```

## Pinning Position

You can change the row pinning position via the [`pinning`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#pinning) configuration option. It allows you to set the pin area position to either Top or Bottom.
When set to Bottom pinned rows are rendered at the bottom of the grid, after the unpinned rows. Unpinned rows can be scrolled vertically, while the pinned rows remain fixed at the bottom.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
const pinning: IgrPinningConfig = { rows : RowPinningPosition.Bottom };

<IgrGrid ref={gridRef} autoGenerate={true} pinning={pinning}>
</IgrGrid>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

## Custom Row Pinning UI

You can define your custom UI and change the pin state of the rows via the related API.

### Via extra column with icon

Let's say that instead of an action strip you would like to show a pin icon in every row allowing the end-user to click and change a particular row's pin state.
This can be done by adding an extra column with a cell template containing the custom icon.

<!-- end: Angular -->

<!-- React -->

```tsx
const cellPinCellTemplate = (ctx: IgrCellTemplateContext) => {
    const index = ctx.cell.row.index;
    return (
        <>
            <span onPointerDown={(e: any) => toggleRowPin(index)}>📌</span>
        </>
    );
}

<IgrGrid primaryKey="ID" autoGenerate={false}>
    <IgrColumn width="70px" bodyTemplate={cellPinCellTemplate}>
    </IgrColumn>
</IgrGrid>
```

<!-- end: React -->

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: Grid, TreeGrid -->

On click of the custom icon the pin state of the related row can be changed using the row's API methods.

```tsx
const toggleRowPin = (index: number) => {
  const grid = grid1Ref.current;
  grid.getRowByIndex(index).pinned = !grid.getRowByIndex(index).pinned;
}
```

<!-- ComponentEnd: Grid, TreeGrid -->

#### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.customIcon {
    display: flex;
    width: 100%;
    justify-content: center;
}

.customIconSpan {
    cursor: pointer;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import CustomersDataLocal from './CustomersDataLocal.json';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

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
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    ref={this.gridRef}
                    data={this.customersDataLocal}
                    primaryKey="ID"
                    cellSelection="none">
                    <IgrColumn
                        width="100px"
                        filterable={false}
                        pinned={true}
                        bodyTemplate={this.webGridRowPinCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ID"
                        width="150px"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company"
                        width="350px">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Name">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Contact Tiasdsadtle">
                    </IgrColumn>
                    <IgrColumn
                        field="Address">
                    </IgrColumn>
                    <IgrColumn
                        field="City">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code">
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

    private _customersDataLocal: any[] = CustomersDataLocal;
    public get customersDataLocal(): any[] {
        return this._customersDataLocal;
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

    public webGridRowPinCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
        const grid = this.grid;
        const index = e.dataContext.cell.row.index;
        const row = grid.rowList.toArray().find(x => x.index === index);
        if (row && row.pinned && row.disabled) {
            return (<></>);
        }
        return (
            <div className='customIcon'>
            <span onPointerDown={(e: any) => this.toggleRowPin(index)} className='customIconSpan'>📌</span>
            </div>
        );
    }

    public toggleRowPin(index: number) {
        let grid = this.grid;
        grid.getRowByIndex(index).pinned = !grid.getRowByIndex(index).pinned;
        grid.markForCheck();
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- ComponentStart: Grid -->

<!-- ComponentEnd: Grid -->

## Row Pinning Limitations

- Only records that exist in the data source can be pinned.
- The row pinning state is not exported to excel. The grid is exported as if no row pinning is applied.
- The copies of pinned rows in the scrollable area of the grid are an integral part of how other grid features achieve their functionality in the presence of pinned rows and therefore their creation cannot be disabled nor can they be removed.
- As Row Selection works entirely with row Ids, selecting pinned rows selects their copies as well (and vice versa). Additionally, range selection (e.g. using <kbd>SHIFT</kbd> + click) within the pinned area works the same way as selecting a range of rows within the scrollable area. The resulting selection includes all rows in between even if they are not currently pinned. Getting the selected rows through the API only returns a single instance of each selected record.

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrGrid className="grid"></IgrGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-pinned-border-width: 5px;
    --ig-grid-pinned-border-style: double;
    --ig-grid-pinned-border-color: #FFCD0F;
    --ig-grid-cell-active-border-color: #FFCD0F;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-grid-pinned-border-width: 5px;
        --ig-grid-pinned-border-style: double;
        --ig-grid-pinned-border-color: #FFCD0F;
        --ig-grid-cell-active-border-color: #FFCD0F;
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrActionStripModule } from 'igniteui-react-grids';
import { IgrGrid, IgrPinningConfig, RowPinningPosition, IgrColumn, IgrActionStrip, IgrGridPinningActions } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebActionStripDescriptionModule } from 'igniteui-react-core';
import CustomersDataLocal from './CustomersDataLocal.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrActionStripModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.rows = RowPinningPosition.Top;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridPinRowOnRendered = this.webGridPinRowOnRendered.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    id="grid"
                    data={this.customersDataLocal}
                    primaryKey="ID"
                    cellSelection="none"
                    onRendered={this.webGridPinRowOnRendered}
                    pinning={this.pinningConfig1}>
                    <IgrColumn
                        field="Company"
                        header="Company"
                        width="300px">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Name">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        header="Phone">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        header="Fax">
                    </IgrColumn>
                    <IgrActionStrip
                    >
                        <IgrGridPinningActions
                        >
                        </IgrGridPinningActions>
                    </IgrActionStrip>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersDataLocal: any[] = CustomersDataLocal;
    public get customersDataLocal(): any[] {
        return this._customersDataLocal;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
            WebActionStripDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridPinRowOnRendered(args: any): void {
        var grid = this.grid as any;
        grid.pinRow("ALFKI");
        grid.pinRow("AROUT");
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
- [`IgrGridRowComponent`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridrowcomponent.html)
- [`IgrRowType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowtype.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
