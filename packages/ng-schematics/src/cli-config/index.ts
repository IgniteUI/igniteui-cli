import * as path from "path";
import * as ts from "typescript";
import { DependencyNotFoundException } from "@angular-devkit/core";
import { chain, FileDoesNotExistException, Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { addClassToBody, FormatSettings, InquirerWrapper, NPM_ANGULAR, resolvePackage, TypeScriptAstTransformer, TypeScriptUtils } from "@igniteui/cli-core";
import { AngularTypeScriptFileUpdate } from "@igniteui/angular-templates";
import { createCliConfig } from "../utils/cli-config";
import { setVirtual } from "../utils/NgFileSystem";
import { addFontsToIndexHtml, getProjects, importDefaultTheme } from "../utils/theme-import";

interface CliConfigOptions {
	addAISkills?: boolean;
	aiSkillsTargets?: string[];
	aiSkillsCustomPath?: string;
}

function getDependencyVersion(pkg: string, tree: Tree): string {
	const targetFile = "/package.json";
	if (tree.exists(targetFile)) {
		const sourceText = tree.read(targetFile)!.toString();
		const json = JSON.parse(sourceText);

		let targetDep: any;
		if (json.dependencies[pkg]) {
			targetDep = json.dependencies[pkg];
		} else if (json.devDependencies[pkg]) {
			targetDep = json.devDependencies[pkg];
		} else {
			targetDep = json.peerDependencies[pkg];
		}
		if (!targetDep) {
			throw new DependencyNotFoundException();
		}

		return targetDep;
	}

	throw new FileDoesNotExistException(`${tree.root.path}/${targetFile}`);
}

function displayVersionMismatch(): Rule {
	return (tree: Tree, context: SchematicContext) => {
		const igxPackage = resolvePackage(NPM_ANGULAR);
		const pkgJson = JSON.parse(tree.read(`/node_modules/${igxPackage}/package.json`)!.toString());
		const ngKey = "@angular/core";
		const ngCommonKey = "@angular/common";
		const ngCoreProjVer = getDependencyVersion(ngKey, tree);
		const ngCommonProjVer = getDependencyVersion(ngCommonKey, tree);
		const ngCoreVer = pkgJson.peerDependencies[ngKey];
		const ngCommonVer = pkgJson.peerDependencies[ngCommonKey];

		if (ngCoreProjVer < ngCoreVer || ngCommonProjVer < ngCommonVer) {
			context.logger.warn(`
WARNING Version mismatch detected - ${igxPackage} is built against a newer version of @angular/core (${ngCoreVer}).
Running 'ng update' will prevent potential version conflicts.\n`);
		}
	};
}

function addTypographyToProj(): Rule {
	return (tree: Tree) => {
		addClassToBody(tree, "ig-typography");
		addClassToBody(tree, "ig-scrollbar");
	};
}

function importBrowserAnimations(): Rule {
	return async (tree: Tree) => {
		const projects = await getProjects(tree);
		projects.forEach(project => {
			// TODO: Resolve hardcoded paths instead
			const moduleFilePath = `${project.sourceRoot}/app/app.module.ts`;
			if (tree.exists(moduleFilePath)) {
				const mainModule = new AngularTypeScriptFileUpdate(
					moduleFilePath,
					false,
					{
						indentSize: 4,
						convertTabsToSpaces: false,
						singleQuotes: false
					});
				mainModule.addNgModuleMeta({ import: "BrowserAnimationsModule", from: "@angular/platform-browser/animations" });
				mainModule.finalize();
			}
			const appConfigFilePath = `${project.sourceRoot}/app/app.config.ts`;
			if (tree.exists(appConfigFilePath)) {
				const sourceFile = TypeScriptUtils.getFileSource(appConfigFilePath);
				const formatSettings: FormatSettings = {
					indentSize: 4,
					convertTabsToSpaces: false,
					singleQuotes: false
				};
				const configTransformer = new TypeScriptAstTransformer(sourceFile, undefined, undefined, formatSettings);
				const providerMeta = { provide: "provideAnimations", from: "@angular/platform-browser/animations" };
				if (!configTransformer.importDeclarationCollides({name: providerMeta.provide})) {
					configTransformer.requestNewImportDeclaration({
						identifiers: { name: providerMeta.provide },
						moduleName: providerMeta.from
					});
				}

				configTransformer
					.requestNewMembersInArrayLiteral((node) =>
						!!configTransformer.findNodeAncestor(node, (node) => ts.isPropertyAssignment(node) &&
							node.name.getText() === "providers" &&
							ts.isObjectLiteralExpression(node.parent) &&
							ts.isArrayLiteralExpression(node.initializer) &&
							!node.initializer.elements.some(el => ts.isCallExpression(el) && el.expression.getText() === providerMeta.provide) &&
							node.initializer.elements.some(el => ts.isCallExpression(el) && el.expression.getText() === "provideRouter")),
					[ts.factory.createCallExpression(ts.factory.createIdentifier(providerMeta.provide), undefined, [])]
				)

				const result = configTransformer.finalize();
				TypeScriptUtils.saveFile(appConfigFilePath, result);
			}
		});
	};
}

function importStyles(): Rule {
	return async (tree: Tree) => {
		await addFontsToIndexHtml(tree);
		await importDefaultTheme(tree);
	};
}

/** Agent target → destination path mapping */
const AGENT_DEST_MAP: Record<string, string> = {
	copilot: ".github/copilot-instructions.md",
	claude: "CLAUDE.md",
	cursor: ".cursor/skills",
	agents: ".agents/skills"
};

function copySkillFile(tree: Tree, sourcePath: string, destPath: string, context: SchematicContext): void {
	if (!tree.exists(sourcePath)) {
		context.logger.debug(`Source skill file not found: ${sourcePath}`);
		return;
	}
	if (tree.exists(destPath)) {
		context.logger.info(`${destPath} already exists. Skipping.`);
		return;
	}
	const content = tree.read(sourcePath);
	if (!content) {
		context.logger.debug(`Could not read source skill file: ${sourcePath}`);
		return;
	}
	tree.create(destPath, content);
	context.logger.info(`Created ${destPath}`);
}

function addAISkillsFiles(options: CliConfigOptions): Rule {
	return async (tree: Tree, context: SchematicContext) => {
		// Step 1: Ask if user wants AI skills (only if not already specified)
		let addSkills = options.addAISkills;
		if (addSkills === undefined) {
			addSkills = await InquirerWrapper.confirm({
				message: "Would you like to add AI coding skills for your IDE?",
				default: true
			});
		}
		if (!addSkills) {
			return;
		}

		// Step 2: Ask which agents to target (only if not already specified)
		let targets = options.aiSkillsTargets || [];
		if (targets.length === 0) {
			const agentChoices = [
				"copilot (.github/copilot-instructions.md)",
				"claude (CLAUDE.md)",
				"cursor (.cursor/skills/)",
				"agents (.agents/skills/)",
				"custom (add custom path)"
			];
			const selected = await InquirerWrapper.checkbox({
				message: "Which AI coding assistant(s) would you like to add skills for?",
				choices: agentChoices
			});
			// Extract the agent key from the choice string
			targets = selected.map(t => t.split(" ")[0]);
		}
		if (targets.length === 0) {
			return;
		}

		// Step 3: If "custom" selected, ask for path (only if not already specified)
		let customPath = options.aiSkillsCustomPath;
		if (targets.includes("custom") && customPath === undefined) {
			customPath = await InquirerWrapper.input({
				message: "Enter the custom path for AI skill files:"
			});
		}

		const igxPackage = resolvePackage(NPM_ANGULAR);
		const skillsSourceDir = `/node_modules/${igxPackage}/skills`;
		const skillsDir = tree.getDir(skillsSourceDir);
		const skillFiles = skillsDir.subfiles;

		if (!skillFiles.length) {
			context.logger.warn(`No skill files found in ${skillsSourceDir}. Skipping AI skills setup.`);
			return;
		}

		for (const target of targets) {
			let destDir: string;
			if (target === "custom") {
				if (!customPath) {
					context.logger.warn("Custom AI skills path was selected but no path was provided. Skipping.");
					continue;
				}
				destDir = customPath;
			} else {
				const dest = AGENT_DEST_MAP[target];
				if (!dest) {
					context.logger.warn(`Unknown AI agent target: ${target}. Skipping.`);
					continue;
				}
				destDir = dest;
			}

			// Check if the dest is a specific file path (has .md extension) or a directory
			if (destDir.endsWith(".md")) {
				// For single-file destinations (Copilot, Claude), copy first skill file
				const sourcePath = path.posix.join(skillsSourceDir, skillFiles[0]);
				copySkillFile(tree, sourcePath, destDir, context);
			} else {
				// For directory destinations (Cursor, Agents, Custom), copy all skill files
				for (const file of skillFiles) {
					const sourcePath = path.posix.join(skillsSourceDir, file);
					const destPath = path.posix.join(destDir, file);
					copySkillFile(tree, sourcePath, destPath, context);
				}
			}
		}
	};
}

// tslint:disable-next-line:space-before-function-paren
export default function (options: CliConfigOptions = {}): Rule {
	return (tree: Tree) => {
		setVirtual(tree);
		const rules: Rule[] = [
			importStyles(),
			addTypographyToProj(),
			importBrowserAnimations(),
			createCliConfig(),
			displayVersionMismatch(),
			addAISkillsFiles(options)
		];
		return chain(rules);
	};
}
