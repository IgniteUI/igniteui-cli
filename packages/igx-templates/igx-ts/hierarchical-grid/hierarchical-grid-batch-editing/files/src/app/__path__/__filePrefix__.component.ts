import { Component, ViewChild } from '@angular/core';
import {
  IgxDialogComponent,
  IgxGridComponent,
  IgxHierarchicalGridComponent,
  IgxRowIslandComponent,
  Transaction,
  IgxButtonDirective,
  IgxColumnComponent,
  IgxCellTemplateDirective,
  IgxGridToolbarDirective,
  IgxGridToolbarComponent,
  IgxInputGroupComponent,
  IgxLabelDirective,
  IgxInputDirective,
  IgxCheckboxComponent,
  GridType
} from '<%=igxPackage%>';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SINGERS } from './data';
import { Singer } from './singer';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [
    IgxButtonDirective,
    IgxHierarchicalGridComponent,
    IgxColumnComponent,
    IgxCellTemplateDirective,
    IgxRowIslandComponent,
    IgxGridToolbarDirective,
    IgxGridToolbarComponent,
    IgxDialogComponent,
    IgxInputGroupComponent,
    IgxLabelDirective,
    ReactiveFormsModule,
    IgxInputDirective,
    FormsModule,
    IgxCheckboxComponent,
    IgxGridComponent
  ]
})
export class <%=ClassName%>Component {
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
    return this.layout1.gridAPI.getChildGrids()
      .find(c => c.transactions.getAggregatedChanges(false).length > 0) !== undefined;
  }

  public localdata: Singer[] = SINGERS;
  public transactionsDataAll: Transaction[] = [];
  private id = 14;
  public singer: Singer = {
    ID: this.id,
    Artist: 'Mock Jagger',
    Debut: 2005,
    GrammyAwards: 4,
    GrammyNominations: 7,
    HasGrammyAward: false
  };

  @ViewChild('dialogChanges', { read: IgxDialogComponent, static: true })
  public dialogChanges!: IgxDialogComponent;

  @ViewChild('dialogGrid', { read: IgxGridComponent, static: true })
  public dialogGrid!: IgxGridComponent;

  @ViewChild('layout1', { static: true })
  private layout1!: IgxRowIslandComponent;

  @ViewChild('hierarchicalGrid', { static: true })
  private hierarchicalGrid!: IgxHierarchicalGridComponent;

  @ViewChild('dialogAddSinger', { read: IgxDialogComponent, static: true })
  private dialogSinger!: IgxDialogComponent;

  public formatter = (a: number): number => a;

  public undo(grid: GridType): void {
    /* exit edit mode */
    grid.crudService.endEdit(/* commit the edit transaction */ false);
    grid.transactions.undo();
  }

  public redo(grid: GridType): void {
    grid.transactions.redo();
  }

  public commit(): void {
    this.hierarchicalGrid.transactions.commit(this.localdata);
    this.layout1.gridAPI.getChildGrids().forEach((grid) => {
      grid.transactions.commit(grid.data as any[]);
    });
    this.dialogChanges.close();
  }

  public discard(): void {
    this.hierarchicalGrid.transactions.clear();
    this.layout1.gridAPI.getChildGrids().forEach((grid) => {
      grid.transactions.clear();
    });
    this.dialogChanges.close();
  }

  public openCommitDialog(): void {
    this.transactionsDataAll = [...this.hierarchicalGrid.transactions.getAggregatedChanges(true)];
    this.layout1.gridAPI.getChildGrids().forEach((grid) => {
      this.transactionsDataAll = this.transactionsDataAll.concat(grid.transactions.getAggregatedChanges(true));
    });
    this.dialogChanges.open();
    this.dialogGrid.reflow();
  }

  public addSinger(): void {
    this.hierarchicalGrid.addRow(this.singer);
    ++this.id;
    this.cancel();
  }

  public removeRow(rowIndex: number): void {
    const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
    if (row && row.delete) {
      row.delete();
    }
  }

  public stateFormatter(value: string): string {
    return JSON.stringify(value);
  }

  public typeFormatter(value: string): string {
    return value.toUpperCase();
  }

  public classFromType(type: string): string {
    return `transaction--${type.toLowerCase()}`;
  }

  public cancel(): void {
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
