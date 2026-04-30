import { ControlExtraConfiguration, ProjectTemplate, TemplateDelimiters } from "@igniteui/cli-core";
import * as path from "path";

export class BaseIgcTsAiConfigPartial implements ProjectTemplate {

	public id: string = "ai-config";
	public name = "ai-config";
	public description = "Project structure with routing";
	public framework: string = "webcomponents";
	public projectType: string = "igc-ts";
	public dependencies: string[];
	public hasExtraConfiguration: boolean = false;
	public isHidden: boolean = true;

	public get templatePaths(): string[] {
		return [path.join(__dirname, "files")];
	}

	installModules(): void {
		throw new Error("Method not implemented.");
	}
	upgradeIgniteUIPackages(projectPath: string, packagePath: string): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	generateConfig(name: string, theme: string, ...options: any[]): { [key: string]: any; } {
		throw new Error("Method not implemented.");
	}
	delimiters: TemplateDelimiters;
	getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	setExtraConfiguration(extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
	}
}
export default new BaseIgcTsAiConfigPartial();


