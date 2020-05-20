import * as path from "path";
import { PackageManager } from "../packages/PackageManager";
import { FS_TOKEN, IFileSystem } from "../types";
import { App } from "./App";
import { ProjectConfig } from "./ProjectConfig";
import { Util } from "./Util";

export function updateWorkspace(): Promise<boolean> {
	return new Promise((res, rej) => {
		const fs: IFileSystem = App.container.get(FS_TOKEN);
		// tslint:disable-next-line:no-implicit-dependencies
		const pkgJSON = require("package.json");
		const fileString = fs.readFile("package.json");
		if (fs.directoryExists(path.join(App.workDir, "node_modules", "@infragistics"))) {
			Util.log("@infragistics module already exists. Nothing to do here.");
			res(true);
		}
		const config = ProjectConfig.localConfig();
		if (PackageManager.ensureRegistryUser(config)) {
			pkgJSON.dependencies["@infragistics/igniteui-angular"] = pkgJSON.dependencies["igniteui-angular"];
			delete pkgJSON.dependencies["igniteui-angular"];
		}
		// Go through all files recursively and update import from 'igniteui-angular' to '@infragistics/igniteui-angular';
	});
}

function rewriteFile(fs: IFileSystem, fileLocation: string, fileContent: string) {
	transformImports(fileContent);
	fs.writeFile(fileLocation, fileContent);
}

function transformImports(fileContent: string) {
	fileContent = fileContent.replace(/ (from ["'])igniteui-angular(["'])/g, "$1@infragistics/igniteui-angular$2");
	fileContent = fileContent.replace(/(node_modules\/)igniteui-angular\/)/g, "$1@infragistics/igniteui-angular");

}
