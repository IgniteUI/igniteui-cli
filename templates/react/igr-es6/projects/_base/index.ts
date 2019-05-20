import * as path from "path";
import { ControlExtraConfiguration, ProjectTemplate } from "../../../../../lib/types/index";
import { Util } from "../../../../../lib/Util";

export class BaseIgrProject implements ProjectTemplate {
	public id: string = "base";
	public name = "base";
	public description = "Ignite UI CLI project for React";
	public framework: string = "react";
	public projectType: string = "jsx";
	public dependencies: string[];
	public hasExtraConfiguration: boolean = false;
	public delimiters = {
		content: {
			end: `)`,
			start: `$(`
		},
		path: {
			end: `__`,
			start: `__`
		}
	};

	public get templatePaths(): string[] {
		return [path.join(__dirname, "files")];
	}

	public generateConfig(name: string, theme: string, ...options: any[]): {[key: string]: any} {
		return this.getVariablesConfig(name, theme);
	}

	public installModules(): void {
		throw new Error("Method not implemented.");
	}
	public upgradeIgniteUIPackage(projectPath: string, packagePath: string): void {
		throw new Error("Method not implemented.");
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
			"path": name,
			"projectTemplate": this.id
		};
	}
}
