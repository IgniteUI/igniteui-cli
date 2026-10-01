---
title: "Web Components Tree Grid Summaries - Ignite UI for Web Components"
description: Configure Web Components Tree Grid summaries in the group footer of the column and use the option to set custom Web Components template in the Ignite UI for Web Components Material table
keywords: "Web Components Tree Grid summaries, Web Components, Ignite UI for Web Components, Infragistics"
license: commercial
_canonicalLink: "grids/grid/summaries"
llms:
  description: "The Ignite UI for Web Components Summaries feature in Web Components Tree Grid functions on a per-column level as group footer."
_componentKey: TreeGrid
_tocName: Summaries
_premium: true
---
# Web Components Tree Grid Summaries

The Ignite UI for Web Components Summaries feature in Web Components Tree Grid functions on a per-column level as group footer. Web Components IgcTreeGrid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom  template in the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent).

## Web Components Tree Grid Summaries Overview Example

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

**Note:** 
The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

[`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) summaries can also be enabled on a per-column level in Ignite UI for Web Components, which means that you can activate it only for columns that you need. [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:

For `string` and `boolean` [`IgcColumn.dataType`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=dataType), the following function is available:
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

[`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) summaries are enabled per-column by setting [`IgcColumnState.hasSummary`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnState&member=hasSummary) property to **true**. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the [`IgcColumn.dataType`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=dataType) property as `number` or `date`. Note that the summary values will be displayed localized, according to the grid [`Locale`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=locale) and column [`IgcColumn.pipeArgs`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=pipeArgs).

```html
<igc-tree-grid id="grid1" auto-generate="false" height="800px" width="800px">
    <igc-column field="ID" header="Order ID">
    </igc-column>
    <igc-column field="Name" header="Order Product" has-summary="true">
    </igc-column>
    <igc-column field="Units" header="Units" editable="true" data-type="number" has-summary="true">
    </igc-column>
</igc-tree-grid>
```

The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`IgcTreeGrid.enableSummaries`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=enableSummaries)/[`IgcTreeGrid.disableSummaries`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=disableSummaries) of the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent).

```typescript
public enableSummary() {
    this.treeGrid.enableSummaries([
        {fieldName: 'Name'},
        {fieldName: 'Units'}
    ]);
}
public disableSummary() {
    this.treeGrid.disableSummaries(['Units']);
}
```

## Custom Tree Grid Summaries

If these functions do not fulfill your requirements you can provide a custom summary for the specific columns.

In order to achieve this you have to override one of the base classes [`IgcSummaryOperand`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryOperand), [`IgcNumberSummaryOperand`](mcp:get_api_reference?platform=webcomponents&component=IgcNumberSummaryOperand) or [`IgcDateSummaryOperand`](mcp:get_api_reference?platform=webcomponents&component=IgcDateSummaryOperand) according to the column data type and your needs. This way you can redefine the existing function or you can add new functions. [`IgcSummaryOperand`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryOperand) class provides the default implementation only for the [`Count`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryOperand&member=count) method. [`IgcNumberSummaryOperand`](mcp:get_api_reference?platform=webcomponents&component=IgcNumberSummaryOperand) extends [`IgcSummaryOperand`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryOperand) and provides implementation for the [`Min`](mcp:get_api_reference?platform=webcomponents&component=IgcNumberSummaryOperand&member=min), [`Max`](mcp:get_api_reference?platform=webcomponents&component=IgcNumberSummaryOperand&member=max), [`Sum`](mcp:get_api_reference?platform=webcomponents&component=IgcNumberSummaryOperand&member=sum) and [`Average`](mcp:get_api_reference?platform=webcomponents&component=IgcNumberSummaryOperand&member=average). [`IgcDateSummaryOperand`](mcp:get_api_reference?platform=webcomponents&component=IgcDateSummaryOperand) extends [`IgcSummaryOperand`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryOperand) and additionally gives you [`Earliest`](mcp:get_api_reference?platform=webcomponents&component=IgcDateSummaryOperand&member=earliest) and [`Latest`](mcp:get_api_reference?platform=webcomponents&component=IgcDateSummaryOperand&member=latest).

```typescript
import { IgcSummaryResult, IgcSummaryOperand, IgcNumberSummaryOperand, IgcDateSummaryOperand } from 'igniteui-webcomponents-grids';

class MySummary extends IgcNumberSummaryOperand {
    constructor() {
        super();
    }

    operate(data?: any[]): IgcSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter(rec => rec > 10 && rec < 30).length
        });
        return result;
    }
}
```

As seen in the examples, the base classes expose the [`Operate`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryOperand&member=operate) method, so you can choose to get all default summaries and modify the result, or calculate entirely new summary results.

The method returns a list of [`IgcSummaryResult`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryResult).

```typescript
interface IgcSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```

and take optional parameters for calculating the summaries.
See [Custom summaries, which access all data](#custom-summaries-which-access-all-data) section below.

**Note:** 
In order to calculate the summary row height properly, the Tree Grid needs the [`Operate`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryOperand&member=operate) method to always return an array of [`IgcSummaryResult`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryResult) with the proper length even when the data is empty.

**Note:** 
In order to calculate the summary row height properly, the Tree Grid needs the [`Operate`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryOperand&member=operate) method to always return an array of [`IgcSummaryResult`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryResult) with the proper length even when the data is empty.

And now let's add our custom summary to the column [`Title`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=title). We will achieve that by setting the Summaries` property to the class we create below.

```html
<igc-tree-grid auto-generate="false" name="treeGrid" id="treeGrid" primary-key="ID">
    <igc-column field="Name" data-type="string"></igc-column>
    <igc-column field="Age" data-type="number"></igc-column>
    <igc-column field="Title" data-type="string" has-summary="true" id="column1"></igc-column>
</igc-tree-grid>
```

```ts
constructor() {
    var treeGrid = this.treeGrid = document.getElementById('treeGrid') as IgcTreeGrid;
    var column1 = this.column1 = document.getElementById('column1') as IgcColumnComponent;
    treeGrid.data = this.data;
    column1.summaries = this.mySummary;
}
```

```typescript
export class TreeGridComponent implements OnInit {
    mySummary = MySummary;
}
```

### Custom summaries, which access all data
 Now you can access all Tree Grid data inside the custom column summary. Two additional optional parameters are introduced in the [`IgcSummaryOperand`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryOperand) [`Operate`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryOperand&member=operate) method.
As you can see in the code snippet below the operate method has the following three parameters:
- columnData - gives you an array that contains the values only for the current column
- allGridData - gives you the whole grid data source
- fieldName - current column field

```typescript
class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgxSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'totalOnPTO', label: 'Employees On PTO', summaryResult: this.count(allData.filter((rec) => rec['OnPTO']).map(r => r[fieldName])) });
        return result;
    }
}
```

```typescript
class MySummary extends IgcNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgcSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'totalOnPTO', label: 'Employees On PTO', summaryResult: this.count(allData.filter((rec) => rec['OnPTO']).map(r => r[fieldName])) });
        return result;
    }
}
```

```typescript
export class EmployeesFlatDataItem {
    public constructor(init: Partial<EmployeesFlatDataItem>) {
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
export class EmployeesFlatData extends Array<EmployeesFlatDataItem> {
    public constructor(items: Array<EmployeesFlatDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDataItem(
                {
                    Age: 55,
                    HireDate: `2008-03-20`,
                    ID: 1,
                    Name: `Johnathan Winchester`,
                    Phone: `0251-031259`,
                    OnPTO: false,
                    ParentID: -1,
                    Title: `Development Manager`
                }),
                new EmployeesFlatDataItem(
                {
                    Age: 42,
                    HireDate: `2014-01-22`,
                    ID: 4,
                    Name: `Ana Sanders`,
                    Phone: `(21) 555-0091`,
                    OnPTO: true,
                    ParentID: -1,
                    Title: `CEO`
                }),
                new EmployeesFlatDataItem(
                {
                    Age: 49,
                    HireDate: `2014-01-22`,
                    ID: 18,
                    Name: `Victoria Lincoln`,
                    Phone: `(071) 23 67 22 20`,
                    OnPTO: true,
                    ParentID: -1,
                    Title: `Accounting Manager`
                }),
                // ... 15 more items
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.gridSize {
    --ig-size: var(--ig-size-small);
}
```

### Summary Template
[`SummaryTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=summaryTemplate) targets the column summary providing as a context the column summary results.

```html
<igc-column id="column" has-summary="true">
</igc-column>
```

```ts
constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;
    column.summaryTemplate = this.summaryTemplate;
}

public summaryTemplate = (ctx: IgcSummaryTemplateContext) => {
    return html`
<span> My custom summary template</span>
        <span>${ ctx.implicit[0].label } - ${ ctx.implicit[0].summaryResult }</span>
    `;
}

```

When a default summary is defined, the height of the summary area is calculated by design depending on the column with the largest number of summaries and the `--ig-size` of the grid. Use the [`SummaryRowHeight`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=summaryRowHeight) input property to override the default value. As an argument it expects a number value, and setting a falsy value will trigger the default sizing behavior of the grid footer.

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
    font-size: 14px;
    text-transform: uppercase;
    min-width: 70px;
    justify-self: flex-start;
    text-align: left;
    color: hsla(var(--ig-secondary-600));
    user-select: none;
}
```

## Disabled Summaries

The [`disabled-summaries`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=disabledSummaries) property provides precise per-column control over the Web Components Tree Grid summary feature. This property enables users to customize the summaries displayed for each column in the IgcTreeGrid, ensuring that only the most relevant and meaningful data is shown. For example, you can exclude specific summary types, such as **['count', 'min', 'max']** by specifying their summary keys in an array.

This property can also be modified **dynamically at runtime** through code, providing flexibility to adapt the IgcTreeGrid's summaries to changing application states or user actions.

The following examples illustrate how to use the [`disabled-summaries`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=disabledSummaries) property to manage summaries for different columns and exclude specific default and custom summary types in the Web Components Tree Grid:

```html
<!-- Disable default summaries -->
<igc-column
    field="UnitPrice"
    header="Unit Price"
    data-type="number"
    has-summary="true"
    disabled-summaries="['count', 'sum', 'average']"
>
</igc-column>

<!-- Disable custom summaries -->
<igc-column
    field="UnitsInStock"
    header="Units In Stock"
    data-type="number"
    has-summary="true"
    summaries="discontinuedSummary"
    disabled-summaries="['discontinued', 'totalDiscontinued']"
>
</igc-column>
```

For `UnitPrice`, default summaries like `count`, `sum`, and `average` are disabled, leaving others like `min` and `max` active.

For `UnitsInStock`, custom summaries such as `discontinued` and `totalDiscontinued` are excluded using the [`disabled-summaries`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=disabledSummaries) property.

At runtime, summaries can also be dynamically disabled using the [`DisabledSummaries`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=disabledSummaries) property. For example, you can set or update the property on specific columns programmatically to adapt the displayed summaries based on user actions or application state changes.

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

## Formatting summaries
By default, summary results, produced by the built-in summary operands, are localized and formatted according to the grid [`Locale`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=locale) and column [`IgcColumn.pipeArgs`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=pipeArgs). When using custom operands, the [`Locale`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=locale) and [`IgcColumn.pipeArgs`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=pipeArgs) are not applied. If you want to change the default appearance of the summary results, you may format them using the [`SummaryFormatter`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=summaryFormatter) property.

```typescript
public dateSummaryFormat(summary: IgxSummaryResult, summaryOperand: IgxSummaryOperand): string {
    const result = summary.summaryResult;
    if (summaryOperand instanceof IgxDateSummaryOperand && summary.key !== 'count'
        && result !== null && result !== undefined) {
        const pipe = new DatePipe('en-US');
        return pipe.transform(result,'MMM YYYY');
    }
    return result;
}
```

```typescript
    public dateSummaryFormat(summary: IgcSummaryResult, summaryOperand: IgcSummaryOperand): string {
        const result = summary.summaryResult;
        if (summaryOperand instanceof IgcDateSummaryOperand && summary.key !== "count" && result !== null && result !== undefined) {
            const format = new Intl.DateTimeFormat("en", { year: "numeric" });
            return format.format(new Date(result));
        }
        return result;
    }
```

```html
<igc-column id="column"></igc-column>
```

```ts
constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;
    column.summaryFormatter = this.dateSummaryFormat;
}
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

## Child Summaries

The [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) supports separate summaries for the root nodes and for each nested child node level. Which summaries are shown is configurable using the [`SummaryCalculationMode`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=summaryCalculationMode) property. The child level summaries can be shown before or after the child nodes using the [`SummaryPosition`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=summaryPosition) property. Along with these two properties the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) exposes and [`ShowSummaryOnCollapse`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=showSummaryOnCollapse) property which allows you to determine whether the summary row stays visible when the parent node that refers to is collapsed.

The available values of the [`SummaryCalculationMode`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=summaryCalculationMode) property are:

- [`RootLevelOnly`](mcp:get_api_reference?platform=webcomponents&component=GridSummaryCalculationMode) - Summaries are calculated only for the root level nodes.
- [`ChildLevelsOnly`](mcp:get_api_reference?platform=webcomponents&component=GridSummaryCalculationMode) - Summaries are calculated only for the child levels.
- [`RootAndChildLevels`](mcp:get_api_reference?platform=webcomponents&component=GridSummaryCalculationMode) - Summaries are calculated for both root and child levels. This is the default value.

The available values of the [`SummaryPosition`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=summaryPosition) property are:

- [`Top`](mcp:get_api_reference?platform=webcomponents&component=GridSummaryPosition) - The summary row appears before the list of child rows.
- [`Bottom`](mcp:get_api_reference?platform=webcomponents&component=GridSummaryPosition) - The summary row appears after the list of child rows. This is the default value.

The [`ShowSummaryOnCollapse`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=showSummaryOnCollapse) property is boolean. Its default value is set to **false**, which means that the summary row would be hidden when the parent row is collapsed. If the property is set to **true** the summary row stays visible when parent row is collapsed.

**Note:** 
The [`SummaryPosition`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=summaryPosition) property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent).

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

## Keyboard Navigation

The summary rows can be navigated with the following keyboard interactions:

- <kbd>UP</kbd> - navigates one cell up.
- <kbd>DOWN</kbd> - navigates one cell down.
- <kbd>LEFT</kbd> - navigates one cell left.
- <kbd>RIGHT</kbd> - navigates one cell right.
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - navigates to the leftmost cell.
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> or <kbd>END</kbd> - navigates to the rightmost cell.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../grid/theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-tree-grid class="grid"></igc-tree-grid>
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

## API References

[`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent)<br />
[`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent)<br />

[`IgcSummaryOperand`](mcp:get_api_reference?platform=webcomponents&component=IgcSummaryOperand)<br />
[`IgcNumberSummaryOperand`](mcp:get_api_reference?platform=webcomponents&component=IgcNumberSummaryOperand)<br />
[`IgcDateSummaryOperand`](mcp:get_api_reference?platform=webcomponents&component=IgcDateSummaryOperand)<br />

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
