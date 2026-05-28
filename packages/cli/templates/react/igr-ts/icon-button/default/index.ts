import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrIconButtonTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Icon button"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "icon-button";
		this.projectType = "igr-ts";
		this.name = "Icon button";
		this.description = "basic IgrIconButton";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrIconButtonTemplate();
