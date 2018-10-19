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
		this.description = "basic IgxList";
		this.dependencies = [{
			from: "igniteui-angular",
			import: ["IgxListModule", "IgxAvatarModule", "IgxIconModule",
			"IgxInputGroupModule", "IgxFilterModule"]
		}, {
			from: "@angular/common",
			import: ["CommonModule"]
		}, {
			from: "@angular/forms",
			import: ["FormsModule"]
		}];
	}
}
module.exports = new IgxListTemplate();
