---
title: React Chart API | Data Visualization Tools | Infragistics
description: Use Infragistics Ignite UI for React chart provides useful API to configure and styles chart visuals
keywords: React charts, chart API, API, Ignite UI for React, Infragistics
license: commercial

namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for React charts provide simple and easy to use APIs to plot your data in CategoryChart, FinancialChart, DataChart, DataPieChart, DoughnutChart, PieChart, and Sparkline UI elements."
_tocName: Chart API
_premium: true
---
# React Charts API

The Ignite UI for React charts provide simple and easy to use APIs to plot your data in `IgrCategoryChart`, `IgrFinancialChart`, `IgrDataChart`, `IgrDataPieChart`, `IgrDoughnutChart`, [`IgrPieChart`](mcp:get_api_reference?platform=react&component=IgrPieChart), and `IgrSparkline` UI elements.

## React Category Chart API

The React `IgrCategoryChart` has the following API members:

| Chart Properties | Axis Properties | Series Properties |
|------------------|-----------------|-------------------|
| - `ExcludedProperties` <br /> - `IncludedProperties` <br /> - `IsHorizontalZoomEnabled` <br /> - `IsVerticalZoomEnabled` <br /> - `CrosshairsDisplayMode` <br /> - `TransitionInMode` <br /> - `HighlightingBehavior` <br /> - `HighlightingMode` <br /> - `TrendLineType` <br /> |  - `XAxisInterval` <br /> - `XAxisLabelLocation` <br /> - `XAxisGap` <br /> - `XAxisOverlap` <br /> - `XAxisTitle`  <br /> - `YAxisInterval` <br /> - `YAxisLabelLocation`  <br /> - `YAxisTitle` <br />  - `YAxisMinimumValue` <br /> - `YAxisMaximumValue` | - `Brushes` <br /> - `Outlines` <br /> - `MarkerBrushes` <br /> - `MarkerOutlines` <br /> - `MarkerTypes` <br />  - `ToolTipType` <br /> <br /> <br /> <br /> <br /> |

## React Financial Chart API

The React `IgrFinancialChart` has the following API members:

| Chart Properties | Axis Properties | Series Properties |
|------------------|-----------------|-------------------|
| - `ExcludedProperties` <br /> - `IncludedProperties` <br /> - `IsHorizontalZoomEnabled` <br /> - `IsVerticalZoomEnabled` <br /> - `ToolTipType`  <br /> - `CrosshairsDisplayMode`  <br /> - `HighlightingBehavior` <br /> - `HighlightingMode` <br /> - `TrendLineType` |  - `XAxisInterval` <br /> - `XAxisLabelLocation` <br /> - `XAxisTitle` <br /> - `YAxisInterval` <br /> - `YAxisLabelLocation`  <br /> - `YAxisTitle` <br />  - `YAxisMinimumValue` <br /> - `YAxisMaximumValue` <br /> - `YAxisMode` <br /> - `XAxisMode` | - `Brushes` <br /> - `Outlines` <br /> - `MarkerBrushes` <br /> - `MarkerOutlines` <br /> - `MarkerTypes`  <br /> - `IndicatorTypes` <br />  - `VolumeType` <br />  - `ZoomSliderType` <br /> <br /> <br /> |

## React Data Chart API

The React `IgrDataChart` has the following API members:

| Chart Properties | Axis Classes |
|------------------|--------------|
| - `Title` <br /> - `Subtitle` <br /> - `IsHorizontalZoomEnabled` <br /> - `IsVerticalZoomEnabled` <br /> - `Brushes` <br /> - `Outlines` <br /> - `MarkerBrushes` <br /> - `MarkerOutlines` <br /> - `Axes` <br /> - `Series` <br /> |  - `IgrAxis` is base class for all axis types <br /> - `IgrCategoryXAxis` used with [Category Series](types/column-chart.md), [Stacked Series](types/stacked-chart.md), and [Financial Series](types/stock-chart.md) <br /> - `IgrCategoryYAxis` used with [Category Series](types/column-chart.md), [Stacked Series](types/stacked-chart.md) <br /> - `IgrCategoryAngleAxis` used with [Radial Series](types/radial-chart.md) <br /> - `IgrNumericXAxis` used with [Scatter Series](types/scatter-chart.md) and [Bar Series](types/bar-chart.md)   <br /> - `IgrNumericYAxis` used with [Scatter Series](types/scatter-chart.md), [Category Series](types/column-chart.md), [Stacked Series](types/stacked-chart.md), and [Financial Series](types/stock-chart.md) <br /> - `IgrNumericAngleAxis` used with [Polar Series](types/polar-chart.md) <br /> - `IgrNumericRadiusAxis` used with [Polar Series](types/polar-chart.md) and [Radial Series](types/radial-chart.md) <br /> - `IgrTimeXAxis` used with [Category Series](types/column-chart.md) and [Financial Series](types/stock-chart.md) <br /> <br /> |

The React `IgrDataChart` can use the following type of series that inherit from `Series`:

| Category Series  | Stacked Series |
|------------------|----------------|
| - `IgrAreaSeries` <br /> - `IgrBarSeries` <br /> - `IgrColumnSeries` <br /> - `IgrLineSeries` <br /> - `IgrPointSeries`  <br /> - `IgrSplineSeries` <br />  - `IgrSplineAreaSeries` <br /> - `IgrStepLineSeries` <br /> - `IgrStepAreaSeries` <br /> - `IgrRangeAreaSeries` <br /> - `IgrRangeColumnSeries` <br /> - `RangeBarSeries` <br /> - `IgrWaterfallSeries` <br /> | - `IgrStackedAreaSeries` <br /> - `IgrStackedBarSeries` <br /> - `IgrStackedColumnSeries` <br /> - `IgrStackedLineSeries` <br /> - `IgrStackedSplineSeries` <br /> - `IgrStacked100AreaSeries` <br /> - `IgrStacked100BarSeries` <br /> - `IgrStacked100ColumnSeries` <br /> - `IgrStacked100LineSeries` <br /> - `IgrStacked100SplineSeries` <br /> <br /> <br /> |

| Scatter Series | Financial Series |
|----------------|------------------|
| - `IgrBubbleSeries` <br /> - `IgrHighDensityScatterSeries` <br /> - `IgrScatterSeries` <br />  - `IgrScatterLineSeries` <br /> - `IgrScatterSplineSeries` <br /> - `IgrScatterAreaSeries` <br /> - `IgrScatterContourSeries` <br /> - `IgrScatterPolylineSeries`  <br /> - `IgrScatterPolygonSeries`  <br /> <br /> | - `IgrFinancialPriceSeries` <br /> - `IgrBollingerBandsOverlay` <br /> - `IgrForceIndexIndicator` <br /> - `IgrMedianPriceIndicator` <br /> - `IgrMassIndexIndicator`  <br /> - `IgrRelativeStrengthIndexIndicator` <br /> - `IgrStandardDeviationIndicator` <br /> - `IgrTypicalPriceIndicator` <br /> - `IgrWeightedCloseIndicator` <br /> - and [many more](types/stock-chart.md) |

| Radial Series | Polar Series |
|---------------|--------------|
| - `IgrRadialLineSeries` <br /> - `IgrRadialAreaSeries` <br /> - `IgrRadialPieSeries` <br /> - `IgrRadialColumnSeries` <br /> <br /> | - `IgrPolarScatterSeries` <br /> - `IgrPolarLineSeries` <br /> - `IgrPolarAreaSeries` <br /> - `IgrPolarSplineSeries` <br /> - `IgrPolarSplineAreaSeries` <br /> |

## React Data Legend API

The React `IgrDataLegend` has the following API members:

- `IncludedColumns`
- `ExcludedColumns`
- `IncludedSeries`
- `ExcludedSeries`
- `ValueFormatAbbreviation`
- `ValueFormatMode`
- `ValueFormatCulture`
- `ValueFormatMinFractions`
- `ValueFormatMaxFractions`
- `ValueTextColor`
- `TitleTextColor`
- `LabelTextColor`
- `UnitsTextColor`
- `SummaryType`
- `HeaderTextColor`
- `BadgeShape`

## React Donut Chart API

The React `IgrDoughnutChart` has the following API members:

- `AllowSliceExplosion`
- `AllowSliceSelection`
- `InnerExtent`

## React Data Pie Chart API

The React `IgrDataPieChart` has the following API members:

- `HighlightingBehavior`
- `OthersCategoryThreshold`
- `OthersCategoryType`
- `SelectionMode`
- `SelectionBehavior`

## React Pie Chart API

The React [`IgrPieChart`](mcp:get_api_reference?platform=react&component=IgrPieChart) has the following API members:

- [`LegendItemBadgeTemplate`](mcp:get_api_reference?platform=react&component=IgrPieChart&member=legendItemBadgeTemplate)
- [`LegendItemTemplate`](mcp:get_api_reference?platform=react&component=IgrPieChart&member=legendItemTemplate)
- [`LegendLabelMemberPath`](mcp:get_api_reference?platform=react&component=IgrPieChart&member=legendLabelMemberPath)
- [`OthersCategoryThreshold`](mcp:get_api_reference?platform=react&component=IgrPieChart&member=othersCategoryThreshold)
- [`OthersCategoryType`](mcp:get_api_reference?platform=react&component=IgrPieChart&member=othersCategoryType)
- [`SelectionMode`](mcp:get_api_reference?platform=react&component=IgrPieChart&member=selectionMode)

## React Sparkline Chart API

The React `IgrSparkline` has the following API members:

- `DisplayNormalRangeInFront`
- `DisplayType`
- `LowMarkerBrush`
- `LowMarkerSize`
- `LowMarkerVisibility`
- `NormalRangeFill`
- `UnknownValuePlotting`

## Additional Resources

You can find more information about charts in these topics:

- [Chart Overview](chart-overview.md)
- [Chart Features](chart-features.md)
