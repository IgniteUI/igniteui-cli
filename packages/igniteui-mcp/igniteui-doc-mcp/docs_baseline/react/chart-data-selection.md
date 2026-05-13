---
title: React Chart Data Selection | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for React chart with the data selection!
_keywords: React charts, chart data, selection, data selection, Ignite UI for React, Infragistics
_license: commercial
_language: en
mentionedTypes: ["XamDataChart", "Legend", "CategoryChart", "FinancialChart", "XamDataLegend", "DataToolTipLayer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Selection
_premium: true
---

# React Chart Selection

The Ignite UI for React selection feature in React {ComponentTitle} allows users to interactively select, highlight, outline and vice-versa deselect single or multiple series within a chart. This provides many different possibilities with how users interact with the data presented in more meaningful ways.

## Configuring Selection

The default behavior [`selectionMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#selectionMode) turned off and requires opting into one of the following options. There are several selection modes available in the `{ComponentName}`:

- **Auto**
- **None**
- **Brighten**
- **FadeOthers**
- **GrayscaleOthers**
- **FocusColorThickOutline**
- **FocusColorOutline**
- **SelectionColorThickOutline**
- **SelectionColorOutline**
- **FocusColorFill**
- **SelectionColorFill**
- **ThickOutline**

`Brighten` will fade the selected item while `FadeOthers` will cause the opposite effect occur.
`GrayscaleOthers` will behave similarly to `FadeOthers` but instead show a gray color to the rest of the series. Note this will override any [`selectionBrush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#selectionBrush) setting.
`SelectionColorOutline` and `SelectionColorThickOutline` will draw a border around the series.

In conjunction, a [`selectionBehavior`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#selectionBehavior) is available to provide greater control on which items get selected. The default behavior for Auto is `PerSeriesAndDataItemMultiSelect`.

- **Auto**
- **PerDataItemMultiSelect**
- **PerDataItemSingleSelect**
- **PerSeriesAndDataItemMultiSelect**
- **PerSeriesAndDataItemSingleSelect**
- **PerSeriesAndDataItemGlobalSingleSelect**
- **PerSeriesMultiSelect**
- **PerSeriesSingleSelect**

## Configuring Selection via Color Fill

The following example shows the combination of both `SelectionColorFill` and `Auto` selection behavior aka `PerSeriesAndDataItemMultiSelect`. Color Fills provide a useful visual cue as it changes the entire series item's back color. By clicking each item you'll see the item change from green to purple.

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

import { IgrCategoryChartModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { TemperatureAverageDataItem, TemperatureAverageData } from './TemperatureAverageData';

const mods: any[] = [
    IgrCategoryChartModule,
    IgrDataChartInteractivityModule
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
                    crosshairsDisplayMode="None"
                    toolTipType="None"
                    selectionMode="SelectionColorFill"
                    selectionBehavior="Auto"
                    selectionBrush="purple"
                    focusBrush="purple">
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

## Configuring Multiple Selection

Other selection modes offer various methods of selection. For example using [`selectionBehavior`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#selectionBehavior) with `PerDataItemMultiSelect` will affect all series in entire category when multiple series are present while allowing selection across categories. Compared to `PerDataItemSingleSelect`, only a single category of items can be selected at a time. This is useful if multiple series are bound to different datasources and provides greater control of selection between categories.
`PerSeriesAndDataItemGlobalSingleSelect` allows single series selection across all categories at a time.

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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { EnergyRenewableConsumptionItem, EnergyRenewableConsumption } from './EnergyRenewableConsumption';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
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
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private selectionModeEditor: IgrPropertyEditorPropertyDescription
    private selectionBehaviorEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
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
                        propertyPath="SelectionMode"
                        name="SelectionModeEditor"
                        label="Selection Mode: "
                        primitiveValue="SelectionColorFill">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="SelectionBehavior"
                        name="SelectionBehaviorEditor"
                        label="Selection Behavior: "
                        primitiveValue="PerSeriesAndDataItemGlobalSingleSelect">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

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
                    dataSource={this.energyRenewableConsumption}
                    legend={this.legend}
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    crosshairsDisplayMode="None"
                    selectionMode="SelectionColorFill"
                    selectionBehavior="PerSeriesAndDataItemGlobalSingleSelect"
                    selectionBrush="orange"
                    focusBrush="orange">
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

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Configuring Outline Selection

When [`focusBrush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#focusBrush) is applied, selected series will appear with a border when the [`selectionMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#selectionMode) property is set to one of the focus options.

## Radial Series Selection

This example demonstrates another series type via the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) where each radial series can be selected with different colors.

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
import { IgrLegend, IgrDataChart, IgrCategoryAngleAxis, IgrNumericRadiusAxis, IgrRadialColumnSeries } from 'igniteui-react-charts';
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
                    isVerticalZoomEnabled="false"
                    selectionMode="SelectionColorFill"
                    selectionBehavior="PerSeriesMultiSelect">
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
                        title="Ronaldo"
                        selectionBrush="yellow">
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
                        title="Messi"
                        selectionBrush="cyan">
                    </IgrRadialColumnSeries>
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

## Programmatic Selection

Chart Selection can also be configured in code where selected items in the chart can be seen on startup or runtime. This can be achieved by adding items to the `SelectedSeriesCollection` of the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html). The `Matcher` property of the [`IgrChartSelection`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrchartselection.html) object allows for selecting a series based on a "matcher", ideal when you do not have access to the actual series from the chart. If you know the properties that your datasource contains, you can use the `ValueMemberPath` that the series would be.

The matcher is ideal for using in charts, such as the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) when you do not have access to the actual series, like the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html). In this case you if you know the properties that your datasource contained you can surmise the ValueMemberPaths that the series would have. For example, if you datasource has numeric properties Nuclear, Coal, Oil, Solar then you know there are series created for each of these properties. If you want to highlight the series bound to Solar values, you can add a ChartSelection object to the [`selectedSeriesItems`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#selectedSeriesItems) collection using a matcher with the following properties set

For example, if you datasource has numeric properties Nuclear, Coal, Oil, Solar then you know there are series created for each of these properties. If you want to select the series bound to Solar values, you can add a ChartSelection object to the SelectedSeriesItems collection using a matcher with the following properties set.

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

import { IgrLegendModule, IgrCategoryChartModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, LegendDescriptionModule, CategoryChartDescriptionModule, DataChartAnnotationDescriptionModule, DataChartInteractivityDescriptionModule, DataChartCoreDescriptionModule } from 'igniteui-react-core';
import { EnergyRenewableConsumptionItem, EnergyRenewableConsumption } from './EnergyRenewableConsumption';
import { IgrChartSelection, IgrSeriesMatcher } from 'igniteui-react-charts';

const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrDataChartCoreModule
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
    public componentDidMount() {
        this.selectionMatcherOnViewInit();
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
                    dataSource={this.energyRenewableConsumption}
                    chartType="Column"
                    crosshairsDisplayMode="None"
                    yAxisTitle="TWh"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    selectionMode="SelectionColorFill"
                    selectionBehavior="Auto"
                    selectionBrush="orange">
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

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    private _timer: ReturnType<typeof setInterval>;

    public selectionMatcherOnViewInit(): void {

    	var chart = this.chart;

    	this._timer = setInterval(() => {
    	var data = this.energyRenewableConsumption;

        var matcher = new IgrSeriesMatcher();

        var selection = new IgrChartSelection();
    		selection.item = data[1];
    		matcher.memberPath = "hydro";
    		matcher.memberPathType = "ValueMemberPath";
    		selection.matcher = matcher;
    		chart.selectedSeriesItems.add(selection);

    	var matcher2 = new IgrSeriesMatcher();

    var selection2 = new IgrChartSelection();
    		selection2.item = data[2];
    		matcher2.memberPath = "wind";
    		matcher2.memberPathType = "ValueMemberPath";
    		selection2.matcher = matcher2;

    		chart.selectedSeriesItems.add(selection2);

    	}, 100);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## API References

The following is a list of API members mentioned in the above sections:

| [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) Properties                    | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) Properties |
| ----------------------------------------------|---------------------------|
|                                               |                           |
