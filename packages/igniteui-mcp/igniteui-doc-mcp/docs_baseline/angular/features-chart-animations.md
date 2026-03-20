---
title: Angular Chart Animations | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Animations
_keywords: Angular Charts, Animations, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Animations
_premium: true
---

# Angular Chart Animations

Animations allows you to ease-in the series as it loads a new data source. The available animation differs depending on the type of series involved. For example, the column series animates by rising from the x-axis, a line series animates by drawing from the origin of y-axis.

Animations are disabled in the Ignite UI for Angular Charts, but they can be enabled by setting the [`isTransitionInEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isTransitionInEnabled) property to true. From there, you can set the [`transitionInDuration`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInDuration) property to determine how long your animation should take to complete and the [`transitionInMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInMode) to determine the type of animation that takes place.

## Angular Chart Animation Example

The following example depicts a [Line Chart](../types/line-chart.md) with an animation set to the default [`transitionInMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInMode) - "Auto." The drop-down and slider at the top in this example will allow you to modify the [`transitionInMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInMode) and [`transitionInDuration`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInDuration), respectively, so that you can see what the different supported animations look like at different speeds.

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
import { ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { IgxCategoryChartComponent } from "igniteui-angular-charts";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public transitionInMode: string = "Auto";
    public transitionInInterval: string = "1000";
    public data: any[];

    @ViewChild("chart", { static: true })
    public chart: IgxCategoryChartComponent;

    constructor() {
        this.data = this.generateData();
    }

    public onChangeAmountClicked() {
        this.data = this.generateData();
    }

    public OnTransitionIntervalChange(e: any) {
        this.transitionInInterval = e.target.value;
    }

    private generateData(): any[] {
        const data: any[] = [
            { Year: "2009", Europe: 31, China: 21, USA: 19 },
            { Year: "2010", Europe: 43, China: 26, USA: 24 },
            { Year: "2011", Europe: 66, China: 29, USA: 28 },
            { Year: "2012", Europe: 69, China: 32, USA: 26 },
            { Year: "2013", Europe: 58, China: 47, USA: 38 },
            { Year: "2014", Europe: 40, China: 46, USA: 31 },
            { Year: "2015", Europe: 78, China: 50, USA: 19 },
            { Year: "2016", Europe: 13, China: 90, USA: 52 },
            { Year: "2017", Europe: 78, China: 132, USA: 50 },
            { Year: "2018", Europe: 40, China: 134, USA: 34 },
            { Year: "2019", Europe: 80, China: 96, USA: 38 }
        ];

        return data;
    }
}
```
```html
<div class="container vertical">
    <div class="options horizontal">
        <label class="options-label">Transition Type: </label>
        <select [(ngModel)]="transitionInMode">
            <option>AccordionFromBottom</option>
            <option>AccordionFromCategoryAxisMaximum</option>
            <option>AccordionFromCategoryAxisMinimum</option>
            <option>AccordionFromLeft</option>
            <option>AccordionFromRight</option>
            <option>AccordionFromTop</option>
            <option>AccordionFromValueAxisMaximum</option>
            <option>AccordionFromValueAxisMinimum</option>
            <option>Expand</option>
            <option>FromZero</option>
            <option>SweepFromBottom</option>
            <option>SweepFromCategoryAxisMaximum</option>
            <option>SweepFromCategoryAxisMinimum</option>
            <option>SweepFromCenter</option>
            <option>SweepFromLeft</option>
            <option>SweepFromRight</option>
            <option>SweepFromTop</option>
            <option>SweepFromValueAxisMaximum</option>
            <option>SweepFromValueAxisMinimum</option>
            <option>Auto</option>
        </select>
        <button (click)="onChangeAmountClicked()">Reload Chart</button>
        <input class="options-slider" type="range" min="50" max="2000" step="50"
              [value]="transitionInInterval" (change)="OnTransitionIntervalChange($event)" />
        <label class="options-label">{{transitionInInterval}}ms</label>
    </div>
    <div class="container">
        <igx-category-chart height="100%"
            chartType="line"
            [dataSource]="data"
            isTransitionInEnabled="true"
            [transitionInMode]="transitionInMode"
            [transitionInDuration]="transitionInInterval"
            yAxisLabelExtent="40"
			computedPlotAreaMarginMode="series"
            #chart>
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
- [Chart Tooltips](chart-tooltips.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgxCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
- [`isTransitionInEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isTransitionInEnabled)
- [`transitionInDuration`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInDuration)
- [`transitionInMode`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInMode)
