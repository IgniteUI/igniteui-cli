// tslint:disable:no-implicit-dependencies
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { addClassToBody } from "@igniteui/cli-core";

export default function(): Rule {
	return (host: Tree, context: SchematicContext) => {
		context.logger.info("Updating project to Ignite UI CLI 9.0.0");
		addClassToBody(host, "igx-scrollbar");
	};
}
