import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrToastTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Toast"];
		this.controlGroup = "Notifications";
		this.listInComponentTemplates = true;
		this.id = "toast";
		this.projectType = "igr-ts";
		this.name = "Toast";
		this.description = "basic IgrToast";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrToastTemplate();
