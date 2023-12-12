// tslint:disable:no-implicit-dependencies
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export default function(options: any): Rule {
	return (host: Tree, context: SchematicContext) => {
		if (!options.applyMigrations) { return; }

		context.logger.info("Updating project to Ignite UI CLI 13.1.0");

		const igConfig = "./igniteui-cli.json";

		if (host.exists(igConfig)) {
			const content = JSON.parse(host.read(igConfig)!.toString());
			if (content?.project?.projectType === "igx-ts") {
				content.project.projectType = "igx-ts-legacy";
				host.overwrite(igConfig, JSON.stringify(content, null, 4));
			}
		}
	};
}
