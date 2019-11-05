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

function registerInProject(templateOpts: TemplateOptions, skipRoute: boolean, modulePath?: string): Rule {
	return (host: Tree, _context: SchematicContext) => {
		templateOpts.templateInst.virtFs = new NgTreeFileSystem(host);
		templateOpts.templateInst.registerInProject("", templateOpts.name, { skipRoute, modulePath });
	};
}

function getMissingPackages(templateOpts: TemplateOptions, packages: Map<string, string>): Rule {
	return (_host: Tree, _context: SchematicContext) => {
		for (const packageName of templateOpts.templateInst.packages) {
			const packageMatch = packageName.split(/@(?=[^\/]+$)/);
			packages.set(packageMatch[0], packageMatch[1] || "*");
		}
	};
}

function updatePackageJSON(installContext: { packages: Map<string, string>, shouldInstall?: boolean }): Rule {
	return (host: Tree, _context: SchematicContext) => {
		if (installContext.packages.size) {
			const packageJSON = JSON.parse((host.read("package.json") || "").toString());
			installContext.packages.forEach((version, name) => {
				if (!packageJSON.dependencies[name]) {
					packageJSON.dependencies[name] = version;
					installContext.shouldInstall = true;
				}
			});
			if (installContext.shouldInstall) {
				host.overwrite("package.json", JSON.stringify(packageJSON, null, 2));
			}
		}
	};
}

function addComponent(options: TemplateOptions, skipRoute = false, modulePath?: string): Rule {
	return async (_tree, _context) => {
		const config = options.templateInst.generateConfig(options.name, {});
		return chain([...options.templateInst.templatePaths.map(templatePath =>
			mergeWith(
				apply(url(Util.relativePath(__filename, templatePath, true)), [
					template(config)
				]
				), MergeStrategy.Overwrite)
		), registerInProject(options, skipRoute, modulePath)]);
	};
}
export function singleComponent(templateOptions: TemplateOptions, skipRoute: boolean) {
	return async (_tree: Tree, _context: SchematicContext) => {
		const packages = new Map<string, string>();
		return chain([
			addComponent(templateOptions, skipRoute),
			getMissingPackages(templateOptions, packages),
			updatePackageJSON({packages})
		]);
	};
}
export function component(options: ComponentOptions): Rule {
	return async (_tree: Tree, context: SchematicContext) => {

		const addedComponents: TemplateOptions[] = [];
		const templateManager = new SchematicsTemplateManager();
		const projLib = templateManager.getProjectLibrary("angular", "igx-ts");
		let prompt: SchematicsPromptSession;
		if (!options.template || !options.name) {
			prompt = new SchematicsPromptSession(templateManager, addedComponents);
			await prompt.chooseActionLoop(projLib);
		} else {
			if (!projLib.hasTemplate(options.template)) {
				throw new SchematicsException(`template with id '${options.template}' not found`);
			}
			options.templateInst = projLib.getTemplateById(options.template) as IgniteUIForAngularTemplate;
			addedComponents.push(options as TemplateOptions);
		}
		const installContext = {
			packages: new Map(),
			shouldInstall: false
		};
		return chain([
			...addedComponents.map(templateOpts => {
				context.logger.info(`Generating ${templateOpts.templateInst.name} with name: ${templateOpts.name}`);
				return chain([
					addComponent(templateOpts, options.skipRoute, options.module),
					getMissingPackages(templateOpts, installContext.packages)
				]);
			}),
			updatePackageJSON(installContext),
			(_host: Tree, _context: SchematicContext) => {
				// if called w/ command land arguments, check if dependencies are added and add install task.
				if (!prompt) {
					if (installContext.shouldInstall) {
						_context.addTask(new NodePackageInstallTask());
						return;
					}
					return;
				}
				_context.addTask(
					new RunSchematicTask("start", {}),
					installContext.shouldInstall ? [_context.addTask(new NodePackageInstallTask())] : []
				);
			}
		]);
	};
}
