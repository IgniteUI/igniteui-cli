import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { Options } from "../interfaces/options";

export default function(options: Options): Rule {
	return (host: Tree, context: SchematicContext) => {
		if (!options.applyMigrations) { return; }

		context.logger.info("Updating project to Ignite UI CLI XXX");

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
