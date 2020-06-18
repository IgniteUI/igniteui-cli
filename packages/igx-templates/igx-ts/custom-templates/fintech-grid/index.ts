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
			{ provide: "IgxExcelExporterService", from: "<%=igxPackage%>" },
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
				from: "<%=igxPackage%>"
			},
			{ import: "FormsModule", from: "@angular/forms" }
		];
		this.packages = ["igniteui-angular-core@~9.1.2", "igniteui-angular-charts@~9.0.1"];
	}
}
module.exports = new IgxFinTechGridTemplate();
