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
	command: "upgrade-packages",
	desc: "upgrades Ignite UI Packages",
	templateManager: null,
	builder: {
		"skip-install": {
			alias: "si",
			default: false,
			describe: "Runs upgrade command without performing install",
			type: "boolean"
		}
	},
	async execute(argv) {

		GoogleAnalytics.post({
			t: "screenview",
			cd: "Upgrade packages"
		});

		return command.upgrade(argv);
	},
	async upgrade(argv) {
		const config = ProjectConfig.getConfig();
		const framework = config.project.framework;
		const projectType = config.project.projectType;

		switch (framework.toLowerCase()) {
			case "jquery":
				Util.log("Upgrading packages for jQuery projects is currently not supported!");
				return;
			case "angular":
			case "react":
			case "webcomponents":
				if (projectType === "igx-ts" || projectType === "igr-ts" || projectType === "igc-ts") {
					const projectLibrary = command.templateManager.getProjectLibrary(framework, projectType);
					let project;
					if (!config.project.projectTemplate || !projectLibrary.hasProject(config.project.projectTemplate)) {
						// in case project template is missing from the config we provide backward.
						project = projectLibrary.getProject(projectLibrary.projectIds[0]);
					} else {
						project = projectLibrary.getProject(config.project.projectTemplate);
					}
					const success = await project.upgradeIgniteUIPackages(process.cwd(), "");
					if (success && !argv.skipInstall) {
						Util.log("Installing npm packages.");
						try {
							Util.execSync("npm install --quiet");
							Util.log("npm packages installed.");
						} catch (error) {
							Util.error(`Error installing npm packages.`);
							Util.log(error.message);
						}
					}
				} else if (framework.toLowerCase() === "angular") {
					Util.log("Upgrading packages for Angular Wrappers projects is currently not supported!");
					return;
				}
				break;
			default:
				break;
		}

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig upgrade-packages",
			cd1: framework,
			cd2: projectType
		});
	}
};

export default command;
