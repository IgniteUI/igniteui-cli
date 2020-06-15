import { App, FS_TOKEN, IFileSystem } from "@igniteui/cli-core";

export const NPM_PACKAGE = "igniteui-angular";
export const FEED_PACKAGE = "@infragistics/igniteui-angular";
export const NPM_DOCK_MANAGER = "igniteui-dockmanager";
export const FEED_DOCK_MANAGER = "@infragistics/igniteui-dockmanager";

export interface PackageDefinition {
	trial: string;
	licensed: string;
}

// packages that have both a trial AND licensed definition
export const UPGRADEABLE_PACKAGES: PackageDefinition[] = [
	{
		trial: NPM_PACKAGE,
		licensed: FEED_PACKAGE
	},
	{
		trial: NPM_DOCK_MANAGER,
		licensed: FEED_DOCK_MANAGER
	}
];

export function resolveIgxPackage() {
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

export function getUpgradeablePackages(): PackageDefinition[] {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	const upgradeable: PackageDefinition[] = [];

	if (fs.fileExists("./package.json")) {
		const packageJson = JSON.parse(fs.readFile("./package.json"));
		const dependencies = packageJson["dependencies"];
		for (const packageEntry of UPGRADEABLE_PACKAGES) {
			if (dependencies[packageEntry.trial]) {
				upgradeable.push(packageEntry);
			}
		}
	}
	return upgradeable;
}
