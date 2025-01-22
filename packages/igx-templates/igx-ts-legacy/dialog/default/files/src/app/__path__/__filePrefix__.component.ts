import { Component } from '@angular/core';
import { IDialogEventArgs } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: false
})

export class <%=ClassName%>Component {
  dialogOKSelected(args: IDialogEventArgs) {
    args.dialog.close();
  }
}
