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
			{ import: "IgxGridModule", from: "<%=igxPackage%>" },
			{
				provide: [
				"IgxCsvExporterService",
				"IgxExcelExporterService"
			],
				from: "<%=igxPackage%>" },
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
				from: "<%=igxPackage%>"
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
		this.packages = ["igniteui-angular-core@~19.0.0", "igniteui-angular-charts@~19.0.0"];
	}
}
module.exports = new IgxGridCRMTemplate();
