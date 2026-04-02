---
title: Blazor Data Grid | Cell and Row Editing with Batch Updating | Infragistics
_description: Use Infragistics' Blazor grid component which supports the cell and row editing feature that can also be configured to batch update all cells of the grid at any given moment. Learn how Ignite UI for Blazor can help you better display your data!
_keywords: Blazor Table, Data Grid, cell and row editing, Ignite UI for Blazor, batch updating, Infragistics
mentionedTypes: ["Grid", "EditModeType", "TransactionType"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/cell-editing
_tocName: Grid Editing
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor Grid Editing

The Ignite UI for Blazor Data Table / Data Grid supports cell and row editing with batch updating. Note, this is currently limited to non-templated columns.

## Blazor Grid Editing Example

```razor
@using System.Collections.ObjectModel
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">
    <div class="options horizontal">
        <button @onclick="OnCommitClick" disabled="@ButtonsDisabled">Commit</button>
        <button @onclick="OnUndoClick" disabled="@ButtonsDisabled">Undo</button>
        <button @onclick="OnRedoClick" disabled="@ButtonsDisabled">Redo</button>
        <label>
            Edit Mode:
            <select @bind="GridEditMode">
                <option>@EditModeType.None</option>
                <option>@EditModeType.Cell</option>
                <option>@EditModeType.CellBatch</option>
                <option>@EditModeType.Row</option>
            </select>
        </label>
        <label>
            Excel-style Editing
            <select @bind="GridEditModeClickAction">
                <option>@EditModeClickAction.SingleClick</option>
                <option>@EditModeClickAction.DoubleClick</option>
            </select>
        </label>
    </div>
    <div class="container vertical">
        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%" @ref="DataGridRef"
                             EditModeClickAction="@GridEditModeClickAction"
                             DefaultColumnMinWidth="120"
                             AutoGenerateColumns="false"
                             DataSource="Data"
                             EditMode="@GridEditMode"
                             ActivationMode="@GridActivationMode.Cell"
                             SelectionMode="@DataGridSelectionMode.SingleRow"
                             SelectionBehavior="@GridSelectionBehavior.ModifierBased"
                             IsColumnOptionsEnabled="true"
                             RowEditStarted="OnRowEditStarted"
                             RowEditEnded="OnRowEditEnded">
                    <IgbTextColumn Field="Name" Width="@("*>150")" />
                    <IgbTextColumn Field="Street" HeaderText="Street" Width="@("*>160")" />
                    <IgbTextColumn Field="City" HeaderText="City" Width="@("*>120")" />
                    <IgbNumericColumn Field="Salary" HeaderText="Salary" PositivePrefix="$" ShowGroupingSeparator="true" Width="@("*>120")" />
                    <IgbImageColumn IsEditable="false" Field="Photo" HeaderText="Photo" ContentOpacity="1" HorizontalAlignment="@CellContentHorizontalAlignment.Center" Width="@("*>110")" />
                    <IgbDateTimeColumn Field="Birthday" HeaderText="Date of Birth" Width="@("*>170")" />
                    <IgbTemplateColumn Field="ButtonColumn" HeaderText="Delete Row" CellUpdatingScript="onUpdatingTemplateColumn" />
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    public static IgbDataGrid DataGridRef;
    private EditModeClickAction GridEditModeClickAction = EditModeClickAction.SingleClick;
    private EditModeType _editMode;
    public EditModeType GridEditMode
    {
        get { return _editMode; }
        set
        {
            _editMode = value;
            if (_editMode == EditModeType.CellBatch)
            {
                ButtonsDisabled = false;
            }
            else
            {
                ButtonsDisabled = true;
            }
        }
    }

    private bool ButtonsDisabled { get; set; }

    public static ObservableCollection<ObsEmployeeInfo> Data { get; set; }

    protected override void OnInitialized()
    {
        Data = ObsEmployeeData.Create(100, false);
        this.GridEditMode = EditModeType.Cell;
    }

    private void OnCommitClick(MouseEventArgs e)
    {
        DataGridRef.CommitEdits();
        StateHasChanged();

    }

    private void OnUndoClick(MouseEventArgs e)
    {
        DataGridRef.Undo();
        StateHasChanged();

    }

    private void OnRedoClick(MouseEventArgs e)
    {
        DataGridRef.Redo();
        StateHasChanged();

    }

    private void OnRowEditEnded(IgbGridRowEditEndedEventArgs e)
    {
        if (_editMode == EditModeType.CellBatch)
        {
            ButtonsDisabled = false;
        }
        else
        {
            ButtonsDisabled = true;
        }
        StateHasChanged();
    }
    private void OnRowEditStarted(IgbGridRowEditStartedEventArgs e)
    {
        if (_editMode == EditModeType.CellBatch)
        {
            ButtonsDisabled = true;
        }
        else
        {
            ButtonsDisabled = false;
        }
        StateHasChanged();
    }

    [JSInvokable]
    public static void ButtonClickActionAtBlazorLevel(object parameter)
    {
        int param = int.Parse(parameter.ToString());
        var rowItem = DataGridRef.ActualDataSource.GetItemAtIndex(param);
        DataGridRef.RemoveItem(rowItem);
    }
}
```


<div class="divider--half"></div>

## Overview

Editing in the Blazor data grid is configured by using the [`EditMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_EditMode) option of the Blazor grid. This property takes three different options, listed below:

- `None`: Editing is not enabled.
- `Cell`: Allow cells to enter edit mode and commit the value on exiting edit mode.
- `CellBatch`: Allows cells to enter edit mode but changes will be cached later until they are committed.
- `Row`: Allow rows to enter edit mode and commit the value on exit.

When set to `CellBatch`, in order to commit the changes you must perform the `commitEdits` method from the grid. The grid will italicize the cells until they are committed providing control over when to push changes back to the datasource.

In addition, error handling can be performed by hooking the `onCellValueChanging` event and inspecting new values before they are committed. The grid exposes a `setEditError` method that can output an error message. This keeps the cell in edit mode until a valid value is entered. Otherwise the grid's `rejectEdit` method can be performed to revert the invalid value. If no invalid value is found, you can also commit your changes by calling the grid's `acceptEdit` method.

Commits can be approved or declined at the grid level by hooking `onDataCommitting` via the `acceptCommit` or `rejectCommit` methods passing the `commitID` event argument as the parameter. This event also exposes a `changes` collection which stores all the modifications prior to being committed. For example, you can check if a commit was from an add, update, or delete operation via the `TransactionType` property exposed on the `changes` collection and perform an `acceptCommit` or `rejectCommit` when necessary.

## Excel Style Editing

[`EditOnKeyPress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_EditOnKeyPress) enables you to instantly begin editing when typing similar to how Excel behaves. In addition you may set the [`EditModeClickAction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_EditModeClickAction) property to `SingleClick` to allow users to quickly edit cells while navigating to other cells. By default double-clicking is required to enter edit mode.

## Code Snippet

The following demonstrates how to configure editing on the data grid and committing the data.

```razor
<IgbDataGrid Height="100%" Width="100%" @ref="DataGridRef"
    DataSource="DataSource"
    EditMode="EditModeType.CellBatch" />
<button @onclick="OnCommitClick">Commit Data</button>

@code {
    public IgbDataGrid DataGridRef;

    private void OnCommitClick(MouseEventArgs e)
    {
        this.DataGridRef.CommitEdits();
    }
}
```

## Undo/Redo batch changes

The following demonstrates how to revert changes while batch updating is enabled.

```razor
<IgbDataGrid Height="100%" Width="100%" @ref="DataGridRef"
    DataSource="DataSource"
    EditMode="EditModeType.CellBatch" />
<button @onclick="OnUndoClick">Undo</button>
<button @onclick="OnRedoClick">Redo</button>

@code {
    public IgbDataGrid DataGridRef;

    private void OnUndoClick(MouseEventArgs e)
    {
        this.DataGridRef.Undo();
    }

    private void OnRedoClick(MouseEventArgs e)
    {
        this.DataGridRef.Redo();
    }
}
```

## Error Validation and Commit Integrity

The following demonstrates how incorporate error by checking if cells are empty when leaving edit mode and accepts commits that are from updated cells only.

```razor
<IgbDataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    CellValueChanging="OnCellValueChanging"
    DataCommitting="OnDataCommitting">
 </IgbDataGrid>

@code {
    public IgbDataGrid DataGridRef;

    public void OnCellValueChanging(IgbGridCellValueChangingEventArgs e)
    {
        //check if value is empty upon exiting edit mode.
        if (e.NewValue == "")
        {
            this.DataGridRef.SetEditError(e.EditID, "Error, cell is empty");
            //or revert changes
            this.DataGridRef.RejectEdit(e.EditID);
        }
        else
        {
            this.DataGridRef.AcceptEdit(e.EditID);
        }
    }

    public void OnDataCommitting(IgbGridDataCommittingEventArgs e)
    {
        if (e.Changes[0].TransactionType == TransactionType.Update)
        {
            //commit was passed
            this.DataGridRef.AcceptCommit(e.CommitID);
        }
        else
        {
            //commit was prevented
            this.DataGridRef.RejectCommit(e.CommitID);
        }
    }
}
```

## API References

- `CellBatch`
- [`EditModeClickAction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_EditModeClickAction)
- [`EditMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_EditMode)
- `SingleClick`
- `TransactionType`
