---
title: "Web Components Map | Data Visualization Tools | Shape Polygon Series | Infragistics"
description: Use Infragistics Web Components map's shape polygon series to render shapes of countries or regions defined by geographic locations. Learn more about Ignite UI for Web Components map's series!
keywords: "Web Components map, shape polygon series, Ignite UI for Web Components, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "ShapefileRecord", "Series", "GeographicShapeSeriesBase"]
llms:
  description: "In Web Components map component, you can use the GeographicShapeSeries to display geo-spatial data using shape polygons in a geographic context."
platformType: xplat
_tocName: Geographic Polygon Map
_premium: true
---
# Web Components Geographic Polygon Map

In Web Components map component, you can use the `IgcGeographicShapeSeriesComponent` to display geo-spatial data using shape polygons in a geographic context. This type of geographic series is often used to render shapes of countries or regions defined by geographic locations.

## Web Components Geographic Polygon Map Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

The `IgcGeographicShapeSeriesComponent` works a lot like the `IgcGeographicPolylineSeriesComponent` except that geo-spatial data is rendered with polygons instead of polylines.

## Data Requirements
Similar to other types of geographic series in the map control, the `IgcGeographicShapeSeriesComponent` has the `dataSource` property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the `shapeMemberPath` property. The `IgcGeographicShapeSeriesComponent` uses points of this mapped data column to plot polygons in the map control.

When the shapes come straight from a shape file and need no reshaping first, the series can be given a `shapefileDataSource` of its own instead, and it reads the points out of the records itself. That is what the code below does; [Binding Shape Files](./geo-map-binding-shp-file.md) covers the other route, where a handler turns each record into an object of your own and maps `shapeMemberPath` to it.

## Code Snippet
The following code gives the `IgcGeographicShapeSeriesComponent` a `shapefileDataSource` pointing at a shape file of the world’s countries, and draws every country in it.

```html
<igc-geographic-map
    id="map"
    height="100%"
    width="100%"
    zoomable="true">
    <igc-geographic-shape-series
        id="GeographicShapeSeries1"
        outline="Black"
        thickness="0.5"
        marker-collision-avoidance="Omit">
        <igc-shape-data-source
            shapefile-source="https://static.infragistics.com/xplatform/shapes/world_countries_all.shp"
            database-source="https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf">
        </igc-shape-data-source>
    </igc-geographic-shape-series>
</igc-geographic-map>
```

## API References
`IgcGeographicPolylineSeriesComponent`
`IgcGeographicShapeSeriesComponent`
`IgcShapefileRecord`
