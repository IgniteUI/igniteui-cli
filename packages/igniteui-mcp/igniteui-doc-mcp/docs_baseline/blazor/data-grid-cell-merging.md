---
title: Blazor Data Grid | Cell Merging | Merging | Infragistics
_description: Use the cell merging feature of the Infragistics' Blazor data grid to join cells with duplicate values.
_keywords: Blazor Table, Data Grid, cell merging, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "MergedCellMode", "MergedCellEvaluationCriteria"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Cell Merging
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor Grid Cell Merging

The Ignite UI for Blazor Data Table / Data Grid supports cell merging. You may opt-in and detect when adjacent sibling records for a specific column contains the same value. While the cells are not active, selected, or in edit mode, the value displays across the cells.

## Blazor Grid Cell Merging Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">

    <div class="options horizontal">

        <label class="options-label">Merged Cell Mode:</label>
        <select @onchange="OnMergedCellModeChange">
            <option>Always</option>
            <option>Never</option>
            <option>OnlyWhenSorted</option>
        </select>

    </div>
    <div class="container vertical">

        @if (Data != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%" MergedCellMode="@MergedCellSelection"
                  DataSource="Data"
                  AutoGenerateColumns="false"
                  ActivationMode="GridActivationMode.Cell"
                  HeaderClickAction="HeaderClickAction.SortByMultipleColumnsTriState">

                    <IgbTextColumn Width="@("*>140")" Field="Category" />
                    <IgbTextColumn Width="@("*>160")" Field="Type" />
                    <IgbTextColumn Width="@("*>140")" Field="Contract" />
                    <IgbTextColumn Width="@("*>150")" Field="Settlement" />
                    <IgbTextColumn Width="@("*>150")" Field="Region" />
                    <IgbTextColumn Width="@("*>160")" Field="Country" />

                    <IgbNumericColumn Width="@("*>140")" Field="Open" HeaderText="Open" ShowGroupingSeparator="true" PositivePrefix="$" MinFractionDigits="2" MaxFractionDigits="2" />
                    <IgbNumericColumn Width="@("*>140")" Field="Price" HeaderText="Close" ShowGroupingSeparator="true" PositivePrefix="$" MinFractionDigits="2" MaxFractionDigits="2" />
                    <IgbNumericColumn Width="@("*>130")" Field="Change" MinFractionDigits="2" MaxFractionDigits="2" />
                    <IgbNumericColumn Width="@("*>150")" Field="ChangePercent" NegativeSuffix="%" PositiveSuffix="%" MinFractionDigits="2" MaxFractionDigits="2" />
                    <IgbNumericColumn Width="@("*>110")" Field="Buy" ShowGroupingSeparator="true" PositivePrefix="$" MinFractionDigits="2" MaxFractionDigits="2" />
                    <IgbNumericColumn Width="@("*>110")" Field="Sell" ShowGroupingSeparator="true" PositivePrefix="$" MinFractionDigits="2" MaxFractionDigits="2" />
                    <IgbNumericColumn Width="@("*>130")" Field="Spread" ShowGroupingSeparator="true" MinFractionDigits="2" MaxFractionDigits="2" />
                    <IgbNumericColumn Width="@("*>130")" Field="Volume" ShowGroupingSeparator="true" MinFractionDigits="0" MaxFractionDigits="0" />
                    <IgbNumericColumn Width="@("*>130")" Field="DailyHigh" ShowGroupingSeparator="true" MinFractionDigits="2" MaxFractionDigits="2" PositivePrefix="$" />
                    <IgbNumericColumn Width="@("*>130")" Field="DailyLow" ShowGroupingSeparator="true" MinFractionDigits="2" MaxFractionDigits="2" PositivePrefix="$" />
                    <IgbNumericColumn Width="@("*>130")" Field="YearlyHigh" ShowGroupingSeparator="true" MinFractionDigits="2" MaxFractionDigits="2" PositivePrefix="$" />
                    <IgbNumericColumn Width="@("*>130")" Field="YearlyLow" ShowGroupingSeparator="true" MinFractionDigits="2" MaxFractionDigits="2" PositivePrefix="$" />
                    <IgbNumericColumn Width="@("*>130")" Field="YearlyStart" ShowGroupingSeparator="true" MinFractionDigits="2" MaxFractionDigits="2" PositivePrefix="$" />

                    <IgbDateTimeColumn Width="@("*>140")" Field="Maturity" HorizontalAlignment="@CellContentHorizontalAlignment.Right" />
                    <IgbTextColumn Width="@("*>120")" Field="Currency" />
                    <IgbTextColumn Width="@("*>110")" Field="Risk" />
                    <IgbTextColumn Width="@("*>130")" Field="Sector" />
                    <IgbTextColumn Width="@("*>130")" Field="Security" />
                    <IgbTextColumn Width="@("*>170")" Field="Issuer" />

                </IgbDataGrid>
            </div>
        }


    </div>
</div>

@code {

    private List<PortfolioInfo> Data;
    private MergedCellMode MergedCellSelection { get; set; }

    protected override void OnInitialized()
    {
        this.MergedCellSelection = MergedCellMode.Always;
        this.Data = PortfolioData.Create(100);
    }

    private void OnMergedCellModeChange(ChangeEventArgs args)
    {
        string value = (string)args.Value;
        if (value == "Always")
        {
            this.MergedCellSelection = MergedCellMode.Always;
        }
        else if (value == "Never")
        {
            this.MergedCellSelection = MergedCellMode.Never;
        }
        else if (value == "OnlyWhenSorted")
        {
            this.MergedCellSelection = MergedCellMode.OnlyWhenSorted;
        }
        else
        {
            this.MergedCellSelection = MergedCellMode.Default;
        }
        StateHasChanged();
    }

}
```


<div class="divider--half"></div>

## Overview

Cell Merging in the Blazor data grid can be configured by using the [`MergedCellMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_MergedCellMode) option of the entire Blazor grid or individual columns. This property can be set to one of the following options, listed below:

- `Never`: The grid or column will never merge cells. This is the default behavior.
- `Always`: The grid or column will always attempt to merge cells.
- `OnlyWhenSorted`: The grid or column will only attempt to merge cells when a column is sorted.

Note, regardless of the value of this property, cells can only be merged across sibling records.

Cell merging can be evaluated based on whether the data is formatted or not using the [`MergedCellEvaluationCriteria`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_MergedCellEvaluationCriteria) property. This is applicable to the entire grid or individual columns and can be set to one of the following options, listed below:

- `RawValue`: Merge cells from adjacent rows when the raw values from the cells are the same. This is the default value.
- `FormattedText`: Merge cells from adjacent rows when the formatted value from the cells is the same.

<div class="divider--half"></div>

## API References

- `FormattedText`
- [`MergedCellEvaluationCriteria`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_MergedCellEvaluationCriteria)
- [`MergedCellMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html#IgniteUI_Blazor_Controls_IgbDataGrid_MergedCellMode)
- `OnlyWhenSorted`
