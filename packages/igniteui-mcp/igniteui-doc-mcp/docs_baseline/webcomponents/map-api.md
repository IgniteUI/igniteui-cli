---
title: "Web Components Chart API | Data Visualization Tools | Infragistics"
description: Use Infragistics Ignite UI for Web Components map provides useful API to configure and styles map visuals
keywords: "Web Components maps, geographic, map API, API, Ignite UI for Web Components,"
license: commercial
mentionedTypes: ["GeographicMap", "Series", "SeriesViewer", "GeographicSymbolSeries", "GeographicProportionalSymbolSeries", "GeographicShapeSeries", "GeographicHighDensityScatterSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "API reference for the Web Components Geographic Map component covering zoom and viewport management (WorldRect, WindowRect, WindowScale), geographic coordinate conversion (GetGeographicPoint, GetPixelPoint, GetGeographicFromZoom), and the Zoomable interface."
_tocName: Geographic Map API
_premium: true
---
# Web Components Geographic Map API

The Web Components `IgcGeographicMap` has the following API members:

- `Zoomable`
- `ZoomToGeographic`
- `WorldRect`
- `WindowRect`
- `WindowScale`
- `GetGeographicFromZoom`
- `GetGeographicPoint`
- `GetPixelPoint`

## Web Components Geographic Series Types

The Web Components `IgcGeographicMap` has 7 types of series and they have the [`ItemsSource`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesComponent&member=dataSource) property for data binding.

- `IgcGeographicHighDensityScatterSeries`
- `IgcGeographicSymbolSeries`
- `IgcGeographicProportionalSymbolSeries`
- `IgcGeographicPolylineSeries`
- `IgcGeographicShapeSeries`
- `IgcGeographicScatterAreaSeries`
- `IgcGeographicContourLineSeries`

In addition, each type of series has specific properties for mapping data items and styling their appearance:

## Web Components Geographic Symbol Series API

The Web Components `IgcGeographicSymbolSeries` (Geographic Marker Series) has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `MarkerType`
- `MarkerBrush`
- `MarkerOutline`

## Web Components Geographic Bubble Series API

The Web Components `IgcGeographicProportionalSymbolSeries` (Geographic Bubble Series) has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `RadiusMemberPath`
- `RadiusScale`
- `FillScale`
- `FillMemberPath`

## Web Components Geographic Shape Series API

The Web Components `IgcGeographicShapeSeries` and `IgcGeographicPolylineSeries` have the same API members:

- `ShapeMemberPath`
- [`Thickness`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesComponent&member=thickness)
- [`Brush`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesComponent&member=brush)
- [`Outline`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesComponent&member=outline)

## Web Components Geographic Area Series API

The Web Components `IgcGeographicScatterAreaSeries` has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `ColorMemberPath`
- `ColorScale`

## Web Components Geographic Contour Series API

The Web Components `IgcGeographicContourLineSeries` has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `ValueMemberPath`
- `FillScale`

## Web Components Geographic HD Series API

The Web Components `IgcGeographicHighDensityScatterSeries` has the following API members:

- `LatitudeMemberPath`
- `LongitudeMemberPath`
- `HeatMaximumColor`
- `HeatMinimumColor`