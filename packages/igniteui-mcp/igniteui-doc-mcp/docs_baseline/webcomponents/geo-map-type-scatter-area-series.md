---
title: "Web Components Map | Data Visualization Tools | Scatter Area Series | Data Binding | Infragistics"
description: Use Infragistics Web Components map's scatter area series to draw a colored area surface based on a triangulation of longitude and latitude data with a numeric value assigned to each point. Learn more about Ignite UI for Web Components map's series!
keywords: "Web Components map, scatter area series, Ignite UI for Web Components, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "GeographicScatterAreaSeries", "CustomPaletteColorScale", "Series"]
llms:
  description: "In Web Components map component, you can use the GeographicScatterAreaSeries to draw a colored surface, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point."
platformType: xplat
_tocName: Geographic Area Map
_premium: true
---
# Web Components Geographic Area Map

In Web Components map component, you can use the `IgcGeographicScatterAreaSeriesComponent` to draw a colored surface, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data, defined by geographic locations such as weather temperature, precipitation, population distribution, air pollution, etc.

## Web Components Geographic Area Map Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

The `IgcGeographicScatterAreaSeriesComponent` works a lot like the `IgcGeographicContourLineSeriesComponent` except that it represents data as interpolated and colored surface instead of contour lines connecting data points with the same values.

## Data Requirements
Similar to other types of geographic series in the map component, the `IgcGeographicScatterAreaSeriesComponent` has the `dataSource` property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store a geographic longitude and latitude coordinates and one data column that stores a value associated with the geographic location. The `longitudeMemberPath`, `latitudeMemberPath`, and `colorMemberPath` properties of the geographic series identify these data column.
The `IgcGeographicScatterAreaSeriesComponent` automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the `trianglesSource` property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a TriangulationSource for this property, especially when a large number of data items are present.

## Data Binding
The following table summarizes properties of GeographicScatterAreaSeries used for data binding.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|`dataSource`|any|The source of data items to perform triangulation on if the `trianglesSource` property provides no triangulation data.|
|`longitudeMemberPath`|string|The name of the property containing the Longitude for all items bound to the `dataSource`.|
|`latitudeMemberPath`|string|The name of the property containing the Latitude for all items bound to the `dataSource`.|
|`colorMemberPath`|string|The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the [`IgcColorScaleComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcColorScaleComponent) property is set.|
|`trianglesSource`|any|The source of triangulation data. Setting Triangles of the `TriangulationSource` object to this property improves both runtime performance and geographic series rendering.|
|`triangleVertexMemberPath1`|string|The name of the property of the `trianglesSource` items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|`triangleVertexMemberPath2`|string|The name of the property of the `trianglesSource` items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|`triangleVertexMemberPath3`|string|The name of the property of the `trianglesSource` items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|

## Color Scale
Use the ColorScale property of the `IgcGeographicScatterAreaSeriesComponent` to resolve colors values of points and thus fill surface of the geographic series. The colors are smoothly interpolated around the shape of the surface by applying a pixel-wise triangle rasterizer to a triangulation data. Because rendering of the surface is pixel-wise, the color scale uses colors instead of brushes.
The provided [`IgcCustomPaletteColorScaleComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent) class should satisfy most coloring needs, but the ColorScale base class can be inherited by the application for custom coloring logic.

The following table list properties of the [`IgcCustomPaletteColorScaleComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent) affecting surface coloring of the GeographicScatterAreaSeries.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`IgcCustomPaletteColorScaleComponent.palette`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent&member=palette)| `ObservableCollection<Color>` |Gets or sets the collection of colors to select from or to interpolate between.|
|[`interpolationMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent&member=interpolationMode)|[`ColorScaleInterpolationMode`](mcp:get_api_reference?platform=webcomponents&component=ColorScaleInterpolationMode)|Gets or sets the method getting a color from the Palette.|
|[`maximumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent&member=maximumValue)|double|The highest value to assign a color. Any given value greater than this value will be Transparent.|
|[`minimumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent&member=minimumValue)|double|The lowest value to assign a color. Any given value less than this value will be Transparent.|

## Code Snippet
The following code shows how to bind the `IgcGeographicScatterAreaSeriesComponent` to triangulation data representing surface temperatures in the world.

```html
<igc-geographic-map
    id="geoMap"
    height="100%"
    width="100%"
    zoomable="true">
</igc-geographic-map>
```

```ts
import { IgcGeographicMapComponent, IgcGeographicScatterAreaSeriesComponent, IgcCustomPaletteColorScaleComponent } from 'igniteui-webcomponents-maps';

var geoMap = this.geoMap = document.getElementById('geoMap') as IgcGeographicMapComponent;

var areaSeries = new IgcGeographicScatterAreaSeriesComponent();
areaSeries.dataSource = this.worldTemperatures;
areaSeries.longitudeMemberPath = "lon";
areaSeries.latitudeMemberPath = "lat";
areaSeries.colorMemberPath = "value";
var customPaletteColorScale1 = new IgcCustomPaletteColorScaleComponent();
customPaletteColorScale1.palette = ["rgba(32, 146, 252, 0.5)", "rgba(14, 194, 14, 0.5)", "rgba(252, 120, 32, 0.5)", "rgba(252, 32, 32, 0.5)"];
customPaletteColorScale1.minimumValue = 0;
customPaletteColorScale1.maximumValue = 30;
areaSeries.colorScale = customPaletteColorScale1;
geoMap.series.add(areaSeries);
```

## API References
[`IgcColorScaleComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcColorScaleComponent)
[`IgcCustomPaletteColorScaleComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCustomPaletteColorScaleComponent)
`IgcGeographicContourLineSeriesComponent`
`IgcGeographicScatterAreaSeriesComponent`
