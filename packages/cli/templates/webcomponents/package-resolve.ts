import { App, FS_TOKEN, IFileSystem } from "@igniteui/cli-core";

export const NPM_DOCK_MANAGER = "igniteui-dockmanager";
export const FEED_DOCK_MANAGER = "@infragistics/igniteui-dockmanager";

export interface PackageDefinition {
	trial: string;
	licensed: string;
}

/** packages map of `trial: licensed` names */
export const UPGRADEABLE_PACKAGES = {
	[NPM_DOCK_MANAGER]: FEED_DOCK_MANAGER
};

export function resolveIgcPackage(packageName: keyof typeof UPGRADEABLE_PACKAGES) {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);

	// read project package JSON
	if (fs.fileExists("./package.json")) {
		const packageJson = JSON.parse(fs.readFile("./package.json"));
		const dependencies = packageJson["dependencies"];
		const licensed = UPGRADEABLE_PACKAGES[packageName];
		if (dependencies[licensed]) {
			return licensed;
		}
	}

	return packageName;
}

export function getUpgradeablePackages(): PackageDefinition[] {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	const upgradeable: PackageDefinition[] = [];

	if (fs.fileExists("./package.json")) {
		const packageJson = JSON.parse(fs.readFile("./package.json"));
		const dependencies = packageJson["dependencies"];
		for (const packageEntry in UPGRADEABLE_PACKAGES) {
			if (dependencies[packageEntry]) {
				upgradeable.push({
					trial: packageEntry,
					licensed: UPGRADEABLE_PACKAGES[packageEntry]
				});
			}
		}
	}
	return upgradeable;
}
