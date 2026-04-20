---
title: Column Reordering & Moving in Angular Hierarchical Grid - Infragistics
_description: Set custom column order & enable columns reordering via drag/drop mouse or touch gestures, or by using the Angular Column Moving API. Try Ignite UI for Angular!
_keywords: column order, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/column-moving
_tocName: Column Moving
_premium: true
---
# Hierarchical Grid Column Reordering & Moving
The Hierarchical Grid component in Ignite UI for Angular provides the **Column Moving** feature to allow columns reordering via standard drag/drop mouse or touch gestures, or by using the Column Moving API. Column moving works both with pinned and unpinned columns and with Multi-column Headers. Moving a column into the pinned area pins the column and vice versa, moving a column outside of the pinned area unpins the column.
> [!NOTE]
> Reordering between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same group. Moving is allowed between columns/column-groups, if they are top level columns.
> [!NOTE]
> If a column header is templated and the Column Moving is enabled or the corresponding column is groupable, then the templated elements need to have the **draggable** attribute set to **false**! This allows to attach handlers for any event emitted by the element, otherwise the event is consumed by the `igxDrag` directive.
> [!NOTE]
> If the pinned area exceeds its maximum allowed width (80% of the total Hierarchical Grid width), a visual clue notifies the end user that the drop operation is forbidden and pinning is not possible. This means you won't be allowed to drop a column in the pinned area.
```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```
## Angular Hierarchical Grid Column Moving Overview Example
```typescript
import { Component } from '@angular/core';
import { IgxCellHeaderTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-moving',
    styleUrls: ['./hierarchical-grid-moving.component.scss'],
    templateUrl: 'hierarchical-grid-moving.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxIconComponent, IgxRowIslandComponent]
})

export class HGridColumnMovingSampleComponent {
    public localdata;

    constructor() {
        this.localdata = CUSTOMERS;
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }
}
```
```html
<div class="grid__wrapper">
<igx-hierarchical-grid [igxPreventDocumentScroll]="true" #hierarchicalGrid [moving]="true" [data]="localdata" [height]="'630px'" [width]="'100%'">
    <igx-paginator [perPage]="15"></igx-paginator>
    <igx-column #customerid field="CustomerID">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">CustomerID</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(customerid)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #companyname field="CompanyName" width="150px">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">CompanyName</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(companyname)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #contactname field="ContactName" width="150px">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">ContactName</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(contactname)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #contacttitle field="ContactTitle" width="150px">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">ContactTitle</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(contacttitle)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #address field="Address">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">Address</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(address)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #city field="City">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">City</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(city)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #postalcode field="PostalCode">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">PostalCode</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(postalcode)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #country field="Country">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">Country</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(country)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #phone field="Phone">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">Phone</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(phone)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #fax field="Fax">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">Fax</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(fax)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>

    <igx-row-island [height]="null" [key]="'Orders'" [autoGenerate]="false" [moving]="true">
            <igx-column field="OrderID"></igx-column>
            <igx-column field="EmployeeID"></igx-column>
            <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
            <igx-column field="RequiredDate" [dataType]="'date'"></igx-column>
            <igx-column field="ShippedDate" [dataType]="'date'"></igx-column>
            <igx-column field="ShipVia"></igx-column>
            <igx-column field="Freight"></igx-column>
            <igx-column field="ShipName"></igx-column>
            <igx-column field="ShipAddress"></igx-column>
            <igx-column field="ShipCity"></igx-column>
            <igx-column field="ShipPostalCode"></igx-column>
            <igx-column field="ShipCountry"></igx-column>
        <igx-row-island [height]="null" [key]="'OrderDetails'" [autoGenerate]="false" [moving]="true">
                <igx-column field="ProductID"></igx-column>
                <igx-column field="UnitPrice"></igx-column>
                <igx-column field="Quantity"></igx-column>
                <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>

</igx-hierarchical-grid>
</div>
```
```scss
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fontawesome.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-regular.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-solid.css");

.header-icon {
    font-size: 1.1em;
    width: 1.1em;
    height: 1.1em;
    float: right;
    cursor: pointer;
}

.header {
    height: 100%;
}

:host ::ng-deep .title {
    width: 100%;
}

.pin-icon {
    margin-left: 8px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #999;

    &:hover {
        color: #444
    }
}

:host{
    ::ng-deep{
        .igx-grid__th--pinned  {
            .pin-icon {
                color: #444;
        
                &:hover {
                    color: #999
                }
            }
        }
    }
}

.title-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}
```
<div class="divider--half"></div>
## Overview
**Column moving** feature is enabled on a per-grid level, meaning that the [**igx-hierarchical-grid**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) could have either movable or immovable columns. This is done via the [`moving`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#moving) input of the [`igx-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html).
```html
<igx-hierarchical-grid [moving]="true">
    ...
    <igx-row-island [moving]="true"></igx-row-island>
</igx-hierarchical-grid>
```
## API
In addition to the drag and drop functionality, the Column Moving feature also provides two API methods to allow moving a column/reordering columns programmatically:
[`moveColumn`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#moveColumn) - Moves a column before or after another column (a target). The first parameter is the column to be moved, and the second parameter is the target column. Also accepts an optional third parameter `position` (representing a [`DropPosition`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/dropposition.html) value), which determines whether to place the column before or after the target column.
```typescript
// Move the ID column after the Name column
const idColumn = grid.getColumnByName("ID");
const nameColumn = grid.getColumnByName("Name");
grid.moveColumn(idColumn, nameColumn, DropPosition.AfterDropTarget);
```
[`move`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#move) - Moves a column to a specified visible index. If the passed index parameter is invalid (is negative, or exceeds the number of columns), or if the column is not allowed to move to this index (if inside another group), no operation is performed.
```typescript
// Move the ID column at 3rd position.
const idColumn = grid.getColumnByName("ID");
idColumn.move(3);
```
Note that when using the API, only the [`columnMovingEnd`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#columnMovingEnd) event will be emitted, if the operation was successful. Also note that in comparison to the drag and drop functionality, using the API does not require setting the `moving` property to true.
## Events
There are several events related to the column moving to provide a means for tapping into the columns' drag and drop operations. These are [`columnMovingStart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#columnMovingStart), [`columnMoving`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#columnMoving) and [`columnMovingEnd`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#columnMovingEnd).
You can subscribe to the [`columnMovingEnd`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#columnMovingEnd) event of the [`igx-hierarchical-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) to implement some custom logic when a column is dropped to a new position. For example, you can cancel dropping the Category after the Change On Year(%) column.
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data" [autoGenerate]="false" [moving]="true" (columnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Country'"></igx-column>
    <igx-column [field]="'Phone'" [dataType]="'number'"></igx-column>
</igx-hierarchical-grid>
```
```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Phone" && event.target.field === "Country") {
        event.cancel = true;
    }
}
```
## Styling
To get started with styling the Hierarchical Grid column moving headers, we need to import the `index` file, where all the theme functions and component mixins live:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
Following the simplest approach, we create a new theme that extends the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) and accepts the `$ghost-header-background`, `$ghost-header-text-color` and the `$ghost-header-icon-color` parameters.
```scss
// Define dark theme for the column moving
$dark-grid-column-moving-theme: grid-theme(
  $ghost-header-text-color: #f4d45c,
  $ghost-header-background: #575757,
  $ghost-header-icon-color: #f4bb5c
);
```
>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.
The last step is to **include** the component mixins with its respective theme:
```scss
:host {
  @include tokens($dark-grid-column-moving-theme);
}
```
### Demo
```typescript
import { Component } from '@angular/core';
import { IgxCellHeaderTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-moving-styled',
    styleUrls: ['./hierarchical-grid-moving-styled.component.scss'],
    templateUrl: 'hierarchical-grid-moving-styled.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxIconComponent, IgxRowIslandComponent]
})

export class HGridColumnMovingSampleStyledComponent {
    public localdata;

    constructor() {
        this.localdata = CUSTOMERS;
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }

}
```
```html
<div class="grid__wrapper">
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid [data]="localdata" [moving]="true" [height]="'630px'" [width]="'100%'">
    <igx-paginator [perPage]="15"></igx-paginator>
    <igx-column #customerid field="CustomerID">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">CustomerID</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(customerid)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #companyname field="CompanyName" width="150px">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">CompanyName</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(companyname)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #contactname field="ContactName" width="150px">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">ContactName</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(contactname)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #contacttitle field="ContactTitle" width="150px">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">ContactTitle</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(contacttitle)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #address field="Address">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">Address</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(address)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #city field="City">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">City</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(city)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #postalcode field="PostalCode">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">PostalCode</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(postalcode)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #country field="Country">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">Country</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(country)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #phone field="Phone">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">Phone</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(phone)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
    <igx-column #fax field="Fax">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">Fax</span>
                <igx-icon class="pin-icon" [attr.draggable]="false" family="fas" name="fa-thumbtack" (click)="toggleColumn(fax)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>

    <igx-row-island [height]="null" [key]="'Orders'" [autoGenerate]="false" [moving]="true">
            <igx-column field="OrderID"></igx-column>
            <igx-column field="EmployeeID"></igx-column>
            <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
            <igx-column field="RequiredDate" [dataType]="'date'"></igx-column>
            <igx-column field="ShippedDate" [dataType]="'date'"></igx-column>
            <igx-column field="ShipVia"></igx-column>
            <igx-column field="Freight"></igx-column>
            <igx-column field="ShipName"></igx-column>
            <igx-column field="ShipAddress"></igx-column>
            <igx-column field="ShipCity"></igx-column>
            <igx-column field="ShipPostalCode"></igx-column>
            <igx-column field="ShipCountry"></igx-column>
        <igx-row-island [height]="null" [key]="'OrderDetails'" [autoGenerate]="false" [moving]="true">
                <igx-column field="ProductID"></igx-column>
                <igx-column field="UnitPrice"></igx-column>
                <igx-column field="Quantity"></igx-column>
                <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>

</igx-hierarchical-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$dark-grid-column-moving-theme: grid-theme(
  $ghost-header-text-color: #f4d45c,
  $ghost-header-background: #575757,
  $ghost-header-icon-color: #f4bb5c
);

:host {
  @include tokens($dark-grid-column-moving-theme);
}
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
## API References
<div class="divider--half"></div>
- [ColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
- [IgxHierarchicalGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)
## Additional Resources
<div class="divider--half"></div>
- [Hierarchical Grid overview](hierarchical-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
