---
title: "Blazor Chart API | Data Visualization Tools | Infragistics"
description: Use Infragistics Ignite UI for Blazor map provides useful API to configure and styles map visuals
keywords: "Blazor maps, geographic, map API, API, Ignite UI for Blazor,"
license: commercial
mentionedTypes: ["GeographicMap", "Series", "SeriesViewer", "GeographicSymbolSeries", "GeographicProportionalSymbolSeries", "GeographicShapeSeries", "GeographicHighDensityScatterSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "API reference for the Blazor Geographic Map component covering zoom and viewport management (WorldRect, WindowRect, WindowScale), geographic coordinate conversion (GetGeographicPoint, GetPixelPoint, GetGeographicFromZoom), and the Zoomable interface."
platformType: xplat
_tocName: Geographic Map API
_premium: true
---
# Blazor Geographic Map API

The Blazor [`IgbGeographicMap`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap) has the following API members:

- [`Zoomable`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=Zoomable)
- [`ZoomToGeographic`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=ZoomToGeographic)
- [`WorldRect`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=WorldRect)
- [`WindowRect`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=WindowRect)
- [`WindowScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=WindowScale)
- [`GetGeographicFromZoom`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=GetGeographicFromZoom)
- [`GetGeographicPoint`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=GetGeographicPoint)
- [`GetPixelPoint`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=GetPixelPoint)

## Blazor Geographic Series Types

The Blazor [`IgbGeographicMap`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap) has 7 types of series and they have the [`DataSource`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=DataSource) property for data binding.

- [`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries)
- [`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries)
- [`IgbGeographicProportionalSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries)
- [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries)
- [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries)
- [`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries)
- [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries)

In addition, each type of series has specific properties for mapping data items and styling their appearance:

## Blazor Geographic Symbol Series API

The Blazor [`IgbGeographicSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries) (Geographic Marker Series) has the following API members:

- [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LatitudeMemberPath)
- [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LongitudeMemberPath)
- [`IgbGeographicSymbolSeries.MarkerType`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=MarkerType)
- [`MarkerBrush`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=MarkerBrush)
- [`MarkerOutline`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=MarkerOutline)

## Blazor Geographic Bubble Series API

The Blazor [`IgbGeographicProportionalSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries) (Geographic Bubble Series) has the following API members:

- [`IgbGeographicSymbolSeries.LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LatitudeMemberPath)
- [`IgbGeographicSymbolSeries.LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LongitudeMemberPath)
- [`RadiusMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=RadiusMemberPath)
- [`RadiusScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=RadiusScale)
- [`FillScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=FillScale)
- [`FillMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=FillMemberPath)

## Blazor Geographic Shape Series API

The Blazor [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries) and [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries) have the same API members:

- [`IgbGeographicShapeSeries.ShapeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries&member=ShapeMemberPath)
- [`IgbSeries.Thickness`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=Thickness)
- [`IgbSeries.Brush`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=Brush)
- [`IgbSeries.Outline`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=Outline)

## Blazor Geographic Area Series API

The Blazor [`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries) has the following API members:

- [`IgbGeographicSymbolSeries.LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LatitudeMemberPath)
- [`IgbGeographicSymbolSeries.LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LongitudeMemberPath)
- [`ColorMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=ColorMemberPath)
- [`IgbGeographicScatterAreaSeries.ColorScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=ColorScale)

## Blazor Geographic Contour Series API

The Blazor [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries) has the following API members:

- [`IgbGeographicSymbolSeries.LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LatitudeMemberPath)
- [`IgbGeographicSymbolSeries.LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LongitudeMemberPath)
- [`ValueMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=ValueMemberPath)
- [`IgbGeographicProportionalSymbolSeries.FillScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=FillScale)

## Blazor Geographic HD Series API

The Blazor [`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries) has the following API members:

- [`IgbGeographicSymbolSeries.LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LatitudeMemberPath)
- [`IgbGeographicSymbolSeries.LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=LongitudeMemberPath)
- [`HeatMaximumColor`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=HeatMaximumColor)
- [`HeatMinimumColor`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=HeatMinimumColor)