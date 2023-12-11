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
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
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
