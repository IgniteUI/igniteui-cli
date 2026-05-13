---
title: Blazor Bar Chart and Graph | Ignite UI for Blazor
_description: Blazor Bar Chart is among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories. Try for FREE.
_keywords: Blazor Charts, Bar Chart, Bar Graph, Horizontal Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "BarSeries", "StackedBarSeries", "Stacked100BarSeries", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Bar Chart
_premium: true
---

# Blazor Bar Chart

The Ignite UI for Blazor Bar Chart, Bar Graph, or Horizontal Bar Chart, is among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by horizontal bars with equal heights but different lengths. This chart is ideal for showing variations in the value of an item over time. Data is represented using a collection of rectangles that extend from the left to right of the chart towards the values of data points. Bar Chart is very similar to [Column Chart](column-chart.md) except that Bar Chart renders with 90 degrees clockwise rotation and therefore it has horizontal orientation (left to right) while [Column Chart](column-chart.md) has vertical orientation (up and down)

## Blazor Bar Chart Example

You can create Blazor Bar Chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data sources to multiple [`IgbBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBarSeries.html), as shown in the example below:

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

<div class="divider--half"></div>

## Bar Chart Recommendations

### Are Blazor Bar Charts right for your project?

Blazor Bar Chart includes several variants based on your data or how you want to tell the correct story with your data. These include:

- Grouped Bar Chart
- Stacked Bar Chart
- Polar Bar Chart
- Stacked 100 Bar Chart

### Bar Chart Use Cases

There are several common use cases for choosing a Bar Chart:

- You need to show trends over time or a numeric value change in a category of data.
- You need to compare data values of 1 or more data series.
- You want to show a part-to-whole comparison.
- You want to show top or bottom percentage of categories.
- Analyzing multiple data points grouped in sub-categories (Stacked Bar).

These use cases are commonly used for the following scenarios:

- Sales Management.
- Inventory Management.
- Stock Charts.
- Any String Value Comparing a Numeric Value or Time-Series Value.

### Bar Chart Best Practices

- Start you numeric Axis at 0.
- Use a single color for the bars.
- Be sure the space separating each bar is 1/2 the width of the bar itself.
- Be sure ranking or comparing ordered categories (items) are sorted in increasing or decreasing order.
- Right-align category values on the Y-Axis (left side labels of chart) for readability.

### When Not to Use Bar Chart

- You have too much data so the Y-Axis can't fit in the space or is not legible.
- You need a detailed Time-Series analysis  - consider a [Line Chart](line-chart.md) with a Time-Series for this type of data.

### Bar Chart Data Structure

- The data source must be an array or a list of data items.
- The data source must contain at least one data item.
- The list must contain at least one data column (string or date time).
- The list must contain at least one numeric data column.

<div class="divider--half"></div>

## Blazor Bar Chart with Single Series

Bar Chart belongs to a group of Category Series and it is rendered using a collection of rectangles that extend from the left to right of the chart towards the values of data points. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBarSeries.html), as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Where Online Shoppers Start Their Search
    </div>
    <div class="container vertical fill">
        <IgbDataChart
        Name="Chart"
        @ref="chart"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false">
            <IgbCategoryYAxis
            Name="yAxis"
            @ref="yAxis"
            Label="Shop"
            UseEnhancedIntervalManagement="true"
            EnhancedIntervalPreferMoreCategoryLabels="true"
            DataSource="OnlineShoppingSearches"
            IsInverted="true"
            Gap="0.5"
            Overlap="-0.1">
            </IgbCategoryYAxis>

            <IgbNumericXAxis
            Name="xAxis"
            @ref="xAxis"
            LabelFormat="{0}%">
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
            ValueMemberPath="Percent"
            DataSource="OnlineShoppingSearches"
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

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var yAxis = this.yAxis;
        var xAxis = this.xAxis;
        var categoryHighlightLayer = this.categoryHighlightLayer;
        var barSeries1 = this.barSeries1;
        var tooltips = this.tooltips;

    }

    private IgbDataChart chart;
    private IgbCategoryYAxis yAxis;
    private IgbNumericXAxis xAxis;
    private IgbCategoryHighlightLayer categoryHighlightLayer;
    private IgbBarSeries barSeries1;
    private IgbDataToolTipLayer tooltips;

    private OnlineShoppingSearches _onlineShoppingSearches = null;
    public OnlineShoppingSearches OnlineShoppingSearches
    {
        get
        {
            if (_onlineShoppingSearches == null)
            {
                _onlineShoppingSearches = new OnlineShoppingSearches();
            }
            return _onlineShoppingSearches;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OnlineShoppingSearchesItem
{
    public double X { get; set; }
    public double Y { get; set; }
    public string Label { get; set; }
    public double Percent { get; set; }
    public string Shop { get; set; }
}

public class OnlineShoppingSearches
    : List<OnlineShoppingSearchesItem>
{
    public OnlineShoppingSearches()
    {
        this.Add(new OnlineShoppingSearchesItem() { X = 63, Y = 0, Label = @"63%", Percent = 63, Shop = @"Amazon" });
        this.Add(new OnlineShoppingSearchesItem() { X = 48, Y = 1, Label = @"48%", Percent = 48, Shop = @"Search Engines" });
        this.Add(new OnlineShoppingSearchesItem() { X = 33, Y = 2, Label = @"33%", Percent = 33, Shop = @"Retailer Sites" });
        // ... 5 more items
    }
}
```

<div class="divider--half"></div>

## Blazor Bar Chart with Multiple Series

The Bar Chart is able to render multiple bars per category for comparison purposes. In this example, the Bar Chart is comparing box office revenue amongst popular movie franchises. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to multiple [`IgbBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBarSeries.html), as shown in the example below:

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

<div class="divider--half"></div>

## Blazor Bar Chart Styling

The Bar Chart can be styled, and allows for the ability to use [annotation values](../features/chart-annotations.md) for each bar, for example, to demonstrate percent comparisons. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBarSeries.html) and adding a [`IgbCalloutLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalloutLayer.html), as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Where Online Shoppers Start Their Search
    </div>
    <div class="container vertical fill">
        <IgbDataChart
        Name="Chart"
        @ref="chart"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false">
            <IgbCategoryYAxis
            Name="yAxis"
            @ref="yAxis"
            Label="Shop"
            DataSource="OnlineShoppingSearches"
            IsInverted="true"
            Gap="0.75">
            </IgbCategoryYAxis>

            <IgbNumericXAxis
            Name="xAxis"
            @ref="xAxis"
            Interval="20"
            MaximumValue="80"
            MinimumValue="0"
            LabelFormat="{0}%">
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
            ValueMemberPath="Percent"
            DataSource="OnlineShoppingSearches"
            ShowDefaultTooltip="true"
            IsTransitionInEnabled="true"
            IsHighlightingEnabled="true"
            Brush="#c938cf"
            Outline="#85068a"
            Thickness="2"
            AreaFillOpacity="0.5"
            MarkerType="MarkerType.Hidden">
            </IgbBarSeries>

            <IgbCalloutLayer
            Name="CalloutLayer1"
            @ref="calloutLayer1"
            IsAutoCalloutBehaviorEnabled="true"
            CalloutTextColor="#85068a"
            CalloutBackground="#00000000"
            CalloutLeaderBrush="#00000000"
            DataSource="OnlineShoppingSearches">
            </IgbCalloutLayer>

            <IgbDataToolTipLayer
            Name="Tooltips"
            @ref="tooltips">
            </IgbDataToolTipLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var yAxis = this.yAxis;
        var xAxis = this.xAxis;
        var categoryHighlightLayer = this.categoryHighlightLayer;
        var barSeries1 = this.barSeries1;
        var calloutLayer1 = this.calloutLayer1;
        var tooltips = this.tooltips;

    }

    private IgbDataChart chart;
    private IgbCategoryYAxis yAxis;
    private IgbNumericXAxis xAxis;
    private IgbCategoryHighlightLayer categoryHighlightLayer;
    private IgbBarSeries barSeries1;
    private IgbCalloutLayer calloutLayer1;
    private IgbDataToolTipLayer tooltips;

    private OnlineShoppingSearches _onlineShoppingSearches = null;
    public OnlineShoppingSearches OnlineShoppingSearches
    {
        get
        {
            if (_onlineShoppingSearches == null)
            {
                _onlineShoppingSearches = new OnlineShoppingSearches();
            }
            return _onlineShoppingSearches;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OnlineShoppingSearchesItem
{
    public double X { get; set; }
    public double Y { get; set; }
    public string Label { get; set; }
    public double Percent { get; set; }
    public string Shop { get; set; }
}

public class OnlineShoppingSearches
    : List<OnlineShoppingSearchesItem>
{
    public OnlineShoppingSearches()
    {
        this.Add(new OnlineShoppingSearchesItem() { X = 63, Y = 0, Label = @"63%", Percent = 63, Shop = @"Amazon" });
        this.Add(new OnlineShoppingSearchesItem() { X = 48, Y = 1, Label = @"48%", Percent = 48, Shop = @"Search Engines" });
        this.Add(new OnlineShoppingSearchesItem() { X = 33, Y = 2, Label = @"33%", Percent = 33, Shop = @"Retailer Sites" });
        // ... 5 more items
    }
}
```

<div class="divider--half"></div>

## Blazor Stacked Bar Chart

A Stacked Bar Chart, or Stacked Bar Graph, is a type of category chart that is used to compare the composition of different categories of data by displaying different sized fragments in the horizontal bars of the chart. The length of each bar, or stack of fragments, is proportionate to its overall value.

The Stacked Bar Chart differs from the Bar Chart in that the data points representing your data are stacked next to each other horizontally to visually group your data. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the X-Axis, and all negative values are grouped on the negative side of the X-Axis.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStackedBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedBarSeries.html), as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Renewable Energy Consumption
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
            <IgbCategoryYAxis
            Name="yAxis"
            @ref="yAxis"
            DataSource="EnergyRenewableConsumption"
            Label="Location"
            IsInverted="true"
            Gap="0.75">
            </IgbCategoryYAxis>

            <IgbNumericXAxis
            Name="xAxis"
            @ref="xAxis"
            MinimumValue="0"
            Title="TWh">
            </IgbNumericXAxis>

            <IgbStackedBarSeries
            Name="stackedBarSeries"
            @ref="stackedBarSeries"
            DataSource="EnergyRenewableConsumption"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ShowDefaultTooltip="true"
            AreaFillOpacity="1">
                <IgbStackedFragmentSeries
                Name="s1"
                @ref="s1"
                ValueMemberPath="Hydro"
                Title="@("Hydro")">
                </IgbStackedFragmentSeries>

                <IgbStackedFragmentSeries
                Name="s2"
                @ref="s2"
                ValueMemberPath="Wind"
                Title="@("Wind")">
                </IgbStackedFragmentSeries>

                <IgbStackedFragmentSeries
                Name="s3"
                @ref="s3"
                ValueMemberPath="Solar"
                Title="@("Solar")">
                </IgbStackedFragmentSeries>

                <IgbStackedFragmentSeries
                Name="s4"
                @ref="s4"
                ValueMemberPath="Other"
                Title="@("Other")">
                </IgbStackedFragmentSeries>

            </IgbStackedBarSeries>

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
        var yAxis = this.yAxis;
        var xAxis = this.xAxis;
        var stackedBarSeries = this.stackedBarSeries;
        var s1 = this.s1;
        var s2 = this.s2;
        var s3 = this.s3;
        var s4 = this.s4;
        var dataToolTipLayer = this.dataToolTipLayer;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbDataChart chart;
    private IgbCategoryYAxis yAxis;
    private IgbNumericXAxis xAxis;
    private IgbStackedBarSeries stackedBarSeries;
    private IgbStackedFragmentSeries s1;
    private IgbStackedFragmentSeries s2;
    private IgbStackedFragmentSeries s3;
    private IgbStackedFragmentSeries s4;
    private IgbDataToolTipLayer dataToolTipLayer;

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

## Blazor Stacked 100% Bar Chart

The Blazor Stacked 100% Bar Chart is identical to the Blazor Stacked Bar Chart in all aspects except in their treatment of the values on X-Axis (bottom labels of the chart). Instead of presenting a direct representation of the data, the stacked 100 bar chart presents the data in terms of percent of the sum of all values in a data point.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStacked100BarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100BarSeries.html), as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Renewable Energy Consumption
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
            <IgbCategoryYAxis
            Name="yAxis"
            @ref="yAxis"
            DataSource="EnergyRenewableConsumption"
            Label="Location"
            IsInverted="true">
            </IgbCategoryYAxis>

            <IgbNumericXAxis
            Name="xAxis"
            @ref="xAxis"
            MinimumValue="0"
            Title="TWh">
            </IgbNumericXAxis>

            <IgbStacked100BarSeries
            Name="stacked100BarSeries"
            @ref="stacked100BarSeries"
            DataSource="EnergyRenewableConsumption"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ShowDefaultTooltip="true"
            AreaFillOpacity="1">
                <IgbStackedFragmentSeries
                Name="s1"
                @ref="s1"
                ValueMemberPath="Hydro"
                Title="@("Hydro")">
                </IgbStackedFragmentSeries>

                <IgbStackedFragmentSeries
                Name="s2"
                @ref="s2"
                ValueMemberPath="Wind"
                Title="@("Wind")">
                </IgbStackedFragmentSeries>

                <IgbStackedFragmentSeries
                Name="s3"
                @ref="s3"
                ValueMemberPath="Solar"
                Title="@("Solar")">
                </IgbStackedFragmentSeries>

                <IgbStackedFragmentSeries
                Name="s4"
                @ref="s4"
                ValueMemberPath="Other"
                Title="@("Other")">
                </IgbStackedFragmentSeries>

            </IgbStacked100BarSeries>

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
        var yAxis = this.yAxis;
        var xAxis = this.xAxis;
        var stacked100BarSeries = this.stacked100BarSeries;
        var s1 = this.s1;
        var s2 = this.s2;
        var s3 = this.s3;
        var s4 = this.s4;
        var dataToolTipLayer = this.dataToolTipLayer;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbDataChart chart;
    private IgbCategoryYAxis yAxis;
    private IgbNumericXAxis xAxis;
    private IgbStacked100BarSeries stacked100BarSeries;
    private IgbStackedFragmentSeries s1;
    private IgbStackedFragmentSeries s2;
    private IgbStackedFragmentSeries s3;
    private IgbStackedFragmentSeries s4;
    private IgbDataToolTipLayer dataToolTipLayer;

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

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Column Chart](column-chart.md)
- [Line Chart](line-chart.md)
- [Spline Chart](spline-chart.md)
- [Stacked Chart](stacked-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)
- [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource)
- [`IgbBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBarSeries.html)
- [`IgbCalloutLayer`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalloutLayer.html)
- [`IgbStackedBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedBarSeries.html)
- [`IgbStacked100BarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100BarSeries.html)
- [`IgbStackedBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedBarSeries.html)
