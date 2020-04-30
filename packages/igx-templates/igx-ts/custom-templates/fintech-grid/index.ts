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
			{ import: "IgxCategoryChartModule", from: "igniteui-angular-charts" },
			{ provide: "IgxExcelExporterService", from: "igniteui-angular" },
			{
				import: [
					"IgxButtonGroupModule",
					"IgxButtonModule",
					"IgxDialogModule",
					"IgxGridModule",
					"IgxIconModule",
					"IgxRippleModule",
					"IgxSliderModule",
					"IgxSwitchModule",
					"IgxToggleModule"
				],
				from: "igniteui-angular"
			},
			{ import: "FormsModule", from: "@angular/forms" }
		];
		this.packages = ["tslib@^1.7.1", "igniteui-angular-core@~9.1.0", "igniteui-angular-charts@~9.1.0"];
	}
}
module.exports = new IgxFinTechGridTemplate();
