---
title: Angular Grid Summaries - Ignite UI for Angular
_description: Configure Angular grid summaries in the group footer of the column and use the option to set custom angular template in the Ignite UI for Angular table
_keywords: angular grid summaries, igniteui for angular, infragistics
_license: commercial
_tocName: Summaries
_premium: true
---
# Angular Grid Summaries
The Angular UI grid in Ignite UI for Angular has a **summaries** feature that functions on a per-column level as group footer. Angular grid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom angular template in the Grid.
## Angular Grid Summaries Overview Example
```typescript
import { Component, ViewChild } from '@angular/core';
import { ColumnType, IgxSummaryResult } from 'igniteui-angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxNumberSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DatePipe } from '@angular/common';

class MySummary  {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxNumberSummaryOperand().operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter((rec) => rec > 10 && rec < 30).length
        });

        return result;
    }
}
@Component({
    selector: 'app-grid-sample-3',
    styleUrls: ['./grid-sample-3.component.scss'],
    templateUrl: './grid-sample-3.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxCellHeaderTemplateDirective, IgxIconComponent, DatePipe]
})
export class GridSample3Component {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public mySummary = MySummary;
    public data;
    public productId = 0;

    constructor() {
        this.data = DATA;
        this.productId = DATA.length;
    }

    public toggleSummary(column: ColumnType) {
        column.hasSummary = !column.hasSummary;
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [autoGenerate]="false" height="600px" width="100%">
    <igx-paginator></igx-paginator>
    <igx-column #col field="ProductID" header="Product ID" width="17%" [headerClasses]="'prodId'">
    </igx-column>
    <igx-column #col field="ProductName" header="Product Name" width="17%" [headerClasses]="'prodId'" [hasSummary]="true">
      <ng-template igxCell let-cell="cell" let-val>
        {{val}}
      </ng-template>
      <ng-template igxHeader let-col>
        <div class="header-text">{{col.field}}</div>
        <igx-icon class="header-icon" style.color="{{ col.hasSummary ? '#e41c77' : '' }}" (click)="toggleSummary(col)">functions</igx-icon>
      </ng-template>
    </igx-column>
    <igx-column #col field="UnitPrice" header="Price" [filterable]="false" width="17%" [editable]="true" dataType="number"
      [hasSummary]="true">
      <ng-template igxCell let-cell="cell" let-val let-row>
        ${{val}}
      </ng-template>
      <ng-template igxHeader let-col>
        <div class="header-text">{{col.field}}</div>
        <igx-icon class="header-icon" style.color="{{ col.hasSummary ? '#e41c77' : '' }}" (click)="toggleSummary(col)">functions</igx-icon>
      </ng-template>
    </igx-column>
    <igx-column #col field="UnitsInStock" header="Units In Stock" width="17%" dataType="number" [editable]="true"
      [hasSummary]="false" [summaries]="mySummary">
      <ng-template igxCell let-cell="cell" let-val let-row>
        {{val}}
      </ng-template>
      <ng-template igxHeader let-col>
        <div class="header-text">{{col.field}}</div>
        <igx-icon class="header-icon" style.color="{{ col.hasSummary ? '#e41c77' : '' }}" (click)="toggleSummary(col)">functions</igx-icon>
      </ng-template>
    </igx-column>
    <igx-column #col field="Discontinued" header="Discontinued" width="17%" [hasSummary]="true" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
      <ng-template igxHeader let-col>
        <div class="header-text">{{col.field}}</div>
        <igx-icon class="header-icon" style.color="{{ col.hasSummary ? '#e41c77' : '' }}" (click)="toggleSummary(col)">functions</igx-icon>
      </ng-template>
    </igx-column>
    <igx-column #col field="OrderDate" width="15%" [dataType]="'date'" [hasSummary]="true">
      <ng-template igxCell let-cell="cell" let-val let-row>
        {{ val | date: 'MMM d, yyyy' }}
      </ng-template>
      <ng-template igxHeader let-col>
        <div class="header-text">{{col.field}}</div>
        <igx-icon class="header-icon" style.color="{{ col.hasSummary ? '#e41c77' : '' }}" (click)="toggleSummary(col)">functions</igx-icon>
      </ng-template>
    </igx-column>
  </igx-grid>
</div>
```
```scss
.grid-controls {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin: 0 16px 24px;

    igx-switch {
        margin-top: 24px;
    }

}

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

.header {
    height: 100%;
}

:host ::ng-deep{
    .igx-grid__th .title{
        width: 100%;
        cursor: auto;
    }
      
    @media screen and (max-width: 677px){
    
        .header-icon {
            padding-bottom: 17px;
            padding-top: 17px;
            font-size: 1.4em;
            width: 1.1em;
            height: 1.1em;
            float: right;
        }
        .header-text {
            float:left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 50%;
        }  
    }
    
    
    @media screen and (min-width: 677px){
    
        .header-icon {
            padding-top: 17px;
            font-size: 1.4em;
            width: 1.1em;
            height: 1.1em;
            float: right;
        }
    
        .header-text {
            float:left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 50%;
        }    
    }
    
    
    @media screen and (min-width: 992px){
    
        .header-icon {
            padding-top: 17px;
            font-size: 1.4em;
            width: 1.1em;
            height: 1.1em;
            float: right;
            margin-right: 10px;
            cursor: pointer;
        }
    
        .header-text {
            float:left;
            white-space: nowrap;
            width: 50%;
            cursor: auto;
        }
    }
}
```
<div class="divider--half"></div>
> [!NOTE]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**
**Grid summaries** can also be enabled on a per-column level in Ignite UI for Angular, which means that you can activate it only for columns that you need. Grid summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:
For `string` and `boolean` [`data types`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#dataType), the following function is available:
- count
For `number`, `currency` and `percent` data types, the following functions are available:
- count
- min
- max
- average
- sum
For `date` data type, the following functions are available:
- count
- earliest
- latest
All available column data types could be found in the official [Column types topic](column-types.md#default-template).
**Grid summaries** are enabled per-column by setting [`hasSummary`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#hasSummary) property to `true`. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the `igx-grid` the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the [`dataType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#datatype) property as `number` or `date`. Note that the summary values will be displayed localized, according to the grid [`locale`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#locale) and column [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#pipeArgs).
```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)">
    <igx-column field="ProductID" header="Product ID" width="200px" [sortable]="true"></igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true"></igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true"></igx-column>
</igx-grid>
```
The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`enableSummaries`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#enableSummaries)/[`disableSummaries`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#disableSummaries) of the **igx-grid**.
```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true"></igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true"></igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="false"></igx-column>
</igx-grid>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.grid1.enableSummaries([
        {fieldName: 'ReorderLevel', customSummary: this.mySummary},
        {fieldName: 'ProductID'}
    ]);
}
public disableSummary() {
    this.grid1.disableSummaries('ProductName');
}
```
## Custom Grid Summaries
If these functions do not fulfill your requirements you can provide a custom summary for the specific columns. In order to achieve this you have to override one of the base classes [`IgxSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html), [`IgxNumberSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html) or [`IgxDateSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatesummaryoperand.html) according to the column data type and your needs. This way you can redefine the existing function or you can add new functions. [`IgxSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html) class provides the default implementation only for the [`count`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html#count) method. [`IgxNumberSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html) extends [`IgxSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html) and provides implementation for the [`min`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html#min), [`max`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html#max), [`sum`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html#sum) and [`average`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html#average). [`IgxDateSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatesummaryoperand.html) extends [`IgxSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html) and additionally gives you [`earliest`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatesummaryoperand.html#earliest) and [`latest`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatesummaryoperand.html#latest).
```typescript
import { IgxSummaryResult } from 'igniteui-angular/core';
import { IgxSummaryOperand, IgxNumberSummaryOperand, IgxDateSummaryOperand } from 'igniteui-angular/grids/core';
// import { IgxSummaryResult, IgxSummaryOperand, IgxNumberSummaryOperand, IgxDateSummaryOperand } from '@infragistics/igniteui-angular'; for licensed package
class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter(rec => rec > 10 && rec < 30).length
        });
        return result;
    }
}
```
As seen in the examples, the base classes expose the [`operate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html#operate) method, so you can choose to get all default summaries and modify the result, or calculate entirely new summary results.
The method returns a list of [`IgxSummaryResult`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igxsummaryresult.html).
```typescript
interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```
and take optional parameters for calculating the summaries.
See [Custom summaries, which access all data](#custom-summaries-which-access-all-data) section below.
> [!NOTE]
> In order to calculate the summary row height properly, the Grid needs the [`operate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html#operate) method to always return an array of [`IgxSummaryResult`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igxsummaryresult.html) with the proper length even when the data is empty.
And now let's add our custom summary to the column `UnitsInStock`. We will achieve that by setting the [`summaries`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#summaries) property to the class we create below.
```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
    <igx-column field="ProductID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="UnitsInStock" width="200px" [dataType]="'number'" [hasSummary]="true" [summaries]="mySummary" [sortable]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</igx-grid>
```
```typescript
...
export class GridComponent implements OnInit {
    mySummary = MySummary;
    ....
}
```
### Custom summaries, which access all data

 Now you can access all Grid data inside the custom column summary. Two additional optional parameters are introduced in the IgxSummaryOperand `operate` method.
As you can see in the code snippet below the operate method has the following three parameters:
- columnData - gives you an array that contains the values only for the current column
- allGridData - gives you the whole grid data source
- fieldName - current column field
```typescript
class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgxSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'test', label: 'Total Discontinued', summaryResult: allData.filter((rec) => rec.Discontinued).length });
        return result;
    }
}
```
```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxNumberSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


class DiscontinuedSummary {
    public operate(data?: any[], allData = [], fieldName = ''): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'products',
            label: 'Products',
            summaryResult: data.length
        });
        result.push({
            key: 'total',
            label: 'Total Items',
            summaryResult: IgxNumberSummaryOperand.sum(data)
        });
        result.push({
            key: 'discontinued',
            label: 'Discontinued Products',
            summaryResult: allData.map(r => r['Discontinued']).filter((rec) =>  rec).length
            });
        result.push({
            key: 'totalDiscontinued',
            label: 'Total Discontinued Items',
            summaryResult: IgxNumberSummaryOperand.sum(allData.filter((rec) =>  rec['Discontinued']).map(r => r[fieldName]))
        });
        return result;
    }
}
@Component({
    selector: 'app-grid-all-data-summary',
    styleUrls: ['./grid-allData-summary.component.scss'],
    templateUrl: './grid-allData-summary.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent]
})
export class GridAllDataSummaryComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public discontinuedSummary = DiscontinuedSummary;
    public data;

    constructor() {
        this.data = DATA;
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [autoGenerate]="false" height="600px" width="100%">
    @if (false) {
      <igx-paginator></igx-paginator>
    }
    <igx-column field="ProductID" header="Product ID" width="17%" [headerClasses]="'prodId'">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="17%" [headerClasses]="'prodId'" >
    </igx-column>
    <igx-column field="UnitPrice" header="Price" [filterable]="false" width="17%" [editable]="true" dataType="number">
    </igx-column>
    <igx-column field="UnitsInStock" header="Units In Stock" width="17%" dataType="number" [editable]="true"
      [hasSummary]="true" [summaries]="discontinuedSummary">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [editable]="true" width="17%" [dataType]="'boolean'">
    </igx-column>
    <igx-column field="OrderDate" width="15%" [dataType]="'date'" [hasSummary]="true">
    </igx-column>
  </igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}
```
### Summary Template
`igxSummary` targets the column summary providing as a context the column summary results.
```html
<igx-column ... [hasSummary]="true">
    <ng-template igxSummary let-summaryResults>
        <span> My custom summary template</span>
        <span>{{ summaryResults[0].label }} - {{ summaryResults[0].summaryResult }}</span>
    </ng-template>
</igx-column>
```
When a default summary is defined, the height of the summary area is calculated by design depending on the column with the largest number of summaries and the size of the grid. Use the [summaryRowHeight](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#summaryRowHeight) input property to override the default value. As an argument it expects a number value, and setting a false value will trigger the default sizing behavior of the grid footer.
> [!NOTE]
> Column summary template could be defined through API by setting the column [summaryTemplate](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#summaryTemplate) property to the required TemplateRef.
```typescript
import { Component, HostBinding, OnInit } from '@angular/core';
import { IgxColumnComponent, IgxNumberSummaryOperand, IgxSummaryTemplateDirective } from 'igniteui-angular/grids/core';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { DATA } from '../../data/nwindData';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

class DiscontinuedSummary {
    public operate(data?: any[], allData = [], fieldName = ''): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'products',
            label: 'Products',
            summaryResult: data.length
        });
        result.push({
            key: 'total',
            label: 'Total Items',
            summaryResult: IgxNumberSummaryOperand.sum(data)
        });
        result.push({
            key: 'discontinued',
            label: 'Discontinued Products',
            summaryResult: allData.map(r => r['Discontinued']).filter((rec) => rec).length
        });
        result.push({
            key: 'totalDiscontinued',
            label: 'Total Discontinued Items',
            summaryResult: IgxNumberSummaryOperand.sum(allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]))
        });
        return result;
    }
}
@Component({
    selector: 'app-grid-summary-template',
    styleUrls: ['./grid-summary-template.component.scss'],
    templateUrl: './grid-summary-template.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSwitchComponent, IgxButtonGroupComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxSummaryTemplateDirective]
})
export class GridSummaryTemplateComponent implements OnInit {
    public discontinuedSummary = DiscontinuedSummary;
    public data;
    public summaryHeight = 135;
    public size = 'medium';
    public sizes;
    public hasSummary = true;

    constructor() {
        this.data = DATA;
    }

    public ngOnInit(): void {
        this.sizes = [
            { label: 'small', selected: this.size === 'small', togglable: true },
            { label: 'medium', selected: this.size === 'medium', togglable: true },
            { label: 'large', selected: this.size === 'large', togglable: true }
        ];
    }

    public selectSize(event): void {
        this.size = this.sizes[event.index].label;
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }
}
```
```html
<div class="sample__wrapper">
    <div class="controls-wrapper">
        <igx-input-group>
            <label igxLabel for="height">Summary Row Height</label>
            <input igxInput name="height" type="number" [(ngModel)]="summaryHeight">
        </igx-input-group>
        <igx-switch [(ngModel)]="hasSummary">Toggle Summaries</igx-switch>
        <igx-buttongroup [values]="sizes" (selected)="selectSize($event)">
        </igx-buttongroup>
    </div>
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data"
        [summaryRowHeight]="summaryHeight" [autoGenerate]="false" height="550px" width="100%">
        <igx-column field="ProductID" header="Product ID" width="10%" [headerClasses]="'prodId'" [groupable]="true">
        </igx-column>
        <igx-column field="ProductName" header="Product Name" width="17%" [headerClasses]="'prodId'" [groupable]="true">
        </igx-column>
        <igx-column field="UnitPrice" header="Price" [filterable]="false" width="17%" [editable]="true" dataType="number" [groupable]="true">
        </igx-column>
        <igx-column field="UnitsInStock" header="Units In Stock" width="21%" dataType="number" [editable]="true"
            [hasSummary]="hasSummary" [summaries]="discontinuedSummary" [groupable]="true">
        </igx-column>
        <igx-column field="Discontinued" header="Discontinued" [editable]="true" width="17%" [dataType]="'boolean'" [groupable]="true">
        </igx-column>
        <igx-column field="OrderDate" width="18%" [dataType]="'date'" [hasSummary]="hasSummary" [groupable]="true">
            <ng-template igxSummary let-summaryResults>
                <div class="summary-temp">
                    <span><strong>{{ summaryResults[0].label }}</strong><span>{{ summaryResults[0].summaryResult }}</span></span>
                    <span><strong>{{ summaryResults[1].label }}</strong><span>{{ summaryResults[1].summaryResult }}</span></span>
                </div>
            </ng-template>
        </igx-column>
    </igx-grid>
</div>
```
```scss
.sample__wrapper {
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 16px;
	height: 100%;
	overflow-y: auto;
}

igx-buttongroup {
	max-width: 450px;
	flex: 1;
}

.summary-temp {
	display: flex;
	flex-direction: column;
	margin: 0 1px;
	font-size: 14px;
	line-height: 24px;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;

	span {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 4px;
		justify-content: space-between;
		color: hsla(var(--ig-gray-900));

		span {
			user-select: all;
			max-width: 300px;
			padding-right: 8px;
		}

		strong {
			font-size: 12px;
			text-transform: uppercase;
			min-width: 70px;
			justify-self: flex-start;
			text-align: left;
			color: var(--ig-secondary-600);
			user-select: none;
		}
	}

	> * {
		padding: 8px 0;
		line-height: 18px;
		border-bottom: 1px dashed hsla(var(--ig-gray-400));

		&:last-child {
			border-bottom: none;
		}
	}

}

::-webkit-scrollbar {
	width: 5px !important;
	height: 5px !important;
}

.controls-wrapper {
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 16px;
}
```
## Disable Summaries
The [`disabledSummaries`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#disabledSummaries) property provides precise per-column control over the Ignite UI for Angular grid summary feature. This property enables users to customize the summaries displayed for each column in the grid, ensuring that only the most relevant and meaningful data is shown. For example, you can exclude specific summary types, such as `['count', 'min', 'max']`, by specifying their summary keys in an array.
This property can also be modified **dynamically at runtime** through code, providing flexibility to adapt the grid's summaries to changing application states or user actions.
The following examples illustrate how to use the `disabledSummaries` property to manage summaries for different columns and exclude specific default and custom summary types in the Ignite UI for Angular grid:
```html
<!-- default summaries -->
<igx-column
    field="UnitPrice"
    header="Unit Price"
    dataType="number"
    [hasSummary]="true"
    [disabledSummaries]="['count', 'sum', 'average']"
>
</igx-column>
<!-- custom summaries -->
<igx-column
    field="UnitsInStock"
    header="Units In Stock"
    dataType="number"
    [hasSummary]="true"
    [summaries]="discontinuedSummary"
    [disabledSummaries]="['discontinued', 'totalDiscontinued']"
>
</igx-column>
```
For `UnitPrice`, default summaries like `count`, `sum`, and `average` are disabled, leaving others like `min` and `max` active.
For `UnitsInStock`, custom summaries such as `total` and `totalDiscontinued` are excluded using the `disabledSummaries` property.
At runtime, summaries can also be dynamically disabled using the `disabledSummaries` property. For example, you can set or update the property on specific columns programmatically to adapt the displayed summaries based on user actions or application state changes.
```typescript
import {
    Component,
    ViewChild,
    OnInit,
    AfterViewInit,
    ElementRef,
    QueryList,
    ViewChildren
} from "@angular/core";
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxNumberSummaryOperand } from 'igniteui-angular/grids/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxSummaryResult, OverlaySettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxButtonDirective, IgxToggleDirective } from 'igniteui-angular/directives';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { DATA } from "../../data/nwindData";
import { IgxPreventDocumentScrollDirective } from "../../directives/prevent-scroll.directive";


class UnitsInStockSummary {
    public operate(
        data: any[] = [],
        allData: any[] = [],
        fieldName: string = ""
    ): IgxSummaryResult[] {
        const result = [];
        const values = allData
            .map((item) => item[fieldName] ?? 0)
            .filter((value) => value !== 0);
        const discontinuedItems = allData.filter(
            (item) => item["Discontinued"]
        );
        const discontinuedValues = discontinuedItems
            .map((item) => item[fieldName] ?? 0)
            .filter((value) => value !== 0);

        result.push({
            key: "count",
            label: "Count",
            summaryResult: values.length
        });

        result.push({
            key: "min",
            label: "Min",
            summaryResult: values.length > 0 ? Math.min(...values) : "N/A"
        });

        result.push({
            key: "max",
            label: "Max",
            summaryResult: values.length > 0 ? Math.max(...values) : "N/A"
        });

        result.push({
            key: "sum",
            label: "Sum",
            summaryResult: IgxNumberSummaryOperand.sum(values)
        });

        result.push({
            key: "average",
            label: "Average",
            summaryResult:
                values.length > 0
                    ? IgxNumberSummaryOperand.sum(values) / values.length
                    : "N/A"
        });

        result.push({
            key: "median",
            label: "Median",
            summaryResult:
                values.length > 0
                    ? (() => {
                          const sortedValues = values
                              .slice()
                              .sort((a, b) => a - b);
                          return sortedValues.length % 2 === 0
                              ? (sortedValues[sortedValues.length / 2 - 1] +
                                    sortedValues[sortedValues.length / 2]) /
                                    2
                              : sortedValues[
                                    Math.floor(sortedValues.length / 2)
                                ];
                      })()
                    : "N/A"
        });

        result.push({
            key: "range",
            label: "Range",
            summaryResult:
                values.length > 0
                    ? Math.max(...values) - Math.min(...values)
                    : "N/A"
        });

        result.push({
            key: "discontinued",
            label: "Discontinued Products",
            summaryResult: discontinuedItems.length
        });

        result.push({
            key: "totalDiscontinued",
            label: "Total Discontinued Items",
            summaryResult: IgxNumberSummaryOperand.sum(discontinuedValues)
        });

        return result;
    }
}

class DiscontinuedSummary {
    public operate(
        data: any[] = [],
        allData: any[] = [],
        fieldName: string = ""
    ): IgxSummaryResult[] {
        const result = [];

        result.push({
            key: "count",
            label: "Count",
            summaryResult: allData.length
        });

        result.push({
            key: "true",
            label: "True",
            summaryResult: allData.filter((item) => item[fieldName] === true)
                .length
        });

        result.push({
            key: "false",
            label: "False",
            summaryResult: allData.filter((item) => item[fieldName] === false)
                .length
        });

        return result;
    }
}

@Component({
    selector: "app-grid-summary-sample",
    styleUrls: ["./grid-disable-summaries.component.scss"],
    templateUrl: "grid-disable-summaries.component.html",
    imports: [
    IgxGridComponent,
    IgxPreventDocumentScrollDirective,
    IgxColumnComponent,
    IgxButtonDirective,
    IgxCheckboxComponent,
    IgxToggleDirective
]
})
export class GridDisableSummariesComponent implements OnInit, AfterViewInit {
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
    @ViewChildren(IgxToggleDirective) public toggles: QueryList<IgxToggleDirective>;
    @ViewChildren('toggleButton') public buttons: QueryList<ElementRef>;

    public data: any[];
    public togglesArray: any[];
    public buttonsArray: any[];

    public columns = [
        {
            label: 'Product ID',
            field: 'ProductID',
            summaries: []
        },
        {
            label: 'Product Name',
            field: 'ProductName',
            summaries: []
        },
        {
            label: 'Unit Price',
            field: 'UnitPrice',
            summaries: []
        },
        {
            label: 'Units In Stock',
            field: 'UnitsInStock',
            summaries: []
        },
        {
            label: 'Discontinued',
            field: 'Discontinued',
            summaries: []
        },
        {
            label: 'Order Date',
            field: 'OrderDate',
            summaries: []
        }
    ];

    public unitsInStockSummary = UnitsInStockSummary;
    public discontinuedSummary = DiscontinuedSummary;

    private _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom,
        horizontalDirection: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Bottom
    };

    private _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        closeOnEscape: true,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
    };

    constructor() {}

    public ngOnInit(): void {
        this.data = DATA;
    }

    public ngAfterViewInit(): void {
        this.togglesArray = this.toggles.toArray();
        this.buttonsArray = this.buttons.toArray();

        this.columns.forEach((column, index) => {
            column.summaries = this.getSummaries(column.field)
        });
    }

    public getCheckedSummariesCount(summaries: any[]): number {
        return summaries.filter(summary => summary.checked).length;
    }

    public toggle(index: number): void {
        this._overlaySettings.target = this.buttonsArray[index].nativeElement;
        this.togglesArray[index].toggle(this._overlaySettings);
    }

    public toggleCheckbox(event: any, index: number, column: any): void {
        column.summaries[index].checked = event.checked;
        if (event.checked) {
            this.grid1.getColumnByName(column.field).disabledSummaries = [
                ...this.grid1.getColumnByName(column.field).disabledSummaries,
                column.summaries[index].summaryKey
            ];
        } else {
            this.grid1.getColumnByName(column.field).disabledSummaries = this.grid1.getColumnByName(column.field).disabledSummaries.filter(
                (key: string) => key !== column.summaries[index].summaryKey
            );
        }
    }

    public uncheckAllColumns(column: any): void {
        column.summaries.forEach(summary => (summary.checked = false));
        this.grid1.getColumnByName(column.field).disabledSummaries = [];
    }

    public checkAllColumns(column: any): void {
        column.summaries.forEach(summary => (summary.checked = true));
        this.grid1.getColumnByName(column.field).disabledSummaries = column.summaries.map(summary => summary.summaryKey);
    }

    private getSummaries(columnName: string): any[] {
        return this.grid1
            .getColumnByName(columnName)
            .summaries.operate(
                this.grid1.data.map((record) => record.ProductID)
            )
            .map((summary) => ({
                summaryKey: summary.key,
                summaryLabel: summary.label,
                checked: false
            }));
    }
}
```
```html
<div class="grid-wrapper">
  <div class="summaries">
    <h5 class="summaries-title">Disable Summaries for Column:</h5>
    @for (column of columns; track column; let i = $index) {
      <div class="summary-column-button">
        <button
          #toggleButton
          igxButton="outlined"
          (click)="toggle(i)"
          >
          {{ column.label }} ({{ getCheckedSummariesCount(column.summaries) }})
        </button>
        <div igxToggle>
          <div class="summaries-dropdown">
            <div>
              <p class="summaries-dropdown-title">
                Disabled Summaries
              </p>
            </div>
            <div class="summaries-dropdown-items">
              @for (summary of column.summaries; track summary; let i = $index) {
                <igx-checkbox
                  class="summaries-dropdown-item"
                  [checked]="summary.checked"
                  (change)="toggleCheckbox($event, i, column)"
                  >
                  {{ summary.summaryLabel }}
                </igx-checkbox>
              }
            </div>
            <div class="summaries-dropdown-buttons">
              <button igxButton="flat"
                [disabled]="getCheckedSummariesCount(column.summaries) === column.summaries.length"
                (click)="checkAllColumns(column)"
                >
                Disable All
              </button>
              <button igxButton="flat"
                [disabled]="getCheckedSummariesCount(column.summaries) === 0"
                (click)="uncheckAllColumns(column)"
                >
                Enable All
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  </div>
  <igx-grid
    [igxPreventDocumentScroll]="true"
    #grid1
    [data]="data"
    [autoGenerate]="false"
    height="700px"
    width="100%"
    >
    <igx-column
      field="ProductID"
      header="Product ID"
      [hasSummary]="true"
    ></igx-column>
    <igx-column
      field="ProductName"
      header="Product Name"
      [hasSummary]="true"
      >
    </igx-column>
    <igx-column
      field="UnitPrice"
      header="Unit Price"
      dataType="number"
      [hasSummary]="true"
      >
    </igx-column>
    <igx-column
      field="UnitsInStock"
      header="Units In Stock"
      dataType="number"
      [hasSummary]="true"
      [summaries]="unitsInStockSummary"
      >
    </igx-column>
    <igx-column
      field="Discontinued"
      header="Discontinued"
      [dataType]="'boolean'"
      [hasSummary]="true"
      [summaries]="discontinuedSummary"
      >
    </igx-column>
    <igx-column
      field="OrderDate"
      header="Order Date"
      [dataType]="'date'"
      [hasSummary]="true"
      >
    </igx-column>
  </igx-grid>
</div>
```
```scss
.grid-wrapper {
    margin: 0 auto;
    padding: 16px;

    .summaries {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        &-title {
            margin: 0 0 1rem 0;
            flex-basis: 100%;
        }

        .summary-column-button {
            margin-right: 1rem;
            margin-bottom: 0.5rem;
        }
    }
}

.summaries-dropdown {
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;

    &-title {
        color: #40B3FF;
        margin: 0.5rem 1.1rem;
    }

    &-items {
        display: flex;
        flex-direction: column;

        .summaries-dropdown-item {
            display: flex;
            align-items: center;
            padding: 0 1rem;
        }
    }

    &-buttons {
        display: flex;
        justify-content: space-between;
        padding: 0.2rem;
    }
}
```
## Formatting summaries
By default, summary results, produced by the built-in summary operands, are localized and formatted according to the grid [`locale`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#locale) and column [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#pipeArgs). When using custom operands, the `locale` and `pipeArgs` are not applied. If you want to change the default appearance of the summary results, you may format them using the [`summaryFormatter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#summaryFormatter) property.
```typescript
public dateSummaryFormat(summary: IgxSummaryResult, summaryOperand: IgxSummaryOperand): string {
    const result = summary.summaryResult;
    if(summaryOperand instanceof IgxDateSummaryOperand && summary.key !== 'count'
        && result !== null && result !== undefined) {
        const pipe = new DatePipe('en-US');
        return pipe.transform(result,'MMM YYYY');
    }
    return result;
}
```
```html
<igx-column ... [summaryFormatter]="dateSummaryFormat"></igx-column>
```
```typescript
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxDateSummaryOperand, IgxSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-summary-formatter',
    styleUrls: ['./grid-summary-formatter.component.scss'],
    templateUrl: './grid-summary-formatter.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})

  export class GridSummaryFormatterComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    public ngOnInit(): void {
        this.data = DATA;
    }

    public dateSummaryFormat(summary: IgxSummaryResult, summaryOperand: IgxSummaryOperand): string {
        const result = summary.summaryResult;
        if (summaryOperand instanceof IgxDateSummaryOperand && summary.key !== 'count'
            && result !== null && result !== undefined) {
            const pipe = new DatePipe('en-US');
            return pipe.transform(result, 'MMM YYYY');
        }
        return result;
    }
  }
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [autoGenerate]="false" height="600px" width="100%"
    [allowFiltering]='true' filterMode="excelStyleFilter">
    <igx-column field="ProductName" header="Product Name" [sortable]="true" [disableHiding]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="true" [disableHiding]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price Category" [sortable]="true" [disableHiding]="true" dataType="string">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="true" [disableHiding]="true" [dataType]="'date'" [hasSummary]="true"
      [summaryFormatter]="dateSummaryFormat">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [disableHiding]="true" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
    </igx-column>
  </igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 16px;
}
```
## Summaries with Group By
When you have grouped by columns, the Grid allows you to change the summary position and calculation mode using the [`summaryCalculationMode`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#summaryCalculationMode) and [`summaryPosition`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#summaryPosition) properties. Along with these two properties the IgxGrid exposes and [`showSummaryOnCollapse`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#showSummaryOnCollapse) property which allows you to determine whether the summary row stays visible when the group row that refers to is collapsed.
The available values of the [`summaryCalculationMode`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#summaryCalculationMode) property are:
- rootLevelOnly - Summaries are calculated only for the root level.
- childLevelsOnly - Summaries are calculated only for the child levels.
- rootAndChildLevels - Summaries are calculated for both root and child levels. This is the default value.
The available values of the [`summaryPosition`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#summaryPosition) property are:
- top - The summary row appears before the group by row children.
- bottom - The summary row appears after the group by row children. This is the default value.
The [`showSummaryOnCollapse`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#showSummaryOnCollapse) property is boolean. Its default value is set to **false**, which means that the summary row would be hidden when the group row is collapsed. If the property is set to **true** the summary row stays visible when group row is collapsed.
> [!NOTE]
> The [`summaryPosition`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#summaryPosition) property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the Grid.
### Demo
```typescript
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DefaultSortingStrategy, GridSummaryCalculationMode, ISortingExpression, IgxSummaryResult, SortingDirection } from 'igniteui-angular/core';
import { GridSelectionMode, GridSummaryPosition, IgxColumnComponent, IgxNumberSummaryOperand, IgxSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { INVOICE_DATA } from '../../data/invoiceData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

class AvgSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        const avg = IgxNumberSummaryOperand.average(data);
        result.push({
            key: 'avg',
            label: 'Average',
            summaryResult: data.length ? '$' + avg.toFixed(2) : ''
        });
        return result;
    }
}

class SumSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'sum',
            label: 'Sum',
            summaryResult: IgxNumberSummaryOperand.sum(data)
        });
        return result;
    }
}

@Component({
    selector: 'app-grid-groupby-summary-sample',
    styleUrls: ['./grid-groupby-summary-sample.component.scss'],
    templateUrl: './grid-groupby-summary-sample.component.html',
    imports: [IgxButtonGroupComponent, IgxSwitchComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class GridGroupBySummarySampleComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public expr: ISortingExpression[];
    public avgSummary = AvgSummary;
    public sumSummary = SumSummary;
    public summaryPositions;
    public summaryPosition: GridSummaryPosition = GridSummaryPosition.bottom;
    public summaryCalcModes;
    public summaryCalculationMode: GridSummaryCalculationMode = GridSummaryCalculationMode.rootAndChildLevels;
    public selectionMode: GridSelectionMode = 'multiple';

    constructor() {
        this.data = INVOICE_DATA;
        this.expr = [
            { dir: SortingDirection.Asc, fieldName: 'ShipCountry', ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() }
        ];

        this.summaryPositions = [
            {
                label: GridSummaryPosition.top,
                selected: this.summaryPosition === GridSummaryPosition.top,
                togglable: true
            },
            {
                label: GridSummaryPosition.bottom,
                selected: this.summaryPosition === GridSummaryPosition.bottom,
                togglable: true
            }
        ];

        this.summaryCalcModes = [
            {
                label: 'Root Level Only',
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.rootLevelOnly,
                togglable: true,
                value: GridSummaryCalculationMode.rootLevelOnly
            },
            {
                label: 'Child Levels Only',
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.childLevelsOnly,
                togglable: true,
                value: GridSummaryCalculationMode.childLevelsOnly
            },
            {
                label: 'Root And Child Levels',
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.rootAndChildLevels,
                togglable: true,
                value: GridSummaryCalculationMode.rootAndChildLevels
            }
        ];
    }

    public selectSummaryPosition(event) {
        this.summaryPosition = this.summaryPositions[event.index].label;
        this.grid1.summaryPosition = this.summaryPosition;
    }

    public selectSummaryCalcMode(event) {
        this.summaryCalculationMode = this.summaryCalcModes[event.index].value;
        this.grid1.summaryCalculationMode = this.summaryCalculationMode;
    }

    public toggle(event) {
        this.grid1.showSummaryOnCollapse = !this.grid1.showSummaryOnCollapse;
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public isDate(value: any) {
        if (value instanceof Date) {
            return true;
        } else {
            return false;
        }
    }
}
```
```html
<div class="summary-chooser">
    <igx-buttongroup [values]="summaryCalcModes" (selected)="selectSummaryCalcMode($event)"></igx-buttongroup>
</div>

<div class="summary-chooser">
    <igx-buttongroup [values]="summaryPositions" (selected)="selectSummaryPosition($event)"></igx-buttongroup>
</div>
<div class="summary-chooser">
    <igx-switch labelPosition="before" [checked]='grid1.showSummaryOnCollapse' (change)='toggle($event)'> Show summary row when group row is collapsed:</igx-switch>
</div>

<igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [width]="'100%'" [height]="'540px'" [rowSelection]="selectionMode" [groupingExpressions]="expr">
    <igx-column field="ShipCountry" header="Ship Country" width="200px" [groupable]="true">
    </igx-column>
    <igx-column field="ShipCity" header="Ship City" width="250px" [groupable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" width="150px" [formatter]="formatCurrency" dataType="number" [groupable]="true" [hasSummary]="true" [summaries]="avgSummary">
    </igx-column>
    <igx-column field="Quantity" header="Quantity" width="150px" dataType="number" [groupable]="true" [hasSummary]="true" [summaries]="sumSummary">
    </igx-column>
</igx-grid>
```
```scss
:host {
    display: block;
    padding: 16px;
}

.summary-chooser {
    margin-bottom: 16px;
}

igx-buttongroup{
    display: block;
    width: 600px;
}
```
<div class="divider--half"></div>
## Exporting Summaries
There is an [`exportSummaries`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxExcelExporterOptions.html#exportSummaries) option in `IgxExcelExporterOptions` that specifies whether the exported data should include the grid's summaries. Default `exportSummaries` value is **false**.
The [`IgxExcelExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxExcelExporterService.html) will export the default summaries for all column types as their equivalent excel functions so they will continue working properly when the sheet is modified. Try it for yourself in the example below:
```typescript
import { Component, ViewChild, inject } from '@angular/core';
import { ColumnType, IgxSummaryResult } from 'igniteui-angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import {
    IgxCellHeaderTemplateDirective,
    IgxCellTemplateDirective,
    IgxColumnComponent,
    IgxNumberSummaryOperand,
    IgxExcelExporterOptions,
    IgxExcelExporterService
} from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DatePipe } from '@angular/common';

class MySummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxNumberSummaryOperand().operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter((rec) => rec > 10 && rec < 30).length
        });

        return result;
    }
}
@Component({
    selector: 'app-grid-summary-export',
    styleUrls: ['./grid-summary-export.component.scss'],
    templateUrl: './grid-summary-export.component.html',
    imports: [IgxButtonDirective, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxCellHeaderTemplateDirective, IgxIconComponent, DatePipe]
})
export class GridSummaryExportComponent {
    private excelExportService = inject(IgxExcelExporterService);

    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    public mySummary = MySummary;
    public data;
    public productId = 0;

    constructor() {
        this.data = DATA;
        this.productId = DATA.length;
    }

    public toggleSummary(column: ColumnType) {
        column.hasSummary = !column.hasSummary;
    }

    public exportButtonHandler() {
        this.excelExportService.export(this.grid, new IgxExcelExporterOptions('ExportedFile'));
    }
}
```
```html
<div class="grid__wrapper">
  <div class="button-container">
    <button igxButton="contained" (click)="exportButtonHandler()">Export To Excel</button>
    Press the button to export the Grid as a .xlsx file.
  </div>

  <igx-grid [igxPreventDocumentScroll]="true" #grid [data]="data" [autoGenerate]="false" height="650px" width="100%">
    <igx-column #col field="ProductID" header="Product ID" [headerClasses]="'prodId'">
    </igx-column>
    <igx-column #col field="ProductName" header="Product Name" [headerClasses]="'prodId'" [hasSummary]="true">
      <ng-template igxCell let-cell="cell" let-val>
        {{val}}
      </ng-template>
      <ng-template igxHeader let-col>
        <div class="header-text">{{col.field}}</div>
        <igx-icon class="header-icon" style.color="{{ col.hasSummary ? '#e41c77' : '' }}" (click)="toggleSummary(col)">functions</igx-icon>
      </ng-template>
    </igx-column>
    <igx-column #col field="UnitPrice" header="Price" [filterable]="false" [editable]="true" dataType="number"
      [hasSummary]="true">
      <ng-template igxCell let-cell="cell" let-val let-row>
        ${{val}}
      </ng-template>
      <ng-template igxHeader let-col>
        <div class="header-text">{{col.field}}</div>
        <igx-icon class="header-icon" style.color="{{ col.hasSummary ? '#e41c77' : '' }}" (click)="toggleSummary(col)">functions</igx-icon>
      </ng-template>
    </igx-column>
    <igx-column #col field="UnitsInStock" header="Units In Stock" dataType="number" [editable]="true"
      [hasSummary]="false" [summaries]="mySummary">
      <ng-template igxCell let-cell="cell" let-val let-row>
        {{val}}
      </ng-template>
      <ng-template igxHeader let-col>
        <div class="header-text">{{col.field}}</div>
        <igx-icon class="header-icon" style.color="{{ col.hasSummary ? '#e41c77' : '' }}" (click)="toggleSummary(col)">functions</igx-icon>
      </ng-template>
    </igx-column>
    <igx-column #col field="Discontinued" header="Discontinued" [hasSummary]="true" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
      <ng-template igxHeader let-col>
        <div class="header-text">{{col.field}}</div>
        <igx-icon class="header-icon" style.color="{{ col.hasSummary ? '#e41c77' : '' }}" (click)="toggleSummary(col)">functions</igx-icon>
      </ng-template>
    </igx-column>
    <igx-column #col field="OrderDate" [dataType]="'date'" [hasSummary]="true">
      <ng-template igxCell let-cell="cell" let-val let-row>
        {{ val | date: 'MMM d, yyyy' }}
      </ng-template>
      <ng-template igxHeader let-col>
        <div class="header-text">{{col.field}}</div>
        <igx-icon class="header-icon" style.color="{{ col.hasSummary ? '#e41c77' : '' }}" (click)="toggleSummary(col)">functions</igx-icon>
      </ng-template>
    </igx-column>
  </igx-grid>
</div>
```
```scss
.grid-controls {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin: 0 16px 24px;

    igx-switch {
        margin-top: 24px;
    }

}

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

.header {
    height: 100%;
}

:host ::ng-deep{
    .igx-grid__th .title{
        width: 100%;
        cursor: auto;
    }

    @media screen and (max-width: 677px){

        .header-icon {
            padding-bottom: 17px;
            padding-top: 17px;
            font-size: 1.4em;
            width: 1.1em;
            height: 1.1em;
            float: right;
        }
        .header-text {
            float:left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 50%;
        }
    }


    @media screen and (min-width: 677px){

        .header-icon {
            padding-top: 17px;
            font-size: 1.4em;
            width: 1.1em;
            height: 1.1em;
            float: right;
        }

        .header-text {
            float:left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 50%;
        }
    }


    @media screen and (min-width: 992px){

        .header-icon {
            padding-top: 17px;
            font-size: 1.4em;
            width: 1.1em;
            height: 1.1em;
            float: right;
            margin-right: 10px;
            cursor: pointer;
        }

        .header-text {
            float:left;
            white-space: nowrap;
            width: 50%;
            cursor: auto;
        }
    }
}

.button-container {
    margin: 25px auto;
}
```
The exported file includes a hidden column that holds the level of each `DataRecord` in the sheet. This level is used in the summaries to filter out the cells that need to be included in the summary function.
In the table below, you can find the corresponding Excel formula for each of the default summaries.
| Data Type                       |  Function | Excel Function                                                                   |
| :------------------------------ | :-------: | :------------------------------------------------------------------------------- |
| `string`, `boolean`             |    count  | ="Count: "&COUNTIF(start:end, recordLevel)                                       |
| `number`, `currency`, `percent` |    count  | ="Count: "&COUNTIF(start:end, recordLevel)                                       |
|                                 |      min  | ="Min: "&MIN(IF(start:end=recordLevel, rangeStart:rangeEnd))                     |
|                                 |      max  | ="Max: "&MAX(IF(start:end=recordLevel, rangeStart:rangeEnd))                     |
|                                 |  average  | ="Avg: "&AVERAGEIF(start:end, recordLevel, rangeStart:rangeEnd)                  |
|                                 |      sum  | ="Sum: "&SUMIF(start:end, recordLevel, rangeStart:rangeEnd)                      |
| `date`                          |    count  | ="Count: "&COUNTIF(start:end, recordLevel)                                       |
|                                 |  earliest | ="Earliest: "& TEXT(MIN(IF(start:end=recordLevel, rangeStart:rangeEnd)), format) |
|                                 |   latest  | ="Latest: "&TEXT(MAX(IF(start:end=recordLevel, rangeStart:rangeEnd)), format)    |
### Known Limitations
| Limitation                    | Description                                                                     |
| :---------------------------- | :------------------------------------------------------------------------------ |
| Exporting custom summaries    | Custom summaries will be exported as strings instead of Excel functions.        |
| Exporting templated summaries | Templated summaries are not supported and will be exported as the default ones. |
## Keyboard Navigation
The summary rows can be navigated with the following keyboard interactions:
- <kbd>UP</kbd> - navigates one cell up
- <kbd>DOWN</kbd> - navigates one cell down
- <kbd>LEFT</kbd> - navigates one cell left
- <kbd>RIGHT</kbd> - navigates one cell right
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - navigates to the leftmost cell
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> or <kbd>END</kbd> - navigates to the rightmost cell
## Styling
To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
Following the simplest approach, we create a new theme that extends the [`grid-summary-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-summary-theme) and accepts the `$background-color`, `$focus-background-color`, `$label-color`, `$result-color`, `$pinned-border-width`, `$pinned-border-style` and `$pinned-border-color` parameters.
```scss
$custom-theme: grid-summary-theme(
  $background-color: #e0f3ff,
  $focus-background-color: rgba(#94d1f7, .3),
  $label-color: #e41c77,
  $result-color: black,
  $pinned-border-width: 2px,
  $pinned-border-style: dotted,
  $pinned-border-color: #e41c77
);
```
>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.
The last step is to **include** the component custom theme:
```scss
:host {
  @include tokens($custom-theme);
}
```
>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
  ::ng-deep {
    @include tokens($custom-theme);
  }
}
```
### Demo
```typescript
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DefaultSortingStrategy, GridSummaryCalculationMode, ISortingExpression, IgxSummaryResult, SortingDirection } from 'igniteui-angular/core';
import { GridSelectionMode, GridSummaryPosition, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarPinningComponent, IgxNumberSummaryOperand, IgxSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { INVOICE_DATA } from '../../data/invoiceData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

class CustomSummary {


    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'sum',
            label: 'Sum',
            summaryResult: IgxNumberSummaryOperand.sum(data)
        }, {
            key: 'count',
            label: 'Count',
            summaryResult: data.length ? data.length : 0
        });
        return result;
    }
}

@Component({
    selector: 'app-grid-groupby-summary-sample',
    styleUrls: ['./grid-groupby-summary-styling-sample.component.scss'],
    templateUrl: './grid-groupby-summary-styling-sample.component.html',
    imports: [IgxButtonGroupComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent, IgxColumnComponent]
})
export class GridGroupBySummaryStylingSampleComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public expr: ISortingExpression[];
    public customSummary = CustomSummary;
    public summaryPositions;
    public summaryPosition: GridSummaryPosition = GridSummaryPosition.bottom;
    public summaryCalcModes;
    public summaryCalculationMode: GridSummaryCalculationMode = GridSummaryCalculationMode.rootAndChildLevels;
    public selectionMode: GridSelectionMode = 'multiple';

    constructor() {
        this.data = INVOICE_DATA;
        this.expr = [
            { dir: SortingDirection.Asc, fieldName: 'ShipCountry', ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() }
        ];

        this.summaryPositions = [
            {
                label: GridSummaryPosition.top,
                selected: this.summaryPosition === GridSummaryPosition.top,
                togglable: true
            },
            {
                label: GridSummaryPosition.bottom,
                selected: this.summaryPosition === GridSummaryPosition.bottom,
                togglable: true
            }
        ];

        this.summaryCalcModes = [
            {
                label: 'Root Level Only',
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.rootLevelOnly,
                togglable: true,
                value: GridSummaryCalculationMode.rootLevelOnly
            },
            {
                label: 'Child Levels Only',
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.childLevelsOnly,
                togglable: true,
                value: GridSummaryCalculationMode.childLevelsOnly
            },
            {
                label: 'Root And Child Levels',
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.rootAndChildLevels,
                togglable: true,
                value: GridSummaryCalculationMode.rootAndChildLevels
            }
        ];
    }

    public selectSummaryPosition(event) {
        this.summaryPosition = this.summaryPositions[event.index].label;
        this.grid1.summaryPosition = this.summaryPosition;
    }

    public selectSummaryCalcMode(event) {
        this.summaryCalculationMode = this.summaryCalcModes[event.index].value;
        this.grid1.summaryCalculationMode = this.summaryCalculationMode;
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public isDate(value: any) {
        if (value instanceof Date) {
            return true;
        } else {
            return false;
        }
    }

}
```
```html
<div class="grid-wrapper">
<div class="summary-chooser">
    <igx-buttongroup [values]="summaryCalcModes" (selected)="selectSummaryCalcMode($event)"></igx-buttongroup>
</div>

<div class="summary-chooser">
    <igx-buttongroup [values]="summaryPositions" (selected)="selectSummaryPosition($event)"></igx-buttongroup>
</div>

<igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [width]="'100%'" [height]="'570px'" [rowSelection]='selectionMode' [groupingExpressions]='expr'>
    <igx-grid-toolbar>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    <igx-column field="ShipCountry" header="Ship Country" width="200px" [groupable]="true" [pinned]="true">
    </igx-column>
    <igx-column field="ShipCity" header="Ship City" width="250px" [groupable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" width="150px" [formatter]="formatCurrency" dataType="number" [groupable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="Quantity" header="Quantity" width="150px" dataType="number" [groupable]="true" [hasSummary]="true" [summaries]="customSummary">
    </igx-column>
</igx-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$summaries-background: #e0f3ff;

$custom-theme: grid-summary-theme(
    $background-color: $summaries-background,
    $label-color: #e41c77,
    $result-color: black,
    $pinned-border-width: 2px,
    $pinned-border-style: dotted,
    $pinned-border-color: #e41c77,
);

:host {
    ::ng-deep {
        igx-grid-summary-row {
            --summaries-patch-background: #{$summaries-background};
        }

        @include tokens($custom-theme);
    }
}
```
## API References
- [IgxGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [IgxGridSummaries Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-summary-theme)
- [IgxSummaryOperand](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html)
- [IgxNumberSummaryOperand](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html)
- [IgxDateSummaryOperand](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatesummaryoperand.html)
- [IgxColumnGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html)
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
## Additional Resources
<div class="divider--half"></div>
- [Grid overview](grid.md)
- [Column Data Types](column-types.md#default-template)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
* [Selection-based Aggregates](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/grid/selection-based-aggregates.html)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
