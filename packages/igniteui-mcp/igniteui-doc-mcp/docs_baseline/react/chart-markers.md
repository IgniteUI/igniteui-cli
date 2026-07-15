---
title: React Chart Markers | Data Visualization | Infragistics
_description: Infragistics' React Chart Markers
_keywords: React Charts, Markers, Marker Size, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart", "CategoryChartType", "MarkerType", "MarkerSeries", "ScatterLineSeries", "ScatterSplineSeries", "ScatterSeries", "LineSeries", "SplineSeries", "MarkerAutomaticBehavior", "SeriesViewer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Markers
_premium: true
---

# React Chart Markers

In Ignite UI for React, markers are visual elements that display the values of data points in the chart's plot area. Markers help your end-users immediately identify a data point's value even if the value falls between major or minor grid lines.

## React Chart Marker Example

In the following example, the [Line Chart](../types/line-chart.md) is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019 with markers enabled by setting the [`markerType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html#markerType) property to [`Circle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.markertype.html#Circle) enum value.

The colors of the markers are also managed by setting the [`markerBrushes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#markerBrushes) and [`markerOutlines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#markerOutlines) properties in the sample below. The markers and [`chartType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#chartType) is configurable in this sample by using the drop-downs as well.

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
                        dropDownValues={["Circle", "Checkmark", "Automatic", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "None"]}
                        dropDownNames={["Circle", "Checkmark", "Automatic", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "None"]}
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

## React Chart Marker Size

You can control the exact device-independent pixel dimensions of data point markers by setting the `MarkerSize` property on any series that supports markers. This gives you precise control over how large markers appear on screen, regardless of the marker template or style being used.

By default, marker sizing is determined by the series marker template. When you set `MarkerSize` to a specific numeric value, all markers in that series render at that exact device-independent pixel width and height. Setting `MarkerSize` back to `NaN` restores the default template-driven sizing.

The `MarkerSize` property is available on all series types that derive from [`IgrMarkerSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html), including [`IgrLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrlineseries.html), [`IgrSplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsplineseries.html), [`IgrAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrareaseries.html), [`IgrColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcolumnseries.html), [`IgrScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterseries.html), [`IgrScatterLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterlineseries.html), [`IgrScatterSplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscattersplineseries.html), and polar/radial series types.

The following code examples show how to set `MarkerSize` to 30 device-independent pixels on a [`IgrScatterLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterlineseries.html) in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control:

```tsx
<IgrDataChart>
    <IgrScatterLineSeries
        markerSize={30}
        markerType="Circle"
        xMemberPath="X"
        yMemberPath="Y"
        xAxisName="xAxis"
        yAxisName="yAxis" />
</IgrDataChart>
```

To reset markers to their default template-driven size, set `MarkerSize` to `NaN` (or remove the attribute in markup):

```tsx
<IgrLineSeries markerSize={NaN} markerType="Circle" ... />
```

The following sample demonstrates `MarkerSize` on scatter series with an interactive editor:

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

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterSeries } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, DataChartCoreDescriptionModule, DataChartScatterDescriptionModule, DataChartScatterCoreDescriptionModule, DataChartInteractivityDescriptionModule, DataChartAnnotationDescriptionModule } from 'igniteui-react-core';
import { CountryDemographicEuropeItem, CountryDemographicEurope } from './CountryDemographicEurope';
import { CountryDemographicAfricanItem, CountryDemographicAfrican } from './CountryDemographicAfrican';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private markerSizeEditor: IgrPropertyEditorPropertyDescription
    private markerTypeEditor: IgrPropertyEditorPropertyDescription
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

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.editorChangeUpdateDataChartMarkerSize = this.editorChangeUpdateDataChartMarkerSize.bind(this);
        this.editorChangeUpdateDataChartMarkerType = this.editorChangeUpdateDataChartMarkerType.bind(this);
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
                    descriptionType="DataChart"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="MarkerSizeHandler"
                        name="MarkerSizeEditor"
                        label="Marker Size"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["3", "5", "7", "10", "12", "15", "20", "25", "30"]}
                        dropDownValues={["3", "5", "7", "10", "12", "15", "20", "25", "30"]}
                        primitiveValue="10"
                        changed={this.editorChangeUpdateDataChartMarkerSize}>
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="MarkerTypeHandler"
                        name="MarkerTypeEditor"
                        label="Marker Type"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownValues={["Circle", "Checkmark", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "Hidden", "Automatic", "None"]}
                        dropDownNames={["Circle", "Checkmark", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "Hidden", "Automatic", "None"]}
                        primitiveValue="Circle"
                        changed={this.editorChangeUpdateDataChartMarkerType}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

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
                        markerSize="10"
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
                        markerSize="10"
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

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            LegendDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartScatterDescriptionModule.register(context);
            DataChartScatterCoreDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public editorChangeUpdateDataChartMarkerSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var chart = this.chart;
        var markerSizeVal = parseInt(args.newValue);
        var series = chart.actualSeries;
        for (var i = 0; i < series.length; i++) {
            (series[i] as any).markerSize = markerSizeVal;
        }
    }

    public editorChangeUpdateDataChartMarkerType(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var chart = this.chart;
        var markerTypeVal = args.newValue;
        var series = chart.actualSeries;
        for (var i = 0; i < series.length; i++) {
            (series[i] as any).markerType = markerTypeVal;
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

> [!NOTE]
> For [`IgrBubbleSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html), the `MarkerSize` property does not override the bubble radius, which is controlled by the radius data column and the [`radiusScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html#radiusScale). Bubble sizes remain entirely driven by the data and scale configuration.

<div class="divider--half"></div>

## React Chart Checkmark Marker Type

The Ignite UI for React charts include a `Checkmark` option in the [`markerType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html#markerType) enum. This marker renders a V-shaped checkmark icon inside a circle on data points in your chart.

You can apply the `Checkmark` marker type to an individual series by setting its [`markerType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html#markerType) property to `MarkerType.Checkmark`. To use the checkmark shape for all series in the chart simultaneously, set the chart's [`markerAutomaticBehavior`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#markerAutomaticBehavior) property to `MarkerAutomaticBehavior.Checkmark`.

The `SeriesViewer.CheckmarkMarkerTemplate` property defines the marker template used for series with a checkmark marker type, and can be used to customize its appearance across the chart.

<div class="divider--half"></div>

## React Chart Marker Templates

In addition to marker properties, you can implement your own marker by setting a function to the  [`markerTemplate`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html#markerTemplate) property of a series rendered in the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control as it is demonstrated in example below.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCategoryChartModule, IgrLegendModule, IgrLegend, IgrCategoryChart, IgrColumnSeries } from 'igniteui-react-charts';
import { DataTemplateMeasureInfo, DataTemplateRenderInfo } from 'igniteui-react-core';

IgrCategoryChartModule.register();
IgrLegendModule.register();

export default class CategoryChartMarkerTemplates extends React.Component<any, any> {
    public data: any[];

    private chart: IgrCategoryChart;
    private legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.onSeriesAdded = this.onSeriesAdded.bind(this);

        this.state = { chartType: "Line", markersTypes: "Circle" }
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options vertical">
                    <span className="legend-title">Percentage Change in Energy Generation in 2019</span>
                    <div className="legend">
                        <IgrLegend ref={this.onLegendRef} orientation="horizontal" />
                    </div>
                </div>
                <div className="container" style={{ height: "calc(100% - 50px)" }} >
                    <IgrCategoryChart
                        width="100%"
                        height="100%"
                        ref={this.onChartRef}
                        dataSource={this.data}
                        chartType="Column"
                        thickness={2}
                        isHorizontalZoomEnabled={false}
                        isVerticalZoomEnabled={false}
                        isSeriesHighlightingEnabled={true}
                        seriesAdded={this.onSeriesAdded}
                        xAxisMajorStrokeThickness={1}
                        xAxisMajorStroke="LightGray"
                        yAxisMinimumValue={-20}
                        yAxisMaximumValue={30}
                        yAxisInterval={10} />
                </div>
            </div>

        );
    }

    public onChartRef(chart: IgrCategoryChart) {
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

    public onSeriesAdded(sender: any, e: any) {
        let series: IgrColumnSeries = e.series as IgrColumnSeries;
        series.markerTemplate = this.getMarker();
    }

    public initData() {
        this.data = [
            { Location: "World", Solar: 23, Coal: -1, Hydropower: 1, Wind: 12, Nuclear: 3 },
            { Location: "China", Solar: 26, Coal: 2, Hydropower: 5, Wind: 10, Nuclear: 18 },
            { Location: "U.S.", Solar: 15, Coal: -15, Hydropower: -7, Wind: 10, Nuclear: 1 },
            { Location: "EU", Solar: 11, Coal: -12, Hydropower: -2, Wind: 14, Nuclear: -1 }
        ];
    }

    public getMarker(): any {        
        return {
            measure: function (measureInfo: DataTemplateMeasureInfo) {
                const context = measureInfo.context;
                const height = context.measureText("M").width;
                const width = context.measureText("0.00").width;
                measureInfo.width = width;
                measureInfo.height = height + 12;
            },
            render: function (renderInfo: DataTemplateRenderInfo) {
                let ctx = renderInfo.context;
                let x = renderInfo.xPosition;
                let y = renderInfo.yPosition;

                if (renderInfo.isHitTestRender) {
                    ctx.fillStyle = renderInfo.data.actualItemBrush.fill;

                    let width = renderInfo.availableWidth;
                    let height = renderInfo.availableHeight;

                    ctx.fillRect(x - (width / 2), y - (height), renderInfo.availableWidth, renderInfo.availableHeight);
                    return;
                }


                const dataItem = renderInfo.data.item;
                if (dataItem === null) return;

                const series = renderInfo.data.series;
                const dataPath = series.valueColumn.propertyName;

                let dataValue = 0;
                switch (dataPath) {
                    case "Solar": dataValue = dataItem.Solar; break;
                    case "Coal": dataValue = dataItem.Coal; break;
                    case "Hydropower": dataValue = dataItem.Hydropower; break;
                    case "Wind": dataValue = dataItem.Wind; break;
                    case "Nuclear": dataValue = dataItem.Nuclear; break;
                }
                ctx.font = '8pt Verdana';
                ctx.textBaseline = 'top';
                ctx.fillStyle = "black";

                let xOffset = 20;
                let yOffset = 10;
                if (dataValue < 0) {
                    ctx.fillText(dataValue + "%", x - (xOffset / 2), y + (yOffset));
                }
                else {
                    ctx.fillText(dataValue + "%", x - (xOffset / 2), y - (yOffset * 2));
                }

                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(x, y, 6, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
            }
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CategoryChartMarkerTemplates/>);
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`markerBrushes`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#markerBrushes)
- [`markerOutlines`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#markerOutlines)
- `MarkerSize`
- [`markerType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmarkerseries.html#markerType)
- `UseLightweightMarkers`
- [`markerAutomaticBehavior`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#markerAutomaticBehavior)
- `SeriesViewer.CheckmarkMarkerTemplate`
- [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)
- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)
