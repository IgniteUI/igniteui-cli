---
title: React Scatter Chart | Data Visualization | Infragistics
_description: Infragistics' React Scatter Chart
_keywords: React Charts, Scatter Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "ScatterSeries", "ScatterLineSeries", "ScatterSplineSeries", "HighDensityScatterSeries", "ScatterAreaSeries", "ScatterContourSeries", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Scatter Chart
_premium: true
---

# React Scatter Charts

The Ignite UI for React Scatter Chart belongs to a group of charts that show the relationship among items in distinct series of data or to plot data items using numeric x and y coordinates. These charts draw attention to uneven intervals or clusters of data. They are often used to plot scientific data, and can highlight the deviation of collected data from predicted results. Also, you can use them to organize data chronologically (even if the data is not in chronological order).

## React Scatter Marker Chart

React Scatter Marker Chart renders as a collection of markers, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system. You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterseries.html), as shown in the example below:

```typescript
export class CountryDemographicAfricanItem {
    public constructor(init: Partial<CountryDemographicAfricanItem>) {
        Object.assign(this, init);
    }

    public population: number;
    public birthRate: number;
    public deathRate: number;
    public name: string;

}
export class CountryDemographicAfrican extends Array<CountryDemographicAfricanItem> {
    public constructor(items: Array<CountryDemographicAfricanItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryDemographicAfricanItem({ population: 39728000, birthRate: 23.9, deathRate: 4.77, name: `Algeria` }),
                new CountryDemographicAfricanItem({ population: 27884000, birthRate: 42.32, deathRate: 8.68, name: `Angola` }),
                new CountryDemographicAfricanItem({ population: 10576000, birthRate: 37.43, deathRate: 9.32, name: `Benin` }),
                // ... 51 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class CountryDemographicEuropeItem {
    public constructor(init: Partial<CountryDemographicEuropeItem>) {
        Object.assign(this, init);
    }

    public population: number;
    public birthRate: number;
    public deathRate: number;
    public name: string;

}
export class CountryDemographicEurope extends Array<CountryDemographicEuropeItem> {
    public constructor(items: Array<CountryDemographicEuropeItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryDemographicEuropeItem({ population: 2891000, birthRate: 11.88, deathRate: 7.22, name: `Albania` }),
                new CountryDemographicEuropeItem({ population: 8679000, birthRate: 9.8, deathRate: 9.6, name: `Austria` }),
                new CountryDemographicEuropeItem({ population: 9439000, birthRate: 12.5, deathRate: 12.6, name: `Belarus` }),
                // ... 42 more items
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

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterSeries } from 'igniteui-react-charts';
import { CountryDemographicEuropeItem, CountryDemographicEurope } from './CountryDemographicEurope';
import { CountryDemographicAfricanItem, CountryDemographicAfrican } from './CountryDemographicAfrican';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
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
    private xAxis: IgrNumericXAxis
    private yAxis: IgrNumericYAxis
    private scatterSeries1: IgrScatterSeries
    private scatterSeries2: IgrScatterSeries

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Population Statistics for Selected Continents
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
                    legend={this.legend}>
                    <IgrNumericXAxis
                        name="xAxis"
                        title="Death Rate (per 1,000 people)"
                        minimumValue="5"
                        maximumValue="15">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Birth Rate (per 1,000 people)"
                        minimumValue="0"
                        maximumValue="50"
                        interval="10">
                    </IgrNumericYAxis>
                    <IgrScatterSeries
                        name="scatterSeries1"
                        title="Europe"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="deathRate"
                        yMemberPath="birthRate"
                        dataSource={this.countryDemographicEurope}
                        markerType="Circle"
                        showDefaultTooltip="true">
                    </IgrScatterSeries>
                    <IgrScatterSeries
                        name="scatterSeries2"
                        title="Africa"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="deathRate"
                        yMemberPath="birthRate"
                        dataSource={this.countryDemographicAfrican}
                        markerType="Circle"
                        showDefaultTooltip="true">
                    </IgrScatterSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _countryDemographicEurope: CountryDemographicEurope = null;
    public get countryDemographicEurope(): CountryDemographicEurope {
        if (this._countryDemographicEurope == null)
        {
            this._countryDemographicEurope = new CountryDemographicEurope();
        }
        return this._countryDemographicEurope;
    }

    private _countryDemographicAfrican: CountryDemographicAfrican = null;
    public get countryDemographicAfrican(): CountryDemographicAfrican {
        if (this._countryDemographicAfrican == null)
        {
            this._countryDemographicAfrican = new CountryDemographicAfrican();
        }
        return this._countryDemographicAfrican;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Scatter Line Chart

React Scatter Line Chart renders as a collection of markers connected by a straight lines, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system. You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrScatterLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterlineseries.html), as shown in the example below:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterLineSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { HealthDataForGermanyItem, HealthDataForGermany } from './HealthDataForGermany';
import { HealthDataForFranceItem, HealthDataForFrance } from './HealthDataForFrance';

const mods: any[] = [
    IgrLegendModule,
    IgrNumberAbbreviatorModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
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
    private xAxis: IgrNumericXAxis
    private yAxis: IgrNumericYAxis
    private scatterLineSeries1: IgrScatterLineSeries
    private scatterLineSeries2: IgrScatterLineSeries
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
                Life Expectancy vs Health Expenditure
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
                    legend={this.legend}>
                    <IgrNumericXAxis
                        name="xAxis"
                        title="Life Expectancy (in years)"
                        minimumValue="72"
                        maximumValue="84"
                        interval="2">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Health Expenditure per Capita"
                        abbreviateLargeNumbers="true"
                        minimumValue="1000"
                        maximumValue="6000"
                        interval="1000">
                    </IgrNumericYAxis>
                    <IgrScatterLineSeries
                        name="ScatterLineSeries1"
                        title="Germany"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="lifeExpectancy"
                        yMemberPath="healthExpense"
                        dataSource={this.healthDataForGermany}
                        markerType="Circle"
                        showDefaultTooltip="true">
                    </IgrScatterLineSeries>
                    <IgrScatterLineSeries
                        name="ScatterLineSeries2"
                        title="France"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="lifeExpectancy"
                        yMemberPath="healthExpense"
                        dataSource={this.healthDataForFrance}
                        markerType="Circle"
                        showDefaultTooltip="true">
                    </IgrScatterLineSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _healthDataForGermany: HealthDataForGermany = null;
    public get healthDataForGermany(): HealthDataForGermany {
        if (this._healthDataForGermany == null)
        {
            this._healthDataForGermany = new HealthDataForGermany();
        }
        return this._healthDataForGermany;
    }

    private _healthDataForFrance: HealthDataForFrance = null;
    public get healthDataForFrance(): HealthDataForFrance {
        if (this._healthDataForFrance == null)
        {
            this._healthDataForFrance = new HealthDataForFrance();
        }
        return this._healthDataForFrance;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Scatter Spline Chart

React Scatter Spline Chart renders as a collection of markers connected by a curved spline, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system. You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrScatterSplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscattersplineseries.html), as shown in the example below:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterSplineSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { HealthDataForGermanyItem, HealthDataForGermany } from './HealthDataForGermany';
import { HealthDataForFranceItem, HealthDataForFrance } from './HealthDataForFrance';

const mods: any[] = [
    IgrLegendModule,
    IgrNumberAbbreviatorModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
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
    private xAxis: IgrNumericXAxis
    private yAxis: IgrNumericYAxis
    private scatterSplineSeries1: IgrScatterSplineSeries
    private scatterSplineSeries2: IgrScatterSplineSeries
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
                Life Expectancy vs Health Expenditure
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
                    legend={this.legend}>
                    <IgrNumericXAxis
                        name="xAxis"
                        title="Life Expectancy (in years)"
                        minimumValue="72"
                        maximumValue="84"
                        interval="2">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Health Expenditure per Capita"
                        abbreviateLargeNumbers="true"
                        minimumValue="1000"
                        maximumValue="6000"
                        interval="1000">
                    </IgrNumericYAxis>
                    <IgrScatterSplineSeries
                        name="scatterSplineSeries1"
                        title="Germany"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="lifeExpectancy"
                        yMemberPath="healthExpense"
                        dataSource={this.healthDataForGermany}
                        markerType="Circle"
                        showDefaultTooltip="true">
                    </IgrScatterSplineSeries>
                    <IgrScatterSplineSeries
                        name="scatterSplineSeries2"
                        title="France"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="lifeExpectancy"
                        yMemberPath="healthExpense"
                        dataSource={this.healthDataForFrance}
                        markerType="Circle"
                        showDefaultTooltip="true">
                    </IgrScatterSplineSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _healthDataForGermany: HealthDataForGermany = null;
    public get healthDataForGermany(): HealthDataForGermany {
        if (this._healthDataForGermany == null)
        {
            this._healthDataForGermany = new HealthDataForGermany();
        }
        return this._healthDataForGermany;
    }

    private _healthDataForFrance: HealthDataForFrance = null;
    public get healthDataForFrance(): HealthDataForFrance {
        if (this._healthDataForFrance == null)
        {
            this._healthDataForFrance = new HealthDataForFrance();
        }
        return this._healthDataForFrance;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Scatter High Density Chart

Use the React Scatter High Density (HD) Chart to bind and show scatter data ranging from thousands to millions of data points with very little loading time. Due to this chart type being designed for such a large amount of points, it is visualized as tiny dots as opposed to full sized markers, and displays areas with the most data using a higher color density representing a cluster of data points. You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrHighDensityScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrhighdensityscatterseries.html), as shown in the example below:

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// elements of scatter series:
import { IgrHighDensityScatterSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrHighDensityScatterSeriesModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import { SampleDensityData } from './SampleDensityData';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrHighDensityScatterSeriesModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();

export default class DataChartTypeScatterDensitySeries extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: SampleDensityData.create()
        };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">

                <div className="options horizontal">
                    <div className="legend-title">
                        <span>Stars Distribution in Milky Way Galaxy</span>
                    </div>
                </div>

                <div className="container vertical">
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        dataSource={this.state.data} >
                        <IgrNumericXAxis
                            name="xAxis"
                            abbreviateLargeNumbers={true}
                            titleBottomMargin={10}
                            title="Plane of Rotation (in Light Years)"/>
                        <IgrNumericYAxis
                            name="yAxis"
                            abbreviateLargeNumbers={true}
                            titleLeftMargin={10}
                            title="Vertical Plane (in Light Years)"/>
                        <IgrHighDensityScatterSeries
                            name="series"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            title="Distribution"
                            xMemberPath="X"
                            yMemberPath="Y"
                            showDefaultTooltip="true"
                            mouseOverEnabled="true"
                            progressiveLoad="true"
                            heatMinimumColor="Black"
                            heatMaximumColor="Yellow"
                            heatMaximum={1}
                            heatMinimum={5}
                            resolution={3}/>
                    </IgrDataChart>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartTypeScatterDensitySeries/>);
```

<div class="divider--half"></div>

## React Scatter Area Chart

React Scatter Area Chart draws a colored surface based on a triangulation of X and Y data with a numeric data value assigned to each point. This chart is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterareaseries.html), as shown in the example below:

```typescript
export class SampleScatterData {

    public static create(): any[] {

        const data: any[] = [];
        const xMin = -180;
        const xMax = 180;
        const yMin = -90;
        const yMax = 90;
        const xCount = 11;
        const yCount = 11;

        const xStep = (xMax - xMin) / (xCount - 1);
        const yStep = (yMax - yMin) / (yCount - 1);
        let index = 0;
        for (let x = xMin; x <= xMax; x += xStep)
        {
            for (let y = yMin; y <= yMax; y += yStep)
            {
                const z = Math.cos(x) + Math.cos(y);
                data.push({"X": x, "Y": y, "Z": z, "Index": index++});
            }
        }
        return data;
    }

    public static createWaveData(): any[] {
        const data: any[] = [];
        let index = 0;
        for (let angle = 0; angle <= 360; angle += 10)
        {
            const radians = angle * Math.PI / 180;
            const sin = Math.sin(radians);
            const cos = Math.cos(radians);
            data.push({"Angle": angle, "Radians": radians, "SinValue": sin, "CosValue": cos, "Index": index++});
        }
        return data;
    }

}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// elements of scatter series:
import { IgrScatterAreaSeries } from 'igniteui-react-charts';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { ColorScaleInterpolationMode } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { SampleScatterData } from './SampleScatterData';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeScatterAreaSeries extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        let colorScale = new IgrCustomPaletteColorScale({});
        colorScale.interpolationMode = ColorScaleInterpolationMode.InterpolateHSV;
        colorScale.minimumValue = -2;
        colorScale.maximumValue = 2;
        colorScale.palette = [ "#8670CB", "#4AC4FF", "#B5CC2E", "#FC8612", "#ED4840" ];

        this.state = {
            data: SampleScatterData.create(),
            scale: colorScale
        };
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="options horizontal">
                <div className="legend-title">
                    <span>Distribution of Magnetic Field</span>
                </div>
            </div>

            <div className="container vertical">
                <IgrDataChart
                    width="100%"
                    height="100%"
                    gridMode="BeforeSeries"
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}
                    dataSource={this.state.data} >

                    {/* primary axes required for scatter-contour-series  */}
                    <IgrNumericXAxis name="xAxis1" labelLocation="OutsideBottom" title="Longitude" minimumValue={-180} maximumValue={180} />
                    <IgrNumericYAxis name="yAxis1" labelLocation="OutsideLeft" title="Latitude" minimumValue={-90} maximumValue={90} />

                    {/* optional axes that provide more context for displayed data */}
                    <IgrNumericXAxis name="xAxis2" labelLocation="OutsideTop" title="Longitude" minimumValue={-180} maximumValue={180} />
                    <IgrNumericYAxis name="yAxis2" labelLocation="OutsideRight" title="Latitude" minimumValue={-90} maximumValue={90} />

                    <IgrScatterAreaSeries
                        name="series"
                        xAxisName="xAxis1"
                        yAxisName="yAxis1"
                        xMemberPath="X"
                        yMemberPath="Y"
                        colorMemberPath="Z"
                        colorScale={this.state.scale}
                        showDefaultTooltip="true"/>
               </IgrDataChart>
            </div>
        </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartTypeScatterAreaSeries/>);
```

<div class="divider--half"></div>

## React Scatter Contour Chart

React Scatter Contour Chart draws colored contour lines based on a triangulation of X and Y data with a numeric data value assigned to each point. This chart is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrScatterContourSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscattercontourseries.html), as shown in the example below:

```typescript
export class SampleScatterData {

    public static create(): any[] {

        const data: any[] = [];
        const xMin = -180;
        const xMax = 180;
        const yMin = -90;
        const yMax = 90;
        const xCount = 11;
        const yCount = 11;

        const xStep = (xMax - xMin) / (xCount - 1);
        const yStep = (yMax - yMin) / (yCount - 1);
        let index = 0;
        for (let x = xMin; x <= xMax; x += xStep)
        {
            for (let y = yMin; y <= yMax; y += yStep)
            {
                const z = Math.cos(x) + Math.cos(y);
                data.push({"X": x, "Y": y, "Z": z, "Index": index++});
            }
        }
        return data;
    }

    public static createWaveData(): any[] {
        const data: any[] = [];
        let index = 0;
        for (let angle = 0; angle <= 360; angle += 10)
        {
            const radians = angle * Math.PI / 180;
            const sin = Math.sin(radians);
            const cos = Math.cos(radians);
            data.push({"Angle": angle, "Radians": radians, "SinValue": sin, "CosValue": cos, "Index": index++});
        }
        return data;
    }

}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// elements of scatter series:
import { IgrScatterContourSeries } from 'igniteui-react-charts';
import { IgrValueBrushScale } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { SampleScatterData } from './SampleScatterData';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeScatterContourSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        let fillScale = new IgrValueBrushScale({});
        fillScale.minimumValue = -2;
        fillScale.maximumValue = 2;
        fillScale.brushes = [ "#8670CB", "#4AC4FF", "#B5CC2E", "#FC8612", "#ED4840" ];

        this.state = {
            data: SampleScatterData.create(),
            scale: fillScale
        };
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="options horizontal">
                <div className="legend-title">
                    <span>Distribution of Magnetic Field</span>
                </div>
            </div>

            <div className="container vertical">
                <IgrDataChart
                    width="100%"
                    height="100%"
                    gridMode="BeforeSeries"
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}
                    dataSource={this.state.data} >

                    {/* primary axes required for scatter-contour-series  */}
                    <IgrNumericXAxis name="xAxis1" labelLocation="OutsideBottom" title="Longitude" minimumValue={-180} maximumValue={180} />
                    <IgrNumericYAxis name="yAxis1" labelLocation="OutsideLeft" title="Latitude" minimumValue={-90} maximumValue={90} />

                    {/* optional axes that provide more context for displayed data */}
                    <IgrNumericXAxis name="xAxis2" labelLocation="OutsideTop" title="Longitude" minimumValue={-180} maximumValue={180} />
                    <IgrNumericYAxis name="yAxis2" labelLocation="OutsideRight" title="Latitude" minimumValue={-90} maximumValue={90} />

                    <IgrScatterContourSeries
                        name="series"
                        xAxisName="xAxis1"
                        yAxisName="yAxis1"
                        xMemberPath="X"
                        yMemberPath="Y"
                        valueMemberPath="Z"
                        fillScale={this.state.scale}
                        showDefaultTooltip="true"/>
               </IgrDataChart>
            </div>
        </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartTypeScatterContourSeries/>);
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Bubble Chart](bubble-chart.md)
- [Line Chart](line-chart.md)
- [Spline Chart](spline-chart.md)
- [Shape Chart](shape-chart.md)

## API References

The following table lists API members mentioned in the above sections:

|Chart Type                  | Control Name   | API Members |
|----------------------------|----------------|------------------------ |
|Scatter Marker              | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) | [`IgrScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterseries.html) |
|Scatter Line                | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) | [`IgrScatterLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterlineseries.html) |
|Scatter Spline              | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) | [`IgrScatterSplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscattersplineseries.html) |
|High Density Scatter        | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) | [`IgrHighDensityScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrhighdensityscatterseries.html) |
|Scatter Area                | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) | [`IgrScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterareaseries.html) |
|Scatter Contour             | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) | [`IgrScatterContourSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscattercontourseries.html) |
