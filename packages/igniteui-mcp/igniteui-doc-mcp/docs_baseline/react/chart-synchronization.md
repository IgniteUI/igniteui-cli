---
title: React Data Chart | Data Visualization Tools | Synchronization | Infragistics
_description: Synchronize between multiple Infragistics' React charts controls including zooming, panning and crosshair events. Learn about our Ignite UI for React graph synchronization capabilities!
_keywords: React charts, data chart, synchronization, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Synchronization
_premium: true
---

# React Chart Synchronization

The Ignite UI for React data chart allows for synchronization with respect to the coordination of zooming, panning, and crosshair events between multiple charts. This can help you to visualize the same areas of multiple charts, assuming your data sources are similar or the same with respect to the axes.

## React Chart Synchronization Example

This sample shows synchronization of two React data charts:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrLineSeries } from 'igniteui-react-charts';
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

export default class DataChartSynchronization extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{height: "100%"}}>
                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="50%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}>

                        <IgrCategoryXAxis name="xAxis" label="Year" />
                        <IgrNumericYAxis name="yAxis" />

                        <IgrLineSeries name="series1" title="USA"
                            valueMemberPath="USA"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                        <IgrLineSeries name="series2" title="China"
                            valueMemberPath="China"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                        <IgrLineSeries name="series3" title="Russia"
                            valueMemberPath="Russia"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                    </IgrDataChart>

                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="50%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Year" />
                        <IgrNumericYAxis name="yAxis" />

                        <IgrLineSeries name="series1" title="USA"
                            valueMemberPath="USA"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                        <IgrLineSeries name="series2" title="China"
                            valueMemberPath="China"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                        <IgrLineSeries name="series3" title="Russia"
                            valueMemberPath="Russia"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public initData() {
        this.data = [
            { Year: "1996", USA: 148, China: 110, Russia: 95 },
            { Year: "2000", USA: 142, China: 115, Russia: 91 },
            { Year: "2004", USA: 134, China: 121, Russia: 86 },
            { Year: "2008", USA: 131, China: 129, Russia: 65 },
            { Year: "2012", USA: 135, China: 115, Russia: 77 },
            { Year: "2016", USA: 146, China: 112, Russia: 88 }
        ];
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        chart.syncChannel = "ChannelA";
        chart.synchronizeHorizontally = true;
        chart.synchronizeVertically = true;

    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartSynchronization/>);
```


<div class="divider--half"></div>

## Chart Synchronization Properties

There are four options of chart synchronization, in that you can synchronize horizontally only, vertically only, both, or you can choose not to synchronize at all, which is the default.

If you want to synchronize a set of charts, you can assign them the same name to the `SyncChannel` property and then specify whether or not to synchronize the charts horizontally and/or vertically by setting the `SynchronizeHorizontally` and `SynchronizeVertically` properties to the corresponding boolean value.

Note that in order to synchronize either vertically and/or horizontally, you will need to set the [`isHorizontalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html#isHorizontalZoomEnabled) and/or [`isVerticalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html#isVerticalZoomEnabled) property to **true**, respectively. A synchronized chart that is dependent on another chart will still zoom regardless of this property setting.

## API References

The following is a list of API members mentioned in the above sections:

- [`isHorizontalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html#isHorizontalZoomEnabled)
- [`isVerticalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html#isVerticalZoomEnabled)
- `SyncChannel`
- `SynchronizeHorizontally`
- `SynchronizeVertically`
- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)
