import { Component } from '@angular/core';
import { AMZNData, Stock } from './data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})
export class <%=ClassName%> {
  public data: Stock[] = AMZNData;
}
