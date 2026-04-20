---
title: Batch Editing and Transactions in Angular Grid Grid - Infragistics
_description: Perform data manipulation without affecting the underlying data with Grid Batch Editing and Angular CRUD, using Angular Data Grid. See demos & examples!
_keywords: angular crud, ignite ui for angular, infragistics
_license: commercial
_tocName: Batch Editing
_premium: true
---
# Angular Grid Batch Editing and Transactions
@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {
The Batch Editing feature of the IgxGrid is based on the [`TransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html). Follow the [`Transaction Service class hierarchy`](../transaction-classes.md) topic to see an overview of the `igxTransactionService` and details how it is implemented.
}
Below is a detailed example of how is Batch Editing enabled for the Grid component.
## Angular Grid Batch Editing and Transactions Example
The following sample demonstrates a scenario, where the grid has [`batchEditing`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#batchEditing) enabled and has row editing enabled. The latter will ensure that transaction will be added after the entire row edit is confirmed.
```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { Transaction } from 'igniteui-angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { DATA } from '../../data/nwindData';
import { generateRandomInteger } from '../../data/utils';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-row-edit',
    styleUrls: [`grid-batch-editing-sample.component.scss`],
    templateUrl: 'grid-batch-editing-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxButtonDirective, IgxDialogComponent]
})
export class GridBatchEditingSampleComponent implements OnInit {
    @ViewChild('grid', { read: IgxGridComponent, static: true }) public grid: IgxGridComponent;
    @ViewChild(IgxDialogComponent, { static: true }) public dialog: IgxDialogComponent;

    public data: any[];
    public transactionsData: Transaction[] = [];
    private addProductId: number;

    public ngOnInit(): void {
        this.data = DATA;
        this.addProductId = this.data.length + 1;
    }

    public addRow() {
        this.grid.addRow({
            CategoryID: generateRandomInteger(1, 10),
            Discontinued: generateRandomInteger(1, 10) % 2 === 0,
            OrderDate: new Date(generateRandomInteger(2000, 2050),
            generateRandomInteger(0, 11), generateRandomInteger(1, 25))
            .toISOString().slice(0, 10),
            ProductID: this.addProductId++,
            ProductName: 'Product with index ' + generateRandomInteger(0, 20),
            QuantityPerUnit: (generateRandomInteger(1, 10) * 10).toString() + ' pcs.',
            ReorderLevel: generateRandomInteger(10, 20),
            SupplierID: generateRandomInteger(1, 20),
            UnitPrice: generateRandomInteger(10, 1000),
            UnitsInStock: generateRandomInteger(1, 100),
            UnitsOnOrder: generateRandomInteger(1, 20)
        });
    }

    public deleteRow(id) {
        this.grid.deleteRow(id);
    }

    public undo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.redo();
    }

    public openCommitDialog() {
        this.transactionsData = this.grid.transactions.getAggregatedChanges(true);
        this.dialog.open();
    }

    public commit() {
        this.grid.transactions.commit(this.data);
        this.dialog.close();
    }

    public discard() {
        this.grid.transactions.clear();
        this.dialog.close();
    }

    public stateFormatter(value: any) {
        return JSON.stringify(value);
    }

    public typeFormatter(value: string) {
        return value.toUpperCase();
    }

    public classFromType(type: string): string {
        return `transaction--${type.toLowerCase()}`;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid [batchEditing]="true" [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        <igx-column [editable]="false">
            <ng-template igxCell let-cell="cell" let-val>
                <button igxButton (click)="deleteRow(cell.id.rowID)"
                    [disabled]="cell.row.deleted">Delete</button>
            </ng-template>
        </igx-column>
        <igx-column field="ProductID" header="Product ID" [editable]="false"></igx-column>
        <igx-column field="ProductName" header="Product Name" [dataType]="'string'"></igx-column>
        <igx-column field="UnitPrice" header="Unit Price" [dataType]="'string'"></igx-column>
        <igx-column field="UnitsOnOrder" header="Units On Order" dataType="number"></igx-column>
        <igx-column field="UnitsInStock" header="Units In Stock" dataType="number"></igx-column>
        <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [dataType]="'string'"></igx-column>
        <igx-column field="ReorderLevel" header="Reorder Level" dataType="number"></igx-column>
        <igx-column field="SupplierID" header="Supplier ID" dataType="number"></igx-column>
        <igx-column field="CategoryID" header="Category ID" dataType="number"></igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'"></igx-column>
    </igx-grid>
    <div class="buttons-row">
        <button igxButton (click)="addRow()">Add Row</button>
        <div class="buttons-wrapper">
            <button igxButton [disabled]="!grid.transactions.canUndo" (click)="undo()">Undo</button>
            <button igxButton [disabled]="!grid.transactions.canRedo" (click)="redo()">Redo</button>
            <button igxButton [disabled]="grid.transactions.getAggregatedChanges(false).length < 1"
                (click)="openCommitDialog()">Commit</button>
        </div>
    </div>
    <igx-dialog #dialog title="Submit the following transactions?">
        <igx-grid [igxPreventDocumentScroll]="true" #dialogGrid [data]="transactionsData" [rowHeight]="64" [primaryKey]="'id'"
            width="600px" height="300px" [emptyGridMessage]="'No available transactions'">
            <igx-column field="id" header="ID" [dataType]="'string'" width="100px"></igx-column>
            <igx-column field="type" header="Type" width="150px" [sortable]="true">
                <ng-template igxCell let-cell="cell" let-val>
                    <span [class]="classFromType(val)">{{ typeFormatter(val) }}</span>
                </ng-template>
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
            <button igxButton (click)="dialog.close()">Cancel</button>
        </div>
    </igx-dialog>
</div>
```
```scss
.grid__wrapper {
    margin: 15px;
}

h4 {
    text-align: center;
    padding-top: 2%;
    padding-bottom: 2%;
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
```
<div class="divider--half"></div>
> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows, and their last states.
## Usage
To get started import the `IgxGridModule` in the **app.module.ts** file:
```typescript
// app.module.ts
...
import { IgxGridModule } from 'igniteui-angular';
@NgModule({
    ...
    imports: [..., IgxGridModule],
    ...
})
export class AppModule {}
```
Then, all you need to do is enable `batchEditing` from your Grid:
```html
<igx-grid [data]="data" [batchEditing]="true">
  ...
</igx-grid>
```
This will ensure a proper instance of `Transaction` service is provided for the igx-grid. The proper `TransactionService` is provided through a `TransactionFactory`. You can learn more about this internal implementation in the [transactions topic](../transaction-classes.md#transaction-factory).
After batch editing is enabled, define a `IgxGrid` with bound data source and [`rowEditable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowEditable) set to true and bind:
```html
<igx-grid #grid [batchEditing]="true" [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
    [rowEditable]="true">
    ...
</igx-grid>
...
<button igxButton [disabled]="!grid.transactions.canUndo" (click)="undo()">Undo</button>
<button igxButton [disabled]="!grid.transactions.canRedo" (click)="redo()">Redo</button>
<button igxButton [disabled]="grid.transactions.getAggregatedChanges(false).length < 1"
    (click)="openCommitDialog(dialogGrid)">Commit</button>
...
```
The following code demonstrates the usage of the [`transactions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html#) API - undo, redo, commit.
```typescript
export class GridBatchEditingSampleComponent {
    @ViewChild('grid', { read: IgxGridComponent }) public gridRowEditTransaction: IgxGridComponent;

    public undo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.redo()
    }

    public commit() {
        this.grid.transactions.commit(this.data);
        this.toggle.close();
    }
}
```
> [!NOTE]
> The transactions API won't handle end of edit and you'd need to do it by yourself. Otherwise, `Grid` would stay in edit mode. One way to do that is by calling [`endEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#endEdit) in the respective method.
> [!NOTE]
> Disabling [`rowEditable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowEditable) property will modify `Grid` to create transactions on cell change and will not expose row editing overlay in the UI.
## Remote Paging with Batch Editing Demo
[Check out the full demo configuration](remote-data-operations.md#remote-paging-with-batch-editing)
```typescript
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
```
## API References
- [transactions](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#transactions)
- [igxTransactionService](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html)
## Additional Resources
- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
- [Grid Overview](grid.md)
- [Grid Editing](editing.md)
- [Grid Row Editing](row-editing.md)
- [Grid Row Adding](row-adding.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
