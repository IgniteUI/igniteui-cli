---
title: Angular Grid Group By | Group by multiple fields | Infragistics
_description: Configure angular group by that allows visualizing of data records in Angular table, visualize the grouped data in separate and convenient column group.
_keywords: angular group by, igniteui for angular, infragistics
_license: commercial
_tocName: Group By
_premium: true
---

# Angular Grid Group By

A Group By behavior in an Ignite UI for Angular Table or UI Grid creates grouped data rows based on the column values. The Group By in [`igxGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) allows for visualizing the groups in a hierarchical structure. The grouped data rows can be expanded or collapsed and the order of grouping may be changed through the UI or API. When Row Selection is enabled, a Group By row selector is rendered in the left-most area of the group row. In case the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelection) property is set to single, checkboxes are disabled and only serve as an indication for the group where selection is placed. If the [`rowSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowSelection) property is set to multiple, clicking over the Group By row selector selects all records belonging to this group.

## Angular Grid Group By Example

This example presents the grouping capabilities of a large amount of data. Dragging the column headers to the top (grouping area) allows users to see the data for the selected column in a hierarchical structure. They can do group by in multiple fields by dragging more column headers to the top. These grouping options come in handy when you have tables with numerous rows and columns where users want to present the data in a much faster and visually acceptable way.


```typescript
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DefaultSortingStrategy, ISortingExpression, SortingDirection } from 'igniteui-angular/core';
import { GridSelectionMode, IgxCellTemplateDirective, IgxColumnComponent, IgxGroupByRowTemplateDirective } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { INVOICE_DATA } from '../../data/invoiceData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-groupby-sample',
    styleUrls: ['./grid-groupby-sample.component.scss'],
    templateUrl: './grid-groupby-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxGroupByRowTemplateDirective, IgxIconComponent, IgxBadgeComponent]
})
export class GridGroupBySampleComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public expr: ISortingExpression[];
    public selectionMode: GridSelectionMode = 'multiple';

    constructor() {
        this.data = INVOICE_DATA;
        this.expr = [
            { dir: SortingDirection.Asc, fieldName: 'ShipCountry', ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() },
            { dir: SortingDirection.Asc, fieldName: 'ShipCity', ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() }
        ];
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
    public calc2017(values: any[]) {
        const startDate = new Date('1/1/2017');
        const endDate = new Date('12/31/2017');
        return values.filter((x) => x.OrderDate >= startDate && x.OrderDate <= endDate).length;
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [width]="'100%'" [height]="'570px'" [rowSelection]="selectionMode" [groupingExpressions]="expr">
    <igx-column field="OrderID" header="Order ID" [hidden]="true" >
    </igx-column>
    <igx-column field="ShipCountry" header="Ship Country" width="200px" [groupable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" width="200px" [formatter]="formatDate" [groupable]="true">
    </igx-column>
    <igx-column field="PostalCode" header="Postal Code" width="200px" [groupable]="true">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" width="200px" [groupable]="true">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
    </igx-column>
    <igx-column field="ShipName" header="Ship Name" width="250px" [groupable]="true">
    </igx-column>
    <igx-column field="ShipCity" header="Ship City" width="250px" [groupable]="true">
    </igx-column>
    <igx-column field="ShipperName" header="Shipper Name" width="250px" [groupable]="true">
    </igx-column>
    <igx-column field="Salesperson" header="Salesperson" width="250px" [groupable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" width="150px" [formatter]="formatCurrency" dataType="number" [groupable]="true">
    </igx-column>
    <igx-column field="Quantity" header="Quantity" width="150px" dataType="number" [groupable]="true">
    </igx-column>
    <ng-template igxGroupByRow let-groupRow>
      <div class="igx-group-label">
        <igx-icon family="material" class="igx-group-label__icon">group_work</igx-icon>
        <span class="igx-group-label__column-name">
          {{ groupRow.expression.fieldName }}:
        </span>
        <span class="igx-group-label__text">{{ isDate(groupRow.value) ? formatDate(groupRow.value) : groupRow.value }}</span>
        <igx-badge [value]="groupRow.records.length" class='igx-group-label__count-badge'></igx-badge>
        <span style ="color:#09f;"> Ordered in 2017:</span><span class="igx-badge__circle igx-badge__circle--default" >{{ calc2017(groupRow.records)}}</span>
      </div>
    </ng-template>
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
    padding-top: 16px;
    margin: 0 16px;
}

.header-icon {
    font-size: 1.4em;
    width: 1.1em;
    height: 1.1em;
    float: right;
    cursor: pointer;
}

.header {
    height: 100%;
}

.igx-grid__th .title {
    width: 100%;
    cursor: auto;
}
```


## Initial Grouping State

It is possible to define initial grouping of the grid by assigning an array of expressions to the [`groupingExpressions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#groupingExpressions) property of the grid.

```typescript
public ngOnInit() {
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc }
    ];
}
```

Grouping expressions implement the [`ISortingExpression`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/isortingexpression.html) interface.

## Group By API

### Grouping API

Grouping is available through the UI and through a robust API exposed by the grid component. Developers can allow end-users to group the grid data by certain columns, by setting each column's [`groupable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#groupable) property to `true`.

```html
<igx-grid [data]="data">
    <igx-column *ngFor="let c of columns" [field]="c.field" [groupable]="true">
    </igx-column>
</igx-grid>
```

```typescript
public ngOnInit() {
    grid.columns.forEach((column) => {
        column.groupable = true;
    });
}
```

During runtime the expressions are gettable and settable from the [`groupingExpressions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#groupingExpressions) property. If you need to add or change an existing expression you may also use the [`groupBy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#groupby) method with either a single or an array of [`ISortingExpression`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/isortingexpression.html).

```typescript
grid.groupBy({ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true });
```

>[!NOTE]
> Up until now, grouping/sorting worked in conjunction with each other. In 13.2 version, a new behavior which decouples grouping from sorting is introduced. For example - clearing the grouping will not clear sorting expressions in the grid or vice versa. Still, if a column is both sorted and grouped, grouped expressions take precedence.

### Expand/Collapse API

In addition to grouping expressions you can also control the expansion states for group rows. They are stored in a separate property of the [`igxGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) component [`groupingExpansionState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#groupingExpansionState). A group row is uniquely identified based on the field name it is created for and the value it represents for each level of grouping. This means that the signature of an expansion state interface is the following:

```typescript
export interface IGroupByKey {
    fieldName: string;
    value: any;
}

export interface IGroupByExpandState {
    hierarchy: Array<IGroupByKey>;
    expanded: boolean;
}
```

As with [`groupingExpressions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#groupingExpressions), setting a list of [`IGroupByExpandState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igroupbyexpandstate.html) directly to the [`groupingExpansionState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#groupingExpansionState) will change the expansion accordingly. Additionally [`igxGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) exposes a method that toggles a group by the group record instance.

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.toggleGroup(groupRow);
    groupRow.expanded = false;
```

Groups can be created expanded (_**default**_) or collapsed and the expansion states would generally only contain the state opposite to the default behavior. You can control whether groups should be created expanded or not through the [`groupsExpanded`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#groupsExpanded) property.

### Select/Deselect all rows in a group API

Selecting/Deselecting all rows in a group is available through the [`selectRowsInGroup`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#selectRowsInGroup) and [`deselectRowsInGroup`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#deselectRowsInGroup) API methods.

The code snippet below can be used to select all rows within a group using the group record instance [`selectRowsInGroup`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#selectRowsInGroup) method. Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.selectRowsInGroup(groupRow);
```

If you need to deselect all rows within a group programmatically, you can use the [`deselectRowsInGroup`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#deselectRowsInGroup) method.

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    const groupRow = this.grid.getRowByIndex(0).groupRow;
    grid.deselectRowsInGroup(groupRow);
```

## Templating

### Group Row Templates

The group row except for the expand/collapse UI is fully templatable. By default it renders a grouping icon and displays the field name and value it represents. The grouping record template is rendered against has the following signature:

```typescript
export interface IGroupByRecord {
    expression: ISortingExpression;
    level: number;
    records: GroupedRecords;
    value: any;
    groupParent: IGroupByRecord;
    groups?: IGroupByRecord[];
}
```

As an example, the following template would make the group rows summary more verbose:

```html
<ng-template igxGroupByRow let-groupRow>
    <span>Total items with value: {{ groupRow.value }} are {{ groupRow.records.length }}</span>
</ng-template>
```

### Group Row Selector Templates

As mentioned above the group row except for the expand/collapse UI is fully templatable. To create a custom Group By row selector template within the Grid, declare an `<ng-template>` with `igxGroupByRowSelector` directive. From the template, you can access the implicitly provided context variable, with properties that give you information about the Group By row's state.

The `selectedCount` property shows how many of the group records are currently selected while `totalCount` shows how many records belong to the group.

```html
<ng-template igxGroupByRowSelector let-groupByRowContext>
    {{ groupByRowContext.selectedCount }} / {{ groupByRowContext.totalCount  }}
</ng-template>
```

The `groupRow` property returns a reference to the group row.

```html
<ng-template igxGroupByRowSelector let-groupByRowContext>
    <div (click)="handleGroupByRowSelectorClick($event, groupByRowContext.groupRow)">Handle groupRow</div>
</ng-template>
```

The `selectedCount` and `totalCount` properties can be used to determine if the Group By row selector should be checked or indeterminate (partially selected).

```html
<igx-grid #grid [data]="gridData" primaryKey="ProductID" rowSelection="multiple">
    <!-- ... -->
    <ng-template igxGroupByRowSelector let-context>
        <igx-checkbox
            [checked]=" context.selectedCount > 0 && context.selectedCount === context.totalCount"
            [indeterminate]="context.selectedCount > 0 && context.selectedCount !== context.totalCount">
        </igx-checkbox>
    </ng-template>
</igx-grid>
```

## Angular Grid Group By with Paging

Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process. Any expand or collapse operation forces Paging to recalculate the page count and adjust the page index if necessary.
Groups that span multiple pages are split between them. The group row is visible only on the page it starts on and is not repeated on subsequent pages. Summary information for group rows is calculated based on the whole group and is unaffected by Paging.

### Angular group by with paging example


```typescript
import { Component, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, ISortingExpression, SortingDirection } from 'igniteui-angular/core';
import { GridSelectionMode, IgxColumnComponent, IgxGroupByRowTemplateDirective } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { INVOICE_DATA } from '../../data/invoiceData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-group-by-paging-sample',
    templateUrl: './grid-group-by-paging-sample.component.html',
    styleUrls: ['./grid-group-by-paging-sample.component.scss'],
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxGroupByRowTemplateDirective, IgxIconComponent, IgxBadgeComponent]
})
export class GridGroupByPagingSampleComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public expr: ISortingExpression[];
    public selectionMode: GridSelectionMode = 'multiple';
    constructor() {
        this.data = INVOICE_DATA;
        this.expr = [
            { dir: SortingDirection.Asc, fieldName: 'ShipCountry', ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() }
        ];
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
    public calc2017(values: any[]) {
        const startDate = new Date('1/1/2017');
        const endDate = new Date('12/31/2017');
        return values.filter((x) => x.OrderDate >= startDate && x.OrderDate <= endDate).length;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [width]="'100%'" [height]="'570px'" [rowSelection]="selectionMode" [groupingExpressions]="expr">
        <igx-paginator [perPage]="10"></igx-paginator>
        <igx-column field="ShipCountry" header="Ship Country" width="200px" [groupable]="true">
        </igx-column>
        <igx-column field="ShipCity" header="Ship City" width="250px" [groupable]="true">
        </igx-column>
        <igx-column field="UnitPrice" header="Unit Price" width="150px" [formatter]="formatCurrency" dataType="number" [groupable]="true">
        </igx-column>
        <igx-column field="Quantity" header="Quantity" width="150px" dataType="number" [groupable]="true">
        </igx-column>

        <ng-template igxGroupByRow let-groupRow>
            <div class="igx-group-label">
                <igx-icon family="material" class="igx-group-label__icon">group_work</igx-icon>
                <span class="igx-group-label__column-name">
                {{ groupRow.expression.fieldName }}:
                </span>
                <span class="igx-group-label__text">{{ isDate(groupRow.value) ? formatDate(groupRow.value) : groupRow.value }}</span>
                <igx-badge [value]="groupRow.records.length" class='igx-group-label__count-badge'></igx-badge>
                <span style ="color:#09f;"> Ordered in 2017:</span><span class="igx-badge__circle igx-badge__circle--default" >{{ calc2017(groupRow.records)}}</span>
            </div>
        </ng-template>
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
    padding-top: 16px;
    margin: 0 16px;
}

.header-icon {
    font-size: 1.4em;
    width: 1.1em;
    height: 1.1em;
    float: right;
    cursor: pointer;
}

.header {
    height: 100%;
}

.igx-grid__th .title {
    width: 100%;
    cursor: auto;
}
```


## Group By with Summaries

Integration between Group By and Summaries is described in the [Summaries](summaries.md#summaries-with-group-by) topic.

## Keyboard Navigation

The grouping UI supports the following keyboard interactions:

- For group rows (focus should be on the row or the expand/collapse cell)
  - <kbd>ALT</kbd> + <kbd>RIGHT</kbd> - Expands the group
  - <kbd>ALT</kbd> + <kbd>LEFT</kbd> - Collapses the group
  - <kbd>SPACE</kbd> - selects all rows in the group, if <kbd>rowSelection</kbd> property is set to multiple

- For group [`igxChip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html) components in the group by area (focus should be on the chip)
  - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - moves the focused chip left, changing the grouping order, if possible
  - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - moves the focused chip right, changing the grouping order, if possible
  - <kbd>SPACE</kbd> - changes the sorting direction
  - <kbd>DELETE</kbd> - ungroups the field
  - The separate elements of the chip are also focusable and can be interacted with using the <kbd>ENTER</kbd> key.

## Angular Grid Custom Group By

igxGrid allows defining custom grouping per column or per grouping expression, which provides grouping based on a custom condition. This is useful when you need to group by complex objects or for other application specific scenarios.

> [!NOTE]
> In order to implement custom grouping the data first needs to be sorted appropriately. Due to this you may also need to apply a custom sorting strategy that extends the base [`DefaultSortingStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/defaultsortingstrategy.html). After the data is sorted the custom groups can be determined by specifying a [`groupingComparer`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igroupingexpression.html#groupingComparer) for the column or for the specific grouping expression.

The sample below demonstrates custom grouping by `Date`, where the date values are sorted and grouped by Day, Week, Month or Year based on user-selected grouping mode.

### Angular custom group by example


```typescript
/* eslint-disable max-len */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DefaultSortingStrategy, SortingDirection } from 'igniteui-angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarComponent, IgxGroupByRowTemplateDirective } from 'igniteui-angular/grids/core';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { INVOICE_DATA } from '../../data/invoiceData';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-groupby-custom-sample',
    styleUrls: ['./grid-groupby-custom-sample.component.scss'],
    templateUrl: './grid-groupby-custom-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxDropDownItemComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxGroupByRowTemplateDirective, IgxIconComponent, IgxBadgeComponent, CurrencyPipe, DatePipe]
})
export class GridGroupByCustomSampleComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public sortingStrategy;
    public groupByOptions = [
        { name: 'Day', ref: DaySortingStrategy.instance() },
        { name: 'Week', ref: WeekSortingStrategy.instance() },
        { name: 'Month', ref: BaseSortingStrategy.instance() },
        { name: 'Year', ref: BaseSortingStrategy.instance() }
    ];

    public groupByMode = this.groupByOptions[0].name;
    public initialExpr;
    public dateFormatter = '';

    constructor() {
        this.data = INVOICE_DATA;
        this.sortingStrategy = this.groupByOptions[0].ref;
        this.dateFormatter = 'MM/dd/yyyy';

        this.initialExpr = [
            {
                dir: SortingDirection.Asc,
                fieldName: 'OrderDate',
                ignoreCase: true,
                strategy: this.sortingStrategy,
                groupingComparer: (a, b) => {
                    const dateA = this.sortingStrategy.getParsedDate(a);
                    const dateB = this.sortingStrategy.getParsedDate(b);
                    if (this.groupByMode === 'Month') {
                        return dateA.month === dateB.month ? 0 : -1;
                    } else if (this.groupByMode === 'Year') {
                        return dateA.year === dateB.year ? 0 : -1;
                    } else if (this.groupByMode === 'Week') {
                       return this.sortingStrategy.getWeekOfDate(a) === this.sortingStrategy.getWeekOfDate(b) ? 0 : -1;
                    }
                    return dateA.day === dateB.day && dateA.month === dateB.month ? 0 : -1;
                }
            }
        ];
    }

    public selectionChange(event: any) {
        this.groupByMode = event.newSelection.value.name;
        this.sortingStrategy = event.newSelection.value.ref;
        this.dateFormatter = this.changeFormatter(this.groupByMode);
        // Changing groupingExpression and calling the setter again
        const expr = this.grid1.groupingExpressions.find(
            (e) => e.fieldName === 'OrderDate'
        );
        if (expr) {
            expr.strategy = this.sortingStrategy;
            const gexpr = this.grid1.groupingExpressions;
            this.grid1.groupingExpressions = [];
            this.grid1.groupingExpressions = gexpr;
        }
    }

    public changeFormatter(mode: string) {
        if (this.groupByMode === 'Month') {
            return 'MMMM yyyy';
        } else if (this.groupByMode === 'Year') {
            return 'yyyy';
        } else if (this.groupByMode === 'Week'){
            return  'yyyy \'week\' w';
        }
        return 'MM/dd/yyyy';
    }

    public isDate(value: any) {
        if (value instanceof Date) {
            return true;
        } else {
            return false;
        }
    }
}

class BaseSortingStrategy extends DefaultSortingStrategy {

    public getParsedDate(date: any) {
        return {
            day: date.getDay(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        };
    }

    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        return dateA.year < dateB.year ? -1 : dateA.year > dateB.year ? 1 : dateA.month  < dateB.month ? -1 : dateA.month > dateB.month ? 1 : 0;
    }
}

class DaySortingStrategy extends BaseSortingStrategy {
    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        return dateA.year < dateB.year ? -1 : dateA.year > dateB.year ? 1 : dateA.month  < dateB.month ? -1 : dateA.month > dateB.month ? 1 :
                dateA.day < dateB.day ? -1 : dateA.day > dateB.day ? 1 : 0;
    }
}

class WeekSortingStrategy extends BaseSortingStrategy {

    public getWeekOfDate(a: any) {
       return parseInt(new DatePipe('en-US').transform(a, 'w'), 10);
    }

    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        const weekA = this.getWeekOfDate(a);
        const weekB = this.getWeekOfDate(b);
        return dateA.year < dateB.year ? -1 : dateA.year > dateB.year ? 1 : weekA < weekB ? -1 : weekA > weekB ? 1 : 0;
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [width]="'100%'" [height]="'570px'" [groupingExpressions]="initialExpr">
    <igx-grid-toolbar>
      <button igxButton="contained" [igxToggleAction]="dropDown" [igxDropDownItemNavigation]="dropDown">Group By {{ groupByMode }}</button>
      <igx-drop-down #dropDown (selectionChanging)="selectionChange($event)">
        @for (item of groupByOptions; track item) {
          <igx-drop-down-item [value]="item">
            {{ item.name }}
          </igx-drop-down-item>
        }
      </igx-drop-down>
    </igx-grid-toolbar>
    <igx-column field="OrderID" header="Order ID" [hidden]="true" >
    </igx-column>
    <igx-column field="ShipCountry" header="Ship Country" width="200px" [groupable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" width="200px" [groupable]="true" dataType="date">
      <ng-template igxCell let-value>
        {{ value | date:'shortDate' }}
      </ng-template>
    </igx-column>
    <igx-column field="PostalCode" header="Postal Code" width="200px" [groupable]="true">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" width="200px" [groupable]="true">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
    </igx-column>
    <igx-column field="ShipName" header="Ship Name" width="250px" [groupable]="true">
    </igx-column>
    <igx-column field="ShipCity" header="Ship City" width="250px" [groupable]="true">
    </igx-column>
    <igx-column field="ShipperName" header="Shipper Name" width="250px" [groupable]="true">
    </igx-column>
    <igx-column field="Salesperson" header="Salesperson" width="250px" [groupable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" width="150px" dataType="number" [groupable]="true" >
      <ng-template igxCell let-value>
        {{ value | currency:'USD':'symbol-narrow'}}
      </ng-template>
    </igx-column>
    <igx-column field="Quantity" header="Quantity" width="150px" dataType="number" [groupable]="true">
    </igx-column>
    <ng-template igxGroupByRow let-groupRow>
      <div class="igx-group-label">
        <igx-icon family="material" class="igx-group-label__icon">group_work</igx-icon>
        <span class="igx-group-label__column-name">
          {{ groupRow.expression.fieldName }}:
        </span>
        <span class="igx-group-label__text">{{ isDate(groupRow.value) ? (groupRow.value | date: dateFormatter)  : groupRow.value }}</span>
        <igx-badge [value]="groupRow.records.length" class='igx-group-label__count-badge'></igx-badge>
      </div>
    </ng-template>
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
    padding-top: 16px;
    margin: 0 16px;
}



.header {
    height: 100%;
}

.igx-grid__th .title {
    width: 100%;
    cursor: auto;
}
```


The sample defines custom sorting strategies for the different date conditions.
Each custom strategy extends the base [`DefaultSortingStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/defaultsortingstrategy.html) and defines the [`compareValues`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/defaultsortingstrategy.html#compareValues) method, which is the custom compare function used when sorting the values. Additionally it extracts the values from the date needed for the comparison.

```typescript
class BaseSortingStrategy extends DefaultSortingStrategy {

    public getParsedDate(date: any) {
        return {
            day: date.getDay(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        };
    }

    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        return dateA.year < dateB.year ?
            -1 : dateA.year > dateB.year ?
            1 : dateA.month  < dateB.month ?
            -1 : dateA.month > dateB.month ?
            1 : 0;
    }
}

class DaySortingStrategy extends BaseSortingStrategy {
    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        return dateA.year < dateB.year ?
            -1 : dateA.year > dateB.year ?
            1 : dateA.month  < dateB.month ?
            -1 : dateA.month > dateB.month ?
            1 : dateA.day < dateB.day ?
            -1 : dateA.day > dateB.day ?
            1 : 0;
    }
}

class WeekSortingStrategy extends BaseSortingStrategy {

    public getWeekOfDate(a: any) {
       return parseInt(new DatePipe("en-US").transform(a, 'w'), 10);
    }

    compareValues(a: any, b: any) {
        const dateA = this.getParsedDate(a);
        const dateB = this.getParsedDate(b);
        const weekA = this.getWeekOfDate(a);
        const weekB = this.getWeekOfDate(b);
        return dateA.year < dateB.year ?
            -1 : dateA.year > dateB.year ?
            1 : weekA < weekB ?
            -1 : weekA > weekB ?
            1 : 0;
    }
}
```

A [`groupingComparer`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igroupingexpression.html#groupingComparer) function is defined for the grouping expressions, which determines the items belonging to the same group based on the selected grouping mode. Values in the sorted data for which this function returns 0 are marked as part of the same group.

```typescript
 groupingComparer: (a, b) => {
    const dateA = this.sortingStrategy.getParsedDate(a);
    const dateB = this.sortingStrategy.getParsedDate(b);
    if (this.groupByMode === 'Month') {
        return dateA.month === dateB.month ? 0 : -1;
    } else if (this.groupByMode === "Year") {
        return dateA.year === dateB.year ? 0 : -1;
    } else if (this.groupByMode === "Week") {
        return this.sortingStrategy.getWeekOfDate(a) === this.sortingStrategy.getWeekOfDate(b) ? 0 : -1;
    }
    return dateA.day === dateB.day && dateA.month === dateB.month ? 0 : -1;
}
```

From version 15.1.0, you can also use the built-in sorting strategy `GroupMemberCountSortingStrategy` to sort items based on members count.

```typescript
public sortByGroup() {
        const expressions = this.grid1.groupingExpressions;
        if (expressions.length) {
            const fieldName = expressions[0].fieldName;
            const dir = expressions[0].dir === SortingDirection.Asc ? SortingDirection.Desc : SortingDirection.Asc;
            this.grid1.groupBy({ fieldName, dir, ignoreCase: false, strategy: GroupMemberCountSortingStrategy.instance() });
        }
    }
```

## Styling

The igxGrid allows styling through the [`Ignite UI for Angular Theme Library`](../themes/sass/component-themes.md). The grid's [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the grid.

In the below steps, we are going through the steps of customizing the grid's Group By styling.

### Importing global theme

To begin the customization of the Group By feature, you need to import the `index` file, where all styling functions and mixins are located.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### Defining custom theme

Next, create a new theme, that extends the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) and accepts the parameters, required to customize the Group By as desired. You also need to extend the [`chip-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-chip-theme), because it's used in the Group By feature.

```scss

$custom-theme: grid-theme(
  $group-row-background: #494949,
  $group-row-selected-background: #383838,
  $group-label-column-name-text: #f8f8f8,
  $group-label-icon: #ffcd0f,
  $group-label-text: #f8f8f8,
  $group-count-background: #ffcd0f,
  $group-count-text-color: #000,
  $expand-icon-color: #ffcd0f,
  $expand-icon-hover-color: rgb(223, 181, 13),
  $cell-active-border-color: #ffcd0f,
  $row-selected-background: #fff6d3,
  $row-selected-text-color: #000,
  $drop-indicator-color: #ffcd0f
);

/* Chip theme will style the chips in the Group By area */
$custom-chips-theme: chip-theme(
  $background: #494949,
  $text-color: #f8f8f8,
  $hover-text-color: #e7e7e7
);
```

### Defining a custom color palette

In the approach that we described above, the color values were hardcoded. Alternatively, you can achieve greater flexibility, using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions.
`palette` generates a color palette, based on provided primary, secondary and surface colors.  

```scss
$black-color: #292826;
$yellow-color: #ffcd0f;
$grey-color: #efefef;

$custom-palette: palette(
  $primary: $black-color, 
  $secondary: $yellow-color, 
  $surface: $grey-color
);
```

After a custom palette has been generated, the `color` function can be used to obtain different varieties of the primary and the secondary colors.
  
```scss
$custom-theme: grid-theme(
  $group-row-background: color($custom-palette, "primary", 300),
  $group-row-selected-background: color($custom-palette, "primary", 400),
  $group-label-column-name-text:contrast-color($custom-palette, "primary", 500),
  $group-label-icon: color($custom-palette, "secondary", 600),
  $group-label-text:contrast-color($custom-palette, "primary", 500),
  $group-count-background: color($custom-palette, "secondary", 600),
  $group-count-text-color: color($custom-palette, "primary", 400),
  $expand-icon-color: color($custom-palette, "secondary", 600),
  $expand-icon-hover-color: color($custom-palette, "secondary", 300),
  $cell-active-border-color: color($custom-palette, "secondary", 600)
);

$custom-chips-theme: chip-theme(
  $background: color($custom-palette, "primary", 300),
  $text-color:contrast-color($custom-palette, "primary", 500),
  $hover-text-color:contrast-color($custom-palette, "primary", 600)
);
```

### Defining custom schemas

You can go even further and build flexible structure that has all the benefits of a [**schema**](../themes/sass/schemas.md). The **schema** is the recipe of a theme.
Extend one of the two predefined schemas, that are provided for every component. In our case, we would use [`light-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/schemas#variable-light-material-schema).

```scss
$custom-grid-schema: extend(
  map.get('grid', $light-material-schema),
  (
    group-row-background: (color:('secondary', 100)),
    group-row-selected-background: (color:('primary', 400)),
    group-label-column-name-text: (color:('primary', 600)),
    group-label-icon: (color:('primary', 600)),
    group-label-text: (color:('secondary', 700)),
    group-count-background: (color:('primary', 600)),
    group-count-text-color: (color:('secondary', 400)),
    expand-icon-color: (color:('primary', 600)),
    expand-icon-hover-color: (color:('primary', 400))
  )
);
```

In order for the custom schema to be applied, either ([`light`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/schemas#variable-light-material-schema) or [`dark`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/schemas#variable-dark-material-schema)) globals has to be extended. The whole process is actually supplying a component with a custom schema and adding it to the respective component theme afterwards.

```scss
$my-custom-schema: extend(
  $light-material-schema, 
  ( 
    grid: $custom-grid-schema
  )
);

$custom-theme: grid-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema
);
```

### Applying the custom theme

The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file:

```scss
:host {
  @include tokens($custom-theme);
  @include tokens($custom-chips-theme);
}
```

### Scoped component theme

In order for the custom theme to affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

This way, due to Angular's [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation), your styles will be applied only to your custom component.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the components which are inside the grid.

In our example, we need to use `::ng-deep` for our chip theme:

```scss
:host {
  @include tokens($custom-theme);

  ::ng-deep {
    @include tokens($custom-chips-theme);
  }
}
```

### Demo


```typescript
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DefaultSortingStrategy, ISortingExpression, SortingDirection } from 'igniteui-angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { INVOICE_DATA } from '../../data/invoiceData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'app-grid-groupby-sample',
    styleUrls: ['./grid-groupby-styling.component.scss'],
    templateUrl: './grid-groupby-styling.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})
export class GridGroupByStylingComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public expr: ISortingExpression[];

    constructor() {
        this.data = INVOICE_DATA;
        this.expr = [
            { dir: SortingDirection.Asc, fieldName: 'ShipCountry', ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() },
            { dir: SortingDirection.Asc, fieldName: 'ShipCity', ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() }
        ];
    }
    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
}
```
```html
<div class="grid-wrapper">
  <igx-grid
    [igxPreventDocumentScroll]="true"
    #grid1
    [data]="data"
    [width]="'100%'"
    [height]="'540px'"
    [groupingExpressions]="expr"
    >
    <igx-column field="OrderID" header="Order ID" [hidden]="true"> </igx-column>
    <igx-column
      field="ShipCountry"
      header="Ship Country"
      width="200px"
      [groupable]="true"
      >
    </igx-column>
    <igx-column
      field="OrderDate"
      header="Order Date"
      width="200px"
      [formatter]="formatDate"
      [groupable]="true"
      >
    </igx-column>
    <igx-column
      field="PostalCode"
      header="Postal Code"
      width="200px"
      [groupable]="true"
      >
    </igx-column>
    <igx-column
      field="Discontinued"
      header="Discontinued"
      width="200px"
      [groupable]="true"
      >
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img
            src="assets/images/grid/active.png"
            title="Continued"
            alt="Continued"
            />
        }
        @if (!val) {
          <img
            src="assets/images/grid/expired.png"
            title="Discontinued"
            alt="Discontinued"
            />
        }
      </ng-template>
    </igx-column>
    <igx-column
      field="ShipName"
      header="Ship Name"
      width="250px"
      [groupable]="true"
      >
    </igx-column>
    <igx-column
      field="ShipCity"
      header="Ship City"
      width="250px"
      [groupable]="true"
      >
    </igx-column>
    <igx-column
      field="ShipperName"
      header="Shipper Name"
      width="250px"
      [groupable]="true"
      >
    </igx-column>
    <igx-column
      field="Salesperson"
      header="Salesperson"
      width="250px"
      [groupable]="true"
      >
    </igx-column>
    <igx-column
      field="UnitPrice"
      header="Unit Price"
      width="150px"
      [formatter]="formatCurrency"
      dataType="number"
      [groupable]="true"
      >
    </igx-column>
    <igx-column
      field="Quantity"
      header="Quantity"
      width="150px"
      dataType="number"
      [groupable]="true"
      >
    </igx-column>
  </igx-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$yellow: #ffcd0f;
$gray: #494949;
$light-gray: #f8f8f8;
$black: #222;

$custom-theme: grid-theme(
  $group-row-background: $gray,
  $group-row-selected-background: #383838,
  $group-label-column-name-text: $light-gray,
  $group-label-icon: $yellow,
  $group-label-text: $light-gray,
  $group-count-background: $yellow,
  $group-count-text-color: $black,
  $expand-icon-color: $yellow,
  $expand-icon-hover-color: rgb(223, 181, 13),
  $cell-active-border-color: $yellow,
  $row-selected-background: #fff6d3,
  $row-selected-text-color: $black,
  $drop-indicator-color: $yellow
);

$custom-chips-theme: chip-theme(
  $background: $gray,
  $text-color: $light-gray,
  $hover-text-color: #e7e7e7
);

:host {
    @include tokens($custom-theme);
    @include tokens($custom-chips-theme);
}
```

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## Known Limitations

| Limitation                               | Description                                             |
| :--------------------------------------- | :------------------------------------------------------ |
| Maximum amount of grouped columns is 10. | If more than 10 columns are grouped an error is thrown. |

## API References

- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGroupByRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgroupbyrow.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [ISortingExpression](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/isortingexpression.html)
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
- [IGroupByExpandState](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igroupbyexpandstate.html)
- [IgxChipComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html)
- [IgxChipComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-chip-theme)

## Additional Resources

<div class="divider--half"></div>

- [Grid overview](grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Column Moving](column-moving.md)
- [Summaries](summaries.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
