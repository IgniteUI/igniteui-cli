import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent, IgxGridComponent, State, Transaction, TransactionService } from '<%=igxPackage%>';
import { data, Product } from './data';

@Component({
  selector: 'app-<%=filePrefix%>',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  templateUrl: './<%=filePrefix%>.component.html',
  standalone: false
})
export class <%=ClassName%>Component implements OnInit {
  @ViewChild('gridRowEditTransaction', { static: true, read: IgxGridComponent }) public grid!: IgxGridComponent;
  @ViewChild(IgxDialogComponent, { static: true }) public dialog!: IgxDialogComponent;
  @ViewChild('dialogGrid', { static: true, read: IgxGridComponent }) public dialogGrid!: IgxGridComponent;

  public data: Product[];
  public transactionsData: Transaction[] = [];
  private addProductId: number;

  public get transactions(): TransactionService<Transaction, State> {
    return this.grid.transactions;
  }

  constructor() {
    this.data = data;
    this.addProductId = this.data.length + 1;
  }

  public ngOnInit(): void {
    this.transactionsData = this.transactions.getAggregatedChanges(true);
    this.grid.rendered$.subscribe(() => {
      this.transactions.onStateUpdate?.subscribe(() => {
        this.transactionsData = this.transactions.getAggregatedChanges(true);
      })
    })
  }

  public addRow(): void {
    this.grid.addRow({
      CategoryID: this.getRandomInt(1, 10),
      Discontinued: this.getRandomInt(1, 10) % 2 === 0,
      OrderDate: new Date(this.getRandomInt(2000, 2050), this.getRandomInt(0, 11), this.getRandomInt(1, 25)),
      ProductID: this.addProductId++,
      ProductName: 'Product with index ' + this.getRandomInt(0, 20),
      QuantityPerUnit: (this.getRandomInt(1, 10) * 10).toString() + ' pcs.',
      ReorderLevel: this.getRandomInt(10, 20),
      SupplierID: this.getRandomInt(1, 20),
      UnitPrice: this.getRandomInt(10, 1000),
      UnitsInStock: this.getRandomInt(1, 100),
      UnitsOnOrder: this.getRandomInt(1, 20)
    });
  }

  public classFromType(type: string): string {
    return `transaction--${type.toLowerCase()}`;
  }

  public deleteRow(rowID: any): void {
    this.grid.deleteRow(rowID);
  }

  public openCommitDialog(): void {
    this.dialog.open();
    this.dialogGrid.reflow();
  }

  public commit(): void {
    this.grid.transactions.commit(this.data);
    this.dialog.close();
  }

  public cancel(): void {
    this.dialog.close();
  }

  public discard(): void {
    this.grid.transactions.clear();
    this.dialog.close();
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public get hasTransactions(): boolean {
    return this.grid.transactions.getAggregatedChanges(false).length > 0;
  }

  public stateFormatter(value: string): string {
    return JSON.stringify(value);
  }

  public typeFormatter(value: string): string {
    return value.toUpperCase();
  }
}
