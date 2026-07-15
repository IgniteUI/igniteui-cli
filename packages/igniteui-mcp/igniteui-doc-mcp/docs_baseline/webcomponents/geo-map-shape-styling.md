---
title: Web Components Map | Data Visualization Tools | Shape Styling | Conditional Formatting | Infragistics
_description: Learn how to apply custom styling to Infragistics' Web Components map's shape series. Check out Ignite UI for Web Components map tutorials!
_keywords: Web Components map, custom styling, Ignite UI for Web Components, Infragistics, conditional formatting, shape styling
_license: commercial
mentionedTypes: ["XamGeographicMap", "GeographicShapeSeries", "Series"]
_tocName: Shape Styling
_premium: true
---

# Web Components Shape Styling on Geographic Shape Series

This topic explains how to apply custom styling to the [`IgcGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicshapeseriescomponent.html) in the Web Components [`IgcGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html).

## Web Components Shape Styling on Geographic Shape Series Example

```typescript
/* tslint:disable:prefer-const */

import { Style } from 'igniteui-webcomponents-core';

export abstract class ShapeStyling {
  public defaultStroke = 'black';
  public defaultFill = 'gray';
  public defaultThickness = 0.5;
  public defaultOpacity = 1.0;
  public defaultStyle = new Style();

  constructor() {
    this.defaultStyle = new Style();
    this.defaultStyle.stroke = this.defaultStroke;
    this.defaultStyle.fill = this.defaultFill;
    this.defaultStyle.opacity = this.defaultOpacity;
    this.defaultStyle.strokeThickness = this.defaultThickness;
  }

  public abstract generate(record: any): Style;

  public getValue(itemMemberPath: string, item: any): any {
    let itemValue = null;

    if (item.fieldValues !== undefined) { // .hasOwnProperty("fieldValues")) {
      if (item.fieldsNames.indexOf(itemMemberPath) >= 0) {
        itemValue = item.fieldValues[itemMemberPath];
      } else {
        console.log('WARNING: ShapefileRecord does not have ' + itemMemberPath + ' in fieldValues property');
      }
    } else if (item.hasOwnProperty(itemMemberPath)) {
      itemValue = item[itemMemberPath];
    } else {
      console.log('WARNING: Shape data item does not have ' + itemMemberPath + ' property');
    }
    return itemValue;
  }
}

export class ShapeRandomStyling extends ShapeStyling {

  public shapeThickness = 0.5;
  public shapeOpacity = 1.0;
  public shapeStrokeColors = ['black'];
  public shapeFillColors   = ['red', 'orange', 'yellow'];

  public styleMappings = new Map<string, Style>();

  public generate(record: any): Style {
    const id = record.fieldValues.Name || this.getRandomValue(0, 1000);

    if (this.styleMappings.has(id)) {
      return this.styleMappings.get(id);
    } else {
      const randStroke = this.getRandomItem(this.shapeStrokeColors);
      const randFill = this.getRandomItem(this.shapeFillColors);
      const shapeStyle = new Style();
      shapeStyle.stroke = this.shapeStrokeColors[randStroke];
      shapeStyle.fill = this.shapeFillColors[randFill];
      shapeStyle.opacity = this.shapeOpacity;
      shapeStyle.strokeThickness = this.shapeThickness;
      this.styleMappings.set(id, shapeStyle);
      return shapeStyle;
    }
  }

  public getRandomValue(min: number, max: number): number {
      return Math.round(min + (Math.random() * (max - min)));
  }
  public getRandomItem(array: any[]): any {
    return this.getRandomValue(0, array.length - 1);
  }
}

export class ShapeScaleStyling extends ShapeStyling {

  public shapeThickness = 0.5;
  public shapeOpacity = 1.0;
  public shapeStrokeColors = ['black'];
  public shapeFillColors   = ['red', 'orange', 'yellow'];

  public itemMemberPath = '';
  public itemMinimumValue = 0;
  public itemMaximumValue = 1000;

  public isLogarithmic = true;

  public generate(record: any): Style {

    let itemValue = this.getValue(this.itemMemberPath, record);
    if (itemValue === null) {
      return this.defaultStyle;
    }

    let fillColor = this.defaultFill;
    let strokeColor = this.defaultStroke;
    let scaleValue = this.getScaledValue(itemValue);

    if (!Number.isNaN(scaleValue)) {
      let fillIndex = Math.round(scaleValue * (this.shapeFillColors.length - 1));
      let strokeIndex = Math.round(scaleValue * (this.shapeStrokeColors.length - 1));
      fillColor = this.shapeFillColors[fillIndex];
      strokeColor = this.shapeStrokeColors[strokeIndex];
    }

    const shapeStyle = new Style();
    shapeStyle.fill = fillColor;
    shapeStyle.stroke  = strokeColor;
    shapeStyle.strokeThickness = this.shapeThickness;
    shapeStyle.opacity = this.shapeOpacity;
    return shapeStyle;
  }

  public getScaledValue(value: number): number {

      if (!Number.isFinite(value) || Number.isNaN(value)) { return Number.NaN; }

      let min = !Number.isFinite(this.itemMinimumValue) || Number.isNaN(this.itemMinimumValue) ? 0 : this.itemMinimumValue;
      let max = !Number.isFinite(this.itemMaximumValue) || Number.isNaN(this.itemMaximumValue) ? 1000 : this.itemMaximumValue;

      if (value < min || value > max) { return Number.NaN; }

      if (this.isLogarithmic) {
        return this.getLogarithmicValue(min, max, value);
      } else {
        return this.getLinearValue(min, max, value);
      }
  }

  public getLogarithmicValue(min: number, max: number, value: number) {
      if (!Number.isFinite(value)) { return Number.NaN; }

      let newMin = Math.log10(min);
      let newMax = Math.log10(max);
      let newVal = Math.log10(value);

      if (!Number.isFinite(newMin)) { newMin = 0.0; }
      if (!Number.isFinite(newMax)) { newMax = 1000; }

      if (newVal < 0) { newVal = 0.0; }

      return this.getLinearValue(newMin, newMax, newVal);
  }

  public getLinearValue(min: number, max: number, value: number) {

      if (!Number.isFinite(value)) { return Number.NaN; }

      // if the value is outside the range
      if (value < min || value > max) { return Number.NaN; }

      let scaledValue = (value - min) / (max - min);
      return scaledValue;
  }

}

export class ShapeRangeStyling extends ShapeStyling {

  public itemMemberPath = '';
  public ranges: ShapeRange[] = [];

  constructor() {
    super();
    this.ranges.push({ minimum: 0, maximum: 50, fill: 'yellow'} );
    this.ranges.push({ minimum: 0, maximum: 100, fill: 'red'} );
  }

  public generate(record: any): Style {
    let itemValue = this.getValue(this.itemMemberPath, record);
    if (itemValue === null) {
      return this.defaultStyle;
    }

    for (const range of this.ranges) {
      if (range.minimum <= itemValue && itemValue < range.maximum) {
        const shapeStyle = new Style();
        shapeStyle.opacity = range.opacity || this.defaultOpacity;
        shapeStyle.fill    = range.fill || this.defaultFill;
        shapeStyle.stroke  = range.stroke || this.defaultStroke;
        shapeStyle.strokeThickness = range.strokeThickness || this.defaultThickness;
        return shapeStyle;
      }
    }
    return this.defaultStyle;
  }
}

export class ShapeRange {

  public minimum: number;
  public maximum: number;

  public opacity?: number;
  public fill: string;
  public stroke?: string;
  public strokeThickness?: number;

}

export class ShapeComparisonStyling extends ShapeStyling {

  public itemMemberPath = '';
  public itemMappings: ShapeComparison[] = [];

  public generate(record: any): Style {

    let itemValue = this.getValue(this.itemMemberPath, record);
    if (itemValue === null || itemValue === "") {
      return this.defaultStyle;
    }

    for (const mapping of this.itemMappings) {
      if (mapping.itemValue === itemValue) {
        const shapeStyle = new Style();
        shapeStyle.opacity = mapping.opacity || this.defaultOpacity;
        shapeStyle.fill    = mapping.fill || this.defaultFill;
        shapeStyle.stroke  = mapping.stroke || this.defaultStroke;
        shapeStyle.strokeThickness = mapping.strokeThickness || this.defaultThickness;
        return shapeStyle;
      }
    }

    return this.defaultStyle;
  }
}

export class ShapeComparison {
  public itemValue: string;

  public opacity?: number;
  public fill: string;
  public stroke?: string;
  public strokeThickness?: number;
}
```
```typescript
export class WorldUtils {

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
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Required Imports

Shape styling requires that you import the following classes:

```ts
import { IgcGeographicShapeSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcStyleShapeEventArgs } from 'igniteui-webcomponents-charts';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
import { IgcShapefileRecord } from 'igniteui-webcomponents-core';
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

this.geoSeries = new IgcGeographicShapeSeriesComponent();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgcGeographicShapeSeriesComponent, args: IgcStyleShapeEventArgs) {
    const itemRecord = args.item as IgcShapefileRecord;
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

this.geoSeries = new IgcGeographicShapeSeriesComponent();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgcGeographicShapeSeriesComponent, args: IgcStyleShapeEventArgs) {
    const itemRecord = args.item as IgcShapefileRecord;
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

this.geoSeries = new IgcGeographicShapeSeriesComponent();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgcGeographicShapeSeriesComponent, args: IgcStyleShapeEventArgs) {
    const itemRecord = args.item as IgcShapefileRecord;
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

this.geoSeries = new IgcGeographicShapeSeriesComponent();
this.geoSeries.styleShape = this.onStylingShape;
// ...
public onStylingShape(s: IgcGeographicShapeSeriesComponent, args: IgcStyleShapeEventArgs) {
    const itemRecord = args.item as IgcShapefileRecord;
    const shapeStyle = this.shapeComparisonStyling.getStyle(itemRecord);
    args.shapeOpacity = shapeStyle.opacity;
    args.shapeFill = shapeStyle.fill;
    args.shapeStroke = shapeStyle.stroke;
    args.shapeStrokeThickness = shapeStyle.strokeThickness;
}
```

## API References

- [`IgcGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicshapeseriescomponent.html)
- [`IgcGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html)
