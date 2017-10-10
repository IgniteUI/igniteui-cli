import * as path from "path";
import * as inquirer from "inquirer";
import { default as add } from "./commands/add";
import { default as build } from "./commands/build";
import { default as start } from "./commands/start";
import { ProjectConfig } from './ProjectConfig';
import { TemplateManager } from "./TemplateManager";

export class PromptSession {

	constructor(private templateManager: TemplateManager) { }

	/**
	 * Start questions session for project creation
	 */
	async start(){
		var config =  ProjectConfig.getConfig();
		add.templateManager = this.templateManager;
		if (config != null && !config.project.isShowcase) {
			//throw new Error("Add command is supported only on existing project created with igntie-ui-cli");
			var framework = this.templateManager.getFrameworkById(config.project.framework);
			if (framework.projectLibraries.length > 1) {
				//TODO proj type support
			} else {
				//Sorry they made me do it. 
				projLibrary = framework.projectLibraries[0];
			}
			await this.chooseActionLoop(projLibrary, config.project.theme);
		} else {
			//TODO update to check if project exists and load correct framework
			var questions: inquirer.Question[] = [{
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
			var answers = await inquirer.prompt(questions);
			var projLibrary: ProjectLibrary, framework = this.templateManager.getFrameworkByName(answers["framework"]);
			//app name validation??? 
			if (framework.projectLibraries.length > 1) {
				//TODO proj type support
			} else {
				//Sorry they made me do it. 
				projLibrary = framework.projectLibraries[0];
			}
			var themeQuestion: inquirer.Question = {
				type: "list",
				name: "theme",
				message: "Choose the theme for the project",
				choices: this.addSeparators(projLibrary.themes),
				default: "infragistics"
			};
			var themeAnswer = await inquirer.prompt(themeQuestion);
			var projTemplate = projLibrary.getProject();
			//

			console.log("Generating project structure.");
			await projTemplate.generateFiles(process.cwd(), answers["projectName"], themeAnswer["theme"]);
			// move cwd to project folder
			process.chdir(answers["projectName"]);
			console.log("Project structure generated.");

			await this.chooseActionLoop(projLibrary, themeAnswer["theme"]);
			//TODO: restore cwd?
		}
		//process.exit(); //TODO
	}

	/**
	 * Starts a loop of 'Choose an action' questions
	 * @param framework The framework to use
	 * @param theme Theme to use
	 */
	async chooseActionLoop(framework: ProjectLibrary, theme: string) {
		var actionChoices: string[] = ["Complete"];
		if (framework.getCustomTemplates().length > 0) {
			actionChoices.push("Add template");
		}
		if (framework.components.length > 0) {
			actionChoices.push("Add component");
		}
		var action = await inquirer.prompt({
			type: "list",
			name: "action",
			message: "Choose an action",
			choices:  this.addSeparators(actionChoices),
			default: "Complete"
		}), selectedTemplate: Template;
		switch (action["action"]) {
			case "Add component":
				var groups = framework.getComponentGroups();
				var group = await inquirer.prompt({
					name: "componentGroup",
					type: "list",
					message: "Choose a group",
					choices: this.addSeparators(groups),
					default: groups.find(x => x === "Grids") || groups[0]
				});

				var componentNames = framework.getComponentNamesByGroup(group["componentGroup"]);
				var component = await inquirer.prompt({
						type: "list",
						name: "component",
						message: "Choose a component",
						choices: this.addSeparators(componentNames)
					});
				var pickedComponent = framework.getComponentByName(component["component"]);

				// runTemplateCollection (item: Template[])
				//TODO refactor
				var templates: Template[] = pickedComponent.templates;
				if (templates.length === 1) {
					//get the only one template
					selectedTemplate = templates[0];
				} else {
					var templateNames = templates.map(x => x.name),
						template = await inquirer.prompt({
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
					var templateName = await inquirer.prompt({
						type: "input",
						name: "name",
						message: "Name your component",
						default: selectedTemplate.name
					});
					//TODO Validation of the template name (should not exist and should be kebab case)
					if (selectedTemplate.hasExtraConfiguration) {
						var extraPrompt: any[] = this.createQuestions(selectedTemplate.getExtraConfiguration());
						var extraConfigAnswers = await inquirer.prompt(extraPrompt);
						var extraConfig = this.parseAnswers(extraConfigAnswers);
						selectedTemplate.setExtraConfiguration(extraConfig);
					}
					await add.addTemplate(templateName["name"], selectedTemplate);
				}
				await this.chooseActionLoop(framework, theme);
				break;
			case "Add template":
				//TODO:
				var customTemplates = framework.getCustomTemplates(),
				customTemplate = await inquirer.prompt({
					type: "list",
					name: "customTemplate",
					message: "Choose custom template",
					choices: this.addSeparators(customTemplates)
				});
				selectedTemplate = framework.getTemplateByName(customTemplate["customTemplate"]);
				var templateName = await inquirer.prompt({
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
		var newArray = [];
		for (var i = 0; i < array.length; i++) {
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
		var result = [];
		for (var i = 0; i < extraConfig.length; i++) {
			var element = extraConfig[i];
			var currExtraConfig = {}
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
	private parseAnswers(answers: {}) : {} {
		return answers;
	}
}