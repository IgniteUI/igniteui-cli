import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class <%=ClassName%>Component { }
