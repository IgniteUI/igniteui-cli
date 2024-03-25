import { AddTemplateArgs, App, FS_TOKEN, IFileSystem, IImport, TypeScriptFileUpdate, TypeScriptUtils, Util } from "@igniteui/cli-core";
import * as ts from "typescript";

const DEFAULT_ROUTES_VARIABLE = "routes";
/**
 * Apply various updates to typescript files using AST
 */
export class WebComponentsTypeScriptFileUpdate /* extends TypeScriptFileUpdate */ {
		/* temp */
		private targetPath: string;
		private targetSource: ts.SourceFile;
		private fileSystem: IFileSystem;
		private importsMeta: IImport;
		private requestedImports: IImport[];
		private createdStringLiterals: string[];
	
		private addNewFileImports() {}
		private formatFile(filePath: string) {}
		private loadImportsMeta(): IImport { return null; }
	
		constructor(targetPath: string) {
			// super(targetPath);
			this.fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
			this.initState();
		}
		/* -- */

	/** Applies accumulated transforms, saves and formats the file */
	public finalize() {
		// add new import statements after visitor walks:
		this.addNewFileImports();

		TypeScriptUtils.saveFile(this.targetPath, this.targetSource);
		this.formatFile(this.targetPath);
		// reset state in case of further updates
		this.initState();
	}

	// TODO:
	// public addRoute(
	// 	path: string,
	// 	component: string,
	// 	name: string,
	// 	routerChildren: string,
	// 	importAlias: string,
	// 	routesVariable = DEFAULT_ROUTES_VARIABLE
	// ) {
	// 	this.addRouteModuleEntry(path, component, name, routerChildren, importAlias, routesVariable);
	// }

	//#region File state

	/** Initializes existing imports info, [re]sets import and `NgModule` edits */
	protected initState() {
		this.targetSource = TypeScriptUtils.getFileSource(this.targetPath);
		this.importsMeta = this.loadImportsMeta();
		this.requestedImports = [];
		this.createdStringLiterals = [];
	}

	//#endregion File state

	// TODO:
	// protected addRouteModuleEntry(
	// 	path: string,
	// 	component: string,
	// 	name: string,
	// 	routerChildren: string,
	// 	importAlias: string,
	// 	routesVariable = DEFAULT_ROUTES_VARIABLE
	// ) {
	// 	const isRouting: boolean = path.indexOf("routing") >= 0;

	// 	if (isRouting && this.targetSource.text.indexOf(path.slice(0, -3)) > 0) {
	// 		return;
	// 	}

	// 	const moduleName = path.substring(0, path.indexOf("-routing"));
	// 	if (path) {
	// 		const relativePath: string = isRouting ?
	// 			"./" + moduleName + "/" + path.slice(0, -3) : "./" + path + "/" + path;

	// 		this.requestImport(relativePath, importAlias);
	// 	}

	// 	// https://github.com/Microsoft/TypeScript/issues/14419#issuecomment-307256171
	// 	const transformer: ts.TransformerFactory<ts.Node> = <T extends ts.Node>(context: ts.TransformationContext) =>
	// 		(rootNode: T) => {
	// 			// the visitor that should be used when adding routes to the main route array
	// 			const conditionalVisitor: ts.Visitor = (node: ts.Node): ts.Node => {
	// 				if (node.kind === ts.SyntaxKind.ArrayLiteralExpression) {
	// 					const newObject = this.createRouteEntry(path, component, name, routerChildren);
	// 					const array = (node as ts.ArrayLiteralExpression);
	// 					this.createdStringLiterals.push(path, name);
	// 					const notFoundWildCard = ".*";
	// 					const nodes = ts.visitNodes(array.elements, visitor);
	// 					const errorRouteNode = nodes.filter(element => element.getText().includes(notFoundWildCard))[0];
	// 					let resultNodes = null;
	// 					if (errorRouteNode) {
	// 						resultNodes = nodes
	// 							.slice(0, nodes.indexOf(errorRouteNode))
	// 							.concat(newObject)
	// 							.concat(errorRouteNode);
	// 					} else {
	// 						resultNodes = nodes
	// 							.concat(newObject);
	// 					}

	// 					const elements = ts.factory.createNodeArray([
	// 						...resultNodes
	// 					]);

	// 					return ts.factory.updateArrayLiteralExpression(array, elements);
	// 				} else {
	// 					return ts.visitEachChild(node, conditionalVisitor, context);
	// 				}
	// 			};

	// 			let visitCondition;

	// 			if (!isRouting) {
	// 				visitCondition = (node: ts.Node): boolean => {
	// 					return node.kind === ts.SyntaxKind.VariableDeclaration &&
	// 						(node as ts.VariableDeclaration).name.getText() === routesVariable &&
	// 						(node as ts.VariableDeclaration).type.getText() === "Route[]";
	// 				};
	// 			} else {
	// 				visitCondition = (node: ts.Node): boolean => {
	// 					return undefined;
	// 				};
	// 			}

	// 			const visitor: ts.Visitor = this.createVisitor(conditionalVisitor, visitCondition, context);
	// 			context.enableSubstitution(ts.SyntaxKind.ClassDeclaration);
	// 			return ts.visitNode(rootNode, visitor);
	// 		};

	// 	this.targetSource = ts.transform(this.targetSource, [transformer], {
	// 		pretty: true // oh well..
	// 	}).transformed[0] as ts.SourceFile;

	// 	this.finalize();
	// }

	// TODO
	// protected requestImport(modulePath: string, routerAlias: string) {
	// 	const existing = this.requestedImports.find(x => x.from === modulePath);
	// 	if (!existing) {
	// 		// new imports, check if already exists in file
	// 		this.requestedImports.push({
	// 			as: routerAlias,
	// 			from: modulePath,
	// 			edit: this.importsMeta.modulePaths.indexOf(modulePath) !== -1
	// 		});
	// 	} else {
	// 		return;
	// 	}
	// }

	protected createIdentifierImport(importPath: string, as: string): ts.ImportDeclaration {
		let exportedObject: string | undefined;
		let exportedObjectName: string | undefined;
		let importClause: ts.ImportClause | undefined;
		if (as) {
			exportedObject = "routes";
			exportedObjectName = as.replace(/\s/g, "");
			importClause = ts.factory.createImportClause(
				false,
				undefined,
				ts.factory.createNamedImports([
					ts.factory.createImportSpecifier(false, ts.factory.createIdentifier(exportedObject),
						ts.factory.createIdentifier(exportedObjectName))
				])
			);
		} else {
			importClause = undefined;
		}
		const importDeclaration = ts.factory.createImportDeclaration(
			undefined,
			undefined,
			importClause,
			ts.factory.createStringLiteral(importPath, true));
		return importDeclaration;
	}

	//#region ts.TransformerFactory

	/** Transformation to apply edits to existing named import declarations */
	protected importsTransformer: ts.TransformerFactory<ts.Node> =
		<T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
			const editImports = this.requestedImports.filter(x => x.edit);

			// https://github.com/Microsoft/TypeScript/issues/14419#issuecomment-307256171
			const visitor = (node: ts.Node): ts.Node => {
				if (node.kind === ts.SyntaxKind.ImportDeclaration &&
					editImports.find(x => x.from === ((node as ts.ImportDeclaration).moduleSpecifier as ts.StringLiteral).text)
				) {
					// visit just the source file main array (second visit)
					return visitImport(node as ts.ImportDeclaration);
				} else {
					node = ts.visitEachChild(node, visitor, context);
				}
				return node;
			};
			function visitImport(node: ts.Node) {
				node = ts.visitEachChild(node, visitImport, context);
				return node;
			}
			return ts.visitNode(rootNode, visitor);
		}

	//#endregion ts.TransformerFactory

	// TODO
	// private createRouteEntry(
	// 	filePath: string,
	// 	className: string,
	// 	linkText: string,
	// 	routerAlias: string
	// ): ts.ObjectLiteralExpression {
	// 	const routePath = ts.factory.createPropertyAssignment("path", ts.factory.createStringLiteral(filePath, true));
	// 	const routeComponent =
	// 		ts.factory.createPropertyAssignment("component", ts.factory.createStringLiteral(className, true));
	// 	const routeData = ts.factory.createPropertyAssignment("name", ts.factory.createStringLiteral(linkText, true));
	// 	if (routerAlias) {
	// 		const childrenData = ts.factory.createPropertyAssignment("children", ts.factory.createIdentifier(routerAlias));
	// 		return ts.factory.createObjectLiteralExpression([routePath, routeComponent, routeData, childrenData]);
	// 	} else {
	// 		return ts.factory.createObjectLiteralExpression([routePath, routeComponent, routeData]);
	// 	}
	// }
}
