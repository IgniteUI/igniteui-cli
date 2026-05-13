---
title: React Map | Data Visualization Tools | Shape Polyline Series | Infragistics
_description: Use Infragistics React map's shape polyline series to render roads or connections between geographic locations such as cities or airports. Learn more about Ignite UI for React map's series!
_keywords: React map, Ignite UI for React, shape polyline series, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap", "ShapefileConverter", "Series", "GeographicShapeSeriesBase"]
_tocName: Geographic Polyline Map
_premium: true
---

# React Geographic Polyline Map

In React map component, you can use the [`IgrGeographicPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicpolylineseries.html) to display geo-spatial data using polylines in a geographic context. This type of geographic series is often used to render roads or connections between geographic locations such as cities or airports.

## React Geographic Polyline Map Example

```css
.LegendOverlay {
    border-radius: 3px;
    background: rgba(221, 221, 221, 0.671);
    position: absolute;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-left: 2px;
    margin-top: 2px;
    margin-right: 2px;
    margin-bottom: 2px;
    pointer-events: none;
    font-family: Lato, Helvetica, sans-serif;
    font-size: 10px;
    color: #2c2c2c;
}

.LegendItem {
    /* height: 12px; */
    /* width: 10px; */
    /* background: rgb(5, 91, 219); */
    display: block;
    margin-left: 2px;
    margin-right: 2px;
    margin-top: 0px;
    /* border-radius: 3px; */
    text-decoration: none;
}

.LegendItemMap {
    height: 12px;
    width: 12px;
    background: rgb(35, 36, 36);
    background: rgb(5, 91, 219);
    display: inline-block;
    /* margin-left: 2px; */
    /* margin-top: 2px; */
    margin-top: 1px;
    border-radius: 3px;
}

.LegendItemLabel {
    /* background: rgb(97, 241, 186); */
    /* width: 115px; */
    display: inline-block;
    /* vertical-align: text-top; */
    margin-left: 5px;
    margin-right: 5px;
    font-size: 10px;
}

.SourceLabel {
    display: block;
    margin-left: 4px;
    margin-right: 4px;
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 10px;
    font-family: Lato, Helvetica, sans-serif;
    color: #2c2c2c;
    background: #f0f1f100;
}

.SourceStyle {
    display: block;
    margin-left: 2px;
    margin-right: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 10px;
    font-family: Lato, Helvetica, sans-serif;
    color: #2c2c2c;
    background: #f0f1f100;
    pointer-events: auto;
}

.SourceStyle a {
    color: #1362f5 !important;
    background: #f0f1f100 !important;
    pointer-events: auto;
}

.SourceStyle a:hover {
    /* color: #134ff5; */
    color: #2c2c2c !important;
    background: #f0f1f100 !important;
    pointer-events: auto;
}
```
```tsx
import React from 'react';
import "./LegendOverlay.css";

export class LegendOverlay extends React.Component<any, any> {

    public render(): JSX.Element {

        let bg: string = this.props.background;
        if (bg === undefined) { bg = "rgba(221, 221, 221, 0.65)"; }

        let style = { background: bg, bottom: 3, left: 3 } as React.CSSProperties;

        const dock: string = this.props.dock;
        if (dock === "TopRight") {
            style = { background: bg, top: 3, right: 3 } as React.CSSProperties;
        }
        else if (dock === "TopLeft") {
            style = { background: bg, top: 3, left: 3 } as React.CSSProperties;
        }
        else if (dock === "BottomRight") {
            style = { background: bg, bottom: 3, right: 3 } as React.CSSProperties;
        }
        else  { // if (dock === "BottomLeft")
            style = { background: bg, bottom: 3, left: 3 } as React.CSSProperties;
        }

        // let title: JSX.Element;

        const hasLink = this.props.href !== undefined || this.props.text !== undefined;
        return hasLink ?
            <div className="LegendOverlay" style={style}>
                <LegendLink text={this.props.text} href={this.props.href}  />
                <div   >
                    {this.props.children}
                </div>
            </div>
            :
            <div className="LegendOverlay" style={style}>
                <div   >
                    {this.props.children}
                </div>
            </div>

        // return (
            // <div className="LegendOverlay" style={style}>
            //     {this.props.children}
            // </div>
        // );
    }
}

export class LegendItem extends React.Component<any, any> {

    public render(): JSX.Element {
        const bg = this.props.background;
        const bgStyle = { background: bg } as React.CSSProperties;

        return (
            <div  className="LegendItem">
                <div   className="LegendItemMap" style={bgStyle}/>
                <label className="LegendItemLabel">{this.props.text}</label>
            </div>
        );
    }
}

export class LegendLink extends React.Component<any, any> {

    public render(): JSX.Element {
        const hasLink = this.props.href !== undefined;

        return hasLink ?
        <div className="SourceStyle">
            <a target="_blank" href={this.props.href} rel="noopener noreferrer">
            {this.props.text}</a>
        </div> :
        // <div >
            <label className="SourceLabel">{this.props.text}</label>
        // </div>
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LegendOverlay, LegendItem } from "./LegendOverlay"
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapTypeScatterPolylineSeries extends React.Component {

    public geoMap: IgrGeographicMap;
    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <div className="container" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        width="100%"
                        height="100%"
                        zoomable="true" />
                </div>
                <LegendOverlay dock="BottomLeft">
                    <LegendItem background="rgb(219, 84, 5)"   text="Canadian Roads"/>
                    <LegendItem background="rgb(32, 146, 252)" text="American Roads"/>
                    <LegendItem background="rgb(14, 194, 14)"  text="Mexican Roads"/>
                </LegendOverlay>
                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.updateZoomWindow({ left: 0.195, top: 0.325, width: 0.2, height: 0.1 });        

        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded AmericanRoads.shp " + shapeRecords.length);

        const roadsUSA: any[] = [];
        const roadsMEX: any[] = [];
        const roadsCAN: any[] = [];

        // filtering records of loaded shapefile
        for (const record of shapeRecords) {
            // reading field values loaded from DBF file
            const type = record.fieldValues.RoadType;
            const road = {
                country: record.fieldValues.Country,
                length: record.fieldValues.RoadLength / 10,
                points: record.points,
                type: type === 1 ? "Highway" : "Road",
            };
            // grouping road items by country names
            if (type === 1 || type === 2) {
                if (road.country === "USA") {
                    roadsUSA.push(road);
                } else if (road.country === "MEX") {
                    roadsMEX.push(road);
                } else if (road.country === "CAN") {
                    roadsCAN.push(road);
                }
            }
        }

        // creating polyline series for roads of each country
        this.addSeriesWith(roadsCAN, "rgba(252, 32, 32, 0.9)");
        this.addSeriesWith(roadsUSA, "rgba(3, 121, 231, 0.9)");
        this.addSeriesWith(roadsMEX, "rgba(14, 194, 14, 0.9)");

        // zooming to bounds of loaded shapefile
        // this.geoMap.zoomToGeographic(sds.worldRect);
    }

    public addSeriesWith(shapeData: any[], shapeBrush: string)
    {
        const lineSeries = new IgrGeographicPolylineSeries ( { name: "lineSeries" });
        lineSeries.dataSource = shapeData;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeFilterResolution = 2.0;
        lineSeries.shapeStrokeThickness = 2;
        lineSeries.shapeStroke = shapeBrush;
        lineSeries.tooltipTemplate = this.createTooltip;

        this.geoMap.series.add(lineSeries);
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const titleColor = series.shapeStroke;
        const titleStyle = { color: titleColor, fontWeight: 700 } as React.CSSProperties;

        return <div className="tooltipBox">
            <div style={titleStyle}>{dataItem.country} {dataItem.type}</div>
            <div>Length: {dataItem.length} miles</div>
        </div>
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapTypeScatterPolylineSeries/>);
```

<div class="divider--half"></div>

The [`IgrGeographicPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicpolylineseries.html) works a lot like the [`IgrGeographicShapeSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseries.html) except that geo-spatial data is rendered with polylines instead of polygons.

## Data Requirements

Similarly to other types of geographic series in the control, the [`IgrGeographicPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicpolylineseries.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the [`shapeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseriesbase.html#shapeMemberPath) property. The [`IgrGeographicPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicpolylineseries.html) uses points of this mapped data column to plot polygons in the control.

## Code Snippet

The following code shows how to bind the [`IgrGeographicPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicpolylineseries.html) to locations of cities loaded from a shape file using the [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html).

<!-- React -->

```tsx
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
// ...

public render() {
    return (
    <IgrGeographicMap
        ref={this.onMapReferenced}
        width="600px"
        height="600px"
        zoomable="true" />
    );
}
```

```ts
public onMapReferenced(map: IgrGeographicMap) {
    this.geoMap = map;

    const sds = new IgrShapeDataSource();
    sds.importCompleted = this.onDataLoaded;
    sds.shapefileSource = "/Shapes/AmericanRoads.shp";
    sds.databaseSource  = "/Shapes/AmericanRoads.dbf";
    sds.dataBind();
}

public onDataLoaded(sds: IgrShapeDataSource, e: any) {

    const roadsUSA: any[] = [];
    const roadsMEX: any[] = [];
    const roadsCAN: any[] = [];
    // filtering records of loaded shapefile
    for (const record of sds.getPointData()) {
        // reading field values loaded from DBF file
        const type = record.fieldValues.RoadType;
        const road = {
            country: record.fieldValues.Country,
            length: record.fieldValues.RoadLength / 10,
            points: record.points,
            type: type === 1 ? "Highway" : "Road",
        };
        // grouping road items by country names
        if (type === 1 || type === 2) {
            if (road.country === "USA") {
                roadsUSA.push(road);
            } else if (road.country === "MEX") {
                roadsMEX.push(road);
            } else if (road.country === "CAN") {
                roadsCAN.push(road);
            }
        }
    }
    // creating polyline series for roads of each country
    this.addSeries(roadsCAN, "rgba(252, 32, 32, 0.9)");
    this.addSeries(roadsUSA, "rgba(3, 121, 231, 0.9)");
    this.addSeries(roadsMEX, "rgba(14, 194, 14, 0.9)");
}

public addSeries(shapeData: any[], shapeBrush: string)
{
    const lineSeries = new IgrGeographicPolylineSeries ( { name: "lineSeries" });
    lineSeries.dataSource = shapeData;
    lineSeries.shapeMemberPath = "points";
    lineSeries.shapeFilterResolution = 2.0;
    lineSeries.shapeStrokeThickness = 2;
    lineSeries.shapeStroke = shapeBrush;

    this.geoMap.series.add(lineSeries);
}
```

## API References

- [`IgrGeographicPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicpolylineseries.html)
- [`IgrGeographicShapeSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseries.html)
- `ItemsSource`
- [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html)
