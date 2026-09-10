import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxMaskDirective, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [FormsModule, IgxMaskDirective, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective],
})
export class <%=ClassName%> {
  public phoneNumber = '1234567890';
}
