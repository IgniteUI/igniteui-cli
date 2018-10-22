import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxGridBatchUpdatingTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "grid-batch-updating";
		this.projectType = "igx-ts";
		this.name = "Grid Batch Updating";
		this.description = "Sample IgxGrid with batch updating";
		this.dependencies = [
			{ import: "IgxGridModule", from: "igniteui-angular", root: true },
			{ import: "IgxIconModule", from: "igniteui-angular" }
		];
	}
}
module.exports = new IgxGridBatchUpdatingTemplate();
