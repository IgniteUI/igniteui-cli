import { Component } from '@angular/core';
import { IDialogEventArgs, IgxButtonDirective, IgxDialogComponent } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: true,
  imports: [IgxButtonDirective, IgxDialogComponent]
})
export class <%=ClassName%>Component {
  dialogOKSelected(args: IDialogEventArgs) {
    args.dialog.close();
  }
}
