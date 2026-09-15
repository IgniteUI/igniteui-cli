import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxDateTimeEditorDirective, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [FormsModule, IgxDateTimeEditorDirective, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective],
})
export class <%=ClassName%> {
  public date = new Date();
}
