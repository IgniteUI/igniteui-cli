import { Component } from '@angular/core';
import { AMZNData, Stock } from './data';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [IgxFinancialChartModule]
})
export class <%=ClassName%>Component {
  public data: Stock[] = AMZNData;
}
