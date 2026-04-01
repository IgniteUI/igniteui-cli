---
_tocName: Column Moving
_premium: true
---
---title: Column Reordering & Moving in Angular Data Grid - Infragistics_description: Set custom column order & enable columns reordering via drag/drop mouse or touch gestures, or by using the Angular Column Moving API. Try Ignite UI for Angular!_keywords: column order, igniteui for angular, infragistics_license: commercial---# Grid Column Reordering & MovingThe Grid component in Ignite UI for Angular provides the **Column Moving** feature to allow columns reordering via standard drag/drop mouse or touch gestures, or by using the Column Moving API. Column moving works both with pinned and unpinned columns and with Multi-column Headers. Moving a column into the pinned area pins the column and vice versa, moving a column outside of the pinned area unpins the column.> [!NOTE]> Reordering between columns and column groups is allowed only when they are at the same level in the hierarchy and both are in the same group. Moving is allowed between columns/column-groups, if they are top level columns.> [!NOTE]> If a column header is templated and the Column Moving is enabled or the corresponding column is groupable, then the templated elements need to have the **draggable** attribute set to **false**! This allows to attach handlers for any event emitted by the element, otherwise the event is consumed by the `igxDrag` directive.> [!NOTE]> If the pinned area exceeds its maximum allowed width (80% of the total Grid width), a visual clue notifies the end user that the drop operation is forbidden and pinning is not possible. This means you won't be allowed to drop a column in the pinned area.```html<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon></ng-template>```## Angular Grid Column Moving Overview Example```typescript
import { Component, ViewChild } from '@angular/core';
import { ColumnType } from 'igniteui-angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { DATA } from '../../data/financialData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-moving-sample',
    styleUrls: ['./grid-moving-sample.component.scss'],
    templateUrl: './grid-moving-sample.component.html',
    imports: [IgxCellHeaderTemplateDirective, IgxIconComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxBadgeComponent]
})

export class GridMovingSampleComponent {
    @ViewChild('dataGrid', { static: true }) public grid: IgxGridComponent;
    public data: any[];

    constructor() {
        this.data = DATA;
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public toggleColumnPinning(column: ColumnType) {
        column.pinned ? column.unpin() : column.pin();
    }
}
```
```html
<ng-template igxHeader let-column #pinTemplate>
  <div class="title-inner">
    <span style="float:left">{{column.field}}</span>
    <igx-icon class="pin-icon" family="fas" name="fa-thumbtack" [attr.draggable]="false" (click)="toggleColumnPinning(column)"></igx-icon>
  </div>
</ng-template>
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #dataGrid [data]="data" [moving]="true" [autoGenerate]="false" height="620px" width="100%">
    <igx-paginator [perPage]="10"></igx-paginator>
    <igx-column [field]="'Category'" [width]="'200px'" [pinned]="true" [headerTemplate]="pinTemplate"></igx-column>
    <igx-column [field]="'Type'"  [pinned]="true" [headerTemplate]="pinTemplate"></igx-column>
    <igx-column [field]="'Price'" dataType="number" [formatter]="formatCurrency" [headerTemplate]="pinTemplate"></igx-column>
    <igx-column [field]="'Buy'" dataType="number" [formatter]="formatCurrency" [headerTemplate]="pinTemplate"></igx-column>
    <igx-column [field]="'Sell'" dataType="number" [formatter]="formatCurrency" [headerTemplate]="pinTemplate"></igx-column>
    <igx-column [field]="'Spread'" dataType="number" [headerTemplate]="pinTemplate"></igx-column>
    <igx-column [field]="'Change'" dataType="number" [headerTemplate]="pinTemplate">
      <ng-template igxCell let-val>
        <div class="currency-badge-container">
          @if (val>0) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
          }
          @if (val<0) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}</span>
        </div>
      </ng-template>
    </igx-column>
    <igx-column [field]="'Change(%)'" [width]="'150px'" dataType="number"  [formatter]="formatNumber" [headerTemplate]="pinTemplate">
      <ng-template igxCell let-val>
        <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}%</span>
      </ng-template>
    </igx-column>
    <igx-column [field]="'Change On Year(%)'" [width]="'170px'" dataType="number"  [formatter]="formatNumber" [headerTemplate]="pinTemplate">
      <ng-template igxCell let-val>
        <div class="currency-badge-container">
          @if (val>0) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
          }
          @if (val<0) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}%</span>
        </div>
      </ng-template>
    </igx-column>
  </igx-grid>
</div>
```
```scss
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fontawesome.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-regular.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-solid.css");

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
.grid__wrapper {
  padding: 16px;
}

.currency-badge-container {
    width: 80px; 
    float: right;
}

.badge-left {
    float: left;
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
```<div class="divider--half"></div>## Overview**Column moving** feature is enabled on a per-grid level, meaning that the [**igx-grid**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) could have either movable or immovable columns. This is done via the [`moving`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#moving) input of the [`igx-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html).```html<igx-grid [moving]="true"></igx-grid>```## APIIn addition to the drag and drop functionality, the Column Moving feature also provides two API methods to allow moving a column/reordering columns programmatically:[`moveColumn`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#moveColumn) - Moves a column before or after another column (a target). The first parameter is the column to be moved, and the second parameter is the target column. Also accepts an optional third parameter `position` (representing a [`DropPosition`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/dropposition.html) value), which determines whether to place the column before or after the target column.```typescript// Move the ID column after the Name columnconst idColumn = grid.getColumnByName("ID");const nameColumn = grid.getColumnByName("Name");grid.moveColumn(idColumn, nameColumn, DropPosition.AfterDropTarget);```[`move`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#move) - Moves a column to a specified visible index. If the passed index parameter is invalid (is negative, or exceeds the number of columns), or if the column is not allowed to move to this index (if inside another group), no operation is performed.```typescript// Move the ID column at 3rd position.const idColumn = grid.getColumnByName("ID");idColumn.move(3);```Note that when using the API, only the [`columnMovingEnd`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnMovingEnd) event will be emitted, if the operation was successful. Also note that in comparison to the drag and drop functionality, using the API does not require setting the `moving` property to true.## EventsThere are several events related to the column moving to provide a means for tapping into the columns' drag and drop operations. These are [`columnMovingStart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnMovingStart), [`columnMoving`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnMoving) and [`columnMovingEnd`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnMovingEnd).You can subscribe to the [`columnMovingEnd`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#columnMovingEnd) event of the [`igx-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) to implement some custom logic when a column is dropped to a new position. For example, you can cancel dropping the Category after the Change On Year(%) column.```html<igx-grid #dataGrid [data]="data" [autoGenerate]="false" [moving]="true" (columnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Category'"></igx-column>
    <igx-column [field]="'Change On Year(%)'" [dataType]="'number'" ></igx-column></igx-grid>``````typescriptpublic onColumnMovingEnd(event) {
    if (event.source.field === "Category" && event.target.field === "Change On Year(%)") {
        event.cancel = true;
    }}```## StylingTo get started with styling the Grid column moving headers, we need to import the `index` file, where all the theme functions and component mixins live:```scss@use "igniteui-angular/theming" as *;// IMPORTANT: Prior to Ignite UI for Angular version 13 use:// @import '~igniteui-angular/lib/core/styles/themes/index';```Following the simplest approach, we create a new theme that extends the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) and accepts the `$ghost-header-background`, `$ghost-header-text-color` and the `$ghost-header-icon-color` parameters.```scss// Define dark theme for the column moving$dark-grid-column-moving-theme: grid-theme(
  $ghost-header-text-color: #f4d45c,
  $ghost-header-background: #575757,
  $ghost-header-icon-color: #f4bb5c);```>[!NOTE]>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.The last step is to **include** the component mixins with its respective theme:```scss:host {
  @include tokens($dark-grid-column-moving-theme);}```### Demo```typescript
import { Component, ViewChild } from '@angular/core';
import { ColumnType } from 'igniteui-angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { DATA } from '../../data/financialData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-moving-styled-sample',
    styleUrls: ['./grid-moving-styled-sample.component.scss'],
    templateUrl: './grid-moving-styled-sample.component.html',
    imports: [IgxCellHeaderTemplateDirective, IgxIconComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxBadgeComponent]
})

export class GridMovingStyledSampleComponent {
    @ViewChild('dataGrid', { static: true }) public grid: IgxGridComponent;
    public data: any[];

    constructor() {
        this.data = DATA;
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public toggleColumnPinning(column: ColumnType) {
        column.pinned ? column.unpin() : column.pin();
    }
}
```
```html
<ng-template igxHeader let-column #pinTemplate>
  <div class="title-inner">
    <span style="float:left">{{column.field}}</span>
    <igx-icon class="pin-icon" family="fas" name="fa-thumbtack" [attr.draggable]="false" (click)="toggleColumnPinning(column)"></igx-icon>
  </div>
</ng-template>
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #dataGrid [data]="data" [moving]="true" [autoGenerate]="false" height="620px" width="100%">
    <igx-paginator [perPage]="10"></igx-paginator>
    <igx-column [field]="'Category'" [width]="'200px'" [pinned]="true" [headerTemplate]="pinTemplate"></igx-column>
    <igx-column [field]="'Type'" [pinned]="true" [headerTemplate]="pinTemplate"></igx-column>
    <igx-column [field]="'Price'" [dataType]="'number'" [formatter]="formatCurrency" [headerTemplate]="pinTemplate"></igx-column>
    <igx-column [field]="'Buy'" [dataType]="'number'" [formatter]="formatCurrency" [headerTemplate]="pinTemplate"></igx-column>
    <igx-column [field]="'Sell'" [dataType]="'number'" [formatter]="formatCurrency" [headerTemplate]="pinTemplate"></igx-column>
    <igx-column [field]="'Spread'" [dataType]="'number'" [headerTemplate]="pinTemplate"></igx-column>
    <igx-column [field]="'Change'" [dataType]="'number'" [headerTemplate]="pinTemplate">
      <ng-template igxCell let-val>
        <div class="currency-badge-container">
          @if (val>0) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
          }
          @if (val<0) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}</span>
        </div>
      </ng-template>
    </igx-column>
    <igx-column [field]="'Change(%)'" [width]="'150px'" [dataType]="'number'" [formatter]="formatNumber" [headerTemplate]="pinTemplate">
      <ng-template igxCell let-val>
        <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}%</span>
      </ng-template>
    </igx-column>
    <igx-column [field]="'Change On Year(%)'" [width]="'170px'" [dataType]="'number'" [formatter]="formatNumber" [headerTemplate]="pinTemplate">
      <ng-template igxCell let-val>
        <div class="currency-badge-container">
          @if (val>0) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
          }
          @if (val<0) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}%</span>
        </div>
      </ng-template>
    </igx-column>
  </igx-grid>
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
```>[!NOTE]>The sample will not be affected by the selected global theme from `Change Theme`.## API References<div class="divider--half"></div>- [ColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)## Additional Resources<div class="divider--half"></div>- [Grid overview](grid.md)- [Virtualization and Performance](virtualization.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Selection](selection.md)* [Searching](search.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
