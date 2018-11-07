import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

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
				from: "igniteui-angular",
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
				]
			}
		];
	}
}
module.exports = new IgxGridCRMTemplate();
