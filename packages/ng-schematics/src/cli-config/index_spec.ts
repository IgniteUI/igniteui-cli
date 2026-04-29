import * as path from "path";

import { EmptyTree } from "@angular-devkit/schematics";
import { SchematicTestRunner, UnitTestTree } from "@angular-devkit/schematics/testing";
import { App, FEED_ANGULAR, NPM_ANGULAR, TEMPLATE_MANAGER } from "@igniteui/cli-core";
import { SchematicsTemplateManager } from "../SchematicsTemplateManager";

describe("cli-config schematic", () => {
	const collectionPath = path.join(__dirname, "../collection.json");
	const runner: SchematicTestRunner = new SchematicTestRunner("cli-schematics", collectionPath);
	let tree: UnitTestTree;
	const sourceRoot = "src";
	// TODO:
	// TS compiles export * from "./util", __createBinding defines each re-exported name as an accessor descriptor (getter-only, no setter, writable is N/A on accessor descriptors)
	// Require the leaf module directly so spyOn works — cliCore re-exports via __createBinding getter chains
	// (index → util/index → ai-skills), making the property non-writable at the top level.
	// The leaf module's exports object uses plain assignments, which are writable and spyable.
	const aiSkillsModule = require("@igniteui/cli-core/util/ai-skills");

	const ngJsonConfig = {
		projects: {
			testProj: {
				root: "",
				sourceRoot,
				architect: {
					build: {
						options: {
							main: `${sourceRoot}/main.ts`,
							polyfills: `${sourceRoot}/polyfills.ts`,
							scripts: [],
							index: `${sourceRoot}/index.html`
						}
					},
					serve: {},
					test: {}
				}
			}
		},
		version: 1
	};

	const pkgJsonConfig = {
		dependencies: {},
		devDependencies: {},
		peerDependencies: {}
	};

	function createIgPkgJson(igxPkg = NPM_ANGULAR) {
		const filePath = `node_modules/${igxPkg}/package.json`;
		tree.create(filePath, JSON.stringify(pkgJsonConfig));
		const pkgJson = JSON.parse(tree.readContent(filePath));
		const angularCommon = "@angular/common";
		const angularCore = "@angular/core";
		const targetVersion = "^7.0.3";
		pkgJson.peerDependencies[angularCommon] = targetVersion;
		pkgJson.peerDependencies[angularCore] = targetVersion;

		tree.overwrite(filePath, JSON.stringify(pkgJson));
	}

	function populatePkgJson(igxPkg = NPM_ANGULAR) {
		const targetFile = "/package.json";
		const angularCore = "@angular/core";
		const angularCommon = "@angular/common";
		const version = "^6.1.0";
		const pkgJson = JSON.parse(tree.readContent(targetFile));
		pkgJson.dependencies[angularCore] = version;
		pkgJson.dependencies[angularCommon] = version;
		pkgJson.dependencies[igxPkg] = "~7.0.0";
		tree.overwrite(targetFile, JSON.stringify(pkgJson));
	}

	function resetTree() {
		tree.overwrite("/angular.json", JSON.stringify(ngJsonConfig));
		tree.overwrite("/package.json", JSON.stringify(pkgJsonConfig));
		tree.overwrite("/src/index.html",
			`<head>
			 </head>
			 <body>
			 </body>`);
		tree.delete("/ignite-ui-cli.json");
	}

	beforeEach(() => {
		tree = new UnitTestTree(new EmptyTree());
		tree.create("/angular.json", JSON.stringify(ngJsonConfig));
		tree.create("/package.json", JSON.stringify(pkgJsonConfig));
		tree.create("/src/index.html",
			`<head>
			 </head>
			 <body>
			 </body>`);
		createIgPkgJson();
		populatePkgJson();
		spyOn(aiSkillsModule, "copyAISkillsToProject");
	});

	it("should set the template manager correctly", async () => {
		await runner.runSchematic("cli-config", {}, tree);
		expect(App.container.get(TEMPLATE_MANAGER)).toBeInstanceOf(SchematicsTemplateManager);
	});

	it("should create an ignite-ui-cli.json file correctly", async () => {
		await runner.runSchematic("cli-config", {}, tree);
		expect(tree.exists("ignite-ui-cli.json")).toBeTruthy();

		const cliJsonData = JSON.parse(tree.readContent("/ignite-ui-cli.json"));
		expect(cliJsonData.project.projectTemplate).toEqual("ng-cli");
	});

	it("should add typography correctly", async () => {
		const targetFile = "/src/index.html";
		await runner.runSchematic("cli-config", {}, tree);

		const content = tree.readContent(targetFile);
		expect(content.includes("<body class=\"ig-typography ig-scrollbar\">")).toBeTruthy();
	});

	it("should add Titillium and Material Icons stylesheets correctly", async () => {
		const targetFile = "/src/index.html";
		await runner.runSchematic("cli-config", {}, tree);

		const content = tree.readContent(targetFile);
		const headContentsRegex = /(?:<head>)([\s\S]*)(?:<\/head>)/;

		expect(headContentsRegex.test(content)).toBeTruthy();
		expect(headContentsRegex.exec(content)!.pop()).toContain("family=Titillium+Web");
		expect(headContentsRegex.exec(content)!.pop()).toContain("family=Material+Icons");
	});

	it("should add the default scss theme correctly", async () => {
		const targetFile = "/src/styles.scss";
		tree.create(targetFile, "");

		await runner.runSchematic("cli-config", {}, tree);

		let content = tree.readContent(targetFile);
		expect(content.includes(`@use "${NPM_ANGULAR}`)).toBeTruthy();

		tree.overwrite(targetFile, "");
		resetTree();
		createIgPkgJson(FEED_ANGULAR);
		populatePkgJson(FEED_ANGULAR);

		await runner.runSchematic("cli-config", {}, tree);
		content = tree.readContent(targetFile);
		expect(content.includes(`@use "${FEED_ANGULAR}`)).toBeTruthy();
	});

	it("should add the default css theme to the workspace", async () => {
		const targetFile = "/angular.json";
		expect(tree.exists(targetFile)).toBeTruthy();

		let targetImport = `node_modules/${NPM_ANGULAR}/styles/igniteui-angular.css`;
		await runner.runSchematic("cli-config", {}, tree);
		let workspace = JSON.parse(tree.read("/angular.json")!.toString());

		expect(
			workspace.projects.testProj.architect.build.options.styles.filter(
				(s: string) => s.includes(targetImport)).length
		)
			.toBeGreaterThan(0);
		expect(
			workspace.projects.testProj.architect.test.options.styles.filter(
				(s: string) => s.includes(targetImport)).length
		)
			.toBeGreaterThan(0);

		resetTree();
		createIgPkgJson(FEED_ANGULAR);
		populatePkgJson(FEED_ANGULAR);
		targetImport = `node_modules/${FEED_ANGULAR}/styles/igniteui-angular.css`;

		await runner.runSchematic("cli-config", {}, tree);
		workspace = JSON.parse(tree.read("/angular.json")!.toString());

		expect(
			workspace.projects.testProj.architect.build.options.styles.filter(
				(s: string) => s.includes(targetImport)).length
		)
			.toBeGreaterThan(0);
		expect(
			workspace.projects.testProj.architect.test.options.styles.filter(
				(s: string) => s.includes(targetImport)).length
		)
			.toBeGreaterThan(0);
	});

	it("should not add the default css theme to the workspace if the global styles file is scss", async () => {
		// if the global styles file is scss or sass - the default theme is imported there
		const stylesheet = "/src/styles.scss";
		tree.create(stylesheet, "");
		const targetFile = "/angular.json";
		expect(tree.exists(targetFile)).toBeTruthy();

		await runner.runSchematic("cli-config", {}, tree);
		const workspace = JSON.parse(tree.read("/angular.json")!.toString());

		// the schematic creates the hierarchy that leads to the styles object within the workspace,
		// providing that it is not already present
		expect(workspace.projects.testProj.architect.build.styles).toBeUndefined();
		expect(workspace.projects.testProj.architect.test.styles).toBeUndefined();
	});

	it("should add the default sass theme correctly", async () => {
		const targetFile = "/src/styles.sass";
		tree.create(targetFile, "");

		await runner.runSchematic("cli-config", {}, tree);

		let content = tree.readContent(targetFile);
		expect(content.includes(`@use "${NPM_ANGULAR}`)).toBeTruthy();

		tree.overwrite(targetFile, "");
		resetTree();
		createIgPkgJson(FEED_ANGULAR);
		populatePkgJson(FEED_ANGULAR);

		await runner.runSchematic("cli-config", {}, tree);
		content = tree.readContent(targetFile);
		expect(content.includes(`@use "${FEED_ANGULAR}`)).toBeTruthy();
	});

	it("should add BrowserAnimationsModule to app-module.ts", async () => {
		const moduleContent =
`import { NgModule } from '@angular/core';
@NgModule({
	imports: []
})
export class AppModule {
}
`;

		const moduleContentAfterSchematic =
`import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
	imports: [BrowserAnimationsModule]
})
export class AppModule {
}
`;
		const targetFile = "./src/app/app-module.ts";
		tree.create(targetFile, moduleContent);

		await runner.runSchematic("cli-config", {}, tree);
		const content = tree.readContent(targetFile);
		expect(content.replace(/\r\n/g, "\n")).toEqual(moduleContentAfterSchematic.replace(/\r\n/g, "\n"));
	});

	it("should add provideAnimations to app.config.ts", async () => {
		const moduleContent =
`import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes)]
};
`;

		const moduleContentAfterSchematic =
`import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes), provideAnimations()]
};
`;
		const targetFile = "./src/app/app.config.ts";
		tree.create(targetFile, moduleContent);

		await runner.runSchematic("cli-config", {}, tree);
		const content = tree.readContent(targetFile);
		expect(content.replace(/\r\n/g, "\n")).toEqual(moduleContentAfterSchematic.replace(/\r\n/g, "\n"));
	});

	it("should NOT add provideAnimations to app.config.ts if it already exists", async () => {
		const moduleContent =
`import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes), provideAnimations()]
};
`;
		const targetFile = "./src/app/app.config.ts";
		tree.create(targetFile, moduleContent);

		await runner.runSchematic("cli-config", {}, tree);
		const content = tree.readContent(targetFile);
		expect(content.replace(/\r\n/g, "\n")).toEqual(moduleContent.replace(/\r\n/g, "\n"));
	});

	it("should properly display the dependency mismatch warning", async () => {
		const warns: string[] = [];
		runner.logger.subscribe(entry => {
			if (entry.level === "warn") {
				warns.push(entry.message);
			}
		});
		await runner.runSchematic("cli-config", {}, tree);
		let pattern = new RegExp(`WARNING Version mismatch detected - ${NPM_ANGULAR}`);
		expect(warns).toContain(jasmine.stringMatching(pattern));

		resetTree();
		createIgPkgJson(FEED_ANGULAR);
		populatePkgJson(FEED_ANGULAR);
		pattern = new RegExp(`WARNING Version mismatch detected - ${FEED_ANGULAR}`);

		await runner.runSchematic("cli-config", {}, tree);
		expect(warns).toContain(jasmine.stringMatching(pattern));
	});

	describe("addAIConfig", () => {
		const mcpFilePath = "/.vscode/mcp.json";

		it("should create .vscode/mcp.json with both servers when file does not exist", async () => {
			await runner.runSchematic("cli-config", {}, tree);

			expect(tree.exists(mcpFilePath)).toBeTruthy();
			const content = JSON.parse(tree.readContent(mcpFilePath));
			expect(content.servers["igniteui-cli"]).toEqual({ command: "npx", args: ["-y", "igniteui-cli", "mcp"] });
			expect(content.servers["igniteui-theming"]).toEqual({ command: "npx", args: ["-y", "igniteui-theming", "igniteui-theming-mcp"] });
		});

		it("should call copyAISkillsToProject", async () => {
			await runner.runSchematic("cli-config", {}, tree);
			expect(aiSkillsModule.copyAISkillsToProject).toHaveBeenCalledTimes(2);
		});

		it("should add both servers to existing .vscode/mcp.json that has no servers", async () => {
			tree.create(mcpFilePath, JSON.stringify({ servers: {} }));

			await runner.runSchematic("cli-config", {}, tree);

			const content = JSON.parse(tree.readContent(mcpFilePath));
			expect(content.servers["igniteui-cli"]).toEqual({ command: "npx", args: ["-y", "igniteui-cli", "mcp"] });
			expect(content.servers["igniteui-theming"]).toEqual({ command: "npx", args: ["-y", "igniteui-theming", "igniteui-theming-mcp"] });
		});

		it("should add missing igniteui-theming server if only igniteui is already present", async () => {
			tree.create(mcpFilePath, JSON.stringify({
				servers: {
					"igniteui-cli": { command: "npx", args: ["-y", "igniteui-cli", "mcp"] }
				}
			}));

			await runner.runSchematic("cli-config", {}, tree);

			const content = JSON.parse(tree.readContent(mcpFilePath));
			expect(content.servers["igniteui-cli"]).toEqual({ command: "npx", args: ["-y", "igniteui-cli", "mcp"] });
			expect(content.servers["igniteui-theming"]).toEqual({ command: "npx", args: ["-y", "igniteui-theming", "igniteui-theming-mcp"] });
		});

		it("should add missing igniteui server if only igniteui-theming is already present", async () => {
			tree.create(mcpFilePath, JSON.stringify({
				servers: {
					"igniteui-theming": { command: "npx", args: ["-y", "igniteui-theming", "igniteui-theming-mcp"] }
				}
			}));

			await runner.runSchematic("cli-config", {}, tree);

			const content = JSON.parse(tree.readContent(mcpFilePath));
			expect(content.servers["igniteui-cli"]).toEqual({ command: "npx", args: ["-y", "igniteui-cli", "mcp"] });
			expect(content.servers["igniteui-theming"]).toEqual({ command: "npx", args: ["-y", "igniteui-theming", "igniteui-theming-mcp"] });
		});

		it("should not modify .vscode/mcp.json if both servers are already present", async () => {
			const existing = {
				servers: {
					"angular-cli": { command: "npx", args: ["-y", "@angular/cli", "mcp"] },
					"igniteui-cli": { command: "npx", args: ["-y", "igniteui-cli", "mcp"] },
					"igniteui-theming": { command: "npx", args: ["-y", "igniteui-theming", "igniteui-theming-mcp"] }
				}
			};
			tree.create(mcpFilePath, JSON.stringify(existing));

			await runner.runSchematic("cli-config", {}, tree);

			const content = JSON.parse(tree.readContent(mcpFilePath));
			expect(content).toEqual(existing);
		});

		it("should preserve existing servers when adding igniteui servers", async () => {
			tree.create(mcpFilePath, JSON.stringify({
				servers: {
					"other-server": { command: "node", args: ["server.js"] }
				}
			}));

			await runner.runSchematic("cli-config", {}, tree);

			const content = JSON.parse(tree.readContent(mcpFilePath));
			expect(content.servers["other-server"]).toEqual({ command: "node", args: ["server.js"] });
			expect(content.servers["igniteui-cli"]).toBeDefined();
			expect(content.servers["igniteui-theming"]).toBeDefined();
		});
	});

	describe("ai-config schematic", () => {
		it("should call copyAISkillsToProject with claude and generic defaults when no options", async () => {
			await runner.runSchematic("ai-config", {}, tree);

			expect(aiSkillsModule.copyAISkillsToProject).toHaveBeenCalledTimes(2);
			expect(aiSkillsModule.copyAISkillsToProject).toHaveBeenCalledWith(".claude/skills");
			expect(aiSkillsModule.copyAISkillsToProject).toHaveBeenCalledWith(".agents/skills");
		});

		it("should pass resolved skillsDir when agent option is provided", async () => {
			await runner.runSchematic("ai-config", { agent: ["cursor"] }, tree);

			expect(aiSkillsModule.copyAISkillsToProject).toHaveBeenCalledWith(".cursor/skills");
		});

		it("should pass resolved skillsDir for copilot agent", async () => {
			await runner.runSchematic("ai-config", { agent: ["copilot"] }, tree);

			expect(aiSkillsModule.copyAISkillsToProject).toHaveBeenCalledWith(".github/skills");
		});

		it("should pass resolved skillsDir for generic agent", async () => {
			await runner.runSchematic("ai-config", { agent: ["generic"] }, tree);

			expect(aiSkillsModule.copyAISkillsToProject).toHaveBeenCalledWith(".agents/skills");
		});

		it("should configure multiple agents", async () => {
			await runner.runSchematic("ai-config", { agent: ["claude", "cursor"] }, tree);

			expect(aiSkillsModule.copyAISkillsToProject).toHaveBeenCalledTimes(2);
			expect(aiSkillsModule.copyAISkillsToProject).toHaveBeenCalledWith(".claude/skills");
			expect(aiSkillsModule.copyAISkillsToProject).toHaveBeenCalledWith(".cursor/skills");
		});
	});
});
