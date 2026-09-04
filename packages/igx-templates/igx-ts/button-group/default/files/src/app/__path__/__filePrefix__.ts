import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxButtonGroupComponent],
})
export class <%=ClassName%> {
  public fontOptions = [
    { icon: 'format_bold', selected: false },
    { icon: 'format_italic', selected: false },
    { icon: 'format_underlined', selected: false }
  ];
}
