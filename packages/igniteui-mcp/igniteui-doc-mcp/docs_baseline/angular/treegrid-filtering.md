---
title: Angular Tree Grid Filter - Ignite UI for Angular
_description: Start using angular filter to return specific data with Ignite UI for Angular. Check the advanced filtering options, including data-type Excel-style filtering.
_keywords: angular filter, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/filtering
_tocName: Filtering
---
# Angular Tree Grid Filtering
IgniteUI for [Angular Tree Grid component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid) provides three different filtering types - Quick filtering, [Excel style filtering](excel-style-filtering.md) and [Advanced filtering](advanced-filtering.md) which enable you to display only the records that meet specified criteria. The Material UI grid component in Ignite UI provides angular filter capabilities and extensive filtering API through the Data Container to which the Tree Grid is bound.
## Angular Tree Grid Filtering Example
The sample below demonstrates Tree Grid's **Quick filtering** user experience. API [filter()](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filter) method is used to apply _contains_ condition on the _ProductName column_ through external _igxInputGroup component_.  
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxStringFilteringOperand } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxInputDirective, IgxInputGroupComponent } from 'igniteui-angular/input-group';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-filtering-sample',
    styleUrls: ['./tree-grid-filtering-sample.component.scss'],
    templateUrl: 'tree-grid-filtering-sample.component.html',
    imports: [IgxInputGroupComponent, IgxInputDirective, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridFilteringSampleComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    constructor() {
    }
    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public filter(element: EventTarget) {
        const value = (element as HTMLInputElement).value;
        if (value) {
            this.treegrid1.filter('Name', value, IgxStringFilteringOperand.instance().condition('contains'));
        } else {
            this.treegrid1.clearFilter('Name');
        }
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }
}
```
```html
<div class="grid__wrapper">
  <div class="sample__header">
    <igx-input-group>
      <input class="gridSample__filter" igxInput type="text" placeholder="Filter by order product" (input)="filter($event.target)">
    </igx-input-group><br>
  </div>
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID">
    <igx-column field="ID" header="Order ID">
    </igx-column>
    <igx-column field="Name" header="Order Product">
    </igx-column>
    <igx-column field="Category" header="Category">
    </igx-column>
    <igx-column field="Units" header="Units" dataType="number">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'">
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
</div>
```
```scss
.grid__wrapper {
    margin: 0 16px;
}

.gridSample__filter {
    width: 200px;
}

.cell__inner,
.cell__inner_2 {
  display: flex;
  align-items: center;
  height: 100%;
}

.cell__inner {
  position: relative;
  justify-content: space-between;
}
```
<div class="divider--half"></div>
## Setup
In order to specify if filtering is enabled and which filtering mode should be used, the Tree Grid exposes the following boolean properties - [`allowFiltering`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#allowFiltering), [`allowAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#allowAdvancedFiltering), [`filterMode`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filterMode) and [`filterable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#filterable).
Property **[allowFiltering](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#allowfiltering)** enables you to specify the following options:
- **false** - the filtering for the corresponding grid will be disabled; /default value/
- **true** - the filtering for the corresponding grid will be enabled;
Property **[allowAdvancedFiltering](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#allowAdvancedFiltering)** enables you to specify the following options:
- **false** - the advanced filtering for the corresponding grid will be disabled; /default value/
- **true** - the advanced filtering for the corresponding grid will be enabled;
Property **[filterMode](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filterMode)** enables you to specify the following options:
- **quickFilter** - a simplistic filtering UI; /default value/
- **excelStyleFilter** - an Excel-like filtering UI;
Property **[filterable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#filterable)** enables you to specify the following options:
- **true** - the filtering for the corresponding column will be enabled; /default value/
- **false** - the filtering for the corresponding column will be disabled;
```html
<igx-tree-grid [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Name" header="Order Product"></igx-column>
    <igx-column field="Units" header="Units" dataType="number" [filterable]="false"></igx-column>
</igx-tree-grid>
```
To enable the [Advanced filtering](advanced-filtering.md) however, you need to set the [`allowAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#allowAdvancedFiltering) input properties to `true`.
```html
<igx-tree-grid [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
</igx-tree-grid>
```
>[!NOTE]
>You can enable both the `quickFilter`/`excelStyleFilter` and the advanced filtering user interfaces in the Tree Grid. Both filtering user interfaces will work independently of one another. The final filtered result in the Tree Grid is the intersection between the results of the two filters.
## Interaction
In order to open the filter row for a particular column, the 'Filter' chip below its header should be clicked. To add conditions you should choose filter operand using the dropdown on the left of the input and enter value. For `number` and `date` columns 'Equals' is selected by default, for `string` - 'Contains' and for `boolean` - 'All'. Pressing 'Enter' confirms the condition and you are now able to add another one. There is a dropdown, between 'condition' chips, which determines the logical operator between them, 'AND' is selected by default. To remove a condition you can click the 'X' button of the chip, and to edit it you should select the chip and the input will be populated with the chip's data. While filter row is opened you can click on any filterable column's header in order to select it and to be able to add filter conditions for it.
While some filtering conditions have been applied to a column, and the filter row is closed, you can either remove the conditions by clicking the chip's close button, or you can open the filter row by selecting any of the chips. When there is not enough space to show all the conditions, a filter icon is shown with a badge that indicates how many more conditions there are. It can also be clicked in order to open the filter row.
## Usage
There's a default filtering strategy provided out of the box, as well as all the standard filtering conditions, which the developer can replace with their own implementation. In addition, we've provided a way to easily plug in your own custom filtering conditions. The Tree Grid currently provides not only a simplistic filtering UI, but also more complex filtering options. Depending on the set [`dataType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#dataType) of the column, the correct set of [**filtering operations**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringoperation.html) is loaded inside the filter UI dropdown. Additionally, you can set the [`ignoreCase`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringexpression.html) and the initial [`condition`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringexpression.html#condition) properties.
Filtering feature is enabled for the Tree Grid component by setting the [`allowFiltering`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#allowFiltering) input to `true`. The default [`filterMode`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filterMode) is `quickFilter` and it **cannot** be changed run time. To disable this feature for a certain column – set the [`filterable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#filterable) input to `false`.
```html
<igx-tree-grid [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Name" header="Order Product"></igx-column>
    <igx-column field="Units" header="Units" dataType="number"></igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'" [filterable]="false">
</igx-tree-grid>
```
> [!NOTE]
> If values of type `string` are used by a column of dataType `Date`, the Tree Grid won't parse them to `Date` objects and using filtering conditions won't be possible. If you want to use `string` objects, additional logic should be implemented on the application level, in order to parse the values to `Date` objects.
You can filter any column or a combination of columns through the Tree Grid API. The Tree Grid exposes several methods for this task - [`filter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filter), [`filterGlobal`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filterglobal) and [`clearFilter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#clearFilter).
- [`filter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filter) - filter a single column or a combination of columns.
There are five filtering operand classes exposed:
- [`IgxFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxfilteringoperand.html): this is a base filtering operand, which can be inherited when defining custom filtering conditions.
- [`IgxBooleanFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbooleanfilteringoperand.html) defines all default filtering conditions for `boolean` type.
- [`IgxNumberFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumberfilteringoperand.html) defines all default filtering conditions for `numeric` type.
- [`IgxStringFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstringfilteringoperand.html) defines all default filtering conditions for `string` type.
- [`IgxDateFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatefilteringoperand.html) defines all default filtering conditions for `Date` type.
```typescript
// Single column filtering
// Filter the `Order Product` column for values which `contains` the `myproduct` substring, ignoring case
this.treeGrid.filter('Order Product', 'myproduct', IgxStringFilteringOperand.instance().condition('contains'), true);
```
The only required parameters are the column field key and the filtering term. Both the condition and the case sensitivity will be inferred from the column properties if not provided. In the case of multiple filtering, the method accepts an array of filtering expressions.
> [!NOTE]
> The filtering operation **DOES NOT** change the underlying data source of the Tree Grid.
```typescript
// Multi column filtering
const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'ProductName');
const productExpression = {
    condition: IgxStringFilteringOperand.instance().condition('contains'),
    fieldName: 'Order Product',
    ignoreCase: true,
    searchVal: 'ch'
};
productFilteringExpressionsTree.filteringOperands.push(productExpression);
gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);
const priceFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'Price');
const priceExpression = {
    condition: IgxNumberFilteringOperand.instance().condition('greaterThan'),
    fieldName: 'UnitPrice',
    ignoreCase: true,
    searchVal: 20
};
priceFilteringExpressionsTree.filteringOperands.push(priceExpression);
gridFilteringExpressionsTree.filteringOperands.push(priceFilteringExpressionsTree);
this.treeGrid.filteringExpressionsTree = gridFilteringExpressionsTree;
```
- [`filterGlobal`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filterGlobal) - clears all existing filters and applies the new filtering condition to all Tree Grid's columns.
```typescript
// Filter all cells for a value which contains `myproduct`
this.treeGrid.filteringLogic = FilteringLogic.Or;
this.treeGrid.filterGlobal('myproduct', IgxStringFilteringOperand.instance().condition('contains'), false);
```
- [`clearFilter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#clearFilter) - removes any applied filtering from the target column. If called with no arguments it will clear the filtering of all columns.
```typescript
// Remove the filtering state from the ProductName column
this.treeGrid.clearFilter('Order Product');
// Clears the filtering state from all columns
this.treeGrid.clearFilter();
```
## Initial filtered state
To set the initial filtering state of the Tree Grid, set the [`IgxTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) [`filteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filteringExpressionsTree) property to an array of [`IFilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringexpressionstree.html) for each column to be filtered.
```typescript
constructor(private cdr: ChangeDetectorRef) { }
public ngAfterViewInit() {
    const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
    const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'Order Product');
    const productExpression = {
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        fieldName: 'Order Product',
        ignoreCase: true,
        searchVal: 'c'
    };
    productFilteringExpressionsTree.filteringOperands.push(productExpression);
    gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

    this.treeGrid.filteringExpressionsTree = gridFilteringExpressionsTree;
    this.cdr.detectChanges();
}
```
### Filtering logic
The [`filteringLogic`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filteringlogic) property of the Tree Grid controls how filtering multiple columns will resolve in the Tree Grid. You can change it at any time through the Tree Grid API, or through the Tree Grid input property.
```typescript
import { FilteringLogic } from 'igniteui-angular/core';
// import { FilteringLogic } from '@infragistics/igniteui-angular'; for licensed package
...
this.treeGrid.filteringLogic = FilteringLogic.OR;
```
The default value of [`AND`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/filteringlogic.html#and) returns only the rows that match all the currently applied filtering expressions. Following the example above, a row will be returned when both the `ProductName` cell value contains `myproduct` and the `Price` cell value is greater than 55.
When set to [`OR`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/filteringlogic.html#or), a row will be returned when either the `ProductName` cell value contains `myproduct` or the `Price` cell value is greater than 55.
<div class="divider--half"></div>
@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
## Remote Filtering
The Tree Grid supports remote filtering, which is demonstrated in the [`Tree Grid Remote Data Operations`](remote-data-operations.md) topic.
<div class="divider--half"></div>
}
## Custom Filtering Operands
You can customize the filtering menu by adding, removing or modifying the filtering operands. By default, the filtering menu contains certain operands based on the column’s data type ([`IgxBooleanFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbooleanfilteringoperand.html), [`IgxDateFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatefilteringoperand.html), [`IgxNumberFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumberfilteringoperand.html) and [`IgxStringFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstringfilteringoperand.html)). You can extend these classes or their base class [`IgxFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxfilteringoperand.html) to change the filtering menu items’ behavior.
In the sample below, inspect the "Order Product" and "Delivered" columns filters menus. For the "Delivered" column filter, we have limited the number of operands to All, True and False. For the "Order Product" column filter – we have modified the Contains and Does Not Contain operands logic to perform case sensitive search and added also Empty and Not Empty operands.
To do that, extend the [`IgxStringFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstringfilteringoperand.html) and [`IgxBooleanFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbooleanfilteringoperand.html), modify the operations and their logic, and set the column [`filters`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#filters) input to the new operands.
```typescript
// grid-custom-filtering.component.ts
export class GridCustomFilteringComponent {
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();
}
export class CaseSensitiveFilteringOperand extends IgxStringFilteringOperand {
    private constructor() {
        super();
        const customOperations = [
            {
                iconName: 'contains',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                },
                name: 'Contains (case sensitive)'
            },
            {
                iconName: 'does_not_contain',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                },
                name: 'Does Not Contain (case sensitive)'
            }
        ];

        const emptyOperators = [
            // 'Empty'
            this.operations[6],
            // 'Not Empty'
            this.operations[7]
        ];

        this.operations = customOperations.concat(emptyOperators);
    }
}
export class BooleanFilteringOperand extends IgxBooleanFilteringOperand {
    private constructor() {
        super();
        this.operations = [
            // 'All'
            this.operations[0],
            // 'TRUE'
            this.operations[1],
            // 'FALSE'
            this.operations[2]
        ];
    }
}
```
```html
<!-- tree-grid-filtering-custom-sample.component.html -->
<igx-tree-grid [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Name" header="Order Product" [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="assets/images/grid/active.png" title="Delivered" alt="Delivered" />
            <img *ngIf="!val" src="assets/images/grid/expired.png" title="Undelivered" alt="Undelivered" />
        </ng-template>
    </igx-column>
</igx-tree-grid>
```
```typescript
import { Component, OnInit } from '@angular/core';
import { IFilteringOperation, IgxBooleanFilteringOperand, IgxStringFilteringOperand } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-filtering-custom-sample',
    styleUrls: ['./tree-grid-filtering-custom-sample.component.scss'],
    templateUrl: './tree-grid-filtering-custom-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})
export class TreeGridFilteringCustomSampleComponent implements OnInit {
    public data: any[];
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();

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
}

export class CaseSensitiveFilteringOperand extends IgxStringFilteringOperand {
    private constructor() {
        super();
        const customOperations: IFilteringOperation[] = [
            {
                iconName: 'filter_contains',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                },
                name: 'Contains (case sensitive)'
            },
            {
                iconName: 'filter_does_not_contain',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                },
                name: 'Does Not Contain (case sensitive)'
            }
        ];

        const emptyOperators = [
            // 'Empty'
            this.operations[6],
            // 'Not Empty'
            this.operations[7]
        ];

        this.operations = customOperations.concat(emptyOperators);
    }
}

export class BooleanFilteringOperand extends IgxBooleanFilteringOperand {
    private constructor() {
        super();
        this.operations = [
            // 'All'
            this.operations[0],
            // 'TRUE'
            this.operations[1],
            // 'FALSE'
            this.operations[2]
        ];
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #grid1 [data]="data" [autoGenerate]="false" height="550px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID">
    <igx-column field="ID" header="Order ID">
    </igx-column>
    <igx-column field="Name" header="Order Product" [filters]="caseSensitiveFilteringOperand">
    </igx-column>
    <igx-column field="Category" header="Category">
    </igx-column>
    <igx-column field="Units" header="Units" dataType="number">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions" >
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'" [filters]="booleanFilteringOperand">
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
</div>
```
```scss
.grid__wrapper {
    margin: 0 16px;
    padding-top: 16px;
}
```
## Re-templating filter cell
You can add a template marked with `igxFilterCellTemplate` in order to retemplate the filter cell. In the sample below, an input is added for the string columns and IgxDatePicker for the date column. When the user types or selects a value, a filter with contains operator for string columns and equals operator for date columns, is applied using grid's public API.
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnType, GridColumnDataType, IgxDateFilteringOperand, IgxNumberFilteringOperand, IgxPickerClearComponent, IgxPickerToggleComponent, IgxStringFilteringOperand } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxFilterCellTemplateDirective } from 'igniteui-angular/grids/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-tree-grid-filtering-template-sample',
    styleUrls: ['./tree-grid-filtering-template-sample.component.scss'],
    templateUrl: 'tree-grid-filtering-template-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxFilterCellTemplateDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxInputDirective, IgxSuffixDirective, IgxDatePickerComponent, IgxPickerToggleComponent, IgxPickerClearComponent, CurrencyPipe]
})

export class TreeGridFilteringTemplateSampleComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];
    public displayDateFormat = 'M/d/y';

    private _filterValues = new Map<ColumnType, any>();

    constructor() {
    }
    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public getFilterValue(column: ColumnType): any {
        return this._filterValues.has(column) ? this._filterValues.get(column) : null;
    }

    public onInput(input: any, column: ColumnType) {
        this._filterValues.set(column, input.value);

        if (input.value === '') {
            this.treegrid1.clearFilter(column.field);
            return;
        }

        let operand = null;
        switch (column.dataType) {
            case GridColumnDataType.Number:
                operand = IgxNumberFilteringOperand.instance().condition('equals');
                break;
            default:
                operand = IgxStringFilteringOperand.instance().condition('contains');
        }
        this.treegrid1.filter(column.field,
            this.transformValue(input.value, column), operand, column.filteringIgnoreCase);
    }

    public clearInput(column: ColumnType) {
        this._filterValues.delete(column);
        this.treegrid1.clearFilter(column.field);
    }

    public onKeyDown(event: KeyboardEvent) {
        event.stopImmediatePropagation();
    }

    public onClick(inputGroup) {
        if (!inputGroup.isFocused) {
            inputGroup.input.focus();
        }
    }

    public onDateSelected(event, column: ColumnType) {
        if (!event) {
            this.clearInput(column);
            return;
        }

        this._filterValues.set(column, event);
        this.treegrid1.filter(column.field, event, IgxDateFilteringOperand.instance().condition('equals'),
            column.filteringIgnoreCase);
    }

    private transformValue(value: any, column: ColumnType): any {
        if (column.dataType === GridColumnDataType.Number) {
            value = parseFloat(value);
        }

        return value;
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treegrid1 [data]="data" [autoGenerate]="false" height="460px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID">
    <igx-column field="ID" header="Order ID" [filterCellTemplate]="defaultFilterTemplate">
    </igx-column>
    <igx-column field="Name" header="Order Product" [filterCellTemplate]="defaultFilterTemplate">
    </igx-column>
    <igx-column field="Category" header="Category" [filterCellTemplate]="defaultFilterTemplate">
    </igx-column>
    <igx-column field="Units" header="Units" dataType="number" [filterCellTemplate]="defaultFilterTemplate">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" dataType="number" [filterCellTemplate]="defaultFilterTemplate">
      <ng-template igxCell let-cell="cell" let-val let-row>
        {{+val | currency}}
      </ng-template>
    </igx-column>
    <igx-column field="Price" header="Price" dataType="number" [filterCellTemplate]="defaultFilterTemplate">
      <ng-template igxCell let-cell="cell" let-val let-row>
        {{+val | currency}}
      </ng-template>
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate" [filterCellTemplate]="dateFilterTemplate">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'">
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
  <ng-template #defaultFilterTemplate igxFilterCellTemplate let-column="column">
    <div class="filter-cell">
      <igx-input-group #inputGr class="filter-input" type="box">
        <igx-prefix>
          <igx-icon>search</igx-icon>
        </igx-prefix>
        <input
          #input
          igxInput
          tabindex="0"
          placeholder="Filter..."
          autocomplete="off"
          [value]="getFilterValue(column)"
          (input)="onInput(input, column)"
          (click)="onClick(inputGr)"
          (keydown)="onKeyDown($event)"/>
          @if (input.value || input.value === '0') {
            <igx-suffix (click)="clearInput(column)" tabindex="0">
              <igx-icon>clear</igx-icon>
            </igx-suffix>
          }
        </igx-input-group>
      </div>
    </ng-template>
    <ng-template #dateFilterTemplate igxFilterCellTemplate let-column="column">
      <div class="filter-cell">
        <igx-date-picker #picker [value]="getFilterValue(column)" (valueChange)="onDateSelected($event, column)" mode="dialog"
          placeholder="Filter..." [displayFormat]="displayDateFormat" type="box">
          <igx-picker-toggle igxPrefix>
            <igx-icon>search</igx-icon>
          </igx-picker-toggle>
          @if (picker.value) {
            <igx-picker-clear igxSuffix>
              <igx-icon>clear</igx-icon>
            </igx-picker-clear>
          }
        </igx-date-picker>
      </div>
    </ng-template>
  </div>
```
```scss
.grid__wrapper {
    margin: 0 16px;
    padding-top: 16px;

    igx-input-group,
    igx-date-picker {
        --ig-size: var(--ig-size-small);
    }
}

.gridSample__filter {
    width: 200px;
}

.cell__inner,
.cell__inner_2 {
  display: flex;
  align-items: center;
  height: 100%;
}

.cell__inner {
  position: relative;
  justify-content: space-between;
}

.filter-cell {
    flex-grow: 1;
}
```
## Matching Records Only Filtering Strategy
By default, after a filtering is applied, the Tree Grid component displays the records matching the criterion that have been set and their parents in a grayed-out fashion to provide additional context. However, in some cases, you may want to display only the records matching particular filtering condition without any trace for their parents. This can be achieved by using the `TreeGridMatchingRecordsOnlyFilteringStrategy`:
```html
<igx-grid [data]="data" [allowFiltering]="true" [filterStrategy]="matchingRecordsOnlyStrategy">
</igx-grid>
```
```typescript
import { TreeGridMatchingRecordsOnlyFilteringStrategy } from "igniteui-angular/core";
...
public matchingRecordsOnlyStrategy = new TreeGridMatchingRecordsOnlyFilteringStrategy();
```
## Styling
To get started with styling the filtering row, we need to import the `index` file, where all the theme functions and component mixins live:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
Following the simplest approach, we create a new theme that extends the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) and accepts the `$filtering-row-text-color`, `$filtering-row-background`, `$filtering-header-text-color` and the `$filtering-header-background` parameters.
```scss
$custom-grid: grid-theme(
  $filtering-row-text-color: #292826,
  $filtering-row-background: #ffcd0f,
  $filtering-header-text-color: #292826,
  $filtering-header-background: #ffcd0f
);
```
As seen, the `grid-theme` only controls colors for the filtering row and the respective column header that is being filtered. We obviously have a lot more components inside the filtering row, such as an input group, chips, buttons and others. In order to style them, we need to create a separate theme for each one, so let's create a new [`input-group-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#input-group-theme) and a new [`flat-button-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#flat-button-theme):
```scss
$dark-input-group: input-group-theme(
  $box-background: #ffcd0f,
  $idle-text-color: #292826,
  $focused-text-color: #292826,
  $filled-text-color: #292826
);
$dark-button: flat-button-theme(
  $background: #ffcd0f,
  $foreground: #292826,
  $hover-background: #292826,
  $hover-foreground: #ffcd0f
);
```
>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.
In this example we only changed some of the parameters for the input group and the button, but the [`input-group-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-input-group-theme) and the [`flat-button-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-flat-button-theme) provide way more parameters to control their respective styling.
The last step is to **include** the component mixins, each with its respective theme. We will also set the color property for the input's placeholder.
```scss
:host {
@include tokens($custom-grid);

    .igx-grid__filtering-row {
        @include tokens($dark-button);
        @include tokens($dark-input-group);  

        .igx-input-group__input::placeholder {
            color: #ffcd0f;
        }
    }
}
```
>[!NOTE]
>We include the created **flat-button-theme** and **input-group-theme** within `.igx-grid__filtering-row`, so that only the filtering row buttons and its input group would be styled. Otherwise other buttons and input groups in the grid would be affected too.
>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:
```scss
:host {
  ::ng-deep {
    @include tokens($custom-grid);

    .igx-grid__filtering-row {
      @include tokens($dark-button);
      @include tokens($dark-input-group)

      .igx-input-group__input::placeholder {
        color: #ffcd0f;
      }
    }
  }
}
```
### Demo
```typescript
import { Component, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-filtering-style',
    styleUrls: ['./tree-grid-filtering-style.component.scss'],
    templateUrl: './tree-grid-filtering-style.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})
export class TreeGridFilteringStyleComponent implements OnInit {
    public data: any[];
    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;


    constructor() {
    }
    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treegrid1 [data]="data" [autoGenerate]="false" height="460px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID">
    <igx-column field="ID" header="Order ID">
    </igx-column>
    <igx-column field="Name" header="Order Product">
    </igx-column>
    <igx-column field="Category" header="Category">
    </igx-column>
    <igx-column field="Units" header="Units" dataType="number">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Delivered" alt="Delivered" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Undeliveredd" alt="Undeliveredd" />
        }
      </ng-template>
    </igx-column>
  </igx-tree-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$yellow: #ffcd0f;
$bg: #292826;
$gray: #404040;

$custom-grid: grid-theme(
  $filtering-row-text-color: $bg,
  $filtering-row-background: $yellow,
  $filtering-header-text-color: $bg,
  $filtering-header-background: $yellow
);

$dark-input-group: input-group-theme(
  $box-background: $yellow,
  $idle-text-color: $bg,
  $focused-text-color: $bg,
  $filled-text-color: $bg
);

$dark-button: flat-button-theme(
  $background: $yellow,
  $foreground: $bg,
  $hover-background: $bg,
  $hover-foreground: $yellow
);


:host {
  @include tokens($custom-grid);

  ::ng-deep {
    .igx-grid__filtering-row {
      @include tokens($dark-button);
      @include tokens($dark-input-group);
    }
  }
}
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
## Known Limitations
> [!NOTE]
> Some browsers such as Firefox fail to parse regional specific decimal separators by considering them grouping separators, thus resulting in them being invalid. When inputting such values for a numeric column filter value, only the valid part of the number will be applied to the filtering expression. For further information, refer to the Firefox [issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1199665).
### Breaking Changes in 6.1.0
- IgxTreeGrid `filteringExpressions` property is removed. Use [`filteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filteringexpressionstree) instead.
- `filter_multiple` method is removed. Use [`filter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filter) method and [`filteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filteringExpressionsTree) property instead.
- The [`filter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filter) method has new signature. It now accepts the following parameters:
  - `name` - the name of the column to be filtered.
  - `value` - the value to be used for filtering.
  - `conditionOrExpressionTree` (optional) - this parameter accepts object of type [`IFilteringOperation`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringoperation.html) or [`IFilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringexpressionstree.html). If only simple filtering is needed, a filtering operation could be passed as an argument. In case of advanced filtering, an expressions tree containing complex filtering logic could be passed as an argument.
  - `ignoreCase` (optional) - whether the filtering is case sensitive or not.
- [`filteringDone`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filteringDone) event now have only one parameter of type [`IFilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringexpressionstree.html) which contains the filtering state of the filtered column.
- filtering operands: [`IFilteringExpression`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringexpression.html) condition property is no longer a direct reference to a filtering condition method, instead it's a reference to an [`IFilteringOperation`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringoperation.html).
- [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) now exposes a [`filters`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#filters) property, which takes an [`IgxFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxfilteringoperand.html) class reference.
- Custom filters can be provided to the Tree Grid columns by populating the [`operations`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxfilteringoperand.html#operations) property of the [`IgxFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxfilteringoperand.html) with operations of [`IFilteringOperation`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringoperation.html) type.
## API References
<div class="divider--half"></div>
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
- [IgxTreeGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
## Additional Resources
<div class="divider--half"></div>
- [Tree Grid overview](tree-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
