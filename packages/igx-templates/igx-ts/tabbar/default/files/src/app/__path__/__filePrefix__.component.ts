import { Component, ViewEncapsulation } from '@angular/core';
import {
	IgxBottomNavComponent,
	IgxBottomNavItemComponent,
	IgxBottomNavHeaderComponent,
	IgxIconComponent,
	IgxBottomNavContentComponent,
  } from 'igniteui-angular';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    IgxBottomNavComponent,
    IgxBottomNavItemComponent,
    IgxBottomNavHeaderComponent,
    IgxIconComponent,
    IgxBottomNavContentComponent,
  ],
})
export class <%=ClassName%>Component {
}
