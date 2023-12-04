import { Component } from '@angular/core';
import { Country, data } from './local-data';
import {
  IgxButtonDirective,
  IgxRippleDirective,
  IgxToggleActionDirective,
  IgxDropDownItemNavigationDirective,
  IgxDropDownComponent,
  IgxDropDownItemComponent,
} from '<%=igxPackage%>';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [
    IgxButtonDirective,
    IgxRippleDirective,
    IgxToggleActionDirective,
    IgxDropDownItemNavigationDirective,
    IgxDropDownComponent,
    NgFor,
    IgxDropDownItemComponent,
  ]
})

export class <%=ClassName%>Component {
  public items: Country[] = data;
}
