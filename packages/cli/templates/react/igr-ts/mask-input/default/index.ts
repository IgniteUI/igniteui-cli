import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrMaskInputTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Mask Input"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "mask-input";
		this.projectType = "igr-ts";
		this.name = "Mask Input";
		this.description = "basic IgrMaskInput";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrMaskInputTemplate();
