import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrSelectTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Select"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "select";
		this.projectType = "igr-ts";
		this.name = "Select";
		this.description = "basic IgrSelect";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrSelectTemplate();
