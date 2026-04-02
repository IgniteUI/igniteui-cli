import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrIconTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Icon"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "icon";
		this.projectType = "igr-ts";
		this.name = "Icon";
		this.description = "basic IgrIcon";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrIconTemplate();
