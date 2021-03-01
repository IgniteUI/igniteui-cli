// tslint:disable:no-implicit-dependencies
import { workspaces } from "@angular-devkit/core";
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { createWorkspaceHost } from "@igniteui/cli-core";

const summaryEarliestAssignment =
`summaryResult: (IgxDateSummaryOperand.earliest(data)).toLocaleDateString()`;
const summaryEarliestReplacement =
`summaryResult: data.length ? (IgxDateSummaryOperand.earliest(data)).toLocaleDateString() : null`;

const summaryLatestAssignment =
`summaryResult: (IgxDateSummaryOperand.latest(data)).toLocaleDateString()`;
const summaryLatestReplacement =
`summaryResult: data.length ? (IgxDateSummaryOperand.latest(data)).toLocaleDateString() : null`;

export default function(): Rule {
	return async (tree: Tree, context: SchematicContext) => {
		const { workspace } = await workspaces.readWorkspace("/", createWorkspaceHost(tree));
		const project = workspace.extensions.defaultProject ?
			workspace.projects.get(workspace.extensions.defaultProject as string) :
			workspace.projects.values().next().value as workspaces.ProjectDefinition;

		const sourceDir = tree.getDir(project.sourceRoot || "./src");
		const ext = ".ts";

		context.logger.info(`Applying migration for Ignite UI CLI 3.2.0 related to custom IgxSummaryOperand.`);
		context.logger.info(`See https://github.com/IgniteUI/igniteui-angular/issues/3414`);

		sourceDir.visit((path, entry) => {
			if (path.endsWith(ext)) {
				let content = entry.content.toString();
				if (content.indexOf(summaryEarliestAssignment) !== -1) {
					content = content.replace(summaryEarliestAssignment, summaryEarliestReplacement);
					tree.overwrite(path, content);
				}
				if (content.indexOf(summaryLatestAssignment) !== -1) {
					content = content.replace(summaryLatestAssignment, summaryLatestReplacement);
					tree.overwrite(path, content);
				}
			}
		});
	};
}
