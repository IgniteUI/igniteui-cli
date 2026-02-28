import { Component } from '@angular/core';
import { AMZNData, Stock } from './data';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
  imports: [IgxFinancialChartModule]
})
export class <%=ClassName%>Component {
  public data: Stock[] = AMZNData;
}
