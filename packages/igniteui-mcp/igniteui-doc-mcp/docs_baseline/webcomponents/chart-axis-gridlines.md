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
> the following examples can be applied to [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) as well as [`IgcFinancialChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) controls.

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

In order to display minor gridlines that correspond to minor interval, you need to set [`xAxisMinorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMinorStroke) and [`xAxisMinorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMinorStrokeThickness) properties on the axis. This is because minor gridlines do not have a default color or thickness and they will not be displayed without first assigning them.

You can customize how the gridlines are displayed in your Web Components chart by setting the following properties:

| Axis Visuals           | Type    | Property Names                                               | Description |
| -----------------------|---------|--------------------------------------------------------------|---------------- |
| Major Stroke Color     | string  | [`xAxisMajorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMajorStroke) <br> [`yAxisMajorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMajorStroke)                   | These properties set the color of axis major gridlines. |
| Minor Stroke Color     | string  | [`xAxisMinorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMinorStroke) <br> [`yAxisMinorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMinorStroke)                   | These properties set the color of axis minor gridlines. |
| Major Stroke Thickness | number  | [`xAxisMajorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMajorStrokeThickness) <br> [`yAxisMajorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMajorStrokeThickness) | These properties set the thickness in pixels of the axis major gridlines. |
| Minor Stroke Thickness | number  | [`xAxisMinorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMinorStrokeThickness) <br> [`yAxisMinorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMinorStrokeThickness) | These properties set the thickness in pixels of the axis minor gridlines. |
| Major Interval         | number  | [`xAxisInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisInterval) <br> [`yAxisInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent&member=yAxisInterval)                         | These properties set interval between axis major gridlines and labels. |
| Minor Interval         | number  | [`xAxisMinorInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMinorInterval) <br> [`yAxisMinorInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent&member=yAxisMinorInterval)               | These properties set interval between axis minor gridlines, if used. |
| Axis Line Stroke Color | string  | [`xAxisStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisStroke) <br> [`yAxisStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisStroke)                   | These properties set the color of an axis line. |
| Axis Stroke Thickness  | number  | [`xAxisStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisStrokeThickness) <br> [`yAxisStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisStrokeThickness) | These properties set the thickness in pixels of an axis line. |

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

The axes of the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) also have the ability to place a dash array on the major and minor gridlines by utilizing the [`majorStrokeDashArray`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=majorStrokeDashArray) and [`minorStrokeDashArray`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=minorStrokeDashArray) properties, respectively. The actual axis line can be dashed as well by setting the [`strokeDashArray`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=strokeDashArray) property of the corresponding axis. These properties take an array of numbers that will describe the length of the dashes for the corresponding grid lines.

The following example demonstrates a [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) with the above dash array properties set:

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

Axis tick marks are enabled by setting the [`xAxisTickLength`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisTickLength) and [`yAxisTickLength`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisTickLength) properties to a value greater than 0. These properties specifies the length of the line segments forming the tick marks.

Tick marks are always extend from the axis line and point to the direction of the labels. Labels are offset by the value of the length of tickmarks to avoid overlapping. For example, with the [`yAxisTickLength`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisTickLength) property is set to 5, axis labels will be shifted left by that amount.

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
| Tick Stroke Color      | string  | [`xAxisTickStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisTickStroke) <br> [`yAxisTickStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisTickStroke)                   | These properties set the color of the tickmarks. |
| Tick Stroke Thickness  | number  | [`xAxisTickStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisTickStrokeThickness) <br> [`yAxisTickStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisTickStrokeThickness) | These properties set the thickness of the axis tick marks. |
| Tick Stroke Length     | number  | [`xAxisTickLength`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisTickLength) <br> [`yAxisTickLength`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisTickLength)                   | These properties set the length of the axis tick marks. |

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Layout](chart-axis-layouts.md)
- [Axis Options](chart-axis-options.md)

## API References

The following is a list of API members mentioned in the above sections:

| [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)                                     | [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) or [`IgcFinancialChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) |
| -------------------------------------------------- | ----------------------------------- |
| `Axes` ➔ [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) ➔ [`interval`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=interval)             | [`xAxisInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisInterval) (Major Interval) |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`interval`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=interval)             | [`yAxisInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisInterval) (Major Interval) |
| `Axes` ➔ [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) ➔ [`minorInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=minorInterval)        | [`xAxisMinorInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMinorInterval)    |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`minorInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=minorInterval)        | [`yAxisMinorInterval`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMinorInterval)    |
| `Axes` ➔ [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) ➔ [`majorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=majorStroke)          | [`xAxisMajorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMajorStroke)    |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`majorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=majorStroke)          | [`yAxisMajorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMajorStroke)    |
| `Axes` ➔ [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) ➔ [`majorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=majorStrokeThickness) | [`xAxisMajorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMajorStrokeThickness) |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`majorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=majorStrokeThickness) | [`yAxisMajorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMajorStrokeThickness) |
| `Axes` ➔ [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) ➔ [`minorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=minorStrokeThickness) | [`xAxisMinorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMinorStrokeThickness) |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`minorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=minorStrokeThickness) | [`yAxisMinorStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMinorStrokeThickness) |
| `Axes` ➔ [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) ➔ [`strokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=strokeThickness)      | [`xAxisStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisStrokeThickness)   |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`strokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=strokeThickness)      | [`yAxisStrokeThickness`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisStrokeThickness)   |
| `Axes` ➔ [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) ➔ [`stroke`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=stroke)               | [`xAxisStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisStroke) (Axis Line Color) |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`stroke`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=stroke)               | [`yAxisStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisStroke) (Axis Line Color) |
| `Axes` ➔ [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) ➔ [`tickLength`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=tickLength)           | [`xAxisTickLength`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisTickLength)    |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`tickLength`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=tickLength)           | [`yAxisTickLength`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisTickLength)    |
| `Axes` ➔ [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) ➔ [`tickStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=tickStroke)           | [`xAxisTickStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisTickStroke)    |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`tickStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=tickStroke)           | [`yAxisTickStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisTickStroke)    |
| `Axes` ➔ [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) ➔ [`strip`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=strip)                | [`xAxisStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisStrip) (Space between Major Gridlines) |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`strip`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent&member=strip)                | [`yAxisStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisStrip) (Space between Major Gridlines) |
