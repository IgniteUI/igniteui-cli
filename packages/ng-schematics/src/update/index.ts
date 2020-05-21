import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { App, GoogleAnalytics, ProjectConfig } from "@igniteui/cli-core";
import { defer } from "rxjs";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";
import { setVirtual } from "../utils/NgFileSystem";

export default function update(_options: any): Rule {
	return (tree: Tree, context: SchematicContext) => {
		App.initialize("angular-cli");
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Update"
		});
		const templateManager = new SchematicsTemplateManager();
		const config = ProjectConfig.getConfig();
		const library = templateManager.getProjectLibrary(config.project.framework, config.project.projectType);
		const project = library.getProject(config.project.projectTemplate);
		setVirtual(tree);
		return defer(async () => {
			const success = await (project as any).upgradeIgniteUIPackages();
			if (success) {
				context.addTask(new NodePackageInstallTask());
			}
			return tree;
		});
	};
}
