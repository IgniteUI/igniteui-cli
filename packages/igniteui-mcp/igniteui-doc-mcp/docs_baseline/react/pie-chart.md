---
title: React Pie Charts and Graphs | Ignite UI for React
_description: The Ignite UI for React pie chart is a specialized UI control that renders a pie chart, consisting of a circular area divided into sections. Try for FREE.
_keywords: React charts, pie chart, Ignite UI for React, Infragistics, data binding, slice selection, slice explosion, animation
_license: commercial
mentionedTypes: ["XamPieChart", "XamDataChart"]
namespace: Infragistics.Controls.Charts
_tocName: Pie Chart
_premium: true
---

# React Pie Chart

The Ignite UI for React Pie Chart, or Pie Graph, is a part-to-whole chart that shows how categories (parts) of a data set add up to a total (whole) value. Categories are rendered as sections in a circular, or pie-shaped graph. Each section, or pie slice, has an arc length proportional to its underlying data value. Categories are shown in proportion to other categories based on their value percentage to the total value being analyzed, as parts of 100 or 100%.

## React Pie Chart Example

You can create the React Pie Chart in the [`IgrPieChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechart.html) by binding your data items with a string and a numeric data value. These data values will add up to a value of 100% of visualization. In this case, the example shows the overall breakdown of budget spend by department.

```typescript
export class EnergyGlobalDemandItem {
    public constructor(init: Partial<EnergyGlobalDemandItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public category: string;
    public summary: string;

}
export class EnergyGlobalDemand extends Array<EnergyGlobalDemandItem> {
    public constructor(items: Array<EnergyGlobalDemandItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyGlobalDemandItem({ value: 37, category: `Cooling`, summary: `Cooling 37%` }),
                new EnergyGlobalDemandItem({ value: 25, category: `Residential`, summary: `Residential 25%` }),
                new EnergyGlobalDemandItem({ value: 12, category: `Heating`, summary: `Heating 12%` }),
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

import { IgrItemLegendModule, IgrPieChartModule } from 'igniteui-react-charts';
import { IgrItemLegend, IgrPieChart } from 'igniteui-react-charts';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';

const mods: any[] = [
    IgrItemLegendModule,
    IgrPieChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrItemLegend
    private legendRef(r: IgrItemLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrPieChart
    private chartRef(r: IgrPieChart) {
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
                Global Electricity Demand by Energy Use
            </div>

            <div className="legend">
                <IgrItemLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrItemLegend>
            </div>

            <div className="container fill">
                <IgrPieChart
                    ref={this.chartRef}
                    legendLabelMemberPath="category"
                    labelMemberPath="summary"
                    labelsPosition="BestFit"
                    valueMemberPath="value"
                    radiusFactor="0.7"
                    dataSource={this.energyGlobalDemand}
                    legend={this.legend}>
                </IgrPieChart>
            </div>
        </div>
        );
    }

    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Pie Chart Recommendations

Pie Charts are appropriate for small data sets and are easy to read at a glance. Pie charts are just one type of part-to-whole visualization. Others include:

- Pie
- Doughnut (Ring)
- Funnel
- Stacked Area
- Stacked 100% Area (Stacked Percentage Area)
- Stacked Bar
- Stacked 100% Bar (Stacked Percentage Bar)
- Treemap
- Waterfall

The React Pie Chart includes interactive features that give the viewer tools to analyze data, like:

- Legends
- Slice Explosion
- Slice Selection
- Chart Animations

Best Practices for a Pie Chart:

- Comparing slices or segments as percentage values in proportion to a total value or whole.
- Showing how a group of categories is broken into smaller segments.
- Presenting small, non-hierarchical data sets (less than 6 to 8 segments of data).
- Ensuring data segments add up to 100%.
- Arranging the order of data from largest (highest) to smallest (least).
- Using standard presentation techniques such as starting in the 12 o'clock position and continuing clockwise.
- Ensuring the color palette is distinguishable for segments/slices of the parts.
- Considering data labels in segments vs. legends for ease of reading.
- Choosing an alternative chart to Pie such as Bar or Ring based on ease of comprehension.
- Avoiding positioning multiple pie charts next to each other for comparative analysis.

Do Not Use Pie Chart When:

- Comparing change over time —use a Bar, Line or Area chart.
- Requiring precise data comparison —use a Bar, Line or Area chart.
- You have more than 6 or 8 segments (high data volume) — consider a Bar, Line or Area chart if it works for your data story.
- It would be easier for the viewer to perceive the value difference in a Bar chart.

## React Pie Chart Legend

Legends are used to show information about each point, to know about its contribution towards the total sum. You can collapse the point using legend click.

In order to display a legend next to the pie chart an ItemLegend needs to be created and assigned to the [`IgrLegend`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrlegend.html) property. The [`legendLabelMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#legendLabelMemberPath) can then be used to specify which property on your data model it will use to display inside the legend for each pie slice.

Additionally you can use the [`legendItemTemplate`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#legendItemTemplate) and [`legendItemBadgeTemplate`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#legendItemBadgeTemplate) properties and the various font properties on ItemLegend to further customize the look of the legend items.

```typescript
export class EnergyGlobalDemandItem {
    public constructor(init: Partial<EnergyGlobalDemandItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public category: string;
    public summary: string;

}
export class EnergyGlobalDemand extends Array<EnergyGlobalDemandItem> {
    public constructor(items: Array<EnergyGlobalDemandItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyGlobalDemandItem({ value: 37, category: `Cooling`, summary: `Cooling 37%` }),
                new EnergyGlobalDemandItem({ value: 25, category: `Residential`, summary: `Residential 25%` }),
                new EnergyGlobalDemandItem({ value: 12, category: `Heating`, summary: `Heating 12%` }),
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

import { IgrItemLegendModule, IgrPieChartModule } from 'igniteui-react-charts';
import { IgrItemLegend, IgrPieChart } from 'igniteui-react-charts';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';

const mods: any[] = [
    IgrItemLegendModule,
    IgrPieChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrItemLegend
    private legendRef(r: IgrItemLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrPieChart
    private chartRef(r: IgrPieChart) {
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
                Global Electricity Demand by Energy Use
            </div>

            <div className="legend">
                <IgrItemLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrItemLegend>
            </div>

            <div className="container fill">
                <IgrPieChart
                    ref={this.chartRef}
                    valueMemberPath="value"
                    labelMemberPath="summary"
                    labelsPosition="OutsideEnd"
                    legendLabelMemberPath="category"
                    outlines="white"
                    radiusFactor="0.7"
                    labelExtent="30"
                    dataSource={this.energyGlobalDemand}
                    legend={this.legend}>
                </IgrPieChart>
            </div>
        </div>
        );
    }

    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Pie Chart Others Category

Sometimes, the underlying data for the pie chart will contain many items with small values. In this case, the Others category will permit automatic aggregation of several data values into a single slice

In the sample below, the [`othersCategoryThreshold`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#othersCategoryThreshold) is set to 2, and [`othersCategoryType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#othersCategoryType) is set to Number. Therefore, items with value less than or equal to 2 will be assigned to the "Others" category.

If you set [`othersCategoryType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#othersCategoryType) to Percent, then [`othersCategoryThreshold`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#othersCategoryThreshold) will be interpreted as a percentage rather than as a value, i.e. items whose values are less than 2% of the sum of all item values would be assigned to the Others category. You can use whichever [`othersCategoryType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#othersCategoryType) is most appropriate for your application.

```typescript
export class EnergyGlobalDemandItem {
    public constructor(init: Partial<EnergyGlobalDemandItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public category: string;
    public summary: string;

}
export class EnergyGlobalDemand extends Array<EnergyGlobalDemandItem> {
    public constructor(items: Array<EnergyGlobalDemandItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyGlobalDemandItem({ value: 37, category: `Cooling`, summary: `Cooling 37%` }),
                new EnergyGlobalDemandItem({ value: 25, category: `Residential`, summary: `Residential 25%` }),
                new EnergyGlobalDemandItem({ value: 12, category: `Heating`, summary: `Heating 12%` }),
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

import { IgrItemLegendModule, IgrPieChartModule } from 'igniteui-react-charts';
import { IgrItemLegend, IgrPieChart } from 'igniteui-react-charts';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';

const mods: any[] = [
    IgrItemLegendModule,
    IgrPieChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrItemLegend
    private legendRef(r: IgrItemLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrPieChart
    private chartRef(r: IgrPieChart) {
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
                Global Electricity Demand by Energy Use
            </div>

            <div className="legend">
                <IgrItemLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrItemLegend>
            </div>

            <div className="container fill">
                <IgrPieChart
                    ref={this.chartRef}
                    labelMemberPath="summary"
                    labelsPosition="OutsideEnd"
                    labelExtent="30"
                    valueMemberPath="value"
                    outlines="white"
                    othersCategoryThreshold="10"
                    othersCategoryType="Number"
                    othersCategoryText="Others"
                    radiusFactor="0.7"
                    legendLabelMemberPath="category"
                    dataSource={this.energyGlobalDemand}
                    legend={this.legend}>
                </IgrPieChart>
            </div>
        </div>
        );
    }

    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Pie Chart Explosion

The pie chart supports explosion of individual pie slices as well as a `SliceClick` event that allows you to modify selection states and implement custom logic

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrItemLegend } from 'igniteui-react-charts';
import { IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrPieChart } from 'igniteui-react-charts';
import { IgrPieChartModule } from 'igniteui-react-charts';
import { IgrPieChartBase } from 'igniteui-react-charts';
import { IIgrPieChartBaseProps } from 'igniteui-react-charts';
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';

IgrPieChartModule.register();
IgrItemLegendModule.register();

export default class PieChartExplosion extends React.Component<any, any> {

    public data: any[];
    public chart: IgrPieChart;
    public legend: IgrItemLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.state = {
            data: [
                { MarketShare: 37, Company: "Space Cooling", Summary:"Space Cooling 37%", },
                { MarketShare: 25, Company: "Residential Appliance", Summary:"Residential Appliance 25%",  },
                { MarketShare: 12, Company: "Heating", Summary:"Heating 12%", },
                { MarketShare: 8, Company: "Lighting", Summary:"Lighting 8%", },
                { MarketShare: 18, Company: "Other Services", Summary:"Other Services 18%", },
        ] };
    }

    public onChartRef(chart: IgrPieChart) {
        if (!chart) { return; }

        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrItemLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }
    public render(): JSX.Element {
        return (
            <div className="container sample">
                <label className="legend-title">Global Electricity Demand by Energy Use</label>
                <div className="options vertical">
                    <IgrItemLegend ref={this.onLegendRef} orientation="Horizontal" />
                </div>

                <div className="container">
                <IgrPieChart dataSource={this.state.data}
                    ref={this.onChartRef}
                    labelMemberPath="Summary"
                    valueMemberPath="MarketShare"
                    legendLabelMemberPath="Company"
                    width="100%"
                    height="100%"
                    labelsPosition="OutsideEnd"
                    labelExtent="30"
                    explodedRadius={0.2}
                    explodedSlices="1"
                    allowSliceExplosion="true"
                    radiusFactor={0.7}
                    sliceClick={this.onSliceClick}
                    startAngle ={-60}/>
            </div>
        </div>
        );
    }

    public onSliceClick = (s: IgrPieChartBase<IIgrPieChartBaseProps>, e: IgrSliceClickEventArgs) => {
        e.isExploded = !e.isExploded;
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PieChartExplosion/>);
```

<div class="divider--half"></div>

## React Pie Chart Selection

The pie chart supports slice selection by mouse click as the default behavior. You can determine the selected slices by using the [`selectedItems`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#selectedItems) property. The selected slices are then highlighted.

There is a property called [`selectionMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#selectionMode) which is how you set what mode you want the pie chart to use. The default value is `Single`. In order to disable selection, set the property to `Manual`.

The pie chart supports three different selection modes.

- Single - When the mode is set to single, only one slice can be selected at a time. When you select a new slice the previously selected slice will be deselected and the new one will become selected.
- Multiple - When the mode is set to Multiple, many slices can be selected at once. If you click on a slice, it will become selected and clicking on a different slice will also select that slice leaving the previous slice selected.
- Manual - When the mode is set to Manual, selection is disabled.

The pie chart has 4 events associated with selection:

- SelectedItemChanging
- SelectedItemChanged
- SelectedItemsChanging
- SelectedItemsChanged

The events that end in “Changing” are cancelable events which means you can stop the selection of a slice by setting the event argument property `Cancel` to true. When set to true the associated property will not update and the slice will not become selected. This is useful for scenarios where you want to keep users from being able to select certain slices based on the data inside it.

For scenarios where you click on the Others slice, the pie chart will return an object called [`IgrPieSliceOthersContext`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiesliceotherscontext.html). This object contains a list of the data items contained within the Others slice.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrItemLegend } from 'igniteui-react-charts';
import { IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrPieChart } from 'igniteui-react-charts';
import { IgrPieChartModule } from 'igniteui-react-charts';
import { IgrPieChartBase } from 'igniteui-react-charts';
import { IIgrPieChartBaseProps } from 'igniteui-react-charts';
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';

IgrPieChartModule.register();
IgrItemLegendModule.register();

export default class PieChartSelection extends React.Component<any, any> {

    public data: any[];
    public chart: IgrPieChart;
    public legend: IgrItemLegend;

    constructor(props: any) {
        super(props);

        this.state = { data: [
                { MarketShare: 37, Company: "Space Cooling", Summary:"Space Cooling 37%", },
                { MarketShare: 25, Company: "Residential Appliance", Summary:"Residential Appliance 25%",  },
                { MarketShare: 12, Company: "Heating", Summary:"Heating 12%", },
                { MarketShare: 8, Company: "Lighting", Summary:"Lighting 8%", },
                { MarketShare: 18, Company: "Other Services", Summary:"Other Services 18%", },
        ] };

        this.onPieRef = this.onPieRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <label className="legend-title">Global Electricity Demand by Energy Use</label>
                <div className="options vertical">
                    <IgrItemLegend ref={this.onLegendRef}  orientation="Horizontal" />
                </div>

                <div className="container">
                <IgrPieChart dataSource={this.state.data}
                            ref={this.onPieRef}
                            labelMemberPath="Summary"
                            valueMemberPath="MarketShare"
                            legendLabelMemberPath="Company"
                            width="100%"
                            height="calc(100% - 45px)"
                            selectionMode="multiple"
                            selectedSliceStroke="white"
                            selectedSliceFill="rgb(143,143,143)"
                            selectedSliceOpacity = "1.0"
                            selectedSliceStrokeThickness= "2"
                            labelsPosition="OutsideEnd"
                            labelExtent="30"
                            radiusFactor={0.7}
                            selectedItem="1"
                            startAngle={-60}
                            />
                </div>
            </div>
        );
    }

    public onPieRef(chart: IgrPieChart) {
        if (!chart) { return; }

        this.chart  = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrItemLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PieChartSelection/>);
```

<div class="divider--half"></div>

## React Pie Chart Animation

You can animate the pie chart smoothly by setting the `radiusFactor` property, which will scale the chart's radius. Also set the `startAngle` property to angle the chart such that it keep increasing the chart angle while rotating.

In the code below, the radiusFactor is increasing the chart by 0.25% of the size, and startAngle is rotating the chart by 1 degree. When radiusFactor and startAngle reached to its maximum limit the animation is stopped by reset the animation flag and clear the interval.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrPieChart } from 'igniteui-react-charts';
import { IgrPieChartModule } from 'igniteui-react-charts';

IgrPieChartModule.register();

export default class PieChartAnimation extends React.Component<any, any> {

    public data: any[];
    public chart: IgrPieChart;
    public isAnimating: boolean = false;
    public interval: number = -1;

    constructor(props: any) {
        super(props);

        this.state = {
            data: [
                { MarketShare: 37, Category: "Cooling"     , Summary: "Cooling 37%" },
                { MarketShare: 25, Category: "Residential" , Summary: "Cooling 25%" },
                { MarketShare: 12, Category: "Heating"     , Summary: "Cooling 12%" },
                { MarketShare: 11, Category: "Lighting"    , Summary: "Cooling 11%" },
                { MarketShare: 15, Category: "Other"       , Summary: "Cooling 15%" }
            ]
        };

        this.onPieRef = this.onPieRef.bind(this);
        this.onAnimationToggle = this.onAnimationToggle.bind(this);
        this.onAnimationClear = this.onAnimationClear.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container vertical">
                <div className="options horizontal">
                    <button onClick={this.onAnimationToggle}>Animate Chart</button>
                </div>

                <div className="container vertical">
                    <IgrPieChart
                        width="100%"
                        height="100%"
                        ref={this.onPieRef}
                        dataSource={this.state.data}
                        labelMemberPath="Summary"
                        legendLabelMemberPath="Category"
                        valueMemberPath="MarketShare"
                        labelsPosition="InsideEnd"
                        startAngle={0}
                        labelExtent={0.7}
                        radiusFactor={0.1} />
                </div>
            </div>
        );
    }

    public onPieRef(chart: IgrPieChart) {
        if (!chart) { return; }

        this.chart = chart;
        this.onAnimationClear();
        this.onAnimationToggle();
    }

    public componentWillUnmount() {
        this.onAnimationClear();
    }

    public onAnimationToggle = () => {
        if (!this.isAnimating) {
            this.chart.startAngle = 0;
            this.chart.radiusFactor = 0.1;
            this.isAnimating = true;
            this.interval = window.setInterval(() => this.tick(), 15);
        } else {
            this.isAnimating = false;
            this.onAnimationClear();
        }
    }

    public onAnimationClear(): void {
        if (this.interval >= 0) {
            window.clearInterval(this.interval);
            this.interval = -1;
        }
    }

    public tick(): void {
        if (this.isAnimating) {
            if (this.chart.radiusFactor < 1.0)
                this.chart.radiusFactor += 0.0025;

            if (this.chart.startAngle < 360)
                this.chart.startAngle++;

            if (this.chart.radiusFactor >= 1.0 &&
                this.chart.startAngle >= 360) {
                this.isAnimating = false;
                this.onAnimationClear();
            }
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PieChartAnimation/>);
```

<div class="divider--half"></div>

## React Pie Chart Styling

Once our pie chart is created, we may want to make some further styling customizations such as a change of the colors for the slices of the chart, as demonstrated below:

```typescript
export class EnergyGlobalDemandItem {
    public constructor(init: Partial<EnergyGlobalDemandItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public category: string;
    public summary: string;

}
export class EnergyGlobalDemand extends Array<EnergyGlobalDemandItem> {
    public constructor(items: Array<EnergyGlobalDemandItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyGlobalDemandItem({ value: 37, category: `Cooling`, summary: `Cooling 37%` }),
                new EnergyGlobalDemandItem({ value: 25, category: `Residential`, summary: `Residential 25%` }),
                new EnergyGlobalDemandItem({ value: 12, category: `Heating`, summary: `Heating 12%` }),
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

import { IgrPieChartModule, IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrItemLegend, IgrPieChart } from 'igniteui-react-charts';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';

const mods: any[] = [
    IgrPieChartModule,
    IgrItemLegendModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrItemLegend
    private legendRef(r: IgrItemLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrPieChart
    private chartRef(r: IgrPieChart) {
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
                Global Electricity Demand by Energy Use
            </div>

            <div className="legend">
                <IgrItemLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrItemLegend>
            </div>

            <div className="container fill">
                <IgrPieChart
                    ref={this.chartRef}
                    legendLabelMemberPath="category"
                    valueMemberPath="value"
                    labelMemberPath="summary"
                    labelsPosition="OutsideEnd"
                    labelExtent="30"
                    brushes="rgba(247, 210, 98, 1) rgba(168, 168, 183, 1) rgba(224, 81, 169, 1) rgba(248, 161, 95, 1) rgba(115, 86, 86, 1)"
                    outlines="white"
                    radiusFactor="0.7"
                    startAngle="0"
                    dataSource={this.energyGlobalDemand}
                    legend={this.legend}>
                </IgrPieChart>
            </div>
        </div>
        );
    }

    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

<div class="divider--half"></div>

## React Radial Pie Chart

The Radial Pie Chart belongs to a group of Radial Charts and uses belongs to a group of radial charts and uses pie slices that extend from the center of chart towards locations of data points. This chart type takes concepts of categorizing multiple series of data points and wraps them around a circular axis rather than stretching data points along a horizontal line.

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
import { IgrLegend, IgrDataChart, IgrCategoryAngleAxis, IgrNumericRadiusAxis, IgrRadialPieSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
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
    private radialPieSeries1: IgrRadialPieSeries
    private radialPieSeries2: IgrRadialPieSeries
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
                    <IgrRadialPieSeries
                        name="RadialPieSeries1"
                        dataSource={this.footballPlayerStats}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="ronaldo"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.8"
                        thickness="3"
                        title="Ronaldo">
                    </IgrRadialPieSeries>
                    <IgrRadialPieSeries
                        name="RadialPieSeries2"
                        dataSource={this.footballPlayerStats}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="messi"
                        showDefaultTooltip="false"
                        areaFillOpacity="0.8"
                        thickness="3"
                        title="Messi">
                    </IgrRadialPieSeries>
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

<div class="divider--half"></div>

## Additional Resources

- [Donut Chart](donut-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`legendItemBadgeTemplate`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#legendItemBadgeTemplate)
- [`legendItemTemplate`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#legendItemTemplate)
- [`legendLabelMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#legendLabelMemberPath)
- [`othersCategoryThreshold`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#othersCategoryThreshold)
- [`othersCategoryType`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#othersCategoryType)
- [`selectionMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechartbase.html#selectionMode)

|Chart Type       | Control Name   | API Members |
|-----------------|----------------|------------ |
|Pie Chart      | [`IgrPieChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrpiechart.html)     | `PieChart` |
|Radial Pie Chart | [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) | [`IgrRadialPieSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrradialpieseries.html) |
