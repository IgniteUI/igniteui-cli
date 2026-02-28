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
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrl: './<%=filePrefix%>.component.scss',
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
