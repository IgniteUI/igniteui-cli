import {
	apply, chain, empty, MergeStrategy, mergeWith,
	move, Rule, schematic, SchematicContext, SchematicsException, Tree
} from "@angular-devkit/schematics";
import {
	NodePackageInstallTask,
	RepositoryInitializerTask,
	RunSchematicTask
} from "@angular-devkit/schematics/tasks";
import { App, GoogleAnalytics, ProjectLibrary, Util } from "@igniteui/cli-core";
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
		App.initialize("angular-cli");
		GoogleAnalytics.post({
			t: "screenview",
			cd: "New"
		});
		let projLibrary: ProjectLibrary;
		let projectOptions: NewProjectOptions;
		const templateManager = new SchematicsTemplateManager();
		const prompt = new SchematicsPromptSession(templateManager);

		// TODO:
		const defaultProjName = "IG Project";
		let nameProvided: boolean = false;

		return chain([
			(tree: Tree, _context: IgxSchematicContext): Observable<Tree> => {
				return defer(async () => {
					if (options.name) {
						options.name = options.name.trim();
						nameProvided = true;

						// letter+alphanumeric check
						if (!Util.isAlphanumericExt(options.name)) {
							throw new SchematicsException(`Name '${options.name}' is not valid. `
								+ "Name should start with a letter and can also contain numbers, dashes and spaces.");
						}
					}

					if (Util.directoryExists(options.name)) {
						throw new SchematicsException(`Folder "${options.name}" already exists!`);
					}

					if (!options.name || !prompt.nameIsValid(options.name)) {
						options.name = await prompt.getUserInput({
							type: "input",
							name: "projectName",
							message: "Enter a name for your project:",
							default: Util.getAvailableName(defaultProjName, true),
							validate: prompt.nameIsValid
						});
						nameProvided = false;
					}

					const framework = templateManager.getFrameworkByName("angular");
					// app name validation???
					projLibrary = await prompt.getProjectLibrary(framework);

					if (options.theme && projLibrary.themes.indexOf(options.theme) === -1) {
						throw new SchematicsException(`Theme not supported`);
					}

					const projectTemplate = options.template || projLibrary.projectIds[0];
					const projTemplate = projLibrary.getProject(projectTemplate);
					if (!projTemplate) {
						throw new SchematicsException(`template with id '${options.template}' not found`);
					}
					const theme = options.theme || projLibrary.themes[0];
					Util.log(`Project Name: ${options.name}, theme ${theme}`);

					// project options:
					// cache available views and components, same as in component Schematic
					const components = projLibrary.components;
					const views = (projLibrary as any).customTemplates;

					projectOptions = {
						projTemplate,
						theme,
						name: options.name
					};

					GoogleAnalytics.post({
						t: "event",
						ec: "$ng new",
						ea: `project name: ${options.name}; framework: ${projTemplate.framework}; ` +
							`project type: ${projTemplate.projectType}; theme: ${options.theme}; skip-git: ${!!options.skipGit}`,
						cd1: projTemplate.framework,
						cd2: projTemplate.projectType,
						cd3: options.name,
						cd11: !!options.skipGit,
						cd14: options.theme
					});

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
						if (!nameProvided) {
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

				if (!options.skipInstall && !nameProvided) {
					context.addTask(new RunSchematicTask("start", { directory: options.name }), installChain);
				}
				return tree;
			}
		]);
	};
}
