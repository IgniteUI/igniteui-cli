---
title: "Blazor Tree Grid Editing - Ignite UI for Blazor"
description: Get a powerful public API and an easy way to perform data manipulations like creating, updating, or deleting records. See the Blazor Tree Grid editing options!
keywords: data manipulation, Blazor, Ignite UI for Blazor, Infragistics
license: commercial
_canonicalLink: "grids/grid/editing"
llms:
  description: "The Ignite UI for Blazor Cell Editing feature in Blazor Tree Grid provides an easy way to perform data manipulation operations like creating, updating, and deleting records."
_componentKey: TreeGrid
_tocName: Editing
---
# Blazor Tree Grid Editing

The Ignite UI for Blazor Cell Editing feature in Blazor Tree Grid provides an easy way to perform data manipulation operations like creating, updating, and deleting records. The [`IgbTreeGrid`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid) provides you with a powerful public API which allows you to customize the way these operations are performed. The data manipulation phases are:
- [Cell Editing](cell-editing.md)
- [Row Editing](row-editing.md)
- Batch Editing (Coming Soon)

## Setup

In order to specify which edit mode should be enabled, the [`IgbTreeGrid`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid) exposes the following boolean properties - [`IgbColumn.editable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=editable) and [`IgbTreeGrid.rowEditable`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=rowEditable).

The [`IgbColumn.editable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=editable) property enables you to specify the following options:

- **false** - the editing for the corresponding column will be disabled. This is the default value.
- **true** - the editing for the corresponding column will be enabled.

>Keep in mind that if the column is not editable, you can still modify its value through the public API exposed by the [`IgbTreeGrid`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid).

The [`IgbTreeGrid.rowEditable`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=rowEditable) property enables you to specify the following options:

- **false** - the row editing in the corresponding grid will be disabled. This is the default value.
- **true** - the row editing in the corresponding grid will be enabled.

In the [`IgbTreeGrid`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid), if you set [`IgbTreeGrid.rowEditable`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=rowEditable) property to true, and the [`IgbColumn.editable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=editable) property is not explicitly defined for any column, the editing will be enabled for all the columns except the **primary key**.

[Batch editing](batch-editing.md) in the grid can be enabled for both [cell editing](cell-editing.md) and [row editing](row-editing.md) modes. In order to set up batch editing it is necessary to provide to the grid a  **TransactionService**.

- **Cell and Batch Editing** - in this scenario every singe modification of each cell is preserved separately and undo/ redo operations are available on cell level;
- **Row and Batch Editing** - in this scenario the modifications are preserved on row level so undo/ redo operations will not be working for each cell that is modified but for the bunch of cell from each row.

### Editing Templates

 If you want to use a data type specific edit templates, you should specify the column's [`IgbColumn.dataType`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=dataType) property. So let's now see what are the default templates for each type:

- For `string` data type, default template is using [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput).
- For `number` data type, default template is using [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput) type="number", so if you try to update cell to a value which can not be parsed to a number your change is going to be discarded, and the value in the cell will be set to 0.
- For `date` data type, default template is using [`IgbDatePicker`](mcp:get_api_reference?platform=blazor&component=IgbDatePicker)
- For `dateTime` data type, default template is using [`IgbDatePicker`](mcp:get_api_reference?platform=blazor&component=IgbDatePicker). This editor will give you a mask directions for the input elements part of the DateTime object.
- For `time` - data type, default template is using [`IgbDateTimeInput`](mcp:get_api_reference?platform=blazor&component=IgbDateTimeInput).
- For `boolean` data type, default template is using [`IgbCheckbox`](mcp:get_api_reference?platform=blazor&component=IgbCheckbox).
- For `currency` data type, default template is using [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput) with prefix/suffix configuration based on application or grid locale settings.
- For `percent` data type, default template is using [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput) with suffix element that shows a preview of the edited value in percents.

All available column data types could be found in the official [Column types topic](column-types.md#default-template).

### Event Arguments and Sequence

The grid exposes a wide array of events that provide greater control over the editing experience. These events are fired during the [**Row Editing**](row-editing.md) and [**Cell Editing**](cell-editing.md) lifecycle - when starting, committing or canceling the editing action.

 | Event           | Description                                                                                                                                               | Arguments                  | Cancellable |
 | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
 | [`IgbTreeGrid.rowEditEnter`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=rowEditEnter)  | If `RowEditing` is enabled, fires when a row enters edit mode                                                                                             | [`IgbGridEditEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbGridEditEventArgs)    | **true**    |
 | [`IgbTreeGrid.cellEditEnter`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=cellEditEnter) | Fires when a cell **enters edit mode** (after [`IgbTreeGrid.rowEditEnter`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=rowEditEnter))                                                                                             | [`IgbGridEditEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbGridEditEventArgs)     | **true**    |
 | [`IgbTreeGrid.cellEdit`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=cellEdit)      | If value is changed, fires just **before** a cell's value is **committed** (e.g. by pressing <kbd>ENTER</kbd>)                                                     | [`IgbGridEditEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbGridEditEventArgs)     | **true**    |
 | [`IgbTreeGrid.cellEditDone`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=cellEditDone)  | If value is changed, fires **after** a cell has been edited and cell's value is **committed**                                                             | [`IgbGridEditDoneEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbGridEditDoneEventArgs) | **false**   |
 | [`IgbTreeGrid.cellEditExit`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=cellEditExit)  | Fires when a cell **exits edit mode**                                                                                                                     | [`IgbGridEditDoneEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbGridEditDoneEventArgs) | **false**   |
 | [`IgbTreeGrid.rowEdit`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=rowEdit)       | If `RowEditing` is enabled, fires just before a row in edit mode's value is **committed** (e.g. by clicking the `Done` button on the Row Editing Overlay) | [`IgbGridEditEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbGridEditEventArgs)     | **true**    |
 | [`IgbTreeGrid.rowEditDone`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=rowEditDone)   | If `RowEditing` is enabled, fires **after** a row has been edited and new row's value has been **committed**.                                             | [`IgbGridEditDoneEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbGridEditDoneEventArgs) | **false**   |
 | [`IgbTreeGrid.rowEditExit`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=rowEditExit)   | If `RowEditing` is enabled, fires when a row **exits edit mode**                                                                                          | [`IgbGridEditDoneEventArgs`](mcp:get_api_reference?platform=blazor&component=IgbGridEditDoneEventArgs) | **false**   |

### Event Cancellation

- [`IgbTreeGrid.rowEditEnter`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=rowEditEnter) - Neither `Row` nor `Cell` will enter edit mode.
- [`IgbTreeGrid.cellEditEnter`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=cellEditEnter) - Prevents entering cell edit. If [`IgbTreeGrid.rowEditable`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=rowEditable) is enabled, row edit will be triggered, although cell edit will remain forbidden.
- [`IgbTreeGrid.cellEdit`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=cellEdit) - Allowed `Cell` and/or `Row` edit, hitting **Done** button or **Enter** won't commit the value or row transaction. Cell editing and Row editing won't be closed until **Cancel** button is clicked.
- [`IgbTreeGrid.rowEdit`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid&member=rowEdit) - Committing cell is possible, but not the whole row. The row will stay in edit mode and the row transaction will be considered open. Hitting **Done** does not commit or close the row. **Cancel** button closes the editing process and the transaction without committing the changes.

The following sample demonstrates the editing execution sequence in action:

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Data="EmployeesFlatData"
        Name="grid"
        @ref="grid"
        Id="grid"
        RowEditable="true"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        RenderedScript="WebTreeGridRendered"
        RowEditEnterScript="WebGridRowEditEnter"
        RowEditScript="WebGridRowEdit"
        RowEditDoneScript="WebGridRowEditDone"
        RowEditExitScript="WebGridRowEditExit"
        CellEditEnterScript="WebGridCellEditEnter"
        CellEditScript="WebGridCellEdit"
        CellEditDoneScript="WebGridCellEditDone"
        CellEditExitScript="WebGridCellEditExit">
            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            Header="Job Title"
            DataType="GridColumnDataType.String"
            Editable="true">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            Editable="true">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbTreeGrid grid;

    private EmployeesFlatData _employeesFlatData = null;
    public EmployeesFlatData EmployeesFlatData
    {
        get
        {
            if (_employeesFlatData == null)
            {
                _employeesFlatData = new EmployeesFlatData();
            }
            return _employeesFlatData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatDataItem
{
    public double Age { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public bool OnPTO { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesFlatData
    : List<EmployeesFlatDataItem>
{
    public EmployeesFlatData()
    {
        this.Add(new EmployeesFlatDataItem() { Age = 55, HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", Phone = @"0251-031259", OnPTO = false, ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesFlatDataItem() { Age = 42, HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", Phone = @"(21) 555-0091", OnPTO = true, ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesFlatDataItem() { Age = 49, HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", Phone = @"(071) 23 67 22 20", OnPTO = true, ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```

### Features integration
While a cell/row is in edit mode, a user may interact with the grid in many ways. The following table specifies how a certain interaction affects the current editing:

| Tree Grid | Filtering | Sorting | Paging | Moving | Pinning | Hiding | GroupBy | Resizing | Escape | Enter |  F2   |  Tab  | Cell Click | Add new row/Delete/Edit |
| ---------------- | :-------: | :-----: | :----: | :----: | :-----: | :----: | :-----: | :------: | :----: | :---: | :---: | :---: | :--------: | :---------------------: |
| Keep edit mode   |           |         |        |        |         |        |         |    ✔     |        |       |       |       |            |                         |
| Exit edit mode   |     ✔     |    ✔    |   ✔    |   ✔    |    ✔    |   ✔    |    ✔    |          |   ✔    |   ✔   |   ✔   |   ✔   |     ✔      |            ✔            |
| Commit           |           |         |        |        |         |        |         |          |        |   ✔   |   ✔   |   ✔   |     ✔      |            ✔            |
| Discard          |     ✔     |    ✔    |   ✔    |   ✔    |    ✔    |   ✔    |    ✔    |          |   ✔    |       |       |       |            |                         |

As seen from the table, all interactions, except resizing a column, will end the editing and will discard the new values. Should the new value be committed, this can be done by the developer in the corresponding feature "-ing" event.

Example how to commit new values, if user tries to sort the column while a cell/row is in edit mode:

```razor
<IgbTreeGrid
    Id="grid"
    SortingScript="SortingHandler"
    RowEditable="true">
</IgbTreeGrid>
```

```javascript
//In JavaScript
function SortingHandler() {
    grid.endEdit(true);
}
igRegisterScript("SortingHandler", SortingHandler, false);

```

## API References
[`IgbTreeGrid`](mcp:get_api_reference?platform=blazor&component=IgbTreeGrid)
[`IgbColumn`](mcp:get_api_reference?platform=blazor&component=IgbColumn)
## Additional Resources
