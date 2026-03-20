---
title: React Bubble Chart | Data Visualization | Infragistics
_description: Infragistics' React Bubble Chart
_keywords: React Charts, Bubble Chart, Infragistics
_license: commercial
mentionedTypes: ["Series", "BubbleSeries", "ScatterSeries", "MarkerType"]
namespace: Infragistics.Controls.Charts
_tocName: Bubble Chart
_premium: true
---

# React Bubble Chart

The Ignite UI for React Bubble Chart is a type of [Scatter Chart](scatter-chart.md) that show markers with variable scaling to represent the relationship among items in several distinct series of data or to plot data items using x and y coordinates. These coordinates of the data point are determined by two numeric data columns. The Bubble Chart draws attention to uneven intervals or clusters of data. This chart is often used to plot scientific data, and can highlight the deviation of collected data from predicted results. The Bubble Chart has many of the characteristics of the [Scatter Marker Chart](scatter-chart.md#react-scatter-marker-chart) but with the option to have various radius scale sizes.

## React Bubble Chart Example

You can create Ignite UI for React Bubble Chart in [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control using the [`IgrBubbleSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html) and two numeric axes, as shown in the example below.

```typescript
export class CountryStatsAfricaItem {
    public constructor(init: Partial<CountryStatsAfricaItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public population: number;
    public workedHours: number;
    public gDP: number;
    public name: string;

}
export class CountryStatsAfrica extends Array<CountryStatsAfricaItem> {
    public constructor(items: Array<CountryStatsAfricaItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryStatsAfricaItem({ code: `DZA`, population: 39728000, workedHours: 47.5, gDP: 13725, name: `Algeria` }),
                new CountryStatsAfricaItem({ code: `AGO`, population: 27884000, workedHours: 39.8, gDP: 6228, name: `Angola` }),
                new CountryStatsAfricaItem({ code: `BEN`, population: 10576000, workedHours: 43.7, gDP: 1987, name: `Benin` }),
                // ... 48 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class CountryStatsEuropeItem {
    public constructor(init: Partial<CountryStatsEuropeItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public population: number;
    public workedHours: number;
    public gDP: number;
    public name: string;

}
export class CountryStatsEurope extends Array<CountryStatsEuropeItem> {
    public constructor(items: Array<CountryStatsEuropeItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryStatsEuropeItem({ code: `ALB`, population: 2891000, workedHours: 41, gDP: 10970, name: `Albania` }),
                new CountryStatsEuropeItem({ code: `AUT`, population: 8679000, workedHours: 30.75, gDP: 44305, name: `Austria` }),
                new CountryStatsEuropeItem({ code: `BLR`, population: 9439000, workedHours: 43.5, gDP: 17230, name: `Belarus` }),
                // ... 38 more items
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

import { IgrLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries, IgrSizeScale, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { CountryStatsAfricaItem, CountryStatsAfrica } from './CountryStatsAfrica';
import { CountryStatsEuropeItem, CountryStatsEurope } from './CountryStatsEurope';

const mods: any[] = [
    IgrLegendModule,
    IgrNumberAbbreviatorModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
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
    private xAxis: IgrNumericXAxis
    private yAxis: IgrNumericYAxis
    private bubbleSeries1: IgrBubbleSeries
    private  _sizeScale1: IgrSizeScale | null = null;
    public get sizeScale1(): IgrSizeScale {
        if (this._sizeScale1 == null)
        {
            var sizeScale1 = new IgrSizeScale({});
            sizeScale1.isLogarithmic = false;
            sizeScale1.minimumValue = 10;
            sizeScale1.maximumValue = 80;

            this._sizeScale1 = sizeScale1;
        }
        return this._sizeScale1;
    }
    private bubbleSeries2: IgrBubbleSeries
    private  _sizeScale2: IgrSizeScale | null = null;
    public get sizeScale2(): IgrSizeScale {
        if (this._sizeScale2 == null)
        {
            var sizeScale2 = new IgrSizeScale({});
            sizeScale2.isLogarithmic = false;
            sizeScale2.minimumValue = 10;
            sizeScale2.maximumValue = 80;

            this._sizeScale2 = sizeScale2;
        }
        return this._sizeScale2;
    }
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
                Total Population of Selected Countries
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
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true"
                        title="Population">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="GDP per Capita"
                        maximumValue="1000000"
                        titleLeftMargin="10"
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true">
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        name="bubbleSeries1"
                        title="African Countries"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="population"
                        yMemberPath="gDP"
                        radiusMemberPath="workedHours"
                        xMemberAsLegendLabel="Population"
                        yMemberAsLegendLabel="GDP"
                        radiusMemberAsLegendLabel="Work Hours"
                        dataSource={this.countryStatsAfrica}
                        markerType="Circle"
                        showDefaultTooltip="true"
                        radiusScale={this.sizeScale1}>
                    </IgrBubbleSeries>
                    <IgrBubbleSeries
                        name="bubbleSeries2"
                        title="European Countries"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="population"
                        yMemberPath="gDP"
                        radiusMemberPath="workedHours"
                        xMemberAsLegendLabel="Population"
                        yMemberAsLegendLabel="GDP"
                        radiusMemberAsLegendLabel="Work Hours"
                        dataSource={this.countryStatsEurope}
                        markerType="Circle"
                        showDefaultTooltip="true"
                        radiusScale={this.sizeScale2}>
                    </IgrBubbleSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer"
                        valueRowMarginTop="1"
                        labelTextMarginTop="1"
                        titleTextMarginTop="1"
                        unitsTextMarginTop="1"
                        valueRowMarginBottom="1"
                        labelTextMarginBottom="1"
                        titleTextMarginBottom="1"
                        unitsTextMarginBottom="1"
                        unitsTextMarginRight="5"
                        valueTextMarginLeft="10"
                        labelTextMarginLeft="1"
                        layoutMode="Vertical">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _countryStatsAfrica: CountryStatsAfrica = null;
    public get countryStatsAfrica(): CountryStatsAfrica {
        if (this._countryStatsAfrica == null)
        {
            this._countryStatsAfrica = new CountryStatsAfrica();
        }
        return this._countryStatsAfrica;
    }

    private _countryStatsEurope: CountryStatsEurope = null;
    public get countryStatsEurope(): CountryStatsEurope {
        if (this._countryStatsEurope == null)
        {
            this._countryStatsEurope = new CountryStatsEurope();
        }
        return this._countryStatsEurope;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<div class="divider--half"></div>

## React Bubble Chart with Single Series

You can bind your data to `ItemsSource` property of [`IgrBubbleSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html) and map data columns using its [`xMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterbase.html#xMemberPath), [`yMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterbase.html#yMemberPath), [`radiusMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html#radiusMemberPath) properties, as shown in the example below:

```typescript
export class WorldStatsItem {
    public constructor(init: Partial<WorldStatsItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public short: string;
    public name: string;
    public continent: string;
    public population: number;
    public gdpTotal: number;
    public economy: string;
    public region: string;
    public status: string;
    public x: number;
    public y: number;
    public gdpPerPerson: number;
    public rank: number;
    public unemployment: number;
    public oilProduction: number;
    public birthRate: number;
    public medianAge: number;
    public electricity: number;
    public televisions: number;
    public publicDebt: number;
    public internet: number;

}
export class WorldStats extends Array<WorldStatsItem> {
    public constructor(items: Array<WorldStatsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new WorldStatsItem({ code: `CHN`, short: `CN`, name: `China`, continent: `Asia`, population: 1379302771, gdpTotal: 21140000, economy: `Emerging`, region: `Eastern Asia`, status: `Country`, x: 104.18, y: 35.887, gdpPerPerson: 15327, rank: 1, unemployment: 4, oilProduction: 3725000, birthRate: 14, medianAge: 34, electricity: 3256000, televisions: 400000000, publicDebt: 18, internet: 253000000 }),
                new WorldStatsItem({ code: `IND`, short: `IN`, name: `India`, continent: `Asia`, population: 1281935911, gdpTotal: 8721000, economy: `Emerging`, region: `Southern Asia`, status: `Country`, x: 78.022, y: 22.665, gdpPerPerson: 6803, rank: 2, unemployment: 7, oilProduction: 810000, birthRate: 22, medianAge: 25, electricity: 661600, televisions: 63000000, publicDebt: 58, internet: 80000000 }),
                new WorldStatsItem({ code: `USA`, short: `US`, name: `United States`, continent: `North America`, population: 326625791, gdpTotal: 18560000, economy: `Developed`, region: `Northern America`, status: `Country`, x: -101.8, y: 39.818, gdpPerPerson: 56823, rank: 3, unemployment: 5, oilProduction: 7460000, birthRate: 14, medianAge: 37, electricity: 4062000, televisions: 219000000, publicDebt: 61, internet: 223000000 }),
                // ... 239 more items
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

import { IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries, IgrSizeScale, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { WorldStatsItem, WorldStats } from './WorldStats';

const mods: any[] = [
    IgrNumberAbbreviatorModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
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
    private xAxis: IgrNumericXAxis
    private yAxis: IgrNumericYAxis
    private bubbleSeries1: IgrBubbleSeries
    private  _sizeScale1: IgrSizeScale | null = null;
    public get sizeScale1(): IgrSizeScale {
        if (this._sizeScale1 == null)
        {
            var sizeScale1 = new IgrSizeScale({});
            sizeScale1.isLogarithmic = false;
            sizeScale1.minimumValue = 10;
            sizeScale1.maximumValue = 80;

            this._sizeScale1 = sizeScale1;
        }
        return this._sizeScale1;
    }
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    chartTitle="Population vs. Public Debt vs. GDP"
                    titleTopMargin="10"
                    titleBottomMargin="0">
                    <IgrNumericXAxis
                        name="xAxis"
                        title="Population"
                        minimumValue="100"
                        maximumValue="10000000000"
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Public Debt per GDP (%)"
                        titleLeftMargin="10"
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true"
                        maximumValue="1000">
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        name="bubbleSeries1"
                        xMemberPath="population"
                        yMemberPath="publicDebt"
                        radiusMemberPath="gdpPerPerson"
                        radiusScale={this.sizeScale1}
                        title="Country"
                        yMemberAsLegendUnit="%"
                        yMemberAsLegendLabel="Debt"
                        xMemberAsLegendLabel="Population"
                        radiusMemberAsLegendLabel="GDP"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.worldStats}
                        markerType="Circle"
                        showDefaultTooltip="true">
                    </IgrBubbleSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer"
                        valueRowMarginTop="1"
                        labelTextMarginTop="1"
                        titleTextMarginTop="1"
                        unitsTextMarginTop="1"
                        valueRowMarginBottom="1"
                        labelTextMarginBottom="1"
                        titleTextMarginBottom="1"
                        unitsTextMarginBottom="1"
                        unitsTextMarginRight="5"
                        valueTextMarginLeft="10"
                        labelTextMarginLeft="1"
                        layoutMode="Vertical"
                        badgeShape="Hidden"
                        headerRowVisible="false">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _worldStats: WorldStats = null;
    public get worldStats(): WorldStats {
        if (this._worldStats == null)
        {
            this._worldStats = new WorldStats();
        }
        return this._worldStats;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<div class="divider--half"></div>

## React Bubble Chart with Multiple Series

In React Bubble Chart, binding multiple data sources works by setting each new data source to `ItemsSource` property of a additional [`IgrBubbleSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html), as shown in the example below:

```typescript
export class CountryStatsAfricaItem {
    public constructor(init: Partial<CountryStatsAfricaItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public population: number;
    public workedHours: number;
    public gDP: number;
    public name: string;

}
export class CountryStatsAfrica extends Array<CountryStatsAfricaItem> {
    public constructor(items: Array<CountryStatsAfricaItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryStatsAfricaItem({ code: `DZA`, population: 39728000, workedHours: 47.5, gDP: 13725, name: `Algeria` }),
                new CountryStatsAfricaItem({ code: `AGO`, population: 27884000, workedHours: 39.8, gDP: 6228, name: `Angola` }),
                new CountryStatsAfricaItem({ code: `BEN`, population: 10576000, workedHours: 43.7, gDP: 1987, name: `Benin` }),
                // ... 48 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class CountryStatsEuropeItem {
    public constructor(init: Partial<CountryStatsEuropeItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public population: number;
    public workedHours: number;
    public gDP: number;
    public name: string;

}
export class CountryStatsEurope extends Array<CountryStatsEuropeItem> {
    public constructor(items: Array<CountryStatsEuropeItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryStatsEuropeItem({ code: `ALB`, population: 2891000, workedHours: 41, gDP: 10970, name: `Albania` }),
                new CountryStatsEuropeItem({ code: `AUT`, population: 8679000, workedHours: 30.75, gDP: 44305, name: `Austria` }),
                new CountryStatsEuropeItem({ code: `BLR`, population: 9439000, workedHours: 43.5, gDP: 17230, name: `Belarus` }),
                // ... 38 more items
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

import { IgrLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries, IgrSizeScale, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { CountryStatsAfricaItem, CountryStatsAfrica } from './CountryStatsAfrica';
import { CountryStatsEuropeItem, CountryStatsEurope } from './CountryStatsEurope';

const mods: any[] = [
    IgrLegendModule,
    IgrNumberAbbreviatorModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
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
    private xAxis: IgrNumericXAxis
    private yAxis: IgrNumericYAxis
    private bubbleSeries1: IgrBubbleSeries
    private  _sizeScale1: IgrSizeScale | null = null;
    public get sizeScale1(): IgrSizeScale {
        if (this._sizeScale1 == null)
        {
            var sizeScale1 = new IgrSizeScale({});
            sizeScale1.isLogarithmic = false;
            sizeScale1.minimumValue = 10;
            sizeScale1.maximumValue = 80;

            this._sizeScale1 = sizeScale1;
        }
        return this._sizeScale1;
    }
    private bubbleSeries2: IgrBubbleSeries
    private  _sizeScale2: IgrSizeScale | null = null;
    public get sizeScale2(): IgrSizeScale {
        if (this._sizeScale2 == null)
        {
            var sizeScale2 = new IgrSizeScale({});
            sizeScale2.isLogarithmic = false;
            sizeScale2.minimumValue = 10;
            sizeScale2.maximumValue = 80;

            this._sizeScale2 = sizeScale2;
        }
        return this._sizeScale2;
    }
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
                Total Population of Selected Countries
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
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true"
                        title="Population">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="GDP per Capita"
                        maximumValue="1000000"
                        titleLeftMargin="10"
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true">
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        name="bubbleSeries1"
                        title="African Countries"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="population"
                        yMemberPath="gDP"
                        radiusMemberPath="workedHours"
                        xMemberAsLegendLabel="Population"
                        yMemberAsLegendLabel="GDP"
                        radiusMemberAsLegendLabel="Work Hours"
                        dataSource={this.countryStatsAfrica}
                        markerType="Circle"
                        showDefaultTooltip="true"
                        radiusScale={this.sizeScale1}>
                    </IgrBubbleSeries>
                    <IgrBubbleSeries
                        name="bubbleSeries2"
                        title="European Countries"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="population"
                        yMemberPath="gDP"
                        radiusMemberPath="workedHours"
                        xMemberAsLegendLabel="Population"
                        yMemberAsLegendLabel="GDP"
                        radiusMemberAsLegendLabel="Work Hours"
                        dataSource={this.countryStatsEurope}
                        markerType="Circle"
                        showDefaultTooltip="true"
                        radiusScale={this.sizeScale2}>
                    </IgrBubbleSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer"
                        valueRowMarginTop="1"
                        labelTextMarginTop="1"
                        titleTextMarginTop="1"
                        unitsTextMarginTop="1"
                        valueRowMarginBottom="1"
                        labelTextMarginBottom="1"
                        titleTextMarginBottom="1"
                        unitsTextMarginBottom="1"
                        unitsTextMarginRight="5"
                        valueTextMarginLeft="10"
                        labelTextMarginLeft="1"
                        layoutMode="Vertical">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _countryStatsAfrica: CountryStatsAfrica = null;
    public get countryStatsAfrica(): CountryStatsAfrica {
        if (this._countryStatsAfrica == null)
        {
            this._countryStatsAfrica = new CountryStatsAfrica();
        }
        return this._countryStatsAfrica;
    }

    private _countryStatsEurope: CountryStatsEurope = null;
    public get countryStatsEurope(): CountryStatsEurope {
        if (this._countryStatsEurope == null)
        {
            this._countryStatsEurope = new CountryStatsEurope();
        }
        return this._countryStatsEurope;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<div class="divider--half"></div>

## React Bubble Chart Styling

In React Bubble Chart, you can customize shape of bubble markers using [`markerType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html#markerType) property, their size with [`radiusScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html#radiusScale) property, and their appearance using [`markerBrush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html#markerBrush), [`markerOutline`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html#markerOutline), [`markerThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html#markerThickness) properties. In addition, you can also color bubble markers based on a data column using [`fillMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html#fillMemberPath) and [`fillScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html#fillScale) properties. In this example, usage of above properties is demonstrated.

```typescript
export class WorldStatsItem {
    public constructor(init: Partial<WorldStatsItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public short: string;
    public name: string;
    public continent: string;
    public population: number;
    public gdpTotal: number;
    public economy: string;
    public region: string;
    public status: string;
    public x: number;
    public y: number;
    public gdpPerPerson: number;
    public rank: number;
    public unemployment: number;
    public oilProduction: number;
    public birthRate: number;
    public medianAge: number;
    public electricity: number;
    public televisions: number;
    public publicDebt: number;
    public internet: number;

}
export class WorldStats extends Array<WorldStatsItem> {
    public constructor(items: Array<WorldStatsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new WorldStatsItem({ code: `CHN`, short: `CN`, name: `China`, continent: `Asia`, population: 1379302771, gdpTotal: 21140000, economy: `Emerging`, region: `Eastern Asia`, status: `Country`, x: 104.18, y: 35.887, gdpPerPerson: 15327, rank: 1, unemployment: 4, oilProduction: 3725000, birthRate: 14, medianAge: 34, electricity: 3256000, televisions: 400000000, publicDebt: 18, internet: 253000000 }),
                new WorldStatsItem({ code: `IND`, short: `IN`, name: `India`, continent: `Asia`, population: 1281935911, gdpTotal: 8721000, economy: `Emerging`, region: `Southern Asia`, status: `Country`, x: 78.022, y: 22.665, gdpPerPerson: 6803, rank: 2, unemployment: 7, oilProduction: 810000, birthRate: 22, medianAge: 25, electricity: 661600, televisions: 63000000, publicDebt: 58, internet: 80000000 }),
                new WorldStatsItem({ code: `USA`, short: `US`, name: `United States`, continent: `North America`, population: 326625791, gdpTotal: 18560000, economy: `Developed`, region: `Northern America`, status: `Country`, x: -101.8, y: 39.818, gdpPerPerson: 56823, rank: 3, unemployment: 5, oilProduction: 7460000, birthRate: 14, medianAge: 37, electricity: 4062000, televisions: 219000000, publicDebt: 61, internet: 223000000 }),
                // ... 239 more items
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
import { IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries, IgrSizeScale, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { WorldStatsItem, WorldStats } from './WorldStats';

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
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrNumericXAxis
    private yAxis: IgrNumericYAxis
    private bubbleSeries1: IgrBubbleSeries
    private  _sizeScale1: IgrSizeScale | null = null;
    public get sizeScale1(): IgrSizeScale {
        if (this._sizeScale1 == null)
        {
            var sizeScale1 = new IgrSizeScale({});
            sizeScale1.isLogarithmic = false;
            sizeScale1.minimumValue = 10;
            sizeScale1.maximumValue = 80;

            this._sizeScale1 = sizeScale1;
        }
        return this._sizeScale1;
    }
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    chartTitle="Population vs. Public Debt vs. GDP"
                    titleTopMargin="10"
                    titleBottomMargin="0">
                    <IgrNumericXAxis
                        name="xAxis"
                        title="Population"
                        minimumValue="100"
                        maximumValue="10000000000"
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Public Debt per GDP (%)"
                        titleLeftMargin="10"
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true"
                        maximumValue="1000">
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        name="bubbleSeries1"
                        title="Country"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="population"
                        yMemberPath="publicDebt"
                        radiusMemberPath="gdpPerPerson"
                        yMemberAsLegendUnit="%"
                        yMemberAsLegendLabel="Debt"
                        xMemberAsLegendLabel="Population"
                        radiusMemberAsLegendLabel="GDP"
                        dataSource={this.worldStats}
                        markerType="Circle"
                        markerOutline="black"
                        markerBrush="rgba(67, 162, 250, 1)"
                        markerFillOpacity="0.5"
                        markerThickness="1"
                        showDefaultTooltip="true"
                        radiusScale={this.sizeScale1}>
                    </IgrBubbleSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer"
                        valueRowMarginTop="1"
                        labelTextMarginTop="1"
                        titleTextMarginTop="1"
                        unitsTextMarginTop="1"
                        valueRowMarginBottom="1"
                        labelTextMarginBottom="1"
                        titleTextMarginBottom="1"
                        unitsTextMarginBottom="1"
                        unitsTextMarginRight="5"
                        valueTextMarginLeft="10"
                        labelTextMarginLeft="1"
                        layoutMode="Vertical"
                        badgeShape="Hidden"
                        includedColumns={["x", "y", "radius"]}
                        headerRowVisible="false">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _worldStats: WorldStats = null;
    public get worldStats(): WorldStats {
        if (this._worldStats == null)
        {
            this._worldStats = new WorldStats();
        }
        return this._worldStats;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<div class="divider--half"></div>

## Additional Resources

- [Scatter Chart](scatter-chart.md)
- [Shape Chart](shape-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)
- [`IgrBubbleSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html)
- [`IgrScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterseries.html)
- `ItemsSource`
- [`fillMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html#fillMemberPath)
- [`fillScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html#fillScale)
- [`markerType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html#markerType)
- [`markerBrush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html#markerBrush)
- [`markerOutline`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html#markerOutline)
- [`markerThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html#markerThickness)
- [`radiusScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html#radiusScale)
- [`radiusMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html#radiusMemberPath)
- [`xMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterbase.html#xMemberPath)
- [`yMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterbase.html#yMemberPath)
