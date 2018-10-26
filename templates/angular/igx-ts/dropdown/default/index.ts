import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxDropDownTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Drop Down"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "dropdown";
		this.projectType = "igx-ts";
		this.name = "Drop Down";
		this.description = "Basic IgxDropDown sample";
		this.dependencies = [{
			import: ["IgxDropDownModule", "IgxButtonModule", "IgxToggleModule"],
			from: "igniteui-angular"
		}];
	}
}
module.exports = new IgxDropDownTemplate();
