---
title: "Angular Map | Data Visualization Tools | Binding Geographic Shape Files | Infragistics"
description: Use Infragistics' Angular map to load geo-spatial data from shape files. View Ignite UI for Angular map demos!
keywords: "Angular map, shapefiles, Ignite UI for Angular, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "ShapeDataSource", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "In the Ignite UI for Angular map component, geo-spatial data (points/locations, polylines, polygons) is loaded from shape files and converted into a collection of shapefile records, one per shape."
platformType: xplat
_tocName: Binding Shape File
_premium: true
---
# Angular Binding Shape Files with Geo-spatial Data

In the Ignite UI for Angular map component, the [`IgxShapeDataSource`](mcp:get_api_reference?platform=angular&component=IgxShapeDataSource) class loads geo-spatial data (points/locations, polylines, polygons) from shape files and converts it to a collection of [`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord) objects.

## Angular Binding Shape Files with Geo-spatial Data Example

<code-view iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/binding-shp-file" github-src="maps/geo-map/binding-shp-file" alt="Angular Binding Shape Files with Geo spatial Data Example"></code-view>

The following table explains properties of the [`IgxShapeDataSource`](mcp:get_api_reference?platform=angular&component=IgxShapeDataSource) class for loading shape files.

| Property | Type | Description   |
|----------|------|---------------|
| [`shapefileSource`](mcp:get_api_reference?platform=angular&component=IgxShapeDataSource&member=shapefileSource) | string |Specifies the Uri to a shape file (.shp) that contains geo-spatial data items.|
|[`databaseSource`](mcp:get_api_reference?platform=angular&component=IgxShapeDataSource&member=databaseSource) | string |Specifies the Uri to a shape database file (.dbf) that contains a data table for geo-spatial data items.|

When both source properties are set to non-null values, then the [`IgxShapeDataSource`](mcp:get_api_reference?platform=angular&component=IgxShapeDataSource) object’s ImportAsync method is invoked which in return performs fetching and reading the shape files and finally doing the conversion. After this operation is complete, the [`IgxShapeDataSource`](mcp:get_api_reference?platform=angular&component=IgxShapeDataSource) is populated with [`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord) objects and the [`importCompleted`](mcp:get_api_reference?platform=angular&component=IgxShapeDataSource&member=importCompleted) event is raised in order to notify about completed process of loading and converting geo-spatial data from shape files.

## Loading Shapefiles
The following code creates an instance of the [`IgxShapeDataSource`](mcp:get_api_reference?platform=angular&component=IgxShapeDataSource) object for loading a shape file that contains the world’s undersea cable routes. It also demonstrates how to handle the [`importCompleted`](mcp:get_api_reference?platform=angular&component=IgxShapeDataSource&member=importCompleted) event as a prerequisite for binding data to the map component.

```ts
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
@ViewChild("map", { static: true } )
private map: IgxGeographicMapComponent
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
    public readRoutes(sds: IgxShapeDataSource, e: any, map: IgxGeographicMapComponent): void {
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

        var lineSeries = map.series.item(0) as IgxGeographicPolylineSeriesComponent;
        lineSeries.dataSource = geoRoutes;
    }
}
// ...
private mapShpFileReaders: MapShpFileReaders = new MapShpFileReaders();
var root = "https://static.infragistics.com/xplatform/shapes/";
var readers = this.mapShpFileReaders;
var map = this.map;

var sds = new IgxShapeDataSource();
sds.importCompleted.subscribe((s: IgxShapeDataSource, e: any) => readers.readRoutes(s, e, map));
sds.shapefileSource = root + "WorldCableRoutes.shp";
sds.databaseSource = root + "WorldCableRoutes.dbf";
sds.dataBind();
```

## Binding Shapefiles
In the map component, Geographic Series are used for displaying geo-spatial data that is loaded from shape files. All types of Geographic Series have a [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxSeriesComponent&member=dataSource) property which can be bound to an array of objects. What a [`IgxShapeDataSource`](mcp:get_api_reference?platform=angular&component=IgxShapeDataSource) produces is an example of such an array, because each item in it is a [`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord).

The [`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord) class provides properties for storing geo-spatial data, listed in the following table.

| Property     | Description   |
|--------------|---------------|
|[`IgxShapefileRecord.points`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord&member=points)|Contains all the points in one geo-spatial shape loaded from a shape file (.shp). For example, the country of Japan in shape file would be represented as a list of a list of points object, where:<ul><li>The first list of points describes shape of Hokkaido island</li><li>The second list of points describes shape of Honshu island</li><li>The third list of points describes shape of Kyushu island</li><li>The fourth list of points describes shape of Shikoku island</li></ul>|
| [`IgxShapefileRecord.fieldValues`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord&member=fieldValues) |Contains a row of data from the shape database file (.dbf) keyed by a column name. For example, a data about county of Japan which includes population, area, name of a capital, etc.|

This data structure is suitable for use in most Geographic Series as long as appropriate data columns are mapped to them.

## Code Snippet
This code example assumes that shape files were loaded using the [`IgxShapeDataSource`](mcp:get_api_reference?platform=angular&component=IgxShapeDataSource).
The following code binds [`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent) in the map component to the records that source produced, and maps the [`IgxShapefileRecord.points`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord&member=points) property of each [`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord) through [`shapeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent&member=shapeMemberPath).

```html
<igx-geographic-map
    #map
    height="100%"
    width="100%"
    zoomable="true">
    <igx-geographic-polyline-series
        #lineSeries
        shapeMemberPath="points"
        shapeFilterResolution=0
        shapeStrokeThickness=3
        shapeStroke="rgb(82, 82, 82, 0.4)">
    </igx-geographic-polyline-series>
</igx-geographic-map>
```

## API References
[`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent)
[`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord)
`fields`
[`IgxShapeDataSource.importCompleted`](mcp:get_api_reference?platform=angular&component=IgxShapeDataSource&member=importCompleted)
[`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent&member=dataSource)
[`IgxShapefileRecord.points`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord&member=points)
