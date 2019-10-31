import { BasePromptSession, GoogleAnalytics, ProjectConfig, ProjectLibrary, PromptTaskContext, Task, Util } from "@igniteui/cli-core";
import * as inquirer from "inquirer";
import * as path from "path";
import { default as add } from "./commands/add";
import { default as start } from "./commands/start";
import { PackageManager } from "./packages/PackageManager";
import { TemplateManager } from "./TemplateManager";

export class PromptSession extends BasePromptSession {

	constructor(templateManager: TemplateManager) {
		super(templateManager);
	}

	public static async chooseTerm() {
		const answers = await inquirer.prompt({
			default: null,
			message: "Enter a search term",
			name: "term",
			type: "input"
		});
		if (answers.term) {
			return answers.term;
		} else {
			const retProm = await this.chooseTerm();
			return retProm;
		}
	}

	/**
	 * Start questions session for project creation
	 */
	public async start() {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Wizard"
		});

		let projLibrary: ProjectLibrary;
		let theme: string;
		add.templateManager = this.templateManager as TemplateManager;
		this.config = ProjectConfig.getConfig();
		const defaultProjName = "IG Project";

		if (ProjectConfig.hasLocalConfig() && !this.config.project.isShowcase) {
			projLibrary = this.templateManager.getProjectLibrary(this.config.project.framework, this.config.project.projectType);
			theme = this.config.project.theme;
		} else {
			Util.log(""); /* new line */
			const projectName = await this.getUserInput({
				type: "input",
				name: "projectName",
				message: "Enter a name for your project:",
				default: Util.getAvailableName(defaultProjName, true),
				validate: this.nameIsValid
			});

			const frameRes: string = await this.getUserInput({
				type: "list",
				name: "framework",
				message: "Choose framework:",
				choices: this.getFrameworkNames(),
				default: "jQuery"
			});

			const framework = this.templateManager.getFrameworkByName(frameRes);
			// app name validation???
			projLibrary = await this.getProjectLibrary(framework);
			if (frameRes === "Angular" && projLibrary.projectType === "igx-ts") {
				Util.log("Psst! Did you know you can also use our schematics package to modify your Angular project directly?", "yellow");
				Util.log("Read more at: https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/getting_started.html.", "yellow");
			}
			const projTemplate = await this.getProjectTemplate(projLibrary);
			// project options:
			theme = await this.getTheme(projLibrary);

			Util.log("  Generating project structure.");
			const config = projTemplate.generateConfig(projectName, theme);
			for (const templatePath of projTemplate.templatePaths) {
				await Util.processTemplates(templatePath, path.join(process.cwd(), projectName),
					config, projTemplate.delimiters, false);
			}

			Util.log(Util.greenCheck() + " Project structure generated.");
			if (!this.config.skipGit) {
				Util.gitInit(process.cwd(), projectName);
			}
			// move cwd to project folder
			process.chdir(projectName);
		}
		await this.chooseActionLoop(projLibrary);
		//TODO: restore cwd?
	}

	protected async completeAndRun(port?: number) {
		await PackageManager.flushQueue(true);
		if (true) { // TODO: Make conditional?
			await start.start({ port });
		}
	}

	/**
	 * Get user name and set template's extra configurations if any
	 * @param projectLibrary to add component to
	 * @param component to get template for
	 */
	protected templateSelectedTask(type: "component" | "view" = "component"): Task<PromptTaskContext> {
		return async (_runner, context) => {
			const name = await this.chooseTemplateName(context.template, type);
			if (context.template.hasExtraConfiguration) {
				await this.customizeTemplateTask(context.template);
			}
			const res = await add.addTemplate(name, context.template);
			return res;
		};
	}
}
