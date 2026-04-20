---
title: Angular ZoomSlider | Data Visualization Tools | Navigation | Zooming | DataChart | Data Binding | Infragistics
_description: Use Infragistics' Angular zoom slider control to easily display a subset of data with two handles representing minimum and maximum values. Improve your data visualization with Ignite UI for Angular zoom slider!
_keywords: zoom slider, Ignite UI for Angular, Infragistics, data chart
_license: commercial
mentionedTypes: ["ZoomSlider", "XamDataChart"]
_tocName: Zoom Slider
---

# Angular Zoom Slider Overview

The Angular ZoomSlider control provides zooming functionality to range-enabled controls. The ZoomSlider features a horizontal scroll bar, a thumbnail of the whole range, and a resizable zoom-range window. The ZoomSlider cannot work as a standalone control and it acts as an enhancement for range-based controls like the DataChart or CategoryChart.

## Angular Zoom Slider Example

The following sample demonstrates how to use [`IgxZoomSliderComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxzoomslidercomponent.html) to navigate content in [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxZoomSliderDynamicModule, IgxNumericYAxisModule, IgxNumericXAxisModule, IgxCrosshairLayerModule, IgxDataChartScatterModule, IgxDataChartScatterCoreModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartCategoryCoreModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule, IgxBubbleSeriesModule } from "igniteui-angular-charts";
import { IgxNumberAbbreviatorModule  } from "igniteui-angular-charts";
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
    IgxZoomSliderDynamicModule,
    IgxNumberAbbreviatorModule,
    IgxNumericYAxisModule,
    IgxNumericXAxisModule,
    IgxCrosshairLayerModule,
    IgxDataChartScatterModule,
    IgxDataChartScatterCoreModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartAnnotationModule,
    IgxDataChartInteractivityModule,
    IgxBubbleSeriesModule
],
  providers: [SampleScatterStats],
schemas: []
})
export class AppModule {}
```
```typescript
// tslint:disable:max-line-length
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IgxSizeScaleComponent } from "igniteui-angular-charts";
import { IgxZoomSliderComponent } from "igniteui-angular-charts";
import { MarkerType } from "igniteui-angular-charts";
import { IgRect } from "igniteui-angular-core";
import { IgxRectChangedEventArgs } from "igniteui-angular-core";
import { SampleScatterStats } from "./SampleScatterStats";

@Component({
    standalone: false,
    providers: [ SampleScatterStats ],
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {

    public charts: IgxDataChartComponent[] = [];

    @ViewChild("mainChart", { static: true })
    public mainChart: IgxDataChartComponent = null;

    @ViewChild("zoomChart", { static: true })
    public zoomChart: IgxDataChartComponent = null;

    @ViewChild("zoomSlider", { static: true })
    public zoomSlider: IgxZoomSliderComponent = null;

    @ViewChild("seriesTooltip", { static: true })
    public seriesTooltip: TemplateRef<any>;

    @ViewChild("container", { static: true })
    public container: HTMLDivElement;

    public isSynchronizingZoom: boolean = false;
    public lastRect: IgRect = { left: -1, top: -1, width: -1, height: -1};

    public regions: any[];
    public countriesAll: any[];
    public countriesByRegion: any;

    constructor(private dataService: SampleScatterStats) {

        this.regions = [];
        this.countriesAll = SampleScatterStats.getCountries();
        this.countriesByRegion = {};
        for (const country of this.countriesAll) {
            const name = country.region;

            if (!this.countriesByRegion[name]) {
                this.countriesByRegion[name] = [];
                this.regions.push(name);
                console.log("region " + name);
            }
            this.countriesByRegion[name].push(country);
        }
    }

    public ngAfterViewInit(): void {

        if (this.mainChart !== undefined || this.container !== undefined) {
            // console.log("ngAfterViewInit mainChart");

            this.createSeries(this.mainChart);

            this.mainChart.actualWindowRectChanged.subscribe((e: IgxRectChangedEventArgs) =>
                this.onActualWindowRectChanged(this.mainChart, e)
            );
            this.charts.push(this.mainChart);
        }

        if (this.zoomChart !== undefined) {
            // console.log("ngAfterViewInit zoomChart");
            this.createSeries(this.zoomChart);
        }

        if (this.zoomSlider !== undefined) {
            // console.log("ngAfterViewInit zoomSlider");
            this.zoomSlider.windowRectChanged.subscribe((e: IgxRectChangedEventArgs) =>
                this.onZoomSliderWindowChanged(this.zoomSlider, e)
            );
            this.zoomSlider.resolvingAxisValue.subscribe((e: IgxRectChangedEventArgs) =>
                this.onZoomSliderResolveAxisValue(this.zoomSlider, e)
            );
        }

        if (this.mainChart !== undefined ||
            this.container !== undefined ||
            this.zoomChart !== undefined ||
            this.zoomSlider !== undefined) {

            this.mainChart.gridAreaRectChanged.subscribe((e: IgxRectChangedEventArgs) =>
                this.onGridAreaRectChanged(this.mainChart, e)
            );
        }
    }

    public onActualWindowRectChanged(chart: IgxDataChartComponent, args: IgxRectChangedEventArgs) {

        if (!this.isSynchronizingZoom) {
            this.syncZooms(chart);
        }
    }

    public onZoomSliderWindowChanged(slider: IgxZoomSliderComponent, args: IgxRectChangedEventArgs) {
        if (!this.isSynchronizingZoom) {
            this.syncZooms(slider);
        }
    }

    public syncZooms(sender: any) {
        window.setTimeout(() => {
            try {
                this.isSynchronizingZoom = true;

                const zoomWindow = this.zoomSlider.windowRect;
                const datanChart = sender as IgxDataChartComponent;
                let chartWindow: any;
                if (sender === this.zoomSlider) {
                    chartWindow = this.mainChart.actualWindowRect;
                } else {
                    chartWindow = datanChart.actualWindowRect;
                }
                // console.log("chart " + this.getRect(this.mainChart.actualWindowRect));
                // console.log("zoom   " + this.getRect(zoomWindow));

                if (sender === this.zoomSlider) {
                    this.charts.map((chart) => {
                        this.updateChartZoom(chart, {
                            top: chartWindow.top,
                            left: zoomWindow.left,
                            width: zoomWindow.width,
                            height: chartWindow.height });
                    });
                } else {
                    this.zoomSlider.windowRect = {
                        top: zoomWindow.top,
                        left: chartWindow.left,
                        width: chartWindow.width,
                        height: zoomWindow.height };

                    this.charts.map((chart) => {
                        this.updateChartZoom(chart, {
                            top: zoomWindow.top,
                            left: chartWindow.left,
                            width: chartWindow.width,
                            height: zoomWindow.height });
                    });
                }
            } finally {
                this.isSynchronizingZoom = false;
            }
        }, 0);
    }

    public onZoomSliderResolveAxisValue(slider: IgxZoomSliderComponent, args: any) {

        // console.log("onZoomSliderResolveAxisValue");
        const index = Math.round(args.position * (this.countriesAll.length - 1));
        const item = this.countriesAll[index];
        if (item) {
            args.value = SampleScatterStats.abbreviate(item.population);
        }
    }

    public onGridAreaRectChanged(chart: IgxDataChartComponent, e: any) {
        const newRect = e.args.newRect;
        if (!this.container) {
            return;
        }

        if (newRect.left !== this.lastRect.left ||
            newRect.top !== this.lastRect.top ||
            newRect.width !== this.lastRect.width ||
            newRect.height !== this.lastRect.height) {

            let rightMargin = this.mainChart.rightMargin;
            if (isNaN(rightMargin)) {
                rightMargin = this.mainChart.autoMarginWidth;
            }
            const width = newRect.left + newRect.width + rightMargin;

            const right = newRect.left + newRect.width;
            const insetLeft = newRect.left;
            const insetRight = width - right;
            this.lastRect = newRect;
            this.zoomSlider.startInset = insetLeft - this.zoomSlider.trackStartInset;
            this.zoomSlider.endInset = insetRight - this.zoomSlider.trackEndInset;

            if (this.zoomSlider.endInset < 0) {
                const inset = this.zoomSlider.endInset;
                this.zoomSlider.endInset = 0;
                this.charts.map(c => c.rightMargin += (inset * -1.0));
            }
            if (this.zoomSlider.startInset < 0) {
                const inset = this.zoomSlider.startInset;
                this.zoomSlider.startInset = 0;
                this.charts.map(c => c.leftMargin += (inset * -1.0));
            }

            this.zoomChart.leftMargin = insetLeft;
            this.zoomChart.rightMargin = insetRight;
            this.zoomChart.bottomMargin = this.zoomSlider.barExtent;
        }
    }

    public updateChartZoom(chart: IgxDataChartComponent, zoom: IgRect) {

        const yAxis = chart.actualAxes.filter(a => a.isNumeric)[0] as IgxNumericYAxisComponent;

        let indexEnd = Math.ceil((this.countriesAll.length - 1) * (zoom.left + zoom.width));
        let indexStart = Math.floor((this.countriesAll.length - 1) * zoom.left);

        let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;

        if (indexStart < 0) {
            indexStart = 0;
        }

        indexEnd = Math.min(indexEnd, this.countriesAll.length - 1);
        for (let i = indexStart; i <= indexEnd; i++) {
            min = Math.min(min, this.countriesAll[i].gdpTotal);
            max = Math.max(max, this.countriesAll[i].gdpTotal);
        }

        // console.log("data min " + min + " max " + max);
        // console.log("axis min " + yAxis.actualMinimumValue + " max " + yAxis.actualMaximumValue);
        const yMin = (min - yAxis.actualMinimumValue) / (yAxis.actualMaximumValue - yAxis.actualMinimumValue);
        const yMax = (max - yAxis.actualMinimumValue) / (yAxis.actualMaximumValue - yAxis.actualMinimumValue);

        const newZoom = {
            left: zoom.left,
            width: zoom.width,
            top: (1.0 - yMax),
            height: (yMax - yMin)
        };
        // console.log("updateChartZoom " + this.getRect(newZoom));
        chart.windowRect = newZoom;
    }

    public createSeries(chart: IgxDataChartComponent) {
        const sizeScale1 = new IgxSizeScaleComponent();
        sizeScale1.minimumValue = 15;
        sizeScale1.maximumValue = 40;
        const sizeScale2 = new IgxSizeScaleComponent();
        sizeScale2.minimumValue = 5;
        sizeScale2.maximumValue = 15;

        const xAxis = chart.actualAxes.filter(a => a.isNumeric)[0] as IgxNumericXAxisComponent;
        const yAxis = chart.actualAxes.filter(a => a.isNumeric)[1] as IgxNumericYAxisComponent;

        const series1 = new IgxBubbleSeriesComponent();
        series1.title = "High Income Country";
        series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();
        series1.showDefaultTooltip = false;
        series1.xMemberPath = "population";
        series1.yMemberPath = "gdpTotal";
        series1.radiusMemberPath = "gdpPerCapita";
        series1.radiusScale = sizeScale1;
        series1.markerType = MarkerType.Circle;
        series1.xAxis = xAxis;
        series1.yAxis = yAxis;
        series1.tooltipTemplate = this.seriesTooltip;

        const series2 = new IgxBubbleSeriesComponent();
        series2.title = "Low Income Country";
        series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
        series2.showDefaultTooltip = false;
        series2.xMemberPath = "population";
        series2.yMemberPath = "gdpTotal";
        series2.radiusMemberPath = "gdpPerCapita";
        series2.radiusScale = sizeScale2;
        series2.markerType = MarkerType.Circle;
        series2.xAxis = xAxis;
        series2.yAxis = yAxis;
        series2.tooltipTemplate = this.seriesTooltip;

        chart.series.add(series1);
        chart.series.add(series2);

        // chart.markerOutlines = [ "#7446B9", "#9FB328", "#2E9CA6", "#525251", "#dcbf3f", "#F96232"];
        // chart.brushes = [ "#7446B9", "#9FB328", "#2E9CA6", "#525251", "#dcbf3f", "#F96232"];

    }

    public getRect(rect: any) {
        const str = "T " + rect.top.toFixed(1) + " L " + rect.left.toFixed(1)
        + " W " + rect.width.toFixed(1)
        + " H " + rect.height.toFixed(1);
        return str;
    }
}
```
```html
<div #container class="container"
    width="100%" height="calc(100% - 200px)">

    <igx-data-chart #mainChart name="mainChart"
    width="100%"
    height="calc(100% - 200px)"
    isHorizontalZoomEnabled="true"
    isVerticalZoomEnabled="false"
    [dataSource]="countriesAll"
    chartTitle="World GDP vs Population"
    titleTopMargin="10">

        <igx-numeric-x-axis #mainXAxis
            isLogarithmic=true
            abbreviateLargeNumbers=true
            title="Population">
        </igx-numeric-x-axis>
        <igx-numeric-y-axis #mainYAxis
            isLogarithmic=true
            abbreviateLargeNumbers=true
            titleLeftMargin="10"
            title="Total GDP ($)">
        </igx-numeric-y-axis>
    </igx-data-chart>

    <div  class="zoomPane" width="100%" height="160px" >
        <div class="zoomChart" width="100%" height="160px"  >
            <igx-data-chart
            #zoomChart name="zoomChart"
            width="100%"
            height="160px"
            isHorizontalZoomEnabled="true"
            isVerticalZoomEnabled="true"
            [dataSource]="countriesAll">

                <igx-numeric-x-axis #zoomXAxis
                    isLogarithmic=true
                    abbreviateLargeNumbers=true
                    labelVisibility="collapsed" >
                </igx-numeric-x-axis>
                <igx-numeric-y-axis #zoomYAxis
                    isLogarithmic=true
                    abbreviateLargeNumbers=true
                    labelVisibility="collapsed" >
                </igx-numeric-y-axis>

            </igx-data-chart>
        </div>
        <div class="zoomSlider" width="100%" height="160px" >

            <igx-zoom-slider
            #zoomSlider name="zoomSlider"
            width="100%"
            height="160px" >
            </igx-zoom-slider>
        </div>
    </div>

    <ng-template let-series="series" let-item="item" #seriesTooltip>
        <div>
            <span>Region: {{item.region}}<br/></span>
            <span>Country: {{item.name}}<br/></span>
            <span>Population: {{item.getPopulation()}}<br/></span>
            <span>GDP Total: {{item.getGdpTotal()}}<br/></span>
            <span [style.color]="series.actualBrush">GDP Per Capita: {{item.getGdpPerCapita()}}<br/></span>
            <span [style.color]="series.actualBrush">{{series.title}}<br/></span>

        </div>
    </ng-template>
</div>
```
```scss
.container {
    display: block;
    height: 100%;
}

.zoomPane {
    position: relative;
    height: 160px;
}

.zoomChart {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
}

.zoomSlider {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
}
```

<div class="divider--half"></div>

## Usage

| Feature Name                      | Description                                                                                                                                                                |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scrollbar navigation              | Users can change scale and scroll through ranges of data using the built-in capabilities of the ZoomSlider scrollbar.                                                      |
| Panning and zooming               | Users can adjust the display scale by dragging the edges of the thumb pad to either make the current display cover a larger range (zoom out) or a smaller range (zoom in). |
| Multiple user interaction options | All mouse user interactions are redundantly supported through touch and most of them – through the keyboard. For details, see User Interactions and Usability.             |
| Touch support                     | On touch-enabled devices, users can enjoy the full ZoomSlider functionality. All mouse interactions are supported in touch environment.                                    |
| Extensibility                     | The ZoomSlider control supports DataChart control out-of the box.                                                                                                          |
| Configurable zoom-range window    | The initial zoom-range window width and position, as well as its minimum size, are configurable.                                                                           |

## Dependencies

When installing the Angular chart component, the core package must also be installed.

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
```

## Component Modules

The [`IgxZoomSliderComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxzoomslidercomponent.html) requires the following modules:

```ts
import { IgxZoomSliderModule } from "igniteui-angular-charts";
import { IgxZoomSliderComponent } from "igniteui-angular-charts";

@NgModule({
  imports: [
    // ...
    IgxZoomSliderModule,
    // ...
  ],
})
export class AppModule {}
```

## Code Snippet

The following code demonstrates how to setup the ZoomSlider.

```html
<igx-zoom-slider width="100%" height="150px"> </igx-zoom-slider>
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about charts in [Chart Features](charts/chart-features.md) topic.

## API References

The following is a list of API members mentioned in the above sections:

- [`IgxZoomSliderComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxzoomslidercomponent.html)
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
