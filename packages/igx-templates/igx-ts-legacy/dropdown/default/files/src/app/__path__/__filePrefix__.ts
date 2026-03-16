import { Component } from '@angular/core';
import { Country, data } from './local-data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})

export class <%=ClassName%> {
  public items: Country[] = data;
}
