---
title: React Grid Advanced Filtering - Ignite UI for React
_description: Learn how to configure advanced filter of data with the React Grid. The grid advanced filtering is more convenient and engaging than ever.
_keywords: Advanced Filtering, React, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/advanced-filtering
_tocName: Advanced Filtering
_premium: true
---

# React Grid Advanced Filtering

The Ignite UI for React Advanced Filtering in React Grid allows you to manipulate data by providing you with a dialog where you can create different groups with filtering conditions across all columns in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

## React Grid Advanced Filtering Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

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
                    ref={this.gridRef}
                    data={this.nwindData}
                    moving={true}
                    allowAdvancedFiltering={true}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarAdvancedFiltering
                            >
                            </IgrGridToolbarAdvancedFiltering>
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="QuantityPerUnit"
                        header="Quantity Per Unit"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        sortable={true}
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="boolean"
                        bodyTemplate={this.webGridDiscontinuedCellTemplate}
                        sortable={true}>
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

    public webGridDiscontinuedCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value) {
            return <img src="https://dl.infragistics.com/x/img/grid/active.png" title="Continued" alt="Continued" />;
        } else {
            return <img src="https://dl.infragistics.com/x/img/grid/expired.png" title="Discontinued" alt="Discontinued" />;
        }
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Interaction

In order to open the advanced filtering dialog, the **Advanced Filtering** button in the grid toolbar should be clicked. If no advanced filter is applied, you should start with creating a group of filtering conditions linked with **AND** or **OR**. After that, you can add filtering conditions or sub-groups.

In order to add a filtering condition, you have to select any of the [`filterable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#filterable) columns, an operand based on the column [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType) and a value if the operand is not unary. Once the condition is committed, a chip with the condition information appears. By hovering or clicking the chip, you have the options to modify it or add another condition or group right after it.

If you select more than one filtering condition chip, a context menu appears with options to create a group or delete the filters. If you choose to create a group with the selected conditions, the newly created group will appear where the topmost selected condition was placed.

In order to select a group, you can also click on its vertical line, which is colored based on the the linking condition **AND** or **OR**. If a single group is selected, you get a context menu with options to change its filtering logic, ungroup or delete it.

In order to filter the data once you are ready with creating the filtering conditions and groups, you should click the **Apply** button. If you have modified the advanced filter, but you don't want to preserve the changes, you should click the **Cancel** button. You could also clear the advanced filter by clicking the **Clear Filter** button.

## Usage

To enable the advanced filtering, the [`allowAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#allowAdvancedFiltering) input property should be set to **true**.

```tsx
<IgrGrid data={nwindData} autoGenerate={false} ref={gridRef} allowAdvancedFiltering={true}>
    <IgrGridToolbar></IgrGridToolbar>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

The advanced filtering generates a [`filteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#filteringExpressionsTree) which is stored in the [`advancedFilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#advancedFilteringExpressionsTree) input property. You could use the [`advancedFilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#advancedFilteringExpressionsTree) property to set an initial state of the advanced filtering.

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

```tsx
const filteringTree: IgrFilteringExpressionsTree = {
    operator: FilteringLogic.And,
    filteringOperands: [
        {
            fieldName: "ProductID",
            condition: new IgrNumberFilteringOperand().condition("doesNotEqual"),
            searchVal: 1,
            ignoreCase: true,
        },
        {
            fieldName: "ProductName",
            conditionName: "startsWith",
            searchVal: "Ch",
            ignoreCase: true,
        }
    ]
};

<IgrGrid data={data} allowFiltering={true} advancedFilteringExpressionsTree={filteringTree}>
    <IgrGridToolbar>
        <IgrGridToolbarActions>
            <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
        </IgrGridToolbarActions>
    </IgrGridToolbar>
    <IgrColumn field="ProductID" filterable={true} dataType="number"></IgrColumn>
    <IgrColumn field="ProductName" dataType="string" filterable={true}></IgrColumn>
</IgrGrid>
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

In case you don't want to show the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) toolbar, you could use the [`openAdvancedFilteringDialog`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#openAdvancedFilteringDialog) and [`closeAdvancedFilteringDialog`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#closeAdvancedFilteringDialog) methods to open and close the advanced filtering dialog programmatically.

> [!Note]
> You can enable both the **QuickFilter**/**ExcelStyleFilter** and the advanced filtering user interfaces in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). Both filtering user interfaces will work independently of one another. The final filtered result in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) is the intersection between the results of the two filters.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrGrid className="grid"></IgrGrid>
```

Then set the related CSS properties to this class:

```css
.grid {
    --ig-query-builder-header-foreground: #512da8;
    --ig-query-builder-color-expression-group-and: #eb0000;
    --ig-query-builder-color-expression-group-or: #0000f3;
    --ig-query-builder-subquery-header-background: var(--ig-gray-300);
    --ig-query-builder-subquery-border-color: var(--ig-warn-500);
    --ig-query-builder-subquery-border-radius: 4px;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#grid {
    --ig-query-builder-header-foreground: #512da8;
    --ig-query-builder-color-expression-group-and: #eb0000;
    --ig-query-builder-color-expression-group-or: #0000f3;
    --ig-query-builder-subquery-header-background: var(--ig-gray-300);
    --ig-query-builder-subquery-border-color: var(--ig-warn-500);
    --ig-query-builder-subquery-border-radius: 4px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

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
                    ref={this.gridRef}
                    id="grid"
                    data={this.nwindData}
                    moving={true}
                    allowAdvancedFiltering={true}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarAdvancedFiltering
                            >
                            </IgrGridToolbarAdvancedFiltering>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="QuantityPerUnit"
                        header="Quantity Per Unit"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        sortable={true}
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="boolean"
                        bodyTemplate={this.webGridDiscontinuedCellTemplate}
                        sortable={true}>
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

    public webGridDiscontinuedCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value) {
            return <img src="https://dl.infragistics.com/x/img/grid/active.png" title="Continued" alt="Continued" />;
        } else {
            return <img src="https://dl.infragistics.com/x/img/grid/expired.png" title="Discontinued" alt="Discontinued" />;
        }
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## API References

- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Filtering](filtering.md)
- [Excel Style Filtering](excel-style-filtering.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
