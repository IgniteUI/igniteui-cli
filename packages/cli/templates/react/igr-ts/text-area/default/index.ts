import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrTextAreaTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Text area"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "text-area";
		this.projectType = "igr-ts";
		this.name = "Text area";
		this.description = "basic IgrTextarea";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrTextAreaTemplate();
