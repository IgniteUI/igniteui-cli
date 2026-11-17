---
title: "Web Components Map | Data Visualization Tools | Binding Multiple Data Shapes | Infragistics"
description: Use Infragistics' Web Components to add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. View Ignite UI for Web Components map tutorials!
keywords: "Web Components map, shape files, Ignite UI for Web Components, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "In the Ignite UI for Web Components map, you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data."
platformType: xplat
_tocName: Binding Multiple Shapes
_premium: true
---
# Web Components Binding and Overlaying Multiple Shape Files

In the Ignite UI for Web Components map, you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. For example, `IgcGeographicSymbolSeriesComponent` for plotting geographic locations of ports, the `IgcGeographicPolylineSeriesComponent` for plotting routes between ports, and the `IgcGeographicShapeSeriesComponent` for plotting shapes of countries.

## Web Components Binding and Overlaying Multiple Shape Files Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

This topic takes you step-by-step towards displaying multiple geographic series in the map component. All geographic series plot following geo-spatial data loaded from shape files using the `IgcShapefileRecord` class. Refer to the [Binding Shape Files](./geo-map-binding-shp-file.md) topic for more information about `IgcShapefileRecord` object.

- `IgcGeographicSymbolSeriesComponent` – displays locations of major cities
- `IgcGeographicPolylineSeriesComponent` – displays routes between major ports
- `IgcGeographicShapeSeriesComponent` – displays shapes of countries of the world

You can use geographic series in above or other combinations to plot desired data.

## Importing Components

First, let's import required components and modules:

```ts
import { IgcGeographicMapComponent, IgcGeographicShapeSeriesComponent, IgcGeographicPolylineSeriesComponent, IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
```

```ts
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
// ...
ModuleManager.register(
    IgcGeographicMapModule,
    IgcDataChartInteractivityModule
);
```

## Creating Series

Next, we need to create a map with a few Geographic Series that will later load different type of shapefile.

```html
<igc-geographic-map
    id="geoMap"
    height="100%"
    width="100%"
    zoomable="true">
    <igc-geographic-shape-series
        id="polygonSeries"
        shape-member-path="points"
        shape-fill="rgb(150, 150, 150)"
        shape-stroke="Black"
        shape-stroke-thickness="1">
    </igc-geographic-shape-series>
    <igc-geographic-polyline-series
        id="lineSeries"
        shape-member-path="points"
        shape-stroke="rgba(147, 15, 180, 0.5)"
        thickness="3">
    </igc-geographic-polyline-series>
    <igc-geographic-symbol-series
        id="symbolSeries"
        longitude-member-path="longitude"
        latitude-member-path="latitude"
        marker-type="Circle"
        marker-outline="rgba(2, 102, 196, 1)"
        marker-brush="White">
    </igc-geographic-symbol-series>
</igc-geographic-map>
```

## Loading Shapefiles

Next, in constructor of your page, add a `IgcShapefileRecord` for each shapefile that you want to display in the geographic map component. Each source is given the method that turns its records into data; those methods belong to a `MapMultipleShapesReaders` class, and the sections below show each of them.

```ts
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
// ...
private mapMultipleShapesReaders: MapMultipleShapesReaders = new MapMultipleShapesReaders();
// ...
var root = "https://static.infragistics.com/xplatform/shapes/";
var readers = this.mapMultipleShapesReaders;
var map = this.geoMap;

var sdsPolygons = new IgcShapeDataSource();
sdsPolygons.importCompleted = (s: IgcShapeDataSource, e: any) => readers.readPolygons(s, e, map);
sdsPolygons.shapefileSource = root + "WorldCountries.shp";
sdsPolygons.databaseSource = root + "WorldCountries.dbf";
sdsPolygons.dataBind();

var sdsPolylines = new IgcShapeDataSource();
sdsPolylines.importCompleted = (s: IgcShapeDataSource, e: any) => readers.readPolylines(s, e, map);
sdsPolylines.shapefileSource = root + "WorldCableRoutes.shp";
sdsPolylines.databaseSource = root + "WorldCableRoutes.dbf";
sdsPolylines.dataBind();

var sdsLocations = new IgcShapeDataSource();
sdsLocations.importCompleted = (s: IgcShapeDataSource, e: any) => readers.readPoints(s, e, map);
sdsLocations.shapefileSource = root + "WorldCities.shp";
sdsLocations.databaseSource = root + "WorldCities.dbf";
sdsLocations.dataBind();
```

## Processing Polygons

Process shapes data loaded in `IgcShapefileRecord` with countries of the world and assign it to `IgcGeographicShapeSeriesComponent` object.

```ts
/** Country shapes, with the fields the tooltip shows taken from the .DBF file. */
public readPolygons(sds: IgcShapeDataSource, e: any, map: IgcGeographicMapComponent): void {
    var geoPolygons: any[] = [];
    var pointData = sds.getPointData();
    // parsing shapefile data and creating geo-polygons
    for (var i = 0; i < pointData.length; i++) {
        var record = pointData[i];
        // using field/column names from .DBF file
        geoPolygons.push({
            points: record.points,
            name: record.fieldValues.NAME,
            gdp: record.fieldValues.GDP,
            population: record.fieldValues.POPULATION
        });
    }

    var shapeSeries = map.series.item(0) as IgcGeographicShapeSeriesComponent;
    shapeSeries.dataSource = geoPolygons;
}
```

## Processing Polyline

Process shapes data loaded in `IgcShapefileRecord` with communication routes between major cities and assign it to `IgcGeographicPolylineSeriesComponent` object.

```ts
/** Connections between places, each record one path. */
public readPolylines(sds: IgcShapeDataSource, e: any, map: IgcGeographicMapComponent): void {
    var geoPolylines: any[] = [];
    var pointData = sds.getPointData();
    // parsing shapefile data and creating geo-polylines
    for (var i = 0; i < pointData.length; i++) {
        var record = pointData[i];
        // using field/column names from .DBF file
        geoPolylines.push({
            points: record.points,
            name: record.fieldValues.Name,
            capacity: record.fieldValues.CapacityG,
            distance: record.fieldValues.DistanceKM,
            isOverLand: record.fieldValues.OverLand === 0,
            isActive: record.fieldValues.NotLive !== 0,
            service: record.fieldValues.InService
        });
    }

    var lineSeries = map.series.item(1) as IgcGeographicPolylineSeriesComponent;
    lineSeries.dataSource = geoPolylines;
}
```

## Processing Points

Process shapes data loaded in `IgcShapefileRecord` with locations of major cities and assign it to `IgcGeographicSymbolSeriesComponent` object.

```ts
/** Cities with a known population, one point per record. */
public readPoints(sds: IgcShapeDataSource, e: any, map: IgcGeographicMapComponent): void {
    var geoLocations: any[] = [];
    var pointData = sds.getPointData();
    // parsing shapefile data and creating geo-locations
    for (var i = 0; i < pointData.length; i++) {
        var record = pointData[i];
        var pop = record.fieldValues.POPULATION;
        if (pop > 0) {
            // each of these records holds a single point
            // using field/column names from .DBF file
            geoLocations.push({
                latitude: record.points[0][0].y,
                longitude: record.points[0][0].x,
                city: record.fieldValues.NAME,
                population: pop
            });
        }
    }

    var symbolSeries = map.series.item(2) as IgcGeographicSymbolSeriesComponent;
    symbolSeries.dataSource = geoLocations;
}
```

## Map Background

Also, you might want to hide geographic imagery from the map background content if your shape files provided sufficient geographic context (e.g. shape of countries) for your application.

```html
<igc-geographic-map
    id="geoMap"
    height="100%"
    width="100%">
</igc-geographic-map>
```

```ts
// fields:
private geoMap: IgcGeographicMapComponent

// initialization:
var geoMap = this.geoMap = document.getElementById('geoMap') as IgcGeographicMapComponent;

// bindings:
geoMap.backgroundContent = null;
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project.

```html
<igc-geographic-map
    id="geoMap"
    height="100%"
    width="100%"
    zoomable="true">
    <igc-geographic-shape-series
        id="polygonSeries"
        shape-member-path="points"
        shape-fill="rgb(150, 150, 150)"
        shape-stroke="Black"
        shape-stroke-thickness="1">
    </igc-geographic-shape-series>
    <igc-geographic-polyline-series
        id="lineSeries"
        shape-member-path="points"
        shape-stroke="rgba(147, 15, 180, 0.5)"
        thickness="3">
    </igc-geographic-polyline-series>
    <igc-geographic-symbol-series
        id="symbolSeries"
        longitude-member-path="longitude"
        latitude-member-path="latitude"
        marker-type="Circle"
        marker-outline="rgba(2, 102, 196, 1)"
        marker-brush="White">
    </igc-geographic-symbol-series>
</igc-geographic-map>
```

```ts
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
// ...
private mapMultipleShapesReaders: MapMultipleShapesReaders = new MapMultipleShapesReaders();
// ...
var root = "https://static.infragistics.com/xplatform/shapes/";
var readers = this.mapMultipleShapesReaders;
var map = this.geoMap;

var sdsPolygons = new IgcShapeDataSource();
sdsPolygons.importCompleted = (s: IgcShapeDataSource, e: any) => readers.readPolygons(s, e, map);
sdsPolygons.shapefileSource = root + "WorldCountries.shp";
sdsPolygons.databaseSource = root + "WorldCountries.dbf";
sdsPolygons.dataBind();

var sdsPolylines = new IgcShapeDataSource();
sdsPolylines.importCompleted = (s: IgcShapeDataSource, e: any) => readers.readPolylines(s, e, map);
sdsPolylines.shapefileSource = root + "WorldCableRoutes.shp";
sdsPolylines.databaseSource = root + "WorldCableRoutes.dbf";
sdsPolylines.dataBind();

var sdsLocations = new IgcShapeDataSource();
sdsLocations.importCompleted = (s: IgcShapeDataSource, e: any) => readers.readPoints(s, e, map);
sdsLocations.shapefileSource = root + "WorldCities.shp";
sdsLocations.databaseSource = root + "WorldCities.dbf";
sdsLocations.dataBind();
```

## API References
`IgcGeographicPolylineSeriesComponent`
`IgcGeographicShapeSeriesComponent`
`IgcGeographicSymbolSeriesComponent`
`IgcShapefileRecord`
