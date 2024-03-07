import { NPM_DOCK_MANAGER, TypeScriptFileUpdate, resolveIgxPackage } from "@igniteui/cli-core";
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
		// "igniteui-dockmanager@~1.0.0":
		this.packages = [ `${resolveIgxPackage(NPM_DOCK_MANAGER)}@~1.8.0` ];
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcDockManagerTemplate();
