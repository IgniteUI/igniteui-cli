---
title: "Blazor Map | Data Visualization Tools | Shape Polygon Series | Infragistics"
description: Use Infragistics Blazor map's shape polygon series to render shapes of countries or regions defined by geographic locations. Learn more about Ignite UI for Blazor map's series!
keywords: "Blazor map, shape polygon series, Ignite UI for Blazor, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "In Blazor map component, you can use the GeographicShapeSeries to display geo-spatial data using shape polygons in a geographic context."
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
Similar to other types of geographic series in the map control, the [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries) has the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=dataSource) property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the `ShapeMemberPath` property. The `GeographicShapeSeries` uses points of this mapped data column to plot polygons in the map control.

## Code Snippet
The following code demonstrates how to bind the [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries) to shapes of countries in the world loaded from a shape file using the [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord).

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <GeographicShapeSeries ShapefileDataSource="DataSource"/>
</IgbGeographicMap>

@code {

    public IgbShapeDataSource DataSource;

    protected override void OnInitialized()
    {
        this.DataSource = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCountries.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/WorldCountries.dbf"
        };
    }
}
```

## API References
[`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries)
[`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries)
[`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord)
