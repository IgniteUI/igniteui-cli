import { Component } from '@angular/core';
import { IgxAvatarComponent, IgxBadgeComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxAvatarComponent, IgxBadgeComponent],
})
export class <%=ClassName%> {
}
