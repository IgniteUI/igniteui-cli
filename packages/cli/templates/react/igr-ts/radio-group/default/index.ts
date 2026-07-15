import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrRadioGroupTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Radio Group"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "radio-group";
		this.projectType = "igr-ts";
		this.name = "Radio Group";
		this.description = "basic IgrRadioGroup";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrRadioGroupTemplate();
