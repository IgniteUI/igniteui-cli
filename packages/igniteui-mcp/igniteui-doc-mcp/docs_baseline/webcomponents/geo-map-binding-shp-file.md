---
title: "Web Components Map | Data Visualization Tools | Binding Geographic Shape Files | Infragistics"
description: Use Infragistics' Web Components JavaScript map to load geo-spatial data from shape files. View Ignite UI for Web Components map demos!
keywords: "Web Components map, shapefiles, Ignite UI for Web Components, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "The Ignite UI for Web Components map component, the ShapefileRecord class loads geo-spatial data (points/locations, polylines, polygons) from shape files and converts it to a collection of IgxShapefileRecord objects."
_tocName: Binding Shape File
_premium: true
---
# Web Components Binding Shape Files with Geo-spatial Data

The Ignite UI for Web Components map component, the `IgcShapefileRecord` class loads geo-spatial data (points/locations, polylines, polygons) from shape files and converts it to a collection of `IgxShapefileRecord` objects.

## Web Components Binding Shape Files with Geo-spatial Data Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

The following table explains properties of the `IgcShapefileRecord` class for loading shape files.

| Property | Type | Description   |
|----------|------|---------------|
| `ShapefileSource` | string |Specifies the Uri to a shape file (.shp) that contains geo-spatial data items.|
|`DatabaseSource` | string |Specifies the Uri to a shape database file (.dbf) that contains a data table for geo-spatial data items.|

When both source properties are set to non-null values, then the `IgcShapefileRecord` object’s ImportAsync method is invoked which in return performs fetching and reading the shape files and finally doing the conversion. After this operation is complete, the `IgcShapefileRecord` is populated with `IgxShapefileRecord` objects and the `ImportCompleted` event is raised in order to notify about completed process of loading and converting geo-spatial data from shape files.

## Loading Shapefiles
The following code creates an instance of the `IgcShapefileRecord` object for loading a shape file that contains locations of major cities in the world. It also demonstrates how to handle the `ImportCompleted` event as a prerequisite for binding data to the map component.

```html
 TODO - ADD CODE SNIPPET
```

## Binding Shapefiles
In the map component, Geographic Series are used for displaying geo-spatial data that is loaded from shape files. All types of Geographic Series have an `DataSource` property which can be bound to an array of objects. The `IgcShapefileRecord` is an example such array because it contains a list of `IgxShapefileRecord` objects.

The `ShapefileRecord` class provides properties for storing geo-spatial data, listed in the following table.

| Property     | Description   |
|--------------|---------------|
|`Points`|Contains all the points in one geo-spatial shape loaded from a shape file (.shp). For example, the country of Japan in shape file would be represented as a list of a list of points object, where:<ul><li>The first list of points describes shape of Hokkaido island</li><li>The second list of points describes shape of Honshu island</li><li>The third list of points describes shape of Kyushu island</li><li>The fourth list of points describes shape of Shikoku island</li></ul>|
| `Fields` |Contains a row of data from the shape database file (.dbf) keyed by a column name. For example, a data about county of Japan which includes population, area, name of a capital, etc.|

This data structure is suitable for use in most Geographic Series as long as appropriate data columns are mapped to them.

## Code Snippet
This code example assumes that shape files were loaded using the `IgcShapefileRecord`.
The following code binds `IgcGeographicPolylineSeries` in the map component to the `IgcShapefileRecord` and maps the `Points` property of all `IgxShapefileRecord` objects.

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;

    const sds = new IgcShapeDataSource();
    sds.importCompleted = this.onDataLoaded;
    sds.shapefileSource = "../shapes/WorldCities.shp";
    sds.databaseSource  = "../shapes/WorldCities.dbf";
    sds.dataBind();
}

onDataLoaded(sds: IgcShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    console.log("loaded WorldCities.shp " + shapeRecords.length);
    const geoLocations: any[] = [];
    // parsing shapefile data and creating geo-locations
    for (const record of shapeRecords) {
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

    const geoSeries = new IgcGeographicSymbolSeriesComponent();
    geoSeries.dataSource = geoLocations;
    geoSeries.markerType = MarkerType.Circle;
    geoSeries.latitudeMemberPath  = "latitude";
    geoSeries.longitudeMemberPath = "longitude";
    geoSeries.markerBrush = "LightGray";
    geoSeries.markerOutline = "Black";
    geoSeries.tooltipTemplate = this.createTooltip;

    this.geoMap.series.add(geoSeries);
}
```

## API References
`IgcGeographicPolylineSeries`
`IgcShapefileRecord`
`Fields`
`ImportCompleted`
`DataSource`
`Points`
