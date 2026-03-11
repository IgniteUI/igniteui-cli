---
title: Angular Map | Data Visualization Tools | Shape Styling | Conditional Formatting | Infragistics
_description: Learn how to apply custom styling to Infragistics' Angular map's shape series. Check out Ignite UI for Angular map tutorials!
_keywords: Angular map, custom styling, Ignite UI for Angular, Infragistics, conditional formatting, shape styling
_license: commercial
mentionedTypes: ["XamGeographicMap", "GeographicShapeSeries", "Series"]
_tocName: Shape Styling
_premium: true
---

# Angular Shape Styling on Geographic Shape Series

This topic explains how to apply custom styling to the [`IgxGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html) in the Angular [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html).

## Angular Shape Styling on Geographic Shape Series Example

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
import { IgxShapeDataSource } from "igniteui-angular-core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicShapeSeriesComponent } from "igniteui-angular-maps";

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

    public data: any;

    constructor() {
    }

    public ngAfterViewInit(): void {
        const sds = new IgxShapeDataSource();
        sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCountries.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCountries.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        // console.log("loaded WorldCountries.shp " + shapeRecords.length);

        const countriesNATO: any[] = [];
        const countriesSCO: any[] = [];
        const countriesARAB: any[] = [];
        const countriesOther: any[] = [];

        for (const record of shapeRecords) {
            // using field/column names from .DBF file
            const country = {
                name: record.fieldValues.NAME,
                org: record.fieldValues.ALLIANCE,
                points: record.points,
                pop: (record.fieldValues.POPULATION / 1000000).toFixed(1)
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

        this.addSeriesWith(countriesNATO, "rgb(32, 146, 252)", "NATO");
        this.addSeriesWith(countriesSCO, "rgb(252, 32, 32)", "SCO");
        this.addSeriesWith(countriesARAB, "rgb(14, 194, 14)", "AL");
        this.addSeriesWith(countriesOther, "rgb(146, 146, 146)", "Other");
    }

    public addSeriesWith(shapeData: any[], shapeBrush: string, shapeTitle: string) {

        const geoSeries = new IgxGeographicShapeSeriesComponent();
        geoSeries.dataSource = shapeData;
        geoSeries.shapeMemberPath = "points";
        geoSeries.brush = shapeBrush;
        geoSeries.outline = "Black";
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.thickness = 1;
        geoSeries.title = shapeTitle;

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
    <!--
    <div class="my-legend">
        <div id="legendTitle">Geographic Map: Polygon Series</div>
        <div class="legend-scale">
            <ul class="legend-labels">
            <li><span style="background:rgb(219, 84, 5)"></span>China/Russia/Middle East/India</li>
            <li><span style="background:rgb(32, 146, 252)"></span>Americas & UK</li>
            <li><span style="background:rgb(14, 194, 14)"></span>Africa</li>
            </ul>
        </div>
    </div> -->

    <ng-template let-series="series" let-item="item" #template>
        <div>
            <div *ngIf="item.org;then hasOrg; else notOrg" ></div>
            <span>{{item.name}}: </span>
            <span>{{item.pop}} M</span>
        </div>
        <ng-template #hasOrg>
            <span [style.color]="series.brush">{{item.org}}</span><br />
        </ng-template>
        <ng-template #notOrg>
            <span></span>
        </ng-template>
    </ng-template>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Required Imports

Shape styling requires that you import the following classes:

```ts
import { IgxGeographicShapeSeries } from 'igniteui-angular-maps';
import { IgxStyleShapeEventArgs } from 'igniteui-angular-charts';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxShapefileRecord } from 'igniteui-angular-core';
```

Note that the following code examples are using the [Shape Styling Utility](geo-map-resources-shape-styling-utility.md) file that provides four different ways of styling shapes:

- [Shape Comparison Styling](#shape-comparison-styling)
- [Shape Random Styling](#shape-random-styling)
- [Shape Range Styling](#shape-range-styling)
- [Shape Scale Styling](#shape-scale-styling)

## Shape Random Styling

This code snippet creates instances of **ShapeRandomStyling** that will randomly assign fill colors to the countries of the world.

```ts
import { ShapeRandomStyling } from './ShapeStylingUtility';
// ...

this.shapeRandomStyling = new ShapeRandomStyling();
this.shapeRandomStyling.shapeStrokeColors = ['Black'];
this.shapeRandomStyling.shapeFillColors = ['#8C23D1', '#0E9759', '#B4D336', '#F2A464', '#D74545', 'DodgerBlue'];

this.geoSeries = new IgxGeographicShapeSeries();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgxGeographicShapeSeries, args: IgxStyleShapeEventArgs) {
    const itemRecord = args.item as IgxShapefileRecord;
    const shapeStyle = this.ShapeRandomStyling.getStyle(itemRecord);
    args.shapeOpacity = shapeStyle.opacity;
    args.shapeFill = shapeStyle.fill;
    args.shapeStroke = shapeStyle.stroke;
    args.shapeStrokeThickness = shapeStyle.strokeThickness;
}
```

## Shape Scale Styling

This code snippet creates instances of **ShapeScaleStyling** that will assign fill colors to shape of countries based on population scaled on logarithmic scale.

```ts
import { ShapeScaleStyling } from './ShapeStylingUtility';
// ...
this.shapeScaleStyling = new ShapeScaleStyling();
this.shapeScaleStyling.itemMinimumValue = 5000;
this.shapeScaleStyling.itemMaximumValue = 2000000000; // 2 Billions
this.shapeScaleStyling.itemMemberPath = 'Population';
this.shapeScaleStyling.isLogarithmic = true;
this.shapeScaleStyling.defaultFill = 'Gray';
this.shapeScaleStyling.shapeStrokeColors = ['Black'];
this.shapeScaleStyling.shapeFillColors = ['DodgerBlue', 'yellow', '#c2f542', '#e8c902', '#e8b602', '#e87902', 'brown'];

this.geoSeries = new IgxGeographicShapeSeries();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgxGeographicShapeSeries, args: IgxStyleShapeEventArgs) {
    const itemRecord = args.item as IgxShapefileRecord;
    const shapeStyle = this.shapeScaleStyling.getStyle(itemRecord);
    args.shapeOpacity = shapeStyle.opacity;
    args.shapeFill = shapeStyle.fill;
    args.shapeStroke = shapeStyle.stroke;
    args.shapeStrokeThickness = shapeStyle.strokeThickness;
}
```

## Shape Range Styling

This code snippet creates instances of **ShapeRangeStyling** that will assign colors to shape of countries based on ranges of population.

```ts
import { ShapeRangeStyling } from './ShapeStylingUtility';
// ...
this.shapeRangeStyling = new ShapeRangeStyling();
this.shapeRangeStyling.defaultFill = 'Gray';
this.shapeRangeStyling.itemMemberPath = 'Population';
this.shapeRangeStyling.ranges = [
    { fill: 'yellow', minimum: 5000, maximum: 10000000, },        // 5 K - 10 M
    { fill: 'orange', minimum: 10000000, maximum: 100000000, },   // 10 M - 100 M
    { fill: 'red',    minimum: 100000000, maximum: 500000000, },  // 100 M - 500 M
    { fill: 'brown',  minimum: 500000000, maximum: 2000000000, }, // 500 M - 2 B
];

this.geoSeries = new IgxGeographicShapeSeries();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgxGeographicShapeSeries, args: IgxStyleShapeEventArgs) {
    const itemRecord = args.item as IgxShapefileRecord;
    const shapeStyle = this.shapeRangeStyling.getStyle(itemRecord);
    args.shapeOpacity = shapeStyle.opacity;
    args.shapeFill = shapeStyle.fill;
    args.shapeStroke = shapeStyle.stroke;
    args.shapeStrokeThickness = shapeStyle.strokeThickness;
}
```

## Shape Comparison Styling

This code snippet creates instances of **ShapeComparisonStyling** that will assign colors to countries based on their region name in the world.

```ts
import { ShapeComparisonStyling } from './ShapeStylingUtility';
this.shapeComparisonStyling = new ShapeComparisonStyling();
this.shapeComparisonStyling.defaultFill = 'Gray';
this.shapeComparisonStyling.itemMemberPath = 'Region';
this.shapeComparisonStyling.itemMappings = [
    { fill: 'Red', itemValue: 'Eastern Europe' },
    { fill: 'Red', itemValue: 'Central Asia' },
    { fill: 'Red', itemValue: 'Eastern Asia' },
    { fill: 'Orange', itemValue: 'Southern Asia' },
    { fill: 'Orange', itemValue: 'Middle East' },
    { fill: 'Orange', itemValue: 'Northern Africa' },
    { fill: 'Yellow', itemValue: 'Eastern Africa' },
    { fill: 'Yellow', itemValue: 'Western Africa' },
    { fill: 'Yellow', itemValue: 'Middle Africa' },
    { fill: 'Yellow', itemValue: 'Southern Africa' },
    { fill: 'DodgerBlue', itemValue: 'Central America' },
    { fill: 'DodgerBlue', itemValue: 'Northern America' },
    { fill: 'DodgerBlue', itemValue: 'Western Europe' },
    { fill: 'DodgerBlue', itemValue: 'Southern Europe' },
    { fill: 'DodgerBlue', itemValue: 'Northern Europe' },
    { fill: '#22c928', itemValue: 'South America' },
    { fill: '#b64fff', itemValue: 'Melanesia' },
    { fill: '#b64fff', itemValue: 'Micronesia' },
    { fill: '#b64fff', itemValue: 'Polynesia' },
    { fill: '#b64fff', itemValue: 'Australia' },
];

this.geoSeries = new IgxGeographicShapeSeries();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgxGeographicShapeSeries, args: IgxStyleShapeEventArgs) {
    const itemRecord = args.item as IgxShapefileRecord;
    const shapeStyle = this.shapeComparisonStyling.getStyle(itemRecord);
    args.shapeOpacity = shapeStyle.opacity;
    args.shapeFill = shapeStyle.fill;
    args.shapeStroke = shapeStyle.stroke;
    args.shapeStrokeThickness = shapeStyle.strokeThickness;
}
```

## API References

- [`IgxGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html)
- [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html)
