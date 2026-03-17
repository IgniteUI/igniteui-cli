import { Component } from '@angular/core';
import { ARTISTS, Artist } from './data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})
export class <%=ClassName%> {
  public localData: Artist[] = ARTISTS;
}
