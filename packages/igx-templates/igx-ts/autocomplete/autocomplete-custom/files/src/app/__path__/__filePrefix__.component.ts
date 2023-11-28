import { Component, Pipe, PipeTransform, forwardRef } from '@angular/core';
import { Towns } from './towns-data';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, 
	IgxAutocompleteDirective, IgxDropDownComponent, NgFor, IgxDropDownItemComponent, forwardRef(() => SimpleAutocompletePipeStartsWith)]
})
export class <%=ClassName%>Component {
  public towns: string[];
  public townSelected = '';

  constructor() {
    this.towns = Towns;
  }
}

@Pipe({ name: '<%=camelCaseName%>StartsWith' })
export class <%=ClassName%>PipeStartsWith implements PipeTransform {
  public transform(collection: string[], term = '') {
    return collection.filter(item => item.toLowerCase().startsWith(term.trim().toLowerCase()));
  }
}
