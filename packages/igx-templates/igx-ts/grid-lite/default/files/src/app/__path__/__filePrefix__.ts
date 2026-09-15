import { Component } from '@angular/core';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent } from '<%=igxPackage%>/grids/lite';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxGridLiteComponent, IgxGridLiteColumnComponent],
})
export class <%=ClassName%> {
  public data = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 25 },
    { id: 3, firstName: 'Alex', lastName: 'Turner', age: 41 }
  ];
}
