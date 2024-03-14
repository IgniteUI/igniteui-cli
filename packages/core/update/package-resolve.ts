import { FS_TOKEN, IFileSystem } from "../types";
import { App } from "../util";

export interface PackageDefinition {
	trial: string;
	licensed: string;
}

// angular
export const NPM_ANGULAR = "igniteui-angular";
export const FEED_ANGULAR = "@infragistics/igniteui-angular";

// dock manager
export const NPM_DOCK_MANAGER = "igniteui-dockmanager";
export const FEED_DOCK_MANAGER = "@infragistics/igniteui-dockmanager";

// react
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
export const NPM_REACT_EXCEL = "igniteui-react-excel";
export const FEED_REACT_EXCEL = "@infragistics/igniteui-react-excel";
export const NPM_REACT_DATASOURCES = "igniteui-react-datasources";
export const FEED_REACT_DATASOURCES = "@infragistics/igniteui-react-datasources";
export const NPM_REACT_SPREADSHEET = "igniteui-react-spreadsheet";
export const FEED_REACT_SPREADSHEET = "@infragistics/igniteui-react-spreadsheet";
export const NPM_REACT_SPREADSHEET_CHART_ADAPTER = "igniteui-react-spreadsheet-chart-adapter";
export const FEED_REACT_SPREADSHEET_CHART_ADAPTER = "@infragistics/igniteui-react-spreadsheet-chart-adapter";

// webcomponents
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

/** packages map of `trial: licensed` names */
export const UPGRADEABLE_PACKAGES = {
	// angular
	[NPM_ANGULAR]: FEED_ANGULAR,

	// dock manager
	[NPM_DOCK_MANAGER]: FEED_DOCK_MANAGER,

	// react
	[NPM_REACT]: FEED_REACT,
	[NPM_REACT_CORE]: FEED_REACT_CORE,
	[NPM_REACT_CHARTS]: FEED_REACT_CHARTS,
	[NPM_REACT_GAUGES]: FEED_REACT_GAUGES,
	[NPM_REACT_GRIDS]: FEED_REACT_GRIDS,
	[NPM_REACT_INPUTS]: FEED_REACT_INPUTS,
	[NPM_REACT_LAYOUTS]: FEED_REACT_LAYOUTS,
	[NPM_REACT_MAPS]: FEED_REACT_MAPS,
	[NPM_REACT_EXCEL]: FEED_REACT_EXCEL,
	[NPM_REACT_DATASOURCES]: FEED_REACT_DATASOURCES,
	[NPM_REACT_SPREADSHEET]: FEED_REACT_SPREADSHEET,
	[NPM_REACT_SPREADSHEET_CHART_ADAPTER]: FEED_REACT_SPREADSHEET_CHART_ADAPTER,

	// webcomponents
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
	[NPM_WEBCOMPONENTS_CHART_ADAPTER]: FEED_WEBCOMPONENTS_CHART_ADAPTER
};

export function resolveIgxPackage(packageName: keyof typeof UPGRADEABLE_PACKAGES) {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);

	// read project package JSON
	if (fs.fileExists("./package.json")) {
		const fileContent = fs.readFile("./package.json");
		const packageJson = JSON.parse(fileContent);
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
		const fileContent = fs.readFile("./package.json");
		const packageJson = JSON.parse(fileContent);
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
