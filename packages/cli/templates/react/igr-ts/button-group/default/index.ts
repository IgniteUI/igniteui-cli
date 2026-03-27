import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrButtonGroupTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Button group"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "button-group";
		this.projectType = "igr-ts";
		this.name = "Button group";
		this.description = "basic IgrButtonGroup";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrButtonGroupTemplate();
