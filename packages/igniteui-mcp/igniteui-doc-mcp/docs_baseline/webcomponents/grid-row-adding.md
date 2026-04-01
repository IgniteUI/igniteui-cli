---
title: Web Components Grid Row Adding - Ignite UI for Web Components
_description: Learn how to use and customize the built-in row adding functionality with Web Components and utilize intuitive grid row adding and CRUD capabilities.
_keywords: Web Components, Grid, IgcGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-adding
_tocName: Row Adding
_premium: true
---

# Web Components Grid Row Adding

<!-- ComponentStart: Grid, HierarchicalGrid -->

The Ignite UI for Web Components Row Adding feature in Web Components Grid enables users to input and submit new data records without navigating to a separate form or page. With the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html), users can manipulate data through inline row adding and a powerful API for CRUD operations.
Add an [`IgcActionStrip`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcactionstrip.html) component with editing actions enabled in the grid's template. After that hover a row and use the provided button. Finally press <kbd>ALT</kbd> + <kbd>+</kbd> to spawn the row adding UI.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

## Web Components Grid Row Adding Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Row Adding Usage

Then define a [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) with bound data source, [`rowEditable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowEditable) set to true and an [`IgcActionStrip`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcactionstrip.html) component with editing actions enabled. The [`addRow`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#addRow) input controls the visibility of the button that spawns the row adding UI.

<!-- ComponentStart: Grid -->

<!-- WebComponents -->

```html
<igc-grid id="grid" primary-key="ProductID" auto-generate="false" row-editable="true">
    <igc-column field="ProductID" header="Product ID" data-type="Number"></igc-column>
    <igc-column field="ReorderLevel" header="ReorderLever" data-type="Number"></igc-column>
    <igc-column field="ProductName" header="ProductName" data-type="String"></igc-column>
    <igc-column field="UnitsInStock" header="UnitsInStock" data-type="Number"></igc-column>
    <igc-column field="OrderDate" data-type="Date"></igc-column>
    <igc-column field="Discontinued" header="Discontinued" data-type="Boolean"></igc-column>

    <igc-action-strip id="actionstrip">
        <igc-grid-editing-actions add-row="true"></igc-grid-editing-actions>
    </igc-action-strip>
</igc-grid>
```

<!-- ComponentEnd: Grid -->

<!-- end: WebComponents -->

<!-- ComponentEnd: TreeGrid -->

<!-- WebComponents -->

<!-- end: WebComponents -->

> **Note**:
> Setting primary key is mandatory for row adding operations.

> **Note**:
> Every column excluding the primary key one is editable in the row adding UI by default. If you want to disable editing for a specific column, then you have to set the [`editable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#editable) column's input to `false`.

<!-- ComponentStart: Grid, HierarchicalGrid -->

> **Note**:
> The [`IgcGridEditingActions`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgrideditingactions.html) input controlling the visibility of the add row button may use the action strip context (which is of type [`IgcRowType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowtype.html) to fine tune which records the button shows for.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

The internal `BaseTransactionService` is automatically provided for [`grid`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowtype.html#grid). It holds pending cell changes until the row state is submitted or cancelled.

## Start Row Adding Programmatically

[`grid`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowtype.html#grid) allows to programmatically spawn the add row UI by using two different public methods. One that accepts a row ID for specifying the row under which the UI should spawn and another that works by index. You can use these methods to spawn the UI anywhere within the current data view. Changing the page or specifying a row that is e.g. filtered out is not supported.

<!-- ComponentStart: Grid, HierarchicalGrid -->

Using [`beginAddRowById`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#beginAddRowById) requires you to specify the row to use as context for the operation by its `RowID` (PK). The method then functions as though the end-user clicked on the add row action strip button for the specified row, spawning the UI under it. You can also make the UI spawn as the very first row in the grid by passing `null` for the first parameter.

<!-- WebComponents -->

```typescript
this.grid.beginAddRowById('ALFKI');  // Spawns the add row UI under the row with PK 'ALFKI'
this.grid.beginAddRowById(null);     // Spawns the add row UI as the first record
```

The [`beginAddRowByIndex`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#beginAddRowByIndex) method works similarly but requires you to specify the index at which the UI should spawn. Allowed values range between 0 and the size of the data view - 1.

<!-- WebComponents -->

```typescript
this.grid.beginAddRowByIndex(10);   // Spawns the add row UI at index 10
this.grid.beginAddRowByIndex(0);    // Spawns the add row UI as the first record
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

## Positioning

- The default position of row add UI is below the row that the end user clicked the add row button for.

- The [`grid`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowtype.html#grid) scrolls to fully display the add row UI automatically.

- The overlay for the add row UI maintains its position during scrolling.

## Behavior

The add row UI has the same behavior as the row editing one as they are designed to provide a consistent editing experience to end users. Please, refer to the [Grid Row Editing](row-editing.md) topic for more information.

After a new row is added through the row adding UI, its position and/or visibility is determined by the sorting, filtering and grouping state of the [`grid`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowtype.html#grid). In a [`grid`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowtype.html#grid) that does not have any of these states applied, it appears as the last record. A snackbar is briefly displayed containing a button the end user may use to scroll the [`grid`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowtype.html#grid) to its position if it is not in view.

## Keyboard Navigation

- <kbd>ALT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a row

<!---->

- <kbd>ESC</kbd> exits row adding mode without submitting any changes

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any row adding operation will stop if the data view of the [`grid`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcrowtype.html#grid) gets modified. Any changes made by the end user are submitted. Operations that change the data view include but are not limited to sorting, grouping, filtering, paging, etc.

- Summaries are updated after the row add operation finishes. The same is valid for the other data view dependant features such as sorting, filtering, etc.

## Customizing Row Adding Overlay

### Customizing Text

<!-- WebComponents, React, Blazor -->

Customizing the text of the row adding overlay is possible using the [`rowAddTextTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowAddTextTemplate).

<!-- end: WebComponents, React, Blazor -->

<!-- WebComponents -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```ts
this.grid.rowAddTextTemplate = (ctx: IgcGridEmptyTemplateContext) => {
    return html`Adding Row`;
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: WebComponents -->

## Styling

The row adding UI comprises the buttons in the [`IgcActionStrip`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcactionstrip.html) editing actions, the editing editors and overlay, as well as the snackbar which allows end users to scroll to the newly added row. To style these components you may refer to these comprehensive guides in their respective topics:

- [Grid Row Editing](row-editing.md#styling)
- [Snackbar](../../notifications/snackbar.md#styling)

<!-- - [ActionStrip](../action-strip.md#styling) -->

## API References

- [`rowEditable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowEditable)
- `RowEditEnter`
- `RowEdit`
- `RowEditDone`
- `RowEditCancel`
- [`endEdit`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#endEdit)
- [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey)
- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)

## Additional Resources

- [Grid Editing](editing.md)

<!-- * [Grid Transactions](batch-editing.md) -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
