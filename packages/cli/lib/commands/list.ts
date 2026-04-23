import { Config, Framework, GoogleAnalytics, ProjectConfig, ProjectLibrary, Util } from "@igniteui/cli-core";
import { CommandType, PositionalArgs } from "./types";
import { ArgumentsCamelCase } from "yargs";


const command: CommandType = {
	command: "list",
	// use aliases here, instead of alias. With single alias yargs does not build correctly argv
	aliases: ["l"],
	describe: "lists frameworks, project templates and component templates",
	builder: (yargs) => {
		return yargs
			.option("framework", {
				alias: "f",
				describe: "framework to list templates for",
				type: "string"
			})
			.option("type", {
				alias: "t",
				describe: "project type (depends on framework)",
				type: "string"
			})
			.example("$0 list", "show all frameworks and their project templates")
			.example("$0 list -f angular", "list component templates for Angular");
	},
	templateManager: null,
	handler(argv: ArgumentsCamelCase<PositionalArgs>) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "List"
		});

		let inProject = false;
		const viewsGroupName = "Views";
		if (ProjectConfig.hasLocalConfig()) {
			const config: Config = ProjectConfig.getConfig();
			argv.framework = config.project.framework;
			argv.type = config.project.projectType;
			inProject = true;
		}

		if (!inProject && !argv.framework) {
			if (argv.type) {
				return Util.error("'--type' requires '--framework'", "red");
			}
			return listAllFrameworks();
		}

		const templatesByGroup = [];
		const controlGroups: string[] = [];

		const framework: Framework = command.templateManager.getFrameworkById(argv.framework);
		if (!framework) {
			return Util.error("Wrong framework provided", "red");
		}

		let projectLib: ProjectLibrary;
		if (argv.type) {
			projectLib = command.templateManager.getProjectLibrary(argv.framework, argv.type) as ProjectLibrary;
			if (!projectLib) {
				return Util.error(`Project type '${argv.type}' not found in framework '${argv.framework}'`, "red");
			}
		} else {
			projectLib = command.templateManager.getProjectLibrary(argv.framework) as ProjectLibrary;
		}

		let maxIdLength = 0;
		projectLib.templates
			.map(t => {
				if (!t.listInCustomTemplates) {
					if (controlGroups.indexOf(t.controlGroup) === -1) {
						controlGroups.push(t.controlGroup);
						templatesByGroup[t.controlGroup] = [];
					}

					templatesByGroup[t.controlGroup].push({ id: t.id, description: t.description });
				} else {
					if (controlGroups.indexOf(viewsGroupName) === -1) {
						controlGroups.push(viewsGroupName);
						templatesByGroup[viewsGroupName] = [];
					}

					templatesByGroup[viewsGroupName].push({ id: t.id, description: t.description });
				}

				if (t.id.length > maxIdLength) {
					maxIdLength = t.id.length;
				}
			});

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig list",
			ea: `framework: ${argv.framework}; project type: ${argv.type}`,
			cd1: framework.id,
			cd2: projectLib.projectType
		});

		Util.log(`Available templates for '${framework.name}' framework '${projectLib.projectType}' type`);
		const addSpacesCount = 5;
		const spaceChar = " ";
		for (const group of Object.keys(templatesByGroup)) {
			Util.log(`'${group}' group:`);
			for (const template of templatesByGroup[group]) {
				const spacesCount = maxIdLength - template.id.length + addSpacesCount;
				const output = "\t" + template.id + spaceChar.repeat(spacesCount) + template.description;
				Util.log(output);
			}
		}

		if (inProject) {
			Util.log("To list available templates for other framework and project type run outside of a project folder");
		}
	}
};

function listAllFrameworks() {
	const frameworkIds: string[] = command.templateManager.getFrameworkIds();
	const frameworks: Framework[] = frameworkIds
		.map(id => command.templateManager.getFrameworkById(id))
		.filter(f => !!f);

	GoogleAnalytics.post({
		t: "event",
		ec: "$ig list",
		ea: "all frameworks"
	});

	let maxIdLength = 0;
	for (const framework of frameworks) {
		for (const lib of framework.projectLibraries) {
			for (const project of lib.projects.filter(p => !p.isHidden)) {
				if (project.id.length > maxIdLength) {
					maxIdLength = project.id.length;
				}
			}
		}
	}

	const addSpacesCount = 5;
	const spaceChar = " ";

	Util.log("Available frameworks and project templates:");
	for (const framework of frameworks) {
		Util.log("");
		Util.log(`${framework.name} (${framework.id})`);
		for (const lib of framework.projectLibraries) {
			Util.log(`\t${lib.name} (${lib.projectType})`);
			const visibleProjects = lib.projects.filter(p => !p.isHidden);
			if (visibleProjects.length === 0) {
				Util.log("\t\t(no project templates)");
				continue;
			}
			for (const project of visibleProjects) {
				const spacesCount = maxIdLength - project.id.length + addSpacesCount;
				Util.log("\t\t" + project.id + spaceChar.repeat(spacesCount) + project.description);
			}
		}
	}

	Util.log("");
	Util.log("Run 'ig new <name> --framework <framework> --type <projectType>' to scaffold a project.");
	Util.log("Run 'ig list -f <framework> [-t <projectType>]' to list component templates.");
}

export default command;
