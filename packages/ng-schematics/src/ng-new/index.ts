import {
	apply, chain, empty, externalSchematic, MergeStrategy, mergeWith,
	move, Rule, schematic, SchematicContext, Tree
} from "@angular-devkit/schematics";
import {
	NodePackageInstallTask,
	RepositoryInitializerTask
} from "@angular-devkit/schematics/tasks";
import { ProjectLibrary, Util } from "@igniteui-cli/core";
import { defer, Observable } from 'rxjs';
import { NewProjectOptions } from "../app-projects/schema";
import { SchematicsPromptSession } from "../prompt/SchematicsPromptSession";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";
import { OptionsSchema } from "./schema";

interface IgxSchematicContext extends SchematicContext {
	projectTpe: string;
	theme: string;
}

export function newProject(options: OptionsSchema): Rule {
	return (_host: Tree, context: IgxSchematicContext) => {
		context.logger.info(`Generating ${options.name}`);

		let projLibrary: ProjectLibrary;
		let projectOptions: NewProjectOptions;
		const addedComponents: any[] = [];
		const templateManager = new SchematicsTemplateManager();
		const prompt = new SchematicsPromptSession(templateManager, addedComponents);

		// TODO:
		const defaultProjName = "IG Project";

		return chain([
			(tree: Tree, context: IgxSchematicContext): Observable<Tree> => {
				return defer<Tree>(async function() { // TODO rxjs types?
					let projectName = options.name;

					if (!prompt.nameIsValid(options.name)) {
						projectName = await prompt.getUserInput({
							type: "input",
							name: "projectName",
							message: "Enter a name for your project:",
							default: Util.getAvailableName(defaultProjName, true),
							validate: prompt.nameIsValid
						});
					}

					const framework = templateManager.getFrameworkByName("angular");
					// app name validation???
					projLibrary = await prompt.getProjectLibrary(framework);

					const projTemplate = await prompt.getProjectTemplate(projLibrary);

					// project options:
					const theme = await prompt.getTheme(projLibrary);

					projectOptions = {
						projTemplate,
						theme,
						name: projectName
					};
					context.logger.info(projectOptions.projTemplate.projectType);
					context.logger.info("");
					return tree;
				});
			},
			mergeWith(
				apply(empty(), [
					// TODO: Task chain based on @schematics/angular ng-new schematic
					// externalSchematic("@schematics/angular", "workspace", { name: options.name }),
					// externalSchematic("@schematics/angular", "application", {
					// 	projectRoot: "", name: options.name, skipInstall: true, routing: true, style: "scss"
					// }),
					(_tree: Tree, context: IgxSchematicContext) => {
						// extend project entry point:
						return schematic("app-projects", projectOptions);
					},
					(tree: Tree, context: IgxSchematicContext) => {
						// extend project entry point:
						// tree.create("ignite-ui-cli.json", JSON.stringify({ theme: context.theme }));
					},
					(tree: Tree, _context: IgxSchematicContext) => {
						return defer<Tree>(async function() {
							prompt.setTree(tree);
							await prompt.chooseActionLoop(projLibrary);
							return tree;
						});
					},
					(_tree: Tree, _context: IgxSchematicContext) => {
						if (addedComponents.length) {
							return chain(addedComponents);
						}
					},
					move(options.name)
				]), MergeStrategy.Overwrite
			),
			(tree: Tree, context: IgxSchematicContext) => {
				if (false) {
					const installTask = context.addTask(new NodePackageInstallTask(options.name));
					context.addTask(
						new RepositoryInitializerTask(options.name),
						installTask ? [installTask] : []
					);
				}
				context.addTask(
					new RepositoryInitializerTask(options.name));
				return tree;
			}
		]);
	};
}
