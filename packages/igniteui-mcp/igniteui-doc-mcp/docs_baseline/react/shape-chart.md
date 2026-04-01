---
title: React Shape Chart | Data Visualization | Infragistics
_description: Infragistics' React Shape Chart
_keywords: React Charts, Shape Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "ScatterPolygonSeries", "ScatterPolylineSeries", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Charts
_tocName: Shape Chart
_premium: true
---

# React Shape Charts

The Ignite UI for React Shape Charts are a group of charts that take array of shapes (array or arrays of X/Y points) and render them as collection of polygons or polylines in Cartesian (x, y) coordinate system. They are often used highlight regions in scientific data or they can be used to plot diagrams, blueprints, or even floor plan of buildings.

## React Scatter Polygon Chart

The React Scatter Polygon Chart renders an array or array of arrays of polygons in the Cartesian (x, y) coordinate system using [`IgrScatterPolygonSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolygonseries.html) in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control. This chart can be used to filled shapes of plot diagrams, blueprints, or even the floor plan of buildings.

You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrScatterPolygonSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolygonseries.html), as shown in the example below:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrScatterPolygonSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrStyleShapeEventArgs } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartShapeCoreModule.register();
IgrDataChartShapeModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeScatterPolygonSeries extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            shapes: undefined,
            seats: undefined
        }

        fetch('https://static.infragistics.com/xplatform/json/airplane-shape.json')
            .then((response) => response.json())
            .then((data) => this.setState({ shapes: data }));

        fetch('https://static.infragistics.com/xplatform/json/airplane-seats.json')
            .then((response) => response.json())
            .then((data) => this.setState({ seats: data }));
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">

                <div className="options horizontal">
                    <div className="legend-title">
                        <span>Airplane Seating Chart (Polygons)</span>
                    </div>
                </div>

                <div className="custom-legend">
                    <div><span style={{ background: "DodgerBlue" }}></span><label>First Class</label></div>
                    <div><span style={{ background: "LimeGreen" }}></span><label>Business Class</label></div>
                    <div><span style={{ background: "Orange" }}></span><label>Premium Class</label></div>
                    <div><span style={{ background: "Red" }}></span><label>Economy Class</label></div>
                    <div><span style={{ background: "Gray" }}></span><label>Sold Seat</label> </div>
                    <div><span style={{ background: "LightGray" }}></span><label>Airplane</label> </div>
                </div>

                <div className="container"  >
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}>
                        <IgrNumericXAxis
                            name="xAxis"
                            minimumValue={-1000}
                            maximumValue={1000}
                            interval={200} />
                        <IgrNumericYAxis
                            name="yAxis"
                            minimumValue={-600}
                            maximumValue={600}
                            interval={200} />
                        <IgrScatterPolygonSeries
                            name="airplaneShapeSeries"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            shapeMemberPath="points"
                            dataSource={this.state.shapes}
                            showDefaultTooltip={false}
                            thickness={0.5}
                            brush="LightGray"
                            outline="Black"/>
                        <IgrScatterPolygonSeries
                            name="airplaneSeatSeries"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            title="Airplane Seats"
                            shapeMemberPath="points"
                            dataSource={this.state.seats}
                            styleShape={this.onStylingShape}
                            tooltipTemplate={this.createTooltip}/>
                   </IgrDataChart>
                </div>
            </div>
        );
    }

    private onStylingShape(sender: any, args: IgrStyleShapeEventArgs) {
        args.shapeOpacity = 1.0;
        args.shapeStrokeThickness = 0.5;
        args.shapeStroke = 'Black';
        args.shapeFill = 'White';

        const itemRecord = args.item as any;
        if (itemRecord.class === 'First') {
            args.shapeFill = 'DodgerBlue';
        }
        if (itemRecord.class === 'Business') {
            args.shapeFill = 'LimeGreen';
        }
        if (itemRecord.class === 'Premium') {
            args.shapeFill = 'Orange';
        }
        if (itemRecord.class === 'Economy') {
            args.shapeFill = 'Red';
        }
        if (itemRecord.status === 'Sold') {
            args.shapeFill = 'Gray';
        }
    }

    private createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        return (
            <div className='ui-tooltip-content'>
                <div>Class: {dataItem.class}</div>
                <div>Seat: {dataItem.seat}</div>
                <div>Price: ${dataItem.price}</div>
                <div>Status: {dataItem.status}</div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartTypeScatterPolygonSeries/>);
```


<div class="divider--half"></div>

## React Scatter Polyline Chart

The React Scatter Polyline Chart renders an array or array of arrays of polylines in the Cartesian (x, y) coordinate system using [`IgrScatterPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolylineseries.html) in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control. This chart can be used to outlines of plot diagrams, blueprints, or even the floor plan of buildings. Also, it can visualizes complex relationships between a large amount of elements.

You can create this type of chart in the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) control by binding your data to a [`IgrScatterPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolylineseries.html), as shown in the example below:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrScatterPolylineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrStyleShapeEventArgs } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartShapeCoreModule.register();
IgrDataChartShapeModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeScatterPolylineSeries extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            shapes: undefined,
            seats: undefined
        }

        fetch('https://static.infragistics.com/xplatform/json/airplane-shape.json')
            .then((response) => response.json())
            .then((data) => this.setState({ shapes: data }));

        fetch('https://static.infragistics.com/xplatform/json/airplane-seats.json')
            .then((response) => response.json())
            .then((data) => this.setState({ seats: data }));
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">

                <div className="options horizontal">
                    <div className="legend-title">
                        <span>Airplane Seating Chart (Polylines)</span>
                    </div>
                </div>

                <div className="custom-legend">
                    <div><span style={{ background: "DodgerBlue" }}></span><label>First Class</label></div>
                    <div><span style={{ background: "LimeGreen" }}></span><label>Business Class</label></div>
                    <div><span style={{ background: "Orange" }}></span><label>Premium Class</label></div>
                    <div><span style={{ background: "Red" }}></span><label>Economy Class</label></div>
                    <div><span style={{ background: "Gray" }}></span><label>Sold Seat</label> </div>
                    <div><span style={{ background: "LightGray" }}></span><label>Airplane</label> </div>
                </div>

                <div className="container" >
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}>
                        <IgrNumericXAxis
                            name="xAxis"
                            minimumValue={-1000}
                            maximumValue={1000}
                            interval={200} />
                        <IgrNumericYAxis
                            name="yAxis"
                            minimumValue={-600}
                            maximumValue={600}
                            interval={200} />
                        <IgrScatterPolylineSeries
                            name="airplaneShapeSeries"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            shapeMemberPath="points"
                            dataSource={this.state.shapes}
                            showDefaultTooltip={false}
                            thickness={0.5}
                            brush="LightGray"
                            outline="Black"/>
                        <IgrScatterPolylineSeries
                            name="airplaneSeatSeries"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            title="Airplane Seats"
                            shapeMemberPath="points"
                            dataSource={this.state.seats}
                            styleShape={this.onStylingShape}
                            tooltipTemplate={this.createTooltip}/>
                   </IgrDataChart>
                </div>
            </div>
        );
    }

    public onStylingShape(sender: any, args: IgrStyleShapeEventArgs) {
        args.shapeOpacity = 1.0;
        args.shapeStrokeThickness = 1.0;
        args.shapeStroke = 'Black';

        const itemRecord = args.item as any;
        if (itemRecord.class === 'First') {
            args.shapeStroke = 'DodgerBlue';
        }
        if (itemRecord.class === 'Business') {
            args.shapeStroke = 'LimeGreen';
        }
        if (itemRecord.class === 'Premium') {
            args.shapeStroke = 'Orange';
        }
        if (itemRecord.class === 'Economy') {
            args.shapeStroke = 'Red';
        }
        if (itemRecord.status === 'Sold') {
            args.shapeStroke = 'Gray';
        }
    }

    private createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        return (
            <div className='ui-tooltip-content'>
                <div>Class: {dataItem.class}</div>
                <div>Seat: {dataItem.seat}</div>
                <div>Price: ${dataItem.price}</div>
                <div>Status: {dataItem.status}</div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartTypeScatterPolylineSeries/>);
```


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Line Chart](line-chart.md)
- [Scatter Chart](scatter-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)
- [`IgrScatterPolygonSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolygonseries.html)
- [`IgrScatterPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrscatterpolylineseries.html)
- `ItemsSource`
- [`shapeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrshapeseriesbase.html#shapeMemberPath)
- [`IgrNumericXAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericxaxis.html)
- [`IgrNumericYAxis`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrnumericyaxis.html)
- `YAxisName`
- `XAxisName`
