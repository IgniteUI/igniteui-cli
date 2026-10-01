---
title: "React Hierarchical Grid Column Hiding - Ignite UI for React"
description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table.
keywords: "React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics"
license: commercial
_canonicalLink: "grids/grid/column-hiding"
llms:
  description: "Ignite UI for React IgrHierarchicalGrid provides a ColumnActionsComponent with a ColumnHidingDirective which allows users to perform column hiding directly through the user interface or by using the React component."
_componentKey: HierarchicalGrid
_tocName: Column Hiding
_premium: true
---
# React Hierarchical Grid Column Hiding

The Ignite UI for React has a built-in column hiding UI, which can be used through the React Hierarchical Grid toolbar to change the visible state of the columns. Developers have the flexibility to define the Column Hiding UI anywhere within the page as needed. The React Hierarchical Grid Column Hiding feature is especially useful when one wants to decrease the size of the grid and to eliminate the need for tabbing through redundant fields.

## React Hierarchical Grid Column Hiding Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridToolbarModule, IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridToolbarModule,
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
                    allowFiltering={true}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarHiding
                                title="Column Hiding">
                            </IgrGridToolbarHiding>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        sortable={true}
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
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
                                dataType="date">
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
                        autoGenerate={false}>
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Hierarchical Grid Setup

Let's start by creating our [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid) and binding it to our data. We will also enable both filtering and sorting for the columns.

```tsx
<IgrHierarchicalGrid autoGenerate={false} data={singersData} primaryKey="ID" allowFiltering={true} ref={hierarchicalGrid1Ref}>
    <IgrColumn field="Artist" header="Artist" dataType="string" sortable={true}></IgrColumn>
    <IgrColumn field="Photo" header="Photo" dataType="image"></IgrColumn>
    <IgrColumn field="Debut" header="Debut" dataType="number" hidden={true}></IgrColumn>
    <IgrColumn field="GrammyNominations" header="Grammy Nominations" dataType="number" sortable={true} hidden={true}></IgrColumn>
    <IgrColumn field="GrammyAwards" header="Grammy Awards" dataType="number" sortable={true}></IgrColumn>
</IgrHierarchicalGrid>
```

## Toolbar's Column Hiding UI

The built-in Column Hiding UI is placed inside an [`IgrDropdown`](mcp:get_api_reference?platform=react&component=IgrDropdown) in the [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid)'s toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.

For this purpose all we have to do is set both the [`IgrGridToolbarActions`](mcp:get_api_reference?platform=react&component=IgrGridToolbarActions) and the [`IgrGridToolbarHiding`](mcp:get_api_reference?platform=react&component=IgrGridToolbarHiding) inside of the [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid).

```tsx
<IgrHierarchicalGrid>
    <IgrGridToolbar>
        <IgrGridToolbarActions>
            <IgrGridToolbarHiding></IgrGridToolbarHiding>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrHierarchicalGrid>
```

The [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid) provides us with some useful properties when it comes to using the toolbar's column hiding UI.

By using the [`Title`](mcp:get_api_reference?platform=react&component=IgrGridToolbarHiding&member=title) and [`Prompt`](mcp:get_api_reference?platform=react&component=IgrGridToolbarHiding&member=prompt) properties, we will set the title and filter prompt that are displayed inside the dropdown in the toolbar.

```tsx
<IgrHierarchicalGrid>
    <IgrGridToolbar>
        <IgrGridToolbarActions>
            <IgrGridToolbarHiding title="Column Hiding" prompt="Type here to search"></IgrGridToolbarHiding>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
</IgrHierarchicalGrid>
```

You can see the result of the code from above at the beginning of this article in the React Column Hiding Example section.

### Disable hiding of a column
We can easily prevent the user from being able to hide columns through the column hiding UI by simply setting their [`disableHiding`](mcp:get_api_reference?platform=react&component=IgrColumnState&member=disableHiding) property to true.

```tsx
<IgrHierarchicalGrid>
    <IgrColumn field="Artist" dataType="string" sortable={true} disableHiding={true}></IgrColumn>
    <IgrColumn field="GrammyAwards" dataType="string" sortable={true} disableHiding={true}></IgrColumn>

    <IgrRowIsland>
        <IgrColumn field="Album" dataType="string" sortable={true} disableHiding={true}></IgrColumn>
    </IgrRowIsland>
</IgrHierarchicalGrid>
```

## Styling

The grid could be further customized by setting some of the available [CSS variables](../grid/theming-grid.md).
In order to achieve that, we will use a class that we will first assign to the grid:

```tsx
<IgrHierarchicalGrid className="hierarchical-grid"></IgrHierarchicalGrid>
```

Then set the related CSS variables for the related components. We will apply the styles also only on the `igx-column-actions`, so the rest of the grid is unaffected:

```css
.hierarchical-grid {
    /* Main Column Actions styles */
    --ig-column-actions-background-color: #292826;
    --ig-column-actions-title-color: #ffcd0f;

    /* Checkbox styles */
    --ig-checkbox-tick-color: #292826;
    --ig-checkbox-label-color: #ffcd0f;
    --ig-checkbox-empty-color: #ffcd0f;
    --ig-checkbox-fill-color: #ffcd0f;

    /* Input styles */
    --ig-input-group-idle-text-color: white;
    --ig-input-group-filled-text-color: #ffcd0f;
    --ig-input-group-focused-text-color: #ffcd0f;
    --ig-input-group-focused-border-color: #ffcd0f;
    --ig-input-group-focused-secondary-color: #ffcd0f;

    /* Buttons styles */
    --ig-button-foreground: #292826;
    --ig-button-background: #ffcd0f;
    --ig-button-hover-background: #404040;
    --ig-button-hover-foreground: #ffcd0f;
    --ig-button-focus-background: #ffcd0f;
    --ig-button-focus-foreground: black;
    --ig-button-focus-visible-background: #ffcd0f;
    --ig-button-focus-visible-foreground: black;
    --ig-button-disabled-foreground: #ffcd0f;
}

```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#hierarchicalGrid {
    --ig-column-actions-background-color: #292826;
    --ig-column-actions-title-color: #ffcd0f;
    --ig-checkbox-tick-color: #292826;
    --ig-checkbox-label-color: #ffcd0f;
    --ig-checkbox-label-color-hover: #c5a11b;
    --ig-checkbox-empty-color: #ffcd0f;
    --ig-checkbox-focus-outline-color: #c5a11b;
    --ig-checkbox-empty-fill-color: #292826;
    --ig-checkbox-fill-color: #ffcd0f;
    --ig-checkbox-fill-color-hover: #c5a11b;
    --ig-input-group-idle-text-color: white;
    --ig-input-group-filled-text-color: #ffcd0f;
    --ig-input-group-focused-text-color: #ffcd0f;
    --ig-input-group-focused-border-color: #ffcd0f;
    --ig-input-group-focused-secondary-color: #ffcd0f;
    --ig-flat-button-foreground: #292826;
    --ig-flat-button-background: #ffcd0f;
    --ig-flat-button-hover-background: #404040;
    --ig-flat-button-hover-foreground: #ffcd0f;
    --ig-flat-button-focus-background: #ffcd0f;
    --ig-flat-button-focus-foreground: black;
    --ig-flat-button-focus-visible-background: #ffcd0f;
    --ig-flat-button-focus-visible-foreground: black;
    --ig-flat-button-disabled-foreground: #ffcd0f;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridToolbarModule, IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridToolbarModule,
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }

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
                    id="hierarchicalGrid"
                    ref={this.hierarchicalGridRef}
                    primaryKey="ID"
                    allowFiltering={true}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarHiding
                                title="Column Hiding">
                            </IgrGridToolbarHiding>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
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
                                dataType="date">
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
                        autoGenerate={false}>
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## API References
[`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid)
[`IgrColumn`](mcp:get_api_reference?platform=react&component=IgrColumn)
[`IgrGridToolbar`](mcp:get_api_reference?platform=react&component=IgrGridToolbar)
[`IgrGridToolbarHiding`](mcp:get_api_reference?platform=react&component=IgrGridToolbarHiding)
[`IgrGridToolbarActions`](mcp:get_api_reference?platform=react&component=IgrGridToolbarActions)
[`IgrGridToolbarTitle`](mcp:get_api_reference?platform=react&component=IgrGridToolbarTitle)
## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
