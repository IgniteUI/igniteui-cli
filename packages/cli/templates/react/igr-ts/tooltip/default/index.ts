import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrTooltipTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Tooltip"];
		this.controlGroup = "Interactions";
		this.listInComponentTemplates = true;
		this.id = "tooltip";
		this.projectType = "igr-ts";
		this.name = "Tooltip";
		this.description = "basic IgrTooltip";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrTooltipTemplate();
