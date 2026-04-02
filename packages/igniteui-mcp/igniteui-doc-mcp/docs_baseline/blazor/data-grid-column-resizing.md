---
title: Blazor Data Grid | Column Resizing | Infragistics
_description: Start using Infragistics' Blazor grid component to resize columns, giving you flexibility over how you wish to display your columns with respect to the width of each. View Ignite UI for Blazor table demos for more information!
_keywords: Blazor Table, Data Grid, column resizing, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "ColumnResizingMode", "ColumnResizingAnimationMode"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/column-resizing
_tocName: Column Resizing
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor Grid Column Resizing

The Ignite UI for Blazor Data Grid supports the ability to resize columns, giving you flexibility over how you wish to display your columns with respect to the width of each.

## Blazor Grid Column Resizing Example

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">
    <div class="options horizontal">
        <span class="options-item">Resizing Mode:</span>
        <select class="options-item" @bind="GridResizingMode">
            <option>@ColumnResizingMode.Deferred</option>
            <option>@ColumnResizingMode.Immediate</option>
            <option>@ColumnResizingMode.None</option>
        </select>

        <span class="options-item">Resizing Animation:</span>
        <select class="options-item" @bind="GridResizingAnimationMode">
            <option>@ColumnResizingAnimationMode.Auto</option>
            <option>@ColumnResizingAnimationMode.Interpolate</option>
            <option>@ColumnResizingAnimationMode.None</option>
        </select>
    </div>

    <div class="container vertical">
        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      ColumnResizingAnimationMode="@GridResizingAnimationMode"
                      ColumnResizingMode="@GridResizingMode"
                      ColumnResizingSeparatorWidth="1"
                      AutoGenerateColumns="false"
                      DefaultColumnMinWidth="100"
                      DataSource="Data"
                      IsColumnOptionsEnabled="true">
                    <IgbTextColumn Field="Name" Width="@("*>170")" />
                    <IgbTextColumn Field="Street" HeaderText="Address" Width="@("*>150")" />
                    <IgbTextColumn Field="City" Width="@("*>120")" />
                    <IgbNumericColumn Field="Salary" PositivePrefix="$" ShowGroupingSeparator="true" Width="@("*>120")" />
                    <IgbDateTimeColumn Field="Birthday" Width="@("*>170")" />
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    private List<Employee> Data;

    private ColumnResizingAnimationMode GridResizingAnimationMode;
    private ColumnResizingMode GridResizingMode;

    protected override void OnInitialized()
    {
        this.Data = EmployeeData.Create(100, false);
        this.GridResizingAnimationMode = ColumnResizingAnimationMode.Interpolate;
        this.GridResizingMode = ColumnResizingMode.Deferred;
    }
}
```


<div class="divider--half"></div>

Column resizing in the Ignite UI for Blazor DataGrid is on by default, and can be controlled by using the [`ColumnResizingMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnResizingMode) property of the grid. This property has three options. Each option is explained below:

- `Deferred`: The default option. When resizing, a separator will appear showing how large or small the column will become when resized.
- `Immediate`: When resizing, there will be no separator. The column's width will follow the pointer as you drag the edge of the column and resize accordingly.
- `None`: Columns cannot be resized.

When column resizing is set to `Deferred`, the separator that shows up can be modified in color and width by using the [`ColumnResizingSeparatorBackground`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnResizingSeparatorBackground) and [`ColumnResizingSeparatorWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnResizingSeparatorWidth) properties of the grid, respectively.

You can also animate the columns as they resize when the resizing mode is set to `Deferred` only. This is done by setting the [`ColumnResizingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnResizingAnimationMode) property to `Interpolate`.

Each column in the grid can be determined whether or not it can resize individually. If you want to enable or disable resizing on a particular column, you can set the <b>IsResizingEnabled</b> property of that column.

When resizing a star-width column, it will change that column to a fixed column.

## Code Snippet

The following code snippet demonstrates how to implement column resizing in the Blazor data grid, where the <b>Street</b> column in this case will not be resizable. In this case, the column resizing separator will be 5 pixels wide and the columns that are resizable would animate when resized as well:

```razor
<IgbDataGrid Height="100%" Width="100%"
    AutoGenerateColumns="false"
    DataSource="DataSource"
    ColumnResizingMode="ColumnResizingMode.Deferred"
    ColumnResizingAnimationMode="ColumnResizingAnimationMode.Interpolate"
    ColumnResizingSeparatorWidth="5">
    <IgbTextColumn Field="FirstName" />
    <IgbTextColumn Field="LastName" />
    <IgbTextColumn Field="Street" IsResizingEnabled="false" />
    <IgbTextColumn Field="City" />
</IgbDataGrid>
```

## API References

- [`ColumnResizingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnResizingAnimationMode)
- [`ColumnResizingMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnResizingMode)
- [`ColumnResizingSeparatorBackground`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnResizingSeparatorBackground)
- [`ColumnResizingSeparatorWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnResizingSeparatorWidth)
- `Deferred`
- `Interpolate`
