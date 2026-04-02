---
title: React Chart Performance | Data Visualization | Infragistics
_description: Infragistics' React Chart Performance
_keywords: React Charts, Performance, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "XamDataChart", "FinancialChartVolumeType", "FinancialChartZoomSliderType"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Performance
_premium: true
---

# React Chart Performance

React charts are optimized for high performance of rendering millions of data points and updating them every few milliseconds. However, there are several chart features that affect performance of the chart and they should be considered when optimizing performance in your application. This topic will guide you to make React charts work as fast as possible in your application.

## React Chart Performance Examples

The following examples demonstrates two high performance scenarios of React charts.

## React Chart with High-Frequency

In High-Frequency scenario, the React Charts can render data items that are updating in real time or at specified milliseconds intervals. You will experience no lag, no screen-flicker, and no visual delays, even as you interact with the chart on a touch-device. The following sample demonstrates the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) in High-Frequency scenario.

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

## React Chart with High-Volume

In High-Volume scenario, the React Charts can render 1 million of data points while the chart keeps providing smooth performance when end-users tries zooming in/out or navigating chart content. The following sample demonstrates the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) in High-Volume scenario.

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

export default class CategoryChartHighVolume extends React.Component<any, any> {
    public dataPoints: number = 500000;
    public dataSource: any;

    constructor(props: any) {
        super(props);

        this.dataSource = CategoryChartSharedData.generateItems(0, this.dataPoints, true);
        this.state = {
            dataInfo: CategoryChartSharedData.toShortString(this.dataPoints),
            dataPoints: this.dataPoints,
            dataSource: this.dataSource
        }
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options horizontal">
                <label className="options-label">Data Points: </label>
                <label className="options-value">
                    {this.state.dataInfo}
                </label>
                <input className="options-slider" type="range" min="10000" max="1000000" step="1000"
                    value={this.state.dataPoints}
                    onChange={this.onDataPointsChanged}/>
                <button onClick={this.onDataGenerateClick}>Generate Data</button>
            </div>

            <div className="container" style={{height: "calc(100% - 30px)"}} >
                <IgrCategoryChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    toolTipType="Default"
                    xAxisEnhancedIntervalPreferMoreCategoryLabels="false"
                    shouldConsiderAutoRotationForInitialLabels="false"
                    shouldAutoExpandMarginForInitialLabels="false"
                    crosshairsDisplayMode="None"
                    autoMarginAndAngleUpdateMode="None"
                    markerTypes="None"
                    dataSource={this.state.dataSource}/>
            </div>
        </div>
        );
    }

    public onDataPointsChanged = (e: any) => {
        this.dataPoints = e.target.value;
        const info = CategoryChartSharedData.toShortString(this.dataPoints);
        this.setState({ dataPoints: this.dataPoints, dataInfo: info });
    }

    public onDataGenerateClick = (e: any) => {
        if (this.dataPoints === undefined){
            this.dataPoints = 10000;
        }
        this.generateData();
    }

    public generateData() {
        this.dataSource = CategoryChartSharedData.generateItems(0, this.dataPoints, true);
        this.setState({dataSource: this.dataSource});
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CategoryChartHighVolume/>);
```


<div class="divider--half"></div>

## General Performance Guidelines

This section lists guidelines and chart features that add to the overhead and processing updates in the React charts.

### Data Size

If you need to plot data sources with large number of data points (e.g. 10,000+), we recommend using React [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) with one of the following type of series which where designed for specially for that purpose.

- [Scatter HD Chart](../types/scatter-chart.md#react-scatter-high-density-chart) instead of [Category Point Chart](../types/point-chart.md) or [Scatter Marker Chart](../types/scatter-chart.md#react-scatter-marker-chart)
- [Scatter Polyline Chart](../types/shape-chart.md#react-scatter-polyline-chart) instead of [Category Line Chart](../types/line-chart.md#react-line-chart-example) or [Scatter Line Chart](../types/scatter-chart.md#react-scatter-line-chart)
- [Scatter Polygon Chart](../types/shape-chart.md#react-scatter-polygon-chart) instead of [Category Area Chart](../types/area-chart.md#react-area-chart-example) or [Column Chart](../types/column-chart.md#react-column-chart-example)

### Data Structure

Although React charts support rendering of multiple data sources by binding array of arrays of data points to `ItemsSource` property. It is much faster for charts if multiple data sources are flatten into single data source where each data item contains multiple data columns rather just one data column. For example:

```ts
this.CategoryChart.dataSource = FlattenDataSource.create();
this.FinancialChart.dataSource = FlattenDataSource.create();

export class FlattenDataSource {
    public static create(): any[] {
        const data: any[] = [];
        data.push({ "Year": "1996", "USA": 148, "CHN": 110 });
        data.push({ "Year": "2000", "USA": 142, "CHN": 115 });
        return data;
    }
}
// instead of this data structure:
export class MultiDataSources {
    public static create(): any[] {
        const dataSource1: any[] = [];
        dataSource1.push({ "Year": "1996", "Value": 148 });
        dataSource1.push({ "Year": "2000", "Value": 142 });
        const dataSource2: any[] = [];
        dataSource2.push({ "Year": "1996", "Value": 110 });
        dataSource2.push({ "Year": "2000", "Value": 115 });
        const multipleSources: any[] = [dataSource1, dataSource2];
        return multipleSources;
    }
}
```

### Data Filtering

React [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) and the [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) controls have built-in data adapter that analyzes your data and generates chart series for you. However, it works faster if you use [`includedProperties`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#includedProperties) and [`excludedProperties`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#excludedProperties) to filter only those data columns that you actually want to render. For example,

<!-- Angular, React, WebComponents -->

```ts
this.Chart.includedProperties = [ "Year", "USA", "RUS" ];
this.Chart.excludedProperties = [ "CHN",  "FRN", "GER" ];
```

## Chart Performance Guidelines

### Chart Types

Simpler chart types such as [Line Chart](../types/line-chart.md) have faster performance than using [Spline Chart](../types/spline-chart.md) because of the complex interpolation of spline lines between data points. Therefore, you should use [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property of React [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) or the [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) control to select type of chart that renders faster. Alternatively, you can change a type of series to a faster series in React [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control.

The following table lists chart types in order from the fastest performance to slower performance in each group of charts:

| Chart Group     | Chart Type |
| ----------------|--------------------------------- |
| Pie Charts       | - [Pie Chart](../types/pie-chart.md) <br> - [Donut Chart](../types/donut-chart.md) <br> - [Radial Pie Chart](../types/radial-chart.md#react-radial-pie-chart) |
| Line Charts      | - [Category Line Chart](../types/line-chart.md#react-line-chart-example) <br> - [Category Spline Chart](../types/spline-chart.md#react-spline-chart-example) <br> - [Step Line Chart](../types/step-chart.md#react-step-line-chart) <br> - [Radial Line Chart](../types/radial-chart.md#react-radial-line-chart) <br> - [Polar Line Chart](../types/polar-chart.md#react-polar-line-chart) <br> - [Scatter Line Chart](../types/scatter-chart.md#react-scatter-line-chart) <br> - [Scatter Polyline Chart](../types/shape-chart.md#react-scatter-polyline-chart) (\*)  <br> - [Scatter Contour Chart](../types/scatter-chart.md#react-scatter-contour-chart) <br> - [Stacked Line Chart](../types/stacked-chart.md#react-stacked-line-chart) <br> - [Stacked 100% Line Chart](../types/stacked-chart.md#react-stacked-100-line-chart) <br> |
| Area Charts      | - [Category Area Chart](../types/area-chart.md#react-area-chart-example) <br> - [Step Area Chart](../types/step-chart.md#react-step-area-chart) <br> - [Range Area Chart](../types/area-chart.md#react-range-area-chart) <br> - [Radial Area Chart](../types/radial-chart.md#react-radial-area-chart) <br> - [Polar Area Chart](../types/polar-chart.md#react-polar-area-chart) <br> - [Scatter Polygon Chart](../types/shape-chart.md#react-scatter-polygon-chart) (\*) <br> - [Scatter Area Chart](../types/scatter-chart.md#react-scatter-area-chart) <br> - [Stacked Area Chart](../types/stacked-chart.md#react-stacked-area-chart) <br> - [Stacked 100% Area Chart](../types/stacked-chart.md#react-stacked-100-area-chart) <br> |
| Column Charts    | - [Column Chart](../types/column-chart.md#react-column-chart-example) <br> - [Bar Chart](../types/bar-chart.md#react-bar-chart-example) <br> - [Waterfall Chart](../types/column-chart.md#react-waterfall-chart) <br> - [Range Column Chart](../types/column-chart.md#react-range-column-chart) <br> - [Radial Column Chart](../types/radial-chart.md#react-radial-column-chart) <br> - [Stacked Column Chart](../types/stacked-chart.md#react-stacked-column-chart) <br> - [Stacked Bar Chart](../types/stacked-chart.md#react-stacked-bar-chart) <br> - [Stacked 100% Column Chart](../types/stacked-chart.md#react-stacked-100-column-chart) <br> - [Stacked 100% Bar Chart](../types/stacked-chart.md#react-stacked-100-bar-chart) |
| Spline Charts    | - [Category Spline Chart](../types/spline-chart.md#react-spline-chart-example) <br> - [Polar Spline Chart](../types/polar-chart.md#react-polar-spline-chart) <br> - [Scatter Spline Chart](../types/scatter-chart.md#react-scatter-spline-chart) <br> - [Stacked Spline Chart](../types/stacked-chart.md#react-stacked-spline-chart) <br> - [Stacked 100% Spline Chart](../types/stacked-chart.md#react-stacked-100-spline-chart) <br> |
| Point Charts     | - [Category Point Chart](../types/point-chart.md) <br> - [Scatter HD Chart](../types/scatter-chart.md#react-scatter-high-density-chart)  <br> - [Scatter Marker Chart](../types/scatter-chart.md#react-scatter-marker-chart) <br> - [Scatter Bubble Chart](../types/bubble-chart.md) <br> - [Polar Marker Chart](../types/polar-chart.md#react-polar-marker-chart) <br> |
| Financial Charts | - [Stock Chart in Line Mode](../types/stock-chart.md) <br> - [Stock Chart in Column Mode](../types/stock-chart.md) <br> - [Stock Chart in Bar Mode](../types/stock-chart.md) <br> - [Stock Chart in Candle Mode](../types/stock-chart.md) <br> - [Stock Chart with Overlays](../types/stock-chart.md) <br> - [Stock Chart with Zoom Pane](../types/stock-chart.md) <br> - [Stock Chart with Volume Pane](../types/stock-chart.md#volume-pane) <br> - [Stock Chart with Indicator Pane](../types/stock-chart.md#indicator-pane) <br> |
| Scatter Charts   | - [Scatter HD Chart](../types/scatter-chart.md#react-scatter-high-density-chart) <br> - [Scatter Marker Chart](../types/scatter-chart.md#react-scatter-marker-chart) <br> - [Scatter Line Chart](../types/scatter-chart.md#react-scatter-line-chart) <br> - [Scatter Bubble Chart](../types/bubble-chart.md) <br> - [Scatter Spline Chart](../types/scatter-chart.md#react-scatter-spline-chart) <br> - [Scatter Area Chart](../types/scatter-chart.md#react-scatter-area-chart) <br> - [Scatter Contour Chart](../types/scatter-chart.md#react-scatter-contour-chart) <br> - [Scatter Polyline Chart](../types/shape-chart.md#react-scatter-polyline-chart) (\*) <br> - [Scatter Polygon Chart](../types/shape-chart.md#react-scatter-polygon-chart) (\*) <br> |
| Radial Charts    | - [Radial Line Chart](../types/radial-chart.md#react-radial-line-chart) <br> - [Radial Area Chart](../types/radial-chart.md#react-radial-area-chart) <br> - [Radial Pie Chart](../types/radial-chart.md#react-radial-pie-chart) <br> - [Radial Column Chart](../types/radial-chart.md#react-radial-column-chart) <br> |
| Polar Charts     | - [Polar Marker Chart](../types/polar-chart.md#react-polar-marker-chart) <br> - [Polar Line Chart](../types/polar-chart.md#react-polar-line-chart) <br> - [Polar Area Chart](../types/polar-chart.md#react-polar-area-chart) <br> - [Polar Spline Chart](../types/polar-chart.md#react-polar-spline-chart) <br> - [Polar Spline Area Chart](../types/polar-chart.md#react-polar-spline-area-chart) <br> |
| Stacked Charts   | - [Stacked Line Chart](../types/stacked-chart.md#react-stacked-line-chart) <br> - [Stacked Area Chart](../types/stacked-chart.md#react-stacked-area-chart) <br> - [Stacked Column Chart](../types/stacked-chart.md#react-stacked-column-chart) <br> - [Stacked Bar Chart](../types/stacked-chart.md#react-stacked-bar-chart) <br> - [Stacked Spline Chart](../types/stacked-chart.md#react-stacked-spline-chart) <br> - [Stacked 100% Line Chart](../types/stacked-chart.md#react-stacked-100-line-chart) <br> - [Stacked 100% Area Chart](../types/stacked-chart.md#react-stacked-100-area-chart) <br> - [Stacked 100% Column Chart](../types/stacked-chart.md#react-stacked-100-column-chart) <br> - [Stacked 100% Bar Chart](../types/stacked-chart.md#react-stacked-100-bar-chart) <br> - [Stacked 100% Spline Chart](../types/stacked-chart.md#react-stacked-100-spline-chart) <br> |

\* Note that the [Scatter Polygon Chart](../types/shape-chart.md) and [Scatter Polyline Chart](../types/shape-chart.md) have better performance than rest of charts if you have a lot of data sources bound to the chart. For more info, see [Series Collection](#series-collection) section. Otherwise, other chart types are faster.

### Chart Animations

Enabling [Chart Animations](chart-animations.md) will slightly delay final rendering series in the React charts while they play transition-in animations.

### Chart Annotations

Enabling [Chart Annotations](chart-annotations.md) such as the Callout Annotations, Crosshairs Annotations, or Final Value Annotations, will slightly decrease performance of the React chart.

### Chart Highlighting

Enabling the [Chart Highlighting](chart-highlighting.md) will slightly decrease performance of the React chart.

### Chart Legend

Adding a legend to the React charts might decrease performance if titles of series or data items mapped to legend are changing often at runtime.

### Chart Markers

In React charts, [Markers](chart-markers.md) are especially expensive when it comes to chart performance because they add to the layout complexity of the chart, and perform data binding to obtain certain information. Also, markers decrease performance when there are a lot of data points or if there are many data sources bound. Therefore, if markers are not needed, they should be removed from the chart.

This code snippet shows how to remove markers from the React charts.

<!-- Angular, React, WebComponents -->

```ts
// on CategoryChart or FinancialChart
this.Chart.markerTypes.clear();
this.Chart.markerTypes.add(MarkerType.None);

// on LineSeries of DataChart
this.LineSeries.markerType = MarkerType.None;
```

### Chart Resolution

Setting the [`resolution`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#resolution) property to a higher value will improve performance, but it will lower the graphical fidelity of lines of plotted series. As such, it can be increased up until the fidelity is unacceptable.

This code snippet shows how to decrease resolution in the React charts.

<!-- Angular, React, WebComponents -->

```ts
// on CategoryChart or FinancialChart:
this.Chart.Resolution = 10;

// on LineSeries of DataChart:
this.LineSeries.Resolution = 10;
```

### Chart Overlays

Enabling [Chart Overlays](chart-overlays.md) will slightly decrease performance of the React chart.

### Chart Trendlines

Enabling [Chart Trendlines](chart-trendlines.md) will slightly decrease performance of the React chart.

### Axis Types

Usage of x-axis with DateTime support is not recommended if spaces between data points, based on the amount of time span between them, are not important. Instead, ordinal/category axis should be used because it is more efficient in the way it coalesces data. Also, ordinal/category axis doesn’t perform any sorting on the data like the time-based x-axis does.

> [!Note]
> The [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) already uses ordinal/category axis so there is no need to change its properties.

This code snippet shows how to ordinal/category x-axis in the [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) and [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) controls.

```tsx
<IgrFinancialChart xAxisMode="Ordinal" />

<IgrDataChart>
    <IgrCategoryXAxis label="Time" />
</IgrDataChart>
```

### Axis Intervals

By default, React charts will automatically calculate [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#yAxisInterval) based on range of your data. Therefore, you should avoid setting axis interval especially to a small value to prevent rendering of too many of axis gridlines and axis labels. Also, you might want to consider increasing [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#yAxisInterval) property to a larger value than the automatically calculated axis interval if you do not need many axis gridlines or axis labels.

> [!Note]
> We do not recommend setting axis minor interval as it will decrease chart performance.

This code snippet shows how to set axis major interval in the React charts.

```tsx
<IgrCategoryChart  xAxisInterval={5} yAxisInterval={50}/>

<IgrFinancialChart xAxisInterval={5} yAxisInterval={50}/>

<IgrDataChart>
    <IgrCategoryXAxis name="xAxis" interval={5} />
    <IgrNumericYAxis  name="yAxis" interval={50}/>
</IgrDataChart>
```

### Axis Scale

Setting the [`yAxisIsLogarithmic`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#yAxisIsLogarithmic) property to false is recommended for higher performance, as fewer operations are needed than calculating axis range and values of axis labels in logarithmic scale.

### Axis Labels Visibility

In the same way as Markers, axis labels are also expensive because they use templates and bindings, and may have their data context changed often. If labels are not used, they should be hidden or their interval should be increased to decrease number of axis labels.

This code snippet shows how to hide axis labels in the React charts.

```tsx
<IgrCategoryChart xAxisLabelVisibility="Collapsed" yAxisLabelVisibility="Collapsed" />

<IgrFinancialChart xAxisLabelVisibility="Collapsed" yAxisLabelVisibility="Collapsed" />

<IgrDataChart>
    <IgrCategoryXAxis name="xAxis" labelVisibility="Collapsed" />
    <IgrNumericYAxis  name="yAxis" labelVisibility="Collapsed" />
</IgrDataChart>
```

### Axis Labels Abbreviation

Although, the React charts support abbreviation of large numbers (e.g. 10,000+) displayed in axis labels when [`yAxisAbbreviateLargeNumbers`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#yAxisAbbreviateLargeNumbers) is set to true. We recommend, instead pre-processing large values in your data items by dividing them a common factor and then setting [`yAxisTitle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisTitle) to a string that represents factor used used to abbreviate your data values.

This code snippet shows how to set axis title in the React charts.

```tsx
<IgrCategoryChart  yAxisTitle="In millions of Dollars" />

<IgrFinancialChart yAxisTitle="In millions of Dollars" />

<IgrDataChart>
    <IgrNumericYAxis title="In millions of Dollars" />
</IgrDataChart>
```

### Axis Labels Extent

At runtime, the React charts adjust extent of labels on y-axis based on a label with longest value. This might decrease chart performance if range of data changes and labels need to be updated often. Therefore, it is recommended to set label extent at design time in order to improve chart performance.

The following code snippet shows how to set a fixed extent for labels on y-axis in the React charts.

```tsx
<IgrCategoryChart  xAxisLabelExtent={50} yAxisLabelExtent={50}/>

<IgrFinancialChart xAxisLabelExtent={50} yAxisLabelExtent={50}/>

<IgrDataChart>
    <IgrCategoryXAxis name="xAxis" labelExtent={50} />
    <IgrNumericYAxis  name="yAxis" labelExtent={50} />
</IgrDataChart>
```

### Axis Other Visuals

Enabling additional axis visuals (e.g. axis titles) or changing their default values might decrease performance in the React charts.

For example, changing these properties on the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) or [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) control:

| Axis Visual          | X-Axis Properties | Y-Axis Properties |
| ---------------------|-------------------|------------------- |
| All Axis Visual      | [`xAxisInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#xAxisInterval)<br>  [`xAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#xAxisMinorInterval) | [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#yAxisInterval)<br>  [`yAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#yAxisMinorInterval) |
| Axis Tickmarks       | [`xAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisTickStroke) <br>  [`xAxisTickStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisTickStrokeThickness)<br>  [`xAxisTickLength`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisTickLength)<br>  | [`yAxisTickStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisTickStroke) <br>  [`yAxisTickStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisTickStrokeThickness)<br>  [`yAxisTickLength`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisTickLength)<br> |
| Axis Major Gridlines | [`xAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisMajorStroke)<br>  [`xAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisMajorStrokeThickness)<br>   | [`yAxisMajorStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisMajorStroke)<br>  [`yAxisMajorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisMajorStrokeThickness)<br> |
| Axis Minor Gridlines | [`xAxisMinorStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisMinorStroke)<br>  [`xAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisMinorStrokeThickness)<br>   | [`yAxisMinorStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisMinorStroke)<br>  [`yAxisMinorStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisMinorStrokeThickness)<br> |
| Axis Main Line       | [`xAxisStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisStroke)<br>  [`xAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisStrokeThickness)<br>   | [`yAxisStroke`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisStroke)<br>  [`yAxisStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisStrokeThickness)<br> |
| Axis Titles          | [`xAxisTitle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisTitle)<br>  [`xAxisTitleAngle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisTitleAngle)<br>    | [`yAxisTitle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisTitle)<br>  [`yAxisTitleAngle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisTitleAngle)<br> |
| Axis Strips          | [`xAxisStrip`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisStrip)<br>   | [`yAxisStrip`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisStrip)<br> |

Or changing properties of an [`IgrAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html) in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control:

| Axis Visual          | Axis Properties |
| ---------------------|------------------- |
| All Axis Visuals     | `Interval`, `MinorInterval` |
| Axis Tickmarks       | `TickStroke` , `TickStrokeThickness`, `TickLength` |
| Axis Major Gridlines | `MajorStroke`, `MajorStrokeThickness` |
| Axis Minor Gridlines | `MinorStroke`, `MinorStrokeThickness` |
| Axis Main Line       | `Stroke`, `StrokeThickness` |
| Axis Titles          | [`chartTitle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#chartTitle), `TitleAngle` |
| Axis Strips          | `Strip` |

## Performance in Financial Chart

In addition to above performance guidelines, the React [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) control has the following unique features that affect performance.

### Y-Axis Mode

Setting the [`yAxisMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#yAxisMode) option to `Numeric` is recommended for higher performance, as fewer operations are needed than using `PercentChange` mode.

### Chart Panes

Setting a lot of panes using [`indicatorTypes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#indicatorTypes) and [`overlayTypes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#overlayTypes) options, might decrease performance and it is recommended to use a few financial indicators and one financial overlay.

### Zoom Slider

Setting the [`zoomSliderType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#zoomSliderType) option to [`None`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.financialchartvolumetype.html#None) will improve chart performance and enable more vertical space for other indicators and the volume pane.

### Volume Type

Setting the [`volumeType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#volumeType) property can have the following impact on chart performance:

- [`None`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.financialchartvolumetype.html#None) - is the least expensive since it does not display the volume pane.
- [`Line`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.financialchartvolumetype.html#Line) - is more expensive volume type to render and it is recommended when rendering a lot of data points or when plotting a lot of data sources.
- [`Area`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.financialchartvolumetype.html#Area) - is more expensive to render than the [`Line`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.financialchartvolumetype.html#Line) volume type.
- [`Column`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.financialchartvolumetype.html#Column) - is more expensive to render than the [`Area`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.financialchartvolumetype.html#Area) volume type and it is recommended when rendering volume data of 1-3 stocks.

## Performance in Data Chart

In addition to the general performance guidelines, the React [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control has the following unique features that affect performance.

### Axes Collection

Adding too many axis to the `Axes` collection of the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control will decrease chart performance and we recommend [Sharing Axes](chart-axis-layouts.md#axis-sharing-example) between series.

### Series Collection

Also, adding a lot of series to the [`IgrSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html) collection of the React [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control will add overhead to rendering because each series has its own rendering canvas. This is especially important if you have more than 10 series in the Data Chart. We recommend combining multiple data sources into flatten data source (see [Data Structure](#data-structure) section) and then using conditional styling feature of the following series:

| Slower Performance Scenario | Faster Scenario with Conditional Styling |
| ----------------------------|---------------------------------------- |
| 10+ of [`IgrLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrlineseries.html)         | Single [`IgrScatterLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterlineseries.html) |
| 20+ of [`IgrLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrlineseries.html)         | Single [`IgrScatterPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolylineseries.html) |
| 10+ of [`IgrScatterLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterlineseries.html)  | Single [`IgrScatterPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolylineseries.html) |
| 10+ of [`IgrPointSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpointseries.html)        | Single [`IgrScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterseries.html) |
| 20+ of [`IgrPointSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpointseries.html)        | Single [`IgrHighDensityScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrhighdensityscatterseries.html) |
| 20+ of [`IgrScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterseries.html)      | Single [`IgrHighDensityScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrhighdensityscatterseries.html) |
| 10+ of [`IgrAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrareaseries.html)         | Single [`IgrScatterPolygonSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolygonseries.html) |
| 10+ of [`IgrColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcolumnseries.html)       | Single [`IgrScatterPolygonSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolygonseries.html) |

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](../types/area-chart.md)
- [Bar Chart](../types/bar-chart.md)
- [Bubble Chart](../types/bubble-chart.md)
- [Column Chart](../types/column-chart.md)
- [Donut Chart](../types/donut-chart.md)
- [Pie Chart](../types/pie-chart.md)
- [Point Chart](../types/point-chart.md)
- [Polar Chart](../types/polar-chart.md)
- [Radial Chart](../types/radial-chart.md)
- [Shape Chart](../types/shape-chart.md)
- [Spline Chart](../types/spline-chart.md)
- [Scatter Chart](../types/scatter-chart.md)
- [Stacked Chart](../types/stacked-chart.md)
- [Step Chart](../types/shape-chart.md)
- [Stock Chart](../types/stock-chart.md)
- [Chart Animations](chart-animations.md)
- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)
- [Chart Markers](chart-markers.md)
- [Chart Overlays](chart-overlays.md)
- [Chart Trendlines](chart-trendlines.md)

## API References

The following table lists API members mentioned in above sections:

- [`resolution`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#resolution)
- [`indicatorTypes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#indicatorTypes)
- [`overlayTypes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#overlayTypes)
- [`volumeType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#volumeType)
- [`zoomSliderType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#zoomSliderType)
- [`xAxisMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#xAxisMode)
- [`yAxisMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html#yAxisMode)
- [`xAxisInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#xAxisInterval)
- [`yAxisInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#yAxisInterval)
- [`xAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#xAxisMinorInterval)
- [`yAxisMinorInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#yAxisMinorInterval)
- [`xAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#xAxisLabelVisibility)
- [`yAxisLabelVisibility`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrxychart.html#yAxisLabelVisibility)
- [`yAxisIsLogarithmic`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#yAxisIsLogarithmic)
