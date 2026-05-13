---
title: Blazor Composite Chart | Combo Chart| Data Visualization | Infragistics
_description: Infragistics' Blazor Composite Chart
_keywords: Blazor Charts, Composite Chart, Combo Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Composite Chart
_premium: true
---

# Blazor Composite / Combo Chart

The Ignite UI for Blazor Composite Chart, also called a Combo Chart, is visualization that combines different types of chart types in the same plot area. It is very useful when presenting two data series that have a very different scale and might be expressed in different units. The most common example is dollars on one axis and percentage on the other axis.

## Blazor Composite / Combo Example

The following example demonstrates how to create Composite Chart using [`IgbColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnSeries.html) and [`IgbLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLineSeries.html) in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options vertical">
        <span class="legend-title">Facebook Statement of Income 2019-2020</span>
        <div class="legend">
            <IgbLegend @ref="Legend" Orientation="LegendOrientation.Horizontal" />
        </div>
    </div>
    <div class="container vertical">
        <IgbDataChart Height="100%" Width="100%" Legend="Legend"
                   IsHorizontalZoomEnabled="false"
                   IsVerticalZoomEnabled="false">

            <IgbCategoryXAxis Name="xAxis" DataSource="Data" Label="Date" Overlap="0" Gap="0.1" UseClusteringMode="true"/>
            <IgbNumericYAxis Name="yAxis1" AbbreviateLargeNumbers="true" Title="In Millions of U.S. Dollars"
                          MinimumValue="0" MaximumValue="30000000" TitleLeftMargin="5" TitleRightMargin="0"/>
            <IgbNumericYAxis Name="yAxis2" AbbreviateLargeNumbers="true" Title="Percentage" MajorStrokeThickness="0"
                          MinimumValue="0" MaximumValue="160" LabelLocation="AxisLabelsLocation.OutsideRight"
                          LabelHorizontalAlignment="HorizontalAlignment.Left"/>

            <IgbColumnSeries @ref="@RevenueSeries" XAxisName="xAxis" YAxisName="yAxis1" DataSource="Data"
                          ValueMemberPath="Revenue"
                          Title="Revenue" MarkerType="MarkerType.Hidden"/>
            <IgbColumnSeries @ref="@ExpenseSeries" XAxisName="xAxis" YAxisName="yAxis1" DataSource="Data"
                          ValueMemberPath="Expenses"
                          Title="Expenses" MarkerType="MarkerType.Hidden"/>

            <IgbSplineAreaSeries @ref="@IncomeSeries" XAxisName="xAxis" YAxisName="yAxis2" DataSource="Data"
                          ValueMemberPath="IncomePerRevenue"
                          Title="Income / Revenue %" MarkerType="MarkerType.Circle"/>

            <IgbCalloutLayer DataSource="Data" IsAutoCalloutBehaviorEnabled="false" XMemberPath="RevenueX" YMemberPath="Revenue" LabelMemberPath="FormattedRevenue"
                          TargetSeries="@RevenueSeries"
                          UseValueForAutoCalloutLabels="false"
                          CalloutLeaderBrush="Transparent" CalloutTextColor="Black"
                          CalloutBackground = "Transparent"
                          CalloutPositionPadding="-5"/>

            <IgbCalloutLayer DataSource="Data" IsAutoCalloutBehaviorEnabled="false" XMemberPath="ExpensesX" YMemberPath="Expenses" LabelMemberPath="FormattedExpenses"
                          TargetSeries="@ExpenseSeries"
                          UseValueForAutoCalloutLabels="false"
                          CalloutLeaderBrush="Transparent" CalloutTextColor="Black"
                          CalloutBackground = "Transparent"
                          CalloutPositionPadding="-5"/>

            <IgbCalloutLayer IsAutoCalloutBehaviorEnabled="true" TargetSeries="@IncomeSeries"
                          UseValueForAutoCalloutLabels="true" ContentMemberPath="IncomePerRevenue"
                          CalloutLeaderBrush="Transparent" CalloutTextColor="Black"
                          CalloutBackground = "LightGray" AutoCalloutLabelPrecision="1"/>
        </IgbDataChart>
    </div>
</div>

@code {

    private IgbLegend _legend;
    private IgbLegend Legend
    {
        get { return _legend; }
        set { _legend = value; StateHasChanged(); }
    }

    private IgbColumnSeries _RevenueSeries;
    public IgbColumnSeries RevenueSeries
    {
        get { return _RevenueSeries; }
        set { _RevenueSeries = value; StateHasChanged(); }
    }

    private IgbColumnSeries _ExpenseSeries;
    public IgbColumnSeries ExpenseSeries
    {
        get { return _ExpenseSeries; }
        set { _ExpenseSeries = value; StateHasChanged(); }
    }

    private IgbSplineAreaSeries _IncomeSeries;
    public IgbSplineAreaSeries IncomeSeries
    {
        get { return _IncomeSeries; }
        set { _IncomeSeries = value; StateHasChanged(); }
    }

    private List<CompanyBudgetInfoWithFormatting> Data = new CompanyBudgetDataWithFormatting();

}
```

<div class="divider--half"></div>

## Additional Resources

- [Bar Chart](bar-chart.md)
- [Column Chart](column-chart.md)

<!-- - [Gantt Chart](gantt-chart.md) -->

- [Line Chart](line-chart.md)
- [Stacked Chart](stacked-chart.md)

## API References

- [`IgbCategoryXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryXAxis.html)
- [`IgbColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnSeries.html)
- [`IgbLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLineSeries.html)
- [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html)
- [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)
