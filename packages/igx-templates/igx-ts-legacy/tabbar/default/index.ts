import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxBottomNavTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Bottom Navigation"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "bottom-nav";
		this.projectType = "igx-ts";
		this.name = "Bottom Navigation";
		this.description = "three item bottom navigation template";
		this.dependencies = [{
			import: ["IgxBottomNavModule", "IgxAvatarModule", "IgxIconModule", "IgxRippleModule"],
			from: "<%=igxPackage%>"
		}, {
			import: "CommonModule",
			from: "@angular/common"
		}];
	}
}
module.exports = new IgxBottomNavTemplate();
