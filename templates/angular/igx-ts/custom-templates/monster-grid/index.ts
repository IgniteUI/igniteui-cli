import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxGridMonsterTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.id = "monster-grid";
		this.projectType = "igx-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "Monster Grid";
		this.description = "Monster IgxGrid";
		this.dependencies = [
			{ import: "IgxGridModule", from: "igniteui-angular", root: true },
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
module.exports = new IgxGridMonsterTemplate();
