import * as fs from "fs-extra";
import * as path from "path";
import { GoogleAnalytics } from "../GoogleAnalytics";
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
	desc: "creates a project",
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
			describe: "Do not automatically initialize repository for the project with Git",
			type: "boolean"
		}
	},
	template: null,
	async execute(argv) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "New"
		});

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

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig new",
			ea: `project name: ${argv.name}; framework: ${projTemplate.framework}; ` +
				`project type: ${projTemplate.projectType}; theme: ${theme}; skip-git: ${!!argv.skipGit}`,
			cd1: projTemplate.framework,
			cd2: projTemplate.projectType,
			cd3: argv.name,
			cd11: !!argv.skipGit,
			cd14: theme
		});

		await projTemplate.generateFiles(process.cwd(), argv.name, theme);
		Util.log(Util.greenCheck() + " Project Created");

		if (!argv["skip-git"] && !ProjectConfig.getConfig().skipGit) {
			Util.gitInit(process.cwd(), argv.name);
		}

		Util.log("");
		Util.log("Next Steps:");
		Util.log(`  cd ${argv.name}`);
		Util.log("  ig start starts the project");
		Util.log("  ig add [template] [name] adds template by its ID");
	}
};

export default command;
