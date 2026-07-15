---
title: Angular Map | Shape Map Resources | Infragistics
_description: Use Infragistics' Angular JavaScript map to load geo-spatial data from shape files. View Ignite UI for Angular map demos!
_keywords: Angular map, shape styling, conditional formatting, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap"]
_tocName: Shape Styling Utility
_premium: true
---

# Angular Shape Styling Utility

The resource topic provides implementation of an utility that helps with styling UI elements of [`IgxGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html) in Angular [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) component.

## Required Imports

```ts
import { IgxGeographicShapeSeries } from 'igniteui-angular-maps';
import { Style } from 'igniteui-angular-core';
```

## Utility Implementation

```ts
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

## API References

- [`IgxGeographicShapeSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html)
- [`IgxGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html)
