import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrIconButtonTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Icon button"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "icon-button";
		this.projectType = "igr-ts";
		this.name = "Icon button";
		this.description = "basic IgrIconButton";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrIconButtonTemplate();
