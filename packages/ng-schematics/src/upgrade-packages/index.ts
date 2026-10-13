import { Rule, SchematicContext, SchematicsException, Tree } from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { App, GoogleAnalytics, ProjectConfig, resolveUpgradeableProject } from "@igniteui/cli-core";
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
		const project = resolveUpgradeableProject(library, config.project?.projectTemplate);
		if (!project) {
			throw new SchematicsException("No valid Ignite UI project template found to upgrade packages.");
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
