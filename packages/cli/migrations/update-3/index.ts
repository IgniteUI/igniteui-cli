// tslint:disable:no-implicit-dependencies
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { addClassToBody, Config } from "@igniteui/cli-core";

function addHomeHeaderStyles(host: Tree) {
	const homeCss = "src/app/home/home.component.css";
	if (host.exists(homeCss)) {
		let content = host.read(homeCss).toString();
		content +=
`
h1 {
  font-size: 3rem;
  font-weight: 600;
  color: rgba(0, 0, 0, .74);
}

h3 {
  font-size: 1.75rem;
  font-weight: 600;
}
`;
		host.overwrite(homeCss, content);
	}
}

function removeGridForRoot(host: Tree) {
	const appModulePath = "src/app/app.module.ts";
	if (host.exists(appModulePath)) {
		let content = host.read(appModulePath).toString();
		if (content.indexOf("IgxGridModule.forRoot()") !== -1) {
			content = content.replace(
				`IgxGridModule.forRoot()`,
				`IgxGridModule`
			);
			host.overwrite(appModulePath, content);
		}
	}
}

function updateConfig(host: Tree) {
	const configPath = "ignite-ui-cli.json";
	if (host.exists(configPath)) {
		let overwrite = false;
		let content = host.read(configPath).toString();
		const config: Config = JSON.parse(content);

		if (config.project.framework === "angular"
			&& config.project.projectType === "igx-ts"
			&& !config.project.projectTemplate) {
			config.project.projectTemplate = "side-nav";
			overwrite = true;
		}
		if (!config.version) {
			config.version = "3.0.0";
			overwrite = true;
		}
		if (overwrite) {
			content = JSON.stringify(config, null, 4) + "\n";
			host.overwrite(configPath, content);
		}
	}
}

export default function(): Rule {
	return (host: Tree, context: SchematicContext) => {
		context.logger.info("Updating project to Ignite UI CLI 3.0.0");

		addClassToBody(host, "igx-typography");
		addHomeHeaderStyles(host);
		removeGridForRoot(host);
		updateConfig(host);
	};
}
