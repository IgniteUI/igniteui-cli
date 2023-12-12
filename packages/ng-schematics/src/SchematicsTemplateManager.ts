import { IgniteUIForAngularTemplate } from "@igniteui/angular-templates";
import { BaseTemplateManager, ProjectLibrary, Template, Util } from "@igniteui/cli-core";
import * as path from "path";

export class SchematicsTemplateManager extends BaseTemplateManager {
	constructor() {
		super("");
		this.frameworks.push({
			id: "angular",
			name: "angular",
			projectLibraries: require("@igniteui/angular-templates").default as ProjectLibrary[]
		});
	}

	protected loadFromConfig(filePath: string): Template {
		let template: Template | null = null;
		if (Util.fileExists(filePath)) {
			const rootPath = path.dirname(filePath);
			const settings = require(filePath) as Template;
			switch (`${settings.framework}|${settings.projectType}`) {
				case "angular|igx-ts":
					template = new IgniteUIForAngularTemplate(rootPath);
					break;
				default:
					// not supported in schematics, ignore
					break;
			}
			if (template !== null) {
				Object.assign(template, settings);
			}
		}
		return template as Template; // TODO
	}
}
