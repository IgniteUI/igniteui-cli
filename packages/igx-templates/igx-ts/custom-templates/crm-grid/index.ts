import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxGridCRMTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.id = "crm-grid";
		this.projectType = "igx-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "CRM Grid";
		this.description = "CRM IgxGrid";
		this.dependencies = [
			{ import: "IgxGridModule", from: "igniteui-angular" },
			{
				provide: [
				"IgxCsvExporterService",
				"IgxExcelExporterService"
			],
				from: "igniteui-angular" },
			{
				import: [
					"IgxAvatarModule",
					"IgxBadgeModule",
					"IgxButtonModule",
					"IgxIconModule",
					"IgxInputGroupModule",
					"IgxProgressBarModule",
					"IgxRippleModule",
					"IgxSwitchModule",
					"IgxToggleModule",
					"IgxCheckboxModule"
				],
				from: "igniteui-angular"
			},
			{
				import: [
					"IgxSparklineModule",
					"IgxSparklineCoreModule"
				],
				from: "igniteui-angular-charts"
			},
			{ import: "FormsModule", from: "@angular/forms" }
		];
		this.packages = ["tslib@^1.7.1", "igniteui-angular-core@~8.2.12", "igniteui-angular-charts@~8.2.12"];
	}
}
module.exports = new IgxGridCRMTemplate();
