import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrExpansionPanelTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Expansion Panel"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "expansion-panel";
		this.projectType = "igr-ts";
		this.name = "Expansion Panel";
		this.description = "basic IgrExpansionPanel";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrExpansionPanelTemplate();
