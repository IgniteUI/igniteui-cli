import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrNavDrawerTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Nav Drawer"];
		this.controlGroup = "Menus";
		this.listInComponentTemplates = true;
		this.id = "nav-drawer";
		this.projectType = "igr-ts";
		this.name = "Nav Drawer";
		this.description = "basic IgrNavDrawer";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrNavDrawerTemplate();
