import { ControlExtraConfiguration, defaultDelimiters, ProjectTemplate, updateWorkspace, Util } from "@igniteui/cli-core";
import * as path from "path";

export class BaseIgrTsProject implements ProjectTemplate {
	public id: string = "base";
	public name = "base";
	public description = "Ignite UI CLI project for React";
	public framework: string = "react";
	public projectType: string = "tsx";
	public dependencies: string[];
	public hasExtraConfiguration: boolean = false;
	public delimiters = defaultDelimiters;

	public get templatePaths(): string[] {
		return [path.join(__dirname, "files")];
	}

	public generateConfig(name: string, theme: string, ...options: any[]): {[key: string]: any} {
		return this.getVariablesConfig(name, theme);
	}

	public installModules(): void {
		throw new Error("Method not implemented.");
	}
	public async upgradeIgniteUIPackages(projectPath: string, packagePath: string): Promise<boolean> {
		return updateWorkspace(projectPath);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
	}

	protected getVariablesConfig(name: string, theme: string) {
		return {
			name,
			theme,
			"cliVersion": Util.version(),
			"dash-name": Util.lowerDashed(name),
			"description": this.description,
			"dot": ".",
			"path": name,
			"projectTemplate": this.id,
			"yamlDefaultBranch": this.id === "base" ? "<%=yaml-default-branch%>" : "main"
		};
	}
}
