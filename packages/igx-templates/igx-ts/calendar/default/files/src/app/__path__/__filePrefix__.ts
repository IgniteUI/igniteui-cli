import { Component, ViewEncapsulation } from '@angular/core';
import { IgxLayoutDirective, IgxCalendarComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [IgxLayoutDirective, IgxCalendarComponent]
})
export class <%=ClassName%> { }
