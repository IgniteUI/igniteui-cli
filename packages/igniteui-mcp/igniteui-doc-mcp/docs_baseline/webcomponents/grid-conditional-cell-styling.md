---
title: Web Components Grid Conditional Cell Styling - Ignite UI for Web Components
_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in Web Components Grid to make cells stand out.
_keywords: conditional styling, Web Components, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/conditional-cell-styling
_tocName: Conditional Styling
_premium: true
---

# Web Components Grid Conditional Styling

The Ignite UI for Web Components Conditional Styling feature in Web Components Grid allows custom styling on a row or cell level. The [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) Conditional Styling functionality is used to visually emphasize or highlight data that meets certain criteria, making it easier for users to identify important information or trends within the grid.

## Grid Conditional Row Styling

The [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) component in Ignite UI for Web Components provides two ways to **conditional styling of rows** based on custom rules.

- By setting [`rowClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowClasses) input on the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) component;
- By setting [`rowStyles`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowStyles) input on the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) component;

Further in this topic we will cover both of them in more details.

### Using Row Classes

You can conditionally style the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) rows by setting the [`rowClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowClasses) input and define custom rules.

```html
<igc-grid id="grid" height="600px" width="100%">
</igc-grid>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcGrid;
    grid.rowClasses = this.rowClasses;
}
```

The [`rowClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

```ts
public rowClasses = {
    activeRow: (row: IgcRowType) => row.index % 2 === 0
}
```

```css
.activeRow {
    border-top: 2px solid #fc81b8;
    border-left: 3px solid #e41c77;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

    .activeRow {
        border-top: 2px solid #fc81b8;
        border-left: 3px solid #e41c77;
    }
```

### Using Row Styles

The [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) control exposes the [`rowStyles`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowStyles) property which allows conditional styling of the data rows. Similar to [`rowClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowClasses) it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).

> The callback signature for both [`rowStyles`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowStyles) and [`rowClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowClasses) is:

```ts
(row: IgcRowType) => boolean
```

Let's define our styles:

<!-- ComponentStart: Grid -->

```typescript
public rowStyles = {
    'background': (row: IgcRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000088' : '#00000000',
    'border': (row: IgcRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '2px solid' : '1px solid',
    'border-color': (row: IgcRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000099' : '#E9E9E9'
};
```

```html
<igc-grid id="grid1" height="500px" width="100%"
        auto-generate="false" allow-filtering="true">
</igc-grid>
```

```ts
constructor() {
    var grid1 = this.grid1 = document.getElementById('grid1') as IgcGridComponent;
    grid1.rowStyles = this.rowStyles;
}
```

<!-- ComponentEnd: Grid -->

### Demo

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

## Grid Conditional Cell Styling

## Overview

The [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) component in Ignite UI for Web Components provides two ways to **conditional styling of cells** based on custom rules.

- By setting the [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) input [`cellClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#cellClasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.

### Using Cell Classes

You can conditionally style the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) cells by setting the [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) [`cellClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#cellClasses) input and define custom rules.

```html
<igc-column id="beatsPerMin" field="BeatsPerMinute" data-type="Number"></igc-column>
```

```ts
constructor() {
    var beatsPerMin = this.beatsPerMin = document.getElementById('beatsPerMin') as IgcColumnComponent;
    beatsPerMin.cellClasses = this.beatsPerMinuteClasses;
}
```

<!-- ComponentEnd: Grid -->

The [`cellClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#cellClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

<!-- ComponentStart: Grid -->

```typescript

private upFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 95;
}

private downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;
}

public beatsPerMinuteClasses = {
    downFont: this.downFontCondition,
    upFont: this.upFontCondition
};
```

```css
.upFont {
    color: green !important;
}

.downFont {
    color: red !important;
}
```

<!-- ComponentEnd: Grid -->

### Demo

```typescript
export class AthletesDataItem {
    public constructor(init: Partial<AthletesDataItem>) {
        Object.assign(this, init);
    }

    public Id: number;
    public Avatar: string;
    public Position: string;
    public Name: string;
    public AthleteNumber: number;
    public BeatsPerMinute: number;
    public TopSpeed: number;
    public Registered: string;
    public TrackProgress: number;
    public CountryFlag: string;
    public CountryName: string;

}
export class AthletesData extends Array<AthletesDataItem> {
    public constructor(items: Array<AthletesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AthletesDataItem({ Id: 100, Avatar: `https://dl.infragistics.com/x/img/people/women/20.png`, Position: `current`, Name: `Alexis Walker`, AthleteNumber: 43183, BeatsPerMinute: 103, TopSpeed: 5.8, Registered: `2017-08-07T10:35:06-03:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/GH.png`, CountryName: `Ghana` }),
                new AthletesDataItem({ Id: 101, Avatar: `https://dl.infragistics.com/x/img/people/women/31.png`, Position: `down`, Name: `Lavínia Silva`, AthleteNumber: 33994, BeatsPerMinute: 93, TopSpeed: 5.6, Registered: `2017-03-22T08:55:46-02:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/NO.png`, CountryName: `Norway` }),
                new AthletesDataItem({ Id: 105, Avatar: `https://dl.infragistics.com/x/img/people/men/13.png`, Position: `down`, Name: `Samu Hokkanen`, AthleteNumber: 22469, BeatsPerMinute: 106, TopSpeed: 5.5, Registered: `2017-06-29T04:58:27-03:00`, TrackProgress: 25, CountryFlag: `https://dl.infragistics.com/x/img/flags/AZ.png`, CountryName: `Azerbaijan` }),
                // ... 182 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.upFont {
    color: green !important;
}

.downFont {
    color: red !important;
}

.topSpeed {
    color: royalblue !important;
}
```

- By using the [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) input [`cellStyles`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#cellStyles) which accepts an object literal where the keys are style properties and the values are expressions for evaluation.

> The callback signature for both `cellStyles` and `cellClasses` is now changed to:

```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```

### Using Cell Styles

Columns expose the [`cellStyles`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#cellStyles) property which allows conditional styling of the column cells. Similar to [`cellClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#cellClasses) it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling with ease (without any conditions).

Let's define our styles:

```ts
public webGridCellStylesHandler = {
    background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
    color: (rowData, columnKey, cellValue, rowIndex) => {
        if (columnKey === "Position") {
            switch (cellValue) {
                case "up": return "#28a745";
                case "down": return "#dc3545";
                case "current": return "#17a2b8"
            }
        }
    }
}
```

```html
<igc-column id="col1">
</igc-column>
```

```ts
constructor() {
    var col1 = document.getElementById('col1') as IgcColumnComponent;
    col1.cellStyles = this.webGridCellStylesHandler;
}
```

<!-- ComponentEnd: Grid -->

### Demo

```typescript
export class AthletesDataItem {
    public constructor(init: Partial<AthletesDataItem>) {
        Object.assign(this, init);
    }

    public Id: number;
    public Avatar: string;
    public Position: string;
    public Name: string;
    public AthleteNumber: number;
    public BeatsPerMinute: number;
    public TopSpeed: number;
    public Registered: string;
    public TrackProgress: number;
    public CountryFlag: string;
    public CountryName: string;

}
export class AthletesData extends Array<AthletesDataItem> {
    public constructor(items: Array<AthletesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AthletesDataItem({ Id: 100, Avatar: `https://dl.infragistics.com/x/img/people/women/20.png`, Position: `current`, Name: `Alexis Walker`, AthleteNumber: 43183, BeatsPerMinute: 103, TopSpeed: 5.8, Registered: `2017-08-07T10:35:06-03:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/GH.png`, CountryName: `Ghana` }),
                new AthletesDataItem({ Id: 101, Avatar: `https://dl.infragistics.com/x/img/people/women/31.png`, Position: `down`, Name: `Lavínia Silva`, AthleteNumber: 33994, BeatsPerMinute: 93, TopSpeed: 5.6, Registered: `2017-03-22T08:55:46-02:00`, TrackProgress: 45, CountryFlag: `https://dl.infragistics.com/x/img/flags/NO.png`, CountryName: `Norway` }),
                new AthletesDataItem({ Id: 105, Avatar: `https://dl.infragistics.com/x/img/people/men/13.png`, Position: `down`, Name: `Samu Hokkanen`, AthleteNumber: 22469, BeatsPerMinute: 106, TopSpeed: 5.5, Registered: `2017-06-29T04:58:27-03:00`, TrackProgress: 25, CountryFlag: `https://dl.infragistics.com/x/img/flags/AZ.png`, CountryName: `Azerbaijan` }),
                // ... 182 more items
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

## Known issues and limitations

- If there are cells bind to the same condition (from different columns) and one cell is updated, the other cells won't be updated based on the new value, if the condition is met.

A check should be performed in order to apply the changes to the rest of the cells. The example below shows how to do that.

```ts
public backgroundClasses = {
    myBackground: (rowData: any, columnKey: string) => {
        return rowData.Col2 < 10;
    }
};

public editDone(evt) {
    this.Col1.cellClasses = {...this.backgroundClasses};
}
```

```html
<igc-grid id="grid1" height="500px" width="100%" >
  <igc-column id="Col1" field="Col1" data-type="number"></igx-column>
  <igc-column id="Col2" field="Col2" data-type="number" editable="true"></igx-column>
  <igc-column id="Col3" field="Col3" header="Col3" data-type="string"></igx-column>
<igc-grid>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid1') as IgcGrid;
    var Col1 = this.Col1 = document.getElementById('Col1') as IgcColumnComponent;
    var Col2 = this.Col2 = document.getElementById('Col2') as IgcColumnComponent;
    var Col3 = this.Col3 = document.getElementById('Col3') as IgcColumnComponent;
    grid.data = this.data;
    grid.onCellEdit = this.editDone;
    Col1.cellClasses = this.backgroundClasses;
    Col2.cellClasses = this.backgroundClasses;
    Col3.cellClasses = this.backgroundClasses;
}
```

<!--ComponentEnd: Grid, HierarchicalGrid, TreeGrid-->

## API References

- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)
- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Virtualization and Performance](virtualization.md)
- [Editing](editing.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Column Hiding](column-hiding.md)
- [Selection](selection.md)
- [Searching](search.md)

<!-- * [Toolbar](toolbar.md) -->

- [Multi-column Headers](multi-column-headers.md)
- [Size](size.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
