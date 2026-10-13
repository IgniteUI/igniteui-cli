---
title: "Angular Chart API | Data Visualization Tools | Infragistics"
description: Use Infragistics Ignite UI for Angular map provides useful API to configure and styles map visuals
keywords: "Angular maps, geographic, map API, API, Ignite UI for Angular,"
license: commercial
mentionedTypes: ["GeographicMap", "Series", "SeriesViewer", "GeographicSymbolSeries", "GeographicProportionalSymbolSeries", "GeographicShapeSeries", "GeographicHighDensityScatterSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "API reference for the Angular Geographic Map component covering zoom and viewport management (WorldRect, WindowRect, WindowScale), geographic coordinate conversion (GetGeographicPoint, GetPixelPoint, GetGeographicFromZoom), and the Zoomable interface."
_tocName: Geographic Map API
_premium: true
---
# Angular Geographic Map API

The Angular `IgxGeographicMap` has the following API members:

- `Zoomable`
- `ZoomToGeographic`
- `WorldRect`
- `WindowRect`
- `WindowScale`
- `GetGeographicFromZoom`
- `GetGeographicPoint`
- `GetPixelPoint`

## Angular Geographic Series Types

The Angular `IgxGeographicMap` has 7 types of series and they have the `ItemsSource` property for data binding.

- `IgxGeographicHighDensityScatterSeries`
- `IgxGeographicSymbolSeries`
- `IgxGeographicProportionalSymbolSeries`
- `IgxGeographicPolylineSeries`
- `IgxGeographicShapeSeries`
- `IgxGeographicScatterAreaSeries`
- `IgxGeographicContourLineSeries`

In addition, each type of series has specific properties for mapping data items and styling their appearance:

## Angular Geographic Symbol Series API

The Angular `IgxGeographicSymbolSeries` (Geographic Marker Series) has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `MarkerType`
- `MarkerBrush`
- `MarkerOutline`

## Angular Geographic Bubble Series API

The Angular `IgxGeographicProportionalSymbolSeries` (Geographic Bubble Series) has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `RadiusMemberPath`
- `RadiusScale`
- `FillScale`
- `FillMemberPath`

## Angular Geographic Shape Series API

The Angular `IgxGeographicShapeSeries` and `IgxGeographicPolylineSeries` have the same API members:

- `ShapeMemberPath`
- `Thickness`
- `Brush`
- `Outline`

## Angular Geographic Area Series API

The Angular `IgxGeographicScatterAreaSeries` has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `ColorMemberPath`
- `ColorScale`

## Angular Geographic Contour Series API

The Angular `IgxGeographicContourLineSeries` has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `ValueMemberPath`
- `FillScale`

## Angular Geographic HD Series API

The Angular `IgxGeographicHighDensityScatterSeries` has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `HeatMaximumColor`
- `HeatMinimumColor`