import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent, IgxGridComponent, IgxHierarchicalGridComponent,
    IgxRowIslandComponent, Transaction } from 'igniteui-angular';
import { SINGERS } from './data';
import { Singer } from './singer';

@Component({
    selector: 'app-$(filePrefix)',
    templateUrl: './$(filePrefix).component.html',
    styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component implements OnInit {
    public localdata;
    public singer;
    public transactionsDataParent: Transaction[] = [];
    public transactionsDataChild: Transaction[] = [];
    public transactionsDataAll: Transaction[] = [];

    @ViewChild('dialogChanges', { read: IgxDialogComponent })
    public dialogChanges: IgxDialogComponent;

    @ViewChild('dialogGrid', { read: IgxGridComponent }) public dialogGrid: IgxGridComponent;

    @ViewChild('layout1')
    private layout1: IgxRowIslandComponent;

    @ViewChild('hGrid')
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    @ViewChild('dialogAddSinger', { read: IgxDialogComponent })
    private dialogSinger: IgxDialogComponent;

    constructor() { }

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.singer = new Singer();
        this.transactionsDataParent = this.hierarchicalGrid.transactions.getAggregatedChanges(true);
        this.hierarchicalGrid.transactions.onStateUpdate.subscribe(() => {
            this.transactionsDataParent = this.hierarchicalGrid.transactions.getAggregatedChanges(true);
        });
        this.transactionsDataChild = this.layout1.transactions.getAggregatedChanges(true);
        this.layout1.transactions.onStateUpdate.subscribe(() => {
            this.transactionsDataChild = this.layout1.transactions.getAggregatedChanges(true);
        });
    }

    public get undoEnabledParent(): boolean {
        return this.hierarchicalGrid.transactions.canUndo;
    }

    public get redoEnabledParent(): boolean {
        return this.hierarchicalGrid.transactions.canRedo;
    }

    public get undoEnabledChild(): boolean {
        return this.layout1.transactions.canUndo;
    }

    public get redoEnabledChild(): boolean {
        return this.layout1.transactions.canRedo;
    }

    public get hasTransactions(): boolean {
        return (this.hierarchicalGrid.transactions.getAggregatedChanges(false).length > 0) ||
            (this.layout1.transactions.getAggregatedChanges(false).length > 0);
    }

    public undoParent() {
        this.hierarchicalGrid.transactions.undo();
    }

    public redoParent() {
        this.hierarchicalGrid.transactions.redo();
    }

    public undoChild() {
        this.layout1.transactions.undo();
    }

    public redoChild() {
        this.layout1.transactions.redo();
    }

    public commit() {
        this.hierarchicalGrid.transactions.commit(this.localdata);
        this.layout1.hgridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.commit(grid.data);
        });
        this.dialogChanges.close();
    }

    public discard() {
        this.hierarchicalGrid.transactions.clear();
        this.layout1.transactions.clear();
        this.dialogChanges.close();
    }

    public openCommitDialog() {
        this.transactionsDataAll = this.transactionsDataParent.concat(this.transactionsDataChild);
        this.dialogChanges.open();
        this.dialogGrid.reflow();
    }

    public addSinger() {
        this.hierarchicalGrid.addRow(this.singer);
        this.closeDialog();
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

    public closeDialog() {
        this.dialogChanges.close();
        this.dialogSinger.close();
        this.singer = new Singer();
    }
}
