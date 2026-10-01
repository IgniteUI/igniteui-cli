---
title: "Blazor Map | Data Visualization Tools | Binding Geographic Shape Files | Infragistics"
description: Use Infragistics' Blazor JavaScript map to load geo-spatial data from shape files. View Ignite UI for Blazor map demos!
keywords: "Blazor map, shapefiles, Ignite UI for Blazor, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "The Ignite UI for Blazor map component, the ShapefileRecord class loads geo-spatial data (points/locations, polylines, polygons) from shape files and converts it to a collection of IgxShapefileRecord objects."
_tocName: Binding Shape File
_premium: true
---
# Blazor Binding Shape Files with Geo-spatial Data

The Ignite UI for Blazor map component, the [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) class loads geo-spatial data (points/locations, polylines, polygons) from shape files and converts it to a collection of `IgxShapefileRecord` objects.

## Blazor Binding Shape Files with Geo-spatial Data Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
            <IgbGeographicPolylineSeries ShapefileDataSource="Data"
                                      ShapeFilterResolution="0.0"
                                      ShapeStrokeThickness="3"
                                      ShapeStroke="rgb(82, 82, 82, 0.4)"/>
        </IgbGeographicMap>
    </div>
</div>

@code {

    private IgbShapeDataSource Data;

    protected override void OnInitialized()
    {
        this.Data = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.shp",
            DatabaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.dbf"
        };
    }
}
```

The following table explains properties of the [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) class for loading shape files.

| Property | Type | Description   |
|----------|------|---------------|
| `ShapefileSource` | string |Specifies the Uri to a shape file (.shp) that contains geo-spatial data items.|
|`DatabaseSource` | string |Specifies the Uri to a shape database file (.dbf) that contains a data table for geo-spatial data items.|

When both source properties are set to non-null values, then the [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) object’s ImportAsync method is invoked which in return performs fetching and reading the shape files and finally doing the conversion. After this operation is complete, the [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) is populated with `IgxShapefileRecord` objects and the `ImportCompleted` event is raised in order to notify about completed process of loading and converting geo-spatial data from shape files.

## Loading Shapefiles
The following code creates an instance of the [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) object for loading a shape file that contains locations of major cities in the world. It also demonstrates how to handle the `ImportCompleted` event as a prerequisite for binding data to the map component.

## Binding Shapefiles
In the map component, Geographic Series are used for displaying geo-spatial data that is loaded from shape files. All types of Geographic Series have an [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=dataSource) property which can be bound to an array of objects. The [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) is an example such array because it contains a list of `IgxShapefileRecord` objects.

The `ShapefileRecord` class provides properties for storing geo-spatial data, listed in the following table.

| Property     | Description   |
|--------------|---------------|
|`Points`|Contains all the points in one geo-spatial shape loaded from a shape file (.shp). For example, the country of Japan in shape file would be represented as a list of a list of points object, where:<ul><li>The first list of points describes shape of Hokkaido island</li><li>The second list of points describes shape of Honshu island</li><li>The third list of points describes shape of Kyushu island</li><li>The fourth list of points describes shape of Shikoku island</li></ul>|
| `Fields` |Contains a row of data from the shape database file (.dbf) keyed by a column name. For example, a data about county of Japan which includes population, area, name of a capital, etc.|

This data structure is suitable for use in most Geographic Series as long as appropriate data columns are mapped to them.

## Code Snippet
This code example assumes that shape files were loaded using the [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord).
The following code binds [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries) in the map component to the [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) and maps the `Points` property of all `IgxShapefileRecord` objects.

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    <IgbGeographicPolylineSeries ShapefileDataSource="@DataSource"
        ShapeFilterResolution="0.0"
        ShapeStrokeThickness="3"
        ShapeStroke="rgb(82, 82, 82, 0.4)"/>
</IgbGeographicMap>

@code {

    private ShapeDataSource DataSource;

    protected override void OnInitialized()
    {
        this.DataSource = new IgbShapeDataSource()
        {
            ShapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.shp",
            DatabaseSource = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.dbf"
        };
    }
}
```

## API References
[`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries)
[`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord)
[`Fields`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord&member=fields)
[`ImportCompleted`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord&member=importCompleted)
[`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=dataSource)
[`Points`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord&member=points)
