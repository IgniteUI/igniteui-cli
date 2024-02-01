import { App, FS_TOKEN, IFileSystem, PackageDefinition } from "@igniteui/cli-core";

export const NPM_WEBCOMPONENTS_CHARTS = "igniteui-webcomponents-charts";
export const FEED_WEBCOMPONENTS_CHARTS = "@infragistics/igniteui-webcomponents-charts";
export const NPM_WEBCOMPONENTS_CORE = "igniteui-webcomponents-core";
export const FEED_WEBCOMPONENTS_CORE = "@infragistics/igniteui-webcomponents-core";
export const NPM_WEBCOMPONENTS_DATASOURCES = "igniteui-webcomponents-datasources";
export const FEED_WEBCOMPONENTS_DATASOURCES = "@infragistics/igniteui-webcomponents-datasources";
export const NPM_WEBCOMPONENTS_EXCEL = "igniteui-webcomponents-excel";
export const FEED_WEBCOMPONENTS_EXCEL = "@infragistics/igniteui-webcomponents-excel";
export const NPM_WEBCOMPONENTS_FDC3 = "igniteui-webcomponents-fdc3";
export const FEED_WEBCOMPONENTS_FDC3 = "@infragistics/igniteui-webcomponents-fdc3";
export const NPM_WEBCOMPONENTS_GAUGES = "igniteui-webcomponents-gauges";
export const FEED_WEBCOMPONENTS_GAUGES = "@infragistics/igniteui-webcomponents-gauges";
export const NPM_WEBCOMPONENTS_GRIDS = "igniteui-webcomponents-grids";
export const FEED_WEBCOMPONENTS_GRIDS = "@infragistics/igniteui-webcomponents-grids";
export const NPM_WEBCOMPONENTS_INPUTS = "igniteui-webcomponents-inputs";
export const FEED_WEBCOMPONENTS_INPUTS = "@infragistics/igniteui-webcomponents-inputs";
export const NPM_WEBCOMPONENTS_LAYOUTS = "igniteui-webcomponents-layouts";
export const FEED_WEBCOMPONENTS_LAYOUTS = "@infragistics/igniteui-webcomponents-layouts";
export const NPM_WEBCOMPONENTS_MAPS = "igniteui-webcomponents-maps";
export const FEED_WEBCOMPONENTS_MAPS = "@infragistics/igniteui-webcomponents-maps";
export const NPM_WEBCOMPONENTS_SPREADSHEET = "igniteui-webcomponents-spreadsheet";
export const FEED_WEBCOMPONENTS_SPREADSHEET = "@infragistics/igniteui-webcomponents-spreadsheet";
export const NPM_WEBCOMPONENTS_CHART_ADAPTER = "igniteui-webcomponents-spreadsheet-chart-adapter";
export const FEED_WEBCOMPONENTS_CHART_ADAPTER = "@infragistics/igniteui-webcomponents-spreadsheet-chart-adapter";

export const NPM_DOCK_MANAGER = "igniteui-dockmanager";
export const FEED_DOCK_MANAGER = "@infragistics/igniteui-dockmanager";

/** packages map of `trial: licensed` names */
export const UPGRADEABLE_PACKAGES = {
	[NPM_WEBCOMPONENTS_CHARTS]: FEED_WEBCOMPONENTS_CHARTS,
	[NPM_WEBCOMPONENTS_CORE]: FEED_WEBCOMPONENTS_CORE,
	[NPM_WEBCOMPONENTS_DATASOURCES]: FEED_WEBCOMPONENTS_DATASOURCES,
	[NPM_WEBCOMPONENTS_EXCEL]: FEED_WEBCOMPONENTS_EXCEL,
	[NPM_WEBCOMPONENTS_FDC3]: FEED_WEBCOMPONENTS_FDC3,
	[NPM_WEBCOMPONENTS_GAUGES]: FEED_WEBCOMPONENTS_GAUGES,
	[NPM_WEBCOMPONENTS_GRIDS]: FEED_WEBCOMPONENTS_GRIDS,
	[NPM_WEBCOMPONENTS_INPUTS]: FEED_WEBCOMPONENTS_INPUTS,
	[NPM_WEBCOMPONENTS_LAYOUTS]: FEED_WEBCOMPONENTS_LAYOUTS,
	[NPM_WEBCOMPONENTS_MAPS]: FEED_WEBCOMPONENTS_MAPS,
	[NPM_WEBCOMPONENTS_SPREADSHEET]: FEED_WEBCOMPONENTS_SPREADSHEET,
	[NPM_WEBCOMPONENTS_CHART_ADAPTER]: FEED_WEBCOMPONENTS_CHART_ADAPTER,
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

export function getWebcomponentsUpgradeablePackages(): PackageDefinition[] {
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
