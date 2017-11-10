import { ProjectConfig } from "../ProjectConfig";
import { TemplateManager } from "../TemplateManager";
import { Util } from "../Util";
import { PackageManager } from "./../packages/PackageManager";

let command: {
	[name: string]: any,
	templateManager: TemplateManager,
	execute: (argv: any) => Promise<void>,
	addTemplate: (name: string, template: Template) => Promise<void>
};
// tslint:disable:object-literal-sort-keys
command = {
	command: "add",
	desc: "Add component",
	templateManager: null,
	builder: {
		template: {
			alias: "p",
			default: "grid",
			description: "Choose template for your sample.",
			type: "string"
		},
		name: {
			alias: "n",
			default: "app",
			description: "File name.",
			type: "string"
		}
	},
	async execute(argv) {
		//command.template;
		Util.log(`Project Name: ${argv.name}, template ${argv.template}`);
		const config =  ProjectConfig.getConfig();
		if (config == null) {
			throw new Error("Add command is supported only on existing project created with igntie-ui-cli");
		}
		if (config.project.isShowcase) {
			throw new Error("Showcases and quickstart projects don't support add command");
		}
		const framework = command.templateManager.getFrameworkById(config.project.framework);
		if (!framework) {
			throw new Error("Framework not supported");
		}
		const frameworkLibrary = command.templateManager.getProjectLibrary(
			config.project.framework,
			config.project.projectType
		) as ProjectLibrary;

		if (!frameworkLibrary.hasTemplate(argv.template)) {
			throw new Error("Template doesn't exist in the current library");
		}
		const selectedTemplate = frameworkLibrary.getTemplateById(argv.template);
		if (selectedTemplate) {
			await command.addTemplate(argv.name, selectedTemplate);
			PackageManager.ensureIgniteUISource(config.packagesInstalled);
		}
	},
	async addTemplate(name: string, template: Template) {
		if (await template.generateFiles(process.cwd(), name)) {
			//successful
			template.registerInProject(process.cwd(), name);
			command.templateManager.updateProjectConfiguration(template);
			Util.log(`View '${name}' added.`);
		} else {
			/* Log error? */
		}
	}
};
// hint transpiler it's an ES6 module, exports without import won't do
export default command;
