---
title: React Map | Data Visualization Tools | Map Navigation | Infragistics
_description: Navigate Infragistics' React map by panning right and left and zooming horizontally and vertically using mouse or touch. Learn about Ignite UI for React map's navigation capabilities!
_keywords: React map, navigation, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap"]
_tocName: Navigating Map Content
_premium: true
---

# React Navigating Map Content

Navigation in the [`IgrGeographicMap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html) control is enabled by default and it allows zooming and panning of the map content. However, this behavior can be changed using the [`zoomable`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html#zoomable) property. It is important to know that the map allows only synchronized zooming - scaling the map content with preserved aspect ratio. As result, it is not possible to scale the map content vertically without scaling it also horizontally and vice versa.

## React Navigating Map Content Example

```typescript
import { IgrGeographicMap } from 'igniteui-react-maps';

export enum MapRegion {
    Caribbean = "Caribbean",
    UnitedStates = "United States",
    UnitedKingdom = "United Kingdom",
    European = "European",
    SouthAfrica = "South Africa",
    Poland = "Poland",
    Australia = "Australia",
    Japan = "Japan",
    Uruguay = "Uruguay",
    Egypt = "Egypt",
    Hawaii = "Hawaii",
}

export class MapUtils {

    public static navigateTo(geoMap: IgrGeographicMap, name: MapRegion): void {

        const geoRect = this.getRegions()[name];
        // console.log("MapUtils " + name) ;
        geoMap.zoomToGeographic(geoRect);
    }

    public static toPixel(num: number): string {
        const s = Math.abs(num).toFixed(0);
        return s + " px";
    }

    public static toLng(num: number): string {
        num = this.clamp(num, -180, 180);

        let s = Math.abs(num).toFixed(1);
        if (num < 100) {
            s = "  " + s
        }

        if (num > 0) {
            return s + "°E";
        } else  {
            return s + "°W";
        }
    }

    public static toLat(num: number): string {
        num = this.clamp(num, -90, 90);

        let s = Math.abs(num).toFixed(1);
        if (num < 100) {
            s = "  " + s
        }

        if (num > 0) {
            return s + "°N";
        } else  {
            return s + "°S";
        }
    }

    public static clamp(num: number, min: number, max: number): number {
        return Math.max(min, Math.min(max, num));
    }

    public static pad(num: number, places?: number): string {
        places = places || 20;
        let s = num.toFixed(1).toString();
        while (s.length < places) {s = " " + s;}
        return s;
    }

    public static getBingKey(): string {
        return "Avlo7qsH1zZZI0XNpTwZ4XwvUJmCbd-mczMeUXVAW9kYYOKdmBIVRe8aoO02Xctq";
    }

    public static getRegions(): any {
        // create regions only once
        if (this.Regions === undefined) {
            this.createRegions();
        }
        return this.Regions;
    }

    private static Regions: any;

    private static addRegion(name: string, geoRect: any): void {
        geoRect.name = name;
        geoRect.longitude = geoRect.left + (geoRect.width / 2);
        geoRect.latitude = geoRect.top + (geoRect.height / 2);

        this.Regions[name] = geoRect;
    }

    private static createRegions(): void {
        this.Regions = {};
        this.addRegion(MapRegion.Australia, { left: 81.5, top: -52.0, width: 98.0, height: 56.0 });
        this.addRegion(MapRegion.Caribbean, { left: -92.9, top: 5.4, width: 35.1, height: 25.8 });
        this.addRegion(MapRegion.Egypt, { left: 19.3, top: 19.9, width: 19.3, height: 13.4 });
        this.addRegion(MapRegion.European, { left: -36.0, top:31.0, width: 98.0, height: 38.0 });
        this.addRegion(MapRegion.Japan, { left: 122.7, top: 29.4, width: 27.5, height: 17.0 });
        this.addRegion(MapRegion.Hawaii, { left: -161.2, top: 18.5, width: 6.6, height: 4.8 });
        this.addRegion(MapRegion.Poland, { left: 13.0, top: 48.0, width: 11.0, height: 9.0 });
        this.addRegion(MapRegion.SouthAfrica, { left: 9.0, top: -37.1, width: 26.0, height: 17.8 });
        this.addRegion(MapRegion.UnitedStates, { left: -134.5, top: 16.0, width: 70.0, height: 37.0 });
        this.addRegion(MapRegion.UnitedKingdom, { left: -15.0, top: 49.5, width: 22.5, height: 8.0 });
        this.addRegion(MapRegion.Uruguay, { left: -62.1, top: -35.7, width: 10.6, height: 7.0 });
    }

}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MapUtils, MapRegion } from './MapUtils';
// for handling of maps events
import { IgrRectChangedEventArgs, IgRect } from 'igniteui-react-core';
import { IgrDataChartInteractivityModule, IgrSeriesViewer } from 'igniteui-react-charts';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapNavigation extends React.Component<any, any> {

    public geoMap: IgrGeographicMap;

    public NavigationOptions: JSX.Element[] = [];
    public NavigationRegions: any = {};

    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
        this.onMapWindowRectChanged = this.onMapWindowRectChanged.bind(this);
        this.onSelectionChanged = this.onSelectionChanged.bind(this);
        this.onMapMouseMove = this.onMapMouseMove.bind(this);

        // generating navigation regions and options
        const regions =  MapUtils.getRegions();
        for (const key in regions) {
            if (regions.hasOwnProperty(key)) {
                const region = regions[key];
                const name = region.name;
                this.NavigationRegions[name] = region;
                this.NavigationOptions.push(<option id={name} key={name}>{name}</option>);
            }
        }

        this.state = {
            selectedRegion: MapRegion.UnitedStates,
            mapRegion: this.NavigationRegions[MapRegion.UnitedStates],
            mapHoverGeographicCoordinate: { x: 0, y: 0 },
            mapHoverRelativeCoordinate: { x: 0, y: 0 },
            mapHoverWindowCoordinate: { x: 0, y: 0 },

            windowScale: 0,
            windowPositionVertical: 0,
            windowPositionHorizontal: 0,
            getRect: { left: -180, top: -75, height: 170, width: 360 },
            geoT: "",
            geoL: "",
            geoH: "",
            geoW: "",
            winT: "",
            winL: "",
            winH: "",
            winW: "",
        };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample"    >

                <div className="container" id="map" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        actualWindowRectChanged={this.onMapWindowRectChanged}
                        width="100%"
                        height="100%"
                        zoomable="true"/>
                </div>

                <div className="overlay-left overlay-border vertical" style={{background: "rgba(217, 217, 217, 0.5)"}} >
                    <label style={{fontWeight: 600}}>Zoom to Map Region</label>
                    <select value={this.state.selectedRegion} onChange={this.onSelectionChanged}>
                            {this.NavigationOptions}
                    </select>
                    <label style={{fontWeight: 600}}>Map Geographic Rect</label>
                    <div className="horizontal" >
                        <div className="vertical"  style={{marginRight: "1rem"}}>
                            <label >{this.state.geoT}</label>
                            <label >{this.state.geoL}</label>
                        </div>
                        <div className="vertical">
                            <label >{this.state.geoH}</label>
                            <label >{this.state.geoW}</label>
                        </div>
                    </div>

                    <label style={{fontWeight: 600}}>Map Window Rect</label>
                    <div className="horizontal" >
                        <div className="vertical"  style={{marginRight: "1rem"}}>
                            <label >{this.state.winT}</label>
                            <label >{this.state.winL}</label>
                        </div>
                        <div className="vertical">
                            <label >{this.state.winH}</label>
                            <label >{this.state.winW}</label>
                        </div>
                    </div>

                    <label style={{fontWeight: 600}}>Map Window Position</label>
                    <div className="horizontal">
                        <div className="vertical"  style={{marginRight: "1rem"}}>
                            <label >Horizontal:</label>
                            <label >Vertical:</label>
                            <label >Scale:</label>
                        </div>
                        <div className="vertical">
                            <label >{this.state.windowPositionHorizontal.toFixed(4)}</label>
                            <label >{this.state.windowPositionVertical.toFixed(4)}</label>
                            <label >{this.state.windowScale.toFixed(4)}</label>
                        </div>
                    </div>

                    <label style={{fontWeight: 600}}>Map Hover Coordinates</label>
                    <div className="horizontal">
                        <div className="vertical" style={{marginRight: "1rem"}}>
                            <label >Window X: </label>
                            <label >Window Y: </label>
                            <label >Longitude: </label>
                            <label >Latitude: </label>
                            <label >Pixel X: </label>
                            <label >Pixel Y: </label>
                        </div>
                        <div className="vertical">
                            <label >{this.state.mapHoverWindowCoordinate.x.toFixed(4)}</label>
                            <label >{this.state.mapHoverWindowCoordinate.y.toFixed(4)}</label>
                            <label >{MapUtils.toLng(this.state.mapHoverGeographicCoordinate.x)}</label>
                            <label >{MapUtils.toLat(this.state.mapHoverGeographicCoordinate.y)}</label>
                            <label >{MapUtils.toPixel(this.state.mapHoverRelativeCoordinate.x)}</label>
                            <label >{MapUtils.toPixel(this.state.mapHoverRelativeCoordinate.y)}</label>
                        </div>
                    </div>
                </div>

                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @ESRI/ArcGIS</div>
            </div>
        );
    }

    public windowPositionHorizontalChanged = (e: any) => {
        this.geoMap.windowPositionHorizontal = e.target.valueAsNumber;
    }

    public windowPositionVerticalChanged = (e: any) => {
        this.geoMap.windowPositionVertical = e.target.valueAsNumber;
    }

    public windowScaleChanged = (e: any) => {
        this.geoMap.windowScale = e.target.valueAsNumber;
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.zoomToGeographic({ left:-134.5, top:16.5, width:70.0, height:37.0 });
        this.geoMap.windowPositionHorizontal = 0.1;
        this.geoMap.windowPositionVertical = 0.1;
        this.geoMap.windowScale = 0.1;
    }

    public onMapWindowRectChanged(viewer: IgrSeriesViewer, e: IgrRectChangedEventArgs) {
        let geoMap = viewer as IgrGeographicMap;

        // storing window location and size (values between 0.0 and 1.0)
        const windowRect: IgRect = e.newRect;

        // converting window rect to geographic rect/region:
        const geoRect: any = geoMap.getGeographicFromZoom(windowRect);
        geoRect.bottom = geoRect.top  + geoRect.height;
        geoRect.right  = geoRect.left + geoRect.width;
        // calculating center of geographic region
        geoRect.latitude  = geoRect.top  + (geoRect.height / 2);
        geoRect.longitude = geoRect.left + (geoRect.width / 2);

        this.setState({
            mapRegion: geoRect,
            windowPositionHorizontal: geoMap.actualWindowPositionHorizontal,
            windowPositionVertical: geoMap.actualWindowPositionVertical,
            windowScale: geoMap.actualWindowScale,
            geoT: "T: " + MapUtils.toLat(geoRect.top),
            geoL: "L: " + MapUtils.toLng(geoRect.left),
            geoH: "H: " + MapUtils.toLng(geoRect.height),
            geoW: "W: " + MapUtils.toLng(geoRect.width),
            winT: "T: " + windowRect.top.toFixed(4),
            winL: "L: " + windowRect.left.toFixed(4),
            winH: "H: " + windowRect.height.toFixed(4),
            winW: "W: " + windowRect.width.toFixed(4),
        });
    }

    public onMapMouseMove(e: any) {
        const bounds = e.target.getBoundingClientRect();
        const relativeCoordinate = {
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        };

        const windowCoordinate = {
            x: (e.clientX - bounds.left) / bounds.width,
            y: (e.clientY - bounds.top) / bounds.height
        };

        // converting mouse pixel coordinate to geographic coordinate:
        const geoCoordinate: any = this.geoMap.getGeographicPoint(relativeCoordinate);

        this.setState({
            mapHoverGeographicCoordinate: geoCoordinate,
            mapHoverRelativeCoordinate: relativeCoordinate,
            mapHoverWindowCoordinate: windowCoordinate
        });
    }

    public componentDidMount() {
        const elem = document.getElementById('map');
        elem.addEventListener('mousemove', this.onMapMouseMove, false);
    }

    public onSelectionChanged = (e: any) =>{
        if (this.geoMap === undefined) return;

        const name = e.target.value.toString();
        const region = this.NavigationRegions[name];

        this.geoMap.zoomToGeographic(region);

        this.setState({ selectedRegion: name});
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapNavigation/>);
```


<div class="divider--half"></div>

## Geographic Coordinates

You navigate map content within geographic region bound by these coordinates:

- horizontally from 180°E (negative) to 180°W (positive) longitudes
- vertically from 85°S (negative) to 85°N (positive) latitudes

This code snippet shows how navigate the map using geographic coordinates:

```ts
const geoMap = new IgrGeographicMap({ name: "geoMap" });

geoMap.zoomToGeographic({ left: -134.5, top: 16.5, width: 70.0, height: 37.0 });
```

## Window Coordinates

Also, you can navigate map content within window rectangle bound by these relative coordinates:

- horizontally from 0.0 to 1.0 values
- vertically from 0.0 to 1.0 values

This code snippet shows how navigate the map using relative window coordinates:

```ts
const geoMap = new IgrGeographicMap({ name: "geoMap" });

geoMap.windowRect = { left: 0.1, top: 0.1, width: 0.5, height: 0.5 };
// or
geoMap.windowPositionHorizontal = 0.1;
geoMap.windowPositionVertical = 0.1;
geoMap.windowScale = 0.5;
```

## Properties

The following table summarizes properties that can be used in navigation of the [`IgrGeographicMap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html) control:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|[`windowRect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#windowRect)| Rect | Sets new position and size of the navigation window in viewable area of the map content. Rect with 0, 0, 1, 1 values will zoom out the entire map content in the navigation window. |
|[`windowScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html#windowScale)| number | Sets new size of the navigation window in of the map control. It is equivalent smallest value of Width or Height stored in the [`windowRect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#windowRect) property |
|[`windowPositionHorizontal`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#windowPositionHorizontal)| number | Sets new horizontal position of the navigation window’s anchor point from the left edge of the map control. It is equivalent to value stored in the Left of the [`windowRect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#windowRect) property. |
|[`windowPositionVertical`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#windowPositionVertical)| number | Sets new vertical position of the navigation window’s anchor point from the top edge of the map control. It is equivalent to value stored in the Top of the [`windowRect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#windowRect) property. |
|[`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#actualWindowRect)| Rect | Indicates current position and size of the navigation window in viewable area of the map content. Rect with 0, 0, 1, 1 values displays the entire map content in the navigation window. |
|[`actualWindowScale`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html#actualWindowScale)| number | Indicates current size of the navigation window in of the map control. It is equivalent to smallest value of Width or Height stored in the [`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#actualWindowRect) property |
|[`actualWindowPositionHorizontal`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#actualWindowPositionHorizontal)| number | Indicates current horizontal position of the navigation window’s anchor point from the left edge of the map control. It is equivalent to value stored in the Left of the [`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#actualWindowRect) property. |
|[`actualWindowPositionVertical`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#actualWindowPositionVertical)| number | Indicates vertical position of the navigation window’s anchor point from the top edge of the map control. It is equivalent to value stored in the Top of the [`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#actualWindowRect) property. |

## API References

- [`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#actualWindowRect)
- [`windowRect`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#windowRect)
- [`IgrGeographicMap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html)
- [`zoomable`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html#zoomable)
