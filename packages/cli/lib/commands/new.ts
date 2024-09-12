import { GoogleAnalytics, PackageManager, ProjectConfig, ProjectLibrary, Util } from "@igniteui/cli-core";
import * as path from "path";
import { PromptSession } from "./../PromptSession";
import { NewCommandType, PositionalArgs } from "./types";
import { TemplateManager } from "../TemplateManager";
import { ArgumentsCamelCase, Choices } from "yargs";

// explicit typing because `type: "string"` will be inferred as `type: string` which yargs will not like
const _framework: {
    alias: string;
    default: string;
    describe: string;
    type: "string";
    choices: Choices;
} = {
	alias: "f",
	default: "jquery",
	describe: "Framework to setup project for",
	type: "string",
	choices: []
};

const command: NewCommandType = {
	command: "new [name]",
	describe: "creates a project",
	builder: (yargs) => {
		return yargs
			.option("name", {
				alias: "n",
				describe: "Project name",
				type: "string"
			})
			.option("framework", _framework)
			.option("type", {
				alias: "t",
				describe: "Project type (depends on framework)",
				type: "string"
			})
			.option("theme", {
				alias: "th",
				describe: "Project theme (depends on project type)",
				type: "string"
			})
			.option("skip-git", {
				alias: "sg",
				describe: "Do not automatically initialize repository for the project with Git",
				type: "boolean"
			})
			.option("skip-install", {
				alias: "si",
				describe: "Do not automatically install packages",
				type: "boolean"
			})
			.option("template", {
				describe: "Project template",
				type: "string"
			})
			.usage(""); // do not show any usage instructions before the commands list
	},
	async handler(argv: ArgumentsCamelCase<PositionalArgs>) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "New"
		});

		if (ProjectConfig.hasLocalConfig()) {
			return Util.error("There is already an existing project.", "red");
		}
		if (!argv.name) {
			const prompts = new PromptSession(command.templateManager || new TemplateManager());
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
		if (command.templateManager?.getFrameworkById(argv.framework) === undefined) {
			return Util.error("Framework not supported", "red");
		}
		let projectLib: ProjectLibrary;
		if (argv.type) {
			projectLib = command.templateManager?.getProjectLibrary(argv.framework, argv.type) as ProjectLibrary;
			if (!projectLib) {
				return Util.error(`Project type "${argv.type}" not found in framework '${argv.framework}'`);
			}
		} else {
			projectLib = command.templateManager?.getProjectLibrary(argv.framework) as ProjectLibrary;
		}

		if (command.templateManager?.getFrameworkById(argv.framework).id === "angular" && projectLib.projectType === "igx-ts") {
			Util.warn("Psst! Did you know you can use our schematics package with Angular CLI to create and modify your projects?", "yellow");
			Util.warn("Read more at: https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/cli-overview", "yellow");
		}

		let themeIndex = 0;
		if (argv.theme) {
			themeIndex = projectLib.themes.findIndex(item => argv.theme.toLowerCase() === item.toLowerCase());
			if (themeIndex === -1) {
				return Util.error("Theme not supported");
			}
		}

		const theme = projectLib.themes[themeIndex];

		const indexOfEmptyOrFirst = projectLib.projectIds.indexOf("empty") !== -1
			? projectLib.projectIds.indexOf("empty")
			: 0;

		const projectTemplate = argv.template || projectLib.projectIds[indexOfEmptyOrFirst];
		Util.log(`Project Name: ${argv.name}, framework ${argv.framework}, type ${projectLib.projectType}, theme ${theme}`);
		const projTemplate = projectLib.getProject(projectTemplate);
		if (projTemplate == null) {
			return Util.error("Project template not found");
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

		const config = projTemplate.generateConfig(argv.name, theme);
		for (const templatePath of projTemplate.templatePaths) {
			await Util.processTemplates(templatePath, path.join(process.cwd(), argv.name),
				config, projTemplate.delimiters, false);
		}

		Util.log(Util.greenCheck() + " Project Created");

		if (!argv["skip-git"] && !ProjectConfig.getConfig().skipGit) {
			Util.gitInit(process.cwd(), argv.name);
		}

		if (!argv.skipInstall) {
			process.chdir(argv.name);
			await PackageManager.installPackages();
			process.chdir("..");
		}

		Util.log("");
		Util.log("Next Steps:");
		Util.log(`  cd ${argv.name}`);
		Util.log("  ig add      start guided mode for adding views to the app");
		Util.log("  ig start    starts a web server and opens the app in the default browser");
	},
	addChoices(choices: string[]): void {
		_framework.choices = choices;
	}
};

export default command;
