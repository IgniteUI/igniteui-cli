---
title: Angular Map | Data Visualization Tools | Map Navigation | Infragistics
_description: Navigate Infragistics' Angular map by panning right and left and zooming horizontally and vertically using mouse or touch. Learn about Ignite UI for Angular map's navigation capabilities!
_keywords: Angular map, navigation, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap"]
_tocName: Navigating Map Content
_premium: true
---

# Angular Navigating Map Content

Navigation in the [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) control is enabled by default and it allows zooming and panning of the map content. However, this behavior can be changed using the [`zoomable`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#zoomable) property. It is important to know that the map allows only synchronized zooming - scaling the map content with preserved aspect ratio. As result, it is not possible to scale the map content vertically without scaling it also horizontally and vice versa.

## Angular Navigating Map Content Example

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxGeographicMapModule } from "igniteui-angular-maps";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxGeographicMapModule,
    IgxDataChartInteractivityModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, TemplateRef, ViewChild, ChangeDetectorRef } from "@angular/core";
import { IgxArcGISOnlineMapImagery  } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { MapUtility, MapRegion } from "./MapUtility";
import { IgxRectChangedEventArgs } from "igniteui-angular-core";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

    public isRunning: boolean;
    public regionType: string = "United States";
    @ViewChild("map", { static: true })
    public geoMap: IgxGeographicMapComponent;
    @ViewChild("template", { static: true })
    public tooltip: TemplateRef<object>;

    public geoRect: any;
    public geoT: string;
    public geoL: string;
    public geoH: string;
    public geoW: string;

    public winT: string;
    public winL: string;
    public winH: string;
    public winW: string;

    public posHorizontal: number;
    public posVertical: number;
    public scale: number;
    public mapHoverLongitude: string = "0.0°W";
    public mapHoverLatitude: string = "0.0°S";
    public mapHoverX: string = "0.0000";
    public mapHoverY: string = "0.0000";
    public mapHoverPixelX = "0 px";
    public mapHoverPixelY = "0 px";
    public navigationOptions: Element[] = [];
    public navigationRegions: any = {};

    constructor(private ref: ChangeDetectorRef) {

        const regions =  MapUtility.getRegions();
        for (const key in regions) {
            if (regions.hasOwnProperty(key)) {
                const region = regions[key];
                const name = region.name;
                this.navigationRegions[name] = region;
            }
        }
    }

    public ngAfterViewInit(): void {
        this.componentDidMount();

        if (this.geoMap !== undefined) {
            // console.log("ngAfterViewInit map");
            this.geoMap.actualWindowRectChanged.subscribe((e: IgxRectChangedEventArgs) =>
                this.onMapWindowRectChanged(this.geoMap, e)
            );

            this.geoMap.zoomToGeographic({ left: -134.5, top: 16.5, width: 70.0, height: 37.0 });

         
        }
    }

    public onMapWindowRectChanged(geoMap: IgxGeographicMapComponent, e: any) {

        // converting window rect to geographic rect/region:
        const geoRect: any = geoMap.getGeographicFromZoom(e.args.newRect);
        geoRect.bottom = geoRect.top + geoRect.height;
        geoRect.right = geoRect.left + geoRect.width;
        // calculating center of geographic region
        geoRect.longitude = geoRect.left + (geoRect.width / 2);
        geoRect.latitude = geoRect.top + (geoRect.height / 2);
        this.geoRect = geoRect;

        const h = geoMap.actualWindowPositionHorizontal
        const v = geoMap.actualWindowPositionVertical;
        const s = geoMap.actualWindowScale;

        this.geoT = "T: " + MapUtility.toLat(this.geoRect.top);
        this.geoL = "L: " + MapUtility.toLng(this.geoRect.left);
        this.geoH = "H: " + MapUtility.toLng(this.geoRect.height);
        this.geoW = "W: " + MapUtility.toLng(this.geoRect.width);

        this.winT = "T: " + e.args.newRect.top.toFixed(4);
        this.winL = "L: " + e.args.newRect.left.toFixed(4);
        this.winH = "H: " + e.args.newRect.height.toFixed(4);
        this.winW = "W: " + e.args.newRect.width.toFixed(4);

        this.posHorizontal = parseFloat(h.toFixed(4));
        this.posVertical = parseFloat(v.toFixed(4));
        this.scale = parseFloat(s.toFixed(4));

        this.ref.detectChanges();
    }

    public onMapMouseMove = (e: any) => {

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

        this.mapHoverLongitude = MapUtility.toLng(geoCoordinate.x);
        this.mapHoverLatitude = MapUtility.toLat(geoCoordinate.y);
        this.mapHoverX = windowCoordinate.x.toFixed(4);
        this.mapHoverY = windowCoordinate.y.toFixed(4);
        this.mapHoverPixelX = MapUtility.toPixel(relativeCoordinate.x);
        this.mapHoverPixelY = MapUtility.toPixel(relativeCoordinate.y);

        this.ref.detectChanges();
    }

    public componentDidMount() {
        const elem = document.getElementById('map');
        elem.addEventListener('mousemove', this.onMapMouseMove, false);
    }

    public onSelectionChanged = (e: any) => {
        if (this.geoMap === undefined) return;

        const name = e.target.value.toString();
        const region = this.navigationRegions[name];

        this.geoMap.zoomToGeographic(region);
    }
}
```
```html
<div class="container vertical">

    <div class="container" id="map" >
        <igx-geographic-map #map
            width="100%"
            height="100%"
            zoomable="true">
        </igx-geographic-map>
    </div>

    <div class="overlay-left" >
        <div class="vertical overlay-border" style="background: rgba(217, 217, 217, 0.5)" >
            <label style="font-weight: 600" >Select Map Region</label>
            <select [(ngModel)]="regionType" (change)="onSelectionChanged($event)">
                <option>Australia</option>
                <option>Caribbean</option>
                <option>Egypt</option>
                <option>European</option>
                <option>Japan</option>
                <option>Hawaii</option>
                <option>Poland</option>
                <option>South Africa</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Uruguay</option>
            </select>
            <label style="font-weight: 600">Map Geographic Rect</label>

            <div class="horizontal" >
                <div class="vertical"  style="margin-right: 1rem">
                    <label >{{geoT}}</label>
                    <label >{{geoL}}</label>
                </div>
                <div class="vertical">
                    <label >{{geoH}}</label>
                    <label >{{geoW}}</label>
                </div>
            </div>

            <label style="font-weight: 600">Map Window Rect</label>
            <div class="horizontal">
                <div class="vertical" style="margin-right: 1rem">
                    <label >{{winT}}</label>
                    <label >{{winL}}</label>
                </div>
                <div class="vertical">
                    <label >{{winH}}</label>
                    <label >{{winW}}</label>
                </div>
            </div>

            <label style="font-weight: 600">Map Window Position</label>
            <div class="horizontal">
                <div class="vertical" style="margin-right: 1rem">
                    <label >Horizontal:</label>
                    <label >Vertical:</label>
                    <label >Scale:</label>
                </div>
                <div class="vertical">
                    <label >{{posHorizontal}}</label>
                    <label >{{posVertical}}</label>
                    <label >{{scale}}</label>
                </div>
            </div>

            <label style="font-weight: 600">Map Hover Coordinates</label>
            <div class="horizontal">
                <div class="vertical" style="margin-right: 1rem">
                    <label >Longitude: </label>
                    <label >Latitude: </label>
                    <label >Window X: </label>
                    <label >Window Y: </label>
                    <label >Pixel X: </label>
                    <label >Pixel Y: </label>
                </div>
                <div class="vertical">
                    <label >{{mapHoverLatitude}}</label>
                    <label >{{mapHoverLongitude}}</label>
                    <label >{{mapHoverX}}</label>
                    <label >{{mapHoverY}}</label>
                    <label >{{mapHoverPixelX}}</label>
                    <label >{{mapHoverPixelY}}</label>
                </div>
            </div>

        </div>
    </div>

    <div class="overlay-bottom-right">Imagery Tiles: in ESRI/ArcGIS</div>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Geographic Coordinates

You navigate map content within geographic region bound by these coordinates:

- horizontally from 180°E (negative) to 180°W (positive) longitudes
- vertically from 85°S (negative) to 85°N (positive) latitudes

This code snippet shows how navigate the map using geographic coordinates:

## Window Coordinates

Also, you can navigate map content within window rectangle bound by these relative coordinates:

- horizontally from 0.0 to 1.0 values
- vertically from 0.0 to 1.0 values

This code snippet shows how navigate the map using relative window coordinates:

## Properties

The following table summarizes properties that can be used in navigation of the [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) control:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|[`windowRect`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect)| Rect | Sets new position and size of the navigation window in viewable area of the map content. Rect with 0, 0, 1, 1 values will zoom out the entire map content in the navigation window. |
|[`windowScale`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#windowScale)| number | Sets new size of the navigation window in of the map control. It is equivalent smallest value of Width or Height stored in the [`windowRect`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect) property |
|[`windowPositionHorizontal`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowPositionHorizontal)| number | Sets new horizontal position of the navigation window’s anchor point from the left edge of the map control. It is equivalent to value stored in the Left of the [`windowRect`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect) property. |
|[`windowPositionVertical`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowPositionVertical)| number | Sets new vertical position of the navigation window’s anchor point from the top edge of the map control. It is equivalent to value stored in the Top of the [`windowRect`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect) property. |
|[`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowRect)| Rect | Indicates current position and size of the navigation window in viewable area of the map content. Rect with 0, 0, 1, 1 values displays the entire map content in the navigation window. |
|[`actualWindowScale`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#actualWindowScale)| number | Indicates current size of the navigation window in of the map control. It is equivalent to smallest value of Width or Height stored in the [`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowRect) property |
|[`actualWindowPositionHorizontal`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowPositionHorizontal)| number | Indicates current horizontal position of the navigation window’s anchor point from the left edge of the map control. It is equivalent to value stored in the Left of the [`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowRect) property. |
|[`actualWindowPositionVertical`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowPositionVertical)| number | Indicates vertical position of the navigation window’s anchor point from the top edge of the map control. It is equivalent to value stored in the Top of the [`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowRect) property. |

## API References

- [`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#actualWindowRect)
- [`windowRect`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect)
- [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html)
- [`zoomable`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#zoomable)
