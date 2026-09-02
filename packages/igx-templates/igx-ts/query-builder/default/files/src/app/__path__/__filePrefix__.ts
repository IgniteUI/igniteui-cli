import { Component } from '@angular/core';
import { IgxQueryBuilderComponent, EntityType } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxQueryBuilderComponent],
})
export class <%=ClassName%> {
  public entities: EntityType[] = [
    {
      name: 'Products',
      fields: [
        { field: 'ProductName', dataType: 'string' },
        { field: 'UnitPrice', dataType: 'number' },
        { field: 'InStock', dataType: 'boolean' },
        { field: 'OrderDate', dataType: 'date' }
      ]
    }
  ];
}
