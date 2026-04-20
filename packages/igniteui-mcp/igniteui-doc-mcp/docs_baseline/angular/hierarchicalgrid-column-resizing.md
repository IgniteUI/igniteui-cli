---
title: Angular Hierarchical Grid Column Resizing - Ignite UI for Angular
_description: Start using Angular Hierarchical Grid Column Resizing in order to change the grid column width in an instant. Angular drag resizing has never been so easy. Try for free!
_keywords: grid column resizing, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/column-resizing
_tocName: Column Resizing
_premium: true
---
# Angular Hierarchical Grid Column Resizing
With deferred grid column resizing, the user will see a temporary resize indicator while the Angular drag resizing operation is in effect. The new grid column width is applied once the drag operation has ended.
## Angular Hierarchical Grid Column Resizing Example
```typescript
import { Component, inject } from '@angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { RemoteValuesService } from '../../services/remoteValues.service';
import { IgxPreventDocumentScrollDirective } from '../../../../../../src/app/directives/prevent-scroll.directive';
import { IgxSparklineCoreModule } from 'igniteui-angular-charts';

@Component({
    selector: 'app-hierarchical-grid-resizing',
    styleUrls: ['./hierarchical-grid-resizing.component.scss'],
    templateUrl: 'hierarchical-grid-resizing.component.html',
    providers: [RemoteValuesService],
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxSparklineCoreModule, IgxRowIslandComponent]
})

export class HGridColumnResizingSampleComponent {
    private remoteValuesService = inject(RemoteValuesService);

    public years = 10;
    public localdata: any[];
    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;
    public singers: any[];

    constructor() {
        this.singers = this.remoteValuesService.getSingersData();;
        for (const singer of this.singers) {
            this.getSales(singer);
        }
        this.localdata = this.singers;
    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }

    public getSales(singer: any): any {
        singer['Sales'] = this.getSalesData(10);
    }

    public getSalesData(years?: number): any[] {
        if (years === undefined) {
            years = 20;
        }
        const sales: any[] = [];
        for (let y = 0; y < years; y++) {
            const value = this.getRandomNumber(0, 1000);
            // eslint-disable-next-line @typescript-eslint/naming-convention
            sales.push({Copies: value, Year: y});
        }
        return sales;
    }

    public  getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    public formatter = (a) => a;
}
```
```html
<div class="grid__wrapper">
<igx-hierarchical-grid [igxPreventDocumentScroll]="true" class="hierarchicalGrid" [data]="localdata" (columnResized)="onResize($event)" [autoGenerate]="false"
    [height]="'480px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    <igx-column field="Artist" [resizable]="true"></igx-column>
    <igx-column field="Photo" [resizable]="true" [minWidth]="'115px'">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [resizable]="true" [minWidth]="'88px'" [maxWidth]="'230px'" dataType="number" [formatter]="formatter"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" [resizable]="true"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" [resizable]="true"></igx-column>
    <igx-column field="Sales" header="Album Sales in last {{ this.years }} years" [width]="'230px'" [filterable]="false" >
        <ng-template igxCell let-val>
            <igx-sparkline height="40px" width="220px"
                [dataSource]="val"
                valueMemberPath="Copies"
                displayType="Line"
                lineThickness="2"
                brush="rgb(255,102,0)" >
            </igx-sparkline>
        </ng-template>
    </igx-column>

    <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
        <igx-column field="Album" [resizable]="true"></igx-column>
        <igx-column field="LaunchDate" header="Launch Date" [resizable]="true" [dataType]="'date'"></igx-column>
        <igx-column field="BillboardReview" header="Billboard Review" [resizable]="true"></igx-column>
        <igx-column field="USBillboard200" header="US Billboard 200" [resizable]="true"></igx-column>
    <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false">
            <igx-column field="Number" header="No." [resizable]="true"></igx-column>
            <igx-column field="Title" [resizable]="true"></igx-column>
            <igx-column field="Released" dataType="date" [resizable]="true"></igx-column>
            <igx-column field="Genre" [resizable]="true"></igx-column>
    </igx-row-island>
    </igx-row-island>

    <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
        <igx-column field="Tour" [resizable]="true"></igx-column>
        <igx-column field="StartedOn" header="Started on" [resizable]="true"></igx-column>
        <igx-column field="Location" [resizable]="true"></igx-column>
        <igx-column field="Headliner" [resizable]="true"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
</div>
```
```scss
@use '../../../variables' as *;

.photo {
    vertical-align: middle;
    max-height: rem(62px);
}
.cell__inner_2 {
    margin: rem(1px)
}

.grid__wrapper{
    padding: rem(16px);
}
```
<div class="divider--half"></div>
**Column resizing** is also enabled per-column level, meaning that the [**igx-hierarchical-grid**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) can have a mix of resizable and non-resizable columns. This is done via the [`resizable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#resizable) input of the [`igx-column`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html).
```html
<igx-column [field]="'Artist'" [resizable]="true"></igx-column>
```
You can subscribe to the [`columnResized`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#columnResized) event of the [`igx-hierarchical-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) object, are exposed through the event arguments.
```html
  <igx-hierarchical-grid class="hgrid" [data]="localdata" (columnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [resizable]="true"></igx-column>
        ...
</igx-hierarchical-grid>
```
```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```
## Resizing columns in pixels/percentages
Depending on the user scenario, the column width may be defined in pixels, percentages or a mix of both. All these scenarios are supported by the Column Resizing feature. By default if a column does not have width set, it fits the available space with width set in pixels.
This means that the following configuration is possible:
```html
  <igx-hierarchical-grid class="hgrid" [data]="localdata" (columnResized)="onResize($event)" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [resizable]="true" [width]="'10%'"></igx-column>
        <igx-column field="GrammyNominations" [resizable]="true" [width]="'100px'"></igx-column>
        <igx-column field="GrammyAwards" [resizable]="true"></igx-column>
        ...
</igx-hierarchical-grid>
```
>[!NOTE]
> There is a slight difference in the way resizing works for columns set in pixels and percentages.
**Pixels**
Resizing columns with width in pixels works by directly adding or subtracting the horizontal amount of the mouse movement from the size of the column.
**Percentages**
When resizing columns with width in percentages, the horizontal amount of the mouse movement in pixels translates roughly to its percentage amount relative to the grid width. The columns remain responsive and any future grid resizing will still reflect on the columns as well.
## Restrict column resizing
You can also configure the minimum and maximum allowable column widths. This is done via the [`minWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#minWidth) and [`maxWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#maxWidth) inputs of the [`igx-column`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html). In this case the resize indicator drag operation is restricted to notify the user that the column cannot be resized outside the boundaries defined by [`minWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#minWidth) and [`maxWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#maxWidth).
```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
Mixing the minimum and maximum column width value types (pixels or percentages) is allowed. If the values set for minimum and maximum are set to percentages, the respective column size will be limited to those exact sizes similar to pixels.
This means the following configurations are possible:
```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
or
```html
<igx-column [field]="'Artist'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'15%'"></igx-column>
```
## Auto-size columns on double click
Each column can be **auto sized** by double clicking the right side of the header - the column will be sized to the longest currently visible cell value, including the header itself. This behavior is enabled by default, no additional configuration is needed. However, the column will not be auto-sized in case [`maxWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#maxWidth) is set on that column and the new width exceeds that [`maxWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#maxWidth) value. In this case the column will be sized according to preset [`maxWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#maxWidth) value.
You can also auto-size a column dynamically using the exposed [`autosize()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#autosize) method on [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html).
```typescript
@ViewChild('hierarchicalGrid') hierarchicalGrid: IgxHierarchicalGridComponent;
let column = this.hierarchicalGrid.columnList.filter(c => c.field === 'Artist')[0];
column.autosize();
```
## Auto-size columns on initialization
Each column can be set to auto-size on initialization by setting `width` to 'auto':
```html
<igx-column width='auto'>...
```
When the column is first initialized in the view it resolves its width to the size of the longest visible cell or header. Note that cells that are outside of the visible rows are not included.
This approach is more performance optimized than auto-sizing post initialization and is recommended especially in cases where you need to auto-size a large number of columns.
```typescript
import { Component } from '@angular/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
@Component({
    selector: 'hierarchical-grid-column-autosizing',
    styleUrls: ['./hgrid-column-autosizing.component.scss'],
    templateUrl: './hgrid-column-autosizing.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridColumnAutoSizingSampleComponent {
    public localdata;

    constructor() {
        this.localdata = CUSTOMERS;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" #hierarchicalGrid [data]="localdata"
        [height]="'490px'" [width]="'100%'">
        <igx-column field="CustomerID" width="auto" [resizable]="true"></igx-column>
        <igx-column field="CompanyName" width="auto" [resizable]="true"></igx-column>
        <igx-column field="ContactName" width="auto" [resizable]="true"></igx-column>
        <igx-column field="ContactTitle" width="auto" [resizable]="true"></igx-column>
        <igx-column field="Address" width="auto" [resizable]="true"></igx-column>
        <igx-column field="City" width="auto" [resizable]="true"></igx-column>
        <igx-column field="PostalCode" width="auto" [resizable]="true"></igx-column>
        <igx-column field="Country" width="auto" [resizable]="true"></igx-column>
        <igx-column field="Phone" width="auto" [resizable]="true"></igx-column>
        <igx-column field="Fax" width="auto" [resizable]="true"></igx-column>
        <igx-row-island [height]="null" [key]="'Orders'" [autoGenerate]="false">
            <igx-column field="OrderID" width="auto" [resizable]="true"></igx-column>
            <igx-column field="EmployeeID" width="auto" [resizable]="true"></igx-column>
            <igx-column field="OrderDate" width="auto" [dataType]="'date'" [resizable]="true"></igx-column>
            <igx-column field="RequiredDate" width="auto" [dataType]="'date'" [resizable]="true"></igx-column>
            <igx-column field="ShippedDate" width="auto" [dataType]="'date'" [resizable]="true"></igx-column>
            <igx-column field="ShipVia" width="auto" [resizable]="true"></igx-column>
            <igx-column field="Freight" width="auto" [resizable]="true"></igx-column>
            <igx-column field="ShipName" width="auto" [resizable]="true"></igx-column>
            <igx-column field="ShipAddress" width="auto" [resizable]="true"></igx-column>
            <igx-column field="ShipCity" width="auto" [resizable]="true"></igx-column>
            <igx-column field="ShipPostalCode" width="auto" [resizable]="true"></igx-column>
            <igx-column field="ShipCountry" width="auto" [resizable]="true"></igx-column>
            <igx-row-island [height]="null" [key]="'OrderDetails'" [autoGenerate]="false" [moving]="true">
                <igx-column field="ProductID" width="auto" [resizable]="true"></igx-column>
                <igx-column field="UnitPrice" width="auto" [resizable]="true"></igx-column>
                <igx-column field="Quantity" width="auto" [resizable]="true"></igx-column>
                <igx-column field="Discount" width="auto" [resizable]="true"></igx-column>
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}

.grid__wrapper{
    padding: 16px;
}
```
<div class="divider--half"></div>
## Styling
To get started with the styling of the Hierarchical Grid column resize line, we need to import the index file, where all the theme functions and component mixins live:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
The simplest approach to achieve this is to create a new theme that extends the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) and accepts many parameters as well as the `$resize-line-color` parameter.
``` scss
$custom-grid-theme: grid-theme(
  $resize-line-color: #0288d1
);
```
>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.
The last step is to **include** the component mixins with its respective theme:
```scss
:host {
  @include tokens($custom-grid-theme);
}
```
### Demo
```typescript
import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-resize-line-styling',
    styleUrls: ['./hierarchical-grid-resize-line-styling.component.scss'],
    templateUrl: './hierarchical-grid-resize-line-styling.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})
export class HGridResizeLineStylingComponent {
    public localData;
    constructor() {
        this.localData = SINGERS;
    }

    public formatter = (a) => a;
}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hierarchicalGrid" [data]="localData" [autoGenerate]="false" [height]="'520px'"
        [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
        <igx-column field="Artist" [resizable]="true"></igx-column>
        <igx-column field="Photo" [resizable]="true" [minWidth]="'115px'">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [resizable]="true" [minWidth]="'88px'" [maxWidth]="'230px'" dataType="number" [formatter]="formatter"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [resizable]="true"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [resizable]="true"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
            <igx-column field="Album" [resizable]="true"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [resizable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [resizable]="true"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [resizable]="true"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false">
                <igx-column field="Number" header="No." [resizable]="true"></igx-column>
                <igx-column field="Title" [resizable]="true"></igx-column>
                <igx-column field="Released" dataType="date" [resizable]="true"></igx-column>
                <igx-column field="Genre" [resizable]="true"></igx-column>
            </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour" [resizable]="true"></igx-column>
            <igx-column field="StartedOn" header="Started on" [resizable]="true"></igx-column>
            <igx-column field="Location" [resizable]="true"></igx-column>
            <igx-column field="Headliner" [resizable]="true"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-grid-theme: grid-theme(
  $resize-line-color: #0288d1
);

:host {
  @include tokens($custom-grid-theme);
}
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
## API References
<div class="divider--half"></div>
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
- [IgxHierarchicalGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-grid)
## Additional Resources
<div class="divider--half"></div>
- [Hierarchical Grid overview](hierarchical-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
