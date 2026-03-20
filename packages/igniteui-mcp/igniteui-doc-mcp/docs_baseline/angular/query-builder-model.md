---
title: Using the Query Builder Model
_description: Angular Query Builder provides a serializable/deserializable JSON format model, making it easy to build SQL queries. Try it now.
_keywords: Angular Query Builder component, Angular Query Builder control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
_license: commercial
_tocName: Using Query Builder Model
---

# Using the Query Builder Model

Angular Query Builder provides a serializable/deserializable JSON format model, making it easy to build SQL queries.

## Overview

This Angular Query Builder example demonstrates how the [`IgxQueryBuilderComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html) expression tree could be used to request data from an endpoint [Northwind WebAPI](https://data-northwind.indigo.design/swagger/index.html) and set it as an [`IgxGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) data source.

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

## Query Builder Model

In order to set an expression tree to the [`IgxQueryBuilderComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html), you need to define a[`FilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/filteringexpressionstree.html). Each [`FilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/filteringexpressionstree.html) should have filtering logic that represents how a data record should resolve against the tree and depending on the use case, you could pass a field name, entity name, and an array of return fields. If all fields in a certain entity should be returned, the `returnFields` property could be set to ['*']:

```ts
const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Entity A', ['*']);
```

Once the root [`FilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/filteringexpressionstree.html) is created, adding conditions, groups or subqueries, could be done by setting its `filteringOperands` property to an array of [`IFilteringExpression`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringexpression.html) (single expression or a group) or [`IFilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringexpressionstree.html) (subquery).
Each [`IFilteringExpression`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringexpression.html) and [`IFilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringexpressionstree.html) should have a `fieldName` that is the name of the column where the filtering expression is placed, and either a `condition` of type [`IFilteringOperation`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ifilteringoperation.html) or a `conditionName`. If required, you could also set a `searchVal`, `searchTree` of type [`IExpressionTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iexpressiontree.html), and `ignoreCase` properties.

- Defining a simple **expression**:

```ts
tree.filteringOperands.push({
            fieldName: 'Name',
            conditionName: IgxStringFilteringOperand.instance().condition('endsWith').name,
            searchVal: 'a'
        });
```

- Defining a **group** of expressions:

```ts
const group = new FilteringExpressionsTree(FilteringLogic.Or, undefined, 'Entity A', ['*']);
group.filteringOperands.push({
    fieldName: 'Name',
    conditionName: IgxStringFilteringOperand.instance().condition('endsWith').name,
    searchVal: 'a'
});
group.filteringOperands.push({
    fieldName: 'DateTime created',
    conditionName: IgxDateFilteringOperand.instance().condition('today').name
});
tree.filteringOperands.push(group);
```

- Defining a **subquery**:

```ts
const innerTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Entity B', ['Number']);
innerTree.filteringOperands.push({
    fieldName: 'Number',
    conditionName: 'equals',
    searchVal: 123
});
 tree.filteringOperands.push({
    fieldName: 'Id',
    conditionName: 'inQuery',
    searchTree: innerTree
});
```

The model can be serialized/deserialized in JSON format, making it easily transferable between client and server:

```ts
JSON.stringify(tree, null, 2);
```

## Using Sub-Queries

In the context of the [`IgxQueryBuilderComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html) the _IN / NOT-IN_ operators are used with the newly exposed subquery functionality in the _WHERE_ clause.

> [!Note]
> A subquery is a query nested inside another query used to retrieve data that will be used as a condition for the outer query.

Selecting the _IN / NOT-IN_ operator in a `FilteringExpression` would create a subquery. After choosing an entity and a column to return, it checks if the value in the specified column in the outer query matches or not any of the values returned by the subquery.

The following expression tree:

```ts
const innerTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Products', ['supplierId']);
innerTree.filteringOperands.push({
    fieldName: 'supplierId',
    conditionName: IgxNumberFilteringOperand.instance().condition('greaterThan').name,
    searchVal: 10
});

const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Suppliers', ['supplierId']);
tree.filteringOperands.push({
    fieldName: 'supplierId',
    conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
    searchTree: innerTree
});
```

Could be serialized by calling:

```ts
JSON.stringify(tree, null, 2);
```

This would be transferred as:

```
{
  "filteringOperands": [
    {
      "fieldName": "supplierId",
      "condition": {
        "name": "inQuery",
        "isUnary": false,
        "isNestedQuery": true,
        "iconName": "in"
      },
      "conditionName": "inQuery",
      "searchVal": null,
      "searchTree": {
        "filteringOperands": [
          {
            "fieldName": "supplierId",
            "condition": {
              "name": "greaterThan",
              "isUnary": false,
              "iconName": "filter_greater_than"
            },
            "conditionName": "greaterThan",
            "searchVal": 10,
            "searchTree": null
          }
        ],
        "operator": 0,
        "entity": "Suppliers",
        "returnFields": [
          "supplierId"
        ]
      }
    }
  ],
  "operator": 0,
  "entity": "Products",
  "returnFields": [
    "supplierId"
  ]
}
```

## SQL Example

Let's take a look at a practical example of how the Ignite UI for Angular Query Builder Component can be used to build SQL queries.

In the sample below we have 3 `entities` with names 'Suppliers', 'Categories' and 'Products'.

Let's say we want to find all suppliers who supply products which belong to the 'Beverages' category. Since the data is distributed across all entities, we can take advantage of the _IN_ operator and accomplish the task by creating subqueries. Each subquery is represented by a `FilteringExpressionsTree` and can be converted to a SQL query through the `transformExpressionTreeToSqlQuery(tree: IExpressionTree)` method.

First, we create а `categoriesTree` which will return the `categoryId` for the record where `name` is `Beverages`. This is the innermost subquery:

```ts
const categoriesTree = new FilteringExpressionsTree(0, undefined, 'Categories', ['categoryId']);
categoriesTree.filteringOperands.push({
    fieldName: 'name',
    conditionName: IgxStringFilteringOperand.instance().condition('equals').name,
    searchVal: 'Beverages'
});
```

The corresponding SQL query for this `FilteringExpressionsTree` will look like this:

```
SELECT categoryId FROM Categories WHERE name = 'Beverages'
```

Then we create а `productsTree` that will return the `supplierId` field from the `categoriesTree` for the records where the `categoryId` matches the `categoryId` returned by the innermost subquery. We do this by setting the `inQuery` condition and the relevant `searchTree`. This is the middle subquery:

```ts
const productsTree = new FilteringExpressionsTree(0, undefined, 'Products', ['supplierId']);
productsTree.filteringOperands.push({
    fieldName: 'categoryId',
    conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
    searchTree: categoriesTree
});
```

This is the updated state of the SQL query:

```
SELECT supplierId FROM Products WHERE categoryId IN (
    SELECT categoryId FROM Categories WHERE name = 'Beverages'
  )
```

Finally, we create а `suppliersTree` that will return all fields from `Suppliers` entity where the `supplierId` matches any of the `supplierId`s returned by the middle subquery. This is the outermost query:

```ts
const suppliersTree = new FilteringExpressionsTree(0, undefined, 'Suppliers', ['*']);
suppliersTree.filteringOperands.push({
    fieldName: 'supplierId',
    conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
    searchTree: productsTree
});
```

Our SQL query is now complete:

```
SELECT * FROM Suppliers WHERE supplierId IN (
  SELECT supplierId FROM Products WHERE categoryId IN (
      SELECT categoryId FROM Categories WHERE name = 'Beverages'
    )
)
```

Now we can set the `expressionsTree` property of the `IgxQueryBuilderComponent` to `suppliersTree`. Furthermore, every change to the query triggers a new request to the endpoint and the resulting data shown in the grid is refreshed.

```typescript
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { EntityType, FilteringExpressionsTree, IExpressionTree, IgxNumberFilteringOperand, IgxStringFilteringOperand } from 'igniteui-angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxQueryBuilderComponent } from 'igniteui-angular/query-builder';
import { format } from 'sql-formatter';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Component({
    selector: 'app-query-builder-sql-sample',
    styleUrls: ['./query-builder-sql-sample.component.scss'],
    templateUrl: 'query-builder-sql-sample.component.html',
    imports: [IgxQueryBuilderComponent, IgxGridComponent, IgxColumnComponent]
})
export class QueryBuilderSqlSampleComponent implements OnInit, AfterViewInit {
    private http = inject(HttpClient);
    private cdr = inject(ChangeDetectorRef);

    @ViewChild('grid', { static: true })
    public grid: IgxGridComponent;

    public data: any[] = [];
    public entities: EntityType[] = [];
    public expressionTree: IExpressionTree;
    public sqlQuery: string = 'SQL Query will be displayed here';

    public ngOnInit(): void {
        this.setEntities();
        this.setInitialExpressionTree();
    }

    public ngAfterViewInit(): void {
        this.onChange();
    }

    private setEntities() {
        this.entities = [
            {
                name: 'Categories',
                fields: [
                    { field: 'categoryId', dataType: 'number' },
                    { field: 'description', dataType: 'string' },
                    { field: 'name', dataType: 'string' }
                ]
            }, {
                name: 'Products',
                fields: [
                    { field: 'productId', dataType: 'number' },
                    { field: 'productName', dataType: 'string' },
                    { field: 'supplierId', dataType: 'number' },
                    { field: 'categoryId', dataType: 'number' },
                    { field: 'quantityperUnit', dataType: 'number' },
                    { field: 'unitPrice', dataType: 'number' },
                    { field: 'unitsInStock', dataType: 'number' },
                    { field: 'unitsOnOrder', dataType: 'number' },
                    { field: 'reorderLevel', dataType: 'number' },
                    { field: 'discontinued', dataType: 'boolean' }
                ]
            }, {
                name: 'Suppliers',
                fields: [
                    { field: 'supplierId', dataType: 'number' },
                    { field: 'companyName', dataType: 'string' },
                    { field: 'contactName', dataType: 'string' },
                    { field: 'contactTitle', dataType: 'string' },
                    { field: 'address', dataType: 'string' },
                    { field: 'city', dataType: 'string' },
                    { field: 'region', dataType: 'string' },
                    { field: 'postalCode', dataType: 'string' },
                    { field: 'country', dataType: 'string' },
                    { field: 'phone', dataType: 'string' },
                    { field: 'fax', dataType: 'string' },
                    { field: 'homePage', dataType: 'string' }
                ]
            }
        ];
    }

    private setInitialExpressionTree() {
        const categoriesTree = new FilteringExpressionsTree(0, undefined, 'Categories', ['categoryId']);
        categoriesTree.filteringOperands.push({
            fieldName: 'name',
            ignoreCase: false,
            conditionName: IgxStringFilteringOperand.instance().condition('equals').name,
            searchVal: 'Beverages'
        });

        const productsTree = new FilteringExpressionsTree(0, undefined, 'Products', ['supplierId']);
        productsTree.filteringOperands.push({
            fieldName: 'categoryId',
            ignoreCase: false,
            conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
            searchTree: categoriesTree
        });

        const suppliersTree = new FilteringExpressionsTree(0, undefined, 'Suppliers', ['supplierId', 'companyName', 'contactName', 'contactTitle']);
        suppliersTree.filteringOperands.push({
            fieldName: 'supplierId',
            conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
            ignoreCase: false,
            searchTree: productsTree
        });

        this.expressionTree = suppliersTree;
    }

    private transformExpressionTreeToSqlQuery(tree: IExpressionTree): string {
        if (!tree) {
            return '';
        }

        const selectFields = tree.returnFields.length > 0 && tree.returnFields.length < this.entities.find(e => e.name === tree.entity).fields.length ?
            `${tree.returnFields.join(',')}` :
            '*';

        const selectClause = `SELECT ${selectFields}`; 
        const fromClause = `FROM ${tree.entity}`;
        const whereClause = this.buildWhereClause(tree);

        return `${selectClause} ${fromClause} ${whereClause}`;
    }

    private buildWhereClause(tree: IExpressionTree): string {
        if (!tree || !tree.filteringOperands || tree.filteringOperands.length === 0) {
            return '';
        }

        let conditions = tree.filteringOperands.map(operand => {
            if (operand instanceof FilteringExpressionsTree) {
                return `(${this.buildWhereClause(operand)})`;
            } else {
                return this.buildCondition(operand);
            }
        });

        const operator = tree.operator === 0 ? 'AND' : 'OR';
        conditions = conditions.filter(cond => cond !== '');
        return conditions.length > 0 ? `WHERE ${conditions.join(` ${operator} `)}` : '';
    }

    private buildCondition(operand: any): string {
        const field = operand.fieldName;
        const value = operand.searchVal;
        const condition = operand.conditionName;

        switch (condition) {
            case 'equals':
                return `${field} = '${value}'`;
            case 'doesNotEqual':
                return `${field} <> '${value}'`;
            case 'greaterThan':
                return `${field} > ${value}`;
            case 'lessThan':
                return `${field} < ${value}`;
            case 'greaterThanOrEqualTo':
                return `${field} >= ${value}`;
            case 'lessThanOrEqualTo':
                return `${field} <= ${value}`;
            case 'contains':
                return `${field} LIKE '%${value}%'`;
            case 'doesNotContain':
                return `${field} NOT LIKE '%${value}%'`;
            case 'startsWith':
                return `${field} LIKE '${value}%'`;
            case 'endsWith':
                return `${field} LIKE '%${value}'`;
            case 'null':
                return `${field} IS NULL`;
            case 'notNull':
                return `${field} IS NOT NULL`;
            case 'empty':
                return `${field} = ''`;
            case 'notEmpty':
                return `${field} <> ''`;
            case 'true':
                return `${field} = true`;
            case 'false':
                return `${field} = false`;
            case 'inQuery':
                return `${field} IN (${this.transformExpressionTreeToSqlQuery(operand.searchTree)})`;
            case 'notInQuery':
                return `${field} NOT IN (${this.transformExpressionTreeToSqlQuery(operand.searchTree)})`;
            default:
                console.error(`Condition ${condition} is not implemented`);
                break;
        }
    }
    
    public onChange() {
        const sqlQuery = this.transformExpressionTreeToSqlQuery(this.expressionTree);
        this.sqlQuery = format(sqlQuery);
        this.cdr.detectChanges();

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
    <div class="flex-container">
        <igx-query-builder #queryBuilder
            [entities]="entities"
            [(expressionTree)]="expressionTree"
            (expressionTreeChange)="onChange()"
            class="container">
        </igx-query-builder>
    
        <div class="container">
            <pre>{{sqlQuery}}</pre>
        </div>
    </div>

    <igx-grid #grid [data]="data" [autoGenerate]="true" height="270px" [width]="'calc(100% - 40px)'">
    </igx-grid>
</div>
```
```scss
.wrapper {
    margin: 10px;
    height: 100%;
    overflow-y: auto;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    margin-right: 20px;
}

.container {
    flex: 1 200px;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.75);
    border-radius: 0.75rem;
    margin: 5px 0px 20px 20px;
    word-break: break-all;
    word-wrap: break-word;

    pre {
        margin-left: 10px
    }
}

igx-query-builder {
    flex: 1 100px;
}

igx-grid {
    margin-left: 20px;
}
```

## API References

<div class="divider--half"></div>

- [IgxQueryBuilderComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html)
- [IgxQueryBuilderComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-query-builder-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
