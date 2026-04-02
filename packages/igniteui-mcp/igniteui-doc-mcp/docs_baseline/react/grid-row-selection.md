---
title: React Grid Row Selection - Ignite UI for React
_description: Perform data manipulation without affecting the underlying data with Grid Batch Editing, using React Grid. See demos & examples!
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "RowSelectorTemplateDetails", "HeadSelectorTemplateDetails", "Checkbox"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-selection
_tocName: Row Selection
_premium: true
---

# React Grid Row Selection

The Ignite UI for React Row Selection feature in React Grid allows users to interactively select, highlight, or deselect a single or multiple rows of data. There are several selection modes available in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html):

- None Selection
- Multiple Selection
- Single Selection

## React Row Selection Example

<!-- ComponentStart: Grid, HierarchicalGrid -->

The sample below demonstrates the three types of [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)'s **row selection** behavior. Use the drop-down below to enable each of the available selection modes. Use the checkbox to _hide_ or _show_ the row selector checkboxes.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

```typescript
export class FinancialDataAllItem {
    public constructor(init: Partial<FinancialDataAllItem>) {
        Object.assign(this, init);
    }

    public Category: string;
    public Type: string;
    public Spread: number;
    public Open: number;
    public Price: number;
    public Buy: number;
    public Sell: number;
    public Change: number;
    public ChangePercent: number;
    public Volume: number;
    public High: number;
    public Low: number;
    public YearlyHigh: number;
    public YearlyLow: number;
    public YearlyStart: number;
    public YearlyChange: number;
    public Settlement: string;
    public Contract: string;
    public Region: string;
    public Country: string;
    public Risk: string;
    public Sector: string;
    public Currency: string;
    public Security: string;
    public Issuer: string;
    public Maturity: string;
    public IndGroup: string;
    public IndSector: string;
    public IndCategory: string;
    public CUSIP: string;
    public Cpn: string;
    public KRD_3YR: number;
    public ZV_SPREAD: number;
    public KRD_5YR: number;
    public KRD_1YR: number;
    public ID: number;

}
export class FinancialDataAll extends Array<FinancialDataAllItem> {
    public constructor(items: Array<FinancialDataAllItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new FinancialDataAllItem({ Category: `Fuel`, Type: `Ethanol`, Spread: 0.01, Open: 1.512, Price: 2.76, Buy: 2.75, Sell: 2.76, Change: 0.01, ChangePercent: 0.2, Volume: 14, High: 2.75, Low: 1.12, YearlyHigh: 2.75, YearlyLow: 1.12, YearlyStart: 1.48, YearlyChange: 86.7, Settlement: `Cash`, Contract: `CFD`, Region: `Middle East`, Country: `Saudi Arabia`, Risk: `Low`, Sector: `Government`, Currency: `EUR`, Security: `Good`, Issuer: `American Airlines`, Maturity: `2022-02-11`, IndGroup: `Airlines`, IndSector: `Consumer, Cyclical`, IndCategory: `Airlines`, CUSIP: `1765866`, Cpn: `7.875`, KRD_3YR: 6E-05, ZV_SPREAD: 28.302, KRD_5YR: 0, KRD_1YR: -0.00187, ID: 0 }),
                new FinancialDataAllItem({ Category: `Fuel`, Type: `Natural Gas`, Spread: 0.02, Open: 2.094, Price: 2.07, Buy: 2.09, Sell: 2.09, Change: -0.03, ChangePercent: -1.8, Volume: 2783, High: 2.11, Low: 2.09, YearlyHigh: 3.2, YearlyLow: 1.84, YearlyStart: 2.52, YearlyChange: -16.51, Settlement: `Credit`, Contract: `Options`, Region: `Middle East`, Country: `Saudi Arabia`, Risk: `High`, Sector: `Public`, Currency: `PLN`, Security: `High`, Issuer: `Delta Airlines`, Maturity: `2022-02-22`, IndGroup: `Airlines`, IndSector: `Consumer, Cyclical`, IndCategory: `Airlines`, CUSIP: `1765866`, Cpn: `7.875`, KRD_3YR: 6E-05, ZV_SPREAD: 28.302, KRD_5YR: 0, KRD_1YR: -0.00187, ID: 1 }),
                new FinancialDataAllItem({ Category: `Agriculture`, Type: `Cotton`, Spread: 0.01, Open: 61.77, Price: 62.9, Buy: 61.77, Sell: 61.77, Change: 1.14, ChangePercent: 1.84, Volume: 3612, High: 62.06, Low: 61.32, YearlyHigh: 67.59, YearlyLow: 54.33, YearlyStart: 60.96, YearlyChange: 1.31, Settlement: `Cash`, Contract: `Options`, Region: `North America`, Country: `United States`, Risk: `Low`, Sector: `Private`, Currency: `EUR`, Security: `Good`, Issuer: `Southwest`, Maturity: `2022-05-23`, IndGroup: `Airlines`, IndSector: `Consumer, Cyclical`, IndCategory: `Airlines`, CUSIP: `1765866`, Cpn: `7.875`, KRD_3YR: 6E-05, ZV_SPREAD: 28.302, KRD_5YR: 0, KRD_1YR: -0.00187, ID: 2 }),
                // ... 997 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.cellAlignStyle {
    text-align: right;
    float:right;
}
.cellAlignStyle > span {
    float:right;
}
.up {
    color: green;
}
.down {
    color: red;
}
.grid__wrapper {
  padding: 16px;
}
.currency-badge-container {
    width: 80px;
    float: right;
}
.badge-left {
    float: left;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrBadgeModule } from 'igniteui-react';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, PropertyEditorPanelDescriptionModule } from 'igniteui-react-core';
import { FinancialDataAllItem, FinancialDataAll } from './FinancialDataAll';
import { IgrBadge } from 'igniteui-react';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrBadgeModule,
    IgrGridModule,
    IgrPropertyEditorPanelModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private selectionType: IgrPropertyEditorPropertyDescription
    private hideRowSelectors: IgrPropertyEditorPropertyDescription
    private grid1: IgrGrid
    private grid1Ref(r: IgrGrid) {
        this.grid1 = r;
        this.setState({});
    }
    private  _columnPipeArgs1: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs1(): IgrColumnPipeArgs {
        if (this._columnPipeArgs1 == null)
        {
            var columnPipeArgs1: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs1.currencyCode = "USD";
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
            columnPipeArgs2.currencyCode = "USD";
            columnPipeArgs2.digitsInfo = "1.2-2";

            this._columnPipeArgs2 = columnPipeArgs2;
        }
        return this._columnPipeArgs2;
    }
    private  _columnPipeArgs3: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs3(): IgrColumnPipeArgs {
        if (this._columnPipeArgs3 == null)
        {
            var columnPipeArgs3: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs3.currencyCode = "USD";
            columnPipeArgs3.digitsInfo = "1.2-2";

            this._columnPipeArgs3 = columnPipeArgs3;
        }
        return this._columnPipeArgs3;
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.grid1Ref = this.grid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    target={this.grid1}
                    descriptionType="WebGrid"
                    isWrappingEnabled="true"
                    isHorizontal="true"
                    componentRenderer={this.renderer}
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        name="selectionType"
                        propertyPath="RowSelection"
                        valueType="EnumValue"
                        label="Row Selection"
                        dropDownNames={["None", "Single", "Multiple"]}
                        dropDownValues={["None", "Single", "Multiple"]}>
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        name="hideRowSelectors"
                        propertyPath="HideRowSelectors">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.financialDataAll}
                    primaryKey="ID"
                    moving={true}
                    id="grid1"
                    ref={this.grid1Ref}>
                    <IgrColumn
                        field="Category">
                    </IgrColumn>
                    <IgrColumn
                        field="Type">
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs1}>
                    </IgrColumn>
                    <IgrColumn
                        field="Buy"
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs2}>
                    </IgrColumn>
                    <IgrColumn
                        field="Sell"
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs3}>
                    </IgrColumn>
                    <IgrColumn
                        field="Change"
                        bodyTemplate={this.webGridCurrencyCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ChangePercent"
                        header="Change Percent"
                        dataType="number"
                        bodyTemplate={this.webGridCurrencyCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyChange"
                        header="Yearly Change"
                        dataType="number"
                        bodyTemplate={this.webGridCurrencyCellTemplate}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _financialDataAll: FinancialDataAll = null;
    public get financialDataAll(): FinancialDataAll {
        if (this._financialDataAll == null)
        {
            this._financialDataAll = new FinancialDataAll();
        }
        return this._financialDataAll;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
            PropertyEditorPanelDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridCurrencyCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        const isCellCurrencyUp = typeof cell.value === 'number' && cell.value > 0;
        const isCellCurrencyDown = typeof cell.value === 'number' && cell.value <= 0;

        return (

            <div style={{width: '80px', float: 'right'}}>
                {
                    isCellCurrencyUp || isCellCurrencyDown ?
                    <span>
                        <IgrBadge variant={isCellCurrencyUp ? "success" : "danger"} style={{float: 'left'}}><span>{isCellCurrencyUp ? '▲' : '▼'}</span></IgrBadge>
                        <span style={{color: isCellCurrencyUp ? 'green' : 'red', float: 'right'}}>${cell.value.toFixed(2)}</span>
                    </span>
                    : <span>${cell.value}</span>
                }
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Setup

In order to setup row selection in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html), you just need to set the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) property. This property accepts `GridSelectionMode` enumeration.

`GridSelectionMode` exposes the following modes:

- **None**
- **Single**
- **Multiple**

Below we will take a look at each of them in more detail.

### None Selection

In the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) by default row selection is disabled ([`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) is None). So you can **not** select or deselect a row through interaction with the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) UI, the only way to complete these actions is to use the provided API methods.

### Single Selection

Single row selection can now be easily set up, the only thing you need to do, is to set [`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) to `Single` property. This gives you the opportunity to **select only one row within a grid**. You can select a row by clicking on a cell or pressing the <kbd>SPACE</kbd> key when you focus on a cell of the row, and of course you can select a row by clicking on the row selector field. When row is selected or deselected `RowSelectionChanging` event is emitted.

```tsx
const handleRowSelection = (args: IgrRowSelectionEventArgs) => {
    if (args.detail.added.length && args.detail.added[0] === 3) {
        args.detail.cancel = true;
    }
}

<IgrGrid rowSelection="single" autoGenerate={true} allowFiltering={true} onRowSelectionChanging={handleRowSelection}>
</IgrGrid>
```

### Multiple Selection

To enable multiple row selection in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) just set the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) property to `Multiple`. This will enable a row selector field on each row and in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) header. The row selector allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations, such as sorting and filtering. The row also can be selected by clicking on a cell or by pressing the <kbd>SPACE</kbd> key when a cell is focused. If you have selected one row and click on another while holding the <kbd>SHIFT</kbd> key, this will select the whole range of rows. In this selection mode, when you click on a single row, the previous selected rows will be deselected. If you **click** while holding the <kbd>CTRL</kbd> key, the row will be toggled and the previous selection will be preserved.

```tsx
<IgrGrid primaryKey="ProductID" rowSelection="multiple"
        allowFiltering={true} autoGenerate={true}>
</IgrGrid>
```

**Notes**

<!-- ComponentStart: Grid, HierarchicalGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid -->

- Row selection will trigger `RowSelectionChanging` event. This event gives you information about the **new selection**, **old selection**, the rows that have been **added** and **removed** from the old selection. Also the event is **cancellable**, so this allows you to prevent selection.
- When row selection is enabled row selectors are displayed, but if you don't want to show them, you can set [`hideRowSelectors`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#hideRowSelectors) to **true**.
- When you switch between row selection modes at runtime, this will clear the previous row selection state.

## API usage

### Select Rows Programmatically

The code snippet below can be used to select one or multiple rows simultaneously (via [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey)). Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.

```tsx
function onClickSelect() {
    gridRef.current.selectRows([1,2,5], true);
}

<IgrGrid primaryKey="ProductID" rowSelection="multiple" autoGenerate={true} ref={gridRef}>
</IgrGrid>
<button onClick={onClickSelect}>Select 1,2 and 5</button>
```

This will add the rows which correspond to the data entries with IDs 1, 2 and 5 to the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) selection.

### Deselect Rows

If you need to deselect rows programmatically, you can use the [`deselectRows`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#deselectRows) method.

```tsx
function onClickDeselect() {
    gridRef.current.deselectRows([1,2,5]);
}

<IgrGrid primaryKey="ProductID" rowSelection="multiple" autoGenerate={true} ref={gridRef}>
</IgrGrid>
<button onClick={onClickDeselect}>Deselect 1,2 and 5</button>
```

### Row Selection Event

When there is some change in the row selection `RowSelectionChanging` event is emitted. `RowSelectionChanging` exposes the following arguments:

- `OldSelection`  - array of row IDs that contains the previous state of the row selection.
- `NewSelection` - array of row IDs that match the new state of the row selection.
- `Added` - array of row IDs that are currently added to the selection.
- `Removed` - array of row IDs that are currently removed according old selection state.
- `Event` - the original event that triggered row selection change.
- `Cancel` - allows you the prevent the row selection change.

```tsx
const handleRowSelectionChange = (args: IgrRowSelectionEventArgs) => {
    args.detail.cancel = true; // this will cancel the row selection
}

<IgrGrid onRowSelectionChanging={handleRowSelectionChange}>
</IgrGrid>
```

### Select All Rows

Another useful API method that [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) provides is [`selectAllRows`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#selectAllRows). By default this method will select all data rows, but if filtering is applied, it will select only the rows that match the filter criteria. If you call the method with **false** parameter, `SelectAllRows(false)` will always select all data in the grid, even if filtering is applied.

> **Note** Keep in mind that [`selectAllRows`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#selectAllRows) will not select the rows that are deleted.

### Deselect All Rows

[`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) provides a [`deselectAllRows`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#deselectAllRows) method, which by default will deselect all data rows, but if filtering is applied will deselect only the rows that match the filter criteria. If you call the method with **false** parameter, `DeselectAllRows(false)` will always clear all row selection state even if filtering is applied.

### How to get Selected Rows

If you need to see which rows are currently selected, you can get their row IDs with the [`selectedRows`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#selectedRows) getter.

```tsx
function getSelectedRows() {
    return gridRef.current.selectedRows;
}
```

Additionally, assigning row IDs to [`selectedRows`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#selectedRows) will allow you to change the grid's selection state.

```tsx
const mySelectedRows = [1,2,3];

<IgrGrid primaryKey="ProductID" rowSelection="multiple" autoGenerate={false} selectedRows={mySelectedRows}>
</IgrGrid>
```

### Row Selector Templates

You can template header and row selectors in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) and also access their contexts which provide useful functionality for different scenarios.

By default, the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) **handles all row selection interactions** on the row selector's parent container or on the row itself, leaving just the state visualization for the template. Overriding the base functionality should generally be done using the [RowSelectionChanging event](#row-selection-event). In case you implement a custom template with a [`click`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckboxbase.html#click) handler which overrides the base functionality, you should stop the event's propagation to preserve the correct row state.

#### Row Template

To create a custom row selector template,  within the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) you can use the [`rowSelectorTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelectorTemplate) property. From the template you can access the implicitly provided context variable, with properties that give you information about the row's state.

The [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowselectortemplatedetails.html#selected) property shows whether the current row is selected or not while the [`index`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowselectortemplatedetails.html#index) property can be used to access the row index.

```tsx
const rowSelectorTemplate = (ctx: IgrRowSelectorTemplateContext) => {
    if (ctx.implicit.selected) {
        return (
            <>
                <div style={{justifyContent: 'space-evenly', display: 'flex', width: '70px'}}>
                    <span> ${ctx.implicit.index}</span>
                    <IgrCheckbox checked></IgrCheckbox>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div style={{justifyContent: 'space-evenly', display: 'flex', width: '70px'}}>
                    <span> ${ctx.implicit.index}</span>
                    <IgrCheckbox></IgrCheckbox>
                </div>
            </>
        );
    }
}

<IgrGrid primaryKey="ProductID" rowSelection="multiple" autoGenerate="false" rowSelectorTemplate={rowSelectorTemplate}>
</IgrGrid>
```

The [`rowID`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowselectortemplatedetails.html#rowID) property can be used to get a reference of an [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) row. This is useful when you implement a `click` handler on the row selector element.

```tsx
const rowSelectorTemplate = (ctx: IgrRowSelectorTemplateContext) => {
    return (
        <>
            <IgrCheckbox onClick={(event) => onSelectorClick(event, ctx.implicit.key)}>
            </IgrCheckbox>
        </>
    );
}
```

In the above example we are using an [`IgrCheckbox`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckbox.html) and we bind `rowContext.selected` to its [`checked`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckboxbase.html#checked) property. See this in action in our [Row Numbering Demo](#row-numbering-demo).

### Header Template

To create a custom header selector template, within the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html), you can use the [`headSelectorTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#headSelectorTemplate) property. From the template you can access the implicitly provided context variable, with properties that give you information about the header's state.

The [`selectedCount`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrheadselectortemplatedetails.html#selectedCount) property shows you how many rows are currently selected while [`totalCount`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrheadselectortemplatedetails.html#totalCount) shows you how many rows there are in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) in total.

```tsx
const headSelectorTemplate = (ctx: IgrHeadSelectorTemplateContext) => {
    return (
        <>
            {ctx.implicit.selectedCount} / {ctx.implicit.totalCount}
        </>
    );
};
```

The [`selectedCount`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrheadselectortemplatedetails.html#selectedCount) and [`totalCount`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrheadselectortemplatedetails.html#totalCount) properties can be used to determine if the head selector should be checked or indeterminate (partially selected).

```tsx
const headSelectorTemplate = (ctx: IgrHeadSelectorTemplateContext) => {
    const implicit: any = ctx.implicit;
    if (implicit.selectedCount > 0 && implicit.selectedCount === implicit.totalCount) {
            return (
                <>
                    <IgrCheckbox checked></IgrCheckbox>
                </>
            );
        } else if (implicit.selectedCount > 0 && implicit.selectedCount !== implicit.totalCount) {
            return (
                <>
                    <IgrCheckbox indeterminate></IgrCheckbox>
                </>
            );
        }
        return (
            <>
                <IgrCheckbox ></IgrCheckbox>
            </>
        );
}

<IgrGrid primaryKey="ProductID" rowSelection="multiple" autoGenerate={true} headSelectorTemplate={headSelectorTemplate}>
</IgrGrid>
```

### Row Numbering Demo

This demo shows the usage of custom header and row selectors. The latter uses [`index`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowselectortemplatedetails.html#index) to display row numbers and an [`IgrCheckbox`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckbox.html) bound to [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowselectortemplatedetails.html#selected).

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

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrCheckboxModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebCheckboxDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrRowSelectorTemplateContext, IgrHeadSelectorTemplateContext } from 'igniteui-react-grids';
import { IgrCheckbox } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrCheckboxModule
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
                    autoGenerate={true}
                    ref={this.gridRef}
                    data={this.customersData}
                    rowSelection="multiple"
                    rowSelectorTemplate={this.webGridRowSelectorTemplate}
                    headSelectorTemplate={this.webGridHeaderRowSelectorTemplate}>
                    <IgrColumn
                        field="ContactName">
                    </IgrColumn>
                    <IgrColumn
                        field="Country">
                    </IgrColumn>
                    <IgrColumn
                        field="City">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode">
                    </IgrColumn>
                    <IgrColumn
                        field="Company">
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
            WebGridDescriptionModule.register(context);
            WebCheckboxDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }


    public webGridRowSelectorTemplate = (e: {dataContext: IgrRowSelectorTemplateContext}) => {
        const contextDetail = e.dataContext.implicit;
        const containerStyle = {
            justifyContent: 'space-evenly',
            display: 'flex',
            width: '70px'
        };

        return (
            <div style={containerStyle}>
                <span>{contextDetail.index}</span>
                <IgrCheckbox checked={contextDetail.selected} key={`${contextDetail.selected}`}></IgrCheckbox>
            </div>
        );
    }

    public webGridHeaderRowSelectorTemplate = (e: {dataContext: IgrHeadSelectorTemplateContext }) => {
        return (
            <div style={{width: '70px', height: '60px', display: 'flex'}}>
                <img src="https://dl.infragistics.com/x/img/browsers/ig.png" className="header-image"/>
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- ComponentStart: Grid, TreeGrid -->

### Excel Style Row Selectors Demo

This demo uses custom templates to resemble Excel-like header and row selectors.

<!-- NOTE this sample is differed -->

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

    #grid {
        --ig-size: var(--ig-size-medium);
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrPaginator, IgrPaginatorResourceStrings, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrRowSelectorTemplateContext, IgrHeadSelectorTemplateContext } from 'igniteui-react-grids';

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
    private paginator: IgrPaginator
    private  _paginatorResourceStrings1: IgrPaginatorResourceStrings | null = null;
    public get paginatorResourceStrings1(): IgrPaginatorResourceStrings {
        if (this._paginatorResourceStrings1 == null)
        {
            var paginatorResourceStrings1: IgrPaginatorResourceStrings = {} as IgrPaginatorResourceStrings;
            paginatorResourceStrings1.igx_paginator_label = "Items per page";

            this._paginatorResourceStrings1 = paginatorResourceStrings1;
        }
        return this._paginatorResourceStrings1;
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
                    data={this.customersData}
                    ref={this.gridRef}
                    id="grid"
                    rowSelection="multiple"
                    rowSelectorTemplate={this.webGridRowSelectorExcelTemplate}
                    headSelectorTemplate={this.webGridHeaderRowSelectorExcelTemplate}>
                    <IgrPaginator
                        perPage={15}
                        selectOptions={[5, 10, 15, 25, 50]}
                        resourceStrings={this.paginatorResourceStrings1}>
                    </IgrPaginator>
                    <IgrColumn
                        field="ContactName"
                        header="Name">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country">
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
                        field="Company"
                        header="Company">
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

    public webGridRowSelectorExcelTemplate = (e : { dataContext: IgrRowSelectorTemplateContext}) => {
        return <><span style={{display: "block", width:"30px"}}> {e.dataContext.implicit.index}</span></>;
    }

    public webGridHeaderRowSelectorExcelTemplate = (e: { dataContext: IgrHeadSelectorTemplateContext }) => {
        const ctx = e.dataContext;
        if (ctx.implicit.selectedCount > 0 && ctx.implicit.selectedCount === ctx.implicit.totalCount) {
            return <><span style={{display: "block", width:"30px"}}><i style={{color: "rgb(239, 184, 209)"}}>◢</i></span></>;
        } else {
            return <><span style={{display: "block", width:"30px"}}><i>◢</i></span></>;
        }
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- ComponentEnd: Grid, TreeGrid -->

### Conditional Selection Demo

This demo prevents some rows from being selected using the `RowSelectionChanging` event and a custom template with disabled checkbox for non-selectable rows.

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

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrRowSelectionEventArgs } from 'igniteui-react-grids';

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
        this.webGridRowSelectionConditional = this.webGridRowSelectionConditional.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.customersData}
                    ref={this.gridRef}
                    id="grid"
                    primaryKey="ID"
                    rowSelection="multiple"
                    onRowSelectionChanging={this.webGridRowSelectionConditional}>
                    <IgrColumn
                        field="ContactName"
                        header="Name"
                        width="20%">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        width="20%">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        width="20%">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        width="20%">
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        width="20%">
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
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridRowSelectionConditional(eventArgs: IgrRowSelectionEventArgs): void {
        const event = eventArgs.detail;
        if (!event.added.length && event.removed.length) {
            // ignore de-select
            return;
        }
        var grid = this.grid;
        const originalAddedLength = event.added.length;

        // only allow selection of items that contain 'A'
        event.newSelection = event.newSelection.filter((x: any) => x.ID.indexOf('A') !== -1);

        // cleanup selection if all conditionally selectable rows are already selected
        if (event.newSelection.length
            && !event.newSelection.filter((x: any) => event.oldSelection.indexOf(x) === -1).length
            && originalAddedLength > 1) {
                // all selected from header, de-select instead
                event.newSelection = [];
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## API References

- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
- [`IgrGridRowComponent`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridrowcomponent.html)

## Additional Resources

<!-- ComponentStart: Grid, TreeGrid -->

- [Selection](selection.md)
- [Cell selection](cell-selection.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Virtualization and Performance](virtualization.md)

<!-- ComponentEnd: Grid, TreeGrid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
