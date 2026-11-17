---
title: "Angular Chart API | Data Visualization Tools | Infragistics"
description: Use Infragistics Ignite UI for Angular map provides useful API to configure and styles map visuals
keywords: "Angular maps, geographic, map API, API, Ignite UI for Angular,"
license: commercial
mentionedTypes: ["GeographicMap", "Series", "SeriesViewer", "GeographicSymbolSeries", "GeographicProportionalSymbolSeries", "GeographicShapeSeries", "GeographicHighDensityScatterSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "API reference for the Angular Geographic Map component covering zoom and viewport management (WorldRect, WindowRect, WindowScale), geographic coordinate conversion (GetGeographicPoint, GetPixelPoint, GetGeographicFromZoom), and the Zoomable interface."
platformType: xplat
_tocName: Geographic Map API
_premium: true
---
# Angular Geographic Map API

The Angular [`IgxGeographicMapComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicMapComponent) has the following API members:

- [`zoomable`](mcp:get_api_reference?platform=angular&component=IgxGeographicMapComponent&member=zoomable)
- [`zoomToGeographic`](mcp:get_api_reference?platform=angular&component=IgxGeographicMapComponent&member=zoomToGeographic)
- [`worldRect`](mcp:get_api_reference?platform=angular&component=IgxGeographicMapComponent&member=worldRect)
- [`windowRect`](mcp:get_api_reference?platform=angular&component=IgxGeographicMapComponent&member=windowRect)
- [`windowScale`](mcp:get_api_reference?platform=angular&component=IgxGeographicMapComponent&member=windowScale)
- [`getGeographicFromZoom`](mcp:get_api_reference?platform=angular&component=IgxGeographicMapComponent&member=getGeographicFromZoom)
- [`getGeographicPoint`](mcp:get_api_reference?platform=angular&component=IgxGeographicMapComponent&member=getGeographicPoint)
- [`getPixelPoint`](mcp:get_api_reference?platform=angular&component=IgxGeographicMapComponent&member=getPixelPoint)

## Angular Geographic Series Types

The Angular [`IgxGeographicMapComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicMapComponent) has 7 types of series and they have the [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxSeriesComponent&member=dataSource) property for data binding.

- [`IgxGeographicHighDensityScatterSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicHighDensityScatterSeriesComponent)
- [`IgxGeographicSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent)
- [`IgxGeographicProportionalSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent)
- [`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent)
- [`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent)
- [`IgxGeographicScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent)
- [`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent)

In addition, each type of series has specific properties for mapping data items and styling their appearance:

## Angular Geographic Symbol Series API

The Angular [`IgxGeographicSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent) (Geographic Marker Series) has the following API members:

- [`latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=latitudeMemberPath)
- [`longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=longitudeMemberPath)
- [`IgxGeographicSymbolSeriesComponent.markerType`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=markerType)
- [`markerBrush`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=markerBrush)
- [`markerOutline`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=markerOutline)

## Angular Geographic Bubble Series API

The Angular [`IgxGeographicProportionalSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent) (Geographic Bubble Series) has the following API members:

- [`IgxGeographicSymbolSeriesComponent.latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=latitudeMemberPath)
- [`IgxGeographicSymbolSeriesComponent.longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=longitudeMemberPath)
- [`radiusMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=radiusMemberPath)
- [`radiusScale`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=radiusScale)
- [`fillScale`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=fillScale)
- [`fillMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=fillMemberPath)

## Angular Geographic Shape Series API

The Angular [`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent) and [`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent) have the same API members:

- [`IgxGeographicShapeSeriesComponent.shapeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent&member=shapeMemberPath)
- [`IgxSeriesComponent.thickness`](mcp:get_api_reference?platform=angular&component=IgxSeriesComponent&member=thickness)
- [`IgxSeriesComponent.brush`](mcp:get_api_reference?platform=angular&component=IgxSeriesComponent&member=brush)
- [`IgxSeriesComponent.outline`](mcp:get_api_reference?platform=angular&component=IgxSeriesComponent&member=outline)

## Angular Geographic Area Series API

The Angular [`IgxGeographicScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent) has the following API members:

- [`IgxGeographicSymbolSeriesComponent.latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=latitudeMemberPath)
- [`IgxGeographicSymbolSeriesComponent.longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=longitudeMemberPath)
- [`colorMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=colorMemberPath)
- [`IgxGeographicScatterAreaSeriesComponent.colorScale`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=colorScale)

## Angular Geographic Contour Series API

The Angular [`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent) has the following API members:

- [`IgxGeographicSymbolSeriesComponent.latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=latitudeMemberPath)
- [`IgxGeographicSymbolSeriesComponent.longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=longitudeMemberPath)
- [`valueMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=valueMemberPath)
- [`IgxGeographicProportionalSymbolSeriesComponent.fillScale`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=fillScale)

## Angular Geographic HD Series API

The Angular [`IgxGeographicHighDensityScatterSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicHighDensityScatterSeriesComponent) has the following API members:

- [`IgxGeographicSymbolSeriesComponent.latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=latitudeMemberPath)
- [`IgxGeographicSymbolSeriesComponent.longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=longitudeMemberPath)
- [`heatMaximumColor`](mcp:get_api_reference?platform=angular&component=IgxGeographicHighDensityScatterSeriesComponent&member=heatMaximumColor)
- [`heatMinimumColor`](mcp:get_api_reference?platform=angular&component=IgxGeographicHighDensityScatterSeriesComponent&member=heatMinimumColor)