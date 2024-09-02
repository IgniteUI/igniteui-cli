import { GoogleAnalytics, ProjectLibrary, Util } from "@igniteui/cli-core";
import * as path from "path";
import { default as config } from "./config";
import { CommandType, PositionalArgs } from "./types";
import { ArgumentsCamelCase } from "yargs";

async function handler(argv: ArgumentsCamelCase<PositionalArgs>) {
	GoogleAnalytics.post({
		t: "screenview",
		cd: "Generate"
	});

	// trim
	argv.name = argv.name.trim();

	// letter+alphanumeric check
	if (!Util.isAlphanumericExt(argv.name)) {
		Util.error(`Name '${argv.name}' is not valid. `
			+ "Name should start with a letter and can also contain numbers, dashes and spaces.",
			"red");
		return;
	}

	const outDir = path.join(process.cwd(), argv.name);
	if (Util.directoryExists(outDir)) {
		Util.error(`Folder '${argv.name}' already exists!`, "red");
		return;
	}

	if (command.templateManager.getFrameworkById(argv.framework) === undefined) {
		return Util.error("Framework not supported", "red");
	}

	let projectLib: ProjectLibrary;
	if (argv.type) {
		projectLib = command.templateManager.getProjectLibrary(argv.framework, argv.type) as ProjectLibrary;
		if (!projectLib) {
			return Util.error(`Project type '${argv.type}' not found in framework '${argv.framework}'`);
		}
	} else {
		projectLib = command.templateManager.getProjectLibrary(argv.framework) as ProjectLibrary;
		argv.type = projectLib.projectType;
	}

	const res = await Util.processTemplates(
		projectLib.generateTemplateFolderPath,
		outDir,
		{
			templateFramework: argv.framework,
			templateName: argv.name,
			templateType: argv.type
		},
		{});
	if (!res) {
		return Util.error("Template generation failed!", "red");
	}
	if (!argv.skipConfig) {
		config.addHandler({ property: "customTemplates", value: "path:" + outDir, global: true, skipAnalytics: true });
	}

	GoogleAnalytics.post({
		t: "event",
		ec: "$ig generate",
		el: "subcommand: template",
		ea: `template name: ${argv.name}; framework: ${argv.framework};` +
			`project type: ${argv.type}; skip-config: ${argv.skipConfig}`,
		cd1: argv.framework,
		cd2: argv.type,
		cd7: argv.name,
		cd9: "template",
		cd10: !!argv.skipConfig
	});

	Util.log("Template generated successfully");
}

const command: CommandType = {
	aliases: ["g"],
	command: "generate",
	describe: "generates custom template",
	templateManager: null,
	// tslint:disable:object-literal-sort-keys
	builder: yargs => {
		yargs
			.command({
				aliases: ["t"],
				command: "template [name]",
				describe: "generates custom template",
				builder: {
					"framework": {
						alias: "f",
						default: "jquery",
						describe: "Framework to generate template for",
						type: "string"
					},
					"name": {
						alias: "n",
						default: "custom-template",
						describe: "Template name",
						type: "string"
					},
					"skip-config": {
						alias: "s",
						default: false,
						describe: "Runs generate command without updating the cli config",
						type: "boolean"
					},
					"type": {
						alias: "t",
						describe: "Project type (depends on framework)",
						type: "string"
					}
				},
				handler
			})
			// at least one command is required
			.demandCommand(1, "Please select command");
		return yargs;
	},
	handler // for easier unit testing
};

export default command;
