---
title: React Map | Data Visualization Tools | Scatter Area Series | Data Binding | Infragistics
_description: Use Infragistics React map's scatter area series to draw a colored area surface based on a triangulation of longitude and latitude data with a numeric value assigned to each point. Learn more about Ignite UI for React map's series!
_keywords: React map, scatter area series, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap","GeographicScatterAreaSeries","CustomPaletteColorScale", "Series"]
_tocName: Geographic Area Map
_premium: true
---

# React Geographic Area Map

In React map component, you can use the [`IgrGeographicScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html) to draw a colored surface, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data, defined by geographic locations such as weather temperature, precipitation, population distribution, air pollution, etc.

## React Geographic Area Map Example

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
```typescript
export default class WorldUtils {

    // calculate geo-paths between two locations using great circle formula
    public static calcPaths(origin: any, dest: any): any[] {
        let interval = 200;
        let paths: any[] = [[]];
        let pathID = 0;
        let distance = this.calcDistance(origin, dest);
        if (distance <= interval) {
            paths[pathID].push({ x: origin.lon, y: origin.lat });
            paths[pathID].push({ x: dest.lon, y: dest.lat });
        } else {
            let current = origin;
            let previous = origin;

            for (let dist = interval; dist <= distance; dist += interval)
            {
                previous = current
                paths[pathID].push({ x: current.lon, y: current.lat });

                let bearing = this.calcBearing(current, dest);
                current = this.calcDestination(current, bearing, interval);
                // ensure geo-path wrap around the world through the new date-line
                if (previous.lon > 150 && current.lon < -150) {
                    paths[pathID].push({ x: 180, y: current.lat });
                    paths.push([]);
                    pathID++
                    current = { lon: -180, lat: current.lat }
                } else if (previous.lon < -150 && current.lon > 150) {
                    paths[pathID].push({ x: -180, y: current.lat });
                    paths.push([]);
                    pathID++
                    current = { lon: 180, lat: current.lat }
                }
            }
            paths[pathID].push({ x: dest.lon, y: dest.lat });
        }
        return paths;
    }

    // calculate bearing angle between two locations
    public static calcBearing(origin: any, dest: any): number
    {
        origin = this.toRadianLocation(origin);
        dest = this.toRadianLocation(dest);
        let range = (dest.lon - origin.lon);
        let y = Math.sin(range) * Math.cos(dest.lat);
        let x = Math.cos(origin.lat) * Math.sin(dest.lat) -
                Math.sin(origin.lat) * Math.cos(dest.lat) * Math.cos(range);
        let angle = Math.atan2(y, x);
        return this.toDegreesNormalized(angle);
    }

    // calculate destination for origin location and travel distance
    public static calcDestination(origin: any, bearing: number, distance: number): any {
        let radius = 6371.0;
        origin = this.toRadianLocation(origin);
        bearing = this.toRadians(bearing);
        distance = distance / radius; // angular distance in radians

        let lat = Math.asin(Math.sin(origin.lat) * Math.cos(distance) +
                       Math.cos(origin.lat) * Math.sin(distance) * Math.cos(bearing));
        let x = Math.sin(bearing) * Math.sin(distance) * Math.cos(origin.lat);
        let y = Math.cos(distance) - Math.sin(origin.lat) * Math.sin(origin.lat);
        let lon = origin.lon + Math.atan2(x, y);
        // normalize lon to coordinate between -180º and +180º
        lon = (lon + 3 * Math.PI) % (2 * Math.PI) - Math.PI;

        lon = this.toDegrees(lon);
        lat = this.toDegrees(lat);

        return { lon: lon, lat: lat };
    }

    // calculate distance between two locations
    public static calcDistance(origin: any, dest: any): number {
        origin = this.toRadianLocation(origin);
        dest = this.toRadianLocation(dest);
        let sinProd = Math.sin(origin.lat) * Math.sin(dest.lat);
        let cosProd = Math.cos(origin.lat) * Math.cos(dest.lat);
        let lonDelta = (dest.lon - origin.lon);

        let angle = Math.acos(sinProd + cosProd * Math.cos(lonDelta));
        let distance = angle * 6371.0;
        return distance; // * 6371.0; // in km
    }

    public static toRadianLocation(geoPoint: any): any {
        let x = this.toRadians(geoPoint.lon);
        let y = this.toRadians(geoPoint.lat);
        return { lon: x, lat: y };
    }

    public static toRadians(degrees: number): number
    {
        return degrees * Math.PI / 180;
    }

    public static toDegrees(radians: number): number {
        return (radians * 180.0 / Math.PI);
    }

    public static toDegreesNormalized(radians: number): number
    {
        let degrees = this.toDegrees(radians);
        degrees = (degrees + 360) % 360;
        return degrees;
    }

    // converts latitude coordinate to a string
    public static toStringLat(latitude: number): string {
        let str = Math.abs(latitude).toFixed(1) + "°";
        return latitude > 0 ? str + "N" : str + "S";
    }

    // converts longitude coordinate to a string
    public static toStringLon(coordinate: number): string {
        let val = Math.abs(coordinate);
        let str = val < 100 ? val.toFixed(1) : val.toFixed(0);
        return coordinate > 0 ? str + "°E" : str + "°W";
    }

    public static toStringAbbr(value: number): string {
        if (value > 1000000000000) {
            return (value / 1000000000000).toFixed(1) + " T"
        } else if (value > 1000000000) {
            return (value / 1000000000).toFixed(1) + " B"
        } else if (value > 1000000) {
            return (value / 1000000).toFixed(1) + " M"
        } else if (value > 1000) {
            return (value / 1000).toFixed(1) + " K"
        }
        return value.toFixed(0);
    }

    public static getLongitude(location: any): number {
        if (location.x) return location.x;
        if (location.lon) return location.lon;
        if (location.longitude) return location.longitude;
        return Number.NaN;
    }

    public static getLatitude(location: any): number {
        if (location.y) return location.y;
        if (location.lat) return location.lat;
        if (location.latitude) return location.latitude;
        return Number.NaN;
    }

    public static getBounds(locations: any[]): any {
        let minLat = 90;
        let maxLat = -90;
        let minLon = 180;
        let maxLon = -180;

        for (const location of locations) {
            const crrLon = this.getLongitude(location);
            if (!Number.isNaN(crrLon)) {
                minLon = Math.min(minLon, crrLon);
                maxLon = Math.max(maxLon, crrLon);
            }

            const crrLat = this.getLatitude(location);
            if (!Number.isNaN(crrLat)) {
                minLat = Math.min(minLat, crrLat);
                maxLat = Math.max(maxLat, crrLat);
            }

            // if (location.x) {
            //     minLon = Math.min(minLon, location.x);
            //     maxLon = Math.max(maxLon, location.x);
            // } else if (location.lon) {
            //     minLon = Math.min(minLon, location.lon);
            //     maxLon = Math.max(maxLon, location.lon);
            // } else if (location.longitude) {
            //     minLon = Math.min(minLon, location.longitude);
            //     maxLon = Math.max(maxLon, location.longitude);
            // }
            // if (location.y) {
            //     minLat = Math.min(minLat, location.y);
            //     maxLat = Math.max(maxLat, location.y);
            // } else if (location.lat) {
            //     minLat = Math.min(minLat, location.lat);
            //     maxLat = Math.max(maxLat, location.lat);
            // } else if (location.latitude) {
            //     minLat = Math.min(minLat, location.latitude);
            //     maxLat = Math.max(maxLat, location.latitude);
            // }
        }

        const geoBounds = {
            left: minLon,
            top: minLat,
            width: Math.abs(maxLon - minLon),
            height: Math.abs(maxLat - minLat)
        };
        return geoBounds;
    }

    public static getNightShapes(): any[] {
        let nightShape = [];

        let line: any[] = [];

        for (let lon = -180; lon <= 180; lon += 1) {

            // let line: any[] = [{x: lon, y: -90}, {x: lon, y: 90}];
            let x = lon;
            let y = 75 * Math.cos(lon * Math.PI / 180);
            line.push({x: x, y: y});
        }
        // line.push({x: 180, y: 90});
        // line.push({x: -180, y: 90});
        // line.push({x: -180, y: -90});

        let coordinateLine = {points: [line]};

        nightShape.push(coordinateLine);

        return nightShape;
    }

}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WorldUtils from "./WorldUtils"
import { LegendOverlay, LegendItem } from "./LegendOverlay"
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicScatterAreaSeries } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
import { IgrShapeDataSource } from 'igniteui-react-core';
import { IgrDataContext } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapTypeScatterAreaSeries extends React.Component<any, any> {

    private geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <IgrGeographicMap
                    ref={this.onMapRef}
                    width="100%"
                    height="100%"
                    zoomable="true" />
                <LegendOverlay dock="BottomLeft"
                text="Source: NOAA" href="https://www.noaa.gov/" />
                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.6, height: 0.6 });

        // loading a shapefile with geographic shapes
        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded WorldTemperatures.shp: " + shapeRecords.length);

        const contourPoints: any[] = [];
        for (const record of shapeRecords) {
            const temp = record.fieldValues.Contour;
            // using only major contours (every 10th degrees Celsius)
            if (temp % 10 === 0 && temp >= 0) {
                for (const shapes of record.points) {
                     for (let i = 0; i < shapes.length; i++) {
                        if (i % 5 === 0) {
                            const point = shapes[i];
                            const item = { lon: point.x, lat: point.y, value: temp};
                            contourPoints.push(item);
                        }
                     }
                }
            }
        }

        console.log("loaded contour points: " + contourPoints.length);
        this.createAreaSeries(contourPoints);
    }

    public createAreaSeries(data: any[])
    {
        const brushes = [
            "rgba(32, 146, 252, 0.5)", // semi-transparent blue
            "rgba(14, 194, 14, 0.5)",  // semi-transparent green
            "rgba(252, 120, 32, 0.5)", // semi-transparent orange
            "rgba(252, 32, 32, 0.5)",  // semi-transparent red
        ];

        const colorScale = new IgrCustomPaletteColorScale({});
        colorScale.palette = brushes;
        colorScale.minimumValue = 0;
        colorScale.maximumValue = 30;

        const areaSeries = new IgrGeographicScatterAreaSeries( { name: "areaSeries" });
        areaSeries.dataSource = data;
        areaSeries.longitudeMemberPath = "lon";
        areaSeries.latitudeMemberPath = "lat";
        areaSeries.colorMemberPath = "value";
        areaSeries.colorScale = colorScale;
        areaSeries.tooltipTemplate = this.createAreaTooltip;

        this.geoMap.series.add(areaSeries);
    }

    public createAreaTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const lat = WorldUtils.toStringLat(dataItem.lat);
        const lon = WorldUtils.toStringLon(dataItem.lon);
        const tmp = dataItem.value.toFixed(1) + "°C";
        return <div className="tooltipBox">
            <div className="tooltipRow">
                <div className="tooltipLbl">Temperature:</div>
                <div className="tooltipVal"> {tmp}</div>
            </div>
            <div className="tooltipRow">
                <div className="tooltipLbl">Latitude:</div>
                <div className="tooltipVal"> {lat}</div>
            </div>
            <div className="tooltipRow">
                <div className="tooltipLbl">Longitude:</div>
                <div className="tooltipVal"> {lon}</div>
            </div>
        </div>
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapTypeScatterAreaSeries/>);
```


<div class="divider--half"></div>

The [`IgrGeographicScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html) works a lot like the [`IgrGeographicContourLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html) except that it represents data as interpolated and colored surface instead of contour lines connecting data points with the same values.

## Data Requirements

Similar to other types of geographic series in the map component, the [`IgrGeographicScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store a geographic longitude and latitude coordinates and one data column that stores a value associated with the geographic location. The [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#longitudeMemberPath), [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#latitudeMemberPath), and [`colorMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html#colorMemberPath) properties of the geographic series identify these data column.
The [`IgrGeographicScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html) automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the [`trianglesSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#trianglesSource) property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a TriangulationSource for this property, especially when a large number of data items are present.

## Data Binding

The following table summarizes properties of GeographicScatterAreaSeries used for data binding.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|`ItemsSource`|any|The source of data items to perform triangulation on if the [`trianglesSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#trianglesSource) property provides no triangulation data.|
|[`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#longitudeMemberPath)|string|The name of the property containing the Longitude for all items bound to the `ItemsSource`.|
|[`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#latitudeMemberPath)|string|The name of the property containing the Latitude for all items bound to the `ItemsSource`.|
|[`colorMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html#colorMemberPath)|string|The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the [`colorScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html#colorScale) property is set.|
|[`trianglesSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#trianglesSource)|any|The source of triangulation data. Setting Triangles of the `TriangulationSource` object to this property improves both runtime performance and geographic series rendering.|
|[`triangleVertexMemberPath1`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#triangleVertexMemberPath1)|string|The name of the property of the [`trianglesSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#trianglesSource) items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`triangleVertexMemberPath2`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#triangleVertexMemberPath2)|string|The name of the property of the [`trianglesSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#trianglesSource) items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|[`triangleVertexMemberPath3`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#triangleVertexMemberPath3)|string|The name of the property of the [`trianglesSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#trianglesSource) items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|

## Color Scale

Use the ColorScale property of the [`IgrGeographicScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html) to resolve colors values of points and thus fill surface of the geographic series. The colors are smoothly interpolated around the shape of the surface by applying a pixel-wise triangle rasterizer to a triangulation data. Because rendering of the surface is pixel-wise, the color scale uses colors instead of brushes.
The provided [`IgrCustomPaletteColorScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcustompalettecolorscale.html) class should satisfy most coloring needs, but the ColorScale base class can be inherited by the application for custom coloring logic.

The following table list properties of the [`IgrCustomPaletteColorScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcustompalettecolorscale.html) affecting surface coloring of the GeographicScatterAreaSeries.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`palette`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcustompalettecolorscale.html#palette)| ObservableCollection<Color> |Gets or sets the collection of colors to select from or to interpolate between.|
|[`interpolationMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcustompalettecolorscale.html#interpolationMode)|[`ColorScaleInterpolationMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/enums/igniteui_react_charts.colorscaleinterpolationmode.html)|Gets or sets the method getting a color from the Palette.|
|[`maximumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcustompalettecolorscale.html#maximumValue)|double|The highest value to assign a color. Any given value greater than this value will be Transparent.|
|[`minimumValue`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcustompalettecolorscale.html#minimumValue)|double|The lowest value to assign a color. Any given value less than this value will be Transparent.|

## Code Snippet

The following code shows how to bind the [`IgrGeographicScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html) to triangulation data representing surface temperatures in the world.

<!-- React -->

```tsx
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicScatterAreaSeries } from 'igniteui-react-maps';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
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
    sds.shapefileSource = "/Shapes/WorldTemperatures.shp";
    sds.databaseSource  = "/Shapes/WorldTemperatures.dbf";
    sds.dataBind();
}

public onDataLoaded(sds: IgrShapeDataSource, e: any) {
    const contourPoints: any[] = [];
    for (const record of sds.getPointData()) {
        const temp = record.fieldValues.Contour;
        if (temp % 10 === 0 && temp >= 0) {
            for (const shapes of record.points) {
                 for (let i = 0; i < shapes.length; i++) {
                    if (i % 5 === 0) {
                        const point = shapes[i];
                        const item = { lon: point.x, lat: point.y, value: temp};
                        contourPoints.push(item);
                    }
                 }
            }
        }
    }

    this.createAreaSeries(contourPoints);
}

public createAreaSeries(data: any[])
{
    const brushes = [
        "rgba(32, 146, 252, 0.5)",
        "rgba(14, 194, 14, 0.5)",
        "rgba(252, 120, 32, 0.5)",
        "rgba(252, 32, 32, 0.5)",
    ];

    const colorScale = new IgrCustomPaletteColorScale({});
    colorScale.palette = brushes;
    colorScale.minimumValue = 0;
    colorScale.maximumValue = 30;

    const areaSeries = new IgrGeographicScatterAreaSeries( { name: "areaSeries" });
    areaSeries.dataSource = data;
    areaSeries.longitudeMemberPath = "lon";
    areaSeries.latitudeMemberPath = "lat";
    areaSeries.colorMemberPath = "value";
    areaSeries.colorScale = colorScale;

    this.geoMap.series.add(areaSeries);
}
```

## API References

- [`colorMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html#colorMemberPath)
- [`colorScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html#colorScale)
- [`IgrCustomPaletteColorScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcustompalettecolorscale.html)
- [`IgrGeographicContourLineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographiccontourlineseries.html)
- [`IgrGeographicScatterAreaSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicscatterareaseries.html)
- `ItemsSource`
- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#longitudeMemberPath)
- [`trianglesSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicxytriangulatingseries.html#trianglesSource)
- `TriangulationSource`
