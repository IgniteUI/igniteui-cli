import { ControlExtraConfiguration, ProjectTemplate } from "@igniteui/cli-core";
import * as path from "path";

// currently reusing hidden project impl as components/views pipeline go through registerInProject
// ideally would define a separate type/category for those partial files
export class IgxAiConfigPartial implements ProjectTemplate {
	public id: string = "ai-config";
	public name = "ai-config";
	public description = "Ignite UI CLI AI config for Angular partial project files";
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
	public async upgradeIgniteUIPackages(_projectPath: string, _packagePath: string): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	public setExtraConfiguration(_extraConfigKeys: any[]) {
		throw new Error("Method not implemented.");
	}
	public generateConfig(_name: string, _theme: string, ..._options: any[]): { [key: string]: any } {
		return { /* partials not using Util.processTemplates atm */ };
	}
}

export default new IgxAiConfigPartial();
