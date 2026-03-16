import { Component } from '@angular/core';
import { localData, State } from './local-data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})

export class <%=ClassName%> {
  public localData: State[] = localData;
}
