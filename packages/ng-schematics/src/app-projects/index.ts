import {
	apply, chain, MergeStrategy, mergeWith, Rule,
	SchematicContext, template, Tree, url } from "@angular-devkit/schematics";
import { Util } from "@igniteui/cli-core";
import { NewProjectOptions } from "./schema";

export default function(options: NewProjectOptions): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		const config = options.projTemplate.generateConfig(options.name, options.theme);
		return chain([
			(_tree: Tree, context: SchematicContext) => {
				context.logger.debug(`Project template: ${options.projTemplate.id}`);
			},
			...options.projTemplate.templatePaths.map(templatePath =>
				mergeWith(
					apply(url(Util.relativePath(__filename, templatePath, true)), [
						template(config)
					]
				), MergeStrategy.Overwrite)
			)
		]);
	};
}
