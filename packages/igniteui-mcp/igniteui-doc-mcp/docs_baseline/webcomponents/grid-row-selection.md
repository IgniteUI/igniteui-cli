---
title: Web Components Grid Row Selection - Ignite UI for Web Components
_description: Perform data manipulation without affecting the underlying data with Grid Batch Editing, using Web Components Grid. See demos & examples!
_keywords: Web Components, Grid, IgcGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "RowSelectorTemplateDetails", "HeadSelectorTemplateDetails", "Checkbox"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-selection
_tocName: Row Selection
_premium: true
---

# Web Components Grid Row Selection

The Ignite UI for Web Components Row Selection feature in Web Components Grid allows users to interactively select, highlight, or deselect a single or multiple rows of data. There are several selection modes available in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html):

- None Selection
- Multiple Selection
- Single Selection

## Web Components Row Selection Example

<!-- ComponentStart: Grid, HierarchicalGrid -->

The sample below demonstrates the three types of [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)'s **row selection** behavior. Use the drop-down below to enable each of the available selection modes. Use the checkbox to _hide_ or _show_ the row selector checkboxes.

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

## Setup

In order to setup row selection in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html), you just need to set the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelection) property. This property accepts `GridSelectionMode` enumeration.

`GridSelectionMode` exposes the following modes:

- **None**
- **Single**
- **Multiple**

Below we will take a look at each of them in more detail.

### None Selection

In the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) by default row selection is disabled ([`rowSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelection) is None). So you can **not** select or deselect a row through interaction with the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) UI, the only way to complete these actions is to use the provided API methods.

### Single Selection

Single row selection can now be easily set up, the only thing you need to do, is to set [`rowSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelection) to `Single` property. This gives you the opportunity to **select only one row within a grid**. You can select a row by clicking on a cell or pressing the <kbd>SPACE</kbd> key when you focus on a cell of the row, and of course you can select a row by clicking on the row selector field. When row is selected or deselected `RowSelectionChanging` event is emitted.

```html
<igc-grid id="grid" row-selection="Single" auto-generate="true"
        allow-filtering="true">
</igc-grid>
```

```ts
constructor() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.addEventListener("rowSelectionChanging", this.handleRowSelection);
}
```

```ts
public handleRowSelection(args: IgcRowSelectionEventArgs) {
    if (args.detail.added.length && args.detail.added[0] === 3) {
        args.detail.cancel = true;
    }
}
```

### Multiple Selection

To enable multiple row selection in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) just set the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelection) property to `Multiple`. This will enable a row selector field on each row and in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) header. The row selector allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations, such as sorting and filtering. The row also can be selected by clicking on a cell or by pressing the <kbd>SPACE</kbd> key when a cell is focused. If you have selected one row and click on another while holding the <kbd>SHIFT</kbd> key, this will select the whole range of rows. In this selection mode, when you click on a single row, the previous selected rows will be deselected. If you **click** while holding the <kbd>CTRL</kbd> key, the row will be toggled and the previous selection will be preserved.

```html
<igc-grid id="grid" primary-key="ProductID" row-selection="Multiple"
        allow-filtering="true" auto-generate="true">
</igc-grid>
```

**Notes**

<!-- ComponentStart: Grid, HierarchicalGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid -->

- Row selection will trigger `RowSelectionChanging` event. This event gives you information about the **new selection**, **old selection**, the rows that have been **added** and **removed** from the old selection. Also the event is **cancellable**, so this allows you to prevent selection.
- When row selection is enabled row selectors are displayed, but if you don't want to show them, you can set [`hideRowSelectors`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#hideRowSelectors) to **true**.
- When you switch between row selection modes at runtime, this will clear the previous row selection state.

## API usage

### Select Rows Programmatically

The code snippet below can be used to select one or multiple rows simultaneously (via [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey)). Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.

```html
<igc-grid id="grid"
primary-key="ProductID"
row-selection="Multiple"
auto-generate="true">
</igc-grid>

<button id='select'>Select 1,2 and 5</button>
```

```ts
constructor() {
    document.getElementById("select").addEventListener("click", this.onClickSelect);
}
public onClickSelect() {
    const grid = document.getElementById("grid") as IgcGridComponent;
    grid.selectRows([1,2,5], true);
}
```

This will add the rows which correspond to the data entries with IDs 1, 2 and 5 to the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) selection.

### Deselect Rows

If you need to deselect rows programmatically, you can use the [`deselectRows`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#deselectRows) method.

```html
<igc-grid id="grid"
primary-key="ProductID"
row-selection="Multiple"
auto-generate="true">
</igc-grid>

<button id='deselect'>DeSelect</button>
```

```ts
constructor() {
    document.getElementById("deselect").addEventListener("click", this.onClickDeselect);
}
public onClickDeselect() {
    const grid = document.getElementById("grid") as IgcGridComponent;
    grid.deselectRows([1,2,5]);
}
```

### Row Selection Event

When there is some change in the row selection `RowSelectionChanging` event is emitted. `RowSelectionChanging` exposes the following arguments:

- `OldSelection`  - array of row IDs that contains the previous state of the row selection.
- `NewSelection` - array of row IDs that match the new state of the row selection.
- `Added` - array of row IDs that are currently added to the selection.
- `Removed` - array of row IDs that are currently removed according old selection state.
- `Event` - the original event that triggered row selection change.
- `Cancel` - allows you the prevent the row selection change.

```html
<igc-grid id="grid">
</igc-grid>
```

```ts
constructor() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.addEventListener("rowSelectionChanging", this.handleRowSelectionChange);
}

public handleRowSelectionChange(args) {
    args.detail.cancel = true; // this will cancel the row selection
}
```

### Select All Rows

Another useful API method that [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) provides is [`selectAllRows`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#selectAllRows). By default this method will select all data rows, but if filtering is applied, it will select only the rows that match the filter criteria. If you call the method with **false** parameter, `SelectAllRows(false)` will always select all data in the grid, even if filtering is applied.

> **Note** Keep in mind that [`selectAllRows`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#selectAllRows) will not select the rows that are deleted.

### Deselect All Rows

[`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) provides a [`deselectAllRows`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#deselectAllRows) method, which by default will deselect all data rows, but if filtering is applied will deselect only the rows that match the filter criteria. If you call the method with **false** parameter, `DeselectAllRows(false)` will always clear all row selection state even if filtering is applied.

### How to get Selected Rows

If you need to see which rows are currently selected, you can get their row IDs with the [`selectedRows`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#selectedRows) getter.

```ts
public getSelectedRows() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    const currentSelection = grid.selectedRows; // return array of row IDs
}
```

Additionally, assigning row IDs to [`selectedRows`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#selectedRows) will allow you to change the grid's selection state.

```ts
public mySelectedRows = [1, 2, 3]; // an array of row IDs
constructor() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.selectedRows = this.mySelectedRows;
}
```

### Row Selector Templates

You can template header and row selectors in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) and also access their contexts which provide useful functionality for different scenarios.

By default, the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) **handles all row selection interactions** on the row selector's parent container or on the row itself, leaving just the state visualization for the template. Overriding the base functionality should generally be done using the [RowSelectionChanging event](#row-selection-event). In case you implement a custom template with a [`click`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxbasecomponent.html#click) handler which overrides the base functionality, you should stop the event's propagation to preserve the correct row state.

#### Row Template

To create a custom row selector template,  within the `igc-grid` you can use the [`rowSelectorTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowSelectorTemplate) property. From the template you can access the implicitly provided context variable, with properties that give you information about the row's state.

The [`selected`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowselectortemplatedetails.html#selected) property shows whether the current row is selected or not while the [`index`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowselectortemplatedetails.html#index) property can be used to access the row index.

```ts
public rowSelectorTemplate = (ctx: IgcRowSelectorTemplateContext) => {
    if (ctx.implicit.selected) {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
            <span> ${ctx.implicit.index}</span>
            <igc-checkbox checked></igc-checkbox>
            </div>`;
    } else {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
            <span> ${ctx.implicit.index}</span>
            <igc-checkbox></igc-checkbox>
            </div>`;
    }
}
```

The [`rowID`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowselectortemplatedetails.html#rowID) property can be used to get a reference of an `igc-grid` row. This is useful when you implement a `click` handler on the row selector element.

```ts
public rowSelectorTemplate = (ctx: IgcRowSelectorTemplateContext) => {
    return html`
        <igc-checkbox
            @click="${(event: any) => {
            this.onSelectorClick(event, ctx.implicit.key);
            }}"
        ></igc-checkbox>
    `;
}
```

In the above example we are using an [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html) and we bind `rowContext.selected` to its [`checked`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxbasecomponent.html#checked) property. See this in action in our [Row Numbering Demo](#row-numbering-demo).

### Header Template

To create a custom header selector template, within the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html), you can use the [`headSelectorTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#headSelectorTemplate) property. From the template you can access the implicitly provided context variable, with properties that give you information about the header's state.

The [`selectedCount`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcheadselectortemplatedetails.html#selectedCount) property shows you how many rows are currently selected while [`totalCount`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcheadselectortemplatedetails.html#totalCount) shows you how many rows there are in the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) in total.

```ts
public headSelectorTemplate = (ctx: IgcHeadSelectorTemplateContext) => {
    return html` ${ctx.implicit.selectedCount} / ${ctx.implicit.totalCount} `;
};
```

The [`selectedCount`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcheadselectortemplatedetails.html#selectedCount) and [`totalCount`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcheadselectortemplatedetails.html#totalCount) properties can be used to determine if the head selector should be checked or indeterminate (partially selected).

```html
<igc-grid id="grid"
primary-key="ProductID"
row-selection="Multiple"
auto-generate="true">
</igc-grid>
```

```ts
constructor() {
    const grid = document.getElementById('grid') as IgcGridComponent;
    grid.data = this.data;
    grid.headSelectorTemplate = this.headSelectorTemplate;
}

public headSelectorTemplate = (ctx: IgcHeadSelectorTemplateContext) => {
    const implicit: any = ctx.implicit;
    if (implicit.selectedCount > 0 && implicit.selectedCount === implicit.totalCount) {
            return html`<igc-checkbox checked></igc-checkbox>`;
        } else if (implicit.selectedCount > 0 && implicit.selectedCount !== implicit.totalCount) {
            return html`<igc-checkbox indeterminate></igc-checkbox>`;
        }
        return html`<igc-checkbox></igc-checkbox>`;
}
```

### Row Numbering Demo

This demo shows the usage of custom header and row selectors. The latter uses [`index`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowselectortemplatedetails.html#index) to display row numbers and an [`IgcCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccheckboxcomponent.html) bound to [`selected`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowselectortemplatedetails.html#selected).

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

## API References

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)
- [`IgcGridRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridrow.html)

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

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
