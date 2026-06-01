import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

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
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrCheckboxTemplate();
