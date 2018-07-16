import * as path from "path";
import { Util } from "../../../../../lib/Util";

class EmptyJsBlocksProject implements ProjectTemplate {
	public id: string = "angular";
	public name = "empty";
	public description = "Default empty angular project structure for Ignite UI for Angular";
	public dependencies: string[] = [];
	public framework: string = "angular";
	public projectType: string = "igx-ts";
	public hasExtraConfiguration: boolean = false;

	private CUSTOM_THEME
		= `/* See: https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes.html */
@import "~igniteui-angular/core/styles/themes/index";

$primary: #731963 !default;
$secondary: #ce5712 !default;

$app-palette: igx-palette($primary, $secondary);

@include igx-core();
@include igx-theme($app-palette);
	`;
	private DEFAULT_THEME = `,
			  "node_modules/igniteui-angular/styles/igniteui-angular.css"`;

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
	public generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean> {
		const config = {
			"$(CustomTheme)": "",
			"$(DefaultTheme)": "",
			"$(cliVersion)": Util.version(),
			"$(dash-name)": Util.lowerDashed(name),
			"$(name)": name,
			"$(theme)": theme,
			"__path__": name
		};

		switch (theme) {
			case "Custom":
				config["$(CustomTheme)"] = this.CUSTOM_THEME;
				break;
			case "Default":
			default:
				config["$(DefaultTheme)"] = this.DEFAULT_THEME;
				break;
		}

		const pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "./files"), path.join(outputPath, name), config, pathsConfig);
	}
}
module.exports = new EmptyJsBlocksProject();
