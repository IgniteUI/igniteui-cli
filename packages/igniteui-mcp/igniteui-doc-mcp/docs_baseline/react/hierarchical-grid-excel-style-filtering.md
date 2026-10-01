---
title: "React Hierarchical Grid Excel Style Filtering - Ignite UI for React"
description: Learn how to configure Excel filtering in React Hierarchical Grid. You can enable/disable various options and customize the Excel style filter menu the way you want.
keywords: excel like filter, React, Ignite UI for React, Infragistics
license: commercial
llms:
  description: "The React Hierarchical Grid exposes an Excel-style filtering feature that provides an Excel-like filtering UI."
_componentKey: HierarchicalGrid
_tocName: Excel Style Filtering
_premium: true
---
# Excel Filtering in React Hierarchical Grid

The React Hierarchical Grid exposes an Excel-style filtering feature that provides an Excel-like filtering UI. It simplifies the process of working with large datasets. The main idea is to help them filter the data that is most relevant, while eliminating irrelevant entries.

## React Hierarchical Grid Excel Style Filtering Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

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
    private gridToolbar: IgrGridToolbar
    private gridToolbarActions: IgrGridToolbarActions
    private gridToolbarHiding: IgrGridToolbarHiding
    private gridToolbarPinning: IgrGridToolbarPinning
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
                    data={this.singersData}
                    primaryKey="ID"
                    allowFiltering={true}
                    filterMode="excelStyleFilter">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        minWidth="115px"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        minWidth="88px"
                        maxWidth="230px"
                        resizable={true}
                        filterable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}
                        allowFiltering={true}
                        filterMode="excelStyleFilter">
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}
                            allowFiltering={true}
                            filterMode="excelStyleFilter">
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}
                        allowFiltering={true}
                        filterMode="excelStyleFilter">
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            resizable={true}>
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

## Usage

To turn on the [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid) component's Excel-style filtering, two inputs should be set. The [`IgrHierarchicalGrid.allowFiltering`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid&member=allowFiltering) should be set to **true** and the [`IgrHierarchicalGrid.filterMode`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid&member=filterMode) should be set to `ExcelStyleFilter` value.

```tsx
<IgrHierarchicalGrid data={nwindData} autoGenerate={true} allowFiltering={true} filterMode="excelStyleFilter">
</IgrHierarchicalGrid>
```

## Interactions

In order to open the filter menu for a particular column, the React filter icon in the header should be clicked. Additionally, you can use the <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>L</kbd> combination on a selected header. If the column can be sorted, pinned, moved, selected or hidden along with the filtering functionality, there will be buttons available for the features that are turned on.

If no filter is applied, all the items in the list will be selected. They can be filtered from the input above the list. In order to filter the data, you can select/deselect the items in the list and either click the Apply button, or press <kbd>ENTER</kbd>. The filtering applied through the list items creates filter expressions with `equals` operator and the logic operator between the expressions is `OR`.

If you type something in the search box and apply the filter, only the items that match the search criteria will be selected. If you want to add items to the currently filtered ones, however, you should select the option **Add current selection to filter**.

If you want to clear the filter, you can check the **Select All** option and then click the Apply button.

To apply a filter with different expressions, you can click the **Text filter**, which will open a sub menu with all available filter operators for the particular column. Selecting one of them will open the custom filter dialog, where you can add as many expressions as you want with different filter and logic operators. There is also a clear button, which can clear the filter.

## Configure Menu Features

Sorting, pinning and hiding features can be removed from the filter menu using the corresponding inputs: [`IgrColumn.sortable`](mcp:get_api_reference?platform=react&component=IgrColumn&member=sortable), [`IgrColumn.selected`](mcp:get_api_reference?platform=react&component=IgrColumn&member=selected), [`IgrColumnState.disablePinning`](mcp:get_api_reference?platform=react&component=IgrColumnState&member=disablePinning), [`IgrColumnState.disableHiding`](mcp:get_api_reference?platform=react&component=IgrColumnState&member=disableHiding).

```tsx
<IgrHierarchicalGrid autoGenerate={false} allowFiltering={true} filterMode="excelStyleFilter"
    height="650px" width="100%" id="hierarchicalGrid">
    <IgrColumn field="Artist" filterable={true} sortable={true} ></IgrColumn>
    <IgrColumn field="Photo" filterable={false}></IgrColumn>
    <IgrColumn field="Debut" filterable={true} disablePinning={true} disableHiding={true}></IgrColumn>
    <IgrColumn field="GrammyNominations" header="Grammy Nominations" filterable={true} sortable={false} dataType="number"></IgrColumn>
    <IgrColumn field="GrammyAwards" header="Grammy Awards" filterable={true} dataType="number"></IgrColumn>
    {/* ... */}
</IgrHierarchicalGrid>
```

In the sample below 'Artist' column have all three features enabled, 'Debut' have all three disabled, 'Grammy Nominations' has only pinning and hiding.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

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
    private gridToolbar: IgrGridToolbar
    private gridToolbarActions: IgrGridToolbarActions
    private gridToolbarHiding: IgrGridToolbarHiding
    private gridToolbarPinning: IgrGridToolbarPinning
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
                    data={this.singersData}
                    primaryKey="ID"
                    allowFiltering={true}
                    filterMode="excelStyleFilter">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        resizable={true}
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        minWidth="115px"
                        resizable={true}
                        disablePinning={true}
                        disableHiding={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        minWidth="88px"
                        maxWidth="230px"
                        resizable={true}
                        filterable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}
                        allowFiltering={true}
                        filterMode="excelStyleFilter">
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            resizable={true}
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            resizable={true}
                            disablePinning={true}
                            disableHiding={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}
                            allowFiltering={true}
                            filterMode="excelStyleFilter">
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}
                        allowFiltering={true}
                        filterMode="excelStyleFilter">
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            resizable={true}>
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

## Templates

If you want to further customize the Excel style filter menu, you can use the [`IgrHierarchicalGrid.excelStyleHeaderIconTemplate`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid&member=excelStyleHeaderIconTemplate) property to define a custom template for the header icon of the menu.

The following code demonstrates how to customize the Excel style filter menu using the [`IgrHierarchicalGrid.excelStyleHeaderIconTemplate`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid&member=excelStyleHeaderIconTemplate):

```tsx
const webGridFilterAltIconTemplate = (ctx: IgrGridHeaderTemplateContext) => {
  return (
    <img
      height="15px"
      width="15px"
      src="http://static.infragistics.com/xplatform/images/grid/propeller-logo.svg"
      title="Continued"
      alt="Continued"
    />
  );
}

<IgrHierarchicalGrid autoGenerate={true} allowFiltering={true} filterMode="excelStyleFilter"
    excelStyleHeaderIconTemplate={webGridFilterAltIconTemplate}>
</IgrHierarchicalGrid>

```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';
import { IgrGridHeaderTemplateContext } from 'igniteui-react-grids';

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
    private gridToolbar: IgrGridToolbar
    private gridToolbarActions: IgrGridToolbarActions
    private gridToolbarHiding: IgrGridToolbarHiding
    private gridToolbarPinning: IgrGridToolbarPinning
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
                    data={this.singersData}
                    primaryKey="ID"
                    allowFiltering={true}
                    excelStyleHeaderIconTemplate={this.webGridFilterAltIconTemplate}
                    filterMode="excelStyleFilter">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        minWidth="115px"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        minWidth="88px"
                        maxWidth="230px"
                        resizable={true}
                        filterable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}
                        allowFiltering={true}
                        filterMode="excelStyleFilter">
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}
                            allowFiltering={true}
                            filterMode="excelStyleFilter">
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}
                        allowFiltering={true}
                        filterMode="excelStyleFilter">
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            resizable={true}>
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


    public webGridFilterAltIconTemplate = (props: { dataContext: IgrGridHeaderTemplateContext }) => {
        return (
            <img height="15px" width="15px" src="http://dl.infragistics.com/x/img/grid/propeller-logo.sv" title="Continued" alt="Continued" />
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../grid/theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrHierarchicalGrid className="grid"></IgrHierarchicalGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-list-item-background: #ffcd0f;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-grid-filtering-row-background: #ffcd0f;
        --ig-button-background: #FFCD0F;
        --ig-button-foreground: #292826;
        --ig-button-hover-background: #292826;
        --ig-button-hover-foreground: #ffcd0f;

        --ig-list-background: #FFCD0F;
        --ig-list-item-background: #FFCD0F;
        --ig-list-item-background-hover: #c2b1b1bd;

        --ig-checkbox-empty-color: #292826;
        --ig-checkbox-fill-color: #292826;
        --ig-checkbox-tick-color: #FFCD0F;
        --ig-checkbox-label-color: #292826;

        --ig-drop-down-background-color: #FFCD0F;
        --ig-drop-down-item-text-color: #292826;
        --ig-drop-down-item-background: #FFCD0F;
        --ig-drop-down-item-text-color: #292826;
        --ig-drop-down-focused-item-background: #c2b1b1bd;
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
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
                    id="grid"
                    ref={this.gridRef}
                    primaryKey="ID"
                    allowFiltering={true}
                    filterMode="excelStyleFilter">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        minWidth="115px"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        minWidth="88px"
                        maxWidth="230px"
                        resizable={true}
                        filterable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}
                        allowFiltering={true}
                        filterMode="excelStyleFilter">
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}
                            allowFiltering={true}
                            filterMode="excelStyleFilter">
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}
                        allowFiltering={true}
                        filterMode="excelStyleFilter">
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            resizable={true}>
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
[`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid)
[`IgrColumn`](mcp:get_api_reference?platform=react&component=IgrColumn)
## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
