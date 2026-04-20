---
title: Batch Editing and Transactions in Angular Hierarchical Grid Grid - Infragistics
_description: Perform data manipulation without affecting the underlying data with Hierarchical Grid Batch Editing and Angular CRUD, using Angular Data Grid. See demos & examples!
_keywords: angular crud, ignite ui for angular, infragistics
_license: commercial
_tocName: Batch Editing
_premium: true
---
# Angular Hierarchical Grid Batch Editing and Transactions
@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {
The Batch Editing feature of the IgxHierarchicalGrid is based on the [`TransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html). Follow the [`Transaction Service class hierarchy`](../transaction-classes.md) topic to see an overview of the `igxTransactionService` and details how it is implemented.
}
In order to use the [`HierarchicalTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionservice.html) with [`IgxHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html), but have it accumulating separate transaction logs for each island, a service factory should be provided instead. One is exported and ready for use as [`IgxHierarchicalTransactionServiceFactory`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/index.html#igxhierarchicaltransactionservicefactory).
Below is a detailed example of how is Batch Editing enabled for the Hierarchical Grid component.
## Angular Hierarchical Grid Batch Editing and Transactions Example
The following sample demonstrates a scenario, where the hierarchicalGrid has [`batchEditing`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#batchEditing) enabled and has row editing enabled. The latter will ensure that transaction will be added after the entire row edit is confirmed.
```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { Transaction } from 'igniteui-angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarComponent, IgxGridToolbarDirective } from 'igniteui-angular/grids/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hierarchical-grid-batch-editing',
    styleUrls: ['./hierarchical-grid-batch-editing.component.scss'],
    templateUrl: 'hierarchical-grid-batch-editing.component.html',
    imports: [IgxButtonDirective, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective, IgxGridToolbarComponent, IgxDialogComponent, IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxCheckboxComponent, IgxGridComponent]
})

export class HGridBatchEditingSampleComponent implements OnInit {
    @ViewChild('dialogChanges', { read: IgxDialogComponent, static: true })
    public dialogChanges: IgxDialogComponent;

    @ViewChild('childGrid', { static: true })
    private childGrid: IgxRowIslandComponent;

    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    @ViewChild('dialogAddSinger', { read: IgxDialogComponent, static: true })
    private dialogSinger: IgxDialogComponent;

    public get undoEnabledParent(): boolean {
        return this.hierarchicalGrid.transactions.canUndo;
    }

    public get redoEnabledParent(): boolean {
        return this.hierarchicalGrid.transactions.canRedo;
    }

    public get hasTransactions(): boolean {
        return this.hierarchicalGrid.transactions.getAggregatedChanges(false).length > 0 || this.hasChildTransactions;
    }

    public get hasChildTransactions(): boolean {
        return this.childGrid.gridAPI.getChildGrids()
            .find(c => c.transactions.getAggregatedChanges(false).length > 0) !== undefined;
    }

    public data: Singer[];
    public singer: Singer;
    public transactionsDataAll: Transaction[] = [];
    private id = 14;

    constructor() {}

    public ngOnInit(): void {
        this.data = SINGERS;
        this.singer = {
            ID: this.id,
            Artist: 'Mock Jagger',
            Debut: 2005,
            GrammyAwards: 4,
            GrammyNominations: 7,
            HasGrammyAward: false
        };
    }

    public formatter = a => a;

    public undo(grid: any) {
        /* exit edit mode and commit changes */
        const hGrid = grid as IgxHierarchicalGridComponent;
        hGrid.endEdit(true);
        hGrid.transactions.undo();
    }

    public redo(grid: any) {
        /* exit edit mode and commit changes */
        const hGrid = grid as IgxHierarchicalGridComponent;
        hGrid.endEdit(true);
        hGrid.transactions.redo();
    }

    public commit() {
        this.hierarchicalGrid.transactions.commit(this.data);
        this.childGrid.gridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.commit(grid.data);
        });
        this.dialogChanges.close();
    }

    public discard() {
        this.hierarchicalGrid.transactions.clear();
        this.childGrid.gridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.clear();
        });
        this.dialogChanges.close();
    }

    public openCommitDialog() {
        this.transactionsDataAll = [...this.hierarchicalGrid.transactions.getAggregatedChanges(true)];
        this.childGrid.gridAPI.getChildGrids().forEach((grid) => {
            this.transactionsDataAll = this.transactionsDataAll.concat(grid.transactions.getAggregatedChanges(true));
        });
        this.dialogChanges.open();
    }

    public addSinger() {
        this.hierarchicalGrid.addRow(this.singer);
        ++this.id;
        this.cancel();
    }

    public removeRow(rowIndex) {
        const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
        row.delete();
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

    public cancel() {
        this.dialogChanges.close();
        this.dialogSinger.close();
        this.singer = {
            ID: this.id,
            Artist: 'Mock Jagger',
            Debut: 2005,
            GrammyAwards: 4,
            GrammyNominations: 7,
            HasGrammyAward: false
        };
    }
}
```
```html
<div class="grid-wrapper">
    <button igxButton="contained" (click)="dialogAddSinger.open()" class="addSingerBtn">Add Singer</button>
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" #hierarchicalGrid [batchEditing]="true" class="hgrid" [data]="data"
        [primaryKey]="'Artist'" [height]="'550px'" [width]="'100%'" [rowEditable]="true">
        <igx-column width="150px" [editable]="false">
            <ng-template igxCell let-cell="cell" let-val>
                <button igxButton (click)="removeRow(cell.id.rowIndex)"
                    [disabled]="cell.row.deleted">Delete</button>
            </ng-template>
        </igx-column>
        <igx-column field="Artist" header="Artist" [editable]="false" [dataType]="'string'"></igx-column>
        <igx-column field="HasGrammyAward" header="Has Grammy Award?" [editable]="true" [dataType]="'boolean'">
        </igx-column>
        <igx-column field="Debut" header="Debut" [editable]="true" dataType="number" [formatter]="formatter">
        </igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [editable]="true" dataType="number">
        </igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [editable]="true" dataType="number"></igx-column>

        <igx-row-island [height]="null" #childGrid [key]="'Albums'" [primaryKey]="'Album'" [rowEditable]="true">
            <igx-grid-toolbar *igxGridToolbar="let grid">

                <button igxButton [disabled]="!grid.transactions.canUndo" (click)="undo(grid)">Undo</button>
                <button igxButton [disabled]="!grid.transactions.canRedo" (click)="redo(grid)">Redo</button>

            </igx-grid-toolbar>

            <igx-column field="Album" [editable]="false" [dataType]="'string'"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [editable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [editable]="true" dataType="number">
            </igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [editable]="true" dataType="number">
            </igx-column>

        </igx-row-island>
    </igx-hierarchical-grid>
    <div class="buttons-row">
        <div class="buttons-wrapper">
            <button igxButton [disabled]="!hasTransactions" (click)="openCommitDialog()">Commit</button>
            <button igxButton [disabled]="!undoEnabledParent" (click)="undo(hierarchicalGrid)">Undo Parent</button>
            <button igxButton [disabled]="!redoEnabledParent" (click)="redo(hierarchicalGrid)">Redo Parent</button>
        </div>
    </div>
    <igx-dialog #dialogAddSinger title="New Singer" [rightButtonLabel]="'Add'" [leftButtonLabel]="'Cancel'"
        (leftButtonSelect)="cancel()" (rightButtonSelect)="addSinger()">
        <div class="dialogNewSinger">
            <igx-input-group>
                <label igxLabel for="artist">Artist</label>
                <input igxInput id="artist" type="text" [(ngModel)]="singer.Artist" />
            </igx-input-group>
            <igx-checkbox id="hasGrammyAward" [(ngModel)]="singer.HasGrammyAward">Has Grammy Award</igx-checkbox>
            <igx-input-group>
                <label igxLabel for="debut">Debut</label>
                <input igxInput id="debut" type="number" [(ngModel)]="singer.Debut" />
            </igx-input-group>
            <igx-input-group>
                <label igxLabel for="grammyNominations">Grammy Nominations</label>
                <input igxInput id="grammyNominations" type="number" [(ngModel)]="singer.GrammyNominations" />
            </igx-input-group>
            <igx-input-group>
                <label igxLabel for="grammyAwards">Grammy Awards</label>
                <input igxInput id="grammyAwards" type="number" [(ngModel)]="singer.GrammyAwards" />
            </igx-input-group>
        </div>
    </igx-dialog>
    <igx-dialog #dialogChanges title="Submit the following transactions?">
        <igx-grid [igxPreventDocumentScroll]="true" #dialogGrid [data]="transactionsDataAll" [rowHeight]="64" [primaryKey]="'id'"
            width="650px" height="300px" [emptyGridMessage]="'No available transactions'">
            <igx-column field="id" header="ID" [dataType]="'string'" width="150px"></igx-column>
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

.addSingerBtn.igx-button--contained{
    margin-bottom: 10px;
}

.dialogNewSinger {
    > * {
        margin-bottom: 8px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.igx-checkbox {
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 8px;
    padding-bottom: 5px;
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

.grid-wrapper {
    padding: 16px;
}
```
<div class="divider--half"></div>
> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows, and their last states.
## Usage
To get started import the `IgxHierarchicalGridModule` in the **app.module.ts** file:
```typescript
// app.module.ts
...
import { IgxHierarchicalGridModule } from 'igniteui-angular';
@NgModule({
    ...
    imports: [..., IgxHierarchicalGridModule],
    ...
})
export class AppModule {}
```
Then, all you need to do is enable `batchEditing` from your Hierarchical Grid:
```html
<igx-hierarchical-grid [data]="data" [batchEditing]="true">
  ...
</igx-hierarchical-grid>
```
This will ensure a proper instance of `Transaction` service is provided for the igx-hierarchical-grid. The proper `TransactionService` is provided through a `TransactionFactory`. You can learn more about this internal implementation in the [transactions topic](../transaction-classes.md#transaction-factory).
After batch editing is enabled, define a `IgxHierarchicalGrid` with bound data source and [`rowEditable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowEditable) set to true and bind:
```html
<igx-hierarchical-grid #hierarchicalGrid [batchEditing]="true" [data]="data" [primaryKey]="'Artist'"
    [height]="'580px'" [width]="'100%'" [rowEditable]="true" >
    ...
    <igx-row-island #childGrid [key]="'Albums'" [primaryKey]="'Album'" [rowEditable]="true">
        <igx-grid-toolbar></igx-grid-toolbar>
        ...
        <ng-template igxToolbarCustomContent let-grid="grid">
            <button igxButton [disabled]="!grid.transactions.canUndo" (click)="undo(grid)">Undo</button>
            <button igxButton [disabled]="!grid.transactions.canRedo" (click)="redo(grid)">Redo</button>
        </ng-template>
    </igx-row-island>
</igx-hierarchical-grid>
...
<div class="buttons-row">
    <div class="buttons-wrapper">
        <button igxButton [disabled]="!undoEnabledParent" (click)="undo(hierarchicalGrid)">Undo Parent</button>
        <button igxButton [disabled]="!redoEnabledParent" (click)="redo(hierarchicalGrid)">Redo Parent</button>
    </div>
</div>
...
```
The following code demonstrates the usage of the [`transactions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html#) API - undo, redo, commit.
```typescript
...
export class HierarchicalGridBatchEditingSampleComponent {
    public undo(grid: any) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.undo();
    }

    public redo(grid: any) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.redo();
    }

    public commit() {
        this.hierarchicalGrid.transactions.commit(this.data);
        this.childGrid.hgridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.commit(grid.data);
        });
        this.dialogChanges.close();
    }
}
```
> [!NOTE]
> The transactions API won't handle end of edit and you'd need to do it by yourself. Otherwise, `Hierarchical Grid` would stay in edit mode. One way to do that is by calling [`endEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#endEdit) in the respective method.
> [!NOTE]
> Disabling [`rowEditable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowEditable) property will modify `Hierarchical Grid` to create transactions on cell change and will not expose row editing overlay in the UI.
## API References
- [igxHierarchicalTransactionServiceFactory](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/index.html#igxhierarchicaltransactionservicefactory)
## Additional Resources
- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
- [Hierarchical Grid Overview](hierarchical-grid.md)
- [Hierarchical Grid Editing](editing.md)
- [Hierarchical Grid Row Editing](row-editing.md)
- [Hierarchical Grid Row Adding](row-adding.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
