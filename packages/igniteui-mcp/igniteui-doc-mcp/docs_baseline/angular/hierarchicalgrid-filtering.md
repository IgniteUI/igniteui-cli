---
title: Angular Hierarchical Grid Filter - Ignite UI for Angular
_description: Start using angular filter to return specific data with Ignite UI for Angular. Check the advanced filtering options, including data-type Excel-style filtering.
_keywords: angular filter, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/filtering
_tocName: Filtering
---
# Angular Hierarchical Grid Filtering
IgniteUI for [Angular Hierarchical Grid component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid) provides three different filtering types - Quick filtering, [Excel style filtering](excel-style-filtering.md) and [Advanced filtering](advanced-filtering.md) which enable you to display only the records that meet specified criteria. The Material UI grid component in Ignite UI provides angular filter capabilities and extensive filtering API through the Data Container to which the Hierarchical Grid is bound.
## Angular Hierarchical Grid Filtering Example
The sample below demonstrates Hierarchical Grid's **Quick filtering** user experience. 
```typescript
import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-filtering',
    styleUrls: ['./hierarchical-grid-filtering.component.scss'],
    templateUrl: 'hierarchical-grid-filtering.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridFilteringSampleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
```
```html
<div class="grid__wrapper">
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true'
    [height]="'580px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    <igx-column field="Artist"></igx-column>
    <igx-column field="Photo" [filterable]="false">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" dataType="number" [formatter]="formatter"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number"></igx-column>

    <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true'>
        <igx-column field="Album"></igx-column>
        <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
        <igx-column field="BillboardReview" header="Billboard Review" dataType="number"></igx-column>
        <igx-column field="USBillboard200" header="US Billboard 200" dataType="number"></igx-column>
    <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
            <igx-column field="Number" header="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released" dataType="date"></igx-column>
            <igx-column field="Genre"></igx-column>
    </igx-row-island>
    </igx-row-island>

    <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false" [allowFiltering]='true'>
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

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}
```
<div class="divider--half"></div>
## Setup
In order to specify if filtering is enabled and which filtering mode should be used, the Hierarchical Grid exposes the following boolean properties - [`allowFiltering`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#allowFiltering), [`allowAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#allowAdvancedFiltering), [`filterMode`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#filterMode) and [`filterable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#filterable).
Property **[allowFiltering](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#allowfiltering)** enables you to specify the following options:
- **false** - the filtering for the corresponding grid will be disabled; /default value/
- **true** - the filtering for the corresponding grid will be enabled;
Property **[allowAdvancedFiltering](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#allowAdvancedFiltering)** enables you to specify the following options:
- **false** - the advanced filtering for the corresponding grid will be disabled; /default value/
- **true** - the advanced filtering for the corresponding grid will be enabled;
Property **[filterMode](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#filterMode)** enables you to specify the following options:
- **quickFilter** - a simplistic filtering UI; /default value/
- **excelStyleFilter** - an Excel-like filtering UI;
Property **[filterable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#filterable)** enables you to specify the following options:
- **true** - the filtering for the corresponding column will be enabled; /default value/
- **false** - the filtering for the corresponding column will be disabled;
```html
<igx-hierarchical-grid #grid1 [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="ProductName"></igx-column>
    <igx-column field="Price" [dataType]="'number'" [filterable]="false">
</igx-hierarchical-grid>
```
To enable the [Advanced filtering](advanced-filtering.md) however, you need to set the [`allowAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#allowAdvancedFiltering) input properties to `true`.
```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
</igx-hierarchical-grid>
```
>[!NOTE]
>You can enable both the `quickFilter`/`excelStyleFilter` and the advanced filtering user interfaces in the Hierarchical Grid. Both filtering user interfaces will work independently of one another. The final filtered result in the Hierarchical Grid is the intersection between the results of the two filters.
## Interaction
In order to open the filter row for a particular column, the 'Filter' chip below its header should be clicked. To add conditions you should choose filter operand using the dropdown on the left of the input and enter value. For `number` and `date` columns 'Equals' is selected by default, for `string` - 'Contains' and for `boolean` - 'All'. Pressing 'Enter' confirms the condition and you are now able to add another one. There is a dropdown, between 'condition' chips, which determines the logical operator between them, 'AND' is selected by default. To remove a condition you can click the 'X' button of the chip, and to edit it you should select the chip and the input will be populated with the chip's data. While filter row is opened you can click on any filterable column's header in order to select it and to be able to add filter conditions for it.
While some filtering conditions have been applied to a column, and the filter row is closed, you can either remove the conditions by clicking the chip's close button, or you can open the filter row by selecting any of the chips. When there is not enough space to show all the conditions, a filter icon is shown with a badge that indicates how many more conditions there are. It can also be clicked in order to open the filter row.
## Usage
There's a default filtering strategy provided out of the box, as well as all the standard filtering conditions, which the developer can replace with their own implementation. In addition, we've provided a way to easily plug in your own custom filtering conditions. The Hierarchical Grid currently provides not only a simplistic filtering UI, but also more complex filtering options. Depending on the set [`dataType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#dataType) of the column, the correct set of [**filtering operations**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringoperation.html) is loaded inside the filter UI dropdown. Additionally, you can set the [`ignoreCase`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringexpression.html) and the initial [`condition`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringexpression.html#condition) properties.
Filtering feature is enabled for the Hierarchical Grid component by setting the [`allowFiltering`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#allowFiltering) input to `true`. The default [`filterMode`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#filterMode) is `quickFilter` and it **cannot** be changed run time. To disable this feature for a certain column – set the [`filterable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#filterable) input to `false`.
```html
<igx-hierarchical-grid [data]="localdata" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Artist" [filterable]="true"></igx-column>
    <igx-column field="Photo" [filterable]="false">
</igx-hierarchical-grid>
```
> [!NOTE]
> If values of type `string` are used by a column of dataType `Date`, the Hierarchical Grid won't parse them to `Date` objects and using filtering conditions won't be possible. If you want to use `string` objects, additional logic should be implemented on the application level, in order to parse the values to `Date` objects.
You can filter any column or a combination of columns through the Hierarchical Grid API. The Hierarchical Grid exposes several methods for this task - [`filter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#filter), [`filterGlobal`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#filterglobal) and [`clearFilter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#clearFilter).
- [`filter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#filter) - filter a single column or a combination of columns.
There are five filtering operand classes exposed:
- [`IgxFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxfilteringoperand.html): this is a base filtering operand, which can be inherited when defining custom filtering conditions.
- [`IgxBooleanFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbooleanfilteringoperand.html) defines all default filtering conditions for `boolean` type.
- [`IgxNumberFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumberfilteringoperand.html) defines all default filtering conditions for `numeric` type.
- [`IgxStringFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstringfilteringoperand.html) defines all default filtering conditions for `string` type.
- [`IgxDateFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatefilteringoperand.html) defines all default filtering conditions for `Date` type.
```typescript
// Single column filtering
// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.hierarchicalGrid.filter('ProductName', 'myproduct', IgxStringFilteringOperand.instance().condition('contains'), true);
```
The only required parameters are the column field key and the filtering term. Both the condition and the case sensitivity will be inferred from the column properties if not provided. In the case of multiple filtering, the method accepts an array of filtering expressions.
> [!NOTE]
> The filtering operation **DOES NOT** change the underlying data source of the Hierarchical Grid.
```typescript
// Multi column filtering
const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'ProductName');
const productExpression = {
    condition: IgxStringFilteringOperand.instance().condition('contains'),
    fieldName: 'ProductName',
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
this.hierarchicalGrid.filteringExpressionsTree = gridFilteringExpressionsTree;
```
- [`filterGlobal`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#filterGlobal) - clears all existing filters and applies the new filtering condition to all Hierarchical Grid's columns.
```typescript
// Filter all cells for a value which contains `myproduct`
this.hierarchicalGrid.filteringLogic = FilteringLogic.Or;
this.hierarchicalGrid.filterGlobal('myproduct', IgxStringFilteringOperand.instance().condition('contains'), false);
```
- [`clearFilter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#clearFilter) - removes any applied filtering from the target column. If called with no arguments it will clear the filtering of all columns.
```typescript
// Remove the filtering state from the ProductName column
this.hierarchicalGrid.clearFilter('ProductName');
// Clears the filtering state from all columns
this.hierarchicalGrid.clearFilter();
```
## Initial filtered state
To set the initial filtering state of the Hierarchical Grid, set the [`IgxHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) [`filteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#filteringExpressionsTree) property to an array of [`IFilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringexpressionstree.html) for each column to be filtered.
```typescript
constructor(private cdr: ChangeDetectorRef) { }
public ngAfterViewInit() {
    const gridFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
    const productFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And, 'ProductName');
    const productExpression = {
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        fieldName: 'ProductName',
        ignoreCase: true,
        searchVal: 'c'
    };
    productFilteringExpressionsTree.filteringOperands.push(productExpression);
    gridFilteringExpressionsTree.filteringOperands.push(productFilteringExpressionsTree);

    this.hierarchicalGrid.filteringExpressionsTree = gridFilteringExpressionsTree;
    this.cdr.detectChanges();
}
```
### Filtering logic
The [`filteringLogic`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#filteringlogic) property of the Hierarchical Grid controls how filtering multiple columns will resolve in the Hierarchical Grid. You can change it at any time through the Hierarchical Grid API, or through the Hierarchical Grid input property.
```typescript
import { FilteringLogic } from 'igniteui-angular/core';
// import { FilteringLogic } from '@infragistics/igniteui-angular'; for licensed package
...
this.hierarchicalGrid.filteringLogic = FilteringLogic.OR;
```
The default value of [`AND`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/filteringlogic.html#and) returns only the rows that match all the currently applied filtering expressions. Following the example above, a row will be returned when both the `ProductName` cell value contains `myproduct` and the `Price` cell value is greater than 55.
When set to [`OR`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/filteringlogic.html#or), a row will be returned when either the `ProductName` cell value contains `myproduct` or the `Price` cell value is greater than 55.
<div class="divider--half"></div>
@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
## Remote Filtering
The Hierarchical Grid supports remote filtering, which is demonstrated in the [`Hierarchical Grid Remote Data Operations`](remote-data-operations.md) topic.
<div class="divider--half"></div>
}
## Custom Filtering Operands
You can customize the filtering menu by adding, removing or modifying the filtering operands. By default, the filtering menu contains certain operands based on the column’s data type ([`IgxBooleanFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbooleanfilteringoperand.html), [`IgxDateFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatefilteringoperand.html), [`IgxNumberFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxnumberfilteringoperand.html) and [`IgxStringFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstringfilteringoperand.html)). You can extend these classes or their base class [`IgxFilteringOperand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxfilteringoperand.html) to change the filtering menu items’ behavior.
In the sample below, inspect the "Product Name" and "Discontinued" columns filters menus. For the "Discontinued" column filter, we have limited the number of operands to All, True and False. For the "Product Name" column filter – we have modified the Contains and Does Not Contain operands logic to perform case sensitive search and added also Empty and Not Empty operands.
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
<!-- hierarchical-grid-custom-filtering.component.html -->
<igx-hierarchical-grid [data]="localdata" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column field="Artist" [filterable]='true' [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="HasGrammyAward" [filterable]='true' [dataType]="'boolean'" [filters]="booleanFilteringOperand">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="https://www.infragistics.com/angular-demos/assets/images/grid/active.png" title="True" alt="True" />
            <img *ngIf="!val" src="https://www.infragistics.com/angular-demos/assets/images/grid/expired.png" title="False" alt="False" />
        </ng-template>
    </igx-column>
</igx-hierarchical-grid>
```
```typescript
import { Component } from '@angular/core';
import { IFilteringOperation, IgxBooleanFilteringOperand, IgxStringFilteringOperand } from 'igniteui-angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-hierarchical-grid-custom-filtering',
    styleUrls: ['./hierarchical-grid-custom-filtering.component.scss'],
    templateUrl: 'hierarchical-grid-custom-filtering.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridCustomFilteringSampleComponent {
    public localdata;
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
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
  <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hierarchicalGrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true'
    [height]="'580px'" [width]="'100%'" #hierarchicalGrid>
    <igx-column field="Artist" [dataType]="'string'" [filters]="caseSensitiveFilteringOperand"></igx-column>
    <igx-column field="HasGrammyAward" header="Has Grammy Award" [dataType]="'boolean'" [filters]="booleanFilteringOperand">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="True" alt="True" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="False" alt="False" />
        }
      </ng-template>
    </igx-column>
    <igx-column field="Debut" dataType="number" [formatter]="formatter"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number"></igx-column>

    <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true'>
      <igx-column field="Album"></igx-column>
      <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
      <igx-column field="BillboardReview" header="Billboard Review" dataType="number"></igx-column>
      <igx-column field="USBillboard200" header="US Billboard 200" dataType="number"></igx-column>
      <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" [allowFiltering]='true'>
        <igx-column field="Number" header="No."></igx-column>
        <igx-column field="Title"></igx-column>
        <igx-column field="Released" dataType="date"></igx-column>
        <igx-column field="Genre"></igx-column>
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

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}
```
## Re-templating filter cell
You can add a template marked with `igxFilterCellTemplate` in order to retemplate the filter cell. In the sample below, an input is added for the string columns and IgxDatePicker for the date column. When the user types or selects a value, a filter with contains operator for string columns and equals operator for date columns, is applied using grid's public API.
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnType, GridColumnDataType, IgxDateFilteringOperand, IgxNumberFilteringOperand, IgxPickerClearComponent, IgxPickerToggleComponent, IgxStringFilteringOperand, OverlaySettings } from 'igniteui-angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxFilterCellTemplateDirective } from 'igniteui-angular/grids/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-hierarchical-grid-filtering-template',
    styleUrls: ['./hierarchical-grid-filtering-template.component.scss'],
    templateUrl: 'hierarchical-grid-filtering-template.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxFilterCellTemplateDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxInputDirective, IgxSuffixDirective, IgxDatePickerComponent, IgxPickerToggleComponent, IgxPickerClearComponent]
})

export class HGridFilteringTemplateSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;
    public overlaySettings: OverlaySettings;
    public displayDateFormat = 'MMM d, y';

    private _filterValues = new Map<ColumnType, any>();

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {
        this.overlaySettings = {
            outlet: this.hierarchicalGrid
        };
    }

    public formatter = (a) => a;

    public getFilterValue(column: ColumnType): any {
        return this._filterValues.has(column) ? this._filterValues.get(column) : null;
    }

    public onKeyDown(event: KeyboardEvent) {
        event.stopImmediatePropagation();
    }

    public onInput(input: any, column: any) {
        this._filterValues.set(column, input.value);

        if (input.value === '') {
            column.grid.clearFilter(column.field);
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
        column.grid.filter(column.field,
            this.transformValue(input.value, column), operand, column.filteringIgnoreCase);
    }

    public clearInput(column: any) {
        this._filterValues.delete(column);
        column.grid.clearFilter(column.field);
    }

    public onClick(inputGroup) {
        if (!inputGroup.isFocused) {
            inputGroup.input.focus();
        }
    }

    public onDateSelected(event, column: any) {
        if (!event) {
            this.clearInput(column);
            return;
        }

        this._filterValues.set(column, event);
        column.grid.filter(column.field, event, IgxDateFilteringOperand.instance().condition('equals'),
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
  <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true'
    [height]="'580px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    <igx-column field="Artist" [filterCellTemplate]="defaultFilterTemplate"></igx-column>
    <igx-column field="Photo" [filterable]="false">
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner_2">
          <img [src]="cell.value" class="photo" />
        </div>
      </ng-template>
    </igx-column>
    <igx-column field="Debut" [filterCellTemplate]="defaultFilterTemplate" dataType="number" [formatter]="formatter"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number" [filterCellTemplate]="defaultFilterTemplate"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number" [filterCellTemplate]="defaultFilterTemplate"></igx-column>

    <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true'>
      <igx-column field="Album" [filterCellTemplate]="defaultFilterTemplate"></igx-column>
      <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'" [filterCellTemplate]="dateFilterTemplate"></igx-column>
      <igx-column field="BillboardReview" header="Billboard Review" dataType="number" [filterCellTemplate]="defaultFilterTemplate"></igx-column>
      <igx-column field="USBillboard200" header="US Billboard 200" dataType="number" [filterCellTemplate]="defaultFilterTemplate"></igx-column>
      <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
        <igx-column field="Number" header="No."></igx-column>
        <igx-column field="Title"></igx-column>
        <igx-column field="Released" dataType="date"></igx-column>
        <igx-column field="Genre"></igx-column>
      </igx-row-island>
    </igx-row-island>

    <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false" [allowFiltering]='true'>
      <igx-column field="Tour"></igx-column>
      <igx-column field="StartedOn" header="Started on"></igx-column>
      <igx-column field="Location"></igx-column>
      <igx-column field="Headliner"></igx-column>
    </igx-row-island>
  </igx-hierarchical-grid>
  <ng-template #defaultFilterTemplate igxFilterCellTemplate let-column="column">
    <div class="filter-cell">
      <igx-input-group #inputGr type="box">
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
          (keydown)="onKeyDown($event)" />
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
.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}

.filter-cell {
    flex-grow: 1;
}

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

igx-input-group,
igx-date-picker {
    --ig-size: var(--ig-size-small);
}
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
import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-filtering-style',
    styleUrls: ['./hierarchical-grid-filtering-style.component.scss'],
    templateUrl: './hierarchical-grid-filtering-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})
export class HierarchicalGridFilteringStyleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }
}
```
```html
<div class="wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true'
        [height]="'600px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
        <igx-column field="Artist"></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" dataType="number"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true'>
            <igx-column field="Album"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" dataType="number"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" dataType="number"></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" >
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
        </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false" [allowFiltering]='true'>
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
  $foreground: $bg,
);

:host ::ng-deep {
    @include tokens($custom-grid);
    .igx-grid__filtering-row {
      @include tokens($dark-button);
      @include tokens($dark-input-group);
    }
}
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
## Known Limitations
> [!NOTE]
> Some browsers such as Firefox fail to parse regional specific decimal separators by considering them grouping separators, thus resulting in them being invalid. When inputting such values for a numeric column filter value, only the valid part of the number will be applied to the filtering expression. For further information, refer to the Firefox [issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1199665).
## API References
<div class="divider--half"></div>
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
- [IgxHierarchicalGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
## Additional Resources
<div class="divider--half"></div>
- [Hierarchical Grid overview](hierarchical-grid.md)
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
