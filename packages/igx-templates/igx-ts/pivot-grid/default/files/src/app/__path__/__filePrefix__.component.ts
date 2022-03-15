import { Component } from '@angular/core';
import { SALES_DATA_NEW } from './data';
import { IPivotConfiguration, IgxPivotDateDimension } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss']
})
export class <%=ClassName%>Component {
  public data = SALES_DATA_NEW;
  public pivotConfigHierarchy: IPivotConfiguration;
  public dateDimension: IgxPivotDateDimension;
}
