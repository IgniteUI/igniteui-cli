import { IgniteUIForAngularTemplate } from "@igniteui/angular-templates";
import { BaseTemplateManager, ProjectLibrary, Template, Util } from "@igniteui/cli-core";
import * as path from "path";

export class SchematicsTemplateManager extends BaseTemplateManager {
	constructor() {
		super("");
		this.frameworks.push({
			id: "angular",
			name: "angular",
			projectLibraries: [
				require("@igniteui/angular-templates").default as ProjectLibrary
			]
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
					Util.error(`The framework/project type for template with id "${settings.id}" is not supported.`);
					Util.error(`File path: ${filePath}`);
					break;
			}
			if (template !== null) {
				Object.assign(template, settings);
			}
		}
		return template as Template; // TODO
	}
}
