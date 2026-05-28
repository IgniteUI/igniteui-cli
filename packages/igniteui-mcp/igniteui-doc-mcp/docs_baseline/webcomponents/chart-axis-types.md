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

The Ignite UI for Web Components Category Chart uses only one [`IgcCategoryXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent) and one [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) type. Similarly, Ignite UI for Web Components Financial Chart uses only one [`IgcTimeXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeXAxisComponent) and one [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) types. However, the Ignite UI for Web Components Data Chart provides support for multiple axis types that you can position on any side of the chart by setting [axis location](chart-axis-layouts.md#axis-locations-example) or even inside of the chart by using [axis crossing](chart-axis-layouts.md#axis-crossing-example) properties. This topic goes over each one, which axes and series are compatible with each other, and some specific properties to the unique axes.

## Cartesian Axes

The [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) with Cartesian Axes, allows you to plot data in horizontal (X-axis) and vertical (X-axis) direction with 3 types of X-Axis
([`IgcCategoryXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent), [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent), and [`IgcTimeXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeXAxisComponent)) and 2 types of Y-Axis ([`IgcCategoryYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryYAxisComponent) and [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent)).

### Category X-Axis

The [`IgcCategoryXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent) treats its data as a sequence of categorical data items. It can display almost any type of data including strings and numbers. If you are plotting numbers on this axis, it is important to keep in mind that this axis is a discrete axis and not continuous. This means that each categorical data item will be placed equidistant from the one before it. The items will also be plotted in the order that they appear in the axis' data source.

The [`IgcCategoryXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent) requires you to provide a `DataSource` and a [`label`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent&member=label) in order to plot data with it. It is generally used with the [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) to plot the following type of series:

| Category Series  | Stacked Series | Financial Series |
|------------------|----------------|--------------------|
| - [`IgcAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcAreaSeriesComponent) <br> - [`IgcColumnSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnSeriesComponent) <br> - [`IgcLineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcLineSeriesComponent) <br> - [`IgcPointSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcPointSeriesComponent)  <br> - [`IgcSplineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcSplineSeriesComponent) <br>  - [`IgcSplineAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcSplineAreaSeriesComponent) <br> - [`IgcStepLineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStepLineSeriesComponent) <br> - [`IgcStepAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStepAreaSeriesComponent) <br> - [`IgcRangeAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcRangeAreaSeriesComponent) <br> - [`IgcRangeColumnSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcRangeColumnSeriesComponent) <br> - [`IgcWaterfallSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcWaterfallSeriesComponent) | - [`IgcStackedAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStackedAreaSeriesComponent) <br> - [`IgcStackedColumnSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStackedColumnSeriesComponent) <br> - [`IgcStackedLineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStackedLineSeriesComponent) <br> - [`IgcStackedSplineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStackedSplineSeriesComponent) <br> - [`IgcStacked100AreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStacked100AreaSeriesComponent) <br> - [`IgcStacked100ColumnSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStacked100ColumnSeriesComponent) <br> - [`IgcStacked100LineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStacked100LineSeriesComponent) <br> - [`IgcStacked100SplineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStacked100SplineSeriesComponent) <br> <br> <br> <br> | - [`IgcFinancialPriceSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialPriceSeriesComponent) <br> - [`IgcBollingerBandsOverlayComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBollingerBandsOverlayComponent) <br> - [`IgcForceIndexIndicatorComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcForceIndexIndicatorComponent) <br> - [`IgcMedianPriceIndicatorComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcMedianPriceIndicatorComponent) <br> - [`IgcMassIndexIndicatorComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcMassIndexIndicatorComponent)  <br> - [`IgcRelativeStrengthIndexIndicatorComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcRelativeStrengthIndexIndicatorComponent) <br> - [`IgcStandardDeviationIndicatorComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStandardDeviationIndicatorComponent) <br> - [`IgcTypicalPriceIndicatorComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTypicalPriceIndicatorComponent) <br> <br> <br> <br> |

The following example demonstrates usage of the [`IgcCategoryXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent) type:

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

The [`IgcCategoryYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryYAxisComponent) works very similarly to the [`IgcCategoryXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent) described above, but it is placed vertically rather than horizontally. Also, this axis requires you to provide a `DataSource` and a [`label`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent&member=label) in order to plot data with it. The [`IgcCategoryYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryYAxisComponent) is generally used with the [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) to plot the following type of series:

- [`IgcBarSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBarSeriesComponent)
- [`IgcStackedBarSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStackedBarSeriesComponent)
- [`IgcStacked100BarSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStacked100BarSeriesComponent)

The following example demonstrates usage of the [`IgcCategoryYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryYAxisComponent) type:

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

The [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) treats its data as continuously varying numerical data items. Labels on this axis are placed horizontally along the X-Axis. The location of the [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) labels depends on the `XMemberPath` property of the various [Scatter Series](../types/scatter-chart.md) that it supports if combined with a [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent). Alternatively, if combined with the [`IgcCategoryXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent), these labels will be placed corresponding to the `ValueMemberPath` of the [`IgcBarSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBarSeriesComponent), [`IgcStackedBarSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStackedBarSeriesComponent), and [`IgcStacked100BarSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStacked100BarSeriesComponent).

The [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) is compatible with the following type of series:

- [`IgcBarSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBarSeriesComponent)
- [`IgcBubbleSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent)
- [`IgcHighDensityScatterSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHighDensityScatterSeriesComponent)
- [`IgcScatterSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterSeriesComponent)
- [`IgcScatterLineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterLineSeriesComponent)
- [`IgcScatterSplineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterSplineSeriesComponent)
- [`IgcScatterAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterAreaSeriesComponent)
- [`IgcScatterContourSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterContourSeriesComponent)
- [`IgcScatterPolylineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterPolylineSeriesComponent)
- [`IgcScatterPolygonSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterPolygonSeriesComponent)
- [`IgcStackedBarSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStackedBarSeriesComponent)
- [`IgcStacked100BarSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStacked100BarSeriesComponent)

The following example demonstrates usage of the [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent):

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

The [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) treats its data as continuously varying numerical data items. Labels on this axis are placed vertically along the Y-Axis. The location of the [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) labels depends on the `YMemberPath` property of the various [ScatterSeries](../types/scatter-chart.md) that is supports if combined with a [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent). Alternatively, if combined with the [`IgcCategoryYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryYAxisComponent), these labels will be placed corresponding to the `ValueMemberPath` of the category or stacked series mentioned in the table above. If you are using one of the financial series, they will be placed corresponding to the Open/High/Low/Close paths and the series type that you are using.

The [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) is compatible with the following type of series:

| Category Series  | Stacked Series | Financial Series | Scatter Series |
|------------------|----------------|------------------|----------------|
| - [`IgcAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcAreaSeriesComponent) <br> - [`IgcColumnSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcColumnSeriesComponent) <br> - [`IgcLineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcLineSeriesComponent) <br> - [`IgcPointSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcPointSeriesComponent)  <br> - [`IgcSplineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcSplineSeriesComponent) <br>  - [`IgcSplineAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcSplineAreaSeriesComponent) <br> - [`IgcStepLineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStepLineSeriesComponent) <br> - [`IgcStepAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStepAreaSeriesComponent) <br> - [`IgcRangeAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcRangeAreaSeriesComponent) <br> - [`IgcRangeColumnSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcRangeColumnSeriesComponent) <br> - [`IgcWaterfallSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcWaterfallSeriesComponent) <br> | - [`IgcStackedAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStackedAreaSeriesComponent) <br> - [`IgcStackedColumnSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStackedColumnSeriesComponent) <br> - [`IgcStackedLineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStackedLineSeriesComponent) <br> - [`IgcStackedSplineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStackedSplineSeriesComponent) <br> - [`IgcStacked100AreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStacked100AreaSeriesComponent) <br> - [`IgcStacked100ColumnSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStacked100ColumnSeriesComponent) <br> - [`IgcStacked100LineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStacked100LineSeriesComponent) <br> - [`IgcStacked100SplineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStacked100SplineSeriesComponent) <br> | - [`IgcFinancialPriceSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialPriceSeriesComponent) <br> - [`IgcBollingerBandsOverlayComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBollingerBandsOverlayComponent) <br> - [`IgcForceIndexIndicatorComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcForceIndexIndicatorComponent) <br> - [`IgcMedianPriceIndicatorComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcMedianPriceIndicatorComponent) <br> - [`IgcMassIndexIndicatorComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcMassIndexIndicatorComponent)  <br> - [`IgcRelativeStrengthIndexIndicatorComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcRelativeStrengthIndexIndicatorComponent) <br> - [`IgcStandardDeviationIndicatorComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcStandardDeviationIndicatorComponent) <br> - [`IgcTypicalPriceIndicatorComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTypicalPriceIndicatorComponent) <br> | - [`IgcBubbleSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcBubbleSeriesComponent) <br> - [`IgcHighDensityScatterSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcHighDensityScatterSeriesComponent) <br> - [`IgcScatterSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterSeriesComponent) <br>  - [`IgcScatterLineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterLineSeriesComponent) <br> - [`IgcScatterSplineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterSplineSeriesComponent) <br> - [`IgcScatterAreaSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterAreaSeriesComponent) <br> - [`IgcScatterContourSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterContourSeriesComponent) <br> - [`IgcScatterPolylineSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterPolylineSeriesComponent)  <br> - [`IgcScatterPolygonSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcScatterPolygonSeriesComponent)  <br> |

The following example demonstrates usage of the [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent):

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

The [`IgcTimeXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeXAxisComponent) treats its data as a sequence of data items, sorted by date. Labels on this axis type are dates and can be formatted and arranged according to date intervals. The date range of this axis is determined by the date values in a data column that is mapped using its `DateTimeMemberPath`. This, along with a `DataSource` is required to plot data with this axis type.

The [`IgcTimeXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeXAxisComponent) is the X-Axis type in the [`IgcFinancialChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) component.

#### Breaks in Time X Axis

The [`IgcTimeXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeXAxisComponent) has the option to exclude intervals of data by using [`breaks`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeXAxisComponent&member=breaks). As a result, the labels and plotted data will not appear at the excluded interval. For example, working/non-working days, holidays, and/or weekends. An instance of [`IgcTimeAxisBreakComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisBreakComponent) can be added to the `Breaks` collection of the axis and configured by using a unique [`start`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisBreakComponent&member=start), [`end`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisBreakComponent&member=end) and [`interval`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisBreakComponent&member=interval).

#### Formatting in Time X Axis

The [`IgcTimeXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeXAxisComponent) has the [`labelFormats`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeXAxisComponent&member=labelFormats) property, which represents a collection of [`IgcTimeAxisLabelFormatComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisLabelFormatComponent) objects. Each [`IgcTimeAxisLabelFormatComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisLabelFormatComponent) added to the collection is responsible for assigning a unique [`format`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisLabelFormatComponent&member=format) and [`range`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisLabelFormatComponent&member=range). This can be especially useful for drilling down data from years to milliseconds and adjusting the labels depending on the range of time shown by the chart.

The [`format`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisLabelFormatComponent&member=format) property of the [`IgcTimeAxisLabelFormatComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisLabelFormatComponent) specifies what format to use for a particular visible range. The [`range`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisLabelFormatComponent&member=range) property of the [`IgcTimeAxisLabelFormatComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisLabelFormatComponent) specifies the visible range at which the axis label formats will switch to a different format. For example, if you have two [`IgcTimeAxisLabelFormatComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisLabelFormatComponent) elements with a range set to 10 days and another set to 5 hours, then as soon as the visible range of the axis becomes less than 10 days, it will switch to 5-hour format.

#### Intervals in Time X Axis

The [`IgcTimeXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeXAxisComponent) replaces the conventional [`interval`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent&member=interval) property of the category and numeric axes with an [`intervals`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeXAxisComponent&member=intervals) collection of type [`IgcTimeAxisIntervalComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisIntervalComponent). Each [`IgcTimeAxisIntervalComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisIntervalComponent) added to the collection is responsible for assigning a unique [`interval`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisIntervalComponent&member=interval), [`range`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisIntervalComponent&member=range) and [`intervalType`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisIntervalComponent&member=intervalType). This can be especially useful for drilling down data from years to milliseconds to provide unique spacing between labels depending on the range of time shown by the chart. A description of these properties is below:

- [`interval`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisIntervalComponent&member=interval): This specifies the interval to use. This is tied to the [`intervalType`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisIntervalComponent&member=intervalType) property. For example, if the [`intervalType`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisIntervalComponent&member=intervalType) is set to `Days`, then the numeric value specified in [`interval`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisIntervalComponent&member=interval) will be in days.
- [`range`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisIntervalComponent&member=range): This specifies the visible range at which the axis interval will switch to a different interval. For example, if you have two TimeAxisInterval with a range set to 10 days and another set to 5 hours, as soon as the visible range in the axis becomes less than 10 days it will switch to the interval whose range is 5 hours.
- [`intervalType`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisIntervalComponent&member=intervalType): This specifies the unit of time for the [`interval`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeAxisIntervalComponent&member=interval) property.

## Polar Axes

The [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) with Polar Axes, allows you to plot data outwards (radius axis) from center of the chart and around (angle axis) of center of the chart.

### Category Angle Axis

The [`IgcCategoryAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryAngleAxisComponent) treats its data as a sequence of category data items. The labels on this axis are placed along the edge of a circle according to their position in that sequence. This type of axis can display almost any type of data including strings and numbers.

The [`IgcCategoryAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryAngleAxisComponent) is generally used with the [`IgcNumericRadiusAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericRadiusAxisComponent) to plot [Radial Series](../types/radial-chart.md).

The following example demonstrates usage of the [`IgcCategoryAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryAngleAxisComponent) type:

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

The [`IgcProportionalCategoryAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcProportionalCategoryAngleAxisComponent) treats its data as a sequence of category data items. The labels on this axis are placed along the edge of a circle according to their position in that sequence. This type of axis can display almost any type of data including strings and numbers.

The [`IgcProportionalCategoryAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcProportionalCategoryAngleAxisComponent) is generally used with the [`IgcNumericRadiusAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericRadiusAxisComponent) to plot a pie chart eg. [Radial Series](../types/radial-chart.md).

The following example demonstrates usage of the [`IgcProportionalCategoryAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcProportionalCategoryAngleAxisComponent) type:



### Numeric Angle Axis

The [`IgcNumericAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericAngleAxisComponent) treats its data as continuously varying numerical data items. The labels on this axis area placed along a radius line starting from the center of the circular plot. The location of the labels on the [`IgcNumericAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericAngleAxisComponent) varies according to the value in the data column mapped using the `RadiusMemberPath` property of the [Polar Series](../types/polar-chart.md) object or the `ValueMemberPath` property of the [Radial Series](../types/radial-chart.md) object.

The The [`IgcNumericAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericAngleAxisComponent) can be used with either the [`IgcCategoryAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryAngleAxisComponent) to plot [Radial Series](../types/radial-chart.md) or with the [`IgcNumericRadiusAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericRadiusAxisComponent) to plot [Polar Series](../types/polar-chart.md) respectively.

The following example demonstrates usage of the [`IgcNumericAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericAngleAxisComponent) type:

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

The [`IgcNumericRadiusAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericRadiusAxisComponent) treats the data as continuously varying numerical data items. The labels on this axis are placed around the circular plot. The location of the labels varies according to the value in a data column mapped using the `AngleMemberPath` property of the corresponding polar series.

The [`IgcNumericRadiusAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericRadiusAxisComponent) can be used with the [`IgcNumericRadiusAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericRadiusAxisComponent) to plot [Polar Series](../types/polar-chart.md).

The following example demonstrates usage of the [`IgcNumericRadiusAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericRadiusAxisComponent) type:

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
