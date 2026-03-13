---
title: Blazor Data Grid | Real-Time Data Grid and Tables | Load & Save | Infragistics
_description: Use Infragistics' Ignite UI for Blazor Data Table & Grid which supports loading and saving the layout the user makes.
_keywords: Blazor Table, Data Grid, cell activation, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Load & Save Grid Layout
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Blazor Grid Load & Save Layout

The Ignite UI for Blazor Data Table / Data Grid supports loading and saving the grid layout. This is performed by calling the [`LoadLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_LoadLayout) and [`SaveLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_SaveLayout) methods of the grid. These features are useful when an end user can move, sort, and group columns, and wants to preserve the state of the grid and be able to recover the layout and resume work at a later time.

## Blazor Grid Load & Save Layout Example

```razor
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Rendering
@using Microsoft.AspNetCore.Components.Forms
@using Microsoft.AspNetCore.Components.RenderTree
@using Microsoft.AspNetCore.Components.Web

@using IgniteUI.Blazor.Controls


<div class="container vertical">

    <div class="container vertical">
        <div class="options horizontal">
            <button @onclick="OnLoadLayoutClick">Load</button>
            <button @onclick="OnSaveLayoutClick">Save</button>

        </div>

            @if (Employees != null)
            {

                <IgbDataGridToolbar ToolbarTitle="Sales Team" ColumnChooser="true" ColumnPinning="true" TargetGrid="@DataGridRef" />

                <div style="overflow: hidden">
                    <IgbDataGrid Height="100%" Width="100%"
                          @ref="@DataGridRef"
                          RowHeight="50"
                          DataSource="Employees"
                          AutoGenerateColumns="false"
                          IsColumnOptionsEnabled="true"
                          IsGroupCollapsable="true"
                          ActivationMode="GridActivationMode.Cell"
                          SummaryScope="@SummaryScope.Root"
                          GroupSummaryDisplayMode="@GroupSummaryDisplayMode.RowBottom"
                          GroupHeaderDisplayMode="@GroupHeaderDisplayMode.Combined"
                          CornerRadiusTopLeft="0"
                          CornerRadiusTopRight="0"
                          ColumnMovingSeparatorWidth="2"
                          ColumnMovingMode="ColumnMovingMode.Deferred"
                          ColumnMovingAnimationMode="ColumnMovingAnimationMode.SlideOver"
                          ColumnShowingAnimationMode="ColumnShowingAnimationMode.SlideFromRightAndFadeIn"
                          ColumnHidingAnimationMode="ColumnHidingAnimationMode.SlideToRightAndFadeOut"
                          SelectionMode="DataGridSelectionMode.SingleRow">

                        <IgbImageColumn IsEditable="false" Width="@("*>120")" Field="Photo" PaddingTop="5" PaddingBottom="5" PaddingRight="10"
                                    HorizontalAlignment="@CellContentHorizontalAlignment.Stretch" />

                        <IgbTextColumn Width="@("*>130")" Field="Name" />

                        @*NOTE: CellUpdatingScript is implemented in wwwroot/*.js file *@
                        <IgbTemplateColumn Width="@("*>160")" Field="Sales" CellUpdatingScript="onUpdatingSalesColumn"
                                        HorizontalAlignment="@CellContentHorizontalAlignment.Center" />

                        <IgbNumericColumn Width="@("*>130")" Field="Salary" PositivePrefix="$"
                                    ShowGroupingSeparator="true"
                                    MaxFractionDigits="0"
                                    MinFractionDigits="0" />

                        <IgbNumericColumn Width="100" Field="Age" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                        <IgbDateTimeColumn Width="@("*>140")" Field="Birthday" HeaderText="Date of Birth" />

                        <IgbImageColumn IsEditable="false" Width="@("*>110")" Field="CountryFlag" HeaderText="Country" PaddingTop="5" PaddingBottom="5" PaddingRight="10"
                                    HorizontalAlignment="@CellContentHorizontalAlignment.Stretch" />

                        @*NOTE: CellUpdatingScript is implemented in wwwroot/*.js file *@
                        <IgbTemplateColumn Width="@("*>170")" Field="Address" CellUpdatingScript="onUpdatingAddressColumn" />
                        <IgbTemplateColumn Width="@("*>130")" Field="Phone" CellUpdatingScript="onUpdatingPhoneColumn" />

                        <IgbTextColumn Width="@("*>120")" Field="Income" />
                        <IgbTextColumn Width="@("*>120")" Field="Email" IsEditable="false" />

                    </IgbDataGrid>
                </div>
            }


        </div>
    </div>

@code {

    private List<Employee> Employees;
    public string savedLayout;
    private IgbDataGrid _grid;
    private IgbDataGrid DataGridRef
    {
        get { return _grid; }
        set { _grid = value; this.OnDataGridRef(); StateHasChanged(); }
    }

    protected override void OnInitialized()
    {
        this.Employees = EmployeeData.Create(100, false);
    }

    private void OnDataGridRef()
    {
        var peopleGroup = new IgbColumnGroupDescription() { Field = "Country", DisplayName = "Country" };
        var incomeGroup = new IgbColumnGroupDescription() { Field = "Income", DisplayName = "Income" };
        this._grid.GroupDescriptions.Add(peopleGroup);
        this._grid.GroupDescriptions.Add(incomeGroup);

        var ageSummary = new IgbColumnSummaryDescription() { Field = "Age", Operand = DataSourceSummaryOperand.Average };
        var peopleSummary = new IgbColumnSummaryDescription() { Field = "Photo", Operand = DataSourceSummaryOperand.Count };
        var salarySummary = new IgbColumnSummaryDescription() { Field = "Salary", Operand = DataSourceSummaryOperand.Sum };
        var saleSummary = new IgbColumnSummaryDescription() { Field = "Sales", Operand = DataSourceSummaryOperand.Max };

        this._grid.SummaryDescriptions.Add(ageSummary);
        this._grid.SummaryDescriptions.Add(peopleSummary);
        this._grid.SummaryDescriptions.Add(salarySummary);
        this._grid.SummaryDescriptions.Add(saleSummary);

        // TODO fix onSummarziePeopleGender
        //var nameSummary = new IgbColumnSummaryDescription() { Field = "Name", Operand = DataSourceSummaryOperand.Custom,
        //    ProvideCalculatorScript = "onSummarziePeopleGender" };
        //this._grid.SummaryDescriptions.Add(nameSummary);
    }


    private void OnLoadLayoutClick(MouseEventArgs e)
    {
        this.DataGridRef.LoadLayout(this.savedLayout);
    }

    private void OnSaveLayoutClick(MouseEventArgs e)
    {
        this.DataGridRef.SaveLayout();
        this.savedLayout = this.DataGridRef.SaveLayout();
    }
}
```


<div class="divider--half"></div>

## Supported Features

The grid supports saving the following features:

- [Column Visibility](column-chooser.md)
- [Column Pinning](column-pinning.md)
- [Column Moving](column-moving.md)
- [Column Resizing](column-resizing.md)
- [Column Sorting](column-sorting.md)
- [Column Filtering](column-filtering.md)
- [Row Grouping](row-grouping.md)

## API References

- [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html)
- [`LoadLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_LoadLayout)
- [`SaveLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_SaveLayout)
