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
	command: "add <template> <name>",
	desc: "Add component by it ID and providing a name.",
	templateManager: null,
	builder: {
		template: {
			alias: "t",
			description: `Template ID, such as "grid", "combo", etc.`,
			type: "string"
		},
		name: {
			alias: "n",
			description: "File name.",
			type: "string"
		}
	},
	async execute(argv) {
		//command.template;
		const config =  ProjectConfig.getConfig();
		if (config == null) {
			Util.error("Add command is supported only on existing project created with igniteui-cli", "red");
			return;
		}
		if (config.project.isShowcase) {
			Util.error("Showcases and quickstart projects don't support the add command", "red");
			return;
		}
		const framework = command.templateManager.getFrameworkById(config.project.framework);
		if (!framework) {
			Util.error("Framework not supported", "red");
			return;
		}
		const frameworkLibrary = command.templateManager.getProjectLibrary(
			config.project.framework,
			config.project.projectType
		) as ProjectLibrary;

		if (!frameworkLibrary.hasTemplate(argv.template)) {
			Util.error("Template doesn't exist in the current library", "red");
			return;
		}

		Util.log(`Project Name: ${argv.name}, template ${argv.template}`);
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
