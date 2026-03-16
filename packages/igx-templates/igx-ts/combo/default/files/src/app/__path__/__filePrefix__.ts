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
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [
    IgxComboComponent,
    IgxComboItemDirective,
    IgxComboHeaderDirective,
    IgxComboFooterDirective,
  ]
})
export class <%=ClassName%> {
  public localData: State[] = localData;
}
