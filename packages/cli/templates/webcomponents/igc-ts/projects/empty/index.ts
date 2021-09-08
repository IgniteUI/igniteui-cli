import { ControlExtraConfiguration, defaultDelimiters, ProjectTemplate, Util } from "@igniteui/cli-core";
import * as fs from "fs-extra";
import * as path from "path";

class EmptyProject implements ProjectTemplate {
	public _updateFile: string = "webpack.config.js";
	public id: string = "webcomponent";
	public name = "empty";
	public description = "Ignite UI CLI project for Web Components";
	public framework: string = "webcomponents";
	public projectType: string = "igc";
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
		throw new Error("Method not implemented.");
	}
	public generateConfig(name: string, theme: string, ...options: any[]): {[key: string]: any} {

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
