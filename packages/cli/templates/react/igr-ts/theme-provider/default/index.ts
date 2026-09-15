import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrThemeProviderTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Theme Provider"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "theme-provider";
		this.projectType = "igr-ts";
		this.name = "Theme Provider";
		this.description = "basic IgrThemeProvider";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrThemeProviderTemplate();
