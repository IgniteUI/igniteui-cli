---
title: Blazor Data Grid | Row Highlighting | Infragistics
_description: Configuring the row highlight of the Infragistics' Blazor data grid on mouse over. Learn how to configure row highlight for the Ignite UI for Blazor table.
_keywords: Blazor Table, Data Grid, row highlighting, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Row Highlighting
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor Grid Highlighting

The Ignite UI for Blazor Data Table / Data Grid supports configuring the appearance of row highlighting.

## Blazor Grid Highlighting Example

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JSRuntime;

<div class="container vertical">
    <div class="options horizontal">
        <label class="options-label">Enable Row Hover:</label>
        <label class="options-item">
            <input type="checkbox" checked="@RowHoverEnabled" @onchange="OnIsRowHoverEnabledChange" />
        </label>

        <label class="options-label">Highlight Color:</label>
        <select @onchange="OnRowHoverHighlightChange">
            <option>Default</option>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
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
                            IsRowHoverEnabled="@RowHoverEnabled"
                            RowHoverBackground="@HighlightColor"
                            SelectionMode="DataGridSelectionMode.MultipleRow"
                            IsColumnOptionsEnabled="true">
                        <IgbTextColumn Field="Name" Width="@("*>150")" />
                        <IgbTextColumn Field="Street" HeaderText="Street" Width="@("*>160")" />
                        <IgbTextColumn Field="City" HeaderText="City" Width="@("*>120")" />
                        <IgbNumericColumn Field="Salary" HeaderText="Salary" PositivePrefix="$" ShowGroupingSeparator="true" Width="@("*>120")" />
                        <IgbImageColumn IsEditable="false" Field="Photo" HeaderText="Photo" ContentOpacity="1" HorizontalAlignment="@CellContentHorizontalAlignment.Center" Width="@("*>110")" />
                        <IgbDateTimeColumn Field="Birthday" HeaderText="Date of Birth" Width="@("*>170")" />
                    </IgbDataGrid>
                </div>
            }

    </div>
</div>

@code {

    private bool RowHoverEnabled { get; set; } = true;
    private string HighlightColor { get; set; }
    private List<Employee> Data;

    protected override void OnInitialized()
    {
        Data = EmployeeData.Create(100, false);
    }

    private void OnIsRowHoverEnabledChange(ChangeEventArgs args)
    {
        bool value = args.Value != null ? (bool)args.Value : false;
        if (value)
        {
            this.RowHoverEnabled = true;
        }
        else
        {
            this.RowHoverEnabled = false;
        }
    }

    private void OnRowHoverHighlightChange(ChangeEventArgs args)
    {
        string value = (string)args.Value;
        if (value == "Default")
        {
            this.HighlightColor = "";
        }
        else if(value == "Red")
        {
            this.HighlightColor = "red";
        }
        else if (value == "Blue")
        {
            this.HighlightColor = "blue";
        }
        else if (value == "Green")
        {
            this.HighlightColor = "green";
        }

        StateHasChanged();
    }
}
```


<div class="divider--half"></div>

## Overview

Highlighting records in the Blazor data can be toggled by setting the [`IsRowHoverEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_IsRowHoverEnabled) boolean property of the Blazor grid. Note, this is enabled by default.

In addition, the color is configurable by setting the [`RowHoverBackground`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_RowHoverBackground) string property to a hex value.

## Code Snippet

The following demonstrates how to enable row highlighting on the Blazor data grid and applies the color blue:

```razor
<IgbDataGrid Height="100%" Width="100%"
    DataSource="DataSource"
    IsRowHoverEnabled="true"
    RowHoverBackground="#bfbfff" />
```

## API References

- [`IsRowHoverEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_IsRowHoverEnabled)
- [`RowHoverBackground`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_RowHoverBackground)
