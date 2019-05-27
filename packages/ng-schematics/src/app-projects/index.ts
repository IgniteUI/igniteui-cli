import {
	apply, chain, MergeStrategy, mergeWith, Rule,
	SchematicContext, template, Tree, url } from "@angular-devkit/schematics";
import { NewProjectOptions } from "./schema";

export default function(options: NewProjectOptions): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		const config = options.projTemplate.generateConfig(options.name, options.theme);
		return chain([
			(_tree: Tree, context: SchematicContext) => {
				// show the options for this Schematics.
				context.logger.info("Generating project: " + JSON.stringify(options));
			},
			...options.projTemplate.templatePaths.map(templatePath =>
				mergeWith(
					apply(url(templatePath), [
						template(config)
					]
				), MergeStrategy.Overwrite)
			)
		]);
	};
}
