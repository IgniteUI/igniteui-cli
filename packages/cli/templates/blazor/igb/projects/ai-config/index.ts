import { ControlExtraConfiguration, defaultDelimiters, ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";

// currently reusing hidden project impl as components/views pipeline go through registerInProject
// ideally would define a separate type/category for those partial files
export class IgbAiConfigPartial implements ProjectTemplate {

	public id: string = "ai-config";
	public name = "ai-config";
	public description = "Ignite UI CLI AI config for Blazor partial project files";
	public framework: string = "blazor";
	public projectType: string = "igb";
	public dependencies: string[];
	public hasExtraConfiguration: boolean = false;
	public isHidden: boolean = true;
	public delimiters = defaultDelimiters;

	public get templatePaths(): string[] {
		return [path.join(__dirname, "files")];
	}

	installModules(): void {
		throw new Error("Method not implemented.");
	}
	upgradeIgniteUIPackages(_projectPath: string, _packagePath: string): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	generateConfig(_name: string, _theme: string, ..._options: any[]): { [key: string]: any; } {
		throw new Error("Method not implemented.");
	}
	getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	setExtraConfiguration(_extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
	}
}
export default new IgbAiConfigPartial();


