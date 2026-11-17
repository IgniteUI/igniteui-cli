---
title: "Web Components Chart API | Data Visualization Tools | Infragistics"
description: Use Infragistics Ignite UI for Web Components map provides useful API to configure and styles map visuals
keywords: "Web Components maps, geographic, map API, API, Ignite UI for Web Components,"
license: commercial
mentionedTypes: ["GeographicMap", "Series", "SeriesViewer", "GeographicSymbolSeries", "GeographicProportionalSymbolSeries", "GeographicShapeSeries", "GeographicHighDensityScatterSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "API reference for the Web Components Geographic Map component covering zoom and viewport management (WorldRect, WindowRect, WindowScale), geographic coordinate conversion (GetGeographicPoint, GetPixelPoint, GetGeographicFromZoom), and the Zoomable interface."
platformType: xplat
_tocName: Geographic Map API
_premium: true
---
# Web Components Geographic Map API

The Web Components `IgcGeographicMapComponent` has the following API members:

- `zoomable`
- `zoomToGeographic`
- `worldRect`
- `windowRect`
- `windowScale`
- `getGeographicFromZoom`
- `getGeographicPoint`
- `getPixelPoint`

## Web Components Geographic Series Types

The Web Components `IgcGeographicMapComponent` has 7 types of series and they have the [`dataSource`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesComponent&member=dataSource) property for data binding.

- `IgcGeographicHighDensityScatterSeriesComponent`
- `IgcGeographicSymbolSeriesComponent`
- `IgcGeographicProportionalSymbolSeriesComponent`
- `IgcGeographicPolylineSeriesComponent`
- `IgcGeographicShapeSeriesComponent`
- `IgcGeographicScatterAreaSeriesComponent`
- `IgcGeographicContourLineSeriesComponent`

In addition, each type of series has specific properties for mapping data items and styling their appearance:

## Web Components Geographic Symbol Series API

The Web Components `IgcGeographicSymbolSeriesComponent` (Geographic Marker Series) has the following API members:

- `latitudeMemberPath`
- `longitudeMemberPath`
- `IgcGeographicSymbolSeriesComponent.markerType`
- `markerBrush`
- `markerOutline`

## Web Components Geographic Bubble Series API

The Web Components `IgcGeographicProportionalSymbolSeriesComponent` (Geographic Bubble Series) has the following API members:

- `IgcGeographicSymbolSeriesComponent.latitudeMemberPath`
- `IgcGeographicSymbolSeriesComponent.longitudeMemberPath`
- `radiusMemberPath`
- `radiusScale`
- `fillScale`
- `fillMemberPath`

## Web Components Geographic Shape Series API

The Web Components `IgcGeographicShapeSeriesComponent` and `IgcGeographicPolylineSeriesComponent` have the same API members:

- `IgcGeographicShapeSeriesComponent.shapeMemberPath`
- [`IgcSeriesComponent.thickness`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesComponent&member=thickness)
- [`IgcSeriesComponent.brush`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesComponent&member=brush)
- [`IgcSeriesComponent.outline`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesComponent&member=outline)

## Web Components Geographic Area Series API

The Web Components `IgcGeographicScatterAreaSeriesComponent` has the following API members:

- `IgcGeographicSymbolSeriesComponent.latitudeMemberPath`
- `IgcGeographicSymbolSeriesComponent.longitudeMemberPath`
- `colorMemberPath`
- `IgcGeographicScatterAreaSeriesComponent.colorScale`

## Web Components Geographic Contour Series API

The Web Components `IgcGeographicContourLineSeriesComponent` has the following API members:

- `IgcGeographicSymbolSeriesComponent.latitudeMemberPath`
- `IgcGeographicSymbolSeriesComponent.longitudeMemberPath`
- `valueMemberPath`
- `IgcGeographicProportionalSymbolSeriesComponent.fillScale`

## Web Components Geographic HD Series API

The Web Components `IgcGeographicHighDensityScatterSeriesComponent` has the following API members:

- `IgcGeographicSymbolSeriesComponent.latitudeMemberPath`
- `IgcGeographicSymbolSeriesComponent.longitudeMemberPath`
- `heatMaximumColor`
- `heatMinimumColor`