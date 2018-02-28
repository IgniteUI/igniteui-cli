import * as fs from "fs-extra";
import * as path from "path";
import { ProjectConfig } from "../ProjectConfig";
import { TemplateManager } from "../TemplateManager";
import { Util } from "../Util";
import { PromptSession } from "./../PromptSession";

let command: {
	[name: string]: any,
	templateManager: TemplateManager,
	execute: (argv: any) => Promise<void>
};

// tslint:disable:object-literal-sort-keys
command = {
	command: "list [framework] [type]",
	alias: "l",
	desc: "List all templates",
	builder: {
		framework: {
			alias: "f",
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
	async execute(argv) {
		if (!argv.framework && ProjectConfig.hasLocalConfig()) {
			const config: Config = ProjectConfig.getConfig();
			argv.framework = config.project.framework;
			argv.type = config.project.projectType;
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
		projectLib.templates.map(t => {
			if (t.controlGroup && t.controlGroup !== "Custom Templates") {
				if (controlGroups.indexOf(t.controlGroup) === -1) {
					controlGroups.push(t.controlGroup);
					templatesByGroup[t.controlGroup] = [];
				}

				if (templatesByGroup[t.controlGroup].indexOf(t.id) === -1) {
					templatesByGroup[t.controlGroup].push(t.id);
				}
			}
		});

		Util.log(`Available templates for '${framework.name}' framework '${projectLib.projectType}' type`);
		for (const group of Object.keys(templatesByGroup)) {
			Util.log(`Available templates in '${group}' group:`);
			for (const template of templatesByGroup[group]) {
				Util.log("\t" + template);
			}
		}
	}
};

export default command;
