import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrBadgeTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Badge"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "badge";
		this.projectType = "igr-ts";
		this.name = "Badge";
		this.description = "displays a badge with customizable variants and styles.";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrBadgeTemplate();
