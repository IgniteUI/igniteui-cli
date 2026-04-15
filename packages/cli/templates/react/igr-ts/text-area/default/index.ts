import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrTextAreaTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Text area"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "text-area";
		this.projectType = "igr-ts";
		this.name = "Text area";
		this.description = "basic IgrTextarea";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrTextAreaTemplate();
