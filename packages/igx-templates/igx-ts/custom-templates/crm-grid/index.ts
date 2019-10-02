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
			{ provide: "IgxExcelExporterService", from: "igniteui-angular" },
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
			{ import: "FormsModule", from: "@angular/forms" }
		];
	}
}
module.exports = new IgxGridCRMTemplate();
