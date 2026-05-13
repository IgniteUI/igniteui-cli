---
title: React Chart Highlighting | Data Visualization | Infragistics
_description: Infragistics' React Chart Highlighting
_keywords: React Charts, Highlighting, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Highlighting
_premium: true
---

## React Chart Highlighting Example

The following example demonstrates the different highlighting options that are available on the React chart.

```typescript
export class TemperatureAnnotatedDataItem {
    public constructor(init: Partial<TemperatureAnnotatedDataItem>) {
        Object.assign(this, init);
    }

    public index: number;
    public tempInfo: string;
    public temperature: number;
    public month: string;

}
export class TemperatureAnnotatedData extends Array<TemperatureAnnotatedDataItem> {
    public constructor(items: Array<TemperatureAnnotatedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TemperatureAnnotatedDataItem({ index: 0, tempInfo: `27°C`, temperature: 27, month: `Jan` }),
                new TemperatureAnnotatedDataItem({ index: 1, tempInfo: `25°C`, temperature: 25, month: `Feb` }),
                new TemperatureAnnotatedDataItem({ index: 2, tempInfo: `21°C`, temperature: 21, month: `Mar` }),
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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { TemperatureAnnotatedDataItem, TemperatureAnnotatedData } from './TemperatureAnnotatedData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private highlightingModeEditor: IgrPropertyEditorPropertyDescription
    private highlightingBehaviorEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighlightingMode"
                        name="HighlightingModeEditor"
                        label="Highlighting Mode: "
                        primitiveValue="FadeOthersSpecific">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighlightingBehavior"
                        name="HighlightingBehaviorEditor"
                        label="Highlighting Behavior: "
                        primitiveValue="NearestItemsAndSeries">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Average Temperature in Sydney
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Column"
                    computedPlotAreaMarginMode="Series"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    dataSource={this.temperatureAnnotatedData}
                    highlightingMode="FadeOthersSpecific"
                    highlightingBehavior="NearestItemsAndSeries"
                    yAxisMaximumValue="35"
                    yAxisLabelLocation="OutsideRight"
                    toolTipType="None"
                    isTransitionInEnabled="false">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _temperatureAnnotatedData: TemperatureAnnotatedData = null;
    public get temperatureAnnotatedData(): TemperatureAnnotatedData {
        if (this._temperatureAnnotatedData == null)
        {
            this._temperatureAnnotatedData = new TemperatureAnnotatedData();
        }
        return this._temperatureAnnotatedData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

# React Chart Highlighting Modes & Behaviors

All React Charts support a variety of highlighting options. [`highlightingMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightingMode) can be set to brighten or fade when the mouse is hovering over a series/data item rendered in the plot area. [`highlightingBehavior`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightingBehavior) can be set to directly over or the nearest data item to trigger the highlighting effect. Highlighting modes and behaviors is supported by the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html), [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html), and [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) controls and they have the same API for using the highlighting feature.

The following example demonstrates the [`highlightingMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightingMode) React chart.

```typescript
export class TemperatureAnnotatedDataItem {
    public constructor(init: Partial<TemperatureAnnotatedDataItem>) {
        Object.assign(this, init);
    }

    public index: number;
    public tempInfo: string;
    public temperature: number;
    public month: string;

}
export class TemperatureAnnotatedData extends Array<TemperatureAnnotatedDataItem> {
    public constructor(items: Array<TemperatureAnnotatedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TemperatureAnnotatedDataItem({ index: 0, tempInfo: `27°C`, temperature: 27, month: `Jan` }),
                new TemperatureAnnotatedDataItem({ index: 1, tempInfo: `25°C`, temperature: 25, month: `Feb` }),
                new TemperatureAnnotatedDataItem({ index: 2, tempInfo: `21°C`, temperature: 21, month: `Mar` }),
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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { TemperatureAnnotatedDataItem, TemperatureAnnotatedData } from './TemperatureAnnotatedData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private highlightingModeEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighlightingMode"
                        name="HighlightingModeEditor"
                        label="Highlighting Mode: "
                        primitiveValue="BrightenSpecific">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Column"
                    computedPlotAreaMarginMode="Series"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    dataSource={this.temperatureAnnotatedData}
                    highlightingMode="BrightenSpecific"
                    toolTipType="None"
                    crosshairsDisplayMode="None"
                    isTransitionInEnabled="false">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _temperatureAnnotatedData: TemperatureAnnotatedData = null;
    public get temperatureAnnotatedData(): TemperatureAnnotatedData {
        if (this._temperatureAnnotatedData == null)
        {
            this._temperatureAnnotatedData = new TemperatureAnnotatedData();
        }
        return this._temperatureAnnotatedData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

The following example demonstrates the [`highlightingBehavior`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightingBehavior) React chart.

```typescript
export class TemperatureAnnotatedDataItem {
    public constructor(init: Partial<TemperatureAnnotatedDataItem>) {
        Object.assign(this, init);
    }

    public index: number;
    public tempInfo: string;
    public temperature: number;
    public month: string;

}
export class TemperatureAnnotatedData extends Array<TemperatureAnnotatedDataItem> {
    public constructor(items: Array<TemperatureAnnotatedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TemperatureAnnotatedDataItem({ index: 0, tempInfo: `27°C`, temperature: 27, month: `Jan` }),
                new TemperatureAnnotatedDataItem({ index: 1, tempInfo: `25°C`, temperature: 25, month: `Feb` }),
                new TemperatureAnnotatedDataItem({ index: 2, tempInfo: `21°C`, temperature: 21, month: `Mar` }),
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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { TemperatureAnnotatedDataItem, TemperatureAnnotatedData } from './TemperatureAnnotatedData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private highlightingBehaviorEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighlightingBehavior"
                        name="HighlightingBehaviorEditor"
                        label="Highlighting Behavior: "
                        primitiveValue="DirectlyOver">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Column"
                    computedPlotAreaMarginMode="Series"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    dataSource={this.temperatureAnnotatedData}
                    highlightingMode="Brighten"
                    highlightingBehavior="DirectlyOver"
                    toolTipType="None"
                    crosshairsDisplayMode="None"
                    isTransitionInEnabled="false">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _temperatureAnnotatedData: TemperatureAnnotatedData = null;
    public get temperatureAnnotatedData(): TemperatureAnnotatedData {
        if (this._temperatureAnnotatedData == null)
        {
            this._temperatureAnnotatedData = new TemperatureAnnotatedData();
        }
        return this._temperatureAnnotatedData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

# React Chart Legend Highlighting

All React Charts support legend highlighting. [`legendHighlightingMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#legendHighlightingMode) can enabled so that when mouse is hovering over a legend marker item then the rendered series will highlight in the plot area. Legend highlighting is supported by the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html), [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html), and [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) controls and they have the same API for using the highlighting feature.

The following example demonstrates the legend series highlighting React chart.

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
                    ref={this.legendRef}>
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    legend={this.legend}
                    chartType="Column"
                    dataSource={this.highestGrossingMovies}
                    xAxisInterval="1"
                    yAxisTitle="Billions of U.S. Dollars"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    highlightingMode="Brighten"
                    legendHighlightingMode="MatchSeries"
                    isTransitionInEnabled="false">
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

## Highlight Layers

The Ignite UI for React [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) can enable three types of highlighting when hovering over data items.

1. Series Highlighting will highlight the single data point represented by a marker or column when the pointer is positioned over it. This is enabled by setting the [`isSeriesHighlightingEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#isSeriesHighlightingEnabled) property to true.

2. Item Highlighting highlights items in a series either by drawing a banded shape at their position or by rendering a marker at their position. This is enabled by setting the [`isItemHighlightingEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#isItemHighlightingEnabled) property to true.

3. Category Highlighting targets all category axes in the chart. They draw a shape that illuminates the area of the axis closest to the pointer position. This is enabled by setting the [`isCategoryHighlightingEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#isCategoryHighlightingEnabled) property to true.

The following example demonstrates the different highlighting layers that are available on the React chart.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrLegend } from 'igniteui-react-charts';

const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class CategoryChartColumnChartWithHighlighting extends React.Component<any, any> {
    public data: any[];

    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }    
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
        this.legendRef = this.legendRef.bind(this);
        this.onHighlightTargetChanged = this.onHighlightTargetChanged.bind(this);
        this.onHighlightingModeChanged = this.onHighlightingModeChanged.bind(this);
        this.onBehaviorModeChanged = this.onBehaviorModeChanged.bind(this);
        this.onLegendHighlightingModeChanged = this.onLegendHighlightingModeChanged.bind(this);

        this.state = {
            isCategoryHighlighting: false,
            isItemHighlighting: false,
            isSeriesHighlighting: true,
            highlightingMode: "Auto",
            highlightingBehavior: "Auto",
            legendHighlightingMode: "Auto"
        }
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample" >
            <div className="options horizontal">
                <span className="options-label">Highlight Target: </span>
                <select id="highlightingTarget" onChange={this.onHighlightTargetChanged}>
                    <option>Series</option>
                    <option>Item</option>
                    <option>Category</option>
                    <option>None</option>
                </select>
                <span className="options-label">Mode: </span>
                <select id="highlightingMode" onChange={this.onHighlightingModeChanged}>
                    <option>Auto</option>
                    <option>Brighten</option>
                    <option>BrightenSpecific</option>
                    <option>FadeOthers</option>
                    <option>FadeOthersSpecific</option>
                    <option>None</option>
                </select>
                <span className="options-label">Behavior: </span>
                <select id="behaviorMode" onChange={this.onBehaviorModeChanged}>
                    <option>Auto</option>
                    <option>DirectlyOver</option>
                    <option>NearestItems</option>
                    <option>NearestItemsAndSeries</option>
                    <option>NearestItemsRetainMainShapes</option>
                </select>
                <span className="options-label">Legend: </span>
                <select id="legendHighlightingMode" onChange={this.onLegendHighlightingModeChanged}>
                    <option>Auto</option>
                    <option>MatchSeries</option>
                    <option>None</option>
                </select>
            </div>
            <span className="legend-title">
                Average Temperatures in the U.S. Cities
            </span>
            <div className="legend">
                <IgrLegend
                orientation="Horizontal"
                ref={this.legendRef}>
                </IgrLegend>
            </div>
            <div className="container fill" >
                <IgrCategoryChart
                    ref={this.chartRef}
                    dataSource={this.data}
                    legend={this.legend}
                    isCategoryHighlightingEnabled={this.state.isCategoryHighlighting}
                    isItemHighlightingEnabled={this.state.isItemHighlighting}
                    isSeriesHighlightingEnabled={this.state.isSeriesHighlighting}
                    highlightingMode={this.state.highlightingMode}
                    highlightingBehavior={this.state.highlightingBehavior}
                    legendHighlightingMode={this.state.legendHighlightingMode}
                    yAxisTitle="Temperatures in Celsius"
					yAxisMinimumValue={0}
                    xAxisInterval={1}>
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    public onHighlightTargetChanged(e: any) {
        let value = e.target.value as string;
        if(value == "Series") {
            this.setState({
                isItemHighlighting: false, 
                isSeriesHighlighting: true, 
                isCategoryHighlighting: false, 
                });
        }
        else if(value == "Item") {
            this.setState( {
                isItemHighlighting: true, 
                isSeriesHighlighting: false, 
                isCategoryHighlighting: false, 
            });
        }
        else if(value == "Category") {
            this.setState({
                isItemHighlighting: false, 
                isSeriesHighlighting: false, 
                isCategoryHighlighting: true, 
            });
        }
        else if(value=="None") {
            this.setState({
                isItemHighlighting: false, 
                isSeriesHighlighting: false, 
                isCategoryHighlighting: false, 
            });
        }
    }

    public onHighlightingModeChanged(e: any) {
        const val = e.target.value;
        this.setState({ highlightingMode: val});        
    }
    public onBehaviorModeChanged(e: any) {
        const val = e.target.value;
        this.setState({ highlightingBehavior: val});        
    }
    public onLegendHighlightingModeChanged(e: any) {
        const val = e.target.value;
        this.setState({ legendHighlightingMode: val});        
    }

    
    public initData() {
        const CityTemperatureData: any = [
            { Month: "January", NY: 10.6, LA: 28.3},
            { Month: "February", NY: 7.8, LA: 31.1},
            { Month: "March", NY: 12.2,   LA: 27.8},
            { Month: "April", NY: 11.7,  LA: 33.9},
            { Month: "May", NY: 19.4,    LA: 35.0},
            { Month: "June", NY: 23.3,    LA: 36.7},
            { Month: "July", NY: 27.2,    LA: 33.3},
            { Month: "August", NY: 25.6,  LA: 36.7},
            { Month: "September", NY: 22.8,  LA: 43.9},
            { Month: "October", NY: 17.8,    LA: 38.3 },
            { Month: "November", NY: 17.8,  LA: 32.8},
            { Month: "December", NY: 8.3, LA: 28.9},
        ];
        this.data = [ CityTemperatureData];
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CategoryChartColumnChartWithHighlighting/>);
```

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Animations](chart-animations.md)
- [Chart Annotations](chart-annotations.md)
- [Chart Tooltips](chart-tooltips.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`highlightingMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightingMode)
- [`highlightingBehavior`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightingBehavior)
- `LegendHighlightingBehavior`
- [`isCategoryHighlightingEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#isCategoryHighlightingEnabled)
- [`isItemHighlightingEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#isItemHighlightingEnabled)
- [`isSeriesHighlightingEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#isSeriesHighlightingEnabled)
- [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)
- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)
- [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html)
