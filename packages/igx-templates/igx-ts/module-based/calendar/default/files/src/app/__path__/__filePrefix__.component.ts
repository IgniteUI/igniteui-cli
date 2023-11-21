import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class <%=ClassName%>Component { }
