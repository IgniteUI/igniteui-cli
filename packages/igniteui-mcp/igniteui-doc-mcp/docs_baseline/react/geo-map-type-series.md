---
title: "React Map | Data Visualization Tools | Geographic Series Types | Infragistics"
description: Use Infragistics React map's series to display geo-spatial data as points such as locations of cities, polylines such as road connections, or polygons such as shape of countries in a geographic context. Learn more about Ignite UI for React map's series!
keywords: "React map, geographic series, Ignite UI for React, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap", "Series"]
llms:
  description: "In the Ignite UI for React Map component, geographic series are visual elements of the map that display geo-spatial data as points (e.g. locations of cities), polylines (e.g. road connections), or polygons (shape of countries) in a geographic context."
platformType: xplat
_tocName: Geographic Series Overview
_premium: true
---
# React Geographic Series Overview

In the Ignite UI for React Map component, geographic series are visual elements of the map that display geo-spatial data as points (e.g. locations of cities), polylines (e.g. road connections), or polygons (shape of countries) in a geographic context.
The map component's Series property is a collection of geographic series objects. This property is used to support rendering an unlimited number of geographic series in the same plot area. When multiple geographic series objects are added to the Series property, each successive series will be layered on top of the previous series starting from the first to the last series. Therefore, geographic series can be better understood as map layers that can be stacked on top of each other and/or on top of geographic imagery.

All types of geographic series are always rendered on top of the geographic imagery tiles. However, sometimes geographic series (e.g. with detailed shape files of the world) might provide enough geographic contexts for an application and geographic imagery is not desired in the map control.

## Type of Geographic Series

The React Geographic Map component supports the following types of geographic series:

- [Using Scatter Symbol Series](./geo-map-type-scatter-symbol-series.md)
- [Using Scatter Proportional Series](./geo-map-type-scatter-bubble-series.md)
- [Using Scatter Contour Series](./geo-map-type-scatter-contour-series.md)
- [Using Scatter Density Series](./geo-map-type-scatter-density-series.md)
- [Using Scatter Area Series](./geo-map-type-scatter-area-series.md)
- [Using Shape Polygon Series](./geo-map-type-shape-polygon-series.md)
- [Using Shape Polyline Series](./geo-map-type-shape-polyline-series.md)

## API References
`IgrGeographicMap`
