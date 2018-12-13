import { Component } from '@angular/core';
import { IgxGridTransaction, IgxTransactionService } from 'igniteui-angular';

@Component({
  providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
  selector: 'app-$(filePrefix)-with-transactions',
  template: '<ng-content></ng-content>'
})
export class $(ClassName)WithTransactionsComponent { }
