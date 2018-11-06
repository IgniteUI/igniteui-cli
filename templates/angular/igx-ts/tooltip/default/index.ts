import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxTooltipTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tooltip"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "tooltip";
		this.projectType = "igx-ts";
		this.name = "Tooltip";
		this.description = "A fully customizable tooltip";
		this.dependencies = [{
			from: "igniteui-angular",
			import: ["IgxAvatarModule", "IgxTooltipModule", "IgxSwitchModule"]
		}];
	}
}
module.exports = new IgxTooltipTemplate();
