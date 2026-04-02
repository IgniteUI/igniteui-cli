---
title: React Map | Data Visualization Tools | Shape Polygon Series | Infragistics
_description: Use Infragistics React map's shape polygon series to render shapes of countries or regions defined by geographic locations. Learn more about Ignite UI for React map's series!
_keywords: React map, shape polygon series, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap", "ShapefileConverter", "Series", "GeographicShapeSeriesBase"]
_tocName: Geographic Polygon Map
_premium: true
---

# React Geographic Polygon Map

In React map component, you can use the [`IgrGeographicShapeSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseries.html) to display geo-spatial data using shape polygons in a geographic context. This type of geographic series is often used to render shapes of countries or regions defined by geographic locations.

## React Geographic Polygon Map Example

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
import { IgrGeographicShapeSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapTypeScatterPolygonSeries extends React.Component {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        width="100%"
                        height="100%"
                        zoomable="true" />
                </div>

                <LegendOverlay dock="BottomLeft" >
                    <LegendItem background="rgb(14, 194, 14)"  text="Arab League Organization"/>
                    <LegendItem background="rgb(32, 146, 252)" text="North Atlantic Treaty Organization"/>
                    <LegendItem background="rgb(219, 84, 5)"   text="Shanghai Cooperation Organization"/>
                </LegendOverlay>

                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        // hiding OpenStreetMap
        this.geoMap.backgroundContent = undefined;
        // zooming map to region of North America
        this.geoMap.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.6, height: 0.6 });

        // loading a shapefile with geographic shapes
        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCountries.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCountries.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded WorldCountries.shp " + shapeRecords.length);

        const countriesNATO: any[] = [];
        const countriesSCO: any[] = [];
        const countriesARAB: any[] = [];
        const countriesOther: any[] = [];

        for (const record of shapeRecords) {
            // using field/column names from .DBF file
            const country = {
                points: record.points,
                name: record.fieldValues.NAME,
                org: record.fieldValues.ALLIANCE,
                pop: record.fieldValues.POPULATION
            };

            const group = record.fieldValues.ALLIANCE;
            if (group === "NATO") {
                countriesNATO.push(country);
            } else if (group === "SCO") {
                countriesSCO.push(country);
            } else if (group === "ARAB LEAGUE") {
                countriesARAB.push(country);
            } else {
                countriesOther.push(country);
            }
        }

        this.createSeries(countriesNATO, "rgb(32, 146, 252)", "NATO");
        this.createSeries(countriesSCO, "rgb(252, 32, 32)", "SCO");
        this.createSeries(countriesARAB, "rgb(14, 194, 14)", "AL");
        this.createSeries(countriesOther, "rgb(146, 146, 146)", "Other");
    }

    public createSeries(shapeData: any[], shapeBrush: string, shapeTitle: string)
    {
        const seriesName = shapeTitle + "series";
        const geoSeries = new IgrGeographicShapeSeries( { name: seriesName });
        geoSeries.dataSource = shapeData;
        geoSeries.shapeMemberPath = "points";
        geoSeries.brush = shapeBrush;
        geoSeries.outline = "Black";
        geoSeries.tooltipTemplate = this.createTooltip;
        geoSeries.thickness = 1;
        geoSeries.title = shapeTitle;

        this.geoMap.series.add(geoSeries);
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const pop = WorldUtils.toStringAbbr(dataItem.pop);
        const titleColor = series.brush;
        const titleStyle = { color: titleColor} as React.CSSProperties;

        return <div>
            <div className="tooltipTitle" style={titleStyle}>{dataItem.org}</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">{dataItem.name}</div>
                    <div className="tooltipVal">{pop}</div>
                </div>
            </div>
        </div>
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapTypeScatterPolygonSeries/>);
```


<div class="divider--half"></div>

The [`IgrGeographicShapeSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseries.html) works a lot like the [`IgrGeographicPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicpolylineseries.html) except that geo-spatial data is rendered with polygons instead of polylines.

## Data Requirements

Similar to other types of geographic series in the map control, the [`IgrGeographicShapeSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseries.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the [`shapeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseriesbase.html#shapeMemberPath) property. The [`IgrGeographicShapeSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseries.html) uses points of this mapped data column to plot polygons in the map control.

## Code Snippet

The following code demonstrates how to bind the [`IgrGeographicShapeSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseries.html) to shapes of countries in the world loaded from a shape file using the [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html).

<!-- React -->

```tsx
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicShapeSeries } from 'igniteui-react-maps';
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
    sds.shapefileSource = "/shapes/WorldCountries.shp";
    sds.databaseSource  = "/shapes/WorldCountries.dbf";
    sds.dataBind();
}

public onDataLoaded(sds: IgrShapeDataSource, e: any) {
    const countriesNATO: any[] = [];
    const countriesSCO: any[] = [];
    const countriesARAB: any[] = [];
    const countriesOther: any[] = [];

    for (const record of sds.getPointData()) {
        // using field/column names from .DBF file
        const country = {
            points: record.points,
            name: record.fieldValues.Name,
            org: record.fieldValues.Alliance,
            pop: record.fieldValues.Population
        };
        const group = record.fieldValues.Alliance;
        if (group === "NATO") {
            countriesNATO.push(country);
        } else if (group === "SCO") {
            countriesSCO.push(country);
        } else if (group === "ARAB LEAGUE") {
            countriesARAB.push(country);
        } else {
            countriesOther.push(country);
        }
    }
    this.createSeries(countriesNATO, "rgb(32, 146, 252)", "NATO");
    this.createSeries(countriesSCO, "rgb(252, 32, 32)", "SCO");
    this.createSeries(countriesARAB, "rgb(14, 194, 14)", "AL");
    this.createSeries(countriesOther, "rgb(146, 146, 146)", "Other");
}

public createSeries(shapeData: any[], shapeBrush: string, shapeTitle: string)
{
    const seriesName = shapeTitle + "series";
    const geoSeries = new IgrGeographicShapeSeries( { name: seriesName });
    geoSeries.dataSource = shapeData;
    geoSeries.shapeMemberPath = "points";
    geoSeries.brush = shapeBrush;
    geoSeries.outline = "Black";
    geoSeries.thickness = 1;
    geoSeries.title = shapeTitle;
    this.geoMap.series.add(geoSeries);
}
```

## API References

- [`IgrGeographicPolylineSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicpolylineseries.html)
- [`IgrGeographicShapeSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseries.html)
- `ItemsSource`
- [`shapeMemberPath`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicshapeseriesbase.html#shapeMemberPath)
- [`IgrShapeDataSource`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_core.igrshapedatasource.html)
