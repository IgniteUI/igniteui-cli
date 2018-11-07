import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxGridAwesomeTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.id = "awesome-grid";
		this.projectType = "igx-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "Awesome Grid";
		this.description = "Awesome IgxGrid";
		this.dependencies = [
			{ import: "IgxGridModule", from: "igniteui-angular" },
			{
				import: [
					"IgxProgressBarModule",
					"IgxIconModule",
					"IgxAvatarModule",
					"IgxBadgeModule",
					"IgxSwitchModule",
					"IgxInputGroupModule",
					"IgxButtonModule"
				],
				from: "igniteui-angular"
			}
		];
	}
}
module.exports = new IgxGridAwesomeTemplate();
