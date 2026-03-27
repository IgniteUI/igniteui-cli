import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrCheckboxTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Checkbox"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "checkbox";
		this.projectType = "igr-ts";
		this.name = "Checkbox";
		this.description = "basic IgrCheckbox";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrCheckboxTemplate();
