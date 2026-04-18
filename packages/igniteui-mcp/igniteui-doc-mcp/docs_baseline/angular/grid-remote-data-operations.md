---
_tocName: Remote Data Operations
_premium: true
---
---title: Angular Grid Remote Data Operations - Ignite UI for Angular_description: Start using Angular remote data operations like remote filtering, remote sorting, and remote scrolling to load data from a server with Ignite UI for Angular._keywords: angular remote data operations, ignite ui for angular, infragistics_license: commercial---# Angular Grid Remote Data OperationsThe Ignite UI for Angular Grid supports remote data operations such as remote virtualization, remote sorting, remote filtering and others. This allows the developer to perform these tasks on a server, retrieve the data that is produced and display it in the Grid.## Angular Grid Remote Data Operations Overview Example```typescript
import { ChangeDetectorRef, Component, OnInit, ViewChild, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { NoopFilteringStrategy, NoopSortingStrategy } from 'igniteui-angular/core';
import { IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { RemoteFilteringService } from '../../services/remoteFiltering.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';

const DEBOUNCE_TIME = 300;

@Component({
    providers: [RemoteFilteringService],
    selector: 'app-grid-remote-filtering-sample',
    styleUrls: ['./remote-filtering-sample.component.scss'],
    templateUrl: './remote-filtering-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxBadgeComponent, AsyncPipe]
})
export class RemoteFilteringSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    private _remoteService = inject(RemoteFilteringService);
    cdr = inject(ChangeDetectorRef);

    @ViewChild('grid', { static: true }) public grid: IgxGridComponent;
    public remoteData: any;
    public noopFilterStrategy = NoopFilteringStrategy.instance();
    public noopSortStrategy = NoopSortingStrategy.instance();

    private _prevRequest: any;
    private _chunkSize: number;
    private destroy$ = new Subject<void>();

    public ngOnInit(): void {
        this.remoteData = this._remoteService.remoteData;
    }

    public ngAfterViewInit() {
        const filteringExpr = this.grid.filteringExpressionsTree.filteringOperands;
        const sortingExpr = this.grid.sortingExpressions[0];
        this._chunkSize = Math.ceil(parseInt(this.grid.height, 10) / this.grid.rowHeight);
        this.grid.isLoading = true;

        this._remoteService.getData(
            {
                chunkSize: this._chunkSize,
                startIndex: this.grid.virtualizationState.startIndex
            },
            filteringExpr,
            sortingExpr,
            (data) => {
                this.grid.totalItemCount = data['@odata.count'];
                this.grid.isLoading = false;
            });

        this.grid.dataPreLoad.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData();
        });
        this.grid.filteringExpressionsTreeChange.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData(true);
        });
        this.grid.sortingExpressionsChange.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData();
        });
    }

    public processData(isFiltering: boolean = false) {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }

        if (!this.grid.isLoading) {
            this.grid.isLoading = true;
        }

        const virtualizationState = this.grid.virtualizationState;
        const filteringExpr = this.grid.filteringExpressionsTree.filteringOperands;
        const sortingExpr = this.grid.sortingExpressions[0];

        if (isFiltering) {
            virtualizationState.startIndex = 0;
        }

        this._prevRequest = this._remoteService.getData(
            {
                chunkSize: this._chunkSize,
                startIndex: virtualizationState.startIndex
            },
            filteringExpr,
            sortingExpr,
            (data) => {
                this.grid.totalItemCount = data['@odata.count'];
                if (this.grid.isLoading) {
                    this.grid.isLoading = false;
                }
            });
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public ngOnDestroy() {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid [data]="remoteData | async" [height]="'460px'" [width]="'100%'" [autoGenerate]="false"
    [filterStrategy]="noopFilterStrategy"
    [sortStrategy]="noopSortStrategy"
    [allowFiltering]="true">
    <igx-column [field]="'ProductID'" [sortable]="true" [filterable]="false"></igx-column>
    <igx-column [field]="'ProductName'" [sortable]="true"></igx-column>
    <igx-column [field]="'UnitPrice'" dataType="number" [formatter]="formatCurrency" [sortable]="true"></igx-column>
    <igx-column [field]="'UnitsInStock'" dataType="number" [headerClasses]="'headerAlignSyle'" [sortable]="true">
      <ng-template igxHeader>
        <span class="cellAlignSyle">UnitsInStock</span>
      </ng-template>
      <ng-template igxCell let-val>
        <div class="currency-badge-container">
          @if (val>50) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
          }
          @if (val<=50) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val>50" [class.down]="val<=50">{{ formatNumber(val) }}</span>
        </div>
      </ng-template>
    </igx-column>
    <igx-column [field]="'QuantityPerUnit'" [sortable]="true"></igx-column>
    <igx-column [field]="'ReorderLevel'" dataType="number" [headerClasses]="'headerAlignSyle'" [sortable]="true">
      <ng-template igxHeader>
        <span class="cellAlignSyle">ReorderLevel</span>
      </ng-template>
      <ng-template igxCell let-val>
        <div class="currency-badge-container">
          @if (val>20) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
          }
          @if (val<=20) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<=0">{{ formatNumber(val) }}</span>
        </div>
      </ng-template>
    </igx-column>
  </igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

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

.headerAlignSyle {
    text-align: right !important;
}

.currency-badge-container {
    width: 80px; 
    float: right;
}

.badge-left {
    float: left;
}
```By default, the Grid uses its own logic for performing data operations.You can perform these tasks remotely and feed the resulting data to the Grid by taking advantage of certain inputs and events, which are exposed by the Grid.## Remote VirtualizationThe [IgxGrid](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) supports the scenario in which the data chunks are requested from a remote service, exposing the behavior implemented in the [`igxForOf`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html) directive it uses internally.To utilize this feature, you need to subscribe to the [`dataPreLoad`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#dataPreLoad) output so that you make the appropriate request based on the arguments received, as well as set the public [IgxGrid](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) property [`totalItemCount`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#totalItemCount) with the respective information coming from the service.```html<igx-grid #grid [data]="remoteData | async" [autoGenerate]="false"
          (dataPreLoad)="processData(false)"
          (sortingDone)="processData(true)">
    <igx-column [field]="'ProductID'" [sortable]="true"></igx-column>
    <igx-column [field]="'ProductName'" [sortable]="true"></igx-column>
    <igx-column [field]="'UnitPrice'" [dataType]="'number'" [formatter]="formatCurrency" [sortable]="true"></igx-column></igx-grid>``````typescriptpublic ngAfterViewInit() {
    this.grid.isLoading = true;

    this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], true, (data) => {
            this.grid.totalItemCount = data['@odata.count'];
            this.grid.isLoading = false;
    });}public processData(reset) {
    if (this.prevRequest) {
        this.prevRequest.unsubscribe();
    }

    this._prevRequest = this._remoteService.getData(this.grid.virtualizationState,
        this.grid.sortingExpressions[0], reset, () => {
        ...
        this.cdr.detectChanges();
    });}```When requesting data, you need to utilize the [`IForOfState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iforofstate.html) interface, which provides the [`startIndex`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iforofstate.html#startIndex) and [`chunkSize`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iforofstate.html#chunkSize) properties.>[!NOTE]>The first [`chunkSize`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iforofstate.html#chunkSize) will always be 0 and should be determined by you based on the specific application scenario.### Remote Virtualization Demo```typescript
import { ChangeDetectorRef, Component, TemplateRef, ViewChild, OnInit, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { debounceTime } from 'rxjs/operators';
import { RemoteServiceVirt } from '../../services/remoteVirtualization.service';
import { AsyncPipe } from '@angular/common';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    providers: [RemoteServiceVirt],
    selector: 'app-grid-remote-virtualization-sample',
    styleUrls: ['grid-sample-4.component.scss'],
    templateUrl: 'grid-sample-4.component.html',
    imports: [IgxCellTemplateDirective, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxBadgeComponent, AsyncPipe]
})

export class GridRemoteVirtualizationSampleComponent implements OnInit, AfterViewInit, OnDestroy{
    private _remoteService = inject(RemoteServiceVirt);
    cdr = inject(ChangeDetectorRef);

    @ViewChild('grid', { static: true }) public grid: IgxGridComponent;
    @ViewChild('remoteDataLoadingLarge', { read: TemplateRef, static: true })
    public remoteDataLoadingLargeTemplate: TemplateRef<any>;
    @ViewChild('remoteDataLoadingMedium', { read: TemplateRef, static: true })
    public remoteDataLoadingMediumTemplate: TemplateRef<any>;
    @ViewChild('remoteDataLoadingSmall', { read: TemplateRef, static: true })
    public remoteDataLoadingSmallTemplate: TemplateRef<any>;

    public remoteData: any;

    private _columnCellCustomTemplates: Map<IgxColumnComponent, TemplateRef<any>>;
    private _prevRequest: any;

    public ngOnInit(): void {
        this.remoteData = this._remoteService.data;
        this._columnCellCustomTemplates = new Map<IgxColumnComponent, TemplateRef<any>>();
    }

    public ngAfterViewInit() {
        this.grid.isLoading = true;

        this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], true,
        (data) => {
            this.grid.totalItemCount = data['@odata.count'];
            this.grid.isLoading = false;
        }, {
            startIndex: this.grid.virtualizationState.startIndex,
            chunkSize: 20
        });

        this.grid.dataPreLoad.pipe().subscribe(() => {
            this._remoteService.getDataFromCache(this.grid.virtualizationState,
                this.grid.sortingExpressions[0], false, () => {
                    this.cdr.detectChanges();
                });
        });

        this.grid.dataPreLoad.pipe(debounceTime(500)).subscribe(() => {
            this.processData(false);
        });
    }

    public handlePreLoad() {
        this.processData(false);
    }

    public processData(reset) {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }
        let state;
        if (!reset) {
            state = {
                startIndex: this.grid.virtualizationState.startIndex,
                chunkSize: 20
            };
        }
        this._prevRequest = this._remoteService.getData(this.grid.virtualizationState,
            this.grid.sortingExpressions[0], reset, () => {
                this.cdr.detectChanges();
            }, state);
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public ngOnDestroy() {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }
    }

    public getDataLoadingTemplate(): TemplateRef<any> {
        const val = Math.floor(Math.random() * 3) + 1;

        switch (val) {
            case 1: return this.remoteDataLoadingLargeTemplate;
            case 2: return this.remoteDataLoadingMediumTemplate;
            case 3: return this.remoteDataLoadingSmallTemplate;
        }
    }
}
```
```html
<ng-template #cellTemplate igxCell let-val let-data="cell.row.data">
  @if (!data.emptyRec) {
    <div>
      {{ val }}
    </div>
  } @else {
    <ng-template [ngTemplateOutlet]="getDataLoadingTemplate()"></ng-template>
  }
</ng-template>
<div class="grid__wrapper">
  <ng-template #remoteDataLoadingLarge>
    <div class="remote-data-loading-template-large"></div>
  </ng-template>
  <ng-template #remoteDataLoadingMedium>
    <div class="remote-data-loading-template-medium"></div>
  </ng-template>
  <ng-template #remoteDataLoadingSmall>
    <div class="remote-data-loading-template-small"></div>
  </ng-template>

  <igx-grid [igxPreventDocumentScroll]="true" #grid [data]="remoteData | async" [height]="'500px'" [width]="'100%'" [autoGenerate]='false'
    (sortingDone)="processData(true)">
    <igx-column [field]="'ProductID'" [sortable]="true" [cellTemplate]="cellTemplate"></igx-column>
    <igx-column [field]="'ProductName'" [sortable]="true" [cellTemplate]="cellTemplate"></igx-column>
    <igx-column [field]="'UnitPrice'" dataType="number" [formatter]="formatCurrency" [sortable]="true" [cellTemplate]="cellTemplate"></igx-column>
    <igx-column [field]="'UnitsInStock'" dataType="number" [headerClasses]="'headerAlignSyle'" [sortable]="true">
      <ng-template igxHeader>
        <span class="cellAlignSyle">UnitsInStock</span>
      </ng-template>
      <ng-template igxCell let-val let-cell="cell">
        @if (!cell.row.data.emptyRec) {
          <div>
            <div class="currency-badge-container">
              @if (val>50) {
                <igx-badge type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
              }
              @if (val<=50) {
                <igx-badge type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
              }
              <span class="cellAlignSyle" [class.up]="val>50" [class.down]="val<=50">{{ formatNumber(val) }}</span>
            </div>
          </div>
        } @else {
          <ng-template [ngTemplateOutlet]="getDataLoadingTemplate()"></ng-template>
        }
      </ng-template>
    </igx-column>
    <igx-column [field]="'QuantityPerUnit'" [sortable]="true" [cellTemplate]="cellTemplate"></igx-column>
    <igx-column [field]="'ReorderLevel'" dataType="number" [headerClasses]="'headerAlignSyle'" [sortable]="true">
      <ng-template igxHeader>
        <span class="cellAlignSyle">ReorderLevel</span>
      </ng-template>
      <ng-template igxCell let-val let-cell="cell">
        @if (!cell.row.data.emptyRec) {
          <div>
            <div class="currency-badge-container">
              @if (val>20) {
                <igx-badge type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
              }
              @if (val<=20) {
                <igx-badge type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
              }
              <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<=0">{{ formatNumber(val) }}</span>
            </div>
          </div>
        } @else {
          <ng-template [ngTemplateOutlet]="getDataLoadingTemplate()"></ng-template>
        }
      </ng-template>
    </igx-column>
  </igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

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

.headerAlignSyle {
    text-align: right !important;
}

.currency-badge-container {
    width: 80px;
    float: right;
}

.badge-left {
    float: left;
}

.remote-data-loading-template {
    animation: content-placeholder-animation .5s infinite;
    background-color: lightgray;
    height: 15px;
}

.remote-data-loading-template-medium {
    @extend .remote-data-loading-template;
    width: 30px;
}

.remote-data-loading-template-large {
    @extend .remote-data-loading-template;
    width: 40px;
}

.remote-data-loading-template-small {
    @extend .remote-data-loading-template;
    width: 20px;
}

@keyframes content-placeholder-animation {
    0% {
        opacity: .75;
        transform: scaleX(.9);
    }
    50% {
        opacity: 1;
        transform: scaleX(1.1);
    }
    100% {
        opacity: .75;
        transform: scaleX(.9);
    }
}
```## Infinite Scroll

 A popular design for scenarios requiring fetching data by chunks from an end-point is the so-called infinite scroll. For data grids, it is characterized by continuous increase of the loaded data triggered by the end-user scrolling all the way to the bottom. The next paragraphs explain how you can use the available API to easily achieve infinite scrolling in `IgxGrid`.To implement infinite scroll, you have to fetch the data in chunks. The data that is already fetched should be stored locally and you have to determine the length of a chunk and how many chunks there are. You also have to keep a track of the last visible data row index in the grid. In this way, using the `startIndex` and `chunkSize` properties, you can determine if the user scrolls up and you have to show them already fetched data or scrolls down and you have to fetch more data from the end-point.The first thing to do is use the `ngAfterViewInit` lifecycle hook to fetch the first chunk of the data. Setting the `totalItemCount` property is important, as it allows the grid to size its scrollbar correctly.```typescriptpublic ngAfterViewInit() {
    this._remoteService.loadDataForPage(this.page, this.pageSize, (request) => {
        if (request.data) {
            this.grid.totalItemCount = this.page * this.pageSize;
            this.grid.data = this._remoteService.getCachedData({startIndex: 0, chunkSize: 10});
            this.totalItems = request.data['@odata.count'];
            this.totalPageCount = Math.ceil(this.totalItems / this.pageSize);
            this.grid.isLoading = false;
        }
    });}```Additionally, you have to subscribe to the `dataPreLoad` output, so that you can provide the data needed by the grid when it tries to display a different chunk, rather than the currently loaded one. In the event handler, you have to determine whether to fetch new data or return data, that's already cached locally.```typescriptpublic handlePreLoad() {
    const isLastChunk = this.grid.totalItemCount ===
                        this.grid.virtualizationState.startIndex + this.grid.virtualizationState.chunkSize;
    // when last chunk reached load another page of data
    if (isLastChunk) {
        if (this.totalPageCount === this.page) {
            this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
            return;
        }
        this.page++;
        this.grid.isLoading = true;
        this._remoteService.loadDataForPage(this.page, this.pageSize, (request) => {
            if (request.data) {
                this.grid.totalItemCount = Math.min(this.page * this.pageSize, this.totalItems);
                this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
                this.grid.isLoading = false;
            }
        });
    } else {
        this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
    }}```### Infinite Scroll Demo```typescript
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild, OnInit, inject } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { RemoteService } from '../../services/remote.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    providers: [RemoteService],
    selector: 'app-grid-remote-virtualization-sample',
    styleUrls: ['grid-sample-5.component.scss'],
    templateUrl: 'grid-sample-5.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxBadgeComponent]
})

export class GridRemoteVirtualizationAddRowSampleComponent implements AfterViewInit, OnInit {
    private _remoteService = inject(RemoteService);
    cdr = inject(ChangeDetectorRef);


    @ViewChild('grid', { static: true })
    public grid: IgxGridComponent;

    public remoteData: any;
    private page = 1;
    private pageSize = 10;
    private totalPageCount = 0;
    private totalItems = 0;

    public ngOnInit(): void {
        this.remoteData = this._remoteService.data;
    }

    public ngAfterViewInit() {
        this.grid.isLoading = true;
        // load 1 page of data with the size of a  data view and a half
        const dataViewSize = parseInt(this.grid.height, 10) / this.grid.rowHeight;
        this.pageSize = Math.floor(dataViewSize * 1.5);
        this._remoteService.loadDataForPage(this.page, this.pageSize, (request) => {
            if (request.data) {
                this.grid.data = this._remoteService.getCachedData({startIndex: 0, chunkSize: 10});
                this.cdr.detectChanges();
                this.grid.verticalScrollContainer.totalItemCount = this.page * this.pageSize;
                this.totalItems = request.data['@odata.count'];
                this.totalPageCount = Math.ceil(this.totalItems / this.pageSize);
                this.grid.isLoading = false;
            }
        });
    }

    public handlePreLoad() {
        const isLastChunk = this.grid.totalItemCount ===
                            this.grid.virtualizationState.startIndex + this.grid.virtualizationState.chunkSize;
        // when last chunk reached load another page of data
        if (isLastChunk) {
            if (this.totalPageCount === this.page) {
                this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
                return;
            }
            this.page++;
            this.grid.isLoading = true;
            this._remoteService.loadDataForPage(this.page, this.pageSize, (request) => {
                if (request.data) {
                    this.grid.totalItemCount = Math.min(this.page * this.pageSize, this.totalItems);
                    this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
                    this.grid.isLoading = false;
                }
            });
        } else {
            this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
        }
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid [height]="'480px'" [width]="'100%'" [autoGenerate]='false' (dataPreLoad)="handlePreLoad()">
    <igx-column [field]="'ProductID'"></igx-column>
    <igx-column [field]="'ProductName'"></igx-column>
    <igx-column [field]="'UnitPrice'" dataType="number" [formatter]="formatCurrency"></igx-column>
    <igx-column [field]="'UnitsInStock'" dataType="number" [headerClasses]="'headerAlignSyle'">
      <ng-template igxHeader>
        <span class="cellAlignSyle">UnitsInStock</span>
      </ng-template>
      <ng-template igxCell let-val>
        <div class="currency-badge-container">
          @if (val>50) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
          }
          @if (val<=50) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val>50" [class.down]="val<=50">{{ formatNumber(val) }}</span>
        </div>
      </ng-template>
    </igx-column>
    <igx-column [field]="'QuantityPerUnit'"></igx-column>
    <igx-column [field]="'ReorderLevel'" dataType="number" [headerClasses]="'headerAlignSyle'">
      <ng-template igxHeader>
        <span class="cellAlignSyle">ReorderLevel</span>
      </ng-template>
      <ng-template igxCell let-val>
        <div class="currency-badge-container">
          @if (val>20) {
            <igx-badge type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
          }
          @if (val<=20) {
            <igx-badge type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
          }
          <span class="cellAlignSyle" [class.up]="val>0" [class.down]="val<=0">{{ formatNumber(val) }}</span>
        </div>
      </ng-template>
    </igx-column>
  </igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

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

.headerAlignSyle {
    text-align: right !important;
}

.currency-badge-container {
    width: 80px;
    float: right;
}

.badge-left {
    float: left;
}

.remote-data-loading-template {
    animation: content-placeholder-animation .5s infinite;
    background-color: lightgray;
    height: 15px;
}

.remote-data-loading-template-medium {
    @extend .remote-data-loading-template;
    width: 30px;
}

.remote-data-loading-template-large {
    @extend .remote-data-loading-template;
    width: 40px;
}

.remote-data-loading-template-small {
    @extend .remote-data-loading-template;
    width: 20px;
}

@keyframes content-placeholder-animation {
    0% {
        opacity: .75;
        transform: scaleX(.9);
    }
    50% {
        opacity: 1;
        transform: scaleX(1.1);
    }
    100% {
        opacity: .75;
        transform: scaleX(.9);
    }
}
```## Remote Sorting/FilteringTo provide remote sorting and filtering, you need to subscribe to the [`dataPreLoad`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#dataPreLoad), [`sortingExpressionsChange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#sortingExpressionsChange) and [`filteringExpressionsTreeChange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#filteringexpressionstreechange) outputs, so that you make the appropriate request based on the arguments received, as well as set the public [IgxGrid](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) property [`totalItemCount`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#totalItemCount) with the respective information coming from the service.We will also take advantage of the **rxjs** `debounceTime` function, which emits a value from the source Observable only after a particular time span has passed without another source emission. This way the remote operation will be triggered only when the specified amount of time has passed without the user interrupting it.```typescriptconst DEBOUNCE_TIME = 300;...public ngAfterViewInit() {
    ...
    this.grid.dataPreLoad.pipe(
        debounceTime(DEBOUNCE_TIME),
        takeUntil(this.destroy$)
    ).subscribe(() => {
        this.processData();
    });

    this.grid.filteringExpressionsTreeChange.pipe(
        debounceTime(DEBOUNCE_TIME),
        takeUntil(this.destroy$)
    ).subscribe(() => {
        this.processData(true);
    });

    this.grid.sortingExpressionsChange.pipe(
        debounceTime(DEBOUNCE_TIME),
        takeUntil(this.destroy$)
    ).subscribe(() => {
        this.processData();
    });}```When remote sorting and filtering are provided, usually we do not need the built-in sorting and filtering of the grid. We can disable them by setting the [`sortStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#sortStrategy) and the [`filterStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#filterStrategy) inputs of the grid to the `NoopSortingStrategy` and the `NoopFilteringStrategy` respective instances.```html<igx-grid #grid [data]="remoteData | async" [height]="'500px'" [width]="'100%'" [autoGenerate]='false'
        [filterStrategy]="noopFilterStrategy"
        [sortStrategy]="noopSortStrategy"
        [allowFiltering]="true">
    ...</igx-grid>``````typescriptpublic noopFilterStrategy = NoopFilteringStrategy.instance();public noopSortStrategy = NoopSortingStrategy.instance();```>[!NOTE]>When remote data is requested, the filtering operation is case-sensitive.### Remote Sorting/Filtering Demo<!-- markdownlint-disable-next-line MD051 -->You can see the result of the code from above at the beginning of this article in the [Demo](#angular-grid-remote-data-operations-overview-example) section.## Unique Column Values StrategyThe list items inside the Excel Style Filtering dialog represent the unique values for the respective column. The Grid generates these values based on its data source by default. In case of remote filtering, the grid data does not contain all the data from the server. In order to provide the unique values manually and load them on demand, we can take advantage of the Grid's [`uniqueColumnValuesStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#uniqueColumnValuesStrategy) input. This input is actually a method that provides three arguments:- **column**  - The respective column instance.- **filteringExpressionsTree** - The filtering expressions tree, which is reduced based on the respective column.- **done** - Callback that should be called with the newly generated column values when they are retrieved from the server.The developer can manually generate the necessary unique column values based on the information, that is provided by the **column** and the **filteringExpressionsTree** arguments and then invoke the **done** callback.> [!NOTE]> When the [`uniqueColumnValuesStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#uniqueColumnValuesStrategy) input is provided, the default unique values generating process in the excel style filtering will not be used.```html<igx-grid #grid1 [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...</igx-grid>``````typescriptpublic columnValuesStrategy = (column: ColumnType,
                               columnExprTree: IFilteringExpressionsTree,
                               done: (uniqueValues: any[]) => void) => {
    // Get specific column data.
    this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));}```### Unique Column Values Strategy Demo```typescript
import { Component, OnInit, inject } from '@angular/core';
import { IFilteringExpressionsTree } from 'igniteui-angular/core';
import { IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { RemoteValuesService } from './remoteValues.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-excel-style-filtering-load-on-demand',
    styleUrls: ['./grid-excel-style-filtering-load-on-demand.component.scss'],
    templateUrl: './grid-excel-style-filtering-load-on-demand.component.html',
    providers: [RemoteValuesService],
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent]
})
export class GridExcelStyleFilteringLoadOnDemandComponent implements OnInit {
    private remoteValuesService = inject(RemoteValuesService);


    public data: any[];

    public columnValuesStrategy = (column: IgxColumnComponent,
                                   columnExprTree: IFilteringExpressionsTree,
                                   done: (uniqueValues: any[]) => void) => {
        // Get specific column data.
        this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));
    };

    public ngOnInit() {
        // Get full data.
        this.data = this.remoteValuesService.getRecordsData();
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [moving]="true" [height]="'750px'"
                [allowFiltering]="true" [filterMode]="'excelStyleFilter'"
                [uniqueColumnValuesStrategy]="columnValuesStrategy">
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>


        <igx-column [field]="'ID'" [filterable]="true" [sortable]="true" [dataType]="'string'"></igx-column>
        <igx-column [field]="'CompanyName'" [filterable]="true" [sortable]="true" [dataType]="'string'"></igx-column>
        <igx-column [field]="'Employees'" [filterable]="true" [sortable]="true" [dataType]="'number'"></igx-column>
        <igx-column [field]="'Contract'" [filterable]="true" [sortable]="true" [dataType]="'boolean'"></igx-column>
        <igx-column [field]="'DateCreated'" [filterable]="true" [sortable]="true" [dataType]="'date'"></igx-column>

        <!-- <ng-template igxExcelStyleLoading>
            Loading ...
        </ng-template> -->
    </igx-grid>
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-medium);

    margin: 0 auto;
    padding: 16px;
}
```In order to provide a custom loading template for the excel style filtering, we can use the `igxExcelStyleLoading` directive:```html<igx-grid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
    <ng-template igxExcelStyleLoading>
        Loading ...
    </ng-template></igx-grid>```<div class="divider--half"></div>## Remote Paging@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {The paging feature can operate with remote data. In order to demonstrate this let's first declare our service that will be responsible for data fetching. We will need the count of all data items in order to calculate the page count. This logic will be added to our service.```typescript@Injectable()export class RemotePagingService {
    public remoteData: BehaviorSubject<any[]>;
    public dataLenght: BehaviorSubject<number> = new BehaviorSubject(0);
    public url = 'https://www.igniteui.com/api/products';

    constructor(private http: HttpClient) {
        this.remoteData = new BehaviorSubject([]) as any;
    }

    public getData(index?: number, perPage?: number): any {
        let qS = '';

        if (perPage) {
            qS = `?$skip=${index}&$top=${perPage}&$count=true`;
        }

        this.http
            .get(`${this.url + qS}`).pipe(
                map((data: any) => data)
            ).subscribe((data) => this.remoteData.next(data));
    }

    public getDataLength(): any {
        return this.http.get(this.url).pipe(
            map((data: any) => data.length)
        );
    }}```After declaring the service, we need to create a component, which will be responsible for the Grid construction and data subscription.```typescriptexport class RemotePagingGridSample implements OnInit, AfterViewInit, OnDestroy {
    public data: Observable<any[]>;
    private _dataLengthSubscriber;

    constructor(private remoteService: RemoteService) {}

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this.grid1.isLoading = false;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }}```}Now we can choose between setting-up our own _custom paging template_ or using the default one that the `igx-paginator` provides. Let's first take a look what is necessary to set-up remote paging by using the _default paging template_.### Remote paging with default templateIf you want to use the _default paging template_ you need to set the Paginator's [`totalRecords`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#totalRecords) property, only then the grid will be able to calculate the _total page number_ based on total remote records. When performing a remote pagination the Paginator will pass to the Grid only the data for the current page, so the grid will not try to paginate the provided data source. That's why we should set Grid's [`pagingMode`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#pagingMode) property to _GridPagingMode.remote_. Also it is necessary to either subscribe to [`pagingDone`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#pagingDone) or [`perPageChange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#perPageChange) events in order to fetch the data from your remote service, it depends on the use case which event will be used.```html<igx-grid #grid1 [data]="data | async" [isLoading]="isLoading" [pagingMode]="mode">
    <igx-column field="ID"></igx-column>
    ...
    <igx-paginator [(page)]="page" [(perPage)]="perPage"  [totalRecords]="totalCount"
        (pagingDone)="paginate($event.current)">
    </igx-paginator></igx-grid>``````typescriptpublic totalCount = 0;public data: Observable<any[]>;public mode = GridPagingMode.remote;public isLoading = true;@ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;private _dataLengthSubscriber;public set perPage(val: number) {
    this._perPage = val;
    this.paginate(0);}public ngOnInit() {
    this.data = this.remoteService.remoteData.asObservable();

    this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data: any) => {
        this.totalCount = data;
        this.grid1.isLoading = false;
    });}public ngAfterViewInit() {
    const skip = this.page * this.perPage;
    this.remoteService.getData(skip, this.perPage);}public paginate(page: number) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;

    this.remoteService.getData(skip, top);}``````typescript
import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { GridPagingMode, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { Observable } from 'rxjs';
import { RemotePagingService } from '../../services/remotePaging.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: 'app-remote-paging-default-template',
    styleUrls: ['./remote-paging-default-template.component.scss'],
    templateUrl: './remote-paging-default-template.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, AsyncPipe]
})
export class RemotePagingDefaultTemplateComponent implements OnInit, AfterViewInit, OnDestroy {
    private remoteService = inject(RemotePagingService);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    @ViewChild('customPager', { read: TemplateRef, static: true }) public remotePager: TemplateRef<any>;
    public totalCount = 0;
    public page = 0;
    public data: Observable<any[]>;
    public mode = GridPagingMode.Remote;
    public isLoading = true;

    private _dataLengthSubscriber;
    private _perPage = 10;

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0);
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();
        this.data.subscribe(() => {
            this.isLoading = false;
        });
        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.grid1.isLoading = true;
        this.remoteService.getData(0, this.grid1.perPage);
        this.remoteService.getDataLength();
    }

    public pagingDone(page) {
        const skip = page.current * this.grid1.perPage;
        this.remoteService.getData(skip, this.grid1.perPage);
    }

    public paginate(page) {
        this.isLoading = true;
        const skip = page * this.grid1.perPage;
        this.remoteService.getData(skip, this.grid1.perPage);
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data | async" width="100%"
        height="580px" [isLoading]="isLoading" [pagingMode]="mode">
        <igx-paginator
            [(page)]="page"
            [(perPage)]="perPage"
            [totalRecords]="totalCount"
            (pagingDone)="paginate($event.current)">
        </igx-paginator>
        <igx-column field="ID"></igx-column>
        <igx-column field="ProductName"></igx-column>
        <igx-column field="QuantityPerUnit"></igx-column>
        <igx-column field="SupplierName"></igx-column>
        <igx-column field="UnitsInStock"></igx-column>
        <igx-column field="Rating"></igx-column>
    </igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}
```### Remote Paging with custom igx-paginator-contentWhen we define a custom paginator content we need to define the content in a way to get the data only for the requested page and to pass the correct **skip** and **top** parameters to the remote service according to the selected page and items [`perPage`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#perPage). We are going to use the `<igx-paginator>` in order to ease our example configuration, along with the [`IgxPageSizeSelectorComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPageSizeSelectorComponent.html) and [`IgxPageNavigationComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPageNavigationComponent.html) that were introduced - `igx-page-size` will add the per page dropdown and label and `igx-page-nav` will add the navigation action buttons and labels.```html<igx-paginator #paginator
    [totalRecords]="totalCount"
    [(page)]="page"
    [(perPage)]="perPage"
    [selectOptions]="selectOptions"
    (pageChange)="paginate($event)"
    (perPageChange)="perPageChange($event)">
    <igx-paginator-content>
     <igx-page-size></igx-page-size>
        [This is my custom content]
     <igx-page-nav></igx-page-nav>
    </igx-paginator-content></igx-paginator>``````typescript@ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;private _perPage = 15;private _dataLengthSubscriber: { unsubscribe: () => void; } | undefined;constructor(private remoteService: RemotePagingService) { }public ngAfterViewInit() {
    this.grid1.isLoading = true;
    this.remoteService.getData(0, this.perPage);}public paginate(page: number) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;

    this.remoteService.getData(skip, top);}public perPageChange(perPage: number) {
    const skip = this.page * perPage;
    const top = perPage;

    this.remoteService.getData(skip, top);}```>[!NOTE]> In order the Remote Paging to be configured properly a `GridPagingMode.Remote` should be set:```html<igx-grid #grid1 [data]="data | async" width="100%" height="580px" [pagingMode]="mode"></igx-grid>...public mode = GridPagingMode.Remote;```The last step will be to declare the paginator content based on your requirements.```html<igx-paginator-content>
    <igx-page-size></igx-page-size>
    [This is my custom content]
    <igx-page-nav></igx-page-nav></igx-paginator-content>```After all the changes above, the following result will be achieved.```typescript
import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { GridPagingMode, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPageNavigationComponent, IgxPageSizeSelectorComponent, IgxPaginatorComponent, IgxPaginatorContentDirective } from 'igniteui-angular/paginator';
import { Observable } from 'rxjs';
import { RemotePagingService } from '../../services/remotePaging.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';
@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: 'app-remote-paging-grid-sample',
    styleUrls: ['./remote-paging-sample.component.scss'],
    templateUrl: './remote-paging-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, AsyncPipe]
})
export class RemotePagingGridSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    private remoteService = inject(RemotePagingService);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public page = 0;
    public totalCount = 0;
    public pages = [];
    public data: Observable<any[]>;
    public selectOptions = [5, 10, 15, 25, 50];
    public mode = GridPagingMode.Remote;
    private _perPage = 15;
    private _dataLengthSubscriber;

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data: any) => {
            this.totalCount = data;
            this.grid1.isLoading = false;
        });
    }

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0);
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.grid1.isLoading = true;
        this.remoteService.getData(0, this.perPage);
    }

    public paginate(page: number) {
        this.page = page;
        const skip = this.page * this.perPage;
        const top = this.perPage;

        this.remoteService.getData(skip, top);
    }

    public perPageChange(perPage: number) {
        const skip = this.page * perPage;
        const top = perPage;

        this.remoteService.getData(skip, top);
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data | async" width="100%" height="580px" [pagingMode]="mode">
        <igx-column field="ID"></igx-column>
        <igx-column field="ProductName"></igx-column>
        <igx-column field="QuantityPerUnit"></igx-column>
        <igx-column field="SupplierName"></igx-column>
        <igx-column field="UnitsInStock"></igx-column>
        <igx-column field="Rating"></igx-column>
        <igx-paginator #paginator
        [totalRecords]="totalCount"
            [(page)]="page"
            [(perPage)]="perPage"
            [selectOptions]="selectOptions"
            (pageChange)="paginate($event)"
            (perPageChange)="perPageChange($event)">
            <igx-paginator-content>
                <igx-page-size></igx-page-size>
                    [This is my custom content]
                <igx-page-nav></igx-page-nav>
            </igx-paginator-content>
        </igx-paginator>
    </igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}
```### Remote Paging with custom paginatorIn some cases you may want to define your own paging behavior and this is when we can take advantage of the Paging template and add our custom logic along with it. We are going to extend the Remote Paging example in order to demonstrate this:```typescript
import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPaginatorComponent, IgxPaginatorContentDirective } from 'igniteui-angular/paginator';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { Observable } from 'rxjs';
import { RemotePagingService } from '../../services/remotePaging.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: 'app-custom-remote-paging-grid-sample',
    styleUrls: ['./custom-remote-paging-sample.component.scss'],
    templateUrl: './custom-remote-paging-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxButtonDirective, RouterLink, AsyncPipe]
})
export class CustomRemotePagingGridSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    private remoteService = inject(RemotePagingService);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

    public page = 0;
    public lastPage = false;
    public firstPage = true;
    public totalPages = 1;
    public totalCount = 0;
    public pages = [];
    public data: Observable<any[]>;

    private visibleElements = 5;
    private _perPage = 10;
    private _dataLengthSubscriber;

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0, true);
    }

    public get shouldShowLastPage() {
        return this.pages[this.pages.length - 1] !== this.totalPages - 1;
    }

    public get shouldShowFirstPage() {
        return this.pages[0] !== 0;
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this.totalPages = Math.ceil(data / this.perPage);
            this.buttonDeselection(this.page, this.totalPages);
            this.grid1.isLoading = false;
            this.setNumberOfPagingItems(this.page, this.totalPages);
        });

    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.grid1.isLoading = true;
        this.remoteService.getData(0, this.perPage);
    }

    public nextPage() {
        this.firstPage = false;
        this.page++;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        this.remoteService.getData(skip, top);
        if (this.page + 1 >= this.totalPages) {
            this.lastPage = true;
        }
        this.setNumberOfPagingItems(this.page, this.totalPages);
    }

    public previousPage() {
        this.lastPage = false;
        this.page--;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        this.remoteService.getData(skip, top);
        if (this.page <= 0) {
            this.firstPage = true;
        }
        this.setNumberOfPagingItems(this.page, this.totalPages);
    }

    public paginate(page: number, recalculate = false) {
        this.page = page;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        if (recalculate) {
            this.totalPages = Math.ceil(this.totalCount / this.perPage);
        }
        this.setNumberOfPagingItems(this.page, this.totalPages);
        this.remoteService.getData(skip, top);
        this.buttonDeselection(this.page, this.totalPages);
    }

    public buttonDeselection(page: number, totalPages: number) {
        if (totalPages === 1) {
            this.lastPage = true;
            this.firstPage = true;
        } else if (page + 1 >= totalPages) {
            this.lastPage = true;
            this.firstPage = false;
        } else if (page !== 0 && page !== totalPages) {
            this.lastPage = false;
            this.firstPage = false;
        } else {
            this.lastPage = false;
            this.firstPage = true;
        }
    }

    public activePage(page) {
        return page === this.page ? 'activePage' : '';
    }

    public setNumberOfPagingItems(currentPage, totalPages) {
        if (currentPage > this.pages[0] && currentPage < this.pages[this.pages.length]) {
            return;
        }
        if (this.pages.length === 0) {
            const lastPage = (currentPage + this.visibleElements) <= totalPages ?
                currentPage + this.visibleElements : totalPages;
            for (let item = 0; item < lastPage; item++) {
                this.pages.push(item);
            }
            return;
        }
        if (currentPage <= this.pages[0]) {
            this.pages = [];
            let firstPage = currentPage - 1 < 0 ? 0 : currentPage - 1;
            firstPage = firstPage > totalPages - this.visibleElements ?
                totalPages - this.visibleElements : firstPage;
            firstPage = firstPage >= 0 ? firstPage : 0;
            const lastPage = (firstPage + this.visibleElements) <= totalPages ?
                firstPage + this.visibleElements : totalPages;
            for (let item = firstPage; item < lastPage; item++) {
                this.pages.push(item);
            }

        } else if (currentPage >= this.pages[this.pages.length - 1]) {
            this.pages = [];
            let firstPage = currentPage > totalPages - this.visibleElements ?
                totalPages - this.visibleElements : currentPage - 1;
            firstPage = firstPage >= 0 ? firstPage : 0;
            const lastPage = (firstPage + this.visibleElements) <= totalPages ?
            firstPage + this.visibleElements : totalPages;
            for (let item = firstPage; item < lastPage; item++) {
                this.pages.push(item);
            }
        }
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data | async" width="100%" height="580px">
    <igx-column field="ID"></igx-column>
    <igx-column field="ProductName"></igx-column>
    <igx-column field="QuantityPerUnit"></igx-column>
    <igx-column field="SupplierName"></igx-column>
    <igx-column field="UnitsInStock"></igx-column>
    <igx-column field="Rating"></igx-column>
    <igx-paginator [perPage]="perPage">
      <igx-paginator-content>
        <div class="fullWidth">
          <div id="numberPager" class="fullWidth">
            <button [disabled]="firstPage" (click)="previousPage()" igxButton="flat">
              PREV
            </button>
            @if (shouldShowFirstPage) {
              <span (click)="paginate(0)">
                <a class="pageNavLinks" [routerLink]="[]">{{1}}</a> <span class="pageNavLinks">...</span>
              </span>
            }
            @for (item of pages; track item) {
              <span (click)="paginate(item)">
                <a class="pageNavLinks {{activePage(item)}}" [routerLink]="[]">{{item + 1}}</a>
              </span>
            }
            @if (shouldShowLastPage) {
              <span (click)="paginate(totalPages - 1)">
                <span class="pageNavLinks">...</span> <a class="pageNavLinks" [routerLink]="[]">{{ totalPages
              }}</a>
            </span>
          }
          <button [disabled]="lastPage" (click)="nextPage()" igxButton="flat">
            NEXT
          </button>
        </div>
      </div>
    </igx-paginator-content>
  </igx-paginator>
</igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

.pageNavLinks {
    text-decoration: none;
    font-size: 10.5pt;
    color: #989898;
}

.activePage {
    font-size: 11.5pt;
    font-weight: bold;
}

.igx-input-group__input {
    display: inline;
}

#numberPager {
    display: flex;
    align-items: center;
    justify-content: center;
}

#numberPager span {
    margin-left: .5rem;
}

.fullWidth {
    width: 100%;
}
```Below you will find the methods that we've defined in order to implement our own `next` and `previous` page actions.```typescript@ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;public ngAfterViewInit() {
    this.grid1.isLoading = true;
    this.remoteService.getData(0, this.perPage);}public nextPage() {
    this.firstPage = false;
    this.page++;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    this.remoteService.getData(skip, top);
    if (this.page + 1 >= this.totalPages) {
        this.lastPage = true;
    }
    this.setNumberOfPagingItems(this.page, this.totalPages);}public previousPage() {
    this.lastPage = false;
    this.page--;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    this.remoteService.getData(skip, top);
    if (this.page <= 0) {
        this.firstPage = true;
    }
    this.setNumberOfPagingItems(this.page, this.totalPages);}public paginate(page: number, recalculate = false) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;
    if (recalculate) {
        this.totalPages = Math.ceil(this.totalCount / this.perPage);
    }
    this.setNumberOfPagingItems(this.page, this.totalPages);
    this.remoteService.getData(skip, top);
    this.buttonDeselection(this.page, this.totalPages);}```### Remote Paging with Batch editingWith the examples so far we clarified how to set up the IgxGrid with remote data. Now, let's focus on enabling batch editing for the grid by following the [Batch Editing topic/guide](batch-editing.md).Before continuing with the sample it is good to clarify the current use case. When pagination is done on the server, the grid contains the data only for the current page and if we add new rows the newly added rows (with Batch Editing) will be concatenated with the current data that the grid contains. Therefore, if the server returns no data for a given page, grid's data source will be consisted only from the newly added rows, which the grid will paginate based on the defined pagination settings (page, perPage).```typescriptpublic ngOnInit() {
    this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
        this.totalCount = data;
        this._recordOnServer = data;
        this._totalPagesOnServer = Math.floor(this.totalCount / this.perPage);
        this.grid1.isLoading = false;
    });}```In order to handle this use case properly, we need to implement some custom logic.First, we have to know the total number of records that are on the server. Given that, we calculate the total number of data pages on the server (see `this._totalPagesOnServer`) and based on its value, we will implement the custom pagination logic.```typescriptpublic paginate(page: number) {
    this.grid1.endEdit(true);
    if (page > this._totalPagesOnServer) {
        if (this.page !== this._totalPagesOnServer) {
            const skipEl = this._totalPagesOnServer * this.perPage;
            this.remoteService.getData(skipEl, this.perPage);
        }
        this.page = page - this._totalPagesOnServer;
        this.page = page;
        return;
    } else {
        this.page = 0;
    }
    this.page = page;
    const skip = this.page * this.perPage;
    this.remoteService.getData(skip, this.perPage);}```As you can see in the **paginate** method, custom pagination logic is performed, based on the `_totalPagesOnServer` value.#### Remote Paging with Batch Editing Demo```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { Transaction } from 'igniteui-angular/core';
import { IgxPaginatorComponent, IgxPaginatorContentDirective } from 'igniteui-angular/paginator';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { Observable } from 'rxjs';
import { RemotePagingWithBatchEditingService } from '../../services/remotePagingWithBatchEditing.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingWithBatchEditingService],
    selector: 'app-remote-paging-batch-editing',
    styleUrls: ['./batch-editing-remote-paging.component.scss'],
    templateUrl: './batch-editing-remote-paging.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxButtonDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxDialogComponent, AsyncPipe]
})
export class RemotePagingBatchEditingComponent implements OnInit, AfterViewInit, OnDestroy {
    private remoteService = inject(RemotePagingWithBatchEditingService);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    @ViewChild(IgxDialogComponent, { static: true }) public dialog: IgxDialogComponent;

    public page = 0;
    public totalCount = 0;
    public data: Observable<any[]>;
    public selectOptions = [5, 10, 15, 25, 50];
    public transactionsData: Transaction[] = [];

    private _perPage = 10;
    private _dataLengthSubscriber;
    private _recordsOnServer = 0;
    private _totalPagesOnServer = 0;

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this._totalPagesOnServer = Math.floor(this._recordsOnServer / this.perPage);
        this.paginate(0);
    }

    public ngOnInit() {
        this.data = this.remoteService.data$;
        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this._recordsOnServer = data;
            this._totalPagesOnServer = Math.floor(this.totalCount / this.perPage);
        });
        this.remoteService.getData(0, this.perPage).subscribe(() => {
            this.grid1.isLoading = false;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.grid1.isLoading = true;
    }

    public paginate(page: number) {
        this.grid1.isLoading = true;
        this.grid1.endEdit(true);
        if (page > this._totalPagesOnServer) {
            if (this.page !== this._totalPagesOnServer) {
                const skipEl = this._totalPagesOnServer * this.perPage;
                this.remoteService.getData(skipEl, skipEl + this.perPage);
            }
            this.grid1.isLoading = false;
            this.grid1.paginator.page = page - this._totalPagesOnServer;
            this.page = page;
            return;
        } else if (this.grid1.paginator) {
            const newPage = page - this._totalPagesOnServer > -1 ? page - this._totalPagesOnServer : 0;
            this.grid1.paginator.page = newPage;
        }
        const skip = page * this.perPage;
        this.remoteService.getData(skip, skip + this.perPage);
        this.page = page;
    }

    public addRow() {
        this.totalCount++;
        const newID = this.generateRandomInteger(this.totalCount, this.totalCount * 100);
        this.grid1.addRow({
            ID: newID, ProductName: 'Product Name', QuantityPerUnit: 'Quantity per Unit',
            SupplierName: 'Supplier Name', UnitsInStock: 1, Rating: 1
        });
    }

    public deleteRow(rowID) {
        const isTransaction = !this.grid1.data.some(d => d.ID === rowID);
        if (isTransaction) {
            this.totalCount--;
        }
        this.grid1.deleteRow(rowID);
        if (isTransaction && this.grid1.dataView.length === 1) {
            this.paginate(this.page - 1);
        }
    }

    public generateRandomInteger(start: number, end: number) {
        return Math.floor(Math.random() * (end - start + 1)) + start;
    }

    public undo() {
        this.grid1.transactions.undo();
        this.computeTotalCount();
        this.preventDisplayingEmptyPages();
    }

    public redo() {
        this.grid1.transactions.redo();
        this.computeTotalCount();
        this.preventDisplayingEmptyPages();
    }

    public openCommitDialog() {
        this.transactionsData = this.grid1.transactions.getAggregatedChanges(true);
        this.dialog.open();
    }

    public commit() {
        this.grid1.isLoading = true;
        this.dialog.close();
        const aggregatedChanges = this.grid1.transactions.getAggregatedChanges(true);
        this.remoteService.processBatch(aggregatedChanges).subscribe({
            next: (count: number) => {
                this.totalCount = count;
                this._recordsOnServer = count;
                this.grid1.transactions.commit(this.grid1.data);
                this.preventDisplayingEmptyPages();
            },
            error: err => {
                console.log(err);
            },
            complete: () => {
                this.grid1.isLoading = false;
            }
        });
    }

    public cancel() {
        this.dialog.close();
    }

    public discard() {
        this.grid1.transactions.clear();
        this.totalCount = this._recordsOnServer;
        this.preventDisplayingEmptyPages();
        this.dialog.close();
    }

    public get hasTransactions(): boolean {
        return this.grid1.transactions.getAggregatedChanges(false).length > 0;
    }

    public stateFormatter(value: string) {
        return JSON.stringify(value);
    }

    public typeFormatter(value: string) {
        return value.toUpperCase();
    }

    public classFromType(type: string): string {
        return `transaction--${type.toLowerCase()}`;
    }

    private preventDisplayingEmptyPages() {
        this._totalPagesOnServer = Math.floor(this._recordsOnServer / this.perPage);

        const totalPages = Math.floor(this.totalCount / this.perPage);
        if (this.page > 0 &&
            (this.page > totalPages ||
                (this.page === totalPages &&
                    this.totalCount % this.perPage === 0))) {
            this.paginate(totalPages - 1);
        }
    }

    private computeTotalCount() {
        this.totalCount = this._recordsOnServer + this.grid1.transactions.getAggregatedChanges(true).filter(rec => rec.type === 'add').length;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 [batchEditing]="true" [data]="data | async" width="100%" height="580px"
        [rowEditable]="true" [primaryKey]="'ID'">
        <igx-paginator [perPage]="perPage">
            <igx-paginator-content>
                <igx-paginator #paginator [totalRecords]="totalCount" [page]="page" [(perPage)]="perPage"
                    [selectOptions]="selectOptions"
                    (pageChange)="paginate($event)">
                </igx-paginator>
            </igx-paginator-content>
        </igx-paginator>
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <button igxButton (click)="addRow()">Add Row</button>
                <button igxButton [disabled]="!grid1.transactions.canUndo" (click)="undo()">Undo</button>
                <button igxButton [disabled]="!grid1.transactions.canRedo" (click)="redo()">Redo</button>
                <button igxButton [disabled]="!hasTransactions" (click)="openCommitDialog()">Commit</button>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
        <igx-column [pinned]="true" [filterable]="false" [editable]="false">
            <ng-template igxCell let-cell="cell" let-val>
                <button igxButton (click)="deleteRow(cell.id.rowID)" [disabled]="cell.row.deleted">Delete</button>
            </ng-template>
        </igx-column>
        <igx-column field="ID" [editable]="false"></igx-column>
        <igx-column field="ProductName"></igx-column>
        <igx-column field="QuantityPerUnit"></igx-column>
        <igx-column field="SupplierName"></igx-column>
        <igx-column field="UnitsInStock"></igx-column>
        <igx-column field="Rating"></igx-column>
    </igx-grid>
    <igx-dialog title="Submit the following transactions?">
        <igx-grid [igxPreventDocumentScroll]="true" #dialogGrid [data]="transactionsData" [rowHeight]="64" [primaryKey]="'id'"
            width="600px" height="300px" [emptyGridMessage]="'No available transactions'">
            <igx-column field="id" header="ID" [dataType]="'string'" width="100px"></igx-column>
            <igx-column field="type" header="Type" width="150px" [sortable]="true">
            </igx-column>
            <igx-column field="newValue" header="Value" width="900px">
                <ng-template igxCell let-cell="cell" let-val>
                    <span class="transaction-log">{{ stateFormatter(val) }}</span>
                </ng-template>
            </igx-column>
        </igx-grid>
        <div class="buttons-wrapper">
            <button igxButton (click)="commit()">Commit</button>
            <button igxButton (click)="discard()">Discard</button>
            <button igxButton (click)="cancel()">Cancel</button>
        </div>
    </igx-dialog>
</div>
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}
.buttons-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
}
.buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 0;
}
.transaction--update, .transaction--delete, .transaction--add {
    font-weight: 600;
}
.transaction--add {
    color: #6b3;
}
.transaction--update {
    color: #4a71b9;
}
.transaction--delete {
    color: #ee4920;
}
.transaction-log {
    word-wrap: none;
}

igx-paginator {
    igx-paginator {
        padding: 0 !important;
    }
}
```## Known Issues and Limitations- When the grid has no `primaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
  - Row Selection
  - Row Expand/collapse
  - Row Editing
  - Row Pinning- In remote data scenarios, when the grid has a `primaryKey` set, [`rowSelectionChanging.oldSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/IRowSelectionEventArgs.html#oldSelection) event argument will not contain the full row data object for the rows that are currently out of the data view. In this case, `rowSelectionChanging.oldSelection` object will contain only one property, which is the `primaryKey` field. For the rest of the rows, currently in the data view, `rowSelectionChanging.oldSelection` will contain the whole row data.## API References<div class="divider--half"></div>- [IgxPaginatorComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html)- [IgxGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)## Additional Resources<div class="divider--half"></div>- [Paging](paging.md)- [Grid overview](grid.md)- [Virtualization and Performance](virtualization.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Selection](selection.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
