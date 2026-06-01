import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrInputTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Input"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "input";
		this.projectType = "igr-ts";
		this.name = "Input";
		this.description = "basic IgrInput";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrInputTemplate();
