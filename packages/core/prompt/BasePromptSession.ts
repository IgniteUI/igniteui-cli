import * as path from "path";
import { checkbox, input, rawlist, select, Separator } from "@inquirer/prompts";
import { BaseTemplateManager } from "../templates";
import {
	Component, Config, ControlExtraConfigType, ControlExtraConfiguration, Framework,
	FrameworkId, ProjectLibrary, ProjectTemplate, Template
} from "../types";
import { App, ChoiceItem, GoogleAnalytics, ProjectConfig, Util } from "../util";
import { Task, TaskRunner, WIZARD_BACK_OPTION } from "./TaskRunner";

export abstract class BasePromptSession {
	protected config: Config;

	constructor(protected templateManager: BaseTemplateManager) { }

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

	/**
	 * Starts a loop of 'Choose an action' questions
	 * @param projectLibrary The framework to use
	 * @param theme Theme to use
	 */
	public async chooseActionLoop(projectLibrary: ProjectLibrary) {
		const taskContext: PromptTaskContext = { projectLibrary };
		const runner = new TaskRunner(taskContext);

		runner.addTask(this.chooseActionTask);

		while (!runner.done) {
			await runner.run();
		}
	}

	/** Install packages and run project */
	protected abstract completeAndRun(port?: number);

	/** Upgrade packages to use private Infragistics feed */
	protected abstract upgradePackages();

	/**
	 * Get user name and set template's extra configurations if any
	 * @param projectLibrary to add component to
	 * @param component to get template for
	 */
	protected abstract templateSelectedTask(type?: "component" | "view"): Task<PromptTaskContext>;

	/**
	 * Gets the user input according to provided `options`.Returns directly if single choice is provided.
	 * @param options to use for the user input
	 * @param withBackChoice Add a "Back" option to choices list
	 */
	protected async getUserInput(options: IUserInputOptions, withBackChoice: boolean = false): Promise<string> {

		if (options.choices) {
			if (options.choices.length < 2) {
				// single choice to return:
				let choice = options.choices[0];
				choice = choice.value || choice;
				this.logAutoSelected(options, choice);
				return choice;
			}
			if (withBackChoice) {
				options.choices.push(WIZARD_BACK_OPTION);
			}
			options.choices = this.addSeparators(options.choices);
		}

		const userInput = await input(options);

		const result = userInput[options.name] as string;

		// post to GA everything but 'Back' user choice
		if (!withBackChoice || result !== WIZARD_BACK_OPTION) {
			GoogleAnalytics.post({
				t: "event",
				ec: "$ig wizard",
				el: options.message,
				ea: `${options.name}: ${result}`
			});
		} else {
			GoogleAnalytics.post({
				t: "event",
				ec: "$ig wizard",
				el: result,
				ea: `Back from ${options.name}`
			});
		}

		return result;
	}

	/**
	 * Check if provided @param name is valid for project name
	 * @param name the name to check
	 * @param checkFolder check if folder with this name already exists
	 */
	protected nameIsValid(name: string, checkFolder = true): boolean {
		if (!Util.isAlphanumericExt(name)) {
			Util.log(""); /* new line */
			Util.error(`Name '${name}' is not valid. `
				+ "Name should start with a letter and can also contain numbers, dashes and spaces.",
				"red");
			return false;
		}

		if (checkFolder && Util.directoryExists(name)) {
			Util.log(""); /* new line */
			Util.error(`Folder "${name}" already exists!`, "red");
			return false;
		}

		return true;
	}

	/** Returns the framework names, potentially filtered by config */
	protected getFrameworkNames(): string[] {
		let frameworksNames: string[] = [];
		if (
			this.config.stepByStep &&
			this.config.stepByStep.frameworks &&
			this.config.stepByStep.frameworks.length
		) {
			this.config.stepByStep.frameworks.forEach(x => {
				const framework = this.templateManager.getFrameworkById(x);
				if (framework) {
					frameworksNames.push(framework.name);
				}
			});
		}
		if (!frameworksNames.length) {
			// no config or wrong projTypes array:
			frameworksNames = this.templateManager.getFrameworkNames();
		}
		return frameworksNames;
	}

	/**
	 * Gets the project library from the user input, or default if provided @param framework has single project library
	 * @param framework to get project library for
	 */
	protected async getProjectLibrary(framework: Framework): Promise<ProjectLibrary> {
		let projectLibrary: ProjectLibrary;
		const projectLibraries = this.getProjectLibNames(framework);

		const projectRes = await this.getUserInput({
			type: "list",
			name: "projectType",
			message: "Choose the type of project:",
			choices: projectLibraries
		});
		projectLibrary = this.templateManager.getProjectLibraryByName(framework, projectRes);

		return projectLibrary;
	}

	/**
	 * Gets project template from user input, or default if provided `projectLibrary` has a single template
	 * @param projectLibrary to get theme for
	 */
	protected async getProjectTemplate(projectLibrary: ProjectLibrary): Promise<ProjectTemplate> {
		let projTemplate: ProjectTemplate;

		const componentNameRes = await this.getUserInput({
			type: "list",
			name: "projTemplate",
			message: "Choose project template:",
			choices: Util.formatChoices(projectLibrary.projects)
		});
		projTemplate = projectLibrary.projects.find(x => x.name === componentNameRes);

		return projTemplate;
	}

	/**
	 * Gets the theme from the user input, or default if provided @param projectLibrary has a single theme
	 * @param projectLibrary to get theme for
	 */
	protected async getTheme(projectLibrary: ProjectLibrary): Promise<string> {
		let theme: string;
		theme = await this.getUserInput({
			type: "list",
			name: "theme",
			message: "Choose the theme for the project:",
			choices: projectLibrary.themes,
			default: projectLibrary.themes[0]
		});
		return theme;
	}

	/**
	 * Prompt user for template name with appropriate default
	 * @param template template to get name for
	 * @param type type of the name question
	 */
	protected async chooseTemplateName(template: Template, type: "component" | "view" = "component") {
		const config = ProjectConfig.getConfig();
		const availableDefaultName = Util.getAvailableName(template.name, false,
			config.project.framework, config.project.projectType);

		const templateName = await this.getUserInput({
			type: "input",
			name: `${type === "component" ? type : "customView"}Name`,
			message: `Name your ${type}:`,
			default: availableDefaultName,
			validate: (input: string) => {
				// TODO: GA post?
				const name = Util.nameFromPath(input);
				return this.nameIsValid(name, false);
			}
		});

		return templateName;
	}

	/** Create prompts from template extra configuration and assign user answers to the template */
	protected async customizeTemplateTask(template: Template) {
		const extraPrompt = this.createQuestions(template.getExtraConfiguration());
		const extraConfigAnswers = [];
		for (const question of extraPrompt) {
			switch (question.type) {
				case "input":
					extraConfigAnswers.push(await input(question));
					break;
				case "select":
					extraConfigAnswers.push(await select(question));
					break;
				case "checkbox":
					extraConfigAnswers.push(await checkbox(question));
					break;
			}
		}

		const extraConfig = this.parseAnswers(extraConfigAnswers);
		GoogleAnalytics.post({
			t: "event",
			ec: "$ig wizard",
			el: "Extra configuration:",
			ea: `extra configuration: ${JSON.stringify(extraConfig)}`
		});

		template.setExtraConfiguration(extraConfig);
	}

	/**
	 * Returns a new array with inquirer.Separator() added between items
	 * @param array The original array to add separator to
	 */
	private addSeparators(array: any[]): any[] {
		const newArray = [];
		for (let i = 0; i < array.length; i++) {
			newArray.push(array[i]);
			if (i + 1 < array.length) {
				newArray.push(new Separator());
			}
		}
		if (array.length > 4) {
			// additional separator after last item for lists that wrap around
			newArray.push(new Separator(new Array(15).join("=")));
		}
		return newArray;
	}

	/**
	 * Generate questions from extra configuration array
	 * @param extraConfig
	 */
	private createQuestions(extraConfig: ControlExtraConfiguration[]): { type: string; name: string; message: string; choices: any[]; default: any; }[] {
		const result = [];
		for (const element of extraConfig) {
			const currExtraConfig = {};
			switch (element.type) {
				case ControlExtraConfigType.Choice:
					currExtraConfig["type"] = "select"; // formerly list
					break;
				case ControlExtraConfigType.MultiChoice:
					currExtraConfig["type"] = "checkbox";
					break;
				case ControlExtraConfigType.Value:
				default:
					currExtraConfig["type"] = "input";
					break;
			}
			currExtraConfig["default"] = element.default;
			currExtraConfig["message"] = element.message;
			currExtraConfig["name"] = element.key;
			currExtraConfig["choices"] = element.choices;
			result.push(currExtraConfig);
		}
		return result;
	}
	/**
	 * Conversion placeholder
	 * @param answers
	 */
	private parseAnswers(answers: {}): {} {
		return answers;
	}

	/**
	 * Task to pick action and load consecutive tasks
	 * @param projectLibrary to add component to
	 */
	private chooseActionTask: Task<PromptTaskContext> = async (runner, context) => {
		Util.log(""); /* new line */
		const action: string = await this.getUserInput({
			type: "list",
			name: "action",
			message: "Choose an action:",
			choices: this.generateActionChoices(context.projectLibrary),
			default: "Complete & Run"
		});

		runner.clearPending();
		switch (action) {
		/* istanbul ignore next */
		case "Add all":
			// internal testing only
			runner.addTask(async (_runner, _context) => {
				const templateTask = this.templateSelectedTask();
				for (const template of _context.projectLibrary.templates) {
					_context.template = template;
					await templateTask(_runner, _context);
				}
				return true;
			});
			runner.addTask(run => Promise.resolve(run.resetTasks()));
			break;
		case "Add component":
			runner.addTask(this.getComponentGroupTask);
			runner.addTask(this.getComponentTask);
			runner.addTask(this.getTemplateTask);
			runner.addTask(this.templateSelectedTask());
			runner.addTask(run => Promise.resolve(run.resetTasks()));
			break;
		case "Add scenario":
			runner.addTask(this.getCustomViewTask);
			runner.addTask(this.templateSelectedTask("view"));
			runner.addTask(run => Promise.resolve(run.resetTasks()));
			break;
		case "Complete & Run":
			const config = ProjectConfig.localConfig();

			if (config.project.framework === "angular" &&
				config.project.projectType === "igx-ts" &&
				!config.packagesInstalled) {
				// TODO: should we add check if there are paid components at all
				Util.log("The project will be created using a Trial version of Ignite UI for Angular.");
				Util.log("You can always run the upgrade-packages command once it's created.");
				const shouldUpgrade = await this.getUserInput({
					type: "list",
					name: "shouldUpgrade",
					message: "Would you like to upgrade to the licensed feed now?",
					choices: [
						{ value: "yes", name: "Yes (requires active subscription)", short: "Yes" },
						{ value: "no", name: "Skip for now", short: "Skip" }
					],
					default: "yes"
				});

				if (shouldUpgrade === "yes") {
					await this.upgradePackages();
				}
			}

			const defaultPort = config.project.defaultPort;
			const port = await this.getUserInput({
				type: "input",
				name: "port",
				message: "Choose app host port:",
				default: defaultPort,
				validate: (input: string) => {
					if (!Number(input)) {
						Util.log(""); /* new line */
						Util.error(`port should be a number. Input valid port or use the suggested default port`, "red");
						return false;
					}
					return true;
				}
			});
			config.project.defaultPort = parseInt(port, 10);
			ProjectConfig.setConfig(config);

			await this.completeAndRun(config.project.defaultPort);
			break;
		}
		return true;
	}

	/**
	 * Get component group from user input
	 * @param projectLibrary to add component to
	 */
	private getComponentGroupTask: Task<PromptTaskContext> = async (_runner, context) => {
		const groups = context.projectLibrary.getComponentGroupNames();
		const groupRes: string = await this.getUserInput({
			type: "list",
			name: "componentGroup",
			message: "Choose a group:",
			choices: Util.formatChoices(context.projectLibrary.getComponentGroups()),
			default: groups.find(x => x.includes("Grids")) || groups[0]
		}, true);

		if (groupRes === WIZARD_BACK_OPTION) {
			return WIZARD_BACK_OPTION;
		}
		context.group = groupRes;
		return true;
	}

	/**
	 * Get component in the selected components group
	 * @param projectLibrary to add component to
	 * @param groupName to chose components from
	 */
	private getComponentTask: Task<PromptTaskContext> = async (_runner, context) => {
		const componentNameRes = await this.getUserInput({
			type: "list",
			name: "component",
			message: "Choose a component:",
			choices: Util.formatChoices(context.projectLibrary.getComponentsByGroup(context.group))
		}, true);

		if (componentNameRes === WIZARD_BACK_OPTION) {
			return WIZARD_BACK_OPTION;
		}

		context.component = context.projectLibrary.getComponentByName(componentNameRes);
		return true;
	}

	/**
	 * Get template for selected component
	 * @param projectLibrary to add component to
	 * @param component to get template for
	 */
	private getTemplateTask: Task<PromptTaskContext> = async (_runner, context) => {
		let selectedTemplate: Template;
		const templates: Template[] = context.component.templates;

		const templateRes = await this.getUserInput({
			type: "list",
			name: "template",
			message: "Choose one:",
			choices: Util.formatChoices(templates)
		}, true);

		if (templateRes === WIZARD_BACK_OPTION) {
			return WIZARD_BACK_OPTION;
		}

		selectedTemplate = templates.find((value, i, obj) => {
			return value.name === templateRes;
		});

		if (selectedTemplate) {
			context.template = selectedTemplate;
			return true;
		}

		return false;
	}

	/**
	 * Get template for custom view from user input
	 * @param projectLibrary to add component to
	 * @param theme to use to style the project
	 */
	private getCustomViewTask: Task<PromptTaskContext> = async (_runner, context) => {
		const customTemplates: Template[] = context.projectLibrary.getCustomTemplates();

		const customTemplateNameRes = await this.getUserInput({
			type: "list",
			name: "customTemplate",
			message: "Choose custom view:",
			choices: Util.formatChoices(customTemplates)
		}, true);

		if (customTemplateNameRes === WIZARD_BACK_OPTION) {
			return WIZARD_BACK_OPTION;
		}
		const selectedTemplate = customTemplates.find((value, i, obj) => {
			return customTemplateNameRes === value.name;
		});

		if (selectedTemplate) {
			context.template = selectedTemplate;
			return true;
		}
		return false;
	}

	private logAutoSelected(options: IUserInputOptions, choice: any) {
		let text;
		switch (options.name) {
			case "framework":
				text = `  Framework`;
				break;
			case "projectType":
				text = `  Project type`;
				break;
			case "projTemplate":
				text = `  Proj Template`;
				break;
			case "theme":
				text = `  Theme`;
				break;
			default:
				return;
				//TODO: text = `  ${options.name}`;
		}
		GoogleAnalytics.post({
			t: "event",
			ec: "$ig wizard",
			el: options.message,
			ea: `${options.name}: ${choice}`
		});
		Util.log(`${text}: ${choice}`);
	}

	/** Returns the projectLibraries names, potentially filtered by config */
	private getProjectLibNames(framework: Framework): string[] {
		let projectLibraries: string[] = [];
		const frameworkConfig = this.config.stepByStep && this.config.stepByStep[framework.id as FrameworkId];

		if (frameworkConfig && frameworkConfig.projTypes && frameworkConfig.projTypes.length) {
			frameworkConfig.projTypes.forEach(x => {
				const projLib = framework.projectLibraries.find(p => p.projectType === x);
				if (projLib) {
					projectLibraries.push(projLib.name);
				}
			});
		}

		if (!projectLibraries.length) {
			// no config or wrong projTypes array:
			projectLibraries = this.templateManager.getProjectLibraryNames(framework.id);
		}
		return projectLibraries;
	}

	/**
	 * Generates a list of options for chooseActionLoop
	 * @param projectLibrary to generate options for
	 */
	private generateActionChoices(projectLibrary: ProjectLibrary): Array<{}> {
		const actionChoices: ChoiceItem[] = [
			{ name: "Complete & Run", description: "install packages and run in the default browser" }
		];

		/* istanbul ignore next */
		if (App.testMode) {
			// internal testing only
			actionChoices.push({ name: "Add all", description: "add all components/views" });
		}

		if (projectLibrary.components.length > 0) {
			actionChoices.push({ name: "Add component", description: "add a specific component view (e.g a grid)" });
		}

		if (projectLibrary.getCustomTemplateNames().length > 0) {
			actionChoices.push({ name: "Add scenario", description: "add a predefined scenario view (e.g grid or dashboard)" });
		}
		return Util.formatChoices(actionChoices, 10);
	}
}

/** Options for User Input */
export interface IUserInputOptions {
	type: string;
	name: string;
	message: string;
	choices?: any[];
	default?: any;
	validate?: (input: string) => string | boolean;
}

/** Context type for prompt tasks */
export interface PromptTaskContext {
	projectLibrary: ProjectLibrary;
	group?: string;
	component?: Component;
	template?: Template;
	name?: string;
}
