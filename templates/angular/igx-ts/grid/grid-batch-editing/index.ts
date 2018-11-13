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
			{ declare: "GridWithTransactionsComponent", from: "./src/app/$(filePrefix)/grid-transaction.component.ts" },
			{ import: ["IgxGridModule", "IgxFocusModule", "IgxButtonModule", "IgxDialogModule"], from: "igniteui-angular" },
			{ import: "FormsModule", from: "@angular/forms" }
		];
	}
}
module.exports = new IgxGridBatchEditingTemplate();
