---
title: Angular Chart Markers | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Markers
_keywords: Angular Charts, Markers, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart", "CategoryChartType", "MarkerType"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Markers
_premium: true
---

# Angular Chart Markers

In Ignite UI for Angular, markers are visual elements that display the values of data points in the chart's plot area. Markers help your end-users immediately identify a data point's value even if the value falls between major or minor grid lines.

## Angular Chart Marker Example

In the following example, the [Line Chart](../types/line-chart.md) is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019 with markers enabled by setting the [`MarkerType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.markertype.html) property to [`Circle`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.markertype.html#Circle) enum value.

The colors of the markers are also managed by setting the [`markerBrushes`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerBrushes) and [`markerOutlines`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerOutlines) properties in the sample below. The markers and [`chartType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) is configurable in this sample by using the drop-downs as well.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxPropertyEditorPanelModule } from 'igniteui-angular-layouts';
import { IgxCategoryChartModule, IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

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
    IgxCategoryChartModule,
    IgxDataChartInteractivityModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, CategoryChartDescriptionModule, DataChartInteractivityDescriptionModule } from 'igniteui-angular-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxPropertyEditorPropertyDescriptionChangedEventArgs, IgxPropertyEditorPropertyDescriptionComponent } from 'igniteui-angular-layouts';
import { IgxCategoryChartComponent, MarkerType, MarkerType_$type } from 'igniteui-angular-charts';
import { EnumUtil } from 'igniteui-angular-core';
import { IgxPropertyEditorPanelComponent } from 'igniteui-angular-layouts';

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
	@ViewChild("chartTypeEditor", { static: true } )
	private chartTypeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("markerTypeEditor", { static: true } )
	private markerTypeEditor: IgxPropertyEditorPropertyDescriptionComponent
	@ViewChild("chart", { static: true } )
	private chart: IgxCategoryChartComponent
    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

	public constructor(private _detector: ChangeDetectorRef)
	{
	}

	public ngAfterViewInit(): void
	{
	}

	public editorChangeUpdateMarkerType({ sender, args }: { sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs }): void {
	    var item = sender as IgxPropertyEditorPropertyDescriptionComponent;
	    var chart = this.chart;

	    var markerVal = item.primitiveValue;
	    chart.markerTypes = markerVal;
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
      [target]="chart"
      descriptionType="CategoryChart"
      isHorizontal="true"
      isWrappingEnabled="true">
          <igx-property-editor-property-description
          propertyPath="ChartType"
          name="ChartTypeEditor"
          #chartTypeEditor
          label="Chart Type"
          primitiveValue="Line">
          </igx-property-editor-property-description>
          <igx-property-editor-property-description
          propertyPath="MarkerTypeHandler"
          name="MarkerTypeEditor"
          #markerTypeEditor
          label="Marker Type"
          shouldOverrideDefaultEditor="true"
          valueType="EnumValue"
          dropDownValues="Circle, Automatic, Triangle, Pyramid, Square, Diamond, Pentagon, Hexagon, Tetragram, Pentagram, Hexagram, None"
          dropDownNames="Circle, Automatic, Triangle, Pyramid, Square, Diamond, Pentagon, Hexagon, Tetragram, Pentagram, Hexagram, None"
          primitiveValue="Circle"
          (changed)="this.editorChangeUpdateMarkerType($event)">
          </igx-property-editor-property-description>
      </igx-property-editor-panel>
  </div>
  <div class="legend-title">
      Renewable Electricity Generated
  </div>
  <div class="container fill">
      <igx-category-chart
      name="chart"
      #chart
      isSeriesHighlightingEnabled="true"
      chartType="Line"
      [dataSource]="countryRenewableElectricity"
      computedPlotAreaMarginMode="Series">
      </igx-category-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Angular Chart Marker Templates

In addition to marker properties, you can implement your own marker by setting a function to the  `MarkerTemplate` property of a series rendered in the [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control as it is demonstrated in example below.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxCategoryChartModule, IgxLegendModule } from "igniteui-angular-charts";


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
    IgxCategoryChartModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit } from "@angular/core";
import { DataTemplateMeasureInfo, DataTemplateRenderInfo } from "igniteui-angular-core";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];

    constructor() { }

    public onSeriesAdded(e: any) {
        e.args.series.markerTemplate = this.getMarker();
    }

    ngOnInit(): void {
        this.data = [
            { Location: "World", Solar: 23, Coal: -1, Hydropower: 1, Wind: 12, Nuclear: 3 },
            { Location: "China", Solar: 26, Coal: 2, Hydropower: 5, Wind: 10, Nuclear: 18 },
            { Location: "U.S.", Solar: 15, Coal: -15, Hydropower: -7, Wind: 10, Nuclear: 1 },
            { Location: "EU", Solar: 11, Coal: -12, Hydropower: -2, Wind: 14, Nuclear: -1 }
        ];
    }

    public getMarker(): any {
        let style = { outline: "#8B5BB1", fill: "white", text: "black" };
        const size = 12;

        return {
            measure: function (measureInfo: DataTemplateMeasureInfo) {
                const context = measureInfo.context;
                const height = context.measureText("M").width;
                const width = context.measureText("0.00").width;
                measureInfo.width = width;
                measureInfo.height = height + 12;
            },
            render: function (renderInfo: DataTemplateRenderInfo) {
                let ctx = renderInfo.context;
                let x = renderInfo.xPosition;
                let y = renderInfo.yPosition;

                if (renderInfo.isHitTestRender) {
                    ctx.fillStyle = renderInfo.data.actualItemBrush.fill;

                    let width = renderInfo.availableWidth;
                    let height = renderInfo.availableHeight;

                    ctx.fillRect(x - (width / 2), y - (height), renderInfo.availableWidth, renderInfo.availableHeight);
                    return;
                }


                const dataItem = renderInfo.data.item;
                if (dataItem === null) return;

                const series = renderInfo.data.series;
                const dataPath = series.valueColumn.propertyName;

                let dataValue = 0;
                switch (dataPath) {
                    case "Solar": dataValue = dataItem.Solar; break;
                    case "Coal": dataValue = dataItem.Coal; break;
                    case "Hydropower": dataValue = dataItem.Hydropower; break;
                    case "Wind": dataValue = dataItem.Wind; break;
                    case "Nuclear": dataValue = dataItem.Nuclear; break;
                }
                ctx.font = '8pt Verdana';
                ctx.textBaseline = 'top';
                ctx.fillStyle = "black";

                let xOffset = 20;
                let yOffset = 10;
                if (dataValue < 0) {
                    ctx.fillText(dataValue + "%", x - (xOffset / 2), y + (yOffset));
                }
                else {
                    ctx.fillText(dataValue + "%", x - (xOffset / 2), y - (yOffset * 2));
                }

                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(x, y, 6, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
            }
        }
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <span id="legendTitle">Percentage Change in Energy Generation in 2019</span>
        <div class="legend">
            <igx-legend #legend orientation="horizontal"></igx-legend>
        </div>
    </div>

    <div class="container">
             <igx-category-chart height="100%" width="100%"
                           [legend]="legend"
                           [dataSource]="data"
                           chartType="Column"
                           thickness="2"
                           isHorizontalZoomEnabled="false"
                           isVerticalZoomEnabled="false"
                           isSeriesHighlightingEnabled="true"
                           (seriesAdded)="onSeriesAdded($event)"
                           xAxisMajorStroke="LightGray"
                           xAxisMajorStrokeThickness="1"
                           yAxisInterval="10"
                           yAxisMinimumValue="-20"
                           yAxisMaximumValue="30">
            </igx-category-chart>
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

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`markerBrushes`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerBrushes)
- [`markerOutlines`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerOutlines)
- [`MarkerType`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.markertype.html)
- [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
