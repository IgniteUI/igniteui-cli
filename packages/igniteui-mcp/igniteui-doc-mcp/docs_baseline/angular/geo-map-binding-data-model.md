---
title: "Angular Map | Data Visualization Tools | Binding Geographic Data Models | Infragistics"
description: Use Infragistics' Angular map to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps. View Ignite UI for Angular map demos!
keywords: "Angular map, binding data models, Ignite UI for Angular, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "GeographicScatterAreaSeries", "GeographicHighDensityScatterSeries", "GeographicProportionalSymbolSeries", "GeographicContourLineSeries", "GeographicShapeSeries", "GeographicPolylineSeries", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
llms:
  description: "The Ignite UI for Angular map component is designed to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps."
platformType: xplat
_tocName: Binding Data Model
_premium: true
---
# Angular Binding Geographic Data Models

The Ignite UI for Angular map component is designed to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps. The [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=dataSource) property of geographic series is used for the purpose of binding to data models. This property can be bound an array of custom objects.

## Angular Binding Geographic Data Models Example

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
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from "igniteui-angular-charts";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldUtility } from "./WorldUtility";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

    @ViewChild("map", { static: true })
    public map: IgxGeographicMapComponent;
    @ViewChild("pointSeriesTooltipTemplate", { static: true })
    public pointSeriesTooltipTemplate: TemplateRef<object>;
    @ViewChild("polylineSeriesTooltipTemplate", { static: true })
    public polylineSeriesTooltipTemplate: TemplateRef<object>;
    public flights: any[];
    constructor() {
    }

    public ngAfterViewInit(): void {
        const cityDAL = { lat:  32.763, lon: -96.663, country: "US", name: "Dallas" };
        const citySYD = { lat: -33.889, lon: 151.028, country: "Australia", name: "Sydney" };
        const cityNZL = { lat: -36.848, lon: 174.763, country: "New Zealand", name: "Auckland" };
        const cityQTR = { lat: 25.285, lon:  51.531,  country: "Qatar", name: "Doha" };
        const cityPAN = { lat:  8.949, lon: -79.400,  country: "Panama", name: "Panama" };
        const cityCHL = { lat: -33.475, lon: -70.647, country: "Chile", name: "Santiago" };
        const cityJAP = { lat:  35.683, lon: 139.809, country: "Japan", name: "Tokyo" };
        const cityALT = { lat: 33.795,  lon: -84.349, country: "US", name: "Atlanta" };
        const cityJOH = { lat: -26.178, lon: 28.004,  country: "South Africa", name: "Johannesburg" };
        const cityNYC = { lat: 40.750, lon: -74.0999, country: "US", name: "New York" };
        const citySNG = { lat:  1.229, lon: 104.177,  country: "Singapore", name: "Singapore" };
        const cityMOS = { lat: 55.750, lon:  37.700,  country: "Russia", name: "Moscow" };
        const cityROM = { lat:  41.880, lon: 12.520,  country: "Italy", name: "Rome" };
        const cityLAX = { lat: 34.000, lon: -118.25,  country: "US", name: "Los Angeles" };

        this.flights = [
            { origin: cityDAL, dest: citySNG, color: "Green" },
            { origin: cityMOS, dest: cityNZL, color: "Red" },
            { origin: cityCHL, dest: cityJAP, color: "Blue" },
            { origin: cityPAN, dest: cityROM, color: "Orange" },
            { origin: cityALT, dest: cityJOH, color: "Black" },
            { origin: cityNYC, dest: cityQTR, color: "Purple" },
            { origin: cityLAX, dest: citySYD, color: "Gray" }
        ];

        for (const flight of this.flights) {
            this.createPolylineSeries(flight);
            this.createSymbolSeries(flight);
        }
    }

    public createSymbolSeries(flight: any) {
        const geoLocations = [flight.origin, flight.dest ];
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = geoLocations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = flight.color;
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.pointSeriesTooltipTemplate;

        this.map.series.add(symbolSeries);
    }

    public createPolylineSeries(flight: any) {
        const geoPath = WorldUtility.calcPaths(flight.origin, flight.dest);
        const geoDistance = WorldUtility.calcDistance(flight.origin, flight.dest);
        const geoRoutes = [
            {
              dest: flight.dest,
              distance: geoDistance,
              origin: flight.origin,
              points: geoPath,
              time: geoDistance / 850
        }];

        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = geoRoutes;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStrokeThickness = 9;
        lineSeries.shapeOpacity = 0.5;
        lineSeries.shapeStroke = flight.color;
        lineSeries.tooltipTemplate = this.polylineSeriesTooltipTemplate;
        this.map.series.add(lineSeries);
    }
}
```
```html
<div class="container vertical">
    <igx-geographic-map #map
        width="100%"
        height="100%"
        zoomable="true" >
    </igx-geographic-map>

    <ng-template let-series="series" let-item="item" #pointSeriesTooltipTemplate>
            <div>
                <span [style.color]="series.brush">{{item.country}}</span>
            </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #polylineSeriesTooltipTemplate>
        <div>
            <span [style.color]="series.brush">Departure: {{item.origin.country}}</span><br/>
            <span [style.color]="series.brush">Arrival: {{item.dest.country}}</span>
        </div>
    </ng-template>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

The following table summarized data structures required for each type of geographic series:

| Geographic Series  | Properties   | Description   |
|--------------|---------------| ---------------|
| [`IgxGeographicSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent) | [`longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=longitudeMemberPath), [`latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=latitudeMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates |
| [`IgxGeographicHighDensityScatterSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicHighDensityScatterSeriesComponent) | [`longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicHighDensityScatterSeriesComponent&member=longitudeMemberPath), [`latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicHighDensityScatterSeriesComponent&member=latitudeMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates |
| [`IgxGeographicProportionalSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent) | [`longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=longitudeMemberPath), [`latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=latitudeMemberPath), [`radiusMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent&member=radiusMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for size/radius of symbols |
| [`IgxGeographicScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent) | [`longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=longitudeMemberPath), [`latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=latitudeMemberPath), [`colorMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent&member=colorMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values |
| [`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent) | [`longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=longitudeMemberPath), [`latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=latitudeMemberPath), [`valueMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent&member=valueMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values |
|[`IgxGeographicShapeSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent)|[`shapeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent&member=shapeMemberPath)|Specifies the name of data column of [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicShapeSeriesComponent&member=dataSource) items that contains the geographic points of shapes. This property must be mapped to an array of arrays of objects with x and y properties. |
|[`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent)|[`shapeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent&member=shapeMemberPath)|Specifies the name of data column of [`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent&member=dataSource) items that contains the geographic coordinates of lines. This property must be mapped to an array of arrays of objects with x and y properties. |

## Code Snippet
The following code shows how to bind the [`IgxGeographicSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent) to a custom data model that contains geographic locations of some cities of the world stored using longitude and latitude coordinates. Also, we use the [`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent) to plot shortest geographic path between these locations using the great circle maths of `MapGeodesics`, shown in full with the code below

```html
<igx-geographic-map
    #geoMap
    height="100%"
    width="100%"
    zoomable="true">
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent, IgxGeographicPolylineSeriesComponent, IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps';
import { MarkerType } from 'igniteui-angular-charts';
// ...
/**
 * Great circle maths for a map: the path between two locations, and how far apart they are.
 */
export class MapGeodesics {

    // calculate geo-paths between two locations using great circle formula
    public calcPaths(origin: any, dest: any): any[] {
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
    public calcBearing(origin: any, dest: any): number
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
    public calcDestination(origin: any, bearing: number, distance: number): any {
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
    public calcDistance(origin: any, dest: any): number {
        origin = this.toRadianLocation(origin);
        dest = this.toRadianLocation(dest);
        let sinProd = Math.sin(origin.lat) * Math.sin(dest.lat);
        let cosProd = Math.cos(origin.lat) * Math.cos(dest.lat);
        let lonDelta = (dest.lon - origin.lon);

        let angle = Math.acos(sinProd + cosProd * Math.cos(lonDelta));
        let distance = angle * 6371.0;
        return distance; // * 6371.0; // in km
    }

    public toRadianLocation(geoPoint: any): any {
        let x = this.toRadians(geoPoint.lon);
        let y = this.toRadians(geoPoint.lat);
        return { lon: x, lat: y };
    }

    public toRadians(degrees: number): number
    {
        return degrees * Math.PI / 180;
    }

    public toDegrees(radians: number): number {
        return (radians * 180.0 / Math.PI);
    }

    public toDegreesNormalized(radians: number): number
    {
        let degrees = this.toDegrees(radians);
        degrees = (degrees + 360) % 360;
        return degrees;
    }
}
// ...
private mapGeodesics: MapGeodesics = new MapGeodesics();

public mapBindingDataModelOnViewInit(): void {
    var geoMap = this.geoMap;
    geoMap.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.6, height: 0.6 });

    var cityDAL = { lat: 32.763, lon: -96.663, country: "US", name: "Dallas" };
    var citySYD = { lat: -33.889, lon: 151.028, country: "Australia", name: "Sydney" };
    var cityNZL = { lat: -36.848, lon: 174.763, country: "New Zealand", name: "Auckland" };
    var cityQTR = { lat: 25.285, lon: 51.531, country: "Qatar", name: "Doha" };
    var cityPAN = { lat: 8.949, lon: -79.4, country: "Panama", name: "Panama" };
    var cityCHL = { lat: -33.475, lon: -70.647, country: "Chile", name: "Santiago" };
    var cityJAP = { lat: 35.683, lon: 139.809, country: "Japan", name: "Tokyo" };
    var cityALT = { lat: 33.795, lon: -84.349, country: "US", name: "Atlanta" };
    var cityJOH = { lat: -26.178, lon: 28.004, country: "South Africa", name: "Johannesburg" };
    var cityNYC = { lat: 40.75, lon: -74.0999, country: "US", name: "New York" };
    var citySNG = { lat: 1.229, lon: 104.177, country: "Singapore", name: "Singapore" };
    var cityMOS = { lat: 55.75, lon: 37.7, country: "Russia", name: "Moscow" };
    var cityROM = { lat: 41.88, lon: 12.52, country: "Italy", name: "Roma" };
    var cityLAX = { lat: 34.0, lon: -118.25, country: "US", name: "Los Angeles" };

    var flights = [
        { origin: cityDAL, dest: citySNG, color: "Green" },
        { origin: cityMOS, dest: cityNZL, color: "Red" },
        { origin: cityCHL, dest: cityJAP, color: "Blue" },
        { origin: cityPAN, dest: cityROM, color: "Orange" },
        { origin: cityALT, dest: cityJOH, color: "Black" },
        { origin: cityNYC, dest: cityQTR, color: "Purple" },
        { origin: cityLAX, dest: citySYD, color: "Gray" }
    ];

    // the route first, so that the cities at either end of it draw on top
    for (var i = 0; i < flights.length; i++) {
        this.addFlightRoute(geoMap, flights[i]);
        this.addFlightCities(geoMap, flights[i]);
    }
}

/** the flight itself, as a great circle path between its two cities */
public addFlightRoute(geoMap: any, flight: any): void {
    var geodesics = this.mapGeodesics;
    var geoPath = geodesics.calcPaths(flight.origin, flight.dest);
    var geoDistance = geodesics.calcDistance(flight.origin, flight.dest);
    var geoRoutes = [{
        points: geoPath,
        origin: flight.origin,
        dest: flight.dest,
        distance: geoDistance,
        time: geoDistance / 850
    }];

    var lineSeries = new IgxGeographicPolylineSeriesComponent();
    lineSeries.dataSource = geoRoutes;
    lineSeries.shapeMemberPath = "points";
    lineSeries.shapeStrokeThickness = 9;
    lineSeries.shapeOpacity = 0.5;
    lineSeries.shapeStroke = flight.color;
    geoMap.series.add(lineSeries);
}

/** the cities at either end, in the flight's own colour */
public addFlightCities(geoMap: any, flight: any): void {
    var geoLocations = [flight.origin, flight.dest];

    var symbolSeries = new IgxGeographicSymbolSeriesComponent();
    symbolSeries.dataSource = geoLocations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerBrush = "White";
    symbolSeries.markerOutline = flight.color;
    symbolSeries.thickness = 1;
    geoMap.series.add(symbolSeries);
}
```

## API References
[`IgxGeographicContourLineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicContourLineSeriesComponent)
[`IgxGeographicHighDensityScatterSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicHighDensityScatterSeriesComponent)
[`IgxGeographicPolylineSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicPolylineSeriesComponent)
[`IgxGeographicProportionalSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicProportionalSymbolSeriesComponent)
[`IgxGeographicScatterAreaSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicScatterAreaSeriesComponent)
[`IgxGeographicSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent)
