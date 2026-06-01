import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrIconTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Icon"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "icon";
		this.projectType = "igr-ts";
		this.name = "Icon";
		this.description = "basic IgrIcon";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrIconTemplate();
