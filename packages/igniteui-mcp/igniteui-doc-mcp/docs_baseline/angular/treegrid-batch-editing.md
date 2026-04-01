---
_tocName: Batch Editing
_premium: true
---
---title: Batch Editing and Transactions in Angular Tree Grid Grid - Infragistics_description: Perform data manipulation without affecting the underlying data with Tree Grid Batch Editing and Angular CRUD, using Angular Data Grid. See demos & examples!_keywords: angular crud, ignite ui for angular, infragistics_license: commercial---# Angular Tree Grid Batch Editing and Transactions@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {The Batch Editing feature of the IgxTreeGrid is based on the [`TransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html). Follow the [`Transaction Service class hierarchy`](../transaction-classes.md) topic to see an overview of the `igxTransactionService` and details how it is implemented.}The Batch Editing feature of the IgxTreeGrid is based on the [`HierarchicalTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionservice.html). Follow the [`Transaction Service class hierarchy`](../transaction-classes.md) topic to see an overview of the `igxHierarchicalTransactionService` and details how it is implemented.Below is a detailed example of how is Batch Editing enabled for the Tree Grid component.## Angular Tree Grid Batch Editing and Transactions ExampleThe following sample demonstrates a scenario, where the treeGrid has [`batchEditing`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#batchEditing) enabled and has row editing enabled. The latter will ensure that transaction will be added after the entire row edit is confirmed.```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { Transaction } from 'igniteui-angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { generateRandomInteger } from '../../data/utils';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-batch-editing-sample',
    styleUrls: ['tree-grid-batch-editing-sample.component.scss'],
    templateUrl: 'tree-grid-batch-editing-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxButtonDirective, IgxDialogComponent, IgxGridComponent]
})
export class TreeGridBatchEditingSampleComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    @ViewChild(IgxDialogComponent, { static: true }) public dialog: IgxDialogComponent;
    @ViewChild('dialogGrid', { read: IgxGridComponent, static: true }) public dialogGrid!: IgxGridComponent;

    public data: IEmployee[];
    public transactionsData: Transaction[] = [];

    private nextRow = 1;

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }

    public addRow() {
        const addedData: IEmployee = {
            Age: 32,
            HireDate: new Date(generateRandomInteger(2008, 2015),
            generateRandomInteger(0, 12), generateRandomInteger(5, 25)),
            ID: this.data.length + this.nextRow++,
            Name: 'John Doe',
            Phone: '(91) 745 6200',
            OnPTO: false,
            ParentID: -1,
            Title: 'Junior Sales Representative'
        };
        this.treeGrid.addRow(addedData);
    }

    public addChildRow(id) {
        const addedData: IEmployee = {
            Age: generateRandomInteger(18, 55),
            HireDate: new Date(generateRandomInteger(2008, 2015),
            generateRandomInteger(0, 12), generateRandomInteger(5, 25)),
            ID: this.data.length + this.nextRow++,
            Name: 'Added Addedington',
            Phone: '(91) 745 6200',
            OnPTO: false,
            ParentID: -1,
            Title: 'Intern'
        };
        this.treeGrid.addRow(
            addedData,
            id);
    }

    public deleteRow(id) {
        this.treeGrid.deleteRow(id);
    }

    public undo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.redo();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.dialog.close();
    }

    public cancel() {
        this.dialog.close();
    }

    public discard() {
        this.treeGrid.transactions.clear();
        this.dialog.close();
    }

    public openCommitDialog() {
        this.dialog.open();
        this.transactionsData = this.treeGrid.transactions.getAggregatedChanges(true);
        this.dialogGrid.reflow();
    }

    public stateFormatter(value: string) {
        return value ? JSON.stringify(value) : '';
    }

    public typeFormatter(value: string) {
        return value ? value.toUpperCase() : '';
    }

    public classFromType(type: string): string {
        return type ? `transaction--${type.toLowerCase()}` : '';
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid [batchEditing]="true" [data]="data" primaryKey="ID" foreignKey="ParentID"
        [width]="'100%'" [height]="'500px'" [rowEditable]="true">
        <igx-column [filterable]="false" width="150" [editable]="false">
            <ng-template igxCell let-cell="cell" let-val>
                <button igxButton (click)="deleteRow(cell.id.rowID)"
                    [disabled]="cell.row.deleted">Delete</button>
            </ng-template>
        </igx-column>
        <igx-column [filterable]="false" width="180" [editable]="false">
            <ng-template igxCell let-cell="cell" let-val>
                <button igxButton (click)="addChildRow(cell.id.rowID)" [disabled]="cell.row.deleted">Add Child
                    Row</button>
            </ng-template>
        </igx-column>
        <igx-column field="ID" header="ID" dataType="number" width="200"></igx-column>
        <igx-column field="Age" header="Age" dataType="number" width="120"></igx-column>
        <igx-column field="Name" header="Full Name" dataType="string" width="240"></igx-column>
        <igx-column field="Title" header="Title" dataType="string" width="180"></igx-column>
        <igx-column field="HireDate" header="Hire Date" dataType="date" width="150"></igx-column>
        <igx-column field="OnPTO" header="On PTO" dataType="boolean" width="80"></igx-column>
    </igx-tree-grid>
    <div class="buttons-row">
        <button igxButton (click)="addRow()">Add Root Level Row</button>
        <div class="buttons-wrapper">
            <button igxButton [disabled]="!treeGrid.transactions.canUndo" (click)="undo()">Undo</button>
            <button igxButton [disabled]="!treeGrid.transactions.canRedo" (click)="redo()">Redo</button>
            <button igxButton [disabled]="treeGrid.transactions.getAggregatedChanges(false).length < 1"
                (click)="openCommitDialog()">Commit</button>
        </div>
    </div>
    <igx-dialog title="Submit the following transactions?">
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
            <button igxButton (click)="cancel()">Cancel</button>
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

.list-container {
    width: 600px;
    height: 300px;
    overflow-y: visible;
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
```<div class="divider--half"></div>> [!NOTE]> Transaction state consists of all the updated, added and deleted rows, and their last states.## UsageTo get started import the `IgxTreeGridModule` in the **app.module.ts** file:```typescript// app.module.ts...import { IgxTreeGridModule } from 'igniteui-angular';@NgModule({
    ...
    imports: [..., IgxTreeGridModule],
    ...})export class AppModule {}```Then, all you need to do is enable `batchEditing` from your Tree Grid:```html<igx-tree-grid [data]="data" [batchEditing]="true">
  ...</igx-tree-grid>```This will ensure a proper instance of `Transaction` service is provided for the igx-tree-grid. The proper `TransactionService` is provided through a `TransactionFactory`. You can learn more about this internal implementation in the [transactions topic](../transaction-classes.md#transaction-factory).After batch editing is enabled, define a `IgxTreeGrid` with bound data source and [`rowEditable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowEditable) set to true and bind:```html<igx-tree-grid #treeGrid [batchEditing]="true" [data]="data" primaryKey="employeeID" foreignKey="PID"
    width ="100%" height ="500px" rowEditable=true>
    ...</igx-tree-grid>...
    <button igxButton (click)="addRow()">Add Root Level Row</button>
    <button igxButton [disabled]="!treeGrid.transactions.canUndo" (click)="undo()">Undo</button>
    <button igxButton [disabled]="!treeGrid.transactions.canRedo" (click)="redo()">Redo</button>
    <button igxButton [disabled]="treeGrid.transactions.getAggregatedChanges(false).length < 1"
        (click)="openCommitDialog()">Commit</button>...```The following code demonstrates the usage of the [`HierarchicalTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionservice.html) API - undo, redo, commit.```typescriptexport class TreeGridBatchEditingSampleComponent {
    @ViewChild('treeGrid', { read: IgxTreeGridComponent }) public treeGrid: IgxTreeGridComponent;

    public undo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.redo();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.dialog.close();
    }}```> [!NOTE]> The transactions API won't handle end of edit and you'd need to do it by yourself. Otherwise, `Tree Grid` would stay in edit mode. One way to do that is by calling [`endEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#endEdit) in the respective method.Deleting a parent node in `Tree Grid` has some peculiarities. If you are using a hierarchical data, the children will be deleted when deleting their parent. If you are using a flat data, you may set the desired behavior using the [`cascadeOnDelete`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#cascadeOnDelete) property of `Tree Grid`. This property indicates whether the child records should be deleted when their parent gets deleted (by default, it is set to `true`).> [!NOTE]> Disabling [`rowEditable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowEditable) property will modify `Tree Grid` to create transactions on cell change and will not expose row editing overlay in the UI.## API References- [HierarchicalTransactionService](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionservice.html)- [rowEditable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowEditable)- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)## Additional Resources- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)- [Tree Grid Overview](tree-grid.md)- [Tree Grid Editing](editing.md)- [Tree Grid Row Editing](row-editing.md)- [Tree Grid Row Adding](row-adding.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
