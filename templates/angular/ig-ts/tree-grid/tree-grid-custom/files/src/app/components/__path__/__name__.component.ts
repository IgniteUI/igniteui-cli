import { Component } from "@angular/core";
import { hierarchicalDS } from "../../assets/data-custom";

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<ig-tree-grid [(options)]="gridOptions" widgetId='tree-grid'></ig-tree-grid>
	`
})
export class $(ClassName)Component {
	public gridOptions: IgTreeGrid;
	public products: any[];

	constructor() {
		this.products = hierarchicalDS;
		this.gridOptions = {
			id: "customTreeGrid",
			width: "100%",
			dataSource: this.products,
			autoGenerateColumns: false,
			height: "500",
			primaryKey: "id",
			childDataKey: "products",
			autoCommit : true,
			columns: [
				{ headerText: "ID", key: "id", width: "10%", dataType: "number", hidden: true },
				{ headerText: "Tasks", key: "tasks", width: "30%", dataType: "string" },
				{ headerText: "Start", key: "start", width: "20%", dataType: "string" },
				{ headerText: "Finish", key: "finish", width: "20%", dataType: "string" },
				{ headerText: "Duration", key: "duration", width: "20%", dataType: "string" },
				{ headerText: "Progress", key: "progress", width: "10%", dataType: "string" }
			],

			features: $(treeGridFeatures)
		};
	}
}
