import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";

class IgrAvatarTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Avatar"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "avatar";
		this.projectType = "igr-ts";
		this.name = "Avatar";
		this.description = "displays an avatar with customizable shape, size, and initials.";
		this.packages = ["igniteui-react@~19.5.2"];
	}
}
module.exports = new IgrAvatarTemplate();
