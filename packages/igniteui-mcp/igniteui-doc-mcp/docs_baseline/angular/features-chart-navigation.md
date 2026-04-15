---
title: Angular Data Chart | Data Visualization Tools | Navigation | Infragistics
_description: Navigate Infragistics' Angular charts by panning right and left and zooming horizontally and vertically using mouse or touch. Learn about Ignite UI for Angular graph navigation capabilities!
_keywords: Angular charts, data chart, navigation, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart", "ModifierKeys"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Navigation
_premium: true
---

# Angular Chart Navigation

The Ignite UI for Angular charts allows for interactive panning and zooming via the mouse, keyboard and touch.

## Angular Chart Navigation Example

The following example shows all of the available panning and zooming options that are available. You can interact with the example by using the buttons, or select your desired options using the dropdowns or checkboxes.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartScatterCoreModule, IgxDataChartScatterModule, IgxLegendModule, IgxNumberAbbreviatorModule, IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { SampleScatterStats } from "./SampleScatterStats";


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
    IgxDataChartCoreModule,
    IgxDataChartScatterCoreModule,
    IgxDataChartScatterModule,
    IgxLegendModule,
    IgxNumberAbbreviatorModule,
    IgxDataChartInteractivityModule
],
  providers: [SampleScatterStats],
schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts";
import { IgxSizeScaleComponent } from "igniteui-angular-charts";
import { SampleScatterStats } from "./SampleScatterStats";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];

    public isZoomEnabled: boolean = true;

    public defaultInteraction: string = "DragZoom";
    public panModifier: string = "None";
    public zoomModifier: string = "None";

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxNumericXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    constructor() {
        this.data = SampleScatterStats.getCountriesWithHighIncome();
    }

    public ngOnInit() {
        this.createSeries();
        this.chart.actualWindowScaleHorizontal = 0.6;
        this.chart.actualWindowScaleVertical = 0.6;
        this.chart.actualWindowPositionVertical = 0.2;
        this.chart.actualWindowPositionHorizontal = 0.2;
    }

    public onPanUpClick() {
        this.chart.actualWindowPositionVertical -= 0.05;
    }

    public onPanDownClick() {
        this.chart.actualWindowPositionVertical += 0.05;
    }

    public onPanRightClick() {
        this.chart.actualWindowPositionHorizontal += 0.05;
    }

    public onPanLeftClick() {
        this.chart.actualWindowPositionHorizontal -= 0.05;
    }

    public createSeries() {
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 10;
        sizeScale.maximumValue = 60;

        const series = new IgxBubbleSeriesComponent();
        series.title = "Countries";
        series.dataSource = SampleScatterStats.getCountries();
        series.showDefaultTooltip = true;
        series.xMemberPath = "population";
        series.yMemberPath = "gdpTotal";
        series.radiusMemberPath = "gdpPerCapita";
        series.radiusScale = sizeScale;
        series.xAxis = this.xAxis;
        series.yAxis = this.yAxis;

        this.chart.series.clear();
        this.chart.series.add(series);
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <span class="options-item">Default Drag Option:</span>
        <select [(ngModel)]="defaultInteraction">
            <option>DragZoom</option>
            <option>DragPan</option>
            <option>None</option>
        </select>
        <span class="options-item">Pan Modifier:</span>
        <select [(ngModel)]="panModifier">
            <option>Alt</option>
            <option>Control</option>
            <option>Shift</option>
            <option>Windows</option>
            <option>Apple</option>
            <option>None</option>
        </select>
        <span class="options-item">Zoom Modifier:</span>
        <select [(ngModel)]="zoomModifier">
            <option>Alt</option>
            <option>Control</option>
            <option>Shift</option>
            <option>Windows</option>
            <option>Apple</option>
            <option>None</option>
        </select>
    </div>
    <div class="options horizontal">
        <label class="options-item"><input type="checkbox" [(ngModel)]="isZoomEnabled" /> Enable Zooming</label>
        <button class="options-item" (click)="onPanUpClick()">Pan Up</button>
        <button class="options-item" (click)="onPanDownClick()">Pan Down</button>
        <button class="options-item" (click)="onPanLeftClick()">Pan Left</button>
        <button class="options-item" (click)="onPanRightClick()">Pan Right</button>
    </div>

    <div class="container">
        <igx-data-chart #chart [dataSource]="data"
            width="100%"
            height="100%"
            [defaultInteraction]="defaultInteraction"
            [dragModifier]="zoomModifier"
            [panModifier]="panModifier"
            [isHorizontalZoomEnabled]="isZoomEnabled"
            [isVerticalZoomEnabled]="isZoomEnabled">

            <igx-numeric-x-axis #xAxis
                isLogarithmic=true
                abbreviateLargeNumbers=true
                title="Population">
            </igx-numeric-x-axis>
            <igx-numeric-y-axis #yAxis
                isLogarithmic=true
                abbreviateLargeNumbers=true
                title="Total GDP ($)">
            </igx-numeric-y-axis>
        </igx-data-chart>
    </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">Download it for free.</a>

## Chart Navigation with User Interactions

Whether or not zooming is on by default depends on the chart you are using. If you are using [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), it is on by default, but it is not in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html). In order to enable or disable navigation in the UI, you need to set either the [`isHorizontalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isHorizontalZoomEnabled) and/or the [`isVerticalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isVerticalZoomEnabled) properties of the chart, depending on the direction that you wish to enable or disable zooming.

It is also possible to zoom or pan simply by clicking the mouse or using touch. The [`defaultInteraction`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#defaultInteraction) property of the data chart determines what happens on mouse click or touch events. This property defaults to `DragZoom` and when set to this with zooming enabled, clicking and dragging will place a preview rectangle over the plot area that will become the zoomed area of the chart. This [`defaultInteraction`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#defaultInteraction) property can also be set to either `DragPan` to allow panning or `None` to prevent these operations.

## Chart Navigation with Touch, Mouse and Keyboard

Navigation in the Angular data chart can happen with either touch, the mouse or the keyboard. The following operations can be invoked using touch, mouse or keyboard operations by default:

- **Panning**: Using <kbd>🡐</kbd> <kbd>🡒</kbd> <kbd>🡑</kbd> <kbd>🡓</kbd> arrow keys on the keyboard or holding the <kbd>SHIFT</kbd> key, clicking and dragging with the mouse or pressing and moving your finger via touch.
- **Zoom In**: Using the <kbd>PAGE UP</kbd> key on the keyboard, rolling the mouse wheel up, or pinching to zoom in via touch.
- **Zoom Out**: Using the <kbd>PAGE DOWN</kbd> key on the keyboard, rolling the mouse wheel down, or pinching to zoom out via touch.
- **Fit to Chart Plot Area**: Using the <kbd>HOME</kbd> key on the keyboard. There is no mouse or touch operation for this.
- **Area Zoom**: Click and drag the mouse within the plot area with the [`defaultInteraction`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#defaultInteraction) property set to its default - `DragZoom`.

The zoom and pan operations can also be enabled by using modifier keys by setting the [`dragModifier`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#dragModifier) and [`panModifier`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#panModifier) properties, respectively. These properties can be set to the following modifier keys, and when pressed, the corresponding operation will be executed:

| Modifier Value | Corresponding Key |
| ---------------|------------------ |
| `Shift`        | <kbd>SHIFT</kbd> |
| `Control`      | <kbd>CTRL</kbd> |
| `Windows`      | <kbd>WIN</kbd> |
| `Apple`        | <kbd>APPLE</kbd> |
| `None`         | no keys |

## Chart Navigation with Scrollbars

The chart can be scrolled by enabling the [`verticalViewScrollbarMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#verticalViewScrollbarMode) and [`horizontalViewScrollbarMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#horizontalViewScrollbarMode) properties.

These can be configured to the following options

- `Persistent` - The scrollbars always stay visible, as long as the chart is zoomed in, and fade away when fully zoomed out.
- `Fading` - The scrollbars disappear after use and reappear when the mouse is near their location.
- `FadeToLine` - The scrollbars are reduced to a thinner line when zooming is not in use.
- `None` - Default, no scrollbars are shown.

The following example demonstrates enabling scrollbars.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxFinancialChartModule, IgxDataChartInteractivityModule, IgxLegendModule } from 'igniteui-angular-charts';

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
    IgxFinancialChartModule,
    IgxDataChartInteractivityModule,
    IgxLegendModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MultipleStocks } from './MultipleStocks';
import { IgxFinancialChartComponent } from 'igniteui-angular-charts';

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
	private chart: IgxFinancialChartComponent
    private _multipleStocks: MultipleStocks = null;
    private _isFetching: boolean = false;
    public get multipleStocks(): MultipleStocks {
        if (this._multipleStocks == null && !this._isFetching)
        {
            this._isFetching = true;
            ( async () => { this._multipleStocks = await (await MultipleStocks.fetch()); this._detector.markForCheck();  })();
        }
        return this._multipleStocks;
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
      <igx-financial-chart
      name="chart"
      #chart
      isToolbarVisible="false"
      isVerticalZoomEnabled="true"
      isHorizontalZoomEnabled="true"
      [dataSource]="multipleStocks"
      verticalViewScrollbarMode="Fading"
      horizontalViewScrollbarMode="Persistent"
      zoomSliderType="None"
      windowRect="0, 0, 0.5, 1">
      </igx-financial-chart>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
```


<div class="divider--half"></div>

## Chart Navigation through Code

> \[!Note]
> Code navigation of the chart can only be used for the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control.

The Angular data chart provides several navigation properties that are updated each time a zoom or pan operation happens in the chart. You can also set each of these properties to zoom or pan the data chart programmatically. The following is a list of these properties:

- [`windowPositionHorizontal`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowPositionHorizontal): A numeric value describing the X portion of the content view rectangle displayed by the data chart.
- [`windowPositionVertical`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowPositionVertical): A numeric value describing the Y portion of the content view rectangle displayed by the data chart.
- [`windowRect`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect): A `Rect` object representing a rectangle that represents the portion of the chart that is currently in view. For example, a [`windowRect`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect) of "0, 0, 1, 1" would be the entirety of the data chart.
- [`windowScaleHorizontal`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#windowScaleHorizontal): A numeric value describing the width portion of the content view rectangle displayed by the data chart.
- [`windowScaleVertical`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#windowScaleVertical): A numeric value describing the height portion of the content view rectangle displayed by the data chart.

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Tooltips](chart-tooltips.md)
- [Chart Trendlines](chart-trendlines.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`defaultInteraction`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#defaultInteraction)
- [`dragModifier`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#dragModifier)
- [`isHorizontalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isHorizontalZoomEnabled)
- [`isVerticalZoomEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isVerticalZoomEnabled)
- [`panModifier`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#panModifier)
- [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
- [`IgxFinancialChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)
