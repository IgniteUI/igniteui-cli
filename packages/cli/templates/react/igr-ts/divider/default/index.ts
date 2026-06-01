import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrDividerTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Divider"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "divider";
		this.projectType = "igr-ts";
		this.name = "Divider";
		this.description = "basic IgrDivider";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrDividerTemplate();
