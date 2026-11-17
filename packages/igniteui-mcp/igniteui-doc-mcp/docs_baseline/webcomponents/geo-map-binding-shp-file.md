---
title: "Web Components Map | Data Visualization Tools | Binding Geographic Shape Files | Infragistics"
description: Use Infragistics' Web Components map to load geo-spatial data from shape files. View Ignite UI for Web Components map demos!
keywords: "Web Components map, shapefiles, Ignite UI for Web Components, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "ShapeDataSource", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "In the Ignite UI for Web Components map component, geo-spatial data (points/locations, polylines, polygons) is loaded from shape files and converted into a collection of shapefile records, one per shape."
platformType: xplat
_tocName: Binding Shape File
_premium: true
---
# Web Components Binding Shape Files with Geo-spatial Data

In the Ignite UI for Web Components map component, the `IgcShapeDataSource` class loads geo-spatial data (points/locations, polylines, polygons) from shape files and converts it to a collection of `IgcShapefileRecord` objects.

## Web Components Binding Shape Files with Geo-spatial Data Example



The following table explains properties of the `IgcShapeDataSource` class for loading shape files.

| Property | Type | Description   |
|----------|------|---------------|
| `shapefileSource` | string |Specifies the Uri to a shape file (.shp) that contains geo-spatial data items.|
|`databaseSource` | string |Specifies the Uri to a shape database file (.dbf) that contains a data table for geo-spatial data items.|

When both source properties are set to non-null values, then the `IgcShapeDataSource` object’s ImportAsync method is invoked which in return performs fetching and reading the shape files and finally doing the conversion. After this operation is complete, the `IgcShapeDataSource` is populated with `IgcShapefileRecord` objects and the `importCompleted` event is raised in order to notify about completed process of loading and converting geo-spatial data from shape files.

## Loading Shapefiles
The following code creates an instance of the `IgcShapeDataSource` object for loading a shape file that contains the world’s undersea cable routes. It also demonstrates how to handle the `importCompleted` event as a prerequisite for binding data to the map component.

```ts
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
private map: IgcGeographicMapComponent
// ...
/**
 * What the shapefile becomes once it has loaded: records turned into routes, bound to the series that
 * draws them.
 *
 * A handler for the shape data source's importCompleted, and the source is created in code by the item
 * that requires this one — so there is nothing in a description to bind it to, and it is not an
 * initializer either.
 */
export class MapShpFileReaders {

    /** Each record is one cable route, with the fields the shapefile's database holds beside it. */
    public readRoutes(sds: IgcShapeDataSource, e: any, map: IgcGeographicMapComponent): void {
        var geoRoutes: any[] = [];
        var pointData = sds.getPointData();
        // parsing shapefile data and creating geo-locations
        for (var i = 0; i < pointData.length; i++) {
            var record = pointData[i];
            // using field/column names from .DBF file
            geoRoutes.push({
                points: record.points,
                name: record.fieldValues.Name,
                capacity: record.fieldValues.CapacityG,
                distance: record.fieldValues.DistanceKM
            });
        }

        var lineSeries = map.series.item(0) as IgcGeographicPolylineSeriesComponent;
        lineSeries.dataSource = geoRoutes;
    }
}
// ...
private mapShpFileReaders: MapShpFileReaders = new MapShpFileReaders();
var root = "https://static.infragistics.com/xplatform/shapes/";
var readers = this.mapShpFileReaders;
var map = this.map;

var sds = new IgcShapeDataSource();
sds.importCompleted = (s: IgcShapeDataSource, e: any) => readers.readRoutes(s, e, map);
sds.shapefileSource = root + "WorldCableRoutes.shp";
sds.databaseSource = root + "WorldCableRoutes.dbf";
sds.dataBind();
```

## Binding Shapefiles
In the map component, Geographic Series are used for displaying geo-spatial data that is loaded from shape files. All types of Geographic Series have a [`dataSource`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesComponent&member=dataSource) property which can be bound to an array of objects. What a `IgcShapeDataSource` produces is an example of such an array, because each item in it is a `IgcShapefileRecord`.

The `IgcShapefileRecord` class provides properties for storing geo-spatial data, listed in the following table.

| Property     | Description   |
|--------------|---------------|
|`IgcShapefileRecord.points`|Contains all the points in one geo-spatial shape loaded from a shape file (.shp). For example, the country of Japan in shape file would be represented as a list of a list of points object, where:<ul><li>The first list of points describes shape of Hokkaido island</li><li>The second list of points describes shape of Honshu island</li><li>The third list of points describes shape of Kyushu island</li><li>The fourth list of points describes shape of Shikoku island</li></ul>|
| `IgcShapefileRecord.fieldValues` |Contains a row of data from the shape database file (.dbf) keyed by a column name. For example, a data about county of Japan which includes population, area, name of a capital, etc.|

This data structure is suitable for use in most Geographic Series as long as appropriate data columns are mapped to them.

## Code Snippet
This code example assumes that shape files were loaded using the `IgcShapeDataSource`.
The following code binds `IgcGeographicPolylineSeriesComponent` in the map component to the records that source produced, and maps the `IgcShapefileRecord.points` property of each `IgcShapefileRecord` through `shapeMemberPath`.

```html
<igc-geographic-map
    id="map"
    height="100%"
    width="100%"
    zoomable="true">
    <igc-geographic-polyline-series
        id="lineSeries"
        shape-member-path="points"
        shape-filter-resolution="0"
        shape-stroke-thickness="3"
        shape-stroke="rgb(82, 82, 82, 0.4)">
    </igc-geographic-polyline-series>
</igc-geographic-map>
```

## API References
`IgcGeographicPolylineSeriesComponent`
`IgcShapefileRecord`
`fields`
`IgcShapeDataSource.importCompleted`
`dataSource`
`IgcShapefileRecord.points`
