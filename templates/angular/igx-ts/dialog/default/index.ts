import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxDialogTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Dialog"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "dialog";
		this.projectType = "igx-ts";
		this.name = "Dialog";
		this.description = "Standart dialog template";
		this.dependencies = [{
			import: ["IgxDialogModule", "IgxButtonModule"],
			from: "igniteui-angular"
		}];
	}
}
module.exports = new IgxDialogTemplate();
