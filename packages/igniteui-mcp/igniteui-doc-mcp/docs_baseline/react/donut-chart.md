---
title: React Donut Chart | Data Visualization | Infragistics
_description: Infragistics' React Donut Chart
_keywords: React Charts, Donut Chart, Donut Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDoughnutChart", "DoughnutChart"]
namespace: Infragistics.Controls.Charts
_tocName: Donut Chart
_premium: true
---

# React Donut Chart

The Ignite UI for React Donut Chart is similar to the [Pie Chart](pie-chart.md), proportionally illustrating the occurrences of a variable. The donut chart can display multiple variables in concentric rings, and provides built-in support for visualizing hierarchical data. The rings are capable of being bound to a different data item, or they can share a common data source.

## React Donut Chart Example

You can create Donut Chart using the [`IgrDoughnutChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdoughnutchart.html) control by binding your data as shown in the example below.

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

import { IgrItemLegendModule, IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrItemLegend, IgrDoughnutChart, IgrRingSeries } from 'igniteui-react-charts';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';

const mods: any[] = [
    IgrItemLegendModule,
    IgrDoughnutChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrItemLegend
    private legendRef(r: IgrItemLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDoughnutChart
    private chartRef(r: IgrDoughnutChart) {
        this.chart = r;
        this.setState({});
    }
    private series: IgrRingSeries

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
                <IgrDoughnutChart
                    ref={this.chartRef}
                    allowSliceExplosion="true">
                    <IgrRingSeries
                        name="series"
                        labelMemberPath="summary"
                        labelsPosition="OutsideEnd"
                        labelExtent="30"
                        valueMemberPath="value"
                        legendLabelMemberPath="category"
                        outlines="white"
                        radiusFactor="0.6"
                        startAngle="30"
                        dataSource={this.energyGlobalDemand}
                        legend={this.legend}>
                    </IgrRingSeries>
                </IgrDoughnutChart>
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

## React Donut Chart Recommendations

### Are React Donut Charts right for your project?

Donut Charts are appropriate for small data sets and are easy to read at a glance. Donut charts are just one type of part-to-whole visualization. Others include:

- [Pie](pie-chart.md)

<!-- - Funnel  -->

- [Stacked Area](area-chart.md)
- [Stacked 100% Area (Stacked Percentage Area)](area-chart.md)
- [Stacked Bar](bar-chart.md)
- [Stacked 100% Bar (Stacked Percentage Bar)](bar-chart.md)
- [Treemap](treemap-chart.md)
- [Waterfall](column-chart.md)

The React Donut Chart includes interactive features that give the viewer tools to analyze data, like:

- Legends
- Slice Explosion
- Slice Selection
- Chart Animations

### Best Practices for Donut Charts

- Using multiple data sets to display your data in a ring display.
- Placing the information such as values or labels, within the hole of the donut for quick explanation of data.
- Comparing slices or segments as percentage values in proportion to a total value or whole.
- Showing how a group of categories is broken into smaller segments.
- Ensuring data segments add up to 100%.
- Ensuring the color palette is distinguishable for segments/slices of the parts.

### When not to use a Donut Chart

- Comparing change over time —use a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart.
- Requiring precise data comparison —use a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart.
- You have more than 6 or 8 segments (high data volume) — consider a [Bar](bar-chart.md), [Line](line-chart.md) or [Area](area-chart.md) chart if it works for your data story.
- It would be easier for the viewer to perceive the value difference in a [Bar](bar-chart.md) chart.
- You have negative data, as this can not be represented in a donut chart.

## React Donut Chart - Slice Selection

The React Donut Chart has the ability to select slices on click. Optionally, you may apply a single custom visual style to the selected slices. The `SliceClick` event is raised when the user clicks on a slice. Enabling slice selection allows you to modify the slice's selection upon click. The following sample demonstrates how to enable slice selection and set the selected slice color to gray.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrItemLegend } from 'igniteui-react-charts';
import { IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();
IgrItemLegendModule.register();

export default class DoughnutChartSelection extends React.Component<any, any> {

    public data: any[];
    public chart: IgrDoughnutChart;
    public legend: IgrItemLegend;

    constructor(props: any) {
        super(props);

        this.data = [
            { MarketShare: 37, Category: "Cooling", Summary: "Cooling 37%", },
            { MarketShare: 25, Category: "Residential", Summary: "Residential 25%",  },
            { MarketShare: 12, Category: "Heating", Summary: "Heating 12%", },
            { MarketShare: 8, Category: "Lighting", Summary: "Lighting 8%", },
            { MarketShare: 18, Category: "Other", Summary: "Other 18%", }
        ];
        this.state = {
            data: this.data,
            selectedSliceLabel: this.data[0].Category,
            selectedSliceValue: this.data[0].MarketShare + "%"
        };

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options vertical">
                    <span className="legend-title">Global Electricity Demand by Energy Use</span>
                    <div className="legend">
                        <IgrItemLegend ref={this.onLegendRef} orientation="Horizontal"/>
                    </div>
                </div>

                <div className="container relative">
                    <div className="container-overlay">
                        <IgrDoughnutChart
                            ref={this.onChartRef}
                            width="100%"
                            height="100%"
                            allowSliceSelection="true"
                            innerExtent={0.6}
                            sliceClick={this.onSliceClick}>
                                <IgrRingSeries name="ring1"
                                    dataSource={this.state.data}
                                    labelMemberPath="Summary"
                                    labelsPosition="OutsideEnd"
                                    labelExtent={30}
                                    valueMemberPath="MarketShare"
                                    legendLabelMemberPath="Category"
                                    radiusFactor={0.7}
                                    startAngle={30}
                                    />
                        </IgrDoughnutChart>

                        <div className="overlay-center" style={{ lineHeight: 1.1 }}>
                            <label className="options-label" style={{ fontSize: "1.2rem" }}>{this.state.selectedSliceLabel}</label>
                            <label className="options-label" style={{ fontSize: "2.2rem" }}>{this.state.selectedSliceValue}</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDoughnutChart) {
        if (!chart) { return; }

        this.chart  = chart;
        if (this.legend) {
            this.chart.actualSeries[0].legend = this.legend;
        }

        if (this.chart.actualSeries &&
            this.chart.actualSeries.length > 0) {
            let series = this.chart.actualSeries[0] as IgrRingSeries;
            series.selectedSlices.add(0);
        }
    }

    public onLegendRef(legend: IgrItemLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.actualSeries[0].legend = this.legend;
        }
    }

    public onSliceClick = (s: IgrDoughnutChart, e: IgrSliceClickEventArgs) => {
        if (e.isSelected) {
            this.setState({
                selectedSliceLabel: this.data[e.index].Category,
                selectedSliceValue: this.data[e.index].MarketShare + "%"
            });
        } else {
            this.setState({
                selectedSliceLabel: "No Selection",
                selectedSliceValue: "0%"
            });
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DoughnutChartSelection/>);
```


<div class="divider--half"></div>

## React Donut Chart - Multiple Rings

It is possible to have a multiple ring display in the React Donut Chart, with each of the rings capable of being bound to a different data item, or they can share a common data source. This can be helpful if you need to display your data as tiers that have an underlying common category, such as the season to month data display below:

```typescript
export class CalendarMonthsItem {
    public constructor(init: Partial<CalendarMonthsItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class CalendarMonths extends Array<CalendarMonthsItem> {
    public constructor(items: Array<CalendarMonthsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CalendarMonthsItem({ value: 1, label: `December` }),
                new CalendarMonthsItem({ value: 1, label: `January` }),
                new CalendarMonthsItem({ value: 1, label: `February` }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```typescript
export class CalendarSeasonsItem {
    public constructor(init: Partial<CalendarSeasonsItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class CalendarSeasons extends Array<CalendarSeasonsItem> {
    public constructor(items: Array<CalendarSeasonsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CalendarSeasonsItem({ value: 4, label: `Winter` }),
                new CalendarSeasonsItem({ value: 4, label: `Spring` }),
                new CalendarSeasonsItem({ value: 4, label: `Summer` }),
                // ... 1 more items
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

import { IgrLegendModule, IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart, IgrRingSeries } from 'igniteui-react-charts';
import { CalendarSeasonsItem, CalendarSeasons } from './CalendarSeasons';
import { CalendarMonthsItem, CalendarMonths } from './CalendarMonths';

const mods: any[] = [
    IgrLegendModule,
    IgrDoughnutChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDoughnutChart
    private chartRef(r: IgrDoughnutChart) {
        this.chart = r;
        this.setState({});
    }
    private series1: IgrRingSeries
    private series2: IgrRingSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Hierarchical Chart
            </div>

            <div className="container fill">
                <IgrDoughnutChart
                    ref={this.chartRef}
                    allowSliceExplosion="false"
                    allowSliceSelection="false">
                    <IgrRingSeries
                        name="series1"
                        labelMemberPath="label"
                        valueMemberPath="value"
                        labelsPosition="Center"
                        radiusFactor="0.9"
                        outlines="white"
                        brushes="rgba(60, 189, 201, 1) rgba(159, 179, 40, 1) rgba(249, 98, 50, 1) rgba(138, 88, 214, 1)"
                        dataSource={this.calendarSeasons}>
                    </IgrRingSeries>
                    <IgrRingSeries
                        name="series2"
                        labelMemberPath="label"
                        valueMemberPath="value"
                        labelsPosition="Center"
                        radiusFactor="0.9"
                        outlines="white"
                        brushes="rgba(60, 189, 201, 1) rgba(60, 189, 201, 1) rgba(60, 189, 201, 1) rgba(159, 179, 40, 1) rgba(159, 179, 40, 1) rgba(159, 179, 40, 1) rgba(249, 98, 50, 1) rgba(249, 98, 50, 1) rgba(249, 98, 50, 1) rgba(138, 88, 214, 1) rgba(138, 88, 214, 1) rgba(138, 88, 214, 1)"
                        dataSource={this.calendarMonths}>
                    </IgrRingSeries>
                </IgrDoughnutChart>
            </div>
        </div>
        );
    }

    private _calendarSeasons: CalendarSeasons = null;
    public get calendarSeasons(): CalendarSeasons {
        if (this._calendarSeasons == null)
        {
            this._calendarSeasons = new CalendarSeasons();
        }
        return this._calendarSeasons;
    }

    private _calendarMonths: CalendarMonths = null;
    public get calendarMonths(): CalendarMonths {
        if (this._calendarMonths == null)
        {
            this._calendarMonths = new CalendarMonths();
        }
        return this._calendarMonths;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Pie Chart](pie-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgrDoughnutChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdoughnutchart.html)
- [`allowSliceExplosion`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdoughnutchart.html#allowSliceExplosion)
- [`allowSliceSelection`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdoughnutchart.html#allowSliceSelection)
- [`innerExtent`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdoughnutchart.html#innerExtent)
- `SliceClick`
