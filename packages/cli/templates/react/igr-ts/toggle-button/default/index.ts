import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrToggleButtonTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Toggle Button"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "toggle-button";
		this.projectType = "igr-ts";
		this.name = "Toggle Button";
		this.description = "basic IgrToggleButton";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrToggleButtonTemplate();
