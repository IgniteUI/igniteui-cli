import { Component } from '@angular/core';
import { IgxGridTransaction, IgxTransactionService } from '<%=igxPackage%>';

@Component({
  providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
  selector: 'app-<%=filePrefix%>-with-transactions',
  template: '<ng-content></ng-content>'
})
export class <%=ClassName%>WithTransactionsComponent { }
