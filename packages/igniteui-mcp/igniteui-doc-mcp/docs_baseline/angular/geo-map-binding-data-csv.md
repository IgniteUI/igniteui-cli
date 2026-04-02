---
title: Angular Map | Data Visualization Tools | Binding CSV Data | Infragistics
_description: Learn how to use Infragistics' Angular map to display data that contains geographic locations from view models or geographic locations loaded from CSV files. View Ignite UI for Angular map demos!
_keywords: Angular map, plot data, Ignite UI for Angular, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "GeographicHighDensityScatterSeries"]
namespace: Infragistics.Controls.Maps
_tocName: Binding CSV File
_premium: true
---

# Angular Binding CSV Files with Geographic Locations

With the Ignite UI for Angular map component, you can plot geographic data loaded from various file types. For example, you can load geographic locations from a comma separated values (CSV) file.

## Angular Binding CSV Files with Geographic Locations Example

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
import { IgxGeographicHighDensityScatterSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";

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
        fetch("https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv")
            .then((response) => response.text())
            .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(csvData: string) {
        const csvLines = csvData.split("\n");
        // console.log("loaded UsaCitiesPopulation.csv " + csvLines.length);

        // parsing CSV data and creating geographic locations
        const geoLocations: any[] = [];
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(",");
            const location = {
                code: columns[4],
                county: columns[5],
                density: Number(columns[6]),
                latitude:  Number(columns[1]),
                longitude: Number(columns[2]),
                name:  columns[0],
                population: Number(columns[7]),
                state: columns[3]
            };
            geoLocations.push(location);
        }

        // creating HD series with loaded data
        const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
        geoSeries.dataSource = geoLocations;
        geoSeries.latitudeMemberPath  = "latitude";
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.heatMaximumColor = "Red";
        geoSeries.heatMinimumColor = "Black";
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.mouseOverEnabled = true;

        // adding symbol series to the geographic amp
        this.map.series.add(geoSeries);

        // zooming to bound of lower 48-states
        const geoBounds = {
            height: Math.abs(50 - 15),
            left: -130,
            top: 15,
            width: Math.abs(-130 + 65)
        };
        this.map.zoomToGeographic(geoBounds);
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
            <span>County: {{item.county}}</span><br/>
            <span>Population: {{item.density}} K</span>
        </div>
    </ng-template>

</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Data Example

Here is an example of data from CSV file:

```ts
City,Lat,Lon,State,Code,County,Density,Population
New York,40.7856,-74.0093,New Jersey,NJ,Hudson,21057,54227
Dundee,42.5236,-76.9775,New York,NY,Yates,579,1650
```

## Code Snippet

The following code loads and binds [`IgxGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html) in the map component to an array of objects created from loaded CSV file with geographic locations.

```html
<div className="sampleRoot" >
<igx-geographic-map #map
    width="700px"
    height="500px"
    zoomable="true" >
</igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #template>
    <div>
        <span>
            County: {{item.county}}
        </span>
    <br/>
        <span>
            Population: {{item.density}} K
        </span>
    </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxGeographicHighDensityScatterSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-binding-geographic-csv_files",
  styleUrls: ["./map-binding-geographic-csv_files.component.scss"],
  templateUrl: "./map-binding-geographic-csv_files.component.html"
})

export class MapBindingDataCsvComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
        this.componentDidMount();
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder
        fetch("assets/Data/UsaCities.csv")
            .then((response) => response.text())
            .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(csvData: string) {
        const csvLines = csvData.split("\n");

        // parsing CSV data and creating geographic locations
        const geoLocations: any[] = [];
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(",");
            const location = {
                code: columns[4],
                county: columns[5],
                density: Number(columns[6]),
                latitude:  Number(columns[1]),
                longitude: Number(columns[2]),
                name:  columns[0],
                population: Number(columns[7]),
                state: columns[3]
            };
            geoLocations.push(location);
        }

        // creating HD series with loaded data
        const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
        geoSeries.dataSource = geoLocations;
        geoSeries.latitudeMemberPath  = "latitude";
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.heatMaximumColor = "Red";
        geoSeries.heatMinimumColor = "Black";
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.mouseOverEnabled = true;

        // adding symbol series to the geographic amp
        this.map.series.add(geoSeries);
    }
}
```

## API References

- [`IgxGeographicHighDensityScatterSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html)
- `DataSource`
- [`latitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#latitudeMemberPath)
- [`longitudeMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#longitudeMemberPath)
- [`heatMaximumColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatMaximumColor)
- [`heatMinimumColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatMinimumColor)
- [`pointExtent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#pointExtent)
