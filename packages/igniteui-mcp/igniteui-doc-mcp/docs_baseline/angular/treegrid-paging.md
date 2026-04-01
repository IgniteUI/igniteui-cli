---
_tocName: Paging
_premium: true
---
---title: Angular Grid Paging | Angular Pagination Table | Infragistics_description: Configure Angular pagination and create custom pages in the Angular table by Ignite UI, get data for the requested pages with variety of angular events._keywords: angular pagination, igniteui for angular, infragistics_license: commercial_canonicalLink: grid/paging---# Angular Tree Grid PaginationPagination is used to split a large set of data into a sequence of pages that have similar content. Angular table pagination improves user experience and data interaction. Tree Grid pagination is configurable via a separate component projected in the grid tree by defining a `igx-paginator` tag, similar to adding of a column. As in any Angular Table, the pagination in the Tree Grid supports template for custom pages.## Angular Pagination ExampleThe following example represents Tree Grid pagination and exposes the options usage of `items per page` and how paging can be enabled. The user can also quickly navigate through the Tree Grid pages via "Go to last page" and "Go to first page" buttons.```typescript
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-tree-grid-paging-sample',
    styleUrls: ['./tree-grid-paging-sample.component.scss'],
    templateUrl: 'tree-grid-paging-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridPagingSampleComponent implements OnInit {
    @ViewChild('treegrid1', { static: true }) public grid1: IgxTreeGridComponent;
    public data: any[];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;


    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treegrid1 [data]="data" height="500px" width="100%"
    primaryKey="ID" foreignKey="ParentID">
    <igx-paginator [perPage]="10"></igx-paginator>
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
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'">
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
@use '../../../variables' as *;

$progressBar-sample-theme: progress-linear-theme(
    $track-color: rgba(181,181,181, .5),
    $fill-color-default: orange
);

.grid__wrapper {
    @include progress-linear($progressBar-sample-theme);

    --ig-size: var(--ig-size-medium);
    margin: 0 16px;
    padding-top: 10px;
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

.linear-bar-container {
    width: 100%;
}
```Adding a [`igx-paginator`](../paginator.md) component will control whether the feature is present, you can enable/disable it by using a simple `*ngIf` with a toggle property. The [`perPage`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#perPage) input controls the visible records per page. Let’s update our Tree Grid to enable paging:```html<igx-tree-grid #treeGrid [data]="data" [height]="'500px'" [width]="'100%'">
    <igx-paginator [perPage]="10">
    </igx-paginator></igx-tree-grid>```Example:```html<igx-paginator #paginator [totalRecords]="20">
    <igx-paginator-content>
        <div id="numberPager" style="justify-content: center;">
            <button [disabled]="paginator.isFirstPage" (click)="paginator.previousPage()" igxButton="flat">
                PREV
            </button>
            <span>
               Page {{paginator.page}} of {{paginator.totalPages}}
            </span>
            <button [disabled]="paginator.isLastPage" (click)="paginator.nextPage()" igxButton="flat">
                NEXT
            </button>
        </div>
    </igx-paginator-content></igx-paginator>```## UsageThe `igx-paginator` component is used along with the `igx-tree-grid` component in the example below, but you can use it with any other component in case paging functionality is needed.```html<igx-tree-grid #treeGrid [data]="data">
    <igx-paginator #paginator [(page)]="treeGrid.page" [totalRecords]="treeGrid.length" [(perPage)]="10"
            [selectOptions]="selectOptions">
    </igx-paginator></igx-tree-grid>```### Paginator Component Demo```typescript
import { Component, OnInit, ViewChild, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { IPaginatorResourceStrings } from 'igniteui-angular/core';
import { IgxPageNavigationComponent, IgxPageSizeSelectorComponent, IgxPaginatorComponent, IgxPaginatorContentDirective } from 'igniteui-angular/paginator';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-tree-grid-pager-sample',
    styleUrls: ['./tree-grid-pager-sample.component.scss'],
    templateUrl: './tree-grid-pager-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxSwitchComponent, FormsModule]
})
export class TreeGridPagerSampleComponent implements OnInit, AfterViewInit {
    private platformId = inject(PLATFORM_ID);

    @ViewChild('paginator', { read: IgxPaginatorComponent, static: false })
    paginator: IgxPaginatorComponent;

    public data: any[];
    public densityOptions: string[];
    public isDropdownHidden = false;
    public isPagerHidden = false;
    public selectOptions = [5, 15, 20, 50];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    private paginatorResourceStrings: IPaginatorResourceStrings = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        igx_paginator_label: 'Records per page'
    };

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
        this.densityOptions = ['compact', 'cosy', 'comfortable'];
    }

    public ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            requestAnimationFrame(() => {
                this.paginator.resourceStrings = this.paginatorResourceStrings;
            });
        }
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true" #treegrid1 [data]="data" height="500px" width="100%" primaryKey="ID" foreignKey="ParentID">
    <igx-paginator #paginator [(page)]="treegrid1.page" [totalRecords]="treegrid1.totalRecords"
      [perPage]="10" [selectOptions]="selectOptions">
      <igx-paginator-content>
        @if (!isDropdownHidden) {
          <igx-page-size></igx-page-size>
        }
        @if (!isPagerHidden) {
          <igx-page-nav></igx-page-nav>
        }
      </igx-paginator-content>
    </igx-paginator>
    <igx-column field="ID" header="Order ID">
    </igx-column>
    <igx-column field="Name" header="Order Product">
    </igx-column>
    <igx-column field="Category" header="Category">
    </igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'">
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



  <div class="options-container">
    <igx-switch [(ngModel)]="isDropdownHidden">Hide Dropdown</igx-switch>
    <igx-switch [(ngModel)]="isPagerHidden">Hide Pager</igx-switch>
  </div>
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-medium);
    margin: 0 16px;
    padding-top: 10px;
}

igx-switch {
    margin: 24px;
}

.options-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1rem;
}
.options_container * { margin-right: 15px; }

.select-input {
    max-width: 150px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: 15px;
}
```<div class="divider--half"></div>## Remote PagingRemote paging can be achieved by declaring a service, responsible for data fetching and a component, which will be responsible for the Grid construction and data subscription. For more detailed information, check the [`Tree Grid Remote Data Operations`](remote-data-operations.md#remote-paging) topic.## StylingTo get started with styling the paginator, we need to import the `index` file, where all the theme functions and component mixins live:```scss@use "igniteui-angular/theming" as *;// IMPORTANT: Prior to Ignite UI for Angular version 13 use:// @import '~igniteui-angular/lib/core/styles/themes/index';```Following the simplest approach, we create a new theme that extends the [`paginator-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-paginator-theme) and accepts the `$text-color`, `$background-color` and the `$border-color` parameters.```scss$dark-paginator: paginator-theme(
  $text-color: #d0ab23;,
  $background-color: #231c2c,
  $border-color: #d0ab23;);```As seen, the `paginator-theme` only controls colors for the paging container, but does not affect the buttons in the pager UI. To style those buttons, let's create a new icon button theme:```scss$dark-button: flat-icon-button-theme(
  $foreground: #d0ab23,
  $hover-foreground: #231c2c,
  $hover-background: #d0ab23,
  $focus-foreground: #231c2c,
  $focus-background: #d0ab23,
  $disabled-foreground: #9b7829);```>[!NOTE]>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.The last step is to **include** the component mixins, each with its respective theme:```scss:host {
    @include tokens($dark-paginator);

    .igx-grid-paginator__pager {
        @include tokens($dark-button);
    }}```>[!NOTE]>We include the created **icon-button-theme** within `.igx-paginator__pager`, so that only the paginator buttons would be styled. Otherwise other icon buttons in the grid would be affected too.>[!NOTE]>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` in order to style the components which are inside the paging container, like the button:```scss:host {
  @include tokens($dark-paginator);

  igx-paginator {
    ::ng-deep {
      @include tokens($dark-button);
    }
  }}```### Demo```typescript
import { Component, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-paging-sample',
    styleUrls: ['./tree-grid-paging-style-sample.component.scss'],
    templateUrl: 'tree-grid-paging-style-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridPagingStyleSampleComponent implements OnInit {
    public data: any[];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;


    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treegrid1 [data]="data" height="520px" width="100%"
    primaryKey="ID" foreignKey="ParentID">
    <igx-paginator [perPage]="10"></igx-paginator>
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
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Delivered" alt="CDelivered" />
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
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$my-primary: #231c2c;
$my-secondary: #d0ab23;
$dark-gray: #333;
$light-gray: #999;
$inactive-color: #826217;

$dark-paginator: paginator-theme(
  $text-color: $my-secondary,
  $background-color: $my-primary,
  $border-color: $my-secondary
);

$dark-button: flat-icon-button-theme(
  $foreground: $my-secondary,
  $hover-foreground: $dark-gray,
  $hover-background: $my-secondary,
  $focus-foreground: $dark-gray,
  $focus-background: $my-secondary,
  $border-color: $my-secondary,
  $focus-border-color: $my-secondary,
  $disabled-foreground: $inactive-color
);

$dark-select: select-theme(
  $toggle-button-background: $my-primary,
  $toggle-button-foreground: $inactive-color,
  $toggle-button-foreground-filled: $inactive-color,
  $toggle-button-foreground-focus: $inactive-color,
  $toggle-button-background-focus--border: $my-primary,
);

$dark-input-group: input-group-theme(
  $filled-text-color: $my-secondary,
  $idle-text-color: $my-secondary,
  $filled-text-hover-color: $my-secondary,
  $focused-text-color: $my-secondary,
  $border-color: darken($inactive-color, 10%),
  $focused-border-color: $my-secondary,
  $input-suffix-color: $my-secondary,
);

$dark-drop-down-theme: drop-down-theme(
  $background-color: $my-primary,
  $item-text-color: $my-secondary,
  $selected-item-background: $my-secondary,
  $selected-item-text-color: $dark-gray,
  $focused-item-background: $my-secondary,
  $focused-item-text-color: $dark-gray,
  $selected-focus-item-background: $my-secondary,
  $selected-focus-item-text-color: $dark-gray,
  $selected-hover-item-background: $my-secondary,
  $selected-hover-item-text-color: $dark-gray
);

:host {
  @include tokens($dark-paginator);
  @include tokens($dark-drop-down-theme);

  igx-paginator {
    @include tokens($dark-button);
    @include tokens($dark-input-group);
    @include tokens($dark-select);
  }
}
```## API References- [IgxTreeGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)- [IgxGridPaginator Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-paginator-theme)## Additional Resources<div class="divider--half"></div>- [Tree Grid overview](tree-grid.md)- [Paginator](../paginator.md)- [Virtualization and Performance](virtualization.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Selection](selection.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
