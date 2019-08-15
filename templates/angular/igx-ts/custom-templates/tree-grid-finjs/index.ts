import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxTreeGridFinTechTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.id = "tree-grid-fintech";
		this.projectType = "igx-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "Tree Grid FinTech";
		this.description = "This sample demonstrates the TreeGrid handling thousands of updates per second.";
		this.dependencies = [
			{ import: "IgxTreeGridModule", from: "igniteui-angular" },
			{ provide: "LocalDataService", from: "./src/app/__path__/localData.service.ts"},
			{ provide: "IgxExcelExporterService", from: "igniteui-angular" },
			{
				import: [
					"IgxCheckboxModule",
					"IgxButtonModule",
					"IgxSwitchModule",
					"IgxSliderModule"
				],
				from: "igniteui-angular"
			},
			{ import: "FormsModule", from: "@angular/forms" },
			{ declare: "TreeGridGroupingPipe", from: "./src/app/__path__/tree-grid-grouping.pipe.ts" }
		];
	}
}
module.exports = new IgxTreeGridFinTechTemplate();
