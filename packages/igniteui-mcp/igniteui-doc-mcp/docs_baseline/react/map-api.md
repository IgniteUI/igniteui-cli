---
title: React Chart API | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for React map provides useful API to configure and styles map visuals
_keywords: React maps, geographic, map API, API, Ignite UI for React,
_license: commercial
mentionedTypes: ["XamGeographicMap", "Series", "SeriesViewer", "GeographicSymbolSeries", "GeographicProportionalSymbolSeries", "GeographicShapeSeries", "GeographicHighDensityScatterSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
_tocName: Geographic Map API
_premium: true
---

# React Geographic Map API

The React [`IgrGeographicMap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html) has the following API members:

- [`zoomable`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html#zoomable)
- [`zoomToGeographic`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html#zoomToGeographic)
- [`worldRect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html#worldRect)
- [`windowRect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#windowRect)
- [`windowScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html#windowScale)
- [`getGeographicFromZoom`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html#getGeographicFromZoom)
- [`getGeographicPoint`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html#getGeographicPoint)
- [`getPixelPoint`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html#getPixelPoint)

## React Geographic Series Types

The React [`IgrGeographicMap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html) has 7 types of series and they have the `ItemsSource` property for data binding.

- [`IgrGeographicHighDensityScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographichighdensityscatterseries.html)
- [`IgrGeographicSymbolSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html)
- [`IgrGeographicProportionalSymbolSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicproportionalsymbolseries.html)
- [`IgrGeographicPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicpolylineseries.html)
- [`IgrGeographicShapeSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseries.html)
- [`IgrGeographicScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html)
- [`IgrGeographicContourLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html)

In addition, each type of series has specific properties for mapping data items and styling their appearance:

## React Geographic Symbol Series API

The React [`IgrGeographicSymbolSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html) (Geographic Marker Series) has the following API members:

- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html#longitudeMemberPath)
- [`markerType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmarkerseries.html#markerType)
- [`markerBrush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmarkerseries.html#markerBrush)
- [`markerOutline`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmarkerseries.html#markerOutline)

## React Geographic Bubble Series API

The React [`IgrGeographicProportionalSymbolSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicproportionalsymbolseries.html) (Geographic Bubble Series) has the following API members:

- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicproportionalsymbolseries.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicproportionalsymbolseries.html#longitudeMemberPath)
- [`radiusMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicproportionalsymbolseries.html#radiusMemberPath)
- [`radiusScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicproportionalsymbolseries.html#radiusScale)
- [`fillScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicproportionalsymbolseries.html#fillScale)
- [`fillMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicproportionalsymbolseries.html#fillMemberPath)

## React Geographic Shape Series API

The React [`IgrGeographicShapeSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseries.html) and [`IgrGeographicPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicpolylineseries.html) have the same API members:

- [`shapeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseriesbase.html#shapeMemberPath)
- `Thickness`
- `Brush`
- `Outline`

## React Geographic Area Series API

The React [`IgrGeographicScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html) has the following API members:

- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html#longitudeMemberPath)
- [`colorMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html#colorMemberPath)
- [`colorScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html#colorScale)

## React Geographic Contour Series API

The React [`IgrGeographicContourLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html) has the following API members:

- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicsymbolseries.html#longitudeMemberPath)
- [`valueMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html#valueMemberPath)
- [`fillScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html#fillScale)

## React Geographic HD Series API

The React [`IgrGeographicHighDensityScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographichighdensityscatterseries.html) has the following API members:

- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographichighdensityscatterseries.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographichighdensityscatterseries.html#longitudeMemberPath)
- [`heatMaximumColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographichighdensityscatterseries.html#heatMaximumColor)
- [`heatMinimumColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographichighdensityscatterseries.html#heatMinimumColor)
