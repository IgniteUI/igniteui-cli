import { Component, ViewEncapsulation } from '@angular/core';
import { IgxLayoutDirective, IgxDatePickerComponent } from '<%=igxPackage%>';;

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  encapsulation: ViewEncapsulation.Emulated,
  imports: [IgxLayoutDirective, IgxDatePickerComponent],
})
export class <%=ClassName%> {
  public today: Date = new Date(Date.now());
}
