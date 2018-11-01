import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxGridBatchEditingTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Grid"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "grid-batch-editing";
		this.projectType = "igx-ts";
		this.name = "Grid Batch Editing";
		this.description = "Sample IgxGrid with batch editing";
		this.dependencies = [
			{ import: "IgxGridModule", from: "igniteui-angular", root: true },
			{ import: "IgxIconModule", from: "igniteui-angular" }
		];
	}
}
module.exports = new IgxGridBatchEditingTemplate();
