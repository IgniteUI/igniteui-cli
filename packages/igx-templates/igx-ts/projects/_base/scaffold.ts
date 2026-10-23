import { Util } from "@igniteui/cli-core";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as ts from "typescript";
import { IGNITEUI_ANGULAR_PACKAGE } from "../../../constants";

/** Package that provides the `ig` commands in projects created by `ig new` */
export const CLI_PACKAGE = "igniteui-cli";
/** Added by `ng add igniteui-angular`; projects created through the schematics keep it instead of igniteui-cli */
const SCHEMATICS_PACKAGE = "@igniteui/angular-schematics";

/** AI config the ai-config step of `ng add igniteui-angular` writes; `ig new` and the ng-new schematic run their own */
const NG_ADD_AI_CONFIG = [".agents", ".claude", "AGENTS.md", ".mcp.json"];

/** Reads a field of the newest published version that matches `spec` (`name@range`) */
function npmView(spec: string, field: string) {
	const result = JSON.parse(Util.execSync(`npm view "${spec}" ${field} --json`, { encoding: "utf8" }) as string);
	return Array.isArray(result) ? result[result.length - 1] : result;
}

/**
 * Creates the project at `projectPath` with `ng new`, followed by `ng add angular-eslint` and `ng add igniteui-angular`,
 * which also installs the packages. `igniteui-angular` comes from the templates' `IGNITEUI_ANGULAR_PACKAGE` range and
 * Angular at the newest major that supports, so the generated project matches what the component templates use.
 * Returns that Angular major.
 */
export function generateProject(dashName: string, projectPath: string): string {
	const angularMajor = npmView(`@angular/core@${npmView(IGNITEUI_ANGULAR_PACKAGE, "peerDependencies")["@angular/core"]}`,
		"version").split(".")[0];
	const ng = (command: string, cwd: string) =>
		Util.execSync(`npx -y @angular/cli@${angularMajor} ${command} --defaults --interactive=false`, {
			cwd,
			stdio: "inherit",
			env: { ...process.env, NG_CLI_ANALYTICS: "false" }
		});

	// `ng new` refuses to run inside an Angular workspace, so it runs in a temp folder outside any
	const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "igx-new-"));
	try {
		ng(`new ${dashName} --directory ${dashName} --style=scss --routing --ssr=false ` +
			// zone.js stays until the templates are verified zoneless
			"--zoneless=false --ai-config=none --skip-git --skip-install --package-manager=npm", tmp);
		fs.cpSync(path.join(tmp, dashName), projectPath, { recursive: true });
	} finally {
		fs.rmSync(tmp, { recursive: true, force: true });
	}

	// angular-eslint majors follow Angular's
	ng(`add angular-eslint@${angularMajor} --skip-confirmation`, projectPath);
	ng(`add ${IGNITEUI_ANGULAR_PACKAGE} --skip-confirmation`, projectPath);

	for (const entry of NG_ADD_AI_CONFIG) {
		fs.rmSync(path.join(projectPath, entry), { recursive: true, force: true });
	}
	return angularMajor;
}

/**
 * Installs packages at their latest version, or at the version or range an entry names,
 * which also brings the lock file and node_modules in line with package.json
 */
export function npmInstall(projectPath: string, packages: string[], dev = false) {
	Util.execSync(`npm install ${dev ? "--save-dev " : ""}${packages.join(" ")} --no-audit --no-fund`, {
		cwd: projectPath,
		stdio: "inherit"
	});
}

/** Applies our deviations from the angular.json `ng new` generates */
export function patchAngularJson(json: any, config: { [key: string]: any }) {
	const architect = json.projects[config.dashName].architect;
	const build = architect.build;
	// `public/` from `ng new` is served at the root; overlays keep their files in src/assets
	build.options.assets.push("src/assets");
	if (!config.CustomTheme) {
		build.options.styles.push(config.themePath);
	}
	build.configurations.production.budgets = [
		{ type: "initial", maximumWarning: "5mb", maximumError: "40mb" },
		{ type: "anyComponentStyle", maximumWarning: "8kB", maximumError: "2mb" }
	];
	build.configurations.development.fileReplacements = [{
		replace: "src/environments/environment.ts",
		with: "src/environments/environment.development.ts"
	}];
	architect.test.options = { ...architect.test.options, runnerConfig: true };
	architect["extract-i18n"] = {
		builder: "@angular/build:extract-i18n",
		options: { buildTarget: `${config.dashName}:build` }
	};
	return json;
}

/** Applies our deviations from the package.json `ng new` and `ng add` generate; `cliPackage` provides the CLI commands */
export function patchPackageJson(pkg: any, cliPackage: string, cliVersion: string) {
	const { dependencies: deps, devDependencies: devDeps } = pkg;
	Object.assign(pkg.scripts, { start: "ng serve -o", test: "ng test --browsers=chromium" });
	// `ng add` saves `^<installed version>`; the component templates are written for the IGNITEUI_ANGULAR_PACKAGE range
	const [igxPackage, igxRange] = IGNITEUI_ANGULAR_PACKAGE.split(/@(?=[^\/]+$)/);
	deps[igxPackage] = igxRange;
	// provideAnimations in the app configs
	deps["@angular/animations"] = deps["@angular/core"];
	// tests run in a real browser through @vitest/browser-playwright, which must match vitest exactly
	delete devDeps.jsdom;
	devDeps["@vitest/browser-playwright"] = devDeps.vitest;
	if (cliPackage !== SCHEMATICS_PACKAGE) {
		delete devDeps[SCHEMATICS_PACKAGE];
	}
	devDeps[cliPackage] = `~${cliVersion}`;
	return pkg;
}

/** Updates a JSON file in place; tsconfig files may have comments, of which the leading ones are kept */
export function updateJson(file: string, update: (json: any) => any) {
	const text = fs.readFileSync(file, "utf8");
	const { config, error } = ts.parseConfigFileTextToJson(file, text);
	if (error) {
		throw new Error(`Could not parse ${file}: ${ts.flattenDiagnosticMessageText(error.messageText, "\n")}`);
	}
	const header = (ts.getLeadingCommentRanges(text, 0) || []).map(range => text.slice(range.pos, range.end) + "\n").join("");
	fs.writeFileSync(file, header + JSON.stringify(update(config), null, 2) + "\n");
}
