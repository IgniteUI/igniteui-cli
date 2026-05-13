---
title: Web Components Axis Layouts | Data Visualization | Infragistics
_description: Infragistics' Web Components Axis Layouts
_keywords: Web Components Axis, Layouts, Location, Position, Share, Multiple, Crossing, Infragistics
_license: commercial
mentionedTypes: [ "DomainChart", "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "Axis", "AxisLabelSettings", "ScatterSplineSeries", "TimeXAxis" ]
_tocName: Axis Layouts
_premium: true
---

# Web Components Axis Layouts

All Ignite UI for Web Components charts include options to configure many axis layout options such as location as well as having the ability to share axis between series or have multiple axes in the same chart. These features are demonstrated in the examples given below.

> [!Note]
> the following examples can be applied to [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) as well as [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html) controls.

## Axis Locations Example

For all axes, you can specify axis location in relationship to chart plot area. The [`xAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisLabelLocation) property of the Web Components charts, allows you to position x-axis line and its labels on above or below plot area. Similarly, you can use the [`yAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisLabelLocation) property to position y-axis on left side or right side of plot area.

The following example depicts the amount of renewable electricity produced since 2009, represented by a [Line Chart](../types/line-chart.md). There is a drop-down that lets you configure the [`yAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisLabelLocation) so that you can visualize what the axes look like when the labels are placed on the left or right side on the inside or outside of the chart's plot area.

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

<!-- ## Axis Orientation Example

TODO add info/example of 4 charts with all possible combinations of XAxisInverted and YAxisInverted
e.g. https://www.infragistics.com/help/wpf/datachart-axis-orientation
 -->

## Axis Advanced Scenarios

For more advanced axis layout scenarios, you can use Web Components Data Chart to share axis, add multiple y-axis and/or x-axis in the same plot area, or even cross axes at specific values. The following examples show how to use these features of the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html).

### Axis Sharing Example

You can share and add multiple axes in the same plot area of the Web Components [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html). It a common scenario to use share [`IgcTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimexaxiscomponent.html) and add multiple [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) to plot many data sources that have wide range of values (e.g. stock prices and stock trade volumes).

The following example depicts a stock price and trade volume chart with a [Stock Chart](../types/stock-chart.md) and a [Column Chart](../types/column-chart.md) plotted. In this case, the Y-Axis on the left is used by the [Column Chart](../types/column-chart.md) and the Y-Axis on the right is used by the [Stock Chart](../types/stock-chart.md), while the X-Axis is shared between the two.

```typescript
export class SharedAxisFinancialData {

    public static create(items?: number): any[] {
        // initial values
        let v = 10000;
        let o = 500;
        let h = Math.round(o + (Math.random() * 5));
        let l = Math.round(o - (Math.random() * 5));
        let c = Math.round(l + (Math.random() * (h - l)));

        if (items === undefined) {
            items = 400;
        }

        const today = new Date();
        const end = new Date(today.getFullYear(), today.getMonth(), today.getDay());
        let time = this.addDays(end, -items);

        const data: any[] = [];
        for (let i = 0; i < items; i++) {
            const date = time.toDateString();
            const label = this.getShortDate(time, false);
            // adding new data item
            data.push({"Time": time, "Date": date, "Label": label, "Close": c, "Open": o, "High": h, "Low": l, "Volume": v});
            // generating new values
            const mod = Math.random() - 0.49;
            o = Math.round(o + (mod * 20));
            o = Math.max(o, 500);
            o = Math.min(o, 675);

            v = Math.round(v + (mod * 500));
            h = Math.round(o + (Math.random() * 5));
            l = Math.round(o - (Math.random() * 5));
            c = Math.round(l + (Math.random() * (h - l)));
            time = this.addDays(time, 1);
        }
        return data;
    }

    public static addDays(dt: Date, days: number): Date {
        return new Date(dt.getTime() + days * 24 * 60 * 60 * 1000);
    }

    public static getShortDate(dt: Date, showYear: boolean): string {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const ind = dt.getMonth();
        const day = dt.getDay() + 1;
        let label = months[ind] + " " + day;
        if (showYear) {
            label += " " +  dt.getFullYear();
        }
        return label;
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

### Axis Crossing Example

In addition to placing axes outside plot area, the Web Components [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) also provides options to position axes inside of plot area and make them cross at specific values. For example, you can create trigonometric chart by setting [`crossingAxis`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#crossingAxis) and [`crossingValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#crossingValue) properties on both x-axis and y-axis to render axis lines and axis labels such that they are crossing at (0, 0) origin point.

The following example shows a Sin and Cos wave represented by a [Scatter Spline Chart](../types/scatter-chart.md) with the X and Y axes crossing each other at the (0, 0) origin point.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Options](chart-axis-options.md)

## API References

The following is a list of API members mentioned in the above sections:
d in the above sections:

| [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html)                                         | [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html)                 |
| ------------------------------------------------------ | ------------------------------- |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ [`crossingAxis`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#crossingAxis)             | None                            |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ [`crossingValue`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#crossingValue)            | None                            |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ [`isInverted`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#isInverted)               | [`xAxisInverted`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisInverted)                 |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ [`isInverted`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#isInverted)               | [`yAxisInverted`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisInverted)                 |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ `LabelLocation`            | [`yAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisLabelLocation)            |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ `LabelLocation`            | [`xAxisLabelLocation`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisLabelLocation)            |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ `LabelHorizontalAlignment` | [`yAxisLabelHorizontalAlignment`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisLabelHorizontalAlignment) |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ `LabelVerticalAlignment`   | [`xAxisLabelVerticalAlignment`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisLabelVerticalAlignment)   |
| `Axes` ➔ [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) ➔ `LabelVisibility`          | [`yAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#yAxisLabelVisibility)          |
| `Axes` ➔ [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) ➔ `LabelVisibility`          | [`xAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcxychartcomponent.html#xAxisLabelVisibility)          |

<!-- TODO correct links in Transformer -->

<!--
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.location`            | `YAxisLabelLocation`            |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.location`            | `XAxisLabelLocation`            |
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.horizontalAlignment` | `YAxisLabelHorizontalAlignment` |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.verticalAlignment`   | `XAxisLabelVerticalAlignment`   |
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.visibility`          | `YAxisLabelVisibility`          |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.visibility`          | `XAxisLabelVisibility`          | -->
