import { IgniteUIForAngularTemplate } from "@igniteui/angular-templates";
import { BaseTemplateManager, Template, Util } from "@igniteui/cli-core";
import * as path from "path";
import { AngularTemplate } from "./templates/AngularTemplate";
import { jQueryTemplate } from "./templates/jQueryTemplate";
import { ReactTemplate } from "./templates/ReactTemplate";

const TEMPLATES_PATH = "../templates";

export class TemplateManager extends BaseTemplateManager {

	constructor(templatesPath?: string) {
		super(path.join(__dirname, templatesPath || TEMPLATES_PATH));
	}

	/**
	 * Loads properties from a JSON file and initializes a base Template implementation
	 * @param filePath Path to a json config file representing a template
	 * @returns null if no proper file is found
	 */
	protected loadFromConfig(filePath: string): Template {
		let template: Template = null;
		if (Util.fileExists(filePath)) {
			const rootPath = path.dirname(filePath);
			const settings = require(filePath) as Template;
			switch (`${settings.framework}|${settings.projectType}`) {
				case "jquery|js":
					template = new jQueryTemplate(rootPath);
					break;
				case "react|es6":
					template = new ReactTemplate(rootPath);
					break;
				case "angular|ig-ts":
					template = new AngularTemplate(rootPath);
					break;
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
		return template;
	}
}
