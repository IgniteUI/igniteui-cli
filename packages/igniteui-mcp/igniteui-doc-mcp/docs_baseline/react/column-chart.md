---
title: React Column Chart | Data Visualization | Infragistics
_description: Infragistics' React Column Chart
_keywords: React Charts, Column Chart, Column Graph, Vertical Bar Chart, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "XamDataChart", "ColumnSeries", "WaterfallSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "RangeColumnSeries", "RadialColumnSeries", "CategoryChartType", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Column Chart
_premium: true
---

# React Column Chart

The Ignite UI for React Column Char, Column Graph, or Vertical Bar Chart is among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by columns with equal widths but different heights. These columns extend from the bottom to top of the chart towards the values of data points. This chart emphasizes the amount of change over a period of time or compares multiple items. Column Chart is very similar to [Bar Chart](bar-chart.md) except that Column Chart renders in vertical orientation (up and down) while [Bar Chart](bar-chart.md) has horizontal orientation (left to right) or 90 degrees clockwise rotation.

## React Column Chart Example

You can create React Column Chart in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by binding your data and setting [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) to **Column** enum, as shown in the example below:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';

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
                Highest Grossing Movie Franchises
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
                    chartType="Column"
                    dataSource={this.highestGrossingMovies}
                    legend={this.legend}
                    xAxisInterval="1"
                    yAxisTitle="Billions of U.S. Dollars"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    isCategoryHighlightingEnabled="false"
                    crosshairsDisplayMode="None">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## Column Charts Recommendations

### Column Charts Use Cases

There are several uses cases for Column Charts. When you:

- Need to compare data values of related categories.
- Need to compare data over a time period.
- Need to display negative values as well as positive values in the same data set.
- Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming, and Drill-down.

### Column Charts Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.

### When Not to Use Column Charts

- You have many (more than 10 or 12) series of data. Your goal is to ensure the chart is readable.

### Column Charts Data Structure

- The data model must contain at least one numeric property.
- The data model may contain an options string or date-time property for labels.
- The data source should contain at least one data item.

## React Column Chart with Single Series

Column Chart belongs to a group of Category Series and it is rendered using a collection of rectangles that extend from the bottom to top of the chart towards the values of data points.

You can create this type of chart in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property to **Column** value, as shown in the example below:

```typescript
export class TemperatureAverageDataItem {
    public constructor(init: Partial<TemperatureAverageDataItem>) {
        Object.assign(this, init);
    }

    public month: string;
    public temperature: number;

}
export class TemperatureAverageData extends Array<TemperatureAverageDataItem> {
    public constructor(items: Array<TemperatureAverageDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TemperatureAverageDataItem({ month: `Jan`, temperature: 3 }),
                new TemperatureAverageDataItem({ month: `Feb`, temperature: 4 }),
                new TemperatureAverageDataItem({ month: `Mar`, temperature: 9 }),
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
import { TemperatureAverageDataItem, TemperatureAverageData } from './TemperatureAverageData';

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
                Average Temperature Range in New York
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Column"
                    dataSource={this.temperatureAverageData}
                    yAxisTitle="Temperature in Degrees Celsius"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    isCategoryHighlightingEnabled="false"
                    highlightingMode="FadeOthersSpecific"
                    highlightingBehavior="NearestItemsAndSeries"
                    crosshairsDisplayMode="None">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _temperatureAverageData: TemperatureAverageData = null;
    public get temperatureAverageData(): TemperatureAverageData {
        if (this._temperatureAverageData == null)
        {
            this._temperatureAverageData = new TemperatureAverageData();
        }
        return this._temperatureAverageData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Column Chart with Multiple Series

The Column Chart is able to render multiple columns per category for comparison purposes. You can create this type of chart in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by binding your data and setting the [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property to **Column** value, as shown in the example below:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';

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
                Highest Grossing Movie Franchises
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
                    chartType="Column"
                    dataSource={this.highestGrossingMovies}
                    legend={this.legend}
                    xAxisInterval="1"
                    yAxisTitle="Billions of U.S. Dollars"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    isCategoryHighlightingEnabled="false"
                    crosshairsDisplayMode="None">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Column Chart Styling

The React Column Chart has many options for styling and modification of the visual appearance.

You can create this type of chart in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by binding your data, as shown in the example below:

```typescript
export class EnergyRenewableConsumptionItem {
    public constructor(init: Partial<EnergyRenewableConsumptionItem>) {
        Object.assign(this, init);
    }

    public location: string;
    public year: number;
    public hydro: number;
    public solar: number;
    public wind: number;
    public other: number;

}
export class EnergyRenewableConsumption extends Array<EnergyRenewableConsumptionItem> {
    public constructor(items: Array<EnergyRenewableConsumptionItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyRenewableConsumptionItem({ location: `China`, year: 2019, hydro: 1269.5, solar: 223, wind: 405.2, other: 102.8 }),
                new EnergyRenewableConsumptionItem({ location: `Europe`, year: 2019, hydro: 632.54, solar: 154, wind: 461.3, other: 220.3 }),
                new EnergyRenewableConsumptionItem({ location: `USA`, year: 2019, hydro: 271.16, solar: 108, wind: 303.4, other: 78.34 }),
                // ... 2 more items
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
import { EnergyRenewableConsumptionItem, EnergyRenewableConsumption } from './EnergyRenewableConsumption';

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
                Percentage Change in Energy Generation
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
                    dataSource={this.energyRenewableConsumption}
                    chartType="Column"
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    isSeriesHighlightingEnabled="true"
                    brushes="rgba(157, 231, 114, 1) rgba(139, 91, 177, 1) rgba(109, 177, 255, 1) rgba(238, 88, 121, 1) rgba(248, 161, 95, 1)"
                    outlines="white"
                    xAxisMajorStroke="lightgray"
                    xAxisGap="0.5"
                    crosshairsDisplayMode="None"
                    isCategoryHighlightingEnabled="false"
                    highlightingMode="FadeOthersSpecific"
                    highlightingBehavior="NearestItemsAndSeries">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _energyRenewableConsumption: EnergyRenewableConsumption = null;
    public get energyRenewableConsumption(): EnergyRenewableConsumption {
        if (this._energyRenewableConsumption == null)
        {
            this._energyRenewableConsumption = new EnergyRenewableConsumption();
        }
        return this._energyRenewableConsumption;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## Advanced Types of Column Charts

The following sections explain more advanced types of React Column Charts that can be created using the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control instead of [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control with simplified API.

## React Waterfall Chart

The Waterfall Chart belongs to a group of category charts and it is rendered using a collection of vertical columns that show the difference between consecutive data points. The columns are color coded for distinguishing between positive and negative changes in value. The Waterfall Chart is similar in appearance to the [Range Column Chart](column-chart.md#react-range-column-chart), but it requires only one numeric data column rather than two columns for each data point.

You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrWaterfallSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrwaterfallseries.html), as shown in the example below:

```typescript
export class CompanyIncomeDataItem {
    public constructor(init: Partial<CompanyIncomeDataItem>) {
        Object.assign(this, init);
    }

    public costs: number;
    public netIncome: number;
    public category: string;

}
export class CompanyIncomeData extends Array<CompanyIncomeDataItem> {
    public constructor(items: Array<CompanyIncomeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CompanyIncomeDataItem({ costs: 55, netIncome: null, category: `Revenue` }),
                new CompanyIncomeDataItem({ costs: 45, netIncome: null, category: `Expenses` }),
                new CompanyIncomeDataItem({ costs: 35, netIncome: null, category: `Research` }),
                // ... 4 more items
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

import { IgrDataChartCoreModule, IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrWaterfallSeries } from 'igniteui-react-charts';
import { CompanyIncomeDataItem, CompanyIncomeData } from './CompanyIncomeData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private waterfallSeries1: IgrWaterfallSeries
    private waterfallSeries2: IgrWaterfallSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Facebook Consolidated Statements of Income
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false">
                    <IgrCategoryXAxis
                        name="xAxis"
                        label="category"
                        interval="1"
                        dataSource={this.companyIncomeData}
                        overlap="1">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Millions of Dollars"
                        titleAngle="90"
                        titleLeftMargin="10"
                        minimumValue="0"
                        maximumValue="60">
                    </IgrNumericYAxis>
                    <IgrWaterfallSeries
                        name="WaterfallSeries1"
                        title="Value"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.companyIncomeData}
                        valueMemberPath="costs"
                        showDefaultTooltip="true"
                        isTransitionInEnabled="true">
                    </IgrWaterfallSeries>
                    <IgrWaterfallSeries
                        name="WaterfallSeries2"
                        title="Value"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.companyIncomeData}
                        brush="rgba(116, 70, 185, 1)"
                        outline="rgba(116, 70, 185, 1)"
                        valueMemberPath="netIncome"
                        showDefaultTooltip="true"
                        isTransitionInEnabled="true">
                    </IgrWaterfallSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _companyIncomeData: CompanyIncomeData = null;
    public get companyIncomeData(): CompanyIncomeData {
        if (this._companyIncomeData == null)
        {
            this._companyIncomeData = new CompanyIncomeData();
        }
        return this._companyIncomeData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Stacked Column Chart

The Stacked Column Chart is similar to the [Category Column Chart](column-chart.md#react-column-chart-example) in all aspects, except the series are represented on top of one another rather than to the side. The Stacked Column Chart is used to show comparing results between series. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the Y-Axis, and all negative values are grouped on the negative side of the Y-Axis. The Stacked Column Chart uses the same concepts of data plotting as the [Stacked Bar Chart](stacked-chart.md#react-stacked-bar-chart) but data points are stacked along vertical line (Y-Axis) rather than along horizontal line (X-Axis).

You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrStackedBarSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedbarseries.html), as shown in the example below:

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
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrStackedColumnSeries, IgrStackedFragmentSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
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
    private stackedColumnSeries: IgrStackedColumnSeries
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
                        titleLeftMargin="10"
                        labelFormat="{0} m">
                    </IgrNumericYAxis>
                    <IgrStackedColumnSeries
                        name="stackedColumnSeries"
                        dataSource={this.continentsBirthRate}
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        showDefaultTooltip="false">
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
                    </IgrStackedColumnSeries>
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

## React Stacked 100% Column Chart

The Stacked 100% Column Chart is identical to the [Stacked Column Chart](stacked-chart.md#react-stacked-column-chart) in all aspects except in their treatment of the values on Y-Axis. Instead of presenting a direct representation of the data, the Stacked 100 Column Chart presents the data in terms of percent of the sum of all values in a data point.

You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrStacked100BarSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100barseries.html), as shown in the example below:

```typescript
export class OnlineTrafficByDeviceItem {
    public constructor(init: Partial<OnlineTrafficByDeviceItem>) {
        Object.assign(this, init);
    }

    public category: string;
    public desktop: number;
    public mobile: number;
    public tablet: number;

}
export class OnlineTrafficByDevice extends Array<OnlineTrafficByDeviceItem> {
    public constructor(items: Array<OnlineTrafficByDeviceItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OnlineTrafficByDeviceItem({ category: `Apparel`, desktop: 27, mobile: 66, tablet: 7 }),
                new OnlineTrafficByDeviceItem({ category: `Beauty`, desktop: 29, mobile: 66, tablet: 5 }),
                new OnlineTrafficByDeviceItem({ category: `Travel`, desktop: 41, mobile: 51, tablet: 8 }),
                // ... 4 more items
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
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrStacked100ColumnSeries, IgrStackedFragmentSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { OnlineTrafficByDeviceItem, OnlineTrafficByDevice } from './OnlineTrafficByDevice';

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
    private stacked100ColumnSeries: IgrStacked100ColumnSeries
    private s1: IgrStackedFragmentSeries
    private s2: IgrStackedFragmentSeries
    private s3: IgrStackedFragmentSeries
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
                Distribution of Online Traffic Worldwide, by Device
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
                        dataSource={this.onlineTrafficByDevice}
                        label="category"
                        gap="0.75">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        minimumValue="0">
                    </IgrNumericYAxis>
                    <IgrStacked100ColumnSeries
                        name="stacked100ColumnSeries"
                        dataSource={this.onlineTrafficByDevice}
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        showDefaultTooltip="true"
                        areaFillOpacity="1">
                        <IgrStackedFragmentSeries
                            name="s1"
                            valueMemberPath="desktop"
                            title="Desktop">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s2"
                            valueMemberPath="mobile"
                            title="Mobile">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s3"
                            valueMemberPath="tablet"
                            title="Tablet">
                        </IgrStackedFragmentSeries>
                    </IgrStacked100ColumnSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _onlineTrafficByDevice: OnlineTrafficByDevice = null;
    public get onlineTrafficByDevice(): OnlineTrafficByDevice {
        if (this._onlineTrafficByDevice == null)
        {
            this._onlineTrafficByDevice = new OnlineTrafficByDevice();
        }
        return this._onlineTrafficByDevice;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Range Column Chart

The React Range Column Chart belongs to a group of range charts and is rendered using vertical rectangles that can appear in the middle of the plot area of the chart, rather than stretching from the bottom like the traditional [Category Column Chart](column-chart.md#react-column-chart-example). This type of series emphasizes the amount of change between low values and high values in the same data point over a period of time or compares multiple items. Range values are represented on the Y-Axis and categories are displayed on the X-Axis.

The Range Column Chart is identical to the [Range Area Chart](area-chart.md)(area-chart.md#react-range-area-chart) in all aspects except that the ranges are represented as a set of vertical columns rather than a filled area.

You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrRangeColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrrangecolumnseries.html), as shown in the example below:

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
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrRangeColumnSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
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
    private rangeColumnSeries1: IgrRangeColumnSeries
    private rangeColumnSeries2: IgrRangeColumnSeries
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
                    <IgrRangeColumnSeries
                        name="RangeColumnSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="Los Angeles"
                        lowMemberPath="lowLA"
                        highMemberPath="highLA"
                        showDefaultTooltip="false"
                        dataSource={this.temperatureRangeData}>
                    </IgrRangeColumnSeries>
                    <IgrRangeColumnSeries
                        name="RangeColumnSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="New York"
                        lowMemberPath="lowNY"
                        highMemberPath="highNY"
                        showDefaultTooltip="false"
                        dataSource={this.temperatureRangeData}>
                    </IgrRangeColumnSeries>
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

## React Radial Column Chart

The Radial Column Chart belongs to a group of [Radial Chart](radial-chart.md), and is visualized by using a collection of rectangles that extend from the center of the chart toward the locations of data points. This utilizes the same concepts of data plotting as the [Category Column Chart](column-chart.md#react-column-chart-example), but wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrRadialColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrradialcolumnseries.html), as shown in the example below:

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

import { IgrDataChartCoreModule, IgrDataChartRadialModule, IgrDataChartRadialCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrLegendModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryAngleAxis, IgrNumericRadiusAxis, IgrRadialColumnSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { FootballPlayerStatsItem, FootballPlayerStats } from './FootballPlayerStats';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartRadialModule,
    IgrDataChartRadialCoreModule,
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
    private angleAxis: IgrCategoryAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private radialColumnSeries1: IgrRadialColumnSeries
    private radialColumnSeries2: IgrRadialColumnSeries
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
                    <IgrRadialColumnSeries
                        name="RadialColumnSeries1"
                        dataSource={this.footballPlayerStats}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="ronaldo"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.8"
                        thickness="3"
                        title="Ronaldo">
                    </IgrRadialColumnSeries>
                    <IgrRadialColumnSeries
                        name="RadialColumnSeries2"
                        dataSource={this.footballPlayerStats}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="messi"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.8"
                        thickness="3"
                        title="Messi">
                    </IgrRadialColumnSeries>
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

## Additional Resources

You can find more information about related chart types in these topics:

- [Bar Chart](bar-chart.md)
- [Composite Chart](composite-chart.md)
- [Radial Chart](radial-chart.md)
- [Stacked Chart](stacked-chart.md)

## API References

The following table lists API members mentioned in the above sections:

| Chart Type          | Control Name       | API Members  |
| --------------------|--------------------|------------------------|
| Column              | [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)    | [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) = **Column** |
| Radial Column       | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)     | [`IgrRadialColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrradialcolumnseries.html) |
| Range Column        | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)     | [`IgrRangeColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrrangecolumnseries.html) |
| Stacked Column      | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)     | [`IgrStackedColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedcolumnseries.html) |
| Stacked 100% Column | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)     | [`IgrStacked100ColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100columnseries.html) |
| Waterfall           | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)     | [`IgrWaterfallSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrwaterfallseries.html) |
