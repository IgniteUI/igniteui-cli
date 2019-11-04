import { AddTemplateArgs, GoogleAnalytics, ProjectConfig, ProjectLibrary, Template, Util } from "@igniteui/cli-core";
import { TemplateManager } from "../TemplateManager";
import { PackageManager } from "./../packages/PackageManager";
import { PromptSession } from "./../PromptSession";

let command: {
	[name: string]: any,
	templateManager: TemplateManager,
	execute: (argv: any) => Promise<void>,
	addTemplate: (name: string, template: Template, options?: AddTemplateArgs) => Promise<boolean>
};
// tslint:disable:object-literal-sort-keys
command = {
	command: "add [template] [name]",
	desc: "adds template by its ID",
	templateManager: null,
	builder: {
		"template": {
			alias: "t",
			description: `Template ID, such as "grid", "combo", etc.`,
			type: "string",
			global: true
		},
		"name": {
			alias: "n",
			description: "File name.",
			type: "string",
			global: true
		},
		"module": {
			alias: "m",
			description: "The module to which the template is to be added",
			type: "string",
			global: true
		},
		"skip-route": {
			alias: "skr",
			describe: "Don't auto-generate am app navigation route for the new component",
			type: "boolean",
			global: true
		}
	},
	check: argv => {
		if ((!argv.name && argv.template) || (argv.name  && !argv.template)) {
			return false;
		}
		return true;
	},
	async execute(argv) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Add"
		});

		if (!ProjectConfig.hasLocalConfig()) {
			Util.error("Add command is supported only on existing project created with igniteui-cli", "red");
			return;
		}
		const config =  ProjectConfig.getConfig();
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

		if (!argv.template && !argv.name) {
			const prompts = new PromptSession(command.templateManager);
			await prompts.chooseActionLoop(frameworkLibrary);
			return;
		}

		if (!frameworkLibrary.hasTemplate(argv.template)) {
			Util.error("Template doesn't exist in the current library", "red");
			return;
		}

		if (framework.id === "angular" && frameworkLibrary.projectType === "igx-ts") {
			Util.warn("Psst! Did you know you can also use our schematics package to modify your Angular project directly, using the ng cli?", "yellow");
			Util.warn("Read more at: https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/getting_started.html.", "yellow");
		}

		const selectedTemplate = frameworkLibrary.getTemplateById(argv.template);
		if (selectedTemplate) {

			GoogleAnalytics.post({
				t: "event",
				ec: "$ig add",
				ea: `template id: ${argv.template}; file name: ${argv.name}`,
				cd1: selectedTemplate.framework,
				cd2: selectedTemplate.projectType,
				cd5: selectedTemplate.controlGroup,
				cd7: selectedTemplate.id,
				cd8: selectedTemplate.name,
				cd11: !!config.skipGit,
				cd14: config.project.theme
			});

			await command.addTemplate(argv.name, selectedTemplate, {
				modulePath: argv.module,
				skipRoute: argv.skipRoute
			});
			await PackageManager.flushQueue(true);
			PackageManager.ensureIgniteUISource(config.packagesInstalled, command.templateManager);
		}
	},
	async addTemplate(fileName: string, template: Template, options?: AddTemplateArgs): Promise<boolean> {
		fileName = fileName.trim();
		const name = Util.nameFromPath(fileName);

		// letter+alphanumeric check
		if (!Util.isAlphanumericExt(name)) {
			Util.error(`Name '${name}' is not valid. `
				+ "Name should start with a letter and can also contain numbers, dashes and spaces.",
				"red");
			return false;
		}
		const config = template.generateConfig(fileName, options || {});
		let fail = false;
		const templatePaths = template.templatePaths;
		for (const templatePath of templatePaths) {
			fail = fail || !await Util.processTemplates(templatePath, process.cwd(), config, template.delimiters);
		}
		if (!fail && templatePaths.length) {
			template.registerInProject(process.cwd(), fileName, options || {});
			command.templateManager.updateProjectConfiguration(template);
			template.packages.forEach(x => PackageManager.queuePackage(x));
			Util.log(`${Util.greenCheck()} View '${name}' added.`);
			return true;
		} else {
			/* Log error? */
			return false;
		}
	}
};
// hint transpiler it's an ES6 module, exports without import won't do
export default command;
