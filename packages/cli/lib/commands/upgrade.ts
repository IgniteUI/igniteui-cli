import { App, BaseTemplateManager, detectFrameworkFromPackageJson, GoogleAnalytics, ProjectConfig, TEMPLATE_MANAGER,
	type ProjectTemplate, Util } from "@igniteui/cli-core";
import { PositionalArgs, UpgradeCommandType } from "./types";
import { ArgumentsCamelCase } from "yargs";

const FRAMEWORK_PROJECT_TYPE_MAP: Record<string, string> = {
	angular: "igx-ts",
	react: "igr-ts",
	webcomponents: "igc-ts"
};

const command: UpgradeCommandType = {
	command: "upgrade-packages",
	aliases: ["upgrade"],
	describe: "Upgrades Ignite UI packages",
	builder: (yargs) => {
		return yargs
			.option("skip-install", {
				alias: "si",
				default: false,
				describe: "Run upgrade without installing packages",
				type: "boolean"
			});
	},
	async handler(argv: ArgumentsCamelCase<PositionalArgs>) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Upgrade packages"
		});

		return command.upgrade(argv);
	},
	async upgrade(argv: ArgumentsCamelCase<PositionalArgs>) {
		const config = ProjectConfig.getConfig();
		let framework = config.project?.framework;
		let projectType = config.project?.projectType;

		if (!framework) {
			const detected = detectFrameworkFromPackageJson();
			if (!detected) {
				Util.log("Unable to determine the project framework. " +
					"Please ensure you are running this command in a project directory with a package.json file, " +
					"or create an ignite-ui-cli.json configuration file.", "yellow");
				return;
			}
			framework = detected;
			projectType = projectType || FRAMEWORK_PROJECT_TYPE_MAP[framework];
		}

		if (!projectType) {
			projectType = FRAMEWORK_PROJECT_TYPE_MAP[framework.toLowerCase()] || "";
		}

		switch (framework.toLowerCase()) {
			case "jquery":
				Util.log("Upgrading packages for jQuery projects is currently not supported!");
				return;
			case "angular":
			case "react":
			case "webcomponents":
				if (projectType === "igx-ts" || projectType === "igr-ts" || projectType === "igc-ts") {
					const templateManager = App.container.get<BaseTemplateManager>(TEMPLATE_MANAGER);
					const projectLibrary = templateManager.getProjectLibrary(framework, projectType);
					let project: ProjectTemplate;
					if (!config.project?.projectTemplate || !projectLibrary.hasProject(config.project.projectTemplate)) {
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
