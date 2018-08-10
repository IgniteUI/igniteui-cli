import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular';

@Component({
	selector: 'app-$(filePrefix)',
	templateUrl: './$(filePrefix).component.html',
	styleUrls: ['./$(filePrefix).component.css']
})

export class $(ClassName)Component {
	public dialogMessage: string = "";

	onDialogOKSelected(args) {
		args.dialog.close();
	}
	public closeDialog(evt) {}
}

