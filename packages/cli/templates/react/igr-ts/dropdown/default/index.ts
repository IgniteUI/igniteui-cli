import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrDropdownTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Dropdown"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "dropdown";
		this.projectType = "igr-ts";
		this.name = "Dropdown";
		this.description = "basic IgrDropdown";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrDropdownTemplate();
