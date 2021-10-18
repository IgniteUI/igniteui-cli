import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";
import { NPM_DOCK_MANAGER, resolveIgcPackage } from "../../../package-resolve";

class IgcDockManagerTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Dock Manager"];
		this.controlGroup = "Layouts";
		this.listInComponentTemplates = true;
		this.id = "dock-manager";
		this.projectType = "igc-ts";
		this.name = "Dock Manager";
		this.description = "basic IgcDockManager";
		// "igniteui-dockmanager@~1.0.0":
		this.packages = [ `${resolveIgcPackage(NPM_DOCK_MANAGER)}@~1.0.0` ];
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcDockManagerTemplate();
