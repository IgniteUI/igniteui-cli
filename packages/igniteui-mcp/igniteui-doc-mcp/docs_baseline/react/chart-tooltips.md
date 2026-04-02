---
title: React Chart Tooltips | Data Visualization | Infragistics
_description: Infragistics' React Chart Tooltips
_keywords: React Charts, Tooltips, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "ToolTipType"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Tooltips
_premium: true
---

# React Chart Tooltips

In React charts, tooltips provide details about bound data and they are rendered in popups when the end-user hovers over data points. Tooltips are supported by the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html), [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html), and [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) controls.

## React Chart Tooltip Types

React Chart provide three types of tooltips that you can with tooltips enabled by setting the [`toolTipType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#toolTipType) property. The following example shows the [Column Chart](../types/column-chart.md) with a combo-box that you can use to change type of tooltips.

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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private toolTipTypeEditor: IgrPropertyEditorPropertyDescription
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

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.legendRef = this.legendRef.bind(this);
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
                        propertyPath="ToolTipType"
                        name="ToolTipTypeEditor"
                        label="ToolTip Type: "
                        primitiveValue="Data">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

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
                    chartType="Column"
                    legend={this.legend}
                    dataSource={this.highestGrossingMovies}
                    xAxisInterval="1"
                    yAxisTitle="Billions of U.S. Dollars"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    crosshairsSnapToData="true">
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


<div class="divider--half"></div>

The [`toolTipType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#toolTipType) property is configurable and can be set to one of the following options:

| Property Value     | Description  |
| -------------------|----------------|
| [`Default`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.tooltiptype.html#Default)  Tooltip | Display a tooltip for a single item when the pointer is positioned over it. |
| [`Data`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.tooltiptype.html#Data) Tooltip | Display the data tooltips for all series in the chart. |
| [`Item`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.tooltiptype.html#Item)  Tooltip    | Display a tooltip for each data item in the category that the pointer is positioned over. |
| [`Category`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.tooltiptype.html#Category) Tooltip | Display a grouped tooltip for all data points in the category that the pointer is positioned over. |

<div class="divider--half"></div>

## React Chart Tooltip Template

If none of built-in types of tooltips are matching your requirements, you can create your own tooltips to display and style series title, data values, and axis values. The following sections demonstrate how to do this in different types of React charts.

## Custom Tooltips in Category Chart

This example shows how to create custom tooltips for all series in React [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control. Note that you can also apply the same logic to custom tooltips in React [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) control.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartInteractivityModule.register();
IgrCategoryChartModule.register();

export default class CategoryChartTooltipTemplate extends React.Component<any, any> {
    public data: any[];
    public chart: IgrCategoryChart;

    constructor(props: any) {
        super(props);

        this.initData();

        this.onChartRef = this.onChartRef.bind(this);
        this.onSeriesAdded = this.onSeriesAdded.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options vertical">
                    <span className="legend-title">Highest Grossing Movie Franchises</span>
                </div>
                <div className="container fill" >
                    <IgrCategoryChart
                        width="100%"
                        height="100%"
                        ref={this.onChartRef}
                        dataSource={this.data}
                        chartType="Column"
                        isTransitionInEnabled="true"
                        xAxisInterval={1}
                        seriesAdded={this.onSeriesAdded} />
                </div>
            </div>
        );
    }

    public onSeriesAdded(sender: any, e: any) {
        console.log("onSeriesAdded");

        if (e.series) {
            console.log("onSeriesAdded series");
            e.series.tooltipTemplate = this.onTooltipRender;
        }
    }

    public onTooltipRender(context: any): any {

        console.log("onTooltipRender");
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        return <div>
            <div className="tooltipTitle">{dataItem.Country} Production</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Franchise:</div>
                    <div className="tooltipVal">{dataItem.Franchise}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Revenue of All Movies:</div>
                    <div className="tooltipVal">{dataItem.TotalRevenue}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Highest Grossing Movie: $:</div>
                    <div className="tooltipVal">{dataItem.HighestGrossing}</div>
                </div>
            </div>
        </div>
    }

    public onChartRef(chart: IgrCategoryChart) {
        if (!chart) { return; }

        this.chart = chart;
        // this.chart.toolTipType = ToolTipType.None;
    }

    public initData() {
        this.data = [
            { Franchise: "Marvel Universe", TotalRevenue: 22.55, HighestGrossing: 2.8 },
            { Franchise: "Star Wars", TotalRevenue: 10.32, HighestGrossing: 2.07 },
            { Franchise: "Harry Potter", TotalRevenue: 9.19, HighestGrossing: 1.34 },
            { Franchise: "Avengers", TotalRevenue: 7.76, HighestGrossing: 2.8 },
            { Franchise: "Spider Man", TotalRevenue: 7.22, HighestGrossing: 1.28 },
            { Franchise: "James Bond", TotalRevenue: 7.12, HighestGrossing: 1.11 }
        ];
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CategoryChartTooltipTemplate/>);
```


<div class="divider--half"></div>

## Custom Tooltips in Data Chart

This example shows how to create custom tooltips for each series in React Data Chart control.

```typescript
export class SampleCategoryData {

    public static create(): any[] {
        const data: any[] = [];
        data.push({ "Country": "Canada", "Coal": 400000000, "Oil": 100000000, "Gas": 175000000, "Nuclear": 225000000, "Hydro": 350000000 });
        data.push({ "Country": "China", "Coal": 925000000, "Oil": 200000000, "Gas": 350000000, "Nuclear": 400000000, "Hydro": 625000000 });
        data.push({ "Country": "Russia", "Coal": 550000000, "Oil": 200000000, "Gas": 250000000, "Nuclear": 475000000, "Hydro": 425000000 });
        data.push({ "Country": "Australia", "Coal": 450000000, "Oil": 100000000, "Gas": 150000000, "Nuclear": 175000000, "Hydro": 350000000 });
        data.push({ "Country": "United States", "Coal": 800000000, "Oil": 250000000, "Gas": 475000000, "Nuclear": 575000000, "Hydro": 750000000 });
        data.push({ "Country": "France", "Coal": 375000000, "Oil": 150000000, "Gas": 350000000, "Nuclear": 275000000, "Hydro": 325000000 });
        return data;
    }
}
```
```tsx
import React, { ReactElement, version } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// importing axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// importing category series' modules:
import { IgrColumnSeries } from 'igniteui-react-charts';
// importing data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';

import { IgrChartMouseEventArgs } from 'igniteui-react-charts';
import { SampleCategoryData } from './SampleCategoryData';
import { IgrDataContext } from 'igniteui-react-core';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();

export default class DataChartTooltipTemplate extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.data = SampleCategoryData.create();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{ height: "calc(100% - 35px)" }} >
                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        subtitle="Energy Source of Biggest Countries"
                        isHorizontalZoomEnabled={false}
                        isVerticalZoomEnabled={true} seriesMouseEnter={this.onSeriesMouseEnter}>
                        <IgrCategoryXAxis name="xAxis" label="Country" />
                        <IgrNumericYAxis name="yAxis"  abbreviateLargeNumbers="true" />
                        <IgrColumnSeries
                            name="series1"
                            title="Coal"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="Coal"
                            showDefaultTooltip="false" />
                        <IgrColumnSeries
                            name="series2"
                            title="Hydro"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="Hydro"
                            showDefaultTooltip="false" />
                            <IgrColumnSeries
                            name="series3"
                            title="Nuclear"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="Nuclear"
                            showDefaultTooltip="false" />
                            <IgrColumnSeries
                            name="series4"
                            title="Gas"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="Gas"
                            showDefaultTooltip="false" />
                            <IgrColumnSeries
                            name="series5"
                            title="Oil"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="Oil"
                            showDefaultTooltip="false" />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
    }

    onSeriesMouseEnter = (s: any, e: IgrChartMouseEventArgs) => {
        if (e.series.tooltipTemplate === null ||
            e.series.tooltipTemplate === undefined) {
            e.series.tooltipTemplate = this.onTooltipRender;
        }
    }

    public onTooltipRender(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const coal = (dataItem.Coal / 1000000) + " M";
        const hydro = (dataItem.Hydro / 1000000) + " M";
        const nuclear = (dataItem.Nuclear / 1000000) + " M";
        const gas = (dataItem.Gas / 1000000) + " M";
        const oil = (dataItem.Oil / 1000000) + " M";

        return <div>
            <div className="tooltipTitle">{dataItem.Country} Production</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Coal:</div>
                    <div className="tooltipVal">{coal}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Hydro:</div>
                    <div className="tooltipVal">{hydro}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Nuclear:</div>
                    <div className="tooltipVal">{nuclear}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Gas:</div>
                    <div className="tooltipVal">{gas}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Oil:</div>
                    <div className="tooltipVal">{oil}</div>
                </div>
            </div>
        </div>
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartTooltipTemplate/>);
```


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Markers](chart-markers.md)

## API References

The [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) and [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) components share the following API properties:

- [`toolTipType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#toolTipType)

In the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) component, you can use the following API components and properties:

- [`IgrDataToolTipLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatatooltiplayer.html)
- [`IgrItemToolTipLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igritemtooltiplayer.html)
- [`IgrCategoryToolTipLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorytooltiplayer.html)
- `ShowDefaultToolTip`
