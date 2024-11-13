import { ControlExtraConfiguration, defaultDelimiters, ProjectTemplate, updateWorkspace, Util } from "@igniteui/cli-core";
import * as path from "path";

export class BaseIgcProject implements ProjectTemplate {
	public id: string = "base";
	public name = "base";
	public description = "Empty project layout structure for Ignite UI for Web Components";
	public dependencies: string[] = [];
	public framework: string = "webcomponents";
	public projectType: string = "igc-ts";
	public hasExtraConfiguration: boolean = false;
	public delimiters = defaultDelimiters;

	public get templatePaths(): string[] {
		return [path.join(__dirname, "files")];
	}

	public installModules(): void {
		throw new Error("Method not implemented.");
	}

	public async upgradeIgniteUIPackages(projectPath: string, packagePath: string): Promise<boolean> {
		return updateWorkspace(projectPath);
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}
	public setExtraConfiguration(extraConfigKeys: any[]) { }
	public generateConfig(name: string, theme: string, ...options: any[]): { [key: string]: any } {
		const config = {
			name,
			theme,
			cliVersion: Util.version(),
			CustomTheme: "",
			dashName: Util.lowerDashed(name),
			DefaultTheme: "",
			dot: ".",
			path: name,
			projectTemplate: this.id,
			yamlDefaultBranch: this.id === "base" ? "<%=yaml-default-branch%>" : "main"
		};

		return config;
	}
}
