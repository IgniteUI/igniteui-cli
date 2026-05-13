---
title: React Polar Chart | Data Visualization | Infragistics
_description: Infragistics' React Polar Chart
_keywords: React Charts, Polar Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "PolarAreaSeries", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Polar Chart
_premium: true
---

# React Polar Chart

The Ignite UI for React Polar Chart uses the polar coordinate system (angle, radius) instead of the Cartesian coordinate system (x, y) to plot data in chart. In other words, Polar Chart takes concepts of [Scatter Series](scatter-chart.md) and wrap them around a circle rather than stretching data points horizontally. It is often used to plot scientific data (e.g. wind direction and speed, direction, and strength of magnetic field, location of objects in solar system), and can highlight the deviation of collected data from predicted results.

## React Polar Area Chart

The Polar Area Chart renders using a collection of polygons connecting data points and it uses the same concepts of data plotting as the [Category Area Chart](area-chart.md#react-area-chart-example) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrPolarAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarareaseries.html), as shown in the example below:

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

The Polar Spline Area Chart renders also as a collection of polygons but they have curved splines connecting data points instead of straight lines like [Polar Area Chart](polar-chart.md#react-polar-area-chart) does. You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrPolarAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarareaseries.html), as shown in the example below:

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

## React Polar Marker Chart

The Polar Marker Chart renders using a collection of markers representing data points in polar (angle/radius) coordinate system. This chart uses the same concepts of data plotting as the [Scatter Marker Chart](scatter-chart.md#react-scatter-marker-chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrPolarScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarscatterseries.html), as shown in the example below:

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
import { IgrDataChart, IgrNumericAngleAxis, IgrNumericRadiusAxis, IgrPolarScatterSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
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
    private polarScatterSeries1: IgrPolarScatterSeries
    private polarScatterSeries2: IgrPolarScatterSeries
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
                    <IgrPolarScatterSeries
                        name="PolarScatterSeries1"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="windSpeed"
                        showDefaultTooltip="false"
                        title="Wind Speed"
                        markerType="Circle">
                    </IgrPolarScatterSeries>
                    <IgrPolarScatterSeries
                        name="PolarScatterSeries2"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="boatSpeed"
                        showDefaultTooltip="false"
                        title="Boat Speed"
                        markerType="Circle">
                    </IgrPolarScatterSeries>
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

## React Polar Line Chart

The Polar Line Chart renders using a collection of straight lines connecting data points in polar (angle/radius) coordinate system. This chart uses the same concepts of data plotting as the [Scatter Line Chart](scatter-chart.md#react-scatter-line-chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrPolarLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarlineseries.html), as shown in the example below:

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

## React Polar Spline Chart

The Polar Spline Chart renders using a collection of curved splines connecting data points in polar (angle/radius) coordinate system. This Chart uses the same concepts of data plotting as the [Scatter Spline Chart](scatter-chart.md#react-scatter-spline-chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally. You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrPolarSplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarsplineseries.html), as shown in the example below:

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
import { IgrDataChart, IgrNumericAngleAxis, IgrNumericRadiusAxis, IgrPolarSplineSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
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
    private polarSplineSeries1: IgrPolarSplineSeries
    private polarSplineSeries2: IgrPolarSplineSeries
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
                    <IgrPolarSplineSeries
                        name="PolarSplineSeries1"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="windSpeed"
                        showDefaultTooltip="false"
                        thickness="1"
                        title="Wind Speed"
                        markerType="Circle">
                    </IgrPolarSplineSeries>
                    <IgrPolarSplineSeries
                        name="PolarSplineSeries2"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="boatSpeed"
                        showDefaultTooltip="false"
                        thickness="1"
                        title="Boat Speed"
                        markerType="Circle">
                    </IgrPolarSplineSeries>
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

## React Polar Chart Styling

Once our polar chart is created, we may want to make some further styling customizations such as a change of the line colors, marker types, or outline colors of those markers. You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrPolarAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarareaseries.html), as shown in the example below:

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

import { IgrDataChartCoreModule, IgrDataChartPolarModule, IgrDataChartPolarCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrLegendModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrNumericAngleAxis, IgrNumericRadiusAxis, IgrPolarAreaSeries } from 'igniteui-react-charts';
import { BoatSailingDataItem, BoatSailingData } from './BoatSailingData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartPolarModule,
    IgrDataChartPolarCoreModule,
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
    private angleAxis: IgrNumericAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private polarAreaSeries1: IgrPolarAreaSeries
    private polarAreaSeries2: IgrPolarAreaSeries

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
                    isVerticalZoomEnabled="false"
                    markerBrushes="white"
                    markerOutlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1)"
                    brushes="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1)"
                    outlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1)">
                    <IgrNumericAngleAxis
                        name="angleAxis"
                        startAngleOffset="-90"
                        interval="30"
                        minimumValue="0"
                        maximumValue="360"
                        labelTextStyle="normal bold 14px Verdana">
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
                        showDefaultTooltip="true"
                        areaFillOpacity="0.3"
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
                        showDefaultTooltip="true"
                        areaFillOpacity="0.3"
                        thickness="1"
                        title="Boat Speed"
                        markerType="Circle">
                    </IgrPolarAreaSeries>
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
- [Donut Chart](donut-chart.md)
- [Line Chart](line-chart.md)
- [Pie Chart](pie-chart.md)
- [Radial Chart](radial-chart.md)
- [Scatter Chart](scatter-chart.md)
- [Spline Chart](spline-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)
- [`IgrPolarAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarareaseries.html)
- [`IgrPolarLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarlineseries.html)
- [`IgrPolarSplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarsplineseries.html)
- [`IgrPolarSplineAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarsplineareaseries.html)
- [`IgrPolarScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarscatterseries.html)
- `ItemsSource`
- [`angleMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarbase.html#angleMemberPath)
- [`radiusMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpolarbase.html#radiusMemberPath)
- [`IgrNumericAngleAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericangleaxis.html)
- [`IgrNumericRadiusAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericradiusaxis.html)
