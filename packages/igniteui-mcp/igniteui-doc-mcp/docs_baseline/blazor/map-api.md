---
title: Blazor Chart API | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for Blazor map provides useful API to configure and styles map visuals
_keywords: Blazor maps, geographic, map API, API, Ignite UI for Blazor,
_license: commercial
mentionedTypes: ["XamGeographicMap", "Series", "SeriesViewer", "GeographicSymbolSeries", "GeographicProportionalSymbolSeries", "GeographicShapeSeries", "GeographicHighDensityScatterSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
_tocName: Geographic Map API
_premium: true
---

# Blazor Geographic Map API

The Blazor [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html) has the following API members:

- [`Zoomable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html#IgniteUI_Blazor_Controls_IgbGeographicMap_Zoomable)
- [`ZoomToGeographic`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html#IgniteUI_Blazor_Controls_IgbGeographicMap_ZoomToGeographic)
- [`WorldRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html#IgniteUI_Blazor_Controls_IgbGeographicMap_WorldRect)
- [`WindowRect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeriesViewer.html#IgniteUI_Blazor_Controls_IgbSeriesViewer_WindowRect)
- [`WindowScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html#IgniteUI_Blazor_Controls_IgbGeographicMap_WindowScale)
- [`GetGeographicFromZoom`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html#IgniteUI_Blazor_Controls_IgbGeographicMap_GetGeographicFromZoom)
- [`GetGeographicPoint`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html#IgniteUI_Blazor_Controls_IgbGeographicMap_GetGeographicPoint)
- [`GetPixelPoint`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html#IgniteUI_Blazor_Controls_IgbGeographicMap_GetPixelPoint)

## Blazor Geographic Series Types

The Blazor [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html) has 7 types of series and they have the [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource) property for data binding.

- [`IgbGeographicHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html)
- [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html)
- [`IgbGeographicProportionalSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html)
- [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html)
- [`IgbGeographicShapeSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicShapeSeries.html)
- [`IgbGeographicScatterAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicScatterAreaSeries.html)
- [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html)

In addition, each type of series has specific properties for mapping data items and styling their appearance:

## Blazor Geographic Symbol Series API

The Blazor [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html) (Geographic Marker Series) has the following API members:

- [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LatitudeMemberPath)
- [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LongitudeMemberPath)
- [`MarkerType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMarkerSeries.html#IgniteUI_Blazor_Controls_IgbGeographicMarkerSeries_MarkerType)
- [`MarkerBrush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMarkerSeries.html#IgniteUI_Blazor_Controls_IgbGeographicMarkerSeries_MarkerBrush)
- [`MarkerOutline`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMarkerSeries.html#IgniteUI_Blazor_Controls_IgbGeographicMarkerSeries_MarkerOutline)

## Blazor Geographic Bubble Series API

The Blazor [`IgbGeographicProportionalSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html) (Geographic Bubble Series) has the following API members:

- [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicProportionalSymbolSeries_LatitudeMemberPath)
- [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicProportionalSymbolSeries_LongitudeMemberPath)
- [`RadiusMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicProportionalSymbolSeries_RadiusMemberPath)
- [`RadiusScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicProportionalSymbolSeries_RadiusScale)
- [`FillScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicProportionalSymbolSeries_FillScale)
- [`FillMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicProportionalSymbolSeries_FillMemberPath)

## Blazor Geographic Shape Series API

The Blazor [`IgbGeographicShapeSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicShapeSeries.html) and [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) have the same API members:

- [`ShapeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicShapeSeriesBase.html#IgniteUI_Blazor_Controls_IgbGeographicShapeSeriesBase_ShapeMemberPath)
- [`Thickness`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_Thickness)
- [`Brush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_Brush)
- [`Outline`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_Outline)

## Blazor Geographic Area Series API

The Blazor [`IgbGeographicScatterAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicScatterAreaSeries.html) has the following API members:

- [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LatitudeMemberPath)
- [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LongitudeMemberPath)
- [`ColorMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicScatterAreaSeries.html#IgniteUI_Blazor_Controls_IgbGeographicScatterAreaSeries_ColorMemberPath)
- [`ColorScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicScatterAreaSeries.html#IgniteUI_Blazor_Controls_IgbGeographicScatterAreaSeries_ColorScale)

## Blazor Geographic Contour Series API

The Blazor [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html) has the following API members:

- [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LatitudeMemberPath)
- [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LongitudeMemberPath)
- [`ValueMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html#IgniteUI_Blazor_Controls_IgbGeographicContourLineSeries_ValueMemberPath)
- [`FillScale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html#IgniteUI_Blazor_Controls_IgbGeographicContourLineSeries_FillScale)

## Blazor Geographic HD Series API

The Blazor [`IgbGeographicHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html) has the following API members:

- [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html#IgniteUI_Blazor_Controls_IgbGeographicHighDensityScatterSeries_LatitudeMemberPath)
- [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html#IgniteUI_Blazor_Controls_IgbGeographicHighDensityScatterSeries_LongitudeMemberPath)
- [`HeatMaximumColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html#IgniteUI_Blazor_Controls_IgbGeographicHighDensityScatterSeries_HeatMaximumColor)
- [`HeatMinimumColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html#IgniteUI_Blazor_Controls_IgbGeographicHighDensityScatterSeries_HeatMinimumColor)
