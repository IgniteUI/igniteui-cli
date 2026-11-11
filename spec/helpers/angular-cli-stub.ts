import { Util } from "@igniteui/cli-core";
import { ExecSyncOptions } from "child_process";
import * as fs from "fs";
import * as path from "path";

const NG = /^npx -y @angular\/cli@\S+ /;
const TSCONFIG_HEADER =
	"/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */\n";

/** `npm view` answers, in the shape npm gives for a range several versions match */
const NPM_VIEW: { [spec: string]: object } = {
	"igniteui-angular": [{ "@angular/core": "21" }, { "@angular/core": "22" }],
	"@angular/core": ["22.0.0", "22.2.3"]
};

/**
 * Stands in for the Angular CLI and npm commands the Angular project scaffold runs.
 * `ng new` writes the project as it looks after `ng new`, `ng add angular-eslint` and `ng add igniteui-angular`,
 * with the AI config `ng add` writes; `npm view` answers for igniteui-angular 22; `ng add` and `npm install` do nothing.
 * Other commands run as usual.
 */
export function stubAngularCli(): jasmine.Spy {
	const execSync = Util.execSync;
	return spyOn(Util, "execSync").and.callFake((command: string, options?: ExecSyncOptions) => {
		const ng = command.match(NG);
		if (ng) {
			const ngNew = command.slice(ng[0].length).match(/^new (\S+) --directory (\S+)/);
			if (ngNew) {
				writeGeneratedProject(path.join(options!.cwd!.toString(), ngNew[2]), ngNew[1]);
			}
			return Buffer.from("");
		}
		const npmView = command.match(/^npm view "(@?[^@"]+)@/);
		if (npmView) {
			return JSON.stringify(NPM_VIEW[npmView[1]]);
		}
		if (command.startsWith("npm install ")) {
			return Buffer.from("");
		}
		return execSync.call(Util, command, options);
	});
}

function writeGeneratedProject(dir: string, dashName: string) {
	const files: { [file: string]: string | object } = {
		".gitignore": "/node_modules\n",
		".mcp.json": { mcpServers: {} },
		".agents/skills/igniteui-angular-components/SKILL.md": "",
		".claude/CLAUDE.md": "",
		"AGENTS.md": "",
		"ignite-ui-cli.json": { project: { projectTemplate: "ng-cli" } },
		"package.json": {
			name: dashName,
			scripts: { ng: "ng", start: "ng serve", build: "ng build", test: "ng test", lint: "ng lint" },
			dependencies: {
				"@angular/common": "^22.2.0",
				"@angular/core": "^22.2.0",
				"@igniteui/material-icons-extended": "^3.1.0",
				"igniteui-angular": "^22.2.3",
				"minireset.css": "~0.0.4"
			},
			devDependencies: {
				"@angular/cli": "^22.2.3",
				"@igniteui/angular-schematics": "~22.2.1580",
				"angular-eslint": "22.6.0",
				"jsdom": "^30.0.0",
				"vitest": "^5.0.0"
			}
		},
		"angular.json": {
			projects: {
				[dashName]: {
					architect: {
						build: {
							options: { assets: [{ glob: "**/*", input: "public" }], styles: ["src/styles.scss"] },
							configurations: {
								production: { budgets: [{ type: "initial", maximumWarning: "500kB", maximumError: "1MB" }] },
								development: { optimization: false }
							}
						},
						test: { builder: "@angular/build:unit-test" }
					}
				}
			}
		},
		"tsconfig.app.json": TSCONFIG_HEADER + JSON.stringify({ compilerOptions: { types: [] } }, null, 2),
		"tsconfig.spec.json": TSCONFIG_HEADER + JSON.stringify({ compilerOptions: { types: ["vitest/globals"] } }, null, 2),
		"src/styles.scss": "@use 'igniteui-angular/theming' as *;\n"
	};
	for (const [file, content] of Object.entries(files)) {
		fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true });
		fs.writeFileSync(path.join(dir, file), typeof content === "string" ? content : JSON.stringify(content, null, 2));
	}
}
