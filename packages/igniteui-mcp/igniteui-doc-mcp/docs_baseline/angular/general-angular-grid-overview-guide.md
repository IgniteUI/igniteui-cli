---
title: A Complete Guide to Angular Grid and Angular App Development
description: Modern data grids & charts can be complex and include a range of functionalities. Learn about Angular Grids & Angular App Development with our complete guide!
keywords: angular, angular app development, infragistics
license: commercial 
llms:
  description: "Get to know the Angular Data Grid and how to use it by checking out this informative section part of our Grid Overview topic."
_tocName: Angular: A Complete Guide
---
# A Complete Guide to Angular Grid and Angular App Development

_Get to know the Angular Data Grid and how to use it [by checking out this informative section](/grids-and-lists#what-is-an-angular-data-grid) part of our Grid Overview topic._

## Ignite UI - Our Framework for Angular App Development

Ignite UI for Angular is an advanced toolset from Infragistics that includes feature-rich, high-performing UI components such as data grids and other components including charts, data visualization maps, editors, and more.

The Ignite UI Angular data grid is among the fastest in the industry and is used by many of the leading financial and insurance companies.

Built on Google’s Angular framework, Ignite UI provides over 50 UI components and Material-based components, and over 50 chart types, including financial charting.

Among its many benefits, Ignite UI for Angular offers easy integration, rapid development and design, and responsive, cross-browser compatibility.

## Installing and Creating a Project

You can install Ignite UI for Angular with either the Angular CLI or with the [Ignite UI CLI](/general/cli/getting-started-with-cli). To start quickly with the Angular CLI, run the following command:

`ng add igniteui-angular`

This is the preferred option when you need to add Ignite UI for Angular to an [existing Angular application](/general/getting-started#installing-ignite-ui-for-angular).

If you’re creating a new application from scratch, we recommend the following approach:

`npm install –g igniteui-cli`

Once the igniteui cli is installed you can easily bootstrap an application by following cli’s [guided experience using the Ignite UI CLI](/general/cli/step-by-step-guide-using-cli) or [Ignite UI for Angular Schematics](/general/cli/step-by-step-guide-using-angular-schematics), which builds a configured app that the end user can run with a single command:

`ig`

Use this rich set of cli commands to perform other functions, including generating an Ignite UI project and adding a new component to building and serving the entire application.

## Importing Dependencies

When it comes to importing product dependencies, we strongly recommend using our Ignite UI CLI. By simply using `ng add igniteui-angular` you can install the Ignite UI for Angular package, along with all of its dependencies, font imports, styles preferences, and more  to your project.

To start using Ignite UI for Angular components without the Ignite UI CLI, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this manually in the [Getting started](/general/getting-started) topic.

## Adding Components to a Template

Once you finish with the development environment setup, you can continue adding and configuring other Ignite UI components. Here’s how to use [our schematics](/general/cli-overview) to add a grid with basic configuration and add templates to some of our columns.

```html
<igx-grid #grid1 [data]="localData" height="600px" (selected)="cellSelection($event)">
    <igx-column header="Rank" headerClasses="myClass" width="115px" field="Id" sortable="true" [filterable]="false"></igx-column>
    <igx-column field="Name" header="Athlete" width="280"></igx-column>
    <igx-column field="Speed" header="Speed" [width]="'190px'" [filterable]="false"></igx-column>
    <igx-column field="TrackProgress" sortable="true" header="Track Progress" [filterable]="false">
        <ng-template igxCell let-val>
            <div class="linear-bar-container">

                <igx-linear-bar [textVisibility]="false" class="cell__inner_2" [value]="val"></igx-linear-bar>
            
</div>
        </ng-template>
    </igx-column>
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-grid>
```

The grid itself consist of different components such as the IgxColumnComponent which is used to define the grid's columns collection and to enable features per column like sorting and paging.

Each of the columns of the grid can be templated separately. The column expects ng-template tags decorated with one of the grid module directives.

## Configuring Your Components

Now that you’ve defined columns to our Grid you can  set different cell, header, and footer templates as follows:

- IgxHeader directive targets the column header providing the column object itself as a context.

 ```html
 <igx-column field="Name">
    <ng-template igxHeader let-column>
        {{ column.field | uppercase }}
    </ng-template>
</igx-column>
 ```

- igxCell applies the provided template to all cells in the column. The context object provided in the template consists of the cell value provided implicitly and the cell object itself.

- The column also accepts one last template that will be used when a cell is in edit mode. As with the other column templates, the provided context object is again the cell value and the cell object itself

```html
 <igx-column field="Price" [dataType]="'number'" editable="true">
    <ng-template igxCellEditor let-cell="cell">
        <label for="price">
            Enter the new price tag
        </label>
        <input name="price" type="number" [(ngModel)]="cell.editValue" />
    </ng-template>
</igx-column>
```

## Adding Data to Your Tables and Charts

While some Angular apps will use static data, most app development today uses data stored in a database. Angular data-binding, which is the process of establishing a connection between the app UI and the data it displays, is easy to implement to allow for dynamic tables. You can set the grid to bind to a remote data service, which is the common scenario in large-scale applications. A good practice is to separate all data-fetching-related logic in a separate data service. Here is a way to create a service which will handle the fetching of data from the server:

The service itself is pretty simple consisting of one method: fetchData that will return an `Observable<NorthwindRecord[]>`.

```typescript

@Injectable()
export class NorthwindService {
    private url = 'http://services.odata.org/V4/Northwind/Northwind.svc/Alphabetical_list_of_products';

    constructor(private http: HttpClient) {}

    public fetchData(): Observable<NorthwindRecord[]> {
        return this.http
            .get(this.url)
            .pipe(
                map(response => response['value']),
                catchError(
                    this.errorHandler('Error loading northwind data', [])
                )
            );
    }

    private errorHandler<T>(message: string, result: T) {
        return (error: any): Observable<any> => {
            console.error(`${message}: ${error.message}`);
            return of(result as T);
        };
    }
}
```

After implementing the service, you’ll want to inject it in our component's constructor and use it to retrieve the data. The ngOnInit lifecycle hook is a good place to dispatch the initial request

```typescript

@Component({
    ...
})
export class MyComponent implements OnInit {

    public records: NorthwindRecord[];

    constructor(private northwindService: NorthwindService) {}

    ngOnInit() {
        this.records = [];
        this.northwindService.fetchData().subscribe((records) => this.records = records);
    }
}
```

```html
<igx-grid [data]="records">
    <igx-column field="ProductId"></igx-column>
    {/* rest of the column definitions */}
    ...
</igx-grid>
```

Check out our [Data-binding topic](/grid/grid#angular-grid-data-binding) for more detailed information.

The same data binding technique is applicable to the other Ignite UI components, such as the igxDataChart.

```html
 <igx-data-chart [dataSource]="data"
                 width="700px"
                 height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true" ></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true" ></igx-numeric-y-axis>
    <igx-bubble-series
        name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        xMemberPath="population"
        yMemberPath="gdpTotal"
        radiusMemberPath="gdpPerCapita"
        [dataSource]="data"  ></igx-bubble-series>
 </igx-data-chart>
```

Setting a data source on the chart component will apply to all series, but you can also set different data sources on each series added in the data chart.

## Sorting, Filtering and Pagination

Angular data grids support easy sorting, filtering, and pagination. With rich APIs and an intuitive feature set-up, using Ignite UI for Angular components has never been easier.

```html
<igx-grid #grid1 (sortingDone)="removeSorting($event)"
        [data]="data"
        [allowFiltering]="true">   
    <igx-column field="OrderID" header="Order ID">
    </igx-column>
    <igx-column field="CategoryName" header="Category Name" [dataType]="'string'" sortable="true">
    </igx-column>
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-grid>
```

The Grid provides three types of Filtering with custom filtering conditions:

- [Filter row](/grid/filtering) per column with default filtering strategy provided out of the box, as well as all the standard filtering conditions.

- [Excel style filtering](/grid/excel-style-filtering), with a configurable menu of features like sorting, moving, pinning, and hiding features.

- [Advanced filtering](/grid/advanced-filtering) that provides a dialog which allows the creation of groups with filtering conditions across all columns.

Our [Angular 9 release](https://www.infragistics.com/community/blogs/b/infragistics/posts/ignite-ui-for-angular-9-0-0-release "Ignite UI for Angular 9.0.0 Release") includes plenty of new key features – from data analysis to a rich visualization, grid state persistence, and theming widget.

## Styling Your Components

Ignite UI has the most expressive styling capabilities of the major Angular frameworks.

With just a few lines of code, you can easily change the theme of your components. Being developed in SASS, the API is easy and allows for theming granularity on different levels from a single component, multiple components, or the entire suite.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

$primary-color: #2ab759; // Some green shade I like
$secondary-color: #f96a88; // Watermelon pink

$my-color-palette: palette(
    $primary: $primary-color,
    $secondary: $secondary-color
);

// IMPORTANT: Make sure you always includecore first!
@include core();
// Pass the color palette we generated to thetheme mixin
@include theme($my-color-palette);
```

Since Ignite UI for Angular bases its component designs on the [Material Design Principles](https://material.io/guidelines/material-design/introduction.html "Introduction to Material Design"), we try to get as close as possible to colors, sizes, typography, and the overall look and feel of our components to those created by Google. Example:

<code-view iframe-src="{environment:crmDemoBaseUrl}/" github-src="" alt="Angular CRM demo example"></code-view>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>

## Data Analysis with Ignite UI

The Ignite Angular UI toolset also includes [data analysis capabilities](/general/data-analysis). We strive to give you all of the business capabilities you will need to deliver great experiences to your customers. So, we now provide directives that will give you a more Excel-like experience. For example, by selecting a portion of data you are now able to click a button and perform a quick data analysis on that subset of your data.

```typescript
/* eslint-disable max-len */
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IgxChartIntegrationDirective, IgxContextMenuDirective, IgxConditionalFormattingDirective,  OPTIONS_TYPE, CHART_TYPE } from 'igniteui-angular-extras';

import { FinancialData } from '../data/financialData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DecimalPipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-dynamic-chart-data',
    templateUrl: './grid-dynamic-chart-data.component.html',
    styleUrls: ['./grid-dynamic-chart-data.component.scss'],
    imports: [IgxGridComponent, IgxChartIntegrationDirective, IgxConditionalFormattingDirective, IgxContextMenuDirective, IgxColumnComponent, IgxCellTemplateDirective, DecimalPipe, CurrencyPipe]
})
export class GridDynamicChartDataComponent implements OnInit, AfterViewInit {

    public data;

    @ViewChild(IgxChartIntegrationDirective, {static: false})
    public chartDirective: IgxChartIntegrationDirective;

    public ngOnInit() {
        this.data = FinancialData.generateData(1000);
    }

    public ngAfterViewInit() {
      const pieChartOptions = {
        labelsPosition: 4,
        allowSliceExplosion: true,
        sliceClick: (evt) => { evt.args.isExploded = !evt.args.isExploded; },
        formatLabel: (context) => `${context.percentValue.toFixed(2)}%`
      };

      this.chartDirective.setChartComponentOptions(CHART_TYPE.Pie, OPTIONS_TYPE.Chart, pieChartOptions);
      this.chartDirective.getAvailableCharts()
                         .filter(chart => chart.indexOf('Scatter') === -1 ||
                                          chart.indexOf('Bar') === -1 ||
                                          chart !== CHART_TYPE.Pie)
                         .forEach(chart => this.chartDirective.setChartComponentOptions(chart, OPTIONS_TYPE.XAxis, {labelAngle: 30}));
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(3);
    }
}
```
```html
<div class="grid-chart-contextmenu-wrapper">
    <igx-grid #grid igxChartIntegration igxConditionalFormatting igxContextMenu primaryKey='id' [data]="data">
        <igx-column field="id" [hidden]="true"></igx-column>
        <igx-column field="category" [editable]="true" [width]="'110px'"></igx-column>
        <igx-column field="type" [editable]="true" [filterable]="false" [width]="'130px'"></igx-column>
        <igx-column field="country" [editable]="true" [width]="'100px'"></igx-column>
        <igx-column field="price" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | currency:'USD':'symbol':'1.4-4'}}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="startY" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="startYDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="buy" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="buyDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="highY" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="highYDiff" [width]="'120px'" dataType="number" [formatter]="formatCurrency"
            [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | currency:'USD':'symbol':'1.4-4'}}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="openPrice" dataType="number" [formatter]="formatCurrency" [editable]="true"
            [width]="'130px'">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | currency:'USD':'symbol':'1.4-4'}}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="openPriceDiff" dataType="number" [width]="'140px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="lowY" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="lowYDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="highD" [width]="'100px'" dataType="number" [headerClasses]="'headerAlignSyle'"
            [editable]="true" [formatter]="formatCurrency">
        </igx-column>
        <igx-column field="highDDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="lowD" [width]="'100px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="lowDDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="sell" [width]="'110px'" dataType="number" [formatter]="formatCurrency" [editable]="true">
        </igx-column>
        <igx-column field="sellDiff" dataType="number" [width]="'120px'" [editable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="finjs-icons">
                    <span>{{cell.value | number:'1.4-4'}}%</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="region" [editable]="true"></igx-column>
        <igx-column field="contract" [editable]="true"></igx-column>
        <igx-column field="settlement" [width]="'150px'" [editable]="true"></igx-column>
    </igx-grid>
  </div>
```
```scss
:host ::ng-deep {
    .grid-chart-contextmenu-wrapper {
        --ig-size: var(--ig-size-small);
        width: 90%;
        margin: 50px auto;
        height: 80%;
    }
}
```

## Tools for Code Generation and Design

Ignite UI for Angular is part of the [Indigo.Design System](https://www.infragistics.com/products/indigo-design/help/video-tutorials.html "Indigo Design System") which lets you [generate native Angular code](https://www.infragistics.com/products/indigo-design/help/codegen/vscode-plugin.html "Visual Studio Plugin") from designs created in Figma with the [Indigo.Design UI Kit](https://www.infragistics.com/products/indigo-design/help/creating-an-artboard.html "Indigo Design Creating an artboard"). You can generate a mobile-friendly or data-dense grid supporting various editing and filtering modes, but you can also use many of the popular grid features such as sorting, paging, summaries, and group by. Moreover, on every column you can specify various operations like moving, resizing, hiding, and pinning to achieve the most sophisticated data manipulations scenarios at design time and have a pixel-perfect user interface running in minutes.

## Performance Benchmarks

Grid components, in general, are intended to visualize large quantities of tabular data. When it comes to performance, our Grid excels at load-time, run-time, and soft performance.  

In order to satisfy the requirements of a web application for load time and run-time performance, it is important to virtualize the Document Object Model (DOM) elements that are rendered, and to either swap or reuse DOM elements when the user performs vertical and horizontal scrolling on the component’s container. The igxGrid has great tun-time scrolling performance without visual tears as well as soft performance (defined by the general usability of your software). Here’s an example of a Gif with scrolling performance:

<div>

</div>

<hr/>

Check out our Grid and see how easy it is to find and navigate to the feature you want to use, or how appealing the look and feel of it would be in your application.

Learn more about this in our [Medium Software Performance (Web) article](https://medium.com/ignite-ui/software-performance-web-61158c8583d "Web Software Performance").
