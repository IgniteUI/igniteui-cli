import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  encapsulation: ViewEncapsulation.Emulated,
  standalone: false
})
export class <%=ClassName%> {
  public today: Date = new Date(Date.now());
}
