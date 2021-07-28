import { Component } from '@angular/core';
import { ARTISTS, Artist } from './data';
import { CustomSummary } from './custom-summary';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss']
})
export class <%=ClassName%>Component {
  public localData: Artist[] = ARTISTS;
  public customSummary = CustomSummary;
}
