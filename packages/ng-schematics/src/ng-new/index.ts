import {
	apply, chain, empty, MergeStrategy, mergeWith,
	move, Rule, schematic, SchematicContext, SchematicsException, Tree
} from "@angular-devkit/schematics";
import {
	NodePackageInstallTask,
	RepositoryInitializerTask,
	RunSchematicTask
} from "@angular-devkit/schematics/tasks";
import { App, ProjectLibrary, Util } from "@igniteui/cli-core";
import { defer, Observable } from "rxjs";
import { NewProjectOptions } from "../app-projects/schema";
import { SchematicsPromptSession } from "../prompt/SchematicsPromptSession";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";
import { setVirtual } from "../utils/NgFileSystem";
import { OptionsSchema } from "./schema";

interface IgxSchematicContext extends SchematicContext {
	projectType: string;
	theme: string;
}

export function newProject(options: OptionsSchema): Rule {
	return (_host: Tree, _hostContext: IgxSchematicContext) => {
		App.initialize();
		let projLibrary: ProjectLibrary;
		let projectOptions: NewProjectOptions;
		const templateManager = new SchematicsTemplateManager();
		const prompt = new SchematicsPromptSession(templateManager);

		// TODO:
		const defaultProjName = "IG Project";
		let allOptionsProvided: boolean = false;

		return chain([
			(tree: Tree, _context: IgxSchematicContext): Observable<Tree> => {
				return defer(async () => {
					if (!options.name || !prompt.nameIsValid(options.name)) {
						options.name = await prompt.getUserInput({
							type: "input",
							name: "projectName",
							message: "Enter a name for your project:",
							default: Util.getAvailableName(defaultProjName, true),
							validate: prompt.nameIsValid
						});
					}

					if (options.name && options.template && options.theme) {
						allOptionsProvided = true;
					}

					const framework = templateManager.getFrameworkByName("angular");
					// app name validation???
					projLibrary = await prompt.getProjectLibrary(framework);

					let projTemplate;
					if (!options.template) {
						projTemplate = await prompt.getProjectTemplate(projLibrary);
					} else {
						projTemplate = projLibrary.getProject(options.template);
						if (!projTemplate) {
							throw new SchematicsException(`template with id '${options.template}' not found`);
						}
					}

					if (!options.theme) {
						options.theme = await prompt.getTheme(projLibrary);
					}

					if (options.theme && projLibrary.themes.indexOf(options.theme) === -1) {
						throw new SchematicsException(`Theme not supported`);
					}

					// project options:
					// cache available views and components, same as in component Schematic
					const components = projLibrary.components;
					const views = (projLibrary as any).customTemplates;

					projectOptions = {
						projTemplate,
						name: options.name,
						theme: options.theme
					};
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
					(tree: Tree, _context: IgxSchematicContext) => {
						setVirtual(tree);
						// extend project entry point:
						return schematic("app-projects", projectOptions);
					},
					(tree: Tree, _context: IgxSchematicContext) => {
						// extend project entry point:
						// tree.create("ignite-ui-cli.json", JSON.stringify({ theme: context.theme }));
						if (tree.exists("gitignore")) {
							tree.rename("gitignore", ".gitignore");
						}
					},
					(tree: Tree, context: IgxSchematicContext) => {
						if (!allOptionsProvided) {
							return defer(async () => {
								prompt.setContext(context, tree, options.name as string);
								await prompt.chooseActionLoop(projLibrary);
								return tree;
							});
						}
					},
					(_tree: Tree, _context: IgxSchematicContext) => {
						return move(options.name!);
					}
				]), MergeStrategy.Overwrite
			),
			(tree: Tree, context: IgxSchematicContext) => {
				const installChain = [];
				if (!options.skipInstall) {
					const installTask = context.addTask(new NodePackageInstallTask(options.name));
					installChain.push(installTask);
				}
				if (!options.skipGit) {
					const gitTask = context.addTask(
						new RepositoryInitializerTask(options.name, { message: `Initial commit for project: ${options.name}` }),
						[...installChain] //copy
					);
					installChain.push(gitTask);
				}

				if (!options.skipInstall && !allOptionsProvided) {
					context.addTask(new RunSchematicTask("start", { directory: options.name }), installChain);
				}
				// TODO: Conditional?
				return tree;
			}
		]);
	};
}
