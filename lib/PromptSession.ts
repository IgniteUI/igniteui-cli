import * as inquirer from "inquirer";
import * as path from "path";
import { default as add } from "./commands/add";
import { default as build } from "./commands/build";
import { default as start } from "./commands/start";
import { ProjectConfig } from "./ProjectConfig";
import { TemplateManager } from "./TemplateManager";
import { Util } from "./Util";

export class PromptSession {

	constructor(private templateManager: TemplateManager) { }

	/**
	 * Start questions session for project creation
	 */
	public async start() {
		const config =  ProjectConfig.getConfig();
		let projLibrary: ProjectLibrary;
		let theme: string;

		add.templateManager = this.templateManager;

		// tslint:disable:object-literal-sort-keys
		if (config != null && !config.project.isShowcase) {
			//throw new Error("Add command is supported only on existing project created with igntie-ui-cli");
			projLibrary = this.templateManager.getProjectLibrary(config.project.framework, config.project.projectType);
			await this.chooseActionLoop(projLibrary, config.project.theme);
		} else {
			//TODO update to check if project exists and load correct framework
			const questions: inquirer.Question[] = [{
				type: "input",
				name: "projectName",
				message: "Enter a name for your project: ",
				default: "app"
			},
			//TODO split questions and in case of existing app folder or not kebab case throw exception.
			{
				type: "list",
				name: "framework",
				message: "Select framework",
				choices: this.addSeparators(this.templateManager.getFrameworkNames()),
				default: "jQuery"
			}];
			const answers = await inquirer.prompt(questions);
			const framework = this.templateManager.getFrameworkByName(answers["framework"]);
			//app name validation???
			if (framework.projectLibraries.length > 1) {
				//proj type support
				const projQuestion: inquirer.Question = {
					type: "list",
					name: "project",
					message: "Choose the type of project",
					choices: this.addSeparators(this.templateManager.getProjectLibraryNames(framework.id))
				};
				const proj = await inquirer.prompt(projQuestion);
				projLibrary = this.templateManager.getProjectLibraryByName(framework, proj["project"]);
			} else {
				projLibrary = this.templateManager.getProjectLibrary(framework.id);
			}

			if (projLibrary.themes.length < 2) {
				theme = projLibrary.themes[0] || "";
			} else {
				const themeQuestion: inquirer.Question = {
					type: "list",
					name: "theme",
					message: "Choose the theme for the project",
					choices: this.addSeparators(projLibrary.themes),
					default: "infragistics"
				};
				const themeAnswer = await inquirer.prompt(themeQuestion);
				theme = themeAnswer["theme"];
			}

			const projTemplate = projLibrary.getProject();

			Util.log("Generating project structure.");
			await projTemplate.generateFiles(process.cwd(), answers["projectName"], theme);
			// move cwd to project folder
			process.chdir(answers["projectName"]);
			Util.log("Project structure generated.");

			await this.chooseActionLoop(projLibrary, theme);
			//TODO: restore cwd?
		}
	}

	/**
	 * Starts a loop of 'Choose an action' questions
	 * @param framework The framework to use
	 * @param theme Theme to use
	 */
	public async chooseActionLoop(framework: ProjectLibrary, theme: string) {
		const actionChoices: string[] = ["Complete"];
		let templateName;
		if (framework.components.length > 0) {
			actionChoices.push("Add component");
		}
		if (framework.getCustomTemplates().length > 0) {
			actionChoices.push("Add view");
		}
		const action = await inquirer.prompt({
			type: "list",
			name: "action",
			message: "Choose an action",
			choices:  this.addSeparators(actionChoices),
			default: "Complete"
		});
		let selectedTemplate: Template;
		switch (action["action"]) {
			case "Add component":
				const groups = framework.getComponentGroups();
				const group = await inquirer.prompt({
					name: "componentGroup",
					type: "list",
					message: "Choose a group",
					choices: this.addSeparators(groups),
					default: groups.find(x => x === "Data Grids") || groups[0]
				});

				const componentNames = framework.getComponentNamesByGroup(group["componentGroup"]);
				const component = await inquirer.prompt({
						type: "list",
						name: "component",
						message: "Choose a component",
						choices: this.addSeparators(componentNames)
					});
				const pickedComponent = framework.getComponentByName(component["component"]);

				// runTemplateCollection (item: Template[])
				//TODO refactor
				const templates: Template[] = pickedComponent.templates;
				if (templates.length === 1) {
					//get the only one template
					selectedTemplate = templates[0];
				} else {
					const templateNames = templates.map(x => x.name);
					const template = await inquirer.prompt({
							type: "list",
							name: "template",
							message: "Choose one",
							choices: this.addSeparators(templateNames)
						});
					selectedTemplate = templates.find((value, i, obj) => {
						return value.name === template["template"];
					});
				}
				if (selectedTemplate) {
					templateName = await inquirer.prompt({
						type: "input",
						name: "name",
						message: "Name your component",
						default: selectedTemplate.name
					});
					//TODO Validation of the template name (should not exist and should be kebab case)
					if (selectedTemplate.hasExtraConfiguration) {
						const extraPrompt: any[] = this.createQuestions(selectedTemplate.getExtraConfiguration());
						const extraConfigAnswers = await inquirer.prompt(extraPrompt);
						const extraConfig = this.parseAnswers(extraConfigAnswers);
						selectedTemplate.setExtraConfiguration(extraConfig);
					}
					await add.addTemplate(templateName["name"], selectedTemplate);
				}
				await this.chooseActionLoop(framework, theme);
				break;
			case "Add view":
				//TODO:
				const customTemplates = framework.getCustomTemplates();
				const customTemplate = await inquirer.prompt({
					type: "list",
					name: "customTemplate",
					message: "Choose custom template",
					choices: this.addSeparators(customTemplates)
				});
				selectedTemplate = framework.getTemplateByName(customTemplate["customTemplate"]);
				templateName = await inquirer.prompt({
					type: "input",
					name: "name",
					message: "Name your template",
					default: selectedTemplate.name.toLowerCase().replace(/ /g, "-")
				});
				// TODO: Combine name with output path, folder existing check
				await add.addTemplate(templateName["name"], selectedTemplate);

				await this.chooseActionLoop(framework, theme);
				break;
			case "Complete":
			default:
				if (true) { // TODO: Make conditional?
					await build.execute({});
					start.execute({});
				}
		}
	}

	/**
	 * Returns a new array with inquirer.Separator() added between items
	 * @param array The original array to add separators to
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
}
