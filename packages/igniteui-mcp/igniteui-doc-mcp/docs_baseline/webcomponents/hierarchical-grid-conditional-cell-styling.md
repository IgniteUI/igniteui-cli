---
title: Web Components Hierarchical Grid Conditional Cell Styling - Ignite UI for Web Components
_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in Web Components Hierarchical Grid to make cells stand out.
_keywords: conditional styling, Web Components, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/conditional-cell-styling
_tocName: Conditional Styling
_premium: true
---

# Web Components Hierarchical Grid Conditional Styling

The Ignite UI for Web Components Conditional Styling feature in Web Components Hierarchical Grid allows custom styling on a row or cell level. The [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) Conditional Styling functionality is used to visually emphasize or highlight data that meets certain criteria, making it easier for users to identify important information or trends within the grid.

## Hierarchical Grid Conditional Row Styling

The [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) component in Ignite UI for Web Components provides two ways to **conditional styling of rows** based on custom rules.

- By setting [`rowClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowClasses) input on the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) component;
- By setting [`rowStyles`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowStyles) input on the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) component;

Further in this topic we will cover both of them in more details.

### Using Row Classes

You can conditionally style the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) rows by setting the [`rowClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowClasses) input and define custom rules.

<!-- WebComponents -->

```html
<igc-hierarchical-grid id="grid" height="600px" width="100%">
</igc-hierarchical-grid>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcHierarchicalGrid;
    grid.rowClasses = this.rowClasses;
}
```

The [`rowClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

<!-- WebComponents -->

```ts
public rowClasses = {
    activeRow: (row: IgcRowType) => row.index === 0
}
```

```css
.activeRow {
    border: 2px solid #fc81b8;
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

The [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) control exposes the [`rowStyles`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowStyles) property which allows conditional styling of the data rows. Similar to [`rowClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowClasses) it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).

> The callback signature for both [`rowStyles`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowStyles) and [`rowClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowClasses) is:

<!-- WebComponents -->

```ts
(row: IgcRowType) => boolean
```

Let's define our styles:

<!-- ComponentStart: HierarchicalGrid -->

<!-- WebComponents -->

```typescript
public rowStyles = {
    background:(row: RowType) => row.data['HasGrammyAward'] ? '#eeddd3' : '#f0efeb',
    'border-left': (row: RowType) => row.data['HasGrammyAward'] ? '2px solid #dda15e' : null
};

public childRowStyles = {
    'border-left': (row: RowType) => row.data['BillboardReview'] > 70 ? '3.5px solid #dda15e' : null
};
```

```html
<igc-hierarchical-grid id="hierarchicalGrid" auto-generate="true"
        height="580px" width="100%">
        <igc-row-island id="rowIsland1" child-data-key="Albums" auto-generate="true" >
        </igc-row-island>>
</igc-hierarchical-grid>
```

```ts
constructor() {
    var hierarchicalGrid = this.hierarchicalGrid = document.getElementById('hierarchicalGrid') as IgcHierarchicalGridComponent;
    var rowIsland1 = this.rowIsland1 = document.getElementById('rowIsland1') as IgcRowIslandComponent;
    hierarchicalGrid.rowStyles = this.rowStyles;
    rowIsland1.rowStyles = this.childRowStyles;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Hierarchical Grid Conditional Cell Styling

## Overview

The [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) component in Ignite UI for Web Components provides two ways to **conditional styling of cells** based on custom rules.

- By setting the [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) input [`cellClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#cellClasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.

### Using Cell Classes

You can conditionally style the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) cells by setting the [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) [`cellClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#cellClasses) input and define custom rules.

<!-- ComponentStart: HierarchicalGrid -->

```html
<igc-column id="grammyNominations" field="GrammyNominations" data-type="Number"></igc-column>
```

```ts
constructor() {
    var grammyNominations = document.getElementById('grammyNominations') as IgcColumnComponent;
    grammyNominations.cellClasses = this.grammyNominationsCellClassesHandler;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

The [`cellClasses`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#cellClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

<!-- ComponentStart: HierarchicalGrid -->

<!-- Angular, WebComponents -->

```typescript
public grammyNominationsCellClassesHandler = {
    downFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] < 5,
    upFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] >= 6
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

<!-- ComponentEnd: HierarchicalGrid -->

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.upFont {
    color: green !important;
}

.downFont {
    color: red !important;
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

<!-- WebComponents -->

```ts
public cellStylesHandler = {
    background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
    color: (rowData, columnKey, cellValue, rowIndex) => {
        if (columnKey === "Debut") {
            return cellValue > 2000 ? "#28a745" : "#dc3545";
        }
        return undefined;
    }
}
```

<!-- WebComponents -->

```html
<igc-column id="col1">
</igc-column>
```

```ts
constructor() {
    var col1 = document.getElementById('col1') as IgcColumnComponent;
    col1.cellStyles = this.cellStylesHandler;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Known issues and limitations

- If there are cells bind to the same condition (from different columns) and one cell is updated, the other cells won't be updated based on the new value, if the condition is met.

<!-- Angular, WebComponents -->

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
<igc-hierarchical-grid id="grid1" height="500px" width="100%" >
  <igc-column id="Col1" field="Col1" data-type="number"></igx-column>
  <igc-column id="Col2" field="Col2" data-type="number" editable="true"></igx-column>
  <igc-column id="Col3" field="Col3" header="Col3" data-type="string"></igx-column>
<igc-hierarchical-grid>
```

```ts
constructor() {
    var grid = this.grid = document.getElementById('grid1') as IgcHierarchicalGrid;
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

<!-- end:Angular, WebComponents -->

<!--ComponentEnd: Grid, HierarchicalGrid, TreeGrid-->

## API References

- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)
- [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
