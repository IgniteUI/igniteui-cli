import { App, FS_TOKEN, IFileSystem } from "@igniteui/cli-core";

export const NPM_REACT = "igniteui-react";
export const FEED_REACT = "@infragistics/igniteui-react";
export const NPM_REACT_CORE = "igniteui-react-core";
export const FEED_REACT_CORE = "@infragistics/igniteui-react-core";
export const NPM_REACT_CHARTS = "igniteui-react-charts";
export const FEED_REACT_CHARTS = "@infragistics/igniteui-react-charts";
export const NPM_REACT_GAUGES = "igniteui-react-gauges";
export const FEED_REACT_GAUGES = "@infragistics/igniteui-react-gauges";
export const NPM_REACT_GRIDS = "igniteui-react-grids";
export const FEED_REACT_GRIDS = "@infragistics/igniteui-react-grids";
export const NPM_REACT_INPUTS = "igniteui-react-inputs";
export const FEED_REACT_INPUTS = "@infragistics/igniteui-react-inputs";
export const NPM_REACT_LAYOUTS = "igniteui-react-layouts";
export const FEED_REACT_LAYOUTS = "@infragistics/igniteui-react-layouts";
export const NPM_REACT_MAPS = "igniteui-react-maps";
export const FEED_REACT_MAPS = "@infragistics/igniteui-react-maps";
export const NPM_DOCK_MANAGER = "igniteui-dockmanager";
export const FEED_DOCK_MANAGER = "@infragistics/igniteui-dockmanager";

export interface PackageDefinition {
	trial: string;
	licensed: string;
}

/** packages map of `trial: licensed` names */
export const UPGRADEABLE_PACKAGES = {
	[NPM_REACT]: FEED_REACT,
	[NPM_REACT_CORE]: FEED_REACT_CORE,
	[NPM_REACT_CHARTS]: FEED_REACT_CHARTS,
	[NPM_REACT_GAUGES]: FEED_REACT_GAUGES,
	[NPM_REACT_GRIDS]: FEED_REACT_GRIDS,
	[NPM_REACT_INPUTS]: FEED_REACT_INPUTS,
	[NPM_REACT_LAYOUTS]: FEED_REACT_LAYOUTS,
	[NPM_REACT_MAPS]: FEED_REACT_MAPS,
	[NPM_DOCK_MANAGER]: FEED_DOCK_MANAGER
};

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
