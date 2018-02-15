import * as path from "path";
import { Util } from "../Util";
import { ProjectConfig } from "./../ProjectConfig";
import { TemplateManager } from "../TemplateManager";
import { utimes } from "fs-extra";

const command = {
	// tslint:disable:object-literal-sort-keys
	command: "generate",
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
				command: "template",
				default: true,
				desc: "Generates empty template",
				builder: {
					property: {
						describe: "Template to generate",
						type: "string"
					}
				},
				handler: command.template
			})
		// at least one command is required
		// .demand(1, "Please use template command");
	},
	// tslint:enable:object-literal-sort-keys
	async template(argv) {

		let templatesFolder = path.join(__dirname, "..", "..", "templates", "jquery", "js", "generate");
		Util.log("__dirname is now:");
		Util.log(templatesFolder);

		if (ProjectConfig.hasLocalConfig())
			return Util.error("There is already an existing project.", "red");

		if (!argv.name)
			argv.name = "custom-template";

		if (!argv.framework)
			argv.framework = "jquery";

		// trim
		argv.name = argv.name.trim();

		if (Util.directoryExists(argv.name)) {
			Util.error(`Folder "${argv.name}" already exists!`, "red");
			return;
		}

		Util.log(`Project Name: ${argv.name}, framework ${argv.framework}`);
		Util.processTemplates(templatesFolder, path.join(__dirname, argv.name), { name: argv.name }, null);
		return;
	},
	empty(argv) {
		Util.error("TODO make this later if necessary :)", "red");
		return;
	}
};

export default command;
