import { Component } from '@angular/core';
import { DATA } from './data';
import { IPivotConfiguration, IgxPivotNumericAggregate } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})
export class <%=ClassName%> {
  public data = DATA;
  public pivotConfigHierarchy: IPivotConfiguration = {
      columns: [
          {

              memberName: 'Product',
              memberFunction: (data) => data.Product.Name,
              enabled: true
          }

      ],
      rows: [
          {
              memberName: 'Seller',
              memberFunction: (data) => data.Seller.Name,
              enabled: true
          }
      ],
      values: [
          {
              member: 'NumberOfUnits',
              aggregate: {
                  aggregator: IgxPivotNumericAggregate.sum,
                  key: 'sum',
                  label: 'Sum'
              },
              enabled: true

          }
      ],
      filters: null
  };
}

