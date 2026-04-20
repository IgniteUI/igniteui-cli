---
title: Angular Grid Paging | Angular Pagination Table | Infragistics
_description: Configure Angular pagination and create custom pages in the Angular table by Ignite UI, get data for the requested pages with variety of angular events.
_keywords: angular pagination, igniteui for angular, infragistics
_license: commercial
_tocName: Paging
_premium: true
---
# Angular Grid Pagination
Pagination is used to split a large set of data into a sequence of pages that have similar content. Angular table pagination improves user experience and data interaction. Grid pagination is configurable via a separate component projected in the grid tree by defining a `igx-paginator` tag, similar to adding of a column. As in any Angular Table, the pagination in the Grid supports template for custom pages.
## Angular Pagination Example
The following example represents Grid pagination and exposes the options usage of `items per page` and how paging can be enabled. The user can also quickly navigate through the Grid pages via "Go to last page" and "Go to first page" buttons.
```typescript
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';
import { athletesData } from '../../data/athletesData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DecimalPipe } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-sample',
    styleUrls: ['./grid-paging-sample.component.scss'],
    templateUrl: 'grid-paging-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxLinearProgressBarComponent, DecimalPipe]
})

export class PagingSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public data: any[];

    public ngOnInit(): void {
        this.data = athletesData;
    }
}
```
```html
<div class="grid__wrapper">

    <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" height="500px" width="100%">
        <igx-paginator [perPage]="10"></igx-paginator>
        <igx-column header="Rank" headerClasses="myClass" field="Id" [sortable]="true"></igx-column>
        <igx-column field="Name" header="Athlete"></igx-column>
        <igx-column field="BeatsPerMinute" header="Beats per minute" dataType="number">
            <ng-template igxCell let-val>
                <div class="cell__inner">
                    {{ val }}
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="TopSpeed" header="Top Speed" dataType="number">
            <ng-template igxCell let-val>
                <div class="cell__inner">
                    {{ val | number: '1.1-5' }}
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="TrackProgress" header="Track Progress">
            <ng-template igxCell let-val>
                <div class="linear-bar-container">
                    <igx-linear-bar [textVisibility]="false" class="cell__inner_2" [value]="val"></igx-linear-bar>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="CountryFlag" header="Country">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <span>
                        <img [src]="cell.value" class="flag" />
                    </span>
                </div>
            </ng-template>
        </igx-column>
    </igx-grid>
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
```
Adding a [`igx-paginator`](../paginator.md) component will control whether the feature is present, you can enable/disable it by using a simple `*ngIf` with a toggle property. The [`perPage`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#perPage) input controls the visible records per page. Let’s update our Grid to enable paging:
```html
<igx-grid #grid [data]="data" [height]="'500px'" [width]="'100%'">
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-grid>
```
Example:
```html
<igx-paginator #paginator [totalRecords]="20">
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
    </igx-paginator-content>
</igx-paginator>
```
## Paging with Group By
Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process.
Integration between Paging and Group By is described in the [Group By](groupby.md#angular-grid-group-by-with-paging) topic.
## Usage
The `igx-paginator` component is used along with the `igx-grid` component in the example below, but you can use it with any other component in case paging functionality is needed.
```html
<igx-grid #grid [data]="data">
    <igx-paginator #paginator [(page)]="grid.page" [totalRecords]="grid.totalRecords" [(perPage)]="10"
            [selectOptions]="selectOptions">
    </igx-paginator>
</igx-grid>
```
### Paginator Component Demo
```typescript
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, PLATFORM_ID, inject } from '@angular/core';
import { athletesData } from '../../data/athletesData';
import { IPaginatorResourceStrings } from 'igniteui-angular/core';
import { IgxPageNavigationComponent, IgxPageSizeSelectorComponent, IgxPaginatorComponent, IgxPaginatorContentDirective } from 'igniteui-angular/paginator';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DecimalPipe, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-grid-pager-sample',
    styleUrls: ['./grid-pager-sample.component.scss'],
    templateUrl: './grid-pager-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxSwitchComponent, FormsModule, DecimalPipe]
})
export class GridPagerSampleComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);
    private platformId = inject(PLATFORM_ID);

    @ViewChild('paginator', { read: IgxPaginatorComponent, static: false })
    paginator: IgxPaginatorComponent;

    public data: any[];
    public isDropdownHidden = false;
    public isPagerHidden = false;
    public selectOptions = [5, 15, 20, 50];

    private paginatorResourceStrings: IPaginatorResourceStrings = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        igx_paginator_label: 'Records per page'
    };

    public ngOnInit(): void {
        this.data = athletesData;
    }

    public ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            requestAnimationFrame(() => {
                this.paginator.resourceStrings = this.paginatorResourceStrings;
            });
            this.cdr.detectChanges();
        }
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid [data]="data" height="500px"
    width="100%">
    <igx-paginator #paginator [(page)]="grid.page" [totalRecords]="grid.totalRecords" [(perPage)]="grid.perPage"
      [selectOptions]="selectOptions">
      <igx-paginator-content>
        @if (!isDropdownHidden) {
          <igx-page-size></igx-page-size>
        }
        @if (!isPagerHidden) {
          <igx-page-nav></igx-page-nav>
        }
      </igx-paginator-content>
    </igx-paginator>
    <igx-column header="Rank" headerClasses="myClass" field="Id" [sortable]="true"></igx-column>
    <igx-column field="Name" header="Athlete"></igx-column>
    <igx-column field="BeatsPerMinute" header="Beats per minute" dataType="number">
      <ng-template igxCell let-val>
        <div class="cell__inner">
          {{ val }}
        </div>
      </ng-template>
    </igx-column>
    <igx-column field="TopSpeed" header="Top Speed" dataType="number">
      <ng-template igxCell let-val>
        <div class="cell__inner">
          {{ val | number: '1.1-5' }}
        </div>
      </ng-template>
    </igx-column>
  </igx-grid>



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
```
<div class="divider--half"></div>
## Remote Paging
Remote paging can be achieved by declaring a service, responsible for data fetching and a component, which will be responsible for the Grid construction and data subscription. For more detailed information, check the [`Grid Remote Data Operations`](remote-data-operations.md#remote-paging) topic.
## Remote Paging with Custom Template
In some cases you may want to define your own paging behavior and this is when we can take advantage of the `igx-paginator-content` and add our custom logic along with it. [This section](remote-data-operations.md#remote-paging-with-custom-igx-paginator-content) explains how we are going to extend the Remote Paging example in order to demonstrate this.
## Styling
To get started with styling the paginator, we need to import the `index` file, where all the theme functions and component mixins live:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
Following the simplest approach, we create a new theme that extends the [`paginator-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-paginator-theme) and accepts the `$text-color`, `$background-color` and the `$border-color` parameters.
```scss
$dark-paginator: paginator-theme(
  $text-color: #d0ab23;,
  $background-color: #231c2c,
  $border-color: #d0ab23;
);
```
As seen, the `paginator-theme` only controls colors for the paging container, but does not affect the buttons in the pager UI. To style those buttons, let's create a new icon button theme:
```scss
$dark-button: flat-icon-button-theme(
  $foreground: #d0ab23,
  $hover-foreground: #231c2c,
  $hover-background: #d0ab23,
  $focus-foreground: #231c2c,
  $focus-background: #d0ab23,
  $disabled-foreground: #9b7829
);
```
>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.
The last step is to **include** the component mixins, each with its respective theme:
```scss
:host {
    @include tokens($dark-paginator);

    .igx-grid-paginator__pager {
        @include tokens($dark-button);
    }
}
```
>[!NOTE]
>We include the created **icon-button-theme** within `.igx-paginator__pager`, so that only the paginator buttons would be styled. Otherwise other icon buttons in the grid would be affected too.
>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` in order to style the components which are inside the paging container, like the button:
```scss
:host {
  @include tokens($dark-paginator);

  igx-paginator {
    ::ng-deep {
      @include tokens($dark-button);
    }
  }
}
```
### Pagination Style Example
```typescript
import { Component, ViewChild, OnInit} from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { athletesData } from '../../data/athletesData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'app-custom-grid-paging-style-sample',
    styleUrls: ['custom-grid-paging-style.component.scss'],
    templateUrl: 'custom-grid-paging-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxIconButtonDirective, IgxIconComponent, DecimalPipe]
})

export class CustomGridPagingStyleSampleComponent implements OnInit{
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public data: any[];

    public ngOnInit(): void {
        this.data = athletesData;
    }

    public removeRow(rowIndex) {
        const row = this.grid1.getRowByIndex(rowIndex);
        row.delete();
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" height="520px" width="100%">
        <igx-paginator [perPage]="10"></igx-paginator>
        <igx-column header="Rank" headerClasses="myClass" field="Id" [sortable]="true"></igx-column>
        <igx-column field="Name" header="Athlete"></igx-column>
        <igx-column field="BeatsPerMinute" header="Beats per minute" dataType="number">
            <ng-template igxCell let-val>
                <div class="cell__inner">
                    {{ val }}
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="TopSpeed" header="Top Speed" dataType="number">
            <ng-template igxCell let-val>
                <div class="cell__inner">
                    {{ val | number: '1.1-5' }}
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="CountryFlag" header="Country">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_">
                    <span>
                        <img [src]="cell.value" class="flag" />
                    </span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column [field]="'Delete Row'" [filterable]="false">
            <ng-template igxCell let-cell="cell">
                <button igxIconButton="flat" (click)="removeRow(cell.id.rowIndex)">
                    <igx-icon>delete</igx-icon>
                </button>
            </ng-template>
        </igx-column>
    </igx-grid>
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

igx-grid {
    @include tokens($dark-paginator);
    @include tokens($dark-drop-down-theme);
}

igx-paginator {
    @include tokens($dark-button);
    @include tokens($dark-input-group);
    @include tokens($dark-select);
}
```
<div class="divider--half"></div>
## API References
- [IgxGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [IgxGridPaginator Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-paginator-theme)
## Additional Resources
<div class="divider--half"></div>
- [Grid overview](grid.md)
- [Paginator](../paginator.md)
- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
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
