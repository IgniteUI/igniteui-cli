---
title: Web Components Axis Types | Data Visualization | Infragistics
_description: Infragistics' Web Components Axis Types
_keywords: Web Components Axis, Options, Title, Labels, Gap, Overlap, Range, Scale, Mode, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis"]
namespace: Infragistics.Controls.Charts
_tocName: Axis Types
_premium: true
---

# Web Components Axis Types

The Ignite UI for Web Components Category Chart uses only one [`IgcCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryxaxiscomponent.html) and one [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) type. Similarly, Ignite UI for Web Components Financial Chart uses only one [`IgcTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimexaxiscomponent.html) and one [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) types. However, the Ignite UI for Web Components Data Chart provides support for multiple axis types that you can position on any side of the chart by setting [axis location](chart-axis-layouts.md#axis-locations-example) or even inside of the chart by using [axis crossing](chart-axis-layouts.md#axis-crossing-example) properties. This topic goes over each one, which axes and series are compatible with each other, and some specific properties to the unique axes.

## Cartesian Axes

The [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) with Cartesian Axes, allows you to plot data in horizontal (X-axis) and vertical (X-axis) direction with 3 types of X-Axis
([`IgcCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryxaxiscomponent.html), [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html), and [`IgcTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimexaxiscomponent.html)) and 2 types of Y-Axis ([`IgcCategoryYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryyaxiscomponent.html) and [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html)).

### Category X-Axis

The [`IgcCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryxaxiscomponent.html) treats its data as a sequence of categorical data items. It can display almost any type of data including strings and numbers. If you are plotting numbers on this axis, it is important to keep in mind that this axis is a discrete axis and not continuous. This means that each categorical data item will be placed equidistant from the one before it. The items will also be plotted in the order that they appear in the axis' data source.

The [`IgcCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryxaxiscomponent.html) requires you to provide a `DataSource` and a [`label`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#label) in order to plot data with it. It is generally used with the [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) to plot the following type of series:

| Category Series  | Stacked Series | Financial Series |
|------------------|----------------|--------------------|
| - [`IgcAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcareaseriescomponent.html) <br> - [`IgcColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccolumnseriescomponent.html) <br> - [`IgcLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igclineseriescomponent.html) <br> - [`IgcPointSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcpointseriescomponent.html)  <br> - [`IgcSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcsplineseriescomponent.html) <br>  - [`IgcSplineAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcsplineareaseriescomponent.html) <br> - [`IgcStepLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcsteplineseriescomponent.html) <br> - [`IgcStepAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstepareaseriescomponent.html) <br> - [`IgcRangeAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcrangeareaseriescomponent.html) <br> - [`IgcRangeColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcrangecolumnseriescomponent.html) <br> - [`IgcWaterfallSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcwaterfallseriescomponent.html) | - [`IgcStackedAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedareaseriescomponent.html) <br> - [`IgcStackedColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedcolumnseriescomponent.html) <br> - [`IgcStackedLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedlineseriescomponent.html) <br> - [`IgcStackedSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedsplineseriescomponent.html) <br> - [`IgcStacked100AreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100areaseriescomponent.html) <br> - [`IgcStacked100ColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100columnseriescomponent.html) <br> - [`IgcStacked100LineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100lineseriescomponent.html) <br> - [`IgcStacked100SplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100splineseriescomponent.html) <br> <br> <br> <br> | - [`IgcFinancialPriceSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialpriceseriescomponent.html) <br> - [`IgcBollingerBandsOverlayComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcbollingerbandsoverlaycomponent.html) <br> - [`IgcForceIndexIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcforceindexindicatorcomponent.html) <br> - [`IgcMedianPriceIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcmedianpriceindicatorcomponent.html) <br> - [`IgcMassIndexIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcmassindexindicatorcomponent.html)  <br> - [`IgcRelativeStrengthIndexIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcrelativestrengthindexindicatorcomponent.html) <br> - [`IgcStandardDeviationIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstandarddeviationindicatorcomponent.html) <br> - [`IgcTypicalPriceIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctypicalpriceindicatorcomponent.html) <br> <br> <br> <br> |

The following example demonstrates usage of the [`IgcCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryxaxiscomponent.html) type:

```typescript
export class ContinentsBirthRateItem {
    public constructor(init: Partial<ContinentsBirthRateItem>) {
        Object.assign(this, init);
    }

    public Year: string;
    public Asia: number;
    public Africa: number;
    public Europe: number;
    public NorthAmerica: number;
    public SouthAmerica: number;
    public Oceania: number;

}
export class ContinentsBirthRate extends Array<ContinentsBirthRateItem> {
    public constructor(items: Array<ContinentsBirthRateItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new ContinentsBirthRateItem({ Year: `1950`, Asia: 62, Africa: 13, Europe: 10, NorthAmerica: 4, SouthAmerica: 8, Oceania: 1 }),
                new ContinentsBirthRateItem({ Year: `1960`, Asia: 68, Africa: 12, Europe: 15, NorthAmerica: 4, SouthAmerica: 9, Oceania: 2 }),
                new ContinentsBirthRateItem({ Year: `1970`, Asia: 80, Africa: 17, Europe: 11, NorthAmerica: 3, SouthAmerica: 9, Oceania: 1 }),
                // ... 5 more items
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

### Category Y-Axis

The [`IgcCategoryYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryyaxiscomponent.html) works very similarly to the [`IgcCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryxaxiscomponent.html) described above, but it is placed vertically rather than horizontally. Also, this axis requires you to provide a `DataSource` and a [`label`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcaxiscomponent.html#label) in order to plot data with it. The [`IgcCategoryYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryyaxiscomponent.html) is generally used with the [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) to plot the following type of series:

- [`IgcBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcbarseriescomponent.html)
- [`IgcStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedbarseriescomponent.html)
- [`IgcStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100barseriescomponent.html)

The following example demonstrates usage of the [`IgcCategoryYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryyaxiscomponent.html) type:

```typescript
export class HighestGrossingMoviesItem {
    public constructor(init: Partial<HighestGrossingMoviesItem>) {
        Object.assign(this, init);
    }

    public franchise: string;
    public totalRevenue: number;
    public highestGrossing: number;

}
export class HighestGrossingMovies extends Array<HighestGrossingMoviesItem> {
    public constructor(items: Array<HighestGrossingMoviesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new HighestGrossingMoviesItem({ franchise: `Marvel Universe`, totalRevenue: 22.55, highestGrossing: 2.8 }),
                new HighestGrossingMoviesItem({ franchise: `Star Wars`, totalRevenue: 10.32, highestGrossing: 2.07 }),
                new HighestGrossingMoviesItem({ franchise: `Harry Potter`, totalRevenue: 9.19, highestGrossing: 1.34 }),
                // ... 3 more items
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

### Numeric X-Axis

The [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) treats its data as continuously varying numerical data items. Labels on this axis are placed horizontally along the X-Axis. The location of the [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) labels depends on the `XMemberPath` property of the various [Scatter Series](../types/scatter-chart.md) that it supports if combined with a [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html). Alternatively, if combined with the [`IgcCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryxaxiscomponent.html), these labels will be placed corresponding to the `ValueMemberPath` of the [`IgcBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcbarseriescomponent.html), [`IgcStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedbarseriescomponent.html), and [`IgcStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100barseriescomponent.html).

The [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html) is compatible with the following type of series:

- [`IgcBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcbarseriescomponent.html)
- [`IgcBubbleSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcbubbleseriescomponent.html)
- [`IgcHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igchighdensityscatterseriescomponent.html)
- [`IgcScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterseriescomponent.html)
- [`IgcScatterLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterlineseriescomponent.html)
- [`IgcScatterSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscattersplineseriescomponent.html)
- [`IgcScatterAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterareaseriescomponent.html)
- [`IgcScatterContourSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscattercontourseriescomponent.html)
- [`IgcScatterPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterpolylineseriescomponent.html)
- [`IgcScatterPolygonSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterpolygonseriescomponent.html)
- [`IgcStackedBarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedbarseriescomponent.html)
- [`IgcStacked100BarSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100barseriescomponent.html)

The following example demonstrates usage of the [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html):

```typescript
export class SampleDensityData {

    public static create(): any[] {
        const amount = 25000;
        let data: any[] = [];
        this.generate(data, amount / 2, 0, 0, 75000, 20000);
        this.generate(data, amount / 4, 0, 0, 100000, 25000);
        this.generate(data, amount / 8, 0, 0, 150000, 30000);
        this.generate(data, amount / 8, 0, 0, 200000, 75000);

        return data;
    }

    public static generate(data: any[], count: number,
        centerX: number, centerY: number,
        spreadX: number, spreadY: number): any[] {

        // const data: any[] = [];
        for (let i = 0; i <= count; i++)
        {
            let rangeX = Math.random() * spreadX;
            let rangeY = Math.random() * spreadY;
            const flip = 1;
            const prop = Math.random();
            if (prop < .25) {
                rangeX *= flip;
                rangeY *= flip;
            }
            else if (prop >= .25 && prop < .5) {
                rangeX *= -flip;
                rangeY *= flip;
            }
            else if (prop >= .5 && prop < .75) {
                rangeX *= flip;
                rangeY *= -flip;
            }
            else {
                rangeX *= -flip;
                rangeY *= -flip;
            }
            const dispersionX = Math.random() + 0.12;
            const dispersionY = Math.random() + 0.12;
            const x = Math.round(centerX + (rangeX * dispersionX));
            const y = Math.round(centerY + (rangeY * dispersionY));
            data.push({ "X": x, "Y": y });
        }
        return data;
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Numeric Y-Axis

The [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) treats its data as continuously varying numerical data items. Labels on this axis are placed vertically along the Y-Axis. The location of the [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) labels depends on the `YMemberPath` property of the various [ScatterSeries](../types/scatter-chart.md) that is supports if combined with a [`IgcNumericXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericxaxiscomponent.html). Alternatively, if combined with the [`IgcCategoryYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryyaxiscomponent.html), these labels will be placed corresponding to the `ValueMemberPath` of the category or stacked series mentioned in the table above. If you are using one of the financial series, they will be placed corresponding to the Open/High/Low/Close paths and the series type that you are using.

The [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html) is compatible with the following type of series:

| Category Series  | Stacked Series | Financial Series | Scatter Series |
|------------------|----------------|------------------|----------------|
| - [`IgcAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcareaseriescomponent.html) <br> - [`IgcColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccolumnseriescomponent.html) <br> - [`IgcLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igclineseriescomponent.html) <br> - [`IgcPointSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcpointseriescomponent.html)  <br> - [`IgcSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcsplineseriescomponent.html) <br>  - [`IgcSplineAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcsplineareaseriescomponent.html) <br> - [`IgcStepLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcsteplineseriescomponent.html) <br> - [`IgcStepAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstepareaseriescomponent.html) <br> - [`IgcRangeAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcrangeareaseriescomponent.html) <br> - [`IgcRangeColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcrangecolumnseriescomponent.html) <br> - [`IgcWaterfallSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcwaterfallseriescomponent.html) <br> | - [`IgcStackedAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedareaseriescomponent.html) <br> - [`IgcStackedColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedcolumnseriescomponent.html) <br> - [`IgcStackedLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedlineseriescomponent.html) <br> - [`IgcStackedSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstackedsplineseriescomponent.html) <br> - [`IgcStacked100AreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100areaseriescomponent.html) <br> - [`IgcStacked100ColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100columnseriescomponent.html) <br> - [`IgcStacked100LineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100lineseriescomponent.html) <br> - [`IgcStacked100SplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstacked100splineseriescomponent.html) <br> | - [`IgcFinancialPriceSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialpriceseriescomponent.html) <br> - [`IgcBollingerBandsOverlayComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcbollingerbandsoverlaycomponent.html) <br> - [`IgcForceIndexIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcforceindexindicatorcomponent.html) <br> - [`IgcMedianPriceIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcmedianpriceindicatorcomponent.html) <br> - [`IgcMassIndexIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcmassindexindicatorcomponent.html)  <br> - [`IgcRelativeStrengthIndexIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcrelativestrengthindexindicatorcomponent.html) <br> - [`IgcStandardDeviationIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcstandarddeviationindicatorcomponent.html) <br> - [`IgcTypicalPriceIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctypicalpriceindicatorcomponent.html) <br> | - [`IgcBubbleSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcbubbleseriescomponent.html) <br> - [`IgcHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igchighdensityscatterseriescomponent.html) <br> - [`IgcScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterseriescomponent.html) <br>  - [`IgcScatterLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterlineseriescomponent.html) <br> - [`IgcScatterSplineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscattersplineseriescomponent.html) <br> - [`IgcScatterAreaSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterareaseriescomponent.html) <br> - [`IgcScatterContourSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscattercontourseriescomponent.html) <br> - [`IgcScatterPolylineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterpolylineseriescomponent.html)  <br> - [`IgcScatterPolygonSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcscatterpolygonseriescomponent.html)  <br> |

The following example demonstrates usage of the [`IgcNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericyaxiscomponent.html):

```typescript
export class HealthDataForFranceItem {
    public constructor(init: Partial<HealthDataForFranceItem>) {
        Object.assign(this, init);
    }

    public year: number;
    public healthExpense: number;
    public lifeExpectancy: number;
    public name: string;

}
export class HealthDataForFrance extends Array<HealthDataForFranceItem> {
    public constructor(items: Array<HealthDataForFranceItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new HealthDataForFranceItem({ year: 1985, healthExpense: 2025.98, lifeExpectancy: 75.92, name: `Norway` }),
                new HealthDataForFranceItem({ year: 1986, healthExpense: 2075.21, lifeExpectancy: 76.24, name: `Norway` }),
                new HealthDataForFranceItem({ year: 1987, healthExpense: 2140.51, lifeExpectancy: 76.08, name: `Norway` }),
                // ... 28 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class HealthDataForGermanyItem {
    public constructor(init: Partial<HealthDataForGermanyItem>) {
        Object.assign(this, init);
    }

    public year: number;
    public healthExpense: number;
    public lifeExpectancy: number;
    public name: string;

}
export class HealthDataForGermany extends Array<HealthDataForGermanyItem> {
    public constructor(items: Array<HealthDataForGermanyItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new HealthDataForGermanyItem({ year: 1985, healthExpense: 2579.64, lifeExpectancy: 74.05, name: `Germany` }),
                new HealthDataForGermanyItem({ year: 1986, healthExpense: 2603.94, lifeExpectancy: 74.31, name: `Germany` }),
                new HealthDataForGermanyItem({ year: 1987, healthExpense: 2668.49, lifeExpectancy: 74.56, name: `Germany` }),
                // ... 27 more items
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

### Time X Axis

The [`IgcTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimexaxiscomponent.html) treats its data as a sequence of data items, sorted by date. Labels on this axis type are dates and can be formatted and arranged according to date intervals. The date range of this axis is determined by the date values in a data column that is mapped using its `DateTimeMemberPath`. This, along with a `DataSource` is required to plot data with this axis type.

The [`IgcTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimexaxiscomponent.html) is the X-Axis type in the [`IgcFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinancialchartcomponent.html) component.

#### Breaks in Time X Axis

The [`IgcTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimexaxiscomponent.html) has the option to exclude intervals of data by using [`breaks`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimexaxiscomponent.html#breaks). As a result, the labels and plotted data will not appear at the excluded interval. For example, working/non-working days, holidays, and/or weekends. An instance of [`IgcTimeAxisBreakComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisbreakcomponent.html) can be added to the `Breaks` collection of the axis and configured by using a unique [`start`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisbreakcomponent.html#start), [`end`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisbreakcomponent.html#end) and [`interval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisbreakcomponent.html#interval).

#### Formatting in Time X Axis

The [`IgcTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimexaxiscomponent.html) has the [`labelFormats`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimexaxiscomponent.html#labelFormats) property, which represents a collection of [`IgcTimeAxisLabelFormatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxislabelformatcomponent.html) objects. Each [`IgcTimeAxisLabelFormatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxislabelformatcomponent.html) added to the collection is responsible for assigning a unique [`format`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxislabelformatcomponent.html#format) and [`range`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxislabelformatcomponent.html#range). This can be especially useful for drilling down data from years to milliseconds and adjusting the labels depending on the range of time shown by the chart.

The [`format`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxislabelformatcomponent.html#format) property of the [`IgcTimeAxisLabelFormatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxislabelformatcomponent.html) specifies what format to use for a particular visible range. The [`range`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxislabelformatcomponent.html#range) property of the [`IgcTimeAxisLabelFormatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxislabelformatcomponent.html) specifies the visible range at which the axis label formats will switch to a different format. For example, if you have two [`IgcTimeAxisLabelFormatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxislabelformatcomponent.html) elements with a range set to 10 days and another set to 5 hours, then as soon as the visible range of the axis becomes less than 10 days, it will switch to 5-hour format.

#### Intervals in Time X Axis

The [`IgcTimeXAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimexaxiscomponent.html) replaces the conventional [`interval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericaxisbasecomponent.html#interval) property of the category and numeric axes with an [`intervals`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimexaxiscomponent.html#intervals) collection of type [`IgcTimeAxisIntervalComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisintervalcomponent.html). Each [`IgcTimeAxisIntervalComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisintervalcomponent.html) added to the collection is responsible for assigning a unique [`interval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisintervalcomponent.html#interval), [`range`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisintervalcomponent.html#range) and [`intervalType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisintervalcomponent.html#intervalType). This can be especially useful for drilling down data from years to milliseconds to provide unique spacing between labels depending on the range of time shown by the chart. A description of these properties is below:

- [`interval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisintervalcomponent.html#interval): This specifies the interval to use. This is tied to the [`intervalType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisintervalcomponent.html#intervalType) property. For example, if the [`intervalType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisintervalcomponent.html#intervalType) is set to `Days`, then the numeric value specified in [`interval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisintervalcomponent.html#interval) will be in days.
- [`range`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisintervalcomponent.html#range): This specifies the visible range at which the axis interval will switch to a different interval. For example, if you have two TimeAxisInterval with a range set to 10 days and another set to 5 hours, as soon as the visible range in the axis becomes less than 10 days it will switch to the interval whose range is 5 hours.
- [`intervalType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisintervalcomponent.html#intervalType): This specifies the unit of time for the [`interval`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igctimeaxisintervalcomponent.html#interval) property.

## Polar Axes

The [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) with Polar Axes, allows you to plot data outwards (radius axis) from center of the chart and around (angle axis) of center of the chart.

### Category Angle Axis

The [`IgcCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryangleaxiscomponent.html) treats its data as a sequence of category data items. The labels on this axis are placed along the edge of a circle according to their position in that sequence. This type of axis can display almost any type of data including strings and numbers.

The [`IgcCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryangleaxiscomponent.html) is generally used with the [`IgcNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericradiusaxiscomponent.html) to plot [Radial Series](../types/radial-chart.md).

The following example demonstrates usage of the [`IgcCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryangleaxiscomponent.html) type:

```typescript
export class FootballPlayerStatsItem {
    public constructor(init: Partial<FootballPlayerStatsItem>) {
        Object.assign(this, init);
    }

    public attribute: string;
    public ronaldo: number;
    public messi: number;

}
export class FootballPlayerStats extends Array<FootballPlayerStatsItem> {
    public constructor(items: Array<FootballPlayerStatsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new FootballPlayerStatsItem({ attribute: `Dribbling`, ronaldo: 8, messi: 10 }),
                new FootballPlayerStatsItem({ attribute: `Passing`, ronaldo: 8, messi: 10 }),
                new FootballPlayerStatsItem({ attribute: `Finishing`, ronaldo: 10, messi: 10 }),
                // ... 5 more items
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

### Proportional Category Angle Axis

The [`IgcProportionalCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcproportionalcategoryangleaxiscomponent.html) treats its data as a sequence of category data items. The labels on this axis are placed along the edge of a circle according to their position in that sequence. This type of axis can display almost any type of data including strings and numbers.

The [`IgcProportionalCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcproportionalcategoryangleaxiscomponent.html) is generally used with the [`IgcNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericradiusaxiscomponent.html) to plot a pie chart eg. [Radial Series](../types/radial-chart.md).

The following example demonstrates usage of the [`IgcProportionalCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcproportionalcategoryangleaxiscomponent.html) type:



### Numeric Angle Axis

The [`IgcNumericAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericangleaxiscomponent.html) treats its data as continuously varying numerical data items. The labels on this axis area placed along a radius line starting from the center of the circular plot. The location of the labels on the [`IgcNumericAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericangleaxiscomponent.html) varies according to the value in the data column mapped using the `RadiusMemberPath` property of the [Polar Series](../types/polar-chart.md) object or the `ValueMemberPath` property of the [Radial Series](../types/radial-chart.md) object.

The The [`IgcNumericAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericangleaxiscomponent.html) can be used with either the [`IgcCategoryAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategoryangleaxiscomponent.html) to plot [Radial Series](../types/radial-chart.md) or with the [`IgcNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericradiusaxiscomponent.html) to plot [Polar Series](../types/polar-chart.md) respectively.

The following example demonstrates usage of the [`IgcNumericAngleAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericangleaxiscomponent.html) type:

```typescript
export class BoatSailingDataItem {
    public constructor(init: Partial<BoatSailingDataItem>) {
        Object.assign(this, init);
    }

    public direction: number;
    public boatSpeed: number;
    public windSpeed: number;

}
export class BoatSailingData extends Array<BoatSailingDataItem> {
    public constructor(items: Array<BoatSailingDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new BoatSailingDataItem({ direction: 0, boatSpeed: 70, windSpeed: 90 }),
                new BoatSailingDataItem({ direction: 45, boatSpeed: 35, windSpeed: 65 }),
                new BoatSailingDataItem({ direction: 90, boatSpeed: 25, windSpeed: 45 }),
                // ... 6 more items
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

### Numeric Radius Axis

The [`IgcNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericradiusaxiscomponent.html) treats the data as continuously varying numerical data items. The labels on this axis are placed around the circular plot. The location of the labels varies according to the value in a data column mapped using the `AngleMemberPath` property of the corresponding polar series.

The [`IgcNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericradiusaxiscomponent.html) can be used with the [`IgcNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericradiusaxiscomponent.html) to plot [Polar Series](../types/polar-chart.md).

The following example demonstrates usage of the [`IgcNumericRadiusAxisComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcnumericradiusaxiscomponent.html) type:

```typescript
export class BoatSailingDataItem {
    public constructor(init: Partial<BoatSailingDataItem>) {
        Object.assign(this, init);
    }

    public direction: number;
    public boatSpeed: number;
    public windSpeed: number;

}
export class BoatSailingData extends Array<BoatSailingDataItem> {
    public constructor(items: Array<BoatSailingDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new BoatSailingDataItem({ direction: 0, boatSpeed: 70, windSpeed: 90 }),
                new BoatSailingDataItem({ direction: 45, boatSpeed: 35, windSpeed: 65 }),
                new BoatSailingDataItem({ direction: 90, boatSpeed: 25, windSpeed: 45 }),
                // ... 6 more items
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

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Layouts](chart-axis-layouts.md)
- [Axis Options](chart-axis-options.md)
