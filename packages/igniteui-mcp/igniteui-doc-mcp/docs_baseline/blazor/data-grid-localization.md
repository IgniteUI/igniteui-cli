---
title: Blazor Data Grid | Real-Time Data Grid and Tables | Localization | Infragistics
_description: Use Infragistics' Ignite UI for Blazor Data Table & Grid which supports localization. View Ignite UI for Blazor table tutorials!
_keywords: Blazor Table, Data Grid, cell accessibility, Ignite UI for Blazor, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Localization
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Blazor Grid Localization

The Ignite UI for Blazor Data Table / Data Grid supports localizing the resource strings specific to the column options pop-up and summaries. Note, this is not intended to be used nor capable of translating the data.

<!-- Blazor -->

The Data Grid contains `SetCustomizedStringAsync` for assigning strings associated with the column options. The grid's `ActualDataSource` property also has this method for assigning resource strings necessary for the summaries.

<!-- end: Blazor -->

## Blazor Grid Localization Example

```razor
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Rendering
@using Microsoft.AspNetCore.Components.Forms
@using Microsoft.AspNetCore.Components.RenderTree
@using Microsoft.AspNetCore.Components.Web
@inject HttpClient Http;

@using IgniteUI.Blazor.Controls


<div class="container vertical">
    @if (Employees != null)
    {
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
                    SelectionMode="DataGridSelectionMode.SingleRow">

                <IgbImageColumn IsEditable="false" Width="@("*>120")" Field="Photo" HeaderText="写真" PaddingTop="5" PaddingBottom="5" PaddingRight="10"
                            HorizontalAlignment="@CellContentHorizontalAlignment.Stretch"  />

                <IgbTextColumn Width="@("*>130")" Field="Name" HeaderText="名前" />

                <IgbNumericColumn Width="@("*>130")" Field="Sales"
                                HorizontalAlignment="@CellContentHorizontalAlignment.Center" HeaderText="売上高" />

                <IgbNumericColumn Width="@("*>130")" Field="Salary" PositivePrefix="$"
                            ShowGroupingSeparator="true"
                            MaxFractionDigits="0"
                            MinFractionDigits="0"
                            HeaderText="給料"/>

                <IgbNumericColumn Width="100" Field="Age" HorizontalAlignment="@CellContentHorizontalAlignment.Center" HeaderText="年齢"/>
                <IgbDateTimeColumn Width="@("*>140")" Field="Birthday" HeaderText="生年月日" />

                <IgbImageColumn IsEditable="false" Width="@("*>110")" Field="CountryFlag" HeaderText="国旗" PaddingTop="5" PaddingBottom="5" PaddingRight="10"
                            HorizontalAlignment="@CellContentHorizontalAlignment.Stretch" />

                <IgbTextColumn Width="@("*>170")" Field="Address" HeaderText="住所"/>
                <IgbTextColumn Width="@("*>130")" Field="Phone" HeaderText="電話"/>

                <IgbTextColumn Width="@("*>120")" Field="Income" HeaderText="所得"/>

            </IgbDataGrid>
        </div>
    }
</div>

@code {

    private List<EmployeeJA> Employees;
    private String GridStrings;
    private IgbDataGrid _grid;
    private IgbDataGrid DataGridRef
    {
        get { return _grid; }
        set { _grid = value; Task.Delay(1).ContinueWith((t) => this.OnDataGridRef()); StateHasChanged(); }
    }

    protected override void OnInitialized()
    {
        this.Employees = EmployeeDataJA.Create(100, false);
    }

    private async Task OnDataGridRef()
    {
        var countryGroup = new IgbColumnGroupDescription() { Field = "Country", DisplayName = "国" };
        var incomeGroup = new IgbColumnGroupDescription() { Field = "Income", DisplayName = "所得" };
        this._grid.GroupDescriptions.Add(countryGroup);
        this._grid.GroupDescriptions.Add(incomeGroup);

        var ageSummary = new IgbColumnSummaryDescription() { Field = "Age", Operand = DataSourceSummaryOperand.Average };
        var photoSummary = new IgbColumnSummaryDescription() { Field = "Photo", Operand = DataSourceSummaryOperand.Count };
        var salarySummary = new IgbColumnSummaryDescription() { Field = "Salary", Operand = DataSourceSummaryOperand.Sum };
        var saleSummary = new IgbColumnSummaryDescription() { Field = "Sales", Operand = DataSourceSummaryOperand.Max };

        this._grid.SummaryDescriptions.Add(ageSummary);
        this._grid.SummaryDescriptions.Add(photoSummary);
        this._grid.SummaryDescriptions.Add(salarySummary);
        this._grid.SummaryDescriptions.Add(saleSummary);

        //Specific resource strings for Column-Options
        await DataGridRef.SetCustomizedStringAsync("en", DataGridResourceStrings());
        //Specific resource strings for Summaries
        await DataGridRef.ActualDataSource.SetCustomizedStringAsync("en", DataGridResourceStrings());
        await DataGridRef.InvalidateVisibleRowsAsync();
    }

    public string DataGridResourceStrings()
    {
        GridStrings =
            "{\"Apply\":\"適用\"," +
            "\"Cancel\":\"キャンセル\"," +
            "\"Clear_Column_Filter\":\"列フィルターをクリア\"," +
            "\"Column_Move\":\"移動\"," +
            "\"Column_Move_Left\":\"左\"," +
            "\"Column_Move_Right\":\"右\"," +
            "\"Column_Options_Summaries\":\"集計\"," +
            "\"Column_Options_Summary_Average\":\"平均\"," +
            "\"Column_Options_Summary_Count\":\"カウント\"," +
            "\"Column_Options_Summary_Maximum\":\"最大値\"," +
            "\"Column_Options_Summary_Minimum\":\"最小値\"," +
            "\"Column_Options_Summary_Sum\":\"合計値\"," +
            "\"Column_Pin\":\"ピン固定\"," +
            "\"Column_Pin_Left\":\"左\"," +
            "\"Column_Pin_Right\":\"右\"," +
            "\"Column_Sort\":\"ソート\"," +
            "\"Column_Sort_Ascending\":\"昇順\"," +
            "\"Column_Sort_Descending\":\"降順\"," +
            "\"ComparisonOperator_Bottom\":\"下\"," +
            "\"ComparisonOperator_BottomPercentile\":\"下位の百分位数\"," +
            "\"ComparisonOperator_Contains\":\"～を含む\"," +
            "\"ComparisonOperator_DoesNotContain\":\"～を含まない\"," +
            "\"ComparisonOperator_DoesNotEndWith\":\"～で終わらない\"," +
            "\"ComparisonOperator_DoesNotMatch\":\"～と一致しない\"," +
            "\"ComparisonOperator_DoesNotStartWith\":\"～で始まらない\"," +
            "\"ComparisonOperator_Empty\":\"空\"," +
            "\"ComparisonOperator_EndsWith\":\"次の値で終わる\"," +
            "\"ComparisonOperator_Equals\":\"等しい\"," +
            "\"ComparisonOperator_False\":\"False\"," +
            "\"ComparisonOperator_GreaterThan\":\"次の値より大きい\"," +
            "\"ComparisonOperator_GreaterThanOrEqualTo\":\"次の値より大きいまたは等しい\"," +
            "\"ComparisonOperator_LastMonth\":\"先月\"," +
            "\"ComparisonOperator_LastQuater\":\"前四半期\"," +
            "\"ComparisonOperator_LastWeek\":\"先週\"," +
            "\"ComparisonOperator_LastYear\":\"昨年\"," +
            "\"ComparisonOperator_LessThan\":\"次の値より小さい\"," +
            "\"ComparisonOperator_LessThanOrEqualTo\":\"次の値より小さいまたは等しい\"," +
            "\"ComparisonOperator_NextMonth\":\"翌月\"," +
            "\"ComparisonOperator_NextQuater\":\"翌四半期\"," +
            "\"ComparisonOperator_NextWeek\":\"来週\"," +
            "\"ComparisonOperator_NextYear\":\"翌年\"," +
            "\"ComparisonOperator_NotEmpty\":\"空ではない\"," +
            "\"ComparisonOperator_NotEquals\":\"次の値に等しくない\"," +
            "\"ComparisonOperator_StartsWith\":\"～で始まる\"," +
            "\"ComparisonOperator_ThisMonth\":\"今月\"," +
            "\"ComparisonOperator_ThisQuarter\":\"本四半期\"," +
            "\"ComparisonOperator_ThisWeek\":\"今週\"," +
            "\"ComparisonOperator_ThisYear\":\"今年\"," +
            "\"ComparisonOperator_Today\":\"今日\"," +
            "\"ComparisonOperator_Tomorrow\":\"明日\"," +
            "\"ComparisonOperator_Top\":\"上\"," +
            "\"ComparisonOperator_TopPercentile\":\"上位の百分位数\"," +
            "\"ComparisonOperator_True\":\"True\"," +
            "\"ComparisonOperator_Yesterday\":\"昨日\"," +
            "\"Filter_Columns_List\":\"列リストのフィルター...\"," +
            "\"Search\":\"検索\"," +
            "\"Select_All\":\"(すべて選択)\"," +
            "\"DataSource_Summary_Avg\":\"平均\"," +
            "\"DataSource_Summary_Count\":\"カウント\"," +
            "\"DataSource_Summary_Max\":\"最大値\"," +
            "\"DataSource_Summary_Min\":\"最小値\"," +
            "\"DataSource_Summary_Sum\":\"合計値\"}";
        return GridStrings;
    }
}
```


<div class="divider--half"></div>

## Resource Strings

This is the full list of strings to localize the grid.

### Column Option Strings

- Apply
- Cancel
- Clear_Column_Filter
- Column_Move
- Column_Move_Left
- Column_Move_Right
- Column_Pin
- Column_Pin_Left
- Column_Pin_Right
- Column_Sort
- Column_Sort_Ascending
- Column_Sort_Descending
- Filter_Columns_List
- Search
- Select_All
- ComparisonOperator_Bottom
- ComparisonOperator_BottomPercentile
- ComparisonOperator_Contains
- ComparisonOperator_DoesNotContain
- ComparisonOperator_DoesNotEndWith
- ComparisonOperator_DoesNotMatch
- ComparisonOperator_DoesNotStartWith
- ComparisonOperator_Empty
- ComparisonOperator_EndsWith
- ComparisonOperator_Equals
- ComparisonOperator_False
- ComparisonOperator_GreaterThan
- ComparisonOperator_GreaterThanOrEqualTo
- ComparisonOperator_LastMonth
- ComparisonOperator_LastQuarter
- ComparisonOperator_LastWeek
- ComparisonOperator_LastYear
- ComparisonOperator_LessThan
- ComparisonOperator_LessThanOrEqualTo
- ComparisonOperator_NextMonth
- ComparisonOperator_NextQuarter
- ComparisonOperator_NextWeek
- ComparisonOperator_NextYear
- ComparisonOperator_NotEmpty
- ComparisonOperator_NotEquals
- ComparisonOperator_StartsWith
- ComparisonOperator_ThisMonth
- ComparisonOperator_ThisQuarter
- ComparisonOperator_ThisWeek
- ComparisonOperator_ThisYear
- ComparisonOperator_Today
- ComparisonOperator_Tomorrow
- ComparisonOperator_Top
- ComparisonOperator_TopPercentile
- ComparisonOperator_True
- ComparisonOperator_Yesterday
- Column_Options_Summary_Average
- Column_Options_Summary_Count
- Column_Options_Summary_Maximum
- Column_Options_Summary_Minimum
- Column_Options_Summary_Sum
- Column_Options_Summaries

### Summary Strings

- DataSource_Summary_Avg
- DataSource_Summary_Count
- DataSource_Summary_Max
- DataSource_Summary_Min
- DataSource_Summary_Sum

## API References

- `ActualDataSource`
- `SetCustomizedStringAsync`
