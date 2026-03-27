import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrDividerTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["IgrDivider"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "divider";
		this.projectType = "igr-ts";
		this.name = "Divider";
		this.description = "basic IgrDivider";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrDividerTemplate();
