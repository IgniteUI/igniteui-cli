---
title: "Web Components Map | Data Visualization Tools | Shape Polyline Series | Infragistics"
description: Use Infragistics Web Components map's shape polyline series to render roads or connections between geographic locations such as cities or airports. Learn more about Ignite UI for Web Components map's series!
keywords: "Web Components map, Ignite UI for Web Components, shape polyline series, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "In Web Components map component, you can use the GeographicPolylineSeries to display geo-spatial data using polylines in a geographic context."
_tocName: Geographic Polyline Map
_premium: true
---
# Web Components Geographic Polyline Map

In Web Components map component, you can use the `IgcGeographicPolylineSeries` to display geo-spatial data using polylines in a geographic context. This type of geographic series is often used to render roads or connections between geographic locations such as cities or airports.

## Web Components Geographic Polyline Map Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

The `IgcGeographicPolylineSeries` works a lot like the `IgcGeographicShapeSeries` except that geo-spatial data is rendered with polylines instead of polygons.

## Data Requirements
Similarly to other types of geographic series in the control, the `IgcGeographicPolylineSeries` has the `DataSource` property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the `ShapeMemberPath` property. The `GeographicPolylineSeries` uses points of this mapped data column to plot polygons in the control.

## Code Snippet
The following code shows how to bind the `IgcGeographicPolylineSeries` to locations of cities loaded from a shape file using the `IgcShapefileRecord`.

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicPolylineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcDataChartInteractivityModule } from 'igniteui-webcomponents-charts';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
    // loading a shapefile with geographic shapes
    const sds = new IgcShapeDataSource();
    sds.importCompleted = this.onDataLoaded;
    sds.shapefileSource = "../shapes/AmericanRoads.shp";
    sds.databaseSource = "../shapes/AmericanRoads.dbf";
    sds.dataBind();
}

onDataLoaded(sds: IgcShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    console.log("loaded AmericanRoads.shp " + shapeRecords.length);
    const roadsUSA: any[] = [];
    const roadsMEX: any[] = [];
    const roadsCAN: any[] = [];
    // filtering records of loaded shapefile
    for (const record of shapeRecords) {
        // reading field values loaded from DBF file
        const type = record.fieldValues.RoadType;
        const road = {
            country: record.fieldValues.Country,
            length: record.fieldValues.RoadLength / 10,
            points: record.points,
            type: type === 1 ? "Highway" : "Road",
        };
        // grouping road items by country names
        if (type === 1 || type === 2) {
            if (road.country === "USA") {
                roadsUSA.push(road);
            } else if (road.country === "MEX") {
                roadsMEX.push(road);
            } else if (road.country === "CAN") {
                roadsCAN.push(road);
            }
        }
    }
    // creating polyline series for roads of each country
    this.addSeriesWith(roadsCAN, "rgba(252, 32, 32, 0.9)");
    this.addSeriesWith(roadsUSA, "rgba(3, 121, 231, 0.9)");
    this.addSeriesWith(roadsMEX, "rgba(14, 194, 14, 0.9)");
}
public addSeriesWith(shapeData: any[], shapeBrush: string) {
    const lineSeries = new IgcGeographicPolylineSeriesComponent();
    lineSeries.dataSource = shapeData;
    lineSeries.shapeMemberPath = "points";
    lineSeries.shapeFilterResolution = 2.0;
    lineSeries.shapeStrokeThickness = 2;
    lineSeries.shapeStroke = shapeBrush;

    this.geoMap.series.add(lineSeries);
}
```

## API References
`IgcGeographicPolylineSeries`
`IgcGeographicShapeSeries`
`IgcShapefileRecord`
