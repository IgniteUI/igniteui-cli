import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export default function(): Rule {
	return (host: Tree, context: SchematicContext) => {
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
