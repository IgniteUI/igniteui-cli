import { NPM_DOCK_MANAGER, resolvePackage } from "@igniteui/cli-core";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgcDockManagerTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Dock Manager"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "dock-manager";
		this.projectType = "igx-ts";
		this.name = "Dock Manager";
		this.description = "basic IgcDockManager";
		this.packages = [ `${resolvePackage(NPM_DOCK_MANAGER)}@~2.1.1` ];
	}
}
module.exports = new IgcDockManagerTemplate();
