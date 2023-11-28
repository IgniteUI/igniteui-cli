import { Component, ViewEncapsulation } from '@angular/core';
import { IgxLayoutDirective, IgxCalendarComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [IgxLayoutDirective, IgxCalendarComponent]
})
export class <%=ClassName%>Component { }
