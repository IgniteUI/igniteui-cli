import { Component } from '@angular/core';
import { ARTISTS, Artist } from './data';
import { CustomSummary } from './custom-summary';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  standalone: false
})
export class <%=ClassName%> {
  public localData: Artist[] = ARTISTS;
  public customSummary = CustomSummary;
}
