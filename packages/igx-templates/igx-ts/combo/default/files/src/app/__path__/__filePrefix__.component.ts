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
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
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
