import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxTabsTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tabs"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "tabs";
		this.projectType = "igx-ts";
		this.name = "Tabs";
		this.description = "Basic IgxTabs sample";
		this.dependencies = [{
			import: ["IgxTabsModule", "IgxCardModule", "IgxAvatarModule", "IgxButtonModule", "IgxRippleModule"],
			from: "igniteui-angular"
		}];
	}
}
module.exports = new IgxTabsTemplate();
