---
title: Web Components Hierarchical Grid Editing Rows - Ignite UI for Web Components
_description: Want to enable row editing in Web Components Hierarchical Grid? Need a powerful API for CRUD operations? Try our Ignite UI for Web Components Hierarchical Grid rows editing component!
_keywords: Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-editing
_tocName: Row Editing
_premium: true
---

# Web Components Hierarchical Grid Row Editing

The Ignite UI for Web Components Row Editing feature in Web Components Hierarchical Grid allows editing data directly within the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html). On top of this convenient way to manipulate data, there’s a powerful API for full CRUD operations. You can perform grid row editing by clicking on a row and pressing **Enter key**. Another quick way is to double click with the mouse on the row that needs to be modified.

## Web Components Hierarchical Grid Row Editing Example

The following sample demonstrates how to enable row editing in the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html). Changing a cell value and then clicking or navigating to another cell on the same row won't  update the row value until confirmed by using the **Done** button, or discarded by using **Cancel** button.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


> [!Note]
> When a row is in edit mode, clicking on a cell in another row will act like the "Done" button is pressed, submitting all changes made in the previous row. If the newly focused cell is editable, the new row enters edit mode as well. However, if the cell is not editable, only the previous row exits edit mode.

## Row Editing Usage

Define a [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) with bound data source and [`rowEditable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowEditable) set to true:

<!-- ComponentStart: HierarchicalGrid -->

```html
<igc-hierarchical-grid auto-generate="false" name="hierarchicalGrid" id="hierarchicalGrid" id="hierarchicalGrid" primary-key="ID" row-editable="true">
    <igc-column field="Artist" header="Artist" data-type="string"> </igc-column>
    <igc-column field="Photo" header="Photo" data-type="image" editable="false"> </igc-column>
    <igc-column field="Debut" header="Debut" data-type="number"> </igc-column>
    <igc-column field="GrammyNominations" header="Grammy Nominations" data-type="number"> </igc-column>
    <igc-column field="GrammyAwards" header="Grammy Awards" data-type="number"> </igc-column>

    <igc-row-island child-data-key="Albums" auto-generate="false" primary-key="Album" row-editable="true">
        <igc-column field="Album" header="Album" data-type="string"> </igc-column>
        <igc-column field="LaunchDate" header="Launch Date" data-type="date"> </igc-column>
        <igc-column field="BillboardReview" header="Billboard Review" data-type="string"> </igc-column>
        <igc-column field="USBillboard200" header="US Billboard 200" data-type="string"> </igc-column>
        <igc-row-island child-data-key="Songs" auto-generate="false" primary-key="Number" row-editable="true">
            <igc-column field="Number" header="No." data-type="string"> </igc-column>
            <igc-column field="Title" header="Title" data-type="string"> </igc-column>
            <igc-column field="Released" header="Released" data-type="date"> </igc-column>
            <igc-column field="Genre" header="Genre" data-type="string"> </igc-column>
        </igc-row-island>
    </igc-row-island>

    <igc-row-island child-data-key="Tours" auto-generate="false" primary-key="Tour" row-editable="true">
        <igc-column field="Tour" header="Tour" data-type="string"> </igc-column>
        <igc-column field="StartedOn" header="Started on" data-type="string"> </igc-column>
        <igc-column field="Location" header="Location" data-type="string"> </igc-column>
        <igc-column field="Headliner" header="Headliner" data-type="string"> </igc-column>
    </igc-row-island>
</igc-hierarchical-grid>
```

```ts
constructor() {
    var grid  = document.getElementById('hierarchicalGrid') as IgcHierarchicalGridComponent;
    grid.data = this.data;
}
```

<!-- ComponentEnd: HierarchicalGrid -->

> [!Note]
> Setting primary key is mandatory for row editing operations.

> [!Note]
> Enabling editing for individual columns is not necessary. Using the [`rowEditable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowEditable) property in the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html), all rows, with defined [`field`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#field) property (excluding the primary row) will be editable. If you want to disable editing for a specific column, simply set the [`editable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#editable) input of that column to `false`.

> [!Note]
> The [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) utilizes `BaseTransactionService` - an internal provider that holds pending cell changes until the row state is either submitted or cancelled.

## Positioning

- Default position of the overlay will be below the row that is in edit mode

- If there is no space below the row then overlay will appear above the row.

- Once shown - top or bottom, overlay will maintain this position during scrolling, until the overlay is closed.

## Behavior

- If row is in edit mode, then editing will continue, if a cell from the same row is clicked.

- Clicking "Done" button will finish row editing and will submit changes either to the data source, or to a transaction if available. In addition row will exit edit mode.

- Clicking "Cancel" button will revert all current changes in the row and row will exit edit mode.

- If row is in edit mode, then clicking a cell from another row will finish the current row edit and will submit new row changes (the same behavior clicking "Done" button). If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

- If row is in edit mode and [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) is scrolled so that row goes outside the visible area, the latter will be still in edit mode. When [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) is scrolled, so that the row is visible again, the row will be still in edit mode. When clicked outside the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html), the cell will also stay in edit mode.

- When perform **sorting**, **filtering**, **searching** and **hiding** operations, will revert all current changes in the row and row will exit edit mode.

- When perform **paging**, **resizing**, **pinning** and **moving** operations, will exit edit mode and will submit latest value.

- Each modified cell gets edited style until row edit is finished. This is the behavior, when [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) is not provided with transactions. When transactions are available - then cell edit style is applied until all the changes are committed.

## Keyboard Navigation

- <kbd>ENTER</kbd> and <kbd>F2</kbd> enters row edit mode

- <kbd>ESC</kbd> exits row edit mode and doesn't submit any of the cell changes, made while the row was in edit mode.

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any data changing operation will terminate row editing operations and will submit current row changes. This will include operations like sorting, changing grouping and filtering criteria, paging, etc.

- Summaries will be updated after row edit is finished. Same is valid for the other features like sorting, filtering, etc.

## Customizing Row Editing Overlay

### Customizing Text

Customizing the text of the row editing overlay is possible using via templating.

The `RowChangesCount` property is exposed and it holds the count of the changed cells.

```ts
public rowEditTextTemplate = (ctx: IgcGridRowEditTextTemplateContext) => {
    return html`Changes: ${ctx.implicit}`;
}
```

### Customizing Buttons

Customizing the buttons of the row editing overlay also possible via templating.

```ts
public rowEditActionsTemplate = (ctx: IgcGridRowEditActionsTemplateContext) => {
    const endRowEdit = ctx.implicit;
    return html`
        <button @click="${(event) => endRowEdit(false, event)}">Cancel</button>
        <button @click="${(event) => endRowEdit(true, event)}">Apply</button>
    `;
}
```

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```html
<igc-hierarchical-grid class="grid"></igc-hierarchical-grid>
```

Then set the related CSS properties for that class:

```css
.grid {
    --ig-banner-banner-background: #e3e3e3;
    --ig-banner-banner-message-color: #423589;
}
```

<!-- ComponentEnd: TreeGrid -->

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#hierarchicalGrid {
    --ig-banner-banner-background: #e3e3e3;
    --ig-banner-banner-message-color: #423589;
}
```


## Known Issues and Limitations

- When the grid has no [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection

- Row Expand/collapse

- Row Editing

- Row Pinning

## API References

- [`rowEditable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#rowEditable)
- `RowEditEnter`
- `RowEdit`
- `RowEditDone`
- [`endEdit`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#endEdit)
- [`field`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#field)
- [`editable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#editable)
- [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey)
- [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
