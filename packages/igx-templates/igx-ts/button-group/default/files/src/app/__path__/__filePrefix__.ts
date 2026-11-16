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
    { label: 'Bold', icon: 'format_bold', selected: false },
    { label: 'Italic', icon: 'format_italic', selected: false },
    { label: 'Underline', icon: 'format_underlined', selected: false }
  ];
}
