import {
	apply, chain, MergeStrategy, mergeWith,
	Rule, SchematicContext, SchematicsException, template, Tree, url } from "@angular-devkit/schematics";
import { IgniteUIForAngularTemplate } from "@igniteui/angular-templates";
import { NgTreeFileSystem, Util } from "@igniteui/cli-core";
import { SchematicsPromptSession } from "../prompt/SchematicsPromptSession";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";
import { ComponentOptions, TemplateOptions } from "./schema";

export function component(options: ComponentOptions): Rule {
	return async (_tree: Tree, context: SchematicContext) => {

		// TODO: validate template name + nameFromPath, id, modulePath, skipRoute
		const addedComponents: TemplateOptions[] = [];
		let singleComponent = true;
		if (!options.templateInst) {
			const templateManager = new SchematicsTemplateManager();
			const projLib = templateManager.getProjectLibrary("angular", "igx-ts");
			const prompt = new SchematicsPromptSession(templateManager, addedComponents);
			if (!options.template) {
				singleComponent = false;
				await prompt.chooseActionLoop(projLib);
				options.templateInst = addedComponents[0].templateInst;
				options.template = addedComponents[0].templateInst.id;
				options.name = addedComponents[0].name;
			}
			if (!projLib.hasTemplate(options.template) && singleComponent) {
				throw new SchematicsException(`template with id '${options.template}' not found`);
			}
			if (!options.name && singleComponent) {
				options.name = await prompt.getUserInput({
					type: "input",
					name: "name",
					message: "Provide a name for your component"
				});
			}
			options.templateInst = projLib.getTemplateById(options.template) as IgniteUIForAngularTemplate;
		}
		if (singleComponent) {
			addedComponents.push(options as TemplateOptions);
		}

		// TODO: reuse component schematic?
		return chain(addedComponents.map(templateOpts => {
			const config = templateOpts.templateInst.generateConfig(templateOpts.name, {});
			context.logger.info(`Generating ${templateOpts.templateInst.name} with name: ${templateOpts.name}`);
			return chain([
				...templateOpts.templateInst.templatePaths.map(templatePath =>
					mergeWith(
						apply(url(Util.relativePath(__filename, templatePath, true)), [
							template(config)
						]
						), MergeStrategy.Overwrite)
				),
				(host: Tree, _context: SchematicContext) => {
					if (templateOpts.templateInst) {
						for (const packageName of templateOpts.templateInst.packages) {
							// TODO: Refactor write to packege json
							const packageJSON = JSON.parse((host.read("package.json") || "").toString());
							let packageMatch = [];
							if (packageName[0] === "@") {
								packageMatch = packageName.split("@");
								packageMatch.shift();
							} else {
								packageMatch = packageName.split("@");
							}
							const currentVersion = packageJSON.dependencies[packageMatch[0]];
							if (currentVersion !== (packageMatch)[1] && currentVersion !== "*") {
								packageJSON.dependencies[packageMatch[0]] = (packageMatch)[1] || "*";
								host.overwrite("package.json", JSON.stringify(packageJSON, null, 2));
								context.addTask(new NodePackageInstallTask({ packageName, workingDirectory: options.projectName }));
							}
						}
						templateOpts.templateInst.virtFs = new NgTreeFileSystem(host);
						templateOpts.templateInst.registerInProject("", templateOpts.name, { skipRoute: options.skipRoute });
					}
				}
			]);
		}));
	};
}
