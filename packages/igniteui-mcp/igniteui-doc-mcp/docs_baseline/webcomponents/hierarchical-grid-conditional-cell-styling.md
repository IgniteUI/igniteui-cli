---
title: "Web Components Hierarchical Grid Conditional Cell Styling - Ignite UI for Web Components"
description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in Web Components Hierarchical Grid to make cells stand out.
keywords: conditional styling, Web Components, Ignite UI for Web Components, Infragistics
license: commercial
_canonicalLink: "grids/grid/conditional-cell-styling"
llms:
  description: "The Ignite UI for Web Components Conditional Styling feature in Web Components Hierarchical Grid allows custom styling on a row or cell level."
_componentKey: HierarchicalGrid
_tocName: Conditional Styling
_premium: true
---
# Web Components Hierarchical Grid Conditional Styling

The Ignite UI for Web Components Conditional Styling feature in Web Components Hierarchical Grid allows custom styling on a row or cell level.  The [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) Conditional Styling functionality is used to visually emphasize or highlight data that meets certain criteria, making it easier for users to identify important information or trends within the grid.

## Hierarchical Grid Conditional Row Styling

The [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) component in Ignite UI for Web Components provides two ways to **conditional styling of rows** based on custom rules.

- By setting [`IgcHierarchicalGrid.rowClasses`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=rowClasses) input on the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) component;
- By setting [`IgcHierarchicalGrid.rowStyles`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=rowStyles) input on the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) component;

Further in this topic we will cover both of them in more details.

### Using Row Classes

You can conditionally style the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) rows by setting the [`IgcHierarchicalGrid.rowClasses`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=rowClasses) input and define custom rules.

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

The [`IgcHierarchicalGrid.rowClasses`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=rowClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

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

The [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) control exposes the [`IgcHierarchicalGrid.rowStyles`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=rowStyles) property which allows conditional styling of the data rows. Similar to [`IgcHierarchicalGrid.rowClasses`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=rowClasses) it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).

> The callback signature for both [`IgcHierarchicalGrid.rowStyles`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=rowStyles) and [`IgcHierarchicalGrid.rowClasses`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=rowClasses) is:

```ts
(row: IgcRowType) => boolean
```

Let's define our styles:

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
        </igc-row-island>
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

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Hierarchical Grid Conditional Cell Styling

## Overview

The [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) component in Ignite UI for Web Components provides two ways to **conditional styling of cells** based on custom rules.

- By setting the [`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent) input [`IgcColumn.cellClasses`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=cellClasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.

### Using Cell Classes
You can conditionally style the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) cells by setting the [`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent) [`IgcColumn.cellClasses`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=cellClasses) input and define custom rules.

```html
<igc-column id="grammyNominations" field="GrammyNominations" data-type="number"></igc-column>
```

```ts
constructor() {
    var grammyNominations = document.getElementById('grammyNominations') as IgcColumnComponent;
    grammyNominations.cellClasses = this.grammyNominationsCellClassesHandler;
}
```

The [`IgcColumn.cellClasses`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=cellClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.

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

- By using the [`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent) input [`IgcColumn.cellStyles`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=cellStyles)` which accepts an object literal where the keys are style properties and the values are expressions for evaluation.

> The callback signature for both `cellStyles` and `cellClasses` is now changed to:

### Using Cell Styles

Columns expose the [`CellStyles`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=cellStyles) property which allows conditional styling of the column cells. Similar to [`IgcColumn.cellClasses`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=cellClasses) it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling with ease (without any conditions).

Let's define our styles:

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

### Demo

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
<igc-hierarchical-grid id="grid1" height="500px" width="100%" >
  <igc-column id="Col1" field="Col1" data-type="number"></igc-column>
  <igc-column id="Col2" field="Col2" data-type="number" editable="true"></igc-column>
  <igc-column id="Col3" field="Col3" header="Col3" data-type="string"></igc-column>
</igc-hierarchical-grid>
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

## API References

[`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)<br />
[`IgcColumn`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent)<br />

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
