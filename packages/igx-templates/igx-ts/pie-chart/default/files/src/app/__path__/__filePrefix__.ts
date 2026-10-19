import { Component } from '@angular/core';
import { IgxItemLegendModule, IgxPieChartModule } from 'igniteui-angular-charts';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxItemLegendModule, IgxPieChartModule]
})
export class <%=ClassName%> {
  public data = [
    { MarketShare: 37, Category: 'Cooling' },
    { MarketShare: 25, Category: 'Residential' },
    { MarketShare: 12, Category: 'Heating' },
    { MarketShare: 11, Category: 'Lighting' },
    { MarketShare: 15, Category: 'Other' }
  ];
}
