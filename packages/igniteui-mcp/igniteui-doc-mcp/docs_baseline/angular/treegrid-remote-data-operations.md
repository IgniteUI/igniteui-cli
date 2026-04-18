---
_tocName: Remote Data Operations
_premium: true
---
---title: Angular Tree Remote Data Operations - Ignite UI for Angular_description: Start using Angular remote data operations like remote filtering, remote sorting, and remote scrolling to load data from a server with Ignite UI for Angular._keywords: angular remote data operations, ignite ui for angular, infragistics_license: commercial_canonicalLink: grid/remote-data-operations---# Angular Tree Grid Remote Data OperationsThe Ignite UI for Angular Tree Grid supports remote data operations such as remote virtualization, remote sorting, remote filtering and others. This allows the developer to perform these tasks on a server, retrieve the data that is produced and display it in the Tree Grid.## Angular Tree Grid Remote Data Operations Overview Example```typescript
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { NoopFilteringStrategy } from 'igniteui-angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { RemoteFilteringService } from '../services/remoteFilteringService';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';

const DEBOUNCE_TIME = 300;

@Component({
    providers: [RemoteFilteringService],
    selector: 'app-tree-grid-remote-filtering-sample',
    styleUrls: ['./tree-grid-remote-filtering-sample.component.scss'],
    templateUrl: './tree-grid-remote-filtering-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent, AsyncPipe]
})
export class TreeGridRemoteFilteringSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    private _remoteService = inject(RemoteFilteringService);
    private _cdr = inject(ChangeDetectorRef);

    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public remoteData: Observable<any[]>;
    public noopFilterStrategy = NoopFilteringStrategy.instance();

    private destroy$ = new Subject<void>();

    public ngOnInit() {
        this.remoteData = this._remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.processData();
        this._cdr.detectChanges();

        this.treeGrid.filteringExpressionsTreeChange.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData();
        });
    }

    public processData() {
        this.treeGrid.isLoading = true;

        const filteringExpr = this.treeGrid.filteringExpressionsTree;

        this._remoteService.getData(filteringExpr, () => {
            this.treeGrid.isLoading = false;
        });
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="remoteData | async" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%" height="500px"
                   [filterStrategy]="noopFilterStrategy"
                   [allowFiltering]="true">
        <igx-column [field]="'Name'" dataType="string"></igx-column>
        <igx-column [field]="'Title'" dataType="string"></igx-column>
        <igx-column [field]="'Age'" dataType="number"></igx-column>
        <igx-column [field]="'HireDate'" dataType="date"></igx-column>
        <igx-column [field]="'OnPTO'" dataType="boolean"width="130px">
            <ng-template igxCell let-cell="cell" let-val>
                <igx-icon [style.color]="cell.row.data.OnPTO? 'red': 'green'">account_circle</igx-icon>
            </ng-template>
        </igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 16px;
}
```<div class="divider--half"></div>By default, the Tree Grid uses its own logic for performing data operations.You can perform these tasks remotely and feed the resulting data to the Tree Grid by taking advantage of certain inputs and events, which are exposed by the Tree Grid.### Remote FilteringTo provide remote filtering, you need to subscribe to the [`filteringExpressionsTreeChange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filteringExpressionsTreeChange) output so that you make the appropriate request based on the arguments received. Let's use a flat collection as a data source for our Tree Grid by providing a [`primaryKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#primaryKey) and a [`foreignKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#foreignKey).We will also take advantage of the **rxjs** `debounceTime` function, which emits a value from the source Observable only after a particular time span has passed without another source emission. This way the remote operation will be triggered only when the specified amount of time has passed without the user interrupting it.```typescriptconst DEBOUNCE_TIME = 300;...public ngAfterViewInit() {
    ...
    this.treeGrid.filteringExpressionsTreeChange.pipe(
        debounceTime(DEBOUNCE_TIME),
        takeUntil(this.destroy$)
    ).subscribe(() => {
        this.processData();
    });}```When remote filtering is provided, usually we do not need the built-in filtering of the Tree Grid. We can disable it by setting the [`filterStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#filterStrategy) input of the Tree Grid to the `NoopFilteringStrategy` instance.```html<!-- tree-grid-remote-filtering-sample.html --><igx-tree-grid #treeGrid [data]="remoteData | async" primaryKey="ID" foreignKey="ParentID"
               [autoGenerate]="false"
               [filterStrategy]="noopFilterStrategy"
               [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string"></igx-column>
    <igx-column [field]="'Title'" dataType="string"></igx-column>
    <igx-column [field]="'Age'" dataType="number"></igx-column></igx-tree-grid>``````typescript// tree-grid-remote-filtering-sample.tspublic noopFilterStrategy = NoopFilteringStrategy.instance();public processData() {
    this.treeGrid.isLoading = true;

    const filteringExpr = this.treeGrid.filteringExpressionsTree;

    this._remoteService.getData(filteringExpr, () => {
        this.treeGrid.isLoading = false;
    });}```The remote filtering will have to be performed over the flat collection directly. We will also have to include all the parents for any record that matches the filtering condition regardless of whether or not the parents match the filtering (we do this to keep the hierarchy intact). The result can be seen below:>[!NOTE]>When remote data is requested, the filtering operation is case-sensitive.### Remote Filtering Demo<!-- markdownlint-disable-next-line MD051 -->You can see the result of the code from above at the beginning of this article in the [Demo](#angular-tree-grid-remote-data-operations-overview-example) section.## Unique Column Values StrategyThe list items inside the Excel Style Filtering dialog represent the unique values for the respective column. The Tree Grid generates these values based on its data source by default. In case of remote filtering, the grid data does not contain all the data from the server. In order to provide the unique values manually and load them on demand, we can take advantage of the Tree Grid's [`uniqueColumnValuesStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#uniqueColumnValuesStrategy) input. This input is actually a method that provides three arguments:- **column**  - The respective column instance.- **filteringExpressionsTree** - The filtering expressions tree, which is reduced based on the respective column.- **done** - Callback that should be called with the newly generated column values when they are retrieved from the server.The developer can manually generate the necessary unique column values based on the information, that is provided by the **column** and the **filteringExpressionsTree** arguments and then invoke the **done** callback.> [!NOTE]> When the [`uniqueColumnValuesStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#uniqueColumnValuesStrategy) input is provided, the default unique values generating process in the excel style filtering will not be used.```html<igx-tree-grid #treeGrid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...</igx-tree-grid>``````typescriptpublic columnValuesStrategy = (column: ColumnType,
                               columnExprTree: IFilteringExpressionsTree,
                               done: (uniqueValues: any[]) => void) => {
    // Get specific column data.
    this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));}```### Unique Column Values Strategy Demo```typescript
import { Component, OnInit, inject } from '@angular/core';
import { IFilteringExpressionsTree } from 'igniteui-angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { RemoteValuesService } from './remoteValues.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-excel-style-filtering-load-on-demand',
    styleUrls: ['./tree-grid-excel-style-filtering-load-on-demand.component.scss'],
    templateUrl: './tree-grid-excel-style-filtering-load-on-demand.component.html',
    providers: [RemoteValuesService],
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent]
})
export class TreeGridExcelStyleFilteringLoadOnDemandComponent implements OnInit {
    private remoteValuesService = inject(RemoteValuesService);


    public data: any[];

    public ngOnInit() {
        this.data = this.remoteValuesService.getRecordsData();
    }

    public columnValuesStrategy = (column: IgxColumnComponent,
                                   columnExprTree: IFilteringExpressionsTree,
                                   done: (uniqueValues: any[]) => void) => {
        // Get specific column data.
        this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));
    };
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treegrid1 [data]="data" height="750px" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false"
                   [allowFiltering]="true" [filterMode]="'excelStyleFilter'"
                   [uniqueColumnValuesStrategy]="columnValuesStrategy" [moving]="true">
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column [field]="'Name'" dataType="string"></igx-column>
        <igx-column [field]="'Title'" dataType="string"></igx-column>
        <igx-column [field]="'Age'" dataType="number"></igx-column>
        <igx-column [field]="'HireDate'" dataType="date"></igx-column>
        <igx-column [field]="'OnPTO'" dataType="boolean" width="130px">
            <ng-template igxCell let-cell="cell" let-val>
                <igx-icon [style.color]="cell.row.data.OnPTO? 'red': 'green'">account_circle</igx-icon>
            </ng-template>
        </igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-medium);
    margin: 16px;
}
```In order to provide a custom loading template for the excel style filtering, we can use the `igxExcelStyleLoading` directive:```html<igx-tree-grid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
    <ng-template igxExcelStyleLoading>
        Loading ...
    </ng-template></igx-tree-grid>```<div class="divider--half"></div>## Remote Paging@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {The paging feature can operate with remote data. In order to demonstrate this let's first declare our service that will be responsible for data fetching. We will need the count of all data items in order to calculate the page count. This logic will be added to our service.```typescript@Injectable()export class RemotePagingService {
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
    }}```After declaring the service, we need to create a component, which will be responsible for the Tree Grid construction and data subscription.}In this sample we will demonstrate how to display a certain number of root records per page no matter how many child records they have. In order to cancel the built-in Tree Grid paging algorithm, which displays a certain number of records no matter their level (root or child), we have to set the [`perPage`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#perPage) property to `Number.MAX_SAFE_INTEGER`.```html<igx-tree-grid #treeGrid ...>
        <igx-paginator [perPage]="maxPerPage">
        </igx-paginator>...``````typescriptpublic maxPerPage = Number.MAX_SAFE_INTEGER;```Now we can choose between setting-up our own _custom paging template_ or using the default one that the `igx-paginator` provides. Let's first take a look what is necessary to set-up remote paging by using the _default paging template_.### Remote paging with default templateIf you want to use the _default paging template_ you need to set the Paginator's [`totalRecords`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#totalRecords) property, only then the grid will be able to calculate the _total page number_ based on total remote records. When performing a remote pagination the Paginator will pass to the Grid only the data for the current page, so the grid will not try to paginate the provided data source. That's why we should set Grid's [`pagingMode`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#pagingMode) property to _GridPagingMode.remote_. Also it is necessary to either subscribe to [`pagingDone`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#pagingDone) or [`perPageChange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#perPageChange) events in order to fetch the data from your remote service, it depends on the use case which event will be used.```html<igx-tree-grid #treeGrid [data]="data | async" childDataKey="Content" [pagingMode]="mode">
    <igx-column field="Name"></igx-column>
    ...
    <igx-paginator [(page)]="page" [(perPage)]="perPage" [totalRecords]="totalCount"
        (pagingDone)="paginate($event.current)">
    </igx-paginator></igx-tree-grid>``````typescriptpublic totalCount = 0;public data: Observable<any[]>;public mode = GridPagingMode.remote;public isLoading = true;@ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;private _dataLengthSubscriber;public set perPage(val: number) {
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
import { formatNumber, AsyncPipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { GridPagingMode, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { Observable } from 'rxjs';
import { RemotePagingService } from './remotePagingService';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: 'app-tree-grid-remote-paging-default-template',
    styleUrls: ['./tree-grid-remote-paging-default-template.component.scss'],
    templateUrl: './tree-grid-remote-paging-default-template.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent, AsyncPipe]
})
export class TreeGridRemotePagingDefaultTemplateComponent implements OnInit, AfterViewInit, OnDestroy {
    private remoteService = inject(RemotePagingService);
    private cd = inject(ChangeDetectorRef);


    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;

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
            this.cd.detectChanges();
        });
        this._dataLengthSubscriber = this.remoteService.dataLength.subscribe((data) => {
            this.totalCount = data;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.remoteService.getData(0, this.treeGrid.perPage);
        this.remoteService.getDataLength();
    }

    public paginate(page) {
        this.isLoading = true;
        const skip = page * this.treeGrid.perPage;
        this.remoteService.getData(skip, this.treeGrid.perPage);
    }

    public formatSize(value: number) {
        return formatNumber(value, 'en') + ' KB';
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data | async" childDataKey="Content" [expansionDepth]="0" width="100%"
    height="540px" [isLoading]="isLoading" [pagingMode]="mode">
    <igx-paginator
      [totalRecords]="totalCount"
      (pagingDone)="paginate($event.current)"
      [(page)]="page"
      [(perPage)]="perPage">
    </igx-paginator>
    <igx-column field="Name">
      <ng-template igxCell let-cell="cell" let-val>
        @if (cell.row.data.Type === 'File folder') {
          <igx-icon family="material" class="typeIcon">folder
          </igx-icon>
        }
        @if (cell.row.data.Type === 'JPG File') {
          <igx-icon family="material" class="typeIcon">photo</igx-icon>
        }
        {{val}}
      </ng-template>
    </igx-column>
    <igx-column field="Type"></igx-column>
    <igx-column field="Size" dataType="number" [formatter]="formatSize"></igx-column>
  </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 16px;
    padding-top: 10px;
}

.typeIcon {
    margin-right: 0.5rem;
}
```<div class="divider--half"></div>### Remote Paging with custom igx-paginator-contentWhen we define a custom paginator content we need to define the content in a way to get the data only for the requested page and to pass the correct **skip** and **top** parameters to the remote service according to the selected page and items [`perPage`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#perPage). We are going to use the `<igx-paginator>` in order to ease our example configuration, along with the [`IgxPageSizeSelectorComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPageSizeSelectorComponent.html) and [`IgxPageNavigationComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPageNavigationComponent.html) that were introduced - `igx-page-size` will add the per page dropdown and label and `igx-page-nav` will add the navigation action buttons and labels.```html<igx-paginator #paginator
    [totalRecords]="totalCount"
    [(perPage)]="perPage"
    [selectOptions]="selectOptions"
    (pageChange)="paginate($event)">
    <igx-paginator-content>
        <igx-page-size></igx-page-size>
        [This is my custom content]
        <igx-page-nav></igx-page-nav>
    </igx-paginator-content></igx-paginator>``````typescriptpublic paginate(page: number) {
    this.page = page;
    const skip = this.page * this.perPage;
    const top = this.perPage;

    this.remoteService.getData(skip, top);}```>[!NOTE]> In order the Remote Paging to be configured properly a `GridPagingMode.Remote` should be set:```html<igx-tree-grid #treeGrid [data]="data | async" childDataKey="Content"
        expansionDepth="0" width="100%" height="540px" [pagingMode]="mode"></igx-tree-grid>...public mode = GridPagingMode.Remote;```The last step will be to declare the paginator content based on your requirements.```html<igx-paginator-content>
    <igx-page-size></igx-page-size>
    [This is my custom content]
    <igx-page-nav></igx-page-nav></igx-paginator-content>```After all the changes above, the following result will be achieved.```typescript
import { formatNumber, AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { GridPagingMode, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPageNavigationComponent, IgxPageSizeSelectorComponent, IgxPaginatorComponent, IgxPaginatorContentDirective } from 'igniteui-angular/paginator';
import { Observable } from 'rxjs';
import { RemotePagingService } from './remotePagingService';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: 'app-tree-grid-remote-paging-grid-sample',
    styleUrls: ['./tree-grid-remote-paging-sample.component.scss'],
    templateUrl: './tree-grid-remote-paging-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, AsyncPipe]
})
export class TreeGridRemotePagingSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    private remoteService = inject(RemotePagingService);


    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;

    public page = 0;
    public lastPage = false;
    public firstPage = true;
    public totalPages = 1;
    public totalCount = 0;
    public data: Observable<any[]>;
    public selectOptions = [5, 10, 25, 50];
    public mode = GridPagingMode.Remote;
    private _perPage = 10;
    private _dataLengthSubscriber;

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0);
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.dataLength.subscribe((data) => {
            this.totalCount = data;
            this.totalPages = Math.ceil(data / this.perPage);
            this.treeGrid.isLoading = false;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.treeGrid.isLoading = true;

        this.remoteService.getData(0, this.perPage);
        this.remoteService.getDataLength();
    }

    public paginate(page: number) {
        this.page = page;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        this.remoteService.getData(skip, top);
    }

    public formatSize(value: number) {
        return formatNumber(value, 'en') + ' KB';
    }
}
```
```html
<div class="grid__wrapper">
  <igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid [data]="data | async" childDataKey="Content"
    [expansionDepth]="0" width="100%" height="540px" [pagingMode]="mode">
    <igx-column field="Name">
      <ng-template igxCell let-cell="cell" let-val>
        @if (cell.row.data.Type === 'File folder') {
          <igx-icon family="material" class="typeIcon">folder
          </igx-icon>
        }
        @if (cell.row.data.Type === 'JPG File') {
          <igx-icon family="material" class="typeIcon">photo</igx-icon>
        }
        {{val}}
      </ng-template>
    </igx-column>
    <igx-column field="Type"></igx-column>
    <igx-column field="Size" dataType="number" [formatter]="formatSize"></igx-column>
    <igx-paginator #paginator
      [totalRecords]="totalCount"
      [(perPage)]="perPage"
      [selectOptions]="selectOptions"
      (pageChange)="paginate($event)">
      <igx-paginator-content>
        <igx-page-size></igx-page-size>
        [This is my custom content]
        <igx-page-nav></igx-page-nav>
      </igx-paginator-content>
    </igx-paginator>
  </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 0 16px;
    padding-top: 10px;
}

.typeIcon {
    margin-right: 0.5rem;
}
```<div class="divider--half"></div>## Known Issues and Limitations- When the grid has no `primaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
  - Row Selection
  - Row Expand/collapse
  - Row Editing
  - Row Pinning- In remote data scenarios, when the grid has a `primaryKey` set, [`rowSelectionChanging.oldSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/IRowSelectionEventArgs.html#oldSelection) event argument will not contain the full row data object for the rows that are currently out of the data view. In this case, `rowSelectionChanging.oldSelection` object will contain only one property, which is the `primaryKey` field. For the rest of the rows, currently in the data view, `rowSelectionChanging.oldSelection` will contain the whole row data.## API References<div class="divider--half"></div>- [IgxPaginatorComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html)- [IgxTreeGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)## Additional Resources<div class="divider--half"></div>- [Paging](paging.md)- [Tree Grid overview](tree-grid.md)- [Virtualization and Performance](virtualization.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Selection](selection.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
