---
title: "React Map | Data Visualization Tools | Binding Geographic Shape Files | Infragistics"
description: Use Infragistics' React map to load geo-spatial data from shape files. View Ignite UI for React map demos!
keywords: "React map, shapefiles, Ignite UI for React, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "ShapeDataSource", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "In the Ignite UI for React map component, geo-spatial data (points/locations, polylines, polygons) is loaded from shape files and converted into a collection of shapefile records, one per shape."
platformType: xplat
_tocName: Binding Shape File
_premium: true
---
# React Binding Shape Files with Geo-spatial Data

In the Ignite UI for React map component, the `IgrShapeDataSource` class loads geo-spatial data (points/locations, polylines, polygons) from shape files and converts it to a collection of `IgrShapefileRecord` objects.

## React Binding Shape Files with Geo-spatial Data Example



The following table explains properties of the `IgrShapeDataSource` class for loading shape files.

| Property | Type | Description   |
|----------|------|---------------|
| `shapefileSource` | string |Specifies the Uri to a shape file (.shp) that contains geo-spatial data items.|
|`databaseSource` | string |Specifies the Uri to a shape database file (.dbf) that contains a data table for geo-spatial data items.|

When both source properties are set to non-null values, then the `IgrShapeDataSource` object’s ImportAsync method is invoked which in return performs fetching and reading the shape files and finally doing the conversion. After this operation is complete, the `IgrShapeDataSource` is populated with `IgrShapefileRecord` objects and the `importCompleted` event is raised in order to notify about completed process of loading and converting geo-spatial data from shape files.

## Loading Shapefiles
The following code creates an instance of the `IgrShapeDataSource` object for loading a shape file that contains the world’s undersea cable routes. It also demonstrates how to handle the `importCompleted` event as a prerequisite for binding data to the map component.

```tsx
import { IgrShapeDataSource } from 'igniteui-react-core';
private map: IgrGeographicMap
private mapRef(r: IgrGeographicMap) {
    this.map = r;
    this.setState({});
}
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
    public readRoutes(sds: IgrShapeDataSource, e: any, map: IgrGeographicMap): void {
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

        var lineSeries = map.series.item(0) as IgrGeographicPolylineSeries;
        lineSeries.dataSource = geoRoutes;
    }
}
// ...
private mapShpFileReaders: MapShpFileReaders = new MapShpFileReaders();
var root = "https://static.infragistics.com/xplatform/shapes/";
var readers = this.mapShpFileReaders;
var map = this.map;

var sds = new IgrShapeDataSource();
sds.importCompleted = (s: IgrShapeDataSource, e: any) => readers.readRoutes(s, e, map);
sds.shapefileSource = root + "WorldCableRoutes.shp";
sds.databaseSource = root + "WorldCableRoutes.dbf";
sds.dataBind();
```

## Binding Shapefiles
In the map component, Geographic Series are used for displaying geo-spatial data that is loaded from shape files. All types of Geographic Series have a `dataSource` property which can be bound to an array of objects. What a `IgrShapeDataSource` produces is an example of such an array, because each item in it is a `IgrShapefileRecord`.

The `IgrShapefileRecord` class provides properties for storing geo-spatial data, listed in the following table.

| Property     | Description   |
|--------------|---------------|
|`IgrShapefileRecord.points`|Contains all the points in one geo-spatial shape loaded from a shape file (.shp). For example, the country of Japan in shape file would be represented as a list of a list of points object, where:<ul><li>The first list of points describes shape of Hokkaido island</li><li>The second list of points describes shape of Honshu island</li><li>The third list of points describes shape of Kyushu island</li><li>The fourth list of points describes shape of Shikoku island</li></ul>|
| `IgrShapefileRecord.fieldValues` |Contains a row of data from the shape database file (.dbf) keyed by a column name. For example, a data about county of Japan which includes population, area, name of a capital, etc.|

This data structure is suitable for use in most Geographic Series as long as appropriate data columns are mapped to them.

## Code Snippet
This code example assumes that shape files were loaded using the `IgrShapeDataSource`.
The following code binds `IgrGeographicPolylineSeries` in the map component to the records that source produced, and maps the `IgrShapefileRecord.points` property of each `IgrShapefileRecord` through `shapeMemberPath`.

```tsx
<IgrGeographicMap
    ref={this.mapRef}
    height="100%"
    width="100%"
    zoomable={true}>
    <IgrGeographicPolylineSeries
        name="lineSeries"
        ref={ref => { this.lineSeries = ref; }}
        shapeMemberPath="points"
        shapeFilterResolution={0}
        shapeStrokeThickness={3}
        shapeStroke="rgb(82, 82, 82, 0.4)" />
</IgrGeographicMap>
```

## API References
`IgrGeographicPolylineSeries`
`IgrShapefileRecord`
`fields`
`IgrShapeDataSource.importCompleted`
`dataSource`
`IgrShapefileRecord.points`
