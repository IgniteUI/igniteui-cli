import { 
	AddTemplateArgs, ControlExtraConfiguration, defaultDelimiters,
	Template, TemplateDependency } from "@igniteui/cli-core";
import * as fs from "fs-extra";
import * as path from "path";

export class IgniteUIForWebComponentsTemplate implements Template {
	public components: string[];
	public controlGroup: string;
	public listInComponentTemplates: boolean = true;
	public listInCustomTemplates: boolean = false;
	public id: string;
	public name: string;
	public description: string;
	public framework: string = "webcomponents";
	public projectType = "igc-ts";
	public hasExtraConfiguration: boolean = false;
	public packages = [];
	public dependencies: TemplateDependency[] = [];
	public delimiters = defaultDelimiters;

	public get templatePaths(): string[] {
		return [path.join(this.rootPath, "files")];
	}

	constructor(private rootPath: string) {
	}

	public generateConfig(name: string, options: {}): { [key: string]: any } {
		throw new Error("Method not implemented.");
	}

	public registerInProject(projectPath: string, name: string, options?: AddTemplateArgs) {
		throw new Error("Method not implemented.");
	}

	public getExtraConfiguration(): ControlExtraConfiguration[] {
		throw new Error("Method not implemented.");
	}
	public setExtraConfiguration(extraConfigKeys: {}) {
		throw new Error("Method not implemented.");
	}
}
