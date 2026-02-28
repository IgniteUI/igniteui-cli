import { Component, ViewEncapsulation } from '@angular/core';
import { IgxLayoutDirective, IgxCalendarComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [IgxLayoutDirective, IgxCalendarComponent]
})
export class <%=ClassName%>Component { }
