---
title: Angular Sparkline | Data Visualization Tools | Infragistics
_description: Use Infragistics' Angular sparkline chart control to render in a small scale layout such as a grid cell or stand alone. Learn about the Ignite UI for Angular sparkline chart configurable elements!
_keywords: Sparkline, Ignite UI for Angular, Infragistics, WinLoss, Area, Column
_license: commercial
mentionedTypes: ["XamSparkline", "SparklineDisplayType", "TrendLineType"]
namespace: Infragistics.Controls.Charts
_tocName: Sparkline Chart
_premium: true
---

# Angular Sparkline

The Ignite UI for Angular Sparkline is a lightweight charting control. It is intended for rendering within a small-scale layout such as within a grid cell but can also be rendered alone. The [`Sparkline`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sparkline.html) has several visual elements and corresponding features that can be configured and customized such as the chart type, markers, ranges, trendlines, unknown value plotting, and tooltips.

## Angular Sparkline Example

The following example shows all the different types of [`Sparkline`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sparkline.html) available. The type is defined by setting the [`displayType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#displayType) property. If the [`displayType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#displayType) property is not specified, then by default, the [`Line`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.sparklinedisplaytype.html#Line) type is displayed.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxSparklineModule } from "igniteui-angular-charts";


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
    IgxSparklineModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxSparklineComponent } from "igniteui-angular-charts";
import { SparklineDisplayType } from "igniteui-angular-charts";
import { SharedData } from "./SharedData";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];

    @ViewChild("sparkline", { static: true })
    public sparkline: IgxSparklineComponent;

    constructor() {
        this.data = SharedData.getSharedData();
    }

    public onDisplayTypeChanged(e: any) {
        const selection = e.target.value.toString();

        switch (selection) {
            case "Area": {
                this.sparkline.displayType = SparklineDisplayType.Area;
                break;
            }
            case "Column": {
                this.sparkline.displayType = SparklineDisplayType.Column;
                break;
            }
            case "Line": {
                this.sparkline.displayType = SparklineDisplayType.Line;
                break;
            }
            case "WinLoss": {
                this.sparkline.displayType = SparklineDisplayType.WinLoss;
                break;
            }
        }
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <span class="options-item">Display Type:</span>
        <select (change)="onDisplayTypeChanged($event)">
            <option>Area</option>
            <option>Column</option>
            <option>Line</option>
            <option>WinLoss</option>
        </select>
    </div>
    <div class="container">
        <igx-sparkline #sparkline height="100%" width="100%"
            [dataSource]="data"
            valueMemberPath="Value"
            displayType="Area"></igx-sparkline>
    </div>
</div >
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">Download it for free.</a>

## Sparkline Recommendations

### Is the Sparkline chart right for your project?

The primary benefit of the Sparkline control compared to other charting controls is that it can render in a limited space such as a grid cell with all its visual elements shown.

The Angular Sparkline has the ability to mark the data points with elliptical icons to indicate the highest, lowest, first, last, and negative values. The markers can be customized with a desired shape, color, or image.

### Sparkline Use Cases

- You have a compact space to display a chart in.
- You want to show trends in a series of values, such as weekly revenue.

### Sparkline Best Practices

- Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
- Order time-series data from left to right.
- Use visual attributes like solid lines to show a series of data.

### When Not to Use Sparkline

- You need to analyze the data in detail.
- You need to display every label of the data points. It only allows showing high and low values on the Y-Axis, and first and last values on the X-Axis.

### Sparkline Data Structure

- It requires one-dimensional data.
- The data set must contain at least two numeric fields.
- The text in the data source fields can be used to display the first and last label on the X-Axis.

## Sparkline Types

The Angular Sparkline supports the following types of sparklines by setting the [`displayType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#displayType) property accordingly:

- [`Line`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.sparklinedisplaytype.html#Line):  Displays the line chart type of Sparkline with numeric data, connecting the data points with line segments. At least two data points must be supplied to visualize the data in Sparkline.
- [`Area`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.sparklinedisplaytype.html#Area): Displays the Area chart type of Sparkline with numeric data. This is like line type with additional steps of closing the area after each line is drawn. At least two data points must be supplied to visualize the data in Sparkline.
- [`Column`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.sparklinedisplaytype.html#Column): Displays the Column chart type of Sparkline with numeric data. Some may refer to it as vertical bars. This type can render a single data point, but it would require specifying the minimum value range property (minimum) in Sparkline so the supplied single data point can be visible, otherwise the value will be treated as the minimum value and will not be visible.
- [`WinLoss`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.sparklinedisplaytype.html#WinLoss): This type is similar in its visual appearance to Column chart type, in which the value of each column is equal to either the positive maximum (for positive values) or the negative minimum (for negative value) of the data set. The idea is to indicate a win or loss scenario. For the Win/Loss chart to display properly, the data set must have both positive and negative values. If the WinLoss sparkline is bound to the same data as the other types such as the Line type, which can be bound to a collection of numeric values, then the Angular Sparkline will select two values from the collection - the highest and the lowest - and will render the sparkline based upon those values.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxSparklineModule } from "igniteui-angular-charts";


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
    IgxSparklineModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxSparklineComponent } from "igniteui-angular-charts";
import { SparklineDisplayType } from "igniteui-angular-charts";
import { SharedData } from "./SharedData";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public data: any[];

    @ViewChild("sparkline", { static: true })
    public sparkline: IgxSparklineComponent;

    constructor() {
        this.data = SharedData.getSharedData();
    }

    public onDisplayTypeChanged(e: any) {
        const selection = e.target.value.toString();

        switch (selection) {
            case "Area": {
                this.sparkline.displayType = SparklineDisplayType.Area;
                break;
            }
            case "Column": {
                this.sparkline.displayType = SparklineDisplayType.Column;
                break;
            }
            case "Line": {
                this.sparkline.displayType = SparklineDisplayType.Line;
                break;
            }
            case "WinLoss": {
                this.sparkline.displayType = SparklineDisplayType.WinLoss;
                break;
            }
        }
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <span class="options-item">Display Type:</span>
        <select (change)="onDisplayTypeChanged($event)">
            <option>Area</option>
            <option>Column</option>
            <option>Line</option>
            <option>WinLoss</option>
        </select>
    </div>
    <div class="container">
        <igx-sparkline #sparkline height="100%" width="100%"
            [dataSource]="data"
            valueMemberPath="Value"
            displayType="Area"></igx-sparkline>
    </div>
</div >
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Markers

The Angular Sparkline allows you to show markers as circular-colored icons on your series to indicate the individual data points based on X/Y coordinates. Markers can be set on sparklines of display types of [`Line`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.sparklinedisplaytype.html#Line), [`Area`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.sparklinedisplaytype.html#Area), and [`Column`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.sparklinedisplaytype.html#Column). The [`WinLoss`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.sparklinedisplaytype.html#WinLoss) type of sparkline does not currently accept markers. By default, markers are not displayed, but they can be enabled by setting the corresponding marker visibility property.

Markers in the sparkline can be placed in any combination of the following locations:

- `All`: Display markers for all data points in the sparkline.
- `Low`: Display markers on the data point of the lowest value. If there are multiple points at the lowest value, it will show on each point with that value.
- `High`: Display markers on the data point of the highest value. If there are multiple points at the highest value, it will show on each point with that value.
- `First`: Display a marker on the first data point in the sparkline.
- `Last`: Display a marker on the last data point in the sparkline.
- `Negative`: Display markers on the negative data points plotted in the sparkline.

All of the markers mentioned above can be customized using the related marker type's property in aspects of color, visibility, and size. For example, the `Low` markers above will have properties [`lowMarkerBrush`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#lowMarkerBrush), [`lowMarkerVisibility`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#lowMarkerVisibility), and [`lowMarkerSize`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#lowMarkerSize).

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxSparklineModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxPropertyEditorPanelModule,
    IgxSparklineModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-angular-core';
import { SparklineProfitDataItem, SparklineProfitData } from './SparklineProfitData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxSparklineComponent } from 'igniteui-angular-charts';

import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("propertyEditorPanel1", { static: true } )
	private propertyEditorPanel1: IgxPropertyEditorPanelComponent
	@ViewChild("firstMarkerVisibilityEditor", { static: true } )
	private firstMarkerVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("highMarkerVisibilityEditor", { static: true } )
	private highMarkerVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("lowMarkerVisibilityEditor", { static: true } )
	private lowMarkerVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("negativeMarkerVisibilityEditor", { static: true } )
	private negativeMarkerVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("lastMarkerVisibilityEditor", { static: true } )
	private lastMarkerVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("markerVisibilityEditor", { static: true } )
	private markerVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxSparklineComponent
    private _sparklineProfitData: SparklineProfitData = null;
    public get sparklineProfitData(): SparklineProfitData {
        if (this._sparklineProfitData == null)
        {
            this._sparklineProfitData = new SparklineProfitData();
        }
        return this._sparklineProfitData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            SparklineDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="options vertical">
      <igx-property-editor-panel
      [componentRenderer]="renderer"
      [target]="chart"
      descriptionType="Sparkline"
      isHorizontal="true"
      isWrappingEnabled="true"
      name="propertyEditorPanel1"
      #propertyEditorPanel1>
          <igx-property-editor-property-description
          propertyPath="FirstMarkerVisibility"
          name="FirstMarkerVisibilityEditor"
          #firstMarkerVisibilityEditor
          label="First Markers"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="Visible, Collapsed"
          dropDownValues="Visible, Collapsed"
          primitiveValue="Visible">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="HighMarkerVisibility"
          name="HighMarkerVisibilityEditor"
          #highMarkerVisibilityEditor
          label="High Markers"
          valueType="EnumValue"
          dropDownNames="Visible, Collapsed"
          dropDownValues="Visible, Collapsed"
          primitiveValue="Visible">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="LowMarkerVisibility"
          name="LowMarkerVisibilityEditor"
          #lowMarkerVisibilityEditor
          label="Low Markers"
          valueType="EnumValue"
          dropDownNames="Visible, Collapsed"
          dropDownValues="Visible, Collapsed"
          primitiveValue="Visible">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="NegativeMarkerVisibility"
          name="NegativeMarkerVisibilityEditor"
          #negativeMarkerVisibilityEditor
          label="Negative Markers"
          valueType="EnumValue"
          dropDownNames="Visible, Collapsed"
          dropDownValues="Visible, Collapsed"
          primitiveValue="Visible">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="LastMarkerVisibility"
          name="LastMarkerVisibilityEditor"
          #lastMarkerVisibilityEditor
          label="Last Markers"
          valueType="EnumValue"
          dropDownNames="Visible, Collapsed"
          dropDownValues="Visible, Collapsed"
          primitiveValue="Visible">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="MarkerVisibility"
          name="MarkerVisibilityEditor"
          #markerVisibilityEditor
          label="All Markers"
          valueType="EnumValue"
          dropDownNames="Visible, Collapsed"
          dropDownValues="Visible, Collapsed"
          primitiveValue="Visible">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="container fill">
      <igx-sparkline
      name="chart"
      #chart
      [dataSource]="sparklineProfitData"
      displayType="Line"
      labelMemberPath="label"
      valueMemberPath="value"
      markerVisibility="Visible"
      highMarkerVisibility="Visible"
      lowMarkerVisibility="Visible"
      firstMarkerVisibility="Visible"
      lastMarkerVisibility="Visible"
      negativeMarkerVisibility="Visible"
      markerSize="10"
      firstMarkerSize="10"
      lastMarkerSize="10"
      lowMarkerSize="10"
      highMarkerSize="10"
      negativeMarkerSize="10"
      minimum="0"
      maximum="60">
      </igx-sparkline>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Normal Range

The normal range feature of the Angular Sparkline is a horizontal stripe representing some pre-defined meaningful range when the data is being visualized. The normal range can be set as a shaded area outlined with the desired color.

The normal range can be wider than the maximum data point or beyond, and it can also be as thin as the sparkline's [`Line`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.sparklinedisplaytype.html#Line) display type, to serve as a threshold indicator, for instance. The width of the normal range is determined by the following three properties, which serve as the minimum settings required for displaying the normal range:

- [`normalRangeVisibility`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#normalRangeVisibility): Whether the normal range is visible.
- [`normalRangeMaximum`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#normalRangeMaximum): The bottom border of the range.
- [`normalRangeMinimum`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#normalRangeMinimum): The top border of the range.

By default, the normal range is not displayed. When enabled, the normal range shows up with a light gray color appearance, which can also be configured using the [`normalRangeFill`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#normalRangeFill) property.

You can also configure whether to show the normal range in front of or behind the plotted series in your Angular Sparkline by setting the [`displayNormalRangeInFront`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#displayNormalRangeInFront) property.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxSparklineModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxPropertyEditorPanelModule,
    IgxSparklineModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-angular-core';
import { SparklineMixedDataItem, SparklineMixedData } from './SparklineMixedData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxSparklineComponent } from 'igniteui-angular-charts';

import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("propertyEditorPanel1", { static: true } )
	private propertyEditorPanel1: IgxPropertyEditorPanelComponent
	@ViewChild("normalRangeVisibilityEditor", { static: true } )
	private normalRangeVisibilityEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("normalRangeMinimumEditor", { static: true } )
	private normalRangeMinimumEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("normalRangeMaximumEditor", { static: true } )
	private normalRangeMaximumEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxSparklineComponent
    private _sparklineMixedData: SparklineMixedData = null;
    public get sparklineMixedData(): SparklineMixedData {
        if (this._sparklineMixedData == null)
        {
            this._sparklineMixedData = new SparklineMixedData();
        }
        return this._sparklineMixedData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            SparklineDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="options vertical">
      <igx-property-editor-panel
      [componentRenderer]="renderer"
      [target]="chart"
      descriptionType="Sparkline"
      isHorizontal="true"
      isWrappingEnabled="true"
      name="propertyEditorPanel1"
      #propertyEditorPanel1>
          <igx-property-editor-property-description
          propertyPath="NormalRangeVisibility"
          name="NormalRangeVisibilityEditor"
          #normalRangeVisibilityEditor
          label="Normal Range Visibility"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="Visible, Collapsed"
          dropDownValues="Visible, Collapsed"
          primitiveValue="Visible">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="NormalRangeMinimum"
          name="NormalRangeMinimumEditor"
          #normalRangeMinimumEditor
          label="Normal Range Minimum"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="0, 10, 15, 20, 25, 30"
          dropDownValues="0, 10, 15, 20, 25, 30"
          primitiveValue="25">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="NormalRangeMaximum"
          name="NormalRangeMaximumEditor"
          #normalRangeMaximumEditor
          label="Normal Range Maximum"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="0, 10, 15, 20, 25, 30"
          dropDownValues="0, 10, 15, 20, 25, 30"
          primitiveValue="25">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="container fill">
      <igx-sparkline
      name="chart"
      #chart
      [dataSource]="sparklineMixedData"
      displayType="Area"
      labelMemberPath="label"
      valueMemberPath="value"
      normalRangeVisibility="Visible"
      normalRangeMinimum="15"
      normalRangeMaximum="25">
      </igx-sparkline>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Trendlines

The Angular Sparkline has support for a range of trendlines that display as another layer on top of the actual sparkline layer. To display a sparkline, you can use the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#trendLineType) property.

The trendlines are calculated according to the algorithm specified by the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#trendLineType) property using the values of the data the the chart is bound to.

Trendlines can only be displayed one at a time and by default, the trendline is not displayed.

The sample below shows all the available trendlines via the dropdown:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxSparklineModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxPropertyEditorPanelModule,
    IgxSparklineModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-angular-core';
import { SparklineMixedDataItem, SparklineMixedData } from './SparklineMixedData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxSparklineComponent } from 'igniteui-angular-charts';

import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("propertyEditorPanel1", { static: true } )
	private propertyEditorPanel1: IgxPropertyEditorPanelComponent
	@ViewChild("trendLineTypeEditor", { static: true } )
	private trendLineTypeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxSparklineComponent
    private _sparklineMixedData: SparklineMixedData = null;
    public get sparklineMixedData(): SparklineMixedData {
        if (this._sparklineMixedData == null)
        {
            this._sparklineMixedData = new SparklineMixedData();
        }
        return this._sparklineMixedData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            SparklineDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="options vertical">
      <igx-property-editor-panel
      [componentRenderer]="renderer"
      [target]="chart"
      descriptionType="Sparkline"
      isHorizontal="true"
      isWrappingEnabled="true"
      name="propertyEditorPanel1"
      #propertyEditorPanel1>
          <igx-property-editor-property-description
          propertyPath="TrendLineType"
          name="TrendLineTypeEditor"
          #trendLineTypeEditor
          label="Trendline Type"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="CubicFit, CumulativeAverage, ExponentialAverage, ExponentialFit, LinearFit, LogarithmicFit, ModifiedAverage, None, PowerLawFit, QuadraticFit, QuarticFit, QuinticFit, SimpleAverage, WeightedAverage"
          dropDownValues="CubicFit, CumulativeAverage, ExponentialAverage, ExponentialFit, LinearFit, LogarithmicFit, ModifiedAverage, None, PowerLawFit, QuadraticFit, QuarticFit, QuinticFit, SimpleAverage, WeightedAverage"
          primitiveValue="CubicFit">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="container fill">
      <igx-sparkline
      name="chart"
      #chart
      [dataSource]="sparklineMixedData"
      displayType="Area"
      labelMemberPath="label"
      valueMemberPath="value"
      trendLineType="CubicFit">
      </igx-sparkline>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Unknown Value Interpolation

The Angular Sparkline can detect unknown values and render the space for unknown values through a specified interpolation algorithm. If your data contains null values and you do not use this feature, meaning no interpolation is specified, the unknown value will not be plotted.

To plot the unknown values, you can set the [`unknownValuePlotting`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#unknownValuePlotting) property of the Angular Sparkline. The sample below shows the differences between the values of the [`unknownValuePlotting`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#unknownValuePlotting) property, allowing you to toggle it on or off using a checkbox:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxSparklineModule } from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxPropertyEditorPanelModule,
    IgxSparklineModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-angular-core';
import { SparklineUnknownDataItem, SparklineUnknownData } from './SparklineUnknownData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxSparklineComponent } from 'igniteui-angular-charts';

import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("propertyEditorPanel1", { static: true } )
	private propertyEditorPanel1: IgxPropertyEditorPanelComponent
	@ViewChild("unknownValuePlottingEditor", { static: true } )
	private unknownValuePlottingEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxSparklineComponent
    private _sparklineUnknownData: SparklineUnknownData = null;
    public get sparklineUnknownData(): SparklineUnknownData {
        if (this._sparklineUnknownData == null)
        {
            this._sparklineUnknownData = new SparklineUnknownData();
        }
        return this._sparklineUnknownData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            SparklineDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

}
```
```html
<div class="container vertical sample">
  <div class="options vertical">
      <igx-property-editor-panel
      [componentRenderer]="renderer"
      [target]="chart"
      descriptionType="Sparkline"
      isHorizontal="true"
      isWrappingEnabled="true"
      name="propertyEditorPanel1"
      #propertyEditorPanel1>
          <igx-property-editor-property-description
          propertyPath="UnknownValuePlotting"
          name="UnknownValuePlottingEditor"
          #unknownValuePlottingEditor
          label="Unknown Value Plotting"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownNames="LinearInterpolate, DontPlot"
          dropDownValues="LinearInterpolate, DontPlot"
          primitiveValue="LinearInterpolate">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="container fill">
      <igx-sparkline
      name="chart"
      #chart
      [dataSource]="sparklineUnknownData"
      displayType="Area"
      labelMemberPath="label"
      valueMemberPath="value"
      unknownValuePlotting="LinearInterpolate">
      </igx-sparkline>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Sparkline in Data Grid

You can embed the Angular Sparkline in a template column of data grid or other UI controls that support templates. The following code example shows how to do this:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxSparklineModule } from "igniteui-angular-charts";
import { IgxGridModule } from "igniteui-angular";
import { Products } from "./Products";

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
    IgxSparklineModule,
    IgxGridModule
],
  providers: [Products],
schemas: []
})
export class AppModule {}
```
```typescript
import { Component, Injectable, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";
import { Products } from "./Products";

@Injectable()
export class LocalService {
    public records: Observable<any[]>;
    private _records: BehaviorSubject<any[]>;

    constructor() {
        this._records = new BehaviorSubject([]);
        this.records = this._records.asObservable();
    }

    public getData() {
        const data = Products.getData();
        this._records.next(data);
    }
}

@Component({
    standalone: false,
    providers: [LocalService],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})

export class AppComponent {

    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
    public data: Observable<any[]>;

    constructor(private localService: LocalService) {
        this.localService.getData();
        this.data = this.localService.records;
    }

    public ngOnInit(): void {
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
}
```
```html
<div class="container vertical">
    <igx-grid #grid1 [data]="data | async"
    height="100%" displayDensity="cosy"
    [autoGenerate]='false' [allowFiltering]="false">
        <igx-column [width]="'80px'" [field]="'ID'"  dataType="'number'"></igx-column>
        <igx-column [width]="'150px'" [field]="'Product'" [dataType]="'string'" ></igx-column>
        <igx-column [width]="'100px'" [field]="'Price'" dataType="'number'" [formatter]="formatCurrency"></igx-column>

        <igx-column [field]="'OrderHistory'" [width]="'160px'"  >
            <ng-template igxHeader>
                <span>Order History</span>
            </ng-template>
            <ng-template igxCell let-val>
                <igx-sparkline height="40px" width="150px"
                [dataSource]="val"
                valueMemberPath="Sold"
                displayType="Line"
                lineThickness="2"
                brush="rgb(21, 190, 6)"
                negativeBrush="rgb(211, 17, 3)" >
                </igx-sparkline>
            </ng-template>
        </igx-column>

        <igx-column [width]="'100px'" [field]="'OrderCount'"  dataType="'number'" header="Orders"></igx-column>

        <igx-column [field]="'ReturnRate'" [width]="'160px'"  >
            <ng-template igxHeader>
                <span>Return Rate</span>
            </ng-template>
            <ng-template igxCell let-val>
                <igx-sparkline height="40px" width="150px"
                [dataSource]="val"
                valueMemberPath="Balance"
                displayType="Column"
                lineThickness="2"
                brush="rgb(21, 190, 6)"
                negativeBrush="rgb(211, 17, 3)" >
                </igx-sparkline>
            </ng-template>
        </igx-column>

        <igx-column [width]="'190px'" [field]="'Status'" [dataType]="'string'"></igx-column>

    </igx-grid>
    <br />
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Column Chart](column-chart.md)
- [Line Chart](line-chart.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`displayNormalRangeInFront`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#displayNormalRangeInFront)
- [`displayType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#displayType)
- [`lowMarkerBrush`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#lowMarkerBrush)
- [`lowMarkerSize`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#lowMarkerSize)
- [`lowMarkerVisibility`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#lowMarkerVisibility)
- [`normalRangeFill`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#normalRangeFill)
- [`unknownValuePlotting`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html#unknownValuePlotting)
- [`IgxSparklineComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxsparklinecomponent.html)
