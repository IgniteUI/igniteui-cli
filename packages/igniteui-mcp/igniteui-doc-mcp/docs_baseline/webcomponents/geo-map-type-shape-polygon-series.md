---
title: "Web Components Map | Data Visualization Tools | Shape Polygon Series | Infragistics"
description: Use Infragistics Web Components map's shape polygon series to render shapes of countries or regions defined by geographic locations. Learn more about Ignite UI for Web Components map's series!
keywords: "Web Components map, shape polygon series, Ignite UI for Web Components, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "In Web Components map component, you can use the GeographicShapeSeries to display geo-spatial data using shape polygons in a geographic context."
_tocName: Geographic Polygon Map
_premium: true
---
# Web Components Geographic Polygon Map

In Web Components map component, you can use the `IgcGeographicShapeSeries` to display geo-spatial data using shape polygons in a geographic context. This type of geographic series is often used to render shapes of countries or regions defined by geographic locations.

## Web Components Geographic Polygon Map Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

The `IgcGeographicShapeSeries` works a lot like the `IgcGeographicPolylineSeries` except that geo-spatial data is rendered with polygons instead of polylines.

## Data Requirements
Similar to other types of geographic series in the map control, the `IgcGeographicShapeSeries` has the `DataSource` property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the `ShapeMemberPath` property. The `GeographicShapeSeries` uses points of this mapped data column to plot polygons in the map control.

## Code Snippet
The following code demonstrates how to bind the `IgcGeographicShapeSeries` to shapes of countries in the world loaded from a shape file using the `IgcShapefileRecord`.

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicShapeSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;
    // loading a shapefile with geographic shapes
    const sds = new IgcShapeDataSource();
    sds.importCompleted = this.onDataLoaded;
    sds.shapefileSource = "../shapes/WorldCountries.shp";
    sds.databaseSource  = "../shapes/WorldCountries.dbf";
    sds.dataBind();
}

onDataLoaded(sds: IgcShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    const countriesNATO: any[] = [];
    const countriesSCO: any[] = [];
    const countriesARAB: any[] = [];
    const countriesOther: any[] = [];
    for (const record of shapeRecords) {
        // using field/column names from .DBF file
        const country = {
            points: record.points,
            name: record.fieldValues.NAME,
            org: record.fieldValues.ALLIANCE,
            pop: record.fieldValues.POPULATION
        };
        const group = record.fieldValues.ALLIANCE;
        if (group === "NATO") {
            countriesNATO.push(country);
        } else if (group === "SCO") {
            countriesSCO.push(country);
        } else if (group === "ARAB LEAGUE") {
            countriesARAB.push(country);
        } else {
            countriesOther.push(country);
        }
    }
    this.createSeries(countriesNATO, "rgb(32, 146, 252)", "NATO");
    this.createSeries(countriesSCO, "rgb(252, 32, 32)", "SCO");
    this.createSeries(countriesARAB, "rgb(14, 194, 14)", "AL");
    this.createSeries(countriesOther, "rgb(146, 146, 146)", "Other");
}

createSeries(shapeData: any[], shapeBrush: string, shapeTitle: string)
{
    const seriesName = shapeTitle + "series";
    const geoSeries = new IgcGeographicShapeSeriesComponent();
    geoSeries.dataSource = shapeData;
    geoSeries.shapeMemberPath = "points";
    geoSeries.brush = shapeBrush;
    geoSeries.outline = "Black";
    geoSeries.thickness = 1;
    geoSeries.title = shapeTitle;

    this.geoMap.series.add(geoSeries);
}
```

## API References
`IgcGeographicPolylineSeries`
`IgcGeographicShapeSeries`
`IgcShapefileRecord`
