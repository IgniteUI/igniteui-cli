---
title: Web Components Map | Data Visualization Tools | Scatter Contour Series | Data Binding | Infragistics
_description: Use Infragistics Web Components map's scatter contour series to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. Learn more about Ignite UI for Web Components map's series!
_keywords: Web Components map, scatter contour series, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap","GeographicContourLineSeries","CustomPaletteColorScale", "Series"]
_tocName: Geographic Contour Map
_premium: true
---

# Web Components Geographic Contour Map

In Web Components map component, you can use the [`IgcGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html) to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data defined by geographic locations such as weather temperature, atmospheric pressure, precipitation, population distribution, topographic data, etc.

## Web Components Geographic Contour Map Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

The [`IgcGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html) works a lot like the [`IgcGeographicScatterAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicscatterareaseriescomponent.html) except that it represents data as contour lines, colored using a fill scale and the geographic scatter area series, represents data as a surface interpolated using a color scale.

## Data Requirements

Similar to other types of geographic series in the map component, the [`IgcGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store geographic location (longitude and latitude coordinates) and one data column that stores a value associated with the geographic location. These data column, are identified by [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#longitudeMemberPath), [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#latitudeMemberPath), and [`valueMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html#valueMemberPath) properties of the geographic series.
The [`IgcGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html) automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the [`trianglesSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#trianglesSource) property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a `TriangulationSource` for this property, especially when a large number of data items are present.

## Data Binding

The following table summarizes properties of [`IgcGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html) used for data binding.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|`ItemsSource`|any|The source of data items to perform triangulation on if the [`trianglesSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#trianglesSource) property provides no triangulation data.|
|[`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#longitudeMemberPath)|string|The name of the property containing the Longitude for all items bound to the `ItemsSource`.|
|[`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#latitudeMemberPath)|string|The name of the property containing the Latitude for all items bound to to the `ItemsSource`.|
|[`valueMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html#valueMemberPath)|string|The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the [`fillScale`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html#fillScale) property is set.|
|[`trianglesSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#trianglesSource)|any|Gets or sets the source of triangulation data. Setting Triangles of the TriangulationSource object to this property improves both runtime performance and geographic series rendering.|
|[`triangleVertexMemberPath1`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#triangleVertexMemberPath1)|string|The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`triangleVertexMemberPath2`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#triangleVertexMemberPath2)|string| The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`triangleVertexMemberPath3`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#triangleVertexMemberPath3)|string|The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|

## Contour Fill Scale

Use the [`fillScale`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html#fillScale) property of the [`IgcGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html) to resolve fill brushes of the contour lines of the geographic series.
The provided \`ValueBrushScale class should satisfy most of your coloring needs, but the application for custom coloring logic can inherit the ValueBrushScale class.
The following table list properties of the CustomPaletteColorScale affecting the surface coloring of the GeographicContourLineSeries.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`brushes`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#brushes)|BrushCollection|Gets or sets the collection of brushes for filling contours of the [`IgcGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html)|
|[`maximumValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccustompalettecolorscalecomponent.html#maximumValue)|double|The highest value to assign a brush in a fill scale.|
|[`minimumValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccustompalettecolorscalecomponent.html#minimumValue)|double|The lowest value to assign a brush in a fill scale.|

## Code Snippet

The following code shows how to bind the [`IgcGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html) to triangulation data representing surface temperatures in the world.

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcGeographicContourLineSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcValueBrushScaleComponent } from 'igniteui-webcomponents-charts';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;

    const sfc = new IgcShapeDataSource();
    sfc.importCompleted = this.onDataLoaded;
    sfc.shapefileSource = "../shapes/WorldTemperatures.shp");
    sfc.databaseSource = "../shapes/WorldTemperatures.dbf");
}

onDataLoaded(sds: IgcShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    const contourPoints: any[] = [];
    for (const record of shapeRecords) {
        const temp = record.fieldValues.Contour;
        // using only major contours (every 10th degrees Celsius)
        if (temp % 10 === 0 && temp >= 0) {
            for (const shapes of record.points) {
                for (let i = 0; i < shapes.count; i++) {
                    if (i % 5 === 0) {
                        const point = shapes[i];
                        const item = { lon: point.x, lat: point.y, value: temp };
                        contourPoints.push(item);
                    }
                }
            }
        }
    }
    this.createContourSeries(contourPoints);
}

createContourSeries(data: any[])
{
    const brushes = [
        "rgba(32, 146, 252, 0.5)", // semi-transparent blue
        "rgba(14, 194, 14, 0.5)",  // semi-transparent green
        "rgba(252, 120, 32, 0.5)", // semi-transparent orange
        "rgba(252, 32, 32, 0.5)",  // semi-transparent red
    ];

    const brushScale = new IgcValueBrushScaleComponent();
    brushScale.brushes = brushes;
    brushScale.minimumValue = 0;
    brushScale.maximumValue = 30;

    const contourSeries = new IgcGeographicContourLineSeriesComponent();
    contourSeries.dataSource = data;
    contourSeries.longitudeMemberPath = "lon";
    contourSeries.latitudeMemberPath = "lat";
    contourSeries.valueMemberPath = "value";
    contourSeries.fillScale = brushScale;
    contourSeries.thickness = 4;

    this.geoMap.series.add(contourSeries);
}
```

## API References

- [`fillScale`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html#fillScale)
- [`IgcGeographicContourLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html)
- [`IgcGeographicScatterAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicscatterareaseriescomponent.html)
- `ItemsSource`
- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#longitudeMemberPath)
- [`trianglesSource`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicxytriangulatingseriescomponent.html#trianglesSource)
- `TriangulationSource`
- [`IgcValueBrushScaleComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcvaluebrushscalecomponent.html)
- [`valueMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographiccontourlineseriescomponent.html#valueMemberPath)
