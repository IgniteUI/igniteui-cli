---
title: "Web Components Map | Data Visualization Tools | Scatter Contour Series | Data Binding | Infragistics"
description: Use Infragistics Web Components map's scatter contour series to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. Learn more about Ignite UI for Web Components map's series!
keywords: "Web Components map, scatter contour series, Ignite UI for Web Components, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap","GeographicContourLineSeries","CustomPaletteColorScale", "Series"]
llms:
  description: "In Web Components map component, you can use the GeographicContourLineSeries to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point."
_tocName: Geographic Contour Map
_premium: true
---
# Web Components Geographic Contour Map

In Web Components map component, you can use the `IgcGeographicContourLineSeries` to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data defined by geographic locations such as weather temperature, atmospheric pressure, precipitation, population distribution, topographic data, etc.

## Web Components Geographic Contour Map Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

The `IgcGeographicContourLineSeries` works a lot like the `IgcGeographicScatterAreaSeries` except that it represents data as contour lines, colored using a fill scale and the geographic scatter area series, represents data as a surface interpolated using a color scale.

## Data Requirements
Similar to other types of geographic series in the map component, the `IgcGeographicContourLineSeries` has the `ItemsSource` property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store geographic location (longitude and latitude coordinates) and one data column that stores a value associated with the geographic location. These data column, are identified by `LongitudeMemberPath`, `LatitudeMemberPath`, and `ValueMemberPath` properties of the geographic series.
The `IgcGeographicContourLineSeries` automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the `TrianglesSource` property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a `TriangulationSource` for this property, especially when a large number of data items are present.

## Data Binding
The following table summarizes properties of `IgcGeographicContourLineSeries` used for data binding.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|`ItemsSource`|any|The source of data items to perform triangulation on if the `TrianglesSource` property provides no triangulation data.|
|`LongitudeMemberPath`|string|The name of the property containing the Longitude for all items bound to the `ItemsSource`.|
|`LatitudeMemberPath`|string|The name of the property containing the Latitude for all items bound to to the `ItemsSource`.|
|`ValueMemberPath`|string|The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the `FillScale` property is set.|
|`TrianglesSource`|any|Gets or sets the source of triangulation data. Setting Triangles of the TriangulationSource object to this property improves both runtime performance and geographic series rendering.|
|`TriangleVertexMemberPath1`|string|The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|`TriangleVertexMemberPath2`|string| The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|`TriangleVertexMemberPath3`|string|The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|

## Contour Fill Scale
Use the `FillScale` property of the `IgcGeographicContourLineSeries` to resolve fill brushes of the contour lines of the geographic series.
The provided `ValueBrushScale class should satisfy most of your coloring needs, but the application for custom coloring logic can inherit the ValueBrushScale class.
The following table list properties of the CustomPaletteColorScale affecting the surface coloring of the GeographicContourLineSeries.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|`Brushes`|BrushCollection|Gets or sets the collection of brushes for filling contours of the `IgcGeographicContourLineSeries`|
|[`MaximumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent&member=maximumValue)|double|The highest value to assign a brush in a fill scale.|
|[`MinimumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent&member=minimumValue)|double|The lowest value to assign a brush in a fill scale.|

## Code Snippet

The following code shows how to bind the `IgcGeographicContourLineSeries` to triangulation data representing surface temperatures in the world.

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

`FillScale`<br />
`IgcGeographicContourLineSeries`<br />
`IgcGeographicScatterAreaSeries`<br />
[`IgcValueBrushScale`](mcp:get_api_reference?platform=webcomponents&component=IgcValueBrushScaleComponent)<br />
