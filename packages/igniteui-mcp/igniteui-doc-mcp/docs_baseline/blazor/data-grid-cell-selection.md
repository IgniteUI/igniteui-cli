---
title: Blazor Data Grid | Cell Selection | Selection | Infragistics
_description: Use cell and row selection of the Infragistics' Blazor data grid to highlight areas of the table. Learn how to configure single or multiple row selection for the Ignite UI for Blazor table.
_keywords: Blazor Table, Data Grid, cell selection, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "DataGridSelectionMode"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/cell-selection
_tocName: Cell Selection
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor Grid Selection

The Ignite UI for Blazor Data Table / Data Grid supports single or multiple row and cell selection.

## Blazor Grid Selection Example

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">
    <div class="options horizontal">
        <span>Selection Mode:</span>
        <select @bind="SelectionMode">
            <option>@DataGridSelectionMode.None</option>
            <option>@DataGridSelectionMode.SingleCell</option>
            <option>@DataGridSelectionMode.SingleRow</option>
            <option>@DataGridSelectionMode.MultipleRow</option>
            <option>@DataGridSelectionMode.MultipleCell</option>
            <option>@DataGridSelectionMode.RangeCell</option>
        </select>
    </div>
    <div class="container vertical">
        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      DefaultColumnMinWidth="100"
                      AutoGenerateColumns="false"
                      DataSource="Data"
                      SelectionMode="@SelectionMode"
                      IsColumnOptionsEnabled="true"                      >
                    <IgbTextColumn Field="Name" Width="@("*>150")" />
                    <IgbTextColumn Field="Street" HeaderText="Street" Width="@("*>160")"/>
                    <IgbTextColumn Field="City" HeaderText="City" Width="@("*>120")"/>
                    <IgbNumericColumn Field="Salary" HeaderText="Salary" PositivePrefix="$" ShowGroupingSeparator="true" Width="@("*>120")"/>
                    <IgbImageColumn IsEditable="false" Field="Photo" HeaderText="Photo" ContentOpacity="1" HorizontalAlignment="@CellContentHorizontalAlignment.Center" Width="@("*>110")"/>
                    <IgbDateTimeColumn Field="Birthday" HeaderText="Date of Birth" Width="@("*>170")"/>
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    private DataGridSelectionMode SelectionMode;
    private List<Employee> Data;

    protected override void OnInitialized()
    {
        this.SelectionMode = DataGridSelectionMode.MultipleRow;

        Data = EmployeeData.Create(100, false);
    }
}
```


<div class="divider--half"></div>

## Overview

Selection in the Blazor data grid is enabled on a row and cell level and can be configured by using the [`SelectionMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_SelectionMode) option of the Blazor grid. This property takes five different options, listed below:

- `None`: Selection is not enabled.
- `SingleCell`: Selection of a single cell is enabled.
- `SingleRow`: Selection of a single row is enabled.
- `MultipleCell`: Selection of multiple cells is enabled.
- `MultipleRow`: Selection of multiple rows is enabled.
- `RangeCell`: Selection of a range of multiple cells by clicking and dragging is enabled.

[`SelectionBehavior`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_SelectionBehavior) defaults to `ModifierBased`, where only one row or cell is selected at a time and modifier keys (CTRL) are required to multi-select items. [`SelectionBehavior`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_SelectionBehavior) set to `Toggle` will allow multiple rows or cells to be selected on single click only.

`MultipleRow` includes the following functionality:

- Click and drag to select rows
- <kbd>SHIFT</kbd> and click to select multiple rows.
- <kbd>SHIFT</kbd> and press the <kbd>↑</kbd> + <kbd>↓</kbd> arrow keys to select multiple rows.

Pressing the space bar toggles selection of active row via `MultipleRow` or `SingleRow`.

## Row Range Selection

The following example demonstrates how to selected or deselected all rows in the grid. Note, [`SelectionMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_SelectionMode) must be set to MultipleRow.

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">
    <div class="options horizontal">
        <button @onclick="OnSelectAllRowsClick">Select All Rows</button>
        <button @onclick="OnDeselectAllRowsClick" >Deselect All Rows</button>
    </div>
    <div class="container vertical">
        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      @ref="DataGridRef"
                      DefaultColumnMinWidth="100"
                      AutoGenerateColumns="false"
                      DataSource="Data"
                      SelectionMode="DataGridSelectionMode.MultipleRow"
                      IsColumnOptionsEnabled="true">
                    <IgbTextColumn Field="Name" Width="@("*>150")" />
                    <IgbTextColumn Field="Street" HeaderText="Street" Width="@("*>160")"/>
                    <IgbTextColumn Field="City" HeaderText="City" Width="@("*>120")"/>
                    <IgbNumericColumn Field="Salary" HeaderText="Salary" PositivePrefix="$" ShowGroupingSeparator="true" Width="@("*>120")"/>
                    <IgbImageColumn IsEditable="false" Field="Photo" HeaderText="Photo" ContentOpacity="1" HorizontalAlignment="@CellContentHorizontalAlignment.Center" Width="@("*>110")"/>
                    <IgbDateTimeColumn Field="Birthday" HeaderText="Date of Birth" Width="@("*>170")"/>
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    private IgbDataGrid DataGridRef;
    private List<Employee> Data;

    protected override void OnInitialized()
    {
        Data = EmployeeData.Create(100, false);
    }

    private void OnSelectAllRowsClick(MouseEventArgs e)
    {
        this.DataGridRef.SelectAllRows();
    }

    private void OnDeselectAllRowsClick(MouseEventArgs e)
    {
        this.DataGridRef.DeselectAllRows();
    }
}
```


<div class="divider--half"></div>

## API References

- `ModifierBased`
- `MultipleCell`
- `MultipleRow`
- `RangeCell`
- [`SelectionBehavior`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_SelectionBehavior)
- [`SelectionMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_SelectionMode)
- `SingleCell`
- `SingleRow`
