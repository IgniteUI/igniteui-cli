---
title: Web Components Map | Data Visualization Tools | Binding Multiple Data Shapes | Infragistics
_description: Use Infragistics' Web Components to add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. View Ignite UI for Web Components map tutorials!
_keywords: Web Components map, shape files, Ignite UI for Web Components, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "ShapefileConverter", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
_tocName: Binding Multiple Shapes
_premium: true
---

# Web Components Binding and Overlaying Multiple Shape Files

In the Ignite UI for Web Components map, you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. For example, [`IgcGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html) for plotting geographic locations of ports, the [`IgcGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicpolylineseriescomponent.html) for plotting routes between ports, and the [`IgcGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicshapeseriescomponent.html) for plotting shapes of countries.

## Web Components Binding and Overlaying Multiple Shape Files Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series in the map component. All geographic series plot following geo-spatial data loaded from shape files using the [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html) class. Refer to the [Binding Shape Files](geo-map-binding-shp-file.md) topic for more information about [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html) object.

- [`IgcGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html) – displays locations of major cities
- [`IgcGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicpolylineseriescomponent.html) – displays routes between major ports
- [`IgcGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicshapeseriescomponent.html) – displays shapes of countries of the world

You can use geographic series in above or other combinations to plot desired data.

## Importing Components

First, let's import required components and modules:

```ts
import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
import { IgcGeographicShapeSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcGeographicPolylineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcDataChartInteractivityModule,
    IgcGeographicMapModule
);
```

## Creating Series

Next, we need to create a map with a few Geographic Series that will later load different type of shapefile.

```html
<igc-geographic-map id="geoMap" width="100%" height="100%" >
    <igc-geographic-shape-series
        id="polygonSeries"
        shape-memberPath="points"
        shape-fill="rgb(150, 150, 150)"
        shape-stroke="Black"
        shape-stroke-thickness="1.0">
    </igc-geographic-shape-series>
    <igc-geographic-polyline-series
        id="lineSeries"
        shape-member-path="points"
        shape-stroke="rgba(147, 15, 180, 0.5)"
        thickness="3.0" >
    </igc-geographic-polyline-series>
    <igc-geographic-symbol-series
        id="symbolSeries"
        longitude-member-path="longitude"
        latitude-member-path="latitude"
        marker-type="Circle"
        marker-outline="rgb(2, 102, 196)"
        marker-brush="White">
    </igc-geographic-symbol-series>
</igc-geographic-map>
```

## Loading Shapefiles

Next, in constructor of your page, add a [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html) for each shapefile that you want to display in the geographic map component.

```ts
const sdsPolygons = new IgcShapeDataSource();
sdsPolygons.importCompleted = this.onPolygonsLoaded;
sdsPolygons.shapefileSource = url + "/shapes/WorldCountries.shp";
sdsPolygons.databaseSource  = url + "/shapes/WorldCountries.dbf";
sdsPolygons.dataBind();
const sdsPolylines = new IgcShapeDataSource();
sdsPolylines.importCompleted = this.onPolylinesLoaded;
sdsPolylines.shapefileSource = url + "/shapes/WorldConnections.shp";
sdsPolylines.databaseSource  = url + "/shapes/WorldConnections.dbf";
sdsPolylines.dataBind();
const sdsLocations = new IgcShapeDataSource();
sdsLocations.importCompleted = this.onPointsLoaded;
sdsLocations.shapefileSource = url + "/Shapes/WorldCities.shp";
sdsLocations.databaseSource  = url + "/Shapes/WorldCities.dbf";
sdsLocations.dataBind();
```

<!-- Angular, React, WebComponents -->

## Processing Polygons

Process shapes data loaded in [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html) with of countries of the world and assign it to [`IgcGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicshapeseriescomponent.html) object.

```ts
import { IgcGeographicShapeSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
// ...
public onPolygonsLoaded(sds: IgcShapeDataSource, e: any) {
    const geoPolygons: any[] = [];
    // parsing shapefile data and creating geo-polygons
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        // using field/column names from .DBF file
        const country = {
            points: record.points,
            name: record.fieldValues.NAME,
            gdp: record.fieldValues.GDP,
            population: record.fieldValues.POPULATION
        };
        geoPolygons.push(country);
    };
    let polygonSeries = (document.getElementById("polygonSeries") as IgcGeographicShapeSeriesComponent);
    polygonSeries.dataSource = geoPolygons;
    polygonSeries.renderSeries(false);
}
```

## Processing Polyline

Process shapes data loaded in [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html) with communication routes between major cities and assign it to [`IgcGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicpolylineseriescomponent.html) object.

```ts
import { IgcGeographicPolylineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
// ...
public onPolylinesLoaded(sds: IgcShapeDataSource, e: any) {
    const geoPolylines: any[] = [];
    // parsing shapefile data and creating geo-polygons
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        // using field/column names from .DBF file
        const route = {
            points: record.points,
            name: record.fieldValues.Name,
            capacity: record.fieldValues.CapacityG,
            distance: record.fieldValues.DistanceKM,
            isOverLand: record.fieldValues.OverLand === 0,
            isActive: record.fieldValues.NotLive !== 0,
            service: record.fieldValues.InService
        };
        geoPolylines.push(route);
    }

    let lineSeries = (document.getElementById("lineSeries") as IgcGeographicPolylineSeriesComponent);
    lineSeries.dataSource = geoPolylines;
    lineSeries.renderSeries(false);
}
```

## Processing Points

Process shapes data loaded in [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html) with locations of major cities and assign it to [`IgcGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html) object.

```ts
import { IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
// ...
public onPointsLoaded(sds: IgcShapeDataSource, e: any) {
    const geoLocations: any[] = [];
    // parsing shapefile data and creating geo-locations
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        const pop = record.fieldValues.POPULATION;
        if (pop > 0) {
            // each shapefile record has just one point
            const location = {
                latitude: record.points[0][0].y,
                longitude: record.points[0][0].x,
                city: record.fieldValues.NAME,
                population: pop
            };
            geoLocations.push(location);
        }
    }
    let symbolSeries = (document.getElementById("symbolSeries") as IgcGeographicSymbolSeriesComponent);
    symbolSeries.dataSource = geoLocations;
    symbolSeries.renderSeries(false);
}
```

<!-- end: Angular, React, WebComponents -->

## Map Background

Also, you might want to hide geographic imagery from the map background content if your shape files provided sufficient geographic context (e.g. shape of countries) for your application.

```ts
public geoMap: IgcGeographicMapComponent;
// ...

this.geoMap.backgroundContent = null;
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project.

```ts
import { SampleBase } from "../../sample-base";
import { AssetsUtils } from "../../../utilities/AssetsUtils";

import { IgcGeographicMapModule } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
import { IgcGeographicShapeSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcGeographicPolylineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcDataChartInteractivityModule,
    IgcGeographicMapModule
);

let templateHTML = `
<div class="sample-container" style="background: #aad3df;">
    <igc-geographic-map id="geoMap" width="100%" height="100%" >
        <igc-geographic-shape-series
            id="polygonSeries"
            shape-memberPath="points"
            shape-fill="rgb(150, 150, 150)"
            shape-stroke="Black"
            shape-stroke-thickness="1.0">
        </igc-geographic-shape-series>
        <igc-geographic-polyline-series
            id="lineSeries"
            shape-member-path="points"
            shape-stroke="rgba(147, 15, 180, 0.5)"
            thickness="3.0" >
        </igc-geographic-polyline-series>
        <igc-geographic-symbol-series
            id="symbolSeries"
            longitude-member-path="longitude"
            latitude-member-path="latitude"
            marker-type="Circle"
            marker-outline="rgb(2, 102, 196)"
            marker-brush="White">
        </igc-geographic-symbol-series>
    </igc-geographic-map>
</div>
`;

export class MapBindingMultipleShapes extends SampleBase {

    public static htmlTagName: string = SampleBase.tag("MapBindingMultipleShapes");
    public static register(): any {
        window.customElements.define(this.htmlTagName, MapBindingMultipleShapes); return this;
    }

    private geoMap: IgcGeographicMapComponent;

    constructor() {
        super();
        this.onPointsLoaded = this.onPointsLoaded.bind(this);
        this.onPolylinesLoaded = this.onPolylinesLoaded.bind(this);
        this.onPolygonsLoaded = this.onPolygonsLoaded.bind(this);
    }

    connectedCallback() {
        this.innerHTML = templateHTML;

        this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
        this.geoMap.backgroundContent = null;
        this.geoMap.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };

        const url = AssetsUtils.getAssetsPath();

        const sdsPolygons = new IgcShapeDataSource();
        sdsPolygons.importCompleted = this.onPolygonsLoaded;
        sdsPolygons.shapefileSource = url + "/shapes/WorldCountries.shp";
        sdsPolygons.databaseSource  = url + "/shapes/WorldCountries.dbf";
        sdsPolygons.dataBind();

        const sdsPolylines = new IgcShapeDataSource();
        sdsPolylines.importCompleted = this.onPolylinesLoaded;
        sdsPolylines.shapefileSource = url + "/shapes/WorldCableRoutes.shp";
        sdsPolylines.databaseSource  = url + "/shapes/WorldCableRoutes.dbf";
        sdsPolylines.dataBind();

        // // loading a shapefile with geographic points
        const sdsPoints = new IgcShapeDataSource();
        sdsPoints.importCompleted = this.onPointsLoaded;
        sdsPoints.shapefileSource = url + "/shapes/WorldCities.shp";
        sdsPoints.databaseSource  = url + "/shapes/WorldCities.dbf";
        sdsPoints.dataBind();
    }

    public onPointsLoaded(sds: IgcShapeDataSource, e: any) {
        console.log("onPoints");

        const geoLocations: any[] = [];
        // parsing shapefile data and creating geo-locations
        let pointData = sds.getPointData();
        for ( let i = 0; i < pointData.length; i++ ) {
            let record = pointData[i];
            const pop = record.fieldValues.POPULATION;
            if (pop > 0) {
                // each shapefile record has just one point
                const location = {
                    latitude: record.points[0][0].y,
                    longitude: record.points[0][0].x,
                    city: record.fieldValues.NAME,
                    population: pop
                };
                geoLocations.push(location);
            }
        }
        let symbolSeries = (document.getElementById("symbolSeries") as IgcGeographicSymbolSeriesComponent);
        symbolSeries.dataSource = geoLocations;
        symbolSeries.renderSeries(false);
    }

    public onPolylinesLoaded(sds: IgcShapeDataSource, e: any) {
        console.log("onPolylines");

        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        let pointData = sds.getPointData();
        for ( let i = 0; i < pointData.length; i++ ) {
            let record = pointData[i];
            // using field/column names from .DBF file
            const route = {
                points: record.points,
                name: record.fieldValues.Name,
                capacity: record.fieldValues.CapacityG,
                distance: record.fieldValues.DistanceKM,
                isOverLand: record.fieldValues.OverLand === 0,
                isActive: record.fieldValues.NotLive !== 0,
                service: record.fieldValues.InService
            };
            geoPolylines.push(route);
        }

        let lineSeries = (document.getElementById("lineSeries") as IgcGeographicPolylineSeriesComponent);
        lineSeries.dataSource = geoPolylines;
        lineSeries.renderSeries(false);
    }

    public onPolygonsLoaded(sds: IgcShapeDataSource, e: any) {
        console.log("onPolygons ");

        const geoPolygons: any[] = [];
        // parsing shapefile data and creating geo-polygons
        let pointData = sds.getPointData();
        for ( let i = 0; i < pointData.length; i++ ) {
            let record = pointData[i];
            // using field/column names from .DBF file
            const country = {
                points: record.points,
                name: record.fieldValues.NAME,
                gdp: record.fieldValues.GDP,
                population: record.fieldValues.POPULATION
            };
            geoPolygons.push(country);
        };

        let polygonSeries = (document.getElementById("polygonSeries") as IgcGeographicShapeSeriesComponent);
        polygonSeries.dataSource = geoPolygons;
        polygonSeries.renderSeries(false);
    }
}
```

## API References

- [`IgcGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicpolylineseriescomponent.html)
- [`IgcGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicshapeseriescomponent.html)
- [`IgcGeographicSymbolSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicsymbolseriescomponent.html)
- [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html)
