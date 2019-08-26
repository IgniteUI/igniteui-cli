// tslint:disable:no-implicit-dependencies
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { getWorkspace } from "@schematics/angular/utility/config";

const summaryEarliestAssignment =
`summaryResult: (IgxDateSummaryOperand.earliest(data)).toLocaleDateString()`;
const summaryEarliestReplacement =
`summaryResult: data.length ? (IgxDateSummaryOperand.earliest(data)).toLocaleDateString() : null`;

const summaryLatestAssignment =
`summaryResult: (IgxDateSummaryOperand.latest(data)).toLocaleDateString()`;
const summaryLatestReplacement =
`summaryResult: data.length ? (IgxDateSummaryOperand.latest(data)).toLocaleDateString() : null`;

export default function(): Rule {
	return (host: Tree, context: SchematicContext) => {
		const workspace = getWorkspace(host);
		const project = workspace.defaultProject ?
			workspace.projects[workspace.defaultProject] :
			workspace.projects[0];

		const sourceDir = host.getDir(project.sourceRoot || "./src");
		const ext = ".ts";

		context.logger.info(`Applying migration for Ignite UI CLI 3.2.0 related to custom IgxSummaryOperand.`);
		context.logger.info(`See https://github.com/IgniteUI/igniteui-angular/issues/3414`);

		sourceDir.visit((path, entry) => {
			if (path.endsWith(ext)) {
				let content = entry.content.toString();
				if (content.indexOf(summaryEarliestAssignment) !== -1) {
					content = content.replace(summaryEarliestAssignment, summaryEarliestReplacement);
					host.overwrite(path, content);
				}
				if (content.indexOf(summaryLatestAssignment) !== -1) {
					content = content.replace(summaryLatestAssignment, summaryLatestReplacement);
					host.overwrite(path, content);
				}
			}
		});
	};
}
