---
_tocName: Paging
_premium: true
---
---title: Angular Grid Paging | Angular Pagination Table | Infragistics_description: Configure Angular pagination and create custom pages in the Angular table by Ignite UI, get data for the requested pages with variety of angular events._keywords: angular pagination, igniteui for angular, infragistics_license: commercial_canonicalLink: grid/paging---# Angular Hierarchical Grid PaginationPagination is used to split a large set of data into a sequence of pages that have similar content. Angular table pagination improves user experience and data interaction. Hierarchical Grid pagination is configurable via a separate component projected in the grid tree by defining a `igx-paginator` tag, similar to adding of a column. As in any Angular Table, the pagination in the Hierarchical Grid supports template for custom pages.## Angular Pagination ExampleThe following example represents Hierarchical Grid pagination and exposes the options usage of `items per page` and how paging can be enabled. The user can also quickly navigate through the Hierarchical Grid pages via "Go to last page" and "Go to first page" buttons.```typescript
import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPaginatorComponent, IgxPaginatorDirective } from 'igniteui-angular/paginator';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-paging',
    styleUrls: ['./hierarchical-grid-paging.component.scss'],
    templateUrl: 'hierarchical-grid-paging.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxPaginatorDirective, IgxPaginatorComponent]
})

export class HGridPagingSampleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'550px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist"></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" dataType="number" [formatter]="formatter"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards"></igx-column>
        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
            <igx-paginator *igxPaginator [perPage]="5"></igx-paginator>
            <igx-column field="Album"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false">
                <igx-paginator *igxPaginator [perPage]="5"></igx-paginator>
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>
        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-paginator *igxPaginator [perPage]="5"></igx-paginator>
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
        <igx-paginator [perPage]="10"></igx-paginator>
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
    margin: 0 16px;
    padding-top: 10px;
}
```<div class="divider--half"></div>Adding a [`igx-paginator`](../paginator.md) component will control whether the feature is present, you can enable/disable it by using a simple `*ngIf` with a toggle property. The [`perPage`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#perPage) input controls the visible records per page. Let’s update our Hierarchical Grid to enable paging:```html<igx-hierarchical-grid #hierarchicalGrid [data]="data" [height]="'500px'" [width]="'100%'">
    <igx-paginator [perPage]="10">
    </igx-paginator></igx-hierarchical-grid>```Example:```html<igx-paginator #paginator [totalRecords]="20">
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
    </igx-paginator-content></igx-paginator>```## UsageThe `igx-paginator` component is used along with the `igx-hierarchical-grid` component in the example below, but you can use it with any other component in case paging functionality is needed.```html<igx-hierarchical-grid>
    <igx-column *ngFor="let c of hColumns" [field]="c.field">
    </igx-column>
    <igx-row-island [key]="'childData'" [autoGenerate]="true">
        <igx-row-island [key]="'childData'" [autoGenerate]="true">
            <igx-paginator *igxPaginator></igx-paginator>
        </igx-row-island>
        <igx-paginator *igxPaginator></igx-paginator>
    </igx-row-island>
    <igx-row-island [key]="'childData2'" [autoGenerate]="true">
        <igx-paginator *igxPaginator></igx-paginator>
    </igx-row-island>

    <igx-paginator></igx-paginator></igx-hierarchical-grid>```### Paginator Configuration within child gridsDue to certain limitations in how the child grids of an IgxHierarchicalGrid are implemented and how DI scope works, when defining a paginator component inside the igx-row-island tags, always make sure to use the IgxPaginator directive on the paginator itself. This will make sure that the child grid have the correct paginator instance as a reference:```html<igx-hierarchical-grid>
    ...
    <igx-row-island>
        ...
        <igx-grid-toolbar *igxPaginator>
           ...
        </igx-grid-toolbar>
    </igx-row-island>
    ...</igx-hierarchical-grid>```### Paginator Component Demo```typescript
import { Component, OnInit, ViewChild, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { IPaginatorResourceStrings } from 'igniteui-angular/core';
import { IgxPageNavigationComponent, IgxPageSizeSelectorComponent, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxPaginatorDirective } from 'igniteui-angular/paginator';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-hierarchical-grid-pager-sample',
    styleUrls: ['./hierarchical-grid-pager-sample.component.scss'],
    templateUrl: './hierarchical-grid-pager-sample.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxPaginatorDirective, IgxSwitchComponent, FormsModule]
})
export class HierarchicalGridPagerSampleComponent implements OnInit, AfterViewInit {
    private platformId = inject(PLATFORM_ID);

    @ViewChild('paginator', { read: IgxPaginatorComponent, static: false })
    paginator: IgxPaginatorComponent;

    public data: any[];
    public densityOptions: string[];
    public isDropdownHidden = false;
    public isPagerHidden = false;
    public selectOptions = [5, 15, 20, 50];

    private paginatorResourceStrings: IPaginatorResourceStrings = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        igx_paginator_label: 'Records per page'
    };

    public ngOnInit(): void {
        this.data = SINGERS;
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
  <igx-hierarchical-grid [igxPreventDocumentScroll]="true" #hGrid [data]="data" height="500px" width="100%" primaryKey="ID">
    <igx-paginator #paginator [(page)]="hGrid.page" [totalRecords]="hGrid.totalRecords" [perPage]="10" [selectOptions]="selectOptions">
      <igx-paginator-content>
        @if (!isDropdownHidden) {
          <igx-page-size></igx-page-size>
        }
        @if (!isPagerHidden) {
          <igx-page-nav></igx-page-nav>
        }
      </igx-paginator-content>
    </igx-paginator>
    <igx-column field="Artist"></igx-column>
    <igx-column field="Photo">
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner_2">
          <img [src]="cell.value" class="photo" />
        </div>
      </ng-template>
    </igx-column>
    <igx-column field="Debut" dataType="number"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards"></igx-column>
    <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
      <igx-paginator *igxPaginator [perPage]="5">
      </igx-paginator>
      <igx-column field="Album"></igx-column>
      <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
      <igx-column field="BillboardReview" header="Billboard Review"></igx-column>
      <igx-column field="USBillboard200" header="US Billboard 200"></igx-column>
      <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false">
        <igx-paginator *igxPaginator [perPage]="5">
        </igx-paginator>

        <igx-column field="Number" header="No."></igx-column>
        <igx-column field="Title"></igx-column>
        <igx-column field="Released" dataType="date"></igx-column>
        <igx-column field="Genre"></igx-column>
      </igx-row-island>
    </igx-row-island>
    <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
      <igx-paginator *igxPaginator [perPage]="5">
      </igx-paginator>

      <igx-column field="Tour"></igx-column>
      <igx-column field="StartedOn" header="Started on"></igx-column>
      <igx-column field="Location"></igx-column>
      <igx-column field="Headliner"></igx-column>
    </igx-row-island>
  </igx-hierarchical-grid>

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
```<div class="divider--half"></div>## Remote PagingRemote paging can be achieved by declaring a service, responsible for data fetching and a component, which will be responsible for the Grid construction and data subscription. For more detailed information, check the [`Hierarchical Grid Remote Data Operations`](remote-data-operations.md#remote-paging) topic.## StylingTo get started with styling the paginator, we need to import the `index` file, where all the theme functions and component mixins live:```scss@use "igniteui-angular/theming" as *;// IMPORTANT: Prior to Ignite UI for Angular version 13 use:// @import '~igniteui-angular/lib/core/styles/themes/index';```Following the simplest approach, we create a new theme that extends the [`paginator-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-paginator-theme) and accepts the `$text-color`, `$background-color` and the `$border-color` parameters.```scss$dark-paginator: paginator-theme(
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
import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxPaginatorComponent, IgxPaginatorDirective } from 'igniteui-angular/paginator';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-paging',
    styleUrls: ['./hierarchical-grid-paging-style.component.scss'],
    templateUrl: 'hierarchical-grid-paging-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxPaginatorDirective]
})

export class HGridPagingStyleSampleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'550px'" [width]="'100%'" #hierarchicalGrid>
        <igx-paginator [perPage]="10"></igx-paginator>
        <igx-column field="Artist"></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" dataType="number" [formatter]="formatter"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards"></igx-column>
        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
            <igx-paginator *igxPaginator [perPage]="5">
            </igx-paginator>

            <igx-column field="Album"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false">
                <igx-paginator *igxPaginator [perPage]="5">
                </igx-paginator>

                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>
        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-paginator *igxPaginator [perPage]="5">
            </igx-paginator>

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
    @include tokens($dark-drop-down-theme);
    @include tokens($dark-paginator);

    igx-paginator {
        @include tokens($dark-button);
        @include tokens($dark-input-group);
        @include tokens($dark-select);
    }
}
```## API References- [IgxHierarchicalGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)- [IgxGridPaginator Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-paginator-theme)## Additional Resources<div class="divider--half"></div>- [Hierarchical Grid overview](hierarchical-grid.md)- [Paginator](../paginator.md)- [Virtualization and Performance](virtualization.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Selection](selection.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
