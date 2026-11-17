---
title: "React Chart API | Data Visualization Tools | Infragistics"
description: Use Infragistics Ignite UI for React map provides useful API to configure and styles map visuals
keywords: "React maps, geographic, map API, API, Ignite UI for React,"
license: commercial
mentionedTypes: ["GeographicMap", "Series", "SeriesViewer", "GeographicSymbolSeries", "GeographicProportionalSymbolSeries", "GeographicShapeSeries", "GeographicHighDensityScatterSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "API reference for the React Geographic Map component covering zoom and viewport management (WorldRect, WindowRect, WindowScale), geographic coordinate conversion (GetGeographicPoint, GetPixelPoint, GetGeographicFromZoom), and the Zoomable interface."
platformType: xplat
_tocName: Geographic Map API
_premium: true
---
# React Geographic Map API

The React `IgrGeographicMap` has the following API members:

- `zoomable`
- `zoomToGeographic`
- `worldRect`
- `windowRect`
- `windowScale`
- `getGeographicFromZoom`
- `getGeographicPoint`
- `getPixelPoint`

## React Geographic Series Types

The React `IgrGeographicMap` has 7 types of series and they have the `dataSource` property for data binding.

- `IgrGeographicHighDensityScatterSeries`
- `IgrGeographicSymbolSeries`
- `IgrGeographicProportionalSymbolSeries`
- `IgrGeographicPolylineSeries`
- `IgrGeographicShapeSeries`
- `IgrGeographicScatterAreaSeries`
- `IgrGeographicContourLineSeries`

In addition, each type of series has specific properties for mapping data items and styling their appearance:

## React Geographic Symbol Series API

The React `IgrGeographicSymbolSeries` (Geographic Marker Series) has the following API members:

- `latitudeMemberPath`
- `longitudeMemberPath`
- `IgrGeographicSymbolSeries.markerType`
- `markerBrush`
- `markerOutline`

## React Geographic Bubble Series API

The React `IgrGeographicProportionalSymbolSeries` (Geographic Bubble Series) has the following API members:

- `IgrGeographicSymbolSeries.latitudeMemberPath`
- `IgrGeographicSymbolSeries.longitudeMemberPath`
- `radiusMemberPath`
- `radiusScale`
- `fillScale`
- `fillMemberPath`

## React Geographic Shape Series API

The React `IgrGeographicShapeSeries` and `IgrGeographicPolylineSeries` have the same API members:

- `IgrGeographicShapeSeries.shapeMemberPath`
- `IgrSeries.thickness`
- `IgrSeries.brush`
- `IgrSeries.outline`

## React Geographic Area Series API

The React `IgrGeographicScatterAreaSeries` has the following API members:

- `IgrGeographicSymbolSeries.latitudeMemberPath`
- `IgrGeographicSymbolSeries.longitudeMemberPath`
- `colorMemberPath`
- `IgrGeographicScatterAreaSeries.colorScale`

## React Geographic Contour Series API

The React `IgrGeographicContourLineSeries` has the following API members:

- `IgrGeographicSymbolSeries.latitudeMemberPath`
- `IgrGeographicSymbolSeries.longitudeMemberPath`
- `valueMemberPath`
- `IgrGeographicProportionalSymbolSeries.fillScale`

## React Geographic HD Series API

The React `IgrGeographicHighDensityScatterSeries` has the following API members:

- `IgrGeographicSymbolSeries.latitudeMemberPath`
- `IgrGeographicSymbolSeries.longitudeMemberPath`
- `heatMaximumColor`
- `heatMinimumColor`