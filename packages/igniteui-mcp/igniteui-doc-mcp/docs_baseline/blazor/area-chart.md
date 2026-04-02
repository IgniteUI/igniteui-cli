---
title: Blazor Area Chart | Data Visualization | Infragistics
_description: Infragistics' Blazor Area Chart
_keywords: Blazor Charts, Area Chart, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "XamDataChart", "CategoryChartType"]
namespace: Infragistics.Controls.Charts
_tocName: Area Chart
_premium: true
---

# Blazor Area Chart

The Ignite UI for Blazor Area Chart renders as a collection of points connected by straight line segments with the area below the line filled in. Values are represented on the y-axis (labels on the left side) and categories are displayed on the x-axis (bottom labels). This chart emphasize the amount of change over a period of time or compare multiple items as well as the relationship of parts of a whole by displaying the total of the plotted values. Therefore, they are often chronological, showing a change of quantity e.g. accumulation of a commodity over time.

## Blazor Area Chart Example

You can create Blazor Category Area Chart in the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control by binding your data to [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_DataSource) property and setting [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) property to **Area** enum, as shown in the example below.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Renewable Electricity Generated
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
        ChartType="CategoryChartType.Area"
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe", "China", "America" })"
        YAxisTitle="TWh"
        YAxisTitleLeftMargin="10"
        YAxisTitleRightMargin="5"
        YAxisLabelLeftMargin="0"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series">
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

    private CountryRenewableElectricity _countryRenewableElectricity = null;
    public CountryRenewableElectricity CountryRenewableElectricity
    {
        get
        {
            if (_countryRenewableElectricity == null)
            {
                _countryRenewableElectricity = new CountryRenewableElectricity();
            }
            return _countryRenewableElectricity;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryRenewableElectricityItem
{
    public string Year { get; set; }
    public double Europe { get; set; }
    public double China { get; set; }
    public double America { get; set; }
}

public class CountryRenewableElectricity
    : List<CountryRenewableElectricityItem>
{
    public CountryRenewableElectricity()
    {
        this.Add(new CountryRenewableElectricityItem() { Year = @"2009", Europe = 34, China = 21, America = 19 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2010", Europe = 43, China = 26, America = 24 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2011", Europe = 66, China = 29, America = 28 });
        // ... 9 more items
    }
}
```


<div class="divider--half"></div>

## Area Chart Recommendations

### Area Chart Use Cases

There are several common use cases for choosing an Area Chart:

- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming, and Drill-down.
- Need to compare the trends of your data over time.
- Want to show the difference between 2 or more data series.
- Want to show cumulative part-to-whole comparisons of distinct categories.
- Need to show data trends for one or more categories for comparative analysis.
- Need to visualize details time-series data.

### Area Chart Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.
- Use transparent colors to ensure that data that is plotted behind another series is not blocked.

### When Not to Use Area Charts

- You have many (more than 7 or 10) series of data. Your goal is to ensure the chart is readable.
- Time-series data has similar values (data over the same period). This makes overlapped shaded areas impossible to differentiate.

### Area Chart Data Structure

- The data source must be an array or a list of data items (for single series).
- The data source must be an array of arrays or a list of lists (for multiple series).
- The data source should contain two or more data items in order to render a line between them.
- All data items must contain at least one data column (string or date time).
- All data items must contain at least one numeric data column.

## Blazor Area Chart with Single Series

Blazor Area Chart is often used to show the change of value over time such as the amount of renewable electricity produced. You can create this type of chart in [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control by binding your data and setting [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) property to `Area` value, as shown in the example below.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Renewable Electricity Generated
    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe" })"
        ChartType="CategoryChartType.Area"
        YAxisTitle="TWh"
        YAxisTitleLeftMargin="10"
        YAxisTitleRightMargin="5"
        YAxisLabelLeftMargin="0"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series">
        </IgbCategoryChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;

    }

    private IgbCategoryChart chart;

    private CountryRenewableElectricity _countryRenewableElectricity = null;
    public CountryRenewableElectricity CountryRenewableElectricity
    {
        get
        {
            if (_countryRenewableElectricity == null)
            {
                _countryRenewableElectricity = new CountryRenewableElectricity();
            }
            return _countryRenewableElectricity;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryRenewableElectricityItem
{
    public string Year { get; set; }
    public double Europe { get; set; }
    public double China { get; set; }
    public double America { get; set; }
}

public class CountryRenewableElectricity
    : List<CountryRenewableElectricityItem>
{
    public CountryRenewableElectricity()
    {
        this.Add(new CountryRenewableElectricityItem() { Year = @"2009", Europe = 34, China = 21, America = 19 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2010", Europe = 43, China = 26, America = 24 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2011", Europe = 66, China = 29, America = 28 });
        // ... 9 more items
    }
}
```


<div class="divider--half"></div>

## Blazor Area Chart with Multiple Series

Similarly to how you can show multiple [Line Chart](line-chart.md) and [Spline Chart](spline-chart.md), you may also combine multiple Area Charts in the same control. This is accomplished by binding multiple data source to [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_DataSource) property of the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Renewable Electricity Generated
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
        ChartType="CategoryChartType.Area"
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe", "China", "America" })"
        YAxisTitle="TWh"
        YAxisTitleLeftMargin="10"
        YAxisTitleRightMargin="5"
        YAxisLabelLeftMargin="0"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series">
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

    private CountryRenewableElectricity _countryRenewableElectricity = null;
    public CountryRenewableElectricity CountryRenewableElectricity
    {
        get
        {
            if (_countryRenewableElectricity == null)
            {
                _countryRenewableElectricity = new CountryRenewableElectricity();
            }
            return _countryRenewableElectricity;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryRenewableElectricityItem
{
    public string Year { get; set; }
    public double Europe { get; set; }
    public double China { get; set; }
    public double America { get; set; }
}

public class CountryRenewableElectricity
    : List<CountryRenewableElectricityItem>
{
    public CountryRenewableElectricity()
    {
        this.Add(new CountryRenewableElectricityItem() { Year = @"2009", Europe = 34, China = 21, America = 19 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2010", Europe = 43, China = 26, America = 24 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2011", Europe = 66, China = 29, America = 28 });
        // ... 9 more items
    }
}
```


<div class="divider--half"></div>

## Blazor Area Chart Styling

Area charts often have semi-transparent fill for their areas, thicker lines and slightly larger markers than usual. Below is an example showing how you can style the Area Chart from earlier accordingly.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Renewable Electricity Generated
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
        DataSource="CountryRenewableElectricity"
        IncludedProperties="@(new string[] { "Year", "Europe", "China", "America" })"
        ChartType="CategoryChartType.Area"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        MarkerBrushes="white"
        MarkerOutlines="#8ce7d9 #ee5879 #735656"
        Brushes="#8ce7d9 #ee5879 #735656"
        Outlines="#8ce7d9 #ee5879 #735656"
        YAxisTitle="TWh"
        YAxisTitleLeftMargin="10"
        YAxisLabelLeftMargin="0"
        ToolTipType="ToolTipType.Category"
        Thickness="2"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series">
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

    private CountryRenewableElectricity _countryRenewableElectricity = null;
    public CountryRenewableElectricity CountryRenewableElectricity
    {
        get
        {
            if (_countryRenewableElectricity == null)
            {
                _countryRenewableElectricity = new CountryRenewableElectricity();
            }
            return _countryRenewableElectricity;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryRenewableElectricityItem
{
    public string Year { get; set; }
    public double Europe { get; set; }
    public double China { get; set; }
    public double America { get; set; }
}

public class CountryRenewableElectricity
    : List<CountryRenewableElectricityItem>
{
    public CountryRenewableElectricity()
    {
        this.Add(new CountryRenewableElectricityItem() { Year = @"2009", Europe = 34, China = 21, America = 19 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2010", Europe = 43, China = 26, America = 24 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2011", Europe = 66, China = 29, America = 28 });
        // ... 9 more items
    }
}
```


<div class="divider--half"></div>

## Advanced Types of Area Charts

The following sections explain more advanced types of Blazor Area Charts that can be created using the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control instead of [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control with simplified API.

## Blazor Step Area Chart

The Blazor Step Area Chart belongs to a group of category charts and it is rendered using a collection of points connected by continuous vertical and horizontal lines with the area below lines filled in. Values are represented on the y-axis and categories are displayed on the x-axis. The step area chart emphasizes the amount of change over a period of time or compares multiple items. You can create this type of chart in [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control by binding your data and setting [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) property to `StepArea` value, as shown in the example below.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Renewable Electricity Generated
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
        DataSource="CountryRenewableElectricity"
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.StepArea"
        TitleAlignment="HorizontalAlignment.Left"
        TitleLeftMargin="25"
        TitleTopMargin="10"
        TitleBottomMargin="10"
        IsCategoryHighlightingEnabled="false"
        IsSeriesHighlightingEnabled="true"
        IsTransitionInEnabled="true"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        YAxisTitle="TWh"
        CrosshairsSnapToData="true">
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

    private CountryRenewableElectricity _countryRenewableElectricity = null;
    public CountryRenewableElectricity CountryRenewableElectricity
    {
        get
        {
            if (_countryRenewableElectricity == null)
            {
                _countryRenewableElectricity = new CountryRenewableElectricity();
            }
            return _countryRenewableElectricity;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryRenewableElectricityItem
{
    public string Year { get; set; }
    public double Europe { get; set; }
    public double China { get; set; }
    public double America { get; set; }
}

public class CountryRenewableElectricity
    : List<CountryRenewableElectricityItem>
{
    public CountryRenewableElectricity()
    {
        this.Add(new CountryRenewableElectricityItem() { Year = @"2009", Europe = 34, China = 21, America = 19 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2010", Europe = 43, China = 26, America = 24 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2011", Europe = 66, China = 29, America = 28 });
        // ... 9 more items
    }
}
```


<div class="divider--half"></div>

The following sections explain more advanced types of Blazor Area Charts that can be created using the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control instead of [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) control with simplified API.

## Blazor Range Area Chart

The Blazor Range Area Chart allows you show the area as a range between two values over time. You can create this type of chart in [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to [`IgbRangeAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRangeAreaSeries.html), as shown in the example below.

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

            <IgbRangeAreaSeries
            Name="rangeAreaSeries1"
            @ref="rangeAreaSeries1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            Title="Los Angeles"
            LowMemberPath="LowLA"
            HighMemberPath="HighLA"
            ShowDefaultTooltip="false"
            DataSource="TemperatureRangeData">
            </IgbRangeAreaSeries>

            <IgbRangeAreaSeries
            Name="rangeAreaSeries2"
            @ref="rangeAreaSeries2"
            XAxisName="xAxis"
            YAxisName="yAxis"
            Title="New York"
            LowMemberPath="LowNY"
            HighMemberPath="HighNY"
            ShowDefaultTooltip="false"
            DataSource="TemperatureRangeData">
            </IgbRangeAreaSeries>

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
        var rangeAreaSeries1 = this.rangeAreaSeries1;
        var rangeAreaSeries2 = this.rangeAreaSeries2;
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
    private IgbRangeAreaSeries rangeAreaSeries1;
    private IgbRangeAreaSeries rangeAreaSeries2;
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

## Blazor Stacked Area Chart

The Blazor Stacked Area Chars is rendered using a collection of points connected by line segments, with the area below the line filled in and stacked on top of each other. Stacked Area Charts follow all the same requirements as Area Charts, with the only difference being that visually, the shaded areas are stacked on top of each other. You can create this type of chart in [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to [`IgbStackedAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedAreaSeries.html), as shown in the example below.

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
            Title="Millions of Births"
            TitleAngle="-90"
            LabelFormat="{0} m">
            </IgbNumericYAxis>

            <IgbStackedAreaSeries
            Name="stackedAreaSeries"
            @ref="stackedAreaSeries"
            DataSource="ContinentsBirthRate"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ShowDefaultTooltip="true"
            MarkerType="MarkerType.Circle">
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

            </IgbStackedAreaSeries>

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
        var stackedAreaSeries = this.stackedAreaSeries;
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
    private IgbStackedAreaSeries stackedAreaSeries;
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

## Blazor Stacked 100% Area Chart

The Blazor Stacked 100% Area Chart allows you represent your data as part of a whole being changed over time e.g. a country's energy consumption related to the sources from which it is produced. In such cases representing all stacked elements equally may be a better idea. You can create this type of chart in [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to [`IgbStacked100AreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100AreaSeries.html), as shown in the example below.

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
            Label="Year">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            Interval="20"
            Title="Millions of Births"
            TitleAngle="-90"
            LabelFormat="{0}%">
            </IgbNumericYAxis>

            <IgbStacked100AreaSeries
            Name="stacked100AreaSeries"
            @ref="stacked100AreaSeries"
            DataSource="ContinentsBirthRate"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ShowDefaultTooltip="false"
            MarkerType="MarkerType.Circle">
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

            </IgbStacked100AreaSeries>

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
        var stacked100AreaSeries = this.stacked100AreaSeries;
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
    private IgbStacked100AreaSeries stacked100AreaSeries;
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

## Blazor Stacked Spline Area Chart

The Blazor Stacked Spline Area Chart is rendered using a collection of points connected by curved spline segments, with the area below the curved spline fill in and stacked on top of each other. Stacked Spline Area Chart follows all of the same requirements as area charts, with the only difference being that the visually shaded areas are stacked on top of each other. You can create this type of chart in [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to [`IgbStackedSplineAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedSplineAreaSeries.html), as shown in the example below.

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
            Title="Millions of Births"
            TitleAngle="-90"
            LabelFormat="{0} m">
            </IgbNumericYAxis>

            <IgbStackedSplineAreaSeries
            Name="stackedSplineAreaSeries"
            @ref="stackedSplineAreaSeries"
            DataSource="ContinentsBirthRate"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ShowDefaultTooltip="false"
            MarkerType="MarkerType.Circle">
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

            </IgbStackedSplineAreaSeries>

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
        var stackedSplineAreaSeries = this.stackedSplineAreaSeries;
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
    private IgbStackedSplineAreaSeries stackedSplineAreaSeries;
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

## Blazor Stacked 100% Spline Area Chart

The Blazor Stacked 100% Spline Area Chart is identical to the Stacked Spline Area Chart in all aspects except for the treatment of the values on the y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Spline Area Chart presents the data in terms of a percent of the sum of all values in a particular data point. Sometimes the chart represents part of a whole being changed over time. For example, a country's energy consumption related to the sources from which it is produced. In such cases, representing all stacked elements equally may be a better idea. You can create this type of chart in [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to [`IgbStacked100SplineAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100SplineAreaSeries.html), as shown in the example below.

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
            Label="Year">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            Interval="20"
            TitleLeftMargin="10"
            LabelFormat="{0}%">
            </IgbNumericYAxis>

            <IgbStacked100SplineAreaSeries
            Name="stacked100SplineAreaSeries"
            @ref="stacked100SplineAreaSeries"
            DataSource="ContinentsBirthRate"
            XAxisName="xAxis"
            YAxisName="yAxis"
            ShowDefaultTooltip="false"
            MarkerType="MarkerType.Circle">
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

            </IgbStacked100SplineAreaSeries>

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
        var stacked100SplineAreaSeries = this.stacked100SplineAreaSeries;
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
    private IgbStacked100SplineAreaSeries stacked100SplineAreaSeries;
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

## Blazor Radial Area Chart

The Blazor Radial Area Chart belongs to a group of [Radial Chart](radial-chart.md) and has a shape of a filled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the Area Chart, but wraps the data points around a circular axis rather than stretching them horizontally. You can create this type of chart in [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to [`IgbRadialAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialAreaSeries.html), as shown in the example below.

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


<div class="divider--half"></div>

## Blazor Polar Area Chart

The Blazor Polar Area Chart belongs to a group of [Polar Chart](polar-chart.md) and have a shape of a filled polygon, where vertices or corners are located at the polar (angle/radius) coordinates of data points and are connected by a straight line and then filling the area represented by the connected points. The Polar Area Chart uses the same concepts of data plotting as the Scatter Marker Chart, but instead wraps the points around a circle and fills in the area that is drawn, rather than stretching the points and area filled along a horizontal line. You can create this type of chart in [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to [`IgbPolarAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarAreaSeries.html), as shown in the example below.

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

            <IgbPolarAreaSeries
            Name="PolarAreaSeries1"
            @ref="polarAreaSeries1"
            DataSource="BoatSailingData"
            AngleAxisName="angleAxis"
            RadiusAxisName="radiusAxis"
            AngleMemberPath="Direction"
            RadiusMemberPath="WindSpeed"
            ShowDefaultTooltip="false"
            AreaFillOpacity="0.8"
            Thickness="1"
            Title="Wind Speed"
            MarkerType="MarkerType.Circle">
            </IgbPolarAreaSeries>

            <IgbPolarAreaSeries
            Name="PolarAreaSeries2"
            @ref="polarAreaSeries2"
            DataSource="BoatSailingData"
            AngleAxisName="angleAxis"
            RadiusAxisName="radiusAxis"
            AngleMemberPath="Direction"
            RadiusMemberPath="BoatSpeed"
            ShowDefaultTooltip="false"
            AreaFillOpacity="0.8"
            Thickness="1"
            Title="Boat Speed"
            MarkerType="MarkerType.Circle">
            </IgbPolarAreaSeries>

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
        var polarAreaSeries1 = this.polarAreaSeries1;
        var polarAreaSeries2 = this.polarAreaSeries2;
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
    private IgbPolarAreaSeries polarAreaSeries1;
    private IgbPolarAreaSeries polarAreaSeries2;
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


<div class="divider--half"></div>

## Blazor Polar Spline Area Chart

The Blazor Polar Spline Area Chart belongs to a group of [Polar Chart](polar-chart.md) and have a shape of a filled polygon, where vertices or corners are located at the polar (angle/radius) coordinates of data points and are connected by a curved spline and then filling the area represented by the connected points. The Polar Spline Area Chart uses the same concepts of data plotting as the Scatter Marker Chart, but instead wraps the points around a circle and fills in the area that is drawn, rather than stretching the points and area filled along a horizontal line. You can create this type of chart in [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to [`IgbPolarSplineAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarSplineAreaSeries.html), as shown in the example below.

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

            <IgbPolarSplineAreaSeries
            Name="PolarSplineAreaSeries1"
            @ref="polarSplineAreaSeries1"
            DataSource="BoatSailingData"
            AngleAxisName="angleAxis"
            RadiusAxisName="radiusAxis"
            AngleMemberPath="Direction"
            RadiusMemberPath="WindSpeed"
            ShowDefaultTooltip="false"
            AreaFillOpacity="0.8"
            Thickness="1"
            Title="Wind Speed"
            MarkerType="MarkerType.Circle">
            </IgbPolarSplineAreaSeries>

            <IgbPolarSplineAreaSeries
            Name="PolarSplineAreaSeries2"
            @ref="polarSplineAreaSeries2"
            DataSource="BoatSailingData"
            AngleAxisName="angleAxis"
            RadiusAxisName="radiusAxis"
            AngleMemberPath="Direction"
            RadiusMemberPath="BoatSpeed"
            ShowDefaultTooltip="false"
            AreaFillOpacity="0.8"
            Thickness="1"
            Title="Boat Speed"
            MarkerType="MarkerType.Circle">
            </IgbPolarSplineAreaSeries>

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
        var polarSplineAreaSeries1 = this.polarSplineAreaSeries1;
        var polarSplineAreaSeries2 = this.polarSplineAreaSeries2;
        var dataToolTipLayer = this.dataToolTipLayer;

    }

    private IgbDataChart chart;
    private IgbNumericAngleAxis angleAxis;
    private IgbNumericRadiusAxis radiusAxis;
    private IgbPolarSplineAreaSeries polarSplineAreaSeries1;
    private IgbPolarSplineAreaSeries polarSplineAreaSeries2;
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


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Bar Chart](bar-chart.md)
- [Column Chart](column-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)
- [Spline Chart](spline-chart.md)
- [Stacked Chart](stacked-chart.md)

## API References

The following table lists API members mentioned in above sections:

| Chart Type               | Control Name    | API Members  |
| -------------------------|-----------------|-----------------------|
| Area                     | [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) | [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) = `Area`  |
| Step Area                | [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html) | [`ChartType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_ChartType) = `StepArea`  |
| Range Area               | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)  | [`IgbRangeAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRangeAreaSeries.html)  |
| Radial Area              | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)  | [`IgbRadialAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialAreaSeries.html)  |
| Polar Area               | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)  | [`IgbPolarAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarAreaSeries.html)  |
| Polar Spline Area        | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)  | [`IgbPolarSplineAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarSplineAreaSeries.html)  |
| Stacked Area             | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)  | [`IgbStackedAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedAreaSeries.html)  |
| Stacked Spline Area      | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)  | [`IgbStackedSplineAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedSplineAreaSeries.html)  |
| Stacked 100% Area        | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)  | [`IgbStacked100AreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100AreaSeries.html)  |
| Stacked 100% Spline Area | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)  | [`IgbStacked100SplineAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100SplineAreaSeries.html)  |
