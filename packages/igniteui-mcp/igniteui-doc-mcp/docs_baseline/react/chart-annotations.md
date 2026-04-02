---
title: React Chart Annotations | Data Visualization | Infragistics
_description: Infragistics' React Chart Annotations
_keywords: React Charts, Annotations, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Annotations
_premium: true
---

# React Chart Annotations

The React chart's hover interactions and annotations are implemented through hover interaction layers, which are series that are added to the series collection. These layers are dependent on the cursor position. Each of these annotation layers provides a different hover interaction that may be used individually or combined with others to provide powerful hover interactions.

## React Annotations Example

The following example demonstrates the annotation layers that are available on the React chart. Click on the checkboxes to turn each layer on and off.

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

Like this sample? Get access to our complete React toolkit and start building your own apps in minutes. <a href="https://www.infragistics.com/products/ignite-ui-react/download">Download it for free.</a>

## React Crosshair Layer

The [`IgrCrosshairLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcrosshairlayer.html) renders as crossing lines intersecting at the actual value of every series that they are configured to target with each series rendering a separate set of lines.

Crosshair types include:

- Horizontal
- Vertical
- Both

The chart's crosshairs can also be configured to snap to data points by setting the [`crosshairsSnapToData`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#crosshairsSnapToData) property to true, otherwise the crosshairs will be interpolated between data points. Annotations can also be enabled to display the crosshair's value along the axis.

You can configure the crosshair layer so that the layer will only display on one specific series, as by default they will target all series in the chart control. To achieve this, set the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcrosshairlayer.html#targetSeries) property.

By default, the color of the crosshair lines is a lighter color than the series that it is interacting with. However, this default setting can be overridden so that you can select a color that will be used for the crosshair lines. This is done by setting the [`brush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#brush) property of the Crosshair Layer.

The following example shows how to configure the crosshair layer but targeting a single series, setting the type to vertical and styling the brush color.

```typescript
export class SampleCategoryData {

    public static create(): any[] {
        const data: any[] = [];
        data.push({ "Year": "2009", "Europe": 31, "China": 21, "USA": 19 });
        data.push({ "Year": "2010", "Europe": 43, "China": 26, "USA": 24 });
        data.push({ "Year": "2011", "Europe": 66, "China": 29, "USA": 28 });
        data.push({ "Year": "2012", "Europe": 69, "China": 32, "USA": 26 });
        data.push({ "Year": "2013", "Europe": 58, "China": 47, "USA": 38 });
        data.push({ "Year": "2014", "Europe": 40, "China": 46, "USA": 31 });
        data.push({ "Year": "2015", "Europe": 78, "China": 50, "USA": 19 });
        data.push({ "Year": "2016", "Europe": 13, "China": 90, "USA": 52 });
        data.push({ "Year": "2017", "Europe": 78, "China": 132, "USA": 50 });
        data.push({ "Year": "2018", "Europe": 40, "China": 134, "USA": 34 });
        data.push({ "Year": "2019", "Europe": 80, "China": 96, "USA": 38 });
        return data;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// importing axis' modules:
import { AxisLabelsLocation, IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// importing category series' modules:
import { IgrLineSeries } from 'igniteui-react-charts';
import { IgrCrosshairLayer } from "igniteui-react-charts";
// importing data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import { SampleCategoryData } from './SampleCategoryData';
import { Visibility } from 'igniteui-react-core';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartCrosshairLayerStyling extends React.Component<any, any> {
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
                        subtitle="Renewable Energy Generated"
                        dataSource={this.data}>
                        <IgrCategoryXAxis name="xAxis" 
                            label="Year" 
                            dataSource={this.data}/>
                        <IgrNumericYAxis name="yAxis" 
                            title="TWh" 
                            labelLocation={AxisLabelsLocation.OutsideRight}/>
                        <IgrLineSeries name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="USA"/>
                        <IgrCrosshairLayer name="CrosshairLayer" 
                            horizontalLineVisibility={Visibility.Collapsed} 
                            brush="DodgerBlue"/>
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartCrosshairLayerStyling/>);
```


<div class="divider--half"></div>

## React Final Value Layer

The [`IgrFinalValueLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinalvaluelayer.html) of the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control provides a quick view along the axis of the ending value displayed in a series.

You can configure this annotation to target a specific series if you want to have multiple final value layers present with different configurations. This can be done be setting the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcrosshairlayer.html#targetSeries) property.

You can also customize this annotation by setting the following properties:

- [`axisAnnotationBackground`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinalvaluelayer.html#axisAnnotationBackground): This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
- [`axisAnnotationTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinalvaluelayer.html#axisAnnotationTextColor): This property is used to choose the brush for the annotation's text color.
- [`axisAnnotationOutline`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinalvaluelayer.html#axisAnnotationOutline): This property is used to choose the brush for the annotation's outline color.

The following example demonstrates how to style the final value layer annotation by setting the properties listed above.

```typescript
export class SampleCategoryData {

    public static create(): any[] {
        const data: any[] = [];
        data.push({ "Year": "2009", "Europe": 31, "China": 21, "USA": 19 });
        data.push({ "Year": "2010", "Europe": 43, "China": 26, "USA": 24 });
        data.push({ "Year": "2011", "Europe": 66, "China": 29, "USA": 28 });
        data.push({ "Year": "2012", "Europe": 69, "China": 32, "USA": 26 });
        data.push({ "Year": "2013", "Europe": 58, "China": 47, "USA": 38 });
        data.push({ "Year": "2014", "Europe": 40, "China": 46, "USA": 31 });
        data.push({ "Year": "2015", "Europe": 78, "China": 50, "USA": 19 });
        data.push({ "Year": "2016", "Europe": 13, "China": 90, "USA": 52 });
        data.push({ "Year": "2017", "Europe": 78, "China": 132, "USA": 50 });
        data.push({ "Year": "2018", "Europe": 40, "China": 134, "USA": 34 });
        data.push({ "Year": "2019", "Europe": 80, "China": 96, "USA": 38 });
        return data;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// importing axis' modules:
import { AxisLabelsLocation, IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// importing category series' modules:
import { IgrLineSeries } from 'igniteui-react-charts';
import { IgrFinalValueLayer} from "igniteui-react-charts";
// importing data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrFinalValueLayerModule } from 'igniteui-react-charts'

import { SampleCategoryData } from './SampleCategoryData';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartAnnotationModule.register();
IgrFinalValueLayerModule.register();

export default class DataChartFinalValueLayerStyling extends React.Component<any, any> {
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
                        subtitle="Renewable Energy Generated"
                        dataSource={this.data}>
                        <IgrCategoryXAxis name="xAxis" 
                            label="Year" 
                            dataSource={this.data}/>
                        <IgrNumericYAxis name="yAxis" 
                            title="TWh" 
                            labelLocation={AxisLabelsLocation.OutsideRight}/>
                        <IgrLineSeries name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="USA"/>
                        <IgrFinalValueLayer name="FinalValueLayer" 
                            axisAnnotationBackground="Orange" 
                            axisAnnotationTextColor="Black" 
                            axisAnnotationOutline="Black"/>
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartFinalValueLayerStyling/>);
```


<div class="divider--half"></div>

```tsx
 <IgrCategoryChart
    dataSource={this.state.data}
    finalValueAnnotationsVisible={true} />
```

## React Callout Layer

The [`IgrCalloutLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcalloutlayer.html) displays annotations from existing or new data on the chart control. The annotations appear next to the given data values in the data source.

Use the callout annotations to display additional information, such as notes or specific details about data points, that you would like to point out to your users.

You can configure the callouts to target a specific series if you want to have multiple callout layers present with different configurations. This can be done by setting the [`targetSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcalloutlayer.html#targetSeries) property.

You can also customize this annotation by setting the following properties:

- [`calloutLeaderBrush`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcalloutlayer.html#calloutLeaderBrush): This property is used to choose the brush for the leader lines for the callouts for the layer.
- [`calloutOutline`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcalloutlayer.html#calloutOutline): This property is used to choose the brush for the annotation's outline color.
- [`calloutBackground`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcalloutlayer.html#calloutBackground): This property is used to choose the brush for the annotation's background color. The default is to use the series brush.
- [`calloutTextColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcalloutlayer.html#calloutTextColor): This property is used to choose the brush for the annotation's text color.
- [`calloutStrokeThickness`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcalloutlayer.html#calloutStrokeThickness): This property is used to choose the thickness for the callout backing.
- [`calloutCornerRadius`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcalloutlayer.html#calloutCornerRadius): This property is used to curve the corners of the callouts.
- [`allowedPositions`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcalloutlayer.html#allowedPositions): This property is used to choose which positions that the callout layer is allowed to use. eg. top, bottom

The following example demonstrates how to style the callout layer annotations by setting the properties listed above:

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

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries, IgrCalloutLayer } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrAnnotationLayerProxyModule
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
    private lineSeries1: IgrLineSeries
    private calloutLayer1: IgrCalloutLayer

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
                <IgrDataChart
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.countryRenewableElectricity}
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="TWh"
                        labelLocation="OutsideRight">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        name="lineSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="america"
                        brush="rgba(137, 97, 169, 1)"
                        markerOutline="rgba(137, 97, 169, 1)"
                        shouldHideAutoCallouts="false">
                    </IgrLineSeries>
                    <IgrCalloutLayer
                        name="CalloutLayer1"
                        isAutoCalloutBehaviorEnabled="true"
                        calloutLeaderBrush="rgba(137, 97, 169, 1)"
                        calloutOutline="rgba(137, 97, 169, 1)"
                        calloutBackground="white"
                        calloutTextColor="rgba(137, 97, 169, 1)"
                        calloutStrokeThickness="1"
                        calloutCollisionMode="Greedy">
                    </IgrCalloutLayer>
                </IgrDataChart>
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

```tsx
 <IgrCategoryChart
    dataSource={this.state.data}
    calloutsVisible={true}
    calloutsDataSource={this.state.calloutData}
    calloutsXMemberPath="index"
    calloutsYMemberPath="value"
    calloutsLabelMemberPath="info" />
```

## API References

The following is a list of API members mentioned in the above sections:

- [`crosshairsSnapToData`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#crosshairsSnapToData)
- [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)
