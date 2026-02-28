import { Component } from '@angular/core';
import { DATA } from './data';
import { IPivotConfiguration, IgxPivotNumericAggregate, IgxPivotGridComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
  imports: [IgxPivotGridComponent]
})
export class <%=ClassName%>Component {
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

