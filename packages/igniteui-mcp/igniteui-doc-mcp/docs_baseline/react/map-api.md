---
title: "React Chart API | Data Visualization Tools | Infragistics"
description: Use Infragistics Ignite UI for React map provides useful API to configure and styles map visuals
keywords: "React maps, geographic, map API, API, Ignite UI for React,"
license: commercial
mentionedTypes: ["GeographicMap", "Series", "SeriesViewer", "GeographicSymbolSeries", "GeographicProportionalSymbolSeries", "GeographicShapeSeries", "GeographicHighDensityScatterSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "API reference for the React Geographic Map component covering zoom and viewport management (WorldRect, WindowRect, WindowScale), geographic coordinate conversion (GetGeographicPoint, GetPixelPoint, GetGeographicFromZoom), and the Zoomable interface."
_tocName: Geographic Map API
_premium: true
---
# React Geographic Map API

The React `IgrGeographicMap` has the following API members:

- `Zoomable`
- `ZoomToGeographic`
- `WorldRect`
- `WindowRect`
- `WindowScale`
- `GetGeographicFromZoom`
- `GetGeographicPoint`
- `GetPixelPoint`

## React Geographic Series Types

The React `IgrGeographicMap` has 7 types of series and they have the `ItemsSource` property for data binding.

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

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `MarkerType`
- `MarkerBrush`
- `MarkerOutline`

## React Geographic Bubble Series API

The React `IgrGeographicProportionalSymbolSeries` (Geographic Bubble Series) has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `RadiusMemberPath`
- `RadiusScale`
- `FillScale`
- `FillMemberPath`

## React Geographic Shape Series API

The React `IgrGeographicShapeSeries` and `IgrGeographicPolylineSeries` have the same API members:

- `ShapeMemberPath`
- `Thickness`
- `Brush`
- `Outline`

## React Geographic Area Series API

The React `IgrGeographicScatterAreaSeries` has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `ColorMemberPath`
- `ColorScale`

## React Geographic Contour Series API

The React `IgrGeographicContourLineSeries` has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `ValueMemberPath`
- `FillScale`

## React Geographic HD Series API

The React `IgrGeographicHighDensityScatterSeries` has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `HeatMaximumColor`
- `HeatMinimumColor`