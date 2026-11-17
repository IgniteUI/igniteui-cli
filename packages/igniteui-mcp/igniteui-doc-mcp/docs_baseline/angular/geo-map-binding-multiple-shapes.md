---
title: "Angular Map | Data Visualization Tools | Binding Multiple Data Shapes | Infragistics"
description: Use Infragistics' Angular to add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. View Ignite UI for Angular map tutorials!
keywords: "Angular map, shape files, Ignite UI for Angular, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "In the Ignite UI for Angular map, you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data."
platformType: xplat
_tocName: Binding Multiple Shapes
_premium: true
---
# Angular Binding and Overlaying Multiple Shape Files

In the Ignite UI for Angular map, you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. For example, [`IgxGeographicSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent) for plotting geographic locations of ports, the [`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent) for plotting routes between ports, and the [`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent) for plotting shapes of countries.

## Angular Binding and Overlaying Multiple Shape Files Example

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxGeographicMapModule } from "igniteui-angular-maps";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxGeographicMapModule,
    IgxDataChartInteractivityModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxShapeDataSource } from "igniteui-angular-core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicShapeSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

    @ViewChild("map", { static: true })
    public map: IgxGeographicMapComponent;

    @ViewChild("shapeSeries", { static: true })
    public shapeSeries: IgxGeographicShapeSeriesComponent;

    @ViewChild("polylineSeries", { static: true })
    public polylineSeries: IgxGeographicPolylineSeriesComponent;

    @ViewChild("symbolSeries", { static: true })
    public symbolSeries: IgxGeographicSymbolSeriesComponent;

    @ViewChild("polylineTooltip", { static: true })
    public polylineTooltip: TemplateRef<object>;

    @ViewChild("shapeTooltip", { static: true })
    public shapeTooltip: TemplateRef<object>;

    @ViewChild("pointTooltip", { static: true })
    public pointTooltip: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit(): void {
        
        this.map.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.7, height: 0.7});
        this.map.backgroundContent = null;

        // loading a shapefile with geographic polygons
        const sdsPolygons = new IgxShapeDataSource();
        sdsPolygons.importCompleted.subscribe(() => this.onPolygonsLoaded(sdsPolygons, ""));
        sdsPolygons.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCountries.shp";
        sdsPolygons.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCountries.dbf";
        sdsPolygons.dataBind();
        // loading a shapefile with geographic polylines at runtime.
        const sdsPolylines = new IgxShapeDataSource();
        sdsPolylines.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.shp";
        sdsPolylines.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.dbf";
        sdsPolylines.dataBind();
        sdsPolylines.importCompleted.subscribe(() => this.onPolylinesLoaded(sdsPolylines, ""));
        // loading a shapefile with geographic points
        const sdsPoints = new IgxShapeDataSource();
        sdsPoints.importCompleted.subscribe(() => this.onPointsLoaded(sdsPoints, ""));
        sdsPoints.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCities.shp";
        sdsPoints.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCities.dbf";
        sdsPoints.dataBind();
    }

    public onPointsLoaded(sds: IgxShapeDataSource, e: any) {

        const geoLocations: any[] = [];
        // parsing shapefile data and creating geo-locations
        for (const record of sds.getPointData()) {
            const pop = record.fieldValues.POPULATION;
            if (pop > 1000000) {
                // each shapefile record has just one point
                const location = {
                    city: record.fieldValues.NAME,
                    latitude: record.points[0][0].y,
                    longitude: record.points[0][0].x,
                    population: (pop / 1000000).toFixed(0) + "M"
                };
                geoLocations.push(location);
            }
        }
        this.symbolSeries.dataSource = geoLocations;
        this.symbolSeries.markerOutline = "Red";
        this.symbolSeries.markerBrush = "White";
        this.symbolSeries.tooltipTemplate = this.pointTooltip;
    }

    public onPolylinesLoaded(sds: IgxShapeDataSource, e: any) {

        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        for (const record of sds.getPointData()) {
            // using field/column names from .DBF file
            const route = {
                capacity: record.fieldValues.CapacityG,
                distance: record.fieldValues.DistanceKM,
                name: record.fieldValues.Name,
                points: record.points
            };
            geoPolylines.push(route);
        }
        this.polylineSeries.shapeMemberPath = "points";
        this.polylineSeries.shapeFilterResolution = 2.0;
        this.polylineSeries.shapeStrokeThickness = 2;
        this.polylineSeries.shapeStroke = "rgba(13, 124, 252, 0.9)";
        this.polylineSeries.tooltipTemplate = this.polylineTooltip;
        this.polylineSeries.dataSource = geoPolylines;
    }

    public onPolygonsLoaded(sds: IgxShapeDataSource, e: any) {

        const geoPolygons: any[] = [];
        // parsing shapefile data and creating geo-polygons
        sds.getPointData().forEach((record) => {
            // using field/column names from .DBF file
            const pop = record.fieldValues.POPULATION;
            const country = {
                gdp: record.fieldValues.GDP,
                name: record.fieldValues.NAME,
                points: record.points,
                population: (pop / 1000000).toFixed(1) + "M"
            };
            geoPolygons.push(country);
        });
        this.shapeSeries.dataSource = geoPolygons;
        this.shapeSeries.shapeStroke = "Black";
        this.shapeSeries.shapeFill = "rgba(184, 183, 183, 0.5)";
        this.shapeSeries.tooltipTemplate = this.shapeTooltip;
    }
}
```
```html
<div class="container vertical">
    <igx-geographic-map #map name="map" width="100%" height="100%"
        zoomable="true" >
        <igx-geographic-shape-series #shapeSeries
            name="polygonSeries"
            shapeMemberPath="points"
            shapeFill="rgba(184, 183, 183, 0.5)"
            shapeStroke="Black"
            shapeStrokeThickness={1.0} >
        </igx-geographic-shape-series>
        <igx-geographic-polyline-series #polylineSeries
            name="polylineSeries"
            shapeMemberPath="points"
            shapeStroke="rgba(13, 124, 252, 0.9)"
            thickness={2.0} >
        </igx-geographic-polyline-series>
        <igx-geographic-symbol-series #symbolSeries
            name="symbolSeries"
            longitudeMemberPath="longitude"
            latitudeMemberPath="latitude"
            markerType="Circle"
            markerOutline="Red"
            markerBrush="White" >
        </igx-geographic-symbol-series>
    </igx-geographic-map>

    <ng-template let-series="series" let-item="item" #polylineTooltip>
        <div>
            <span>Cable: {{item.name}}</span><br />
            <span>Length: {{item.distance}}</span>
        </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #shapeTooltip>
        <div>
            <span>Country: {{item.name}}</span><br />
            <span>Population: {{item.population}}</span>
        </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #pointTooltip>
        <div>
            <span [style.color]="series.brush">City: {{item.city}}</span><br />
            <span>Population: {{item.population}}</span>
        </div>
    </ng-template>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

This topic takes you step-by-step towards displaying multiple geographic series in the map component. All geographic series plot following geo-spatial data loaded from shape files using the [`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord) class. Refer to the [Binding Shape Files](./geo-map-binding-shp-file.md) topic for more information about [`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord) object.

- [`IgxGeographicSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent) – displays locations of major cities
- [`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent) – displays routes between major ports
- [`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent) – displays shapes of countries of the world

You can use geographic series in above or other combinations to plot desired data.

## Importing Components

First, let's import required components and modules:

```ts
import { IgxGeographicShapeSeriesComponent, IgxGeographicPolylineSeriesComponent, IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
```

```ts
import { IgxGeographicMapModule } from 'igniteui-angular-maps';
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';
// ...
// app.module.ts
@NgModule({
    imports: [
    IgxGeographicMapModule,
    IgxDataChartInteractivityModule
    ]
})
export class AppModule { }
```

## Creating Series

Next, we need to create a map with a few Geographic Series that will later load different type of shapefile.

```html
<igx-geographic-map
    #geoMap
    height="100%"
    width="100%"
    zoomable="true">
    <igx-geographic-shape-series
        #polygonSeries
        shapeMemberPath="points"
        shapeFill="rgb(150, 150, 150)"
        shapeStroke="Black"
        shapeStrokeThickness=1>
    </igx-geographic-shape-series>
    <igx-geographic-polyline-series
        #lineSeries
        shapeMemberPath="points"
        shapeStroke="rgba(147, 15, 180, 0.5)"
        thickness=3>
    </igx-geographic-polyline-series>
    <igx-geographic-symbol-series
        #symbolSeries
        longitudeMemberPath="longitude"
        latitudeMemberPath="latitude"
        markerType="Circle"
        markerOutline="rgba(2, 102, 196, 1)"
        markerBrush="White">
    </igx-geographic-symbol-series>
</igx-geographic-map>
```

## Loading Shapefiles

Next, in constructor of your page, add a [`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord) for each shapefile that you want to display in the geographic map component. Each source is given the method that turns its records into data; those methods belong to a `MapMultipleShapesReaders` class, and the sections below show each of them.

```ts
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
// ...
private mapMultipleShapesReaders: MapMultipleShapesReaders = new MapMultipleShapesReaders();
// ...
var root = "https://static.infragistics.com/xplatform/shapes/";
var readers = this.mapMultipleShapesReaders;
var map = this.geoMap;

var sdsPolygons = new IgxShapeDataSource();
sdsPolygons.importCompleted.subscribe((s: IgxShapeDataSource, e: any) => readers.readPolygons(s, e, map));
sdsPolygons.shapefileSource = root + "WorldCountries.shp";
sdsPolygons.databaseSource = root + "WorldCountries.dbf";
sdsPolygons.dataBind();

var sdsPolylines = new IgxShapeDataSource();
sdsPolylines.importCompleted.subscribe((s: IgxShapeDataSource, e: any) => readers.readPolylines(s, e, map));
sdsPolylines.shapefileSource = root + "WorldCableRoutes.shp";
sdsPolylines.databaseSource = root + "WorldCableRoutes.dbf";
sdsPolylines.dataBind();

var sdsLocations = new IgxShapeDataSource();
sdsLocations.importCompleted.subscribe((s: IgxShapeDataSource, e: any) => readers.readPoints(s, e, map));
sdsLocations.shapefileSource = root + "WorldCities.shp";
sdsLocations.databaseSource = root + "WorldCities.dbf";
sdsLocations.dataBind();
```

## Processing Polygons

Process shapes data loaded in [`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord) with countries of the world and assign it to [`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent) object.

```ts
/** Country shapes, with the fields the tooltip shows taken from the .DBF file. */
public readPolygons(sds: IgxShapeDataSource, e: any, map: IgxGeographicMapComponent): void {
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

    var shapeSeries = map.series.item(0) as IgxGeographicShapeSeriesComponent;
    shapeSeries.dataSource = geoPolygons;
}
```

## Processing Polyline

Process shapes data loaded in [`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord) with communication routes between major cities and assign it to [`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent) object.

```ts
/** Connections between places, each record one path. */
public readPolylines(sds: IgxShapeDataSource, e: any, map: IgxGeographicMapComponent): void {
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

    var lineSeries = map.series.item(1) as IgxGeographicPolylineSeriesComponent;
    lineSeries.dataSource = geoPolylines;
}
```

## Processing Points

Process shapes data loaded in [`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord) with locations of major cities and assign it to [`IgxGeographicSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent) object.

```ts
/** Cities with a known population, one point per record. */
public readPoints(sds: IgxShapeDataSource, e: any, map: IgxGeographicMapComponent): void {
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

    var symbolSeries = map.series.item(2) as IgxGeographicSymbolSeriesComponent;
    symbolSeries.dataSource = geoLocations;
}
```

## Map Background

Also, you might want to hide geographic imagery from the map background content if your shape files provided sufficient geographic context (e.g. shape of countries) for your application.

```html
<igx-geographic-map
    #geoMap
    height="100%"
    width="100%"
    [backgroundContent]="null">
</igx-geographic-map>
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project.

```html
<igx-geographic-map
    #geoMap
    height="100%"
    width="100%"
    zoomable="true">
    <igx-geographic-shape-series
        #polygonSeries
        shapeMemberPath="points"
        shapeFill="rgb(150, 150, 150)"
        shapeStroke="Black"
        shapeStrokeThickness=1>
    </igx-geographic-shape-series>
    <igx-geographic-polyline-series
        #lineSeries
        shapeMemberPath="points"
        shapeStroke="rgba(147, 15, 180, 0.5)"
        thickness=3>
    </igx-geographic-polyline-series>
    <igx-geographic-symbol-series
        #symbolSeries
        longitudeMemberPath="longitude"
        latitudeMemberPath="latitude"
        markerType="Circle"
        markerOutline="rgba(2, 102, 196, 1)"
        markerBrush="White">
    </igx-geographic-symbol-series>
</igx-geographic-map>
```

```ts
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
// ...
private mapMultipleShapesReaders: MapMultipleShapesReaders = new MapMultipleShapesReaders();
// ...
var root = "https://static.infragistics.com/xplatform/shapes/";
var readers = this.mapMultipleShapesReaders;
var map = this.geoMap;

var sdsPolygons = new IgxShapeDataSource();
sdsPolygons.importCompleted.subscribe((s: IgxShapeDataSource, e: any) => readers.readPolygons(s, e, map));
sdsPolygons.shapefileSource = root + "WorldCountries.shp";
sdsPolygons.databaseSource = root + "WorldCountries.dbf";
sdsPolygons.dataBind();

var sdsPolylines = new IgxShapeDataSource();
sdsPolylines.importCompleted.subscribe((s: IgxShapeDataSource, e: any) => readers.readPolylines(s, e, map));
sdsPolylines.shapefileSource = root + "WorldCableRoutes.shp";
sdsPolylines.databaseSource = root + "WorldCableRoutes.dbf";
sdsPolylines.dataBind();

var sdsLocations = new IgxShapeDataSource();
sdsLocations.importCompleted.subscribe((s: IgxShapeDataSource, e: any) => readers.readPoints(s, e, map));
sdsLocations.shapefileSource = root + "WorldCities.shp";
sdsLocations.databaseSource = root + "WorldCities.dbf";
sdsLocations.dataBind();
```

## API References
[`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent)
[`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent)
[`IgxGeographicSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent)
[`IgxShapefileRecord`](mcp:get_api_reference?platform=angular&component=IgxShapefileRecord)
