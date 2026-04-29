import { ControlExtraConfiguration, NPM_ANGULAR, ProjectTemplate, Util, updateWorkspace } from "@igniteui/cli-core";
import * as path from "path";

export class BaseIgxAiConfigPartial implements ProjectTemplate {
	public id: string = "ai-config";
	public name = "ai-config";
	public description = "Empty project layout structure for Ignite UI for Angular";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration = false;
	public isHidden: boolean = true;
	public delimiters = {
		content: {
			end: `%>`,
			start: `<%=`
		},
		path: {
			end: `__`,
			start: `__`
		}
	};
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
		return{}
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

export default new BaseIgxAiConfigPartial();
