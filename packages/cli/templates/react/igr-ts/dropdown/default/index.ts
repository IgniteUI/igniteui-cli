import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrDropdownTemplate();
