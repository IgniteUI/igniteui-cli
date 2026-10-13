---
title: "Web Components Tree Grid Row Adding - Ignite UI for Web Components"
description: Learn how to use and customize the built-in row adding functionality with Web Components and utilize intuitive grid row adding and CRUD capabilities.
keywords: "Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics"
license: commercial
_canonicalLink: "grids/grid/row-adding"
llms:
  description: "The Ignite UI for Web Components Row Adding feature in Web Components Tree Grid enables users to input and submit new data records without navigating to a separate form or page."
_componentKey: TreeGrid
_tocName: Row Adding
_premium: true
---
# Web Components Tree Grid Row Adding

The [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) provides a convenient way to perform data manipulations through inline row adding and a powerful API for Web Components CRUD operations. Add an [`IgcActionStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcActionStripComponent) component with editing actions enabled in the grid's template, hover a row and use the provided button, press <kbd>ALT</kbd> + <kbd>+</kbd> to spawn the row adding UI or <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> to spawn the UI for adding a child for the selected row.

## Web Components Tree Grid Row Adding Example

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
```

## Row Adding Usage

Then define a [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) with bound data source, [`IgcTreeGrid.rowEditable`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=rowEditable) set to true and an [`IgcActionStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcActionStripComponent) component with editing actions enabled. The [`IgcTreeGrid.addRow`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=addRow) input controls the visibility of the button that spawns the row adding UI.

```html
<igc-tree-grid id="treeGrid" primary-key="ID" foreign-key="ParentID" row-editable="true">
    <igc-column field="Name" data-type="string"></igc-column>
    <igc-column field="Title" data-type="string"></igc-column>
    <igc-column field="HireDate" data-type="date"></igc-column>
    <igc-column field="OnPTO" data-type="boolean" width="130px">
    </igc-column>
    <igc-column field="Age" data-type="number"></igc-column>
    <igc-action-strip id="actionstrip">
        <igc-grid-editing-actions add-row="true">
        </igc-grid-editing-actions>
    </igc-action-strip>
</igc-tree-grid>
```

> **Note**:
> Setting primary key is mandatory for row adding operations.

> **Note**:
> Every column excluding the primary key one is editable in the row adding UI by default. If you want to disable editing for a specific column, then you have to set the [`IgcColumn.editable`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=editable) column's input to `false`.

> **Note**:
> The [`IgcGridEditingActions`](mcp:get_api_reference?platform=webcomponents&component=IgcGridEditingActionsComponent) inputs controlling the visibility of the add row and add child buttons may use the action strip context (which is of type [`IgcRowType`](mcp:get_api_reference?platform=webcomponents&component=IgcRowType) to fine tune which records the buttons show for.

The internal `BaseTransactionService` is automatically provided for [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent). It holds pending cell changes until the row state is submitted or cancelled.

## Start Row Adding Programmatically

[`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) allows to programmatically spawn the add row UI by using two different public methods. One that accepts a row ID for specifying the row under which the UI should spawn and another that works by index. You can use these methods to spawn the UI anywhere within the current data view. Changing the page or specifying a row that is e.g. filtered out is not supported.

Using [`IgcTreeGrid.beginAddRowById`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=beginAddRowById) requires you to specify the row to use as context for the operation by its `RowID` (PK). The method then functions as though the end-user clicked on the add row action strip button for the specified row, spawning the UI under it. The second parameter controls if the row is added as a child to the context row or as a sibling. You can also make the UI spawn as the very first row in the grid by passing `null` for the first parameter.

```typescript
this.treeGrid.beginAddRowById('ALFKI', true);   // Spawns the add row UI to add a child for the row with PK 'ALFKI'
this.treeGrid.beginAddRowById(null);            // Spawns the add row UI as the first record
```

The [`IgcTreeGrid.beginAddRowByIndex`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=beginAddRowByIndex) method works similarly but the row to use as context is specified by index.

```typescript
this.treeGrid.beginAddRowByIndex(10, true);   // Spawns the add row UI to add a child for the row at index 10
this.treeGrid.beginAddRowByIndex(null);       // Spawns the add row UI as the first record
```

## Positioning

- The default position of row add UI is below the row that the end user clicked the add row button for.

- The [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) scrolls to fully display the add row UI automatically.

- The overlay for the add row UI maintains its position during scrolling.

## Behavior

The add row UI has the same behavior as the row editing one as they are designed to provide a consistent editing experience to end users. Please, refer to the [Tree Grid Row Editing](row-editing.md) topic for more information.

After a new row is added through the row adding UI, its position and/or visibility is determined by the sorting, filtering and grouping state of the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent). In a [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) that does not have any of these states applied, it appears as the last record. A snackbar is briefly displayed containing a button the end user may use to scroll the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) to its position if it is not in view.

## Keyboard Navigation

- <kbd>ALT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a row

- <kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a child

- <kbd>ESC</kbd> exits row adding mode without submitting any changes

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any row adding operation will stop if the data view of the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) gets modified. Any changes made by the end user are submitted. Operations that change the data view include but are not limited to sorting, grouping, filtering, paging, etc.

- Summaries are updated after the row add operation finishes. The same is valid for the other data view dependant features such as sorting, filtering, etc.

## Customizing Row Adding Overlay

### Customizing Text

Customizing the text of the row adding overlay is possible using the [`IgcGridBaseDirective.rowAddTextTemplate`](mcp:get_api_reference?platform=webcomponents&component=IgcGridBaseDirective&member=rowAddTextTemplate).

```ts
this.grid.rowAddTextTemplate = (ctx: IgcGridEmptyTemplateContext) => {
    return html`Adding Row`;
}
```

### Customizing Buttons

Customizing the buttons of the row editing overlay is possible by using the `RowEditActions` template.

```ts
this.grid.rowEditActionsTemplate = (endRowEdit: IgcGridRowEditActionsTemplateContext) => {
    return html`
        <button @click="${evt => endRowEdit.implicit(false, evt)}">Cancel</button>
        <button @click="${evt => endRowEdit.implicit(true, evt)}">Apply</button>
    `;
}
```

## Styling

The row adding UI comprises the buttons in the [`IgcActionStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcActionStripComponent) editing actions, the editing editors and overlay, as well as the snackbar which allows end users to scroll to the newly added row. To style these components you may refer to these comprehensive guides in their respective topics:

- [Tree Grid Row Editing](row-editing.md#styling)
- [Snackbar](../../notifications/snackbar.md#styling)

## API References
[`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent)
## Additional Resources

- [Tree Grid Editing](editing.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
