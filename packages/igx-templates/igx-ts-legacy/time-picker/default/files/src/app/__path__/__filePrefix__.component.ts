import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class <%=ClassName%>Component {
  public date: Date = new Date(Date.now());
}
