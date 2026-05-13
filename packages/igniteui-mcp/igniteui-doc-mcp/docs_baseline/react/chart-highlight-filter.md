---
title: React Chart Highlight Filter | Data Visualization | Infragistics
_description: Infragistics' React Chart Highlight Filter
_keywords: React Charts, Highlighting, Filtering, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart", "XamDataChart", "Series", "HighlightedValuesDisplayMode"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Highlight Filter
_premium: true
---

# React Chart Highlight Filter

The Ignite UI for React Chart components support a data highlighting overlay that can enhance the visualization of the series plotted in those charts by allowing you to view a subset of the data plotted. When enabled, this will highlight a subset of data while showing the total set with a reduced opacity in the case of column and area series types, and a dashed line in the case of line series types. This can help you to visualize things like target values versus actual values with your data set. This feature is demonstrated in the following example:

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
```typescript
export class CountryRenewableElectricityFilteredItem {
    public constructor(init: Partial<CountryRenewableElectricityFilteredItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricityFiltered extends Array<CountryRenewableElectricityFilteredItem> {
    public constructor(items: Array<CountryRenewableElectricityFilteredItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityFilteredItem({ year: `2009`, europe: 26, china: 14, america: 12 }),
                new CountryRenewableElectricityFilteredItem({ year: `2010`, europe: 29, china: 17, america: 18 }),
                new CountryRenewableElectricityFilteredItem({ year: `2011`, europe: 50, china: 21, america: 22 }),
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
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrColumnSeries } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule } from 'igniteui-react-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { CountryRenewableElectricityFilteredItem, CountryRenewableElectricityFiltered } from './CountryRenewableElectricityFiltered';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private highlightedValuesDisplayModeEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private columnSeries1: IgrColumnSeries
    private columnSeries2: IgrColumnSeries
    private columnSeries3: IgrColumnSeries

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
                    descriptionType="DataChart"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighlightedValuesDisplayMode"
                        name="HighlightedValuesDisplayModeEditor"
                        label="Highlight Display Mode: "
                        primitiveValue="Hidden">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrDataChart
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    ref={this.chartRef}
                    highlightedValuesDisplayMode="Hidden">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.countryRenewableElectricity}
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrColumnSeries
                        name="ColumnSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="europe"
                        highlightedDataSource={this.countryRenewableElectricityFiltered}>
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="china"
                        highlightedDataSource={this.countryRenewableElectricityFiltered}>
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries3"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="america"
                        highlightedDataSource={this.countryRenewableElectricityFiltered}>
                    </IgrColumnSeries>
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

    private _countryRenewableElectricityFiltered: CountryRenewableElectricityFiltered = null;
    public get countryRenewableElectricityFiltered(): CountryRenewableElectricityFiltered {
        if (this._countryRenewableElectricityFiltered == null)
        {
            this._countryRenewableElectricityFiltered = new CountryRenewableElectricityFiltered();
        }
        return this._countryRenewableElectricityFiltered;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

Note that data highlighting feature is supported by the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) and [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html), but it is configured in different ways in those controls due to the nature of how those controls work. One thing remains constant with this feature though, in that you need to set the [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightedValuesDisplayMode) property to `Overlay` if you want to see the highlight. The following will explain the different configurations for the highlight filter feature.

## Using Highlight Filter with DataChart

In the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html), much of the highlight filter API happens on the series themselves, mainly by setting the [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightedDataSource) property to a collection representing a subset of the data you want to highlight. The count of the items in the [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightedDataSource) needs to match the count of the data bound to the `ItemsSource` of the series that you are looking to highlight, and in the case of category series, it will use the `ValueMemberPath` that you have defined as the highlight path by default. The sample at the top of this page uses the [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightedDataSource) in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) to show the overlay.

In the case that the schema does not match between the [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightedDataSource) and the `ItemsSource` of the series, you can configure this using the `HighlightedValueMemberPath` property on the series. Additionally, if you would like to use the `ItemsSource` of the series itself as the highlight source and have a path on your data item that represents the subset, you can do this. This is done by simply setting the `HighlightedValueMemberPath` property to that path and not providing a [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightedDataSource).

The reduced opacity of the column and area series types is configurable by setting the [`highlightedValuesFadeOpacity`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#highlightedValuesFadeOpacity) property on the series. You can also set the [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightedValuesDisplayMode) property to `Hidden` if you do not wish to see the overlay at all.

The part of the series shown by the highlight filter will be represented in the legend and tooltip layers of the chart separately. You can configure the title that this is given in the tooltip and legend by setting the [`highlightedTitleSuffix`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#highlightedTitleSuffix). This will append the value that you provide to the end of the [`chartTitle`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#chartTitle) of the series.

If the `DataLegend` or [`IgrDataToolTipLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatatooltiplayer.html) is used then the highlighted series will appear grouped. This can be managed by setting the [`highlightedValuesDataLegendGroup`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#highlightedValuesDataLegendGroup) property on the series to categorize them appropriately.

The following example demonstrates the usage of the data legend grouping and highlighting overlay feature within the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control using the [`highlightedValuesDataLegendGroup`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#highlightedValuesDataLegendGroup):

```typescript
export class OlympicMedalsTopCountriesWithTotalsItem {
    public constructor(init: Partial<OlympicMedalsTopCountriesWithTotalsItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public america: number;
    public americaGold: number;
    public china: number;
    public chinaGold: number;
    public russia: number;
    public russiaGold: number;
    public total: number;

}
export class OlympicMedalsTopCountriesWithTotals extends Array<OlympicMedalsTopCountriesWithTotalsItem> {
    public constructor(items: Array<OlympicMedalsTopCountriesWithTotalsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `1996`, america: 148, americaGold: 50, china: 110, chinaGold: 40, russia: 95, russiaGold: 20, total: 353 }),
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `2000`, america: 142, americaGold: 40, china: 115, chinaGold: 45, russia: 91, russiaGold: 40, total: 348 }),
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `2004`, america: 134, americaGold: 35, china: 121, chinaGold: 55, russia: 86, russiaGold: 25, total: 341 }),
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

import { IgrLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule, IgrDataLegendModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrColumnSeries } from 'igniteui-react-charts';
import { ComponentRenderer, LegendDescriptionModule, NumberAbbreviatorDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule, DataLegendDescriptionModule, DataChartAnnotationDescriptionModule } from 'igniteui-react-core';
import { OlympicMedalsTopCountriesWithTotalsItem, OlympicMedalsTopCountriesWithTotals } from './OlympicMedalsTopCountriesWithTotals';

const mods: any[] = [
    IgrLegendModule,
    IgrNumberAbbreviatorModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule,
    IgrDataLegendModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrDataLegend
    private legendRef(r: IgrDataLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private columnSeries1: IgrColumnSeries
    private columnSeries2: IgrColumnSeries
    private columnSeries3: IgrColumnSeries

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend">
                <IgrDataLegend
                    ref={this.legendRef}
                    target={this.chart}
                    groupRowVisible="true">
                </IgrDataLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    ref={this.chartRef}
                    highlightedValuesDisplayMode="Overlay">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrColumnSeries
                        name="ColumnSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        title="America"
                        valueMemberPath="america"
                        dataLegendGroup="Olympic Medals"
                        highlightedValuesDataLegendGroup="Gold Medals"
                        highlightedValueMemberPath="americaGold"
                        highlightedTitleSuffix="">
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        title="China"
                        valueMemberPath="china"
                        dataLegendGroup="Olympic Medals"
                        highlightedValuesDataLegendGroup="Gold Medals"
                        highlightedValueMemberPath="chinaGold"
                        highlightedTitleSuffix="">
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries3"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        title="Russia"
                        valueMemberPath="russia"
                        dataLegendGroup="Olympic Medals"
                        highlightedValuesDataLegendGroup="Gold Medals"
                        highlightedValueMemberPath="russiaGold"
                        highlightedTitleSuffix="">
                    </IgrColumnSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _olympicMedalsTopCountriesWithTotals: OlympicMedalsTopCountriesWithTotals = null;
    public get olympicMedalsTopCountriesWithTotals(): OlympicMedalsTopCountriesWithTotals {
        if (this._olympicMedalsTopCountriesWithTotals == null)
        {
            this._olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
        }
        return this._olympicMedalsTopCountriesWithTotals;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            LegendDescriptionModule.register(context);
            NumberAbbreviatorDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataLegendDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

The following example demonstrates the usage of the data legend grouping and highlighting overlay feature within the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control using the [`highlightedValuesDataLegendGroup`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#highlightedValuesDataLegendGroup):

```typescript
export class OlympicMedalsTopCountriesWithTotalsItem {
    public constructor(init: Partial<OlympicMedalsTopCountriesWithTotalsItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public america: number;
    public americaGold: number;
    public china: number;
    public chinaGold: number;
    public russia: number;
    public russiaGold: number;
    public total: number;

}
export class OlympicMedalsTopCountriesWithTotals extends Array<OlympicMedalsTopCountriesWithTotalsItem> {
    public constructor(items: Array<OlympicMedalsTopCountriesWithTotalsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `1996`, america: 148, americaGold: 50, china: 110, chinaGold: 40, russia: 95, russiaGold: 20, total: 353 }),
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `2000`, america: 142, americaGold: 40, china: 115, chinaGold: 45, russia: 91, russiaGold: 40, total: 348 }),
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `2004`, america: 134, americaGold: 35, china: 121, chinaGold: 55, russia: 86, russiaGold: 25, total: 341 }),
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
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrColumnSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule, DataChartAnnotationDescriptionModule } from 'igniteui-react-core';
import { OlympicMedalsTopCountriesWithTotalsItem, OlympicMedalsTopCountriesWithTotals } from './OlympicMedalsTopCountriesWithTotals';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
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
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private columnSeries1: IgrColumnSeries
    private columnSeries2: IgrColumnSeries
    private columnSeries3: IgrColumnSeries
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
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    ref={this.chartRef}
                    highlightedValuesDisplayMode="Overlay">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrColumnSeries
                        name="ColumnSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        title="America"
                        valueMemberPath="america"
                        dataLegendGroup="Olympic Medals"
                        highlightedValuesDataLegendGroup="Gold Medals"
                        highlightedValueMemberPath="americaGold"
                        highlightedTitleSuffix="">
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        title="China"
                        valueMemberPath="china"
                        dataLegendGroup="Olympic Medals"
                        highlightedValuesDataLegendGroup="Gold Medals"
                        highlightedValueMemberPath="chinaGold"
                        highlightedTitleSuffix="">
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries3"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        title="Russia"
                        valueMemberPath="russia"
                        dataLegendGroup="Olympic Medals"
                        highlightedValuesDataLegendGroup="Gold Medals"
                        highlightedValueMemberPath="russiaGold"
                        highlightedTitleSuffix="">
                    </IgrColumnSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer"
                        groupRowVisible="true"
                        groupingMode="Grouped">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _olympicMedalsTopCountriesWithTotals: OlympicMedalsTopCountriesWithTotals = null;
    public get olympicMedalsTopCountriesWithTotals(): OlympicMedalsTopCountriesWithTotals {
        if (this._olympicMedalsTopCountriesWithTotals == null)
        {
            this._olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
        }
        return this._olympicMedalsTopCountriesWithTotals;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

The following example demonstrates the usage of the data highlighting overlay feature within the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control using the `HighlightedValueMemberPath`:

```typescript
export class OlympicMedalsTopCountriesWithTotalsItem {
    public constructor(init: Partial<OlympicMedalsTopCountriesWithTotalsItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public america: number;
    public americaGold: number;
    public china: number;
    public chinaGold: number;
    public russia: number;
    public russiaGold: number;
    public total: number;

}
export class OlympicMedalsTopCountriesWithTotals extends Array<OlympicMedalsTopCountriesWithTotalsItem> {
    public constructor(items: Array<OlympicMedalsTopCountriesWithTotalsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `1996`, america: 148, americaGold: 50, china: 110, chinaGold: 40, russia: 95, russiaGold: 20, total: 353 }),
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `2000`, america: 142, americaGold: 40, china: 115, chinaGold: 45, russia: 91, russiaGold: 40, total: 348 }),
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `2004`, america: 134, americaGold: 35, china: 121, chinaGold: 55, russia: 86, russiaGold: 25, total: 341 }),
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
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrColumnSeries } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule } from 'igniteui-react-core';
import { OlympicMedalsTopCountriesWithTotalsItem, OlympicMedalsTopCountriesWithTotals } from './OlympicMedalsTopCountriesWithTotals';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private highlightedValuesDisplayModeEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private columnSeries1: IgrColumnSeries

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
                    descriptionType="DataChart"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighlightedValuesDisplayMode"
                        name="HighlightedValuesDisplayModeEditor"
                        label="Highlight Display Mode: "
                        primitiveValue="Hidden">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrDataChart
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    highlightedValuesDisplayMode="Hidden"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        minimumValue="0"
                        maximumValue="400">
                    </IgrNumericYAxis>
                    <IgrColumnSeries
                        name="ColumnSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        valueMemberPath="total"
                        highlightedValueMemberPath="america">
                    </IgrColumnSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _olympicMedalsTopCountriesWithTotals: OlympicMedalsTopCountriesWithTotals = null;
    public get olympicMedalsTopCountriesWithTotals(): OlympicMedalsTopCountriesWithTotals {
        if (this._olympicMedalsTopCountriesWithTotals == null)
        {
            this._olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
        }
        return this._olympicMedalsTopCountriesWithTotals;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Using Highlight Filter in CategoryChart

The [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) highlight filter happens on the chart by setting the [`initialHighlightFilter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialHighlightFilter) property. Since the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) takes all of the properties on your underlying data item into account by default, you will need to define the [`initialGroups`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialGroups) on the chart as well so that the data can be grouped and aggregated in a way that you can have a subset of the data to filter on. You can set the [`initialGroups`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialGroups) to a value path in your underlying data item to group by a path that has duplicate values.

<!-- Unsure of this part. Need to review -->

<!-- ????? The `InitialHighlightFilter` is done using OData filter query syntax. The syntax for this is an abbreviation of the filter operator. For example, if you wanted to have an InitialHighlightFilter of "Month not equals January" it would be represented as "Month ne 'January'"-->

Similar to the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html), the [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightedValuesDisplayMode) property is also exposed on the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html). In the case that you do not want to see the overlay, you can set this property to `Hidden`.

The following example demonstrates the usage of the data highlighting overlay feature within the [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) control:

```typescript
export class SalesDataItem {
    public constructor(init: Partial<SalesDataItem>) {
        Object.assign(this, init);
    }

    public Country: string;
    public Product: string;
    public UnitsSold: number;
    public ManufacturingPrice: number;
    public SalePrice: number;
    public GrossSales: number;
    public Discounts: number;
    public Sales: number;
    public COGS: number;
    public Profit: number;
    public Date: string;
    public Month: string;
    public Year: string;

}
export class SalesData extends Array<SalesDataItem> {
    public constructor(items: Array<SalesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SalesDataItem({ Country: `UK`, Product: `Vermont`, UnitsSold: 501, ManufacturingPrice: 15, SalePrice: 23, GrossSales: 26440, Discounts: 0, Sales: 26440, COGS: 16185, Profit: 11255, Date: `1/1/20`, Month: `January`, Year: `2020` }),
                new SalesDataItem({ Country: `Japan`, Product: `Kensington`, UnitsSold: 1372, ManufacturingPrice: 3, SalePrice: 20, GrossSales: 27440, Discounts: 0, Sales: 27440, COGS: 16185, Profit: 11255, Date: `1/1/20`, Month: `January`, Year: `2020` }),
                new SalesDataItem({ Country: `India`, Product: `Kensington`, UnitsSold: 2762, ManufacturingPrice: 3, SalePrice: 20, GrossSales: 55240, Discounts: 0, Sales: 55240, COGS: 13210, Profit: 42030, Date: `1/1/20`, Month: `January`, Year: `2020` }),
                // ... 1039 more items
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
import { SalesDataItem, SalesData } from './SalesData';

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
    private highlightedValuesDisplayModeEditor: IgrPropertyEditorPropertyDescription
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
                        propertyPath="HighlightedValuesDisplayMode"
                        name="highlightedValuesDisplayModeEditor"
                        label="Highlight Display Mode: "
                        primitiveValue="Hidden">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Sales Filtered by Country
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Column"
                    dataSource={this.salesData}
                    initialGroups="Month"
                    initialHighlightFilter="Country ne 'UK'"
                    highlightedValuesDisplayMode="Hidden">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _salesData: SalesData = null;
    public get salesData(): SalesData {
        if (this._salesData == null)
        {
            this._salesData = new SalesData();
        }
        return this._salesData;
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

<!-- TODO add new section that talks about how this feature also applies to Range, Financial series and the HighlightedValueMemberPath property corresponds to:
HighlightedHighMemberPath and HighlightedLowMemberPath in Range Series
HighlightedHighMemberPath, HighlightedLowMemberPath, HighlightedOpenMemberPath, HighlightedCloseMemberPath in Financial Series-->

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Highlighting](chart-highlighting.md)
- [Chart Data Tooltip](chart-data-tooltip.md)
- [Chart Data Aggregations](chart-data-aggregations.md)

## API References

The following is a list of API members mentioned in the above sections:

| [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) Properties                    | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) Properties |
| ----------------------------------------------|---------------------------|
| [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightedDataSource)        | [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightedDataSource)  |
| [`highlightedTitleSuffix`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#highlightedTitleSuffix)        | [`highlightedTitleSuffix`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#highlightedTitleSuffix)  |
| `CategoryChart.HighlightedValueMemberPath`    | `Series.HighlightedValueMemberPath`     |
| [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightedValuesDisplayMode)  | [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#highlightedValuesDisplayMode)   |
| [`highlightedValuesFadeOpacity`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#highlightedValuesFadeOpacity)  | [`highlightedValuesFadeOpacity`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#highlightedValuesFadeOpacity)   |
| [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#highlightedValuesDisplayMode)  | [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html#highlightedValuesDisplayMode)   |
| [`initialHighlightFilter`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialHighlightFilter)        |  |
| [`initialGroups`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#initialGroups)                 |  |
