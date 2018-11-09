import { Component, ViewChild } from '@angular/core';
import { data } from './data';

import { IgxGridComponent, IgxGridTransaction, IgxToggleDirective, IgxTransactionService } from 'igniteui-angular';

@Component({
  selector: 'app-$(filePrefix)',
  styleUrls: ['./$(filePrefix).component.scss'],
  templateUrl: './$(filePrefix).component.html',
  providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }]
})
export class $(ClassName)Component {
  @ViewChild('gridRowEditTransaction', { read: IgxGridComponent }) public grid: IgxGridComponent;
  @ViewChild(IgxToggleDirective) public toggle: IgxToggleDirective;

  public data: any[];
  private addProductId: number;
  constructor() {
    this.data = data;
    this.addProductId = this.data.length + 1;
  }

  public addRow() {
    this.grid.addRow({
      CategoryID: this.getRandomInt(1, 10),
      Discontinued: this.getRandomInt(1, 10) % 2 === 0,
      OrderDate: new Date(this.getRandomInt(2000, 2050), this.getRandomInt(0, 11), this.getRandomInt(1, 25))
      .toISOString().slice(0, 10),
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

  public deleteRow(event, rowID) {
    this.grid.deleteRow(rowID);
  }

  public undo() {
    this.grid.transactions.undo();
  }

  public redo() {
    this.grid.transactions.redo();
  }

  public commit() {
    this.grid.transactions.commit(this.data);
    this.toggle.close();
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
