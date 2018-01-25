import { Component } from "@angular/core";
import { employees } from "../../assets/employees";
import { IgComboComponent } from 'igniteui-angular2';

declare var $;

@Component({
	selector: "app-grid-export",
	template: `
		<h1>$(description)</h1>
		<h2>Select columns to ignore</h2>
		<ig-combo [(options)]="comboOptions" widgetId="combo" [(ngModel)]="comboOptions.value" (selectionChanged)="selectionChanged($event)"></ig-combo>
		<ig-grid [(options)]="gridOptions" widgetId="grid-export"></ig-grid>
		<br />
		<input type="button" id="exportBtn" value="Export grid" (click)="export($event)" />
	`
})
export class $(ClassName)Component {
	public comboOptions: IgCombo;
	public gridOptions: IgGrid;
	public data: any[];
	public export;
	public keys: any[];
	public columnsToSkip: any[];
	public selectionChanged;
	
	constructor() {
		this.keys = ["EmployeeID", "LastName", "Country", "Age", "IsActive", "Company", "RegistererDate"];
		this.comboOptions = {
			width: "200px",
			mode: "dropdown",
			dataSource: this.keys,
			multiSelection:{
				enabled: true,
				showCheckboxes: true
			}
		};
		this.columnsToSkip = [];
	
		this.data = employees;
		this.gridOptions = {
			columns: [
				{ headerText: "Employee ID", key: "EmployeeID", dataType: "string", hidden: true },
				{ headerText: "Last Name", key: "LastName", width: "15%", dataType: "string" },
				{ headerText: "Country", key: "Country", width: "15%", dataType: "string" },
				{ headerText: "Age", key: "Age", width: "15%", dataType: "number" },
				{ headerText: "Is Active", key: "IsActive", width: "15%", dataType: "bool", format: "checkbox" },
				{ headerText: "Company", key: "Company", width: "20%", dataType: "string", unbound: true, formula: function () { return "http://infragistics.com/"; } },
				{ headerText: "Register Date", key: "RegistererDate", width: "20%", dataType: "date" }
			],
			autofitLastColumn: true,
			autoGenerateColumns: false,
			width: "100%",
			dataSource: this.data,
			autoCommit : true,
			primaryKey: "EmployeeID",
			features: $(gridFeatures)
	};

		this.export = () => {
			$.ig.GridExcelExporter.exportGrid($("#grid-export"), {
				fileName: "igGrid",
				worksheetName: "Page1",
				gridStyling: "none",
				columnsToSkip: this.columnsToSkip
			});
		}

		this.selectionChanged = (ev) => {
			this.columnsToSkip = [];
			let selection = ev.ui.items;
			for (let entry of selection) {
				this.columnsToSkip.push(entry.data.text);
			}
		}
	}
}
