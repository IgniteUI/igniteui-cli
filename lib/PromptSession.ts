import * as inquirer from "inquirer";
import * as path from "path";
import { default as add } from "./commands/add";
import { default as start } from "./commands/start";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { PackageManager } from "./packages/PackageManager";
import { ProjectConfig } from "./ProjectConfig";
import { TemplateManager } from "./TemplateManager";
import { Util } from "./Util";

export class PromptSession {
	private WIZARD_BACK_OPTION = "Back";

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
		GoogleAnalytics.post({ cd: "Wizard", t: "screenview" });

		let projLibrary: ProjectLibrary;
		let theme: string;

		add.templateManager = this.templateManager;
		const config = ProjectConfig.getConfig();

		if (ProjectConfig.hasLocalConfig() && !config.project.isShowcase) {
			projLibrary = this.templateManager.getProjectLibrary(config.project.framework, config.project.projectType);
			theme = config.project.theme;
		} else {
			Util.log(""); /* new line */

			let projectName: string;
			while (!projectName) {
				const nameRes: string = await this.getUserInput({
					default: "app",
					message: "Enter a name for your project:",
					name: "projectName",
					type: "input"
				});

				if (this.nameIsValid(nameRes)) {
					projectName = nameRes;
				}
			}

			const frameRes: string = await this.getUserInput({
				choices: this.templateManager.getFrameworkNames(),
				default: "jQuery",
				message: "Choose framework:",
				name: "framework",
				type: "list"
			});

			const framework = this.templateManager.getFrameworkByName(frameRes);
			//app name validation???
			projLibrary = await this.getProjectLibrary(framework);
			theme = await this.getTheme(projLibrary);

			const projTemplate = projLibrary.getProject();
			Util.log("  Generating project structure.");
			await projTemplate.generateFiles(process.cwd(), projectName, theme);

			Util.log(Util.greenCheck() + " Project structure generated.");
			if (!config.skipGit) {
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
			const actionChoices: string[] = this.generateActionChoices(projectLibrary);
			Util.log(""); /* new line */
			const action: string = await this.getUserInput({
				choices: actionChoices,
				default: "Complete & Run",
				message: "Choose an action:",
				name: "action",
				type: "list"
			});

			switch (action) {
				case "Add component": {
					actionIsOver = await this.addComponent(projectLibrary, theme);
					break;
				}
				case "Add view": {
					actionIsOver = await this.addView(projectLibrary, theme);
					break;
				}
				case "Complete & Run":
				default: {
					await PackageManager.flushQueue(true);
					if (true) { // TODO: Make conditional?
						await start.start({});
						actionIsOver = true;
					}
				}
			}
		}
	}

	/**
	 * Returns a new array with inquirer.Separator() added between items
	 * @param array The original array to add separatorfdks to
	 */
	private addSeparators(array: any[]): any[] {
		const newArray = [];
		for (let i = 0; i < array.length; i++) {
			newArray.push(array[i]);
			if (i + 1 < array.length) {
				newArray.push(new inquirer.Separator());
			}
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
				case Enumerations.ControlExtraConfigType.Choice:
					currExtraConfig["type"] = "list";
					break;
				case Enumerations.ControlExtraConfigType.MultiChoice:
					currExtraConfig["type"] = "checkbox";
					break;
				case Enumerations.ControlExtraConfigType.Value:
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

	private async addComponent(projectLibrary: ProjectLibrary, theme: string): Promise<boolean> {
		let addComponentIsOver = false;
		while (!addComponentIsOver) {
			const groups = projectLibrary.getComponentGroups();
			const groupRes: string = await this.getUserInput({
				choices: groups,
				default: groups.find(x => x === "Data Grids") || groups[0],
				message: "Choose a group:",
				name: "componentGroup",
				type: "list"
			}, true);

			if (groupRes === this.WIZARD_BACK_OPTION) {
				return false;
			}
			addComponentIsOver = await this.choseComponent(projectLibrary, theme, groupRes);
		}
		return true;
	}

	private async choseComponent(projectLibrary: ProjectLibrary, theme: string, groupName: string): Promise<boolean> {
		let choseComponentIsOver = false;
		while (!choseComponentIsOver) {
			const componentNameRes = await this.getUserInput({
				choices: projectLibrary.getComponentNamesByGroup(groupName),
				message: "Choose a component:",
				name: "component",
				type: "list"
			}, true);

			if (componentNameRes === this.WIZARD_BACK_OPTION) {
				return false;
			}

			const component = projectLibrary.getComponentByName(componentNameRes);

			// runTemplateCollection (item: Template[])
			choseComponentIsOver = await this.getTemplate(projectLibrary, theme, groupName, component);
		}
		return true;
	}

	private async getTemplate(projectLibrary: ProjectLibrary, theme: string, groupName: string, component: Component)
		: Promise<boolean> {
		let selectedTemplate: Template;
		const templates: Template[] = component.templates;
		if (templates.length === 1) {
			//get the only one template
			selectedTemplate = templates[0];
		} else {
			const templateRes = await this.getUserInput({
				choices: templates.map(x => x.name),
				message: "Choose one:",
				name: "template",
				type: "list"
			}, true);

			if (templateRes === this.WIZARD_BACK_OPTION) {
				return false;
			}

			selectedTemplate = templates.find((value, i, obj) => {
				return value.name === templateRes;
			});
			if (selectedTemplate) {
				let success = false;
				while (!success) {
					const templateName = await this.getUserInput({
						default: selectedTemplate.name,
						message: "Name your component:",
						name: "componentName",
						type: "input"
					});

					if (selectedTemplate.hasExtraConfiguration) {
						const extraPrompt: any[] = this.createQuestions(selectedTemplate.getExtraConfiguration());
						const extraConfigAnswers = await inquirer.prompt(extraPrompt);
						const extraConfig = this.parseAnswers(extraConfigAnswers);

						GoogleAnalytics.post({
							ea: `extra configuration: ${JSON.stringify(extraConfig)}`,
							ec: "$ig wizard",
							el: "Extra configuration:",
							t: "event"
						});

						selectedTemplate.setExtraConfiguration(extraConfig);
					}
					success = await add.addTemplate(templateName, selectedTemplate);
				}
			}
		}
		return true;
	}

	private async addView(projectLibrary: ProjectLibrary, theme: string): Promise<boolean> {
		const customTemplateNameRes = await this.getUserInput({
			choices: projectLibrary.getCustomTemplateNames(),
			message: "Choose custom view:",
			name: "customTemplate",
			type: "list"
		}, true);

		if (customTemplateNameRes === this.WIZARD_BACK_OPTION) {
			return false;
		}
		const selectedTemplate = await projectLibrary.getTemplateByName(customTemplateNameRes);
		if (selectedTemplate) {
			let success = false;
			while (!success) {
				const customViewNameRes = await this.getUserInput({
					default: selectedTemplate.name,
					message: "Name your view:",
					name: "customViewName",
					type: "input"
				});

				success = await add.addTemplate(customViewNameRes, selectedTemplate);
			}
		}

		return true;
	}

	private async getUserInput(options: IUserInputOptions, withBackChoice: boolean = false): Promise<string> {
		if (options.choices) {
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

		GoogleAnalytics.post({
			cd1: result,
			ea: `${options.name}: ${result}`,
			ec: "$ig wizard",
			el: options.message,
			t: "event"
		});

		return result;
	}

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

	private async getProjectLibrary(framework: Framework): Promise<ProjectLibrary> {
		let projectLibrary: ProjectLibrary;
		if (framework.projectLibraries.length > 1) {
			const projectRes = await this.getUserInput({
				choices: this.templateManager.getProjectLibraryNames(framework.id),
				message: "Choose the type of project:",
				name: "projectType",
				type: "list"
			});

			projectLibrary = this.templateManager.getProjectLibraryByName(framework, projectRes);
		} else {
			projectLibrary = this.templateManager.getProjectLibrary(framework.id);
		}

		return projectLibrary;
	}

	private async getTheme(projectLibrary: ProjectLibrary): Promise<string> {
		let theme: string;
		if (projectLibrary.themes.length < 2) {
			theme = projectLibrary.themes[0] || "";
		} else {
			theme = await this.getUserInput({
				choices: projectLibrary.themes,
				default: "infragistics",
				message: "Choose the theme for the project:",
				name: "theme",
				type: "list"
			});
		}

		return theme;
	}

	private generateActionChoices(projectLibrary: ProjectLibrary): string[] {
		const actionChoices: string[] = ["Complete & Run"];
		if (projectLibrary.components.length > 0) {
			actionChoices.push("Add component");
		}
		if (projectLibrary.getCustomTemplateNames().length > 0) {
			actionChoices.push("Add view");
		}

		return actionChoices;
	}
}

interface IUserInputOptions {
	type: string;
	name: string;
	message: string;
	choices?: any[];
	default?: string;
}
