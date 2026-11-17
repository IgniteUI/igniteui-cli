---
title: "Web Components Map | Data Visualization Tools | Shape Polyline Series | Infragistics"
description: Use Infragistics Web Components map's shape polyline series to render roads or connections between geographic locations such as cities or airports. Learn more about Ignite UI for Web Components map's series!
keywords: "Web Components map, Ignite UI for Web Components, shape polyline series, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "In Web Components map component, you can use the GeographicPolylineSeries to display geo-spatial data using polylines in a geographic context."
platformType: xplat
_tocName: Geographic Polyline Map
_premium: true
---
# Web Components Geographic Polyline Map

In Web Components map component, you can use the `IgcGeographicPolylineSeriesComponent` to display geo-spatial data using polylines in a geographic context. This type of geographic series is often used to render roads or connections between geographic locations such as cities or airports.

## Web Components Geographic Polyline Map Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

The `IgcGeographicPolylineSeriesComponent` works a lot like the `IgcGeographicShapeSeriesComponent` except that geo-spatial data is rendered with polylines instead of polygons.

## Data Requirements
Similarly to other types of geographic series in the control, the `IgcGeographicPolylineSeriesComponent` has the `dataSource` property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the `shapeMemberPath` property. The `IgcGeographicPolylineSeriesComponent` uses points of this mapped data column to plot polylines in the control.

When the shapes come straight from a shape file and need no reshaping first, the series can be given a `shapefileDataSource` of its own instead, and it reads the points out of the records itself. That is what the code below does; [Binding Shape Files](./geo-map-binding-shp-file.md) covers the other route, where a handler turns each record into an object of your own and maps `shapeMemberPath` to it.

## Code Snippet
The following code gives the `IgcGeographicPolylineSeriesComponent` a `shapefileDataSource` pointing at a shape file of American roads, and draws every road in it.

```html
<igc-geographic-map
    id="map"
    height="100%"
    width="100%"
    zoomable="true">
    <igc-geographic-polyline-series
        id="GeographicPolylineSeries1"
        outline="Red">
        <igc-shape-data-source
            shapefile-source="https://static.infragistics.com/xplatform/shapes/AmericanRoads.shp"
            database-source="https://static.infragistics.com/xplatform/shapes/AmericanRoads.dbf">
        </igc-shape-data-source>
    </igc-geographic-polyline-series>
</igc-geographic-map>
```

## API References
`IgcGeographicPolylineSeriesComponent`
`IgcGeographicShapeSeriesComponent`
`IgcShapefileRecord`
