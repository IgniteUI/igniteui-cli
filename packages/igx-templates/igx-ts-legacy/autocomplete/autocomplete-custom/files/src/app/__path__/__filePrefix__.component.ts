import { Component, Pipe, PipeTransform } from '@angular/core';
import { Towns } from './towns-data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: false
})
export class <%=ClassName%>Component {
  public towns: string[];
  public townSelected = '';

  constructor() {
    this.towns = Towns;
  }
}

@Pipe({ name: '<%=camelCaseName%>StartsWith', standalone: false })
export class <%=ClassName%>PipeStartsWith implements PipeTransform {
  public transform(collection: string[], term = '') {
    return collection.filter(item => item.toLowerCase().startsWith(term.trim().toLowerCase()));
  }
}
