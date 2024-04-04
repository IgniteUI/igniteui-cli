import { App, ControlExtraConfiguration, defaultDelimiters, FS_TOKEN,
	FsFileSystem, ProjectTemplate, updateWorkspace, Util } from "@igniteui/cli-core";
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
		const pkgJson = "package.json";
		const fileSystme = App.container.get<FsFileSystem>(FS_TOKEN);
		if (fileSystme.fileExists(pkgJson)) {
			const packageJson = JSON.parse(fileSystme.readFile(pkgJson));
			if (packageJson) {
				packageJson.eslintConfig.extends = ["react-app"];
				fileSystme.writeFile(pkgJson, JSON.stringify(packageJson, null, 2));
			}
		}

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
