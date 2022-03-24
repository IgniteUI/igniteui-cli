import { Component } from '@angular/core';
import { DATA } from './data';
import { GridColumnDataType, IgxPivotDateDimension, IgxPivotNumericAggregate, IPivotConfiguration } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss']
})
export class <%=ClassName%>Component {
  public data = DATA;
  public pivotConfigHierarchy: IPivotConfiguration;
  public dateDimension: IgxPivotDateDimension;

  constructor() {
      this.dateDimension = new IgxPivotDateDimension({
          memberName: 'Date',
          enabled: true
      }, {
          months: false,
          quarters: true,
          years: true
      });

      this.pivotConfigHierarchy = {
          columns: [

              {
                  memberName: 'Country',
                  enabled: true
              },
              {

                  memberName: 'Product',
                  enabled: true
              }
          ],
          rows: [
              this.dateDimension
          ],
          values: [
              {
                  member: 'Sales',
                  aggregate: {
                      aggregator: IgxPivotNumericAggregate.sum,
                      key: 'Sum Of Sales',
                      label: 'Sum'
                  },
                  enabled: false,
                  dataType: GridColumnDataType.Currency
              },
              {
                  member: 'Profit',
                  aggregate: {
                      aggregator: IgxPivotNumericAggregate.sum,
                      key: 'Sum Of Profit',
                      label: 'Sum'
                  },
                  enabled: true,
                  dataType: GridColumnDataType.Currency
              }
          ],
          filters: [
              {
                  memberName: 'Month',
                  memberFunction: (data) => data['Month Name'],
                  enabled: false
              }
          ]
      };
  }


}

