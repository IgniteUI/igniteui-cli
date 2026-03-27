import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrCardTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["IgrCard"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "card";
		this.projectType = "igr-ts";
		this.name = "Card";
		this.description = "basic IgrCard";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrCardTemplate();
