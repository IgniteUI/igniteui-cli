import { DependencyNotFoundException } from "@angular-devkit/core";
import { yellow } from "@angular-devkit/core/src/terminal";
import { chain, FileDoesNotExistException, Rule, Tree } from "@angular-devkit/schematics";
import { addTypography, TypeScriptFileUpdate } from "@igniteui/cli-core";
import { createCliConfig } from "../utils/cli-config";
import { setVirtual } from "../utils/NgFileSystem";
import { addFontsToIndexHtml, getDefaultProject, importDefaultTheme } from "../utils/theme-import";

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
	return (tree: Tree) => {
		const pkgJson = JSON.parse(tree.read("/node_modules/igniteui-angular/package.json")!.toString());
		const ngKey = "@angular/core";
		const ngCommonKey = "@angular/common";
		const ngCoreProjVer = getDependencyVersion(ngKey, tree);
		const ngCommonProjVer = getDependencyVersion(ngCommonKey, tree);
		const ngCoreVer = pkgJson.peerDependencies[ngKey];
		const ngCommonVer = pkgJson.peerDependencies[ngCommonKey];

		if (ngCoreProjVer < ngCoreVer || ngCommonProjVer < ngCommonVer) {
			// tslint:disable-next-line:no-console
			console.warn(yellow(`
WARNING Version mismatch detected - igniteui-angular is built against a newer version of @angular/core (${ngCoreVer}).
Running 'ng update' will prevent potential version conflicts.\n`));
		}
	};
}

function addTypographyToProj(): Rule {
	return (tree: Tree) => {
		addTypography(tree);
	};
}

function importBrowserAnimations(): Rule {
	return (tree: Tree) => {
		const moduleFile = `${getDefaultProject(tree).sourceRoot}/app/app.module.ts`;
		if (tree.exists(moduleFile)) {
			const mainModule = new TypeScriptFileUpdate(moduleFile);
			mainModule.addNgModuleMeta({ import: "BrowserAnimationsModule", from: "@angular/platform-browser/animations" });
			mainModule.finalize();
		}
	};
}

function importStyles(): Rule {
	return (tree: Tree) => {
		addFontsToIndexHtml(tree);
		importDefaultTheme(tree);
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
