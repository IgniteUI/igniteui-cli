import { ControlExtraConfiguration, defaultDelimiters, ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";

// currently reusing hidden project impl as components/views pipeline go through registerInProject
// ideally would define a separate type/category for those partial files
export class IgrTsAiConfigPartial implements ProjectTemplate {
	public id: string = "ai-config";
	public name = "ai-config";
	public description = "Ignite UI CLI AI config for React partial project files";
	public framework: string = "react";
	public projectType: string = "tsx";
	public dependencies: string[] = [];
	public hasExtraConfiguration: boolean = false;
	public isHidden: boolean = true;
	public delimiters = defaultDelimiters;

	public get templatePaths(): string[] {
		return [path.join(__dirname, "files")];
	}

	public generateConfig(_name: string, _theme: string, ..._options: any[]): {[key: string]: any} {
		return { /* partials not using Util.processTemplates atm */ };
	}

	public installModules(): void {
		throw new Error("Method not implemented.");
	}
	public async upgradeIgniteUIPackages(_projectPath: string, _packagePath: string): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	public setExtraConfiguration(_extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
	}
}
export default new IgrTsAiConfigPartial();
