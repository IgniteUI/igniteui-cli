import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrInputTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Input"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "input";
		this.projectType = "igr-ts";
		this.name = "Input";
		this.description = "basic IgrInput";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrInputTemplate();
