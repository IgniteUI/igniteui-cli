---
title: Angular Treemap | Data Visualization Tools | Orientation | Layout | Data Binding | Infragistics
_description: Use Infragistics' Angular Treemap control show relative weighting of data points at more than one level supporting strip, squarified, and slice-and-dice algorithms. Learn about Ignite UI for Angular treemap!
_keywords: Angular Tree Map, Treemap, layout, orientation, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["Treemap", "TreemapOrientation", "TreemapLayoutType", "TreemapHighlightingMode", "TreemapHighlightedValueDisplayMode"]
namespace: Infragistics.Controls.Charts
_tocName: Treemap
_premium: true
---

# Angular Treemap

The Ignite UI for Angular Treemap chart displays hierarchical (tree-structured) data as a set of nested nodes. Each branch of the tree is given a treemap node, which is then tiled with smaller nodes representing sub-branches. Each node’s rectangle has an area proportional to a specified dimension on the data. Often the nodes are colored to show a separate dimension of the data.

## Angular Treemap Example

In the following example, the [`IgxTreemapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html) demonstrates the 30 largest countries in the world by total area.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxTreemapModule } from 'igniteui-angular-charts';

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
    IgxTreemapModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';
import { IgxTreemapComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("treemap", { static: true } )
	private treemap: IgxTreemapComponent
    private _countyHierarchicalData: CountyHierarchicalData = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
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
      Comparing Population of Countries
  </div>
  <div class="container fill">
      <igx-treemap
      name="treemap"
      #treemap
      [dataSource]="countyHierarchicalData"
      parentIdMemberPath="parent"
      idMemberPath="name"
      labelMemberPath="name"
      valueMemberPath="population"
      fillScaleMode="Value"
      fillScaleMinimumValue="0"
      fillScaleMaximumValue="1500000000"
      fillBrushes="rgba(78, 98, 207, 1) rgba(138, 88, 214, 1)"
      isFillScaleLogarithmic="true"
      rootTitle="Countries"
      headerDisplayMode="Overlay"
      parentNodeBottomPadding="0"
      parentNodeLeftPadding="0"
      parentNodeRightPadding="0"
      parentNodeTopPadding="0"
      outline="black"
      strokeThickness="1">
      </igx-treemap>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Treemap Recommendations

### Are Angular Treemaps right for your project?

When the color and size dimensions are correlated in some way with the tree structure, one can often easily see patterns that would be difficult to spot in other ways. A second advantage of treemaps is that, by construction, they make efficient use of space. As a result, they can legibly display thousands of items on the screen simultaneously.

- Treemaps are more effective than pie charts and other forms of area charts that often do a poor job of classifying data points and communicating the relative differences of their values.
- Treemaps are designed for drill down scenarios. You can continuously drill down into the data set that is represented by smaller rectangles for more efficient data analysis.
- Treemaps are not designed to convey numerical quantities; the intent is to show relative rankings.

Like any other data visualization, a Treemap chart visualization should be used in specific scenarios. It does not solve the same problem that a visualization like a Bar Chart or a Line Chart would. It is really meant for a more complex, richer data display.

### Treemap Use Cases

There are several common use cases for choosing a Treemap. When you:

- Have drill-down hierarchical data (data organized as a tree, with branches and sub-branches).
- Want to illustrate hierarchies of relative weight and comparative values between categories (branches) and subcategories (sub-branches).
- Want to display large data sets that need a compact, space-efficient visualization.
- Want to deliver at-a-glance, quick data analysis without precise values. The relative size of the rectangles help identify patterns and/or outliers very quickly.
- Want to make efficient use of space. Treemaps can legibly display thousands of items on the screen simultaneously.

### When not to Use a Treemap

- You are telling a data story that requires precise values
- You have negative data values
- You have flat, non-hierarchical data
- Your data is similar in size

### Treemap Data Structure

- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the map will not render any nodes.
- All data items must contain at least one data column (e.g. string) which should be mapped to the [`labelMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#labelMemberPath) property.
- All data items must contain at least one numeric data column which should be mapped using the [`valueMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#valueMemberPath) property.
- To categorize data into organized tiles you can optionally use [`parentIdMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#parentIdMemberPath) and [`idMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#idMemberPath).

## Angular Treemap Configuration

In the following example, the treemap demonstrates the ability of changing it's algorithmic structure by modifying the [`layoutType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#layoutType) and [`layoutOrientation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#layoutOrientation) properties.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxTreemapModule } from 'igniteui-angular-charts';

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
    IgxTreemapModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, TreemapDescriptionModule } from 'igniteui-angular-core';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxTreemapComponent } from 'igniteui-angular-charts';

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
	@ViewChild("layoutTypeEditor", { static: true } )
	private layoutTypeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("layoutOrientationEditor", { static: true } )
	private layoutOrientationEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("headerDisplayModeEditor", { static: true } )
	private headerDisplayModeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("labelVerticalAlignmentEditor", { static: true } )
	private labelVerticalAlignmentEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("treemap", { static: true } )
	private treemap: IgxTreemapComponent
    private _countyHierarchicalData: CountyHierarchicalData = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            TreemapDescriptionModule.register(context);
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
      [target]="treemap"
      descriptionType="Treemap"
      isHorizontal="true"
      isWrappingEnabled="true"
      name="propertyEditorPanel1"
      #propertyEditorPanel1>
          <igx-property-editor-property-description
          propertyPath="LayoutType"
          name="LayoutTypeEditor"
          #layoutTypeEditor
          primitiveValue="Squarified"
          label="Layout">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="LayoutOrientation"
          name="LayoutOrientationEditor"
          #layoutOrientationEditor
          primitiveValue="Vertical"
          label="Orientation">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="HeaderDisplayMode"
          name="HeaderDisplayModeEditor"
          #headerDisplayModeEditor
          primitiveValue="Overlay"
          label="Headers">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="LabelVerticalAlignment"
          name="LabelVerticalAlignmentEditor"
          #labelVerticalAlignmentEditor
          primitiveValue="Center"
          label="Labels">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Comparing Population of Countries
  </div>
  <div class="container fill">
      <igx-treemap
      name="treemap"
      #treemap
      [dataSource]="countyHierarchicalData"
      rootTitle="Countries"
      parentIdMemberPath="parent"
      idMemberPath="name"
      labelMemberPath="name"
      valueMemberPath="population"
      fillBrushes="rgba(41, 158, 65, 1) rgba(78, 98, 207, 1) rgba(94, 53, 156, 1)"
      isFillScaleLogarithmic="true"
      headerDisplayMode="Overlay"
      parentNodeBottomPadding="0"
      parentNodeLeftPadding="0"
      parentNodeRightPadding="0"
      parentNodeTopPadding="0">
      </igx-treemap>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

### Layout Types

The Treemap chart displays the relative weight of data. It uses a variety of algorithms to help it determine how the layout of its data items should occur:

- `SliceAndDiced` - layout algorithm aims to preserve the initial order at the expense of the aspect ratio.
- `Squarified` - layout tiling algorithm has a better aspect ratio than the `SliceAndDice` and keeps a better order than Squarified.
- `Stripped` - layout type algorithm obtains the best aspect ratio but the objects are arranged by size.

The Treemap allows you to choose the algorithm that is best for your requirements, defaulting to use the Squarified method. It also includes the ability to allow you to colorize nodes using two mechanisms:

- A group-based mechanism that colors items with like values
- A scale-based mechanism similar to a map choropleth, which maps node colors based on their value.

### Layout Orientation

[`layoutOrientation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#layoutOrientation) property enables the user to set the direction in which the nodes of the hierarchy will be expanded.

Note that the [`layoutOrientation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#layoutOrientation) property works with the layout types SliceAndDice and Strip.

- `Horizontal` – the child nodes are going to be stacked horizontally(SliceAndDice).
- `Vertical` – the child nodes are going to be stacked vertically (SliceAndDice).

## Angular Treemap Styling

In the following example, the treemap demonstrates the ability of changing the look and feel of the nodes achieved by styling through the `NodeStylingScript` event.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxTreemapModule } from 'igniteui-angular-charts';

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
    IgxTreemapModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';
import { IgxTreemapComponent, IgxTreemapNodeStyleMappingComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("treemap", { static: true } )
	private treemap: IgxTreemapComponent
	@ViewChild("styling1", { static: true } )
	private styling1: IgxTreemapNodeStyleMappingComponent
	@ViewChild("styling2", { static: true } )
	private styling2: IgxTreemapNodeStyleMappingComponent
	@ViewChild("styling3", { static: true } )
	private styling3: IgxTreemapNodeStyleMappingComponent
	@ViewChild("styling4", { static: true } )
	private styling4: IgxTreemapNodeStyleMappingComponent
	@ViewChild("styling5", { static: true } )
	private styling5: IgxTreemapNodeStyleMappingComponent
	@ViewChild("styling6", { static: true } )
	private styling6: IgxTreemapNodeStyleMappingComponent
	@ViewChild("styling7", { static: true } )
	private styling7: IgxTreemapNodeStyleMappingComponent
	@ViewChild("styling8", { static: true } )
	private styling8: IgxTreemapNodeStyleMappingComponent
    private _countyHierarchicalData: CountyHierarchicalData = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
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
      Comparing Population of Countries
  </div>
  <div class="container fill">
      <igx-treemap
      name="treemap"
      #treemap
      [dataSource]="countyHierarchicalData"
      parentIdMemberPath="parent"
      customValueMemberPath="parent"
      idMemberPath="name"
      labelMemberPath="name"
      valueMemberPath="population"
      rootTitle="Countries"
      headerDisplayMode="Overlay"
      overlayHeaderBackground="rgba(63, 64, 63, 1)"
      headerHoverBackground="rgba(63, 64, 63, 1)"
      headerBackground="rgba(63, 64, 63, 1)"
      parentNodeBottomPadding="0"
      parentNodeLeftPadding="0"
      parentNodeRightPadding="0"
      parentNodeTopPadding="0"
      outline="black"
      strokeThickness="1">
          <igx-treemap-node-style-mapping
          name="styling1"
          #styling1
          value="Africa"
          fill="rgba(115, 86, 86, 1)"
          mappingMode="CustomValue">
          </igx-treemap-node-style-mapping>
          <igx-treemap-node-style-mapping
          name="styling2"
          #styling2
          value="Europe"
          fill="rgba(97, 171, 55, 1)"
          mappingMode="CustomValue">
          </igx-treemap-node-style-mapping>
          <igx-treemap-node-style-mapping
          name="styling3"
          #styling3
          value="Asia"
          fill="rgba(139, 91, 177, 1)"
          mappingMode="CustomValue">
          </igx-treemap-node-style-mapping>
          <igx-treemap-node-style-mapping
          name="styling4"
          #styling4
          value="North America"
          fill="rgba(95, 186, 172, 1)"
          mappingMode="CustomValue">
          </igx-treemap-node-style-mapping>
          <igx-treemap-node-style-mapping
          name="styling5"
          #styling5
          value="South America"
          fill="rgba(238, 88, 121, 1)"
          mappingMode="CustomValue">
          </igx-treemap-node-style-mapping>
          <igx-treemap-node-style-mapping
          name="styling6"
          #styling6
          value="Middle East"
          fill="rgba(109, 177, 255, 1)"
          mappingMode="CustomValue">
          </igx-treemap-node-style-mapping>
          <igx-treemap-node-style-mapping
          name="styling7"
          #styling7
          value="Central America"
          fill="rgba(247, 210, 98, 1)"
          mappingMode="CustomValue">
          </igx-treemap-node-style-mapping>
          <igx-treemap-node-style-mapping
          name="styling8"
          #styling8
          value="Oceania"
          fill="rgba(168, 168, 183, 1)"
          mappingMode="CustomValue">
          </igx-treemap-node-style-mapping>
      </igx-treemap>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


### Angular Treemap Highlighting

In the following example, the treemap demonstrates the ability of node highlighting. There are two options for this feature. Each node can individually brighten, by decreasing its opacity, or cause all other nodes to trigger the same effect. To enable this feature, set [`highlightingMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#highlightingMode)to Brighten or FadeOthers.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxTreemapModule } from 'igniteui-angular-charts';

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
    IgxTreemapModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, TreemapDescriptionModule } from 'igniteui-angular-core';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';
import { IgxPropertyEditorPanelComponent, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxTreemapComponent } from 'igniteui-angular-charts';

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

	@ViewChild("propertyEditor", { static: true } )
	private propertyEditor: IgxPropertyEditorPanelComponent
	@ViewChild("highlightedModeEditor", { static: true } )
	private highlightedModeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("treemap", { static: true } )
	private treemap: IgxTreemapComponent
    private _countyHierarchicalData: CountyHierarchicalData = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            TreemapDescriptionModule.register(context);
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
      name="PropertyEditor"
      #propertyEditor
      [componentRenderer]="renderer"
      [target]="treemap"
      descriptionType="Treemap"
      isHorizontal="true"
      isWrappingEnabled="true">
          <igx-property-editor-property-description
          propertyPath="HighlightingMode"
          name="HighlightedModeEditor"
          #highlightedModeEditor
          label="Highlighting Mode: "
          primitiveValue="Brighten"
          dropDownValues="Brighten, FadeOthers">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Comparing Population of Countries
  </div>
  <div class="container fill">
      <igx-treemap
      name="treemap"
      #treemap
      [dataSource]="countyHierarchicalData"
      parentIdMemberPath="parent"
      idMemberPath="name"
      labelMemberPath="name"
      valueMemberPath="population"
      fillScaleMode="Value"
      fillScaleMinimumValue="0"
      fillScaleMaximumValue="1500000000"
      fillBrushes="rgba(78, 98, 207, 1) rgba(138, 88, 214, 1)"
      isFillScaleLogarithmic="true"
      rootTitle="Countries"
      headerDisplayMode="Overlay"
      parentNodeBottomPadding="0"
      parentNodeLeftPadding="0"
      parentNodeRightPadding="0"
      parentNodeTopPadding="0"
      outline="black"
      strokeThickness="1">
      </igx-treemap>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


## Angular Treemap Percent based highlighting

- [`highlightedDataSource`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#highlightedDataSource): Specifies the datasource to read highlighted values from. If null, then highlighted values are read from the ItemsSource property.
- [`highlightedValueMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#highlightedValueMemberPath): Specifies the name of the property in the datasource where the highlighted values are read.
- [`highlightedValueOpacity`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#highlightedValueOpacity): Controls the opacity of the normal value behind the highlighted value.
- [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#highlightedValuesDisplayMode): Enables or disables highlighted values.
  - Auto: The treemap decides what mode to use.
  - Overlay: The treemap displays highlighted values over top the normal value with a slight opacity applied to the normal value.
  - Hidden: The treemap does not show highlighted values.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxTreemapModule } from 'igniteui-angular-charts';

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
    IgxTreemapModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, TreemapDescriptionModule } from 'igniteui-angular-core';
import { CountryTopUrbanPopDataItem, CountryTopUrbanPopData } from './CountryTopUrbanPopData';
import { IgxTreemapComponent } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{

	@ViewChild("treemap", { static: true } )
	private treemap: IgxTreemapComponent
    private _countryTopUrbanPopData: CountryTopUrbanPopData = null;
    public get countryTopUrbanPopData(): CountryTopUrbanPopData {
        if (this._countryTopUrbanPopData == null)
        {
            this._countryTopUrbanPopData = new CountryTopUrbanPopData();
        }
        return this._countryTopUrbanPopData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            TreemapDescriptionModule.register(context);
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
      Comparing Top Urban Population Percentages between North America & Asia
  </div>
  <div class="container fill">
      <igx-treemap
      name="treemap"
      #treemap
      [dataSource]="countryTopUrbanPopData"
      parentIdMemberPath="parent"
      idMemberPath="name"
      labelMemberPath="name"
      valueMemberPath="population"
      highlightedValueMemberPath="urbanPopulation"
      highlightedValuesDisplayMode="Overlay"
      fillBrushes="rgba(252, 65, 0, 1) rgba(255, 197, 90, 1) rgba(0, 33, 94, 1) rgba(44, 78, 128, 1)"
      rootTitle="Continents"
      headerDisplayMode="Auto"
      isFillScaleLogarithmic="true"
      labelVerticalAlignment="Top"
      parentNodeTopMargin="10"
      fillScaleMode="Value"
      textColor="black"
      textStyle="normal bold 25px Verdana">
      </igx-treemap>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Shape Chart](shape-chart.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgxTreemapComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html)
- [`layoutOrientation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#layoutOrientation)
- [`highlightedValuesDisplayMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#highlightedValuesDisplayMode)
- [`highlightedValueMemberPath`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#highlightedValueMemberPath)
- [`layoutType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtreemapcomponent.html#layoutType)
