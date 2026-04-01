---
title: Blazor Data Grid | Column Summaries | Infragistics
_description: Use Infragistics' Blazor grid component's column summaries feature to display summarized data such as count, max, min and many more. Check out Ignite UI for Blazor table demos!
_keywords: Blazor Table, Data Grid, column, summaries, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Implementation.Grid", "SummaryScope", "GroupSummaryDisplayMode"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/summaries
_tocName: Column Summaries
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Blazor Column Summaries

The Ignite UI for Blazor Data Table / Data Grid supports column summaries. In some cases, your end users may be overwhelmed by the amount of data displayed in the grid, and often may be looking for a summary of the data. Your end users may also want to derive additional information from the data of a specific column. Summaries help your end users achieve this, and you can enable them by setting the `SummaryScope` property.

## Blazor Column Summaries Example

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">
    <div class="options horizontal">
        <span class="options-item">Summary Scope:</span>
        <select class="options-item" @bind="GridSummaryScope">
            <option>@SummaryScope.Root</option>
            <option>@SummaryScope.Groups</option>
            <option>@SummaryScope.Both</option>
            <option>@SummaryScope.None</option>
        </select>
        <span class="options-item" >Group Summary Display Mode:</span>
        <select class="options-item" @bind="GridGroupSummaryDisplayMode">
            <option>@GroupSummaryDisplayMode.List</option>
            <option>@GroupSummaryDisplayMode.Cells</option>
            <option>@GroupSummaryDisplayMode.RowTop</option>
            <option>@GroupSummaryDisplayMode.RowBottom</option>
            <option>@GroupSummaryDisplayMode.None</option>
        </select>
    </div>
    <div class="container vertical">
        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      @ref="@DataGridRef"
                      SummaryScope="@GridSummaryScope"
                      GroupSummaryDisplayMode="@GridGroupSummaryDisplayMode"
                      AutoGenerateColumns="false"
                      IsGroupCollapsable="true"
                      GroupHeaderDisplayMode="@GroupHeaderDisplayMode.Combined"
                      IsColumnOptionsEnabled="true"
                      DataSource="Data">
                    <IgbNumericColumn Field="ID" Width="@("*>120")" HeaderText="ID" HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                    <IgbTextColumn Field="ProductName" Width="@("*>130")" HeaderText="Product" />
                    <IgbNumericColumn Field="BundlePrice" PositivePrefix="$" Width="@("*>120")" ShowGroupingSeparator="true" HeaderText="Price" />
                    <IgbNumericColumn Field="OrderItems" Width="@("*>140")" HeaderText="Orders" />
                    <IgbNumericColumn Field="OrderValue" Width="@("*>160")" ShowGroupingSeparator="true" HeaderText="Order Totals" PositivePrefix="$" />
                    <IgbDateTimeColumn Field="OrderDate" Width="@("*>150")" HeaderText="Order Date" HorizontalAlignment="@CellContentHorizontalAlignment.Right" />
                    <IgbNumericColumn Field="Profit" Width="@("*>140")" ShowGroupingSeparator="true" HeaderText="Profit" PositivePrefix="$" />
                    <IgbTextColumn Field="Country" Width="@("*>170")" HeaderText="Ship Country" />
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    private List<SaleInfo> Data;
    private SummaryScope GridSummaryScope;
    private GroupSummaryDisplayMode GridGroupSummaryDisplayMode;

    private IgbDataGrid _grid;
    private IgbDataGrid DataGridRef
    {
        get { return _grid; }
        set
        {
            _grid = value;
            this.OnDataGridRef();
            StateHasChanged();
        }
    }

    protected override void OnInitialized()
    {
        this.Data = SalesDataService.Create(50);

        this.GridSummaryScope = SummaryScope.Root;
        this.GridGroupSummaryDisplayMode = GroupSummaryDisplayMode.RowBottom;
    }

    private void OnDataGridRef()
    {
        var productGroup = new IgbColumnGroupDescription()
        {
            Field = "ProductName",
            DisplayName = "ProductName"
        };

        var productCount = new IgbColumnSummaryDescription()
        {
            Field = "ProductName",
            Operand = DataSourceSummaryOperand.Count
        };

        var priceMin = new IgbColumnSummaryDescription()
        {
            Field = "BundlePrice",
            Operand = DataSourceSummaryOperand.Min
        };

        var priceMax = new IgbColumnSummaryDescription()
        {
            Field = "BundlePrice",
            Operand = DataSourceSummaryOperand.Max
        };

        var orderSum = new IgbColumnSummaryDescription()
        {
            Field = "OrderItems",
            Operand = DataSourceSummaryOperand.Sum
        };

        var orderValueSum = new IgbColumnSummaryDescription()
        {
            Field = "OrderValue",
            Operand = DataSourceSummaryOperand.Sum
        };

        var orderValueAvg = new IgbColumnSummaryDescription()
        {
            Field = "OrderValue",
            Operand = DataSourceSummaryOperand.Average
        };

        var orderDateMin = new IgbColumnSummaryDescription()
        {
            Field = "OrderDate",
            Operand = DataSourceSummaryOperand.Min,
            CalculatorDisplayName = "First"
        };

        var orderDateMax = new IgbColumnSummaryDescription()
        {
            Field = "OrderDate",
            Operand = DataSourceSummaryOperand.Max,
            CalculatorDisplayName = "Last"
        };

        var sum1 = new IgbColumnSummaryDescription()
        {
            Field = "Profit",
            Operand = DataSourceSummaryOperand.Sum
        };

        var avg2 = new IgbColumnSummaryDescription()
        {
            Field = "Profit",
            Operand = DataSourceSummaryOperand.Average
        };

        //var countryCustomSummary = new IgbColumnSummaryDescription()
        //{
        //    Field = "Country",
        //    Operand = DataSourceSummaryOperand.Custom,
        //    //ProvideCalculatorScript = "onProvideCalculator" // <= This seems like what needs to be done, but how do you specify the logic that the calculator uses?
        //};

        //TODO CUSTOM SUMMARY

        this.DataGridRef.GroupDescriptions.Add(productGroup);

        this.DataGridRef.SummaryDescriptions.Add(productCount);
        this.DataGridRef.SummaryDescriptions.Add(priceMin);
        this.DataGridRef.SummaryDescriptions.Add(priceMax);
        this.DataGridRef.SummaryDescriptions.Add(orderSum);
        this.DataGridRef.SummaryDescriptions.Add(orderValueSum);
        this.DataGridRef.SummaryDescriptions.Add(orderValueAvg);
        this.DataGridRef.SummaryDescriptions.Add(orderDateMin);
        this.DataGridRef.SummaryDescriptions.Add(orderDateMax);
        this.DataGridRef.SummaryDescriptions.Add(sum1);
        this.DataGridRef.SummaryDescriptions.Add(avg2);
        //this.DataGridRef.SummaryDescriptions.Add(countryCustomSummary);
    }
}
```


<div class="divider--half"></div>

## Summary Scope Property

The Blazor data grid supports 4 summary settings that you can configure using the `SummaryScope` property. These are listed and described below:

- `Root`: This will display a grand total for all rows in the grid for the column the summary is applied to.
- `Groups`: This is specific to grouped rows and shows the grand total for all rows in a particular group.
- `Both`: This will use the `Groups` and `Root` options simultaneously.
- `None`: This will disable summaries for the grid.

## Group Summary Display Mode Property

The Blazor data grid supports configuration of the locations that summaries are displayed. You can configure this by using the `GroupSummaryDisplayMode` property. The different options for this property are listed and described below:

- **List**: This will render the group summaries in a flat list in the spanning group header.
- **Cells**: This will render the group header as cells, and the summary values will be rendered inside the cells, aligned with their corresponding column. The grid will only display a single summary per column using this option.
- **RowTop**: This will render the group summaries as summary rows at the top of the group.
- **RowBottom**: This will render the group summaries as summary rows at the bottom of the group.
- **None**: This will disable group summary rendering.

## Code Snippets

```razor
<IgbDataGrid Height="500px" Width="100%"
    @ref="DataGridRef"
    SummaryScope="DataSourceSummaryScope.Root"
    GroupSummaryDisplayMode="GroupSummaryDisplayMode.RowTop"
    AutoGenerateColumns="false"
    IsGroupCollapsable="true"
    GroupHeaderDisplayMode="DataSourceSectionHeaderDisplayMode.Combined"
    DataSource="DataSource">
    <IgbTextColumn Field="ProductName" Width="130" HeaderText="Product" />
    <IgbNumericColumn Field="BundlePrice" PositivePrefix="$" Width="120" ShowGroupingSeparator="true" HeaderText="Price" />
    <IgbNumericColumn Field="OrderItems" Width="140" HeaderText="Orders" />
    <IgbNumericColumn Field="OrderValue" Width="160" ShowGroupingSeparator="true" HeaderText="Order Totals" PositivePrefix="$" />
    <IgbTextColumn Field="Country" Width="170" HeaderText="Ship Country" />
</IgbDataGrid>

@code {
    private IgbDataGrid grid;
    private IgbDataGrid DataGridRef
    {
        get { return grid; }
        set
        {
            grid = value;
            this.OnDataGridRef();
            StateHasChanged();
        }
    }

    private void OnDataGridRef()
    {
        var productCount = new ColumnSummaryDescription() { Field = "ProductName", Operand = SummaryOperand.Count };
        var priceMin = new ColumnSummaryDescription() { Field = "BundlePrice", Operand = SummaryOperand.Min };
        var priceMax = new ColumnSummaryDescription() { Field = "BundlePrice", Operand = SummaryOperand.Max };
        var orderSum = new ColumnSummaryDescription() { Field = "OrderItems", Operand = SummaryOperand.Sum };
        var orderValueAvg = new ColumnSummaryDescription() { Field = "OrderValue", Operand = SummaryOperand.Average };

        this.DataGridRef.SummaryDescriptions.Add(productCount);
        this.DataGridRef.SummaryDescriptions.Add(priceMin);
        this.DataGridRef.SummaryDescriptions.Add(priceMax);
        this.DataGridRef.SummaryDescriptions.Add(orderSum);
        this.DataGridRef.SummaryDescriptions.Add(orderValueAvg);
    }
}
```

## API References

- [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html)
- [`GroupSummaryDisplayMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_GroupSummaryDisplayMode)
- [`SummaryScope`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_SummaryScope)
