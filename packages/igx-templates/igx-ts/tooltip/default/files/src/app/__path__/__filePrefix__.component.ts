import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  IgxAvatarComponent,
  IgxTooltipTargetDirective,
  IgxTooltipDirective,
  IgxSwitchComponent,
} from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  templateUrl: './<%=filePrefix%>.component.html',
  standalone: true,
  imports: [
    IgxAvatarComponent,
    IgxTooltipTargetDirective,
    IgxTooltipDirective,
    IgxSwitchComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class <%=ClassName%>Component {
}
