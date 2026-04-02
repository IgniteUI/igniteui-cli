---
_tocName: Remote Data Operations
_premium: true
---
---title: Angular Hierarchical Grid Remote Data Operations - Ignite UI for Angular_description: Start using Angular remote data operations like remote filtering, remote sorting, and remote scrolling to load data from a server with Ignite UI for Angular._keywords: angular remote data operations, ignite ui for angular, infragistics_license: commercial_canonicalLink: grid/remote-data-operations---# Angular Hierarchical Grid Remote Data OperationsThe Ignite UI for Angular Hierarchical Grid supports remote data operations such as remote virtualization, remote sorting, remote filtering and others. This allows the developer to perform these tasks on a server, retrieve the data that is produced and display it in the Hierarchical Grid.




 <!-- TODO -->By default, the Hierarchical Grid uses its own logic for performing data operations.You can perform these tasks remotely and feed the resulting data to the Hierarchical Grid by taking advantage of certain inputs and events, which are exposed by the Hierarchical Grid.




 <!-- TODO -->## Unique Column Values StrategyThe list items inside the Excel Style Filtering dialog represent the unique values for the respective column. The Hierarchical Grid generates these values based on its data source by default. In case of remote filtering, the grid data does not contain all the data from the server. In order to provide the unique values manually and load them on demand, we can take advantage of the Hierarchical Grid's [`uniqueColumnValuesStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#uniqueColumnValuesStrategy) input. This input is actually a method that provides three arguments:- **column**  - The respective column instance.- **filteringExpressionsTree** - The filtering expressions tree, which is reduced based on the respective column.- **done** - Callback that should be called with the newly generated column values when they are retrieved from the server.The developer can manually generate the necessary unique column values based on the information, that is provided by the **column** and the **filteringExpressionsTree** arguments and then invoke the **done** callback.> [!NOTE]> When the [`uniqueColumnValuesStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#uniqueColumnValuesStrategy) input is provided, the default unique values generating process in the excel style filtering will not be used.```html<igx-hierarchical-grid #hierarchicalGrid [primaryKey]="'Artist'" [data]="data" [filterMode]="'excelStyleFilter'"
                       [uniqueColumnValuesStrategy]="singersColumnValuesStrategy">
    ...
    <igx-row-island [primaryKey]="'Album'" [allowFiltering]="true" [filterMode]="'excelStyleFilter'"
                    [uniqueColumnValuesStrategy]="albumsColumnValuesStrategy">
        ...
    </igx-row-island></igx-hierarchical-grid>``````typescriptpublic singersColumnValuesStrategy = (column: ColumnType,
                                      columnExprTree: IFilteringExpressionsTree,
                                      done: (uniqueValues: any[]) => void) => {// Get specific column data for the singers.this.remoteValuesService.getColumnData(
    null, 'Singers', column, columnExprTree, uniqueValues => done(uniqueValues));}public albumsColumnValuesStrategy = (column: ColumnType,
                                     columnExprTree: IFilteringExpressionsTree,
                                     done: (uniqueValues: any[]) => void) => {// Get specific column data for the albums of a specific singer.const parentRowId = (column.grid as any).foreignKey;this.remoteValuesService.getColumnData(
    parentRowId, 'Albums', column, columnExprTree, uniqueValues => done(uniqueValues));}```### Unique Column Values Strategy Demo```typescript
import { Component, OnInit, inject } from '@angular/core';
import { IFilteringExpressionsTree } from 'igniteui-angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { RemoteValuesService } from '../../services/remoteValues.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-load-on-demand',
    templateUrl: './hierarchical-grid-excel-style-filtering-load-on-demand.component.html',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-load-on-demand.component.scss'],
    providers: [RemoteValuesService],
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})
export class HierarchicalGridExcelStyleFilteringLoadOnDemandComponent implements OnInit {
    private remoteValuesService = inject(RemoteValuesService);


    public localdata: any[];

    public singersColumnValuesStrategy = (column: IgxColumnComponent,
                                          columnExprTree: IFilteringExpressionsTree,
                                          done: (uniqueValues: any[]) => void) => {
        // Get specific column data for the singers.
        this.remoteValuesService.getColumnData(
            null, 'Singers', column, columnExprTree, uniqueValues => done(uniqueValues));
    };

    public albumsColumnValuesStrategy = (column: IgxColumnComponent,
                                         columnExprTree: IFilteringExpressionsTree,
                                         done: (uniqueValues: any[]) => void) => {
    // Get specific column data for the albums of a specific singer.
    const parentRowId = (column.grid as any).foreignKey;
    this.remoteValuesService.getColumnData(
        parentRowId, 'Albums', column, columnExprTree, uniqueValues => done(uniqueValues));
    };

    public ngOnInit() {
        this.localdata = this.remoteValuesService.getSingersData();
    }
}
```
```html
<div class="wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid [primaryKey]="'Artist'" [moving]="true" [data]="localdata" height="750px" [autoGenerate]="false"
                           [allowFiltering]="true" [filterMode]="'excelStyleFilter'"
                           [uniqueColumnValuesStrategy]="singersColumnValuesStrategy">
        <igx-grid-toolbar>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Photo" [filterable]="false">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Artist" [sortable]="true"></igx-column>
        <igx-column field="Debut" [sortable]="true" [dataType]="'number'"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [dataType]="'number'" [sortable]="true"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [dataType]="'number'" [sortable]="true"></igx-column>
        <igx-row-island [height]="null" [key]="'Albums'" [primaryKey]="'Album'" [autoGenerate]="false" [allowFiltering]="true" [filterMode]="'excelStyleFilter'"
                        [uniqueColumnValuesStrategy]="albumsColumnValuesStrategy" [moving]="true">
            <igx-column field="Album" [sortable]="true"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [sortable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [sortable]="true" [dataType]="'number'"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [sortable]="true" [dataType]="'number'"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [primaryKey]="'Title'" [autoGenerate]="false" >
                    <igx-column field="Number" header="No."></igx-column>
                    <igx-column field="Title"></igx-column>
                    <igx-column field="Released" dataType="date"></igx-column>
                    <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
.wrapper {
    --ig-size: var(--ig-size-medium);
    margin: 16px;
}

.photo {
    vertical-align: middle;
    max-height: 40px;
}
.cell__inner {
    margin: 1px auto 1px auto;
}
```In order to provide a custom loading template for the excel style filtering, we can use the `igxExcelStyleLoading` directive:```html<igx-hierarchical-grid [data]="data" [filterMode]="'excelStyleFilter'" [uniqueColumnValuesStrategy]="columnValuesStrategy">
    ...
    <ng-template igxExcelStyleLoading>
        Loading ...
    </ng-template></igx-hierarchical-grid>```<div class="divider--half"></div>## Remote Paging@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {The paging feature can operate with remote data. In order to demonstrate this let's first declare our service that will be responsible for data fetching. We will need the count of all data items in order to calculate the page count. This logic will be added to our service.```typescript@Injectable()export class RemotePagingService {
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
    }}```After declaring the service, we need to create a component, which will be responsible for the Hierarchical Grid construction and data subscription.```typescriptexport class HGridRemotePagingSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    public data: BehaviorSubject<any> = new BehaviorSubject([]);
    private _dataLengthSubscriber;

    constructor(private remoteService: RemotePagingService) {}

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
    }}```}Now we can choose between setting-up our own _custom paging template_ or using the default one that the `igx-paginator` provides. Let's first take a look what is necessary to set-up remote paging by using the _default paging template_.### Remote paging with default templateIf you want to use the _default paging template_ you need to set the Paginator's [`totalRecords`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#totalRecords) property, only then the grid will be able to calculate the _total page number_ based on total remote records. When performing a remote pagination the Paginator will pass to the Grid only the data for the current page, so the grid will not try to paginate the provided data source. That's why we should set Grid's [`pagingMode`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#pagingMode) property to _GridPagingMode.remote_. Also it is necessary to either subscribe to [`pagingDone`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#pagingDone) or [`perPageChange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#perPageChange) events in order to fetch the data from your remote service, it depends on the use case which event will be used.```html<igx-hierarchical-grid #hierarchicalGrid [primaryKey]="'CustomerID'" [pagingMode]="mode">
    <igx-column field="CustomerID"></igx-column>
    ...
    <igx-paginator [(page)]="page" [(perPage)]="perPage" [totalRecords]="totalCount"
        (pagingDone)="paginate($event.current)" (perPageChange)="getFirstPage()">
    </igx-paginator></igx-hierarchical-grid>``````typescriptpublic totalCount = 0;public data: Observable<any[]>;public mode = GridPagingMode.remote;public isLoading = true;@ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;private _dataLengthSubscriber;public set perPage(val: number) {
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
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { GridPagingMode, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IGridCreatedEventArgs, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxPaginatorComponent, IgxPaginatorDirective } from 'igniteui-angular/paginator';
import { RemotePagingService } from './remotePagingService';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    providers: [RemotePagingService],
    selector: 'app-hierarchical-grid-remote-paging-default-template',
    styleUrls: ['./hierarchical-grid-remote-paging-default-template.component.scss'],
    templateUrl: 'hierarchical-grid-remote-paging-default-template.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxRowIslandComponent, IgxPaginatorDirective]
})

export class HGridRemotePagingDefaultTemplateComponent implements OnInit, AfterViewInit, OnDestroy {
    private remoteService = inject(RemotePagingService);

    @ViewChild('hierarchicalGrid', { static: true }) public hierarchicalGrid: IgxHierarchicalGridComponent;
    public totalCount = 0;
    public mode = GridPagingMode.Remote;
    private _dataLengthSubscriber;

    public ngOnInit(): void {
        this._dataLengthSubscriber = this.remoteService.getDataLength(
            { parentID: null, rootLevel: true, key: 'Customers' }).subscribe((length) => {
                this.totalCount = length;
            });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.hierarchicalGrid.isLoading = true;
        this.remoteService.getData(
            { parentID: null, rootLevel: true, key: 'Customers' }, this.hierarchicalGrid.perPage)
            .subscribe((data) => {
                this.hierarchicalGrid.isLoading = false;
                this.hierarchicalGrid.data = data;
            },
                (error) => {
                    this.hierarchicalGrid.emptyGridMessage = error.message;
                    this.hierarchicalGrid.isLoading = false;
                    this.hierarchicalGrid.cdr.detectChanges();
                }
            );
    }

    public dateFormatter(val: string) {
        return new Intl.DateTimeFormat('en-US').format(new Date(val));
    }

    public gridCreated(event: IGridCreatedEventArgs, _foreignKey: string) {
        const dataState = {
            foreignKey: _foreignKey,
            key: event.owner.key,
            parentID: event.parentID,
            rootLevel: false
        };
        event.grid.isLoading = true;
        this.remoteService.getData(dataState).subscribe(
            (data) => {
                event.grid.isLoading = false;
                event.grid.data = data;
                event.grid.cdr.detectChanges();
            },
            (error) => {
                event.grid.emptyGridMessage = error.message;
                event.grid.isLoading = false;
                event.grid.cdr.detectChanges();
            }
        );
    }

    public pagingDone(page) {
        const skip = page.current * this.hierarchicalGrid.perPage;

        this.remoteService.getData(
            { parentID: null, rootLevel: true, key: 'Customers' }, skip, this.hierarchicalGrid.perPage)
            .subscribe((data) => {
                this.hierarchicalGrid.data = data;
                this.hierarchicalGrid.cdr.detectChanges();
            },
                (error) => {
                    this.hierarchicalGrid.emptyGridMessage = error.message;
                    this.hierarchicalGrid.data = null;
                    this.hierarchicalGrid.cdr.detectChanges();
                }
            );
    }

    public getFirstPage() {
        this.remoteService.getData(
            { parentID: null, rootLevel: true, key: 'Customers' }, 0, this.hierarchicalGrid.perPage)
            .subscribe((data) => {
                this.hierarchicalGrid.data = data;
                this.hierarchicalGrid.cdr.detectChanges();
            });
    }
}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" [primaryKey]="'CustomerID'"
        [height]="'550px'" [width]="'100%'" [pagingMode]="mode" #hierarchicalGrid>
        <igx-paginator
            [totalRecords]="totalCount"
            (pagingDone)="pagingDone($event)"
            (perPageChange)="getFirstPage()">
        </igx-paginator>
        <igx-column field="CustomerID"></igx-column>
        <igx-column field="CompanyName"></igx-column>
        <igx-column field="ContactName"></igx-column>
        <igx-column field="ContactTitle"></igx-column>
        <igx-column field="Country"></igx-column>
        <igx-column field="Phone"></igx-column>
        <igx-row-island [height]="null" [key]="'Orders'" [primaryKey]="'OrderID'" [autoGenerate]="false"
            (gridCreated)="gridCreated($event, 'CustomerID')">
            <igx-paginator *igxPaginator [perPage]="5">
            </igx-paginator>

            <igx-column field="OrderID"></igx-column>
            <igx-column field="OrderDate" [formatter]="dateFormatter"></igx-column>
            <igx-column field="ShipCountry"></igx-column>
            <igx-column field="ShipCity"></igx-column>
            <igx-column field="ShipAddress"></igx-column>
            <igx-row-island [height]="null" [key]="'Order_Details'" [primaryKey]="'ProductID'" [autoGenerate]="false"
                (gridCreated)="gridCreated($event, 'OrderID')">
                <igx-paginator *igxPaginator [perPage]="5">
                </igx-paginator>

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
.grid__wrapper {
      margin: 0 16px;
      padding-top: 10px;
  }
```<div class="divider--half"></div>### Remote Paging with custom igx-paginator-contentWhen we define a custom paginator content we need to define the content in a way to get the data only for the requested page and to pass the correct **skip** and **top** parameters to the remote service according to the selected page and items [`perPage`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#perPage). We are going to use the `<igx-paginator>` in order to ease our example configuration, along with the [`IgxPageSizeSelectorComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPageSizeSelectorComponent.html) and [`IgxPageNavigationComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPageNavigationComponent.html) that were introduced - `igx-page-size` will add the per page dropdown and label and `igx-page-nav` will add the navigation action buttons and labels.```html<igx-paginator #paginator
    [totalRecords]="totalCount"
    [(perPage)]="perPage"
    [(page)]="page"
    [selectOptions]="selectOptions"
    (pageChange)="paginate($event)"
    (perPageChange)="perPageChange($event)">
    <igx-paginator-content>
        <igx-page-size></igx-page-size>
        [This is my custom content]
        <igx-page-nav></igx-page-nav>
    </igx-paginator-content></igx-paginator>``````typescript@ViewChild('hierarchicalGrid', { static: true }) public hierarchicalGrid: IgxHierarchicalGridComponent;public ngOnInit(): void {
    this._dataLengthSubscriber = this.remoteService.getDataLength(
        { parentID: null, rootLevel: true, key: 'Customers' }).subscribe((length) => {
            this.totalCount = length;
        });}public ngAfterViewInit() {
    this.hierarchicalGrid.isLoading = true;
    this._dataSubscriber = this.remoteService.getData({parentID: null, rootLevel: true, key: 'Customers' }, 0, this.perPage)
        .subscribe((data) => {
            this.hierarchicalGrid.isLoading = false;
            this.data.next(data);
        },(error) => {
                this.hierarchicalGrid.emptyGridMessage = error.message;
                this.hierarchicalGrid.isLoading = false;
                this.hierarchicalGrid.cdr.detectChanges();
            }
        );}```>[!NOTE]> In order the Remote Paging to be configured properly a `GridPagingMode.Remote` should be set:```html<igx-hierarchical-grid #hierarchicalGrid [data]="data | async" [primaryKey]="'CustomerID'"
    [height]="'550px'" [width]="'100%'" [pagingMode]="mode"></igx-hierarchical-grid>...public mode = GridPagingMode.Remote;```The last step will be to declare the paginator content based on your requirements.```html<igx-paginator-content>
    <igx-page-size></igx-page-size>
    [This is my custom content]
    <igx-page-nav></igx-page-nav></igx-paginator-content>```After all the changes above, the following result will be achieved.```typescript
import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { GridPagingMode, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IGridCreatedEventArgs, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxPageNavigationComponent, IgxPageSizeSelectorComponent, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxPaginatorDirective } from 'igniteui-angular/paginator';
import { RemotePagingService } from './remotePagingService';
import { BehaviorSubject } from 'rxjs';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';

@Component({
    providers: [RemotePagingService],
    selector: 'app-hierarchical-grid-remote-paging',
    styleUrls: ['./hierarchical-grid-remote-paging.component.scss'],
    templateUrl: 'hierarchical-grid-remote-paging.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent, IgxPaginatorDirective, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, AsyncPipe]
})

export class HGridRemotePagingSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    private remoteService = inject(RemotePagingService);

    @ViewChild('hierarchicalGrid', { static: true }) public hierarchicalGrid: IgxHierarchicalGridComponent;
    public page = 0;
    public lastPage = false;
    public firstPage = true;
    public totalCount = 0;
    public title = 'gridPaging';
    public selectOptions = [5, 10, 25, 50];
    public data: BehaviorSubject<any> = new BehaviorSubject([]);
    public mode = GridPagingMode.Remote;

    private _perPage = 10;
    private _dataLengthSubscriber;
    private _dataSubscriber;

    public ngOnInit(): void {
        this._dataLengthSubscriber = this.remoteService.getDataLength(
            { parentID: null, rootLevel: true, key: 'Customers' }).subscribe((length) => {
                this.totalCount = length;
            });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }

        if (this._dataSubscriber) {
            this._dataSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.hierarchicalGrid.isLoading = true;
        this._dataSubscriber = this.remoteService.getData({parentID: null, rootLevel: true, key: 'Customers' }, 0, this.perPage)
            .subscribe((data) => {
                this.hierarchicalGrid.isLoading = false;
                this.data.next(data);
            },(error) => {
                    this.hierarchicalGrid.emptyGridMessage = error.message;
                    this.hierarchicalGrid.isLoading = false;
                    this.hierarchicalGrid.cdr.detectChanges();
                }
            );
    }

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0);
    }

    public dateFormatter(val: string) {
        return new Intl.DateTimeFormat('en-US').format(new Date(val));
    }

    public gridCreated(event: IGridCreatedEventArgs, _foreignKey: string) {
        const dataState = {
            foreignKey: _foreignKey,
            key: event.owner.key,
            parentID: event.parentID,
            rootLevel: false
        };
        event.grid.isLoading = true;
        this.remoteService.getData(dataState).subscribe(
            (data) => {
                event.grid.isLoading = false;
                event.grid.data = data;
                event.grid.cdr.detectChanges();
            },
            (error) => {
                event.grid.emptyGridMessage = error.message;
                event.grid.isLoading = false;
                event.grid.cdr.detectChanges();
            }
        );
    }

    public paginate(page: number) {
        this.page = page;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        this.remoteService.getData(
            { parentID: null, rootLevel: true, key: 'Customers' }, skip, top).subscribe((data) => {
                this.data.next(data);
                this.hierarchicalGrid.cdr.detectChanges();
            },
                (error) => {
                    this.hierarchicalGrid.emptyGridMessage = error.message;
                    this.data.next([]);
                    this.hierarchicalGrid.cdr.detectChanges();
                }
            );
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
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" [data]="data | async"  [primaryKey]="'CustomerID'" [height]="'550px'" [width]="'100%'" #hierarchicalGrid
            [pagingMode]="mode">
        <igx-column field="CustomerID"></igx-column>
        <igx-column field="CompanyName"></igx-column>
        <igx-column field="ContactName"></igx-column>
        <igx-column field="ContactTitle"></igx-column>
        <igx-column field="Country"></igx-column>
        <igx-column field="Phone"></igx-column>
        <igx-row-island [height]="null" [key]="'Orders'" [primaryKey]="'OrderID'" [autoGenerate]="false"
            (gridCreated)="gridCreated($event, 'CustomerID')">
            <igx-paginator *igxPaginator [perPage]="5"></igx-paginator>
            <igx-column field="OrderID"></igx-column>
            <igx-column field="OrderDate" [formatter]="dateFormatter"></igx-column>
            <igx-column field="ShipCountry"></igx-column>
            <igx-column field="ShipCity"></igx-column>
            <igx-column field="ShipAddress"></igx-column>
            <igx-row-island [height]="null" [key]="'Order_Details'" [primaryKey]="'ProductID'" [autoGenerate]="false"
                (gridCreated)="gridCreated($event, 'OrderID')">
                <igx-paginator *igxPaginator [perPage]="5"></igx-paginator>
                <igx-column field="ProductID"></igx-column>
                <igx-column field="UnitPrice"></igx-column>
                <igx-column field="Quantity"></igx-column>
                <igx-column field="Discount"></igx-column>
            </igx-row-island>
        </igx-row-island>
        <igx-paginator #paginator
            [totalRecords]="totalCount"
            [(perPage)]="perPage"
            [(page)]="page"
            [selectOptions]="selectOptions"
            (pageChange)="paginate($event)"
            (perPageChange)="perPageChange($event)">
            <igx-paginator-content>
                <igx-page-size></igx-page-size>
                [This is my custom content]
                <igx-page-nav></igx-page-nav>
            </igx-paginator-content>
        </igx-paginator>
    </igx-hierarchical-grid>
</div>
```
```scss
.grid__wrapper {
      margin: 0 16px;
      padding-top: 10px;
  }
```<div class="divider--half"></div>## Known Issues and Limitations- When the grid has no `primaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
  - Row Selection
  - Row Expand/collapse
  - Row Editing
  - Row Pinning- In remote data scenarios, when the grid has a `primaryKey` set, [`rowSelectionChanging.oldSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/IRowSelectionEventArgs.html#oldSelection) event argument will not contain the full row data object for the rows that are currently out of the data view. In this case, `rowSelectionChanging.oldSelection` object will contain only one property, which is the `primaryKey` field. For the rest of the rows, currently in the data view, `rowSelectionChanging.oldSelection` will contain the whole row data.## API References<div class="divider--half"></div>- [IgxPaginatorComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html)- [IgxHierarchicalGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)## Additional Resources<div class="divider--half"></div>- [Paging](paging.md)- [Hierarchical Grid overview](hierarchical-grid.md)- [Virtualization and Performance](virtualization.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Selection](selection.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
