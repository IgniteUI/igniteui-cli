import { ControlExtraConfiguration, NPM_ANGULAR, ProjectTemplate, Util, updateWorkspace } from "@igniteui/cli-core";
import * as path from "path";

export class BaseIgxProject implements ProjectTemplate {
	public id: string = "base";
	public name = "base";
	public description = "Empty project layout structure for Ignite UI for Angular";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration = false;
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
	private DEFAULT_THEME = `,
              "node_modules/igniteui-angular/styles/igniteui-angular.css"`;

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
		const config = {
			name,
			theme,
			cliVersion: Util.version(),
			CustomTheme: "",
			dashName: Util.lowerDashed(name),
			DefaultTheme: "",
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
				config["DefaultTheme"] = this.DEFAULT_THEME;
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
