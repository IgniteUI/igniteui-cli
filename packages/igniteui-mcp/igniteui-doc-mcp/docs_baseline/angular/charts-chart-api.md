---
title: Angular Chart API | Data Visualization Tools | Infragistics
description: Use Infragistics Ignite UI for Angular chart provides useful API to configure and styles chart visuals
keywords: Angular charts, chart API, API, Ignite UI for Angular, Infragistics
license: commercial

namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for Angular charts provide simple and easy to use APIs to plot your data in CategoryChart, FinancialChart, DataChart, DataPieChart, DoughnutChart, PieChart, and Sparkline UI elements."
_tocName: Chart API
_premium: true
---
# Angular Charts API

The Ignite UI for Angular charts provide simple and easy to use APIs to plot your data in `IgxCategoryChart`, `IgxFinancialChart`, `IgxDataChart`, `IgxDataPieChart`, `IgxDoughnutChart`, `IgxPieChart`, and `IgxSparkline` UI elements.

## Angular Category Chart API

The Angular `IgxCategoryChart` has the following API members:

| Chart Properties | Axis Properties | Series Properties |
|------------------|-----------------|-------------------|
| - `ExcludedProperties` <br /> - `IncludedProperties` <br /> - `IsHorizontalZoomEnabled` <br /> - `IsVerticalZoomEnabled` <br /> - `CrosshairsDisplayMode` <br /> - `TransitionInMode` <br /> - `HighlightingBehavior` <br /> - `HighlightingMode` <br /> - `TrendLineType` <br /> |  - `XAxisInterval` <br /> - `XAxisLabelLocation` <br /> - `XAxisGap` <br /> - `XAxisOverlap` <br /> - `XAxisTitle`  <br /> - `YAxisInterval` <br /> - `YAxisLabelLocation`  <br /> - `YAxisTitle` <br />  - `YAxisMinimumValue` <br /> - `YAxisMaximumValue` | - `Brushes` <br /> - `Outlines` <br /> - `MarkerBrushes` <br /> - `MarkerOutlines` <br /> - `MarkerTypes` <br />  - `ToolTipType` <br /> <br /> <br /> <br /> <br /> |

## Angular Financial Chart API

The Angular `IgxFinancialChart` has the following API members:

| Chart Properties | Axis Properties | Series Properties |
|------------------|-----------------|-------------------|
| - `ExcludedProperties` <br /> - `IncludedProperties` <br /> - `IsHorizontalZoomEnabled` <br /> - `IsVerticalZoomEnabled` <br /> - `ToolTipType`  <br /> - `CrosshairsDisplayMode`  <br /> - `HighlightingBehavior` <br /> - `HighlightingMode` <br /> - `TrendLineType` |  - `XAxisInterval` <br /> - `XAxisLabelLocation` <br /> - `XAxisTitle` <br /> - `YAxisInterval` <br /> - `YAxisLabelLocation`  <br /> - `YAxisTitle` <br />  - `YAxisMinimumValue` <br /> - `YAxisMaximumValue` <br /> - `YAxisMode` <br /> - `XAxisMode` | - `Brushes` <br /> - `Outlines` <br /> - `MarkerBrushes` <br /> - `MarkerOutlines` <br /> - `MarkerTypes`  <br /> - `IndicatorTypes` <br />  - `VolumeType` <br />  - `ZoomSliderType` <br /> <br /> <br /> |

## Angular Data Chart API

The Angular `IgxDataChart` has the following API members:

| Chart Properties | Axis Classes |
|------------------|--------------|
| - `Title` <br /> - `Subtitle` <br /> - `IsHorizontalZoomEnabled` <br /> - `IsVerticalZoomEnabled` <br /> - `Brushes` <br /> - `Outlines` <br /> - `MarkerBrushes` <br /> - `MarkerOutlines` <br /> - `Axes` <br /> - `Series` <br /> |  - `IgxAxis` is base class for all axis types <br /> - `IgxCategoryXAxis` used with [Category Series](types/column-chart.md), [Stacked Series](types/stacked-chart.md), and [Financial Series](types/stock-chart.md) <br /> - `IgxCategoryYAxis` used with [Category Series](types/column-chart.md), [Stacked Series](types/stacked-chart.md) <br /> - `IgxCategoryAngleAxis` used with [Radial Series](types/radial-chart.md) <br /> - `IgxNumericXAxis` used with [Scatter Series](types/scatter-chart.md) and [Bar Series](types/bar-chart.md)   <br /> - `IgxNumericYAxis` used with [Scatter Series](types/scatter-chart.md), [Category Series](types/column-chart.md), [Stacked Series](types/stacked-chart.md), and [Financial Series](types/stock-chart.md) <br /> - `IgxNumericAngleAxis` used with [Polar Series](types/polar-chart.md) <br /> - `IgxNumericRadiusAxis` used with [Polar Series](types/polar-chart.md) and [Radial Series](types/radial-chart.md) <br /> - `IgxTimeXAxis` used with [Category Series](types/column-chart.md) and [Financial Series](types/stock-chart.md) <br /> <br /> |

The Angular `IgxDataChart` can use the following type of series that inherit from `Series`:

| Category Series  | Stacked Series |
|------------------|----------------|
| - `IgxAreaSeries` <br /> - `IgxBarSeries` <br /> - `IgxColumnSeries` <br /> - `IgxLineSeries` <br /> - `IgxPointSeries`  <br /> - `IgxSplineSeries` <br />  - `IgxSplineAreaSeries` <br /> - `IgxStepLineSeries` <br /> - `IgxStepAreaSeries` <br /> - `IgxRangeAreaSeries` <br /> - `IgxRangeColumnSeries` <br /> - `RangeBarSeries` <br /> - `IgxWaterfallSeries` <br /> | - `IgxStackedAreaSeries` <br /> - `IgxStackedBarSeries` <br /> - `IgxStackedColumnSeries` <br /> - `IgxStackedLineSeries` <br /> - `IgxStackedSplineSeries` <br /> - `IgxStacked100AreaSeries` <br /> - `IgxStacked100BarSeries` <br /> - `IgxStacked100ColumnSeries` <br /> - `IgxStacked100LineSeries` <br /> - `IgxStacked100SplineSeries` <br /> <br /> <br /> |

| Scatter Series | Financial Series |
|----------------|------------------|
| - `IgxBubbleSeries` <br /> - `IgxHighDensityScatterSeries` <br /> - `IgxScatterSeries` <br />  - `IgxScatterLineSeries` <br /> - `IgxScatterSplineSeries` <br /> - `IgxScatterAreaSeries` <br /> - `IgxScatterContourSeries` <br /> - `IgxScatterPolylineSeries`  <br /> - `IgxScatterPolygonSeries`  <br /> <br /> | - `IgxFinancialPriceSeries` <br /> - `IgxBollingerBandsOverlay` <br /> - `IgxForceIndexIndicator` <br /> - `IgxMedianPriceIndicator` <br /> - `IgxMassIndexIndicator`  <br /> - `IgxRelativeStrengthIndexIndicator` <br /> - `IgxStandardDeviationIndicator` <br /> - `IgxTypicalPriceIndicator` <br /> - `IgxWeightedCloseIndicator` <br /> - and [many more](types/stock-chart.md) |

| Radial Series | Polar Series |
|---------------|--------------|
| - `IgxRadialLineSeries` <br /> - `IgxRadialAreaSeries` <br /> - `IgxRadialPieSeries` <br /> - `IgxRadialColumnSeries` <br /> <br /> | - `IgxPolarScatterSeries` <br /> - `IgxPolarLineSeries` <br /> - `IgxPolarAreaSeries` <br /> - `IgxPolarSplineSeries` <br /> - `IgxPolarSplineAreaSeries` <br /> |

## Angular Data Legend API

The Angular `IgxDataLegend` has the following API members:

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

## Angular Donut Chart API

The Angular `IgxDoughnutChart` has the following API members:

- `AllowSliceExplosion`
- `AllowSliceSelection`
- `InnerExtent`

## Angular Data Pie Chart API

The Angular `IgxDataPieChart` has the following API members:

- `HighlightingBehavior`
- `OthersCategoryThreshold`
- `OthersCategoryType`
- `SelectionMode`
- `SelectionBehavior`

## Angular Pie Chart API

The Angular `IgxPieChart` has the following API members:

- `LegendItemBadgeTemplate`
- `LegendItemTemplate`
- `LegendLabelMemberPath`
- `OthersCategoryThreshold`
- `OthersCategoryType`
- `SelectionMode`

## Angular Sparkline Chart API

The Angular `IgxSparkline` has the following API members:

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
