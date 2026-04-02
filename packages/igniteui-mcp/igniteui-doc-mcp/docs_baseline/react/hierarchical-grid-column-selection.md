---
title: React Hierarchical Grid Column Selection - Ignite UI for React
_description: Learn how to configure column selection with Ignite UI for React Hierarchical Grid. This makes grid interactions much easier and faster than ever.
_keywords: React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics, column selection
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/column-selection
_tocName: Column Selection
_premium: true
---

# React Hierarchical Grid Column Selection Overview

The React Hierarchical Grid Column Selection feature in Ignite UI for React offers a simplified and Excel-like way to select and highlight an entire column with a single click. It can be enabled through the [`columnSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#columnSelection) input. Thanks to the rich API, the feature allows for easy manipulation of the selection state, data extraction from the selected fractions, data analysis operations, and visualizations.

## React Hierarchical Grid Column Selection Example

The sample below demonstrates the three types of [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)'s **column selection** behavior. Use the column selection dropdown below to enable each of the available selection modes.

<!-- ComponentStart: HierarchicalGrid -->

\*_Photo_ and _Debut_ are with disabled column selection.

<!-- ComponentEnd: HierarchicalGrid -->

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
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebHierarchicalGridDescriptionModule } from 'igniteui-react-core';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private columnSelectionEditor: IgrPropertyEditorPropertyDescription
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.hierarchicalGrid}
                    descriptionType="WebHierarchicalGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="ColumnSelection"
                        name="ColumnSelectionEditor"
                        valueType="EnumValue"
                        dropDownNames={["None", "Single", "Multiple", "MultipleCascade"]}
                        dropDownValues={["None", "Single", "Multiple", "MultipleCascade"]}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID"
                    allowFiltering={true}
                    columnSelection="single">
                    <IgrColumn
                        field="Artist"
                        header="Artist">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        selectable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        selectable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}
                        columnSelection="single">
                        <IgrColumn
                            field="Album"
                            header="Album">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            selectable={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review">
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}
                            columnSelection="single">
                            <IgrColumn
                                field="Number"
                                header="No.">
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}
                        columnSelection="single">
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            selectable={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            selectable={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            selectable={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Basic Usage

The column selection feature can be enabled through the [`columnSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#columnSelection) input, which takes `GridSelectionMode` values.

## Interactions

The default selection mode is `None`. If set to `Single` or `Multiple`, all of the presented columns will be [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable). With that being said, in order to select a column, we just need to click on one, which will mark it as [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected). If the column is not selectable, no selection style will be applied on the header, while hovering.

> [!Note]
> The [Multi Column Headers](multi-column-headers.md) feature does not reflect on the [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable) input. The `ColumnGroupComponent` is [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable), if at least one of its children has the selection behavior enabled. In addition, the component is marked as [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected) if all of its [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable) descendants are [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected).

<!-- ComponentStart: HierarchicalGrid -->

\*Under _Location_ Column Group only column _City_ is selectable.

<!-- ComponentEnd: HierarchicalGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumnGroup, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomers from './HierarchicalCustomers.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrColumnGroupModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }
    private columnGroup: IgrColumnGroup
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
                    data={this.hierarchicalCustomers}
                    columnSelection="multiple">
                    <IgrColumnGroup
                        header="General Information">
                        <IgrColumn
                            field="Company"
                            header="Company">
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ContactName"
                                header="Name">
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle"
                                header="Title">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information">
                        <IgrColumnGroup
                            header="Location">
                            <IgrColumn
                                field="Address"
                                header="Address"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                header="City">
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode"
                                header="Postal Code"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="Country"
                                header="Country"
                                selectable={false}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                field="Phone">
                            </IgrColumn>
                            <IgrColumn
                                field="Fax">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}
                        columnSelection="multiple">
                        <IgrColumnGroup
                            header="Order Information">
                            <IgrColumnGroup
                                header="Order Details">
                                <IgrColumn
                                    field="OrderID">
                                </IgrColumn>
                                <IgrColumn
                                    field="EmployeeID">
                                </IgrColumn>
                                <IgrColumn
                                    field="OrderDate"
                                    dataType="date">
                                </IgrColumn>
                                <IgrColumn
                                    field="RequiredDate"
                                    dataType="date">
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="General Shipping Information">
                                <IgrColumn
                                    field="ShippedDate"
                                    dataType="date">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipVia"
                                    selectable={false}>
                                </IgrColumn>
                                <IgrColumn
                                    field="Freight"
                                    selectable={false}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipName">
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="Shipping Location">
                                <IgrColumn
                                    field="ShipAddress">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCity">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipPostalCode">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCountry">
                                </IgrColumn>
                            </IgrColumnGroup>
                        </IgrColumnGroup>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}
                            columnSelection="single">
                            <IgrColumn
                                field="ProductID">
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice">
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="Discount">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Keyboard Combinations

> [!Note]
> The keyboard combinations are available only when the grid [`columnSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#columnSelection) input is set to `multiple`.

There are two scenarios for keyboard navigation of the **Column Selection** feature:

- Multi-column selection - holding <kbd>CTRL</kbd> + <kbd>click</kbd> on every **selectable** header cell.
- Range column selection - holding <kbd>SHIFT</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.

## API Manipulations

The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected) by setting the corresponding **setter**.

> [!Note]
> The above statement also applies to the `ColumnGroupComponent`, except that when the [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected) property is changed it changes the state of its descendants.

More information regarding the API manipulations could be found in the [API References](#api-references) section.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a `class` for the grid first:

```tsx
<IgrHierarchicalGrid className="grid"></IgrHierarchicalGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-row-selected-background: #0062A3;
    --ig-grid-row-selected-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
    --ig-grid-header-selected-text-color: #ecaa53;
    --ig-grid-header-selected-background: #0062A3;
    --ig-grid-row-selected-hover-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#grid {
    --ig-grid-row-selected-background: #0062A3;
    --ig-grid-row-selected-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
    --ig-grid-header-selected-text-color: #ecaa53;
    --ig-grid-header-selected-background: #0062A3;
    --ig-grid-row-selected-hover-text-color: #ecaa53;
    --ig-grid-row-selected-hover-background: #0062A3;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

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
                    data={this.singersData}
                    ref={this.gridRef}
                    id="grid"
                    primaryKey="ID"
                    allowFiltering={true}
                    columnSelection="single">
                    <IgrColumn
                        field="Artist"
                        header="Artist">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        selectable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        selectable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}
                        columnSelection="multiple">
                        <IgrColumn
                            field="Album"
                            header="Album">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            selectable={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review">
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}
                            columnSelection="multiple">
                            <IgrColumn
                                field="Number"
                                header="No.">
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}
                        columnSelection="single">
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            selectable={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            selectable={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            selectable={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## API References

The column selection UI has a few more APIs to explore, which are listed below.

- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup)

[`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) properties:

- [`columnSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#columnSelection)
- [`selectedColumns`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#selectedColumns)
- [`selectColumns`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#selectColumns)
- [`deselectColumns`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#deselectColumns)
- [`selectAllColumns`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#selectAllColumns)
- [`deselectAllColumns`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#deselectAllColumns)

[`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) properties:

- [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable)
- [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected)

[`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup) properties:

- [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selectable)
- [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#selected)

[`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) events:

- `OnColumnsSelectionChange`

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
