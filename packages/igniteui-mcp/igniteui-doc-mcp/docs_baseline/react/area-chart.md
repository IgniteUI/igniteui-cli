---
title: React Area Chart | Data Visualization | Infragistics
_description: Infragistics' React Area Chart
_keywords: React Charts, Area Chart, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "XamDataChart", "CategoryChartType"]
namespace: Infragistics.Controls.Charts
_tocName: Area Chart
_premium: true
---

# React Area Chart

The Ignite UI for React Area Chart renders as a collection of points connected by straight line segments with the area below the line filled in. Values are represented on the y-axis (labels on the left side) and categories are displayed on the x-axis (bottom labels). This chart emphasize the amount of change over a period of time or compare multiple items as well as the relationship of parts of a whole by displaying the total of the plotted values. Therefore, they are often chronological, showing a change of quantity e.g. accumulation of a commodity over time.

## React Area Chart Example

You can create React Category Area Chart in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by binding your data to `ItemsSource` property and setting [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property to **Area** enum, as shown in the example below.

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
                    chartType="Area"
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    legend={this.legend}
                    yAxisTitle="TWh"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
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

## Area Chart Recommendations

### Area Chart Use Cases

There are several common use cases for choosing an Area Chart:

- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming, and Drill-down.
- Need to compare the trends of your data over time.
- Want to show the difference between 2 or more data series.
- Want to show cumulative part-to-whole comparisons of distinct categories.
- Need to show data trends for one or more categories for comparative analysis.
- Need to visualize details time-series data.

### Area Chart Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.
- Use transparent colors to ensure that data that is plotted behind another series is not blocked.

### When Not to Use Area Charts

- You have many (more than 7 or 10) series of data. Your goal is to ensure the chart is readable.
- Time-series data has similar values (data over the same period). This makes overlapped shaded areas impossible to differentiate.

### Area Chart Data Structure

- The data source must be an array or a list of data items (for single series).
- The data source must be an array of arrays or a list of lists (for multiple series).
- The data source should contain two or more data items in order to render a line between them.
- All data items must contain at least one data column (string or date time).
- All data items must contain at least one numeric data column.

## React Area Chart with Single Series

React Area Chart is often used to show the change of value over time such as the amount of renewable electricity produced. You can create this type of chart in [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by binding your data and setting [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property to [`Area`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#Area) value, as shown in the example below.

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
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe"]}
                    chartType="Area"
                    yAxisTitle="TWh"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
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

## React Area Chart with Multiple Series

Similarly to how you can show multiple [Line Chart](line-chart.md) and [Spline Chart](spline-chart.md), you may also combine multiple Area Charts in the same control. This is accomplished by binding multiple data source to `ItemsSource` property of the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control.

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
                    chartType="Area"
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    legend={this.legend}
                    yAxisTitle="TWh"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
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

## React Area Chart Styling

Area charts often have semi-transparent fill for their areas, thicker lines and slightly larger markers than usual. Below is an example showing how you can style the Area Chart from earlier accordingly.

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
                    includedProperties={["year", "europe", "china", "america"]}
                    chartType="Area"
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    markerBrushes="white"
                    markerOutlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1) rgba(115, 86, 86, 1)"
                    brushes="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1) rgba(115, 86, 86, 1)"
                    outlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1) rgba(115, 86, 86, 1)"
                    yAxisTitle="TWh"
                    yAxisTitleLeftMargin="10"
                    yAxisLabelLeftMargin="0"
                    toolTipType="Category"
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

<div class="divider--half"></div>

## Advanced Types of Area Charts

The following sections explain more advanced types of React Area Charts that can be created using the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control instead of [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control with simplified API.

## React Step Area Chart

The React Step Area Chart belongs to a group of category charts and it is rendered using a collection of points connected by continuous vertical and horizontal lines with the area below lines filled in. Values are represented on the y-axis and categories are displayed on the x-axis. The step area chart emphasizes the amount of change over a period of time or compares multiple items. You can create this type of chart in [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by binding your data and setting [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property to [`StepArea`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#StepArea) value, as shown in the example below.

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

import { IgrLegendModule, IgrCategoryChartModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule,
    IgrDataChartInteractivityModule
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
                    dataSource={this.countryRenewableElectricity}
                    legend={this.legend}
                    ref={this.chartRef}
                    chartType="StepArea"
                    titleAlignment="Left"
                    titleLeftMargin="25"
                    titleTopMargin="10"
                    titleBottomMargin="10"
                    isCategoryHighlightingEnabled="false"
                    isSeriesHighlightingEnabled="true"
                    isTransitionInEnabled="true"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    yAxisTitle="TWh"
                    crosshairsSnapToData="true">
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

The following sections explain more advanced types of React Area Charts that can be created using the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control instead of [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control with simplified API.

## React Range Area Chart

The React Range Area Chart allows you show the area as a range between two values over time. You can create this type of chart in [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to [`IgrRangeAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrrangeareaseries.html), as shown in the example below.

```typescript
export class TemperatureRangeDataItem {
    public constructor(init: Partial<TemperatureRangeDataItem>) {
        Object.assign(this, init);
    }

    public month: string;
    public highNY: number;
    public lowNY: number;
    public highLA: number;
    public lowLA: number;

}
export class TemperatureRangeData extends Array<TemperatureRangeDataItem> {
    public constructor(items: Array<TemperatureRangeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TemperatureRangeDataItem({ month: `Jan`, highNY: 10.6, lowNY: -6.6, highLA: 28.3, lowLA: 7.8 }),
                new TemperatureRangeDataItem({ month: `Feb`, highNY: 7.8, lowNY: -9.9, highLA: 31.1, lowLA: 5.6 }),
                new TemperatureRangeDataItem({ month: `Mar`, highNY: 12.2, lowNY: -3.8, highLA: 27.8, lowLA: 8.3 }),
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

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrLegendModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrRangeAreaSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { TemperatureRangeDataItem, TemperatureRangeData } from './TemperatureRangeData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrLegendModule
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
    private rangeAreaSeries1: IgrRangeAreaSeries
    private rangeAreaSeries2: IgrRangeAreaSeries
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
                Monthly Temperature Range in LA and NYC
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
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    legend={this.legend}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        label="month"
                        interval="1"
                        dataSource={this.temperatureRangeData}>
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Temperature (in Celsius)"
                        titleAngle="90"
                        titleLeftMargin="10">
                    </IgrNumericYAxis>
                    <IgrRangeAreaSeries
                        name="rangeAreaSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="Los Angeles"
                        lowMemberPath="lowLA"
                        highMemberPath="highLA"
                        showDefaultTooltip="false"
                        dataSource={this.temperatureRangeData}>
                    </IgrRangeAreaSeries>
                    <IgrRangeAreaSeries
                        name="rangeAreaSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="New York"
                        lowMemberPath="lowNY"
                        highMemberPath="highNY"
                        showDefaultTooltip="false"
                        dataSource={this.temperatureRangeData}>
                    </IgrRangeAreaSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _temperatureRangeData: TemperatureRangeData = null;
    public get temperatureRangeData(): TemperatureRangeData {
        if (this._temperatureRangeData == null)
        {
            this._temperatureRangeData = new TemperatureRangeData();
        }
        return this._temperatureRangeData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Stacked Area Chart

The React Stacked Area Chars is rendered using a collection of points connected by line segments, with the area below the line filled in and stacked on top of each other. Stacked Area Charts follow all the same requirements as Area Charts, with the only difference being that visually, the shaded areas are stacked on top of each other. You can create this type of chart in [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to [`IgrStackedAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedareaseries.html), as shown in the example below.

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
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrStackedAreaSeries, IgrStackedFragmentSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
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
    private stackedAreaSeries: IgrStackedAreaSeries
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
                    <IgrStackedAreaSeries
                        name="stackedAreaSeries"
                        dataSource={this.continentsBirthRate}
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        showDefaultTooltip="true"
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
                    </IgrStackedAreaSeries>
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

## React Stacked 100% Area Chart

The React Stacked 100% Area Chart allows you represent your data as part of a whole being changed over time e.g. a country's energy consumption related to the sources from which it is produced. In such cases representing all stacked elements equally may be a better idea. You can create this type of chart in [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to [`IgrStacked100AreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100areaseries.html), as shown in the example below.

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
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrStacked100AreaSeries, IgrStackedFragmentSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
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
    private stacked100AreaSeries: IgrStacked100AreaSeries
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
                        title="Millions of Births"
                        titleAngle="-90"
                        labelFormat="{0}%">
                    </IgrNumericYAxis>
                    <IgrStacked100AreaSeries
                        name="stacked100AreaSeries"
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
                    </IgrStacked100AreaSeries>
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

## React Stacked Spline Area Chart

The React Stacked Spline Area Chart is rendered using a collection of points connected by curved spline segments, with the area below the curved spline fill in and stacked on top of each other. Stacked Spline Area Chart follows all of the same requirements as area charts, with the only difference being that the visually shaded areas are stacked on top of each other. You can create this type of chart in [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to [`IgrStackedSplineAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedsplineareaseries.html), as shown in the example below.

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
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrStackedSplineAreaSeries, IgrStackedFragmentSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
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
    private stackedSplineAreaSeries: IgrStackedSplineAreaSeries
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
                    <IgrStackedSplineAreaSeries
                        name="stackedSplineAreaSeries"
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
                    </IgrStackedSplineAreaSeries>
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

## React Stacked 100% Spline Area Chart

The React Stacked 100% Spline Area Chart is identical to the Stacked Spline Area Chart in all aspects except for the treatment of the values on the y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Spline Area Chart presents the data in terms of a percent of the sum of all values in a particular data point. Sometimes the chart represents part of a whole being changed over time. For example, a country's energy consumption related to the sources from which it is produced. In such cases, representing all stacked elements equally may be a better idea. You can create this type of chart in [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to [`IgrStacked100SplineAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100splineareaseries.html), as shown in the example below.

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
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrStacked100SplineAreaSeries, IgrStackedFragmentSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
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
    private stacked100SplineAreaSeries: IgrStacked100SplineAreaSeries
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
                    <IgrStacked100SplineAreaSeries
                        name="stacked100SplineAreaSeries"
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
                    </IgrStacked100SplineAreaSeries>
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

## React Radial Area Chart

The React Radial Area Chart belongs to a group of [Radial Chart](radial-chart.md) and has a shape of a filled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the Area Chart, but wraps the data points around a circular axis rather than stretching them horizontally. You can create this type of chart in [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to [`IgrRadialAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrradialareaseries.html), as shown in the example below.

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
import { IgrLegend, IgrDataChart, IgrCategoryAngleAxis, IgrNumericRadiusAxis, IgrRadialAreaSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
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
    private radialAreaSeries1: IgrRadialAreaSeries
    private radialAreaSeries2: IgrRadialAreaSeries
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
                    <IgrRadialAreaSeries
                        name="RadialAreaSeries1"
                        dataSource={this.footballPlayerStats}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="ronaldo"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.5"
                        thickness="3"
                        title="Ronaldo"
                        markerType="Circle">
                    </IgrRadialAreaSeries>
                    <IgrRadialAreaSeries
                        name="RadialAreaSeries2"
                        dataSource={this.footballPlayerStats}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="messi"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.5"
                        thickness="3"
                        title="Messi"
                        markerType="Circle">
                    </IgrRadialAreaSeries>
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

## React Polar Area Chart

The React Polar Area Chart belongs to a group of [Polar Chart](polar-chart.md) and have a shape of a filled polygon, where vertices or corners are located at the polar (angle/radius) coordinates of data points and are connected by a straight line and then filling the area represented by the connected points. The Polar Area Chart uses the same concepts of data plotting as the Scatter Marker Chart, but instead wraps the points around a circle and fills in the area that is drawn, rather than stretching the points and area filled along a horizontal line. You can create this type of chart in [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to [`IgrPolarAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarareaseries.html), as shown in the example below.

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
import { IgrLegend, IgrDataChart, IgrNumericAngleAxis, IgrNumericRadiusAxis, IgrPolarAreaSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
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
    private polarAreaSeries1: IgrPolarAreaSeries
    private polarAreaSeries2: IgrPolarAreaSeries
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
                    <IgrPolarAreaSeries
                        name="PolarAreaSeries1"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="windSpeed"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.8"
                        thickness="1"
                        title="Wind Speed"
                        markerType="Circle">
                    </IgrPolarAreaSeries>
                    <IgrPolarAreaSeries
                        name="PolarAreaSeries2"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="boatSpeed"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.8"
                        thickness="1"
                        title="Boat Speed"
                        markerType="Circle">
                    </IgrPolarAreaSeries>
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

## React Polar Spline Area Chart

The React Polar Spline Area Chart belongs to a group of [Polar Chart](polar-chart.md) and have a shape of a filled polygon, where vertices or corners are located at the polar (angle/radius) coordinates of data points and are connected by a curved spline and then filling the area represented by the connected points. The Polar Spline Area Chart uses the same concepts of data plotting as the Scatter Marker Chart, but instead wraps the points around a circle and fills in the area that is drawn, rather than stretching the points and area filled along a horizontal line. You can create this type of chart in [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to [`IgrPolarSplineAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarsplineareaseries.html), as shown in the example below.

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

import { IgrDataChartCoreModule, IgrDataChartPolarModule, IgrDataChartPolarCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrNumericAngleAxis, IgrNumericRadiusAxis, IgrPolarSplineAreaSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { BoatSailingDataItem, BoatSailingData } from './BoatSailingData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartPolarModule,
    IgrDataChartPolarCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private angleAxis: IgrNumericAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private polarSplineAreaSeries1: IgrPolarSplineAreaSeries
    private polarSplineAreaSeries2: IgrPolarSplineAreaSeries
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Wind Speed vs Boat Speed
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
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
                    <IgrPolarSplineAreaSeries
                        name="PolarSplineAreaSeries1"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="windSpeed"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.8"
                        thickness="1"
                        title="Wind Speed"
                        markerType="Circle">
                    </IgrPolarSplineAreaSeries>
                    <IgrPolarSplineAreaSeries
                        name="PolarSplineAreaSeries2"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="boatSpeed"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.8"
                        thickness="1"
                        title="Boat Speed"
                        markerType="Circle">
                    </IgrPolarSplineAreaSeries>
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

- [Bar Chart](bar-chart.md)
- [Column Chart](column-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)
- [Spline Chart](spline-chart.md)
- [Stacked Chart](stacked-chart.md)

## API References

The following table lists API members mentioned in above sections:

| Chart Type               | Control Name    | API Members  |
| -------------------------|-----------------|-----------------------|
| Area                     | [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) | [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) = [`Area`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#Area)  |
| Step Area                | [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) | [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) = [`StepArea`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#StepArea)  |
| Range Area               | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)  | [`IgrRangeAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrrangeareaseries.html)  |
| Radial Area              | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)  | [`IgrRadialAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrradialareaseries.html)  |
| Polar Area               | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)  | [`IgrPolarAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarareaseries.html)  |
| Polar Spline Area        | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)  | [`IgrPolarSplineAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarsplineareaseries.html)  |
| Stacked Area             | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)  | [`IgrStackedAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedareaseries.html)  |
| Stacked Spline Area      | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)  | [`IgrStackedSplineAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedsplineareaseries.html)  |
| Stacked 100% Area        | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)  | [`IgrStacked100AreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100areaseries.html)  |
| Stacked 100% Spline Area | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)  | [`IgrStacked100SplineAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100splineareaseries.html)  |
