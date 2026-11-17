---
title: "Blazor Map | Data Visualization Tools | Binding Geographic Shape Files | Infragistics"
description: Use Infragistics' Blazor map to load geo-spatial data from shape files. View Ignite UI for Blazor map demos!
keywords: "Blazor map, shapefiles, Ignite UI for Blazor, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "ShapeDataSource", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "In the Ignite UI for Blazor map component, geo-spatial data (points/locations, polylines, polygons) is loaded from shape files and converted into a collection of shapefile records, one per shape."
platformType: xplat
_tocName: Binding Shape File
_premium: true
---
# Blazor Binding Shape Files with Geo-spatial Data

In the Ignite UI for Blazor map component, the [`IgbShapeDataSource`](mcp:get_api_reference?platform=blazor&component=IgbShapeDataSource) class loads geo-spatial data (points/locations, polylines, polygons) from shape files and converts it to a collection of [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) objects.

## Blazor Binding Shape Files with Geo-spatial Data Example



The following table explains properties of the [`IgbShapeDataSource`](mcp:get_api_reference?platform=blazor&component=IgbShapeDataSource) class for loading shape files.

| Property | Type | Description   |
|----------|------|---------------|
| [`ShapefileSource`](mcp:get_api_reference?platform=blazor&component=IgbShapeDataSource&member=ShapefileSource) | string |Specifies the Uri to a shape file (.shp) that contains geo-spatial data items.|
|[`DatabaseSource`](mcp:get_api_reference?platform=blazor&component=IgbShapeDataSource&member=DatabaseSource) | string |Specifies the Uri to a shape database file (.dbf) that contains a data table for geo-spatial data items.|

When both source properties are set to non-null values, then the [`IgbShapeDataSource`](mcp:get_api_reference?platform=blazor&component=IgbShapeDataSource) object’s ImportAsync method is invoked which in return performs fetching and reading the shape files and finally doing the conversion. After this operation is complete, the [`IgbShapeDataSource`](mcp:get_api_reference?platform=blazor&component=IgbShapeDataSource) is populated with [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) objects and the [`ImportCompleted`](mcp:get_api_reference?platform=blazor&component=IgbShapeDataSource&member=ImportCompleted) event is raised in order to notify about completed process of loading and converting geo-spatial data from shape files.

## Loading Shapefiles
The following code creates an instance of the [`IgbShapeDataSource`](mcp:get_api_reference?platform=blazor&component=IgbShapeDataSource) object for loading a shape file that contains the world’s undersea cable routes. It also demonstrates how to handle the [`ImportCompleted`](mcp:get_api_reference?platform=blazor&component=IgbShapeDataSource&member=ImportCompleted) event as a prerequisite for binding data to the map component.

```razor
@using IgniteUI.Blazor.Controls;
@using System;
private IgbGeographicMap map;
// ...
/// <summary>
/// What the shapefile becomes once it has loaded: records turned into routes, bound to the series
/// that draws them.
///
/// A handler for the shape data source's ImportCompleted, and the source is created in code by the
/// item that requires this one — so there is nothing in a description to bind it to, and it is not
/// an initializer either.
/// </summary>
public class MapShpFileReaders
{
    /// <summary>Each record is one cable route, with the fields the database holds beside it.</summary>
    public void ReadRoutes(object sender, EventArgs e)
    {
        var sds = sender as IgbShapeDataSource;
        var geoRoutes = new List<object>();
        // parsing shapefile data and creating geo-locations
        foreach (var record in sds.GetPointData())
        {
            // using field/column names from .DBF file
            geoRoutes.Add(new
            {
                points = record.Points,
                name = record.FieldValues["Name"],
                capacity = record.FieldValues["CapacityG"],
                distance = record.FieldValues["DistanceKM"]
            });
        }

        var map = this.map;
        var lineSeries = map.Series[0] as IgbGeographicPolylineSeries;
        lineSeries.DataSource = geoRoutes;
    }
}
// ...
private MapShpFileReaders mapShpFileReaders = new MapShpFileReaders();
var root = "https://static.infragistics.com/xplatform/shapes/";
var readers = this.mapShpFileReaders;

var sds = new IgbShapeDataSource()
{
    ShapefileSource = root + "WorldCableRoutes.shp",
    DatabaseSource = root + "WorldCableRoutes.dbf"
};
sds.ImportCompleted += readers.ReadRoutes;
sds.DataBind();
```

## Binding Shapefiles
In the map component, Geographic Series are used for displaying geo-spatial data that is loaded from shape files. All types of Geographic Series have a [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=DataSource) property which can be bound to an array of objects. What a [`IgbShapeDataSource`](mcp:get_api_reference?platform=blazor&component=IgbShapeDataSource) produces is an example of such an array, because each item in it is a [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord).

The [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) class provides properties for storing geo-spatial data, listed in the following table.

| Property     | Description   |
|--------------|---------------|
| [`IgbShapefileRecord.FieldValues`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord&member=FieldValues) |Contains a row of data from the shape database file (.dbf) keyed by a column name. For example, a data about county of Japan which includes population, area, name of a capital, etc.|

This data structure is suitable for use in most Geographic Series as long as appropriate data columns are mapped to them.

## Code Snippet
This code example assumes that shape files were loaded using the [`IgbShapeDataSource`](mcp:get_api_reference?platform=blazor&component=IgbShapeDataSource).
The following code binds [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries) in the map component to the records that source produced, and maps the `Points` property of each [`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord) through [`ShapeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries&member=ShapeMemberPath).

```razor
<IgbGeographicMap
    @ref="map"
    Height="100%"
    Width="100%"
    Zoomable="true">
    <IgbGeographicPolylineSeries
        @ref="lineSeries"
        ShapeMemberPath="Points"
        ShapeFilterResolution="0"
        ShapeStrokeThickness="3"
        ShapeStroke="rgb(82, 82, 82, 0.4)" />
</IgbGeographicMap>
```

## API References
[`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries)
[`IgbShapefileRecord`](mcp:get_api_reference?platform=blazor&component=IgbShapefileRecord)
`fields`
[`IgbShapeDataSource.ImportCompleted`](mcp:get_api_reference?platform=blazor&component=IgbShapeDataSource&member=ImportCompleted)
[`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries&member=DataSource)
