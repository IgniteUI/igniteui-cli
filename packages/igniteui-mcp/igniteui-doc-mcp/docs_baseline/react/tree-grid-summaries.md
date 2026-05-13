---
title: React Tree Grid Summaries - Ignite UI for React
_description: Configure React Tree Grid summaries in the group footer of the column and use the option to set custom React template in the Ignite UI for React Material table
_keywords: React Tree Grid summaries, React, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "Column", "SummaryOperand"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/summaries
_tocName: Summaries
_premium: true
---

# React Tree Grid Summaries

The Ignite UI for React Summaries feature in React Tree Grid functions on a per-column level as group footer. React IgrTreeGrid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom  template in the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html).

## React Tree Grid Summaries Overview Example

```typescript
export class OrdersTreeDataItem {
    public constructor(init: Partial<OrdersTreeDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersTreeData extends Array<OrdersTreeDataItem> {
    public constructor(items: Array<OrdersTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersTreeDataItem({ ID: 1, ParentID: -1, Name: `Order 1`, Category: ``, OrderDate: `2010-02-17`, Units: 1844, UnitPrice: 3.73, Price: 6884.38, Delivered: true }),
                new OrdersTreeDataItem({ ID: 101, ParentID: 1, Name: `Chocolate Chip Cookies`, Category: `Cookies`, OrderDate: `2010-02-17`, Units: 834, UnitPrice: 3.59, Price: 2994.06, Delivered: true }),
                new OrdersTreeDataItem({ ID: 102, ParentID: 1, Name: `Red Apples`, Category: `Fruit`, OrderDate: `2010-02-17`, Units: 371, UnitPrice: 3.66, Price: 1357.86, Delivered: true }),
                // ... 19 more items
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

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { OrdersTreeDataItem, OrdersTreeData } from './OrdersTreeData';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    data={this.ordersTreeData}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="ID"
                        header="Order ID">
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Order Product"
                        hasSummary={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Units"
                        header="Units"
                        dataType="number"
                        hasSummary={true}
                        editable={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="number"
                        hasSummary={true}
                        editable={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        header="Price"
                        dataType="number"
                        hasSummary={true}
                        editable={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        hasSummary={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Delivered"
                        header="Delivered"
                        dataType="boolean"
                        hasSummary={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _ordersTreeData: OrdersTreeData = null;
    public get ordersTreeData(): OrdersTreeData {
        if (this._ordersTreeData == null)
        {
            this._ordersTreeData = new OrdersTreeData();
        }
        return this._ordersTreeData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webTreeGridSummariesHeaderTemplate = (props: { dataContext: IgrColumnTemplateContext }) => {
        const column = (props.dataContext as any).column;
        return (
            <div>
                <span style={{ float: 'left' }}>{column.field}</span>
                <span style={{ float: 'right', color: column.hasSummary ? '#e41c77' : '' }} onPointerDown={(e: any) => this.toggleSummary(column)}>∑</span>
            </div>
        );
    }

        public toggleSummary(field: IgrColumn) {
            if (field) {
                field.hasSummary = !field.hasSummary;
                (this as any).setState({ summary: field.hasSummary });
            }
        }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

> [!Note]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

[`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) summaries can also be enabled on a per-column level in Ignite UI for React, which means that you can activate it only for columns that you need. [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:

For `string` and `boolean` [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType), the following function is available:

- Count

For `number`, `currency` and `percent` data types, the following functions are available:

- Count
- Min
- Max
- Average
- Sum

For `date` data type, the following functions are available:

- Count
- Earliest
- Latest

All available column data types could be found in the official [Column types topic](column-types.md#default-template).

[`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) summaries are enabled per-column by setting [`hasSummary`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#hasSummary) property to **true**. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType) property as `number` or `date`. Note that the summary values will be displayed localized, according to the grid [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#locale) and column [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs).

```tsx
<IgrTreeGrid autoGenerate={false} height="800px" width="800px">
    <IgrColumn field="ID" header="Order ID">
    </IgrColumn>
    <IgrColumn field="Name" header="Order Product" hasSummary={true}>
    </IgrColumn>
    <IgrColumn field="Units" header="Units" editable={true} dataType="number" hasSummary={true}>
    </IgrColumn>
</IgrTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`enableSummaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#enableSummaries)/[`disableSummaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#disableSummaries) of the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html).

```tsx
const enableSummary = () => {
    treeGridRef.current.enableSummaries([
        {fieldName: 'Name'},
        {fieldName: 'Units'}
    ]);
}
const disableSummary = () => {
    treeGridRef.current.disableSummaries(['Units']);
}

<IgrTreeGrid autoGenerate={false} data={ordersTreeData} ref={treeGridRef} primaryKey="ID">
    <IgrColumn field="ID" header="Order ID"></IgrColumn>
    <IgrColumn field="Name" header="Order Product" hasSummary={true}></IgrColumn>
    <IgrColumn field="Units" header="Units" editable={true} dataType="number" hasSummary={true}></IgrColumn>
</IgrTreeGrid>
<button onClick={enableSummary}>Enable Summary</button>
<button onClick={disableSummary}>Disable Summary </button>
```

<!-- ComponentEnd: TreeGrid -->

### Summary Template

[`summaryTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#summaryTemplate) targets the column summary providing as a context the column summary results.

```tsx
const summaryTemplate = (ctx: IgrSummaryTemplateContext) => {
  return (
    <>
      <span>My custom summary template</span>
      <span>{ctx.implicit[0].label} - {ctx.implicit[0].summaryResult}</span>
    </>
  );
}

<IgrColumn hasSummary={true} summaryTemplate={summaryTemplate}></IgrColumn>
```

When a default summary is defined, the height of the summary area is calculated by design depending on the column with the largest number of summaries and the `--ig-size` of the grid. Use the [`summaryRowHeight`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#summaryRowHeight) input property to override the default value. As an argument it expects a number value, and setting a falsy value will trigger the default sizing behavior of the grid footer.

```typescript
export class EmployeesNestedTreeDataItem {
    public constructor(init: Partial<EmployeesNestedTreeDataItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public Phone: string;
    public OnPTO: boolean;
    public ParentID: number;
    public Title: string;

}
export class EmployeesNestedTreeData extends Array<EmployeesNestedTreeDataItem> {
    public constructor(items: Array<EmployeesNestedTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesNestedTreeDataItem({ Age: 55, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, Phone: `0251-031259`, OnPTO: false, ParentID: -1, Title: `Development Manager` }),
                new EmployeesNestedTreeDataItem({ Age: 42, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, Phone: `(21) 555-0091`, OnPTO: true, ParentID: -1, Title: `CEO` }),
                new EmployeesNestedTreeDataItem({ Age: 49, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, Phone: `(071) 23 67 22 20`, OnPTO: true, ParentID: -1, Title: `Accounting Manager` }),
                // ... 15 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.summary-temp {
	display: flex;
	flex-direction: column;
	margin: 0 1px;
	font-size: 14px;
	line-height: 24px;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
	> * {
		padding: 8px 0;
		line-height: 18px;
		border-bottom: 1px dashed hsla(var(--igx-gray-400));
		&:last-child {
			border-bottom: none;
		}
	}
}
.summary-temp span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    justify-content: space-between;
    color: hsla(var(--ig-gray-900));
}
.summary-temp span span {
    user-select: all;
    max-width: 300px;
    padding-right: 8px;
}
.summary-temp span strong {
    font-size: 12px;
    text-transform: uppercase;
    min-width: 70px;
    justify-self: flex-start;
    text-align: left;
    color: hsla(var(--ig-secondary-600));
    user-select: none;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesNestedTreeDataItem, EmployeesNestedTreeData } from './EmployeesNestedTreeData';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { IgrSummaryTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private summaryRowHeightEditor: IgrPropertyEditorPropertyDescription
    private toggleSummariesEditor: IgrPropertyEditorPropertyDescription
    private sizeEditor: IgrPropertyEditorPropertyDescription
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.webTreeGridHasSummariesChange = this.webTreeGridHasSummariesChange.bind(this);
        this.webTreeGridSetGridSize = this.webTreeGridSetGridSize.bind(this);
        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.treeGrid}
                    descriptionType="WebTreeGrid"
                    isHorizontal="true"
                    isWrappingEnabled="false"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="SummaryRowHeight"
                        label="Summary Row Height"
                        valueType="Number"
                        name="SummaryRowHeightEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        label="Toggle Summaries"
                        valueType="Boolean1"
                        primitiveValue="True"
                        changed={this.webTreeGridHasSummariesChange}
                        name="ToggleSummariesEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        name="SizeEditor"
                        label="Grid Size:"
                        valueType="EnumValue"
                        dropDownNames={["Small", "Medium", "Large"]}
                        dropDownValues={["Small", "Medium", "Large"]}
                        changed={this.webTreeGridSetGridSize}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    data={this.employeesNestedTreeData}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="Name">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        hasSummary={true}
                        summaryTemplate={this.webTreeGridSummaryTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="date">
                    </IgrColumn>
                    <IgrColumn
                        field="OnPTO"
                        dataType="boolean"
                        editable={true}
                        hasSummary={true}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesNestedTreeData: EmployeesNestedTreeData = null;
    public get employeesNestedTreeData(): EmployeesNestedTreeData {
        if (this._employeesNestedTreeData == null)
        {
            this._employeesNestedTreeData = new EmployeesNestedTreeData();
        }
        return this._employeesNestedTreeData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webTreeGridHasSummariesChange(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        let newValue = sender.primitiveValue as boolean;
        const grid = this.treeGrid;
        var column1 = grid.getColumnByName("Age");
        var column2 = grid.getColumnByName("Title");
        var column3 = grid.getColumnByName("OnPTO");

        column1.hasSummary = newValue;
        column2.hasSummary = newValue;
        column3.hasSummary = newValue;
    }

    public webTreeGridSetGridSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var newVal = (args.newValue as string).toLowerCase();
        var grid = document.getElementById("treeGrid");
        grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
    }

    public webTreeGridSummaryTemplate = (e: { dataContext: IgrSummaryTemplateContext }) => {
        const summaryResults = e.dataContext.implicit;
        return (
            <div className="summary-temp">
                <span><strong>{summaryResults[0].label}</strong><span>{(summaryResults[0] as any).summaryResult}</span></span>
                <span><strong>{summaryResults[1].label}</strong><span>{(summaryResults[1] as any).summaryResult}</span></span>
                <span><strong>{summaryResults[2].label}</strong><span>{(summaryResults[2] as any).summaryResult}</span></span>
                <span><strong>{summaryResults[3].label}</strong><span>{(summaryResults[3] as any).summaryResult}</span></span>
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Disabled Summaries

The [`disabledSummaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#disabledSummaries) property provides precise per-column control over the React Tree Grid summary feature. This property enables users to customize the summaries displayed for each column in the IgrTreeGrid, ensuring that only the most relevant and meaningful data is shown. For example, you can exclude specific summary types, such as **\['count', 'min', 'max']** by specifying their summary keys in an array.

This property can also be modified **dynamically at runtime** through code, providing flexibility to adapt the IgrTreeGrid's summaries to changing application states or user actions.

The following examples illustrate how to use the `disabledSummaries` property to manage summaries for different columns and exclude specific default and custom summary types in the React Tree Grid:

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

```tsx
<!-- Disable default summaries -->
<IgrColumn
    field="UnitPrice"
    header="Unit Price"
    dataType="number"
    hasSummary={true}
    disabledSummaries={['count', 'sum', 'average']}
/>

<!-- Disable custom summaries -->
<IgrColumn
    field="UnitsInStock"
    header="Units In Stock"
    dataType="number"
    hasSummary={true}
    summaries={discontinuedSummary}
    disabledSummaries={['discontinued', 'totalDiscontinued']}
/>
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

For `UnitPrice`, default summaries like `count`, `sum`, and `average` are disabled, leaving others like `min` and `max` active.

For `UnitsInStock`, custom summaries such as `discontinued` and `totalDiscontinued` are excluded using the [`disabledSummaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#disabledSummaries) property.

At runtime, summaries can also be dynamically disabled using the [`disabledSummaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#disabledSummaries) property. For example, you can set or update the property on specific columns programmatically to adapt the displayed summaries based on user actions or application state changes.

```typescript
export class OrdersTreeDataItem {
    public constructor(init: Partial<OrdersTreeDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersTreeData extends Array<OrdersTreeDataItem> {
    public constructor(items: Array<OrdersTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersTreeDataItem(
                {
                    ID: 1,
                    ParentID: -1,
                    Name: `Order 1`,
                    Category: ``,
                    OrderDate: `2010-02-17`,
                    Units: 1844,
                    UnitPrice: 3.73,
                    Price: 6884.38,
                    Delivered: true
                }),
                new OrdersTreeDataItem(
                {
                    ID: 101,
                    ParentID: 1,
                    Name: `Chocolate Chip Cookies`,
                    Category: `Cookies`,
                    OrderDate: `2010-02-17`,
                    Units: 834,
                    UnitPrice: 3.59,
                    Price: 2994.06,
                    Delivered: true
                }),
                new OrdersTreeDataItem(
                {
                    ID: 102,
                    ParentID: 1,
                    Name: `Red Apples`,
                    Category: `Fruit`,
                    OrderDate: `2010-02-17`,
                    Units: 371,
                    UnitPrice: 3.66,
                    Price: 1357.86,
                    Delivered: true
                }),
                // ... 19 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
.grid-wrapper {
    margin: 0 auto;
    padding: 16px;
    height: 87%;
}

.grid-wrapper .summaries {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.grid-wrapper .summaries-title {
    margin: 0 0 1rem 0;
    flex-basis: 100%;
    font-weight: bold;
}

.grid-wrapper .summary-button {
    margin-right: 1rem;
}

igc-dialog {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
}

igc-dialog::part(title) {
    color: #1E6DFE;
}

.summaries-dialog-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.summaries-dialog-items .summaries-dialog-item {
    display: flex;
    align-items: center;
    padding: 0 1rem;
}
```
```tsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrButton, IgrDialog, IgrCheckbox } from 'igniteui-react';
import { IgrSummaryOperand, IgrSummaryResult, IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import { OrdersTreeData } from './OrdersTreeData';
import { get } from 'http';


export class UnitsSummary extends IgrSummaryOperand {
    operate(data: any[] = [], allData: any[] = [], fieldName: string = ""): IgrSummaryResult[] {
        const result: IgrSummaryResult[] = [];

        const values = allData.map((rec) => rec[fieldName]).filter((value) => value !== undefined && value !== null);
        const totalSum = values.reduce((sum, value) => sum + value, 0);
        const sortedValues = [...values].sort((a, b) => a - b); 
        const deliveredValues = allData
            .filter((rec) => rec["Delivered"])
            .map((rec) => rec[fieldName])
            .filter((value) => value !== undefined && value !== null);

        result.push({
            key: "count",
            label: "Count",
            summaryResult: allData.length
        });

        result.push({
            key: "min",
            label: "Min",
            summaryResult: values.length > 0 ? Math.min(...values) : "N/A"
        });

        result.push({
            key: "max",
            label: "Max",
            summaryResult: values.length > 0 ? Math.max(...values) : "N/A"
        });

        result.push({
            key: "sum",
            label: "Sum",
            summaryResult: totalSum
        });

        result.push({
            key: "average",
            label: "Average",
            summaryResult: values.length > 0 ? totalSum / values.length : "N/A"
        });

        result.push({
            key: "totalDelivered",
            label: "Total Units Delivered",
            summaryResult: deliveredValues.length > 0 ? deliveredValues.reduce((sum, value) => sum + value, 0) : "N/A"
        });

        result.push({
            key: "medianUnits",
            label: "Median Units",
            summaryResult:
                values.length > 0
                    ? (() => {
                        const mid = Math.floor(sortedValues.length / 2);
                        return sortedValues.length % 2 !== 0 ? sortedValues[mid] : (sortedValues[mid - 1] + sortedValues[mid]) / 2;
                    })()
                    : "N/A"
        });

        result.push({
            key: "uniqueCount",
            label: "Count of Unique Unit Values",
            summaryResult: values.length > 0 ? new Set(values).size : "N/A"
        });

        result.push({
            key: "maxDifference",
            label: "Max Difference Between Units",
            summaryResult:
                values.length > 1
                    ? values.reduce((maxDiff, value, idx, arr) => {
                        if (idx === 0) return maxDiff;
                        const diff = Math.abs(value - arr[idx - 1]);
                        return Math.max(maxDiff, diff);
                    }, 0)
                    : "N/A"
        });

        return result;
    }
}

export class DeliveredSummary extends IgrSummaryOperand {
    operate(data: any[] = [], allData: any[] = [], fieldName: string = ""): IgrSummaryResult[] {
        const result: IgrSummaryResult[] = [];

        result.push({
            key: "count",
            label: "Count",
            summaryResult: allData.length
        });

        result.push({
            key: "true",
            label: "True",
            summaryResult: allData.filter((item) => item[fieldName] === true).length
        });

        result.push({
            key: "false",
            label: "False",
            summaryResult: allData.filter((item) => item[fieldName] === false).length
        });

        return result;
    }
}

interface SummaryColumn {
    field: string;
    header: string;
    hasSummary: boolean;
    dataType?: string;
    summaries?: any;
    disabledSummaries: string[];
}

export default function DisabledSummariesTreeGridSample() {

    // State
    const [ordersTreeData, setOrdersTreeData] = useState<OrdersTreeData>([]);
    const [currentColumn, setCurrentColumn] = useState<SummaryColumn | null>(null);
    const [currentColumnSource, setCurrentColumnSource] = useState<"dialog" | "toggle" | null>(null);
    const [pendingUpdateType, setPendingUpdateType] = useState<null | "disableAll" | "enableAll">(null);
    const [disableAllBtnDisabled, setDisableAllBtnDisabled] = useState(false);
    const [enableAllBtnDisabled, setEnableAllBtnDisabled] = useState(false);
    const [checkboxStates, setCheckboxStates] = useState([]);
    const [columns, setColumns] = useState([
        { field: "ID", header: "Order ID", hasSummary: true, disabledSummaries: [] },
        { field: "Name", header: "Order Product", hasSummary: true, disabledSummaries: [] },
        { field: "Units", header: "Units", hasSummary: true, dataType: "number", summaries: UnitsSummary, disabledSummaries: [] },
        { field: "UnitPrice", header: "Unit Price", hasSummary: true, dataType: "number", disabledSummaries: [] },
        { field: "Price", header: "Price", hasSummary: true, dataType: "number", disabledSummaries: [] },
        { field: "Delivered", header: "Delivered", hasSummary: true, summaries: DeliveredSummary, disabledSummaries: [] },
        { field: "OrderDate", header: "Order Date", hasSummary: true, dataType: "date", disabledSummaries: [] },
    ]);

    // Refs
    let treeGrid: IgrTreeGrid;
    const treeGridRef = (ref: IgrTreeGrid) => {
        treeGrid = ref;
    };
    let dialog: IgrDialog;
    const dialogRef = (ref: IgrDialog) => {
        dialog = ref;
        if (dialog) {
        dialog.closeOnOutsideClick = true;
        dialog.keepOpenOnEscape = false;
        }
    };

    useEffect(() => {
        const data = new OrdersTreeData();
        setOrdersTreeData(data);
    }, []);

    useEffect(() => {
        if (!currentColumn) return;
    
        const shouldShowDialog = currentColumnSource === "dialog";
        const shouldMarkForCheck =
          currentColumnSource === "toggle" ||
          pendingUpdateType === "disableAll" ||
          pendingUpdateType === "enableAll";
    
        if (shouldShowDialog) {
          updateCheckboxes();
          dialog?.show();
          setCurrentColumnSource(null);
        }
    
        if (shouldMarkForCheck && treeGrid) {
          updateCheckboxes();
          treeGrid.markForCheck();
          setPendingUpdateType(null);
          setCurrentColumnSource(null);
        }
      }, [currentColumn, currentColumnSource, pendingUpdateType, treeGrid]);
    
      const openDialog = (column: any) => {
        const columnState = columns.find((c) => c.field === column.field);
        setCurrentColumn(columnState!);
        setCurrentColumnSource("dialog");
        setCheckboxStates([]);
      };
    
      const getSummaryResults = (
        operand: any,
        data: any[],
        field: string
      ): IgrSummaryResult[] => {
        if (typeof operand === "function") {
          operand = new operand();
        }
        if (operand instanceof IgrSummaryOperand) {
          return operand.operate([], data, field, null);
        } else if (!operand) {
          return new IgrSummaryOperand().operate([], data, field, null);
        }
        return [];
      };
    
      const getDefaultSummaries = (
        data: any[],
        field: string
      ): IgrSummaryResult[] => {
        const columnInstance = treeGrid.columns.find((c) => c.field === field);
        if (
          columnInstance &&
          columnInstance.summaries &&
          typeof columnInstance.summaries.operate === "function"
        ) {
          return columnInstance.summaries.operate([], data, field, null);
        }
        return [];
      };
    
      const updateCheckboxes = () => {
        if (!currentColumn || !treeGrid) return;
    
        const gridData: any[] = treeGrid.data;
        let allSummaries: IgrSummaryResult[] = [];
        if (currentColumn.summaries) {
          allSummaries = getSummaryResults(
            currentColumn.summaries,
            gridData,
            currentColumn.field
          );
        } else {
          allSummaries = getDefaultSummaries(gridData, currentColumn.field);
        }
    
        let allDisabled: boolean = true;
        let allEnabled: boolean = true;
    
        const newCheckboxStates: any[] = allSummaries.map((summary) => {
          const isDisabled = currentColumn.disabledSummaries.includes(summary.key);
          if (isDisabled) {
            allEnabled = false;
          } else {
            allDisabled = false;
          }
          return {
            label: summary.label,
            key: summary.key,
            checked: isDisabled,
          };
        });
    
        setCheckboxStates(newCheckboxStates);
        setDisableAllBtnDisabled(allDisabled);
        setEnableAllBtnDisabled(allEnabled);
      };
    
      const toggleSummary = (summaryKey: string) => {
        if (!currentColumn || !treeGrid) return;
    
        const updatedDisabledSummaries = currentColumn.disabledSummaries.includes(
          summaryKey
        )
          ? currentColumn.disabledSummaries.filter((key: any) => key !== summaryKey)
          : [...currentColumn.disabledSummaries, summaryKey];
    
        const updatedColumns = columns.map((col: any) =>
          col.field === currentColumn.field
            ? { ...col, disabledSummaries: updatedDisabledSummaries }
            : col
        );
    
        setCurrentColumn((prev) => ({
          ...prev,
          disabledSummaries: updatedDisabledSummaries,
        }));
        setColumns(updatedColumns);
        setCurrentColumnSource("toggle");
      };
    
      const disableAllSummaries = () => {
        if (!currentColumn || !treeGrid) return;
    
        const gridData: any[] = treeGrid.data;
        let allSummaries: IgrSummaryResult[] = currentColumn.summaries
          ? getSummaryResults(
              currentColumn.summaries,
              gridData,
              currentColumn.field
            )
          : getDefaultSummaries(gridData, currentColumn.field);
    
        const allSummaryKeys: string[] = allSummaries.map((s) => s.key);
    
        const updatedColumns = columns.map((col: any) =>
          col.field === currentColumn.field
            ? { ...col, disabledSummaries: allSummaryKeys }
            : col
        );
    
        setCurrentColumn((prev) => ({
          ...prev,
          disabledSummaries: allSummaryKeys,
        }));
        setColumns(updatedColumns);
        setDisableAllBtnDisabled(true);
        setEnableAllBtnDisabled(false);
    
        setPendingUpdateType("disableAll");
      };
    
      const enableAllSummaries = () => {
        if (!currentColumn || !treeGrid) return;
    
        const updatedColumns = columns.map((col: any) =>
          col.field === currentColumn.field
            ? { ...col, disabledSummaries: [] }
            : col
        );
    
        setCurrentColumn((prev) => ({ ...prev, disabledSummaries: [] }));
        setColumns(updatedColumns);
        setDisableAllBtnDisabled(false);
        setEnableAllBtnDisabled(true);
    
        setPendingUpdateType("enableAll");
      };
    


    return (
        <div className="grid-wrapper container sample ig-typography">
                <div className="summaries">
                    <p className="summaries-title">Disable Summaries for Column:</p>
                    {columns.map((col: any) => (
                        <IgrButton
                            key={col.field}
                            className="summary-button"
                            variant="contained"
                            onClick={() => openDialog({ field: col.field, header: col.header })}
                        >
                            <span>{col.header}</span>
                        </IgrButton>
                    ))}
                </div>
                <IgrDialog ref={dialogRef} title={currentColumn ? `Disable Summaries for ${currentColumn.header}` : ""}>
                    <div className="summaries-dialog-items">
                         {currentColumn && checkboxStates.map((checkbox: any) => (
                            <IgrCheckbox
                                key={checkbox.key}
                                className="summaries-dialog-item"
                                checked={checkbox.checked}
                                onClick={() => toggleSummary(checkbox.key)}
                            >
                                <span>{checkbox.label}</span>
                            </IgrCheckbox>
                        ))}
                    </div>
                    <IgrButton key="disableAll" slot="footer" variant="flat" onClick={disableAllSummaries} disabled={disableAllBtnDisabled}><span>Disable All</span></IgrButton>
                    <IgrButton key="enableAll" slot="footer" variant="flat" onClick={enableAllSummaries} disabled={enableAllBtnDisabled}><span>Enable All</span></IgrButton>
                </IgrDialog>

                <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    data={ordersTreeData}
                    ref={treeGridRef}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="ID"
                        header="Order ID"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "ID")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Order Product"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "Name")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Units"
                        header="Units"
                        dataType="number"
                        hasSummary={true}
                        summaries={UnitsSummary}
                        disabledSummaries={columns.find((col: any) => col.field === "Units")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="number"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "UnitPrice")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        header="Price"
                        dataType="number"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "Price")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Delivered"
                        header="Delivered"
                        dataType="boolean"
                        hasSummary={true}
                        summaries={DeliveredSummary}
                        disabledSummaries={columns.find((col: any) => col.field === "Delivered")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "OrderDate")?.disabledSummaries}>
                    </IgrColumn>
                </IgrTreeGrid>
                </div>
        </div>
    );

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DisabledSummariesTreeGridSample/>);
```

## Formatting summaries

By default, summary results, produced by the built-in summary operands, are localized and formatted according to the grid [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#locale) and column [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs). When using custom operands, the [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#locale) and [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs) are not applied. If you want to change the default appearance of the summary results, you may format them using the [`summaryFormatter`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#summaryFormatter) property.

```tsx
const summaryFormatter = (summary: IgrSummaryResult, summaryOperand: IgrSummaryOperand): string => {
    const result = summary.summaryResult;
    if (summary.key !== "count" && result !== null && result !== undefined) {
      const format = new Intl.DateTimeFormat("en", { year: "numeric" });
      return format.format(new Date(result));
    }
    return result;
  }

<IgrColumn hasSummary={true} summaryFormatter={summaryFormatter}></IgrColumn>
```

```typescript
export class OrdersTreeDataItem {
    public constructor(init: Partial<OrdersTreeDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersTreeData extends Array<OrdersTreeDataItem> {
    public constructor(items: Array<OrdersTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersTreeDataItem({ ID: 1, ParentID: -1, Name: `Order 1`, Category: ``, OrderDate: `2010-02-17`, Units: 1844, UnitPrice: 3.73, Price: 6884.38, Delivered: true }),
                new OrdersTreeDataItem({ ID: 101, ParentID: 1, Name: `Chocolate Chip Cookies`, Category: `Cookies`, OrderDate: `2010-02-17`, Units: 834, UnitPrice: 3.59, Price: 2994.06, Delivered: true }),
                new OrdersTreeDataItem({ ID: 102, ParentID: 1, Name: `Red Apples`, Category: `Fruit`, OrderDate: `2010-02-17`, Units: 371, UnitPrice: 3.66, Price: 1357.86, Delivered: true }),
                // ... 19 more items
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

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { OrdersTreeDataItem, OrdersTreeData } from './OrdersTreeData';
import { IgrSummaryResult, IgrSummaryOperand } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
        this.webTreeGridSummaryFormatter = this.webTreeGridSummaryFormatter.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    data={this.ordersTreeData}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID"
                    allowFiltering={true}
                    filterMode="excelStyleFilter">
                    <IgrColumn
                        field="ID"
                        header="Order ID"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Order Product"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Category"
                        header="Product Category"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Units"
                        header="Units"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        header="Price"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        hasSummary={true}
                        sortable={true}
                        summaryFormatter={this.webTreeGridSummaryFormatter}>
                    </IgrColumn>
                    <IgrColumn
                        field="Delivered"
                        header="Delivered"
                        dataType="boolean"
                        sortable={true}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _ordersTreeData: OrdersTreeData = null;
    public get ordersTreeData(): OrdersTreeData {
        if (this._ordersTreeData == null)
        {
            this._ordersTreeData = new OrdersTreeData();
        }
        return this._ordersTreeData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webTreeGridSummaryFormatter(summary: IgrSummaryResult, summaryOperand: IgrSummaryOperand): string {
        const result = summary.summaryResult;
        if (summary.key !== "count" && result !== null && result !== undefined) {
            const format = new Intl.DateTimeFormat("en", { year: "numeric" });
            return format.format(new Date(result));
        }
        return result;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<!-- ComponentStart: TreeGrid -->

## Child Summaries

The [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) supports separate summaries for the root nodes and for each nested child node level. Which summaries are shown is configurable using the [`summaryCalculationMode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#summaryCalculationMode) property. The child level summaries can be shown before or after the child nodes using the [`summaryPosition`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#summaryPosition) property. Along with these two properties the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) exposes and [`showSummaryOnCollapse`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#showSummaryOnCollapse) property which allows you to determine whether the summary row stays visible when the parent node that refers to is collapsed.

The available values of the [`summaryCalculationMode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#summaryCalculationMode) property are:

- `RootLevelOnly` - Summaries are calculated only for the root level nodes.
- `ChildLevelsOnly` - Summaries are calculated only for the child levels.
- `RootAndChildLevels` - Summaries are calculated for both root and child levels. This is the default value.

The available values of the [`summaryPosition`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#summaryPosition) property are:

- `Top` - The summary row appears before the list of child rows.
- `Bottom` - The summary row appears after the list of child rows. This is the default value.

The [`showSummaryOnCollapse`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#showSummaryOnCollapse) property is boolean. Its default value is set to **false**, which means that the summary row would be hidden when the parent row is collapsed. If the property is set to **true** the summary row stays visible when parent row is collapsed.

> [!Note]
> The [`summaryPosition`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#summaryPosition) property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html).

```typescript
export class OrdersTreeDataItem {
    public constructor(init: Partial<OrdersTreeDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersTreeData extends Array<OrdersTreeDataItem> {
    public constructor(items: Array<OrdersTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersTreeDataItem({ ID: 1, ParentID: -1, Name: `Order 1`, Category: ``, OrderDate: `2010-02-17`, Units: 1844, UnitPrice: 3.73, Price: 6884.38, Delivered: true }),
                new OrdersTreeDataItem({ ID: 101, ParentID: 1, Name: `Chocolate Chip Cookies`, Category: `Cookies`, OrderDate: `2010-02-17`, Units: 834, UnitPrice: 3.59, Price: 2994.06, Delivered: true }),
                new OrdersTreeDataItem({ ID: 102, ParentID: 1, Name: `Red Apples`, Category: `Fruit`, OrderDate: `2010-02-17`, Units: 371, UnitPrice: 3.66, Price: 1357.86, Delivered: true }),
                // ... 19 more items
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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { OrdersTreeDataItem, OrdersTreeData } from './OrdersTreeData';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private summaryCalculationModeEditor: IgrPropertyEditorPropertyDescription
    private summaryPositionEditor: IgrPropertyEditorPropertyDescription
    private showSummaryOnCollapseEditor: IgrPropertyEditorPropertyDescription
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.webTreeGridChangeSummaryCalculationMode = this.webTreeGridChangeSummaryCalculationMode.bind(this);
        this.webTreeGridChangeSummaryPosition = this.webTreeGridChangeSummaryPosition.bind(this);
        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.treeGrid}
                    descriptionType="WebTreeGrid"
                    isHorizontal="true"
                    isWrappingEnabled="false"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        name="SummaryCalculationModeEditor"
                        label="Summary Calculation Mode"
                        valueType="EnumValue"
                        dropDownNames={["rootLevelOnly", "childLevelsOnly", "rootAndChildLevels"]}
                        dropDownValues={["rootLevelOnly", "childLevelsOnly", "rootAndChildLevels"]}
                        changed={this.webTreeGridChangeSummaryCalculationMode}>
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        name="SummaryPositionEditor"
                        label="Summary Position"
                        valueType="EnumValue"
                        dropDownNames={["top", "bottom"]}
                        dropDownValues={["top", "bottom"]}
                        changed={this.webTreeGridChangeSummaryPosition}>
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        label="Show summary row when group row is collapsed:"
                        propertyPath="ShowSummaryOnCollapse"
                        name="ShowSummaryOnCollapseEditor">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    data={this.ordersTreeData}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="ID"
                        header="Order ID"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Order Product"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Price"
                        dataType="number"
                        hasSummary={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Delivered"
                        dataType="boolean">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _ordersTreeData: OrdersTreeData = null;
    public get ordersTreeData(): OrdersTreeData {
        if (this._ordersTreeData == null)
        {
            this._ordersTreeData = new OrdersTreeData();
        }
        return this._ordersTreeData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webTreeGridChangeSummaryCalculationMode(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
      var treeGrid = this.treeGrid;
      treeGrid.summaryCalculationMode = args.newValue;
    }

    public webTreeGridChangeSummaryPosition(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
      var treeGrid = this.treeGrid;
      treeGrid.summaryPosition = args.newValue;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<!-- ComponentEnd: TreeGrid -->

## Keyboard Navigation

The summary rows can be navigated with the following keyboard interactions:

- <kbd>UP</kbd> - navigates one cell up.
- <kbd>DOWN</kbd> - navigates one cell down.
- <kbd>LEFT</kbd> - navigates one cell left.
- <kbd>RIGHT</kbd> - navigates one cell right.
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - navigates to the leftmost cell.
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> or <kbd>END</kbd> - navigates to the rightmost cell.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrTreeGrid className="grid">
</IgrTreeGrid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-grid-summary-background-color:#e0f3ff;
    --ig-grid-summary-focus-background-color: rgba( #94d1f7, .3 );
    --ig-grid-summary-label-color: rgb(228, 27, 117);
    --ig-grid-summary-result-color: black;
}
```

### Demo

<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: TreeGrid -->

```typescript
export class OrdersTreeDataItem {
    public constructor(init: Partial<OrdersTreeDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersTreeData extends Array<OrdersTreeDataItem> {
    public constructor(items: Array<OrdersTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersTreeDataItem({ ID: 1, ParentID: -1, Name: `Order 1`, Category: ``, OrderDate: `2010-02-17`, Units: 1844, UnitPrice: 3.73, Price: 6884.38, Delivered: true }),
                new OrdersTreeDataItem({ ID: 101, ParentID: 1, Name: `Chocolate Chip Cookies`, Category: `Cookies`, OrderDate: `2010-02-17`, Units: 834, UnitPrice: 3.59, Price: 2994.06, Delivered: true }),
                new OrdersTreeDataItem({ ID: 102, ParentID: 1, Name: `Red Apples`, Category: `Fruit`, OrderDate: `2010-02-17`, Units: 371, UnitPrice: 3.66, Price: 1357.86, Delivered: true }),
                // ... 19 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#treeGrid {
    --ig-grid-summary-background-color:#e0f3ff;
    --ig-grid-summary-focus-background-color: rgba( #94d1f7, .3 );
    --ig-grid-summary-label-color: rgb(228, 27, 117);
    --ig-grid-summary-result-color: black;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { OrdersTreeDataItem, OrdersTreeData } from './OrdersTreeData';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    data={this.ordersTreeData}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="ID"
                        header="Order ID">
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Order Product"
                        hasSummary={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Category"
                        header="Category"
                        hasSummary={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Units"
                        header="Units"
                        dataType="number"
                        hasSummary={true}
                        editable={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="number"
                        hasSummary={true}
                        editable={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        header="Price"
                        dataType="number"
                        hasSummary={true}
                        editable={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Delivered"
                        header="Delivered"
                        dataType="boolean"
                        hasSummary={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        hasSummary={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _ordersTreeData: OrdersTreeData = null;
    public get ordersTreeData(): OrdersTreeData {
        if (this._ordersTreeData == null)
        {
            this._ordersTreeData = new OrdersTreeData();
        }
        return this._ordersTreeData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webTreeGridSummariesHeaderTemplate = (props: { dataContext: IgrColumnTemplateContext }) => {
        const column = (props.dataContext as any).column;
        return (
            <div>
                <span style={{ float: 'left' }}>{column.field}</span>
                <span style={{ float: 'right', color: column.hasSummary ? '#e41c77' : '' }} onPointerDown={(e: any) => this.toggleSummary(column)}>∑</span>
            </div>
        );
    }

        public toggleSummary(field: IgrColumn) {
            if (field) {
                field.hasSummary = !field.hasSummary;
                (this as any).setState({ summary: field.hasSummary });
            }
        }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<!-- ComponentEnd: TreeGrid -->

## API References

- [`IgrSummaryOperand`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrsummaryoperand.html)
- [`IgrNumberSummaryOperand`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrnumbersummaryoperand.html)
- [`IgrDateSummaryOperand`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrdatesummaryoperand.html)
- [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
