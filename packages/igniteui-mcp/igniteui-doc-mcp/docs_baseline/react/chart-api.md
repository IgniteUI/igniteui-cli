---
title: React Chart API | Data Visualization Tools | Infragistics
description: Use Infragistics Ignite UI for React chart provides useful API to configure and styles chart visuals
keywords: React charts, chart API, API, Ignite UI for React, Infragistics
license: commercial

mentionedTypes: ["DataChart", "CategoryChart", "FinancialChart", "SeriesViewer", "DoughnutChart", "PieChart", "Sparkline", "DataPieChart"]
namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for React charts provide simple and easy to use APIs to plot your data in CategoryChart, FinancialChart, DataChart, DataPieChart, DoughnutChart, PieChart, and Sparkline UI elements."
platformType: xplat
_tocName: Chart API
_premium: true
---
# React Charts API

The Ignite UI for React charts provide simple and easy to use APIs to plot your data in `IgrCategoryChart`, `IgrFinancialChart`, `IgrDataChart`, `IgrDataPieChart`, `IgrDoughnutChart`, `IgrPieChart`, and `IgrSparkline` UI elements.

## React Category Chart API

The React `IgrCategoryChart` has the following API members:

| Chart Properties | Axis Properties | Series Properties |
|------------------|-----------------|-------------------|
| - `excludedProperties` <br /> - `includedProperties` <br /> - `IgrDataChart.isHorizontalZoomEnabled` <br /> - `IgrDataChart.isVerticalZoomEnabled` <br /> - `IgrCategoryChart.crosshairsDisplayMode` <br /> - `transitionInMode` <br /> - `IgrDataChart.highlightingBehavior` <br /> - `IgrDataChart.highlightingMode` <br /> - `IgrCategoryChart.trendLineType` <br /> |  - `xAxisInterval` <br /> - `IgrCategoryChart.xAxisLabelLocation` <br /> - `xAxisGap` <br /> - `xAxisOverlap` <br /> - `xAxisTitle`  <br /> - `yAxisInterval` <br /> - `IgrCategoryChart.yAxisLabelLocation`  <br /> - `yAxisTitle` <br />  - `yAxisMinimumValue` <br /> - `yAxisMaximumValue` | - `IgrDataChart.brushes` <br /> - `IgrDataChart.outlines` <br /> - `IgrDataChart.markerBrushes` <br /> - `IgrDataChart.markerOutlines` <br /> - `markerTypes` <br />  - `IgrCategoryChart.toolTipType` <br /> <br /> <br /> <br /> <br /> |

## React Financial Chart API

The React `IgrFinancialChart` has the following API members:

| Chart Properties | Axis Properties | Series Properties |
|------------------|-----------------|-------------------|
| - `IgrCategoryChart.excludedProperties` <br /> - `IgrCategoryChart.includedProperties` <br /> - `IgrDataChart.isHorizontalZoomEnabled` <br /> - `IgrDataChart.isVerticalZoomEnabled` <br /> - `IgrCategoryChart.toolTipType`  <br /> - `IgrCategoryChart.crosshairsDisplayMode`  <br /> - `IgrDataChart.highlightingBehavior` <br /> - `IgrDataChart.highlightingMode` <br /> - `IgrCategoryChart.trendLineType` |  - `xAxisInterval` <br /> - `IgrCategoryChart.xAxisLabelLocation` <br /> - `IgrCategoryChart.xAxisTitle` <br /> - `IgrCategoryChart.yAxisInterval` <br /> - `IgrCategoryChart.yAxisLabelLocation`  <br /> - `IgrCategoryChart.yAxisTitle` <br />  - `IgrCategoryChart.yAxisMinimumValue` <br /> - `IgrCategoryChart.yAxisMaximumValue` <br /> - `yAxisMode` <br /> - `xAxisMode` | - `IgrDataChart.brushes` <br /> - `IgrDataChart.outlines` <br /> - `IgrDataChart.markerBrushes` <br /> - `IgrDataChart.markerOutlines` <br /> - `IgrCategoryChart.markerTypes`  <br /> - `indicatorTypes` <br />  - `volumeType` <br />  - `zoomSliderType` <br /> <br /> <br /> |

## React Data Chart API

The React `IgrDataChart` has the following API members:

| Chart Properties | Axis Classes |
|------------------|--------------|
| - `IgrSeriesViewer.chartTitle` <br /> - `IgrSeriesViewer.subtitle` <br /> - `isHorizontalZoomEnabled` <br /> - `isVerticalZoomEnabled` <br /> - `brushes` <br /> - `outlines` <br /> - `markerBrushes` <br /> - `markerOutlines` <br /> - `axes` <br /> - `IgrDataChart.series` <br /> |  - `IgrAxis` is base class for all axis types <br /> - `IgrCategoryXAxis` used with [Category Series](types/column-chart.md), [Stacked Series](types/stacked-chart.md), and [Financial Series](types/stock-chart.md) <br /> - `IgrCategoryYAxis` used with [Category Series](types/column-chart.md), [Stacked Series](types/stacked-chart.md) <br /> - `IgrCategoryAngleAxis` used with [Radial Series](types/radial-chart.md) <br /> - `IgrNumericXAxis` used with [Scatter Series](types/scatter-chart.md) and [Bar Series](types/bar-chart.md)   <br /> - `IgrNumericYAxis` used with [Scatter Series](types/scatter-chart.md), [Category Series](types/column-chart.md), [Stacked Series](types/stacked-chart.md), and [Financial Series](types/stock-chart.md) <br /> - `IgrNumericAngleAxis` used with [Polar Series](types/polar-chart.md) <br /> - `IgrNumericRadiusAxis` used with [Polar Series](types/polar-chart.md) and [Radial Series](types/radial-chart.md) <br /> - `IgrTimeXAxis` used with [Category Series](types/column-chart.md) and [Financial Series](types/stock-chart.md) <br /> <br /> |

The React `IgrDataChart` can use the following type of series that inherit from `IgrDataChart.series`:

| Category Series  | Stacked Series |
|------------------|----------------|
| - `IgrAreaSeries` <br /> - `IgrBarSeries` <br /> - `IgrColumnSeries` <br /> - `IgrLineSeries` <br /> - `IgrPointSeries`  <br /> - `IgrSplineSeries` <br />  - `IgrSplineAreaSeries` <br /> - `IgrStepLineSeries` <br /> - `IgrStepAreaSeries` <br /> - `IgrRangeAreaSeries` <br /> - `IgrRangeColumnSeries` <br /> - `IgrRangeBarSeries` <br /> - `IgrWaterfallSeries` <br /> | - `IgrStackedAreaSeries` <br /> - `IgrStackedBarSeries` <br /> - `IgrStackedColumnSeries` <br /> - `IgrStackedLineSeries` <br /> - `IgrStackedSplineSeries` <br /> - `IgrStacked100AreaSeries` <br /> - `IgrStacked100BarSeries` <br /> - `IgrStacked100ColumnSeries` <br /> - `IgrStacked100LineSeries` <br /> - `IgrStacked100SplineSeries` <br /> <br /> <br /> |

| Scatter Series | Financial Series |
|----------------|------------------|
| - `IgrBubbleSeries` <br /> - `IgrHighDensityScatterSeries` <br /> - `IgrScatterSeries` <br />  - `IgrScatterLineSeries` <br /> - `IgrScatterSplineSeries` <br /> - `IgrScatterAreaSeries` <br /> - `IgrScatterContourSeries` <br /> - `IgrScatterPolylineSeries`  <br /> - `IgrScatterPolygonSeries`  <br /> <br /> | - `IgrFinancialPriceSeries` <br /> - `IgrBollingerBandsOverlay` <br /> - `IgrForceIndexIndicator` <br /> - `IgrMedianPriceIndicator` <br /> - `IgrMassIndexIndicator`  <br /> - `IgrRelativeStrengthIndexIndicator` <br /> - `IgrStandardDeviationIndicator` <br /> - `IgrTypicalPriceIndicator` <br /> - `IgrWeightedCloseIndicator` <br /> - and [many more](types/stock-chart.md) |

| Radial Series | Polar Series |
|---------------|--------------|
| - `IgrRadialLineSeries` <br /> - `IgrRadialAreaSeries` <br /> - `IgrRadialPieSeries` <br /> - `IgrRadialColumnSeries` <br /> <br /> | - `IgrPolarScatterSeries` <br /> - `IgrPolarLineSeries` <br /> - `IgrPolarAreaSeries` <br /> - `IgrPolarSplineSeries` <br /> - `IgrPolarSplineAreaSeries` <br /> |

## React Data Legend API

The React `IgrDataLegend` has the following API members:

- `includedColumns`
- `excludedColumns`
- `includedSeries`
- `excludedSeries`
- `valueFormatAbbreviation`
- `valueFormatMode`
- `valueFormatCulture`
- `valueFormatMinFractions`
- `valueFormatMaxFractions`
- `valueTextColor`
- `IgrDataChart.titleTextColor`
- `labelTextColor`
- `unitsTextColor`
- `summaryType`
- `headerTextColor`
- `IgrDataLegend.badgeShape`

## React Donut Chart API

The React `IgrDoughnutChart` has the following API members:

- `allowSliceExplosion`
- `allowSliceSelection`
- `innerExtent`

## React Data Pie Chart API

The React `IgrDataPieChart` has the following API members:

- `highlightingBehavior`
- `othersCategoryThreshold`
- `IgrDataPieChart.othersCategoryType`
- `selectionMode`
- `selectionBehavior`

## React Pie Chart API

The React `IgrPieChart` has the following API members:

- `legendItemBadgeTemplate`
- `legendItemTemplate`
- `legendLabelMemberPath`
- `othersCategoryThreshold`
- `IgrPieChart.othersCategoryType`
- `selectionMode`

## React Sparkline Chart API

The React `IgrSparkline` has the following API members:

- `displayNormalRangeInFront`
- `displayType`
- `lowMarkerBrush`
- `lowMarkerSize`
- `lowMarkerVisibility`
- `normalRangeFill`
- `IgrCategoryChart.unknownValuePlotting`

## Additional Resources

You can find more information about charts in these topics:

- [Chart Overview](chart-overview.md)
- [Chart Features](chart-features.md)
