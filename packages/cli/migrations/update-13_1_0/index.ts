// tslint:disable:no-implicit-dependencies
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export default function(options: any): Rule {
	return (host: Tree, context: SchematicContext) => {
		if (!options.applyMigrations) { return; }

		context.logger.info("We've updated your project type to `igx-ts-legacy` to continue using `NgModule`-s. You can always change back to `igx-ts` should you want to start using Standalone Components.");

		const igConfig = "./ignite-ui-cli.json";

		if (host.exists(igConfig)) {
			const content = JSON.parse(host.read(igConfig)!.toString());
			if (content?.project?.projectType === "igx-ts") {
				content.project.projectType = "igx-ts-legacy";
				host.overwrite(igConfig, JSON.stringify(content, null, 2));
			}
		}
	};
}
