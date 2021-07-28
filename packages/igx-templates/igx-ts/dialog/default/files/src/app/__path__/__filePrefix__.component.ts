import { Component } from '@angular/core';
import { IDialogEventArgs } from '<%=igxPackage%>';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss']
})

export class <%=ClassName%>Component {
  onDialogOKSelected(args: IDialogEventArgs) {
    args.dialog.close();
  }
}
