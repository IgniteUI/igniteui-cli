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
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [
    IgxAvatarComponent,
    IgxTooltipTargetDirective,
    IgxTooltipDirective,
    IgxSwitchComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class <%=ClassName%> {
}
