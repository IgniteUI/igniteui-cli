import {
	ControlExtraConfiguration, defaultDelimiters,
	FsFileSystem, ProjectConfig, ProjectTemplate, Util
} from "@igniteui/cli-core";

import * as path from "path";

class EmptyAngularProject implements ProjectTemplate {
	public id: string = "angular";
	public name = "empty";
	public description = "Ignite UI CLI Default empty project structure for Angular";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "ig-ts";
	public hasExtraConfiguration: boolean = false;
	public delimiters = defaultDelimiters;
	protected fileSystem = new FsFileSystem();

	public get templatePaths(): string[] {
		return [path.join(__dirname, "files")];
	}

	public installModules(): void {
		throw new Error("Method not implemented.");
	}
	public async upgradeIgniteUIPackages(projectPath: string, packagePath: string): Promise<boolean> {
		const config = ProjectConfig.getConfig();
		const files: string[] = config.project.sourceFiles;
		config.project.sourceFiles = files.map(x => {
			if (x === "infragistics.core-lite.js") {
				return "infragistics.core.js";
			} else if (x === "infragistics.lob-lite.js") {
				return "infragistics.lob.js";
			}
			return x;
		});
		ProjectConfig.setConfig(config);

		// update angular.json to use and refer to the installed @ignite-ui-full package
		let workspaceConfigObj:
			{
				projects: {
					architect: {
						build: {
							options: {
								styles: any[],
								scripts: ({ input: string, bundleName: string })[]
							}
						}
					}
				}
			};

		const workspacePath = path.join(projectPath, "angular.json");
		if (this.fileSystem.fileExists(workspacePath)) {
			workspaceConfigObj = JSON.parse(this.fileSystem.readFile(workspacePath));
			const workspace = workspaceConfigObj.projects[Object.keys(workspaceConfigObj.projects)[0]];
			const styles = workspace.architect.build.options.styles;
			const scripts = workspace.architect.build.options.scripts;
			const freeVersionPath = "ignite-ui";
			const fullVersionPath = "@infragistics/ignite-ui-full/en";

			// update free to full packages - resource location + resource name (if it is different for the full version)
			// optionally: can safely strip ./node_modules/ from path
			for (const script of scripts) {
				if (!!script.input && script.input?.includes(freeVersionPath)) {
					script.input = script.input.replace(freeVersionPath, fullVersionPath);
					script.input = script.input.replace("-lite", "");
				}
				if (!!script.bundleName && script.bundleName?.includes("-lite")) {
					script.bundleName = script.bundleName.replace("-lite", "");
				}

				// edge case: Strip modules/ path from "bundleName": "modules/infragistics.gridexcelexporter.js"
				if (!!script.bundleName && script.bundleName?.includes("modules/")) {
					script.bundleName = script.bundleName.replace("modules/", "");
				}
			}

			for (const style of styles) {
				if (!!style.input && style.input?.includes(freeVersionPath)) {
					style.input = style.input.replace(freeVersionPath, fullVersionPath);
				}
			}
			this.fileSystem.writeFile(workspacePath, Util.formatAngularJsonOptions(workspaceConfigObj));
			return true;
		} else {
			Util.log(`No angular.json file found! May have to manually add igniteui-angular-wrappers styles and scripts
			(infragistics.core.js, infragistics.lob.js, etc.) to the corresponding angular.json styles and scripts collections`);
			return false;
		}
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}
	public setExtraConfiguration(extraConfigKeys: any[]) { }
	public generateConfig(name: string, theme: string, ...options: any[]): { [key: string]: any } {
		return {
			"cliVersion": Util.version(),
			"dash-name": Util.lowerDashed(name),
			"description": this.description,
			"dot": ".",
			"name": name,
			"path": name,
			"theme": theme
		};
	}
}
module.exports = new EmptyAngularProject();
