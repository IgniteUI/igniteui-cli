import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

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
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrExpansionPanelTemplate();
