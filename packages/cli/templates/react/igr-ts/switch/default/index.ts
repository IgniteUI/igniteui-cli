import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrSwitchTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Switch"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "switch";
		this.projectType = "igr-ts";
		this.name = "Switch";
		this.description = "basic IgrSwitch";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrSwitchTemplate();
