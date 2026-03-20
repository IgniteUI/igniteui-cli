---
title: Blazor Chart Trendlines | Data Visualization | Infragistics
_description: Infragistics' Blazor Chart Trendlines
_keywords: Blazor Charts, Trendlines, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "FinancialChart", "CategoryChart", "XamDataChart", "TrendLineType"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Trendlines
_premium: true
---

# Blazor Chart Trendlines

In Ignite UI for Blazor charts, trendlines help in identifying a trend or finding patterns in data. Trendlines are always rendered in front of data points bound to the chart and are supported by the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html), [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html), and [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) (except for stacked series, shape series, and range series).

Trendlines are off by default, but you can enable them by setting the [`TrendLineType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_TrendLineType) property. Also, you can modify multiple appearance properties of trendlines such as its brush, period, and thickness.

The trendlines also have the ability to have a dash array applied to them once enabled. This is done by setting the `TrendLineDashArray` property to an array of numbers. The numeric array describes the length of the dashes of the trendline.

## Blazor Chart Trendlines Example

The following sample depicts a [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) showing the stock trend of Microsoft between 2013 and 2017 with a **QuinticFit** trendline initially applied. There is a drop-down that will allow you to change the type of trendline that is applied, and all possible trendline types are listed within that drop-down.

```razor
@using IgniteUI.Blazor.Controls



<div class="container vertical">
    <div class="options horizontal">
        <label class="options-label">Trendlines: </label>
        <label class="options-item">
            <select @bind="@TrendLineType">
                <option>@TrendLineType.CubicFit</option>
                <option>@TrendLineType.LinearFit</option>
                <option>@TrendLineType.QuinticFit</option>
                <option>@TrendLineType.QuarticFit</option>
                <option>@TrendLineType.ExponentialFit</option>
                <option>@TrendLineType.PowerLawFit</option>
                <option>@TrendLineType.LogarithmicFit</option>
                <option>@TrendLineType.CumulativeAverage</option>
                <option>@TrendLineType.ExponentialAverage</option>
                <option>@TrendLineType.SimpleAverage</option>
                <option>@TrendLineType.ModifiedAverage</option>
                <option>@TrendLineType.WeightedAverage</option>
                <option>@TrendLineType.None</option>
            </select>
        </label>

    </div>

    <div class="container vertical">

        @if (Data != null)
        {
            <IgbFinancialChart Width="100%"
                Height="100%"
                ChartType=FinancialChartType.Bar
                Thickness=2
                DataSource="Data"
                TrendLineType="@TrendLineType"
                TrendLineThickness=2
                TrendLinePeriod=10
                TrendLineBrushes="rgba(0, 101, 209, 1)"
                ChartTitle="Microsoft Trend"
                Subtitle="Between 2013 and 2017"
                ZoomSliderType="FinancialChartZoomSliderType.None"
                IsHorizontalZoomEnabled="false"
                IsVerticalZoomEnabled="false"/>
        }
    </div>
</div>

@code {

    protected StockPrice[] Data;
    protected TrendLineType TrendLineType = TrendLineType.QuinticFit;

    protected override async Task OnInitializedAsync()
    {
        this.Data = await StocksHistory.GetMicrosoftStock();
    }
}
```


<div class="divider--half"></div>

## Blazor Chart Trendlines Dash Array Example

The following sample depicts a [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) showing a [`IgbFinancialPriceSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialPriceSeries.html) with a **QuarticFit** dashed trendline applied via the [`TrendLineDashArray`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialPriceSeries.html#IgniteUI_Blazor_Controls_IgbFinancialPriceSeries_TrendLineDashArray) property:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        ShouldAutoExpandMarginForInitialLabels="true"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        IsVerticalZoomEnabled="true"
        IsHorizontalZoomEnabled="true">
            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="Stock2Years"
            LabelLocation="AxisLabelsLocation.OutsideBottom"
            Label="Month"
            Interval="1"
            LabelExtent="30">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            LabelLocation="AxisLabelsLocation.OutsideRight">
            </IgbNumericYAxis>

            <IgbFinancialPriceSeries
            Name="Series1"
            @ref="series1"
            Title="Stock Price"
            DisplayType="PriceDisplayType.Candlestick"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="Stock2Years"
            OpenMemberPath="Open"
            HighMemberPath="High"
            LowMemberPath="Low"
            CloseMemberPath="Close"
            VolumeMemberPath="Volume"
            ShowDefaultTooltip="true"
            TrendLineType="TrendLineType.QuarticFit"
            TrendLineBrush="dodgerblue"
            TrendLineDashArray="@(new double[] { 5, 5 })">
            </IgbFinancialPriceSeries>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var series1 = this.series1;

    }

    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbFinancialPriceSeries series1;

    private Stock2Years _stock2Years = null;
    public Stock2Years Stock2Years
    {
        get
        {
            if (_stock2Years == null)
            {
                _stock2Years = new Stock2Years();
            }
            return _stock2Years;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class Stock2YearsItem
{
    public string Month { get; set; }
    public double Open { get; set; }
    public double High { get; set; }
    public double Low { get; set; }
    public double Close { get; set; }
    public double Volume { get; set; }
}

public class Stock2Years
    : List<Stock2YearsItem>
{
    public Stock2Years()
    {
        this.Add(new Stock2YearsItem() { Month = @"2020", Open = 41.1, High = 41.6, Low = 41.1, Close = 41.4, Volume = 32610 });
        this.Add(new Stock2YearsItem() { Month = @"FEB", Open = 41.4, High = 41.7, Low = 41.2, Close = 41.4, Volume = 28666 });
        this.Add(new Stock2YearsItem() { Month = @"MAR", Open = 41.3, High = 41.3, Low = 40.7, Close = 41, Volume = 30139 });
        // ... 21 more items
    }
}
```


<div class="divider--half"></div>

## Blazor Chart Trendline Layer

The [`IgbTrendLineLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html) is a series type that is designed to display a single trendline type for a target series. The difference between this and the existing trendline features on the existing series types is that since the [`IgbTrendLineLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html) is a series type, you can add more than one of them to the [`Series`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_Series) collection of the chart to have multiple trendlines attached to the same series. You can also have the trendline appear in the legend, which was not possible previously.

## Trendline Layer Usage

The [`IgbTrendLineLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html) must be provided with a [`TargetSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html#IgniteUI_Blazor_Controls_IgbTrendLineLayer_TargetSeries) and a [`TrendLineType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html#IgniteUI_Blazor_Controls_IgbTrendLineLayer_TrendLineType) in order to work properly. The different trendline types that are available are the same as the trendlines that are available on the series.

If you would like to show the [`IgbTrendLineLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html) in the Legend, you can do so by setting the `UseLegend` property to `true`.

## Styling the Trendline Layer

By default, the [`IgbTrendLineLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html) renders with the same color as its [`TargetSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html#IgniteUI_Blazor_Controls_IgbTrendLineLayer_TargetSeries) in a dashed line. This can be configured by using the various styling properties on the [`IgbTrendLineLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html).

To change the color of the trendline that is drawn, you can set its `Brush` property. Alternatively, you can also set the `UseIndex` property to `true`, which will pull from the chart's [`Brushes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_Brushes) palette based on the index in which the [`IgbTrendLineLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html) is placed in the chart's [`Series`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_Series) collection.

You can also modify the way that the [`IgbTrendLineLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html) appears by using its `AppearanceMode` and `ShiftAmount` properties. The `ShiftAmount` takes a value between -1.0 and 1.0 to determine how much of a "shift" to apply to the options that end in "Shift".

The following are the options for the `AppearanceMode` property:

- `Auto`: This will default to the DashPattern enumeration.
- `BrightnessShift`: The trendline will take the [`TargetSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html#IgniteUI_Blazor_Controls_IgbTrendLineLayer_TargetSeries) brush and modify its brightness based on the provided `ShiftAmount`.
- `DashPattern`: The trendline will appear as a dashed line. The frequency of the dashes can be modified by using the `DashArray` property on the [`IgbTrendLineLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html).
- `OpacityShift`: The trendline will take the [`TargetSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html#IgniteUI_Blazor_Controls_IgbTrendLineLayer_TargetSeries) brush and modify its opacity based on the provided `ShiftAmount`.
- `SaturationShift`: The trendline will take the [`TargetSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTrendLineLayer.html#IgniteUI_Blazor_Controls_IgbTrendLineLayer_TargetSeries) brush and modify its saturation based on the provided `ShiftAmount`.

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)

## API References

The [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) and [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) components share the following API properties:

- [`TrendLineBrushes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_TrendLineBrushes)
- [`TrendLinePeriod`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_TrendLinePeriod)
- [`TrendLineThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_TrendLineThickness)
- [`TrendLineType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_TrendLineType)

In the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) component, most types of series have the following API properties:

- [`TrendLineBrush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterBase.html#IgniteUI_Blazor_Controls_IgbScatterBase_TrendLineBrush)
- [`TrendLineDashArray`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterBase.html#IgniteUI_Blazor_Controls_IgbScatterBase_TrendLineDashArray)
- [`TrendLinePeriod`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterBase.html#IgniteUI_Blazor_Controls_IgbScatterBase_TrendLinePeriod)
- [`TrendLineThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterBase.html#IgniteUI_Blazor_Controls_IgbScatterBase_TrendLineThickness)
- [`TrendLineType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterBase.html#IgniteUI_Blazor_Controls_IgbScatterBase_TrendLineType)
