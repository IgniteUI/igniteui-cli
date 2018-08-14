import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxDropDownTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["DropDown"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "dropdown";
		this.projectType = "igx-ts";
		this.name = "DropDown";
		this.description = "Basic IgxDropDown sample";
		this.dependencies = [{
			from: "igniteui-angular",
			import: ["IgxDropDownModule", "IgxButtonModule", "IgxToggleModule"]
		}];
	}
}
module.exports = new IgxDropDownTemplate();
