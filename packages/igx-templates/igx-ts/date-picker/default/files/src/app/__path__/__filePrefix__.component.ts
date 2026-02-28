import { Component, ViewEncapsulation } from '@angular/core';
import { IgxLayoutDirective, IgxDatePickerComponent } from '<%=igxPackage%>';;

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  imports: [IgxLayoutDirective, IgxDatePickerComponent],
})
export class <%=ClassName%>Component {
  public today: Date = new Date(Date.now());
}
