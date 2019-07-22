// tslint:disable:no-implicit-dependencies
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
// tslint:disable-next-line:no-submodule-imports
import { getWorkspace } from "@schematics/angular/utility/config";

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
	return (host: Tree, context: SchematicContext) => {
		const workspace = getWorkspace(host);
		const project = workspace.defaultProject ?
			workspace.projects[workspace.defaultProject] :
			workspace.projects[0];

		const sourceDir = host.getDir(project.sourceRoot || "./src");
		const ext = ".scss";

		context.logger.info(`Applying migration for Ignite UI CLI 4.2.3.`);

		sourceDir.visit((path, entry) => {
			if (path.endsWith(ext)) {
				let content = entry.content.toString();
				if (content.indexOf(awesomeGridPaginatorStyle) !== -1) {
					content = content.replace(awesomeGridPaginatorStyle, paginatorStyleReplacement);
					host.overwrite(path, content);
				}
			}
		});
	};
}
