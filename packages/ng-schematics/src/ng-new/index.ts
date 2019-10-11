import {
	apply, chain, empty, MergeStrategy, mergeWith,
	move, Rule, schematic, SchematicContext, Tree
} from "@angular-devkit/schematics";
import {
	NodePackageInstallTask,
	RepositoryInitializerTask,
	RunSchematicTask
} from "@angular-devkit/schematics/tasks";
import { ProjectLibrary, Util } from "@igniteui/cli-core";
import { defer, Observable } from "rxjs";
import { NewProjectOptions } from "../app-projects/schema";
import { TemplateOptions } from "../component/schema";
import { SchematicsPromptSession } from "../prompt/SchematicsPromptSession";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";
import { OptionsSchema } from "./schema";

interface IgxSchematicContext extends SchematicContext {
	projectTpe: string;
	theme: string;
}

export function newProject(options: OptionsSchema): Rule {
	return (_host: Tree, _hostContext: IgxSchematicContext) => {
		let projLibrary: ProjectLibrary;
		let projectOptions: NewProjectOptions;
		const addedComponents: TemplateOptions[] = [];
		const templateManager = new SchematicsTemplateManager();
		const prompt = new SchematicsPromptSession(templateManager, addedComponents);

		// TODO:
		const defaultProjName = "IG Project";

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

					const framework = templateManager.getFrameworkByName("angular");
					// app name validation???
					projLibrary = await prompt.getProjectLibrary(framework);

					const projTemplate = await prompt.getProjectTemplate(projLibrary);

					// project options:
					const theme = await prompt.getTheme(projLibrary);

					projectOptions = {
						projTemplate,
						theme,
						name: options.name
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
					(_tree: Tree, _context: IgxSchematicContext) => {
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
					(tree: Tree, _context: IgxSchematicContext) => {
						return defer(async () => {
							prompt.setTree(tree);
							await prompt.chooseActionLoop(projLibrary);
							return tree;
						});
					},
					(_tree: Tree, _context: IgxSchematicContext) => {
						if (addedComponents.length) {
							return chain(
								addedComponents.map(x => schematic(
									"component",
									Object.assign(x, { projectName: options.name, skipInstall: true })
								))
							);
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

				// TODO: Conditional?
				context.addTask(new RunSchematicTask("start", { directory: options.name }), installChain);
				return tree;
			}
		]);
	};
}
