---
title: Blazor Stacked Chart | Data Visualization | Infragistics
_description: Infragistics' Blazor Stacked Chart
_keywords: Blazor Charts, Stacked Chart, Stacked 100% Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "StackedAreaSeries", "Stacked100AreaSeries", "StackedBarSeries", "Stacked100BarSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "StackedLineSeries", "Stacked100LineSeries", "StackedSplineSeries", "Stacked100SplineSeries", "StackedSplineAreaSeries", "Stacked100SplineAreaSeries", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Stacked Chart
_premium: true
---

# Blazor Stacked Chart

The Ignite UI for Blazor Stacked Chart belongs to a special group of charts that render multiple values of data items as stacked area/polygons, bars, columns, lines, or splines. Standard Stacked Charts render actual values of data items while Stacked 100% Charts render values as percentage of total values.

## Blazor Stacked Chart Types

The following example, you can use the drop-down to switch between all of the different types stacked charts available in the Blazor [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control.

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">

     <div class="options vertical" >
          <span class="legend-title">Energy Production By Source </span>
          <div class="legend">
             <IgbLegend @ref="Legend" Orientation="LegendOrientation.Horizontal" />
         </div>
     </div>

     <div class="overlay-right" style="margin-right: 1rem">
         <label class="options-label">Type of Stacked Series </label>
         <select value=@SeriesType @onchange="OnSeriesTypeChanged">
             <option>Stacked Column</option>
             <option>Stacked 100 Column</option>
             <option>Stacked Area</option>
             <option>Stacked 100 Area</option>
             <option>Stacked Line</option>
             <option>Stacked 100 Line</option>
             <option>Stacked Spline</option>
             <option>Stacked 100 Spline</option>
             <option>Stacked Bar</option>
             <option>Stacked 100 Bar</option>
         </select>
     </div>

    <div class="container vertical">
        @if (Data != null)
        {
        <IgbDataChart Height="100%" Width="100%"
                   IsHorizontalZoomEnabled="false"
                   IsVerticalZoomEnabled="false"
                   PlotAreaMarginRight="20"
                   Legend="Legend"
                   @ref="Chart">

            @if (SeriesType == "Stacked Bar" || SeriesType == "Stacked 100 Bar")
            {
                <IgbNumericXAxis  Name="xAxis2" MinimumValue="0" />
                <IgbCategoryYAxis Name="yAxis2" Label="Country" DataSource="Data" Title="Countries"/>
            }
            else
            {
                <IgbCategoryXAxis Name="xAxis" Label="Country" DataSource="Data" Title="Countries" />
                <IgbNumericYAxis  Name="yAxis" MinimumValue="0" />
            }

            @if (SeriesType == "Stacked Bar")
            {
                <IgbStackedBarSeries XAxisName="xAxis2" YAxisName="yAxis2" DataSource="Data" ShowDefaultTooltip="false" >
                    @foreach (var column in this.DataColumns)
                    {
                        <IgbStackedFragmentSeries ValueMemberPath="@column" Title="@column" />
                    }
                </IgbStackedBarSeries>
            }

            @if (SeriesType == "Stacked 100 Bar")
            {
                <IgbStacked100BarSeries XAxisName="xAxis2" YAxisName="yAxis2" DataSource="Data" ShowDefaultTooltip="false" >
                    @foreach (var column in this.DataColumns)
                    {
                        <IgbStackedFragmentSeries ValueMemberPath="@column" Title="@column" />
                    }
                </IgbStacked100BarSeries>
            }

            @if (SeriesType == "Stacked Column")
            {
                <IgbStackedColumnSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="Data" ShowDefaultTooltip="false" >
                    @foreach (var column in this.DataColumns)
                    {
                        <IgbStackedFragmentSeries ValueMemberPath="@column" Title="@column" />
                    }
                </IgbStackedColumnSeries>
            }

            @if (SeriesType == "Stacked 100 Column")
            {
                <IgbStacked100ColumnSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="Data" ShowDefaultTooltip="false" >
                    @foreach (var column in this.DataColumns)
                    {
                        <IgbStackedFragmentSeries ValueMemberPath="@column" Title="@column" />
                    }
                </IgbStacked100ColumnSeries>
            }

            @if (SeriesType == "Stacked Area")
            {
                <IgbStackedAreaSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="Data" ShowDefaultTooltip="false" >
                    @foreach (var column in this.DataColumns)
                    {
                        <IgbStackedFragmentSeries ValueMemberPath="@column" Title="@column" />
                    }
                </IgbStackedAreaSeries>
            }

            @if (SeriesType == "Stacked 100 Area")
            {
                <IgbStacked100AreaSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="Data" ShowDefaultTooltip="false" >
                    @foreach (var column in this.DataColumns)
                    {
                        <IgbStackedFragmentSeries ValueMemberPath="@column" Title="@column" />
                    }
                </IgbStacked100AreaSeries>
            }

            @if (SeriesType == "Stacked Line")
            {
                <IgbStackedLineSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="Data" ShowDefaultTooltip="false" >
                    @foreach (var column in this.DataColumns)
                    {
                        <IgbStackedFragmentSeries ValueMemberPath="@column" Title="@column" />
                    }
                </IgbStackedLineSeries>
            }

            @if (SeriesType == "Stacked 100 Line")
            {
                <IgbStacked100LineSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="Data" ShowDefaultTooltip="false" >
                    @foreach (var column in this.DataColumns)
                    {
                        <IgbStackedFragmentSeries ValueMemberPath="@column" Title="@column" />
                    }
                </IgbStacked100LineSeries>
            }

            @if (SeriesType == "Stacked Spline")
            {
                <IgbStackedSplineSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="Data" ShowDefaultTooltip="false" >
                    @foreach (var column in this.DataColumns)
                    {
                        <IgbStackedFragmentSeries ValueMemberPath="@column" Title="@column" />
                    }
                </IgbStackedSplineSeries>
            }

            @if (SeriesType == "Stacked 100 Spline")
            {
                <IgbStacked100SplineSeries XAxisName="xAxis" YAxisName="yAxis" DataSource="Data" ShowDefaultTooltip="false" >
                    @foreach (var column in this.DataColumns)
                    {
                        <IgbStackedFragmentSeries ValueMemberPath="@column" Title="@column" />
                    }
                </IgbStacked100SplineSeries>
            }
        </IgbDataChart>
        }
        </div>
</div>

@code {

    private List<SampleStackedItem> Data;
    private string[] DataColumns = new string[] { "Coal", "Hydro", "Nuclear", "Solar", "Oil"};
    private IgbDataChart _chart;
    private IgbDataChart Chart
    {
        get { return _chart; }
        set { _chart = value; StateHasChanged(); }
    }

    private IgbLegend _legend;
    private IgbLegend Legend
    {
        get { return _legend; }
        set { _legend = value; StateHasChanged(); }
    }

    private string _seriesType = "Stacked Column";
    private string SeriesType
    {
        get { return _seriesType; }
        set { _seriesType = value; StateHasChanged(); }
    }

    protected override void OnInitialized()
    {
        Data = SampleStackedData.Create();
    }

    public void OnSeriesTypeChanged(ChangeEventArgs e)
    {
        var selectedSeries = e.Value.ToString();
        SeriesType = selectedSeries;
    }

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.Chart != null && !firstRender)
        {
            ////  System.Console.WriteLine("OnAfterRender " + this.Chart.ActualSeries.Count);
            //  var stackedSeries = this.Chart.ActualSeries[0] as StackedSeriesBase;
            //  var stackedFragments = stackedSeries.ActualSeries;
            ////  System.Console.WriteLine("OnAfterRender " + stackedFragments.Count);
            //  for (int i = 0; i < stackedFragments.Count; i++)
            //  {
            //    //  System.Console.WriteLine("Title " + i + " " + DataColumns[i]);
            //      stackedFragments[i].Title = DataColumns[i];
            //  }
        }
    }
}
```

<div class="divider--half"></div>

The following sections demonstrate individual types of Ignite UI for Blazor Stacked Charts.

## Blazor Stacked Area Chart

Stacked Area Charts are rendered using a collection of points connected by line segments, with the area below the line filled in and stacked on top of each other. Stacked Area Charts follow all the same requirements as [Area Chart](area-chart.md), with the only difference being that visually, the shaded areas are stacked on top of each other.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStackedAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedAreaSeries.html), as shown in the example below.

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

## Blazor Stacked 100 Area Chart

Sometimes the series represent part of a whole being changed over time e.g. a country's energy consumption related to the sources from which it is produced. In such cases representing all stacked elements equally may be a better idea.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStacked100AreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100AreaSeries.html), as shown in the example below.

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

## Blazor Stacked Bar Chart

A Stacked Bar Chart, or Stacked Bar Graph, is a type of category chart that is used to compare the composition of different categories of data by displaying different sized fragments in the horizontal bars of the chart. The length of each bar, or stack of fragments, is proportionate to its overall value.

The Stacked Bar Chart differs from the [Bar Chart](bar-chart.md) in that the data points representing your data are stacked next to each other horizontally to visually group your data. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the X-Axis, and all negative values are grouped on the negative side of the X-Axis.

In this example of an Stacked Bar Chart, we have a Numeric X Axis (bottom labels of the chart) and a Category Y Axis (left labels of the chart). You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStackedBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedBarSeries.html), as shown in the example below.

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

The Blazor Stacked 100% Bar Chart is identical to the Blazor stacked bar chart in all aspects except in their treatment of the values on X-Axis (bottom labels of the chart). Instead of presenting a direct representation of the data, the stacked 100% bar chart presents the data in terms of percent of the sum of all values in a data point.

In this example of a Stacked 100% Bar Chart, the Energy Product values are shown as a 100% value of all of the data in the fragments of the horizontal bars. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStacked100BarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100BarSeries.html), as shown in the example below.

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

## Blazor Stacked Column Chart

The Stacked Column Chart is identical to the [Column Chart](column-chart.md) in all aspects, except the series are represented on top of one another rather than to the side. The Stacked Column Chart is used to show comparing results between series. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the Y-Axis, and all negative values are grouped on the negative side of the Y-Axis. The Stacked Column Chart uses the same concepts of data plotting as the Stacked Bar Chart but data points are stacked along vertical line (Y-Axis) rather than along horizontal line (X-Axis).

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStackedColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedColumnSeries.html), as shown in the example below.

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

The Stacked 100% Column Chart is identical to the Stacked Column Chart in all aspects except in their treatment of the values on Y-Axis. Instead of presenting a direct representation of the data, the Stacked 100% Column Chart presents the data in terms of percent of the sum of all values in a data point.

The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStacked100ColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100ColumnSeries.html), as shown in the example below.

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

## Blazor Stacked Line Chart

The Stacked Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStackedLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedLineSeries.html), as shown in the example below:

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

            <IgbStackedLineSeries
            Name="stackedLineSeries"
            @ref="stackedLineSeries"
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

            </IgbStackedLineSeries>

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
        var stackedLineSeries = this.stackedLineSeries;
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
    private IgbStackedLineSeries stackedLineSeries;
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

## Blazor Stacked 100% Line Chart

The Stacked 100% Line Chart is identical to the Stacked Line Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Line Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStacked100LineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100LineSeries.html), as shown in the example below:

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

            <IgbStacked100LineSeries
            Name="stacked100LineSeries"
            @ref="stacked100LineSeries"
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

            </IgbStacked100LineSeries>

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
        var stacked100LineSeries = this.stacked100LineSeries;
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
    private IgbStacked100LineSeries stacked100LineSeries;
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

Stacked Spline Area Charts are rendered using a collection of points connected by curved spline segments, with the area below the curved spline fill in and stacked on top of each other. Stacked Spline Area Charts follow all of the same requirements as [Area Chart](area-chart.md), with the only difference being that the visually shaded areas are stacked on top of each other.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStackedSplineAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedSplineAreaSeries.html), as shown in the example below.

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

The Stacked 100% Spline Area Chart is identical to the Stacked Spline Area Chart in all aspects except for the treatment of the values on the y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Spline Area Chart presents the data in terms of a percent of the sum of all values in a particular data point. Sometimes the chart represents part of a whole being changed over time. For example, a country's energy consumption related to the sources from which it is produced. In such cases, representing all stacked elements equally may be a better idea.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStacked100SplineAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100SplineAreaSeries.html), as shown in the example below.

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

## Blazor Stacked Spline Chart

The Stacked Spline Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStackedSplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedSplineSeries.html), as shown in the example below.

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
            TitleLeftMargin="10"
            LabelFormat="{0} m">
            </IgbNumericYAxis>

            <IgbStackedSplineSeries
            Name="stackedSplineSeries"
            @ref="stackedSplineSeries"
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

            </IgbStackedSplineSeries>

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
        var stackedSplineSeries = this.stackedSplineSeries;
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
    private IgbStackedSplineSeries stackedSplineSeries;
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

## Blazor Stacked 100% Spline Chart

The Stacked 100% Spline Chart is identical to the Stacked Spline Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Spline Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbStacked100SplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100SplineSeries.html).

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
            LabelFormat="{0}%">
            </IgbNumericYAxis>

            <IgbStacked100SplineSeries
            Name="stacked100SplineSeries"
            @ref="stacked100SplineSeries"
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

            </IgbStacked100SplineSeries>

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
        var stacked100SplineSeries = this.stacked100SplineSeries;
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
    private IgbStacked100SplineSeries stacked100SplineSeries;
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

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Bar Chart](bar-chart.md)
- [Column Chart](column-chart.md)
- [Line Chart](line-chart.md)
- [Spline Chart](spline-chart.md)

## API References

The following table lists API members mentioned in the above sections:

| Chart Type               | Control Name   | API Members |
| -------------------------|----------------|-------------------------------- |
| Stacked Area             | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbStackedAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedAreaSeries.html) |
| Stacked Bar              | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbStackedBarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedBarSeries.html) |
| Stacked Column           | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbStackedColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedColumnSeries.html) |
| Stacked Line             | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbStackedLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedLineSeries.html) |
| Stacked Spline           | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbStackedSplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedSplineSeries.html) |
| Stacked Spline Area      | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbStackedSplineAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStackedSplineAreaSeries.html) |
| Stacked 100% Area        | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbStacked100AreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100AreaSeries.html) |
| Stacked 100% Bar         | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbStacked100BarSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100BarSeries.html) |
| Stacked 100% Column      | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbStacked100ColumnSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100ColumnSeries.html) |
| Stacked 100% Line        | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbStacked100LineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100LineSeries.html) |
| Stacked 100% Spline      | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbStacked100SplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100SplineSeries.html) |
| Stacked 100% Spline Area | [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) | [`IgbStacked100SplineAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStacked100SplineAreaSeries.html) |
