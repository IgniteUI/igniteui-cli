import {
	apply, chain, MergeStrategy, mergeWith,
	Rule, SchematicContext, SchematicsException, template, Tree, url
} from "@angular-devkit/schematics";
import { NodePackageInstallTask, RunSchematicTask } from "@angular-devkit/schematics/tasks";
import { IgniteUIForAngularTemplate } from "@igniteui/angular-templates";
import { NgTreeFileSystem, Util } from "@igniteui/cli-core";
import { SchematicsPromptSession } from "../prompt/SchematicsPromptSession";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";
import { ComponentOptions, TemplateOptions } from "./schema";

export function component(options: ComponentOptions): Rule {
	return async (_tree: Tree, context: SchematicContext) => {

		// TODO: validate template name + nameFromPath, id, modulePath, skipRoute
		const addedComponents: TemplateOptions[] = [];
		// if schematic was not called by ng-new
		if (!options.templateInst) {
			const templateManager = new SchematicsTemplateManager();
			const projLib = templateManager.getProjectLibrary("angular", "igx-ts");
			if (!options.template || !options.name) {
				const prompt = new SchematicsPromptSession(templateManager, addedComponents);
				await prompt.chooseActionLoop(projLib);
			} else {
				if (!projLib.hasTemplate(options.template)) {
					throw new SchematicsException(`template with id '${options.template}' not found`);
				}
				options.templateInst = projLib.getTemplateById(options.template) as IgniteUIForAngularTemplate;
			}
		}
		// if schematic was called by ng-new OR both name and template were passed
		if (options.templateInst) {
			addedComponents.push(options as TemplateOptions);
		}

		const missingPackages: Map<string, string> = new Map();
		// TODO: reuse component schematic?
		return chain([
			...addedComponents.map(templateOpts => {
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
								const packageMatch = packageName.split(/@(?=[^\/]+$)/);
								missingPackages.set(packageMatch[0], packageMatch[1] || "*");
							}
							templateOpts.templateInst.virtFs = new NgTreeFileSystem(host);
							templateOpts.templateInst.registerInProject("", templateOpts.name, { skipRoute: options.skipRoute });
						}
					}
				]);
			}),
			(host: Tree, _context: SchematicContext) => {
				const installChain = [];
				if (options.skipInstall) {
					return;
				}
				if (missingPackages.size) {
					const packageJSON = JSON.parse((host.read("package.json") || "").toString());
					let shouldInstall = false;
					missingPackages.forEach((version, name) => {
						if (!packageJSON.dependencies[name]) {
							packageJSON.dependencies[name] = version;
							shouldInstall = true;
						}
					});
					if (shouldInstall) {
						host.overwrite("package.json", JSON.stringify(packageJSON, null, 2));
						const installTask = context.addTask(new NodePackageInstallTask());
						installChain.push(installTask);
					}
				}
				context.addTask(new RunSchematicTask("start", {}), installChain);
			}
		]);
	};
}
