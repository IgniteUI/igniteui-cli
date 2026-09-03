import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrComboTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Combo"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "combo";
		this.projectType = "igr-ts";
		this.name = "Combo";
		this.description = "basic IgrCombo";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrComboTemplate();
