---
title: "Blazor Map | Data Visualization Tools | Shape Polyline Series | Infragistics"
description: Use Infragistics Blazor map's shape polyline series to render roads or connections between geographic locations such as cities or airports. Learn more about Ignite UI for Blazor map's series!
keywords: "Blazor map, Ignite UI for Blazor, shape polyline series, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "In Blazor map component, you can use the GeographicPolylineSeries to display geo-spatial data using polylines in a geographic context."
_tocName: Geographic Polyline Map
_premium: true
---
# Blazor Geographic Polyline Map

In Blazor map component, you can use the [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries) to display geo-spatial data using polylines in a geographic context. This type of geographic series is often used to render roads or connections between geographic locations such as cities or airports.

## Blazor Geographic Polyline Map Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap @ref="@MapRef" Height="100%" Width="100%" Zoomable="true">
            <IgbGeographicPolylineSeries
            Outline="Red"
            ShapefileDataSource="Data" />
        </IgbGeographicMap>
    </div>
</div>

@code {

    private IgbShapeDataSource Data;
    private IgbGeographicMap MapRef { get; set; }

    protected override void OnInitialized()
    {
        this.Data = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.shp",
            DatabaseSource  = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.dbf"
        };
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.MapRef != null)
        {
            Rect zoomRect = new Rect() { Left = 0.2, Top = 0.1, Width = 0.6, Height = 0.6 };
            await this.MapRef.EnsureReady();
            await this.MapRef.UpdateZoomWindowAsync(zoomRect);
        }
    }
}
```

The [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries) works a lot like the [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries) except that geo-spatial data is rendered with polylines instead of polygons.

## Data Requirements
Similarly to other types of geographic series in the control, the [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries) has the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=dataSource) property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the `ShapeMemberPath` property. The `GeographicPolylineSeries` uses points of this mapped data column to plot polygons in the control.

## Code Snippet
The following code shows how to bind the [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries) to locations of cities loaded from a shape file using the [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord).

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicPolylineSeries Outline="Red" ShapefileDataSource="DataSource" />
</IgbGeographicMap>

@code {

    public IgbShapeDataSource DataSource;

    protected override void OnInitialized()
    {
        this.DataSource = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.dbf"
        };
    }
}
```

## API References
[`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries)
[`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries)
[`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord)
