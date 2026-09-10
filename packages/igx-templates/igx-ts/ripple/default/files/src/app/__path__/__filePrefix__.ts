import { Component } from '@angular/core';
import { IgxRippleDirective } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxRippleDirective],
})
export class <%=ClassName%> {
}
