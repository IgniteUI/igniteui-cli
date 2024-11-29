import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { App, GoogleAnalytics, ProjectConfig, ProjectTemplate } from "@igniteui/cli-core";
import { defer } from "rxjs";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";
import { setVirtual } from "../utils/NgFileSystem";

interface UpgradeOptions {
	skipInstall?: boolean;
}

export default function(options: UpgradeOptions): Rule {
	return (tree: Tree, context: SchematicContext) => {
		App.initialize("angular-cli");
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Upgrade packages"
		});
		const templateManager = new SchematicsTemplateManager();
		const config = ProjectConfig.getConfig();
		const library = templateManager.getProjectLibrary('angular', config.project?.projectType || 'igx-ts');
		let project: ProjectTemplate;
		if (!config.project?.projectTemplate || !library.hasProject(config.project?.projectTemplate)) {
			// in case project template is missing from the config we provide backward.
			project = library.getProject(library.projectIds[0]);
		} else {
			project = library.getProject(config.project.projectTemplate);
		}
		setVirtual(tree);
		return defer(async () => {
			const success = await project.upgradeIgniteUIPackages("", "");
			if (success && !options.skipInstall) {
				context.addTask(new NodePackageInstallTask());
			}
			return tree;
		});
	};
}
