---
title: Blazor Bubble Chart | Data Visualization | Infragistics
_description: Infragistics' Blazor Bubble Chart
_keywords: Blazor Charts, Bubble Chart, Infragistics
_license: commercial
mentionedTypes: ["Series", "BubbleSeries", "ScatterSeries", "MarkerType"]
namespace: Infragistics.Controls.Charts
_tocName: Bubble Chart
_premium: true
---

# Blazor Bubble Chart

The Ignite UI for Blazor Bubble Chart is a type of [Scatter Chart](scatter-chart.md) that show markers with variable scaling to represent the relationship among items in several distinct series of data or to plot data items using x and y coordinates. These coordinates of the data point are determined by two numeric data columns. The Bubble Chart draws attention to uneven intervals or clusters of data. This chart is often used to plot scientific data, and can highlight the deviation of collected data from predicted results. The Bubble Chart has many of the characteristics of the [Scatter Marker Chart](scatter-chart.md#blazor-scatter-marker-chart) but with the option to have various radius scale sizes.

## Blazor Bubble Chart Example

You can create Ignite UI for Blazor Bubble Chart in [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control using the [`IgbBubbleSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html) and two numeric axes, as shown in the example below.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Total Population of Selected Countries
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
            IsLogarithmic="true"
            AbbreviateLargeNumbers="true"
            Title="Population">
            </IgbNumericXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            Title="GDP per Capita"
            MaximumValue="1000000"
            TitleLeftMargin="10"
            IsLogarithmic="true"
            AbbreviateLargeNumbers="true">
            </IgbNumericYAxis>

            <IgbBubbleSeries
            Name="bubbleSeries1"
            @ref="bubbleSeries1"
            Title="African Countries"
            XAxisName="xAxis"
            YAxisName="yAxis"
            XMemberPath="Population"
            YMemberPath="GDP"
            RadiusMemberPath="WorkedHours"
            XMemberAsLegendLabel="Population"
            YMemberAsLegendLabel="GDP"
            RadiusMemberAsLegendLabel="Work Hours"
            DataSource="CountryStatsAfrica"
            MarkerType="MarkerType.Circle"
            ShowDefaultTooltip="true"
            RadiusScale="SizeScale1">
            </IgbBubbleSeries>

            <IgbBubbleSeries
            Name="bubbleSeries2"
            @ref="bubbleSeries2"
            Title="European Countries"
            XAxisName="xAxis"
            YAxisName="yAxis"
            XMemberPath="Population"
            YMemberPath="GDP"
            RadiusMemberPath="WorkedHours"
            XMemberAsLegendLabel="Population"
            YMemberAsLegendLabel="GDP"
            RadiusMemberAsLegendLabel="Work Hours"
            DataSource="CountryStatsEurope"
            MarkerType="MarkerType.Circle"
            ShowDefaultTooltip="true"
            RadiusScale="SizeScale2">
            </IgbBubbleSeries>

            <IgbDataToolTipLayer
            Name="dataToolTipLayer"
            @ref="dataToolTipLayer"
            ValueRowMarginTop="1"
            LabelTextMarginTop="1"
            TitleTextMarginTop="1"
            UnitsTextMarginTop="1"
            ValueRowMarginBottom="1"
            LabelTextMarginBottom="1"
            TitleTextMarginBottom="1"
            UnitsTextMarginBottom="1"
            UnitsTextMarginRight="5"
            ValueTextMarginLeft="10"
            LabelTextMarginLeft="1"
            LayoutMode="DataLegendLayoutMode.Vertical">
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
        var bubbleSeries1 = this.bubbleSeries1;
        var bubbleSeries2 = this.bubbleSeries2;
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
    private IgbBubbleSeries bubbleSeries1;
    private IgbSizeScale _sizeScale1 = null;
    public IgbSizeScale SizeScale1
    {
        get
        {
            if (this._sizeScale1 == null)
            {
                var sizeScale1 = new IgbSizeScale();
                sizeScale1.IsLogarithmic = false;
                sizeScale1.MinimumValue = 10;
                sizeScale1.MaximumValue = 80;
                this._sizeScale1 = sizeScale1;
            }
            return this._sizeScale1;
        }
    }
    private IgbBubbleSeries bubbleSeries2;
    private IgbSizeScale _sizeScale2 = null;
    public IgbSizeScale SizeScale2
    {
        get
        {
            if (this._sizeScale2 == null)
            {
                var sizeScale2 = new IgbSizeScale();
                sizeScale2.IsLogarithmic = false;
                sizeScale2.MinimumValue = 10;
                sizeScale2.MaximumValue = 80;
                this._sizeScale2 = sizeScale2;
            }
            return this._sizeScale2;
        }
    }
    private IgbDataToolTipLayer dataToolTipLayer;

    private CountryStatsAfrica _countryStatsAfrica = null;
    public CountryStatsAfrica CountryStatsAfrica
    {
        get
        {
            if (_countryStatsAfrica == null)
            {
                _countryStatsAfrica = new CountryStatsAfrica();
            }
            return _countryStatsAfrica;
        }
    }

    private CountryStatsEurope _countryStatsEurope = null;
    public CountryStatsEurope CountryStatsEurope
    {
        get
        {
            if (_countryStatsEurope == null)
            {
                _countryStatsEurope = new CountryStatsEurope();
            }
            return _countryStatsEurope;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryStatsAfricaItem
{
    public string Code { get; set; }
    public double Population { get; set; }
    public double WorkedHours { get; set; }
    public double GDP { get; set; }
    public string Name { get; set; }
}

public class CountryStatsAfrica
    : List<CountryStatsAfricaItem>
{
    public CountryStatsAfrica()
    {
        this.Add(new CountryStatsAfricaItem() { Code = @"DZA", Population = 39728000, WorkedHours = 47.5, GDP = 13725, Name = @"Algeria" });
        this.Add(new CountryStatsAfricaItem() { Code = @"AGO", Population = 27884000, WorkedHours = 39.8, GDP = 6228, Name = @"Angola" });
        this.Add(new CountryStatsAfricaItem() { Code = @"BEN", Population = 10576000, WorkedHours = 43.7, GDP = 1987, Name = @"Benin" });
        // ... 48 more items
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryStatsEuropeItem
{
    public string Code { get; set; }
    public double Population { get; set; }
    public double WorkedHours { get; set; }
    public double GDP { get; set; }
    public string Name { get; set; }
}

public class CountryStatsEurope
    : List<CountryStatsEuropeItem>
{
    public CountryStatsEurope()
    {
        this.Add(new CountryStatsEuropeItem() { Code = @"ALB", Population = 2891000, WorkedHours = 41, GDP = 10970, Name = @"Albania" });
        this.Add(new CountryStatsEuropeItem() { Code = @"AUT", Population = 8679000, WorkedHours = 30.75, GDP = 44305, Name = @"Austria" });
        this.Add(new CountryStatsEuropeItem() { Code = @"BLR", Population = 9439000, WorkedHours = 43.5, GDP = 17230, Name = @"Belarus" });
        // ... 38 more items
    }
}
```


<div class="divider--half"></div>

## Blazor Bubble Chart with Single Series

You can bind your data to [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource) property of [`IgbBubbleSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html) and map data columns using its [`XMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterBase.html#IgniteUI_Blazor_Controls_IgbScatterBase_XMemberPath), [`YMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterBase.html#IgniteUI_Blazor_Controls_IgbScatterBase_YMemberPath), [`RadiusMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html#IgniteUI_Blazor_Controls_IgbBubbleSeries_RadiusMemberPath) properties, as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        ChartTitle="Population vs. Public Debt vs. GDP"
        TitleTopMargin="10"
        TitleBottomMargin="0">
            <IgbNumericXAxis
            Name="xAxis"
            @ref="xAxis"
            Title="Population"
            MinimumValue="100"
            MaximumValue="10000000000"
            IsLogarithmic="true"
            AbbreviateLargeNumbers="true">
            </IgbNumericXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            Title="Public Debt per GDP (%)"
            TitleLeftMargin="10"
            IsLogarithmic="true"
            AbbreviateLargeNumbers="true"
            MaximumValue="1000">
            </IgbNumericYAxis>

            <IgbBubbleSeries
            Name="bubbleSeries1"
            @ref="bubbleSeries1"
            XMemberPath="Population"
            YMemberPath="PublicDebt"
            RadiusMemberPath="GdpPerPerson"
            RadiusScale="SizeScale1"
            Title="Country"
            YMemberAsLegendUnit="%"
            YMemberAsLegendLabel="Debt"
            XMemberAsLegendLabel="Population"
            RadiusMemberAsLegendLabel="GDP"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="WorldStats"
            MarkerType="MarkerType.Circle"
            ShowDefaultTooltip="true">
            </IgbBubbleSeries>

            <IgbDataToolTipLayer
            Name="dataToolTipLayer"
            @ref="dataToolTipLayer"
            ValueRowMarginTop="1"
            LabelTextMarginTop="1"
            TitleTextMarginTop="1"
            UnitsTextMarginTop="1"
            ValueRowMarginBottom="1"
            LabelTextMarginBottom="1"
            TitleTextMarginBottom="1"
            UnitsTextMarginBottom="1"
            UnitsTextMarginRight="5"
            ValueTextMarginLeft="10"
            LabelTextMarginLeft="1"
            LayoutMode="DataLegendLayoutMode.Vertical"
            BadgeShape="LegendItemBadgeShape.Hidden"
            HeaderRowVisible="false">
            </IgbDataToolTipLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var bubbleSeries1 = this.bubbleSeries1;
        var dataToolTipLayer = this.dataToolTipLayer;

    }

    private IgbDataChart chart;
    private IgbNumericXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbBubbleSeries bubbleSeries1;
    private IgbSizeScale _sizeScale1 = null;
    public IgbSizeScale SizeScale1
    {
        get
        {
            if (this._sizeScale1 == null)
            {
                var sizeScale1 = new IgbSizeScale();
                sizeScale1.IsLogarithmic = false;
                sizeScale1.MinimumValue = 10;
                sizeScale1.MaximumValue = 80;
                this._sizeScale1 = sizeScale1;
            }
            return this._sizeScale1;
        }
    }
    private IgbDataToolTipLayer dataToolTipLayer;

    private WorldStats _worldStats = null;
    public WorldStats WorldStats
    {
        get
        {
            if (_worldStats == null)
            {
                _worldStats = new WorldStats();
            }
            return _worldStats;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class WorldStatsItem
{
    public string Code { get; set; }
    public string Short { get; set; }
    public string Name { get; set; }
    public string Continent { get; set; }
    public double Population { get; set; }
    public double GdpTotal { get; set; }
    public string Economy { get; set; }
    public string Region { get; set; }
    public string Status { get; set; }
    public double X { get; set; }
    public double Y { get; set; }
    public double GdpPerPerson { get; set; }
    public double Rank { get; set; }
    public double Unemployment { get; set; }
    public double OilProduction { get; set; }
    public double BirthRate { get; set; }
    public double MedianAge { get; set; }
    public double Electricity { get; set; }
    public double Televisions { get; set; }
    public double PublicDebt { get; set; }
    public double Internet { get; set; }
}

public class WorldStats
    : List<WorldStatsItem>
{
    public WorldStats()
    {
        this.Add(new WorldStatsItem() { Code = @"CHN", Short = @"CN", Name = @"China", Continent = @"Asia", Population = 1379302771, GdpTotal = 21140000, Economy = @"Emerging", Region = @"Eastern Asia", Status = @"Country", X = 104.18, Y = 35.887, GdpPerPerson = 15327, Rank = 1, Unemployment = 4, OilProduction = 3725000, BirthRate = 14, MedianAge = 34, Electricity = 3256000, Televisions = 400000000, PublicDebt = 18, Internet = 253000000 });
        this.Add(new WorldStatsItem() { Code = @"IND", Short = @"IN", Name = @"India", Continent = @"Asia", Population = 1281935911, GdpTotal = 8721000, Economy = @"Emerging", Region = @"Southern Asia", Status = @"Country", X = 78.022, Y = 22.665, GdpPerPerson = 6803, Rank = 2, Unemployment = 7, OilProduction = 810000, BirthRate = 22, MedianAge = 25, Electricity = 661600, Televisions = 63000000, PublicDebt = 58, Internet = 80000000 });
        this.Add(new WorldStatsItem() { Code = @"USA", Short = @"US", Name = @"United States", Continent = @"North America", Population = 326625791, GdpTotal = 18560000, Economy = @"Developed", Region = @"Northern America", Status = @"Country", X = -101.8, Y = 39.818, GdpPerPerson = 56823, Rank = 3, Unemployment = 5, OilProduction = 7460000, BirthRate = 14, MedianAge = 37, Electricity = 4062000, Televisions = 219000000, PublicDebt = 61, Internet = 223000000 });
        // ... 239 more items
    }
}
```


<div class="divider--half"></div>

## Blazor Bubble Chart with Multiple Series

In Blazor Bubble Chart, binding multiple data sources works by setting each new data source to [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource) property of a additional [`IgbBubbleSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html), as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Total Population of Selected Countries
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
            IsLogarithmic="true"
            AbbreviateLargeNumbers="true"
            Title="Population">
            </IgbNumericXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            Title="GDP per Capita"
            MaximumValue="1000000"
            TitleLeftMargin="10"
            IsLogarithmic="true"
            AbbreviateLargeNumbers="true">
            </IgbNumericYAxis>

            <IgbBubbleSeries
            Name="bubbleSeries1"
            @ref="bubbleSeries1"
            Title="African Countries"
            XAxisName="xAxis"
            YAxisName="yAxis"
            XMemberPath="Population"
            YMemberPath="GDP"
            RadiusMemberPath="WorkedHours"
            XMemberAsLegendLabel="Population"
            YMemberAsLegendLabel="GDP"
            RadiusMemberAsLegendLabel="Work Hours"
            DataSource="CountryStatsAfrica"
            MarkerType="MarkerType.Circle"
            ShowDefaultTooltip="true"
            RadiusScale="SizeScale1">
            </IgbBubbleSeries>

            <IgbBubbleSeries
            Name="bubbleSeries2"
            @ref="bubbleSeries2"
            Title="European Countries"
            XAxisName="xAxis"
            YAxisName="yAxis"
            XMemberPath="Population"
            YMemberPath="GDP"
            RadiusMemberPath="WorkedHours"
            XMemberAsLegendLabel="Population"
            YMemberAsLegendLabel="GDP"
            RadiusMemberAsLegendLabel="Work Hours"
            DataSource="CountryStatsEurope"
            MarkerType="MarkerType.Circle"
            ShowDefaultTooltip="true"
            RadiusScale="SizeScale2">
            </IgbBubbleSeries>

            <IgbDataToolTipLayer
            Name="dataToolTipLayer"
            @ref="dataToolTipLayer"
            ValueRowMarginTop="1"
            LabelTextMarginTop="1"
            TitleTextMarginTop="1"
            UnitsTextMarginTop="1"
            ValueRowMarginBottom="1"
            LabelTextMarginBottom="1"
            TitleTextMarginBottom="1"
            UnitsTextMarginBottom="1"
            UnitsTextMarginRight="5"
            ValueTextMarginLeft="10"
            LabelTextMarginLeft="1"
            LayoutMode="DataLegendLayoutMode.Vertical">
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
        var bubbleSeries1 = this.bubbleSeries1;
        var bubbleSeries2 = this.bubbleSeries2;
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
    private IgbBubbleSeries bubbleSeries1;
    private IgbSizeScale _sizeScale1 = null;
    public IgbSizeScale SizeScale1
    {
        get
        {
            if (this._sizeScale1 == null)
            {
                var sizeScale1 = new IgbSizeScale();
                sizeScale1.IsLogarithmic = false;
                sizeScale1.MinimumValue = 10;
                sizeScale1.MaximumValue = 80;
                this._sizeScale1 = sizeScale1;
            }
            return this._sizeScale1;
        }
    }
    private IgbBubbleSeries bubbleSeries2;
    private IgbSizeScale _sizeScale2 = null;
    public IgbSizeScale SizeScale2
    {
        get
        {
            if (this._sizeScale2 == null)
            {
                var sizeScale2 = new IgbSizeScale();
                sizeScale2.IsLogarithmic = false;
                sizeScale2.MinimumValue = 10;
                sizeScale2.MaximumValue = 80;
                this._sizeScale2 = sizeScale2;
            }
            return this._sizeScale2;
        }
    }
    private IgbDataToolTipLayer dataToolTipLayer;

    private CountryStatsAfrica _countryStatsAfrica = null;
    public CountryStatsAfrica CountryStatsAfrica
    {
        get
        {
            if (_countryStatsAfrica == null)
            {
                _countryStatsAfrica = new CountryStatsAfrica();
            }
            return _countryStatsAfrica;
        }
    }

    private CountryStatsEurope _countryStatsEurope = null;
    public CountryStatsEurope CountryStatsEurope
    {
        get
        {
            if (_countryStatsEurope == null)
            {
                _countryStatsEurope = new CountryStatsEurope();
            }
            return _countryStatsEurope;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryStatsAfricaItem
{
    public string Code { get; set; }
    public double Population { get; set; }
    public double WorkedHours { get; set; }
    public double GDP { get; set; }
    public string Name { get; set; }
}

public class CountryStatsAfrica
    : List<CountryStatsAfricaItem>
{
    public CountryStatsAfrica()
    {
        this.Add(new CountryStatsAfricaItem() { Code = @"DZA", Population = 39728000, WorkedHours = 47.5, GDP = 13725, Name = @"Algeria" });
        this.Add(new CountryStatsAfricaItem() { Code = @"AGO", Population = 27884000, WorkedHours = 39.8, GDP = 6228, Name = @"Angola" });
        this.Add(new CountryStatsAfricaItem() { Code = @"BEN", Population = 10576000, WorkedHours = 43.7, GDP = 1987, Name = @"Benin" });
        // ... 48 more items
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryStatsEuropeItem
{
    public string Code { get; set; }
    public double Population { get; set; }
    public double WorkedHours { get; set; }
    public double GDP { get; set; }
    public string Name { get; set; }
}

public class CountryStatsEurope
    : List<CountryStatsEuropeItem>
{
    public CountryStatsEurope()
    {
        this.Add(new CountryStatsEuropeItem() { Code = @"ALB", Population = 2891000, WorkedHours = 41, GDP = 10970, Name = @"Albania" });
        this.Add(new CountryStatsEuropeItem() { Code = @"AUT", Population = 8679000, WorkedHours = 30.75, GDP = 44305, Name = @"Austria" });
        this.Add(new CountryStatsEuropeItem() { Code = @"BLR", Population = 9439000, WorkedHours = 43.5, GDP = 17230, Name = @"Belarus" });
        // ... 38 more items
    }
}
```


<div class="divider--half"></div>

## Blazor Bubble Chart Styling

In Blazor Bubble Chart, you can customize shape of bubble markers using [`MarkerType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMarkerSeries.html#IgniteUI_Blazor_Controls_IgbMarkerSeries_MarkerType) property, their size with [`RadiusScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html#IgniteUI_Blazor_Controls_IgbBubbleSeries_RadiusScale) property, and their appearance using [`MarkerBrush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMarkerSeries.html#IgniteUI_Blazor_Controls_IgbMarkerSeries_MarkerBrush), [`MarkerOutline`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMarkerSeries.html#IgniteUI_Blazor_Controls_IgbMarkerSeries_MarkerOutline), [`MarkerThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMarkerSeries.html#IgniteUI_Blazor_Controls_IgbMarkerSeries_MarkerThickness) properties. In addition, you can also color bubble markers based on a data column using [`FillMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html#IgniteUI_Blazor_Controls_IgbBubbleSeries_FillMemberPath) and [`FillScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html#IgniteUI_Blazor_Controls_IgbBubbleSeries_FillScale) properties. In this example, usage of above properties is demonstrated.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart"
        ChartTitle="Population vs. Public Debt vs. GDP"
        TitleTopMargin="10"
        TitleBottomMargin="0">
            <IgbNumericXAxis
            Name="xAxis"
            @ref="xAxis"
            Title="Population"
            MinimumValue="100"
            MaximumValue="10000000000"
            IsLogarithmic="true"
            AbbreviateLargeNumbers="true">
            </IgbNumericXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis"
            Title="Public Debt per GDP (%)"
            TitleLeftMargin="10"
            IsLogarithmic="true"
            AbbreviateLargeNumbers="true"
            MaximumValue="1000">
            </IgbNumericYAxis>

            <IgbBubbleSeries
            Name="bubbleSeries1"
            @ref="bubbleSeries1"
            Title="Country"
            XAxisName="xAxis"
            YAxisName="yAxis"
            XMemberPath="Population"
            YMemberPath="PublicDebt"
            RadiusMemberPath="GdpPerPerson"
            YMemberAsLegendUnit="%"
            YMemberAsLegendLabel="Debt"
            XMemberAsLegendLabel="Population"
            RadiusMemberAsLegendLabel="GDP"
            DataSource="WorldStats"
            MarkerType="MarkerType.Circle"
            MarkerOutline="black"
            MarkerBrush="#43a2fa"
            MarkerFillOpacity="0.5"
            MarkerThickness="1"
            ShowDefaultTooltip="true"
            RadiusScale="SizeScale1">
            </IgbBubbleSeries>

            <IgbDataToolTipLayer
            Name="dataToolTipLayer"
            @ref="dataToolTipLayer"
            ValueRowMarginTop="1"
            LabelTextMarginTop="1"
            TitleTextMarginTop="1"
            UnitsTextMarginTop="1"
            ValueRowMarginBottom="1"
            LabelTextMarginBottom="1"
            TitleTextMarginBottom="1"
            UnitsTextMarginBottom="1"
            UnitsTextMarginRight="5"
            ValueTextMarginLeft="10"
            LabelTextMarginLeft="1"
            LayoutMode="DataLegendLayoutMode.Vertical"
            BadgeShape="LegendItemBadgeShape.Hidden"
            IncludedColumns="@(new string[] { "X", "Y", "Radius" })"
            HeaderRowVisible="false">
            </IgbDataToolTipLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var bubbleSeries1 = this.bubbleSeries1;
        var dataToolTipLayer = this.dataToolTipLayer;

    }

    private IgbDataChart chart;
    private IgbNumericXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbBubbleSeries bubbleSeries1;
    private IgbSizeScale _sizeScale1 = null;
    public IgbSizeScale SizeScale1
    {
        get
        {
            if (this._sizeScale1 == null)
            {
                var sizeScale1 = new IgbSizeScale();
                sizeScale1.IsLogarithmic = false;
                sizeScale1.MinimumValue = 10;
                sizeScale1.MaximumValue = 80;
                this._sizeScale1 = sizeScale1;
            }
            return this._sizeScale1;
        }
    }
    private IgbDataToolTipLayer dataToolTipLayer;

    private WorldStats _worldStats = null;
    public WorldStats WorldStats
    {
        get
        {
            if (_worldStats == null)
            {
                _worldStats = new WorldStats();
            }
            return _worldStats;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class WorldStatsItem
{
    public string Code { get; set; }
    public string Short { get; set; }
    public string Name { get; set; }
    public string Continent { get; set; }
    public double Population { get; set; }
    public double GdpTotal { get; set; }
    public string Economy { get; set; }
    public string Region { get; set; }
    public string Status { get; set; }
    public double X { get; set; }
    public double Y { get; set; }
    public double GdpPerPerson { get; set; }
    public double Rank { get; set; }
    public double Unemployment { get; set; }
    public double OilProduction { get; set; }
    public double BirthRate { get; set; }
    public double MedianAge { get; set; }
    public double Electricity { get; set; }
    public double Televisions { get; set; }
    public double PublicDebt { get; set; }
    public double Internet { get; set; }
}

public class WorldStats
    : List<WorldStatsItem>
{
    public WorldStats()
    {
        this.Add(new WorldStatsItem() { Code = @"CHN", Short = @"CN", Name = @"China", Continent = @"Asia", Population = 1379302771, GdpTotal = 21140000, Economy = @"Emerging", Region = @"Eastern Asia", Status = @"Country", X = 104.18, Y = 35.887, GdpPerPerson = 15327, Rank = 1, Unemployment = 4, OilProduction = 3725000, BirthRate = 14, MedianAge = 34, Electricity = 3256000, Televisions = 400000000, PublicDebt = 18, Internet = 253000000 });
        this.Add(new WorldStatsItem() { Code = @"IND", Short = @"IN", Name = @"India", Continent = @"Asia", Population = 1281935911, GdpTotal = 8721000, Economy = @"Emerging", Region = @"Southern Asia", Status = @"Country", X = 78.022, Y = 22.665, GdpPerPerson = 6803, Rank = 2, Unemployment = 7, OilProduction = 810000, BirthRate = 22, MedianAge = 25, Electricity = 661600, Televisions = 63000000, PublicDebt = 58, Internet = 80000000 });
        this.Add(new WorldStatsItem() { Code = @"USA", Short = @"US", Name = @"United States", Continent = @"North America", Population = 326625791, GdpTotal = 18560000, Economy = @"Developed", Region = @"Northern America", Status = @"Country", X = -101.8, Y = 39.818, GdpPerPerson = 56823, Rank = 3, Unemployment = 5, OilProduction = 7460000, BirthRate = 14, MedianAge = 37, Electricity = 4062000, Televisions = 219000000, PublicDebt = 61, Internet = 223000000 });
        // ... 239 more items
    }
}
```


<div class="divider--half"></div>

## Additional Resources

- [Scatter Chart](scatter-chart.md)
- [Shape Chart](shape-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)
- [`IgbBubbleSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html)
- [`IgbScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterSeries.html)
- [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource)
- [`FillMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html#IgniteUI_Blazor_Controls_IgbBubbleSeries_FillMemberPath)
- [`FillScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html#IgniteUI_Blazor_Controls_IgbBubbleSeries_FillScale)
- [`MarkerType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMarkerSeries.html#IgniteUI_Blazor_Controls_IgbMarkerSeries_MarkerType)
- [`MarkerBrush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMarkerSeries.html#IgniteUI_Blazor_Controls_IgbMarkerSeries_MarkerBrush)
- [`MarkerOutline`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMarkerSeries.html#IgniteUI_Blazor_Controls_IgbMarkerSeries_MarkerOutline)
- [`MarkerThickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMarkerSeries.html#IgniteUI_Blazor_Controls_IgbMarkerSeries_MarkerThickness)
- [`RadiusScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html#IgniteUI_Blazor_Controls_IgbBubbleSeries_RadiusScale)
- [`RadiusMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBubbleSeries.html#IgniteUI_Blazor_Controls_IgbBubbleSeries_RadiusMemberPath)
- [`XMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterBase.html#IgniteUI_Blazor_Controls_IgbScatterBase_XMemberPath)
- [`YMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterBase.html#IgniteUI_Blazor_Controls_IgbScatterBase_YMemberPath)
