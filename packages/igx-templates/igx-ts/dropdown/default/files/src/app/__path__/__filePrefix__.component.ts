import { Component } from '@angular/core';
import { data } from './local-data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss']
})

export class <%=ClassName%>Component {

  public items = data;

}
