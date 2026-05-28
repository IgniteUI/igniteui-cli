import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

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
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrBadgeTemplate();
