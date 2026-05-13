---
title: React Chart Features | Data Visualization | Infragistics
_description: Infragistics' React Chart Features
_keywords: React Charts, Features, Infragistics
_license: commercial
mentionedTypes: ["FinancialChart", "CategoryChart", "XamDataChart"]
_tocName: Chart Features
---

# React Chart Features

The Ignite UI for React Charts allow you to display many different features to portray the full data story to be told with your chart. Each of these features are fully customizable, and can be styled to suit your design needs - allowing you full control. Interactions such as highlighting and annotations allow you to call out important data details allowing for a deeper data analysis within your chart.

The React Charts offer the following chart features:

## Axis

Modify or customize all aspects of both the X-Axis and Y-Axis using the different axis properties. You can display gridlines, customize the style of tickmarks, change axis titles, and even modify axis locations and crossing values. You can learn more about customizations of the React chart's [Axis Gridlines](features/chart-axis-gridlines.md), [Axis Layouts](features/chart-axis-layouts.md), and [Axis Options](features/chart-axis-options.md) topic.

```typescript
export class SampleFinancialData {

    public static create(items?: number): any[] {
        // initial values
        let v = 10000;
        let o = 500;
        let h = Math.round(o + (Math.random() * 5));
        let l = Math.round(o - (Math.random() * 5));
        let c = Math.round(l + (Math.random() * (h - l)));

        if (items === undefined) {
            items = 200;
        }

        const today = new Date();
        const end = new Date(today.getFullYear(), 11, 1);
        let time = this.addDays(end, -items);

        const data: any[] = [];
        for (let i = 0; i < items; i++) {
            const date = time.toDateString();
            const label = this.getShortDate(time, false);
            // adding new data item
            data.push({"Time": time, "Date": date, "Label": label, "Close": c, "Open": o, "High": h, "Low": l, "Volume": v});
            // generating new values
            const mod = Math.random() - 0.45;
            o = Math.round(o + (mod * 5 * 2));
            v = Math.round(v + (mod * 5 * 100));
            h = Math.round(o + (Math.random() * 5));
            l = Math.round(o - (Math.random() * 5));
            c = Math.round(l + (Math.random() * (h - l)));
            time = this.addDays(time, 1);
        }
        return data;
    }

    public static addDays(dt: Date, days: number): Date {
        return new Date(dt.getTime() + days * 24 * 60 * 60 * 1000);
    }

    public static getShortDate(dt: Date, showYear: boolean): string {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const ind = dt.getMonth();
        const day = dt.getDay() + 1;
        let label = months[ind] + " " + day;
        if (showYear) {
            label += " " +  dt.getFullYear();
        }
        return label;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDataChartCoreModule, IgrDataChartInteractivityModule, IgrDataChartScatterCoreModule, IgrDataChartScatterModule,
         IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterSplineSeries } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartAxisSharing extends React.Component<any, any> {
    public data: any[] = [];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);        
        
        this.onXAxisCrossValueChange = this.onXAxisCrossValueChange.bind(this);
        this.onYAxisCrossValueChange = this.onYAxisCrossValueChange.bind(this);

        this.state = {
            xAxisCrossValue: 0,
            yAxisCrossValue: 0
        }
        
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="option-label">X-Axis Crossing Value: </label>
                    <label className="options-value">{this.state.xAxisCrossValue}</label>
                    <input className="options-slider" type="range" min={-360} max={360} step={10} value={this.state.xAxisCrossValue}
                           onChange={this.onXAxisCrossValueChange}/>
                    <label className="option-label">Y-Axis Crossing Value: </label>
                    <label className="options-value">{this.state.yAxisCrossValue}</label>
                    <input className="options-slider" type="range" min={-1.25} max={1.25} step={0.125} value={this.state.yAxisCrossValue} 
                           onChange={this.onYAxisCrossValueChange}/>
                </div>
                <div className="container">
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        plotAreaMarginBottom={60}
                        plotAreaMarginTop={60}
                        plotAreaMarginLeft={30}
                        plotAreaMarginRight={30}>

                        <IgrNumericXAxis name="xAxis" interval={40} minimumValue={-360} maximumValue={360} labelLocation="InsideBottom"
                            labelTopMargin={10} crossingAxisName="yAxis" crossingValue={this.state.yAxisCrossValue} strokeThickness={1} stroke="Black" />

                        <IgrNumericYAxis name="yAxis" minimumValue={-1.25} maximumValue={1.25} interval={0.25} labelLocation="InsideLeft"
                            labelRightMargin={10} crossingAxisName="xAxis" crossingValue={this.state.xAxisCrossValue} strokeThickness={1} stroke="Black" />

                        <IgrScatterSplineSeries name="series1" xAxisName="xAxis" yAxisName="yAxis" markerType="Circle" xMemberPath="X" yMemberPath="sinValue" />
                        <IgrScatterSplineSeries name="series2" xAxisName="xAxis" yAxisName="yAxis" markerType="Circle" xMemberPath="X" yMemberPath="cosValue" />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public initData() {
        for (let i = -360; i <= 360; i += 10) {
            const radians = (i * Math.PI) / 180;
            const sin = Math.sin(radians);
            const cos = Math.cos(radians);
            this.data.push({ X: i, sinValue: sin, cosValue: cos });
        }
    }

    public onXAxisCrossValueChange(e: any){
        this.setState({ xAxisCrossValue: e.target.value});
    }

    public onYAxisCrossValueChange(e: any){
        this.setState({ yAxisCrossValue: e.target.value});
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartAxisSharing/>);
```

<div class="divider--half"></div>

## Annotations

These additional layers are on top of the chart which are mouse / touch dependent. Used individually or combined, they provide powerful interactions that help to highlight certain values within the chart. You can learn more about this feature in the [Chart Annotations](features/chart-annotations.md) topic.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';

IgrCategoryChartModule.register();
IgrLegendModule.register();

export default class CategoryChartLineChartWithAnnotations extends React.Component<any, any> {
    public data: any[];
    public chart: IgrCategoryChart;
    public categoryData: any[];
    public includedProperties: string[] = ["Year", "USA"];

    constructor(props: any) {
        super(props);
        this.state = {
            calloutsVisible: true,
            crosshairsMode: "Both",
            crosshairsVisible: true,
            finalValuesVisible: true,
            markersTypes: "Automatic",
            markersVisible: true,
        };
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label">Annotations: </label>
                    <label className="options-label"><input type="checkbox"
                    checked={this.state.crosshairsVisible}
                    onChange={this.onCrosshairsVisible}/> Crosshair </label>
                    <label className="options-label"><input type="checkbox"
                    checked={this.state.calloutsVisible}
                    onChange={this.onCalloutsVisible}/> Callouts </label>
                    <label className="options-label"><input type="checkbox"
                    checked={this.state.finalValuesVisible}
                    onChange={this.onFinalValuesVisible}/> Final Values </label>
                    <label className="options-label"><input type="checkbox"
                    checked={this.state.markersVisible}
                    onChange={this.onMarkersVisible}/> Markers </label>
                </div>

                <div className="container" style={{height: "calc(100% - 1.25rem)"}} >
                    <IgrCategoryChart
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        chartType="Line"
                        subtitle="Renewable Electricity Generated"
                        isHorizontalZoomEnabled={false}
                        isVerticalZoomEnabled={false}
                        yAxisTitle="TWh"
                        thickness={2}
                        crosshairsSnapToData={false}
                        crosshairsDisplayMode={this.state.crosshairsMode}
                        crosshairsAnnotationEnabled={this.state.crosshairsVisible}
                        finalValueAnnotationsVisible={this.state.finalValuesVisible}
                        yAxisLabelLocation="OutsideRight"
                        calloutsVisible={this.state.calloutsVisible}
                        calloutsYMemberPath="value"
                        calloutsXMemberPath="index"
                        calloutsLabelMemberPath="label"
                        markerTypes={this.state.markersTypes}
                        includedProperties={this.includedProperties}
						computedPlotAreaMarginMode="Series"/>
                </div>
            </div>
        );
    }

    public onCrosshairsVisible = (e: any) =>{
        const isVisible = e.target.checked;
        this.setState( {crosshairsVisible: isVisible} );
        if (isVisible) {
            this.setState( {crosshairsMode: "Both"} );
        }
        else {
            this.setState( {crosshairsMode: "None"} );
        }
    }
    public onCalloutsVisible = (e: any) =>{
        this.setState( {calloutsVisible: e.target.checked} );
    }
    public onFinalValuesVisible = (e: any) =>{
        this.setState( {finalValuesVisible: e.target.checked} );
    }
    public onMarkersVisible = (e: any) =>{
        const visible = e.target.checked;
        const markers = e.target.checked ? "Circle" : "None";
        this.setState( {markersTypes: markers, markersVisible: visible} );
    }

    public initData() {
        this.data = [
            { Year: "2009", USA: 19 },
            { Year: "2010", USA: 24 },
            { Year: "2011", USA: 28 },
            { Year: "2012", USA: 26 },
            { Year: "2013", USA: 38 },
            { Year: "2014", USA: 31 },
            { Year: "2015", USA: 19 },
            { Year: "2016", USA: 52 },
            { Year: "2017", USA: 50 },
            { Year: "2018", USA: 34 },
            { Year: "2019", USA: 38 },
        ];
        
        let idx: number = 0;

        for (const item of this.data) {
            item.index = idx;
            item.value = item.USA;
            item.label = item.USA + " TWh";
            idx++;
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CategoryChartLineChartWithAnnotations/>);
```

<div class="divider--half"></div>

## Animations

Animate your chart as it loads a new data source by enabling animations. These are customizable by setting different types of animations and the speed at which those animations take place. You can learn more about this feature in the [Chart Animations](features/chart-animations.md) topic.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';

IgrCategoryChartModule.register();

export default class CategoryChartLineChartWithAnimations extends React.Component<any, any> {
    
    public data: any[];
    public chart: IgrCategoryChart;

    constructor(props: any) {            
        super(props);

        this.onChartRef = this.onChartRef.bind(this);

        this.onTransitionInDurationChanged = this.onTransitionInDurationChanged.bind(this);
        this.onTransitionInModeChanged = this.onTransitionInModeChanged.bind(this);        
        this.onReloadChartClick = this.onReloadChartClick.bind(this);

        this.state = {            
            transitionLabel: "1000ms",
            transitionInDuration: 1000,
            transitionInMode: "Auto"
        };

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <span className="options-label">Transition Type </span>
                    <select onChange={this.onTransitionInModeChanged}>
                        <option>Auto</option>
                        <option>AccordionFromBottom</option>
                        <option>AccordionFromCategoryAxisMaximum</option>
                        <option>AccordionFromCategoryAxisMinimum</option>
                        <option>AccordionFromLeft</option>
                        <option>AccordionFromRight</option>
                        <option>AccordionFromTop</option>
                        <option>AccordionFromValueAxisMaximum</option>
                        <option>AccordionFromValueAxisMinimum</option>
                        <option>Expand</option>
                        <option>FromZero</option>
                        <option>SweepFromBottom</option>
                        <option>SweepFromCategoryAxisMaximum</option>
                        <option>SweepFromCategoryAxisMinimum</option>
                        <option>SweepFromCenter</option>
                        <option>SweepFromLeft</option>
                        <option>SweepFromRight</option>
                        <option>SweepFromTop</option>
                        <option>SweepFromValueAxisMaximum</option>
                        <option>SweepFromValueAxisMinimum</option>
                    </select>
                    <label className="options-value" style={{ width: "75px" }}>{this.state.transitionLabel}</label>
                    <input className="options-slider" type="range" min="50" max="2000" step="50" defaultValue="1000"
                           onChange={this.onTransitionInDurationChanged} />
                    <button onClick={this.onReloadChartClick}>Reload Chart</button>
                </div>

                <IgrCategoryChart width="100%" height="calc(100% - 30px)"
                    ref={this.onChartRef}
                    dataSource={this.data}
                    chartType="Line"
                    isTransitionInEnabled={true}
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false}
                    transitionInDuration={this.state.transitionInDuration}
                    transitionInMode={this.state.transitionInMode}
                    yAxisTitle="TWh"
                    yAxisTitleLeftMargin={10}
                    yAxisTitleRightMargin={5}
                    yAxisLabelLeftMargin={0} 
					computedPlotAreaMarginMode="Series"/>
            </div>
        );
    }

    public onChartRef(chart: IgrCategoryChart) {
        if (!chart) { return; }

        this.chart = chart;
    }

    public initData() {
        this.data = [
            { Year: "2009", Europe: 31, China: 21, USA: 19 },
            { Year: "2010", Europe: 43, China: 26, USA: 24 },
            { Year: "2011", Europe: 66, China: 29, USA: 28 },
            { Year: "2012", Europe: 69, China: 32, USA: 26 },
            { Year: "2013", Europe: 58, China: 47, USA: 38 },
            { Year: "2014", Europe: 40, China: 46, USA: 31 },
            { Year: "2015", Europe: 78, China: 50, USA: 19 },
            { Year: "2016", Europe: 13, China: 90, USA: 52 },
            { Year: "2017", Europe: 78, China: 132, USA: 50 },
            { Year: "2018", Europe: 40, China: 134, USA: 34 },
            { Year: "2019", Europe: 80, China: 96, USA: 38 }
        ];
    }

    public onTransitionInModeChanged(e: any) {
        const val = e.target.value;
        this.setState({ transitionInMode: val});
        this.initData();
    }

    public onTransitionInDurationChanged(e: any) {
        const val = e.target.value;
        this.setState({ transitionInDuration: val, transitionLabel: val + "ms"});
        this.initData();
    }

    public onReloadChartClick(e: any){
        this.chart.replayTransitionIn();
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CategoryChartLineChartWithAnimations/>);
```

<div class="divider--half"></div>

## Highlighting

Bring focus to visuals such as lines, columns, or markers by highlighting them as the mouse hovers over the data items. This features is enabled on all chart types. You can learn more about this feature in the [Chart Highlighting](features/chart-highlighting.md) topic.

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

<div class="divider--half"></div>

## Markers

Identify data points quickly, even if the value falls between major gridlines with the use of markers on the chart series. These are fully customizable in style, color, and shape. You can learn more about this feature in the [Chart Markers](features/chart-markers.md) topic.

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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrCategoryChartModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, CategoryChartDescriptionModule, DataChartInteractivityDescriptionModule } from 'igniteui-react-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { MarkerType, MarkerType_$type } from 'igniteui-react-charts';
import { EnumUtil } from 'igniteui-react-core';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrCategoryChartModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private chartTypeEditor: IgrPropertyEditorPropertyDescription
    private markerTypeEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.editorChangeUpdateMarkerType = this.editorChangeUpdateMarkerType.bind(this);
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
                        propertyPath="ChartType"
                        name="ChartTypeEditor"
                        label="Chart Type"
                        primitiveValue="Line">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="MarkerTypeHandler"
                        name="MarkerTypeEditor"
                        label="Marker Type"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownValues={["Circle", "Automatic", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "None"]}
                        dropDownNames={["Circle", "Automatic", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "None"]}
                        primitiveValue="Circle"
                        changed={this.editorChangeUpdateMarkerType}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    isSeriesHighlightingEnabled="true"
                    chartType="Line"
                    dataSource={this.countryRenewableElectricity}
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

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public editorChangeUpdateMarkerType(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var item = sender as IgrPropertyEditorPropertyDescription;
        var chart = this.chart;

        var markerVal = item.primitiveValue;
        chart.markerTypes = markerVal;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## Navigation

You can navigate the chart by zooming and panning with the mouse, keyboard, and touch interactions. You can learn more about this feature in the [Chart Navigation](features/chart-navigation.md) topic.

```typescript
export class SampleFinancialData {

    public static create(items?: number): any[] {
        // initial values
        let v = 10000;
        let o = 500;
        let h = Math.round(o + (Math.random() * 5));
        let l = Math.round(o - (Math.random() * 5));
        let c = Math.round(l + (Math.random() * (h - l)));

        if (items === undefined) {
            items = 200;
        }

        const today = new Date();
        const end = new Date(today.getFullYear(), 11, 1);
        let time = this.addDays(end, -items);

        const data: any[] = [];
        for (let i = 0; i < items; i++) {
            const date = time.toDateString();
            const label = this.getShortDate(time, false);
            // adding new data item
            data.push({"Time": time, "Date": date, "Label": label, "Close": c, "Open": o, "High": h, "Low": l, "Volume": v});
            // generating new values
            const mod = Math.random() - 0.45;
            o = Math.round(o + (mod * 5 * 2));
            v = Math.round(v + (mod * 5 * 100));
            h = Math.round(o + (Math.random() * 5));
            l = Math.round(o - (Math.random() * 5));
            c = Math.round(l + (Math.random() * (h - l)));
            time = this.addDays(time, 1);
        }
        return data;
    }

    public static addDays(dt: Date, days: number): Date {
        return new Date(dt.getTime() + days * 24 * 60 * 60 * 1000);
    }

    public static getShortDate(dt: Date, showYear: boolean): string {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const ind = dt.getMonth();
        const day = dt.getDay() + 1;
        let label = months[ind] + " " + day;
        if (showYear) {
            label += " " +  dt.getFullYear();
        }
        return label;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// financial series modules:
import { IgrDataChartFinancialModule } from 'igniteui-react-charts';
// data chart's elements:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
import { SampleFinancialData } from './SampleFinancialData';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartFinancialModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartNavigation extends React.Component<any, any> {
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.state = {
            data: SampleFinancialData.create(),
            defaultInteraction: "DragPan",
            dragModifier: "Alt",
            isZoomEnabled: true,
            panModifier: "Control" };

        this.onChartRef = this.onChartRef.bind(this);

        this.onDefaultInteractionChange = this.onDefaultInteractionChange.bind(this);
        this.onPanModifierChange = this.onPanModifierChange.bind(this);
        this.onDragModifierChange = this.onDragModifierChange.bind(this);

        this.onZoomEnabledChange = this.onZoomEnabledChange.bind(this);

        this.onPanDownClick = this.onPanDownClick.bind(this);
        this.onPanLeftClick = this.onPanLeftClick.bind(this);
        this.onPanRightClick = this.onPanRightClick.bind(this);
        this.onPanUpClick = this.onPanUpClick.bind(this);
        this.onZoomInClick = this.onZoomInClick.bind(this);
        this.onZoomOutClick = this.onZoomOutClick.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <div className="options vertical" style={{width: "100px"}}>
                        <button onClick={this.onPanUpClick}>Pan Up</button>
                        <button onClick={this.onPanDownClick}>Pan Down</button>
                    </div>
                    <div className="options vertical" style={{width: "100px"}}>
                        <button onClick={this.onPanLeftClick}>Pan Left</button>
                        <button onClick={this.onPanRightClick}>Pan Right</button>
                    </div>
                    <div className="options vertical" style={{width: "100px"}}>
                        <button onClick={this.onZoomInClick}>Zoom In</button>
                        <button onClick={this.onZoomOutClick}>Zoom Out</button>
                    </div>
                    <div className="options vertical" style={{ width: "120px", alignSelf: "center" }}>
                        <label className="options-label" style={{ margin: "5px" }}>Pan Modifier:</label>
                        <label className="options-label" style={{ margin: "5px" }}>Zoom Modifier:</label>
                    </div>
                    <div className="options vertical" style={{ width: "100px" }}>
                        <select value={this.state.panModifier} style={{ margin: "5px"}} onChange={this.onPanModifierChange}>
                            <option>Alt</option>
                            <option>Control</option>
                            <option>Shift</option>
                            <option>Windows</option>
                            <option>Apple</option>
                            <option>None</option>
                        </select>
                        <select value={this.state.dragModifier} style={{ margin: "5px"}} onChange={this.onDragModifierChange}>
                            <option>Alt</option>
                            <option>Control</option>
                            <option>Shift</option>
                            <option>Windows</option>
                            <option>Apple</option>
                            <option>None</option>
                        </select>
                    </div>
                    <div className="options vertical" style={{ width: "150px", alignSelf: "center" }}>
                        <label className="options-label" style={{ margin: "5px"}}>Interaction:</label>
                        <label className="options-label" style={{ margin: "5px"}}>Zooming:</label>
                    </div>
                    <div className="options vertical" style={{ width: "100px" }}>
                        <select value={this.state.defaultInteraction} style={{ margin: "5px"}} onChange={this.onDefaultInteractionChange}>
                            <option>DragZoom</option>
                            <option>DragPan</option>
                            <option>None</option>
                        </select>
                        <input type="checkbox" checked={this.state.isZoomEnabled} onChange={this.onZoomEnabledChange} />
                    </div>
                </div>

                <div className="container vertical">
                    <IgrDataChart
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        subtitle="Stock Prices Series in Candlestick Display Type"
                        subtitleTopMargin={10}
                        isHorizontalZoomEnabled={this.state.isZoomEnabled}
                        isVerticalZoomEnabled={this.state.isZoomEnabled}
                        panModifier={this.state.panModifier}
                        dragModifier={this.state.dragModifier}
                        defaultInteraction={this.state.defaultInteraction}
                        dataSource={this.state.data}>
                        <IgrCategoryXAxis
                            name="xAxis"
                            label="Label"/>
                        <IgrNumericYAxis
                            name="yAxis"
                            title="Amount (in USD)"
                            titleRightMargin={10}
                            labelRightMargin={10}
                            labelHorizontalAlignment="Left"
                            labelLocation="OutsideRight"/>
                        <IgrFinancialPriceSeries
                            name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            displayType="Candlestick"
                            openMemberPath="Open"
                            closeMemberPath="Close"
                            highMemberPath="High"
                            lowMemberPath="Low"
                            volumeMemberPath="Volume"
                            showDefaultTooltip={true}
                            isTransitionInEnabled={true}
                            title="Price"/>
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
        this.chart.actualWindowScaleHorizontal = 0.60;
        this.chart.actualWindowScaleVertical = 0.60;
        this.chart.actualWindowPositionVertical = 0.20;
        this.chart.actualWindowPositionHorizontal = 0.20;
    }

    public onDefaultInteractionChange = (e: any) => {
        this.setState({ defaultInteraction: e.target.value });
    }

    public onPanModifierChange = (e: any) => {
        this.setState({ panModifier: e.target.value });
    }

    public onDragModifierChange = (e: any) => {
        this.setState({ dragModifier: e.target.value });
    }

    public onZoomEnabledChange = (e: any) => {
        this.setState({ isZoomEnabled: e.target.checked });
    }

    public onPanUpClick = (e: any) => {
        this.chart.actualWindowPositionVertical -= 0.05;
    }

    public onPanDownClick = (e: any) => {
        this.chart.actualWindowPositionVertical += 0.05;
    }

    public onPanLeftClick = (e: any) => {
        this.chart.actualWindowPositionHorizontal -= 0.05;
    }

    public onPanRightClick = (e: any) => {
        this.chart.actualWindowPositionHorizontal += 0.05;
    }

    public onZoomOutClick = (e: any) => {
        if (this.chart.actualWindowPositionHorizontal > 0.025) {
            this.chart.actualWindowPositionHorizontal -= 0.025;
        }
        if (this.chart.actualWindowPositionVertical > 0.025) {
            this.chart.actualWindowPositionVertical -= 0.025;
        }

        if (this.chart.actualWindowScaleHorizontal < 1.0) {
            this.chart.actualWindowScaleHorizontal += 0.05;
        }
        if (this.chart.actualWindowScaleVertical < 1.0) {
            this.chart.actualWindowScaleVertical += 0.05;
        }
    }

    public onZoomInClick = (e: any) => {
        if (this.chart.actualWindowPositionHorizontal < 1.0) {
            this.chart.actualWindowPositionHorizontal += 0.025;
        }
        if (this.chart.actualWindowPositionVertical < 1.0) {
            this.chart.actualWindowPositionVertical += 0.025;
        }

        if (this.chart.actualWindowScaleHorizontal > 0.05) {
            this.chart.actualWindowScaleHorizontal -= 0.05;
        }
        if (this.chart.actualWindowScaleVertical > 0.05) {
            this.chart.actualWindowScaleVertical -= 0.05;
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartNavigation/>);
```

<div class="divider--half"></div>

## Overlays

Overlays allows you to annotate important values and thresholds by plotting horizontal or vertical lines in charts. You can learn more about this feature in the [Chart Overlays](features/chart-overlays.md) topic.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
import { IgrValueOverlay } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartValueOverlay extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{height: "calc(100% - 35px)"}}>
                    <IgrDataChart width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Label" />
                        <IgrNumericYAxis name="yAxis" minimumValue={0} maximumValue={10} />

                        <IgrColumnSeries name="series1" xAxisName="xAxis" yAxisName="yAxis" valueMemberPath="Value" />

                        <IgrValueOverlay name="overlay1" axisName="yAxis" value={2.0} thickness={5} />
                        <IgrValueOverlay name="overlay2" axisName="yAxis" value={3.6} thickness={5} />
                        <IgrValueOverlay name="overlay3" axisName="yAxis" value={5.8} thickness={5} />
                        <IgrValueOverlay name="overlay4" axisName="yAxis" value={1.0} thickness={5} />
                        <IgrValueOverlay name="overlay5" axisName="yAxis" value={8.0} thickness={5} />
                        <IgrValueOverlay name="overlay6" axisName="yAxis" value={7.0} thickness={5} />
                        <IgrValueOverlay name="overlay7" axisName="yAxis" value={5.0} thickness={5} />
                    </IgrDataChart>
                </div>
            </div >
        );
    }

    public initData() {
        this.data = [
            { "Label": 1, "Value": 1.0 },
            { "Label": 2, "Value": 2.0 },
            { "Label": 3, "Value": 6.0 },
            { "Label": 4, "Value": 8.0 },
            { "Label": 5, "Value": 2.0 },
            { "Label": 6, "Value": 6.0 },
            { "Label": 7, "Value": 4.0 },
            { "Label": 8, "Value": 2.0 },
            { "Label": 9, "Value": 1.0 },
        ];
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartValueOverlay/>);
```

<div class="divider--half"></div>

## Performance

React charts are optimized for high performance of rendering millions of data points and updating them every few milliseconds. However, there are several chart features that affect performance of the charts and they should be considered when optimizing performance in your application. You can learn more about this feature in the [Chart Performance](features/chart-performance.md) topic.

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

## Tooltips

Display all information relevant to the particular series type via Tooltips. There are different tooltips that can be enabled, such as Item-level and Category-level tooltips. You can learn more about this feature in the [Chart Tooltips](features/chart-tooltips.md) topic.

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

## Trendlines

Use trendlines to identify a trend or find patterns in your data. There are many different trendlines supported by the React chart, such as CubicFit and LinearFit. You can learn more about this feature in the [Chart Trendlines](features/chart-trendlines.md) topic.

```typescript
export default class StocksHistory {
  /** gets stock OHLC prices for multiple stocks */

  public static async getMultipleStocks(): Promise<any[]> {
    // getting prices of multiples stocks asynchronously
    const dataSources: any[] = [
      await this.getAmazonStock(),
      await this.getGoogleStock(),
      await this.getMicrosoftStock(),
      await this.getTeslaStock()
    ];

    return new Promise<any[]>((resolve, reject) => {
      resolve(dataSources);
    });
  }

  /** gets Amazon stock OHLC prices from a .JSON file */
  public static async getAmazonStock(): Promise<StockItem[]> {
    let url = "https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json";
    let response = await fetch(url);
    let jsonData = await response.json();
    let stockData = this.convertData(jsonData);
    // setting data intent for Series Title, e.g. FinancialChart usage
    (stockData as any).__dataIntents = {
      close: ["SeriesTitle/Amazon"]
    };
    // console.log("fetchAmazonStock: ", stockData.length);

    return new Promise<StockItem[]>((resolve, reject) => {
      resolve(stockData);
    });
  }

  /** gets Tesla stock OHLC prices from a .JSON file */
  public static async getTeslaStock(): Promise<StockItem[]> {
    let url = "https://static.infragistics.com/xplatform/data/stocks/stockTesla.json";
    let response = await fetch(url);
    let jsonData = await response.json();
    let stockData = this.convertData(jsonData);
    // setting data intent for Series Title, e.g. FinancialChart usage
    (stockData as any).__dataIntents = {
      close: ["SeriesTitle/Tesla"]
    };
    return new Promise<StockItem[]>((resolve, reject) => {
      resolve(stockData);
    });
  }

  /** gets Microsoft stock OHLC prices from a .JSON file */
  public static async getMicrosoftStock(): Promise<StockItem[]> {
    let url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json";
    let response = await fetch(url);
    let jsonData = await response.json();
    let stockData = this.convertData(jsonData);
    // setting data intent for Series Title, e.g. FinancialChart usage
    (stockData as any).__dataIntents = {
      close: ["SeriesTitle/Microsoft"]
    };
    return new Promise<StockItem[]>((resolve, reject) => {
      resolve(stockData);
    });
  }

  /** gets Google stock OHLC prices from a .JSON file */
  public static async getGoogleStock(): Promise<StockItem[]> {
    let url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json";
    let response = await fetch(url);
    let jsonData = await response.json();
    let stockData = this.convertData(jsonData);
    // setting data intent for Series Title, e.g. FinancialChart usage
    (stockData as any).__dataIntents = {
      close: ["SeriesTitle/Google"]
    };
    return new Promise<StockItem[]>((resolve, reject) => {
      resolve(stockData);
    });
  }

  public static convertData(jsonData: any[]): StockItem[] {
    let stockItems: StockItem[] = [];

    for (let json of jsonData) {
      let parts = json.date.split("-"); // "2020-01-01"
      let item = new StockItem();
      item.date = new Date(parts[0], parts[1], parts[2]);
      item.open = json.open;
      item.high = json.high;
      item.low = json.low;
      item.close = json.close;
      item.volume = json.volume;
      stockItems.push(item);

    }

    return stockItems;
  }
}

export class StockItem {
  public open?: number;
  public close?: number;
  public high?: number;
  public low?: number;
  public volume?: number;

  public date?: Date;

}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import StocksHistory from './StocksHistory';

IgrFinancialChartModule.register();

export default class FinancialChartTrendlines extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { trendLineType: "QuinticFit", data:[] }
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options horizontal">
                <label className="options-label">Trendlines:</label>
                <select value={this.state.trendLineType}
                    onChange={this.onTrendlineChanged}>
                    <option>CubicFit</option>
                    <option>LinearFit</option>
                    <option>QuinticFit</option>
                    <option>QuarticFit</option>
                    <option>ExponentialFit</option>
                    <option>PowerLawFit</option>
                    <option>LogarithmicFit</option>
                    <option>CumulativeAverage</option>
                    <option>ExponentialAverage</option>
                    <option>SimpleAverage</option>
                    <option>ModifiedAverage</option>
                    <option>WeightedAverage</option>
                    <option>None</option>
                </select>
            </div>

            <div className="container" style={{height: "calc(100% - 65px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Bar"
                    thickness={2}
                    trendLineType={this.state.trendLineType}
                    trendLineThickness={2}
                    trendLinePeriod={10}
                    trendLineBrushes="rgba(0, 101, 209, 1)"
                    chartTitle="Microsoft Trend"
                    subtitle="Between 2013 and 2017"
                    dataSource={this.state.data}
                    zoomSliderType="None"
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false} />
            </div>
        </div>
        );
    }

    public onTrendlineChanged = (e: any) =>{
        const mode = e.target.value;
        this.setState({trendLineType: mode});
    }

    public initData() {
        StocksHistory.getMicrosoftStock().then((stocks: any[]) => {
            this.setState({ data: stocks });
        });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartTrendlines/>);
```

<div class="divider--half"></div>

## API References

- [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)
- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)
- [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html)
