// tslint:disable:no-implicit-dependencies
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export default function(): Rule {
	return (host: Tree, context: SchematicContext) => {
		context.logger.info("Updating project to Ignite UI CLI 2.0.0");

		const appComponentPath = "src/app/app.component.ts";

		if (host.exists(appComponentPath)) {
			let content = host.read(appComponentPath).toString();
			if (content.indexOf("rxjs/add/operator") !== -1) {
				content = content.replace(
					`import 'rxjs/add/operator/filter';`,
					`import { filter } from 'rxjs/operators';`
				);
				content = content.replace(
					`.filter((x) => x instanceof NavigationStart)`,
					`.pipe(filter((x) => x instanceof NavigationStart))`
				);
				host.overwrite(appComponentPath, content);
			}
		}
	};
}
