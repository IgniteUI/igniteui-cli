import { IgniteUIForAngularTemplate } from "../../../../IgniteUIForAngularTemplate";

class IgxInputGroupTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Input Group"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "input-group";
		this.projectType = "igx-ts";
		this.name = "Input Group";
		this.description = "IgxInputGroup form view template";
	}
}
module.exports = new IgxInputGroupTemplate();
