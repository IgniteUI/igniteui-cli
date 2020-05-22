import { GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";
import { TemplateManager } from "../TemplateManager";

let command: {
	[name: string]: any,
	templateManager: TemplateManager,
	execute: (argv: any) => Promise<void>,
	upgrade: (argv: any) => Promise<void>
};

// tslint:disable:object-literal-sort-keys
command = {
	command: "upgrade",
	desc: "Upgrades Ignite UI Packages",
	templateManager: null,
	builder: {
		"skip-install": {
			alias: "s",
			default: false,
			describe: "Runs upgrade command without calling `npm install`",
			type: "boolean"
		}
	},
	async execute(argv) {

		GoogleAnalytics.post({
			t: "screenview",
			cd: "Upgrade"
		});

		command.upgrade(argv);
	},
	async upgrade(argv) {
		const config = ProjectConfig.getConfig();
		const framework = config.project.framework;
		const projectType = config.project.projectType;]

		switch (framework.toLowerCase()) {
			case "jquery":
				Util.log("Upgrading packages for jQuery projects is currently not supported!");
				return;
				break;
			case "react":
				Util.log("Upgrading packages for React projects is currently not supported!");
				return;
				break;
			case "angular":
				const projectLibrary = this.templateManager.getProjectLibrary(framework, projectType);
				let project;
				if (!config.project.projectTemplate) {
					// in case project tempale is missing from the config we provide backward.
					project = projectLibrary.getProject(projectLibrary.projectIds[0]);
				} else {
					project = projectLibrary.getProject(config.project.projectTemplate);
				}
				const success = await project.upgradeIgniteUIPackages(process.cwd(), `./node_modules/${this.fullPackage}/en`);
				if (!argv["skip-install"]) {
					Util.execSync("npm install");
				}
				break;
			default:
				break;
		}
	}
}

export default command;