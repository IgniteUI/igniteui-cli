import {
	apply, chain, MergeStrategy, mergeWith, Rule,
	SchematicContext, template, Tree, url } from "@angular-devkit/schematics";
import { Util } from "@igniteui/cli-core";
import { join } from "path";
import { NewProjectOptions } from "./schema";

export default function(options: NewProjectOptions): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		if (!options.projTemplate) {
			return tree;
		}
		const config = options.projTemplate.generateConfig(options.name, options.theme);
		// update version with schematics one
		config.cliVersion = Util.version(join(__dirname, "../../package.json"));
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
			),
			(host: Tree, _hostContext: SchematicContext) => {
				const content = host.read("./package.json")!.toString();
				host.overwrite("./package.json", content.replace(`"igniteui-cli":`, `"@igniteui/angular-schematics":`));
			}
		]);
	};
}
