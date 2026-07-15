---
title: Web Components Axis Options | Data Visualization | Infragistics
_description: Infragistics' Web Components Axis Options
_keywords: Web Components Axis, Options, Title, Labels, Gap, Overlap, Range, Scale, Mode, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis"]
namespace: Infragistics.Controls.Charts
_tocName: Axis Options
_premium: true
---

# Web Components Axis Options

In all Ignite UI for Web Components charts, the axes provide properties for visual configurations such as titles, labels, and ranges. These features are demonstrated in the examples provided below.

## Axis Titles Example

The axis titles feature of the Web Components charts, allows you to add contextual information to the your chart. You can customize the look and feel of the axis titles in many different ways such as applying different font styles, colors, margins, and alignments.

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

## Axis Labels Example

The Web Components Charts allows you full control over configuring, formatting, and styling the font of the labels displayed on an axis in your chart. You can change the rotation angle, margin, horizontal and vertical alignment, color, padding, and visibility of axis labels. The following example shows how to use these features of axes.

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

## Axis Labels Management & Formatting

The axes of the chart have the ability to perform an enhanced calculation regarding the amount of space available to the labels of the owning axis. This enhanced calculation allows the axis to optimize the amount of space given to it in order to display more labels for the given axis.

This enhanced calculation is something that you need to opt-in to, which you can do by setting the [`useEnhancedIntervalManagement`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent&member=useEnhancedIntervalManagement) property to true. Then, if you prefer to display as many labels as can fit in the dimensions of the axis without manually setting the [`interval`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent&member=interval) property of the axis, you can set the [`enhancedIntervalPreferMoreCategoryLabels`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent&member=enhancedIntervalPreferMoreCategoryLabels) property on the axis to true.

The chart also has the ability to consider auto-rotation of the labels if they will not fit in the allotted space as well as the ability to apply an automatic margin to the plot area to ensure the labels can fit. This is something that can be opted into initially by first setting the [`autoMarginAndAngleUpdateMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=autoMarginAndAngleUpdateMode) property on the chart to either `SizeChanging` or `SizeChangingAndZoom`. This will tell the chart when to re-evaluate the auto margin and angle applied to the labels, if desired.

After setting the [`autoMarginAndAngleUpdateMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=autoMarginAndAngleUpdateMode), you can set the [`shouldAutoExpandMarginForInitialLabels`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=shouldAutoExpandMarginForInitialLabels) property to true to opt into the automatic margin or set the [`shouldConsiderAutoRotationForInitialLabels`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=shouldConsiderAutoRotationForInitialLabels) property to true for the auto-rotation. You can also further customize the automatic margin that is applied by setting the [`autoExpandMarginExtraPadding`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=autoExpandMarginExtraPadding) and [`autoExpandMarginMaximumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=autoExpandMarginMaximumValue) to provide extra space or a maximum possible margin, respectively.

Custom label formats such as [`IgcNumberFormatSpecifier`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcnumberformatspecifier.html) and [`IgcDateTimeFormatSpecifier`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcdatetimeformatspecifier.html) can be added to each axis via the `XAxisLabelFormatSpecifier` and `YAxisLabelFormatSpecifier` collections. Commonly used for applying Intl.NumberFormat and Intl.DateTimeFormat language sensitive number, date and time formatting. In order for a custom format to be applied to the labels, the [`yAxisLabelFormat`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisLabelFormat) or [`xAxisLabelFormat`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisLabelFormat) need to be set to data item's property name on the [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent), eg. `{Date}`. For the [`IgcFinancialChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) the number is the context because it uses a numeric axis, therefore this needs to be set to `{0}`.

The following example formats the yAxis with a [`IgcNumberFormatSpecifier`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_core.igcnumberformatspecifier.html) to represent $USD prices for top box office movies in the United States.

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

<div class="divider--half"></div>

## Axis Range Example

In the Web Components charts, you can define a range minimum and range maximum value of a numeric or time axis. The range minimum is the lowest value of the axis and the range maximum is the highest value of the axis. These are set by setting the [`yAxisMinimumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMinimumValue) and [`yAxisMaximumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMaximumValue) options.

By default, charts will calculate the minimum and maximum values for the numeric and time axis range based on the lowest and highest corresponding value points in your data, but this automatic calculation may not be appropriate for your set of data points in all cases. For example, if your data has a minimum value of 850, you may want to set the [`yAxisMinimumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMinimumValue) to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same idea can be applied to the axis minimum value and the highest value of data points using the [`yAxisMaximumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMaximumValue) property.

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

## Axis Modes & Scale

In the [`IgcFinancialChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) and [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) controls, you can choose if your data is plotted on logarithmic scale along the y-axis when the [`yAxisIsLogarithmic`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisIsLogarithmic) property is set to true or on linear scale when this property is set to false (default value). With the [`yAxisLogarithmBase`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisLogarithmBase) property, you can change base of logarithmic scale from default value of 10 to other integer value.

The [`IgcFinancialChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) and control allows you to choose how your data is represented along the y-axis using [`yAxisMode`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent&member=yAxisMode) property that provides [`Numeric`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartYAxisMode&member=Numeric) and [`PercentChange`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartYAxisMode&member=PercentChange) modes. The [`Numeric`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartYAxisMode&member=Numeric) mode will plot data with the exact values while the [`PercentChange`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartYAxisMode&member=PercentChange) mode will display the data as percentage change relative to the first data point provided. The default value is [`Numeric`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartYAxisMode&member=Numeric) mode.

In addition to [`yAxisMode`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent&member=yAxisMode) property, the [`IgcFinancialChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent) control has [`xAxisMode`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent&member=xAxisMode) property that provides [`Time`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartXAxisMode&member=Time) and [`Ordinal`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartXAxisMode&member=Ordinal) modes for the x-axis. The [`Time`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartXAxisMode&member=Time) mode will render space along the x-axis for gaps in data (e.g. no stock trading on weekends or holidays). The [`Ordinal`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartXAxisMode&member=Ordinal) mode will collapse date areas where data does not exist. The default value is [`Ordinal`](mcp:get_api_reference?platform=webcomponents&component=FinancialChartXAxisMode&member=Ordinal) mode.

```typescript
export class StocksUtility {

    public static priceStart: number = 200;
    public static priceRange: number = 1;
    public static volumeRange: number = 1000;
    public static volumeStart: number = 20000000;

    public static getStocksFrom(dateEnd: Date, years: number): any {
        const dateStart: Date = this.addYears(dateEnd, -years);
        return this.getStocksBetween(dateStart, dateEnd, true);
    }

    public static getStocksItems(points: number, intervalMinutes?: number): any {

        if (intervalMinutes === undefined || intervalMinutes <= 0) {
            intervalMinutes = 60;
        }

        const today: Date = new Date();
        const year: number = today.getFullYear();
        const dateEnd: Date = new Date(year, 11, 1);
        const dateStart: Date = this.addHours(dateEnd, -points);
        return this.getStocksBetween(dateStart, dateEnd, false, intervalMinutes);
    }

    // generates stocks data for specified number of months, with each item separated by specified interval in minutes
    public static getStocksForMonths(rangeInMonths?: number, intervalMinutes?: number, stockName?: string): any {

        if (rangeInMonths === undefined) {
            rangeInMonths = 6;
        }

        const dateEnd: Date = new Date();
        const dateStart: Date = this.addMonths(dateEnd, -rangeInMonths);

        return this.getStocksBetween(dateStart, dateEnd, true, intervalMinutes, stockName);
    }

    public static getStocksBetween(dateStart: Date, dateEnd: Date, useRounding?:
        boolean, intervalMinutes?: number, stockName?: string): any {

        if (intervalMinutes === undefined || intervalMinutes <= 0) {
            intervalMinutes = 60;
        }

        let time: Date = this.addDays(dateStart, 0);
        let v: number = this.volumeStart;
        let o: number = this.priceStart;
        let h: number = o + (Math.random() * this.priceRange);
        let l: number = o - (Math.random() * this.priceRange);
        let c: number = l + (Math.random() * (h - l));

        const stock: any[] = [];
        while (time.getTime() < dateEnd.getTime()) {
            stock.push({ date: time, open: o, high: h, low: l, close: c, volume: v });

            o = c + ((Math.random() - 0.5) * this.priceRange);
            if (o < 0) {
                o = Math.abs(o) + 10;
            }
            h = o + (Math.random() * this.priceRange);
            l = o - (Math.random() * this.priceRange);
            c = l + (Math.random() * (h - l));
            v = v + ((Math.random() - 0.5) * this.volumeRange);
            if (v < 0) {
                v = Math.abs(v) + 10000;
            }

            if (useRounding === undefined || useRounding) {
                o = Math.round(o * 100) / 100;
                h = Math.round(h * 100) / 100;
                l = Math.round(l * 100) / 100;
                c = Math.round(c * 100) / 100;
                v = Math.round(v * 100) / 100;
            }
            time = this.addMinutes(time, intervalMinutes);
        }
        if (stockName === undefined) {
            stockName = "Stock Prices";
        }
        // setting data intent for Series Title
        (stock as any).__dataIntents = {
            close: ["SeriesTitle/" + stockName]
        };
        // console.log("start " + this.ToString(dateStart));
        // console.log("end " + this.ToString(dateEnd));
        console.log("stocks " + stock.length);
        return stock;
    }

    public static addMinutes(date: Date, minutes: number): Date {
        return new Date(date.getTime() + minutes * 60 * 1000);
    }

    public static addHours(date: Date, hours: number): Date {
        return this.addMinutes(date, hours * 60);
    }

    public static addDays(date: Date, days: number): Date {
        return this.addHours(date, days * 24);
    }

    public static addMonths(date: Date, months: number): Date {
        return this.addDays(date, 31 * months);
    }

    public static addYears(date: Date, years: number): Date {
        return new Date(date.getFullYear() + years, date.getMonth(), date.getDate());
    }

    public static toShortString(largeValue: number): string {
        let roundValue: number;

        if (largeValue >= 1000000) {
            roundValue = Math.round(largeValue / 100000) / 10;
            return roundValue + "M";
        }
        if (largeValue >= 1000) {
            roundValue = Math.round(largeValue / 100) / 10;
            return roundValue + "K";
        }

        roundValue = Math.round(largeValue);
        return roundValue + "";
    }

    public static getYear(date: Date): number {
        return date.getFullYear();
    }

    public static getQuarter(date: Date): number {
        return Math.round((date.getMonth() + 2) / 3);
    }

    public static getLastItem(array: any[]): any {
        if (array.length === 0) {
            return null;
        }
        return array[array.length - 1];
    }

    public static getNewItem(array: any[], interval?: number): any {
        const lastItem: any = this.getLastItem(array);

        if (interval === undefined || interval <= 0) {
            interval = 60;
        }

        const time: Date = this.addMinutes(lastItem.date, interval);
        let v: number = lastItem.volume;
        let o: number = lastItem.open;
        let h: number = lastItem.high;
        let l: number = lastItem.low;
        let c: number = lastItem.close;

        o = c + ((Math.random() - 0.5) * this.priceRange);
        if (o < 0) {
            o = Math.abs(o) + 2;
        }
        h = o + (Math.random() * this.priceRange);
        l = o - (Math.random() * this.priceRange);
        c = l + (Math.random() * (h - l));
        v = v + ((Math.random() - 0.5) * this.volumeRange);
        if (v < 0) {
            v = Math.abs(v) + 10000;
        }

        return { date: time, open: o, high: h, low: l, close: c, volume: v };
    }

    public static toString(date: Date): string {
        const months: string[] = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const index: number = date.getMonth();
        return months[index] + " " + date.getDay() + " " +  date.getFullYear();
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Axis Gap Example

The [`xAxisGap`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisGap) property of the Web Components charts, determines the amount of space between columns or bars of plotted series. This property accepts a numeric value between 0.0 and 1.0. The value represents a relative width of the gap out of the available number of pixels between the series. Setting this property to 0 would mean there is no gap rendered between the series, and setting it 1 would render the maximum available gap.

The [`xAxisMaximumGap`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMaximumGap) property of the Web Components charts, determines the maximum gap value to allow. This default is set to 1.0 but can be changed depending on what you set [`xAxisGap`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisGap) to.

The [`xAxisMinimumGapSize`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisMinimumGapSize) property of the Web Components charts, determines the minimum amount of pixels to use for the gap between the categories, if possible.

The following example shows the average maximum temperature in Celsius in New York City's Central Park represented by a [Column Chart](../types/column-chart.md) with an [`xAxisGap`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisGap) initially set to 1, and so there will be a full category's width between the columns. There is a slider that allows you to configure the gap in this example so that you can see what the different values do.

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

## Axis Overlap Example

The [`xAxisOverlap`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisOverlap) property of the Web Components charts, allows setting the overlap of the rendered columns or bars of plotted series. This property accepts a numeric value between -1.0 and 1.0. The value represents a relative overlap out of the available number of pixels dedicated to each series. Setting this property to a negative value (down to -1.0) results in the categories being pushed away from each other, producing a gap between themselves. Conversely, setting this property to a positive value (up to 1.0) results in the categories overlapping each other. A value of 1 directs the chart to render the categories on top of each other.

The following example shows a comparison of the highest grossing worldwide film franchises compared by the total world box office revenue of the franchise and the highest grossing movie in the series, represented by a [Column Chart](../types/column-chart.md) with an [`xAxisOverlap`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisOverlap) initially set to 1, and so the columns will completely overlap each other. There is a slider that allows you to configure the overlap in this example so that you can see what the different values do.

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

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Layout](chart-axis-layouts.md)

## API References

The following is a list of API members mentioned in the above sections:

| [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)                                         | [`IgcFinancialChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent)       | [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent)        |
| ------------------------------------------------------ | ---------------------- | ---------------------- |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`maximumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent&member=maximumValue)             | [`yAxisMaximumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMaximumValue)    | [`yAxisMaximumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMaximumValue)    |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`minimumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent&member=minimumValue)             | [`yAxisMinimumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMinimumValue)    | [`yAxisMinimumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisMinimumValue)    |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`isLogarithmic`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent&member=isLogarithmic)            | [`yAxisIsLogarithmic`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisIsLogarithmic)   | [`yAxisIsLogarithmic`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisIsLogarithmic)   |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ [`logarithmBase`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent&member=logarithmBase)            | [`yAxisLogarithmBase`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisLogarithmBase)   | [`yAxisLogarithmBase`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisLogarithmBase)   |
| `Axes` ➔ [`IgcCategoryXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent) ➔ [`gap`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent&member=gap)                     | None                   | [`xAxisGap`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisGap)             |
| `Axes` ➔ [`IgcCategoryXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent) ➔ [`overlap`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent&member=overlap)                 | None                   | [`xAxisOverlap`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisOverlap)         |
| `Axes` ➔ [`IgcTimeXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTimeXAxisComponent)                                  | [`xAxisMode`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent&member=xAxisMode)            | None                   |
| `Axes` ➔ [`IgcPercentChangeYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcPercentChangeYAxisComponent)                         | [`yAxisMode`](mcp:get_api_reference?platform=webcomponents&component=IgcFinancialChartComponent&member=yAxisMode)            | None                   |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ `labelSettings.angle`      | [`yAxisLabelAngle`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisLabelAngle)      | [`yAxisLabelAngle`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisLabelAngle)      |
| `Axes` ➔ [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) ➔ `labelSettings.angle`      | [`xAxisLabelAngle`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisLabelAngle)      | [`xAxisLabelAngle`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisLabelAngle)      |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ `labelSettings.textColor`  | `YAxisLabelForeground` | `YAxisLabelForeground` |
| `Axes` ➔ [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) ➔ `labelSettings.textColor`  | `XAxisLabelForeground` | `XAxisLabelForeground` |
| `Axes` ➔ [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent) ➔ `labelSettings.visibility` | [`yAxisLabelVisibility`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisLabelVisibility) | [`yAxisLabelVisibility`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=yAxisLabelVisibility) |
| `Axes` ➔ [`IgcNumericXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericXAxisComponent) ➔ `labelSettings.visibility` | [`xAxisLabelVisibility`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisLabelVisibility) | [`xAxisLabelVisibility`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=xAxisLabelVisibility) |
