---
title: React Line Chart and Graph | Ignite UI for React
_description: The React Line chart is capable of handling high volumes of data, ranging into millions of data points, and updating them every few milliseconds. Try for FREE.
_keywords: React Charts, Line Chart, Line Graph, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "XamDataChart", "Legend", "PolarLineSeries", "RadialLineSeries", "StackedLineSeries", "Stacked100LineSeries", "Series", "CategoryChartType"]
namespace: Infragistics.Controls.Charts
_tocName: Line Chart
_premium: true
---

# React Line Chart

The Ignite UI for React Line Chart or Line Graph is a type of category charts that show the continuous data values represented by points connected by straight line segments of one or more quantities over a period of time. It’s often used to show trends and perform comparative analysis. The Y-Axis (labels on left side) show a numeric value, while the X-Axis (bottom labels) show a time-series or comparison category. You can include one or more data sets to compare, which would render as multiple lines in the chart.

## React Line Chart Example

You can create the React Line Chart in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by binding your data to `ItemsSource` property and setting [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#Line) enum, as shown in the example below.

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Line"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    legend={this.legend}
                    yAxisTitle="TWh"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    computedPlotAreaMarginMode="Series">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## Line Chart Recommendations

### Are React Line Charts right for your project?

- Different than an [area chart](area-chart.md), the line chart does not fill the area between the X-Axis (bottom axis) and the line.
- The React line chart is identical to the React [spline chart](spline-chart.md) in all aspects except that the line connecting data points does not have spline interpolation and smoothing for improved presentation of data.

A Line Chart includes several variants based on your data or how you want to tell the correct story with your data. These include:

- Layered Line Chart
- Stacked Line Chart
- Stepped Line Chart
- Polar Line Chart
- Stacked 100 Line Chart

### Line Chart Use Cases

There are several common use cases for choosing a Line Chart:

- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming and Drill-down.
- Need to compare the trends over time.
- Want to show the difference between 2 or more data series.
- Want to show cumulative part-to-whole comparisons of distinct categories.
- Need to show data trends for one or more categories for comparative analysis.
- Need to visualize detailed time-series data.

### Line Chart Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data  from left to right.
- Use visual attributes like solid lines to show a series of data.

### When Not to Use Line Chart

- You have many (more than 7 or 10) series of data. Your goal is to ensure the chart is readable.
- Time-series data has similar values (data over the same period), it makes overlapped lines impossible to differentiate.

### Line Chart Data Structure

- The data source must be an array or a list of data items (for single series).
- The data source must be an array of arrays or a list of lists (for multiple series).
- The data source must contain at least one data item.
- All data items must contain at least one data column (string or date time).
- All data items must contain at least one numeric data column.

## React Line Chart with Single Series

The React Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced since 2009 over a ten-year period, as we have shown in the example below.

You can create this type of chart in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#Line), as shown in the example below:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

const mods: any[] = [
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Line"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe"]}
                    yAxisTitle="TWh"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    computedPlotAreaMarginMode="Series">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Line Chart with Multiple Series

Since the React Line Chart allows you to combine multiple series and compare or see how they change over time, let’s see how easy it is to achieve this. All we need to do is bind to a data source containing the data for China and the USA, and the line chart will automatically update to fit the additional data.

You can create this type of chart in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#Line), as shown in the example below:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Line"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    legend={this.legend}
                    yAxisTitle="TWh"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    computedPlotAreaMarginMode="Series">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Line Chart with Live Data

The React Line chart is capable of handling high volumes of data, ranging into millions of data points, and updating them every few milliseconds as demonstrated in the following demo.

In this example, we are streaming live data into the React Line Chart at an interval of your choosing. You can set the data points from 5,000 to 1 million and update the chart to optimize the scale based on the device you are rendering the chart on.

You can create this type of chart in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#Line), as shown in the example below:

```typescript
export class CategoryChartSharedData {

    public static generateItems(startValue: number, maxPoints: number, useShortLabels?: boolean): any[] {

        const data: any[] = [];
        let value = startValue;
        for (let i = 0; i <= maxPoints; i++) {
            value += Math.random() * 4.0 - 2.0;
            const v = Math.round(value);
            let l = i.toString();
            if (useShortLabels) {
                l = this.toShortString(i);
            }
            data.push({ Label: l, Value: v });
        }
        return data;
    }

    public static getTemperatures(startValue: number, startYear: number, endYear: number): any[] {
        const data: any[] = [];
        let value = startValue;
        for (let i = startYear; i <= endYear; i++) {
            value += (Math.random() - 0.5) * 0.5;
            const v = Math.abs(Math.round(value * 10) / 10);
            data.push({ Label: i.toString(), Value: v });
        }
        return data;
    }

    public static getLastItem(array: any[]): any {
        if (array.length === 0) {
            return null;
        }
        return array[array.length - 1];
    }

    public static getNewItem(array: any[], index: number): any {
        const lastItem = this.getLastItem(array);
        const newValue = lastItem.Value + Math.random() * 4.0 - 2.0;
        return { Label: index.toString(), Value: newValue };
    }

    public static toShortString(largeValue: number): string {
        let roundValue: number;

        if (largeValue >= 1000000) {
            roundValue = Math.round(largeValue / 100000) / 10;
            return roundValue + "m";
        }
        if (largeValue >= 1000) {
            roundValue = Math.round(largeValue / 100) / 10;
            return roundValue + "k";
        }

        roundValue = Math.round(largeValue);
        return roundValue + "";
    }

    public static addDays(date: Date, days: number): Date {
        date.setDate(date.getDate() + days);
        return date;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { CategoryChartSharedData } from './CategoryChartSharedData';

IgrCategoryChartModule.register();

export default class CategoryChartHighFrequency extends React.Component<any, any> {
    public dataIndex: number = 0;
    public dataPoints: number = 500;
    public data: any[];

    public refreshMilliseconds: number = 5;
    public interval: number = -1;

    public chart: IgrCategoryChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onRefreshFrequencyChanged = this.onRefreshFrequencyChanged.bind(this);
        this.onDataGenerateClick = this.onDataGenerateClick.bind(this);
        this.onDataPointsChanged = this.onDataPointsChanged.bind(this);
        this.onDataFeedClick = this.onDataFeedClick.bind(this);

        this.data = CategoryChartSharedData.generateItems(100, this.dataPoints, false);
        this.dataIndex = this.data.length;

        this.state = {
            dataFeedAction: "Start",
            dataInfo: CategoryChartSharedData.toShortString(this.dataPoints),
            dataPoints: this.dataPoints,
            dataSource: this.data,
            scalingRatio: window.devicePixelRatio,
            refreshInterval: this.refreshMilliseconds,
            refreshInfo: "5ms"
        }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button onClick={this.onDataFeedClick}>{this.state.dataFeedAction}</button>
                    <label className="options-label">Refresh: </label>
                    <label className="options-value">{this.state.refreshInfo}</label>
                    <input className="options-slider" type="range" min="5" max="250" step="5"
                        value={this.state.refreshInterval}
                        onChange={this.onRefreshFrequencyChanged} />
                    <button onClick={this.onDataGenerateClick}>Generate</button>
                    <label className="options-label">Data Points: </label>
                    <label className="options-value">{this.state.dataInfo}</label>
                    <input className="options-slider" type="range" min="100" max="2000" step="100"
                        value={this.state.dataPoints}
                        onChange={this.onDataPointsChanged} />
                </div>
                <div className="container" style={{ height: "calc(100% - 45px)" }} >
                    <IgrCategoryChart ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        chartType="Line"
                        dataSource={this.state.dataSource}
                        yAxisExtent={40}
                        xAxisEnhancedIntervalPreferMoreCategoryLabels="false"
                        shouldConsiderAutoRotationForInitialLabels="false"
                        shouldAutoExpandMarginForInitialLabels="false"
                        crosshairsDisplayMode="None"
                        autoMarginAndAngleUpdateMode="None"
                        markerTypes="None" />
                </div>
            </div>
        );
    }

    public componentWillUnmount() {
        if (this.interval >= 0) {
            window.clearInterval(this.interval);
            this.interval = -1;
        }
    }

    public onChartRef(chart: IgrCategoryChart) {
        if (!chart) { return; }

        this.chart = chart;
        this.onChartInit();
    }

    public onChartInit(): void {
        this.setupInterval();
    }

    public onDataGenerateClick() {
        this.data = CategoryChartSharedData.generateItems(100, this.dataPoints, false);
        this.dataIndex = this.data.length;

        this.setState({ dataSource: this.data });
    }

    public onDataFeedClick() {
        let feedAction = this.state.dataFeedAction;

        if (feedAction === "Start") {
            this.setState({ dataFeedAction: "Stop" });
        }
        else {
            this.setState({ dataFeedAction: "Start" });
        }
    }

    public onDataPointsChanged = (e: any) => {
        let num: number = parseInt(e.target.value, 10);

        if (isNaN(num)) {
            num = 10000;
        }
        if (num < 100) {
            num = 100;
        }
        if (num > 2000) {
            num = 2000;
        }
        const info = CategoryChartSharedData.toShortString(num);
        this.dataPoints = num;
        this.setState({ dataPoints: num, dataInfo: info });
    }

    public ngOnDestroy(): void {
        if (this.interval >= 0) {
            window.clearInterval(this.interval);
            this.interval = -1;
        }
    }

    public onRefreshFrequencyChanged = (e: any) => {
        let num: number = parseInt(e.target.value, 10);

        if (isNaN(num)) {
            num = 10;
        }
        if (num < 10) {
            num = 10;
        }
        if (num > 500) {
            num = 500;
        }
        this.refreshMilliseconds = num;
        this.setState({ refreshInterval: num, refreshInfo: this.refreshMilliseconds + "ms" });
        this.setupInterval();
    }

    public setupInterval(): void {
        if (this.interval >= 0) {
            window.clearInterval(this.interval);
            this.interval = -1;
        }

        this.interval = window.setInterval(() => this.tick(),
            this.refreshMilliseconds);
    }

    public tick(): void {
        if (this.state.dataFeedAction === "Stop") {
            this.dataIndex++;
            const oldItem = this.data[0];
            const newItem = CategoryChartSharedData.getNewItem(this.data, this.dataIndex);

            // updating data source and notifying category chart
            this.data.push(newItem);
            this.chart.notifyInsertItem(this.data, this.data.length - 1, newItem);
            this.data.shift();
            this.chart.notifyRemoveItem(this.data, 0, oldItem);
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CategoryChartHighFrequency/>);
```

<div class="divider--half"></div>

## React Styling Line Chart

Once our chart is set up, we may want to make some further styling customizations such as change the line colors, change the legend font family, and/or increase the size of the axis labels to make it easier to read.

You can create this type of chart in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property to [`Line`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#Line), as shown in the example below:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    dataSource={this.countryRenewableElectricity}
                    chartType="Line"
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    markerBrushes="rgba(238, 88, 121, 1) rgba(196, 196, 196, 1) rgba(154, 242, 228, 1)"
                    markerOutlines="white"
                    brushes="rgba(238, 88, 121, 1) rgba(196, 196, 196, 1) rgba(154, 242, 228, 1)"
                    outlines="rgba(238, 88, 121, 1) rgba(196, 196, 196, 1) rgba(154, 242, 228, 1)"
                    yAxisTitle="TWh"
                    yAxisTitleLeftMargin="10"
                    yAxisLabelLeftMargin="0"
                    thickness="2"
                    computedPlotAreaMarginMode="Series">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

You can also create a dashed line within the [`IgrLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrlineseries.html) by using the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) and setting the [`dashArray`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#dashArray) property on the series. This property takes an array of numbers that will describe the length of the resulting dashes in the line.

The following example demonstrates usage of the [`dashArray`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#dashArray) in a [`IgrLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrlineseries.html) in [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html):

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private lineSeries1: IgrLineSeries
    private lineSeries2: IgrLineSeries
    private lineSeries3: IgrLineSeries

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    computedPlotAreaMarginMode="Series"
                    legend={this.legend}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.countryRenewableElectricity}
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        name="LineSeries1"
                        title="Europe"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        markerType="Circle"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="europe"
                        showDefaultTooltip="true"
                        dashArray="2, 2">
                    </IgrLineSeries>
                    <IgrLineSeries
                        name="LineSeries2"
                        title="China"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        markerType="Circle"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="china"
                        showDefaultTooltip="true"
                        dashArray="5, 5">
                    </IgrLineSeries>
                    <IgrLineSeries
                        name="LineSeries3"
                        title="America"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        markerType="Circle"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="america"
                        showDefaultTooltip="true"
                        dashArray="10, 10">
                    </IgrLineSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## Advanced Types of Line Charts

The following sections explain more advanced types of React Line Charts that can be created using the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control instead of [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control with simplified API.

## React Stacked Line Chart

The Stacked Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions. You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrStackedLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedlineseries.html), as shown in the example below:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataChartStackedModule, IgrStackedFragmentSeriesModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrStackedLineSeries, IgrStackedFragmentSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { ContinentsBirthRateItem, ContinentsBirthRate } from './ContinentsBirthRate';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataChartStackedModule,
    IgrStackedFragmentSeriesModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private stackedLineSeries: IgrStackedLineSeries
    private s1: IgrStackedFragmentSeries
    private s2: IgrStackedFragmentSeries
    private s3: IgrStackedFragmentSeries
    private s4: IgrStackedFragmentSeries
    private s5: IgrStackedFragmentSeries
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Annual Birth Rates by World Region
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.continentsBirthRate}
                        label="Year"
                        gap="0.75">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        minimumValue="0"
                        maximumValue="140"
                        interval="20"
                        title="Millions of Births"
                        titleAngle="-90"
                        labelFormat="{0} m">
                    </IgrNumericYAxis>
                    <IgrStackedLineSeries
                        name="stackedLineSeries"
                        dataSource={this.continentsBirthRate}
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        showDefaultTooltip="false"
                        markerType="Circle">
                        <IgrStackedFragmentSeries
                            name="s1"
                            valueMemberPath="Asia"
                            title="Asia">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s2"
                            valueMemberPath="Africa"
                            title="Africa">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s3"
                            valueMemberPath="Europe"
                            title="Europe">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s4"
                            valueMemberPath="NorthAmerica"
                            title="North America">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s5"
                            valueMemberPath="SouthAmerica"
                            title="South America">
                        </IgrStackedFragmentSeries>
                    </IgrStackedLineSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _continentsBirthRate: ContinentsBirthRate = null;
    public get continentsBirthRate(): ContinentsBirthRate {
        if (this._continentsBirthRate == null)
        {
            this._continentsBirthRate = new ContinentsBirthRate();
        }
        return this._continentsBirthRate;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Stacked 100% Line Chart

The Stacked 100% Line Chart is identical to the Stacked Line Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Line Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrStacked100LineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100lineseries.html), as shown in the example below:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataChartStackedModule, IgrStackedFragmentSeriesModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrStacked100LineSeries, IgrStackedFragmentSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { ContinentsBirthRateItem, ContinentsBirthRate } from './ContinentsBirthRate';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataChartStackedModule,
    IgrStackedFragmentSeriesModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private stacked100LineSeries: IgrStacked100LineSeries
    private s1: IgrStackedFragmentSeries
    private s2: IgrStackedFragmentSeries
    private s3: IgrStackedFragmentSeries
    private s4: IgrStackedFragmentSeries
    private s5: IgrStackedFragmentSeries
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Annual Birth Rates by World Region
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.continentsBirthRate}
                        label="Year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        interval="20"
                        titleLeftMargin="10"
                        labelFormat="{0}%">
                    </IgrNumericYAxis>
                    <IgrStacked100LineSeries
                        name="stacked100LineSeries"
                        dataSource={this.continentsBirthRate}
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        showDefaultTooltip="false"
                        markerType="Circle">
                        <IgrStackedFragmentSeries
                            name="s1"
                            valueMemberPath="Asia"
                            title="Asia">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s2"
                            valueMemberPath="Africa"
                            title="Africa">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s3"
                            valueMemberPath="Europe"
                            title="Europe">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s4"
                            valueMemberPath="NorthAmerica"
                            title="North America">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s5"
                            valueMemberPath="SouthAmerica"
                            title="South America">
                        </IgrStackedFragmentSeries>
                    </IgrStacked100LineSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _continentsBirthRate: ContinentsBirthRate = null;
    public get continentsBirthRate(): ContinentsBirthRate {
        if (this._continentsBirthRate == null)
        {
            this._continentsBirthRate = new ContinentsBirthRate();
        }
        return this._continentsBirthRate;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Radial Line Chart

The Radial Line Chart belongs to a group of radial charts and has a shape of an unfilled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the Line Chart, but wraps the data points around a circular axis rather than stretching them horizontally.

You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrRadialLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrradiallineseries.html), as shown in the example below:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartRadialModule, IgrDataChartRadialCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryAngleAxis, IgrNumericRadiusAxis, IgrRadialLineSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { FootballPlayerStatsItem, FootballPlayerStats } from './FootballPlayerStats';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartRadialModule,
    IgrDataChartRadialCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private angleAxis: IgrCategoryAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private radialLineSeries1: IgrRadialLineSeries
    private radialLineSeries2: IgrRadialLineSeries
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Ronaldo vs Messi Player Stats
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false">
                    <IgrCategoryAngleAxis
                        name="angleAxis"
                        dataSource={this.footballPlayerStats}
                        label="attribute">
                    </IgrCategoryAngleAxis>
                    <IgrNumericRadiusAxis
                        name="radiusAxis"
                        innerRadiusExtentScale="0.1"
                        interval="2"
                        minimumValue="0"
                        maximumValue="10">
                    </IgrNumericRadiusAxis>
                    <IgrRadialLineSeries
                        name="RadialLineSeries1"
                        dataSource={this.footballPlayerStats}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="ronaldo"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.8"
                        thickness="3"
                        title="Ronaldo"
                        markerType="Circle">
                    </IgrRadialLineSeries>
                    <IgrRadialLineSeries
                        name="RadialLineSeries2"
                        dataSource={this.footballPlayerStats}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="messi"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.8"
                        thickness="3"
                        title="Messi"
                        markerType="Circle">
                    </IgrRadialLineSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _footballPlayerStats: FootballPlayerStats = null;
    public get footballPlayerStats(): FootballPlayerStats {
        if (this._footballPlayerStats == null)
        {
            this._footballPlayerStats = new FootballPlayerStats();
        }
        return this._footballPlayerStats;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Polar Line Chart

The Polar Line Chart belongs to a group of polar charts and is rendered using a collection of straight lines connecting data points in polar (angle/radius) coordinate system. Polar Line Charts use the same concepts of data plotting as the [Scatter Line Chart](scatter-chart.md) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrPolarLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarlineseries.html), as shown in the example below:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartPolarModule, IgrDataChartPolarCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrNumericAngleAxis, IgrNumericRadiusAxis, IgrPolarLineSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { BoatSailingDataItem, BoatSailingData } from './BoatSailingData';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartPolarModule,
    IgrDataChartPolarCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private angleAxis: IgrNumericAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private polarLineSeries1: IgrPolarLineSeries
    private polarLineSeries2: IgrPolarLineSeries
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Wind Speed vs Boat Speed
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false">
                    <IgrNumericAngleAxis
                        name="angleAxis"
                        startAngleOffset="-90"
                        interval="30"
                        minimumValue="0"
                        maximumValue="360">
                    </IgrNumericAngleAxis>
                    <IgrNumericRadiusAxis
                        name="radiusAxis"
                        radiusExtentScale="0.9"
                        innerRadiusExtentScale="0.1"
                        interval="25"
                        minimumValue="0"
                        maximumValue="100">
                    </IgrNumericRadiusAxis>
                    <IgrPolarLineSeries
                        name="PolarLineSeries1"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="windSpeed"
                        showDefaultTooltip="false"
                        thickness="1"
                        title="Wind Speed"
                        markerType="Circle">
                    </IgrPolarLineSeries>
                    <IgrPolarLineSeries
                        name="PolarLineSeries2"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="boatSpeed"
                        showDefaultTooltip="false"
                        thickness="1"
                        title="Boat Speed"
                        markerType="Circle">
                    </IgrPolarLineSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _boatSailingData: BoatSailingData = null;
    public get boatSailingData(): BoatSailingData {
        if (this._boatSailingData == null)
        {
            this._boatSailingData = new BoatSailingData();
        }
        return this._boatSailingData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Column Chart](column-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)
- [Spline Chart](spline-chart.md)
- [Stacked Chart](stacked-chart.md)

## API References

The following table lists API members mentioned in the above sections:

| Chart Type        | Control Name       | API Members |
| ------------------|--------------------|----------------------- |
| Line              | [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)    | [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) = [`Line`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#Line) |
| Polar Line        | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)     | [`IgrPolarLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarlineseries.html) |
| Radial Line       | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)     | [`IgrRadialLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrradiallineseries.html) |
| Stacked Line      | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)     | [`IgrStackedLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedlineseries.html) |
| Stacked 100% Line | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)     | [`IgrStacked100LineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100lineseries.html) |
