---
title: Blazor Data Grid | Filtering | Infragistics
_description: Use Infragistics' Ignite UI for Blazor grid component to perform expressive sort conditions and return data easily. View Ignite UI for Blazor table's demo for more information!
_keywords: Blazor Table, Data Grid, column, filtering, filter expressions, filter operands, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "FilterExpressions", "FilterLogicalOperator", "FilterOperand"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/filtering
_tocName: Column Filtering
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor Grid Filtering Overview

The Ignite UI for Blazor Data Table / Data Grid includes column filtering with both a filter row and API that gives you the ability to perform expressive sort conditions based on the data type of the column being filtered.

## Blazor Grid Filtering Example

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">
    <div class="container vertical">
        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                             DefaultColumnMinWidth="100"
                             AutoGenerateColumns="false"
                             DataSource="Data"
                             IsColumnOptionsEnabled="true"
                             FilterUIType="FilterUIType.FilterRow">
                    <IgbTextColumn Field="Name" Width="@("*>170")" />
                    <IgbNumericColumn Field="Age" Width="@("*>170")" />
                    <IgbTextColumn Field="Street" Width="@("*>180")" />
                    <IgbTextColumn Field="City" Width="@("*>120")" />
                    <IgbImageColumn IsEditable="false" Field="CountryFlag" PaddingTop="5" PaddingBottom="5" HeaderText="Country" ContentOpacity="1"
                                    HorizontalAlignment="@CellContentHorizontalAlignment.Center" Width="@("*>140")" />
                    <IgbNumericColumn Field="Sales" PositivePrefix="$" ShowGroupingSeparator="true" Width="@("*>120")" />
                    <IgbDateTimeColumn Field="Birthday" HeaderText="Birthday" Width="@("*>170")" />
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    private List<Employee> Data;

    protected override void OnInitialized()
    {
        this.Data = EmployeeData.Create(100, false);
    }
}
```


<div class="divider--half"></div>

As seen above, setting the [`FilterUIType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_FilterUIType) property to FilterRow will enables the record filtering record to the user interface where the user can specify filter criteria to filter records. Records that do not match the specified filter criteria will be hidden.

Filtering is also exposed in the column options UI by hovering a field and clicking the vertical ellipsis. This is achieved when setting the [`FilterUIType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_FilterUIType) to ColumnOptions. Please refer to the sample below.

## Filter Expressions

In the example below, the data grid's FilterExpressions collection is updated to incorporate custom [`FilterExpressions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_FilterExpressions).

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">
    <div class="options horizontal">
        <span class="options-item">Column: </span>
        <select class="options-item" @onchange="OnFilterColumnChanged">
            <option>Name</option>
            <option>Street</option>
            <option>City</option>
            <option>Country</option>
        </select>
        <select class="options-item" @onchange="OnFilterModeChanged">
            <option>Contains</option>
            <option>StartsWith</option>
            <option>EndsWith</option>
        </select>
        <label class="options-item"> Expression: </label>
        <input class="options-text" type="text" name="title" @onchange="OnFilterTextChanged" />
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
                             IsColumnOptionsEnabled="true"
                             FilterUIType="FilterUIType.ColumnOptions">
                    <IgbTextColumn Field="Name" Width="@("*>170")" />
                    <IgbNumericColumn Field="Age" Width="@("*>170")" />
                    <IgbTextColumn Field="Street" Width="@("*>180")" />
                    <IgbTextColumn Field="City" Width="@("*>120")" />
                    <IgbImageColumn IsEditable="false" Field="CountryFlag" PaddingTop="5" PaddingBottom="5" HeaderText="Country" ContentOpacity="1"
                                    HorizontalAlignment="@CellContentHorizontalAlignment.Center" Width="@("*>140")" />
                    <IgbNumericColumn Field="Sales" PositivePrefix="$" ShowGroupingSeparator="true" Width="@("*>120")" />
                    <IgbDateTimeColumn Field="Birthday" HeaderText="Birthday" Width="@("*>170")" />
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    private List<Employee> Data;
    private IgbDataGrid DataGridRef;

    private string FilterText = "";
    private string FilterMode = "Contains";
    private string FilterColumn = "Name";

    private FilterFactory FilterFactory = new FilterFactory();

    protected override void OnInitialized()
    {
        this.Data = EmployeeData.Create(100, false);
    }

    private void OnFilterTextChanged(ChangeEventArgs e)
    {
        this.FilterText = e.Value.ToString();
        this.ApplyFilter();
    }

    private void OnFilterModeChanged(ChangeEventArgs e)
    {
        this.FilterMode = e.Value.ToString();
        this.ApplyFilter();
    }

    private void OnFilterColumnChanged(ChangeEventArgs e)
    {
        this.FilterColumn = e.Value.ToString();
        this.ApplyFilter();
    }

    private void ApplyFilter()
    {
        this.DataGridRef.FilterExpressions.Clear();

        if (this.FilterText == "")
        {
            return;
        }

        string expression = this.FilterText.ToUpper();

        IgbFilterExpression column = this.FilterFactory.Property(this.FilterColumn).ToUpper();

        IgbFilterExpression filter = new IgbFilterExpression();

        switch (this.FilterMode)
        {
            case "Contains":
                {
                    filter = column.Contains(expression);
                    break;
                }
            case "StartsWith":
                {
                    filter = column.StartsWith(expression);
                    break;
                }
            case "EndsWith":
                {
                    filter = column.EndsWith(expression);
                    break;
                }
        }

        this.DataGridRef.FilterExpressions.Add(filter);

        StateHasChanged();
    }
}
```


<div class="divider--half"></div>

## Filter Operators

Columns can be given a custom [`IgbFilterOperand`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFilterOperand.html) that will appear in the filter-row operand dropdown. The key requirements is to ensure the operand is given a [`DisplayName`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFilterOperand.html#IgniteUI_Blazor_Controls_IgbFilterOperand_DisplayName) and to utilize the `FilterRequested` event on the operand so you can apply a [`FilterFactory`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.FilterFactory.html), which is responsible for assigning the operator and value you wish to the filter the column by, e.g. StartsWith with value of "A".

In addition, the grid's [`FilterLogicalOperator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_FilterLogicalOperator) property is responsible for indicating how filters across fields are combined:

- [`and`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.FilterFactory.html#IgniteUI_Blazor_Controls_FilterFactory_and) logical operator. In order for a successful match, all conditions have to pass.
- [`or`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.FilterFactory.html#IgniteUI_Blazor_Controls_FilterFactory_or) logical operator. In order for a successful match, at least one of the conditions have to pass.

Since the operands are applied to the column they can be added in several ways, such as inline, in-code, or in a separate class. Each approach is demonstrated in the example below.

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">

    <div class="container vertical">
        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                             @ref="DataGridRef"
                             DefaultColumnMinWidth="100"
                             AutoGenerateColumns="false"
                             DataSource="Data"
                             IsColumnOptionsEnabled="true"
                             FilterUIType="FilterUIType.FilterRow">
                    @*In code Filter Operand*@
                    <IgbTextColumn Field="Country" HeaderText="Code-behind Filter*" Width="@("*>170")">
                        @*Scroll down to see OnAfterRender, OnFilter*@
                    </IgbTextColumn>

                    @*In class Filter Operand*@
                    <IgbNumericColumn Field="Age" HeaderText="Custom Class Filter**">
                        <CustomFilter />
                    </IgbNumericColumn>

                    @*In-line Filter Operand*@
                    <IgbNumericColumn Field="Sales" HeaderText="In-line Filter***" PositivePrefix="$" ShowGroupingSeparator="true" Width="@("*>120")">
                        <IgbFilterOperand EditorType="EditorType.Numeric" IsInputRequired="false" DisplayName="(Custom) In-Line Filter"
                                          FilterRequested="@(args => args.FilterFactory.Property("Sales").IsLessThanOrEqualTo(300000))">

                        </IgbFilterOperand>
                    </IgbNumericColumn>
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    private List<Employee> Data;
    private IgbDataGrid DataGridRef;

    protected override void OnInitialized()
    {
        this.Data = EmployeeData.Create(100, false);
    }

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.DataGridRef != null && firstRender)
        {
            this.DataGridRef.EnsureReady().ContinueWith(new Action<Task>
            ((e) =>
            {
                this.DataGridRef.ActualColumns[0].FilterOperands.Add(
                    new IgbFilterOperand {
                        EditorType = EditorType.Text,
                        DisplayName = "(Custom) In Code Filter",
                        FilterRequested = OnFilter,
                    });
            }));
        }
    }

    private IgbFilterExpression OnFilter(IgbGridCustomFilterRequestedEventArgs args)
    {
        var prop = args.FilterFactory.Property(args.Column.Field);
        //Filter-in only records with France
        return prop.IsEqualTo("France");
    }
}
```


<div class="divider--half"></div>

## API References

- [`DisplayName`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFilterOperand.html#IgniteUI_Blazor_Controls_IgbFilterOperand_DisplayName)
- [`FilterExpressions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_FilterExpressions)
- [`FilterFactory`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.FilterFactory.html)
- [`FilterLogicalOperator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_FilterLogicalOperator)
- [`IgbFilterOperand`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFilterOperand.html)
- `FilterRequested`
- [`FilterUIType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_FilterUIType)
