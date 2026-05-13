---
title: Blazor Scatter Chart | Data Visualization | Infragistics
_description: Infragistics' Blazor Scatter Chart
_keywords: Blazor Charts, Scatter Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "ScatterSeries", "ScatterLineSeries", "ScatterSplineSeries", "HighDensityScatterSeries", "ScatterAreaSeries", "ScatterContourSeries", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Scatter Chart
_premium: true
---

# Blazor Scatter Charts

The Ignite UI for Blazor Scatter Chart belongs to a group of charts that show the relationship among items in distinct series of data or to plot data items using numeric x and y coordinates. These charts draw attention to uneven intervals or clusters of data. They are often used to plot scientific data, and can highlight the deviation of collected data from predicted results. Also, you can use them to organize data chronologically (even if the data is not in chronological order).

## Blazor Scatter Marker Chart

Blazor Scatter Marker Chart renders as a collection of markers, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterSeries.html), as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Population Statistics for Selected Continents
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
            Title="Death Rate (per 1,000 people)"
            MinimumValue="5"
            MaximumValue="15">
            </IgbNumericXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            Title="Birth Rate (per 1,000 people)"
            MinimumValue="0"
            MaximumValue="50"
            Interval="10">
            </IgbNumericYAxis>

            <IgbScatterSeries
            Name="scatterSeries1"
            @ref="scatterSeries1"
            Title="Europe"
            XAxisName="xAxis"
            YAxisName="yAxis"
            XMemberPath="DeathRate"
            YMemberPath="BirthRate"
            DataSource="CountryDemographicEurope"
            MarkerType="MarkerType.Circle"
            ShowDefaultTooltip="true">
            </IgbScatterSeries>

            <IgbScatterSeries
            Name="scatterSeries2"
            @ref="scatterSeries2"
            Title="Africa"
            XAxisName="xAxis"
            YAxisName="yAxis"
            XMemberPath="DeathRate"
            YMemberPath="BirthRate"
            DataSource="CountryDemographicAfrican"
            MarkerType="MarkerType.Circle"
            ShowDefaultTooltip="true">
            </IgbScatterSeries>

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
        var scatterSeries1 = this.scatterSeries1;
        var scatterSeries2 = this.scatterSeries2;

        this.BindElements = () => {
            chart.Legend = this.legend;
        };
        this.BindElements();

    }

    private IgbLegend legend;
    private IgbDataChart chart;
    private IgbNumericXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbScatterSeries scatterSeries1;
    private IgbScatterSeries scatterSeries2;

    private CountryDemographicEurope _countryDemographicEurope = null;
    public CountryDemographicEurope CountryDemographicEurope
    {
        get
        {
            if (_countryDemographicEurope == null)
            {
                _countryDemographicEurope = new CountryDemographicEurope();
            }
            return _countryDemographicEurope;
        }
    }

    private CountryDemographicAfrican _countryDemographicAfrican = null;
    public CountryDemographicAfrican CountryDemographicAfrican
    {
        get
        {
            if (_countryDemographicAfrican == null)
            {
                _countryDemographicAfrican = new CountryDemographicAfrican();
            }
            return _countryDemographicAfrican;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryDemographicAfricanItem
{
    public double Population { get; set; }
    public double BirthRate { get; set; }
    public double DeathRate { get; set; }
    public string Name { get; set; }
}

public class CountryDemographicAfrican
    : List<CountryDemographicAfricanItem>
{
    public CountryDemographicAfrican()
    {
        this.Add(new CountryDemographicAfricanItem() { Population = 39728000, BirthRate = 23.9, DeathRate = 4.77, Name = @"Algeria" });
        this.Add(new CountryDemographicAfricanItem() { Population = 27884000, BirthRate = 42.32, DeathRate = 8.68, Name = @"Angola" });
        this.Add(new CountryDemographicAfricanItem() { Population = 10576000, BirthRate = 37.43, DeathRate = 9.32, Name = @"Benin" });
        // ... 51 more items
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryDemographicEuropeItem
{
    public double Population { get; set; }
    public double BirthRate { get; set; }
    public double DeathRate { get; set; }
    public string Name { get; set; }
}

public class CountryDemographicEurope
    : List<CountryDemographicEuropeItem>
{
    public CountryDemographicEurope()
    {
        this.Add(new CountryDemographicEuropeItem() { Population = 2891000, BirthRate = 11.88, DeathRate = 7.22, Name = @"Albania" });
        this.Add(new CountryDemographicEuropeItem() { Population = 8679000, BirthRate = 9.8, DeathRate = 9.6, Name = @"Austria" });
        this.Add(new CountryDemographicEuropeItem() { Population = 9439000, BirthRate = 12.5, DeathRate = 12.6, Name = @"Belarus" });
        // ... 42 more items
    }
}
```

<div class="divider--half"></div>

## Blazor Scatter Line Chart

Blazor Scatter Line Chart renders as a collection of markers connected by a straight lines, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbScatterLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterLineSeries.html), as shown in the example below:

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

<div class="divider--half"></div>

## Blazor Scatter Spline Chart

Blazor Scatter Spline Chart renders as a collection of markers connected by a curved spline, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbScatterSplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterSplineSeries.html), as shown in the example below:

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

            <IgbScatterSplineSeries
            Name="scatterSplineSeries1"
            @ref="scatterSplineSeries1"
            Title="Germany"
            XAxisName="xAxis"
            YAxisName="yAxis"
            XMemberPath="LifeExpectancy"
            YMemberPath="HealthExpense"
            DataSource="HealthDataForGermany"
            MarkerType="MarkerType.Circle"
            ShowDefaultTooltip="true">
            </IgbScatterSplineSeries>

            <IgbScatterSplineSeries
            Name="scatterSplineSeries2"
            @ref="scatterSplineSeries2"
            Title="France"
            XAxisName="xAxis"
            YAxisName="yAxis"
            XMemberPath="LifeExpectancy"
            YMemberPath="HealthExpense"
            DataSource="HealthDataForFrance"
            MarkerType="MarkerType.Circle"
            ShowDefaultTooltip="true">
            </IgbScatterSplineSeries>

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
        var scatterSplineSeries1 = this.scatterSplineSeries1;
        var scatterSplineSeries2 = this.scatterSplineSeries2;
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
    private IgbScatterSplineSeries scatterSplineSeries1;
    private IgbScatterSplineSeries scatterSplineSeries2;
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

<div class="divider--half"></div>

## Blazor Scatter High Density Chart

Use the Blazor Scatter High Density (HD) Chart to bind and show scatter data ranging from thousands to millions of data points with very little loading time. Due to this chart type being designed for such a large amount of points, it is visualized as tiny dots as opposed to full sized markers, and displays areas with the most data using a higher color density representing a cluster of data points. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHighDensityScatterSeries.html), as shown in the example below:

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

<div class="divider--half"></div>

## Blazor Scatter Area Chart

Blazor Scatter Area Chart draws a colored surface based on a triangulation of X and Y data with a numeric data value assigned to each point. This chart is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbScatterAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterAreaSeries.html), as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">

        <div class="options vertical">
            <span class="legend-title">Distribution of Magnetic Field</span>
        </div>

        @if (Data != null)
        {
        <IgbDataChart Height="100%" Width="100%"
                   GridMode="@GridMode.BeforeSeries"
                   IsHorizontalZoomEnabled="false"
                   IsVerticalZoomEnabled="false">

            @* primary axes required for scatter-contour-series *@
            <IgbNumericXAxis Name="xAxis1" LabelLocation="AxisLabelsLocation.OutsideBottom"  Title="Longitude" MinimumValue="-180" MaximumValue="180" />
            <IgbNumericYAxis Name="yAxis1" LabelLocation="AxisLabelsLocation.OutsideLeft" Title="Latitude"  MinimumValue="-90" MaximumValue="90"/>

            @* optional axes that provide more context for displayed data *@
            <IgbNumericXAxis Name="xAxis2" LabelLocation="AxisLabelsLocation.OutsideTop"  Title="Longitude" MinimumValue="-180" MaximumValue="180" />
            <IgbNumericYAxis Name="yAxis2" LabelLocation="AxisLabelsLocation.OutsideRight" Title="Latitude"  MinimumValue="-90" MaximumValue="90"/>

            <IgbScatterAreaSeries XAxisName="xAxis1"
                               YAxisName="yAxis1"
                               DataSource="Data"
                               XMemberPath="X"
                               YMemberPath="Y"
                               ColorMemberPath="Z"
                               ColorScale="@ColorScale"
                               ShowDefaultTooltip="true">
            </IgbScatterAreaSeries>

        </IgbDataChart>
        }
    </div>
</div>

@code {

    private List<SampleScatterPoint> Data;
    private IgbCustomPaletteColorScale ColorScale;

    protected override void OnInitialized()
    {
        this.ColorScale = new IgbCustomPaletteColorScale();
        this.ColorScale.InterpolationMode = ColorScaleInterpolationMode.InterpolateHSV;
        this.ColorScale.MinimumValue = - 2;
        this.ColorScale.MaximumValue = 2;
        this.ColorScale.Palette = "#8670CB, #4AC4FF, #B5CC2E, #FC8612, #ED4840";

        Data = SampleScatterData.Create();

    }
}
```

<div class="divider--half"></div>

## Blazor Scatter Contour Chart

Blazor Scatter Contour Chart draws colored contour lines based on a triangulation of X and Y data with a numeric data value assigned to each point. This chart is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbScatterContourSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterContourSeries.html), as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">

        <div class="options vertical">
            <span class="legend-title">Distribution of Magnetic Field</span>
        </div>

        @if (Data != null)
        {
            <IgbDataChart Height="100%" Width="100%"
                       GridMode="@GridMode.BeforeSeries"
                       IsHorizontalZoomEnabled="true"
                       IsVerticalZoomEnabled="true">

                @* primary axes required for scatter-contour-series *@
                <IgbNumericXAxis Name="xAxis1" LabelLocation="AxisLabelsLocation.OutsideBottom"  Title="Longitude" MinimumValue="-180" MaximumValue="180" />
                <IgbNumericYAxis Name="yAxis1" LabelLocation="AxisLabelsLocation.OutsideLeft" Title="Latitude"  MinimumValue="-90" MaximumValue="90"/>

                @* optional axes that provide more context for displayed data *@
                <IgbNumericXAxis Name="xAxis2" LabelLocation="AxisLabelsLocation.OutsideTop"  Title="Longitude" MinimumValue="-180" MaximumValue="180" />
                <IgbNumericYAxis Name="yAxis2" LabelLocation="AxisLabelsLocation.OutsideRight" Title="Latitude"  MinimumValue="-90" MaximumValue="90"/>

                <IgbScatterContourSeries XAxisName="xAxis1"
                                      YAxisName="yAxis1"
                                      DataSource="Data"
                                      XMemberPath="X"
                                      YMemberPath="Y"
                                      Thickness="2"
                                      ValueMemberPath="Z"
                                      FillScale="@BrushScale"
                                      ShowDefaultTooltip="true">
                </IgbScatterContourSeries>

            </IgbDataChart>
        }
    </div>
</div>

@code {

    private List<SampleScatterPoint> Data;
    private IgbValueBrushScale BrushScale;

    protected override void OnInitialized()
    {
        this.BrushScale = new IgbValueBrushScale();
        this.BrushScale.MinimumValue = - 2;
        this.BrushScale.MaximumValue = 2;
        this.BrushScale.Brushes = "#8670CB, #4AC4FF, #B5CC2E, #FC8612, #ED4840";

        Data = SampleScatterData.Create();

    }
}
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Bubble Chart](bubble-chart.md)
- [Line Chart](line-chart.md)
- [Spline Chart](spline-chart.md)
- [Shape Chart](shape-chart.md)

## API References

The following table lists API members mentioned in the above sections:

|Chart Type                  | Control Name   | API Members |
|----------------------------|----------------|------------------------ |
|Scatter Marker              | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterSeries.html) |
|Scatter Line                | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbScatterLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterLineSeries.html) |
|Scatter Spline              | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbScatterSplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterSplineSeries.html) |
|High Density Scatter        | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHighDensityScatterSeries.html) |
|Scatter Area                | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbScatterAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterAreaSeries.html) |
|Scatter Contour             | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbScatterContourSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterContourSeries.html) |
