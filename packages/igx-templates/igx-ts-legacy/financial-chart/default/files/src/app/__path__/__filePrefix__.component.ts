import { Component } from '@angular/core';
import { AMZNData, Stock } from './data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss']
})
export class <%=ClassName%>Component {
  public data: Stock[] = AMZNData;
}
