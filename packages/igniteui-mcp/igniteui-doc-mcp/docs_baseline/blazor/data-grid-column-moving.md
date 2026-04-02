---
title: Blazor Data Grid | Column Moving | Infragistics
_description: See how Infragistics' Ignite UI for Blazor Data Grid supports the ability to move columns and gives you the flexibility over how you wish to display your columns. View Ignite UI for Blazor table demos for more information!
_keywords: Blazor Table, Data Grid, column moving, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "ColumnMovingMode", "ColumnMovingAnimationMode"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/column-moving
_tocName: Column Moving
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor Grid Column Moving Overview

The Ignite UI for Blazor Data Grid supports the ability to move columns, giving you the flexibility over how you wish to display your columns with respect to the order of the columns shown.

## Blazor Grid Column Moving Example

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">
    <div class="options horizontal">
        <span class="options-item">Column Moving Mode:</span>
        <select class="options-item" @bind="@GridColumnMovingMode">
            <option>@ColumnMovingMode.Deferred</option>
            <option>@ColumnMovingMode.None</option>
        </select>
        <span class="options-item">Separator Width: </span>
        <input class="options-slider" @bind="@GridColumnMovingSeparatorWidth"
               type="range" min=1 max=5 step="1" />
    </div>
    <div class="options horizontal">
        <span class="options-item" >Column Moving Animation:</span>
        <select class="options-item" @bind="@GridColumnMovingAnimationMode" >
            <option>@ColumnMovingAnimationMode.Auto</option>
            <option>@ColumnMovingAnimationMode.SlideOver</option>
            <option>@ColumnMovingAnimationMode.None</option>
        </select>
    </div>

    <div class="container vertical">
        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                      ColumnMovingMode="@GridColumnMovingMode"
                      ColumnMovingAnimationMode="@GridColumnMovingAnimationMode"
                      ColumnMovingSeparatorWidth="@GridColumnMovingSeparatorWidth"
                      DefaultColumnMinWidth="100"
                      AutoGenerateColumns="false"
                      DataSource="Data"
                      IsColumnOptionsEnabled="true">
                    <IgbTextColumn Field="Name" Width="@("*>170")" />
                    <IgbTextColumn Field="Street" HeaderText="Address" Width="@("*>150")"/>
                    <IgbTextColumn Field="City" Width="@("*>120")"/>
                    <IgbNumericColumn Field="Salary" PositivePrefix="$" ShowGroupingSeparator="true" Width="@("*>120")"/>
                    <IgbDateTimeColumn Field="Birthday" Width="@("*>170")"/>
                </IgbDataGrid>
            </div>
        }
    </div>
</div>

@code {

    private List<Employee> Data;

    private ColumnMovingMode GridColumnMovingMode = ColumnMovingMode.Deferred;
    private ColumnMovingAnimationMode GridColumnMovingAnimationMode = ColumnMovingAnimationMode.SlideOver;
    private int GridColumnMovingSeparatorWidth = 1;

    protected override void OnInitialized()
    {
        this.Data = EmployeeData.Create(100, false);
    }
}
```


<div class="divider--half"></div>

Column moving in the Ignite UI for Blazor Data Grid is on by default, and can be controlled by setting the [`ColumnMovingMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnMovingMode) property of the grid. This property has two options, `Deferred` or `None`. `Deferred` will allow column moving, while `None` will disable column moving for the entire grid.

When column moving is set to `Deferred`, a separator will show up while moving a column. While moving a column, once the mouse pointer is released, the moved column will take the place of the column placed to the right of the separator. This separator can also be customized in width and color by using the [`ColumnMovingSeparatorWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnMovingSeparatorWidth) and [`ColumnMovingSeparatorBackground`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnMovingSeparatorBackground) properties, respectively.

You can also animate the column movements, if you wish. This can be done by setting the [`ColumnMovingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnMovingAnimationMode) property of the grid. Animations are not on by default.

## Code Snippet

The following demonstrates how to implement column moving in the Ignite UI for Blazor Data Grid with deferred column moving, animations enabled, and a 5px wide separator:

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    ColumnMovingMode="ColumnMovingMode.Deferred"
    ColumnMovingAnimationMode="ColumnMovingAnimationMode.SlideOver"
    ColumnMovingSeparatorWidth="5" />
```

## API References

- [`ColumnMovingAnimationMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnMovingAnimationMode)
- [`ColumnMovingMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnMovingMode)
- [`ColumnMovingSeparatorBackground`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnMovingSeparatorBackground)
- [`ColumnMovingSeparatorWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_ColumnMovingSeparatorWidth)
- `Deferred`
