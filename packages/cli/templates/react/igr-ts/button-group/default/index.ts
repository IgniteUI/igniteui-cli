import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

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
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrButtonGroupTemplate();
