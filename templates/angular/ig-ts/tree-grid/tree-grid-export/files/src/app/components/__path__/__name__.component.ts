import { Component } from "@angular/core";
import { hierarchicalDS } from "../../assets/data-hierarchical";
import { flatDS } from "../../assets/data-flat";

declare var $;

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<h3>Flat Data Source</h3>
		<ig-tree-grid [(options)]="gridOptions1" widgetId="treegrid1"></ig-tree-grid>
		<br />
		<input type="button" id="exportFlatDS" value="Export Flat Data" (click)="exportFlatDS($event)" />
		<br />
		<br />
		<br />
		<h3>Hierarchical Data Source</h3>
		<ig-tree-grid [(options)]="gridOptions2" widgetId="treegrid2"></ig-tree-grid>
		<br />
		<input type="button" id="exportHierarchicalDS" value="Export Hierarchical Data" (click)="exportHierarchicalDS($event)" />
	`
})
export class $(ClassName)Component {
	public gridOptions1: IgTreeGrid;
	public gridOptions2: IgTreeGrid;
	public employees: any[];
	public tasks: any[];
	public exportFlatDS;
	public exportHierarchicalDS;

	constructor() {
		this.employees = flatDS;
		this.tasks = hierarchicalDS;
		this.gridOptions1 = {
			id: "treegrid1",
			width: "100%",
			dataSource: this.employees,
			autoGenerateColumns: false,
			primaryKey: "employeeID",
			initialExpandDepth: 1,
			foreignKey: "PID",
			columns: [
				{ headerText: "Employee ID", key: "employeeID", width: "200px", dataType: "number" },
				{ headerText: "First Name", key: "firstName", width: "220px", dataType: "string" },
				{ headerText: "Last Name", key: "lastName", width: "220px", dataType: "string" },
				{ headerText: "Reports To", key: "reportsTo", width: "130px", dataType: "number" }
			],

			features: $(treeGridFeatures)
		};
		this.gridOptions2 = {
			id: "treegrid2",
			width: "100%",
			dataSource: this.tasks,
			autoGenerateColumns: false,
			primaryKey: "id",
			columns: [
				{ headerText: "ID", key: "id", width: "120px", dataType: "number" },
				{ headerText: "Tasks", key: "tasks", width: "250px", dataType: "string" },
				{ headerText: "Start", key: "start", width: "130px", dataType: "string" },
				{ headerText: "Finish", key: "finish", width: "130px", dataType: "string" },
				{ headerText: "Duration", key: "duration", width: "100px", dataType: "string" },
				{ headerText: "Progress", key: "progress", width: "130px", dataType: "string" }
			],
			childDataKey: "products",
			initialExpandDepth:1,
			renderExpansionIndicatorColumn: true,
			features: [
				{ name: "Filtering" , inherit: true },{ name: "Hiding" , inherit: true }
			]
		};

		this.exportFlatDS = () => {
			$.ig.GridExcelExporter.exportGrid($("#treegrid1"), {
				fileName: "igTreeGrid1",
				worksheetName: "Page1",
				gridStyling: "none"
			});
		}

		this.exportHierarchicalDS = () => {
			$.ig.GridExcelExporter.exportGrid($("#treegrid2"), {
				fileName: "igTreeGrid2",
				worksheetName: "Page1",
				gridStyling: "none"
			});
		}
	}
}
