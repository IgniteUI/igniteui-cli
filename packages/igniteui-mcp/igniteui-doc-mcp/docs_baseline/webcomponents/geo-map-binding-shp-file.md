---
title: Web Components Map | Data Visualization Tools | Binding Geographic Shape Files | Infragistics
_description: Use Infragistics' Web Components JavaScript map to load geo-spatial data from shape files. View Ignite UI for Web Components map demos!
_keywords: Web Components map, shapefiles, Ignite UI for Web Components, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "ShapefileConverter", "Series", "GeographicShapeSeriesBase"]
_tocName: Binding Shape File
_premium: true
---

# Web Components Binding Shape Files with Geo-spatial Data

The Ignite UI for Web Components map component, the [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html) class loads geo-spatial data (points/locations, polylines, polygons) from shape files and converts it to a collection of [`IgcShapefileRecord`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapefilerecord.html) objects.

## Web Components Binding Shape Files with Geo-spatial Data Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

The following table explains properties of the [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html) class for loading shape files.

| Property | Type | Description   |
|----------|------|---------------|
| [`shapefileSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html#shapefileSource) | string |Specifies the Uri to a shape file (.shp) that contains geo-spatial data items.|
|[`databaseSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html#databaseSource) | string |Specifies the Uri to a shape database file (.dbf) that contains a data table for geo-spatial data items.|

<!-- TODO add for WPF only: -->

<!-- Both of the source properties for shape files are of Uri type. This means that shape files can be embedded resources in the application assembly and on the internet (via http). Refer to the previous section for more information on this process. The rules for resolving Uri objects are equivalent to any standard Uri property, for example the BitmapImage.UriSource property. -->

When both source properties are set to non-null values, then the [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html) object’s ImportAsync method is invoked which in return performs fetching and reading the shape files and finally doing the conversion. After this operation is complete, the [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html) is populated with [`IgcShapefileRecord`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapefilerecord.html) objects and the `ImportCompleted` event is raised in order to notify about completed process of loading and converting geo-spatial data from shape files.

## Loading Shapefiles

The following code creates an instance of the [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html) object for loading a shape file that contains locations of major cities in the world. It also demonstrates how to handle the `ImportCompleted` event as a prerequisite for binding data to the map component.

## Binding Shapefiles

In the map component, Geographic Series are used for displaying geo-spatial data that is loaded from shape files. All types of Geographic Series have an `ItemsSource` property which can be bound to an array of objects. The [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html) is an example such array because it contains a list of [`IgcShapefileRecord`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapefilerecord.html) objects.

The [`IgcShapefileRecord`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapefilerecord.html) class provides properties for storing geo-spatial data, listed in the following table.

| Property     | Description   |
|--------------|---------------|
|`Points`|Contains all the points in one geo-spatial shape loaded from a shape file (.shp). For example, the country of Japan in shape file would be represented as a list of a list of points object, where:<ul><li>The first list of points describes shape of Hokkaido island</li><li>The second list of points describes shape of Honshu island</li><li>The third list of points describes shape of Kyushu island</li><li>The fourth list of points describes shape of Shikoku island</li></ul>|
| `Fields` |Contains a row of data from the shape database file (.dbf) keyed by a column name. For example, a data about county of Japan which includes population, area, name of a capital, etc.|

This data structure is suitable for use in most Geographic Series as long as appropriate data columns are mapped to them.

## Code Snippet

This code example assumes that shape files were loaded using the [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html).
The following code binds [`IgcGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicpolylineseriescomponent.html) in the map component to the [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html) and maps the `Points` property of all [`IgcShapefileRecord`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapefilerecord.html) objects.

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

- `Fields`
- [`IgcGeographicPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicpolylineseriescomponent.html)
- `ImportCompleted`
- `ItemsSource`
- `Points`
- [`IgcShapeDataSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcshapedatasource.html)
