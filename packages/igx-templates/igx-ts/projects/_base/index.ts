import { ControlExtraConfiguration, ProjectTemplate, Util } from "@igniteui/cli-core";
import * as path from "path";

export class BaseIgxProject implements ProjectTemplate {
	public id: string = "base";
	public name = "base";
	public description = "Empty project layout structure for Ignite UI for Angular";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration: boolean = false;
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
		= `/* See: https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes.html */
@import "~igniteui-angular/lib/core/styles/themes/index";

$primary: #731963 !default;
$secondary: #ce5712 !default;

$app-palette: igx-palette($primary, $secondary);

/* autoprefixer grid: on */

@include igx-core();
@include igx-theme($app-palette);
`;
	private DEFAULT_THEME = `,
			  "node_modules/igniteui-angular/styles/igniteui-angular.css"`;

	public get templatePaths(): string[] {
		return [path.join(__dirname, "files")];
	}

	public installModules(): void {
		throw new Error("Method not implemented.");
	}
	public upgradeIgniteUIPackage(projectPath: string, packagePath: string): void {
		// noop
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}
	public setExtraConfiguration(extraConfigKeys: any[]) { }
	public generateConfig(name: string, theme: string, ...options: any[]): {[key: string]: any} {
		const config = {
			name,
			theme,
			cliVersion: Util.version(),
			CustomTheme: "",
			dashName: Util.lowerDashed(name),
			DefaultTheme: "",
			dot: ".",
			path: name,
			projectTemplate: this.id
		};

		switch (theme) {
			case "custom":
				config["CustomTheme"] = this.CUSTOM_THEME;
				config["themePath"] = "custom";
				break;
			case "default":
			default:
				config["DefaultTheme"] = this.DEFAULT_THEME;
				config["themePath"] = "node_modules/igniteui-angular/styles/igniteui-angular.css";
				break;
		}

		return config;
	}
}
