import * as fs from "fs-extra";
import * as path from "path";
import { jQueryTemplate } from "../../../../../lib/templates/jQueryTemplate";
import { Util } from "../../../../../lib/Util";

class EmptyProject implements ProjectTemplate {
	public id: string = "jquery";
	public name: string = "jquery with Javascript";
	public description: string = "Ignite UI CLI project for jQuery";
	public dependencies: string[];
	public framework: string = "jquery";
	public projectType: string = "js";
	public hasExtraConfiguration: boolean = false;
	public routesFile = "bs-routes.json";

	public upgradeIgniteUIPackage(projectPath: string, packagePath: string): void {
		const filePath = path.join(projectPath, this.routesFile);
		const routes = fs.readFileSync(path.join(projectPath, this.routesFile), "utf8");
		const config = JSON.parse(routes);

		delete config.routes["/ignite-ui/js/infragistics.core.js"];
		delete config.routes["/ignite-ui/js/infragistics.lob.js"];
		config.routes["/ignite-ui"] = packagePath;

		fs.writeFileSync(filePath, JSON.stringify(config, null, 4));
	}

	public generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean> {
		const outDir = path.join(outputPath, name);
		let themePath = "";
		if (theme.indexOf(".less") !== -1 || theme.indexOf(".scss") !== -1) {
			themePath = ".themes/" + theme.split(".")[0] + "/infragistics.theme.css";
		} else {
			themePath = "$(igniteuiSource)/css/themes/" + theme + "/infragistics.theme.css";
		}
		const variables = {
			"$(cliVersion)": Util.version(),
			"$(dash-name)" : Util.lowerDashed(name),
			"$(description)" : this.description,
			"$(igniteuiSource)": "./node_modules/ignite-ui",
			"$(name)" : name,
			"$(theme)": theme,
			"$(themePath)": themePath
		};

		//TODO

		const pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "./files"), outDir, variables, pathsConfig);
	}

	public installModules(): void {
		throw new Error("Method not implemented.");
	}
	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [];
	}
	public setExtraConfiguration(extraConfigKeys: {}) {}
}
module.exports = new EmptyProject();
