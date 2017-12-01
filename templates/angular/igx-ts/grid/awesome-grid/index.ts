import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxGridAwesomeTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Grid"];
		this.controlGroup = "Grids";
		this.listInComponentTemplates = true;
		this.id = "awesome-grid";
		this.projectType = "igx-ts";
		this.name = "Awesome Grid";
		this.description = "Awesome IgxGrid";
		this.dependencies = [
			"IgxGridModule",
			"IgxProgressBarModule",
			"IgxAvatarModule",
			"IgxBadgeModule",
			"IgxSwitchModule"
		];
	}
}
module.exports = new IgxGridAwesomeTemplate();
