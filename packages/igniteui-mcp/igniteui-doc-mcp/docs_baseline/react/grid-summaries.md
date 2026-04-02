---
title: React Grid Summaries - Ignite UI for React
_description: Configure React Grid summaries in the group footer of the column and use the option to set custom React template in the Ignite UI for React Material table
_keywords: React Grid summaries, React, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "Column", "SummaryOperand"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/summaries
_tocName: Summaries
_premium: true
---

# React Grid Summaries

The Ignite UI for React Summaries feature in React Grid functions on a per-column level as group footer. React IgrGrid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom  template in the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

## React Grid Summaries Overview Example

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
import NwindData from './NwindData.json';
import { IgrSummaryResult } from 'igniteui-react-grids';

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
        this.webGridCustomSummary = this.webGridCustomSummary.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    data={this.nwindData}
                    primaryKey="ProductID"
                    onColumnInit={this.webGridCustomSummary}>
                    <IgrColumn
                        field="ProductID">
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units In Stock"
                        hasSummary={true}
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        hasSummary={true}
                        dataType="date">
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

    public webGridCustomSummary(args: any): void {
        //if (args.detail.field === "UnitsInStock") {
        //    args.detail.summaries = 1; //TODO CUSTOM SUMMARY - NOT IMPLEMENTED YET(?)
        //}

        //Units in Stock needs to have above "CustomSummary" class assigned to it in constructor. Not sure if this will be possible
        //with current implementation of xplat examples?
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


> [!Note]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

[`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) summaries can also be enabled on a per-column level in Ignite UI for React, which means that you can activate it only for columns that you need. [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:

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

[`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) summaries are enabled per-column by setting [`hasSummary`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#hasSummary) property to **true**. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType) property as `number` or `date`. Note that the summary values will be displayed localized, according to the grid [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#locale) and column [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs).

```tsx
<IgrGrid autoGenerate={false} height="800px" width="800px">
    <IgrColumn field="ProductID" header="Product ID" width="200px"  sortable={true}>
    </IgrColumn>
    <IgrColumn field="ProductName" header="Product Name" width="200px" sortable={true} hasSummary={true}>
    </IgrColumn>
    <IgrColumn field="ReorderLevel" width="200px" editable={true} dataType="number" hasSummary={true}>
    </IgrColumn>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`enableSummaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#enableSummaries)/[`disableSummaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#disableSummaries) of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

<!-- ComponentStart: Grid -->

```tsx
const enableSummary = () => {
    gridRef.current.enableSummaries([
        {fieldName: 'ReorderLevel'},
        {fieldName: 'ProductID'}
    ]);
}
const disableSummary = () => {
    gridRef.current.disableSummaries(['ProductID']);
}

<IgrGrid ref={gridRef} autoGenerate={false} height="800px" width="800px">
    <IgrColumn field="ProductID" header="Product ID" width="200px" sortable={true}>
    </IgrColumn>
    <IgrColumn field="ProductName" header="Product Name" width="200px" sortable={true} hasSummary={true}>
    </IgrColumn>
    <IgrColumn field="ReorderLevel" width="200px" editable={true} dataType="number" hasSummary={true}>
    </IgrColumn>
</IgrGrid>
<button onClick={enableSummary}>Enable Summary</button>
<button onClick={disableSummary}>Disable Summary </button>
```

<!-- ComponentEnd: Grid -->

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
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { IgrSummaryTemplateContext } from 'igniteui-react-grids';

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
    private summaryRowHeightEditor: IgrPropertyEditorPropertyDescription
    private toggleSummariesEditor: IgrPropertyEditorPropertyDescription
    private sizeEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.webGridHasSummariesChange = this.webGridHasSummariesChange.bind(this);
        this.webGridSetGridSize = this.webGridSetGridSize.bind(this);
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
                        propertyPath="SummaryRowHeight"
                        label="Summary Row Height"
                        valueType="Number"
                        name="SummaryRowHeightEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        label="Toggle Summaries"
                        valueType="Boolean1"
                        primitiveValue="True"
                        changed={this.webGridHasSummariesChange}
                        name="ToggleSummariesEditor">
                    </IgrPropertyEditorPropertyDescription>
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
                    id="grid"
                    ref={this.gridRef}
                    data={this.nwindData}>
                    <IgrColumn
                        field="ProductID"
                        header="Product ID"
                        width="10%"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        width="17%"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Price"
                        filterable={false}
                        width="17%"
                        editable={true}
                        dataType="number"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units in Stock"
                        width="21%"
                        dataType="number"
                        editable={true}
                        groupable={true}
                        hasSummary={true}
                        summaries={this.discontinuedSummary}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        editable={true}
                        width="17%"
                        dataType="boolean"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        width="18%"
                        dataType="date"
                        groupable={true}
                        hasSummary={true}
                        summaryTemplate={this.webGridOrderDateSummaryTemplate}>
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

    public webGridHasSummariesChange(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        let newValue = sender.primitiveValue as boolean;
        const grid = this.grid;
        var column1 = grid.getColumnByName("UnitsInStock");
        var column2 = grid.getColumnByName("OrderDate");

        column1.hasSummary = newValue;
        column2.hasSummary = newValue;
    }

    public webGridSetGridSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var newVal = (args.newValue as string).toLowerCase();
        var grid = document.getElementById("grid");
        grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
    }

    public webGridOrderDateSummaryTemplate = (e: { dataContext: IgrSummaryTemplateContext }) => {
        const summaryResults = e.dataContext.implicit;
        return (
            <div className="summary-temp">
                <span><strong>{ summaryResults[0].label }</strong><span>{ (summaryResults[0] as any).summaryResult }</span></span>
                <span><strong>{ summaryResults[1].label }</strong><span>{ (summaryResults[1] as any).summaryResult }</span></span>
            </div>
        );
    }

    private discontinuedSummary = {
        sum(data: any[] = []): number {
            return data.length && data.filter((el) => el === 0 || Boolean(el)).length ? data.filter((el) => el === 0 || Boolean(el)).reduce((a, b) => +a + +b) : 0;
        },
        operate(data?: any[], allData: any[] = [], fieldName = ''): any[] {
            const result = [] as any[];
            result.push({
                key: 'products',
                label: 'Producs',
                summaryResult: data?.length
            });
            result.push({
                key: 'total',
                label: 'Total Items',
                summaryResult: this.sum(data)
            });
            result.push({
                key: 'discontinued',
                label: 'Discontinued Producs',
                summaryResult: allData.map(r => r['Discontinued']).filter((rec) => rec).length
            } );
            result.push({
                key: 'totalDiscontinued',
                label: 'Total Discontinued Items',
                summaryResult: this.sum(allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]))
            } );
            return result;
        }
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Disabled Summaries

The [`disabledSummaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#disabledSummaries) property provides precise per-column control over the React Grid summary feature. This property enables users to customize the summaries displayed for each column in the IgrGrid, ensuring that only the most relevant and meaningful data is shown. For example, you can exclude specific summary types, such as **\['count', 'min', 'max']** by specifying their summary keys in an array.

This property can also be modified **dynamically at runtime** through code, providing flexibility to adapt the IgrGrid's summaries to changing application states or user actions.

The following examples illustrate how to use the `disabledSummaries` property to manage summaries for different columns and exclude specific default and custom summary types in the React Grid:

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
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrButton, IgrDialog, IgrCheckbox } from "igniteui-react";
import {
  IgrGrid,
  IgrColumn,
  IgrSummaryOperand,
  IgrSummaryResult,
} from "igniteui-react-grids";
import NwindData from "./NwindData.json";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";

class UnitsInStockSummary extends IgrSummaryOperand {
  operate(
    data: any[] = [],
    allData: any[] = [],
    fieldName: string = "",
    summaryResult: any = null
  ): IgrSummaryResult[] {
    const result: IgrSummaryResult[] = [];
    const values = allData
      .map((item) => item[fieldName] ?? 0)
      .filter((value) => value !== null);

    const discontinuedItems = allData.filter(
      (item) => item["Discontinued"] === true
    );
    const discontinuedValues = discontinuedItems
      .map((item) => item[fieldName] ?? 0)
      .filter((value) => !isNaN(value));

    result.push({ key: "count", label: "Count", summaryResult: values.length });
    result.push({
      key: "min",
      label: "Min",
      summaryResult: values.length > 0 ? Math.min(...values) : "N/A",
    });
    result.push({
      key: "max",
      label: "Max",
      summaryResult: values.length > 0 ? Math.max(...values) : "N/A",
    });
    result.push({
      key: "sum",
      label: "Sum",
      summaryResult: values.reduce((a, b) => a + b, 0),
    });
    result.push({
      key: "average",
      label: "Average",
      summaryResult:
        values.length > 0
          ? values.reduce((a, b) => a + b, 0) / values.length
          : "N/A",
    });
    result.push({
      key: "median",
      label: "Median",
      summaryResult:
        values.length > 0
          ? (() => {
              const sortedValues = values.slice().sort((a, b) => a - b);
              return sortedValues.length % 2 === 0
                ? (sortedValues[sortedValues.length / 2 - 1] +
                    sortedValues[sortedValues.length / 2]) /
                    2
                : sortedValues[Math.floor(sortedValues.length / 2)];
            })()
          : "N/A",
    });
    result.push({
      key: "range",
      label: "Range",
      summaryResult:
        values.length > 0 ? Math.max(...values) - Math.min(...values) : "N/A",
    });
    result.push({
      key: "discontinued",
      label: "Discontinued Products",
      summaryResult: discontinuedItems.length,
    });
    result.push({
      key: "totalDiscontinued",
      label: "Total Discontinued Items",
      summaryResult:
        discontinuedValues.length > 0
          ? discontinuedValues.reduce((a, b) => a + b, 0)
          : 0,
    });

    return result;
  }
}

class DiscontinuedSummary extends IgrSummaryOperand {
  operate(
    data: any[] = [],
    allData: any[] = [],
    fieldName: string = ""
  ): IgrSummaryResult[] {
    const result: IgrSummaryResult[] = [];
    result.push({
      key: "count",
      label: "Count",
      summaryResult: allData.length,
    });
    result.push({
      key: "true",
      label: "True",
      summaryResult: allData.filter((item) => item[fieldName] === true).length,
    });
    result.push({
      key: "false",
      label: "False",
      summaryResult: allData.filter((item) => item[fieldName] === false).length,
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

export default function DisabledSummariesSample() {
  // State
  const [nwindData, setNwindData] = useState<any[]>([]);
  const [currentColumn, setCurrentColumn] = useState<SummaryColumn | null>(
    null
  );
  const [currentColumnSource, setCurrentColumnSource] = useState<
    "dialog" | "toggle" | null
  >(null);
  const [pendingUpdateType, setPendingUpdateType] = useState<
    null | "disableAll" | "enableAll"
  >(null);
  const [disableAllBtnDisabled, setDisableAllBtnDisabled] = useState(false);
  const [enableAllBtnDisabled, setEnableAllBtnDisabled] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState([]);
  const [columns, setColumns] = useState([
    {
      field: "ProductID",
      header: "ProductID",
      hasSummary: true,
      disabledSummaries: [],
    },
    {
      field: "ProductName",
      header: "Product Name",
      hasSummary: true,
      disabledSummaries: [],
    },
    {
      field: "UnitPrice",
      header: "Unit Price",
      hasSummary: true,
      dataType: "number",
      disabledSummaries: [],
    },
    {
      field: "UnitsInStock",
      header: "Units In Stock",
      hasSummary: true,
      dataType: "number",
      summaries: UnitsInStockSummary,
      disabledSummaries: [],
    },
    {
      field: "Discontinued",
      header: "Discontinued",
      hasSummary: true,
      summaries: DiscontinuedSummary,
      disabledSummaries: [],
    },
    {
      field: "OrderDate",
      header: "Order Date",
      hasSummary: true,
      dataType: "date",
      disabledSummaries: [],
    },
  ]);

  // Refs
  let grid: IgrGrid;
  const gridRef = (ref: IgrGrid) => {
    grid = ref;
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
    setNwindData(NwindData);
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

    if (shouldMarkForCheck && grid) {
      updateCheckboxes();
      grid.markForCheck();
      setPendingUpdateType(null);
      setCurrentColumnSource(null);
    }
  }, [currentColumn, currentColumnSource, pendingUpdateType, grid]);

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
    const columnInstance = grid.columns.find((c) => c.field === field);
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
    if (!currentColumn || !grid) return;

    const gridData: any[] = grid.data;
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
    if (!currentColumn || !grid) return;

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
    if (!currentColumn || !grid) return;

    const gridData: any[] = grid.data;
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
    if (!currentColumn || !grid) return;

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
      <IgrDialog
        ref={dialogRef}
        title={
          currentColumn ? `Disable Summaries for ${currentColumn.header}` : ""
        }
      >
        <div className="summaries-dialog-items">
          {currentColumn &&
            checkboxStates.map((checkbox: any) => (
              <IgrCheckbox
                key={checkbox.key}
                className="summaries-dialog-item"
                checked={checkbox.checked}
                onChange={() => toggleSummary(checkbox.key)}
              >
                <span>{checkbox.label}</span>
              </IgrCheckbox>
            ))}
        </div>
        <IgrButton
          key="disableAll"
          slot="footer"
          variant="flat"
          onClick={disableAllSummaries}
          disabled={disableAllBtnDisabled}
        >
          <span>Disable All</span>
        </IgrButton>
        <IgrButton
          key="enableAll"
          slot="footer"
          variant="flat"
          onClick={enableAllSummaries}
          disabled={enableAllBtnDisabled}
        >
          <span>Enable All</span>
        </IgrButton>
      </IgrDialog>

      <div className="container fill">
        <IgrGrid
          autoGenerate={false}
          ref={gridRef}
          data={nwindData}
          primaryKey="ProductID"
          height="700px"
          width="100%"
        >
          <IgrColumn
            field="ProductID"
            header="ProductID"
            hasSummary={true}
            disabledSummaries={
              columns.find((col: any) => col.field === "ProductID")
                ?.disabledSummaries
            }
          ></IgrColumn>
          <IgrColumn
            field="ProductName"
            header="Product Name"
            hasSummary={true}
            disabledSummaries={
              columns.find((col: any) => col.field === "ProductName")
                ?.disabledSummaries
            }
          ></IgrColumn>
          <IgrColumn
            field="UnitPrice"
            header="Unit Price"
            dataType="number"
            hasSummary={true}
            disabledSummaries={
              columns.find((col: any) => col.field === "UnitPrice")
                ?.disabledSummaries
            }
          ></IgrColumn>
          <IgrColumn
            field="UnitsInStock"
            header="Units In Stock"
            dataType="number"
            hasSummary={true}
            summaries={UnitsInStockSummary}
            disabledSummaries={
              columns.find((col: any) => col.field === "UnitsInStock")
                ?.disabledSummaries
            }
          ></IgrColumn>
          <IgrColumn
            field="Discontinued"
            header="Discontinued"
            hasSummary={true}
            summaries={DiscontinuedSummary}
            disabledSummaries={
              columns.find((col: any) => col.field === "Discontinued")
                ?.disabledSummaries
            }
          ></IgrColumn>
          <IgrColumn
            field="OrderDate"
            header="Order Date"
            dataType="date"
            hasSummary={true}
            disabledSummaries={
              columns.find((col: any) => col.field === "OrderDate")
                ?.disabledSummaries
            }
          ></IgrColumn>
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DisabledSummariesSample />);
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

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-size: var(--ig-size-small);
    }
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import NwindData from './NwindData.json';
import { IgrSummaryResult, IgrSummaryOperand } from 'igniteui-react-grids';

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
        this.webGridSummaryFormatter = this.webGridSummaryFormatter.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.nwindData}
                    ref={this.gridRef}
                    id="grid">
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        sortable={true}
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="QuantityPerUnit"
                        header="Quantity Per Unit"
                        sortable={true}
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price Category"
                        sortable={true}
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        sortable={true}
                        hasSummary={true}
                        dataType="date"
                        summaryFormatter={this.webGridSummaryFormatter}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        sortable={true}
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


    public webGridSummaryFormatter(summary: IgrSummaryResult, summaryOperand: IgrSummaryOperand): string {
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


<!-- ComponentStart: Grid -->

## Summaries with Group By

When you have grouped by columns, the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) allows you to change the summary position and calculation mode using the [`summaryCalculationMode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#summaryCalculationMode) and [`summaryPosition`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#summaryPosition) properties. Along with these two properties the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) exposes and [`showSummaryOnCollapse`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#showSummaryOnCollapse) property which allows you to determine whether the summary row stays visible when the group row that refers to is collapsed.

The available values of the [`summaryCalculationMode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#summaryCalculationMode) property are:

- `RootLevelOnly` - Summaries are calculated only for the root level.
- `ChildLevelsOnly` - Summaries are calculated only for the child levels.
- `RootAndChildLevels` - Summaries are calculated for both root and child levels. This is the default value.

The available values of the [`summaryPosition`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#summaryPosition) property are:

- `Top` - The summary row appears before the group by row children.
- `Bottom` - The summary row appears after the group by row children. This is the default value.

The [`showSummaryOnCollapse`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#showSummaryOnCollapse) property is boolean. Its default value is set to **false**, which means that the summary row would be hidden when the group row is collapsed. If the property is set to **true** the summary row stays visible when group row is collapsed.

> [!Note]
> The [`summaryPosition`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#summaryPosition) property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

### Demo

```typescript
export class InvoicesDataItem {
    public constructor(init: Partial<InvoicesDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipPostalCode: number;
    public ShipCountry: string;
    public ShipRegion: string;
    public ShipperName: string;
    public CustomerID: number;
    public CustomerName: string;
    public CustomerFirstName: string;
    public CustomerLastName: string;
    public CustomerAddress: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public ExtendedPrice: number;
    public Freight: number;
    public Discontinued: boolean;
    public Region: string;
    public Address: string;
    public City: string;
    public Country: string;
    public PostalCode: number;

}
export class InvoicesData extends Array<InvoicesDataItem> {
    public constructor(items: Array<InvoicesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new InvoicesDataItem({ ShipName: `Jefferson Home`, ShipAddress: `124 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 60098, ShipCountry: `USA`, ShipRegion: `South East`, ShipperName: `Federal Shipping`, CustomerID: 1000, CustomerName: `Martin Jefferson`, CustomerFirstName: `Martin`, CustomerLastName: `Jefferson`, CustomerAddress: `124 Wall Street, Miami, USA, 60098`, Salesperson: `Nancy Jefferson`, OrderID: 1931, OrderDate: `3/14/2022`, ProductID: 189, ProductName: `IPad`, UnitPrice: 16150.61, Quantity: 3, ExtendedPrice: 48451.83, Freight: 980.61, Discontinued: false, Region: `South East`, Address: `124 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 60098 }),
                new InvoicesDataItem({ ShipName: `Black Home`, ShipAddress: `162 Main Street`, ShipCity: `Miami`, ShipPostalCode: 80193, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1001, CustomerName: `Anna Black`, CustomerFirstName: `Anna`, CustomerLastName: `Black`, CustomerAddress: `162 Main Street, Miami, USA, 80193`, Salesperson: `Anna Smith`, OrderID: 1163, OrderDate: `5/22/2022`, ProductID: 138, ProductName: `Mac Book Pro`, UnitPrice: 18520.59, Quantity: 4, ExtendedPrice: 74082.36, Freight: 850.59, Discontinued: false, Region: `West`, Address: `162 Main Street`, City: `Miami`, Country: `USA`, PostalCode: 80193 }),
                new InvoicesDataItem({ ShipName: `Watson Townhouse`, ShipAddress: `164 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 50111, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1002, CustomerName: `Max Watson`, CustomerFirstName: `Max`, CustomerLastName: `Watson`, CustomerAddress: `164 Wall Street, Miami, USA, 50111`, Salesperson: `Martin Watson`, OrderID: 1230, OrderDate: `2/9/2022`, ProductID: 118, ProductName: `Mac Book Air`, UnitPrice: 25310.39, Quantity: 3, ExtendedPrice: 75931.17, Freight: 210.39, Discontinued: false, Region: `West`, Address: `164 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 50111 }),
                // ... 496 more items
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
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrGroupingExpression, SortingDirection, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { InvoicesDataItem, InvoicesData } from './InvoicesData';

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
    private summaryCalcModeEditor: IgrPropertyEditorPropertyDescription
    private summaryPositionEditor: IgrPropertyEditorPropertyDescription
    private showOnCollapseEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private _groupingExpression1: IgrGroupingExpression[] | null = null;
    public get groupingExpression1(): IgrGroupingExpression[] {
        if (this._groupingExpression1 == null)
        {
            let groupingExpression1: IgrGroupingExpression[] = [];
            var groupingExpression2: IgrGroupingExpression = {} as IgrGroupingExpression;
            groupingExpression2.fieldName = "ShipCountry";
            groupingExpression2.ignoreCase = false;
            groupingExpression2.dir = SortingDirection.Asc;

            groupingExpression1.push(groupingExpression2)
            this._groupingExpression1 = groupingExpression1;
        }
        return this._groupingExpression1;
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

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
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
                        propertyPath="SummaryCalculationMode"
                        name="SummaryCalcModeEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="SummaryPosition"
                        name="SummaryPositionEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="ShowSummaryOnCollapse"
                        name="ShowOnCollapseEditor"
                        label="Show Summary Row when Group Row is Collapsed">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    data={this.invoicesData}
                    groupingExpressions={this.groupingExpression1}>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCity"
                        header="Ship City"
                        width="250px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        width="150px"
                        dataType="currency"
                        groupable={true}
                        hasSummary={true}
                        pipeArgs={this.columnPipeArgs1}>
                    </IgrColumn>
                    <IgrColumn
                        field="Quantity"
                        header="Quantity"
                        width="150px"
                        dataType="number"
                        groupable={true}
                        hasSummary={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesData: InvoicesData = null;
    public get invoicesData(): InvoicesData {
        if (this._invoicesData == null)
        {
            this._invoicesData = new InvoicesData();
        }
        return this._invoicesData;
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


<!-- ComponentEnd: Grid -->

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
<IgrGrid className="grid">
</IgrGrid>
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

<!-- ComponentStart: Grid -->

```typescript
export class InvoicesDataItem {
    public constructor(init: Partial<InvoicesDataItem>) {
        Object.assign(this, init);
    }

    public ShipName: string;
    public ShipAddress: string;
    public ShipCity: string;
    public ShipPostalCode: number;
    public ShipCountry: string;
    public ShipRegion: string;
    public ShipperName: string;
    public CustomerID: number;
    public CustomerName: string;
    public CustomerFirstName: string;
    public CustomerLastName: string;
    public CustomerAddress: string;
    public Salesperson: string;
    public OrderID: number;
    public OrderDate: string;
    public ProductID: number;
    public ProductName: string;
    public UnitPrice: number;
    public Quantity: number;
    public ExtendedPrice: number;
    public Freight: number;
    public Discontinued: boolean;
    public Region: string;
    public Address: string;
    public City: string;
    public Country: string;
    public PostalCode: number;

}
export class InvoicesData extends Array<InvoicesDataItem> {
    public constructor(items: Array<InvoicesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new InvoicesDataItem({ ShipName: `Jefferson Home`, ShipAddress: `124 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 60098, ShipCountry: `USA`, ShipRegion: `South East`, ShipperName: `Federal Shipping`, CustomerID: 1000, CustomerName: `Martin Jefferson`, CustomerFirstName: `Martin`, CustomerLastName: `Jefferson`, CustomerAddress: `124 Wall Street, Miami, USA, 60098`, Salesperson: `Nancy Jefferson`, OrderID: 1931, OrderDate: `3/14/2022`, ProductID: 189, ProductName: `IPad`, UnitPrice: 16150.61, Quantity: 3, ExtendedPrice: 48451.83, Freight: 980.61, Discontinued: false, Region: `South East`, Address: `124 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 60098 }),
                new InvoicesDataItem({ ShipName: `Black Home`, ShipAddress: `162 Main Street`, ShipCity: `Miami`, ShipPostalCode: 80193, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1001, CustomerName: `Anna Black`, CustomerFirstName: `Anna`, CustomerLastName: `Black`, CustomerAddress: `162 Main Street, Miami, USA, 80193`, Salesperson: `Anna Smith`, OrderID: 1163, OrderDate: `5/22/2022`, ProductID: 138, ProductName: `Mac Book Pro`, UnitPrice: 18520.59, Quantity: 4, ExtendedPrice: 74082.36, Freight: 850.59, Discontinued: false, Region: `West`, Address: `162 Main Street`, City: `Miami`, Country: `USA`, PostalCode: 80193 }),
                new InvoicesDataItem({ ShipName: `Watson Townhouse`, ShipAddress: `164 Wall Street`, ShipCity: `Miami`, ShipPostalCode: 50111, ShipCountry: `USA`, ShipRegion: `West`, ShipperName: `United Package`, CustomerID: 1002, CustomerName: `Max Watson`, CustomerFirstName: `Max`, CustomerLastName: `Watson`, CustomerAddress: `164 Wall Street, Miami, USA, 50111`, Salesperson: `Martin Watson`, OrderID: 1230, OrderDate: `2/9/2022`, ProductID: 118, ProductName: `Mac Book Air`, UnitPrice: 25310.39, Quantity: 3, ExtendedPrice: 75931.17, Freight: 210.39, Discontinued: false, Region: `West`, Address: `164 Wall Street`, City: `Miami`, Country: `USA`, PostalCode: 50111 }),
                // ... 496 more items
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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrGroupingExpression, SortingDirection, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { InvoicesDataItem, InvoicesData } from './InvoicesData';

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
    private summaryCalcModeEditor: IgrPropertyEditorPropertyDescription
    private summaryPositionEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private _groupingExpression1: IgrGroupingExpression[] | null = null;
    public get groupingExpression1(): IgrGroupingExpression[] {
        if (this._groupingExpression1 == null)
        {
            let groupingExpression1: IgrGroupingExpression[] = [];
            var groupingExpression2: IgrGroupingExpression = {} as IgrGroupingExpression;
            groupingExpression2.dir = SortingDirection.Asc;
            groupingExpression2.fieldName = "ShipCountry";
            groupingExpression2.ignoreCase = false;

            groupingExpression1.push(groupingExpression2)
            this._groupingExpression1 = groupingExpression1;
        }
        return this._groupingExpression1;
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

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
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
                        propertyPath="SummaryCalculationMode"
                        name="SummaryCalcModeEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="SummaryPosition"
                        name="SummaryPositionEditor">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    id="grid"
                    data={this.invoicesData}
                    groupingExpressions={this.groupingExpression1}>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        width="200px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCity"
                        header="Ship City"
                        width="250px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        width="150px"
                        dataType="currency"
                        groupable={true}
                        hasSummary={true}
                        pipeArgs={this.columnPipeArgs1}>
                    </IgrColumn>
                    <IgrColumn
                        field="Quantity"
                        header="Quantity"
                        width="150px"
                        dataType="number"
                        groupable={true}
                        hasSummary={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesData: InvoicesData = null;
    public get invoicesData(): InvoicesData {
        if (this._invoicesData == null)
        {
            this._invoicesData = new InvoicesData();
        }
        return this._invoicesData;
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


<!-- ComponentEnd: Grid -->

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
