import { Component } from '@angular/core';
import { localData, State } from './local-data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
  standalone: false
})

export class <%=ClassName%>Component {
  public localData: State[] = localData;
}
