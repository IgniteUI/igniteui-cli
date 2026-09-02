import { Component } from '@angular/core';
import {
  IgxCardComponent,
  IgxCardHeaderComponent,
  IgxCardHeaderTitleDirective,
  IgxCardHeaderSubtitleDirective,
  IgxCardMediaDirective,
  IgxCardContentDirective,
  IgxCardActionsComponent,
  IgxAvatarComponent,
  IgxButtonDirective
} from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardHeaderTitleDirective,
    IgxCardHeaderSubtitleDirective,
    IgxCardMediaDirective,
    IgxCardContentDirective,
    IgxCardActionsComponent,
    IgxAvatarComponent,
    IgxButtonDirective
  ],
})
export class <%=ClassName%> {
  public openUrl(url: string): void {
    window.open(url, '_blank');
  }
}
