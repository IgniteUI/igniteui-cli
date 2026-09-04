import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrHighlightTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Highlight"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "highlight";
		this.projectType = "igr-ts";
		this.name = "Highlight";
		this.description = "basic IgrHighlight";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrHighlightTemplate();
