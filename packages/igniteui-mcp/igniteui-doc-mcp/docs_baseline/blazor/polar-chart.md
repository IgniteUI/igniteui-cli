---
title: Blazor Polar Chart | Data Visualization | Infragistics
_description: Infragistics' Blazor Polar Chart
_keywords: Blazor Charts, Polar Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "PolarAreaSeries", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Polar Chart
_premium: true
---

# Blazor Polar Chart

The Ignite UI for Blazor Polar Chart uses the polar coordinate system (angle, radius) instead of the Cartesian coordinate system (x, y) to plot data in chart. In other words, Polar Chart takes concepts of [Scatter Series](scatter-chart.md) and wrap them around a circle rather than stretching data points horizontally. It is often used to plot scientific data (e.g. wind direction and speed, direction, and strength of magnetic field, location of objects in solar system), and can highlight the deviation of collected data from predicted results.

## Blazor Polar Area Chart

The Polar Area Chart renders using a collection of polygons connecting data points and it uses the same concepts of data plotting as the [Category Area Chart](area-chart.md#blazor-area-chart-example) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbPolarAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarAreaSeries.html), as shown in the example below:

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

The Polar Spline Area Chart renders also as a collection of polygons but they have curved splines connecting data points instead of straight lines like [Polar Area Chart](polar-chart.md#blazor-polar-area-chart) does. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbPolarAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarAreaSeries.html), as shown in the example below:

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

## Blazor Polar Marker Chart

The Polar Marker Chart renders using a collection of markers representing data points in polar (angle/radius) coordinate system. This chart uses the same concepts of data plotting as the [Scatter Marker Chart](scatter-chart.md#blazor-scatter-marker-chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbPolarScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarScatterSeries.html), as shown in the example below:

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


<div class="divider--half"></div>

## Blazor Polar Line Chart

The Polar Line Chart renders using a collection of straight lines connecting data points in polar (angle/radius) coordinate system. This chart uses the same concepts of data plotting as the [Scatter Line Chart](scatter-chart.md#blazor-scatter-line-chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbPolarLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarLineSeries.html), as shown in the example below:

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


<div class="divider--half"></div>

## Blazor Polar Spline Chart

The Polar Spline Chart renders using a collection of curved splines connecting data points in polar (angle/radius) coordinate system. This Chart uses the same concepts of data plotting as the [Scatter Spline Chart](scatter-chart.md#blazor-scatter-spline-chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbPolarSplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarSplineSeries.html), as shown in the example below:

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

            <IgbPolarSplineSeries
            Name="PolarSplineSeries1"
            @ref="polarSplineSeries1"
            DataSource="BoatSailingData"
            AngleAxisName="angleAxis"
            RadiusAxisName="radiusAxis"
            AngleMemberPath="Direction"
            RadiusMemberPath="WindSpeed"
            ShowDefaultTooltip="false"
            Thickness="1"
            Title="Wind Speed"
            MarkerType="MarkerType.Circle">
            </IgbPolarSplineSeries>

            <IgbPolarSplineSeries
            Name="PolarSplineSeries2"
            @ref="polarSplineSeries2"
            DataSource="BoatSailingData"
            AngleAxisName="angleAxis"
            RadiusAxisName="radiusAxis"
            AngleMemberPath="Direction"
            RadiusMemberPath="BoatSpeed"
            ShowDefaultTooltip="false"
            Thickness="1"
            Title="Boat Speed"
            MarkerType="MarkerType.Circle">
            </IgbPolarSplineSeries>

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
        var polarSplineSeries1 = this.polarSplineSeries1;
        var polarSplineSeries2 = this.polarSplineSeries2;
        var dataToolTipLayer = this.dataToolTipLayer;

    }

    private IgbDataChart chart;
    private IgbNumericAngleAxis angleAxis;
    private IgbNumericRadiusAxis radiusAxis;
    private IgbPolarSplineSeries polarSplineSeries1;
    private IgbPolarSplineSeries polarSplineSeries2;
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

## Blazor Polar Chart Styling

Once our polar chart is created, we may want to make some further styling customizations such as a change of the line colors, marker types, or outline colors of those markers. You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbPolarAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarAreaSeries.html), as shown in the example below:

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
        IsVerticalZoomEnabled="false"
        MarkerBrushes="white"
        MarkerOutlines="#8ce7d9 #ee5879"
        Brushes="#8ce7d9 #ee5879"
        Outlines="#8ce7d9 #ee5879">
            <IgbNumericAngleAxis
            Name="angleAxis"
            @ref="angleAxis"
            StartAngleOffset="-90"
            Interval="30"
            MinimumValue="0"
            MaximumValue="360"
            LabelFontWeight="Bold">
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
            ShowDefaultTooltip="true"
            AreaFillOpacity="0.3"
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
            ShowDefaultTooltip="true"
            AreaFillOpacity="0.3"
            Thickness="1"
            Title="Boat Speed"
            MarkerType="MarkerType.Circle">
            </IgbPolarAreaSeries>

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

- [Area Chart](area-chart.md)
- [Donut Chart](donut-chart.md)
- [Line Chart](line-chart.md)
- [Pie Chart](pie-chart.md)
- [Radial Chart](radial-chart.md)
- [Scatter Chart](scatter-chart.md)
- [Spline Chart](spline-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)
- [`IgbPolarAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarAreaSeries.html)
- [`IgbPolarLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarLineSeries.html)
- [`IgbPolarSplineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarSplineSeries.html)
- [`IgbPolarSplineAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarSplineAreaSeries.html)
- [`IgbPolarScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarScatterSeries.html)
- [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource)
- [`AngleMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarBase.html#IgniteUI_Blazor_Controls_IgbPolarBase_AngleMemberPath)
- [`RadiusMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPolarBase.html#IgniteUI_Blazor_Controls_IgbPolarBase_RadiusMemberPath)
- [`IgbNumericAngleAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericAngleAxis.html)
- [`IgbNumericRadiusAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericRadiusAxis.html)
