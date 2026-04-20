---
title: Angular Grid Summaries - Ignite UI for Angular
_description: Configure Angular grid summaries in the group footer of the column and use the option to set custom angular template in the Ignite UI for Angular table
_keywords: angular grid summaries, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/summaries
_tocName: Summaries
_premium: true
---
# Angular Hierarchical Grid Summaries
The Angular UI grid in Ignite UI for Angular has a **summaries** feature that functions on a per-column level as group footer. Angular grid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom angular template in the Hierarchical Grid.
## Angular Hierarchical Grid Summaries Overview Example
```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxNumberSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

class MySummary  {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
        {
            key: 'min',
            label: 'Min',
            summaryResult: IgxNumberSummaryOperand.min(data)
        },
        {
            key: 'max',
            label: 'Max',
            summaryResult: IgxNumberSummaryOperand.max(data)
        },
        {
          key: 'avg',
          label: 'Avg',
          summaryResult: IgxNumberSummaryOperand.average(data)
        });
        return result;
    }
}
class MyChildSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
        {
            key: 'count',
            label: 'Count',
            summaryResult: IgxNumberSummaryOperand.count(data)
        });
        return result;
    }
}

@Component({
    selector: 'app-hierarchical-grid-summary',
    styleUrls: ['./hierarchical-grid-summary.component.scss'],
    templateUrl: 'hierarchical-grid-summary.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridSummarySampleComponent {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;
    public mySummary = MySummary;
    public myChildSummary = MyChildSummary;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
```
```html
<div class="hgrid-sample">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
        <igx-column field="Artist" [hasSummary]='true'></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [hasSummary]='true' [formatter]="formatter"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [hasSummary]='true' dataType="number" [summaries]="mySummary"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [hasSummary]='true' [summaries]="mySummary" dataType="number"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
                <igx-column field="Album"></igx-column>
                <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
                <igx-column field="BillboardReview" header="Billboard Review" [hasSummary]='true' dataType="number" [summaries]="mySummary"></igx-column>
                <igx-column field="USBillboard200" header="US Billboard 200" [hasSummary]='true' dataType="number" [summaries]="mySummary"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
                    <igx-column field="Number" header="No."></igx-column>
                    <igx-column field="Title" [hasSummary]='true' [summaries]="myChildSummary"></igx-column>
                    <igx-column field="Released" dataType="date"></igx-column>
                    <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
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

.hgrid-sample{
    padding: 16px;
}
```
<div class="divider--half"></div>
> [!NOTE]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**
**Hierarchical Grid summaries** can also be enabled on a per-column level in Ignite UI for Angular, which means that you can activate it only for columns that you need. Hierarchical Grid summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:
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
**Hierarchical Grid summaries** are enabled per-column by setting [`hasSummary`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#hasSummary) property to `true`. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the `igx-hierarchical-grid` the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the [`dataType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#datatype) property as `number` or `date`. Note that the summary values will be displayed localized, according to the grid [`locale`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#locale) and column [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#pipeArgs).
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false">
    <igx-column field="Artist" [hasSummary]='true'></igx-column>
    <igx-column field="Photo">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [hasSummary]='true'></igx-column>
    <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
    <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
</igx-hierarchical-grid>
```
The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`enableSummaries`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#enableSummaries)/[`disableSummaries`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#disableSummaries) of the **igx-hierarchical-grid**.
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
  <igx-column field="Artist" [hasSummary]='true'></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [hasSummary]='true'></igx-column>
        <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
        <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
</igx-hierarchical-grid>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.hierarchicalGrid.enableSummaries([
        {fieldName: 'Grammy Nominations', customSummary: this.mySummary},
        {fieldName: 'Artist'}
    ]);
}
public disableSummary() {
    this.hierarchicalGrid.disableSummaries('Photo');
}
```
## Custom Hierarchical Grid Summaries
If these functions do not fulfill your requirements you can provide a custom summary for the specific columns. In order to achieve this you have to override one of the base classes [`IgxSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html), [`IgxNumberSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html) or [`IgxDateSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatesummaryoperand.html) according to the column data type and your needs. This way you can redefine the existing function or you can add new functions. [`IgxSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html) class provides the default implementation only for the [`count`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html#count) method. [`IgxNumberSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html) extends [`IgxSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html) and provides implementation for the [`min`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html#min), [`max`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html#max), [`sum`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html#sum) and [`average`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html#average). [`IgxDateSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatesummaryoperand.html) extends [`IgxSummaryOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html) and additionally gives you [`earliest`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatesummaryoperand.html#earliest) and [`latest`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatesummaryoperand.html#latest).
```typescript
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { IgxNumberSummaryOperand } from 'igniteui-angular/grids/core';
// import { IgxRowIslandComponent, IgxHierarchicalGridComponent, IgxNumberSummaryOperand, IgxSummaryResult } from '@infragistics/igniteui-angular'; for licensed package
class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'More than 5',
            summaryResult: data.filter((rec) => rec > 5).length
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
> In order to calculate the summary row height properly, the Hierarchical Grid needs the [`operate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html#operate) method to always return an array of [`IgxSummaryResult`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igxsummaryresult.html) with the proper length even when the data is empty.
And now let's add our custom summary to the column `GramyNominations`. We will achieve that by setting the [`summaries`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#summaries) property to the class we create below.
```html
 <igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false">
    <igx-column field="Artist" [hasSummary]='true'></igx-column>
    <igx-column field="Photo">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [hasSummary]='true'></igx-column>
    <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
    <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
</igx-hierarchical-grid>
```
```typescript
...
export class HGridSummarySampleComponent implements OnInit {
    mySummary = MySummary;
    ....
}
```
### Custom summaries, which access all data

 Now you can access all Hierarchical Grid data inside the custom column summary. Two additional optional parameters are introduced in the IgxSummaryOperand `operate` method.
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
import {  Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxNumberSummaryOperand, IgxSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

class CustomNumberSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxNumberSummaryOperand().operate(data);
        result.pop();
        result.pop();
        return result;
    }
}

class GrammySummary {

    public operate(data?: any[], allData = [], fieldName = ''): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'nominatedSingers',
            label: 'Nominated Singers',
            summaryResult: allData.filter((rec) =>  rec['GrammyNominations'] > 0).length
        });
        result.push({
            key: 'singersWithAwards',
            label: 'Singers with Awards',
            summaryResult: allData.filter((rec) =>  rec['GrammyAwards'] > 0).length
        });
        result.push({
            key: 'nominations',
            label: 'Total Nominations',
            summaryResult: IgxNumberSummaryOperand.sum(allData.map(r => r['GrammyNominations']))
        });
        result.push({
            key: 'awards',
            label: 'Total Awards',
            summaryResult: IgxNumberSummaryOperand.sum(allData.map(r => r['GrammyAwards']))
        });
        return result;
    }
}

@Component({
    selector: 'app-hierarchical-grid-all-data-summary',
    styleUrls: ['./hierarchical-grid-allData-summary.component.scss'],
    templateUrl: 'hierarchical-grid-allData-summary.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridAllDataSummaryComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;
    public localdata;
    public grammySummary = GrammySummary;
    public numberSummary = CustomNumberSummary;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }
}
```
```html
<div class="hgrid-sample">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata"
        [height]="'600px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
        <igx-column field="Artist" [hasSummary]='true'></igx-column>
        <igx-column field="Photo" [hasSummary]='true' [summaries]="grammySummary">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="numberSummary"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [hasSummary]='true' [dataType]="'number'" [summaries]="numberSummary"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'">
            <igx-column field="Album" [hasSummary]='true'></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [hasSummary]='true' [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [hasSummary]='true'></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [hasSummary]='true'></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'">
                <igx-column field="Number" header="No." [hasSummary]='true'></igx-column>
                <igx-column field="Title" [hasSummary]='true'></igx-column>
                <igx-column field="Released" dataType="date" [hasSummary]='true'></igx-column>
                <igx-column field="Genre" [hasSummary]='true'></igx-column>
        </igx-row-island>
    </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.hgrid-sample{
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
import { IgxCellTemplateDirective, IgxColumnComponent, IgxNumberSummaryOperand, IgxSummaryTemplateDirective } from 'igniteui-angular/grids/core';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { SINGERS } from '../../data/singersData';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

class CustomNumberSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxNumberSummaryOperand().operate(data);
        result.pop();
        result.pop();
        return result;
    }
}

class GrammySummary {

    public operate(data?: any[], allData = [], fieldName = ''): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'nominatedSingers',
            label: 'Nominated Singers',
            summaryResult: allData.filter((rec) => rec['GrammyNominations'] > 0).length
        });
        result.push({
            key: 'singersWithAwards',
            label: 'Singers with Awards',
            summaryResult: allData.filter((rec) => rec['GrammyAwards'] > 0).length
        });
        result.push({
            key: 'nominations',
            label: 'Total Nominations',
            summaryResult: IgxNumberSummaryOperand.sum(allData.map(r => r['GrammyNominations']))
        });
        result.push({
            key: 'awards',
            label: 'Total Awards',
            summaryResult: IgxNumberSummaryOperand.sum(allData.map(r => r['GrammyAwards']))
        });
        return result;
    }
}

@Component({
    selector: 'app-hierarchical-grid-all-data-summary',
    styleUrls: ['./hgrid-summary-template.component.scss'],
    templateUrl: 'hgrid-summary-template.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSwitchComponent, IgxButtonGroupComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxSummaryTemplateDirective, IgxRowIslandComponent]
})

export class HGridSummaryTemplateComponent implements OnInit {
    public localdata;
    public grammySummary = GrammySummary;
    public numberSummary = CustomNumberSummary;
    public summaryHeight = 120;
    public size = 'medium';
    public sizes;
    public hasSummary = true;

    constructor() { }

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.sizes = [
            { label: 'small', selected: this.size === 'small', togglable: true },
            { label: 'medium', selected: this.size === 'medium', togglable: true },
            { label: 'large', selected: this.size === 'large', togglable: true }
        ];
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event): void {
        this.size = this.sizes[event.index].label;
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

    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" [data]="localdata"
        [summaryRowHeight]="summaryHeight" [height]="'550px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
        <igx-column field="Artist" [hasSummary]='hasSummary'></igx-column>
        <igx-column field="Photo" [hasSummary]='hasSummary' [summaries]="grammySummary">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [hasSummary]='hasSummary'
            [dataType]="'number'" [summaries]="numberSummary">
            <ng-template igxSummary let-summaryResults>
                <div class="summary-temp">
                    <span><strong>{{ summaryResults[0].label }}</strong><span>{{ summaryResults[0].summaryResult }}</span></span>
                    <span><strong>{{ summaryResults[1].label }}</strong><span>{{ summaryResults[1].summaryResult }}</span></span>
                    <span><strong>{{ summaryResults[2].label }}</strong><span>{{ summaryResults[2].summaryResult }}</span></span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [hasSummary]='hasSummary' [dataType]="'number'"
            [summaries]="numberSummary"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [summaryRowHeight]="summaryHeight">
            <igx-column field="Album" [hasSummary]='hasSummary'></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [hasSummary]='hasSummary' [dataType]="'date'">
                <ng-template igxSummary let-summaryResults>
                    <div class="summary-temp">
                        <span><strong>{{ summaryResults[0].label }}</strong><span>{{ summaryResults[0].summaryResult }}</span></span>
                        <span><strong>{{ summaryResults[1].label }}</strong><span>{{ summaryResults[1].summaryResult }}</span></span>
                    </div>
                </ng-template>
            </igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [hasSummary]='hasSummary'></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [hasSummary]='hasSummary'></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'">
                <igx-column field="Number" header="No." [hasSummary]='hasSummary'></igx-column>
                <igx-column field="Title" [hasSummary]='hasSummary'></igx-column>
                <igx-column field="Released" dataType="date" [hasSummary]='hasSummary'></igx-column>
                <igx-column field="Genre" [hasSummary]='hasSummary'></igx-column>
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
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
The [`disabledSummaries`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#disabledSummaries) property provides precise per-column control over the Ignite UI for Angular grid summary feature. This property enables users to customize the summaries displayed for each column in the grid, ensuring that only the most relevant and meaningful data is shown. For example, you can exclude specific summary types, such as `['count', 'min', 'max']`, by specifying their summary keys in an array.
This property can also be modified **dynamically at runtime** through code, providing flexibility to adapt the grid's summaries to changing application states or user actions.
The following examples illustrate how to use the `disabledSummaries` property to manage summaries for different columns and exclude specific default and custom summary types in the Ignite UI for Angular grid:
```html
<!-- custom summaries -->
<igx-column
    field="Photo"
    [hasSummary]="true"
    [summaries]="grammySummary"
    [disabledSummaries]="['singersWithAwards', 'awards']"
>
    <ng-template igxCell let-cell="cell">
        <div class="cell__inner_2">
            <img [src]="cell.value" class="photo" />
        </div>
    </ng-template>
</igx-column>
<!-- default summaries -->
<igx-column
    field="GrammyNominations"
    header="Grammy Nominations"
    dataType="number"
    [hasSummary]="true"
    [disabledSummaries]="['count', 'sum', 'average']"
></igx-column>
```
For `Photo`, custom summaries such as `singersWithAwards` and `awards` are excluded using the `disabledSummaries` property.
For `GrammyNominations` default summaries like `count`, `sum`, and `average` are disabled, leaving others like `min` and `max` active.
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
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxNumberSummaryOperand } from 'igniteui-angular/grids/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxSummaryResult, OverlaySettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxButtonDirective, IgxToggleDirective } from 'igniteui-angular/directives';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { SINGERS } from "../../data/singersData";
import { IgxPreventDocumentScrollDirective } from "../../directives/prevent-scroll.directive";


class GrammySummary {
    public operate(
        data?: any[],
        allData: any[] = [],
        fieldName: string = ""
    ): IgxSummaryResult[] {
        const result = [];

        result.push({
            key: "count",
            label: "Count",
            summaryResult: allData.filter((rec) => rec["Artist"] > 0)
                .length
        });

        result.push({
            key: "nominatedSingers",
            label: "Nominated Singers",
            summaryResult: allData.filter((rec) => rec["GrammyNominations"] > 0)
                .length
        });

        result.push({
            key: "singersWithAwards",
            label: "Singers with Awards",
            summaryResult: allData.filter((rec) => rec["GrammyAwards"] > 0)
                .length
        });

        result.push({
            key: "nominations",
            label: "Total Nominations",
            summaryResult: IgxNumberSummaryOperand.sum(
                allData.map((r) => r["GrammyNominations"])
            )
        });

        result.push({
            key: "awards",
            label: "Total Awards",
            summaryResult: IgxNumberSummaryOperand.sum(
                allData.map((r) => r["GrammyAwards"])
            )
        });

        return result;
    }
}

@Component({
    selector: "app-hierarchical-grid-summary-sample",
    styleUrls: ["./hierarchical-grid-disable-summaries.component.scss"],
    templateUrl: "hierarchical-grid-disable-summaries.component.html",
    imports: [
    IgxHierarchicalGridComponent,
    IgxRowIslandComponent,
    IgxCellTemplateDirective,
    IgxPreventDocumentScrollDirective,
    IgxColumnComponent,
    IgxButtonDirective,
    IgxCheckboxComponent,
    IgxToggleDirective
]
})
export class HierarchicalGridDisableSummariesComponent implements OnInit, AfterViewInit {
    @ViewChild("hierarchicalGrid1", { static: true }) public hierarchicalGrid1: IgxHierarchicalGridComponent;
    @ViewChildren(IgxToggleDirective) public toggles: QueryList<IgxToggleDirective>;
    @ViewChildren('toggleButton') public buttons: QueryList<ElementRef>;

    public data: any[];
    public togglesArray: any[];
    public buttonsArray: any[];

    public columns = [
        {
            label: 'Artist',
            field: 'Artist',
            summaries: []
        },
        {
            label: 'Photo',
            field: 'Photo',
            summaries: []
        },
        {
            label: 'Debut',
            field: 'Debut',
            summaries: []
        },
        {
            label: 'Grammy Nominations',
            field: 'GrammyNominations',
            summaries: []
        },
        {
            label: 'Grammy Awards',
            field: 'GrammyAwards',
            summaries: []
        }
    ];

    public grammySummary = GrammySummary;

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
        this.data = SINGERS;
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
            this.hierarchicalGrid1.getColumnByName(column.field).disabledSummaries = [
                ...this.hierarchicalGrid1.getColumnByName(column.field).disabledSummaries,
                column.summaries[index].summaryKey
            ];
        } else {
            this.hierarchicalGrid1.getColumnByName(column.field).disabledSummaries = this.hierarchicalGrid1.getColumnByName(column.field).disabledSummaries.filter(
                (key: string) => key !== column.summaries[index].summaryKey
            );
        }
    }

    public uncheckAllColumns(column: any): void {
        column.summaries.forEach(summary => (summary.checked = false));
        this.hierarchicalGrid1.getColumnByName(column.field).disabledSummaries = [];
    }

    public checkAllColumns(column: any): void {
        column.summaries.forEach(summary => (summary.checked = true));
        this.hierarchicalGrid1.getColumnByName(column.field).disabledSummaries = column.summaries.map(summary => summary.summaryKey);
    }

    public formatter = (a) => a;

    private getSummaries(columnName: string): any[] {
        return this.hierarchicalGrid1
            .getColumnByName(columnName)
            .summaries.operate(
                this.hierarchicalGrid1.data.map((record) => record.ProductID)
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
  <igx-hierarchical-grid
    [igxPreventDocumentScroll]="true"
    #hierarchicalGrid1
    [data]="data"
    [autoGenerate]="false"
    [height]="'700px'"
    [width]="'100%'"
    [rowHeight]="'65px'"
    >
    <igx-column field="Artist" [hasSummary]="true"></igx-column>
    <igx-column
      field="Photo"
      [hasSummary]="true"
      [summaries]="grammySummary"
      >
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner_2">
          <img [src]="cell.value" class="photo" />
        </div>
      </ng-template>
    </igx-column>
    <igx-column
      field="Debut"
      [hasSummary]="true"
      [formatter]="formatter"
    ></igx-column>
    <igx-column
      field="GrammyNominations"
      header="Grammy Nominations"
      dataType="number"
      [hasSummary]="true"
    ></igx-column>
    <igx-column
      field="GrammyAwards"
      header="Grammy Awards"
      dataType="number"
      [hasSummary]="true"
    ></igx-column>

    <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
      <igx-column field="Album" [hasSummary]="true"></igx-column>
      <igx-column
        field="LaunchDate"
        header="Launch Date"
        [dataType]="'date'"
        [hasSummary]="true"
      ></igx-column>
      <igx-column
        field="BillboardReview"
        header="Billboard Review"
        dataType="number"
        [hasSummary]="true"
      ></igx-column>
      <igx-column
        field="USBillboard200"
        header="US Billboard 200"
        dataType="number"
        [hasSummary]="true"
      ></igx-column>
      <igx-row-island
        [height]="null"
        [key]="'Songs'"
        [autoGenerate]="false"
        >
        <igx-column
          field="Number"
          header="No."
          [hasSummary]="true"
        ></igx-column>
        <igx-column field="Title" [hasSummary]="true"></igx-column>
        <igx-column
          field="Released"
          dataType="date"
          [hasSummary]="true"
        ></igx-column>
        <igx-column field="Genre" [hasSummary]="true"></igx-column>
      </igx-row-island>
    </igx-row-island>

    <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
      <igx-column field="Tour" [hasSummary]="true"></igx-column>
      <igx-column
        field="StartedOn"
        header="Started on"
        [hasSummary]="true"
      ></igx-column>
      <igx-column field="Location" [hasSummary]="true"></igx-column>
      <igx-column field="Headliner" [hasSummary]="true"></igx-column>
    </igx-row-island>
  </igx-hierarchical-grid>
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

    .photo {
        vertical-align: middle;
        max-height: 62px;
    }

    .cell__inner_2 {
        margin: 1px
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
import { Component, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxDateSummaryOperand, IgxSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-summary-formatter',
    styleUrls: ['./hierarchical-grid-summary-formatter.component.scss'],
    templateUrl: 'hierarchical-grid-summary-formatter.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridSummaryFormatterComponent {

    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public decadeFormatter = (value: number) => Math.floor(value / 10) * 10 + 's';

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
<div class="wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [autoGenerate]="false"
        [allowFiltering]='true' filterMode="excelStyleFilter" [expandChildren]="true"
        height="600px" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column field="Debut" header="Debut Decade" [sortable]="true" [disableHiding]="true" [formatter]="decadeFormatter"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number" [sortable]="true" [disableHiding]="true"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
            <igx-column field="Album" [sortable]="true" [disableHiding]="true"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [sortable]="true" [disableHiding]="true" [dataType]="'date'" [hasSummary]="true"
                [summaryFormatter]="dateSummaryFormat"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [sortable]="true" [disableHiding]="true" dataType="number"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [sortable]="true" [disableHiding]="true" dataType="number"></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
        </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.wrapper {
    margin: 16px;
}
```
<div class="divider--half"></div>
## Exporting Summaries
There is an [`exportSummaries`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxExcelExporterOptions.html#exportSummaries) option in `IgxExcelExporterOptions` that specifies whether the exported data should include the grid's summaries. Default `exportSummaries` value is **false**.
The [`IgxExcelExporterService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxExcelExporterService.html) will export the default summaries for all column types as their equivalent excel functions so they will continue working properly when the sheet is modified. Try it for yourself in the example below:
```typescript
import { Component, ViewChild, inject } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxNumberSummaryOperand, IgxExcelExporterOptions, IgxExcelExporterService } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

class MySummary {
    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
            {
                key: 'min',
                label: 'Min',
                summaryResult: IgxNumberSummaryOperand.min(data)
            },
            {
                key: 'max',
                label: 'Max',
                summaryResult: IgxNumberSummaryOperand.max(data)
            },
            {
                key: 'avg',
                label: 'Avg',
                summaryResult: IgxNumberSummaryOperand.average(data)
            });
        return result;
    }
}

class MyChildSummary {
    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
            {
                key: 'count',
                label: 'Count',
                summaryResult: IgxNumberSummaryOperand.count(data)
            });
        return result;
    }
}

@Component({
    selector: 'app-hierarchical-grid-summary-export',
    styleUrls: ['./hgrid-summary-export.component.scss'],
    templateUrl: 'hgrid-summary-export.component.html',
    imports: [IgxButtonDirective, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridSummaryExportComponent {
    private excelExportService = inject(IgxExcelExporterService);

    @ViewChild('hGrid', { static: true })
    private hGrid: IgxHierarchicalGridComponent;

    public data;
    public mySummary = MySummary;
    public myChildSummary = MyChildSummary;

    constructor() {
        this.data = SINGERS;
    }

    public exportButtonHandler() {
        this.excelExportService.export(this.hGrid, new IgxExcelExporterOptions('ExportedFile'));
    }
}
```
```html
<div class="hgrid-sample">
    <div class="button-container">
        <button igxButton="contained" (click)="exportButtonHandler()">Export To Excel</button>
        Press the button to export the Grid as a .xlsx file.
    </div>

    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="data" [autoGenerate]="false"
        [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hGrid>
        <igx-column field="Artist" [hasSummary]='true'></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [hasSummary]='true'></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [hasSummary]='true' dataType="number" [summaries]="mySummary"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [hasSummary]='true' [summaries]="mySummary" dataType="number"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
                <igx-column field="Album"></igx-column>
                <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
                <igx-column field="BillboardReview" header="Billboard Review" [hasSummary]='true' dataType="number" [summaries]="mySummary"></igx-column>
                <igx-column field="USBillboard200" header="US Billboard 200" [hasSummary]='true' dataType="number" [summaries]="mySummary"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
                    <igx-column field="Number" header="No."></igx-column>
                    <igx-column field="Title" [hasSummary]='true' [summaries]="myChildSummary"></igx-column>
                    <igx-column field="Released" dataType="date"></igx-column>
                    <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>

    </igx-hierarchical-grid>
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
		color: var(--ig-gray-900);

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
		border-bottom: 1px dashed var(--ig-gray-400);

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
import { Component } from '@angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxNumberSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

class MySummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
        {
            key: 'min',
            label: 'Min',
            summaryResult: IgxNumberSummaryOperand.min(data)
        },
        {
            key: 'max',
            label: 'Max',
            summaryResult: IgxNumberSummaryOperand.max(data)
        },
        {
          key: 'avg',
          label: 'Avg',
          summaryResult: IgxNumberSummaryOperand.average(data)
        });
        return result;
    }
}
class MyChildSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
        {
            key: 'count',
            label: 'Count',
            summaryResult: IgxNumberSummaryOperand.count(data)
        });
        return result;
    }
}

@Component({
    selector: 'app-hierarchical-grid-summary-styling',
    styleUrls: ['./hierarchical-grid-summary-styling.component.scss'],
    templateUrl: 'hierarchical-grid-summary-styling.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridSummaryStylingComponent {
    public localdata;
    public mySummary = MySummary;
    public myChildSummary = MyChildSummary;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
```
```html
<div class="hgrid-sample">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
        <igx-column field="Artist" [hasSummary]='true'></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [hasSummary]='true' [formatter]="formatter"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [hasSummary]='true' dataType="number" [summaries]="mySummary"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [hasSummary]='true' [summaries]="mySummary" dataType="number"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
                <igx-column field="Album"></igx-column>
                <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
                <igx-column field="BillboardReview" header="Billboard Review" [hasSummary]='true' dataType="number" [summaries]="mySummary"></igx-column>
                <igx-column field="USBillboard200" header="US Billboard 200" [hasSummary]='true' dataType="number" [summaries]="mySummary"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
                    <igx-column field="Number" header="No."></igx-column>
                    <igx-column field="Title" [hasSummary]='true' [summaries]="myChildSummary"></igx-column>
                    <igx-column field="Released" dataType="date"></igx-column>
                    <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>

    </igx-hierarchical-grid>
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
    --ig-grid-summaries-patch-background: #{$summaries-background};
    @include tokens($custom-theme);
}
```
## API References
- [IgxHierarchicalGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [IgxHierarchicalGridSummaries Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-summary-theme)
- [IgxSummaryOperand](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsummaryoperand.html)
- [IgxNumberSummaryOperand](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumbersummaryoperand.html)
- [IgxDateSummaryOperand](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatesummaryoperand.html)
- [IgxColumnGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html)
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
## Additional Resources
<div class="divider--half"></div>
- [Hierarchical Grid overview](hierarchical-grid.md)
- [Column Data Types](column-types.md#default-template)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
