import { Component } from '@angular/core';
import { IgxNavbarComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxNavbarComponent],
})
export class <%=ClassName%> {
  public canGoBack = true;

  public navigateBack(): void {
    console.log('navigate back');
  }
}
