---
title: React Hierarchical Grid Row Selection - Ignite UI for React
_description: Perform data manipulation without affecting the underlying data with Hierarchical Grid Batch Editing, using React Hierarchical Grid. See demos & examples!
_keywords: React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "RowSelectorTemplateDetails", "HeadSelectorTemplateDetails", "Checkbox"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-selection
_tocName: Row Selection
_premium: true
---

# React Hierarchical Grid Row Selection

The Ignite UI for React Row Selection feature in React Hierarchical Grid allows users to interactively select, highlight, or deselect a single or multiple rows of data. There are several selection modes available in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html):

- None Selection
- Multiple Selection
- Single Selection

## React Row Selection Example

<!-- ComponentStart: Grid, HierarchicalGrid -->

The sample below demonstrates the three types of [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)'s **row selection** behavior. Use the drop-down below to enable each of the available selection modes. Use the checkbox to _hide_ or _show_ the row selector checkboxes.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrBadgeModule } from 'igniteui-react';
import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebHierarchicalGridDescriptionModule } from 'igniteui-react-core';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrBadgeModule,
    IgrPropertyEditorPanelModule,
    IgrHierarchicalGridModule
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
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    target={this.hierarchicalGrid}
                    descriptionType="WebHierarchicalGrid"
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
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID"
                    allowFiltering={true}>
                    <IgrColumn
                        field="Artist">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        dataType="image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut">
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
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date">
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
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No.">
                            </IgrColumn>
                            <IgrColumn
                                field="Title">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                dataType="date">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on">
                        </IgrColumn>
                        <IgrColumn
                            field="Location">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner">
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

## Setup

In order to setup row selection in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html), you just need to set the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) property. This property accepts `GridSelectionMode` enumeration.

`GridSelectionMode` exposes the following modes:

- **None**
- **Single**
- **Multiple**

Below we will take a look at each of them in more detail.

### None Selection

In the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) by default row selection is disabled ([`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) is None). So you can **not** select or deselect a row through interaction with the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) UI, the only way to complete these actions is to use the provided API methods.

### Single Selection

Single row selection can now be easily set up, the only thing you need to do, is to set [`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) to `Single` property. This gives you the opportunity to **select only one row within a grid**. You can select a row by clicking on a cell or pressing the <kbd>SPACE</kbd> key when you focus on a cell of the row, and of course you can select a row by clicking on the row selector field. When row is selected or deselected `RowSelectionChanging` event is emitted.

```tsx
const handleRowSelection = (args: IgrRowSelectionEventArgs) => {
    if (args.detail.added.length && args.detail.added[0] === 3) {
        args.detail.cancel = true;
    }
}

<IgrHierarchicalGrid rowSelection="single" autoGenerate={true} allowFiltering={true} onRowSelectionChanging={handleRowSelection}>
</IgrHierarchicalGrid>
```

### Multiple Selection

To enable multiple row selection in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) just set the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelection) property to `Multiple`. This will enable a row selector field on each row and in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) header. The row selector allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations, such as sorting and filtering. The row also can be selected by clicking on a cell or by pressing the <kbd>SPACE</kbd> key when a cell is focused. If you have selected one row and click on another while holding the <kbd>SHIFT</kbd> key, this will select the whole range of rows. In this selection mode, when you click on a single row, the previous selected rows will be deselected. If you **click** while holding the <kbd>CTRL</kbd> key, the row will be toggled and the previous selection will be preserved.

```tsx
<IgrHierarchicalGrid primaryKey="ProductID" rowSelection="multiple"
        allowFiltering={true} autoGenerate={true}>
</IgrHierarchicalGrid>
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

<IgrHierarchicalGrid primaryKey="ProductID" rowSelection="multiple" autoGenerate={true} ref={gridRef}>
</IgrHierarchicalGrid>
<button onClick={onClickSelect}>Select 1,2 and 5</button>
```

This will add the rows which correspond to the data entries with IDs 1, 2 and 5 to the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) selection.

### Deselect Rows

If you need to deselect rows programmatically, you can use the [`deselectRows`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#deselectRows) method.

```tsx
function onClickDeselect() {
    gridRef.current.deselectRows([1,2,5]);
}

<IgrHierarchicalGrid primaryKey="ProductID" rowSelection="multiple" autoGenerate={true} ref={gridRef}>
</IgrHierarchicalGrid>
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

<!-- ComponentStart: HierarchicalGrid -->

- `Owner` - if the event is triggered from a child grid, this will give you a reference to the component, from which the event is emitted.

<!-- ComponentEnd: HierarchicalGrid -->

```tsx
const handleRowSelectionChange = (args: IgrRowSelectionEventArgs) => {
    args.detail.cancel = true; // this will cancel the row selection
}

<IgrHierarchicalGrid onRowSelectionChanging={handleRowSelectionChange}>
</IgrHierarchicalGrid>
```

### Select All Rows

Another useful API method that [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) provides is [`selectAllRows`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#selectAllRows). By default this method will select all data rows, but if filtering is applied, it will select only the rows that match the filter criteria. If you call the method with **false** parameter, `SelectAllRows(false)` will always select all data in the grid, even if filtering is applied.

> **Note** Keep in mind that [`selectAllRows`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#selectAllRows) will not select the rows that are deleted.

### Deselect All Rows

[`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) provides a [`deselectAllRows`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#deselectAllRows) method, which by default will deselect all data rows, but if filtering is applied will deselect only the rows that match the filter criteria. If you call the method with **false** parameter, `DeselectAllRows(false)` will always clear all row selection state even if filtering is applied.

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

<IgrHierarchicalGrid primaryKey="ProductID" rowSelection="multiple" autoGenerate={false} selectedRows={mySelectedRows}>
</IgrHierarchicalGrid>
```

### Row Selector Templates

You can template header and row selectors in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) and also access their contexts which provide useful functionality for different scenarios.

By default, the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) **handles all row selection interactions** on the row selector's parent container or on the row itself, leaving just the state visualization for the template. Overriding the base functionality should generally be done using the [RowSelectionChanging event](#row-selection-event). In case you implement a custom template with a [`click`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckboxbase.html#click) handler which overrides the base functionality, you should stop the event's propagation to preserve the correct row state.

#### Row Template

To create a custom row selector template,  within the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) you can use the [`rowSelectorTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowSelectorTemplate) property. From the template you can access the implicitly provided context variable, with properties that give you information about the row's state.

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

<IgrHierarchicalGrid primaryKey="ProductID" rowSelection="multiple" autoGenerate="false" rowSelectorTemplate={rowSelectorTemplate}>
</IgrHierarchicalGrid>
```

The [`rowID`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowselectortemplatedetails.html#rowID) property can be used to get a reference of an [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) row. This is useful when you implement a `click` handler on the row selector element.

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

<!-- ComponentStart: HierarchicalGrid -->

> [!Note]
> The `rowContext.select()` and `rowContext.deselect()` methods are exposed in the template context of an [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html). They make it easier to toggle the current row, especially in a child grid, when you implement a click handler that overrides the base functionality.

<!-- ComponentEnd: HierarchicalGrid -->

### Header Template

To create a custom header selector template, within the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html), you can use the [`headSelectorTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#headSelectorTemplate) property. From the template you can access the implicitly provided context variable, with properties that give you information about the header's state.

The [`selectedCount`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrheadselectortemplatedetails.html#selectedCount) property shows you how many rows are currently selected while [`totalCount`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrheadselectortemplatedetails.html#totalCount) shows you how many rows there are in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) in total.

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

<IgrHierarchicalGrid primaryKey="ProductID" rowSelection="multiple" autoGenerate={true} headSelectorTemplate={headSelectorTemplate}>
</IgrHierarchicalGrid>
```

<!-- ComponentStart: HierarchicalGrid -->

Each hierarchy level in an [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) can have its own row and header templating.

> [!Note]
> The `headContext.selectAll()` and `headContext.deselectAll()` methods are exposed in the template context of an [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html). They make it easier to toggle all rows, especially in a child grid, when you implement a click handler that overrides the base functionality.

<!-- ComponentEnd: HierarchicalGrid -->

### Row Numbering Demo

This demo shows the usage of custom header and row selectors. The latter uses [`index`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowselectortemplatedetails.html#index) to display row numbers and an [`IgrCheckbox`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcheckbox.html) bound to [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowselectortemplatedetails.html#selected).

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrCheckboxModule } from 'igniteui-react';
import { IgrHierarchicalGrid, IgrPaginator, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, WebHierarchicalGridDescriptionModule, WebCheckboxDescriptionModule } from 'igniteui-react-core';
import SingersData from './SingersData.json';
import { IgrRowSelectorTemplateContext, IgrHeadSelectorTemplateContext } from 'igniteui-react-grids';
import { IgrCheckbox } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrCheckboxModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }
    private paginator: IgrPaginator

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
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID"
                    rowSelection="multiple"
                    cellSelection="none"
                    rowSelectorTemplate={this.webGridRowSelectorTemplate}
                    headSelectorTemplate={this.webGridHeaderRowSelectorTemplate}>
                    <IgrPaginator
                    >
                    </IgrPaginator>
                    <IgrColumn
                        field="Artist">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        dataType="image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut">
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
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date">
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
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No.">
                            </IgrColumn>
                            <IgrColumn
                                field="Title">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                dataType="date">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on">
                        </IgrColumn>
                        <IgrColumn
                            field="Location">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner">
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
            WebHierarchicalGridDescriptionModule.register(context);
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

### Conditional Selection Demo

This demo prevents some rows from being selected using the `RowSelectionChanging` event and a custom template with disabled checkbox for non-selectable rows.

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
import { ComponentRenderer, WebHierarchicalGridDescriptionModule } from 'igniteui-react-core';
import SingersData from './SingersData.json';
import { IgrRowSelectionEventArgs } from 'igniteui-react-grids';

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

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
        this.webHierarchicalGridRowSelectionConditional = this.webHierarchicalGridRowSelectionConditional.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID"
                    rowSelection="multiple"
                    cellSelection="none"
                    onRowSelectionChanging={this.webHierarchicalGridRowSelectionConditional}>
                    <IgrPaginator
                    >
                    </IgrPaginator>
                    <IgrColumn
                        field="Artist">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut">
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
                        rowSelection="multiple">
                        <IgrColumn
                            field="Album">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date">
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
                            rowSelection="multiple">
                            <IgrColumn
                                field="Number"
                                header="No.">
                            </IgrColumn>
                            <IgrColumn
                                field="Title">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                dataType="date">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}
                        rowSelection="multiple">
                        <IgrColumn
                            field="Tour">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on">
                        </IgrColumn>
                        <IgrColumn
                            field="Location">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner">
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
            WebHierarchicalGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webHierarchicalGridRowSelectionConditional(eventArgs: IgrRowSelectionEventArgs): void {
        const event = eventArgs.detail;
        if (!event.added.length && event.removed.length) {
            // ignore de-select
            return;
        }
        var grid = this.hierarchicalGrid;
        const originalAddedLength = event.added.length;

        // only allow selection of items that has grammy award
        event.newSelection = event.newSelection.filter((x: any) => x.HasGrammyAward);

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

- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)
- `HierarchicalGridRow`

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
