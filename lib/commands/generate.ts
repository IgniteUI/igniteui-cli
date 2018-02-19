import * as path from "path";
import { Util } from "../Util";
import { TemplateManager } from "../TemplateManager";
import { utimes } from "fs-extra";
import { default as config } from "./config";

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
				builder: {
					name: {
						describe: "Template name.",
						alias: "n",
						default: "custom-template",
						type: "string"
					},
					framework: {
						describe: "Framework name.",
						alias: "f",
						default: "jquery",
						type: "string"
					},
					type: {
						describe: "Framework type.",
						alias: "t",
						default: "js",
						type: "string"
					},
					"skip-config": {
						describe: "Skips adding to the config.",
						alias: "s",
						default: false,
						type: "boolean"
					}
				},
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
		argv.className = Util.className(argv.name);

		Util.log(`Project Name: ${argv.name}, framework ${argv.framework}, type ${argv.type}`);
		const promise = Util.processTemplates(
			templatesFolder,
			outDir,
			{
				"$(name)": argv.name,
				"$(framework)": argv.framework,
				"$(type)": argv.type, __name__: argv.name,
				"$(ClassName)": argv.className
			},
			null);
		promise.then((res) => {
			if (res) {
				if (argv.skipConfig == false) {
					config.addHandler({ property: "customTemplates", value: "parth:" + outDir, global: true });
				}
			}
			else {
				return Util.log("Project creation failed!");
			}
		}).catch((err) => {
			return Util.log("Project creation failed!");
		});
	}
};

export default command;
