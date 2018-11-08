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
			import: ["IgxListModule", "IgxAvatarModule", "IgxIconModule", "IgxInputGroupModule", "IgxFilterModule"],
			from: "igniteui-angular"
		}, {
			import: ["CommonModule"],
			from: "@angular/common"
		}, {
			import: ["FormsModule"],
			from: "@angular/forms"
		}];
	}
}
module.exports = new IgxListTemplate();
