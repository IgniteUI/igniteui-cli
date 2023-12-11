import { Component, ViewEncapsulation } from '@angular/core';
import { IgxLayoutDirective, IgxTimePickerComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [IgxLayoutDirective, IgxTimePickerComponent]
})
export class <%=ClassName%>Component {
  public date: Date = new Date(Date.now());
}
