---
title: Web Components Grid Summaries - Ignite UI for Web Components
_description: Configure Web Components Grid summaries in the group footer of the column and use the option to set custom Web Components template in the Ignite UI for Web Components Material table
_keywords: Web Components Grid summaries, Web Components, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "Column", "SummaryOperand"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/summaries
_tocName: Summaries
_premium: true
---

# Web Components Grid Summaries

The Ignite UI for Web Components Summaries feature in Web Components Grid functions on a per-column level as group footer. Web Components IgcGrid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom  template in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html).

## Web Components Grid Summaries Overview Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


> [!Note]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

[`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) summaries can also be enabled on a per-column level in Ignite UI for Web Components, which means that you can activate it only for columns that you need. [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:

For `string` and `boolean` [`dataType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#dataType), the following function is available:

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

[`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) summaries are enabled per-column by setting [`hasSummary`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#hasSummary) property to **true**. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the [`dataType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#dataType) property as `number` or `date`. Note that the summary values will be displayed localized, according to the grid [`locale`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#locale) and column [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pipeArgs).

```html
<igc-grid id="grid1" auto-generate="false" height="800px" width="800px">
    <igc-column field="ProductID" header="Product ID" width="200px"  sortable="true">
    </igc-column>
    <igc-column field="ProductName" header="Product Name" width="200px" sortable="true" has-summary="true">
    </igc-column>
    <igc-column field="ReorderLevel" width="200px" editable="true" data-type="number" has-summary="true">
    </igc-column>
</igc-grid>
```

<!-- ComponentEnd: Grid -->

The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`enableSummaries`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#enableSummaries)/[`disableSummaries`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#disableSummaries) of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html).

<!-- ComponentStart: Grid -->

```html
<igc-grid id="grid" auto-generate="false" height="800px" width="800px">
    <igc-column field="ProductID" header="Product ID" width="200px" sortable="true">
    </igc-column>
    <igc-column field="ProductName" header="Product Name" width="200px" sortable="true" has-summary="true">
    </igc-column>
    <igc-column field="ReorderLevel" width="200px" editable="true" data-type="number" has-summary="false">
    </igc-column>
</igc-grid>
<button id="enableBtn">Enable Summary</button>
<button id="disableBtn">Disable Summary </button>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
    var enableBtn = this.enableBtn = document.getElementById('enableBtn') as HTMLButtonElement;
    var disableBtn = this.disableBtn = document.getElementById('disableBtn') as HTMLButtonElement;
    grid.data = this.data;
    enableBtn.addEventListener("click", this.enableSummary);
    disableBtn.addEventListener("click", this.disableSummary);
}
```

```typescript
public enableSummary() {
    this.grid.enableSummaries([
        {fieldName: 'ReorderLevel'},
        {fieldName: 'ProductID'}
    ]);
}
public disableSummary() {
    this.grid.disableSummaries(['ProductID']);
}
```

<!-- ComponentEnd: Grid -->

## Custom Grid Summaries

If these functions do not fulfill your requirements you can provide a custom summary for the specific columns.

In order to achieve this you have to override one of the base classes [`IgcSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html), [`IgcNumberSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcnumbersummaryoperand.html) or [`IgcDateSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcdatesummaryoperand.html) according to the column data type and your needs. This way you can redefine the existing function or you can add new functions. [`IgcSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html) class provides the default implementation only for the [`count`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html#count) method. [`IgcNumberSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcnumbersummaryoperand.html) extends [`IgcSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html) and provides implementation for the `Min`, `Max`, `Sum` and `Average`. [`IgcDateSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcdatesummaryoperand.html) extends [`IgcSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html) and additionally gives you `Earliest` and `Latest`.

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

<!-- ComponentEnd: Grid, HierarchicalGrid -->

As seen in the examples, the base classes expose the [`operate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html#operate) method, so you can choose to get all default summaries and modify the result, or calculate entirely new summary results.

The method returns a list of [`IgcSummaryResult`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryresult.html).

```typescript
interface IgcSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```

and take optional parameters for calculating the summaries.
See [Custom summaries, which access all data](#custom-summaries-which-access-all-data) section below.

> [!Note]
> In order to calculate the summary row height properly, the Grid needs the [`operate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html#operate) method to always return an array of [`IgcSummaryResult`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryresult.html) with the proper length even when the data is empty.

<!-- ComponentStart: Grid -->

And now let's add our custom summary to the column `UnitsInStock`. We will achieve that by setting the Summaries\` property to the class we create below.

```html
<igc-grid id="grid1" auto-generate="false" height="800px" width="800px">
    <igc-column field="ProductID" width="200px" sortable="true">
    </igc-column>
    <igc-column field="ProductName" width="200px" sortable="true" has-summary="true">
    </igc-column>
    <igc-column id="unitsInStock" field="UnitsInStock" width="200px" data-type="number" has-summary="true" sortable="true">
    </igc-column>
    <igc-column field="ReorderLevel" width="200px" editable="true" data-type="number" has-summary="true">
    </igc-column>
</igc-grid>
```

```ts
constructor() {
    var grid1 = this.grid1 = document.getElementById('grid1') as IgcGridComponent;
    var unitsInStock = this.unitsInStock = document.getElementById('unitsInStock') as IgcColumnComponent;
    grid1.data = this.data;
    unitsInStock.summaries = this.mySummary;
}
```

```typescript
export class GridComponent implements OnInit {
    mySummary = MySummary;
}
```

<!-- ComponentEnd: Grid -->

### Custom summaries, which access all data

Now you can access all Grid data inside the custom column summary. Two additional optional parameters are introduced in the SummaryOperand [`operate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html#operate) method.
As you can see in the code snippet below the operate method has the following three parameters:

- columnData - gives you an array that contains the values only for the current column
- allGridData - gives you the whole grid data source
- fieldName - current column field

```typescript
class MySummary extends IgcNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgcSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'test', label: 'Total Discontinued', summaryResult: allData.filter((rec) => rec.Discontinued).length });
        return result;
    }
}
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: Grid, TreeGrid -->

```typescript
export class NwindDataItem {
    public constructor(init: Partial<NwindDataItem>) {
        Object.assign(this, init);
    }

    public ProductID: number;
    public ProductName: string;
    public SupplierID: number;
    public CategoryID: number;
    public QuantityPerUnit: string;
    public UnitPrice: number;
    public UnitsInStock: number;
    public UnitsOnOrder: number;
    public ReorderLevel: number;
    public Discontinued: boolean;
    public OrderDate: string;
    public Rating: number;
    public Locations: NwindDataItem_LocationsItem[];

}
export class NwindDataItem_LocationsItem {
    public constructor(init: Partial<NwindDataItem_LocationsItem>) {
        Object.assign(this, init);
    }

    public Shop: string;
    public LastInventory: string;

}
export class NwindData extends Array<NwindDataItem> {
    public constructor() {
        super();
        this.push(new NwindDataItem(
        {
            ProductID: 1,
            ProductName: `Chai`,
            SupplierID: 1,
            CategoryID: 1,
            QuantityPerUnit: `10 boxes x 20 bags`,
            UnitPrice: 18,
            UnitsInStock: 39,
            UnitsOnOrder: 30,
            ReorderLevel: 10,
            Discontinued: false,
            OrderDate: `2012-02-12`,
            Rating: 5,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Fun-Tasty Co.`,
                    LastInventory: `06/12/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 2,
            ProductName: `Chang`,
            SupplierID: 1,
            CategoryID: 1,
            QuantityPerUnit: `24 - 12 oz bottles`,
            UnitPrice: 19,
            UnitsInStock: 17,
            UnitsOnOrder: 40,
            ReorderLevel: 25,
            Discontinued: true,
            OrderDate: `2003-03-17`,
            Rating: 5,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Super Market`,
                    LastInventory: `09/09/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 3,
            ProductName: `Aniseed Syrup`,
            SupplierID: 1,
            CategoryID: 2,
            QuantityPerUnit: `12 - 550 ml bottles`,
            UnitPrice: 10,
            UnitsInStock: 13,
            UnitsOnOrder: 70,
            ReorderLevel: 25,
            Discontinued: false,
            OrderDate: `2006-03-17`,
            Rating: 3,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Street Market`,
                    LastInventory: `12/12/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `24/7 Market`,
                    LastInventory: `11/11/2018`
                })]

        }));
        // ... 17 more items
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<!-- ComponentEnd: Grid, TreeGrid -->

<!-- ComponentStart: Grid -->

<!-- ComponentEnd: Grid -->

### Summary Template

[`summaryTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#summaryTemplate) targets the column summary providing as a context the column summary results.

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

When a default summary is defined, the height of the summary area is calculated by design depending on the column with the largest number of summaries and the `--ig-size` of the grid. Use the [`summaryRowHeight`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#summaryRowHeight) input property to override the default value. As an argument it expects a number value, and setting a falsy value will trigger the default sizing behavior of the grid footer.

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


## Disabled Summaries

The `disabled-summaries` property provides precise per-column control over the Web Components Grid summary feature. This property enables users to customize the summaries displayed for each column in the IgcGrid, ensuring that only the most relevant and meaningful data is shown. For example, you can exclude specific summary types, such as **\['count', 'min', 'max']** by specifying their summary keys in an array.

This property can also be modified **dynamically at runtime** through code, providing flexibility to adapt the IgcGrid's summaries to changing application states or user actions.

The following examples illustrate how to use the `disabled-summaries` property to manage summaries for different columns and exclude specific default and custom summary types in the Web Components Grid:

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

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

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

For `UnitPrice`, default summaries like `count`, `sum`, and `average` are disabled, leaving others like `min` and `max` active.

For `UnitsInStock`, custom summaries such as `discontinued` and `totalDiscontinued` are excluded using the `disabled-summaries` property.

At runtime, summaries can also be dynamically disabled using the [`disabledSummaries`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#disabledSummaries) property. For example, you can set or update the property on specific columns programmatically to adapt the displayed summaries based on user actions or application state changes.

```typescript
export class NwindDataItem {
    public constructor(init: Partial<NwindDataItem>) {
        Object.assign(this, init);
    }

    public ProductID: number;
    public ProductName: string;
    public SupplierID: number;
    public CategoryID: number;
    public QuantityPerUnit: string;
    public UnitPrice: number;
    public UnitsInStock: number;
    public UnitsOnOrder: number;
    public ReorderLevel: number;
    public Discontinued: boolean;
    public OrderDate: string;
}

export class NwindData extends Array<NwindDataItem> {
    public constructor() {
        super();
        this.push(
            new NwindDataItem({
                ProductID: 1,
                ProductName: `Chai`,
                SupplierID: 1,
                CategoryID: 1,
                QuantityPerUnit: `10 boxes x 20 bags`,
                UnitPrice: 18,
                UnitsInStock: 39,
                UnitsOnOrder: 30,
                ReorderLevel: 10,
                Discontinued: false,
                OrderDate: `2012-02-12`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 2,
                ProductName: `Chang`,
                SupplierID: 1,
                CategoryID: 1,
                QuantityPerUnit: `24 - 12 oz bottles`,
                UnitPrice: 19,
                UnitsInStock: 17,
                UnitsOnOrder: 40,
                ReorderLevel: 25,
                Discontinued: true,
                OrderDate: `2003-03-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 3,
                ProductName: `Aniseed Syrup`,
                SupplierID: 1,
                CategoryID: 2,
                QuantityPerUnit: `12 - 550 ml bottles`,
                UnitPrice: 10,
                UnitsInStock: 13,
                UnitsOnOrder: 70,
                ReorderLevel: 25,
                Discontinued: false,
                OrderDate: `2006-03-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 4,
                ProductName: `Chef Antons Cajun Seasoning`,
                SupplierID: 2,
                CategoryID: 2,
                QuantityPerUnit: `48 - 6 oz jars`,
                UnitPrice: 22,
                UnitsInStock: 53,
                UnitsOnOrder: 30,
                ReorderLevel: 0,
                Discontinued: false,
                OrderDate: `2016-03-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 5,
                ProductName: `Chef Antons Gumbo Mix`,
                SupplierID: 2,
                CategoryID: 2,
                QuantityPerUnit: `36 boxes`,
                UnitPrice: 21.35,
                UnitsInStock: 0,
                UnitsOnOrder: 30,
                ReorderLevel: 0,
                Discontinued: true,
                OrderDate: `2011-11-11`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 6,
                ProductName: `Grandmas Boysenberry Spread`,
                SupplierID: 3,
                CategoryID: 2,
                QuantityPerUnit: `12 - 8 oz jars`,
                UnitPrice: 25,
                UnitsInStock: 0,
                UnitsOnOrder: 30,
                ReorderLevel: 25,
                Discontinued: false,
                OrderDate: `2017-12-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 7,
                ProductName: `Uncle Bobs Organic Dried Pears`,
                SupplierID: 3,
                CategoryID: 7,
                QuantityPerUnit: `12 - 1 lb pkgs.`,
                UnitPrice: 30,
                UnitsInStock: 150,
                UnitsOnOrder: 30,
                ReorderLevel: 10,
                Discontinued: false,
                OrderDate: `2016-07-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 8,
                ProductName: `Northwoods Cranberry Sauce`,
                SupplierID: 3,
                CategoryID: 2,
                QuantityPerUnit: `12 - 12 oz jars`,
                UnitPrice: 40,
                UnitsInStock: 6,
                UnitsOnOrder: 30,
                ReorderLevel: 0,
                Discontinued: false,
                OrderDate: `2018-01-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 9,
                ProductName: `Mishi Kobe Niku`,
                SupplierID: 4,
                CategoryID: 6,
                QuantityPerUnit: `18 - 500 g pkgs.`,
                UnitPrice: 97,
                UnitsInStock: 29,
                UnitsOnOrder: 30,
                ReorderLevel: 0,
                Discontinued: true,
                OrderDate: `2010-02-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 10,
                ProductName: `Ikura`,
                SupplierID: 4,
                CategoryID: 8,
                QuantityPerUnit: `12 - 200 ml jars`,
                UnitPrice: 31,
                UnitsInStock: 31,
                UnitsOnOrder: 30,
                ReorderLevel: 0,
                Discontinued: false,
                OrderDate: `2008-05-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 11,
                ProductName: `Queso Cabrales`,
                SupplierID: 5,
                CategoryID: 4,
                QuantityPerUnit: `1 kg pkg.`,
                UnitPrice: 21,
                UnitsInStock: 22,
                UnitsOnOrder: 30,
                ReorderLevel: 30,
                Discontinued: false,
                OrderDate: `2009-01-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 12,
                ProductName: `Queso Manchego La Pastora`,
                SupplierID: 5,
                CategoryID: 4,
                QuantityPerUnit: `10 - 500 g pkgs.`,
                UnitPrice: 38,
                UnitsInStock: 86,
                UnitsOnOrder: 30,
                ReorderLevel: 0,
                Discontinued: false,
                OrderDate: `2015-11-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 13,
                ProductName: `Konbu`,
                SupplierID: 6,
                CategoryID: 8,
                QuantityPerUnit: `2 kg box`,
                UnitPrice: 6,
                UnitsInStock: 24,
                UnitsOnOrder: 30,
                ReorderLevel: 5,
                Discontinued: false,
                OrderDate: `2015-03-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 14,
                ProductName: `Tofu`,
                SupplierID: 6,
                CategoryID: 7,
                QuantityPerUnit: `40 - 100 g pkgs.`,
                UnitPrice: 23.25,
                UnitsInStock: 35,
                UnitsOnOrder: 30,
                ReorderLevel: 0,
                Discontinued: false,
                OrderDate: `2017-06-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 15,
                ProductName: `Genen Shouyu`,
                SupplierID: 6,
                CategoryID: 2,
                QuantityPerUnit: `24 - 250 ml bottles`,
                UnitPrice: 15.5,
                UnitsInStock: 39,
                UnitsOnOrder: 30,
                ReorderLevel: 5,
                Discontinued: false,
                OrderDate: `2014-03-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 16,
                ProductName: `Pavlova`,
                SupplierID: 7,
                CategoryID: 3,
                QuantityPerUnit: `32 - 500 g boxes`,
                UnitPrice: 17.45,
                UnitsInStock: 29,
                UnitsOnOrder: 30,
                ReorderLevel: 10,
                Discontinued: false,
                OrderDate: `2018-03-28`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 17,
                ProductName: `Alice Mutton`,
                SupplierID: 7,
                CategoryID: 6,
                QuantityPerUnit: `20 - 1 kg tins`,
                UnitPrice: 39,
                UnitsInStock: 0,
                UnitsOnOrder: 30,
                ReorderLevel: 0,
                Discontinued: true,
                OrderDate: `2015-08-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 18,
                ProductName: `Carnarvon Tigers`,
                SupplierID: 7,
                CategoryID: 8,
                QuantityPerUnit: `16 kg pkg.`,
                UnitPrice: 62.5,
                UnitsInStock: 42,
                UnitsOnOrder: 30,
                ReorderLevel: 0,
                Discontinued: false,
                OrderDate: `2005-09-27`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 19,
                ProductName: `Teatime Chocolate Biscuits`,
                SupplierID: 8,
                CategoryID: 3,
                QuantityPerUnit: ``,
                UnitPrice: 9.2,
                UnitsInStock: 25,
                UnitsOnOrder: 30,
                ReorderLevel: 5,
                Discontinued: false,
                OrderDate: `2001-03-17`
            })
        );
        this.push(
            new NwindDataItem({
                ProductID: 20,
                ProductName: `Sir Rodneys Marmalade`,
                SupplierID: 8,
                CategoryID: 3,
                QuantityPerUnit: `4 - 100 ml jars`,
                UnitPrice: 4.5,
                UnitsInStock: 40,
                UnitsOnOrder: 30,
                ReorderLevel: 0,
                Discontinued: false,
                OrderDate: `2005-03-17`
            })
        );
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

By default, summary results, produced by the built-in summary operands, are localized and formatted according to the grid [`locale`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#locale) and column [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pipeArgs). When using custom operands, the [`locale`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#locale) and [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pipeArgs) are not applied. If you want to change the default appearance of the summary results, you may format them using the [`summaryFormatter`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#summaryFormatter) property.

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
<igc-column id="column"></igx-column>
```

```ts
constructor() {
    var column = this.column = document.getElementById('column') as IgcColumnComponent;
    column.summaryFormatter = this.dateSummaryFormat;
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    #grid {
        --ig-size: var(--ig-size-small);
    }
```


<!-- ComponentStart: Grid -->

## Summaries with Group By

When you have grouped by columns, the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) allows you to change the summary position and calculation mode using the [`summaryCalculationMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#summaryCalculationMode) and [`summaryPosition`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#summaryPosition) properties. Along with these two properties the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) exposes and [`showSummaryOnCollapse`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#showSummaryOnCollapse) property which allows you to determine whether the summary row stays visible when the group row that refers to is collapsed.

The available values of the [`summaryCalculationMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#summaryCalculationMode) property are:

- `RootLevelOnly` - Summaries are calculated only for the root level.
- `ChildLevelsOnly` - Summaries are calculated only for the child levels.
- `RootAndChildLevels` - Summaries are calculated for both root and child levels. This is the default value.

The available values of the [`summaryPosition`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#summaryPosition) property are:

- `Top` - The summary row appears before the group by row children.
- `Bottom` - The summary row appears after the group by row children. This is the default value.

The [`showSummaryOnCollapse`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#showSummaryOnCollapse) property is boolean. Its default value is set to **false**, which means that the summary row would be hidden when the group row is collapsed. If the property is set to **true** the summary row stays visible when group row is collapsed.

> [!Note]
> The [`summaryPosition`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#summaryPosition) property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html).

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

<!-- ComponentStart: Grid, TreeGrid -->

```html
<igc-grid class="grid"></igc-grid>
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


<!-- ComponentEnd: Grid -->

## API References

- [`IgcSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html)
- [`IgcNumberSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcnumbersummaryoperand.html)
- [`IgcDateSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcdatesummaryoperand.html)
- [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup)
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
