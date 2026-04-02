---
_tocName: Conditional Styling
_premium: true
---
---title: Conditional Cell Styling in Angular Data Grid - Ignite UI for Angular_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in Angular Data grid to make cells stand out._keywords: conditional styling, ignite ui for angular, infragistics_license: commercial---# Angular Grid Conditional StylingIf you need to provide any custom styling in the IgxGrid component, you can do it on either row or cell level.## Grid Conditional Row StylingThe IgxGrid component in Ignite UI for Angular provides two ways to **conditional styling of rows** based on custom rules.- By setting [`rowClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowClasses) input on the IgxGrid component;- By setting [`rowStyles`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowStyles) input on the IgxGrid component;Further in this topic wi will cover both of them in more details.### Using rowClassesYou can conditionally style the IgxGrid rows by setting the [`rowClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowClasses) input and define custom rules.```html<!-- sample.component.html --><igx-grid #grid [data]="data" [height]="'600px'" [width]="'100%'" [rowClasses]="rowClasses">
    ...</igx-grid>```The [`rowClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.```typescript// sample.component.tspublic rowClasses = {
  activeRow: this.activeRowCondition};public activeRowCondition = (row: RowType) => this.grid?.navigation.activeNode?.row === row.index;``````scss// sample.component.scss::ng-deep {
 .activeRow {
  border: 2px solid #fc81b8;
  border-left: 3px solid #e41c77;
 }}```> [!NOTE]> Use **`::ng-deep`** or **`ViewEncapsulation.None`** to force the custom styles down through the current component and its children.### Demo```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, RowType } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-row-classes-sample',
    styleUrls: ['./grid-rowClasses.component.scss'],
    templateUrl: 'grid-rowClasses.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class GridRowClassesComponent implements OnInit {
    @ViewChild('grid', { static: true }) public grid: IgxGridComponent;
    public data: any[];

    public constructor() { }

    public activeRowCondition = (row: RowType) => this.grid?.navigation.activeNode?.row === row.index;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    public rowClasses = {
        activeRow: this.activeRowCondition
    };

    public ngOnInit(): void {
        this.data = DATA;
    }

    public handleChange() {
        requestAnimationFrame(() => {
            this.grid.pipeTrigger++;
            this.grid.notifyChanges();
        });
    }
    public handleLeftClick(args) {
        args.event.preventDefault();
        this.grid.navigation.setActiveNode({ row: args.cell.row.index, column: args.cell.column.visibleIndex });

    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid [data]="data" [height]="'600px'" [width]="'100%'" (contextMenu)="handleLeftClick($event)" (activeNodeChange)="handleChange()" [rowClasses]="rowClasses">
        <igx-column [field]="'ProductID'"></igx-column>
        <igx-column [field]="'ProductName'"></igx-column>
        <igx-column [field]="'UnitsInStock'" [dataType]="'number'"></igx-column>
        <igx-column [field]="'UnitPrice'" [dataType]="'number'"></igx-column>
        <igx-column [field]="'Discontinued'" [dataType]="'boolean'">
        </igx-column>
        <igx-column [field]="'OrderDate'" [dataType]="'date'"></igx-column>
    </igx-grid>
</div>
```
```scss
.grid__wrapper {
    display: flex;
    justify-content: space-between;
    margin: 16px;
    flex-flow: column;
    align-items: flex-start;
    position: relative;
  }
::ng-deep {
    .activeRow {
        border: 2px solid #fc81b8;
        border-left: 3px solid #e41c77;
    }
    .toggle-section {
        width: 300px;
        height: 100px;
        background-color: white;
    }

}

  .container {
    display: flex;
    igx-icon {
      margin: 20px;
    }
  }
```<div class="divider--half"></div>### Using rowStylesColumns now expose the `rowStyles` property which allows conditional styling of the data rows. Similar to `rowClasses` it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).> The callback signature for both `rowStyles` and `rowClasses` is:```ts(row: RowType) => boolean```Let's define our styles:```typescript// component.tspublic rowStyles = {
    background: (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '#FF000088' : '#00000000',
    border: (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '2px solid' : '1px solid',
    'border-color': (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '#FF000099' : '#E9E9E9'};``````html<!-- sample.component.html --><igx-grid #grid1 [data]="data | async" [height]="'500px'" width="100%"
        [autoGenerate]="false" [allowFiltering]="true" [rowStyles]="rowStyles">
    ...</igx-grid>```### Demo```typescript
import { Component, ViewChild, inject } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, RowType } from 'igniteui-angular/grids/core';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { Observable } from 'rxjs';
import { FinancialDataService } from '../../services/financial.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';

@Component({
    providers: [FinancialDataService],
    selector: 'app-grid-row-styles-sample',
    styleUrls: ['./grid-rowStyles.component.scss'],
    templateUrl: 'grid-rowStyles.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxBadgeComponent, AsyncPipe]
})

export class GridRowStylesComponent {
    private localService = inject(FinancialDataService);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public data: Observable<any[]>;

    public  rowStyles = {
        background: (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '#FF000088' : '#00000000',
        border: (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '2px solid' : '1px solid',
        'border-color': (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '#FF000099' : '#E9E9E9'
    };

    constructor() {
        this.localService.getData(1000);
        this.data = this.localService.records;
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data | async" [height]="'500px'" width="100%"
    [autoGenerate]="false" [allowFiltering]="true" [rowStyles]="rowStyles">
    <igx-column [field]="'Category'" [width]="'120px'"></igx-column>
    <igx-column [field]="'Type'" [width]="'150px'" [filterable]="false"></igx-column>
    <igx-column [field]="'Open Price'" [width]="'120px'" dataType="number" [formatter]="formatCurrency">
    </igx-column>
    <igx-column [field]="'Price'" [width]="'120px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'Change'" [width]="'120px'" dataType="number" [headerClasses]="'headerAlignSyle'">
      <ng-template igxHeader>
        <span>Change</span>
      </ng-template>

      <ng-template igxCell let-val>
        <div class="currency-badge-container">
          @if (val > 0) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward"
            class="badge-left"></igx-badge>
          }
          @if (val < 0) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward"
            class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val > 0" [class.down]="val < 0">{{ formatNumber(val)
          }}</span>
        </div>
      </ng-template>
    </igx-column>
    <igx-column [field]="'Change(%)'" [width]="'130px'" dataType="number" [formatter]="formatNumber">
      <ng-template igxHeader>
        <span>Change(%)</span>
      </ng-template>
    </igx-column>
    <igx-column [field]="'Change On Year(%)'" [width]="'150px'" dataType="number" [formatter]="formatNumber">
      <ng-template igxCell let-val>
        <div class="currency-badge-container">
          @if (val > 0) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward"
            class="badge-left"></igx-badge>
          }
          @if (val < 0) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward"
            class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val > 0" [class.down]="val < 0">{{ formatNumber(val)
          }}%</span>
        </div>
      </ng-template>
    </igx-column>
    <igx-column [field]="'Buy'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'Sell'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'Spread'" [width]="'130px'" dataType="number" [formatter]="formatNumber"></igx-column>
    <igx-column [field]="'Volume'" [width]="'130px'" dataType="number" [formatter]="formatNumber"></igx-column>
    <igx-column [field]="'High(D)'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'Low(D)'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'High(Y)'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'Low(Y)'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'Start(Y)'" [width]="'130px'" dataType="number" [formatter]="formatCurrency"></igx-column>
  </igx-grid>
  <br />
</div>
```
```scss
.cellAlignSyle {
    text-align: right;
    float:right;
}
.cellAlignSyle > span {
    float:right;
}
.up {
    color: green;
}
.down {
    color: red;
}
.headerAlignSyle {
    text-align: right !important;
}

.grid__wrapper {
  margin: 0 auto;
  padding: 16px;
}

.currency-badge-container {
    width: 80px;
    float: right;
}

.badge-left {
    float: left;
}
```<div class="divider--half"></div>## Grid Conditional Cell Styling## OverviewThe IgxGrid component in Ignite UI for Angular provides two ways to **conditional styling of cells** based on custom rules.- By setting the [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) input [`cellClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellClasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.```ts// component.ts filepublic beatsPerMinuteClasses = {
    downFont: this.downFontCondition,
    upFont: this.upFontCondition};...private downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;}``````scss// component.scss file.upFont {
  color: red;}.downFont {
  color: green;}```### Using cellClassesYou can conditionally style the IgxGrid cells by setting the [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) [`cellClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellClasses) input and define custom rules.```html<!-- sample.component.html --><igx-column field="BeatsPerMinute" dataType="number" [cellClasses]="beatsPerMinuteClasses"></igx-column>```The [`cellClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.```typescript// sample.component.tsprivate upFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 95;}private downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;}public beatsPerMinuteClasses = {
    downFont: this.downFontCondition,
    upFont: this.upFontCondition};``````scss// sample.component.scss::ng-deep {
    .upFont {
        color: green;
    }

    .downFont {
        color: red;
    }}```> [!NOTE]> Use **`::ng-deep`** or **`ViewEncapsulation.None`** to force the custom styles down through the current component and its children.### Demo```typescript
import { Component, OnInit } from '@angular/core';
import { athletesData } from '../../data/athletesData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DecimalPipe, PercentPipe } from '@angular/common';

@Component({
    selector: 'app-grid-conditional-cell-style',
    styleUrls: ['./grid-conditional-cell-style.component.scss'],
    templateUrl: './grid-conditional-cell-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, DecimalPipe, PercentPipe]
})
export class GridConditionalCellStyleComponent implements OnInit {
    public data: any[];

    public ngOnInit() {
        this.data = athletesData;
    }

    private upFontCondition = (rowData: any, columnKey: any): boolean => rowData[columnKey] > 95;

    private downFontCondition = (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 95;

    private top100Condition = (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 100;

    private belowTop100Condition = (rowData: any, columnKey: any): boolean => rowData[columnKey] > 100;

    private speedCondition = (rowData: any, columnKey: any): boolean => rowData[columnKey] < 5;


    // eslint-disable-next-line @typescript-eslint/member-ordering
    public beatsPerMinuteClasses = {
        downFont: this.downFontCondition,
        upFont: this.upFontCondition

    };


    // eslint-disable-next-line @typescript-eslint/member-ordering
    public rankClasses = {
        belowTop100: this.belowTop100Condition,
        top100: this.top100Condition
    };


    // eslint-disable-next-line @typescript-eslint/member-ordering
    public speedClasses = {
        'topSpeed topSpeedFont': this.speedCondition
    };
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" height="500px" width="100%" [autoGenerate]="false">
        <igx-column header="Rank" field="Id" [sortable]="true" [editable]="true" [sortable]="true" [cellClasses]="rankClasses"></igx-column>
        <igx-column field="Name" header="Athlete" [sortable]="true"></igx-column>
        <igx-column field="BeatsPerMinute" header="Beats per minute" dataType="number" [editable]="true" [sortable]="true"
            [cellClasses]="beatsPerMinuteClasses"></igx-column>
        <igx-column field="TopSpeed" header="Top Speed" dataType="number" [editable]="true" [sortable]="true"
            [cellClasses]="speedClasses">
            <ng-template igxCell let-val>
                <div class="cell__inner">
                    {{ val | number: '1.1-5' }}
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="TrackProgress" header="Track Progress" [editable]="true" [sortable]="true">
            <ng-template igxCell let-val>
                <div class="cellContainer">
                    <span class="cellAlignSyle">
                        {{ val / 100 | percent }}
                    </span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="CountryFlag" header="Country">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <span>
                        <img [src]="cell.value" class="flag" />
                    </span>
                </div>
            </ng-template>
        </igx-column>
    </igx-grid>
</div>
```
```scss
:host::ng-deep {
    $primary-color-green: green;
    $primary-color-red: red;
    $primary-color-blue: royalblue;
    $margin-right-images: 25px;
    $images-font-size: 2.5em;
    $images-font-weight: bold;

    .grid__wrapper {
        margin: 0 auto;
        padding: 16px;
    }

    .cellContainer {
        width: 100%; 
        float: right;
    }

    .cellAlignSyle {
        width: 100%; 
        text-align: right;
        float:right;
    }

    .upFont {
        color: $primary-color-red;
    }

    .downFont {
        color: $primary-color-green;
    }

    .topSpeedFont {
        color: $primary-color-blue;
    }

    .contentStyle {
        font-size: $images-font-size;
        font-weight: $images-font-weight;
        margin-right: $margin-right-images;
    }

    .arrow {
        @extend .contentStyle;
        content: "^";
    }

    .star {
        @extend .contentStyle;
        content: "*";
    }

    .top100:before {
        @extend .arrow;
        color: $primary-color-green;
        margin-top: 10px;
    }

    .belowTop100:before {
        @extend .arrow;
        color: $primary-color-red;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        margin-top: -10px;
    }

    .topSpeed:before {
        @extend .star;
        font-weight: normal;
        color: $primary-color-blue;
        margin-top: 10px;
    }
}
```<div class="divider--half"></div>- By using the [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) input [`cellStyles`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellStyles) which accepts an object literal where the keys are style properties and the values are expressions for evaluation.```tspublic styles = {
    'background': 'linear-gradient(180deg, #dd4c4c 0%, firebrick 100%)',
    'text-shadow': '1px 1px 2px rgba(25,25,25,.25)',
    'animation': '0.25s ease-in-out forwards alternate popin'};```> The callback signature for both `cellStyles` and `cellClasses` is now changed to:```ts(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean```### Using cellStylesColumns now expose the `cellStyles` property which allows conditional styling of the column cells. Similar to `cellClasses` it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling with ease (without any conditions).In the [sample above](#demo) we've created:- Two different styles that will be applied based on the column index.- You will also change the `text color` based on even/odd rows.> The callback signature for both `cellStyles` is:```ts(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean```Let's define our styles:```typescript// component.tspublic oddColStyles = {
    background: 'linear-gradient(to right, #b993d6, #8ca6db)',
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'white' : 'gray',
    animation: '0.75s popin'};public evenColStyles = {
    background: 'linear-gradient(to right, #8ca6db, #b993d6)',
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'gray' : 'white',
    animation: '0.75s popin'};```On `ngOnInit` we will add the `cellStyles` configuration for each column of the predefined `columns` collection, which is used to create the IgxGrid columns dynamically.```ts// component.tspublic ngOnInit() {
    this.data = athletesData;
    this.columns = [
        { field: 'Id' },
        { field: 'Position' },
        { field: 'Name' },
        { field: 'AthleteNumber' },
        { field: 'CountryName' }
    ];

    this.applyCSS();}``````tspublic applyCSS() {
    this.columns.forEach((column, index) => {
        column.cellStyles = (index % 2 === 0 ? this.evenColStyles : this.oddColStyles);
    });}public updateCSS(css: string) {
    this.oddColStyles = {...this.oddColStyles, ...JSON.parse(css)};
    this.evenColStyles = {...this.evenColStyles, ...JSON.parse(css)};
    this.applyCSS();}``````html// component.html<igx-grid
    #grid1 [data]="data"
    primaryKey="ID"
    width="80%"
    height="300px">
    <igx-column *ngFor="let c of columns"
        [field]="c.field"
        [header]="c.field"
        [cellStyles]="c.cellStyles">
    </igx-column></igx-grid>```Define a `popin` animation```scss// component.scss@keyframes popin {
    0% {
        opacity: 0.1;
        transform: scale(.75, .75);
        filter: blur(3px) invert(1);
    }

    50% {
        opacity: .5;
        filter: blur(1px);
    }

    100% {
        transform: scale(1, 1);
        opacity: 1;
        filter: none;
    }}```### Demo```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent } from 'igniteui-angular/input-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { athletesData } from '../../data/athletesData';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-grid-conditional-cell-style-2',
    styleUrls: ['./grid-conditional-cell-style-2.component.scss'],
    templateUrl: './grid-conditional-cell-style-2.component.html',
    imports: [IgxInputGroupComponent, IgxInputDirective, IgxHintDirective, IgxButtonDirective, IgxGridComponent, IgxColumnComponent, JsonPipe]
})
export class GridConditionalCellStyle2Component implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data: any[];
    public columns: any[];

    public oddColStyles = {
        background: 'linear-gradient(to right, #b993d6, #8ca6db)',
        color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'white' : 'gray',
        animation: '0.75s popin'
    };

    public evenColStyles = {
        background: 'linear-gradient(to right, #8ca6db, #b993d6)',
        color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'gray' : 'white',
        animation: '0.75s popin'
    };

    public ngOnInit() {
        this.data = athletesData;
        this.columns = [
            { field: 'Id' },
            { field: 'Position' },
            { field: 'Name' },
            { field: 'AthleteNumber' },
            { field: 'CountryName' }
        ];

        this.applyCSS();
    }
    public applyCSS() {
        this.columns.forEach((column, index) => {
            column.cellStyles = (index % 2 === 0 ? this.evenColStyles : this.oddColStyles);
        });
    }

    public updateCSS(css: string) {
        this.oddColStyles = {...this.oddColStyles, ...JSON.parse(css)};
        this.evenColStyles = {...this.evenColStyles, ...JSON.parse(css)};
        this.applyCSS();
    }
}
```
```html
<div class="grid__wrapper">
  <div>
    <!-- <button igxButton="outlined" (click)="applyCSS()">Apply CSS bindings</button> -->
    <igx-input-group type="border">
      <textarea style="font-family: monospace;" #userCSS igxInput cols="15" rows="5">{{ oddColStyles | json }}</textarea>
      <igx-hint>Note: You cannot use the callback functionality here</igx-hint>
    </igx-input-group>
    <button igxButton="outlined" (click)="updateCSS(userCSS.value)">Apply new styles</button>
  </div>
  <igx-grid
    #grid1 [data]="data"
    primaryKey="ID"
    height="300px">
    @for (c of columns; track c) {
      <igx-column
        [field]="c.field"
        [header]="c.field"
        [cellStyles]="c.cellStyles">
      </igx-column>
    }
  </igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
    transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);

    igx-grid {
        margin-top: 25px;
    }
}

@keyframes popin {
    0% {
        opacity: 0.1;
        transform: scale(.75, .75);
        filter: blur(3px) invert(1);
    }

    50% {
        opacity: .5;
        filter: blur(1px);
    }

    100% {
        transform: scale(1, 1);
        opacity: 1;
        filter: none;
    }
}
```<div class="divider--half"></div>## Known issues and limitations- If there are cells bind to the same condition (from different columns) and one cell is updated, the other cells won't be updated based on the new value, if the condition is met.A pipe check should be performed in order to apply the changes to the rest of the cells. The example below shows how to do that with a `spread operator(...)` on [`onCellEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#onCellEdit) event. This will copy the original object with a new instance, and lead pure pipe to be fired.```tspublic backgroundClasses = {
    myBackground: (rowData: any, columnKey: string) => {
        return rowData.Col2 < 10;
    }};...editDone(evt) {
    this.backgroundClasses = {...this.backgroundClasses};}``````html<igx-grid #grid1 [data]="data" height="500px" width="100%" (onCellEdit)="editDone($event)">
  <igx-column field="Col1" dataType="number" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col2" dataType="number" [editable]="true" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col3" header="Col3" dataType="string" [cellClasses]="backgroundClasses"></igx-column></igx-grid>```## API References<div class="divider--half"></div>- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-grid)## Additional Resources<div class="divider--half"></div>- [Grid overview](grid.md)- [Virtualization and Performance](virtualization.md)- [Editing](editing.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Column Hiding](column-hiding.md)- [Selection](selection.md)- [Searching](search.md)- [Toolbar](toolbar.md)- [Multi-column Headers](multi-column-headers.md)- [Size](display-density.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
