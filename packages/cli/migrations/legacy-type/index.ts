import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export default function(options: any): Rule {
	return (host: Tree, context: SchematicContext) => {
		const igConfig = "./ignite-ui-cli.json";

		if (host.exists(igConfig)) {
			const content = JSON.parse(host.read(igConfig)!.toString());
			if (content?.project?.projectType === "igx-ts-legacy") {
				content.project.projectType = "igx-ts";
				context.logger.info("We've updated your project type to `igx-ts` to continue using Ignite UI CLI. The `igx-ts-legacy` NgModule-based project type is no longer supported. Adding new components might not register correctly.");
				context.logger.info("We recommend using Angular's standalone migration: https://angular.dev/reference/migrations/standalone");
				host.overwrite(igConfig, JSON.stringify(content, null, 2));
			}
		}
	};
}
