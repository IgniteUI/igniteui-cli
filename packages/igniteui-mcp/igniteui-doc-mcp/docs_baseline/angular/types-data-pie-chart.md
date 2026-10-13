---
title: Angular Pie Charts and Graphs | Ignite UI for Angular
description: The Ignite UI for Angular data pie chart is a specialized UI control that renders a pie chart, consisting of a circular area divided into sections.  Try for FREE.
keywords: Angular charts, pie chart, Ignite UI for Angular, Infragistics, data binding, slice selection, animation, highlighting, legend
license: commercial

namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for Angular Data Pie Chart is a part-to-whole chart that shows how categories (parts) of a data set add up to a total (whole) value."
_tocName: Data Pie Chart
_premium: true
---
# Angular Data Pie Chart
The Ignite UI for Angular Data Pie Chart is a part-to-whole chart that shows how categories (parts) of a data set add up to a total (whole) value. Categories are rendered as sections in a circular, or pie-shaped graph. Each section, or pie slice, has an arc length proportional to its underlying data value. Categories are shown in proportion to other categories based on their value percentage to the total value being analyzed, as parts of 100 or 100%.

## Angular Data Pie Chart Example
You can create the Angular Pie Chart in the `IgxDataPieChart` by binding your data items with a string and a numeric data value. These data values will add up to a value of 100% of visualization.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataPieChartModule, IgxItemLegendModule } from 'igniteui-angular-charts';

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
    IgxDataPieChartModule,
    IgxItemLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';
import { IgxDataPieChartComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxDataPieChartComponent
    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
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
  <div class="legend-title">
      Global Electricity Demand by Energy Use
  </div>
  <div class="container fill">
      <igx-data-pie-chart
      name="chart"
      #chart
      [dataSource]="energyGlobalDemand">
      </igx-data-pie-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Angular Data Pie Chart Recommendations
Pie Charts are appropriate for small data sets and are easy to read at a glance. Pie charts are just one type of part-to-whole visualization such as Doughnut (Ring) Chart, Funnel Chart, Stacked Area Chart, Stacked Bar Chart, and Treemap.

The Angular Data Pie Chart includes interactive features that give the viewer tools to analyze data, like:

- Legends
- Slice Selection
- Slice Highlighting
- Chart Animations

Best Practices for a Pie Chart:

- Comparing slices or segments as percentage values in proportion to a total value or whole.
- Showing how a group of categories is broken into smaller segments.
- Presenting small, non-hierarchical data sets (less than 6 to 8 segments of data).
- Ensuring data segments add up to 100%.
- Arranging the order of data from largest (highest) to smallest (least).
- Using standard presentation techniques such as starting in the 12 o'clock position and continuing clockwise.
- Ensuring the color palette is distinguishable for segments/slices of the parts.
- Considering data labels in segments vs. legends for ease of reading.
- Choosing an alternative chart to Pie such as Bar or Ring based on ease of comprehension.
- Avoiding positioning multiple pie charts next to each other for comparative analysis.

Do Not Use Pie Chart When:

- Comparing change over time —use a Bar, Line or Area chart.
- Requiring precise data comparison —use a Bar, Line or Area chart.
- You have more than 6 or 8 segments (high data volume) — consider a Bar, Line or Area chart if it works for your data story.
- It would be easier for the viewer to perceive the value difference in a Bar chart.

## Angular Data Pie Chart Legend
Legends are used to show information about each point, to know about its contribution towards the total sum.

In order to display a legend next to the pie chart an ItemLegend needs to be created and assigned to the `Legend` property. The ItemLegend will display its items in vertical orientation as a default, but this can be changed by setting its `Orientation` property.

The labels shown on the legend will display the same content as the label that is shown for each slice in the `IgxDataPieChart` by default, but this can be modified by utilizing the `LegendSliceLabelContentMode` property on the chart. This exposes an enumeration that allows you to show the label, value, percentage, or any combination of those as the legend's content for each slice in the chart.

You can also modify the ItemLegend badge. By default, it appears as a filled circle corresponding to the color of the associated chart slice. You can configure this by using the `LegendItemBadgeShape` property on the chart, and you can set this to be a circle, line, bar, column, and more.

Below is an example that demonstrates usage of the ItemLegend with the `IgxDataPieChart`.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxDataPieChartModule, IgxItemLegendModule } from 'igniteui-angular-charts';

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
    IgxDataPieChartModule,
    IgxItemLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataPieChartDescriptionModule, ItemLegendDescriptionModule } from 'igniteui-angular-core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';
import { IgxItemLegendComponent, IgxDataPieChartComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("legend", { static: true } )
	private legend: IgxItemLegendComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataPieChartComponent
    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataPieChartDescriptionModule.register(context);
            ItemLegendDescriptionModule.register(context);
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
  <div class="legend-title">
      Global Electricity Demand by Energy Use
  </div>
  <div class="legend">
      <igx-item-legend
      name="legend"
      #legend
      orientation="Horizontal">
      </igx-item-legend>
  </div>
  <div class="container fill">
      <igx-data-pie-chart
      name="chart"
      #chart
      [dataSource]="energyGlobalDemand"
      [legend]="legend">
      </igx-data-pie-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Angular Pie Chart Others Category
Sometimes, the underlying data for the pie chart will contain many items with small values. In this case, the Others category will permit automatic aggregation of several data values into a single slice.

The Others category in the `IgxDataPieChart` has three main, configurable properties - `OthersCategoryType`, `OthersCategoryThreshold`, and `OthersCategoryText` that allow you to configure how the Others slice in the chart is shown. These are each described below:

The `OthersCategoryType` property works in tandem with the `OthersCategoryThreshold` property of the `IgxDataPieChart`. For the `OthersCategoryType`, you can define whether you want the `OthersCategoryThreshold` to be evaluated as a number or a percentage. For example, if you decide on number and set the `OthersCategoryThreshold` to 5, any slices that have a value less than 5 will become part of the Others category. Using the same value of 5 with a percent type, any values that are less than 5 percent of the total values of the `IgxDataPieChart` will become part of the Others category.

To get the underlying data items that are contained within the Others slice in the chart, you can utilize the `GetOthersContext` method on the chart. This return type of this method is an `IgxOthersCategoryContext` which exposes an `Items` property. The `Items` property returns an array that will contain the items in the Others slice. Additionally, when clicking the Others slice, the `Item` property of the event arguments for the `SeriesClick` event will be will also return this `IgxOthersCategoryContext`.

By default, the Others slice will be represented by a label of "Others." You can change this by modifying the `OthersCategoryText` property of the chart.

### Angular Styling the Others Slice
You can style the aggregated Others slice separately from other slices by using these properties:

- `OthersCategoryBrush`
  Sets the fill (brush) used for the Others slice.

- `OthersCategoryOutline`
  Sets the outline (stroke) used for the Others slice.

These properties only affect the Others slice (when it exists). All other slices continue to use the normal palette and item-wise coloring behavior.

**Note:** 
The Others slice is only rendered when the chart is configured to create it (for example, with `OthersCategoryThreshold` greater than `0` and an appropriate `OthersCategoryType`). If the Others slice is not present, `OthersCategoryBrush` and `OthersCategoryOutline` have no visible effect.

If you want to ensure that the Others category does not show up in the `IgxDataPieChart`, you can set the `OthersCategoryThreshold` to 0.

The following sample demonstrates usage of the Others slice in the `IgxDataPieChart`:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxDataPieChartModule, IgxItemLegendModule } from 'igniteui-angular-charts';

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
    IgxDataPieChartModule,
    IgxItemLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataPieChartDescriptionModule, ItemLegendDescriptionModule } from 'igniteui-angular-core';
import { DataPieDataItem, DataPieData } from './DataPieData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxDataPieChartComponent } from 'igniteui-angular-charts';

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
	@ViewChild("othersCategoryTypeEditor", { static: true } )
	private othersCategoryTypeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("othersCategoryThresholdEditor", { static: true } )
	private othersCategoryThresholdEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("othersCategoryTextEditor", { static: true } )
	private othersCategoryTextEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataPieChartComponent
    private _dataPieData: DataPieData = null;
    public get dataPieData(): DataPieData {
        if (this._dataPieData == null)
        {
            this._dataPieData = new DataPieData();
        }
        return this._dataPieData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataPieChartDescriptionModule.register(context);
            ItemLegendDescriptionModule.register(context);
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
      descriptionType="DataPieChart"
      isHorizontal="true"
      isWrappingEnabled="true"
      name="propertyEditorPanel1"
      #propertyEditorPanel1>
          <igx-property-editor-property-description
          propertyPath="OthersCategoryType"
          name="OthersCategoryTypeEditor"
          #othersCategoryTypeEditor
          label="Others Type: "
          primitiveValue="Number"
          valueType="EnumValue">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="OthersCategoryThreshold"
          name="OthersCategoryThresholdEditor"
          #othersCategoryThresholdEditor
          label="Others Threshold: "
          valueType="Slider"
          min="0"
          max="50"
          primitiveValue="15">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="OthersCategoryText"
          name="OthersCategoryTextEditor"
          #othersCategoryTextEditor
          label="Others Text: "
          valueType="StringValue">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Global Electricity Demand by Energy Use
  </div>
  <div class="container fill">
      <igx-data-pie-chart
      name="chart"
      #chart
      [dataSource]="dataPieData"
      othersCategoryType="Number"
      othersCategoryThreshold="15">
      </igx-data-pie-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Angular Data Pie Chart Selection
The `IgxDataPieChart` supports slice selection by mouse click on the slices plotted in the chart. This can be configured by utilizing the `SelectionBehavior` and `SelectionMode` properties of the chart, described below:

The main two options of the `SelectionBehavior` are `PerDataItemSingleSelect` and `PerDataItemMultiSelect`, which will enable single and multiple selection, respectively.

The `SelectionMode` property exposes an enumeration that determines how the pie chart slices respond to being selected. The following are the options of that enumeration and what they do:

- `Brighten`: The selected slices will be highlighted.
- `FadeOthers`: The selected slices will remain their same color and others will fade.
- `FocusColorFill`: The selected slices will change their background to the FocusBrush of the chart.
- `FocusColorOutline`: The selected slices will have an outline with the color defined by the FocusBrush of the chart.
- `FocusColorThickOutline`: The selected slices will have an outline with the color defined by the FocusBrush of the chart. The thickness of this outline can be configured via the Thickness property of the control as well.
- `GrayscaleOthers`: The unselected slices will have a gray color filter applied to them.
- `None`: There is no effect on the selected slices.
- `SelectionColorFill`: The selected slices will change their background to the SelectionBrush of the chart.
- `SelectionColorOutline`: The selected slices will have an outline with the color defined by the SelectionBrush of the chart.
- `SelectionColorThickOutline`: The selected slices will have an outline with the color defined by the FocusBrush of the chart. The thickness of this outline can be configured via the Thickness property of the control as well.
- `ThickOutline`: The selected slices will apply an outline with the thickness dependent on the Thickness property of the chart.

When a slice is selected, its underlying data item will be added to the SelectedSeriesItems collection of the chart. As such, the DataPieChart exposes the SelectedSeriesItemsChanged event to detect when a slice has been selected and this collection is changed.

The following sample demonstrates the selection feature of the `IgxDataPieChart` control:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxDataPieChartModule, IgxItemLegendModule } from 'igniteui-angular-charts';

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
    IgxDataPieChartModule,
    IgxItemLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataPieChartDescriptionModule, ItemLegendDescriptionModule } from 'igniteui-angular-core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxDataPieChartComponent } from 'igniteui-angular-charts';

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
	@ViewChild("selectionBehaviorEditor", { static: true } )
	private selectionBehaviorEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("selectionModeEditor", { static: true } )
	private selectionModeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataPieChartComponent
    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataPieChartDescriptionModule.register(context);
            ItemLegendDescriptionModule.register(context);
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
      descriptionType="DataPieChart"
      isHorizontal="true"
      isWrappingEnabled="true"
      name="propertyEditorPanel1"
      #propertyEditorPanel1>
          <igx-property-editor-property-description
          label="Selection Behavior: "
          valueType="EnumValue"
          propertyPath="SelectionBehavior"
          name="SelectionBehaviorEditor"
          #selectionBehaviorEditor
          shouldOverrideDefaultEditor="true"
          dropDownNames="PerDataItemSingleSelect, PerDataItemMultiSelect"
          dropDownValues="PerDataItemSingleSelect, PerDataItemMultiSelect"
          primitiveValue="PerDataItemSingleSelect">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="SelectionMode"
          name="SelectionModeEditor"
          #selectionModeEditor
          label="Selection Mode: "
          primitiveValue="Brighten">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Global Electricity Demand by Energy Use
  </div>
  <div class="container fill">
      <igx-data-pie-chart
      name="chart"
      #chart
      [dataSource]="energyGlobalDemand"
      highlightingMode="None"
      selectionMode="Brighten"
      selectionBehavior="PerDataItemSingleSelect"
      selectionBrush="dodgerblue"
      focusBrush="black"
      thickness="3">
      </igx-data-pie-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Angular Data Pie Chart Highlighting
The `IgxDataPieChart` supports mouse over highlighting, as well as a highlighting overlay that can be configured by providing a separate data source.

First, the `HighlightingBehavior` enumerated property determines how a slice will be highlighted. The following are the options of that property and what they do:

- `DirectlyOver`: The slices are only highlighted when the mouse is directly over them.
- `NearestItems`: The nearest slice to the mouse position will be highlighted.
- `NearestItemsAndSeries`: The nearest slice and series to the mouse position will be highlighted.
- `NearestItemsRetainMainShapes`: The nearest items to the mouse position will be highlighted and the main shapes of the series will not be de-emphasized.

The `HighlightingMode` enumerated property determines how the data pie chart slices respond to being highlighted. The following are the options of that property and what they do:

- `Brighten`: The series will have its color brightened when the mouse position is over or near it.
- `FadeOthers`: The series will retain its color when the mouse position is over or near it, while the others will appear faded.
- `None`: The series and slices will not be highlighted.

The following example demonstrates the mouse highlighting behaviors of the `IgxDataPieChart` component:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxDataPieChartModule, IgxItemLegendModule } from 'igniteui-angular-charts';

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
    IgxDataPieChartModule,
    IgxItemLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataPieChartDescriptionModule, ItemLegendDescriptionModule } from 'igniteui-angular-core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxDataPieChartComponent } from 'igniteui-angular-charts';

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
	@ViewChild("highlightingModeEditor", { static: true } )
	private highlightingModeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("highlightingBehaviorEditor", { static: true } )
	private highlightingBehaviorEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataPieChartComponent
    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataPieChartDescriptionModule.register(context);
            ItemLegendDescriptionModule.register(context);
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
      descriptionType="DataPieChart"
      isHorizontal="true"
      isWrappingEnabled="true"
      name="propertyEditorPanel1"
      #propertyEditorPanel1>
          <igx-property-editor-property-description
          propertyPath="HighlightingMode"
          name="HighlightingModeEditor"
          #highlightingModeEditor
          label="Highlighting Mode: "
          primitiveValue="BrightenSpecific">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="HighlightingBehavior"
          name="HighlightingBehaviorEditor"
          #highlightingBehaviorEditor
          label="Highlighting Behavior: "
          primitiveValue="DirectlyOver">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Global Electricity Demand by Energy Use
  </div>
  <div class="container fill">
      <igx-data-pie-chart
      name="chart"
      #chart
      [dataSource]="energyGlobalDemand"
      highlightingBehavior="DirectlyOver"
      highlightingMode="BrightenSpecific">
      </igx-data-pie-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

In addition to the mouse highlighting, the `IgxDataPieChart` exposes a highlight filter capability that can display a subset of your data. This is applied by specifying a `HighlightedDataSource` for the control and by setting the `HighlightedValuesDisplayMode` property to `Overlay`. The `HighlightedDataSource` expects a subset of the data assigned to the `DataSource` property of the `IgxDataPieChart`.

When these conditions are met, the values of the subset will be highlighted, while the remainder of the full set of data will be faded - effectively creating a highlight for the subset and allowing easier visualization of a subset of your data within the same control.

The following example demonstrates highlight filtering.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataPieChartModule } from 'igniteui-angular-charts';

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
    IgxDataPieChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, DataPieChartDescriptionModule } from 'igniteui-angular-core';
import { OnlineTrafficHighlightTotalsItem, OnlineTrafficHighlightTotals } from './OnlineTrafficHighlightTotals';
import { OnlineTrafficHighlightDesktopOnlyItem, OnlineTrafficHighlightDesktopOnly } from './OnlineTrafficHighlightDesktopOnly';
import { IgxDataPieChartComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("chart", { static: true } )
	private chart: IgxDataPieChartComponent
    private _onlineTrafficHighlightTotals: OnlineTrafficHighlightTotals = null;
    public get onlineTrafficHighlightTotals(): OnlineTrafficHighlightTotals {
        if (this._onlineTrafficHighlightTotals == null)
        {
            this._onlineTrafficHighlightTotals = new OnlineTrafficHighlightTotals();
        }
        return this._onlineTrafficHighlightTotals;
    }

    private _onlineTrafficHighlightDesktopOnly: OnlineTrafficHighlightDesktopOnly = null;
    public get onlineTrafficHighlightDesktopOnly(): OnlineTrafficHighlightDesktopOnly {
        if (this._onlineTrafficHighlightDesktopOnly == null)
        {
            this._onlineTrafficHighlightDesktopOnly = new OnlineTrafficHighlightDesktopOnly();
        }
        return this._onlineTrafficHighlightDesktopOnly;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            DataPieChartDescriptionModule.register(context);
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
  <div class="container fill">
      <igx-data-pie-chart
      name="chart"
      #chart
      [dataSource]="onlineTrafficHighlightTotals"
      [highlightedDataSource]="onlineTrafficHighlightDesktopOnly"
      highlightedValuesDisplayMode="Overlay">
      </igx-data-pie-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Angular Data Pie Chart Animation
The `IgxDataPieChart` supports animating its slices into view, as well as when a value changes.

You can set the `IsTransitionInEnabled` property to **true** to have the pie chart animate into view. The type of animation performed can be configured by setting the `TransitionInMode` enumerated property to the type of animation you would like to see. Additionally, you can also set the `TransitionInSpeedType` property to scale with index, value, normal, or randomized. The duration of this animation can be controlled by the `TransitionInDuration` property, which takes a `TimeSpan`.

If you would like to animate data changes, this can also be done by setting the `AnimateSeriesWhenAxisRangeChanges` property to **true**. The duration of this change can be configured by setting the `TransitionDuration` property as well.

The following sample demonstrates the usage of animation in the `IgxDataPieChart`:

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxDataPieChartModule, IgxItemLegendModule } from 'igniteui-angular-charts';

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
    IgxDataPieChartModule,
    IgxItemLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataPieChartDescriptionModule, ItemLegendDescriptionModule } from 'igniteui-angular-core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';
import { IgxPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-angular-layouts';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxDataPieChartComponent } from 'igniteui-angular-charts';

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
	@ViewChild("propertyEditorPropertyDescription1", { static: true } )
	private propertyEditorPropertyDescription1: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxDataPieChartComponent
    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataPieChartDescriptionModule.register(context);
            ItemLegendDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

	public editorButtonReplayTransitionInDomain({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionButtonClickEventArgs }): void {
	    var chart = this.chart;
	    chart.replayTransitionIn();
	}

}
```
```html
<div class="container vertical sample">
  <div class="options vertical">
      <igx-property-editor-panel
      [componentRenderer]="renderer"
      [target]="chart"
      descriptionType="DataPieChart"
      isHorizontal="true"
      isWrappingEnabled="true"
      name="propertyEditorPanel1"
      #propertyEditorPanel1>
          <igx-property-editor-property-description
          propertyPath="ReplayTransitionIn"
          label="Replay Animation"
          primitiveValue="Replay Animation"
          valueType="Button"
          (buttonClicked)="this.editorButtonReplayTransitionInDomain($event)"
          name="propertyEditorPropertyDescription1"
          #propertyEditorPropertyDescription1>
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Global Electricity Demand by Energy Use
  </div>
  <div class="container fill">
      <igx-data-pie-chart
      name="chart"
      #chart
      [dataSource]="energyGlobalDemand"
      transitionInMode="Auto"
      transitionInDuration="1000"
      transitionInSpeedType="Random"
      highlightingMode="None">
      </igx-data-pie-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

## Additional Resources
- [Donut Chart](donut-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References
`IgxDataPieChart`
