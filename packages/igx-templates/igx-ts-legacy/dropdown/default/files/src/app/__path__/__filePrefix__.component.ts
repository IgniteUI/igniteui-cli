import { Component } from '@angular/core';
import { Country, data } from './local-data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: false
})

export class <%=ClassName%>Component {
  public items: Country[] = data;
}
