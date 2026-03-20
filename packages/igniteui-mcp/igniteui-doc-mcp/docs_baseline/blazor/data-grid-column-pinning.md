---
title: Blazor Data Grid | Column Pinning | Infragistics
_description: See how Infragistics' Ignite UI for Blazor grid component supports the ability to pin columns and gives you the flexibility over how you wish to position your columns. View Ignite UI for Blazor table demos for more information!
_keywords: Blazor Table, Data Grid, column pinning, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "PinnedPositions", "PinColumn", "ColumnPinning", "DataGridToolbar", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/column-pinning
_tocName: Column Pinning
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Blazor Grid Column Pinning Overview

The Ignite UI for Blazor Data Grid supports the ability to pin columns, allowing the end users to lock a column in a particular column order.

A column or multiple columns can be pinned to the left-hand or right-hand side of the Data Grid. In addition, you can change the pin state of the columns by utilizing the [`PinColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_PinColumn) function.

## Blazor Grid Column Pinning Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">

    <div class="options horizontal">
        <input type="button" class="options-item" disabled=@IsPinningToLeftDisabled  @onclick="OnPinLeft" value="Pin Left" />
        <input type="button" class="options-item" disabled=@IsPinningToRightDisabled @onclick="OnPinRight" value="Pin Right" />
        <input type="button" class="options-item" @onclick="OnUnPin" value="Unpin Columns" />
    </div>

    <div class="container vertical">

        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                    DefaultColumnMinWidth="120"
                    DataSource="Data"
                    AutoGenerateColumns="false"
                    @ref="DataGridRef">
                    <IgbTextColumn Field="ID" Pinned="PinnedPositions.Left" Width="@("*>110")" />
                    <IgbTextColumn Field="FirstName" Pinned="PinnedPositions.Left" Width="@("*>190")" />
                    <IgbTextColumn Field="LastName" Pinned="PinnedPositions.Left" Width="@("*>190")" />
                    <IgbDateTimeColumn Field="Birthday" Width="@("*>170")" />
                    <IgbNumericColumn Field="Age" Width="@("*>120")" />
                    <IgbImageColumn IsEditable="false" Field="CountryFlag" />
                    <IgbTextColumn Field="Street" Width="@("*>160")" />
                    <IgbTextColumn Field="City" Width="260" />
                    <IgbTextColumn Field="Country" Width="@("*>170")" />
                    <IgbNumericColumn Field="Salary" Width="@("*>170")" />
                    <IgbNumericColumn Field="Sales" Width="@("*>120")" />
                    <IgbNumericColumn Field="Salary" Width="@("*>120")" PositivePrefix="$"
                                ShowGroupingSeparator="true"
                                MaxFractionDigits="0"
                                MinFractionDigits="0" />
                </IgbDataGrid>
            </div>
        }

    </div>
</div>

@code {

    private List<Employee> Data;
    public IgbDataGrid grid;
    public IgbDataGrid DataGridRef
    {
        get
        {
            return grid;
        }
        set
        {
            grid = value;
            StateHasChanged();
        }
    }
    public Boolean IsPinningToLeftDisabled { get; set; } = false;
    public Boolean IsPinningToRightDisabled { get; set; } = false;

    protected override void OnInitialized()
    {
        this.Data = EmployeeData.Create(200, false);
    }

    private async Task OnPinLeft()
    {
        IsPinningToLeftDisabled = true;
        IsPinningToRightDisabled = true;

        var idColumn = this.grid.ActualColumns[0];
        var firstNameColumn = this.grid.ActualColumns[1];
        var lastNameColumn = this.grid.ActualColumns[2];
        await this.grid.PinColumnAsync(idColumn, PinnedPositions.Left);
        await this.grid.PinColumnAsync(firstNameColumn, PinnedPositions.Left);
        await this.grid.PinColumnAsync(lastNameColumn, PinnedPositions.Left);
    }

    private async Task OnPinRight()
    {
        IsPinningToLeftDisabled = true;
        IsPinningToRightDisabled = true;

        var streetColumn = this.grid.ActualColumns[6];
        var cityColumn = this.grid.ActualColumns[7];
        var countryColumn = this.grid.ActualColumns[8];
        await this.grid.PinColumnAsync(streetColumn, PinnedPositions.Right);
        await this.grid.PinColumnAsync(cityColumn, PinnedPositions.Right);
        await this.grid.PinColumnAsync(countryColumn, PinnedPositions.Right);
    }

    private async Task OnUnPin()
    {
        IsPinningToLeftDisabled = false;
        IsPinningToRightDisabled = false;

        var idColumn = this.grid.ActualColumns[0];
        var firstNameColumn = this.grid.ActualColumns[1];
        var lastNameColumn = this.grid.ActualColumns[2];
        await this.grid.PinColumnAsync(idColumn, PinnedPositions.None);
        await this.grid.PinColumnAsync(firstNameColumn, PinnedPositions.None);
        await this.grid.PinColumnAsync(lastNameColumn, PinnedPositions.None);

        var streetColumn = this.grid.ActualColumns[6];
        var cityColumn = this.grid.ActualColumns[7];
        var countryColumn = this.grid.ActualColumns[8];
        await this.grid.PinColumnAsync(streetColumn, PinnedPositions.None);
        await this.grid.PinColumnAsync(cityColumn, PinnedPositions.None);
        await this.grid.PinColumnAsync(countryColumn, PinnedPositions.None);
    }

}
```


<div class="divider--half"></div>

The Column Pinning API in the Data Grid can be enabled by setting either a column's [`Pinned`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridColumn.html#IgniteUI_Blazor_Controls_IgbDataGridColumn_Pinned) property, or when setting it by utilizing the [`PinColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_PinColumn) function of the grid.

The [`Pinned`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridColumn.html#IgniteUI_Blazor_Controls_IgbDataGridColumn_Pinned) property has three options:

- Left - enabling `Left` will position pinned columns to the left-hand side of the grid.
- Right - enabling `Right` will position pinned columns to the right side of the grid.
- None - enabling `None` will unpin a column and reposition its default placement within the grid.

Unpinned columns that are adjacent to pinned columns will still maintain horizontal scrolling.

The [`PinColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_PinColumn) function contains two required parameters. The first parameter is the column to be pinned, and the second is with the `PinnedPositions` enumeration setting.

## Code Snippet

The following code demonstrates how to implement column pinning in the Blazor Data Grid with column pinning by using the [`Pinned`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridColumn.html#IgniteUI_Blazor_Controls_IgbDataGridColumn_Pinned) property and [`PinColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_PinColumn) function:

```razor
<IgbDataGrid Height="100%" Width="100%"
    DefaultColumnMinWidth="120"
    DataSource="@DataSource"
    AutoGenerateColumns="false"
    @ref="DataGridRef">

    @*Columns Pinned Left*@
    <IgbTextColumn Field="ID" Pinned="PinnedPositions.Left" />
    <IgbTextColumn Field="FirstName" Pinned="PinnedPositions.Left" />
    <IgbTextColumn Field="LastName" Pinned="PinnedPositions.Left" />

    @*Columns Unpinned*@
    <IgbDateTimeColumn Field="Birthday" Pinned="PinnedPositions.None" />
    <IgbNumericColumn Field="Age" Pinned="PinnedPositions.None" />
    <IgbImageColumn Field="CountryFlag" Pinned="PinnedPositions.None" />

    @*Columns Pinned Right*@
    <IgbTextColumn Field="Street" Pinned="PinnedPositions.Right" />
    <IgbTextColumn Field="City" Pinned="PinnedPositions.Right" />
    <IgbTextColumn Field="Country" Pinned="PinnedPositions.Right" />
</IgbDataGrid>
```

## Toolbar's Column Pinning UI

The Column Pinning UI is accessible within the [`IgbDataGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html) component separate from the grid. For this purpose all we have to do is set the toolbar's `columnPinning` property to true. The toolbar will then display a [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html), when clicked, will display the column pinning UI. This button also displays the total of pinned-left columns. If the toolbar is not created, enabling the `columnPinning` property will have no effect and hide the button.

The [`IgbDataGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html) provides additional properties such as adding a title to the toolbar by using the [`ToolbarTitle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html#IgniteUI_Blazor_Controls_IgbDataGridToolbar_ToolbarTitle) property, placing text in the [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html) by setting the `columnPinningText` property, and adding a title header to the column hiding UI by setting `columnPinningTitle`.

## Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">

    <div class="container vertical">

        @if (Data != null)
        {
            <IgbDataGridToolbar TargetGrid="Grid" ToolbarTitle="Global Sales"
                             ColumnPinning="true">
            </IgbDataGridToolbar>
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                @ref="Grid"
                DataSource="Data"
                AutoGenerateColumns="false">
                    <IgbTextColumn Field="ID" Pinned="PinnedPositions.Left" Width="@("*>110")" />
                    <IgbTextColumn Field="FirstName" Pinned="PinnedPositions.Left" Width="@("*>190")" />
                    <IgbTextColumn Field="LastName" Pinned="PinnedPositions.Left" Width="@("*>190")" />
                    <IgbDateTimeColumn Field="Birthday" Width="@("*>170")" />
                    <IgbNumericColumn Field="Age" Width="@("*>120")" />
                    <IgbImageColumn IsEditable="false" Field="CountryFlag" />
                    <IgbTextColumn Field="Street" Width="@("*>160")"/>
                    <IgbTextColumn Field="City" Width="260"/>
                    <IgbTextColumn Field="Country" Width="@("*>170")"/>
                    <IgbNumericColumn Field="Salary" Width="@("*>170")"/>
                    <IgbNumericColumn Field="Sales" Width="@("*>120")"/>
                    <IgbNumericColumn Field="Salary" Width="@("*>120")" PositivePrefix="$"
                        ShowGroupingSeparator="true"
                        MaxFractionDigits="0"
                        MinFractionDigits="0" />
                </IgbDataGrid>
            </div>
        }

    </div>
</div>

@code {

    private List<Employee> Data;
    private IgbDataGrid grid;
    public IgbDataGrid Grid
    {
        get
        {
            return grid;
        }
        set
        {
            grid = value;
            StateHasChanged();
        }
    }

    protected override void OnInitialized()
    {;

        this.Data = EmployeeData.Create(200, false);
    }
}
```


## Code Snippet

```razor
<IgbDataGridToolbar TargetGrid="DataGridRef"
    ToolbarTitle="Grid Toolbar Title"
    ColumnPinning="true"
    ColumnPinningText="Pinning"
    ColumnPinningTitle="Column Pinning" />
<IgbDataGrid Height="100%" Width="100%"
    @ref="DataGridRef"
    DataSource="DataSource" />

@code {
    private IgbDataGrid grid;
    public IgbDataGrid DataGridRef
    {
        get
        {
            return grid;
        }
        set
        {
            grid = value;
            StateHasChanged();
        }
    }
}
```

## API References

- [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html)
- [`IgbDataGridToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridToolbar.html)
- [`PinColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_PinColumn)
- `PinnedPositions`
- [`Pinned`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridColumn.html#IgniteUI_Blazor_Controls_IgbDataGridColumn_Pinned)
