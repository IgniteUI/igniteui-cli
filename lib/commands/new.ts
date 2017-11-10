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
		theme: {
			alias: "t",
			default: "infragistics",
			describe: "Project theme",
			type: "string"
		}
	},
	template: null,
	async execute(argv) {
		if (command.template.getFrameworkById(argv.framework) === undefined) {
			throw new Error("Framework not supported");
		}
		const framework = command.template.getProjectLibrary(argv.framework) as ProjectLibrary;
		if (framework.themes.indexOf(argv.theme) === -1) {
			throw new Error("Theme not supported");
		}
		Util.log(`Project Name: ${argv.name}, framework ${argv.framework}, theme ${argv.theme}`);
		const projTemplate = framework.getProject();
		if (projTemplate == null) {
			throw new Error("Default project template not found");
		}
		// TODO: update output path based on where the CLI is called
		await projTemplate.generateFiles(process.cwd(), argv.name, argv.theme);
	}
};

export default command;
