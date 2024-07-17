import * as ts from "typescript";
import { DependencyNotFoundException } from "@angular-devkit/core";
import { chain, FileDoesNotExistException, Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { addClassToBody, FormattingService, IFormatSettings, NPM_ANGULAR, resolvePackage, TypeScriptASTTransformer, TypeScriptUtils } from "@igniteui/cli-core";
import { AngularTypeScriptFileUpdate } from "@igniteui/angular-templates";
import { createCliConfig } from "../utils/cli-config";
import { setVirtual } from "../utils/NgFileSystem";
import { addFontsToIndexHtml, getProjects, importDefaultTheme } from "../utils/theme-import";

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
				const content = mainModule.finalize();
				if (content) {
					// add to a finalize override in the NG File Update instead?
					TypeScriptUtils.saveFile(moduleFilePath, content);
				}
			}
			const appConfigFilePath = `${project.sourceRoot}/app/app.config.ts`;
			if (tree.exists(appConfigFilePath)) {
				const sourceFile = TypeScriptUtils.getFileSource(appConfigFilePath);
				const formatSettings: IFormatSettings = {
					indentSize: 4,
					convertTabsToSpaces: false,
					singleQuotes: false
				};
				const configTransformer = new TypeScriptASTTransformer(sourceFile, new FormattingService(sourceFile, undefined, formatSettings));
				const providerMeta = { provide: "provideAnimations", from: "@angular/platform-browser/animations" };
				if (!configTransformer.importDeclarationCollides({name: providerMeta.provide})) {
					configTransformer.addImportDeclaration([{ name: providerMeta.provide }], providerMeta.from);
				}

				configTransformer
					.addMembersToArrayLiteral((node) =>
						!!configTransformer.findNodeAncenstor(node, (node) => ts.isPropertyAssignment(node) &&
							node.name.getText() === "providers" &&
							ts.isObjectLiteralExpression(node.parent) &&
							ts.isArrayLiteralExpression(node.initializer) &&
							!node.initializer.elements.some(el => ts.isCallExpression(el) && el.expression.getText() === providerMeta.provide) &&
							node.initializer.elements.some(el => ts.isCallExpression(el) && el.expression.getText() === "provideRouter")),
					[ts.factory.createCallExpression(ts.factory.createIdentifier(providerMeta.provide), undefined, [])]
				)

				const content = configTransformer.finalize();
				if (content) {
					// add to a finalize override in the NG File Update instead?
					TypeScriptUtils.saveFile(appConfigFilePath, content);
				}
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

// tslint:disable-next-line:space-before-function-paren
export default function (): Rule {
	return (tree: Tree) => {
		setVirtual(tree);
		return chain([
			importStyles(),
			addTypographyToProj(),
			importBrowserAnimations(),
			createCliConfig(),
			displayVersionMismatch()
		]);
	};
}
