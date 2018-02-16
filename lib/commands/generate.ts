import * as path from "path";
import { Util } from "../Util";
import { ProjectConfig } from "./../ProjectConfig";
import { TemplateManager } from "../TemplateManager";
import { utimes } from "fs-extra";

const command = {
	// tslint:disable:object-literal-sort-keys
	command: "generate",
	aliases: ["g"],
	templateManager: new TemplateManager(),
	desc: "Generates new project",
	builder: yargs => {
		yargs
			.command({
				command: "*",
				desc: "Generates empty template",
				handler: command.empty
			})
			.command({
				command: "template [name] [framework] [type] [skipconfig]",
				aliases: ["t"],
				desc: "Generates custom template",
				builder: {
					name: {
						alias: "n",
						description: "File name.",
						type: "string",
						global: true
					},
					framework: {
						alias: "f",
						description: "Framework name.",
						type: "string",
						global: true
					},
					type: {
						alias: "t",
						description: "Framework type.",
						type: "string",
						global: true
					},
					skipconfig: {
						alias: "s",
						description: "Wheather or not to be added to config.",
						type: "boolean",
						global: true
					},
				},
				handler: command.template
			})
		// at least one command is required
		// .demand(1, "Please use template command");
	},
	// tslint:enable:object-literal-sort-keys
	async template(argv) {

		if (ProjectConfig.hasLocalConfig())
			return Util.error("There is already an existing project.", "red");

		if (!argv.name)
			argv.name = "custom-template";

		// trim
		argv.name = argv.name.trim();

		// letter+alphanumeric check
		if (!Util.isAlphanumericExt(argv.name)) {
			Util.error("Name '${argv.name}' is not valid. "
				+ "Name should start with a letter and can also contain numbers, dashes and spaces.",
				"red");
			return;
		}

		const outDir = path.join(process.cwd(), argv.name);
		if (Util.directoryExists(outDir)) {
			Util.error(`Folder "${argv.name}" already exists!`, "red");
			return;
		}

		if (!argv.framework)
			argv.framework = "jquery";

		if (command.templateManager.getFrameworkById(argv.framework) === undefined) {
			return Util.error("Framework not supported", "red");
		}

		let projectLib: ProjectLibrary;
		if (argv.type) {
			projectLib = command.templateManager.getProjectLibrary(argv.framework, argv.type) as ProjectLibrary;
			if (!projectLib) {
				return Util.error(`Project type "${argv.type}" not found in framework '${argv.framework}'`);
			}
		} else {
			projectLib = command.templateManager.getProjectLibrary(argv.framework) as ProjectLibrary;
		}

		argv.type = projectLib.projectType;
		
		let templatesFolder = path.join(__dirname, "..", "..", "templates", argv.framework, argv.type, "generate");

		Util.log(`Project Name: ${argv.name}, framework ${argv.framework}, type ${argv.type}`);
		Util.processTemplates(templatesFolder, outDir, { "$(name)": argv.name, "$(framework)": argv.framework, "$(type)": argv.type, __name__: argv.name }, null);
		return ;
	},
	empty(argv) {
		Util.error("TODO make this later if necessary :)", "red");
		return ;
	}
};

export default command;
