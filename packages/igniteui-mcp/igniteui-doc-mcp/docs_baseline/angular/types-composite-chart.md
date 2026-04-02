---
title: Angular Composite Chart | Combo Chart| Data Visualization | Infragistics
_description: Infragistics' Angular Composite Chart
_keywords: Angular Charts, Composite Chart, Combo Chart, Infragistics
_license: commercial
mentionedTypes: ["XamDataChart", "Series"]
namespace: Infragistics.Controls.Charts
_tocName: Composite Chart
_premium: true
---

# Angular Composite / Combo Chart

The Ignite UI for Angular Composite Chart, also called a Combo Chart, is visualization that combines different types of chart types in the same plot area. It is very useful when presenting two data series that have a very different scale and might be expressed in different units. The most common example is dollars on one axis and percentage on the other axis.

## Angular Composite / Combo Example

The following example demonstrates how to create Composite Chart using [`IgxColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcolumnseriescomponent.html) and [`IgxLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlineseriescomponent.html) in the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule, IgxCalloutLayerModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxNumberAbbreviatorModule, IgxDataChartCategoryCoreModule } from "igniteui-angular-charts";


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
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxLegendModule,
    IgxCalloutLayerModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxNumberAbbreviatorModule,
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { Component, OnInit } from "@angular/core";

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];

    constructor() { }

    public formatNumber(num: number): string {
        var ret = num;
        if (num >= 1000000) return (num / 1000000.0).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000.0).toFixed(1) + "K";
    
        return ret.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    ngOnInit(): void {

        this.data = [
            { Date: "Jan 1, 2019", Revenue: 16914, Expenses: 10183 },
            { Date: "Mar 1, 2019", Revenue: 15077, Expenses: 12813 },
            { Date: "Jun 1, 2019", Revenue: 16886, Expenses: 14476 },
            { Date: "Sep 1, 2019", Revenue: 17652, Expenses: 11705 },
            { Date: "Jan 1, 2020", Revenue: 21082, Expenses: 14044 },
            { Date: "Mar 1, 2020", Revenue: 17737, Expenses: 12803 },
            { Date: "Jun 1, 2020", Revenue: 18687, Expenses: 13677 },
            { Date: "Sep 1, 2020", Revenue: 21470, Expenses: 13717 },
            { Date: "Jan 1, 2021", Revenue: 28072, Expenses: 17133 }
        ];

        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
      
            item.Revenue = item.Revenue * 1000;
            item.Expenses = item.Expenses * 1000;
      
            item.Income = item.Revenue - item.Expenses;
            item.IncomePerRevenue = (item.Income / item.Revenue) * 100;
      
            // calculating x-offset for callouts
            item.RevenueX = i;
            item.ExpensesX = i + 0.5;
      
            // formatting values for callouts
            item.FormattedRevenue = "$" + this.formatNumber(item.Revenue);
            item.FormattedIncome = "$" + this.formatNumber(item.Income);
            item.FormattedExpenses = "$" + this.formatNumber(item.Expenses);
            item.FormattedProfit = item.IncomePerRevenue + "%";
        }
    }
}
```
```html
<div class="container vertical">
    <div class="options vertical">
        <span id="legendTitle">Facebook Statement of Income 2019-2020</span>
        <div class="legend">
            <igx-legend #legend orientation="horizontal"></igx-legend>
        </div>
    </div>
    <div class="container">
        <igx-data-chart height="100%" width="100%" [legend]="legend"
                   isHorizontalZoomEnabled="false"
                   isVerticalZoomEnabled="false" [dataSource]="data">

            <igx-category-x-axis #xAxis label="Date" overlap="0" gap="0.1" useClusteringMode="true"></igx-category-x-axis>
            <igx-numeric-y-axis #yAxis1 abbreviateLargeNumbers="true" title="In Millions of U.S. Dollars"
                          titleLeftMargin="5" titleRightMargin="0"
                          minimumValue="0" maximumValue="30000000">
            </igx-numeric-y-axis>
            <igx-numeric-y-axis #yAxis2 abbreviateLargeNumbers="true" title="Percentage" majorStrokeThickness="0"
                          minimumValue="0" maximumValue="160" labelLocation="OutsideRight"
                          labelHorizontalAlignment="Left">
            </igx-numeric-y-axis>

            <igx-column-series #revenueSeries [xAxis]="xAxis" [yAxis]="yAxis1"
                          valueMemberPath="Revenue"
                          title="Revenue" markerType="Hidden">
            </igx-column-series>
            <igx-column-series #expenseSeries [xAxis]="xAxis" [yAxis]="yAxis1"
                          valueMemberPath="Expenses"
                          title="Expenses" markerType="Hidden">
            </igx-column-series>

            <igx-spline-area-series #incomeSeries [xAxis]="xAxis" [yAxis]="yAxis2"
                              valueMemberPath="IncomePerRevenue"
                              title="Income / Revenue %" markerType="Circle">
            </igx-spline-area-series>

            <igx-callout-layer isAutoCalloutBehaviorEnabled="false" [targetSeries]="revenueSeries"
                          useValueForAutoCalloutLabels="false"
                          calloutLeaderBrush="Transparent" calloutTextColor="Black"
                          calloutBackground = "Transparent" calloutPositionPadding="-5"
                          xMemberPath="RevenueX" yMemberPath="Revenue" labelMemberPath="FormattedRevenue">
            </igx-callout-layer>

            <igx-callout-layer isAutoCalloutBehaviorEnabled="false" [targetSeries]="expenseSeries"
                          useValueForAutoCalloutLabels="false"
                          calloutLeaderBrush="Transparent" calloutTextColor="Black"
                          calloutBackground="Transparent"  xMemberPath="ExpensesX" yMemberPath="Expenses"
                          labelMemberPath="FormattedExpenses" calloutPositionPadding="-5">
            </igx-callout-layer>

            <igx-callout-layer isAutoCalloutBehaviorEnabled="true" [targetSeries]="incomeSeries"
                          useValueForAutoCalloutLabels="true" calloutLeaderBrush="Transparent" calloutTextColor="Black"
                          calloutBackground = "LightGray" autoCalloutLabelPrecision="1">
            </igx-callout-layer>
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

## Additional Resources

- [Bar Chart](bar-chart.md)
- [Column Chart](column-chart.md)

<!-- - [Gantt Chart](gantt-chart.md) -->

- [Line Chart](line-chart.md)
- [Stacked Chart](stacked-chart.md)

## API References

- [`IgxCategoryXAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryxaxiscomponent.html)
- [`IgxColumnSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcolumnseriescomponent.html)
- [`IgxLineSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlineseriescomponent.html)
- [`IgxNumericYAxisComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html)
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
