---
title: React Axis Types | Data Visualization | Infragistics
_description: Infragistics' React Axis Types
_keywords: React Axis, Options, Title, Labels, Gap, Overlap, Range, Scale, Mode, Infragistics
_license: commercial
mentionedTypes: ["DomainChart", "CategoryChart", "FinancialChart", "FinancialChartYAxisMode", "FinancialChartXAxisMode", "NumericYAxis", "CategoryXAxis"]
namespace: Infragistics.Controls.Charts
_tocName: Axis Types
_premium: true
---

# React Axis Types

The Ignite UI for React Category Chart uses only one [`IgrCategoryXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryxaxis.html) and one [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) type. Similarly, Ignite UI for React Financial Chart uses only one [`IgrTimeXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimexaxis.html) and one [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) types. However, the Ignite UI for React Data Chart provides support for multiple axis types that you can position on any side of the chart by setting [axis location](chart-axis-layouts.md#axis-locations-example) or even inside of the chart by using [axis crossing](chart-axis-layouts.md#axis-crossing-example) properties. This topic goes over each one, which axes and series are compatible with each other, and some specific properties to the unique axes.

## Cartesian Axes

The [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) with Cartesian Axes, allows you to plot data in horizontal (X-axis) and vertical (X-axis) direction with 3 types of X-Axis
([`IgrCategoryXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryxaxis.html), [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html), and [`IgrTimeXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimexaxis.html)) and 2 types of Y-Axis ([`IgrCategoryYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryyaxis.html) and [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html)).

### Category X-Axis

The [`IgrCategoryXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryxaxis.html) treats its data as a sequence of categorical data items. It can display almost any type of data including strings and numbers. If you are plotting numbers on this axis, it is important to keep in mind that this axis is a discrete axis and not continuous. This means that each categorical data item will be placed equidistant from the one before it. The items will also be plotted in the order that they appear in the axis' data source.

The [`IgrCategoryXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryxaxis.html) requires you to provide a `DataSource` and a [`label`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#label) in order to plot data with it. It is generally used with the [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) to plot the following type of series:

| Category Series  | Stacked Series | Financial Series |
|------------------|----------------|--------------------|
| - [`IgrAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrareaseries.html) <br> - [`IgrColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcolumnseries.html) <br> - [`IgrLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrlineseries.html) <br> - [`IgrPointSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpointseries.html)  <br> - [`IgrSplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsplineseries.html) <br>  - [`IgrSplineAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsplineareaseries.html) <br> - [`IgrStepLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsteplineseries.html) <br> - [`IgrStepAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstepareaseries.html) <br> - [`IgrRangeAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrrangeareaseries.html) <br> - [`IgrRangeColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrrangecolumnseries.html) <br> - [`IgrWaterfallSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrwaterfallseries.html) | - [`IgrStackedAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedareaseries.html) <br> - [`IgrStackedColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedcolumnseries.html) <br> - [`IgrStackedLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedlineseries.html) <br> - [`IgrStackedSplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedsplineseries.html) <br> - [`IgrStacked100AreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100areaseries.html) <br> - [`IgrStacked100ColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100columnseries.html) <br> - [`IgrStacked100LineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100lineseries.html) <br> - [`IgrStacked100SplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100splineseries.html) <br> <br> <br> <br> | - [`IgrFinancialPriceSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialpriceseries.html) <br> - [`IgrBollingerBandsOverlay`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbollingerbandsoverlay.html) <br> - [`IgrForceIndexIndicator`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrforceindexindicator.html) <br> - [`IgrMedianPriceIndicator`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmedianpriceindicator.html) <br> - [`IgrMassIndexIndicator`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmassindexindicator.html)  <br> - [`IgrRelativeStrengthIndexIndicator`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrrelativestrengthindexindicator.html) <br> - [`IgrStandardDeviationIndicator`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstandarddeviationindicator.html) <br> - [`IgrTypicalPriceIndicator`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtypicalpriceindicator.html) <br> <br> <br> <br> |

The following example demonstrates usage of the [`IgrCategoryXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryxaxis.html) type:

```typescript
export class ContinentsBirthRateItem {
    public constructor(init: Partial<ContinentsBirthRateItem>) {
        Object.assign(this, init);
    }

    public Year: string;
    public Asia: number;
    public Africa: number;
    public Europe: number;
    public NorthAmerica: number;
    public SouthAmerica: number;
    public Oceania: number;

}
export class ContinentsBirthRate extends Array<ContinentsBirthRateItem> {
    public constructor(items: Array<ContinentsBirthRateItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new ContinentsBirthRateItem({ Year: `1950`, Asia: 62, Africa: 13, Europe: 10, NorthAmerica: 4, SouthAmerica: 8, Oceania: 1 }),
                new ContinentsBirthRateItem({ Year: `1960`, Asia: 68, Africa: 12, Europe: 15, NorthAmerica: 4, SouthAmerica: 9, Oceania: 2 }),
                new ContinentsBirthRateItem({ Year: `1970`, Asia: 80, Africa: 17, Europe: 11, NorthAmerica: 3, SouthAmerica: 9, Oceania: 1 }),
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

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataChartStackedModule, IgrStackedFragmentSeriesModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrStackedColumnSeries, IgrStackedFragmentSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { ContinentsBirthRateItem, ContinentsBirthRate } from './ContinentsBirthRate';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataChartStackedModule,
    IgrStackedFragmentSeriesModule
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
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private stackedColumnSeries: IgrStackedColumnSeries
    private s1: IgrStackedFragmentSeries
    private s2: IgrStackedFragmentSeries
    private s3: IgrStackedFragmentSeries
    private s4: IgrStackedFragmentSeries
    private s5: IgrStackedFragmentSeries
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
                Annual Birth Rates by World Region
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
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.continentsBirthRate}
                        label="Year"
                        gap="0.75">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        minimumValue="0"
                        maximumValue="140"
                        interval="20"
                        titleLeftMargin="10"
                        labelFormat="{0} m">
                    </IgrNumericYAxis>
                    <IgrStackedColumnSeries
                        name="stackedColumnSeries"
                        dataSource={this.continentsBirthRate}
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        showDefaultTooltip="false">
                        <IgrStackedFragmentSeries
                            name="s1"
                            valueMemberPath="Asia"
                            title="Asia">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s2"
                            valueMemberPath="Africa"
                            title="Africa">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s3"
                            valueMemberPath="Europe"
                            title="Europe">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s4"
                            valueMemberPath="NorthAmerica"
                            title="North America">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s5"
                            valueMemberPath="SouthAmerica"
                            title="South America">
                        </IgrStackedFragmentSeries>
                    </IgrStackedColumnSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _continentsBirthRate: ContinentsBirthRate = null;
    public get continentsBirthRate(): ContinentsBirthRate {
        if (this._continentsBirthRate == null)
        {
            this._continentsBirthRate = new ContinentsBirthRate();
        }
        return this._continentsBirthRate;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

### Category Y-Axis

The [`IgrCategoryYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryyaxis.html) works very similarly to the [`IgrCategoryXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryxaxis.html) described above, but it is placed vertically rather than horizontally. Also, this axis requires you to provide a `DataSource` and a [`label`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igraxis.html#label) in order to plot data with it. The [`IgrCategoryYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryyaxis.html) is generally used with the [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) to plot the following type of series:

- [`IgrBarSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbarseries.html)
- [`IgrStackedBarSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedbarseries.html)
- [`IgrStacked100BarSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100barseries.html)

The following example demonstrates usage of the [`IgrCategoryYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryyaxis.html) type:

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

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartCategoryCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule, IgrDataChartVerticalCategoryModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryYAxis, IgrNumericXAxis, IgrCategoryHighlightLayer, IgrBarSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule,
    IgrDataChartVerticalCategoryModule,
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
    private yAxis: IgrCategoryYAxis
    private xAxis: IgrNumericXAxis
    private categoryHighlightLayer: IgrCategoryHighlightLayer
    private barSeries1: IgrBarSeries
    private barSeries2: IgrBarSeries
    private tooltips: IgrDataToolTipLayer

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
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    legend={this.legend}>
                    <IgrCategoryYAxis
                        name="yAxis"
                        label="franchise"
                        useEnhancedIntervalManagement="true"
                        enhancedIntervalPreferMoreCategoryLabels="true"
                        dataSource={this.highestGrossingMovies}
                        isInverted="true"
                        gap="0.5"
                        overlap="-0.1">
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        name="xAxis"
                        title="Billions of U.S. Dollars">
                    </IgrNumericXAxis>
                    <IgrCategoryHighlightLayer
                        name="CategoryHighlightLayer">
                    </IgrCategoryHighlightLayer>
                    <IgrBarSeries
                        name="BarSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="Total Revenue of Franchise"
                        valueMemberPath="totalRevenue"
                        dataSource={this.highestGrossingMovies}
                        showDefaultTooltip="true"
                        isTransitionInEnabled="true"
                        isHighlightingEnabled="true">
                    </IgrBarSeries>
                    <IgrBarSeries
                        name="BarSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="Highest Grossing Movie in Series"
                        valueMemberPath="highestGrossing"
                        dataSource={this.highestGrossingMovies}
                        showDefaultTooltip="true"
                        isTransitionInEnabled="true"
                        isHighlightingEnabled="true">
                    </IgrBarSeries>
                    <IgrDataToolTipLayer
                        name="Tooltips">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
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

### Numeric X-Axis

The [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) treats its data as continuously varying numerical data items. Labels on this axis are placed horizontally along the X-Axis. The location of the [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) labels depends on the `XMemberPath` property of the various [Scatter Series](../types/scatter-chart.md) that it supports if combined with a [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html). Alternatively, if combined with the [`IgrCategoryXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryxaxis.html), these labels will be placed corresponding to the `ValueMemberPath` of the [`IgrBarSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbarseries.html), [`IgrStackedBarSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedbarseries.html), and [`IgrStacked100BarSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100barseries.html).

The [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html) is compatible with the following type of series:

- [`IgrBarSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbarseries.html)
- [`IgrBubbleSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html)
- [`IgrHighDensityScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrhighdensityscatterseries.html)
- [`IgrScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterseries.html)
- [`IgrScatterLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterlineseries.html)
- [`IgrScatterSplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscattersplineseries.html)
- [`IgrScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterareaseries.html)
- [`IgrScatterContourSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscattercontourseries.html)
- [`IgrScatterPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolylineseries.html)
- [`IgrScatterPolygonSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolygonseries.html)
- [`IgrStackedBarSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedbarseries.html)
- [`IgrStacked100BarSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100barseries.html)

The following example demonstrates usage of the [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html):

```typescript
export class SampleDensityData {

    public static create(): any[] {
        const amount = 25000;
        let data: any[] = [];
        this.generate(data, amount / 2, 0, 0, 75000, 20000);
        this.generate(data, amount / 4, 0, 0, 100000, 25000);
        this.generate(data, amount / 8, 0, 0, 150000, 30000);
        this.generate(data, amount / 8, 0, 0, 200000, 75000);

        return data;
    }

    public static generate(data: any[], count: number,
        centerX: number, centerY: number,
        spreadX: number, spreadY: number): any[] {

        // const data: any[] = [];
        for (let i = 0; i <= count; i++)
        {
            let rangeX = Math.random() * spreadX;
            let rangeY = Math.random() * spreadY;
            const flip = 1;
            const prop = Math.random();
            if (prop < .25) {
                rangeX *= flip;
                rangeY *= flip;
            }
            else if (prop >= .25 && prop < .5) {
                rangeX *= -flip;
                rangeY *= flip;
            }
            else if (prop >= .5 && prop < .75) {
                rangeX *= flip;
                rangeY *= -flip;
            }
            else {
                rangeX *= -flip;
                rangeY *= -flip;
            }
            const dispersionX = Math.random() + 0.12;
            const dispersionY = Math.random() + 0.12;
            const x = Math.round(centerX + (rangeX * dispersionX));
            const y = Math.round(centerY + (rangeY * dispersionY));
            data.push({ "X": x, "Y": y });
        }
        return data;
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// elements of scatter series:
import { IgrHighDensityScatterSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrHighDensityScatterSeriesModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import { SampleDensityData } from './SampleDensityData';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrHighDensityScatterSeriesModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();

export default class DataChartTypeScatterDensitySeries extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: SampleDensityData.create()
        };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">

                <div className="options horizontal">
                    <div className="legend-title">
                        <span>Stars Distribution in Milky Way Galaxy</span>
                    </div>
                </div>

                <div className="container vertical">
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        dataSource={this.state.data} >
                        <IgrNumericXAxis
                            name="xAxis"
                            abbreviateLargeNumbers={true}
                            titleBottomMargin={10}
                            title="Plane of Rotation (in Light Years)"/>
                        <IgrNumericYAxis
                            name="yAxis"
                            abbreviateLargeNumbers={true}
                            titleLeftMargin={10}
                            title="Vertical Plane (in Light Years)"/>
                        <IgrHighDensityScatterSeries
                            name="series"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            title="Distribution"
                            xMemberPath="X"
                            yMemberPath="Y"
                            showDefaultTooltip="true"
                            mouseOverEnabled="true"
                            progressiveLoad="true"
                            heatMinimumColor="Black"
                            heatMaximumColor="Yellow"
                            heatMaximum={1}
                            heatMinimum={5}
                            resolution={3}/>
                    </IgrDataChart>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartTypeScatterDensitySeries/>);
```

### Numeric Y-Axis

The [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) treats its data as continuously varying numerical data items. Labels on this axis are placed vertically along the Y-Axis. The location of the [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) labels depends on the `YMemberPath` property of the various [ScatterSeries](../types/scatter-chart.md) that is supports if combined with a [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html). Alternatively, if combined with the [`IgrCategoryYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryyaxis.html), these labels will be placed corresponding to the `ValueMemberPath` of the category or stacked series mentioned in the table above. If you are using one of the financial series, they will be placed corresponding to the Open/High/Low/Close paths and the series type that you are using.

The [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html) is compatible with the following type of series:

| Category Series  | Stacked Series | Financial Series | Scatter Series |
|------------------|----------------|------------------|----------------|
| - [`IgrAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrareaseries.html) <br> - [`IgrColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcolumnseries.html) <br> - [`IgrLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrlineseries.html) <br> - [`IgrPointSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpointseries.html)  <br> - [`IgrSplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsplineseries.html) <br>  - [`IgrSplineAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsplineareaseries.html) <br> - [`IgrStepLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrsteplineseries.html) <br> - [`IgrStepAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstepareaseries.html) <br> - [`IgrRangeAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrrangeareaseries.html) <br> - [`IgrRangeColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrrangecolumnseries.html) <br> - [`IgrWaterfallSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrwaterfallseries.html) <br> | - [`IgrStackedAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedareaseries.html) <br> - [`IgrStackedColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedcolumnseries.html) <br> - [`IgrStackedLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedlineseries.html) <br> - [`IgrStackedSplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstackedsplineseries.html) <br> - [`IgrStacked100AreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100areaseries.html) <br> - [`IgrStacked100ColumnSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100columnseries.html) <br> - [`IgrStacked100LineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100lineseries.html) <br> - [`IgrStacked100SplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstacked100splineseries.html) <br> | - [`IgrFinancialPriceSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialpriceseries.html) <br> - [`IgrBollingerBandsOverlay`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbollingerbandsoverlay.html) <br> - [`IgrForceIndexIndicator`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrforceindexindicator.html) <br> - [`IgrMedianPriceIndicator`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmedianpriceindicator.html) <br> - [`IgrMassIndexIndicator`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrmassindexindicator.html)  <br> - [`IgrRelativeStrengthIndexIndicator`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrrelativestrengthindexindicator.html) <br> - [`IgrStandardDeviationIndicator`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrstandarddeviationindicator.html) <br> - [`IgrTypicalPriceIndicator`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtypicalpriceindicator.html) <br> | - [`IgrBubbleSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrbubbleseries.html) <br> - [`IgrHighDensityScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrhighdensityscatterseries.html) <br> - [`IgrScatterSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterseries.html) <br>  - [`IgrScatterLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterlineseries.html) <br> - [`IgrScatterSplineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscattersplineseries.html) <br> - [`IgrScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterareaseries.html) <br> - [`IgrScatterContourSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscattercontourseries.html) <br> - [`IgrScatterPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolylineseries.html)  <br> - [`IgrScatterPolygonSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolygonseries.html)  <br> |

The following example demonstrates usage of the [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html):

```typescript
export class HealthDataForFranceItem {
    public constructor(init: Partial<HealthDataForFranceItem>) {
        Object.assign(this, init);
    }

    public year: number;
    public healthExpense: number;
    public lifeExpectancy: number;
    public name: string;

}
export class HealthDataForFrance extends Array<HealthDataForFranceItem> {
    public constructor(items: Array<HealthDataForFranceItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new HealthDataForFranceItem({ year: 1985, healthExpense: 2025.98, lifeExpectancy: 75.92, name: `Norway` }),
                new HealthDataForFranceItem({ year: 1986, healthExpense: 2075.21, lifeExpectancy: 76.24, name: `Norway` }),
                new HealthDataForFranceItem({ year: 1987, healthExpense: 2140.51, lifeExpectancy: 76.08, name: `Norway` }),
                // ... 28 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class HealthDataForGermanyItem {
    public constructor(init: Partial<HealthDataForGermanyItem>) {
        Object.assign(this, init);
    }

    public year: number;
    public healthExpense: number;
    public lifeExpectancy: number;
    public name: string;

}
export class HealthDataForGermany extends Array<HealthDataForGermanyItem> {
    public constructor(items: Array<HealthDataForGermanyItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new HealthDataForGermanyItem({ year: 1985, healthExpense: 2579.64, lifeExpectancy: 74.05, name: `Germany` }),
                new HealthDataForGermanyItem({ year: 1986, healthExpense: 2603.94, lifeExpectancy: 74.31, name: `Germany` }),
                new HealthDataForGermanyItem({ year: 1987, healthExpense: 2668.49, lifeExpectancy: 74.56, name: `Germany` }),
                // ... 27 more items
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
import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterLineSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { HealthDataForGermanyItem, HealthDataForGermany } from './HealthDataForGermany';
import { HealthDataForFranceItem, HealthDataForFrance } from './HealthDataForFrance';

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
    private scatterLineSeries1: IgrScatterLineSeries
    private scatterLineSeries2: IgrScatterLineSeries
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
                Life Expectancy vs Health Expenditure
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
                        title="Life Expectancy (in years)"
                        minimumValue="72"
                        maximumValue="84"
                        interval="2">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Health Expenditure per Capita"
                        abbreviateLargeNumbers="true"
                        minimumValue="1000"
                        maximumValue="6000"
                        interval="1000">
                    </IgrNumericYAxis>
                    <IgrScatterLineSeries
                        name="ScatterLineSeries1"
                        title="Germany"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="lifeExpectancy"
                        yMemberPath="healthExpense"
                        dataSource={this.healthDataForGermany}
                        markerType="Circle"
                        showDefaultTooltip="true">
                    </IgrScatterLineSeries>
                    <IgrScatterLineSeries
                        name="ScatterLineSeries2"
                        title="France"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="lifeExpectancy"
                        yMemberPath="healthExpense"
                        dataSource={this.healthDataForFrance}
                        markerType="Circle"
                        showDefaultTooltip="true">
                    </IgrScatterLineSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _healthDataForGermany: HealthDataForGermany = null;
    public get healthDataForGermany(): HealthDataForGermany {
        if (this._healthDataForGermany == null)
        {
            this._healthDataForGermany = new HealthDataForGermany();
        }
        return this._healthDataForGermany;
    }

    private _healthDataForFrance: HealthDataForFrance = null;
    public get healthDataForFrance(): HealthDataForFrance {
        if (this._healthDataForFrance == null)
        {
            this._healthDataForFrance = new HealthDataForFrance();
        }
        return this._healthDataForFrance;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

### Time X Axis

The [`IgrTimeXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimexaxis.html) treats its data as a sequence of data items, sorted by date. Labels on this axis type are dates and can be formatted and arranged according to date intervals. The date range of this axis is determined by the date values in a data column that is mapped using its `DateTimeMemberPath`. This, along with a `DataSource` is required to plot data with this axis type.

The [`IgrTimeXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimexaxis.html) is the X-Axis type in the [`IgrFinancialChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrfinancialchart.html) component.

#### Breaks in Time X Axis

The [`IgrTimeXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimexaxis.html) has the option to exclude intervals of data by using [`breaks`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimexaxis.html#breaks). As a result, the labels and plotted data will not appear at the excluded interval. For example, working/non-working days, holidays, and/or weekends. An instance of [`IgrTimeAxisBreak`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisbreak.html) can be added to the `Breaks` collection of the axis and configured by using a unique [`start`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisbreak.html#start), [`end`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisbreak.html#end) and [`interval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisbreak.html#interval).

#### Formatting in Time X Axis

The [`IgrTimeXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimexaxis.html) has the [`labelFormats`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimexaxis.html#labelFormats) property, which represents a collection of [`IgrTimeAxisLabelFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxislabelformat.html) objects. Each [`IgrTimeAxisLabelFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxislabelformat.html) added to the collection is responsible for assigning a unique [`format`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxislabelformat.html#format) and [`range`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxislabelformat.html#range). This can be especially useful for drilling down data from years to milliseconds and adjusting the labels depending on the range of time shown by the chart.

The [`format`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxislabelformat.html#format) property of the [`IgrTimeAxisLabelFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxislabelformat.html) specifies what format to use for a particular visible range. The [`range`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxislabelformat.html#range) property of the [`IgrTimeAxisLabelFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxislabelformat.html) specifies the visible range at which the axis label formats will switch to a different format. For example, if you have two [`IgrTimeAxisLabelFormat`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxislabelformat.html) elements with a range set to 10 days and another set to 5 hours, then as soon as the visible range of the axis becomes less than 10 days, it will switch to 5-hour format.

#### Intervals in Time X Axis

The [`IgrTimeXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimexaxis.html) replaces the conventional [`interval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericaxisbase.html#interval) property of the category and numeric axes with an [`intervals`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimexaxis.html#intervals) collection of type [`IgrTimeAxisInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisinterval.html). Each [`IgrTimeAxisInterval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisinterval.html) added to the collection is responsible for assigning a unique [`interval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisinterval.html#interval), [`range`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisinterval.html#range) and [`intervalType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisinterval.html#intervalType). This can be especially useful for drilling down data from years to milliseconds to provide unique spacing between labels depending on the range of time shown by the chart. A description of these properties is below:

- [`interval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisinterval.html#interval): This specifies the interval to use. This is tied to the [`intervalType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisinterval.html#intervalType) property. For example, if the [`intervalType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisinterval.html#intervalType) is set to `Days`, then the numeric value specified in [`interval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisinterval.html#interval) will be in days.
- [`range`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisinterval.html#range): This specifies the visible range at which the axis interval will switch to a different interval. For example, if you have two TimeAxisInterval with a range set to 10 days and another set to 5 hours, as soon as the visible range in the axis becomes less than 10 days it will switch to the interval whose range is 5 hours.
- [`intervalType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisinterval.html#intervalType): This specifies the unit of time for the [`interval`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrtimeaxisinterval.html#interval) property.

## Polar Axes

The [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) with Polar Axes, allows you to plot data outwards (radius axis) from center of the chart and around (angle axis) of center of the chart.

### Category Angle Axis

The [`IgrCategoryAngleAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryangleaxis.html) treats its data as a sequence of category data items. The labels on this axis are placed along the edge of a circle according to their position in that sequence. This type of axis can display almost any type of data including strings and numbers.

The [`IgrCategoryAngleAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryangleaxis.html) is generally used with the [`IgrNumericRadiusAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericradiusaxis.html) to plot [Radial Series](../types/radial-chart.md).

The following example demonstrates usage of the [`IgrCategoryAngleAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryangleaxis.html) type:

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

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartRadialModule, IgrDataChartRadialCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryAngleAxis, IgrNumericRadiusAxis, IgrRadialAreaSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { FootballPlayerStatsItem, FootballPlayerStats } from './FootballPlayerStats';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartRadialModule,
    IgrDataChartRadialCoreModule,
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
    private angleAxis: IgrCategoryAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private radialAreaSeries1: IgrRadialAreaSeries
    private radialAreaSeries2: IgrRadialAreaSeries
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
                    isVerticalZoomEnabled="false">
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
                    <IgrRadialAreaSeries
                        name="RadialAreaSeries1"
                        dataSource={this.footballPlayerStats}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="ronaldo"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.5"
                        thickness="3"
                        title="Ronaldo"
                        markerType="Circle">
                    </IgrRadialAreaSeries>
                    <IgrRadialAreaSeries
                        name="RadialAreaSeries2"
                        dataSource={this.footballPlayerStats}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="messi"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.5"
                        thickness="3"
                        title="Messi"
                        markerType="Circle">
                    </IgrRadialAreaSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
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

### Proportional Category Angle Axis

The [`IgrProportionalCategoryAngleAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrproportionalcategoryangleaxis.html) treats its data as a sequence of category data items. The labels on this axis are placed along the edge of a circle according to their position in that sequence. This type of axis can display almost any type of data including strings and numbers.

The [`IgrProportionalCategoryAngleAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrproportionalcategoryangleaxis.html) is generally used with the [`IgrNumericRadiusAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericradiusaxis.html) to plot a pie chart eg. [Radial Series](../types/radial-chart.md).

The following example demonstrates usage of the [`IgrProportionalCategoryAngleAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrproportionalcategoryangleaxis.html) type:



### Numeric Angle Axis

The [`IgrNumericAngleAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericangleaxis.html) treats its data as continuously varying numerical data items. The labels on this axis area placed along a radius line starting from the center of the circular plot. The location of the labels on the [`IgrNumericAngleAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericangleaxis.html) varies according to the value in the data column mapped using the `RadiusMemberPath` property of the [Polar Series](../types/polar-chart.md) object or the `ValueMemberPath` property of the [Radial Series](../types/radial-chart.md) object.

The The [`IgrNumericAngleAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericangleaxis.html) can be used with either the [`IgrCategoryAngleAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategoryangleaxis.html) to plot [Radial Series](../types/radial-chart.md) or with the [`IgrNumericRadiusAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericradiusaxis.html) to plot [Polar Series](../types/polar-chart.md) respectively.

The following example demonstrates usage of the [`IgrNumericAngleAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericangleaxis.html) type:

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

### Numeric Radius Axis

The [`IgrNumericRadiusAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericradiusaxis.html) treats the data as continuously varying numerical data items. The labels on this axis are placed around the circular plot. The location of the labels varies according to the value in a data column mapped using the `AngleMemberPath` property of the corresponding polar series.

The [`IgrNumericRadiusAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericradiusaxis.html) can be used with the [`IgrNumericRadiusAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericradiusaxis.html) to plot [Polar Series](../types/polar-chart.md).

The following example demonstrates usage of the [`IgrNumericRadiusAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericradiusaxis.html) type:

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

## Additional Resources

You can find more information about related chart features in these topics:

- [Axis Gridlines](chart-axis-gridlines.md)
- [Axis Layouts](chart-axis-layouts.md)
- [Axis Options](chart-axis-options.md)
