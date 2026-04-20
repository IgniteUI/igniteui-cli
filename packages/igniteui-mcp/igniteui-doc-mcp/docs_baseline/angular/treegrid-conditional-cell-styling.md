---
title: Conditional Cell Styling in Angular Tree Grid - Ignite UI for Angular
_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in Angular Data grid to make cells stand out.
_keywords: conditional styling, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/conditional-cell-styling
_tocName: Conditional Styling
_premium: true
---
# Angular Tree Grid Conditional Styling
If you need to provide any custom styling in the IgxTreeGrid component, you can do it on either row or cell level.
## Tree Grid Conditional Row Styling
The IgxTreeGrid component in Ignite UI for Angular provides two ways to **conditional styling of rows** based on custom rules.
- By setting [`rowClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowClasses) input on the IgxTreeGrid component;
- By setting [`rowStyles`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowStyles) input on the IgxTreeGrid component;
Further in this topic wi will cover both of them in more details.
### Using rowClasses
You can conditionally style the IgxTreeGrid rows by setting the [`rowClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowClasses) input and define custom rules.
```html
<!-- sample.component.html -->
<igx-tree-grid #treeGrid [data]="data" [height]="'600px'" [width]="'100%'" [rowClasses]="rowClasses">
    ...
</igx-tree-grid>
```
The [`rowClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.
```typescript
// sample.component.ts
public rowClasses = {
  activeRow: this.activeRowCondition
};
public activeRowCondition = (row: RowType) => this.grid?.navigation.activeNode?.row === row.index;
```
```scss
// sample.component.scss
::ng-deep {
 .activeRow {
  border: 2px solid #fc81b8;
  border-left: 3px solid #e41c77;
 }
}
```
> [!NOTE]
> Use **`::ng-deep`** or **`ViewEncapsulation.None`** to force the custom styles down through the current component and its children.
### Demo
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent, RowType } from 'igniteui-angular/grids/core';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-row-classes-sample',
    styleUrls: ['tree-grid-rowClasses.component.scss'],
    templateUrl: 'tree-grid-rowClasses.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridRowClassesComponent implements OnInit {

    @ViewChild('treeGrid', { static: true }) public treeGrid1: IgxTreeGridComponent;
    public data: IEmployee[];
    public columns: any[];

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            { field: 'Name', label: 'Full Name', resizable: true, filterable: true, editable: true, dataType: 'string' },
            { field: 'Age', label: 'Age', resizable: false, filterable: false, editable: true, dataType: 'number' },
            { field: 'Title', label: 'Title', resizable: true, filterable: true, editable: true, dataType: 'string' },
            { field: 'HireDate', label: 'Hire Date', resizable: true, filterable: true, editable: true, dataType: 'date' }
        ];
    }

    public activeRowCondition = (row: RowType) => this.treeGrid1?.navigation.activeNode?.row === row.index;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    public rowClasses = {
        activeRow: this.activeRowCondition
    };


    public handleChange() {
        requestAnimationFrame(() => {
            this.treeGrid1.pipeTrigger++;
            this.treeGrid1.notifyChanges();
        });
    }
    public handleLeftClick(args) {
        args.event.preventDefault();
        this.treeGrid1.navigation.setActiveNode({ row: args.cell.row.index, column: args.cell.column.visibleIndex });
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [rowClasses]="rowClasses"
    width ="100%" height ="550px" [rowEditable] = "true" [moving]="true" (contextMenu)="handleLeftClick($event)" (activeNodeChange)="handleChange()">
    @for (c of columns; track c) {
      <igx-column
        [editable] ="c.editable"
        [field]="c.field"
        [dataType]="c.dataType"
        [header]="c.label"
        [resizable]="c.resizable"
        [sortable]="c.sortable"
        [filterable]="c.filterable"
        >
      </igx-column>
    }
  </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 16px;
}
::ng-deep {
    .activeRow {
        border: 1px solid #fc81b8;
        border-left: 3px solid #e41c77;
    }
    .toggle-section {
        width: 300px;
        height: 100px;
        background-color: white;
    }

}
```
<div class="divider--half"></div>
### Using rowStyles
Columns now expose the `rowStyles` property which allows conditional styling of the data rows. Similar to `rowClasses` it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).
> The callback signature for both `rowStyles` and `rowClasses` is:
```ts
(row: RowType) => boolean
```
Let's define our styles:
```typescript
// component.ts
public background = (row: RowType) => row.data['Title'] === 'CEO' ? '#6c757d' :
    row.data['Title'].includes('President') ? '#adb5bd' :
    row.data['Title'].includes('Director') ?  '#ced4da' :
    row.data['Title'].includes('Manager') ? '#dee2e6' :
    row.data['Title'].includes('Lead') ? '#e9ecef' :
    row.data['Title'].includes('Senior') ? '#f8f9fa' : null;
public rowStyles = {
    background: this.background,
    'border-left': (row: RowType) => row.data['Title'] === 'CEO' || row.data['Title'].includes('President') ?
        '2px solid' : null,
    'border-color': (row: RowType) => row.data['Title'] === 'CEO' ? '#495057' : null,
    color: (row: RowType) => row.data['Title'] === 'CEO' ? '#fff' : null
};
```
```html
<!-- sample.component.html -->
<igx-tree-grid #treeGrid [data]="data" [moving]="true" primaryKey="ID" foreignKey="ParentID"
        width="100%" height="550px" [rowStyles]="rowStyles">
    ...
</igx-tree-grid>
```
### Demo
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent, RowType } from 'igniteui-angular/grids/core';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-row-styles-sample',
    styleUrls: ['tree-grid-rowStyle.component.scss'],
    templateUrl: 'tree-grid-rowStyle.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridRowStylesComponent implements OnInit {

    @ViewChild('treeGrid', { static: true }) public treeGrid1: IgxTreeGridComponent;
    public data: IEmployee[];
    public columns: any[];

    public background = (row: RowType) => row.data['Title'] === 'CEO' ? '#6c757d' :
        row.data['Title'].includes('President') ? '#adb5bd' :
        row.data['Title'].includes('Director') ?  '#ced4da' :
        row.data['Title'].includes('Manager') ? '#dee2e6' :
        row.data['Title'].includes('Lead') ? '#e9ecef' :
        row.data['Title'].includes('Senior') ? '#f8f9fa' : null;

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public  rowStyles = {
        background: this.background,
        'border-left': (row: RowType) => row.data['Title'] === 'CEO' || row.data['Title'].includes('President') ?
            '2px solid' : null,
        'border-color': (row: RowType) => row.data['Title'] === 'CEO' ? '#495057' : null,
        color: (row: RowType) => row.data['Title'] === 'CEO' ? '#fff' : null
    };

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            { field: 'Name', label: 'Full Name', resizable: true, filterable: true, editable: true, dataType: 'string' },
            { field: 'Age', label: 'Age', resizable: false, filterable: false, editable: true, dataType: 'number' },
            { field: 'Title', label: 'Title', resizable: true,  filterable: true, editable: true, dataType: 'string' },
            { field: 'HireDate', label: 'Hire Date', resizable: true, filterable: true, editable: true, dataType: 'date' }
        ];
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" [moving]="true" primaryKey="ID" foreignKey="ParentID"
    width ="100%"
    height ="550px"
    [rowStyles] = "rowStyles"
    >
    @for (c of columns; track c) {
      <igx-column
        [editable] ="c.editable"
        [field]="c.field"
        [dataType]="c.dataType"
        [header]="c.label"
        [resizable]="c.resizable"
        [sortable]="c.sortable"
        [filterable]="c.filterable"
        >
      </igx-column>
    }
  </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 16px;
}
```
<div class="divider--half"></div>
## Tree Grid Conditional Cell Styling
## Overview
The IgxTreeGrid component in Ignite UI for Angular provides two ways to **conditional styling of cells** based on custom rules.
- By setting the [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) input [`cellClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellClasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.
```ts
// component.ts file
public beatsPerMinuteClasses = {
    downFont: this.downFontCondition,
    upFont: this.upFontCondition
};
...
private downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;
}
```
```scss
// component.scss file
.upFont {
  color: red;
}
.downFont {
  color: green;
}
```
### Using cellClasses
You can conditionally style the IgxTreeGrid cells by setting the [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) [`cellClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellClasses) input and define custom rules.
```html
<!-- sample.component.html -->
<igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [cellClasses]="priceClasses"></igx-column>
```
The [`cellClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.
```typescript
// sample.component.ts
private upPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 5;
}
private downPriceCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 5;
}
public priceClasses = {
    downPrice: this.downPriceCondition,
    upPrice: this.upPriceCondition
};
```
```scss
// sample.component.scss
::ng-deep {
    .upPrice {
        color: red;
    }

    .downPrice {
        color: green;
    }
}
```
> [!NOTE]
> Use **`::ng-deep`** or **`ViewEncapsulation.None`** to force the custom styles down through the current component and its children.
### Demo
```typescript
import { Component, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-conditional-cell-style-sample',
    styleUrls: ['./tree-grid-conditional-cell-style-sample.component.scss'],
    templateUrl: './tree-grid-conditional-cell-style-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridConditionalCellStyleComponent implements OnInit {
    public data: any[];
    public allergenItems = ['Frozen Shrimps', 'Wild Salmon Fillets', 'Fresh Cheese', 'Skimmed Milk 1L', 'Butter'];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    public ngOnInit() {
        this.data = ORDERS_DATA;
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    private upPriceCondition = (rowData: any, columnKey: any): boolean => rowData[columnKey] > 5;

    private downPriceCondition = (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 5;

    private allergenCondition = (rowData: any, columnKey: any): boolean => this.allergenItems.indexOf(rowData[columnKey]) >= 0;


    // eslint-disable-next-line @typescript-eslint/member-ordering
    public priceClasses = {
        downPrice: this.downPriceCondition,
        upPrice: this.upPriceCondition
    };


    // eslint-disable-next-line @typescript-eslint/member-ordering
    public allergenClasses = {
        'allergens allergensFont': this.allergenCondition
    };
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #grid1 [data]="data" height="530px" width="100%" [autoGenerate]="false"
    primaryKey="ID" foreignKey="ParentID">
    <igx-column field="ID" header="Order ID">
    </igx-column>
    <igx-column field="Name" header="Order Product" [cellClasses] = "allergenClasses">
    </igx-column>
    <igx-column field="Category" header="Category">
    </igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [cellClasses] = "priceClasses">
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [sortable]="true" [disableHiding]="true" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Delivered" alt="Delivered" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Undelivered" alt="Undelivered" />
        }
      </ng-template>
    </igx-column>
  </igx-tree-grid>
  <span id="message">May contain allergens.</span>
</div>
```
```scss
.grid__wrapper {
    margin: 16px;
}

:host::ng-deep {
    $primary-color-green: green;
    $primary-color-red: red;
    $primary-color-blue: royalblue;
    $margin-right-images: 5px;
    $images-font-size: 1.5em;
    $images-font-weight: bold;

    .upPrice {
        color: $primary-color-red;
    }

    .downPrice {
        color: $primary-color-green;
    }

    .allergensFont {
        color: $primary-color-blue;
    }

    .contentStyle {
        font-size: $images-font-size;
        font-weight: $images-font-weight;
        margin-right: $margin-right-images;
    }

    .star {
        @extend .contentStyle;
        content: "*";
    }

    .allergens:after {
        @extend .star;
        font-weight: normal;
        color: $primary-color-blue;
        vertical-align: top;
        margin-left: 2px;
    }

    #message:before {
        @extend .star;
        font-weight: lighter;
        color: $primary-color-blue;
        vertical-align: top;
        margin-right: 2px;
    }

    #message {
        color: $primary-color-blue;
        font-style: italic;
        font-size: 0.75rem;
    }
}
```
<div class="divider--half"></div>
- By using the [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) input [`cellStyles`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellStyles) which accepts an object literal where the keys are style properties and the values are expressions for evaluation.
```ts
public styles = {
    'background': 'linear-gradient(180deg, #dd4c4c 0%, firebrick 100%)',
    'text-shadow': '1px 1px 2px rgba(25,25,25,.25)',
    'animation': '0.25s ease-in-out forwards alternate popin'
};
```
> The callback signature for both `cellStyles` and `cellClasses` is now changed to:
```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```
### Using cellStyles
Columns now expose the `cellStyles` property which allows conditional styling of the column cells. Similar to `cellClasses` it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling with ease (without any conditions).
In the [sample above](#demo) we've created:
- Two different styles that will be applied based on the column index.
- You will also change the `text color` based on even/odd rows.
> The callback signature for both `cellStyles` is:
```ts
(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean
```
Let's define our styles:
```typescript
// component.ts
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
```
On `ngOnInit` we will add the `cellStyles` configuration for each column of the predefined `columns` collection, which is used to create the IgxTreeGrid columns dynamically.
```ts
// component.ts
public ngOnInit() {
    this.data = ORDERS_DATA;
     this.columns = [
        { field: 'ID' },
        { field: 'Name' },
        { field: 'UnitPrice' },
        { field: 'OrderDate' }
    ];

    this.applyCSS();
}
```
```ts
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
```
```html
//component.html
<igx-tree-grid
    #grid1 [data]="data"
    primaryKey="ID" foreignKey="ParentID"
    height="350px">
    <igx-column *ngFor="let c of columns"
        [field]="c.field"
        [header]="c.header"
        [cellStyles]="c.cellStyles">
    </igx-column>
</igx-tree-grid>
```
Define a `popin` animation
```scss
// component.scss
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
```
### Demo
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent } from 'igniteui-angular/input-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-grid-conditional-cell-style-2',
    styleUrls: ['./tree-grid-conditional-cell-style-2.component.scss'],
    templateUrl: './tree-grid-conditional-cell-style-2.component.html',
    imports: [IgxInputGroupComponent, IgxInputDirective, IgxHintDirective, IgxButtonDirective, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, JsonPipe]
})
export class TreeGridConditionalCellStyle2Component implements OnInit {
    @ViewChild('grid1', { read: IgxTreeGridComponent, static: true })
    public grid1: IgxTreeGridComponent;
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
        this.data = ORDERS_DATA;
        this.columns = [
            { field: 'ID' },
            { field: 'Name', header: 'Order Product' },
            { field: 'UnitPrice', header: 'Unit Price' },
            { field: 'OrderDate', header: 'Order Date' }
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

    public formatCurrency(value: number) {
        return `$${value.toFixed(2)}`;
    }

    public formatDate(value) {
            return new Intl.DateTimeFormat('en-US').format(value);
    }

    public init(column: IgxColumnComponent) {
        console.log(column);
        switch (column.field) {
            case 'UnitPrice':
                column.formatter = this.formatCurrency;
                break;
            case 'OrderDate':
                column.formatter = this.formatDate;
                break;
            default:
                return;
        }
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
  <igx-tree-grid [igxPreventDocumentScroll]="true"
    #grid1 [data]="data"
    primaryKey="ID" foreignKey="ParentID"
    height="350px"
    (columnInit)="init($event)">
    @for (c of columns; track c) {
      <igx-column
        [field]="c.field"
        [header]="c.header"
        [cellStyles]="c.cellStyles">
      </igx-column>
    }
  </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
    transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);

    igx-input-group {
        width: 100%;
    }

    igx-tree-grid {
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
```
<div class="divider--half"></div>
## Known issues and limitations
- If there are cells bind to the same condition (from different columns) and one cell is updated, the other cells won't be updated based on the new value, if the condition is met.
A pipe check should be performed in order to apply the changes to the rest of the cells. The example below shows how to do that with a `spread operator(...)` on [`onCellEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#onCellEdit) event. This will copy the original object with a new instance, and lead pure pipe to be fired.
```ts
public backgroundClasses = {
    myBackground: (rowData: any, columnKey: string) => {
        return rowData.Col2 < 10;
    }
};
...
editDone(evt) {
    this.backgroundClasses = {...this.backgroundClasses};
}
```
```html
<igx-tree-grid #grid1 [data]="data" height="500px" width="100%" (onCellEdit)="editDone($event)">
  <igx-column field="Col1" dataType="number" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col2" dataType="number" [editable]="true" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col3" header="Col3" dataType="string" [cellClasses]="backgroundClasses"></igx-column>
</igx-tree-grid>
```
## API References
<div class="divider--half"></div>
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-grid)
## Additional Resources
<div class="divider--half"></div>
- [Tree Grid overview](tree-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Editing](editing.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Column Hiding](column-hiding.md)
- [Selection](selection.md)
- [Searching](search.md)
- [Toolbar](toolbar.md)
- [Multi-column Headers](multi-column-headers.md)
- [Size](display-density.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
