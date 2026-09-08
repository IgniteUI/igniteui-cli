import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrDialogTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Dialog"];
		this.controlGroup = "Notifications";
		this.listInComponentTemplates = true;
		this.id = "dialog";
		this.projectType = "igr-ts";
		this.name = "Dialog";
		this.description = "basic IgrDialog";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrDialogTemplate();
