---
title: Blazor Shape Chart | Data Visualization | Infragistics
_description: Infragistics' Blazor Shape Chart
_keywords: Blazor Charts, Shape Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "ScatterPolygonSeries", "ScatterPolylineSeries", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Charts
_tocName: Shape Chart
_premium: true
---

# Blazor Shape Charts

The Ignite UI for Blazor Shape Charts are a group of charts that take array of shapes (array or arrays of X/Y points) and render them as collection of polygons or polylines in Cartesian (x, y) coordinate system. They are often used highlight regions in scientific data or they can be used to plot diagrams, blueprints, or even floor plan of buildings.

## Blazor Scatter Polygon Chart

The Blazor Scatter Polygon Chart renders an array or array of arrays of polygons in the Cartesian (x, y) coordinate system using [`IgbScatterPolygonSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolygonSeries.html) in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control. This chart can be used to filled shapes of plot diagrams, blueprints, or even the floor plan of buildings.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbScatterPolygonSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolygonSeries.html), as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls


@using System.Net.Http.Json
@inject HttpClient Http

<div class="container vertical">
    <div class="container vertical">

        <div class="options vertical">
            <span class="legend-title">Airplane Seating Chart (Polygons)</span>
        </div>

        <div class="custom-legend">
          <div><span style="background: DodgerBlue; "></span><label>First Class</label></div>
          <div><span style="background: LimeGreen; "></span><label>Business Class</label></div>
          <div><span style="background: Orange; "></span><label>Premium Class</label></div>
          <div><span style="background: Red; "></span><label>Economy Class</label></div>
          <div><span style="background: Gray; "></span><label>Sold Seat</label> </div>
          <div><span style="background: LightGray; "></span><label>Airplane</label> </div>
        </div>

        @if (AirplaneShape != null && AirplaneSeats != null)
        {
            <IgbDataChart Height="100%" Width="100%"
                       SeriesMouseEnterScript="onPolygonSeriesMouseEnter"
                       IsHorizontalZoomEnabled="true"
                       IsVerticalZoomEnabled="true">

                <IgbNumericXAxis Name="xAxis" MinimumValue="-1000" MaximumValue="1000" Interval="200"></IgbNumericXAxis>
                <IgbNumericYAxis Name="yAxis" MinimumValue="-600" MaximumValue="600" Interval="200"></IgbNumericYAxis>

                <IgbScatterPolygonSeries XAxisName="xAxis"
                                      YAxisName="yAxis"
                                      DataSource="AirplaneShape"
                                      ShapeMemberPath="Points"
                                      ShowDefaultTooltip="false"
                                      Thickness="0.5"
                                      Brush="LightGray" Outline="Black">
                </IgbScatterPolygonSeries>

                <IgbScatterPolygonSeries XAxisName="xAxis"
                                      YAxisName="yAxis"
                                      DataSource="AirplaneSeats"
                                      Title="AirplaneSeats"
                                      ShapeMemberPath="Points"
                                      StyleShapeScript="onPolygonShapeStyle">
                </IgbScatterPolygonSeries>

            </IgbDataChart>
        }

    </div>
</div>

@code {

    private AirplaneSeatInfo[] AirplaneShape;
    private AirplaneSeatInfo[] AirplaneSeats;

    protected override async Task OnInitializedAsync()
    {
        var http = new HttpClient();
        var shape = "https://static.infragistics.com/xplatform/json/airplane-shape.json";
        this.AirplaneShape = await http.GetFromJsonAsync<AirplaneSeatInfo[]>(shape);

        var seats = "https://static.infragistics.com/xplatform/json/airplane-seats.json";
        this.AirplaneSeats = await http.GetFromJsonAsync<AirplaneSeatInfo[]>(seats);
    }

    public class AirplaneSeatInfo
    {
        public string Seat { get; set; }
        public string Class { get; set; }
        public string Price { get; set; }
        public string Status { get; set; }

        public List<List<Point>> Points { get; set; }
    }
}
```


<div class="divider--half"></div>

## Blazor Scatter Polyline Chart

The Blazor Scatter Polyline Chart renders an array or array of arrays of polylines in the Cartesian (x, y) coordinate system using [`IgbScatterPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolylineSeries.html) in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control. This chart can be used to outlines of plot diagrams, blueprints, or even the floor plan of buildings. Also, it can visualizes complex relationships between a large amount of elements.

You can create this type of chart in the [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) control by binding your data to a [`IgbScatterPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolylineSeries.html), as shown in the example below:

```razor
@using IgniteUI.Blazor.Controls
@using System.Net.Http.Json


<div class="container vertical">
    <div class="container vertical">

        <div class="options vertical">
            <span class="legend-title">Airplane Seating Chart (Polylines)</span>
        </div>

        <div class="custom-legend">
          <div><span style="background: DodgerBlue; "></span><label>First Class</label></div>
          <div><span style="background: LimeGreen; "></span><label>Business Class</label></div>
          <div><span style="background: Orange; "></span><label>Premium Class</label></div>
          <div><span style="background: Red; "></span><label>Economy Class</label></div>
          <div><span style="background: Gray; "></span><label>Sold Seat</label> </div>
          <div><span style="background: LightGray; "></span><label>Airplane</label> </div>
        </div>

        @if (AirplaneShape != null && AirplaneSeats != null)
        {
            <IgbDataChart Height="100%" Width="100%"
                       SeriesMouseEnterScript="onPolylineSeriesMouseEnter"
                       IsHorizontalZoomEnabled="true"
                       IsVerticalZoomEnabled="true">

                <IgbNumericXAxis Name="xAxis" MinimumValue="-1000" MaximumValue="1000" Interval="200"></IgbNumericXAxis>
                <IgbNumericYAxis Name="yAxis" MinimumValue="-600" MaximumValue="600" Interval="200"></IgbNumericYAxis>

                <IgbScatterPolylineSeries XAxisName="xAxis"
                                      YAxisName="yAxis"
                                      DataSource="AirplaneShape"
                                      ShapeMemberPath="Points"
                                      ShowDefaultTooltip="false"
                                      Thickness="0.5"
                                      Brush="LightGray" Outline="Black">
                </IgbScatterPolylineSeries>

                <IgbScatterPolylineSeries XAxisName="xAxis"
                                      YAxisName="yAxis"
                                      DataSource="AirplaneSeats"
                                      Title="AirplaneSeats"
                                      ShapeMemberPath="Points"
                                      StyleShapeScript="onPolylineShapeStyle">
                </IgbScatterPolylineSeries>

            </IgbDataChart>
        }

    </div>
</div>

@code {

    private AirplaneSeatInfo[] AirplaneShape;
    private AirplaneSeatInfo[] AirplaneSeats;

    protected override async Task OnInitializedAsync()
    {
        var http = new HttpClient();
        var shape = "https://static.infragistics.com/xplatform/json/airplane-shape.json";
        this.AirplaneShape = await http.GetFromJsonAsync<AirplaneSeatInfo[]>(shape);

        var seats = "https://static.infragistics.com/xplatform/json/airplane-seats.json";
        this.AirplaneSeats = await http.GetFromJsonAsync<AirplaneSeatInfo[]>(seats);
    }

    public class AirplaneSeatInfo
    {
        public string Seat { get; set; }
        public string Class { get; set; }
        public string Price { get; set; }
        public string Status { get; set; }

        public List<List<Point>> Points { get; set; }
    }
}
```


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Line Chart](line-chart.md)
- [Scatter Chart](scatter-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)
- [`IgbScatterPolygonSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolygonSeries.html)
- [`IgbScatterPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbScatterPolylineSeries.html)
- [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource)
- [`ShapeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeSeriesBase.html#IgniteUI_Blazor_Controls_IgbShapeSeriesBase_ShapeMemberPath)
- [`IgbNumericXAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericXAxis.html)
- [`IgbNumericYAxis`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericYAxis.html)
- `YAxisName`
- `XAxisName`
