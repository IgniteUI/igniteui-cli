import { Component } from '@angular/core';
import { AMZNData, Stock } from './data';
import { IgxFinancialChartCoreModule } from 'igniteui-angular-charts';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [IgxFinancialChartCoreModule]
})
export class <%=ClassName%>Component {
  public data: Stock[] = AMZNData;
}
