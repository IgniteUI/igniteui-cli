import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

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
			{
				import: [
				"IgxGridModule",
				"IgxFocusModule",
				"IgxButtonModule",
				"IgxDialogModule",
				"IgxRippleModule"
				],
				from: "<%=igxPackage%>"
			},
			{ import: "FormsModule", from: "@angular/forms" }
		];
	}
}
module.exports = new IgxGridBatchEditingTemplate();
