import { ControlExtraConfiguration, defaultDelimiters, ProjectTemplate, Util } from "@igniteui/cli-core";
import * as fs from "fs-extra";
import * as path from "path";

class EmptyProject implements ProjectTemplate {
	// public _updateFile: string = "webpack.config.js";
	public id: string = "react";
	public name = "empty";
	public description = "Ignite UI CLI project for React";
	public framework: string = "react";
	public projectType: string = "jsx";
	public dependencies: string[];
	public hasExtraConfiguration: boolean = false;
	public delimiters = defaultDelimiters;

	public get templatePaths(): string[] {
		return [path.join(__dirname, "files")];
	}

	public installModules(): void {
		throw new Error("Method not implemented.");
	}
	public async upgradeIgniteUIPackages(projectPath: string, packagePath: string): Promise<boolean> {
		// HERE IT USED TO REPLACE THE FREE WITH FULL IGNITEUI PACKAGES< MODING THE PATHS inside the WEBPACK.config.ts
		// TODO: TEST THIS FUNCTIONALITY AND FIX PACKAGES PATHS AND REGISTERING UPDATED PACKAGE
		// const filePath = path.join(projectPath, this._updateFile);
		// let configFile = fs.readFileSync(filePath, "utf8");
		// //comment out core + lob redirects
		// configFile = configFile.replace(`"ignite-ui/js/infragistics.core.js$"`, `//$&`);
		// configFile = configFile.replace(`"ignite-ui/js/infragistics.lob.js$"`, `//$&`);
		// fs.writeFileSync(filePath, configFile);
		console.log("PASS DUMMY upgradeIgniteUIPackages"); // AT THIS POINT $(igniteImports) is still not replaced in App.js

		// TODO Obtain App.js and update the string where required
		// 1) ignite-ui/  replace with @infragistics/ignite-ui-full/en/
		// 2) -lite replace with ""
		return true;
	}
	public generateConfig(name: string, theme: string, ...options: any[]): { [key: string]: any } {

		//TODO update the config with [{key: "keyname", "value"}]
		return {
			"cliVersion": Util.version(),
			"dash-name": Util.lowerDashed(name),
			"description": this.description,
			"dot": ".",
			"name": name,
			"path": name,
			"theme": theme
		};
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
	}
}
module.exports = new EmptyProject();
