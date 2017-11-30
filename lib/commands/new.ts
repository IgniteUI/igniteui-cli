import * as fs from "fs-extra";
import * as path from "path";
import { Util } from "../Util";
import { TemplateManager } from "./../TemplateManager";

let command: {
	[name: string]: any,
	template: TemplateManager,
	execute: (argv: any) => Promise<void>
};
// tslint:disable:object-literal-sort-keys
command = {
	command: "new <name>",
	desc: "Creating a new project",
	builder: {
		name: {
			alias: "n",
			default: "app",
			describe: "Project name",
			type: "string"
		},
		framework: {
			alias: "f",
			default: "jquery",
			describe: "Framework to setup project for",
			type: "string",
			choices: []
		},
		type: {
			alias: "t",
			describe: "Project type (depends on framework)",
			type: "string"
		},
		theme: {
			alias: "th",
			describe: "Project theme (depends on project type)",
			type: "string"
		}
	},
	template: null,
	async execute(argv) {
		if (command.template.getFrameworkById(argv.framework) === undefined) {
			return Util.error("Framework not supported");
		}
		let projectLib: ProjectLibrary;
		if (argv.type) {
			projectLib = command.template.getProjectLibrary(argv.framework, argv.type) as ProjectLibrary;
			if (!projectLib) {
				return Util.error(`Project type "${argv.type}" not found in framework '${argv.framework}'`);
			}
		} else {
			projectLib = command.template.getProjectLibrary(argv.framework) as ProjectLibrary;
		}

		if (argv.theme && projectLib.themes.indexOf(argv.theme) === -1) {
			return Util.error("Theme not supported");
		}
		const theme = argv.theme || projectLib.themes[0];

		Util.log(`Project Name: ${argv.name}, framework ${argv.framework}, type ${projectLib.projectType}, theme ${theme}`);
		const projTemplate = projectLib.getProject();
		if (projTemplate == null) {
			return Util.error("Default project template not found");
		}
		// TODO: update output path based on where the CLI is called
		await projTemplate.generateFiles(process.cwd(), argv.name, theme);
		Util.log("Project Created");
	}
};

export default command;
