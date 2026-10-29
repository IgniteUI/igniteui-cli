import {
	ControlExtraConfiguration, NPM_ANGULAR, ProjectTemplate, ScaffoldOptions, Util, updateWorkspace
} from "@igniteui/cli-core";
import * as fs from "fs";
import * as path from "path";
import {
	CLI_PACKAGE, generateProject, npmInstall, npmInstallCommand, patchAngularJson, patchPackageJson, updateJson
} from "./scaffold";

/** What a project's own files need on top of the generated project */
export interface ProjectExtras {
	/** Packages installed at their latest version, or at the version or range an entry names */
	dependencies: string[];
	devDependencies: string[];
	/** Global types added to tsconfig.app.json and tsconfig.spec.json */
	types: string[];
}

/**
 * Projects are created by the Angular CLI (`ng new`, `ng add igniteui-angular`). `templatePaths` hold only
 * the files laid over that; `scaffold` patches the generated angular.json, package.json and tsconfigs.
 */
export class BaseIgxProject implements ProjectTemplate {
	public id: string = "base";
	public name = "base";
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

	private CUSTOM_THEME
		= `/* See: https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes/sass/index */
@use "igniteui-angular/theming" as *;

$primary: #09f !default;
$secondary: #4db8ff !default;
$surface: #fff !default;

$app-palette: palette($primary, $secondary, $surface);

/* autoprefixer grid: on */

@include core();
@include typography($font-family: $material-typeface, $type-scale: $material-type-scale);
@include theme($app-palette);
`;

	/** The extras for a project created with Angular `angularMajor`, which packages that follow Angular's majors match */
	protected extras: (angularMajor: string) => ProjectExtras = () => ({ dependencies: [], devDependencies: [], types: [] });

	public get templatePaths(): string[] {
		return [path.join(__dirname, "files")];
	}

	/**
	 * Creates the project with the Angular CLI and lays `templatePaths` over it.
	 * `options.extraConfig` overrides template variables; its `cliPackage` names the package providing the
	 * CLI commands (default `igniteui-cli`).
	 */
	public async scaffold(options: ScaffoldOptions): Promise<boolean> {
		const { cliPackage = CLI_PACKAGE, ...variables } = options.extraConfig || {};
		const config = { ...this.generateConfig(options.name, options.theme), ...variables };
		const projectPath = path.join(process.cwd(), options.name);
		if (fs.existsSync(projectPath)) {
			Util.error(`Folder "${options.name}" already exists!`, "red");
			return false;
		}
		if (options.skipInstall) {
			Util.warn("--skip-install does not apply to the initial setup: `ng add` installs the packages the project starts with.",
				"yellow");
		}

		/** The installs not yet done, as `npmInstall` arguments; set once the project files are complete */
		let installs: [string[], boolean][] = [];
		try {
			const angularMajor = generateProject(config.dashName, projectPath);
			const extras = this.extras(angularMajor);
			for (const templatePath of this.templatePaths) {
				await Util.processTemplates(templatePath, projectPath, config, this.delimiters, false);
			}
			updateJson(path.join(projectPath, "angular.json"), json => patchAngularJson(json, config));
			updateJson(path.join(projectPath, "package.json"), pkg => patchPackageJson(pkg, cliPackage, config.cliVersion));
			if (extras.types.length) {
				for (const file of ["tsconfig.app.json", "tsconfig.spec.json"]) {
					updateJson(path.join(projectPath, file), json => {
						json.compilerOptions.types = [...(json.compilerOptions.types || []), ...extras.types];
						return json;
					});
				}
			}
			// the first also installs the package.json changes above; playwright is the browser for @vitest/browser-playwright
			installs = [[["playwright", ...extras.devDependencies], true], [extras.dependencies, false]];
			installs = installs.filter(([packages]) => packages.length);
			while (installs.length) {
				npmInstall(projectPath, ...installs[0]);
				installs.shift();
			}
		} catch (error) {
			if (installs.length) {
				// the project is complete but for its packages (a network error, an unpublished CLI version), so it is kept
				const commands = installs.map(([packages, dev]) => npmInstallCommand(packages, dev)).join(" && ");
				Util.warn(`"${options.name}" is kept; finish installing its packages there with: ${commands}`, "yellow");
			} else {
				// the folder is this run's own (checked above), so a retry starts clean
				try {
					fs.rmSync(projectPath, { recursive: true, force: true });
				} catch {
					// e.g. EBUSY/EPERM on Windows while npm still holds native binaries
					Util.warn(`Could not remove "${options.name}"; delete it before retrying.`, "yellow");
				}
			}
			Util.error(`Project creation failed: ${error.message}`, "red");
			return false;
		}

		Util.log(Util.greenCheck() + " Project Created");
		return true;
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
			dot: ".",
			path: name,
			projectTemplate: this.id,
			igxPackage: NPM_ANGULAR,
			yamlDefaultBranch: "<%=yaml-default-branch%>", // the placeholder will be evaluated by CodeGen
			ApplicationTitle: "<%=ApplicationTitle%>" // the placeholder will be evaluated by CodeGen
		};

		switch (theme) {
			case "Custom":
				config["CustomTheme"] = this.CUSTOM_THEME;
				config["themePath"] = "Custom";
				break;
			case "Default":
			default:
				config["themePath"] = "node_modules/igniteui-angular/styles/igniteui-angular.css";
				break;
		}

		return config;
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
