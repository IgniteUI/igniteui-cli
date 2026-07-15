import {
	AddTemplateArgs, App, BaseTemplateManager, GoogleAnalytics, PackageManager,
	ProjectConfig, ProjectLibrary, TEMPLATE_MANAGER, Template, Util
} from "@igniteui/cli-core";
import { PromptSession } from "./../PromptSession";
import { AddCommandType, PositionalArgs } from "./types";
import { ArgumentsCamelCase, Argv } from "yargs";

let yargsContext: Argv | undefined;

const command: AddCommandType = {
	command: "add [template] [name]",
	describe: "Adds a component or view template to the current project",
	builder: (yargs) => {
		yargsContext = yargs;
		return yargs
			.positional("template", {
				describe: `Template ID (e.g. "grid", "combo"); same as --template/-t`,
				type: "string"
			})
			.positional("name", {
				describe: "File name (same as --name/-n)",
				type: "string"
			})
			.option("template", {
				alias: "t",
				describe: `Template ID (e.g. "grid", "combo")`,
				type: "string",
				global: true
			})
			.option("name", {
				alias: "n",
				describe: "File name",
				type: "string",
				global: true
			})
			.option("module", {
				alias: "m",
				describe: "Module to which the template is to be added",
				type: "string",
				global: true
			})
			.option("skip-route", {
				alias: "skr",
				describe: "Do not auto-generate an app navigation route for the new component",
				type: "boolean",
				global: true
			})
			.example("$0 add", "Launch guided component picker")
			.example("$0 add grid main-grid", "Add a Grid component named main-grid");
	},
	check: (argv: ArgumentsCamelCase<PositionalArgs>) => {
		if ((!argv.name && argv.template) || (argv.name && !argv.template)) {
			return false;
		}
		return true;
	},
	async handler(argv: ArgumentsCamelCase<PositionalArgs>) {
		if (!command.check(argv)) {
			yargsContext?.showHelp();
			return;
		}

		GoogleAnalytics.post({
			t: "screenview",
			cd: "Add"
		});

		if (!ProjectConfig.hasLocalConfig()) {
			Util.error("Add command is supported only on existing project created with igniteui-cli", "red");
			return;
		}
		const config = ProjectConfig.getConfig();
		if (config.project.isShowcase) {
			Util.error("Showcases projects don't support the add command", "red");
			return;
		}
		const templateManager = App.container.get<BaseTemplateManager>(TEMPLATE_MANAGER);
		const framework = templateManager.getFrameworkById(config.project.framework);
		if (!framework) {
			Util.error("Framework not supported", "red");
			return;
		}
		const frameworkLibrary = templateManager.getProjectLibrary(
			config.project.framework,
			config.project.projectType
		) as ProjectLibrary;

		if (!argv.template && !argv.name) {
			const prompts = new PromptSession();
			await prompts.chooseActionLoop(frameworkLibrary);
			return;
		}

		if (!frameworkLibrary.hasTemplate(argv.template)) {
			Util.error("Template doesn't exist in the current library", "red");
			return;
		}

		if (framework.id === "angular" && frameworkLibrary.projectType === "igx-ts") {
			Util.warn("Psst! Did you know you can use our schematics package with Angular CLI to create and modify your projects?", "yellow");
			Util.warn("Read more at: https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/cli-overview", "yellow");
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
			await PackageManager.ensureIgniteUISource(config.packagesInstalled, templateManager);
		}
	},
	async addTemplate(fileName: string, template: Template, options?: AddTemplateArgs): Promise<boolean> {
		if (!options) {
			if (template.framework === "react") {
				options = {
					parentName: "app",
					className: Util.className(fileName),
					modulePath: `src/app/${Util.lowerDashed(fileName)}`
				};

				options["parentRoutingModulePath"] = template.projectType === "igr-ts"
					? "src/app/app-routes.tsx"
					: "./src/routes.json";
			} else {
				options = {
					parentName: "app",
					parentRoutingModulePath: "src/app/app-routing.ts",
					selector: "app-" + template.id
				};
			}
		}

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
			App.container.get<BaseTemplateManager>(TEMPLATE_MANAGER).updateProjectConfiguration(template);
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
