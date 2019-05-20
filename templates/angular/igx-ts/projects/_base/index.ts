import * as path from "path";
import { ControlExtraConfiguration } from "../../../../../lib/types/ControlExtraConfiguration";
import { ProjectTemplate } from "../../../../../lib/types/index";
import { Util } from "../../../../../lib/Util";

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
			"cliVersion": Util.version(),
			"CustomTheme": "",
			"dash-name": Util.lowerDashed(name),
			"DefaultTheme": "",
			"name": name,
			"path": name,
			"projectTemplate": this.id,
			"theme": theme
		};

		switch (theme) {
			case "Custom":
				config["CustomTheme"] = this.CUSTOM_THEME;
				break;
			case "Default":
			default:
				config["DefaultTheme"] = this.DEFAULT_THEME;
				break;
		}

		return config;
	}
}
