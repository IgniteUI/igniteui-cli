import { Component } from '@angular/core';
import { IgxSimpleComboComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxSimpleComboComponent],
})
export class <%=ClassName%> {
  public localData = [
    { ProductID: 1, ProductName: 'Chai' },
    { ProductID: 2, ProductName: 'Chang' },
    { ProductID: 3, ProductName: 'Aniseed Syrup' }
  ];
}
