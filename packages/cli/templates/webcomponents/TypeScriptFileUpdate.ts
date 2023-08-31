import { AddTemplateArgs, App, FS_TOKEN, IFileSystem, TypeScriptUtils, Util } from "@igniteui/cli-core";
import * as ts from "typescript";

const DEFAULT_ROUTES_VARIABLE = "routes";
/**
 * Apply various updates to typescript files using AST
 */
export class TypeScriptFileUpdate {

	protected formatOptions = { spaces: false, indentSize: 4, singleQuotes: false };
	private fileSystem: IFileSystem;
	private targetSource: ts.SourceFile;
	private importsMeta: { lastIndex: number, modulePaths: string[] };

	private requestedImports: ({ as: string | undefined, from: string, edit: boolean })[];

	private createdStringLiterals: string[];

	/** Create updates for a file. Use `add<X>` methods to add transformations and `finalize` to apply and save them. */
	constructor(private targetPath: string) {
		this.fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
		this.initState();
	}

	/** Applies accumulated transforms, saves and formats the file */
	public finalize() {
		// add new import statements after visitor walks:
		this.addNewFileImports();

		TypeScriptUtils.saveFile(this.targetPath, this.targetSource);
		this.formatFile(this.targetPath);
		// reset state in case of further updates
		this.initState();
	}

	public addRoute(
		path: string,
		component: string,
		name: string,
		routerChildren: string,
		importAlias: string,
		routesVariable = DEFAULT_ROUTES_VARIABLE
	) {
		this.addRouteModuleEntry(path, component, name, routerChildren, importAlias, routesVariable);
	}

	//#region File state

	/** Initializes existing imports info, [re]sets import and `NgModule` edits */
	protected initState() {
		this.targetSource = TypeScriptUtils.getFileSource(this.targetPath);
		this.importsMeta = this.loadImportsMeta();
		this.requestedImports = [];
		this.createdStringLiterals = [];
	}

	/* load some metadata about imports */
	protected loadImportsMeta() {
		const meta = { lastIndex: 0, modulePaths: [] };

		for (let i = 0; i < this.targetSource.statements.length; i++) {
			const statement = this.targetSource.statements[i];
			switch (statement.kind) {
				case ts.SyntaxKind.ImportDeclaration:
					const importStmt = (statement as ts.ImportDeclaration);

					if (importStmt.importClause && importStmt.importClause.namedBindings &&
						importStmt.importClause.namedBindings.kind !== ts.SyntaxKind.NamespaceImport) {
						// don't add imports without named (e.g. `import $ from "JQuery"` or `import "./my-module.js";`)
						// don't add namespace imports (`import * as fs`) as available for editing, maybe in the future
						meta.modulePaths.push((importStmt.moduleSpecifier as ts.StringLiteral).text);
					}

				// don't add equals imports (`import url = require("url")`) as available for editing, maybe in the future
				case ts.SyntaxKind.ImportEqualsDeclaration:
					meta.lastIndex = i + 1;
					break;
				default:
					break;
			}
		}

		return meta;
	}

	//#endregion File state

	protected addRouteModuleEntry(
		path: string,
		component: string,
		name: string,
		routerChildren: string,
		importAlias: string,
		routesVariable = DEFAULT_ROUTES_VARIABLE
	) {
		const isRouting: boolean = path.indexOf("routing") >= 0;

		if (isRouting && this.targetSource.text.indexOf(path.slice(0, -3)) > 0) {
			return;
		}

		const moduleName = path.substring(0, path.indexOf("-routing"));
		if (path) {
			const relativePath: string = isRouting ?
				"./" + moduleName + "/" + path.slice(0, -3) : "./" + path + "/" + path;

			this.requestImport(relativePath, importAlias);
		}

		// https://github.com/Microsoft/TypeScript/issues/14419#issuecomment-307256171
		const transformer: ts.TransformerFactory<ts.Node> = <T extends ts.Node>(context: ts.TransformationContext) =>
			(rootNode: T) => {
				// the visitor that should be used when adding routes to the main route array
				const conditionalVisitor: ts.Visitor = (node: ts.Node): ts.Node => {
					if (node.kind === ts.SyntaxKind.ArrayLiteralExpression) {
						const newObject = this.createRouteEntry(path, component, name, routerChildren);
						const array = (node as ts.ArrayLiteralExpression);
						this.createdStringLiterals.push(path, name);
						const notFoundWildCard = ".*";
						const nodes = ts.visitNodes(array.elements, visitor);
						const errorRouteNode = nodes.filter(element => element.getText().includes(notFoundWildCard))[0];
						let resultNodes = null;
						if (errorRouteNode) {
							resultNodes = nodes
								.slice(0, nodes.indexOf(errorRouteNode))
								.concat(newObject)
								.concat(errorRouteNode);
						} else {
							resultNodes = nodes
								.concat(newObject);
						}

						const elements = ts.factory.createNodeArray([
							...resultNodes
						]);

						return ts.factory.updateArrayLiteralExpression(array, elements);
					} else {
						return ts.visitEachChild(node, conditionalVisitor, context);
					}
				};

				let visitCondition;

				if (!isRouting) {
					visitCondition = (node: ts.Node): boolean => {
						return node.kind === ts.SyntaxKind.VariableDeclaration &&
							(node as ts.VariableDeclaration).name.getText() === routesVariable &&
							(node as ts.VariableDeclaration).type.getText() === "Route[]";
					};
				} else {
					visitCondition = (node: ts.Node): boolean => {
						return undefined;
					};
				}

				const visitor: ts.Visitor = this.createVisitor(conditionalVisitor, visitCondition, context);
				context.enableSubstitution(ts.SyntaxKind.ClassDeclaration);
				return ts.visitNode(rootNode, visitor);
			};

		this.targetSource = ts.transform(this.targetSource, [transformer], {
			pretty: true // oh well..
		}).transformed[0] as ts.SourceFile;

		this.finalize();
	}

	protected requestImport(modulePath: string, routerAlias: string) {
		const existing = this.requestedImports.find(x => x.from === modulePath);
		if (!existing) {
			// new imports, check if already exists in file
			this.requestedImports.push({
				as: routerAlias,
				from: modulePath,
				edit: this.importsMeta.modulePaths.indexOf(modulePath) !== -1
			});
		} else {
			return;
		}
	}

	/** Add `import` statements not previously found in the file  */
	protected addNewFileImports() {
		const newImports = this.requestedImports.filter(x => !x.edit);
		if (!newImports.length) {
			return;
		}

		const newStatements = ts.factory.createNodeArray([
			...this.targetSource.statements.slice(0, this.importsMeta.lastIndex),
			...newImports.map(x => this.createIdentifierImport(x.from, x.as)),
			...this.targetSource.statements.slice(this.importsMeta.lastIndex)
		]);
		newImports.forEach(x => this.createdStringLiterals.push(x.from));

		this.targetSource = ts.factory.updateSourceFile(this.targetSource, newStatements);
	}

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

	//#region Formatting

	/** Format a TS source file, very TBD */
	protected formatFile(filePath: string) {
		// formatting via LanguageService https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API
		// https://github.com/Microsoft/TypeScript/issues/1651

		let text = this.fileSystem.readFile(filePath);
		// create the language service files
		const services = ts.createLanguageService(this.getLanguageHost(filePath), ts.createDocumentRegistry());

		this.readFormatConfigs();
		const textChanges = services.getFormattingEditsForDocument(filePath, this.getFormattingOptions());
		text = this.applyChanges(text, textChanges);

		if (this.formatOptions.singleQuotes) {
			for (const str of this.createdStringLiterals) {
				// there shouldn't be duplicate strings of these
				text = text.replace(`"${str}"`, `'${str}'`);
			}
		}

		this.fileSystem.writeFile(filePath, text);
	}

	/**  Try and parse formatting from project `.editorconfig` / `tslint.json` */
	protected readFormatConfigs() {
		if (this.fileSystem.fileExists(".editorconfig")) {
			// very basic parsing support
			const text = this.fileSystem.readFile(".editorconfig", "utf-8");
			const options = text
				.replace(/\s*[#;].*([\r\n])/g, "$1") //remove comments
				.replace(/\[(?!\*\]|\*.ts).+\][^\[]+/g, "") // leave [*]/[*.ts] sections
				.split(/\r\n|\r|\n/)
				.reduce((obj, x) => {
					if (x.indexOf("=") !== -1) {
						const pair = x.split("=");
						obj[pair[0].trim()] = pair[1].trim();
					}
					return obj;
				}, {});

			this.formatOptions.spaces = options["indent_style"] === "space";
			if (options["indent_size"]) {
				this.formatOptions.indentSize = parseInt(options["indent_size"], 10) || this.formatOptions.indentSize;
			}

			if (options["quote_type"]) {
				this.formatOptions.singleQuotes = options["quote_type"] === "single";
			}
		}
		if (this.fileSystem.fileExists("tslint.json")) {
			// tslint prio - overrides other settings
			const options = JSON.parse(this.fileSystem.readFile("tslint.json", "utf-8"));
			if (options.rules && options.rules.indent && options.rules.indent[0]) {
				this.formatOptions.spaces = options.rules.indent[1] === "spaces";
				if (options.rules.indent[2]) {
					this.formatOptions.indentSize = parseInt(options.rules.indent[2], 10);
				}
			}
			if (options.rules && options.rules.quotemark && options.rules.quotemark[0]) {
				this.formatOptions.singleQuotes = options.rules.quotemark.indexOf("single") !== -1;
			}
		}
	}

	/**
	 * Apply formatting changes (position based) in reverse
	 * from https://github.com/Microsoft/TypeScript/issues/1651#issuecomment-69877863
	 */
	private applyChanges(orig: string, changes: ts.TextChange[]): string {
		let result = orig;
		for (let i = changes.length - 1; i >= 0; i--) {
			const change = changes[i];
			const head = result.slice(0, change.span.start);
			const tail = result.slice(change.span.start + change.span.length);
			result = head + change.newText + tail;
		}
		return result;
	}

	/** Return source file formatting options */
	private getFormattingOptions(): ts.FormatCodeSettings {
		const formatOptions: ts.FormatCodeSettings = {
			// tslint:disable:object-literal-sort-keys
			indentSize: this.formatOptions.indentSize,
			tabSize: 4,
			newLineCharacter: ts.sys.newLine,
			convertTabsToSpaces: this.formatOptions.spaces,
			indentStyle: ts.IndentStyle.Smart,
			insertSpaceAfterCommaDelimiter: true,
			insertSpaceAfterSemicolonInForStatements: true,
			insertSpaceBeforeAndAfterBinaryOperators: true,
			insertSpaceAfterKeywordsInControlFlowStatements: true,
			insertSpaceAfterTypeAssertion: true
			// tslint:enable:object-literal-sort-keys
		};

		return formatOptions;
	}

	/** Get language service host, sloppily */
	private getLanguageHost(filePath: string): ts.LanguageServiceHost {
		const files = {};
		files[filePath] = { version: 0 };
		// create the language service host to allow the LS to communicate with the host
		const servicesHost: ts.LanguageServiceHost = {
			getCompilationSettings: () => ({}),
			getScriptFileNames: () => Object.keys(files),
			getScriptVersion: fileName => files[fileName] && files[fileName].version.toString(),
			getScriptSnapshot: fileName => {
				if (!this.fileSystem.fileExists(fileName)) {
					return undefined;
				}
				return ts.ScriptSnapshot.fromString(this.fileSystem.readFile(fileName));
			},
			getCurrentDirectory: () => process.cwd(),
			getDefaultLibFileName: options => ts.getDefaultLibFilePath(options),
			readDirectory: ts.sys.readDirectory,
			readFile: ts.sys.readFile,
			fileExists: ts.sys.fileExists
		};
		return servicesHost;
	}

	//#endregion Formatting

	/** Convert a string or string array union to array. Splits strings as comma delimited */
	private asArray(value: string | string[], variables: { [key: string]: string }): string[] {
		let result: string[] = [];
		if (value) {
			result = typeof value === "string" ? value.split(/\s*,\s*/) : value;
			result = result.map(x => Util.applyConfigTransformation(x, variables));
		}
		return result;
	}

	private createVisitor(
		conditionalVisitor: ts.Visitor,
		visitCondition: (node: ts.Node) => boolean,
		nodeContext: ts.TransformationContext
	): ts.Visitor {
		return function visitor(node: ts.Node): ts.Node {
			if (visitCondition(node)) {
				node = ts.visitEachChild(node, conditionalVisitor, nodeContext);
			} else {
				node = ts.visitEachChild(node, visitor, nodeContext);
			}
			return node;
		};
	}

	private createRouteEntry(
		filePath: string,
		className: string,
		linkText: string,
		routerAlias: string
	): ts.ObjectLiteralExpression {
		const routePath = ts.factory.createPropertyAssignment("path", ts.factory.createStringLiteral(filePath, true));
		const routeComponent =
			ts.factory.createPropertyAssignment("component", ts.factory.createStringLiteral(className, true));
		const routeData = ts.factory.createPropertyAssignment("name", ts.factory.createStringLiteral(linkText, true));
		if (routerAlias) {
			const childrenData = ts.factory.createPropertyAssignment("children", ts.factory.createIdentifier(routerAlias));
			return ts.factory.createObjectLiteralExpression([routePath, routeComponent, routeData, childrenData]);
		} else {
			return ts.factory.createObjectLiteralExpression([routePath, routeComponent, routeData]);
		}
	}
}
