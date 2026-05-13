---
title: React Grid Filtering - Ignite UI for React
_description: Start using angular filter to return specific data with React Grid. Check the advanced filtering options, including data-type Excel-style filtering.
_keywords: filter, React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/filtering
_tocName: Filtering
---

# React Grid Filtering

The Ignite UI for React Filtering in React Grid is a feature that allows for selectively displaying or hiding data based on specific criteria or conditions. There is a bound data container through which the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) Component provides rich filtering API and all the filtering capabilities. The available filtering types here are three:

- Quick filtering
- [Excel Style Filtering](excel-style-filtering.md)
- [Advanced Filtering](advanced-filtering.md)

## React Grid Filtering Example

The sample below demonstrates [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)'s **Quick Filter** user experience.

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
import NwindData from './NwindData.json';

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
                    autoGenerate={false}
                    ref={this.gridRef}
                    data={this.nwindData}
                    moving={true}
                    allowFiltering={true}
                    filterMode="quickFilter">
                    <IgrColumn
                        field="ProductName"
                        header="Product Name">
                    </IgrColumn>
                    <IgrColumn
                        field="QuantityPerUnit"
                        header="Quantity Per Unit">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Setup

In order to specify if filtering is enabled and which filtering mode should be used, the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) exposes the following properties - [`allowFiltering`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#allowFiltering), [`allowAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#allowAdvancedFiltering), [`filterMode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#filterMode) and [`filterable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#filterable).

Property [`allowFiltering`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#allowFiltering) enables you to specify the following options:

- **false** - the filtering for the corresponding grid will be disabled. This is the default value.
- **true** - the filtering for the corresponding grid will be enabled.

Property [`allowAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#allowAdvancedFiltering) enables you to specify the following options:

- **false** - the advanced filtering for the corresponding grid will be disabled. This is the default value.
- **true** - the advanced filtering for the corresponding grid will be enabled.

Property [`filterMode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#filterMode) enables you to specify the following options:

- **QuickFilter** - a simplistic filtering UI. This is the default value.
- **ExcelStyleFilter** - an Excel-like filtering UI.

Property [`filterable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#filterable) enables you to specify the following options:

- **true** - the filtering for the corresponding column will be enabled. This is the default value.
- **false** - the filtering for the corresponding column will be disabled.

```tsx
<IgrGrid data={nwindData} autoGenerate={false} ref={gridRef} allowFiltering={true}>
    <IgrColumn field="ProductName" dataType="string"></IgrColumn>
    <IgrColumn field="UnitPrice" dataType="number" filterable={false}></IgrColumn>
</IgrGrid>
```

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

To enable the [Advanced filtering](advanced-filtering.md) however, you need to set the [`allowAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#allowAdvancedFiltering) input property to **true**

```tsx
<IgrGrid data={nwindData} autoGenerate={false} ref={gridRef} allowAdvancedFiltering={true}>
</IgrGrid>
```

> [!Note]
> You can enable both the `QuickFilter` or `ExcelStyleFilter` and the advanced filtering user interfaces in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). Both filtering user interfaces will work independently of one another. The final filtered result in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) is the intersection between the results of the two filters.

## Interaction

In order to open the filter row for a particular column, the 'Filter' chip below its header should be clicked. To add conditions you should choose filter operand using the dropdown on the left of the input and enter value. For **number** and **date** columns 'Equals' is selected by default, for **string** - 'Contains' and for **boolean** - 'All'. Pressing 'Enter' confirms the condition and you are now able to add another one. There is a dropdown, between 'condition' chips, which determines the logical operator between them, 'AND' is selected by default. To remove a condition you can click the 'X' button of the chip, and to edit it you should select the chip and the input will be populated with the chip's data. While filter row is opened you can click on any filterable column's header in order to select it and to be able to add filter conditions for it.

While some filtering conditions have been applied to a column, and the filter row is closed, you can either remove the conditions by clicking the chip's close button, or you can open the filter row by selecting any of the chips. When there is not enough space to show all the conditions, a filter icon is shown with a badge that indicates how many more conditions there are. It can also be clicked in order to open the filter row.

## Usage

There's a default filtering strategy provided out of the box, as well as all the standard filtering conditions, which the developer can replace with their own implementation. In addition, we've provided a way to easily plug in your own custom filtering conditions. The [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) currently provides not only a simplistic filtering UI, but also more complex filtering options. Depending on the set [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType) of the column, the correct set of **filtering operations** is loaded inside the filter UI dropdown. Additionally, you can set the `IgnoreCase` and the initial `Condition` properties.

The filtering feature is enabled for the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) component by setting the [`allowFiltering`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#allowFiltering) input to **true**. The default [`filterMode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#filterMode) is `QuickFilter` and it **cannot** be changed run time. To disable this feature for a certain column – set the [`filterable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#filterable) input to **false**.

<!-- ComponentStart: Grid, TreeGrid -->

```tsx
<IgrGrid autoGenerate={false} allowFiltering={true}>
    <IgrColumn field="ProductName" dataType="string"></IgrColumn>
    <IgrColumn field="Price" dataType="number"></IgrColumn>
    <IgrColumn field="Discontinued" dataType="boolean" filterable={false}></IgrColumn>
</IgrGrid>
```

> [!Note]
> If values of type **string** are used by a column of data type **date**, the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) won't parse them to **date** objects and using filtering conditions won't be possible. If you want to use **string** objects, additional logic should be implemented on the application level, in order to parse the values to **date** objects.

## Initial filtered state

To set the initial filtering state of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html), set the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) [`filteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#filteringExpressionsTree) property to an array of [`filteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#filteringExpressionsTree) for each column to be filtered.

```tsx
const filteringExpressions: IgrFilteringExpressionsTree = {
  operator: FilteringLogic.And,
  filteringOperands: [
    {
      fieldName: "ProductName",
      conditionName: "contains",
      ignoreCase: true,
      searchVal: "Chai"
    },
    {
      fieldName: "QuantityPerUnit",
      conditionName: "contains",
      ignoreCase: true,
      searchVal: "1"
    },
  ],
};

return (
    <IgrGrid
        filteringExpressionsTree={filteringExpressions}
        аllowFiltering={true}
        filterMode="quickFilter">
    </IgrGrid>
);

```

### Filtering logic

The [`filteringLogic`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#filteringLogic) property of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) controls how filtering multiple columns will resolve in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html). You can change it at any time through the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) API, or through the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) input property.

```tsx
import { FilteringLogic } from "igniteui-react-grids";

<IgrGrid filteringLogic={FilteringLogic.Or}></IgrGrid>
```

The default value of `AND` returns only the rows that match all the currently applied filtering expressions. Following the example above, a row will be returned when both the 'ProductName' cell value contains 'myproduct' and the 'Price' cell value is greater than 55.

When set to `OR`, a row will be returned when either the 'ProductName' cell value contains 'myproduct' or the 'Price' cell value is greater than 55.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrGrid className="grid"></IgrGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-filtering-row-text-color: #292826;
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-grid-filtering-header-text-color: #292826;
    --ig-grid-filtering-header-background: #ffcd0f;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#grid {
    --ig-grid-filtering-row-text-color: #292826;
    --ig-grid-filtering-row-background: #ffcd0f;
    --ig-grid-filtering-header-text-color: #292826;
    --ig-grid-filtering-header-background: #ffcd0f;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private sizeEditor: IgrPropertyEditorPropertyDescription
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
            columnPipeArgs1.digitsInfo = "1.2-2";

            this._columnPipeArgs1 = columnPipeArgs1;
        }
        return this._columnPipeArgs1;
    }
    private  _columnPipeArgs2: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs2(): IgrColumnPipeArgs {
        if (this._columnPipeArgs2 == null)
        {
            var columnPipeArgs2: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs2.format = "MM/dd/YYYY";

            this._columnPipeArgs2 = columnPipeArgs2;
        }
        return this._columnPipeArgs2;
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.webGridSetGridSize = this.webGridSetGridSize.bind(this);
        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        name="SizeEditor"
                        label="Grid Size:"
                        valueType="EnumValue"
                        dropDownNames={["Small", "Medium", "Large"]}
                        dropDownValues={["Small", "Medium", "Large"]}
                        changed={this.webGridSetGridSize}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    id="grid"
                    data={this.nwindData}
                    moving={true}
                    allowFiltering={true}
                    filterMode="excelStyleFilter">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
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
                        dataType="currency"
                        sortable={true}
                        pipeArgs={this.columnPipeArgs1}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        sortable={true}
                        pipeArgs={this.columnPipeArgs2}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        sortable={true}
                        bodyTemplate={this.webGridBooleanCellTemplate}>
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
            PropertyEditorPanelDescriptionModule.register(context);
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridSetGridSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var newVal = (args.newValue as string).toLowerCase();
        var grid = document.getElementById("grid");
        grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
    }

    public webGridBooleanCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value) {
            return (
                <img src="https://dl.infragistics.com/x/img/grid/active.png" title="Continued" alt="Continued" />
            );
        } else {
            return (
                <img src="https://dl.infragistics.com/x/img/grid/expired.png" title="Discontinued" alt="Discontinued" />
            );
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Known Limitations

> [!Note]
> Some browsers such as Firefox fail to parse regional specific decimal separators by considering them grouping separators, thus resulting in them being invalid. When inputting such values for a numeric column filter value, only the valid part of the number will be applied to the filtering expression. For further information, refer to the Firefox [issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1199665).

## API References

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)

## Additional Resources

<!-- ComponentStart: Grid -->

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
