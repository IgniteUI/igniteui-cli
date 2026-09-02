import { Component } from '@angular/core';
import { IgxAvatarComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxAvatarComponent],
})
export class <%=ClassName%> {
}
