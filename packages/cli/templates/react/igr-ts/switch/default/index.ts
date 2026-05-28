import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
		this.packages = ["igniteui-react@~19.7.0"];
	}
}
module.exports = new IgrSwitchTemplate();
