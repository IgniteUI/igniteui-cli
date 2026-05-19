---
title: Blazor Column Chart | Data Visualization | Infragistics
_description: Infragistics' Blazor Column Chart
_keywords: Blazor Charts, Column Chart, Column Graph, Vertical Bar Chart, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "XamDataChart", "ColumnSeries", "WaterfallSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "RangeColumnSeries", "RadialColumnSeries", "CategoryChartType", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Column Chart
_premium: true
---

# Blazor Column Chart

The Ignite UI for Blazor Column Char, Column Graph, or Vertical Bar Chart is among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by columns with equal widths but different heights. These columns extend from the bottom to top of the chart towards the values of data points. This chart emphasizes the amount of change over a period of time or compares multiple items. Column Chart is very similar to [Bar Chart](bar-chart.md) except that Column Chart renders in vertical orientation (up and down) while [Bar Chart](bar-chart.md) has horizontal orientation (left to right) or 90 degrees clockwise rotation.

## Blazor Column Chart Example

You can create Blazor Column Chart in the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control by binding your data and setting [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) to **Column** enum, as shown in the example below:

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
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.Column"
        DataSource="HighestGrossingMovies"
        XAxisInterval="1"
        YAxisTitle="Billions of U.S. Dollars"
        YAxisTitleLeftMargin="10"
        YAxisTitleRightMargin="5"
        YAxisLabelLeftMargin="0"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        IsCategoryHighlightingEnabled="false"
        CrosshairsDisplayMode="CrosshairsDisplayMode.None">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbCategoryChart chart;

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

<div class="divider--half"></div>

## Column Charts Recommendations

### Column Charts Use Cases

There are several uses cases for Column Charts. When you:

- Need to compare data values of related categories.
- Need to compare data over a time period.
- Need to display negative values as well as positive values in the same data set.
- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming, and Drill-down.

### Column Charts Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.

### When Not to Use Column Charts

- You have many (more than 10 or 12) series of data. Your goal is to ensure the chart is readable.

### Column Charts Data Structure

- The data model must contain at least one numeric property.
- The data model may contain an options string or date-time property for labels.
- The data source should contain at least one data item.

## Blazor Column Chart with Single Series

Column Chart belongs to a group of Category Series and it is rendered using a collection of rectangles that extend from the bottom to top of the chart towards the values of data points.

You can create this type of chart in the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control by binding your data and setting the [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) property to **Column** value, as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Average Temperature Range in New York
    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.Column"
        DataSource="TemperatureAverageData"
        YAxisTitle="Temperature in Degrees Celsius"
        YAxisTitleLeftMargin="10"
        YAxisTitleRightMargin="5"
        YAxisLabelLeftMargin="0"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        IsCategoryHighlightingEnabled="false"
        HighlightingMode="SeriesHighlightingMode.FadeOthersSpecific"
        HighlightingBehavior="SeriesHighlightingBehavior.NearestItemsAndSeries"
        CrosshairsDisplayMode="CrosshairsDisplayMode.None">
        </IgbCategoryChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;

    }

    private IgbCategoryChart chart;

    private TemperatureAverageData _temperatureAverageData = null;
    public TemperatureAverageData TemperatureAverageData
    {
        get
        {
            if (_temperatureAverageData == null)
            {
                _temperatureAverageData = new TemperatureAverageData();
            }
            return _temperatureAverageData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class TemperatureAverageDataItem
{
    public string Month { get; set; }
    public double Temperature { get; set; }
}

public class TemperatureAverageData
    : List<TemperatureAverageDataItem>
{
    public TemperatureAverageData()
    {
        this.Add(new TemperatureAverageDataItem() { Month = @"Jan", Temperature = 3 });
        this.Add(new TemperatureAverageDataItem() { Month = @"Feb", Temperature = 4 });
        this.Add(new TemperatureAverageDataItem() { Month = @"Mar", Temperature = 9 });
        // ... 9 more items
    }
}
```

<div class="divider--half"></div>

## Blazor Column Chart with Multiple Series

The Column Chart is able to render multiple columns per category for comparison purposes. You can create this type of chart in the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control by binding your data and setting the [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) property to **Column** value, as shown in the example below:

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
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.Column"
        DataSource="HighestGrossingMovies"
        XAxisInterval="1"
        YAxisTitle="Billions of U.S. Dollars"
        YAxisTitleLeftMargin="10"
        YAxisTitleRightMargin="5"
        YAxisLabelLeftMargin="0"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        IsCategoryHighlightingEnabled="false"
        CrosshairsDisplayMode="CrosshairsDisplayMode.None">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbCategoryChart chart;

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

<div class="divider--half"></div>

## Blazor Column Chart Styling

The Blazor Column Chart has many options for styling and modification of the visual appearance.

You can create this type of chart in the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control by binding your data, as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Percentage Change in Energy Generation
    </div>
    <div class="legend">
        <IgbLegend
        Name="legend"
        @ref="legend"
        Orientation="LegendOrientation.Horizontal">
        </IgbLegend>

    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        DataSource="EnergyRenewableConsumption"
        ChartType="CategoryChartType.Column"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        IsSeriesHighlightingEnabled="true"
        Brushes="#9de772 #8b5bb1 #6db1ff #ee5879 #f8a15f"
        Outlines="white"
        XAxisMajorStroke="lightgray"
        XAxisGap="0.5"
        CrosshairsDisplayMode="CrosshairsDisplayMode.None"
        IsCategoryHighlightingEnabled="false"
        HighlightingMode="SeriesHighlightingMode.FadeOthersSpecific"
        HighlightingBehavior="SeriesHighlightingBehavior.NearestItemsAndSeries">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbCategoryChart chart;

    private EnergyRenewableConsumption _energyRenewableConsumption = null;
    public EnergyRenewableConsumption EnergyRenewableConsumption
    {
        get
        {
            if (_energyRenewableConsumption == null)
            {
                _energyRenewableConsumption = new EnergyRenewableConsumption();
            }
            return _energyRenewableConsumption;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EnergyRenewableConsumptionItem
{
    public string Location { get; set; }
    public double Year { get; set; }
    public double Hydro { get; set; }
    public double Solar { get; set; }
    public double Wind { get; set; }
    public double Other { get; set; }
}

public class EnergyRenewableConsumption
    : List<EnergyRenewableConsumptionItem>
{
    public EnergyRenewableConsumption()
    {
        this.Add(new EnergyRenewableConsumptionItem() { Location = @"China", Year = 2019, Hydro = 1269.5, Solar = 223, Wind = 405.2, Other = 102.8 });
        this.Add(new EnergyRenewableConsumptionItem() { Location = @"Europe", Year = 2019, Hydro = 632.54, Solar = 154, Wind = 461.3, Other = 220.3 });
        this.Add(new EnergyRenewableConsumptionItem() { Location = @"USA", Year = 2019, Hydro = 271.16, Solar = 108, Wind = 303.4, Other = 78.34 });
        // ... 2 more items
    }
}
```

<div class="divider--half"></div>

## Advanced Types of Column Charts

The following sections explain more advanced types of Blazor Column Charts that can be created using the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control instead of [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control with simplified API.

## Blazor Waterfall Chart

The Waterfall Chart belongs to a group of category charts and it is rendered using a collection of vertical columns that show the difference between consecutive data points. The columns are color coded for distinguishing between positive and negative changes in value. The Waterfall Chart is similar in appearance to the [Range Column Chart](column-chart.md#blazor-range-column-chart), but it requires only one numeric data column rather than two columns for each data point.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbWaterfallSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbWaterfallSeries.html), as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Facebook Consolidated Statements of Income
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
            Label="Category"
            Interval="1"
            DataSource="CompanyIncomeData"
            Overlap="1">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            Title="Millions of Dollars"
            TitleAngle="90"
            TitleLeftMargin="10"
            MinimumValue="0"
            MaximumValue="60">
            </IgbNumericYAxis>

            <IgbWaterfallSeries
            Name="WaterfallSeries1"
            @ref="waterfallSeries1"
            Title="Value"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CompanyIncomeData"
            ValueMemberPath="Costs"
            ShowDefaultTooltip="true"
            IsTransitionInEnabled="true">
            </IgbWaterfallSeries>

            <IgbWaterfallSeries
            Name="WaterfallSeries2"
            @ref="waterfallSeries2"
            Title="Value"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CompanyIncomeData"
            Brush="#7446b9"
            Outline="#7446b9"
            ValueMemberPath="NetIncome"
            ShowDefaultTooltip="true"
            IsTransitionInEnabled="true">
            </IgbWaterfallSeries>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var waterfallSeries1 = this.waterfallSeries1;
        var waterfallSeries2 = this.waterfallSeries2;

    }

    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbWaterfallSeries waterfallSeries1;
    private IgbWaterfallSeries waterfallSeries2;

    private CompanyIncomeData _companyIncomeData = null;
    public CompanyIncomeData CompanyIncomeData
    {
        get
        {
            if (_companyIncomeData == null)
            {
                _companyIncomeData = new CompanyIncomeData();
            }
            return _companyIncomeData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CompanyIncomeDataItem
{
    public double Costs { get; set; }
    public double NetIncome { get; set; }
    public string Category { get; set; }
}

public class CompanyIncomeData
    : List<CompanyIncomeDataItem>
{
    public CompanyIncomeData()
    {
        this.Add(new CompanyIncomeDataItem() { Costs = 55, NetIncome = double.NaN, Category = @"Revenue" });
        this.Add(new CompanyIncomeDataItem() { Costs = 45, NetIncome = double.NaN, Category = @"Expenses" });
        this.Add(new CompanyIncomeDataItem() { Costs = 35, NetIncome = double.NaN, Category = @"Research" });
        // ... 4 more items
    }
}
```

<div class="divider--half"></div>

## Blazor Stacked Column Chart

The Stacked Column Chart is similar to the [Category Column Chart](column-chart.md#blazor-column-chart-example) in all aspects, except the series are represented on top of one another rather than to the side. The Stacked Column Chart is used to show comparing results between series. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the Y-Axis, and all negative values are grouped on the negative side of the Y-Axis. The Stacked Column Chart uses the same concepts of data plotting as the [Stacked Bar Chart](stacked-chart.md#blazor-stacked-bar-chart) but data points are stacked along vertical line (Y-Axis) rather than along horizontal line (X-Axis).

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStackedBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedBarSeries.html), as shown in the example below:

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

<div class="divider--half"></div>

## Blazor Stacked 100% Column Chart

The Stacked 100% Column Chart is identical to the [Stacked Column Chart](stacked-chart.md#blazor-stacked-column-chart) in all aspects except in their treatment of the values on Y-Axis. Instead of presenting a direct representation of the data, the Stacked 100 Column Chart presents the data in terms of percent of the sum of all values in a data point.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStacked100BarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100BarSeries.html), as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Distribution of Online Traffic Worldwide, by Device
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
            DataSource="OnlineTrafficByDevice"
            Label="Category"
            Gap="0.75">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            MinimumValue="0">
            </IgbNumericYAxis>

            <IgbStacked100ColumnSeries
            Name="stacked100ColumnSeries"
            @ref="stacked100ColumnSeries"
            DataSource="OnlineTrafficByDevice"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ShowDefaultTooltip="true"
            AreaFillOpacity="1">
                <IgbStackedFragmentSeries
                Name="s1"
                @ref="s1"
                ValueMemberPath="Desktop"
                Title="@("Desktop")">
                </IgbStackedFragmentSeries>

                <IgbStackedFragmentSeries
                Name="s2"
                @ref="s2"
                ValueMemberPath="Mobile"
                Title="@("Mobile")">
                </IgbStackedFragmentSeries>

                <IgbStackedFragmentSeries
                Name="s3"
                @ref="s3"
                ValueMemberPath="Tablet"
                Title="@("Tablet")">
                </IgbStackedFragmentSeries>

            </IgbStacked100ColumnSeries>

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
        var stacked100ColumnSeries = this.stacked100ColumnSeries;
        var s1 = this.s1;
        var s2 = this.s2;
        var s3 = this.s3;
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
    private IgbStacked100ColumnSeries stacked100ColumnSeries;
    private IgbStackedFragmentSeries s1;
    private IgbStackedFragmentSeries s2;
    private IgbStackedFragmentSeries s3;
    private IgbDataToolTipLayer dataToolTipLayer;

    private OnlineTrafficByDevice _onlineTrafficByDevice = null;
    public OnlineTrafficByDevice OnlineTrafficByDevice
    {
        get
        {
            if (_onlineTrafficByDevice == null)
            {
                _onlineTrafficByDevice = new OnlineTrafficByDevice();
            }
            return _onlineTrafficByDevice;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OnlineTrafficByDeviceItem
{
    public string Category { get; set; }
    public double Desktop { get; set; }
    public double Mobile { get; set; }
    public double Tablet { get; set; }
}

public class OnlineTrafficByDevice
    : List<OnlineTrafficByDeviceItem>
{
    public OnlineTrafficByDevice()
    {
        this.Add(new OnlineTrafficByDeviceItem() { Category = @"Apparel", Desktop = 27, Mobile = 66, Tablet = 7 });
        this.Add(new OnlineTrafficByDeviceItem() { Category = @"Beauty", Desktop = 29, Mobile = 66, Tablet = 5 });
        this.Add(new OnlineTrafficByDeviceItem() { Category = @"Travel", Desktop = 41, Mobile = 51, Tablet = 8 });
        // ... 4 more items
    }
}
```

<div class="divider--half"></div>

## Blazor Range Column Chart

The Blazor Range Column Chart belongs to a group of range charts and is rendered using vertical rectangles that can appear in the middle of the plot area of the chart, rather than stretching from the bottom like the traditional [Category Column Chart](column-chart.md#blazor-column-chart-example). This type of series emphasizes the amount of change between low values and high values in the same data point over a period of time or compares multiple items. Range values are represented on the Y-Axis and categories are displayed on the X-Axis.

The Range Column Chart is identical to the [Range Area Chart](area-chart.md)(area-chart.md#blazor-range-area-chart) in all aspects except that the ranges are represented as a set of vertical columns rather than a filled area.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbRangeColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRangeColumnSeries.html), as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Monthly Temperature Range in LA and NYC
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
            Label="Month"
            Interval="1"
            DataSource="TemperatureRangeData">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            Title="Temperature (in Celsius)"
            TitleAngle="90"
            TitleLeftMargin="10">
            </IgbNumericYAxis>

            <IgbRangeColumnSeries
            Name="RangeColumnSeries1"
            @ref="rangeColumnSeries1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            Title="Los Angeles"
            LowMemberPath="LowLA"
            HighMemberPath="HighLA"
            ShowDefaultTooltip="false"
            DataSource="TemperatureRangeData">
            </IgbRangeColumnSeries>

            <IgbRangeColumnSeries
            Name="RangeColumnSeries2"
            @ref="rangeColumnSeries2"
            XAxisName="xAxis"
            YAxisName="yAxis"
            Title="New York"
            LowMemberPath="LowNY"
            HighMemberPath="HighNY"
            ShowDefaultTooltip="false"
            DataSource="TemperatureRangeData">
            </IgbRangeColumnSeries>

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
        var rangeColumnSeries1 = this.rangeColumnSeries1;
        var rangeColumnSeries2 = this.rangeColumnSeries2;
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
    private IgbRangeColumnSeries rangeColumnSeries1;
    private IgbRangeColumnSeries rangeColumnSeries2;
    private IgbDataToolTipLayer dataToolTipLayer;

    private TemperatureRangeData _temperatureRangeData = null;
    public TemperatureRangeData TemperatureRangeData
    {
        get
        {
            if (_temperatureRangeData == null)
            {
                _temperatureRangeData = new TemperatureRangeData();
            }
            return _temperatureRangeData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class TemperatureRangeDataItem
{
    public string Month { get; set; }
    public double HighNY { get; set; }
    public double LowNY { get; set; }
    public double HighLA { get; set; }
    public double LowLA { get; set; }
}

public class TemperatureRangeData
    : List<TemperatureRangeDataItem>
{
    public TemperatureRangeData()
    {
        this.Add(new TemperatureRangeDataItem() { Month = @"Jan", HighNY = 10.6, LowNY = -6.6, HighLA = 28.3, LowLA = 7.8 });
        this.Add(new TemperatureRangeDataItem() { Month = @"Feb", HighNY = 7.8, LowNY = -9.9, HighLA = 31.1, LowLA = 5.6 });
        this.Add(new TemperatureRangeDataItem() { Month = @"Mar", HighNY = 12.2, LowNY = -3.8, HighLA = 27.8, LowLA = 8.3 });
        // ... 9 more items
    }
}
```

<div class="divider--half"></div>

## Blazor Radial Column Chart

The Radial Column Chart belongs to a group of [Radial Chart](radial-chart.md), and is visualized by using a collection of rectangles that extend from the center of the chart toward the locations of data points. This utilizes the same concepts of data plotting as the [Category Column Chart](column-chart.md#blazor-column-chart-example), but wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbRadialColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialColumnSeries.html), as shown in the example below:

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

            <IgbRadialColumnSeries
            Name="RadialColumnSeries1"
            @ref="radialColumnSeries1"
            DataSource="FootballPlayerStats"
            AngleAxisName="angleAxis"
            ValueAxisName="radiusAxis"
            ValueMemberPath="Ronaldo"
            ShowDefaultTooltip="false"
            AreaFillOpacity="0.8"
            Thickness="3"
            Title="Ronaldo">
            </IgbRadialColumnSeries>

            <IgbRadialColumnSeries
            Name="RadialColumnSeries2"
            @ref="radialColumnSeries2"
            DataSource="FootballPlayerStats"
            AngleAxisName="angleAxis"
            ValueAxisName="radiusAxis"
            ValueMemberPath="Messi"
            ShowDefaultTooltip="false"
            AreaFillOpacity="0.8"
            Thickness="3"
            Title="Messi">
            </IgbRadialColumnSeries>

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
        var radialColumnSeries1 = this.radialColumnSeries1;
        var radialColumnSeries2 = this.radialColumnSeries2;
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
    private IgbRadialColumnSeries radialColumnSeries1;
    private IgbRadialColumnSeries radialColumnSeries2;
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

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Bar Chart](bar-chart.md)
- [Composite Chart](composite-chart.md)
- [Radial Chart](radial-chart.md)
- [Stacked Chart](stacked-chart.md)

## API References

The following table lists API members mentioned in the above sections:

| Chart Type          | Control Name       | API Members  |
| --------------------|--------------------|------------------------|
| Column              | [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html)    | [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) = **Column** |
| Radial Column       | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)     | [`IgbRadialColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialColumnSeries.html) |
| Range Column        | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)     | [`IgbRangeColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRangeColumnSeries.html) |
| Stacked Column      | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)     | [`IgbStackedColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedColumnSeries.html) |
| Stacked 100% Column | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)     | [`IgbStacked100ColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100ColumnSeries.html) |
| Waterfall           | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)     | [`IgbWaterfallSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbWaterfallSeries.html) |
