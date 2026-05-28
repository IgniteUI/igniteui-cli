---
title: Web Components Hierarchical Grid Editing - Ignite UI for Web Components
_description: Get a powerful public API and an easy way to perform data manipulations like creating, updating, or deleting records. See the Web Components Hierarchical Grid editing options!
_keywords: data manipulation, Web Components, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/editing
_tocName: Editing
---

# Web Components Hierarchical Grid Editing

The Ignite UI for Web Components Cell Editing feature in Web Components Hierarchical Grid provides an easy way to perform data manipulation operations like creating, updating, and deleting records. The [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) provides you with a powerful public API which allows you to customize the way these operations are performed. The data manipulation phases are:

- [Cell Editing](cell-editing.md)
- [Row Editing](row-editing.md)
- Batch Editing (Coming Soon)

## Setup

In order to specify which edit mode should be enabled, the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) exposes the following boolean properties - [`editable`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=editable) and [`rowEditable`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=rowEditable).

The [`editable`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=editable) property enables you to specify the following options:

- **false** - the editing for the corresponding column will be disabled. This is the default value.
- **true** - the editing for the corresponding column will be enabled.

> Keep in mind that if the column is not editable, you can still modify its value through the public API exposed by the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent).

The [`rowEditable`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=rowEditable) property enables you to specify the following options:

- **false** - the row editing in the corresponding grid will be disabled. This is the default value.
- **true** - the row editing in the corresponding grid will be enabled.

In the [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent), if you set [`rowEditable`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=rowEditable) property to true, and the [`editable`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=editable) property is not explicitly defined for any column, the editing will be enabled for all the columns except the **primary key**.

<!--
[Batch editing](batch-editing.md) in the grid can be enabled for both [cell editing](cell-editing.md) and [row editing](row-editing.md) modes. In order to set up batch editing it is necessary to provide to the grid a  **TransactionService**.
-->

- **Cell and Batch Editing** - in this scenario every singe modification of each cell is preserved separately and undo/ redo operations are available on cell level;
- **Row and Batch Editing** - in this scenario the modifications are preserved on row level so undo/ redo operations will not be working for each cell that is modified but for the bunch of cell from each row.

### Editing Templates

If you want to use a data type specific edit templates, you should specify the column's [`dataType`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnComponent&member=dataType) property. So let's now see what are the default templates for each type:

- For `string` data type, default template is using [`IgcInputComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent).
- For `number` data type, default template is using [`IgcInputComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent) type="number", so if you try to update cell to a value which can not be parsed to a number your change is going to be discarded, and the value in the cell will be set to 0.
- For `date` data type, default template is using [`IgcDatePickerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDatePickerComponent)
- For `dateTime` data type, default template is using `DateTimeEditor`. This editor will give you a mask directions for the input elements part of the DateTime object.
- For `time` - data type, default template is using `TimePicker`.
- For `boolean` data type, default template is using [`IgcCheckboxComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCheckboxComponent).
- For `currency` data type, default template is using `InputGroup` with prefix/suffix configuration based on application or grid locale settings.
- For `percent` data type, default template is using `InputGroup` with suffix element that shows a preview of the edited value in percents.

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

All available column data types could be found in the official [Column types topic](column-types.md#default-template).

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Event Arguments and Sequence

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

The grid exposes a wide array of events that provide greater control over the editing experience. These events are fired during the [**Row Editing**](row-editing.md) and [**Cell Editing**](cell-editing.md) lifecycle - when starting, committing or canceling the editing action.

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

| Event           | Description                                                                                                                                               | Arguments                  | Cancellable |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `RowEditEnter`  | If `RowEditing` is enabled, fires when a row enters edit mode                                                                                             | [`IgcGridEditEventArgs`](mcp:get_api_reference?platform=webcomponents&component=IgcGridEditEventArgs)     | **true*-  |
| `CellEditEnter` | Fires when a cell **enters edit mode** (after `RowEditEnter`)                                                                                             | [`IgcGridEditEventArgs`](mcp:get_api_reference?platform=webcomponents&component=IgcGridEditEventArgs)     | **true*-  |
| `CellEdit`      | If value is changed, fires just **before** a cell's value is **committed** (e.g. by pressing <kbd>ENTER</kbd>)                                                     | [`IgcGridEditEventArgs`](mcp:get_api_reference?platform=webcomponents&component=IgcGridEditEventArgs)     | **true*-  |
| `CellEditDone`  | If value is changed, fires **after** a cell has been edited and cell's value is **committed*-                                                           | [`IgcGridEditDoneEventArgs`](mcp:get_api_reference?platform=webcomponents&component=IgcGridEditDoneEventArgs) | **false*- |
| `CellEditExit`  | Fires when a cell **exits edit mode*-                                                                                                                   | [`IgcGridEditDoneEventArgs`](mcp:get_api_reference?platform=webcomponents&component=IgcGridEditDoneEventArgs) | **false*- |
| `RowEdit`       | If `RowEditing` is enabled, fires just before a row in edit mode's value is **committed** (e.g. by clicking the `Done` button on the Row Editing Overlay) | [`IgcGridEditEventArgs`](mcp:get_api_reference?platform=webcomponents&component=IgcGridEditEventArgs)     | **true*-  |
| `RowEditDone`   | If `RowEditing` is enabled, fires **after** a row has been edited and new row's value has been **committed**.                                            | [`IgcGridEditDoneEventArgs`](mcp:get_api_reference?platform=webcomponents&component=IgcGridEditDoneEventArgs) | **false*- |
| `RowEditExit`   | If `RowEditing` is enabled, fires when a row **exits edit mode*-                                                                                        | [`IgcGridEditDoneEventArgs`](mcp:get_api_reference?platform=webcomponents&component=IgcGridEditDoneEventArgs) | **false*- |

### Event Cancellation

- `RowEditEnter` - Neither `Row` nor `Cell` will enter edit mode.
- `CellEditEnter` - Prevents entering cell edit. If [`rowEditable`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=rowEditable) is enabled, row edit will be triggered, although cell edit will remain forbidden.
- `CellEdit` - Allowed `Cell` and/or `Row` edit, hitting **Done** button or **Enter** won't commit the value or row transaction. Cell editing and Row editing won't be closed until **Cancel** button is clicked.
- `RowEdit` - Committing cell is possible, but not the whole row. The row will stay in edit mode and the row transaction will be considered open. Hitting **Done** does not commit or close the row. **Cancel** button closes the editing process and the transaction without committing the changes.

The following sample demonstrates the editing execution sequence in action:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Features integration

While a cell/row is in edit mode, a user may interact with the grid in many ways. The following table specifies how a certain interaction affects the current editing:

| Hierarchical Grid | Filtering | Sorting | Paging | Moving | Pinning | Hiding | GroupBy | Resizing | Escape | Enter |  F2   |  Tab  | Cell Click | Add new row/Delete/Edit |
| ---------------- | :-------: | :-----: | :----: | :----: | :-----: | :----: | :-----: | :------: | :----: | :---: | :---: | :---: | :--------: | :---------------------: |
| Keep edit mode   |           |         |        |        |         |        |         |    ✔     |        |       |       |       |            |                         |
| Exit edit mode   |     ✔     |    ✔    |   ✔    |   ✔    |    ✔    |   ✔    |    ✔    |          |   ✔    |   ✔   |   ✔   |   ✔   |     ✔      |            ✔            |
| Commit           |           |         |        |        |         |        |         |          |        |   ✔   |   ✔   |   ✔   |     ✔      |            ✔            |
| Discard          |     ✔     |    ✔    |   ✔    |   ✔    |    ✔    |   ✔    |    ✔    |          |   ✔    |       |       |       |            |                         |

As seen from the table, all interactions, except resizing a column, will end the editing and will discard the new values. Should the new value be committed, this can be done by the developer in the corresponding feature "-ing" event.

Example how to commit new values, if user tries to sort the column while a cell/row is in edit mode:

```html
<igc-hierarchical-grid id="grid" primary-key="ProductID" >
</igc-hierarchical-grid>
```

```typescript
constructor() {
    var grid = this.grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    grid.data = this.data;
    grid.addEventListener("sorting", this.onSorting);
}

public onSorting(event: IgcSortingEventArgs) {
    var grid = document.getElementById('grid') as IgcHierarchicalGridComponent;
    grid.endEdit(true);
}
```

## API References

- [`IgcHierarchicalGridComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)

## Additional Resources

- [Column Data Types](column-types.md#default-template)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentStart: HierarchicalGrid -->

<!-- * [Searching](search.md) -->

<!-- ComponentEnd: HierarchicalGrid -->
