import { GoogleAnalytic } from "../GoogleAnalytic";
import { ProjectConfig } from "../ProjectConfig";
import { TemplateManager } from "../TemplateManager";
import { Util } from "../Util";
import { PromptSession } from "./../PromptSession";

let command: {
	[name: string]: any,
	templateManager: TemplateManager,
	execute: (argv: any) => void
};

// tslint:disable:object-literal-sort-keys
command = {
	command: "list",
	// use aliases here, instead of alias. With single alias yargs does not build correctly argv
	aliases: ["l"],
	desc: "list all templates",
	builder: {
		framework: {
			alias: "f",
			default: "jquery",
			describe: "Framework to list templates for",
			type: "string"
		},
		type: {
			alias: "t",
			describe: "Project type (depends on framework)",
			type: "string"
		}
	},
	templateManager: null,
	execute(argv) {
		GoogleAnalytic.post({
			t: "event",
			ec: "$ig list",
			ea: "user parameters",
			el: `framework: ${argv.framework}; project type: ${argv.type}`
		});

		let inProject = false;
		const viewsGroupName = "Views";
		if (ProjectConfig.hasLocalConfig()) {
			const config: Config = ProjectConfig.getConfig();
			argv.framework = config.project.framework;
			argv.type = config.project.projectType;
			inProject = true;
		}

		const templatesByGroup = [];
		const controlGroups: string[] = [];

		const framework: Framework = this.templateManager.getFrameworkById(argv.framework);
		if (!framework) {
			return Util.error("Wrong framework provided", "red");
		}

		let projectLib: ProjectLibrary;
		if (argv.type) {
			projectLib = command.templateManager.getProjectLibrary(argv.framework, argv.type) as ProjectLibrary;
			if (!projectLib) {
				return Util.error(`Project type '${argv.type}' not found in framework '${argv.framework}'`, "red");
			}
		} else {
			projectLib = command.templateManager.getProjectLibrary(argv.framework) as ProjectLibrary;
		}

		let maxIdLength = 0;
		projectLib.templates
			.map(t => {
				if (!t.listInCustomTemplates) {
					if (controlGroups.indexOf(t.controlGroup) === -1) {
						controlGroups.push(t.controlGroup);
						templatesByGroup[t.controlGroup] = [];
					}

					templatesByGroup[t.controlGroup].push({ id: t.id, description: t.description });
				} else {
					if (controlGroups.indexOf(viewsGroupName) === -1) {
						controlGroups.push(viewsGroupName);
						templatesByGroup[viewsGroupName] = [];
					}

					templatesByGroup[viewsGroupName].push({ id: t.id, description: t.description });
				}

				if (t.id.length > maxIdLength) {
					maxIdLength = t.id.length;
				}
			});

		Util.log(`Available templates for '${framework.name}' framework '${projectLib.projectType}' type`);
		const addSpacesCount = 5;
		const spaceChar = " ";
		for (const group of Object.keys(templatesByGroup)) {
			Util.log(`'${group}' group:`);
			for (const template of templatesByGroup[group]) {
				const spacesCount = maxIdLength - template.id.length + addSpacesCount;
				const output = "\t" + template.id + spaceChar.repeat(spacesCount) + template.description;
				Util.log(output);
			}
		}

		if (inProject) {
			Util.log("To list available templates for other framework and project type run outside of a project folder");
		}
	}
};

export default command;
