import * as inquirer from "inquirer";
import * as path from "path";
import { default as add } from "./commands/add";
import { default as start } from "./commands/start";
import { GoogleAnalytic } from "./GoogleAnalytic";
import { PackageManager } from "./packages/PackageManager";
import { ProjectConfig } from "./ProjectConfig";
import { TemplateManager } from "./TemplateManager";
import { Util } from "./Util";

export class PromptSession {

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
		const config =  ProjectConfig.getConfig();
		let projLibrary: ProjectLibrary;
		let projectName: string;
		let theme: string;

		add.templateManager = this.templateManager;

		// tslint:disable:object-literal-sort-keys
		if (ProjectConfig.hasLocalConfig() && !config.project.isShowcase) {
			projLibrary = this.templateManager.getProjectLibrary(config.project.framework, config.project.projectType);
			await this.chooseActionLoop(projLibrary, config.project.theme);
		} else {
			Util.log(""); /* new line */
			while (!projectName) {
				let nameRes = (await inquirer.prompt({
					type: "input",
					name: "projectName",
					message: "Enter a name for your project:",
					default: "app"
				}))["projectName"];
				nameRes = nameRes.trim();

				GoogleAnalytic.post({
					t: "event",
					ec: "$ig wizard",
					ea: "Enter a name for your project: ",
					el: `project name: ${nameRes}`
				});

				if (!Util.isAlphanumericExt(nameRes)) {
					Util.error(`Name '${nameRes}' is not valid. `
						+ "Name should start with a letter and can also contain numbers, dashes and spaces.",
						"red");
				} else if (Util.directoryExists(nameRes)) {
					Util.error(`Folder "${nameRes}" already exists!`, "red");
				} else {
					projectName = nameRes;
				}
			}
			const frameRes = await inquirer.prompt({
				type: "list",
				name: "framework",
				message: "Choose framework:",
				choices: this.addSeparators(this.templateManager.getFrameworkNames()),
				default: "jQuery"
			});

			GoogleAnalytic.post({
				t: "event",
				ec: "$ig wizard",
				ea: "Choose framework:",
				el: `framework: ${frameRes["framework"]}`
			});

			const framework = this.templateManager.getFrameworkByName(frameRes["framework"]);
			//app name validation???
			if (framework.projectLibraries.length > 1) {
				//proj type support
				const projQuestion: inquirer.Question = {
					type: "list",
					name: "project",
					message: "Choose the type of project:",
					choices: this.addSeparators(this.templateManager.getProjectLibraryNames(framework.id))
				};
				const proj = await inquirer.prompt(projQuestion);

				GoogleAnalytic.post({
					t: "event",
					ec: "$ig wizard",
					ea: "Choose the type of the project:",
					el: `project type: ${proj["project"]}`
				});

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
					message: "Choose the theme for the project:",
					choices: this.addSeparators(projLibrary.themes),
					default: "infragistics"
				};
				const themeAnswer = await inquirer.prompt(themeQuestion);

				GoogleAnalytic.post({
					t: "event",
					ec: "$ig wizard",
					ea: "Choose the theme for the project:",
					el: `theme: ${themeAnswer["theme"]}`
				});

				theme = themeAnswer["theme"];
			}

			const projTemplate = projLibrary.getProject();
			Util.log("  Generating project structure.");
			await projTemplate.generateFiles(process.cwd(), projectName, theme);

			Util.log(Util.greenCheck() + " Project structure generated.");
			if (!config.skipGit) {
				Util.gitInit(process.cwd(), projectName);
			}
			// move cwd to project folder
			process.chdir(projectName);
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
		const actionChoices: string[] = ["Complete & Run"];
		let templateName;
		if (framework.components.length > 0) {
			actionChoices.push("Add component");
		}
		if (framework.getCustomTemplateNames().length > 0) {
			actionChoices.push("Add view");
		}
		Util.log(""); /* new line */
		const action = await inquirer.prompt({
			type: "list",
			name: "action",
			message: "Choose an action:",
			choices:  this.addSeparators(actionChoices),
			default: "Complete & Run"
		});

		GoogleAnalytic.post({
			t: "event",
			ec: "$ig wizard",
			ea: "Choose an action:",
			el: `action: ${action["action"]}`
		});

		let selectedTemplate: Template;
		switch (action["action"]) {
			case "Add component":
			const groups = framework.getComponentGroups();
			const group = await inquirer.prompt({
					name: "componentGroup",
					type: "list",
					message: "Choose a group:",
					choices: this.addSeparators(groups),
					default: groups.find(x => x === "Data Grids") || groups[0]
				});

			GoogleAnalytic.post({
					t: "event",
					ec: "$ig wizard",
					ea: "Choose a group",
					el: `component group: ${group["componentGroup"]}`
				});

			const componentNames = framework.getComponentNamesByGroup(group["componentGroup"]);
			const component = await inquirer.prompt({
						type: "list",
						name: "component",
						message: "Choose a component:",
						choices: this.addSeparators(componentNames)
					});

			GoogleAnalytic.post({
						t: "event",
						ec: "$ig wizard",
						ea: "Choose a component",
						el: `component: ${component["component"]}`
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
							message: "Choose one:",
							choices: this.addSeparators(templateNames)
						});

					GoogleAnalytic.post({
							t: "event",
							ec: "$ig wizard",
							ea: "Choose one (template):",
							el: `template: ${template["template"]}`
						});

					selectedTemplate = templates.find((value, i, obj) => {
						return value.name === template["template"];
					});
				}
			if (selectedTemplate) {
					let success = false;
					while (!success) {
						templateName = await inquirer.prompt({
							type: "input",
							name: "name",
							message: "Name your component:",
							default: selectedTemplate.name
						});

						GoogleAnalytic.post({
							t: "event",
							ec: "$ig wizard",
							ea: "Name your component:",
							el: `component name: ${templateName["name"]}`
						});

						if (selectedTemplate.hasExtraConfiguration) {
							const extraPrompt: any[] = this.createQuestions(selectedTemplate.getExtraConfiguration());
							const extraConfigAnswers = await inquirer.prompt(extraPrompt);
							const extraConfig = this.parseAnswers(extraConfigAnswers);

							GoogleAnalytic.post({
								t: "event",
								ec: "$ig wizard",
								ea: "Extra configuration:",
								el: `extra configuration: ${JSON.stringify(extraConfig)}`
							});

							selectedTemplate.setExtraConfiguration(extraConfig);
						}
						success = await add.addTemplate(templateName["name"], selectedTemplate);
					}
				}
			await this.chooseActionLoop(framework, theme);
			break;
			case "Add view":
				//TODO:
				const customTemplates = framework.getCustomTemplateNames();
				const customTemplate = await inquirer.prompt({
					type: "list",
					name: "customTemplate",
					message: "Choose custom view:",
					choices: this.addSeparators(customTemplates)
				});

				GoogleAnalytic.post({
					t: "event",
					ec: "$ig wizard",
					ea: "Choose custom view:",
					el: `custom view: ${customTemplate["customTemplate"]}`
				});

				selectedTemplate = framework.getTemplateByName(customTemplate["customTemplate"]);
				if (selectedTemplate) {
					let success = false;
					while (!success) {
						templateName = await inquirer.prompt({
							type: "input",
							name: "name",
							message: "Name your view:",
							default: selectedTemplate.name
						});

						GoogleAnalytic.post({
							t: "event",
							ec: "$ig wizard",
							ea: "Name your view:",
							el: `custom view name: ${templateName["name"]}`
						});

						success = await add.addTemplate(templateName["name"], selectedTemplate);
					}
				}

				await this.chooseActionLoop(framework, theme);
				break;
			case "Complete & Run":
			default:
				await PackageManager.flushQueue(true);
				if (true) { // TODO: Make conditional?
					await start.start({});
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
