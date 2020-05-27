import { App, FS_TOKEN, IFileSystem } from "@igniteui/cli-core";

export const NPM_PACKAGE = "igniteui-angular";
export const FEED_PACKAGE = "@infragistics/igniteui-angular";
export const NPM_DOCK_MANAGER = "igniteui-dockmanager";
export const FEED_DOCK_MANAGER = "@infragistics/igniteui-dockmanager";

export function resolvePackage() {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);

	// read project package JSON
	if (fs.fileExists("./package.json")) {
		const packageJson = JSON.parse(fs.readFile("./package.json"));
		const dependencies = packageJson["dependencies"];
		if (dependencies[FEED_PACKAGE]) {
			return FEED_PACKAGE;
		}
	}

	return NPM_PACKAGE;
}
