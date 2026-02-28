import { Component } from '@angular/core';
import { localData, State } from './local-data';
import {
  IgxComboComponent,
  IgxComboItemDirective,
  IgxComboHeaderDirective,
  IgxComboFooterDirective,
} from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
  imports: [
    IgxComboComponent,
    IgxComboItemDirective,
    IgxComboHeaderDirective,
    IgxComboFooterDirective,
  ]
})
export class <%=ClassName%>Component {
  public localData: State[] = localData;
}
