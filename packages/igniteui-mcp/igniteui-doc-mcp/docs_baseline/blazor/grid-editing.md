---
title: Blazor Grid Editing - Ignite UI for Blazor
_description: Get a powerful public API and an easy way to perform data manipulations like creating, updating, or deleting records. See the Blazor Grid editing options!
_keywords: data manipulation, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/editing
_tocName: Editing
---

# Blazor Grid Editing

The Ignite UI for Blazor Cell Editing feature in Blazor Grid provides an easy way to perform data manipulation operations like creating, updating, and deleting records. The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) provides you with a powerful public API which allows you to customize the way these operations are performed. The data manipulation phases are:

- [Cell Editing](cell-editing.md)
- [Row Editing](row-editing.md)
- Batch Editing (Coming Soon)

## Setup

In order to specify which edit mode should be enabled, the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) exposes the following boolean properties - [`Editable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Editable) and [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable).

The [`Editable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Editable) property enables you to specify the following options:

- **false** - the editing for the corresponding column will be disabled. This is the default value.
- **true** - the editing for the corresponding column will be enabled.

> Keep in mind that if the column is not editable, you can still modify its value through the public API exposed by the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

The [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable) property enables you to specify the following options:

- **false** - the row editing in the corresponding grid will be disabled. This is the default value.
- **true** - the row editing in the corresponding grid will be enabled.

In the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html), if you set [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable) property to true, and the [`Editable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Editable) property is not explicitly defined for any column, the editing will be enabled for all the columns except the **primary key**.

<!--
[Batch editing](batch-editing.md) in the grid can be enabled for both [cell editing](cell-editing.md) and [row editing](row-editing.md) modes. In order to set up batch editing it is necessary to provide to the grid a  **TransactionService**.
-->

- **Cell and Batch Editing** - in this scenario every singe modification of each cell is preserved separately and undo/ redo operations are available on cell level;
- **Row and Batch Editing** - in this scenario the modifications are preserved on row level so undo/ redo operations will not be working for each cell that is modified but for the bunch of cell from each row.

### Editing Templates

If you want to use a data type specific edit templates, you should specify the column's [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType) property. So let's now see what are the default templates for each type:

- For `string` data type, default template is using [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html).
- For `number` data type, default template is using [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html) type="number", so if you try to update cell to a value which can not be parsed to a number your change is going to be discarded, and the value in the cell will be set to 0.
- For `date` data type, default template is using [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html)
- For `dateTime` data type, default template is using `DateTimeEditor`. This editor will give you a mask directions for the input elements part of the DateTime object.
- For `time` - data type, default template is using `TimePicker`.
- For `boolean` data type, default template is using [`IgbCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckbox.html).
- For `currency` data type, default template is using `InputGroup` with prefix/suffix configuration based on application or grid locale settings.
- For `percent` data type, default template is using `InputGroup` with suffix element that shows a preview of the edited value in percents.

 <!-- ComponentStart: Grid -->

- For custom templates you can see [Cell Editing topic](cell-editing.md#blazor-grid-cell-editing-and-edit-templates-example)

 <!-- ComponentEnd: Grid -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

All available column data types could be found in the official [Column types topic](column-types.md#default-template).

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

### Event Arguments and Sequence

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

The grid exposes a wide array of events that provide greater control over the editing experience. These events are fired during the [**Row Editing**](row-editing.md) and [**Cell Editing**](cell-editing.md) lifecycle - when starting, committing or canceling the editing action.

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

| Event           | Description                                                                                                                                               | Arguments                  | Cancellable |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `RowEditEnter`  | If `RowEditing` is enabled, fires when a row enters edit mode                                                                                             | [`IgbGridEditEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridEditEventArgs.html)     | **true*-  |
| `CellEditEnter` | Fires when a cell **enters edit mode** (after `RowEditEnter`)                                                                                             | [`IgbGridEditEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridEditEventArgs.html)     | **true*-  |
| `CellEdit`      | If value is changed, fires just **before** a cell's value is **committed** (e.g. by pressing <kbd>ENTER</kbd>)                                                     | [`IgbGridEditEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridEditEventArgs.html)     | **true*-  |
| `CellEditDone`  | If value is changed, fires **after** a cell has been edited and cell's value is **committed*-                                                           | [`IgbGridEditDoneEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridEditDoneEventArgs.html) | **false*- |
| `CellEditExit`  | Fires when a cell **exits edit mode*-                                                                                                                   | [`IgbGridEditDoneEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridEditDoneEventArgs.html) | **false*- |
| `RowEdit`       | If `RowEditing` is enabled, fires just before a row in edit mode's value is **committed** (e.g. by clicking the `Done` button on the Row Editing Overlay) | [`IgbGridEditEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridEditEventArgs.html)     | **true*-  |
| `RowEditDone`   | If `RowEditing` is enabled, fires **after** a row has been edited and new row's value has been **committed**.                                            | [`IgbGridEditDoneEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridEditDoneEventArgs.html) | **false*- |
| `RowEditExit`   | If `RowEditing` is enabled, fires when a row **exits edit mode*-                                                                                        | [`IgbGridEditDoneEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridEditDoneEventArgs.html) | **false*- |

### Event Cancellation

- `RowEditEnter` - Neither `Row` nor `Cell` will enter edit mode.
- `CellEditEnter` - Prevents entering cell edit. If [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable) is enabled, row edit will be triggered, although cell edit will remain forbidden.
- `CellEdit` - Allowed `Cell` and/or `Row` edit, hitting **Done** button or **Enter** won't commit the value or row transaction. Cell editing and Row editing won't be closed until **Cancel** button is clicked.
- `RowEdit` - Committing cell is possible, but not the whole row. The row will stay in edit mode and the row transaction will be considered open. Hitting **Done** does not commit or close the row. **Cancel** button closes the editing process and the transaction without committing the changes.

The following sample demonstrates the editing execution sequence in action:

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="NwindData"
        Name="grid"
        @ref="grid"
        Id="grid"
        RowEditable="true"
        PrimaryKey="ProductID"
        RenderedScript="WebGridRendered"
        RowEditEnterScript="WebGridRowEditEnter"
        RowEditScript="WebGridRowEdit"
        RowEditDoneScript="WebGridRowEditDone"
        RowEditExitScript="WebGridRowEditExit"
        CellEditEnterScript="WebGridCellEditEnter"
        CellEditScript="WebGridCellEdit"
        CellEditDoneScript="WebGridCellEditDone"
        CellEditExitScript="WebGridCellEditExit">
            <IgbColumn
            Field="ProductName"
            Header="Product Name">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units In Stock">
            </IgbColumn>

            <IgbColumn
            Field="Ordered">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbGrid grid;

    private NwindData _nwindData = null;
    public NwindData NwindData
    {
        get
        {
            if (_nwindData == null)
            {
                _nwindData = new NwindData();
            }
            return _nwindData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class NwindDataItem
{
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double SupplierID { get; set; }
    public double CategoryID { get; set; }
    public string QuantityPerUnit { get; set; }
    public double UnitPrice { get; set; }
    public double UnitsInStock { get; set; }
    public double UnitsOnOrder { get; set; }
    public double ReorderLevel { get; set; }
    public bool Discontinued { get; set; }
    public string OrderDate { get; set; }
    public double Rating { get; set; }
    public List<NwindDataItem_LocationsItem> Locations { get; set; }
}
public class NwindDataItem_LocationsItem
{
    public string Shop { get; set; }
    public string LastInventory { get; set; }
}

public class NwindData
    : List<NwindDataItem>
{
    public NwindData()
    {
        this.Add(new NwindDataItem() { ProductID = 1, ProductName = @"Chai", SupplierID = 1, CategoryID = 1, QuantityPerUnit = @"10 boxes x 20 bags", UnitPrice = 18, UnitsInStock = 39, UnitsOnOrder = 30, ReorderLevel = 10, Discontinued = false, OrderDate = @"2012-02-12", Rating = 5, Locations = new List<NwindDataItem_LocationsItem>()
        {
            new NwindDataItem_LocationsItem() { Shop = @"Fun-Tasty Co.", LastInventory = @"2018-06-12" },
            new NwindDataItem_LocationsItem() { Shop = @"Farmer Market", LastInventory = @"2018-04-04" }}
            new NwindDataItem_LocationsItem() { Shop = @"Super Market", LastInventory = @"2018-09-09" }}
            // ... 3 more items
    }
}
```


### Features integration

While a cell/row is in edit mode, a user may interact with the grid in many ways. The following table specifies how a certain interaction affects the current editing:

| Grid | Filtering | Sorting | Paging | Moving | Pinning | Hiding | GroupBy | Resizing | Escape | Enter |  F2   |  Tab  | Cell Click | Add new row/Delete/Edit |
| ---------------- | :-------: | :-----: | :----: | :----: | :-----: | :----: | :-----: | :------: | :----: | :---: | :---: | :---: | :--------: | :---------------------: |
| Keep edit mode   |           |         |        |        |         |        |         |    ✔     |        |       |       |       |            |                         |
| Exit edit mode   |     ✔     |    ✔    |   ✔    |   ✔    |    ✔    |   ✔    |    ✔    |          |   ✔    |   ✔   |   ✔   |   ✔   |     ✔      |            ✔            |
| Commit           |           |         |        |        |         |        |         |          |        |   ✔   |   ✔   |   ✔   |     ✔      |            ✔            |
| Discard          |     ✔     |    ✔    |   ✔    |   ✔    |    ✔    |   ✔    |    ✔    |          |   ✔    |       |       |       |            |                         |

As seen from the table, all interactions, except resizing a column, will end the editing and will discard the new values. Should the new value be committed, this can be done by the developer in the corresponding feature "-ing" event.

Example how to commit new values, if user tries to sort the column while a cell/row is in edit mode:

```razor
<IgbGrid
    Id="grid"
    SortingScript="SortingHandler"
    RowEditable="true">
</IgbGrid>

//In JavaScript
function SortingHandler() {
    grid.endEdit(true);
}
igRegisterScript("SortingHandler", SortingHandler, false);
```

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

## Additional Resources

<!-- Blazor -->

<!-- ComponentStart: Grid -->

- [Column Data Types](column-types.md#default-template)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
- [Searching](search.md)

<!-- ComponentEnd: Grid -->

<!-- end: Blazor -->
