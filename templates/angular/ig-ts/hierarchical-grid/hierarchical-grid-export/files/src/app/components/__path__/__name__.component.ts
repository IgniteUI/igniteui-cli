import { Component } from "@angular/core";
import { northwind } from "../../assets/northwind";

declare var $;

@Component({
	selector: "app-hierarchical-grid-export",
	template: `
		<h2>Data Export Mode</h2>
		<select id="dataExportMode" (change)="selectionChanged($event)">
			<option value="allRows">All Rows</option>
			<option value="expandedRows">Expanded Rows</option>
		</select>
		<input type="button" id="exportBtn" value="Export grid" (click)="export($event)" />
		<ig-hierarchical-grid [(options)]="gridOptions" widgetId='hierarchical-grid-export'></ig-hierarchical-grid>
	`
})
export class $(ClassName)Component {
	public gridOptions: IgGrid;
	public data: any[];
	public export;
	public exportMode:string;
	public selectionChanged;

	constructor() {
		this.exportMode = "allRows";
		this.data = northwind.results;
		this.gridOptions = {
			width: "100%",
			autoCommit: true,
			autoGenerateColumns: false,
			autofitLastColumn: false,
			dataSource: this.data,
			responseDataKey: "results",
			dataSourceType: "json",
			features: $(gridFeatures),
			childrenDataProperty: "Orders",
			autoGenerateLayouts:false,
			columns: [
				{ headerText: "Employee ID", key: "EmployeeID", dataType: "string", hidden: true },
				{ headerText: "Last Name", key: "LastName", width: "15%", dataType: "string" },
				{ headerText: "Country", key: "Country", width: "15%", dataType: "string" },
				{ headerText: "Age", key: "Age", width: "15%", dataType: "number" },
				{ headerText: "Is Active", key: "IsActive", width: "15%", dataType: "bool", format: "checkbox" },
				{ headerText: "Company", key: "Company", width: "20%", dataType: "string", unbound: true, formula: function () { return "http://infragistics.com/"; } },
				{ headerText: "Register Date", key: "RegistererDate", width: "20%", dataType: "date" }
			],
			columnLayouts: [
				{
					key: "Orders",
					autoCommit: true,
					autoGenerateColumns: false,
					autofitLastColumn: false,
					primaryKey: "OrderID",
					width: "100%",
					columns: [
						{ key: "OrderID", headerText: "Order ID", dataType: "number", width: "10%", hidden: true },
						{ key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
						{ key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
						{ key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "25%" },
						{ key: "ShipCity", headerText: "Ship City", dataType: "string", width: "20%" },
						{ key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "20%" }
					],
				}
			]
		};
		
		this.export = () => {
			$.ig.GridExcelExporter.exportGrid($("#hierarchical-grid-export"), {
				fileName: "igGrid",
				worksheetName: "Page1",
				gridStyling: "none",
				dataExportMode: this.exportMode
			});
		};

		this.selectionChanged = (event: Event) => {
		 	this.exportMode=(<HTMLSelectElement>event.target).value;
		 };
	}
}
