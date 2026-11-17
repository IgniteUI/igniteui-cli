---
title: "Blazor Map | Data Visualization Tools | Shape Polygon Series | Infragistics"
description: Use Infragistics Blazor map's shape polygon series to render shapes of countries or regions defined by geographic locations. Learn more about Ignite UI for Blazor map's series!
keywords: "Blazor map, shape polygon series, Ignite UI for Blazor, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "In Blazor map component, you can use the GeographicShapeSeries to display geo-spatial data using shape polygons in a geographic context."
platformType: xplat
_tocName: Geographic Polygon Map
_premium: true
---
# Blazor Geographic Polygon Map

In Blazor map component, you can use the [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries) to display geo-spatial data using shape polygons in a geographic context. This type of geographic series is often used to render shapes of countries or regions defined by geographic locations.

## Blazor Geographic Polygon Map Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true" BackgroundContent="@null">
            <IgbGeographicShapeSeries ShapefileDataSource="Data"
                                   Outline="black"
                                   Thickness="0.5"
                                   StyleShapeScript="onStylingShape"
                                   MarkerTemplateScript="onStylingMarker"
                                   MarkerCollisionAvoidance="@CollisionAvoidanceType.Omit"/>
        </IgbGeographicMap>
    </div>
</div>

@code {

    private IgbShapeDataSource Data;

    protected override void OnInitialized()
    {
        this.Data = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.shp",
            DatabaseSource  = "https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf"
        };
    }
}
```

The [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries) works a lot like the [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries) except that geo-spatial data is rendered with polygons instead of polylines.

## Data Requirements
Similar to other types of geographic series in the map control, the [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries) has the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries&member=DataSource) property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the [`ShapeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries&member=ShapeMemberPath) property. The [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries) uses points of this mapped data column to plot polygons in the map control.

When the shapes come straight from a shape file and need no reshaping first, the series can be given a [`ShapefileDataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries&member=ShapefileDataSource) of its own instead, and it reads the points out of the records itself. That is what the code below does; [Binding Shape Files](./geo-map-binding-shp-file.md) covers the other route, where a handler turns each record into an object of your own and maps [`ShapeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries&member=ShapeMemberPath) to it.

## Code Snippet
The following code gives the [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries) a [`ShapefileDataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries&member=ShapefileDataSource) pointing at a shape file of the world’s countries, and draws every country in it.

```razor
<IgbGeographicMap
    @ref="map"
    Height="100%"
    Width="100%"
    Zoomable="true">
    <IgbGeographicShapeSeries
        @ref="geographicShapeSeries1"
        Outline="Black"
        Thickness="0.5"
        MarkerCollisionAvoidance="CollisionAvoidanceType.Omit">
        <IgbShapeDataSource
            ShapefileSource="https://static.infragistics.com/xplatform/shapes/world_countries_all.shp"
            DatabaseSource="https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf" />
    </IgbGeographicShapeSeries>
</IgbGeographicMap>
```

## API References
[`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries)
[`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries)
[`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord)
