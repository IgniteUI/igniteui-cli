import { Component } from '@angular/core';
import { IgxDoughnutChartModule, IgxItemLegendModule, IgxRingSeriesModule } from 'igniteui-angular-charts';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxDoughnutChartModule, IgxItemLegendModule, IgxRingSeriesModule]
})
export class <%=ClassName%> {
  public data = [
    { MarketShare: 30, Company: 'Google' },
    { MarketShare: 15, Company: 'Microsoft' },
    { MarketShare: 30, Company: 'Apple' },
    { MarketShare: 15, Company: 'Samsung' },
    { MarketShare: 10, Company: 'Other' }
  ];
}
