import { utimes } from "fs-extra";
import * as path from "path";
import { TemplateManager } from "../TemplateManager";
import { Util } from "../Util";
import { default as config } from "./config";

const command = {
	aliases: ["g"],
	command: "generate",
	desc: "Generates new project",
	templateManager: null,
	// tslint:disable-next-line:object-literal-sort-keys
	builder: yargs => {
		yargs
			.command({
				aliases: ["t"],
				command: "template [name]",
				desc: "Generates custom template",
				// tslint:disable-next-line:object-literal-sort-keys
				builder: {
					"framework": {
						alias: "f",
						default: "jquery",
						describe: "Framework name.",
						type: "string"
					},
					"name": {
						alias: "n",
						default: "custom-template",
						describe: "Template name.",
						type: "string"
					},
					"skip-config": {
						alias: "s",
						default: false,
						describe: "Runs generate command without updating the cli config.",
						type: "boolean"
					},
					"type": {
						alias: "t",
						default: "js",
						describe: "Framework type.",
						type: "string"
					}
				},
				handler: command.template
			})
			// at least one command is required
			.demandCommand(1, "Please select command");
	},
	async template(argv) {
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

		const templatesFolder = path.join(__dirname, "..", "..", "templates", argv.framework, argv.type, "generate");
		argv.className = Util.className(argv.name);

		Util.log(`Project Name: ${argv.name}, framework: ${argv.framework}, type: ${argv.type}`);
		const promise = Util.processTemplates(
			templatesFolder,
			outDir,
			{
				"$(templateFramework)": argv.framework,
				"$(templateName)": argv.name,
				"$(templateType)": argv.type
			},
			null);
		promise.then(res => {
			if (res) {
				if (argv.skipConfig === false) {
					config.addHandler({ property: "customTemplates", value: "path:" + outDir, global: true });
				}
			} else {
				return Util.log("Project creation failed!");
			}
		}).catch(err => {
			return Util.log("Project creation failed!");
		});
	}
};

export default command;
