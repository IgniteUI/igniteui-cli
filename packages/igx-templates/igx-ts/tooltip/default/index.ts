import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

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
		this.dependencies = [
			{
				import: ["IgxAvatarModule", "IgxTooltipModule", "IgxSwitchModule"],
				from: "<%=igxPackage%>"
			},
			{ import: "FormsModule", from: "@angular/forms" }
		];
	}
}
module.exports = new IgxTooltipTemplate();
