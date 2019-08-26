import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxTreeGridFinTechTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.id = "fintech-tree-grid";
		this.projectType = "igx-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "FinTech Tree Grid";
		this.description = "This sample demonstrates the TreeGrid handling thousands of updates per second.";
		this.dependencies = [
			{ import: "IgxTreeGridModule", from: "igniteui-angular" },
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
			{ declare: "<%=ClassName%>TreeGridGroupingPipe", from: "./src/app/__path__/tree-grid-grouping.pipe.ts" }
		];
	}
}
module.exports = new IgxTreeGridFinTechTemplate();
