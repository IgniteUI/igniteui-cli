---
title: React Hierarchical Grid Row Pinning in - Ignite UI for React
_description: Use the React Row pinning feature to lock rows with a rich and easy to use API. Let users pin rows in a particular order or duplicate them in a special area.
_keywords: React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-pinning
_tocName: Row Pinning
_premium: true
---

# React Hierarchical Grid Row Pinning

The Ignite UI for React Row Pinning feature in React Hierarchical Grid allows you to  pin one or multiple rows to the top or bottom of grid. Row Pinning allows end-users to pin rows in a particular order, duplicating them in a special area that is always visible even when they scroll the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) vertically. The React Hierarchical Grid has a built-in row pinning UI, which is enabled by initializing an [`IgrActionStrip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igractionstrip.html) component in the context of Hierarchical Grid. In addition, you can define custom UI and change the pin state of the rows via the Row Pinning API.

## React Hierarchical Grid Row Pinning Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrHierarchicalGrid, IgrPinningConfig, RowPinningPosition, ColumnPinningPosition, IgrColumn, IgrActionStrip, IgrGridPinningActions, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebHierarchicalGridDescriptionModule } from 'igniteui-react-core';
import SingersData from './SingersData.json';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorHierarchicalGrid: IgrPropertyEditorPanel
    private propertyEditorHierarchicalGridRef(r: IgrPropertyEditorPanel) {
        this.propertyEditorHierarchicalGrid = r;
        this.setState({});
    }
    private rowPinningEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.rows = RowPinningPosition.Top;
            pinningConfig1.columns = ColumnPinningPosition.End;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }
    private actionStrip1: IgrActionStrip
    private  _pinningConfig2: IgrPinningConfig | null = null;
    public get pinningConfig2(): IgrPinningConfig {
        if (this._pinningConfig2 == null)
        {
            var pinningConfig2: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig2.rows = RowPinningPosition.Top;
            pinningConfig2.columns = ColumnPinningPosition.End;

            this._pinningConfig2 = pinningConfig2;
        }
        return this._pinningConfig2;
    }
    private actionStrip2: IgrActionStrip

    constructor(props: any) {
        super(props);

        this.propertyEditorHierarchicalGridRef = this.propertyEditorHierarchicalGridRef.bind(this);
        this.webHierarchicalGridChangePinningConfig = this.webHierarchicalGridChangePinningConfig.bind(this);
        this.gridRef = this.gridRef.bind(this);
        this.webHierarchicalGridPinRowOnRendered = this.webHierarchicalGridPinRowOnRendered.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorHierarchicalGridRef}
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebHierarchicalGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        name="rowPinningEditor"
                        label="Row Pinning toggle"
                        valueType="EnumValue"
                        dropDownNames={["Top", "Bottom"]}
                        dropDownValues={["Top", "Bottom"]}
                        changed={this.webHierarchicalGridChangePinningConfig}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    primaryKey="Photo"
                    id="grid"
                    ref={this.gridRef}
                    cellSelection="none"
                    onRendered={this.webHierarchicalGridPinRowOnRendered}
                    pinning={this.pinningConfig1}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        minWidth="115px">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="string">
                    </IgrColumn>
                    <IgrActionStrip
                    >
                        <IgrGridPinningActions
                        >
                        </IgrGridPinningActions>
                    </IgrActionStrip>
                    <IgrRowIsland
                        childDataKey="Albums"
                        primaryKey="Album"
                        cellSelection="none"
                        autoGenerate={false}
                        pinning={this.pinningConfig2}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string">
                        </IgrColumn>
                        <IgrActionStrip
                        >
                            <IgrGridPinningActions
                            >
                            </IgrGridPinningActions>
                        </IgrActionStrip>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebHierarchicalGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webHierarchicalGridChangePinningConfig(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        const rows = args.newValue === "Top" ? RowPinningPosition.Top : RowPinningPosition.Bottom;
        const columns = ColumnPinningPosition.End;
        this._pinningConfig1 = { rows, columns };
        this._pinningConfig2 = { rows, columns };
        if ('_pinningConfig3' in this) {
            this._pinningConfig3 = { rows, columns };
        }
        if ('_pinningConfig4' in this) {
            this._pinningConfig4 = { rows, columns };
        }
        this.forceUpdate(); // due to not using state
    }

    public webHierarchicalGridPinRowOnRendered(): void {
        var hierarchicalGrid = this.grid;
        hierarchicalGrid.pinRow(hierarchicalGrid.data[0].Photo);
        hierarchicalGrid.pinRow(hierarchicalGrid.data[1].Photo);
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
<IgrHierarchicalGrid>
    <IgrColumn field="Country" header="Country"> </IgrColumn>
    <IgrActionStrip>
        <IgrGridPinningActions></IgrGridPinningActions>
        <IgrGridEditingActions></IgrGridEditingActions>
    </IgrActionStrip>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

## Row Pinning API

Row pinning is controlled through the [`pinned`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pinned) input of the `Row`. Pinned rows are rendered at the top of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) by default and stay fixed through vertical scrolling of the unpinned rows in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) body.

```tsx
gridRef.current.getRowByIndex(0).pinned = true;
```

You may also use the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)'s [`pinRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html#pinRow) or [`unpinRow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html#unpinRow) methods of the to pin or unpin records by their ID:

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

<IgrHierarchicalGrid autoGenerate={true} onRowPinning={rowPinning}>
</IgrHierarchicalGrid>
```

## Pinning Position

You can change the row pinning position via the [`pinning`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#pinning) configuration option. It allows you to set the pin area position to either Top or Bottom.
When set to Bottom pinned rows are rendered at the bottom of the grid, after the unpinned rows. Unpinned rows can be scrolled vertically, while the pinned rows remain fixed at the bottom.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```tsx
const pinning: IgrPinningConfig = { rows : RowPinningPosition.Bottom };

<IgrHierarchicalGrid ref={gridRef} autoGenerate={true} pinning={pinning}>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

## Custom Row Pinning UI

You can define your custom UI and change the pin state of the rows via the related API.

### Via extra column with icon

Let's say that instead of an action strip you would like to show a pin icon in every row allowing the end-user to click and change a particular row's pin state.
This can be done by adding an extra column with a cell template containing the custom icon.

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: HierarchicalGrid -->

On click of the custom icon the pin state of the related row can be changed using the row's API methods.

```tsx
const toggleRowPin = (row: IgrRowType) => {
  row.pinned = !row.pinned;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

#### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrHierarchicalGrid, IgrPinningConfig, RowPinningPosition, ColumnPinningPosition, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebHierarchicalGridDescriptionModule } from 'igniteui-react-core';
import SingersData from './SingersData.json';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { IgrCellTemplateContext, IgrRowType } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorHierarchicalGrid: IgrPropertyEditorPanel
    private propertyEditorHierarchicalGridRef(r: IgrPropertyEditorPanel) {
        this.propertyEditorHierarchicalGrid = r;
        this.setState({});
    }
    private rowPinningEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.rows = RowPinningPosition.Top;
            pinningConfig1.columns = ColumnPinningPosition.End;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }
    private  _pinningConfig2: IgrPinningConfig | null = null;
    public get pinningConfig2(): IgrPinningConfig {
        if (this._pinningConfig2 == null)
        {
            var pinningConfig2: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig2.rows = RowPinningPosition.Top;
            pinningConfig2.columns = ColumnPinningPosition.End;

            this._pinningConfig2 = pinningConfig2;
        }
        return this._pinningConfig2;
    }
    private  _pinningConfig3: IgrPinningConfig | null = null;
    public get pinningConfig3(): IgrPinningConfig {
        if (this._pinningConfig3 == null)
        {
            var pinningConfig3: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig3.rows = RowPinningPosition.Top;
            pinningConfig3.columns = ColumnPinningPosition.End;

            this._pinningConfig3 = pinningConfig3;
        }
        return this._pinningConfig3;
    }
    private  _pinningConfig4: IgrPinningConfig | null = null;
    public get pinningConfig4(): IgrPinningConfig {
        if (this._pinningConfig4 == null)
        {
            var pinningConfig4: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig4.rows = RowPinningPosition.Top;
            pinningConfig4.columns = ColumnPinningPosition.End;

            this._pinningConfig4 = pinningConfig4;
        }
        return this._pinningConfig4;
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorHierarchicalGridRef = this.propertyEditorHierarchicalGridRef.bind(this);
        this.webHierarchicalGridChangePinningConfig = this.webHierarchicalGridChangePinningConfig.bind(this);
        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorHierarchicalGridRef}
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebHierarchicalGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        name="rowPinningEditor"
                        label="Row Pinning toggle"
                        valueType="EnumValue"
                        dropDownNames={["Top", "Bottom"]}
                        dropDownValues={["Top", "Bottom"]}
                        changed={this.webHierarchicalGridChangePinningConfig}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    primaryKey="Photo"
                    id="grid"
                    ref={this.gridRef}
                    cellSelection="none"
                    pinning={this.pinningConfig1}>
                    <IgrColumn
                        width="70px"
                        filterable={false}
                        pinned={true}
                        bodyTemplate={this.webHierarchicalGridRowPinCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="string">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        primaryKey="Album"
                        cellSelection="none"
                        pinning={this.pinningConfig2}
                        autoGenerate={false}>
                        <IgrColumn
                            width="70px"
                            filterable={false}
                            pinned={true}
                            bodyTemplate={this.webHierarchicalGridRowPinCellTemplate}>
                        </IgrColumn>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            primaryKey="Number"
                            cellSelection="none"
                            pinning={this.pinningConfig3}
                            autoGenerate={false}>
                            <IgrColumn
                                width="70px"
                                filterable={false}
                                pinned={true}
                                bodyTemplate={this.webHierarchicalGridRowPinCellTemplate}>
                            </IgrColumn>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string">
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="string">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        primaryKey="Tour"
                        cellSelection="none"
                        pinning={this.pinningConfig4}
                        autoGenerate={false}>
                        <IgrColumn
                            width="70px"
                            filterable={false}
                            pinned={true}
                            bodyTemplate={this.webHierarchicalGridRowPinCellTemplate}>
                        </IgrColumn>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string">
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebHierarchicalGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webHierarchicalGridChangePinningConfig(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        const rows = args.newValue === "Top" ? RowPinningPosition.Top : RowPinningPosition.Bottom;
        const columns = ColumnPinningPosition.End;
        this._pinningConfig1 = { rows, columns };
        this._pinningConfig2 = { rows, columns };
        if ('_pinningConfig3' in this) {
            this._pinningConfig3 = { rows, columns };
        }
        if ('_pinningConfig4' in this) {
            this._pinningConfig4 = { rows, columns };
        }
        this.forceUpdate(); // due to not using state
    }

    public webHierarchicalGridRowPinCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
        const row = e.dataContext.cell.row;
        return (
            <span onPointerDown={(e: any) => this.toggleRowPin(row)} style={{ cursor: 'pointer'}}>📌</span>
        );
    }

    public toggleRowPin(row: IgrRowType) {
        row.pinned = !row.pinned;
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Row Pinning Limitations

- Only records that exist in the data source can be pinned.
- The row pinning state is not exported to excel. The grid is exported as if no row pinning is applied.
- The copies of pinned rows in the scrollable area of the grid are an integral part of how other grid features achieve their functionality in the presence of pinned rows and therefore their creation cannot be disabled nor can they be removed.
- As Row Selection works entirely with row Ids, selecting pinned rows selects their copies as well (and vice versa). Additionally, range selection (e.g. using <kbd>SHIFT</kbd> + click) within the pinned area works the same way as selecting a range of rows within the scrollable area. The resulting selection includes all rows in between even if they are not currently pinned. Getting the selected rows through the API only returns a single instance of each selected record.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrHierarchicalGrid className="grid"></IgrHierarchicalGrid>
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

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrPinningConfig, RowPinningPosition, ColumnPinningPosition, IgrColumn, IgrActionStrip, IgrGridPinningActions, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';
import { IgrGrid } from 'igniteui-react-grids';

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
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.rows = RowPinningPosition.Top;
            pinningConfig1.columns = ColumnPinningPosition.End;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }
    private actionStrip1: IgrActionStrip
    private  _pinningConfig2: IgrPinningConfig | null = null;
    public get pinningConfig2(): IgrPinningConfig {
        if (this._pinningConfig2 == null)
        {
            var pinningConfig2: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig2.rows = RowPinningPosition.Top;
            pinningConfig2.columns = ColumnPinningPosition.End;

            this._pinningConfig2 = pinningConfig2;
        }
        return this._pinningConfig2;
    }
    private actionStrip2: IgrActionStrip

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webHierarchicalGridPinRowOnRendered = this.webHierarchicalGridPinRowOnRendered.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    primaryKey="Photo"
                    id="grid"
                    ref={this.gridRef}
                    cellSelection="none"
                    onRendered={this.webHierarchicalGridPinRowOnRendered}
                    pinning={this.pinningConfig1}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        minWidth="115px">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="string">
                    </IgrColumn>
                    <IgrActionStrip
                    >
                        <IgrGridPinningActions
                        >
                        </IgrGridPinningActions>
                    </IgrActionStrip>
                    <IgrRowIsland
                        childDataKey="Albums"
                        primaryKey="Album"
                        cellSelection="none"
                        autoGenerate={false}
                        pinning={this.pinningConfig2}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string">
                        </IgrColumn>
                        <IgrActionStrip
                        >
                            <IgrGridPinningActions
                            >
                            </IgrGridPinningActions>
                        </IgrActionStrip>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }


    public webHierarchicalGridPinRowOnRendered(): void {
        var hierarchicalGrid = this.grid;
        hierarchicalGrid.pinRow(hierarchicalGrid.data[0].Photo);
        hierarchicalGrid.pinRow(hierarchicalGrid.data[1].Photo);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## API References

- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)
- `HierarchicalGridRow`
- [`IgrRowType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowtype.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
