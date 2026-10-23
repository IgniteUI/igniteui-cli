import {
	callRule,
	chain,
	Rule,
	schematic,
	SchematicContext,
	SchematicsException,
	TaskId,
	Tree } from "@angular-devkit/schematics";
import { NodePackageInstallTask, RepositoryInitializerTask, RunSchematicTask } from "@angular-devkit/schematics/tasks";
// not exported from the package root; start/index.ts imports it the same way
import { ScopedTree } from "@angular-devkit/schematics/src/tree/scoped";
import { App, GoogleAnalytics, ProjectLibrary, ProjectTemplate, TEMPLATE_MANAGER, Util } from "@igniteui/cli-core";
import { defer, map, Observable } from "rxjs";
import { SchematicsPromptSession } from "../prompt/SchematicsPromptSession";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";
import { setVirtual } from "../utils/NgFileSystem";
import { OptionsSchema } from "./schema";

interface IgxSchematicContext extends SchematicContext {
	projectType: string;
	theme: string;
}

/** Runs a rule with the project folder as the root of the tree */
function inProject(getName: () => string, rule: Rule): Rule {
	return (tree: Tree, context: SchematicContext) =>
		callRule(rule, new ScopedTree(tree, getName()), context).pipe(map(() => tree));
}

export function newProject(options: OptionsSchema): Rule {
	return (_host: Tree, _hostContext: IgxSchematicContext) => {
		App.initialize("angular-cli");
		GoogleAnalytics.post({
			t: "screenview",
			cd: "New"
		});
		let projLibrary: ProjectLibrary;
		let theme: string;
		const templateManager = new SchematicsTemplateManager();
		App.container.set(TEMPLATE_MANAGER, templateManager);
		const prompt = new SchematicsPromptSession();

		// TODO:
		const defaultProjName = "IG Project";
		let nameProvided: boolean = false;
		let projTemplate: ProjectTemplate;

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
					const framework = templateManager.getFrameworkByName("angular");
					projLibrary = await prompt.getProjectLibraryByType(framework, options.type);

					if (!options.name || !prompt.nameIsValid(options.name)) {
						options.name = await prompt.getUserInput({
							type: "input",
							name: "projectName",
							message: "Enter a name for your project:",
							default: Util.getAvailableName(defaultProjName, true),
							validate: prompt.nameIsValid
						});
						nameProvided = false;

						projTemplate = await prompt.getProjectTemplate(projLibrary);

						options.theme = await prompt.getTheme(projLibrary);
					}

					let themeIndex = 0;
					if (options.theme) {
						themeIndex = projLibrary.themes.findIndex(item => options.theme.toLowerCase() === item.toLowerCase());
						if (themeIndex === -1) {
							throw new SchematicsException(`Theme not supported`);
						}
					}

					if (projTemplate === undefined) {
						projTemplate = options.template
							? projLibrary.getProject(options.template)
							: projLibrary.projects.filter(p => !p.isHidden)[0];
						if (!projTemplate) {
							throw new SchematicsException(`template with id '${options.template}' not found`);
						}
					}
					theme = projLibrary.themes[themeIndex];
					Util.log(`Project Name: ${options.name}, theme ${theme}`);

					// cache available views and components, same as in component Schematic
					const components = projLibrary.components;
					const views = (projLibrary as any).customTemplates;

					GoogleAnalytics.post({
						t: "event",
						ec: "$ng new",
						ea: `project name: ${options.name}; framework: ${projTemplate.framework}; ` +
							`project type: ${projTemplate.projectType}; theme: ${theme}; skip-git: ${!!options.skipGit}`,
						cd1: projTemplate.framework,
						cd2: projTemplate.projectType,
						cd3: options.name,
						cd11: !!options.skipGit,
						cd14: theme
					});

					return tree;
				});
			},
			(tree: Tree, _context: IgxSchematicContext): Observable<Tree> => {
				// the same scaffold as `ig new`: the Angular CLI creates the project on disk, the tree reads it from there
				return defer(async () => {
					const schematicsPackage = require("../../package.json");
					const success = await projTemplate.scaffold!({
						name: options.name!,
						theme,
						skipInstall: options.skipInstall,
						skipGit: true,
						// `ng add igniteui-angular` adds this package to the project
						extraConfig: { cliPackage: schematicsPackage.name, cliVersion: schematicsPackage.version }
					});
					if (!success) {
						throw new SchematicsException("Project creation failed.");
					}
					return tree;
				});
			},
			// run full schematic for args/prompts
			inProject(() => options.name!, schematic("ai-config", {})),
			inProject(() => options.name!, (projectTree: Tree, context: SchematicContext) => {
				if (!nameProvided) {
					return defer(async () => {
						setVirtual(projectTree);
						prompt.setContext(context, projectTree, options.name as string);
						await prompt.chooseActionLoop(projLibrary);
						return projectTree;
					});
				}
			}),
			(tree: Tree, _context: IgxSchematicContext) => {
				if (prompt.userAnswers && prompt.userAnswers.get("upgradePackages")) {
					return defer(async () => {
						setVirtual(tree);
						await projTemplate.upgradeIgniteUIPackages(options.name || "", "");
						return tree;
					});
				}
			},
			(tree: Tree, context: IgxSchematicContext) => {
				const installChain: TaskId[] = [];
				if (!options.skipInstall) {
					const installTask = context.addTask(
						new NodePackageInstallTask(options.name),
						[...installChain]);
					installChain.push(installTask);
				}
				if (!options.skipGit) {
					const gitTask = context.addTask(
						new RepositoryInitializerTask(options.name, { message: `Initial commit for project` }),
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
