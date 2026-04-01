---
title: Web Components Hierarchical Grid Summaries - Ignite UI for Web Components
_description: Configure Web Components Hierarchical Grid summaries in the group footer of the column and use the option to set custom Web Components template in the Ignite UI for Web Components Material table
_keywords: Web Components Hierarchical Grid summaries, Web Components, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "Column", "SummaryOperand"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/summaries
_tocName: Summaries
_premium: true
---

# Web Components Hierarchical Grid Summaries

The Ignite UI for Web Components Summaries feature in Web Components Hierarchical Grid functions on a per-column level as group footer. Web Components IgcHierarchicalGrid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom  template in the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html).

## Web Components Hierarchical Grid Summaries Overview Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


> \[!Note]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

[`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) summaries can also be enabled on a per-column level in Ignite UI for Web Components, which means that you can activate it only for columns that you need. [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:

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

[`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) summaries are enabled per-column by setting [`hasSummary`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#hasSummary) property to **true**. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the [`dataType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#dataType) property as `number` or `date`. Note that the summary values will be displayed localized, according to the grid [`locale`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#locale) and column [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#pipeArgs).

<!-- WebComponents -->

```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID">
    <igc-column field="Artist" header="Artist" has-summary="true"> </igc-column>
    <igc-column field="Photo" header="Photo" data-type="image"> </igc-column>
    <igc-column field="Debut" header="Debut" has-summary="true"> </igc-column>
    <igc-column field="GrammyNominations" header="Grammy Nominations" data-type="number" has-summary="true"> </igc-column>
    <igc-column field="GrammyAwards" header="Grammy Awards" data-type="number" has-summary="true"> </igc-column>
    <igc-row-island child-data-key="Albums" auto-generate="false">
        <igc-column field="Album" header="Album" data-type="string"> </igc-column>
        <igc-column field="LaunchDate" header="Launch Date" data-type="date"> </igc-column>
        <igc-column field="BillboardReview" header="Billboard Review" data-type="number" has-summary="true"> </igc-column>
        <igc-column field="USBillboard200" header="US Billboard 200" data-type="number" has-summary="true"> </igc-column>
    </igc-row-island>
</igc-hierarchical-grid>
```

<!-- ComponentEnd: HierarchicalGrid -->

The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`enableSummaries`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#enableSummaries)/[`disableSummaries`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#disableSummaries) of the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html).

<!-- ComponentStart: HierarchicalGrid -->

<!-- WebComponents -->

```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID">
    <igc-column field="Artist" header="Artist" has-summary="true"> </igc-column>
    <igc-column field="Photo" header="Photo" data-type="image"> </igc-column>
    <igc-column field="Debut" header="Debut" has-summary="true"> </igc-column>
    <igc-column field="GrammyNominations" header="Grammy Nominations" data-type="number" has-summary="true"> </igc-column>
    <igc-column field="GrammyAwards" header="Grammy Awards" data-type="number" has-summary="true"> </igc-column>
</igc-hierarchical-grid>
<button id="enableBtn">Enable Summary</button>
<button id="disableBtn">Disable Summary </button>
```

```ts
constructor() {
    var hierarchicalGrid = this.hierarchicalGrid = document.getElementById('hierarchicalGrid') as IgcHierarchicalGrid;
    var enableBtn = this.enableBtn = document.getElementById('enableBtn') as HTMLButtonElement;
    var disableBtn = this.disableBtn = document.getElementById('disableBtn') as HTMLButtonElement;
    hierarchicalGrid.data = this.data;
    enableBtn.addEventListener("click", this.enableSummary);
    disableBtn.addEventListener("click", this.disableSummary);
}
```

<!-- end: WebComponents -->

<!-- Angular, WebComponents -->

```typescript
public enableSummary() {
    this.hierarchicalGrid.enableSummaries([
        {fieldName: 'GrammyNominations'},
        {fieldName: 'GrammyAwards'}
    ]);
}
public disableSummary() {
    this.hierarchicalGrid.disableSummaries(['GrammyNominations']);
}
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- Angular, WebComponents, Blazor -->

## Custom Hierarchical Grid Summaries

If these functions do not fulfill your requirements you can provide a custom summary for the specific columns.

<!-- WebComponents -->

In order to achieve this you have to override one of the base classes [`IgcSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html), [`IgcNumberSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcnumbersummaryoperand.html) or [`IgcDateSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcdatesummaryoperand.html) according to the column data type and your needs. This way you can redefine the existing function or you can add new functions. [`IgcSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html) class provides the default implementation only for the [`count`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html#count) method. [`IgcNumberSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcnumbersummaryoperand.html) extends [`IgcSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html) and provides implementation for the `Min`, `Max`, `Sum` and `Average`. [`IgcDateSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcdatesummaryoperand.html) extends [`IgcSummaryOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html) and additionally gives you `Earliest` and `Latest`.

<!-- end: WebComponents -->

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

> \[!Note]
> In order to calculate the summary row height properly, the Hierarchical Grid needs the [`operate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html#operate) method to always return an array of [`IgcSummaryResult`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryresult.html) with the proper length even when the data is empty.

<!-- ComponentStart: HierarchicalGrid -->

And now let's add our custom summary to the column `GrammyAwards`. We will achieve that by setting the Summaries\` property to the class we create below.

<!-- WebComponents -->

```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID">
    <igc-column field="Artist" header="Artist" has-summary="true"> </igc-column>
    <igc-column field="Photo" header="Photo" data-type="image"> </igc-column>
    <igc-column field="Debut" header="Debut" has-summary="true"> </igc-column>
    <igc-column field="GrammyNominations" header="Grammy Nominations" data-type="number" has-summary="true"> </igc-column>
    <igc-column field="GrammyAwards" header="Grammy Awards" data-type="number" has-summary="true" id="grammyAwards"> </igc-column>
</igc-hierarchical-grid>
```

```ts
constructor() {
    var hierarchicalGrid = this.hierarchicalGrid = document.getElementById('hierarchicalGrid') as IgcHierarchicalGrid;
    var grammyAwards = this.grammyAwards = document.getElementById('grammyAwards') as IgcColumnComponent;
    hierarchicalGrid.data = this.data;
    grammyAwards.summaries = this.mySummary;
}
```

<!-- end: WebComponents -->

```typescript
export class HierarchicalGridComponent implements OnInit {
    mySummary = MySummary;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

### Custom summaries, which access all data

Now you can access all Hierarchical Grid data inside the custom column summary. Two additional optional parameters are introduced in the SummaryOperand [`operate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcsummaryoperand.html#operate) method.
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

<!-- ComponentStart: HierarchicalGrid -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Angular, WebComponents, Blazor -->

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

<!-- WebComponents -->

The `disabled-summaries` property provides precise per-column control over the Web Components Hierarchical Grid summary feature. This property enables users to customize the summaries displayed for each column in the IgcHierarchicalGrid, ensuring that only the most relevant and meaningful data is shown. For example, you can exclude specific summary types, such as **\['count', 'min', 'max']** by specifying their summary keys in an array.

<!-- end: WebComponents -->

<!-- WebComponents, React, Blazor -->

This property can also be modified **dynamically at runtime** through code, providing flexibility to adapt the IgcHierarchicalGrid's summaries to changing application states or user actions.

<!-- end: WebComponents, React, Blazor -->

<!-- WebComponents -->

The following examples illustrate how to use the `disabled-summaries` property to manage summaries for different columns and exclude specific default and custom summary types in the Web Components Hierarchical Grid:

<!-- end: WebComponents -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

<!-- WebComponents -->

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

<!-- end: WebComponents -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

For `UnitPrice`, default summaries like `count`, `sum`, and `average` are disabled, leaving others like `min` and `max` active.

<!-- WebComponents -->

For `UnitsInStock`, custom summaries such as `discontinued` and `totalDiscontinued` are excluded using the `disabled-summaries` property.

At runtime, summaries can also be dynamically disabled using the [`disabledSummaries`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#disabledSummaries) property. For example, you can set or update the property on specific columns programmatically to adapt the displayed summaries based on user actions or application state changes.

<!-- end: WebComponents -->

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


<!-- Angular, WebComponents, React -->

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
```


<!-- end: Angular, WebComponents, React -->

## Keyboard Navigation

The summary rows can be navigated with the following keyboard interactions:

- <kbd>UP</kbd> - navigates one cell up.
- <kbd>DOWN</kbd> - navigates one cell down.
- <kbd>LEFT</kbd> - navigates one cell left.
- <kbd>RIGHT</kbd> - navigates one cell right.
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - navigates to the leftmost cell.
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> or <kbd>END</kbd> - navigates to the rightmost cell.

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

<!-- ComponentStart: HierarchicalGrid -->

```html
<igc-hierarchical-grid class="hierarchicalGrid"></igc-hierarchical-grid>
```

Then set the related CSS properties for that class:

```css
.hierarchicalGrid {
    --ig-grid-summary-background-color:#e0f3ff;
    --ig-grid-summary-focus-background-color: rgba( #94d1f7, .3 );
    --ig-grid-summary-label-color: rgb(228, 27, 117);
    --ig-grid-summary-result-color: black;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#hierarchicalGrid {
    --ig-grid-summary-background-color:#e0f3ff;
    --ig-grid-summary-focus-background-color: rgba( #94d1f7, .3 );
    --ig-grid-summary-label-color: rgb(228, 27, 117);
    --ig-grid-summary-result-color: black;
}
```


<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: WebComponents, Blazor, React -->

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
