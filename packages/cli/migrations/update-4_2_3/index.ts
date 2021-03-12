// tslint:disable:no-implicit-dependencies
import { workspaces } from "@angular-devkit/core";
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { createWorkspaceHost } from "@igniteui/cli-core";

const awesomeGridPaginatorStyle =
`  .igx-paginator>* {`;
const paginatorStyleReplacement =
`  .igx-paginator {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3125rem 0;
  }

  .igx-paginator>* {`;

export default function(): Rule {
	return async (tree: Tree, context: SchematicContext) => {
		const { workspace } = await workspaces.readWorkspace("/", createWorkspaceHost(tree));
		const project = workspace.extensions.defaultProject ?
			workspace.projects.get(workspace.extensions.defaultProject as string) :
			workspace.projects.values().next().value as workspaces.ProjectDefinition;

		const sourceDir = tree.getDir(project.sourceRoot || "./src");
		const ext = ".scss";

		context.logger.info(`Applying migration for Ignite UI CLI 4.2.3.`);

		sourceDir.visit((path, entry) => {
			if (path.endsWith(ext)) {
				let content = entry.content.toString();
				if (content.indexOf(awesomeGridPaginatorStyle) !== -1) {
					content = content.replace(awesomeGridPaginatorStyle, paginatorStyleReplacement);
					tree.overwrite(path, content);
				}
			}
		});
	};
}
