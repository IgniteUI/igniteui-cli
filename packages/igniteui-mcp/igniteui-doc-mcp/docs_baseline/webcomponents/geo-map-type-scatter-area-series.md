---
title: "Web Components Map | Data Visualization Tools | Scatter Area Series | Data Binding | Infragistics"
description: Use Infragistics Web Components map's scatter area series to draw a colored area surface based on a triangulation of longitude and latitude data with a numeric value assigned to each point. Learn more about Ignite UI for Web Components map's series!
keywords: "Web Components map, scatter area series, Ignite UI for Web Components, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap","GeographicScatterAreaSeries","CustomPaletteColorScale", "Series"]
llms:
  description: "In Web Components map component, you can use the GeographicScatterAreaSeries to draw a colored surface, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point."
_tocName: Geographic Area Map
_premium: true
---
# Web Components Geographic Area Map

In Web Components map component, you can use the `IgcGeographicScatterAreaSeries` to draw a colored surface, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data, defined by geographic locations such as weather temperature, precipitation, population distribution, air pollution, etc.

## Web Components Geographic Area Map Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

The `IgcGeographicScatterAreaSeries` works a lot like the `IgcGeographicContourLineSeries` except that it represents data as interpolated and colored surface instead of contour lines connecting data points with the same values.

## Data Requirements
Similar to other types of geographic series in the map component, the `IgcGeographicScatterAreaSeries` has the `ItemsSource` property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store a geographic longitude and latitude coordinates and one data column that stores a value associated with the geographic location. The `LongitudeMemberPath`, `LatitudeMemberPath`, and `ColorMemberPath` properties of the geographic series identify these data column.
The `IgcGeographicScatterAreaSeries` automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the `TrianglesSource` property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a TriangulationSource for this property, especially when a large number of data items are present.

## Data Binding
The following table summarizes properties of GeographicScatterAreaSeries used for data binding.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|`ItemsSource`|any|The source of data items to perform triangulation on if the `TrianglesSource` property provides no triangulation data.|
|`LongitudeMemberPath`|string|The name of the property containing the Longitude for all items bound to the `ItemsSource`.|
|`LatitudeMemberPath`|string|The name of the property containing the Latitude for all items bound to the `ItemsSource`.|
|`ColorMemberPath`|string|The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the `ColorScale` property is set.|
|`TrianglesSource`|any|The source of triangulation data. Setting Triangles of the `TriangulationSource` object to this property improves both runtime performance and geographic series rendering.|
|`TriangleVertexMemberPath1`|string|The name of the property of the `TrianglesSource` items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|`TriangleVertexMemberPath2`|string|The name of the property of the `TrianglesSource` items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|`TriangleVertexMemberPath3`|string|The name of the property of the `TrianglesSource` items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|

## Color Scale
Use the ColorScale property of the `IgcGeographicScatterAreaSeries` to resolve colors values of points and thus fill surface of the geographic series. The colors are smoothly interpolated around the shape of the surface by applying a pixel-wise triangle rasterizer to a triangulation data. Because rendering of the surface is pixel-wise, the color scale uses colors instead of brushes.
The provided [`IgcCustomPaletteColorScale`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent) class should satisfy most coloring needs, but the ColorScale base class can be inherited by the application for custom coloring logic.

The following table list properties of the `CustomPaletteColorScale` affecting surface coloring of the GeographicScatterAreaSeries.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`Palette`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent&member=palette)| `ObservableCollection<Color>` |Gets or sets the collection of colors to select from or to interpolate between.|
|[`InterpolationMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent&member=interpolationMode)|`ColorScaleInterpolationMode`|Gets or sets the method getting a color from the Palette.|
|[`MaximumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent&member=maximumValue)|double|The highest value to assign a color. Any given value greater than this value will be Transparent.|
|[`MinimumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent&member=minimumValue)|double|The lowest value to assign a color. Any given value less than this value will be Transparent.|

## Code Snippet
The following code shows how to bind the `IgcGeographicScatterAreaSeries` to triangulation data representing surface temperatures in the world.

```html
<igc-geographic-map id="geoMap" width="100%" height="100%">

</igc-geographic-map>
```

```ts
import { IgcCustomPaletteColorScaleComponent } from 'igniteui-webcomponents-charts';
import { IgcGeographicScatterAreaSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//...
connectedCallback() {
    this.geoMap = document.getElementById("geoMap") as IgcGeographicMapComponent;

    const sds = new IgcShapeDataSource();
    sfc.importCompleted = this.onDataLoaded;
    sfc.shapefileSource = "../shapes/WorldTemperatures.shp";
    sfc.databaseSource = "../shapes/WorldTemperatures.dbf";
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

    this.createAreaSeries(contourPoints);
}

createAreaSeries(data: any[]) {
    const brushes = [
        "rgba(32, 146, 252, 0.5)", // semi-transparent blue
        "rgba(14, 194, 14, 0.5)",  // semi-transparent green
        "rgba(252, 120, 32, 0.5)", // semi-transparent orange
        "rgba(252, 32, 32, 0.5)",  // semi-transparent red
    ];

    const colorScale = new IgcCustomPaletteColorScaleComponent();
    colorScale.palette = brushes;
    colorScale.minimumValue = 0;
    colorScale.maximumValue = 30;

    const areaSeries = new IgcGeographicScatterAreaSeriesComponent();
    areaSeries.dataSource = data;
    areaSeries.longitudeMemberPath = "lon";
    areaSeries.latitudeMemberPath = "lat";
    areaSeries.colorMemberPath = "value";
    areaSeries.colorScale = colorScale;

    this.geoMap.series.add(areaSeries);
}
```

## API References
[`IgcColorScale`](mcp:get_api_reference?platform=webcomponents&component=IgcColorScaleComponent)
[`IgcCustomPaletteColorScale`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent)
`IgcGeographicContourLineSeries`
`IgcGeographicScatterAreaSeries`
