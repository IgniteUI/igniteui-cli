// tslint:disable:no-implicit-dependencies
import { workspaces } from "@angular-devkit/core";
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { createWorkspaceHost } from "@igniteui/cli-core";

export default function(): Rule {
	return async (tree: Tree, context: SchematicContext) => {
		const { workspace } = await workspaces.readWorkspace("/", createWorkspaceHost(tree));
		const project = workspace.extensions.defaultProject ?
			workspace.projects.get(workspace.extensions.defaultProject as string) :
			workspace.projects.values().next().value as workspaces.ProjectDefinition;

		const errorService = `${project.sourceRoot}/${project.prefix}/error-routing/error/global-error-handler.service.ts`;

		context.logger.info(`Applying migration for Ignite UI CLI 5.0.3`);

		if (tree.exists(errorService)) {
			let fileContents = tree.read(errorService).toString();
			fileContents = fileContents.replace("throw error;", "console.error(error);");
			tree.overwrite(errorService, fileContents);
		}
	};
}
