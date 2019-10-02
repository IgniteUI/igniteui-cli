import {
	apply, chain, MergeStrategy, mergeWith,
	Rule, SchematicContext, SchematicsException, template, Tree, url } from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { IgniteUIForAngularTemplate } from "@igniteui/angular-templates";
import { NgTreeFileSystem, Util } from "@igniteui/cli-core";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";
import { ComponentOptions } from "./schema";

export function component(options: ComponentOptions): Rule {
	return (_tree: Tree, context: SchematicContext) => {

		// TODO: validate template name + nameFromPath, id, modulePath, skipRoute
		// TODO: jump into prompt session w/o provided id?

		if (!options.templateInst) {
			if (!options.template) {
				throw new SchematicsException("argument template id must be provided");
			}
			const templateManager = new SchematicsTemplateManager();
			const projLib = templateManager.getProjectLibrary("angular", "igx-ts");
			if (!projLib.hasTemplate(options.template)) {
				throw new SchematicsException(`template with id '${options.template}' not found`);
			}
			options.templateInst = projLib.getTemplateById(options.template) as IgniteUIForAngularTemplate;
		}

		const config = options.templateInst.generateConfig(options.name, {});

		context.logger.info(`Generating ${options.templateInst.name} with name: ${options.name}`);
		// TODO: reuse component schematic?
		return chain([
			...options.templateInst.templatePaths.map(templatePath =>
				mergeWith(
					apply(url(Util.relativePath(__filename, templatePath, true)), [
						template(config)
					]
				), MergeStrategy.Overwrite)
			),
			(host: Tree, _context: SchematicContext) => {
				if (options.templateInst) {
					for (const packageName of options.templateInst.packages) {
						// TODO: Refactor write to packege json
						const packageJSON = JSON.parse((host.read("package.json") || "").toString());
						let packageMatch = [];
						if (packageName[0] === "@") {
							packageMatch = packageName.split("@");
							packageMatch.shift();
						} else {
							packageMatch = packageName.split("@");
						}
						packageJSON.dependencies[packageMatch[0]] = (packageMatch)[1] || "*";
						host.overwrite("package.json", JSON.stringify(packageJSON));
						// context.addTask(new NodePackageInstallTask({ packageName, workingDirectory: options.projectName }));
					}
					options.templateInst.virtFs = new NgTreeFileSystem(host);
					options.templateInst.registerInProject("", options.name, { skipRoute: options.skipRoute });
				}
			}
		]);
	};
}
