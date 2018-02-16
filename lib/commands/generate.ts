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
				command: "template [name] [framework] [type] [skip-config]",
				aliases: ["t"],
				desc: "Generates custom template",
				builder: (yargs) => yargs
					.options({
						name: {
							describe: "Template name.",
							aliases: ["n"],
							default: "custom-template",
							type: "string"
						},
						framework: {
							describe: "Framework name.",
							aliases: ["f"],
							default: "jquery",
							type: "string"
						},
						type: {
							describe: "Framework type.",
							aliases: ["t"],
							default: "js",
							type: "string"
						},
						"skip-config": {
							describe: "Skips adding to the config.",
							type: "boolean"
						}
					}),
				handler: command.template
			})
			// at least one command is required
			.demandCommand(1, "Please select command");
	},
	// tslint:enable:object-literal-sort-keys
	async template(argv) {
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

		if (command.templateManager.getFrameworkById(argv.framework) === undefined) {
			return Util.error("Framework not supported", "red");
		}

		let projectLib: ProjectLibrary;
		if (argv.type) {
			projectLib = command.templateManager.getProjectLibrary(argv.framework, argv.type) as ProjectLibrary;
			if (!projectLib) {
				return Util.error(`Project type "${argv.type}" not found in framework '${argv.framework}'`);
			}
		}

		let templatesFolder = path.join(__dirname, "..", "..", "templates", argv.framework, argv.type, "generate");

		Util.log(`Project Name: ${argv.name}, framework ${argv.framework}, type ${argv.type}`);
		const promise = Util.processTemplates(templatesFolder, outDir, { "$(name)": argv.name, "$(framework)": argv.framework, "$(type)": argv.type, __name__: argv.name }, null);
		promise.then((res) => {
			if(res){
				if (ProjectConfig.hasLocalConfig())
					return Util.error("There is already an existing project.", "red");
			}
			else{
				return Util.log("Project creation failed!");
			}
		}).catch((err) => {
			return Util.log("Project creation failed!");
		});
	}
};

export default command;
