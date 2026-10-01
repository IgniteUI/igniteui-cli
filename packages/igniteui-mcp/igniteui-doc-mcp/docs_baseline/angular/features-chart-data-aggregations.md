---
title: Angular Data Aggregations | Data Visualization | Infragistics
description: Infragistics' Angular Data Aggregations
keywords: Angular Charts, Markers, Infragistics
license: commercial

namespace: Infragistics.Controls.Charts
llms:
  description: "In the Ignite UI for Angular CategoryChart control Data Aggregations feature allows you to group data in the chart by unique values on the XAxis and then sort those groups."
_tocName: Chart Data Aggregations
_premium: true
---
# Angular Data Aggregations

In the Ignite UI for Angular `IgxCategoryChart` control Data Aggregations feature allows you to group data in the chart by unique values on the `XAxis` and then sort those groups. You may then apply summaries which will be reflected by the range of the `YAxis` and will be displayed in the tooltip when hovering the series.

## Angular Data Aggregations Example

The following example depicts a [Column Chart](../types/column-chart.md) that groups by the Country member of the `XAxis` and can be changed to other properties within each data item such as Product, MonthName, and Year to aggregate the sales data. Also a summary and sort option is available to get a desirable order for the grouped property.

Note, the abbreviated functions found within the dropdowns for `InitialSummaries` and `GroupSorts` have be applied as shown to get a correct result based on the property you assign. eg. Sum(sales) as Sales | Sales Desc

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxLegendModule, IgxCategoryChartModule } from 'igniteui-angular-charts';

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
    IgxLegendModule,
    IgxCategoryChartModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-angular-core';
import { SalesDataItem, SalesData } from './SalesData';
import { IgxPropertyEditorPanelComponent, PropertyEditorValueType, IgxPropertyEditorPropertyDescriptionComponent, IgxPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-angular-layouts';
import { IgxCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-angular-charts';
import { EnumUtil } from 'igniteui-angular-core';

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

	@ViewChild("editor", { static: true } )
	private editor: IgxPropertyEditorPanelComponent
	@ViewChild("initialGroups", { static: true } )
	private initialGroups: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
    private _salesData: SalesData = null;
    public get salesData(): SalesData {
        if (this._salesData == null)
        {
            this._salesData = new SalesData();
        }
        return this._salesData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
		this.propertyEditorInitAggregationsOnViewInit();
	}

	public propertyEditorInitAggregationsOnViewInit(): void {

	    var editor = this.editor;
	    var initialSummariesDropdown = new IgxPropertyEditorPropertyDescriptionComponent();
	    var sortGroupsDropdown = new IgxPropertyEditorPropertyDescriptionComponent();

	    initialSummariesDropdown.label = "Initial Summaries";
	    initialSummariesDropdown.valueType = PropertyEditorValueType.EnumValue;
	    initialSummariesDropdown.shouldOverrideDefaultEditor = true;
	    initialSummariesDropdown.dropDownNames = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];
	    initialSummariesDropdown.dropDownValues = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];

	    sortGroupsDropdown.label = "Sort Groups"
	    sortGroupsDropdown.valueType = PropertyEditorValueType.EnumValue;
	    sortGroupsDropdown.shouldOverrideDefaultEditor = true;
	    sortGroupsDropdown.dropDownNames = ["Sales Asc", "Sales Desc"];
	    sortGroupsDropdown.dropDownValues = ["Sales Asc","Sales Desc"];

	    editor.properties.add(initialSummariesDropdown);
	    editor.properties.add(sortGroupsDropdown);

	    initialSummariesDropdown.changed.subscribe((event: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }) => {

	        var chart = this.chart;
	        var intialSummaryVal = event.args.newValue.toString();
	        chart.initialSummaries = intialSummaryVal;
	    });

	    sortGroupsDropdown.changed.subscribe((event: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }) => {

	        var chart = this.chart;
	        var groupSortsVal = event.args.newValue.toString();
	        chart.groupSorts = groupSortsVal;
	    });
	}

	public editorChangeUpdateInitialGroups({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {
	    var chart = this.chart;
	    chart.initialGroups = args.newValue.toString();
	}

}
```
```html
<div class="container vertical sample">
  <div class="options vertical">
      <igx-property-editor-panel
      name="editor"
      #editor
      [componentRenderer]="renderer"
      [target]="chart"
      descriptionType="CategoryChart"
      isHorizontal="true"
      isWrappingEnabled="true">
          <igx-property-editor-property-description
          propertyPath="InitialGroupsHandler"
          name="InitialGroups"
          #initialGroups
          label="Initial Groups"
          valueType="EnumValue"
          shouldOverrideDefaultEditor="true"
          dropDownNames="Country, Product, Month, Year"
          dropDownValues="Country, Product, Month, Year"
          primitiveValue="Country"
          (changed)="this.editorChangeUpdateInitialGroups($event)">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Sales Aggregated by Country and Product
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      [dataSource]="salesData"
      chartType="Column"
      isHorizontalZoomEnabled="false"
      isVerticalZoomEnabled="false"
      crosshairsDisplayMode="None"
      initialGroups="Country"
      initialSummaries="Sum(Sales) as Sales"
      groupSorts="Sales Desc">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```

```html
<igx-category-chart
    [dataSource]="salesData"
    initialGroups="country"
    initialSummaries="Sum(sales) as Sales"
    groupSorts="Sales Desc">
</igx-category-chart>
```

## API References
`IgxCategoryChart`
