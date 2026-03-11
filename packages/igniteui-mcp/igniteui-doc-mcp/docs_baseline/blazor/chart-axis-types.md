---
title: Blazor Axis Types | Data Visualization | Infragistics
_description: Infragistics' Blazor Axis Types
_keywords: Blazor Axis, Options, Title, Labels, Gap, Overlap, Range, Scale, Mode, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis"]
namespace: Infragistics.Controls.Charts
_tocName: Axis Types
_premium: true
---

# Blazor Axis Types

The Ignite UI for Blazor Category Chart uses only one [`IgbCategoryXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryXAxis.html) and one [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) type. Similarly, Ignite UI for Blazor Financial Chart uses only one [`IgbTimeXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeXAxis.html) and one [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) types. However, the Ignite UI for Blazor Data Chart provides support for multiple axis types that you can position on any side of the chart by setting [axis location](chart-axis-layouts.md#axis-locations-example) or even inside of the chart by using [axis crossing](chart-axis-layouts.md#axis-crossing-example) properties. This topic goes over each one, which axes and series are compatible with each other, and some specific properties to the unique axes.

## Cartesian Axes

The [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) with Cartesian Axes, allows you to plot data in horizontal (X-axis) and vertical (X-axis) direction with 3 types of X-Axis
([`IgbCategoryXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryXAxis.html), [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html), and [`IgbTimeXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeXAxis.html)) and 2 types of Y-Axis ([`IgbCategoryYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryYAxis.html) and [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html)).

### Category X-Axis

The [`IgbCategoryXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryXAxis.html) treats its data as a sequence of categorical data items. It can display almost any type of data including strings and numbers. If you are plotting numbers on this axis, it is important to keep in mind that this axis is a discrete axis and not continuous. This means that each categorical data item will be placed equidistant from the one before it. The items will also be plotted in the order that they appear in the axis' data source.

The [`IgbCategoryXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryXAxis.html) requires you to provide a `DataSource` and a `Label` in order to plot data with it. It is generally used with the [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) to plot the following type of series:

| Category Series  | Stacked Series | Financial Series |
|------------------|----------------|--------------------|
| - [`IgbAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAreaSeries.html) <br> - [`IgbColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnSeries.html) <br> - [`IgbLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLineSeries.html) <br> - [`IgbPointSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPointSeries.html)  <br> - [`IgbSplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSplineSeries.html) <br>  - [`IgbSplineAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSplineAreaSeries.html) <br> - [`IgbStepLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepLineSeries.html) <br> - [`IgbStepAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepAreaSeries.html) <br> - [`IgbRangeAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRangeAreaSeries.html) <br> - [`IgbRangeColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRangeColumnSeries.html) <br> - [`IgbWaterfallSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbWaterfallSeries.html) | - [`IgbStackedAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedAreaSeries.html) <br> - [`IgbStackedColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedColumnSeries.html) <br> - [`IgbStackedLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedLineSeries.html) <br> - [`IgbStackedSplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedSplineSeries.html) <br> - [`IgbStacked100AreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100AreaSeries.html) <br> - [`IgbStacked100ColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100ColumnSeries.html) <br> - [`IgbStacked100LineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100LineSeries.html) <br> - [`IgbStacked100SplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100SplineSeries.html) <br> <br> <br> <br> | - [`IgbFinancialPriceSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialPriceSeries.html) <br> - [`IgbBollingerBandsOverlay`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBollingerBandsOverlay.html) <br> - [`IgbForceIndexIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbForceIndexIndicator.html) <br> - [`IgbMedianPriceIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMedianPriceIndicator.html) <br> - [`IgbMassIndexIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMassIndexIndicator.html)  <br> - [`IgbRelativeStrengthIndexIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRelativeStrengthIndexIndicator.html) <br> - [`IgbStandardDeviationIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStandardDeviationIndicator.html) <br> - [`IgbTypicalPriceIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTypicalPriceIndicator.html) <br> <br> <br> <br> |

The following example demonstrates usage of the [`IgbCategoryXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryXAxis.html) type:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Annual Birth Rates by World Region
    </div>
    <div class="legend">
        <IgbLegend
        Name="legend"
        @ref="legend"
        Orientation="LegendOrientation.Horizontal">
        </IgbLegend>

    </div>
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false">
            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="ContinentsBirthRate"
            Label="Year"
            Gap="0.75">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            MinimumValue="0"
            MaximumValue="140"
            Interval="20"
            TitleLeftMargin="10"
            LabelFormat="{0} m">
            </IgbNumericYAxis>

            <IgbStackedColumnSeries
            Name="stackedColumnSeries"
            @ref="stackedColumnSeries"
            DataSource="ContinentsBirthRate"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ShowDefaultTooltip="false">
                <IgbStackedFragmentSeries
                Name="s1"
                @ref="s1"
                ValueMemberPath="Asia"
                Title="@("Asia")">
                </IgbStackedFragmentSeries>

                <IgbStackedFragmentSeries
                Name="s2"
                @ref="s2"
                ValueMemberPath="Africa"
                Title="@("Africa")">
                </IgbStackedFragmentSeries>

                <IgbStackedFragmentSeries
                Name="s3"
                @ref="s3"
                ValueMemberPath="Europe"
                Title="@("Europe")">
                </IgbStackedFragmentSeries>

                <IgbStackedFragmentSeries
                Name="s4"
                @ref="s4"
                ValueMemberPath="NorthAmerica"
                Title="@("North America")">
                </IgbStackedFragmentSeries>

                <IgbStackedFragmentSeries
                Name="s5"
                @ref="s5"
                ValueMemberPath="SouthAmerica"
                Title="@("South America")">
                </IgbStackedFragmentSeries>

            </IgbStackedColumnSeries>

            <IgbDataToolTipLayer
            Name="dataToolTipLayer"
            @ref="dataToolTipLayer">
            </IgbDataToolTipLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var stackedColumnSeries = this.stackedColumnSeries;
        var s1 = this.s1;
        var s2 = this.s2;
        var s3 = this.s3;
        var s4 = this.s4;
        var s5 = this.s5;
        var dataToolTipLayer = this.dataToolTipLayer;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbStackedColumnSeries stackedColumnSeries;
    private IgbStackedFragmentSeries s1;
    private IgbStackedFragmentSeries s2;
    private IgbStackedFragmentSeries s3;
    private IgbStackedFragmentSeries s4;
    private IgbStackedFragmentSeries s5;
    private IgbDataToolTipLayer dataToolTipLayer;

    private ContinentsBirthRate _continentsBirthRate = null;
    public ContinentsBirthRate ContinentsBirthRate
    {
        get
        {
            if (_continentsBirthRate == null)
            {
                _continentsBirthRate = new ContinentsBirthRate();
            }
            return _continentsBirthRate;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class ContinentsBirthRateItem
{
    public string Year { get; set; }
    public double Asia { get; set; }
    public double Africa { get; set; }
    public double Europe { get; set; }
    public double NorthAmerica { get; set; }
    public double SouthAmerica { get; set; }
    public double Oceania { get; set; }
}

public class ContinentsBirthRate
    : List<ContinentsBirthRateItem>
{
    public ContinentsBirthRate()
    {
        this.Add(new ContinentsBirthRateItem() { Year = @"1950", Asia = 62, Africa = 13, Europe = 10, NorthAmerica = 4, SouthAmerica = 8, Oceania = 1 });
        this.Add(new ContinentsBirthRateItem() { Year = @"1960", Asia = 68, Africa = 12, Europe = 15, NorthAmerica = 4, SouthAmerica = 9, Oceania = 2 });
        this.Add(new ContinentsBirthRateItem() { Year = @"1970", Asia = 80, Africa = 17, Europe = 11, NorthAmerica = 3, SouthAmerica = 9, Oceania = 1 });
        // ... 5 more items
    }
}
```


### Category Y-Axis

The [`IgbCategoryYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryYAxis.html) works very similarly to the [`IgbCategoryXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryXAxis.html) described above, but it is placed vertically rather than horizontally. Also, this axis requires you to provide a `DataSource` and a `Label` in order to plot data with it. The [`IgbCategoryYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryYAxis.html) is generally used with the [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) to plot the following type of series:

- [`IgbBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBarSeries.html)
- [`IgbStackedBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedBarSeries.html)
- [`IgbStacked100BarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100BarSeries.html)

The following example demonstrates usage of the [`IgbCategoryYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryYAxis.html) type:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Highest Grossing Movie Franchises
    </div>
    <div class="legend">
        <IgbLegend
        Name="legend"
        @ref="legend"
        Orientation="LegendOrientation.Horizontal">
        </IgbLegend>

    </div>
    <div class="container vertical fill">
        <IgbDataChart
        Name="Chart"
        @ref="chart">
            <IgbCategoryYAxis
            Name="yAxis"
            @ref="yAxis"
            Label="Franchise"
            UseEnhancedIntervalManagement="true"
            EnhancedIntervalPreferMoreCategoryLabels="true"
            DataSource="HighestGrossingMovies"
            IsInverted="true"
            Gap="0.5"
            Overlap="-0.1">
            </IgbCategoryYAxis>

            <IgbNumericXAxis
            Name="xAxis"
            @ref="xAxis"
            Title="Billions of U.S. Dollars">
            </IgbNumericXAxis>

            <IgbCategoryHighlightLayer
            Name="CategoryHighlightLayer"
            @ref="categoryHighlightLayer">
            </IgbCategoryHighlightLayer>

            <IgbBarSeries
            Name="BarSeries1"
            @ref="barSeries1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            Title="Total Revenue of Franchise"
            ValueMemberPath="TotalRevenue"
            DataSource="HighestGrossingMovies"
            ShowDefaultTooltip="true"
            IsTransitionInEnabled="true"
            IsHighlightingEnabled="true">
            </IgbBarSeries>

            <IgbBarSeries
            Name="BarSeries2"
            @ref="barSeries2"
            XAxisName="xAxis"
            YAxisName="yAxis"
            Title="Highest Grossing Movie in Series"
            ValueMemberPath="HighestGrossing"
            DataSource="HighestGrossingMovies"
            ShowDefaultTooltip="true"
            IsTransitionInEnabled="true"
            IsHighlightingEnabled="true">
            </IgbBarSeries>

            <IgbDataToolTipLayer
            Name="Tooltips"
            @ref="tooltips">
            </IgbDataToolTipLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;
        var yAxis = this.yAxis;
        var xAxis = this.xAxis;
        var categoryHighlightLayer = this.categoryHighlightLayer;
        var barSeries1 = this.barSeries1;
        var barSeries2 = this.barSeries2;
        var tooltips = this.tooltips;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbDataChart chart;
    private IgbCategoryYAxis yAxis;
    private IgbNumericXAxis xAxis;
    private IgbCategoryHighlightLayer categoryHighlightLayer;
    private IgbBarSeries barSeries1;
    private IgbBarSeries barSeries2;
    private IgbDataToolTipLayer tooltips;

    private HighestGrossingMovies _highestGrossingMovies = null;
    public HighestGrossingMovies HighestGrossingMovies
    {
        get
        {
            if (_highestGrossingMovies == null)
            {
                _highestGrossingMovies = new HighestGrossingMovies();
            }
            return _highestGrossingMovies;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class HighestGrossingMoviesItem
{
    public string Franchise { get; set; }
    public double TotalRevenue { get; set; }
    public double HighestGrossing { get; set; }
}

public class HighestGrossingMovies
    : List<HighestGrossingMoviesItem>
{
    public HighestGrossingMovies()
    {
        this.Add(new HighestGrossingMoviesItem() { Franchise = @"Marvel Universe", TotalRevenue = 22.55, HighestGrossing = 2.8 });
        this.Add(new HighestGrossingMoviesItem() { Franchise = @"Star Wars", TotalRevenue = 10.32, HighestGrossing = 2.07 });
        this.Add(new HighestGrossingMoviesItem() { Franchise = @"Harry Potter", TotalRevenue = 9.19, HighestGrossing = 1.34 });
        // ... 3 more items
    }
}
```


### Numeric X-Axis

The [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) treats its data as continuously varying numerical data items. Labels on this axis are placed horizontally along the X-Axis. The location of the [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) labels depends on the `XMemberPath` property of the various [Scatter Series](../types/scatter-chart.md) that it supports if combined with a [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html). Alternatively, if combined with the [`IgbCategoryXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryXAxis.html), these labels will be placed corresponding to the `ValueMemberPath` of the [`IgbBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBarSeries.html), [`IgbStackedBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedBarSeries.html), and [`IgbStacked100BarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100BarSeries.html).

The [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html) is compatible with the following type of series:

- [`IgbBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBarSeries.html)
- [`IgbBubbleSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html)
- [`IgbHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHighDensityScatterSeries.html)
- [`IgbScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterSeries.html)
- [`IgbScatterLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterLineSeries.html)
- [`IgbScatterSplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterSplineSeries.html)
- [`IgbScatterAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterAreaSeries.html)
- [`IgbScatterContourSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterContourSeries.html)
- [`IgbScatterPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolylineSeries.html)
- [`IgbScatterPolygonSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolygonSeries.html)
- [`IgbStackedBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedBarSeries.html)
- [`IgbStacked100BarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100BarSeries.html)

The following example demonstrates usage of the [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html):

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">

        <div class="options vertical">
            <span class="legend-title">Stars Distribution in Milky Way Galaxy</span>
        </div>

        @if (Data != null)
        {
            <IgbDataChart Height="100%" Width="100%"
                              IsHorizontalZoomEnabled="true"
                              IsVerticalZoomEnabled="true">
                <IgbNumericXAxis Name="xAxis"
                              AbbreviateLargeNumbers="true"
                              TitleBottomMargin="10"
                              Title="Plane of Rotation (in Light Years)">
                </IgbNumericXAxis>
                <IgbNumericYAxis Name="yAxis"
                              AbbreviateLargeNumbers="true"
                              TitleLeftMargin="10"
                              Title="Vertical Plane (in Light Years)">
                </IgbNumericYAxis>
                <IgbHighDensityScatterSeries XAxisName="xAxis"
                                          YAxisName="yAxis"
                                          Title="Distribution"
                                          DataSource="Data"
                                          XMemberPath="X"
                                          YMemberPath="Y"
                                          ShowDefaultTooltip="true"
                                          MouseOverEnabled="true"
                                          ProgressiveLoad="true"
                                          HeatMinimumColor="Black"
                                          HeatMaximumColor="Yellow"
                                          HeatMaximum="1"
                                          HeatMinimum="5"
                                          Resolution="3">
                </IgbHighDensityScatterSeries>
            </IgbDataChart>
        }
    </div>
</div>

@code {

    private List<SampleDensityPoint> Data;

    protected override void OnInitialized()
    {
        Data = SampleDensityData.Create();
    }
}
```


### Numeric Y-Axis

The [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) treats its data as continuously varying numerical data items. Labels on this axis are placed vertically along the Y-Axis. The location of the [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) labels depends on the `YMemberPath` property of the various [ScatterSeries](../types/scatter-chart.md) that is supports if combined with a [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html). Alternatively, if combined with the [`IgbCategoryYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryYAxis.html), these labels will be placed corresponding to the `ValueMemberPath` of the category or stacked series mentioned in the table above. If you are using one of the financial series, they will be placed corresponding to the Open/High/Low/Close paths and the series type that you are using.

The [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html) is compatible with the following type of series:

| Category Series  | Stacked Series | Financial Series | Scatter Series |
|------------------|----------------|------------------|----------------|
| - [`IgbAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAreaSeries.html) <br> - [`IgbColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnSeries.html) <br> - [`IgbLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLineSeries.html) <br> - [`IgbPointSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPointSeries.html)  <br> - [`IgbSplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSplineSeries.html) <br>  - [`IgbSplineAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSplineAreaSeries.html) <br> - [`IgbStepLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepLineSeries.html) <br> - [`IgbStepAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepAreaSeries.html) <br> - [`IgbRangeAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRangeAreaSeries.html) <br> - [`IgbRangeColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRangeColumnSeries.html) <br> - [`IgbWaterfallSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbWaterfallSeries.html) <br> | - [`IgbStackedAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedAreaSeries.html) <br> - [`IgbStackedColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedColumnSeries.html) <br> - [`IgbStackedLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedLineSeries.html) <br> - [`IgbStackedSplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedSplineSeries.html) <br> - [`IgbStacked100AreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100AreaSeries.html) <br> - [`IgbStacked100ColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100ColumnSeries.html) <br> - [`IgbStacked100LineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100LineSeries.html) <br> - [`IgbStacked100SplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100SplineSeries.html) <br> | - [`IgbFinancialPriceSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialPriceSeries.html) <br> - [`IgbBollingerBandsOverlay`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBollingerBandsOverlay.html) <br> - [`IgbForceIndexIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbForceIndexIndicator.html) <br> - [`IgbMedianPriceIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMedianPriceIndicator.html) <br> - [`IgbMassIndexIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMassIndexIndicator.html)  <br> - [`IgbRelativeStrengthIndexIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRelativeStrengthIndexIndicator.html) <br> - [`IgbStandardDeviationIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStandardDeviationIndicator.html) <br> - [`IgbTypicalPriceIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTypicalPriceIndicator.html) <br> | - [`IgbBubbleSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html) <br> - [`IgbHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHighDensityScatterSeries.html) <br> - [`IgbScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterSeries.html) <br>  - [`IgbScatterLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterLineSeries.html) <br> - [`IgbScatterSplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterSplineSeries.html) <br> - [`IgbScatterAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterAreaSeries.html) <br> - [`IgbScatterContourSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterContourSeries.html) <br> - [`IgbScatterPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolylineSeries.html)  <br> - [`IgbScatterPolygonSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolygonSeries.html)  <br> |

The following example demonstrates usage of the [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html):

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Life Expectancy vs Health Expenditure
    </div>
    <div class="legend">
        <IgbLegend
        Name="legend"
        @ref="legend"
        Orientation="LegendOrientation.Horizontal">
        </IgbLegend>

    </div>
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart">
            <IgbNumericXAxis
            Name="xAxis"
            @ref="xAxis"
            Title="Life Expectancy (in years)"
            MinimumValue="72"
            MaximumValue="84"
            Interval="2">
            </IgbNumericXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            Title="Health Expenditure per Capita"
            AbbreviateLargeNumbers="true"
            MinimumValue="1000"
            MaximumValue="6000"
            Interval="1000">
            </IgbNumericYAxis>

            <IgbScatterLineSeries
            Name="ScatterLineSeries1"
            @ref="scatterLineSeries1"
            Title="Germany"
            XAxisName="xAxis"
            YAxisName="yAxis"
            XMemberPath="LifeExpectancy"
            YMemberPath="HealthExpense"
            DataSource="HealthDataForGermany"
            MarkerType="MarkerType.Circle"
            ShowDefaultTooltip="true">
            </IgbScatterLineSeries>

            <IgbScatterLineSeries
            Name="ScatterLineSeries2"
            @ref="scatterLineSeries2"
            Title="France"
            XAxisName="xAxis"
            YAxisName="yAxis"
            XMemberPath="LifeExpectancy"
            YMemberPath="HealthExpense"
            DataSource="HealthDataForFrance"
            MarkerType="MarkerType.Circle"
            ShowDefaultTooltip="true">
            </IgbScatterLineSeries>

            <IgbDataToolTipLayer
            Name="dataToolTipLayer"
            @ref="dataToolTipLayer">
            </IgbDataToolTipLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var scatterLineSeries1 = this.scatterLineSeries1;
        var scatterLineSeries2 = this.scatterLineSeries2;
        var dataToolTipLayer = this.dataToolTipLayer;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbDataChart chart;
    private IgbNumericXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbScatterLineSeries scatterLineSeries1;
    private IgbScatterLineSeries scatterLineSeries2;
    private IgbDataToolTipLayer dataToolTipLayer;

    private HealthDataForGermany _healthDataForGermany = null;
    public HealthDataForGermany HealthDataForGermany
    {
        get
        {
            if (_healthDataForGermany == null)
            {
                _healthDataForGermany = new HealthDataForGermany();
            }
            return _healthDataForGermany;
        }
    }

    private HealthDataForFrance _healthDataForFrance = null;
    public HealthDataForFrance HealthDataForFrance
    {
        get
        {
            if (_healthDataForFrance == null)
            {
                _healthDataForFrance = new HealthDataForFrance();
            }
            return _healthDataForFrance;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class HealthDataForFranceItem
{
    public double Year { get; set; }
    public double HealthExpense { get; set; }
    public double LifeExpectancy { get; set; }
    public string Name { get; set; }
}

public class HealthDataForFrance
    : List<HealthDataForFranceItem>
{
    public HealthDataForFrance()
    {
        this.Add(new HealthDataForFranceItem() { Year = 1985, HealthExpense = 2025.98, LifeExpectancy = 75.92, Name = @"Norway" });
        this.Add(new HealthDataForFranceItem() { Year = 1986, HealthExpense = 2075.21, LifeExpectancy = 76.24, Name = @"Norway" });
        this.Add(new HealthDataForFranceItem() { Year = 1987, HealthExpense = 2140.51, LifeExpectancy = 76.08, Name = @"Norway" });
        // ... 28 more items
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class HealthDataForGermanyItem
{
    public double Year { get; set; }
    public double HealthExpense { get; set; }
    public double LifeExpectancy { get; set; }
    public string Name { get; set; }
}

public class HealthDataForGermany
    : List<HealthDataForGermanyItem>
{
    public HealthDataForGermany()
    {
        this.Add(new HealthDataForGermanyItem() { Year = 1985, HealthExpense = 2579.64, LifeExpectancy = 74.05, Name = @"Germany" });
        this.Add(new HealthDataForGermanyItem() { Year = 1986, HealthExpense = 2603.94, LifeExpectancy = 74.31, Name = @"Germany" });
        this.Add(new HealthDataForGermanyItem() { Year = 1987, HealthExpense = 2668.49, LifeExpectancy = 74.56, Name = @"Germany" });
        // ... 27 more items
    }
}
```


### Time X Axis

The [`IgbTimeXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeXAxis.html) treats its data as a sequence of data items, sorted by date. Labels on this axis type are dates and can be formatted and arranged according to date intervals. The date range of this axis is determined by the date values in a data column that is mapped using its `DateTimeMemberPath`. This, along with a `DataSource` is required to plot data with this axis type.

The [`IgbTimeXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeXAxis.html) is the X-Axis type in the [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html) component.

#### Breaks in Time X Axis

The [`IgbTimeXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeXAxis.html) has the option to exclude intervals of data by using [`Breaks`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeXAxis.html#IgniteUI_Blazor_Controls_IgbTimeXAxis_Breaks). As a result, the labels and plotted data will not appear at the excluded interval. For example, working/non-working days, holidays, and/or weekends. An instance of [`IgbTimeAxisBreak`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisBreak.html) can be added to the `Breaks` collection of the axis and configured by using a unique [`Start`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisBreak.html#IgniteUI_Blazor_Controls_IgbTimeAxisBreak_Start), [`End`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisBreak.html#IgniteUI_Blazor_Controls_IgbTimeAxisBreak_End) and [`Interval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisBreak.html#IgniteUI_Blazor_Controls_IgbTimeAxisBreak_Interval).

#### Formatting in Time X Axis

The [`IgbTimeXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeXAxis.html) has the [`LabelFormats`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeXAxis.html#IgniteUI_Blazor_Controls_IgbTimeXAxis_LabelFormats) property, which represents a collection of [`IgbTimeAxisLabelFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisLabelFormat.html) objects. Each [`IgbTimeAxisLabelFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisLabelFormat.html) added to the collection is responsible for assigning a unique [`Format`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisLabelFormat.html#IgniteUI_Blazor_Controls_IgbTimeAxisLabelFormat_Format) and [`Range`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisLabelFormat.html#IgniteUI_Blazor_Controls_IgbTimeAxisLabelFormat_Range). This can be especially useful for drilling down data from years to milliseconds and adjusting the labels depending on the range of time shown by the chart.

The [`Format`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisLabelFormat.html#IgniteUI_Blazor_Controls_IgbTimeAxisLabelFormat_Format) property of the [`IgbTimeAxisLabelFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisLabelFormat.html) specifies what format to use for a particular visible range. The [`Range`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisLabelFormat.html#IgniteUI_Blazor_Controls_IgbTimeAxisLabelFormat_Range) property of the [`IgbTimeAxisLabelFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisLabelFormat.html) specifies the visible range at which the axis label formats will switch to a different format. For example, if you have two [`IgbTimeAxisLabelFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisLabelFormat.html) elements with a range set to 10 days and another set to 5 hours, then as soon as the visible range of the axis becomes less than 10 days, it will switch to 5-hour format.

#### Intervals in Time X Axis

The [`IgbTimeXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeXAxis.html) replaces the conventional [`Interval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAxisBase.html#IgniteUI_Blazor_Controls_IgbNumericAxisBase_Interval) property of the category and numeric axes with an [`Intervals`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeXAxis.html#IgniteUI_Blazor_Controls_IgbTimeXAxis_Intervals) collection of type [`IgbTimeAxisInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisInterval.html). Each [`IgbTimeAxisInterval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisInterval.html) added to the collection is responsible for assigning a unique [`Interval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisInterval.html#IgniteUI_Blazor_Controls_IgbTimeAxisInterval_Interval), [`Range`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisInterval.html#IgniteUI_Blazor_Controls_IgbTimeAxisInterval_Range) and [`IntervalType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisInterval.html#IgniteUI_Blazor_Controls_IgbTimeAxisInterval_IntervalType). This can be especially useful for drilling down data from years to milliseconds to provide unique spacing between labels depending on the range of time shown by the chart. A description of these properties is below:

- [`Interval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisInterval.html#IgniteUI_Blazor_Controls_IgbTimeAxisInterval_Interval): This specifies the interval to use. This is tied to the [`IntervalType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisInterval.html#IgniteUI_Blazor_Controls_IgbTimeAxisInterval_IntervalType) property. For example, if the [`IntervalType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisInterval.html#IgniteUI_Blazor_Controls_IgbTimeAxisInterval_IntervalType) is set to `Days`, then the numeric value specified in [`Interval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisInterval.html#IgniteUI_Blazor_Controls_IgbTimeAxisInterval_Interval) will be in days.
- [`Range`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisInterval.html#IgniteUI_Blazor_Controls_IgbTimeAxisInterval_Range): This specifies the visible range at which the axis interval will switch to a different interval. For example, if you have two TimeAxisInterval with a range set to 10 days and another set to 5 hours, as soon as the visible range in the axis becomes less than 10 days it will switch to the interval whose range is 5 hours.
- [`IntervalType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisInterval.html#IgniteUI_Blazor_Controls_IgbTimeAxisInterval_IntervalType): This specifies the unit of time for the [`Interval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTimeAxisInterval.html#IgniteUI_Blazor_Controls_IgbTimeAxisInterval_Interval) property.

## Polar Axes

The [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) with Polar Axes, allows you to plot data outwards (radius axis) from center of the chart and around (angle axis) of center of the chart.

### Category Angle Axis

The [`IgbCategoryAngleAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryAngleAxis.html) treats its data as a sequence of category data items. The labels on this axis are placed along the edge of a circle according to their position in that sequence. This type of axis can display almost any type of data including strings and numbers.

The [`IgbCategoryAngleAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryAngleAxis.html) is generally used with the [`IgbNumericRadiusAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericRadiusAxis.html) to plot [Radial Series](../types/radial-chart.md).

The following example demonstrates usage of the [`IgbCategoryAngleAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryAngleAxis.html) type:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Ronaldo vs Messi Player Stats
    </div>
    <div class="legend">
        <IgbLegend
        Name="legend"
        @ref="legend"
        Orientation="LegendOrientation.Horizontal">
        </IgbLegend>

    </div>
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false">
            <IgbCategoryAngleAxis
            Name="angleAxis"
            @ref="angleAxis"
            DataSource="FootballPlayerStats"
            Label="Attribute">
            </IgbCategoryAngleAxis>

            <IgbNumericRadiusAxis
            Name="radiusAxis"
            @ref="radiusAxis"
            InnerRadiusExtentScale="0.1"
            Interval="2"
            MinimumValue="0"
            MaximumValue="10">
            </IgbNumericRadiusAxis>

            <IgbRadialAreaSeries
            Name="RadialAreaSeries1"
            @ref="radialAreaSeries1"
            DataSource="FootballPlayerStats"
            AngleAxisName="angleAxis"
            ValueAxisName="radiusAxis"
            ValueMemberPath="Ronaldo"
            ShowDefaultTooltip="false"
            AreaFillOpacity="0.5"
            Thickness="3"
            Title="Ronaldo"
            MarkerType="MarkerType.Circle">
            </IgbRadialAreaSeries>

            <IgbRadialAreaSeries
            Name="RadialAreaSeries2"
            @ref="radialAreaSeries2"
            DataSource="FootballPlayerStats"
            AngleAxisName="angleAxis"
            ValueAxisName="radiusAxis"
            ValueMemberPath="Messi"
            ShowDefaultTooltip="false"
            AreaFillOpacity="0.5"
            Thickness="3"
            Title="Messi"
            MarkerType="MarkerType.Circle">
            </IgbRadialAreaSeries>

            <IgbDataToolTipLayer
            Name="dataToolTipLayer"
            @ref="dataToolTipLayer">
            </IgbDataToolTipLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;
        var angleAxis = this.angleAxis;
        var radiusAxis = this.radiusAxis;
        var radialAreaSeries1 = this.radialAreaSeries1;
        var radialAreaSeries2 = this.radialAreaSeries2;
        var dataToolTipLayer = this.dataToolTipLayer;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbDataChart chart;
    private IgbCategoryAngleAxis angleAxis;
    private IgbNumericRadiusAxis radiusAxis;
    private IgbRadialAreaSeries radialAreaSeries1;
    private IgbRadialAreaSeries radialAreaSeries2;
    private IgbDataToolTipLayer dataToolTipLayer;

    private FootballPlayerStats _footballPlayerStats = null;
    public FootballPlayerStats FootballPlayerStats
    {
        get
        {
            if (_footballPlayerStats == null)
            {
                _footballPlayerStats = new FootballPlayerStats();
            }
            return _footballPlayerStats;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class FootballPlayerStatsItem
{
    public string Attribute { get; set; }
    public double Ronaldo { get; set; }
    public double Messi { get; set; }
}

public class FootballPlayerStats
    : List<FootballPlayerStatsItem>
{
    public FootballPlayerStats()
    {
        this.Add(new FootballPlayerStatsItem() { Attribute = @"Dribbling", Ronaldo = 8, Messi = 10 });
        this.Add(new FootballPlayerStatsItem() { Attribute = @"Passing", Ronaldo = 8, Messi = 10 });
        this.Add(new FootballPlayerStatsItem() { Attribute = @"Finishing", Ronaldo = 10, Messi = 10 });
        // ... 5 more items
    }
}
```


### Proportional Category Angle Axis

The [`IgbProportionalCategoryAngleAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbProportionalCategoryAngleAxis.html) treats its data as a sequence of category data items. The labels on this axis are placed along the edge of a circle according to their position in that sequence. This type of axis can display almost any type of data including strings and numbers.

The [`IgbProportionalCategoryAngleAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbProportionalCategoryAngleAxis.html) is generally used with the [`IgbNumericRadiusAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericRadiusAxis.html) to plot a pie chart eg. [Radial Series](../types/radial-chart.md).

The following example demonstrates usage of the [`IgbProportionalCategoryAngleAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbProportionalCategoryAngleAxis.html) type:




### Numeric Angle Axis

The [`IgbNumericAngleAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAngleAxis.html) treats its data as continuously varying numerical data items. The labels on this axis area placed along a radius line starting from the center of the circular plot. The location of the labels on the [`IgbNumericAngleAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAngleAxis.html) varies according to the value in the data column mapped using the `RadiusMemberPath` property of the [Polar Series](../types/polar-chart.md) object or the `ValueMemberPath` property of the [Radial Series](../types/radial-chart.md) object.

The The [`IgbNumericAngleAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAngleAxis.html) can be used with either the [`IgbCategoryAngleAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryAngleAxis.html) to plot [Radial Series](../types/radial-chart.md) or with the [`IgbNumericRadiusAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericRadiusAxis.html) to plot [Polar Series](../types/polar-chart.md) respectively.

The following example demonstrates usage of the [`IgbNumericAngleAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAngleAxis.html) type:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Wind Speed vs Boat Speed
    </div>
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false">
            <IgbNumericAngleAxis
            Name="angleAxis"
            @ref="angleAxis"
            StartAngleOffset="-90"
            Interval="30"
            MinimumValue="0"
            MaximumValue="360">
            </IgbNumericAngleAxis>

            <IgbNumericRadiusAxis
            Name="radiusAxis"
            @ref="radiusAxis"
            RadiusExtentScale="0.9"
            InnerRadiusExtentScale="0.1"
            Interval="25"
            MinimumValue="0"
            MaximumValue="100">
            </IgbNumericRadiusAxis>

            <IgbPolarScatterSeries
            Name="PolarScatterSeries1"
            @ref="polarScatterSeries1"
            DataSource="BoatSailingData"
            AngleAxisName="angleAxis"
            RadiusAxisName="radiusAxis"
            AngleMemberPath="Direction"
            RadiusMemberPath="WindSpeed"
            ShowDefaultTooltip="false"
            Title="Wind Speed"
            MarkerType="MarkerType.Circle">
            </IgbPolarScatterSeries>

            <IgbPolarScatterSeries
            Name="PolarScatterSeries2"
            @ref="polarScatterSeries2"
            DataSource="BoatSailingData"
            AngleAxisName="angleAxis"
            RadiusAxisName="radiusAxis"
            AngleMemberPath="Direction"
            RadiusMemberPath="BoatSpeed"
            ShowDefaultTooltip="false"
            Title="Boat Speed"
            MarkerType="MarkerType.Circle">
            </IgbPolarScatterSeries>

            <IgbDataToolTipLayer
            Name="dataToolTipLayer"
            @ref="dataToolTipLayer">
            </IgbDataToolTipLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var angleAxis = this.angleAxis;
        var radiusAxis = this.radiusAxis;
        var polarScatterSeries1 = this.polarScatterSeries1;
        var polarScatterSeries2 = this.polarScatterSeries2;
        var dataToolTipLayer = this.dataToolTipLayer;

    }

    private IgbDataChart chart;
    private IgbNumericAngleAxis angleAxis;
    private IgbNumericRadiusAxis radiusAxis;
    private IgbPolarScatterSeries polarScatterSeries1;
    private IgbPolarScatterSeries polarScatterSeries2;
    private IgbDataToolTipLayer dataToolTipLayer;

    private BoatSailingData _boatSailingData = null;
    public BoatSailingData BoatSailingData
    {
        get
        {
            if (_boatSailingData == null)
            {
                _boatSailingData = new BoatSailingData();
            }
            return _boatSailingData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class BoatSailingDataItem
{
    public double Direction { get; set; }
    public double BoatSpeed { get; set; }
    public double WindSpeed { get; set; }
}

public class BoatSailingData
    : List<BoatSailingDataItem>
{
    public BoatSailingData()
    {
        this.Add(new BoatSailingDataItem() { Direction = 0, BoatSpeed = 70, WindSpeed = 90 });
        this.Add(new BoatSailingDataItem() { Direction = 45, BoatSpeed = 35, WindSpeed = 65 });
        this.Add(new BoatSailingDataItem() { Direction = 90, BoatSpeed = 25, WindSpeed = 45 });
        // ... 6 more items
    }
}
```


### Numeric Radius Axis

The [`IgbNumericRadiusAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericRadiusAxis.html) treats the data as continuously varying numerical data items. The labels on this axis are placed around the circular plot. The location of the labels varies according to the value in a data column mapped using the `AngleMemberPath` property of the corresponding polar series.

The [`IgbNumericRadiusAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericRadiusAxis.html) can be used with the [`IgbNumericRadiusAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericRadiusAxis.html) to plot [Polar Series](../types/polar-chart.md).

The following example demonstrates usage of the [`IgbNumericRadiusAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericRadiusAxis.html) type:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Wind Speed vs Boat Speed
    </div>
    <div class="legend">
        <IgbLegend
        Name="legend"
        @ref="legend"
        Orientation="LegendOrientation.Horizontal">
        </IgbLegend>

    </div>
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false">
            <IgbNumericAngleAxis
            Name="angleAxis"
            @ref="angleAxis"
            StartAngleOffset="-90"
            Interval="30"
            MinimumValue="0"
            MaximumValue="360">
            </IgbNumericAngleAxis>

            <IgbNumericRadiusAxis
            Name="radiusAxis"
            @ref="radiusAxis"
            RadiusExtentScale="0.9"
            InnerRadiusExtentScale="0.1"
            Interval="25"
            MinimumValue="0"
            MaximumValue="100">
            </IgbNumericRadiusAxis>

            <IgbPolarLineSeries
            Name="PolarLineSeries1"
            @ref="polarLineSeries1"
            DataSource="BoatSailingData"
            AngleAxisName="angleAxis"
            RadiusAxisName="radiusAxis"
            AngleMemberPath="Direction"
            RadiusMemberPath="WindSpeed"
            ShowDefaultTooltip="false"
            Thickness="1"
            Title="Wind Speed"
            MarkerType="MarkerType.Circle">
            </IgbPolarLineSeries>

            <IgbPolarLineSeries
            Name="PolarLineSeries2"
            @ref="polarLineSeries2"
            DataSource="BoatSailingData"
            AngleAxisName="angleAxis"
            RadiusAxisName="radiusAxis"
            AngleMemberPath="Direction"
            RadiusMemberPath="BoatSpeed"
            ShowDefaultTooltip="false"
            Thickness="1"
            Title="Boat Speed"
            MarkerType="MarkerType.Circle">
            </IgbPolarLineSeries>

            <IgbDataToolTipLayer
            Name="dataToolTipLayer"
            @ref="dataToolTipLayer">
            </IgbDataToolTipLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;
        var angleAxis = this.angleAxis;
        var radiusAxis = this.radiusAxis;
        var polarLineSeries1 = this.polarLineSeries1;
        var polarLineSeries2 = this.polarLineSeries2;
        var dataToolTipLayer = this.dataToolTipLayer;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbDataChart chart;
    private IgbNumericAngleAxis angleAxis;
    private IgbNumericRadiusAxis radiusAxis;
    private IgbPolarLineSeries polarLineSeries1;
    private IgbPolarLineSeries polarLineSeries2;
    private IgbDataToolTipLayer dataToolTipLayer;

    private BoatSailingData _boatSailingData = null;
    public BoatSailingData BoatSailingData
    {
        get
        {
            if (_boatSailingData == null)
            {
                _boatSailingData = new BoatSailingData();
            }
            return _boatSailingData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class BoatSailingDataItem
{
    public double Direction { get; set; }
    public double BoatSpeed { get; set; }
    public double WindSpeed { get; set; }
}

public class BoatSailingData
    : List<BoatSailingDataItem>
{
    public BoatSailingData()
    {
        this.Add(new BoatSailingDataItem() { Direction = 0, BoatSpeed = 70, WindSpeed = 90 });
        this.Add(new BoatSailingDataItem() { Direction = 45, BoatSpeed = 35, WindSpeed = 65 });
        this.Add(new BoatSailingDataItem() { Direction = 90, BoatSpeed = 25, WindSpeed = 45 });
        // ... 6 more items
    }
}
```


## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Layouts](chart-axis-layouts.md)
- [Axis Options](chart-axis-options.md)
