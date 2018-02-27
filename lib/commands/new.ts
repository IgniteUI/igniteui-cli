import * as fs from "fs-extra";
import * as path from "path";
import { ProjectConfig } from "../ProjectConfig";
import { Util } from "../Util";
import { PromptSession } from "./../PromptSession";
import { TemplateManager } from "./../TemplateManager";

let command: {
	[name: string]: any,
	template: TemplateManager,
	execute: (argv: any) => Promise<void>
};
// tslint:disable:object-literal-sort-keys
command = {
	command: "new [name]",
	desc: "Creating a new project",
	builder: {
		"name": {
			alias: "n",
			describe: "Project name",
			type: "string"
		},
		"framework": {
			alias: "f",
			default: "jquery",
			describe: "Framework to setup project for",
			type: "string",
			choices: []
		},
		"type": {
			alias: "t",
			describe: "Project type (depends on framework)",
			type: "string"
		},
		"theme": {
			alias: "th",
			describe: "Project theme (depends on project type)",
			type: "string"
		},
		"skip-git": {
			alias: "sg",
			default: false,
			describe: "Do not automatically initialize repository for the project with Git",
			type: "boolean"
		}
	},
	template: null,
	async execute(argv) {
		if (ProjectConfig.hasLocalConfig()) {
			return Util.error("There is already an existing project.", "red");
		}
		if (!argv.name && !argv.type && !argv.theme) {
			const prompts = new PromptSession(command.template);
			await prompts.start();
			return;
		}

		// trim
		argv.name = argv.name.trim();

		// letter+alphanumeric check
		if (!Util.isAlphanumericExt(argv.name)) {
			Util.error(`Name '${argv.name}' is not valid. `
				+ "Name should start with a letter and can also contain numbers, dashes and spaces.",
				"red");
			return;
		}

		if (Util.directoryExists(argv.name)) {
			Util.error(`Folder "${argv.name}" already exists!`, "red");
			return;
		}
		if (command.template.getFrameworkById(argv.framework) === undefined) {
			return Util.error("Framework not supported", "red");
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
		Util.log(Util.greenCheck() + " Project Created");

		this.git(argv["skip-git"], argv.name);
	},
	git(skipGit, projectName) {
		if (!skipGit) {
			try {
				const cwdir = "./" + projectName;
				Util.exec("git init", { cwd: cwdir });
				Util.exec("git add .", { cwd: cwdir });
				Util.exec("git commit -m " + "\"Initial commit for project: " + projectName + "\"", { cwd: cwdir });
				Util.log(Util.greenCheck() + " Git Initialized and Project '" + projectName + "' committed");
			} catch (error) {
				Util.error("Git initialization failed. Install Git in order to automatically commit the project.", "yellow");
			}
		}
	}
};

export default command;
