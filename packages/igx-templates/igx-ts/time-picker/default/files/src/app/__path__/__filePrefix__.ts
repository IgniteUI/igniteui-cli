import { Component, ViewEncapsulation } from '@angular/core';
import { IgxLayoutDirective, IgxTimePickerComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [IgxLayoutDirective, IgxTimePickerComponent]
})
export class <%=ClassName%> {
  public date: Date = new Date(Date.now());
}
