---
title: React Step Chart | Data Visualization | Infragistics
_description: Infragistics' React Step Chart
_keywords: React Charts, Step Chart, Step Area Chart, Step Line Chart, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "CategoryChartType", "Series", "CategoryChartType"]
namespace: Infragistics.Controls.Charts
_tocName: Step Chart
_premium: true
---

# React Step Chart

The Ignite UI for React Step Chart belongs to a group of category charts that render as a collection of points connected by continuous vertical and horizontal lines. Values are represented on the y-axis and categories are displayed on the x-axis. Step Chart emphasizes the amount of change over a period of time or compares multiple items.

## React Step Area Chart

You can create React Step Area Chart in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by setting [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property to [`StepArea`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#StepArea) enum, as shown in the example below.

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

## React Step Line Chart

The React Step Line Chart is very similar to Step Area Chart, except that the area below lines are filled in.

You can create Step Line Chart in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control by binding your data and setting [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) property to [`StepLine`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#StepLine) value, as shown in the example below.

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
                    ref={this.chartRef}
                    legend={this.legend}
                    chartType="StepLine"
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    isCategoryHighlightingEnabled="false"
                    isSeriesHighlightingEnabled="true"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    xAxisInterval="1"
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

## React Step Chart Styling

If you need Step Charts with more features such as composite other series, you can configure the [`markerTypes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#markerTypes), [`markerBrushes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#markerBrushes), [`markerOutlines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#markerOutlines), lines' [`brushes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#brushes), and lines' [`outlines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#outlines) properties on the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control as demonstrated below.

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
                    ref={this.chartRef}
                    legend={this.legend}
                    chartType="StepLine"
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    isCategoryHighlightingEnabled="false"
                    isSeriesHighlightingEnabled="true"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    yAxisTitle="TWh"
                    markerBrushes="white"
                    markerOutlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1) rgba(115, 86, 86, 1)"
                    brushes="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1) rgba(115, 86, 86, 1)"
                    outlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1) rgba(115, 86, 86, 1)"
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

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Line Chart](line-chart.md)
- [Chart Markers](../features/chart-markers.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)
- [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType)
- [`StepArea`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#StepArea)
- [`StepLine`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.categorycharttype.html#StepLine)
- [`brushes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#brushes)
- [`outlines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#outlines)
- [`markerBrushes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#markerBrushes)
- [`markerOutlines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#markerOutlines)
- [`markerTypes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#markerTypes)
