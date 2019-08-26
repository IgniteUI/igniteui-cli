import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxFinTechGridTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.id = "fintech-grid";
		this.projectType = "igx-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "FinTech Grid";
		this.description = "Grid with simulated high-frequency data feed";
		this.dependencies = [
			{ import: "IgxGridModule", from: "igniteui-angular" },
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
			{ import: "FormsModule", from: "@angular/forms" }
		];
	}
}
module.exports = new IgxFinTechGridTemplate();
