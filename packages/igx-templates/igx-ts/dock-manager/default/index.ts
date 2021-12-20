import { TypeScriptFileUpdate } from "@igniteui/cli-core";
import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";
import { NPM_DOCK_MANAGER, resolveIgxPackage } from "../../../package-resolve";

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
		this.dependencies = [
			{ import: "<%=ClassName%>Module", from: "./src/app/<%=path%>/<%=filePrefix%>.module.ts" }
		];
		// "igniteui-dockmanager@~1.0.0":
		this.packages = [ `${resolveIgxPackage(NPM_DOCK_MANAGER)}@~1.6.0` ];
	}
	protected addClassDeclaration(mainModule: TypeScriptFileUpdate, projPath: string, name: string, modulePath: string) {
		// not applicable with custom module
	}
}
module.exports = new IgcDockManagerTemplate();
