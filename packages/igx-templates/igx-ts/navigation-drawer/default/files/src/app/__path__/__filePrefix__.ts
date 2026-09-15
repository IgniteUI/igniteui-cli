import { Component } from '@angular/core';
import {
  IgxNavigationDrawerComponent,
  IgxNavDrawerItemDirective,
  IgxNavDrawerTemplateDirective,
  IgxRippleDirective,
  IgxButtonDirective
} from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [
    IgxNavigationDrawerComponent,
    IgxNavDrawerItemDirective,
    IgxNavDrawerTemplateDirective,
    IgxRippleDirective,
    IgxButtonDirective
  ],
})
export class <%=ClassName%> {
  public isOpen = true;
}
