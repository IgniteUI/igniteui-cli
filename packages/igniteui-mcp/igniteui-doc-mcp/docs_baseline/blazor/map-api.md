---
title: "Blazor Chart API | Data Visualization Tools | Infragistics"
description: Use Infragistics Ignite UI for Blazor map provides useful API to configure and styles map visuals
keywords: "Blazor maps, geographic, map API, API, Ignite UI for Blazor,"
license: commercial
mentionedTypes: ["GeographicMap", "Series", "SeriesViewer", "GeographicSymbolSeries", "GeographicProportionalSymbolSeries", "GeographicShapeSeries", "GeographicHighDensityScatterSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "API reference for the Blazor Geographic Map component covering zoom and viewport management (WorldRect, WindowRect, WindowScale), geographic coordinate conversion (GetGeographicPoint, GetPixelPoint, GetGeographicFromZoom), and the Zoomable interface."
_tocName: Geographic Map API
_premium: true
---
# Blazor Geographic Map API

The Blazor [`IgbGeographicMap`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap) has the following API members:

- [`Zoomable`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=zoomable)
- [`ZoomToGeographic`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=zoomToGeographic)
- [`WorldRect`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=worldRect)
- [`WindowRect`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=windowRect)
- [`WindowScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=windowScale)
- [`GetGeographicFromZoom`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=getGeographicFromZoom)
- [`GetGeographicPoint`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=getGeographicPoint)
- [`GetPixelPoint`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=getPixelPoint)

## Blazor Geographic Series Types

The Blazor [`IgbGeographicMap`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap) has 7 types of series and they have the [`ItemsSource`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=dataSource) property for data binding.

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

- [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=latitudeMemberPath)
- [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=longitudeMemberPath)
- [`MarkerType`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=markerType)
- [`MarkerBrush`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=markerBrush)
- [`MarkerOutline`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=markerOutline)

## Blazor Geographic Bubble Series API

The Blazor [`IgbGeographicProportionalSymbolSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries) (Geographic Bubble Series) has the following API members:

- [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=latitudeMemberPath)
- [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=longitudeMemberPath)
- [`RadiusMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=radiusMemberPath)
- [`RadiusScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=radiusScale)
- [`FillScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=fillScale)
- [`FillMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=fillMemberPath)

## Blazor Geographic Shape Series API

The Blazor [`IgbGeographicShapeSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries) and [`IgbGeographicPolylineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicPolylineSeries) have the same API members:

- [`ShapeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicShapeSeries&member=shapeMemberPath)
- [`Thickness`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=thickness)
- [`Brush`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=brush)
- [`Outline`](mcp:get_api_reference?platform=blazor&component=IgbSeries&member=outline)

## Blazor Geographic Area Series API

The Blazor [`IgbGeographicScatterAreaSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries) has the following API members:

- [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=latitudeMemberPath)
- [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=longitudeMemberPath)
- [`ColorMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=colorMemberPath)
- [`ColorScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicScatterAreaSeries&member=colorScale)

## Blazor Geographic Contour Series API

The Blazor [`IgbGeographicContourLineSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries) has the following API members:

- [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=latitudeMemberPath)
- [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=longitudeMemberPath)
- [`ValueMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicContourLineSeries&member=valueMemberPath)
- [`FillScale`](mcp:get_api_reference?platform=blazor&component=IgbGeographicProportionalSymbolSeries&member=fillScale)

## Blazor Geographic HD Series API

The Blazor [`IgbGeographicHighDensityScatterSeries`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries) has the following API members:

- [`LatitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=latitudeMemberPath)
- [`LongitudeMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbGeographicSymbolSeries&member=longitudeMemberPath)
- [`HeatMaximumColor`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=heatMaximumColor)
- [`HeatMinimumColor`](mcp:get_api_reference?platform=blazor&component=IgbGeographicHighDensityScatterSeries&member=heatMinimumColor)