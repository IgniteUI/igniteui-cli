import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxListTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["List"];
		this.controlGroup = "Grids & Lists";
		this.listInComponentTemplates = true;
		this.id = "list";
		this.projectType = "igx-ts";
		this.name = "List";
		this.description = "Basic IgxList";
		this.dependencies = [{
			from: "igniteui-angular",
			import: ["IgxListModule", "IgxAvatarModule", "IgxIconModule", "IgxInputGroupModule", "IgxFilterModule"]
		}];
	}
}
module.exports = new IgxListTemplate();
