---
title: Web Components Shape Chart | Data Visualization | Infragistics
_description: Infragistics' Web Components Shape Chart
_keywords: Web Components Charts, Shape Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "ScatterPolygonSeries", "ScatterPolylineSeries", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Charts
_tocName: Shape Chart
_premium: true
---

# Web Components Shape Charts

The Ignite UI for Web Components Shape Charts are a group of charts that take array of shapes (array or arrays of X/Y points) and render them as collection of polygons or polylines in Cartesian (x, y) coordinate system. They are often used highlight regions in scientific data or they can be used to plot diagrams, blueprints, or even floor plan of buildings.

## Web Components Scatter Polygon Chart

The Web Components Scatter Polygon Chart renders an array or array of arrays of polygons in the Cartesian (x, y) coordinate system using [`IgcScatterPolygonSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterpolygonseriescomponent.html) in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control. This chart can be used to filled shapes of plot diagrams, blueprints, or even the floor plan of buildings.

You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcScatterPolygonSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterpolygonseriescomponent.html), as shown in the example below:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Web Components Scatter Polyline Chart

The Web Components Scatter Polyline Chart renders an array or array of arrays of polylines in the Cartesian (x, y) coordinate system using [`IgcScatterPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterpolylineseriescomponent.html) in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control. This chart can be used to outlines of plot diagrams, blueprints, or even the floor plan of buildings. Also, it can visualizes complex relationships between a large amount of elements.

You can create this type of chart in the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) control by binding your data to a [`IgcScatterPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterpolylineseriescomponent.html), as shown in the example below:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Line Chart](line-chart.md)
- [Scatter Chart](scatter-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html)
- [`IgcScatterPolygonSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterpolygonseriescomponent.html)
- [`IgcScatterPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterpolylineseriescomponent.html)
- `ItemsSource`
- [`shapeMemberPath`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcshapeseriesbasecomponent.html#shapeMemberPath)
- [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html)
- [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html)
- `YAxisName`
- `XAxisName`
