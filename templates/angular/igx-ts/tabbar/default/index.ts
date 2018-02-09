import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxTabbarTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tabbar"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "tabbar";
		this.projectType = "igx-ts";
		this.name = "Tabbar";
		this.description = "Three item tabbar template";
		this.dependencies = ["IgxTabBarModule", "IgxAvatarModule", "IgxIconModule", "IgxRippleModule"];
	}
}
module.exports = new IgxTabbarTemplate();
