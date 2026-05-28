import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrCardTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Card"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "card";
		this.projectType = "igr-ts";
		this.name = "Card";
		this.description = "basic IgrCard";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrCardTemplate();
