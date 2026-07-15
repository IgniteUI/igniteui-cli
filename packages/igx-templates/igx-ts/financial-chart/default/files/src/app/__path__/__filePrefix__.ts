import { Component } from '@angular/core';
import { AMZNData, Stock } from './data';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxFinancialChartModule]
})
export class <%=ClassName%> {
  public data: Stock[] = AMZNData;
}
