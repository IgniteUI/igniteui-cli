import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class <%=ClassName%> {
  public date: Date = new Date(Date.now());
}
