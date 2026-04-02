---
title: Web Components Axis Gridlines | Data Visualization | Infragistics
_description: Infragistics' Web Components Axis Gridlines
_keywords: Web Components Axis, Gridlines, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "NumericXAxis", "NumericYAxis", "NumericAxisBase" ]
namespace: Infragistics.Controls.Charts
_tocName: Axis Gridlines
_premium: true
---

# Web Components Axis Gridlines

All Ignite UI for Web Components charts include built-in capability to modify appearance of axis lines as well as frequency of major/minor gridlines and tickmarks that are rendered on the X-Axis and Y-Axis.

> [!Note]
> the following examples can be applied to [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) as well as [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html) controls.

Axis major gridlines are long lines that extend horizontally along the Y-Axis or vertically along the X-Axis from locations of axis labels, and they render through the plot area of the chart. Axis minor gridlines are lines that render between axis major gridlines.

Axis tickmarks are displayed along all horizontal and vertical axes at each label at all major line positions of the Web Components chart.

## Web Components Axis Gridlines Example

This example shows how configure the axis gridline to display major and minor gridlines at specified intervals:

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Web Components Axis Gridlines Properties

Setting the axis interval property specifies how often major gridlines and axis labels are rendered on an axis. Similarly, the axis minor interval property specifies how frequent minor gridlines are rendered on an axis.

In order to display minor gridlines that correspond to minor interval, you need to set [`xAxisMinorStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisMinorStroke) and [`xAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisMinorStrokeThickness) properties on the axis. This is because minor gridlines do not have a default color or thickness and they will not be displayed without first assigning them.

You can customize how the gridlines are displayed in your Web Components chart by setting the following properties:

| Axis Visuals           | Type    | Property Names                                               | Description |
| -----------------------|---------|--------------------------------------------------------------|---------------- |
| Major Stroke Color     | string  | [`xAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisMajorStroke) <br> [`yAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisMajorStroke)                   | These properties set the color of axis major gridlines. |
| Minor Stroke Color     | string  | [`xAxisMinorStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisMinorStroke) <br> [`yAxisMinorStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisMinorStroke)                   | These properties set the color of axis minor gridlines. |
| Major Stroke Thickness | number  | [`xAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisMajorStrokeThickness) <br> [`yAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisMajorStrokeThickness) | These properties set the thickness in pixels of the axis major gridlines. |
| Minor Stroke Thickness | number  | [`xAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisMinorStrokeThickness) <br> [`yAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisMinorStrokeThickness) | These properties set the thickness in pixels of the axis minor gridlines. |
| Major Interval         | number  | [`xAxisInterval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#xAxisInterval) <br> [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html#yAxisInterval)                         | These properties set interval between axis major gridlines and labels. |
| Minor Interval         | number  | [`xAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#xAxisMinorInterval) <br> [`yAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html#yAxisMinorInterval)               | These properties set interval between axis minor gridlines, if used. |
| Axis Line Stroke Color | string  | [`xAxisStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisStroke) <br> [`yAxisStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisStroke)                   | These properties set the color of an axis line. |
| Axis Stroke Thickness  | number  | [`xAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisStrokeThickness) <br> [`yAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisStrokeThickness) | These properties set the thickness in pixels of an axis line. |

Regarding the Major and Minor Interval in the table above, it is important to note that the major interval for axis labels will also be set by this value, displaying one label at the point on the axis associated with the interval. The minor interval gridlines are always rendered between the major gridlines, and as such, the minor interval properties should always be set to something much smaller (usually 2-5 times smaller) than the value of the major Interval properties.

On category axes, the intervals are represented as an index between first item and last category item. Generally, this value should equal to 10-20% of total numbers of category items for the major Interval so that all axis labels fit on axis so that they are not clipped by other axis labels. For minor intervals, this is represented as a fraction of the major interval properties. This value generally should equal between 0.25 and 0.5.

On numeric axes, the interval values are represented as a double between axis minimum value and axis maximum value. By default, numeric axes will automatically calculate and find a nice and round interval based on axis minimum values and maximum value.

On date time axes, this value is represented as time span between axis minimum value and axis maximum value.

The following example demonstrates how to customize the gridlines by setting the properties above:

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


The axes of the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) also have the ability to place a dash array on the major and minor gridlines by utilizing the [`majorStrokeDashArray`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#majorStrokeDashArray) and [`minorStrokeDashArray`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#minorStrokeDashArray) properties, respectively. The actual axis line can be dashed as well by setting the [`strokeDashArray`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#strokeDashArray) property of the corresponding axis. These properties take an array of numbers that will describe the length of the dashes for the corresponding grid lines.

The following example demonstrates a [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) with the above dash array properties set:

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem(
                {
                    year: `2009`,
                    europe: 34,
                    china: 21,
                    america: 19
                }),
                new CountryRenewableElectricityItem(
                {
                    year: `2010`,
                    europe: 43,
                    china: 26,
                    america: 24
                }),
                new CountryRenewableElectricityItem(
                {
                    year: `2011`,
                    europe: 66,
                    china: 29,
                    america: 28
                }),
                // ... 9 more items
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Web Components Axis Tickmarks Example

Axis tick marks are enabled by setting the [`xAxisTickLength`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisTickLength) and [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisTickLength) properties to a value greater than 0. These properties specifies the length of the line segments forming the tick marks.

Tick marks are always extend from the axis line and point to the direction of the labels. Labels are offset by the value of the length of tickmarks to avoid overlapping. For example, with the [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisTickLength) property is set to 5, axis labels will be shifted left by that amount.

The following example demonstrates how to customize the tickmarks by setting the properties above:

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Web Components Axis Tickmarks Properties

You can customize how the axis tickmarks are displayed in our Web Components chats by setting the following properties:

| Axis Visuals           | Type    | Property Names                                             | Description |
| -----------------------|---------|------------------------------------------------------------|------------------------- |
| Tick Stroke Color      | string  | [`xAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisTickStroke) <br> [`yAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisTickStroke)                   | These properties set the color of the tickmarks. |
| Tick Stroke Thickness  | number  | [`xAxisTickStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisTickStrokeThickness) <br> [`yAxisTickStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisTickStrokeThickness) | These properties set the thickness of the axis tick marks. |
| Tick Stroke Length     | number  | [`xAxisTickLength`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisTickLength) <br> [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisTickLength)                   | These properties set the length of the axis tick marks. |

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Layout](chart-axis-layouts.md)
- [Axis Options](chart-axis-options.md)

## API References

The following is a list of API members mentioned in the above sections:

| [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html)                                     | [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) or [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html) |
| -------------------------------------------------- | ----------------------------------- |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ [`interval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericaxisbasecomponent.html#interval)             | [`xAxisInterval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#xAxisInterval) (Major Interval) |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ [`interval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericaxisbasecomponent.html#interval)             | [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#yAxisInterval) (Major Interval) |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ [`minorInterval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericaxisbasecomponent.html#minorInterval)        | [`xAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#xAxisMinorInterval)    |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ [`minorInterval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericaxisbasecomponent.html#minorInterval)        | [`yAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html#yAxisMinorInterval)    |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ [`majorStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#majorStroke)          | [`xAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisMajorStroke)    |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ [`majorStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#majorStroke)          | [`yAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisMajorStroke)    |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ [`majorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#majorStrokeThickness) | [`xAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisMajorStrokeThickness) |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ [`majorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#majorStrokeThickness) | [`yAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisMajorStrokeThickness) |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ [`minorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#minorStrokeThickness) | [`xAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisMinorStrokeThickness) |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ [`minorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#minorStrokeThickness) | [`yAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisMinorStrokeThickness) |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ [`strokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#strokeThickness)      | [`xAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisStrokeThickness)   |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ [`strokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#strokeThickness)      | [`yAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisStrokeThickness)   |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ [`stroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#stroke)               | [`xAxisStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisStroke) (Axis Line Color) |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ [`stroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#stroke)               | [`yAxisStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisStroke) (Axis Line Color) |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ [`tickLength`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#tickLength)           | [`xAxisTickLength`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisTickLength)    |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ [`tickLength`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#tickLength)           | [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisTickLength)    |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ [`tickStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#tickStroke)           | [`xAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisTickStroke)    |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ [`tickStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#tickStroke)           | [`yAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisTickStroke)    |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ [`strip`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#strip)                | [`xAxisStrip`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisStrip) (Space between Major Gridlines) |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ [`strip`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#strip)                | [`yAxisStrip`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisStrip) (Space between Major Gridlines) |
