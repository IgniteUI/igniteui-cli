---
title: "Angular Map | Data Visualization Tools | Binding JSON Files | Infragistics"
description: Learn how to use Infragistics' Angular map to display data that contains geographic locations from view models or geographic locations loaded from JSON files. View Ignite UI for Angular map demos!
keywords: "Angular map, JSON files, Ignite UI for Angular, Infragistics, data binding"
license: commercial
mentionedTypes: ["GeographicMap", "Series"]
namespace: Infragistics.Controls.Maps
llms:
  description: "With the Ignite UI for Angular map, you can plot geographic data loaded from various file types."
platformType: xplat
_tocName: Binding JSON File
_premium: true
---
# Angular Binding JSON Files with Geographic Locations

With the Ignite UI for Angular map, you can plot geographic data loaded from various file types. For example, you can load geographic locations from JavaScript Object Notation (JSON) file.

## Angular Binding JSON Files with Geographic Locations Example

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
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";

@Component({
  standalone: false,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})

export class AppComponent implements AfterViewInit {

    @ViewChild("map", { static: true })
    public map: IgxGeographicMapComponent;
    @ViewChild("template", { static: true })
    public tooltip: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
        this.componentDidMount();
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder
        fetch("https://static.infragistics.com/xplatform/data/WorldCities.json")
            .then((response) => response.json())
            .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(jsonData: any[]) {
        // console.log("loaded WorldCities.json " + jsonData.length);

        const geoLocations: any[] = [];
        // parsing JSON data and using only cities that are capitals
        for (const jsonItem of jsonData) {
            const location = {
                city: jsonItem.name,
                country: jsonItem.country,
                latitude: jsonItem.lat,
                longitude: jsonItem.lon,
                population: jsonItem.pop
            };
            geoLocations.push(location);
        }

        // creating symbol series with loaded data
        const geoSeries = new IgxGeographicSymbolSeriesComponent();
        geoSeries.dataSource = geoLocations;
        geoSeries.markerType = MarkerType.Circle;
        geoSeries.latitudeMemberPath  = "latitude";
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.markerBrush = "LightGray";
        geoSeries.markerOutline = "Black";
        geoSeries.tooltipTemplate = this.tooltip;

        // adding symbol series to the geographic amp
        this.map.series.add(geoSeries);
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

    <ng-template let-series="series" let-item="item" #template>
        <div>
            <span >{{item.city}}</span>
        </div>
    </ng-template>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Data Example
Here is an example of data from JSON file:

```json
[
    { "cap": false, "pop":  0.47, "lat":  68.96, "lon":   33.09, "country": "Russia" ,    "name": "Murmansk" },
    { "cap": true,  "pop":  1.65, "lat":  53.90, "lon":   27.58, "country": "Byelarus" ,  "name": "Minsk" },
    { "cap": true,  "pop":  0.58, "lat":  54.69, "lon":   25.28, "country": "Lithuania" , "name": "Vilnius" },
 // ...
]
```

## Code Snippet
The following code loads and binds [`IgxGeographicHighDensityScatterSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicHighDensityScatterSeriesComponent) in the map component to an array of objects created from loaded JSON file with geographic locations:

```html
<igx-geographic-map
    #geoMap
    height="100%"
    width="100%"
    zoomable="true">
</igx-geographic-map>
```

```ts
var map = this.geoMap;
var url = "https://static.infragistics.com/xplatform/data/WorldCities.json";
fetch(url)
    .then((response) => response.json())
    .then((data: any[]) => {
        var geoLocations: any[] = [];
        // parsing JSON data and using only cities that are capitals
        for (var item of data) {
            if (!item.cap) continue;
            // the series binds to member names, so each item is projected onto them --
            // the shape the other platforms give a type of its own
            geoLocations.push({
                latitude: item.lat,
                longitude: item.lon,
                population: item.pop,
                city: item.name,
                country: item.country
            });
        }
        var series = new IgxGeographicSymbolSeriesComponent();
        series.dataSource = geoLocations;
        series.latitudeMemberPath = "latitude";
        series.longitudeMemberPath = "longitude";
        series.markerBrush = "rgba(255, 255, 255, 1.0)";
        series.markerOutline = "rgba(135, 5, 255, 1.0)";
        series.markerThickness = 1;
        series.markerType = MarkerType.Circle;
        map.series.add(series);
    });
```

## API References
[`IgxGeographicHighDensityScatterSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicHighDensityScatterSeriesComponent)
[`IgxGeographicSymbolSeriesComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent)
[`IgxGeographicMapComponent`](mcp:get_api_reference?platform=angular&component=IgxGeographicMapComponent)
[`dataSource`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=dataSource)
[`latitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=latitudeMemberPath)
[`longitudeMemberPath`](mcp:get_api_reference?platform=angular&component=IgxGeographicSymbolSeriesComponent&member=longitudeMemberPath)
