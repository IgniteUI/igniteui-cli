import chalk from "chalk";
import * as inquirer from "inquirer";
import * as path from "path";
import { default as add } from "./commands/add";
import { default as start } from "./commands/start";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { PackageManager } from "./packages/PackageManager";
import { ProjectConfig } from "./ProjectConfig";
import { TemplateManager } from "./TemplateManager";
import {
	Component, Config, ControlExtraConfigType, ControlExtraConfiguration, Framework,
	FrameworkId, ProjectLibrary, ProjectTemplate, Template
} from "./types/index";
import { Util } from "./Util";

export class PromptSession {
	private WIZARD_BACK_OPTION = "Back";
	private config: Config;

	constructor(private templateManager: TemplateManager) { }

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
		add.templateManager = this.templateManager;
		this.config = ProjectConfig.getConfig();
		const defaultProjName = "IG Project";

		if (ProjectConfig.hasLocalConfig() && !this.config.project.isShowcase) {
			projLibrary = this.templateManager.getProjectLibrary(this.config.project.framework, this.config.project.projectType);
			theme = this.config.project.theme;
		} else {
			Util.log(""); /* new line */

			let projectName: string;
			const availableDefaultName = Util.getAvailableName(defaultProjName, true);
			while (!projectName) {
				const defaultAppName = availableDefaultName;
				const nameRes: string = await this.getUserInput({
					type: "input",
					name: "projectName",
					message: "Enter a name for your project:",
					default: defaultAppName
				});

				if (this.nameIsValid(nameRes)) {
					projectName = nameRes;
				}
			}

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
		await this.chooseActionLoop(projLibrary, theme);
		//TODO: restore cwd?
	}
	/**
	 * Starts a loop of 'Choose an action' questions
	 * @param projectLibrary The framework to use
	 * @param theme Theme to use
	 */
	public async chooseActionLoop(projectLibrary: ProjectLibrary, theme: string) {
		let actionIsOver = false;
		while (!actionIsOver) {
			const actionChoices: Array<{}> = this.generateActionChoices(projectLibrary);
			Util.log(""); /* new line */
			const action: string = await this.getUserInput({
				type: "list",
				name: "action",
				message: "Choose an action:",
				choices: actionChoices,
				default: "Complete & Run"
			});

			switch (action) {
				case "Add component": {
					actionIsOver = await this.addComponent(projectLibrary, theme);
					break;
				}
				case "Add scenario": {
					actionIsOver = await this.addView(projectLibrary, theme);
					break;
				}
				case "Complete & Run":
					const config = ProjectConfig.localConfig();
					const defaultPort = config.project.defaultPort;
					let port;
					let userPort: boolean;
					while (!userPort) {
						// tslint:disable-next-line:prefer-const
						port = (await inquirer.prompt({
							default: defaultPort,
							message: "Choose app host port:",
							name: "port",
							type: "input"
						}))["port"];

						if (!Number(port)) {
							Util.log(`port should be a number. Input valid port or use the suggested default port`, "yellow");
						} else {
							userPort = true;
							config.project.defaultPort = port;
							ProjectConfig.setConfig(config);
						}
					}
				default: {
					await PackageManager.flushQueue(true);
					if (true) { // TODO: Make conditional?
						await start.start({ port });
						return;
					}
				}
			}
		}
		await this.chooseActionLoop(projectLibrary, theme);
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
				newArray.push(new inquirer.Separator());
			}
		}
		if (array.length > 4) {
			// additional separator after last item for lists that wrap around
			newArray.push(new inquirer.Separator(new Array(15).join("=")));
		}
		return newArray;
	}

	/**
	 * Generate questions from extra configuration array
	 * @param extraConfig
	 */
	private createQuestions(extraConfig: ControlExtraConfiguration[]): any {
		const result = [];
		for (const element of extraConfig) {
			const currExtraConfig = {};
			switch (element.type) {
				case ControlExtraConfigType.Choice:
					currExtraConfig["type"] = "list";
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
	 * Add the component user has selected
	 * @param projectLibrary to add component to
	 * @param theme to use to style the project
	 */
	private async addComponent(projectLibrary: ProjectLibrary, theme: string): Promise<boolean> {
		let addComponentIsOver = false;
		while (!addComponentIsOver) {
			const groups = projectLibrary.getComponentGroupNames();
			const groupRes: string = await this.getUserInput({
				type: "list",
				name: "componentGroup",
				message: "Choose a group:",
				choices: Util.formatChoices(projectLibrary.getComponentGroups()),
				default: groups.find(x => x.includes("Grids")) || groups[0]
			}, true);

			if (groupRes === this.WIZARD_BACK_OPTION) {
				return false;
			}
			addComponentIsOver = await this.choseComponent(projectLibrary, theme, groupRes);
		}
		return true;
	}

	/**
	 * Select the component in the selected components group
	 * @param projectLibrary to add component to
	 * @param theme to use to style the project
	 * @param groupName to chose components from
	 */
	private async choseComponent(projectLibrary: ProjectLibrary, theme: string, groupName: string): Promise<boolean> {
		let choseComponentIsOver = false;
		while (!choseComponentIsOver) {
			const componentNameRes = await this.getUserInput({
				type: "list",
				name: "component",
				message: "Choose a component:",
				choices: Util.formatChoices(projectLibrary.getComponentsByGroup(groupName))
			}, true);

			if (componentNameRes === this.WIZARD_BACK_OPTION) {
				return false;
			}

			const component = projectLibrary.getComponentByName(componentNameRes);
			choseComponentIsOver = await this.getTemplate(projectLibrary, theme, groupName, component);
		}
		return true;
	}

	/**
	 * Select template for provided component and set template's extra configurations if any
	 * @param projectLibrary to add component to
	 * @param theme to use to style the project
	 * @param groupName to chose components from
	 * @param component to get template for
	 */
	private async getTemplate(projectLibrary: ProjectLibrary, theme: string, groupName: string, component: Component)
		: Promise<boolean> {
		let selectedTemplate: Template;
		const templates: Template[] = component.templates;
		const config = ProjectConfig.getConfig();

		const templateRes = await this.getUserInput({
			type: "list",
			name: "template",
			message: "Choose one:",
			choices: Util.formatChoices(templates)
		}, true);

		if (templateRes === this.WIZARD_BACK_OPTION) {
			return false;
		}

		selectedTemplate = templates.find((value, i, obj) => {
			return value.name === templateRes;
		});

		if (selectedTemplate) {
			let success = false;
			const availableDefaultName = Util.getAvailableName(selectedTemplate.name, false,
				config.project.framework, config.project.projectType);
			while (!success) {
				const templateName = await this.getUserInput({
					type: "input",
					name: "componentName",
					message: "Name your component:",
					default: availableDefaultName
				});

				if (selectedTemplate.hasExtraConfiguration) {
					const extraPrompt: any[] = this.createQuestions(selectedTemplate.getExtraConfiguration());
					const extraConfigAnswers = await inquirer.prompt(extraPrompt);
					const extraConfig = this.parseAnswers(extraConfigAnswers);

					GoogleAnalytics.post({
						t: "event",
						ec: "$ig wizard",
						el: "Extra configuration:",
						ea: `extra configuration: ${JSON.stringify(extraConfig)}`
					});

					selectedTemplate.setExtraConfiguration(extraConfig);
				}
				success = await add.addTemplate(templateName, selectedTemplate);
			}
		}
		return true;
	}

	/**
	 * Add the view user has selected
	 * @param projectLibrary to add component to
	 * @param theme to use to style the project
	 */
	private async addView(projectLibrary: ProjectLibrary, theme: string): Promise<boolean> {
		const customTemplates: Template[] = projectLibrary.getCustomTemplates();
		const formatedOutput = Util.formatChoices(customTemplates);
		const config = ProjectConfig.getConfig();
		const customTemplateNameRes = await this.getUserInput({
			type: "list",
			name: "customTemplate",
			message: "Choose custom view:",
			choices: formatedOutput
		}, true);

		if (customTemplateNameRes === this.WIZARD_BACK_OPTION) {
			return false;
		}
		const selectedTemplate = customTemplates.find((value, i, obj) => {
			return customTemplateNameRes === value.name;
		});
		if (selectedTemplate) {
			let success = false;
			const availableDefaultName = Util.getAvailableName(selectedTemplate.name, false,
				config.project.framework, config.project.projectType);
			while (!success) {
				const customViewNameRes = await this.getUserInput({
					type: "input",
					name: "customViewName",
					message: "Name your view:",
					default: availableDefaultName
				});

				success = await add.addTemplate(customViewNameRes, selectedTemplate);
			}
		}

		return true;
	}

	/**
	 * Gets the user input according to provided `options`.Returns directly if single choice is provided.
	 * @param options to use for the user input
	 * @param withBackChoice Add a "Back" option to choices list
	 */
	private async getUserInput(options: IUserInputOptions, withBackChoice: boolean = false): Promise<string> {

		if (options.choices) {
			if (options.choices.length < 2) {
				// single choice to return:
				let choice = options.choices[0];
				choice = choice.value || choice;
				this.logAutoSelected(options, choice);
				return choice;
			}
			if (withBackChoice) {
				options.choices.push(this.WIZARD_BACK_OPTION);
			}
			options.choices = this.addSeparators(options.choices);
		}

		const userInput = await inquirer.prompt({
			choices: options.choices || [],
			default: options.default || "",
			message: options.message,
			name: options.name,
			type: options.type
		});

		const result = userInput[options.name] as string;

		// post to GA everything but 'Back' user choice
		if (!withBackChoice || result !== this.WIZARD_BACK_OPTION) {
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

	/**
	 * Check if provided @param name is valid for project name
	 * @param name the name to check
	 */
	private nameIsValid(name: string): boolean {
		if (!Util.isAlphanumericExt(name)) {
			Util.error(`Name '${name}' is not valid. `
				+ "Name should start with a letter and can also contain numbers, dashes and spaces.",
				"red");
			return false;
		}

		if (Util.directoryExists(name)) {
			Util.error(`Folder "${name}" already exists!`, "red");
			return false;
		}

		return true;
	}

	/**
	 * Gets the project library from the user input, or default if provided @param framework has single project library
	 * @param framework to get project library for
	 */
	private async getProjectLibrary(framework: Framework): Promise<ProjectLibrary> {
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

	/** Returns the framework names, potentially filtered by config */
	private getFrameworkNames(): string[] {
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
	 * Gets project template from user input, or default if provided `projectLibrary` has a single template
	 * @param projectLibrary to get theme for
	 */
	private async getProjectTemplate(projectLibrary: ProjectLibrary): Promise<ProjectTemplate> {
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
	private async getTheme(projectLibrary: ProjectLibrary): Promise<string> {
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
	 * Generates a list of options for chooseActionLoop
	 * @param projectLibrary to generate options for
	 */
	private generateActionChoices(projectLibrary: ProjectLibrary): Array<{}> {
		const actionChoices: Array<{}> = [{
			name: "Complete & Run" + chalk.gray("..........install packages and run in the default browser"),
			short: "Complete & Run",
			value: "Complete & Run"
		}];
		if (projectLibrary.components.length > 0) {
			actionChoices.push({
				name:  "Add component" + chalk.gray("...........add a specific component view (e.g a grid)"),
				short: "Add component", // displayed result after selection
				value: "Add component" // actual selection value
			});
		}
		if (projectLibrary.getCustomTemplateNames().length > 0) {
			actionChoices.push({
				name: "Add scenario " + chalk.gray("...........add a predefined scenario view (e.g grid or dashboard)"),
				short: "Add scenario",
				value: "Add scenario"
			});
		}

		return actionChoices;
	}
}

/**
 * Options for User Input
 */
interface IUserInputOptions {
	type: string;
	name: string;
	message: string;
	choices?: any[];
	default?: string;
}
