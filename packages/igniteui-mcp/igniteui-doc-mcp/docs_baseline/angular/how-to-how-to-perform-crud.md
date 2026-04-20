---
title: How to enable CRUD operations in Angular.
_description: What is Angular Crud? How to Build a CRUD service in Angular and use it to perform CRUD operations with the Grid data? Learn more here.
_keywords: angular, crud, crud operations, infragistics, crud tutorial
_tocName: Build CRUD operations with IgxGrid
---

# What is CRUD

CRUD is an acronym in computer programming that stands for the CREATE, READ, UPDATE, DELETE operations that can be performed against a data collection. In computer world, talking about CRUD applications, is a main difference compared to applications that provide read-only data to users.

## Angular CRUD

While talking about Angular CRUD, or CRUD operations in Angular, it is important to note that the data storage is on a remote server. The Angular application can not directly access the data layer, so it needs to communicate with it through a Web API that provides endpoints for the CRUD operations, i.e.:

| API                   | Operation                               | HTTP methods |
| :-------------------- | :-------------------------------------- | :----------- |
| "api/entities"        | READ all entities                       | GET          |
| "api/entities/id"     | READ the entity with corresponding id   | GET          |
| "api/entities/update" | UPDATE the entity with corresponding id | PUT / PATCH  |
| "api/entities/create" | CREATE a new entity                     | POST         |
| "api/entities/delete" | DELETE the entity with corresponding id | DELETE       |

Notice that the CRUD operations also map conceptually to the HTTP methods that are used to communicate with APIs over HTTP.

The entire code that will work with the above mentioned API can be abstracted in an Angular service. Such a service is injectable and can be reused by any component that needs to perform CRUD operations against the same database. A good practice is to write such service as generic as possible, thus making it suitable to be reused in many components, and against different servers as well.

A generic example of such service will look like this:


```typescript
@Injectable()
export class CRUDService {
  /** See https://angular.io/api/common/http/HttpClient */
  constructor(private http: HttpClient) { }

  /** Gets all entities from server */
  public getData() {
      return this.http.get(`${this.serverURL}\api\entities`);
  }

  /** Gets entity with corresponding id */
  public getRecord(id) {
      return this.http.get(`${this.serverURL}\api\entities\${id}`);
  }

  /** Creates entity from body */
  public add(entity) {
      return this.http.post(`${this.serverURL}\api\entities\create`, entity);
  }

  /* Updates entity with data from body */
  public update(entity) {
      return this.http.put(`${this.serverURL}\api\entities\update`, entity);
  }

  /** Deletes the corresponding entity */
  public delete(entity) {
      return this.http.delete(`${this.serverURL}\api\entities\delete`, entity);
  }
}
```

What the above service is missing is configuration for filtering/sorting/paging, etc. Depending on the exact API implementation of the endpoints, requests to the server may need optional parameters to handle filtering/sorting/paging for you. See our [Remote Data Operations](../../grid/remote-data-operations.md) for demos accompanied with code examples.

For more examples and guidance, refer to the [HTTP Services](https://angular.io/tutorial/toh-pt6) tutorial in the official Angular documentation.


## CRUD Operations with Grid

Enabling CRUD in the Grid means providing UI for the users to perform these CRUD operations from within the grid. This is quite easy - the Grid provides [**Cell Editing**](../../grid/cell-editing.md), [**Row Editing**](../../grid/row-editing.md), [**Row Adding**](../../grid/row-adding.md) and **Row Deleting** UI out of the box, and powerful API to do this on your own. Next, we want to take the result of each editing action and communicate it to the corresponding method in our CRUD service, thus preserving all changes to the original database. By completing this, we may say the grid is CRUD enabled.


This section is written as HOW-TO tutorial on enabling CRUD operations in Grid, accompanied by code snippets that you can take and copy paste in your code.


## How to

Let's first enable the rowEditing behavior, bring the UI we need for the editing actions, benefiting from the `IgxActionStrip` (see more about the [`IgxActionStrip`](../../action-strip.md)), and attach event handlers:

```html
<igx-grid 
    primaryKey="ID"
    [rowEditable]="true"
    (rowAdded)="rowAdded($event)"
    (rowDeleted)="rowDeleted($event)"
    (rowEditDone)="rowEditDone($event)">

  <igx-action-strip #actionstrip>
      <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
  </igx-action-strip>
```

In the Angular component, inject the data service using DI. Now we are ready to use the service to do full CRUD operations against our data layer:

```typescript
constructor(private crudService: CRUDService) { }

public rowDeleted(event: IRowDataEventArgs) {
    this._crudService.delete(event.data).subscribe((rec) => {
        // notification or do any additional handling
        this.snackbar.open(`Row with ID of ${rec.ID} was deleted.`);
    });
}

public rowAdded(event: IRowDataEventArgs) {
    this._crudService.add(event.data);
}

public rowEditDone(event: IGridEditDoneEventArgs) {
    this._crudService.update(event.newValue);
}
```

In the above example, we only call the corresponding methods and pass the data that is read from the event arguments. Most API endpoints will return the updated/added/deleted entity, which indicates that the request was successful.

A good practice is to add validation, notifying the users that all actions have been completed successfully or that an error has occurred. In such case, you may want to pass handlers for the error and complete notifications too:

```typescript
this._crudService.delete(event.data).subscribe({
    next: (data: any) => {
      console.log('success');
    },
    error: err => {
      console.log(err);
    },
    complete: () => {
      console.log('Complete notification')
    }
});
```

> [!NOTE]
> The above examples are based on the default grid UI for editing actions. Another valid approach is if you provide your own external UI. In such case, responding to user interactions with the UI should work with the grid editing API (**make sure the grid has a primaryKey set**). See [**API**](how-to-perform-crud.md#editing-api) section for reference.
> [!NOTE]
> Make sure to follow best practices and prevent any differences in your local data compared to the server database. For example - you may decide to first make a request to the server to delete a record, but if the request fails, do not delete the data on the local grid data:

```typescript
this._crudService.delete(event.data).subscribe({
    next: (data: any) => {
      this.grid.getRowByKey(event.data[this.grid.primaryKey]).delete();
    },
    error: err => {
      console.log(err); // notify and don't delete the grid row
    }
});
```

## Demo

See the demo that was built following the guidance. Play around with it and try the examples for customization to fit your scenario in the best possible way.

```typescript
import { ChangeDetectorRef, Component, OnInit, ViewChild, OnDestroy, inject } from '@angular/core';
import { GridPagingMode, IGridEditDoneEventArgs, IRowDataEventArgs, IgxColumnComponent, IgxGridEditingActionsComponent, IgxGridRow } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';
import { NoopFilteringStrategy, NoopSortingStrategy } from 'igniteui-angular/core';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxActionStripComponent } from 'igniteui-angular/action-strip';
import { Observable, Subject } from 'rxjs';
import { Invoice } from '../../data/invoiceData';
import { CRUDService } from '../../services/crud.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    providers: [CRUDService],
    selector: 'app-grid-crud-sample',
    styleUrls: ['./crud-sample.component.scss'],
    templateUrl: './crud-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxActionStripComponent, IgxGridEditingActionsComponent, IgxSnackbarComponent]
})
export class CRUDSampleComponent implements OnInit, OnDestroy {
    private _crudService = inject(CRUDService);
    cdr = inject(ChangeDetectorRef);

    @ViewChild('grid', { static: true }) public grid: IgxGridComponent;
    @ViewChild('snackbar', { static: false }) public snackbar: IgxSnackbarComponent;

    public page = 0;
    public totalCount = 0;
    public pages = [];
    public selectOptions = [5, 10, 15, 25, 50];
    public mode = GridPagingMode.Remote;

    public remoteData$: Observable<Invoice[]>;
    public data: Invoice[] = [];
    public noopFilterStrategy = NoopFilteringStrategy.instance();
    public noopSortStrategy = NoopSortingStrategy.instance();

    private _prevRequest: any;
    private destroy$ = new Subject<void>();

    private _perPage = 10;

    public ngOnInit(): void {
        this.remoteData$ = this._crudService.data$;
        this._crudService.getData(this.page * this.perPage, this.perPage);
        this._crudService.getDataLength().subscribe((length) => {
            this.totalCount = length;
        });
        this.remoteData$.subscribe((data: any) => {
            this.data = data;
            this.grid.isLoading = false;
        });
    }

    public rowAdded(event: IRowDataEventArgs): void {
        this._crudService.add(event.data).subscribe((rec) => {
            // this.snackbar.open(`Row with ID of ${rec.ID} was created.`);
        });
    }

    public rowDeleted(event: IRowDataEventArgs): void {
        this.grid.isLoading = true;
        this._crudService.delete(event.data).subscribe({
            next: (data: any) => {
                this.snackbar.open(`Row with ID of ${data.ID} was deleted.`);
            },
            error: err => {
                console.log(err);
            },
            complete: () => {
                this.grid.isLoading = false;
                console.log('Complete notification');
            }
        });
    }

    public rowEditDone(event: IGridEditDoneEventArgs): void {
        if (!event.isAddRow) {
            this.grid.isLoading = true;
            this._crudService.update(event.newValue).subscribe((rec) => {
                this.grid.isLoading = false;
                this.snackbar.open(`Row with ID of ${rec.ID} was edited.`);
            });
        }
    }

    public removeRow(row: IgxGridRow) {
        this.grid.isLoading = true;
        this._crudService.delete(row.data).subscribe((rec) => {
            this.grid.isLoading = false;
            this.snackbar.open(`Row with ID of ${rec.ID} was deleted.`);
        });
    }

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0);
    }

    public paginate(page: number) {
        this.grid.isLoading = true;
        const skip = this.page * this.perPage;
        const top = this.perPage;

        this._crudService.getData(skip, skip + top);
    }

    public perPageChange(perPage: number) {
        const skip = this.page * perPage;
        const top = perPage;

        this._crudService.getData(skip, skip + top);
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
    <igx-grid [igxPreventDocumentScroll]="true" #grid
        [data]="data"
        primaryKey="ID"
        [isLoading]="true"
        [height]="'370px'" [width]="'100%'"
        [autoGenerate]='false'
        [allowFiltering]="false"
        [pagingMode]="mode"
        [totalRecords]="totalCount"
        [rowEditable]="true"
        (rowAdded)="rowAdded($event)"
        (rowDeleted)="rowDeleted($event)"
        (rowEditDone)="rowEditDone($event)">

        <igx-paginator #paginator
            [totalRecords]="totalCount"
            [(page)]="page" [(perPage)]="perPage"
            [selectOptions]="selectOptions"
            (pageChange)="paginate($event)"
            (perPageChange)="perPageChange($event)">
        </igx-paginator>

        <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [sortable]="false" [hasSummary]="false">
        </igx-column>
        <igx-column field="ProductName" header="Name" [dataType]="'string'" [sortable]="false" [hasSummary]="false" [filterable]="false">
        </igx-column>
        <igx-column field="UnitPrice" header="Unit Price" dataType="number" [sortable]="false" [hasSummary]="false" [filterable]="false">
        </igx-column>
        <igx-column field="Quantity" header="Quantity" dataType="number" [sortable]="false" [hasSummary]="false" [filterable]="false">
        </igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="false" [hasSummary]="false">
        </igx-column>
        <igx-column field="ShipCountry" header="Country" [dataType]="'string'" [sortable]="false" [hasSummary]="false">
        </igx-column>
        <igx-column field="ShipCity" header="City" [dataType]="'string'" [sortable]="false" [hasSummary]="false">
        </igx-column>
        <igx-column field="ShipPostalCode" header="Postal Code" [dataType]="'string'" [sortable]="false" [hasSummary]="false">
        </igx-column>

        <igx-action-strip #actionstrip>
            <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
        </igx-action-strip>
    </igx-grid>
    <div>
        <igx-snackbar #snackbar [outlet]="grid"></igx-snackbar>
    </div>
</div>
<!-- Adittional columns -->
<!-- <igx-column field="CustomerName" header="Customer Name" [dataType]="'string'" [sortable]="false" [hasSummary]="false">
</igx-column>
<igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="false" [hasSummary]="false">
</igx-column>
<igx-column field="City" header="City" [dataType]="'string'" [sortable]="false" [hasSummary]="false">
</igx-column>
<igx-column field="Address" header="Address" [dataType]="'string'" [sortable]="false" [hasSummary]="false">
</igx-column>
<igx-column field="PostalCode" header="Postal Code" [dataType]="'string'" [sortable]="false" [hasSummary]="false">
</igx-column>
<igx-column field="Salesperson" header="Sales Person" [dataType]="'string'" [sortable]="false" [hasSummary]="false">
</igx-column>
<igx-column field="ShipperName" header="Shipper Name" [dataType]="'string'" [sortable]="false" [hasSummary]="false">
</igx-column>
<igx-column width="100px" [filterable]="false">
    <ng-template igxCell let-cell="cell">
        <button igxIconButton="flat" (click)="removeRow(cell.row)">
            <igx-icon>delete</igx-icon>
        </button>
    </ng-template>
</igx-column> -->

<!-- Grid toolbar template -->
<!-- <igx-grid-toolbar>
    <button igxButton="flat" (click)="dialogAdd.open()" class="addProdBtn"><igx-icon>add</igx-icon> Add Product</button>
</igx-grid-toolbar> -->
```
```scss
.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}
```

## Customizations

The rich Grid API allows you to customize the editing process in almost any way in order to fit your needs. This includes, but is not limited to:

- [**Batch Editing**](how-to-perform-crud.md#batch-editing): Enable Batch Editing to batch all updates, and commit everything with single request.
- [**Templating**](how-to-perform-crud.md#templates): Add templates for cell editing, or use your own external UI for row/cell editing, row adding and row deleting.
- [**Events**](how-to-perform-crud.md#events): Monitor the editing flow and react accordingly. Attach event handlers for all events emitted during editing, will allow you to do:
  - data validation per cell
  - data validation per row
  - prompt user for expected type of input
  - cancel further processing, based on business rules
  - manual committing of the changes
- [**Rich API**](how-to-perform-crud.md#editing-api)

## Batch Editing

- Enable **Batch Editing** to keep your updates on the client, and commit all of them with a single request. Batch updating is enabled by setting the `batchEditing` option to true:

 ```html
 <igx-grid [batchEditing]="'true'" ...>
 ```

Go to [Batch Editing](../../grid/batch-editing.md) for more details and demo samples.

## Templates

You can see and learn more about default cell editing templates in the [general editing topic](../../grid/editing.md#editing-templates).

If you want to provide a custom template which will be applied when a cell is in edit mode, you can make use of the [`igxCellEditor` directive](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcelltemplatedirective.html). To do this, you need to pass an `ng-template` marked with the `igxCellEditor` directive and properly bind your custom control to the [`cell.editValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html#editValue):

```html
<igx-column field="class" header="Class" [editable]="true">
    <ng-template igxCellEditor let-cell="cell" let-value>
        <igx-select class="cell-select" [(ngModel)]="cell.editValue" [igxFocus]="true">
            <igx-select-item *ngFor="let class of classes" [value]="class">
                {{ class }}
            </igx-select-item>
        </igx-select>
    </ng-template>
</igx-column>
```

For more information and demos, see the [Cell Editing](../../grid/cell-editing.md) topic.

## Events

The grid exposes a wide array of events that provide greater control over the editing experience. These events are fired during the [**Row Editing**](../../grid/row-editing.md) and [**Cell Editing**](../../grid/cell-editing.md) lifecycle - when starting, committing or canceling the editing action.

| Event                                                                                      | Description                                                                                                                                               | Arguments                                                                                    | Cancellable |
| :----------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- | :---------- |
| [`rowEditEnter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowEditEnter)   | If `rowEditing` is enabled, fires when a row enters edit mode                                                                                             | [IGridEditEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)         | `true`      |
| [`cellEditEnter`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#cellEditEnter) | Fires when a cell **enters edit mode** (after `rowEditEnter`)                                                                                             | [IGridEditEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)         | `true`      |
| [`cellEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#cellEdit)           | If value is changed, fires just **before** a cell's value is **committed** (e.g. by pressing `Enter`)                                                     | [IGridEditEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)         | `true`      |
| [`cellEditDone`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#cellEditDone)   | If value is changed, fires **after** a cell has been edited and cell's value is **committed**                                                             | [IGridEditDoneEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igrideditdoneeventargs.html) | `false`     |
| [`cellEditExit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#cellEditExit)   | Fires when a cell **exits edit mode**                                                                                                                     | [IGridEditDoneEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)     | `false`     |
| [`rowEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowEdit)             | If `rowEditing` is enabled, fires just before a row in edit mode's value is **committed** (e.g. by clicking the `Done` button on the Row Editing Overlay) | [IGridEditEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)         | `true`      |
| [`rowEditDone`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowEditDone)     | If `rowEditing` is enabled, fires **after** a row has been edited and new row's value has been **committed**.                                             | [IGridEditDoneEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)     | `false`     |
| [`rowEditExit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowEditExit)     | If `rowEditing` is enabled, fires when a row **exits edit mode**                                                                                          | [IGridEditDoneEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridediteventargs.html)     | `false`     |

Go to [Events](../../grid/editing.md#event-arguments-and-sequence) for more details and demo samples.

## Editing API

Updating data in the grid is achieved through methods exposed both by the grid:

- [`updateRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#updateRow)
- [`updateCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#updateCell)
- [`deleteRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#deleteRow)
- [`addRow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#addRow)

and `update` method exposed by the [IgxGridCell](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html) and [IgxGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridrow.html) instances:

```typescript
// Through the grid methods
this.grid.updateRow(newData, rowKey);
this.grid.updateCell(newData, rowKey, columnField);
this.grid1.deleteRow(0);
this.grid.addRow(data);

// Through the methods exposed by cell/row
this.grid.getCellByColumn(rowIndex, columnField).update(newData);
this.grid.getCellByKey(rowKey, columnField).value = newData;
this.grid.getRowByKey(rowID).update(newData);
this.grid.getRowByKey(rowID).delete();
```

More details and information about using the grid API can be found in the [Cell Editing CRUD Operations](../../grid/cell-editing.md#crud-operations) section.

## Takeaway

Enabling CRUD in a robust way is major milestone for any data-driven application. In order to streamline the entire process, we've built the IgxGrid with the CRUD capabilities in mind, providing out-of-the-box UI and flexible APIs. How will this benefit you? It will save you lots of time when implementing CRUD against any database out there. And when we talk about modern-day data-driven apps, it all comes down to robustness, speed, and flexibility.

## API References

- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGridRow](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridrow.html)
- [IgxGridCell](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
- [`IgxActionStripComponent API`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxactionstripcomponent.html)
- [`IgxGridActionsBaseDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridactionsbasedirective.html)
- [`IgxGridPinningActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridpinningactionscomponent.html)
- [`IgxGridEditingActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgrideditingactionscomponent.html)

