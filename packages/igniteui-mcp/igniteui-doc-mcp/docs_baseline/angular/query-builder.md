---
title: Angular Query Builder Component - Ignite UI for Angular
_description: Angular Query Builder allows users to build complex custom queries in angular apps with a great UI experience. Try it Now.
_keywords: Angular Query Builder component, Angular Query Builder control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
_license: commercial
_tocName: Query Builder
---

# Angular Query Builder Component Overview

Angular Query Builder is part of our [Angular Components](https://www.infragistics.com/products/ignite-ui-angular) and it provides a rich UI that allows developers to build complex data filtering queries for a specified data set. With this component they can build a tree of expressions and set AND/OR conditions between them with editors and condition lists determined by each field's data type. The expression tree can then be easily transformed to a query in the format the backend supports.

<p class="highlight">

The [`IgxQueryBuilderComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html) component provides a way to build complex queries through the UI. By specifying AND/OR operators, conditions and values the user creates an expression tree which describes the query.

</p>

## Angular Query Builder Example

We’ve created this Angular Query Builder example to show you the default functionalities of the Angular Query Builder component. Click the plus button to add conditions, “and” group as well as “or” group. Grouping or ungrouping expressions as well as re-ordering could be achieved via the Drag&Drop functionality.

```typescript
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { FilteringExpressionsTree, FilteringLogic, IExpressionTree } from 'igniteui-angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxQueryBuilderComponent } from 'igniteui-angular/query-builder';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Component({
    selector: 'query-builder-request-sample',
    styleUrls: ['./query-builder-request-sample.component.scss'],
    templateUrl: 'query-builder-request-sample.component.html',
    imports: [IgxQueryBuilderComponent, IgxGridComponent, IgxColumnComponent]
})
export class QueryBuilderRequestSampleComponent implements OnInit, AfterViewInit {
    private http = inject(HttpClient);
    private cdr = inject(ChangeDetectorRef);

    @ViewChild('grid', { static: true })
    public grid: IgxGridComponent;

    public entities: any[];
    public customersFields: any[];
    public ordersFields: any[];
    public expressionTree: IExpressionTree;
    public data: any[] = [];

    public ngOnInit(): void {
        this.customersFields = [
            { field: "customerId", dataType: "string" },
            { field: "companyName", dataType: "string" },
            { field: "contactName", dataType: "string" },
            { field: "contactTitle", dataType: "string" }
        ];

        this.ordersFields = [
            { field: "orderId", dataType: "number" },
            { field: "customerId", dataType: "string" },
            { field: "employeeId", dataType: "number" },
            { field: "shipperId", dataType: "number" },
            { field: "orderDate", dataType: "date" },
            { field: "requiredDate", dataType: "date" },
            { field: "shipVia", dataType: "string" },
            { field: "freight", dataType: "number" },
            { field: "shipName", dataType: "string" },
            { field: "completed", dataType: "boolean" }
        ];

        this.entities = [
            {
                name: "Customers",
                fields: this.customersFields
            },
            {
                name: "Orders",
                fields: this.ordersFields
            }
        ];
        
        const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['orderId', 'customerId', 'employeeId', 'shipperId', 'orderDate', 'requiredDate', 'shipVia', 'freight', 'shipName', 'completed']);
        this.expressionTree = tree;
    }
    
    public ngAfterViewInit(): void {
        this.onChange();
    }


    public onChange() {
        this.grid.isLoading = true;
        this.http.post(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, this.expressionTree).subscribe(data =>{
            this.data = Object.values(data)[0];
            this.grid.isLoading = false;
            this.cdr.detectChanges();
            this.calculateColsInView();
        });
    }

    private calculateColsInView() {
        if (this.expressionTree.returnFields.length === 0 || this.expressionTree.returnFields[0] === '*') {
            const selectedEntity = this.entities.find(entity => entity.name === this.expressionTree.entity);
            const selectedEntityFields = selectedEntity.fields.map(field => field.field);
            this.grid.columns.forEach(column => column.hidden = !selectedEntityFields.includes(column.field));
        } else {
            this.grid.columns.forEach(column => column.hidden = !this.expressionTree.returnFields.includes(column.field));
        }
    }
}
```
```html
<div class="wrapper">
    <igx-query-builder #queryBuilder
        [entities]="entities"
        [(expressionTree)]="expressionTree"
        (expressionTreeChange)="onChange()">
    </igx-query-builder>

    <div class="output-area">
        <igx-grid #grid [data]="data" [autoGenerate]="true" height="420px"></igx-grid>
    </div>
</div>
```
```scss
.wrapper{
    margin: 10px;
    height: 100%;
    overflow-y: auto;
}

.output-area{
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    margin: 0 20px 20px 20px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Query Builder

To get started with the Ignite UI for Angular Query Builder component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxQueryBuilderModule` in the **app.module.ts** file.

```typescript
// app.module.ts

import { IgxQueryBuilderModule } from 'igniteui-angular/query-builder';
// import { IgxQueryBuilderModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxQueryBuilderModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxQueryBuilderComponent` as a standalone dependency, or use the [`IGX_QUERY_BUILDER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/query-builder/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_QUERY_BUILDER_DIRECTIVES } from 'igniteui-angular/query-builder';
import { FilteringExpressionsTree, FieldType } from 'igniteui-angular/core';
// import { IGX_QUERY_BUILDER_DIRECTIVES, FilteringExpressionsTree, FieldType } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-query-builder #queryBuilder
        [entities]="entities"
        [(expressionTree)]="expressionTree"
        (expressionTreeChange)="onExpressionTreeChange()">
    </igx-query-builder>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_QUERY_BUILDER_DIRECTIVES]
    /* or imports: [IgxQueryBuilderComponent] */
})
export class HomeComponent {
    public expressionTree: FilteringExpressionsTree;
    public entities: Array<any>;

    public onExpressionTreeChange() {
        ...
    }
}
```

Now that you have the Ignite UI for Angular Query Builder module or directives imported, you can start using the `igx-query-builder` component.

## Using the Angular Query Builder

If no expression tree is initially set, you start by choosing an entity and which of its fields the query should return. After that, conditions or sub-groups can be added.

In order to add a condition you select a field, an operand based on the field data type and a value if the operand is not unary. The operands `In` and `Not In` will allow you to create an inner query with conditions for a different entity instead of simply providing a value. Once the condition is committed, a chip with the condition information appears. By clicking or hovering the chip, you have the options to modify it or add another condition or group right after it.

Clicking on the ([`AND`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/filteringlogic.html#and) or [`OR`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/filteringlogic.html#or)) button placed above each group, will open a menu with options to change the group type or ungroup the conditions inside.

Since every condition is related to a specific field from a particular entity changing the entity will lead to resetting all preset conditions and groups. When selecting a new entity a confirmation dialog will be shown, unless the [`showEntityChangeDialog`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html#showEntityChangeDialog) input property is set to false.

You can start using the component by setting the [`entities`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html#entities) property to an array describing the entity name and an array of its fields, where each field is defined by its name and data type. Once a field is selected it will automatically assign the corresponding operands based on the data type.
The Query Builder has the [`expressionTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html#expressionTree) input property. You could use it to set an initial state of the control and access the user-specified filtering logic.

```typescript
ngAfterViewInit(): void {
    const innerTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Companies', ['ID']);
    innerTree.filteringOperands.push({
        fieldName: 'Employees',
        condition: IgxNumberFilteringOperand.instance().condition('greaterThan'),
        conditionName: 'greaterThan',
        searchVal: 100
    });
    innerTree.filteringOperands.push({
        fieldName: 'Contact',
        condition: IgxBooleanFilteringOperand.instance().condition('true'),
        conditionName: 'true'
    });

    const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['*']);
    tree.filteringOperands.push({
        fieldName: 'CompanyID',
        condition: IgxStringFilteringOperand.instance().condition('inQuery'),
        conditionName: 'inQuery',
        searchTree: innerTree
    });
    tree.filteringOperands.push({
        fieldName: 'OrderDate',
        condition: IgxDateFilteringOperand.instance().condition('before'),
        conditionName: 'before',
        searchVal: new Date('2024-01-01T00:00:00.000Z')
    });
    tree.filteringOperands.push({
        fieldName: 'ShippedDate',
        condition: IgxDateFilteringOperand.instance().condition('null'),
        conditionName: 'null'
    });

    this.queryBuilder.expressionTree = tree;
}
```

The `expressionTree` is a two-way bindable property which means a corresponding `expressionTreeChange` output is implemented that emits when the end-user changes the UI by creating, editing or removing conditions. It can also be subscribed separately to receive notifications and react to such changes.

```html
<igx-query-builder #queryBuilder
    [entities]="entities"
    [(expressionTree)]="expressionTree"
    (expressionTreeChange)="onExpressionTreeChange()">
</igx-query-builder>
```

## Expressions Dragging

Condition chips can be easily repositioned using mouse [_Drag & Drop_](drag-drop.md) or [_Keyboard reordering_](#keyboard-interaction) approaches. With those, users can adjust their query logic dynamically.

- Dragging a chip does not modify its condition/contents, only its position.
- Chip can also be dragged along groups and subgroups. For example, grouping/ungrouping expressions is achieved via the Expressions Dragging functionality.
In order to group already existing conditions, first you need to add a new group through the 'add' group button. Then via dragging, the required expressions can be moved to that group. In order to ungroup, you could drag all conditions outside their current group and once the last condition is moved out, the group will be deleted.

>[!NOTE]
>Chips from one query tree cannot be dragged in another, e.g. from parent to inner and vice versa.

<img class="responsive-img" alt="Animated Example of Query Builder Drag and Drop using the Mouse" src="../images/general/query-builder-drag-and-drop.gif" />

## Keyboard interaction

**Key Combinations**

- <kbd>Tab</kbd> / <kbd>Shift + Tab</kbd> - navigates to the next/previous chip, drag indicator, remove button, 'add' expression button.
- <kbd>Arrow Down</kbd>/<kbd>Arrow Up</kbd> - when chip's drag indicator is focused, the chip can be moved up/down.
- <kbd>Space</kbd> / <kbd>Enter</kbd> - focused expression enters edit mode. If chip is been moved, this confirms it's new position.
- <kbd>Esc</kbd> - chip's reordering is canceled and it returns to it's original position.

>[!NOTE]
>Keyboard reordering provides the same functionality as mouse Drag & Drop. Once a chip is moved, user has to confirm the new position or cancel the reorder.

<img class="responsive-img" alt="Animated Example of Keyboard Drag and Drop Using the Ignite UI for Angular Query Builder" src="../images/general/query-builder-keyboard-drag-and-drop.gif" />

## Templating

The Ignite UI for Angular Query Builder Component allows defining templates for the component's header and the search value using the following predefined reference names:

### Header Template

By default the [`IgxQueryBuilderComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html) header would not be displayed. In order to define such, the [`IgxQueryBuilderHeaderComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuilderheadercomponent.html) should be added inside of the `igx-query-builder`.

Then, for setting the header title could be used the [`title`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuilderheadercomponent.html#title) input and passing content inside of the `igx-query-builder-header` allows templating the query builder header.

 The code snippet below illustrates how to do this:

```html
<igx-query-builder #queryBuilder [entities]="this.entities">
        <igx-query-builder-header [title]="'Query Builder Template Sample'">  
        </igx-query-builder-header>
</igx-query-builder>
```

### Search value

The search value of a condition can be templated using the [`igxQueryBuilderSearchValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildersearchvaluetemplatedirective.html) directive, applied to an `<ng-template>` inside of the `igx-query-builder`'s body:

```html
<igx-query-builder #queryBuilder
    [entities]="entities"
    [expressionTree]="expressionTree">
    <ng-template #searchValueTemplate
                igxQueryBuilderSearchValue 
                let-searchValue
                let-selectedField = "selectedField" 
                let-selectedCondition = "selectedCondition"
                let-defaultSearchValueTemplate = "defaultSearchValueTemplate">
        @if (
            selectedField?.field === 'Region' &&
            (selectedCondition === 'equals' || selectedCondition === 'doesNotEqual')
            ){
            <igx-select [placeholder]="'Select region'" [(ngModel)]="searchValue.value">
                <igx-select-item *ngFor="let reg of regionOptions" [value]="reg">
                    {{ reg.text }}
                </igx-select-item>
            </igx-select>
        } 
        @else if (
            selectedField?.field === 'OrderStatus' &&
            (selectedCondition === 'equals' || selectedCondition === 'doesNotEqual')
            ){
            <igx-radio-group>
                <igx-radio class="radio-sample"
                           *ngFor="let stat of statusOptions"
                           value="{{stat.value}}"
                           [(ngModel)]="searchValue.value">
                    {{stat.text}}
                </igx-radio>
            </igx-radio-group>
        }
            @else {  
            <ng-container #defaultTemplate *ngTemplateOutlet="defaultSearchValueTemplate"></ng-container>
        }
    </ng-template>
</igx-query-builder>
```

### Formatter

In order to change the appearance of the search value in the chip displayed when a condition is not in edit mode, you can set a formatter function to the fields array. The search value and selected condition could be accessed through the value and rowData arguments as follows:

```ts
this.ordersFields = [
    { field: "CompanyID", dataType: "string" },
    { field: "OrderID", dataType: "number" },
    { field: "EmployeeId", dataType: "number" },
    { field: "OrderDate", dataType: "date" },
    { field: "RequiredDate", dataType: "date" },
    { field: "ShippedDate", dataType: "date" },
    { field: "ShipVia", dataType: "number" },
    { field: "Freight", dataType: "number" },
    { field: "ShipName", dataType: "string" },
    { field: "ShipCity", dataType: "string" },
    { field: "ShipPostalCode", dataType: "string" },
    { field: "ShipCountry", dataType: "string" },
    { field: "Region", dataType: "string", formatter: (value: any, rowData: any) => rowData === 'equals' || rowData === 'doesNotEqual' ? `${value.value}` : value }},
    { field: "OrderStatus", dataType: "number" }
];
```

### Demo

We’ve created this Angular Query Builder example to show you the templating and formatter functionalities for the header and the search value of the Angular Query Builder component.

```typescript
import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilteringExpressionsTree, FilteringLogic, IExpressionTree, IgxNumberFilteringOperand, IgxStringFilteringOperand } from 'igniteui-angular/core';
import { IgxComboModule } from 'igniteui-angular/combo';
import { IgxQueryBuilderComponent, IgxQueryBuilderHeaderComponent, IgxQueryBuilderSearchValueTemplateDirective } from 'igniteui-angular/query-builder';
import { IgxRadioModule } from 'igniteui-angular/radio';
import { IgxSelectModule } from 'igniteui-angular/select';

@Component({
    selector: 'app-query-builder-template-sample',
    styleUrls: ['./query-builder-template-sample.component.scss'],
    templateUrl: 'query-builder-template-sample.component.html',
    imports: [
    IgxQueryBuilderComponent,
    IgxQueryBuilderHeaderComponent,
    IgxSelectModule,
    IgxRadioModule,
    IgxComboModule,
    FormsModule,
    IgxQueryBuilderSearchValueTemplateDirective,
    NgTemplateOutlet
]
})
export class QueryBuilderTemplateSampleComponent implements OnInit {
    public shipViaFormatterData: any[];
    public entities: any[];
    public companiesFields: any[];
    public ordersFields: any[];
    public expressionTree: IExpressionTree;
    public regionOptions = [
        { text: 'Central North America', value: 'CNA' },
        { text: 'Central Europe', value: 'CEU' },
        { text: 'Mediterranean region', value: 'MED' },
        { text: 'Central Asia', value: 'CAS' },
        { text: 'South Asia', value: 'SAS' },
        { text: 'Western Africa', value: 'WAF' },
        { text: 'Amazonia', value: 'AMZ' },
        { text: 'Southern Africa', value: 'SAF' },
        { text: 'Northern Australia', value: 'NAU' }];

    public statusOptions = [
        { text: 'New', value: 1 },
        { text: 'Shipped', value: 2 },
        { text: 'Done', value: 3 }];

    public ngOnInit(): void {
        this.ordersFields = [
            { field: "CompanyID", dataType: "string" },
            { field: "OrderID", dataType: "number" },
            { field: "EmployeeId", dataType: "number" },
            { field: "OrderDate", dataType: "date" },
            { field: "RequiredDate", dataType: "date" },
            { field: "ShippedDate", dataType: "date" },
            { field: "ShipVia", dataType: "number" },
            { field: "Freight", dataType: "number" },
            { field: "ShipName", dataType: "string" },
            { field: "ShipCity", dataType: "string" },
            { field: "ShipPostalCode", dataType: "string" },
            { field: "ShipCountry", dataType: "string" },
            { field: "Region", dataType: "string", formatter: (value: any, rowData: any) => rowData === 'equals' || rowData === 'doesNotEqual' ? `${value.value}` : value },
            { field: "OrderStatus", dataType: "number" }
        ];

        this.entities = [
            {
                name: "Orders",
                fields: this.ordersFields
            }
        ];

        const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['*']);
        tree.filteringOperands.push({
            fieldName: 'Region',
            condition: IgxStringFilteringOperand.instance().condition('equals'),
            conditionName: 'equals',
            searchVal: this.regionOptions[0]
        });
        tree.filteringOperands.push({
            fieldName: 'OrderStatus',
            condition: IgxNumberFilteringOperand.instance().condition('equals'),
            conditionName: 'equals',
            searchVal: 1
        });

        this.expressionTree = tree;
    }

    public printExpressionTree(tree: IExpressionTree) {
        return tree ? JSON.stringify(tree, null, 2) : 'Please add an expression!';
    }
}
```
```html
<div class="wrapper">
  <igx-query-builder #queryBuilder
    [entities]="entities"
    [expressionTree]="expressionTree">
    <igx-query-builder-header [title]="'Query Builder Template Sample'">
    </igx-query-builder-header>
    <ng-template #searchValueTemplate igxQueryBuilderSearchValue
      let-searchValue
      let-selectedField = "selectedField"
      let-selectedCondition = "selectedCondition"
      let-defaultSearchValueTemplate = "defaultSearchValueTemplate">
      @if (selectedField?.field === 'Region' && (selectedCondition === 'equals' || selectedCondition === 'doesNotEqual')){
        <igx-select [placeholder]="'Select region'" [(ngModel)]="searchValue.value">
          @for (reg of regionOptions; track reg) {
            <igx-select-item [value]="reg">{{ reg.text }}</igx-select-item>
          }
        </igx-select>
      }
      @else if (selectedField?.field === 'OrderStatus' && (selectedCondition === 'equals' || selectedCondition === 'doesNotEqual')){
      <igx-radio-group [(ngModel)]="searchValue.value">
        @for (stat of statusOptions; track stat) {
          <igx-radio class="radio-sample" value="{{stat.value}}">
            {{stat.text}}
          </igx-radio>
        }
      </igx-radio-group>
    }
    @else {
    <ng-container *ngTemplateOutlet="defaultSearchValueTemplate"></ng-container>
  }
</ng-template>
</igx-query-builder>
<div class="output-area">
  <pre>{{ printExpressionTree(queryBuilder.expressionTree) }}</pre>
</div>
</div>
```
```scss
.wrapper{
    margin: 10px;
    height: 100%;
    overflow-y: auto;
}

.output-area{
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    margin: 0 20px 20px 20px;
}

igx-radio-group{
    height: 40px;
}

.igx-radio-group .igx-radio:not(:last-of-type) {
    margin-inline-end: 0;
}
```

## Styling

### Query Builder Theme Property Map

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

<table class="collapsible-table">
    <thead>
      <tr>
        <th>Primary Property</th>
        <th>Dependent Property</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody class="group">
      <tr class="primary">
        <td><details><summary><strong>$background</strong></summary></details></td>
        <td>$label-foreground</td>
        <td>The color for query builder labels "from" & "select"</td>
      </tr>
      <tr class="dependent"><td></td><td>$header-background</td><td>The background color of the query builder header</td></tr>
      <tr class="dependent"><td></td><td>$header-foreground</td><td>The foreground color of the query builder header</td></tr>
      <tr class="dependent"><td></td><td>$subquery-header-background</td><td>The background color of the subquery header</td></tr>
      <tr class="dependent"><td></td><td>$subquery-border-color</td><td>The border color of the query block</td></tr>
      <tr class="dependent"><td></td><td>$separator-color</td><td>The separator color of the query block</td></tr>
      <tr class="dependent"><td></td><td>$header-border (Bootstrap only)</td><td>The border color of the query builder header</td></tr>
    </tbody>
</table>

To get started with styling the Query Builder, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

The Query Builder takes its background color from the its theme, using the `background` parameter. In order to change the background we need to create a custom theme:

```scss

$custom-query-builder: query-builder-theme(
  $schema: $dark-material-schema,
  $background: #292826,
  ...
);
```

Since we have other components inside the Query Builder, such as buttons, chips, dropdowns and inputs, we need to create a separate theme for each one:

```scss
$custom-button: flat-button-theme(
  $schema: $dark-material-schema,
  $foreground: #ffcd0f,
);

$custom-input-group: input-group-theme(
  $schema: $dark-material-schema,
  $focused-secondary-color: #ffcd0f
);

$custom-chip: chip-theme(
  $schema: $dark-material-schema,
  $background: #ffcd0f,
);

$custom-icon-button: outlined-icon-button-theme(
  $schema: $dark-material-schema,
  $foreground: #ffcd0f,
);
```

In this example we only changed some of the parameters for the listed components, but the [`button-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme), [`chip-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-chip-theme), [`drop-down-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-drop-down-theme), [`input-group-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-input-group-theme) themes provide way more parameters to control their respective styling.

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to **include** the new component themes using the `tokens` mixin.

```scss
:host {
    @include tokens($custom-query-builder);
    @include tokens($custom-input-group);
    @include tokens($custom-chip);
    @include tokens($custom-icon-button);

    .igx-filter-tree__buttons {
      @include tokens($custom-button);
    }
}
```

> [!NOTE]
> If the component is using an [`Emulated`](/themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` to style the components inside the query builder component (button, chip, drop-down ...etc).

### Demo

```typescript
import { Component, OnInit } from '@angular/core';
import { IgxQueryBuilderComponent } from 'igniteui-angular/query-builder';

@Component({
    selector: 'app-query-builder-style-sample',
    styleUrls: ['./query-builder-style.component.scss'],
    templateUrl: 'query-builder-style.component.html',
    imports: [IgxQueryBuilderComponent]
})
export class QueryBuilderStyleComponent implements OnInit {
    public entities: any[];
    public companiesFields: any[];
    public ordersFields: any[];
    public ngOnInit(): void {
        this.companiesFields = [
            { field: "ID", dataType: "string" },
            { field: "CompanyName", dataType: "string" },
            { field: "ContactName", dataType: "string" },
            { field: "Employees", dataType: "number" },
            { field: "ContactTitle", dataType: "string" },
            { field: "DateCreated", dataType: "date" },
            { field: "TimeCreated", dataType: "time" },
            { field: "Address", dataType: "string" },
            { field: "City", dataType: "string" },
            { field: "Region", dataType: "string" },
            { field: "PostalCode", dataType: "string" },
            { field: "Phone", dataType: "string" },
            { field: "Fax", dataType: "string" },
            { field: "Contract", dataType: "boolean" }
        ];

        this.ordersFields = [
            { field: "CompanyID", dataType: "string" },
            { field: "OrderID", dataType: "number" },
            { field: "EmployeeId", dataType: "number" },
            { field: "OrderDate", dataType: "date" },
            { field: "RequiredDate", dataType: "date" },
            { field: "ShippedDate", dataType: "date" },
            { field: "ShipVia", dataType: "number" },
            { field: "Freight", dataType: "number" },
            { field: "ShipName", dataType: "string" },
            { field: "ShipCity", dataType: "string" },
            { field: "ShipPostalCode", dataType: "string" },
            { field: "ShipCountry", dataType: "string" },
            { field: "Region", dataType: "string" }
        ];

        this.entities = [
            {
                name: "Companies",
                fields: this.companiesFields
            },
            {
                name: "Orders",
                fields: this.ordersFields
            }
        ];        
    }
}
```
```html
<div class="wrapper">
    <igx-query-builder #queryBuilder
        [entities]="entities">    
    </igx-query-builder>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$yellow: #ffcd0f;
$black: #292826;
$muted-yellow: #ffe482;

$custom-query-builder: query-builder-theme(
  $schema: $dark-material-schema,
  $background: $black,
);

$custom-button: flat-button-theme(
  $schema: $dark-material-schema,
  $foreground: $yellow,
);

$custom-input-group: input-group-theme(
  $focused-secondary-color: $yellow
);

$custom-chip: chip-theme(
  $schema: $dark-material-schema,
  $background: $yellow,
);

$custom-icon-button: outlined-icon-button-theme(
  $schema: $dark-material-schema,
  $foreground: $yellow,
);


:host {
    @include theme($palette: $dark-material-palette);
    @include tokens($custom-query-builder);
    @include tokens($custom-input-group);
    @include tokens($custom-chip);
    @include tokens($custom-icon-button);
    @include tokens($custom-button);
}

.wrapper{
    margin: 10px;
    height: 100%;
    overflow-y: auto;
}
```

> [!NOTE]
> The sample will not be affected by the selected global theme from `Change Theme`.

<div class="divider--half"></div>

### Styling with Tailwind

You can style the query builder using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-query-builder`, `dark-query-builder`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [query-builder-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-query-builder-theme). The syntax is as follows:

```html
<igx-query-builder
  class="!light-query-builder ![--background:#90B69F]">
  ...
</igx-query-builder>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your query builder should look like this:

<div class="sample-container loading" style="height:500px">
    <iframe id="query-builder-tailwind-style-iframe" data-src='{environment:demosBaseUrl}/interactions/query-builder-tailwind-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

You can also streamline your Angular app development using [WYSIWYG App Builder™](https://www.infragistics.com/products/appbuilder) with real UI components.

## API References

<div class="divider--half"></div>

- [IgxQueryBuilderComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html)
- [IgxQueryBuilderHeaderComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuilderheadercomponent.html)
- [IgxQueryBuilderSearchValueTemplateDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildersearchvaluetemplatedirective.html)
- [IgxQueryBuilderComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-query-builder-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
