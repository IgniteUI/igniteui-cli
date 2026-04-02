import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrButtonTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Button"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "button";
		this.projectType = "igr-ts";
		this.name = "Button";
		this.description = "displays a button with customizable size and content.";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrButtonTemplate();
