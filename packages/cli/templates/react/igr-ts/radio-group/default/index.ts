import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

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
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrRadioGroupTemplate();
