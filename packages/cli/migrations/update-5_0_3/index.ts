// tslint:disable:no-implicit-dependencies
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { getWorkspace } from "@schematics/angular/utility/config";

export default function(): Rule {
	return (host: Tree, context: SchematicContext) => {
		const workspace = getWorkspace(host);
		const project = workspace.defaultProject ?
			workspace.projects[workspace.defaultProject] :
			workspace.projects[0];

		const errorService = `${project.sourceRoot}/${project.prefix}/error-routing/error/global-error-handler.service.ts`;

		context.logger.info(`Applying migration for Ignite UI CLI 5.0.3`);

		if (host.exists(errorService)) {
			let fileContents = host.read(errorService).toString();
			fileContents = fileContents.replace("throw error;", "console.error(error);");
			host.overwrite(errorService, fileContents);
		}
	};
}
