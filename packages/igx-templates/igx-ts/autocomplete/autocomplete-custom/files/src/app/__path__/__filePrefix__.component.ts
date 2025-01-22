import { Component, Pipe, PipeTransform, forwardRef } from '@angular/core';
import { Towns } from './towns-data';
import { NgFor } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  IgxInputGroupComponent,
  IgxLabelDirective,
  IgxInputDirective,
  IgxAutocompleteDirective,
  IgxDropDownComponent,
  IgxDropDownItemComponent,
} from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    IgxInputGroupComponent,
    IgxLabelDirective,
    IgxInputDirective,
    IgxAutocompleteDirective,
    IgxDropDownComponent,
    NgFor,
    IgxDropDownItemComponent,
    forwardRef(() => <%=ClassName%>PipeStartsWith),
  ],
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
