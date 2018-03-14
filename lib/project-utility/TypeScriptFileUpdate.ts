import * as fs from "fs";
import * as ts from "typescript";
import { Util } from "../Util";
import { TypeScriptUtils as TsUtils } from "./TypeScriptUtils";

/**
 * Apply various updates to typescript files using AST
 */
export class TypeScriptFileUpdate {
	// https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API for general source parsing
	// http://blog.scottlogic.com/2017/05/02/typescript-compiler-api-revisited.html
	// for AST transformation API List: https://github.com/Microsoft/TypeScript/pull/13940

	private targetSource: ts.SourceFile;
	private importsMeta: { lastIndex: number, modulePaths: string[] };

	private requestedImports: Array<{ from: string, imports: string[], edit: boolean }>;
	private ngMetaEdits: {
		declarations: string[],
		imports: Array<{ name: string, root: boolean }>,
		providers: string[]
	};

	/** Create updates for a file. Use `add<X>` methods to add transformations and `finalize` to apply and save them. */
	constructor(private targetPath: string) {
		this.targetSource = TsUtils.getFileSource(this.targetPath);
		this.initState();
	}

	/** Applies accumulated transforms, saves and formats the file */
	public finalize() {
		const transforms = [];
		// walk AST for modifications.
		if (this.requestedImports.filter(x => x.edit).length) {
			transforms.push(this.importsTransformer);
		}
		if (Object.keys(this.ngMetaEdits).filter(x => this.ngMetaEdits[x].length).length) {
			transforms.push(this.ngModuleTransformer);
		}
		if (transforms.length) {
			this.targetSource = ts.transform(this.targetSource, transforms).transformed[0];
		}

		// add new import statements after visitor walks:
		this.addNewFileImports();

		TsUtils.saveFile(this.targetPath, this.targetSource);
		this.formatFile(this.targetPath);
		// reset state in case of further updates
		this.initState();
	}

	/**
	 * Create configuration object for a component and add it to the `Routes` array variable.
	 * Imports the first exported class and finalizes the file update (see `.finalize()`).
	 * @param filePath Path to the component file to import
	 * @param linkPath Routing `path` to add
	 * @param linkText Text of the route to add as `data.text`
	 * @param routesVariable Name of the array variable holding routes
	 */
	public addRoute(filePath: string, linkPath: string, linkText: string, routesVariable = "routes") {
		let className: string;
		const fileSource = TsUtils.getFileSource(filePath);
		const relativePath: string = TsUtils.relativePath(this.targetPath, filePath, true, true);

		className = TsUtils.getClassName(fileSource.getChildren());
		this.requestImport([className], relativePath);

		// https://github.com/Microsoft/TypeScript/issues/14419#issuecomment-307256171
		const transformer: ts.TransformerFactory<ts.Node> = <T extends ts.Node>(context: ts.TransformationContext) =>
			(rootNode: T) => {
			function visitor(node: ts.Node): ts.Node {
				if (node.kind === ts.SyntaxKind.VariableDeclaration &&
					(node as ts.VariableDeclaration).name.getText() === routesVariable &&
					(node as ts.VariableDeclaration).type.getText() === "Routes") {
					// found routes variable
					node = ts.visitEachChild(node, visitRoutesVariable, context);
				} else {
					node = ts.visitEachChild(node, visitor, context);
				}
				return node;
			}
			function visitRoutesVariable(node: ts.Node): ts.Node {
				if (node.kind === ts.SyntaxKind.ArrayLiteralExpression) {
					const array = (node as ts.ArrayLiteralExpression);

					const routePath = ts.createPropertyAssignment("path", ts.createLiteral(linkPath));
					const routeComponent = ts.createPropertyAssignment("component", ts.createIdentifier(className));
					const routeDataInner =  ts.createPropertyAssignment("text", ts.createLiteral(linkText));
					const routeData = ts.createPropertyAssignment("data", ts.createObjectLiteral([routeDataInner]));
					const newObject = ts.createObjectLiteral([routePath, routeComponent, routeData]);

					const elements = ts.createNodeArray([
						...ts.visitNodes(array.elements, visitor),
						newObject
					]);

					return ts.updateArrayLiteral(array, elements);
				} else {
					return ts.visitEachChild(node, visitRoutesVariable, context);
				}
			}
			context.enableSubstitution(ts.SyntaxKind.ClassDeclaration);
			return ts.visitNode(rootNode, visitor);
		};

		this.targetSource = ts.transform(this.targetSource, [ transformer ], {
			pretty: true // oh well..
		}).transformed[0] as ts.SourceFile;

		this.finalize();
	}

	/**
	 * Import class and add it to `NgModule` declarations.
	 * Creates `declarations` array if one is not present already.
	 * @param filePath Path to the file to import
	 */
	public addDeclaration(filePath: string) {
		let className: string;
		const fileSource = TsUtils.getFileSource(filePath);
		const relativePath: string = TsUtils.relativePath(this.targetPath, filePath, true, true);

		className = TsUtils.getClassName(fileSource.getChildren());

		this.addNgModuleMeta({ declare: className, from: relativePath });
	}

	/**
	 * Add a metadata update to the file's `NgModule`. Will also import identifiers.
	 */
	public addNgModuleMeta(dep: TemplateDependency) {
		const copy = {
			declare: this.asArray(dep.declare),
			import: this.asArray(dep.import),
			provide: this.asArray(dep.provide)
		};

		if (dep.from) {
			// request import
			const identifiers = [...copy.import, ...copy.declare, ...copy.provide];
			this.requestImport(identifiers, dep.from);
		}
		const imports = copy.import
			.map(x => ({ name: x, root: dep.root }))
			.filter(x => !this.ngMetaEdits.imports.find(i => i.name === x.name));
		this.ngMetaEdits.imports.push(...imports);

		const declarations = copy.declare
			.filter(x => !this.ngMetaEdits.declarations.find(d => d === x));
		this.ngMetaEdits.declarations.push(...declarations);

		const providers = copy.provide
			.filter(x => !this.ngMetaEdits.providers.find(p => p === x));
		this.ngMetaEdits.providers.push(...providers);
	}

	//#region File state

	/** Initializes existing imports info, [re]sets import and `NgModule` edits */
	protected initState() {
		this.importsMeta = this.loadImportsMeta();
		this.requestedImports = [];
		this.ngMetaEdits = {
			declarations: [],
			imports: [],
			providers: []
		};
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

	/**
	 * Add named imports from a path/package.
	 * @param identifiers Strings to create named import from ("Module" => `import { Module }`)
	 * @param modulePath Module specifier - can be path to file or npm package, etc
	 */
	protected requestImport(identifiers: string[], modulePath: string) {
		const existing = this.requestedImports.find(x => x.from === modulePath);
		if (!existing) {
			// new imports, check if already exists in file
			this.requestedImports.push({
				edit: this.importsMeta.modulePaths.indexOf(modulePath) !== -1,
				from: modulePath, imports: identifiers
			});
		} else {
			const newNamedImports = identifiers.filter(x => existing.imports.indexOf(x) === -1);
			existing.imports.push(...newNamedImports);
		}
	}

	/** Add `import` statements not previously found in the file  */
	protected addNewFileImports() {
		const newImports = this.requestedImports.filter(x => !x.edit);
		if (!newImports.length) {
			return;
		}

		const newStatements = ts.createNodeArray([
			...this.targetSource.statements.slice(0, this.importsMeta.lastIndex),
			...newImports.map(x => TsUtils.createIdentifierImport(x.imports, x.from)),
			...this.targetSource.statements.slice(this.importsMeta.lastIndex)
		]);

		this.targetSource = ts.updateSourceFileNode(this.targetSource, newStatements);
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
			if (node.kind === ts.SyntaxKind.NamedImports) {
				const namedImports = node as ts.NamedImports;
				const moduleSpecifier = (namedImports.parent.parent.moduleSpecifier as ts.StringLiteral).text;

				const existing = ts.visitNodes(namedImports.elements, visitor);
				const alreadyImported = existing.map(x => x.name.text);

				const editImport = editImports.find(x => x.from === moduleSpecifier);
				const newImports = editImport.imports.filter(x => alreadyImported.indexOf(x) === -1);

				node = ts.updateNamedImports(namedImports, [
					...existing,
					...newImports.map(x => ts.createImportSpecifier(undefined,	ts.createIdentifier(x)))
				]);
			} else {
				node = ts.visitEachChild(node, visitImport, context);
			}
			return node;
		}
		return ts.visitNode(rootNode, visitor);
	}

	/** Transformation to apply `this.ngMetaEdits` to `NgModule` metadata properties */
	protected ngModuleTransformer: ts.TransformerFactory<ts.Node> =
	<T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
		const visitor = (node: ts.Node): ts.Node => {
			if (node.kind === ts.SyntaxKind.CallExpression &&
				node.parent.kind === ts.SyntaxKind.Decorator &&
				(node as ts.CallExpression).expression.getText() === "NgModule") {
				// found module declaration
				// expression: NgModule(arguments)
				node = ts.visitEachChild(node, visitNgModule, context);
			} else {
				node = ts.visitEachChild(node, visitor, context);
			}
			return node;
		};
		const visitNgModule = (node: ts.Node): ts.Node => {
			const properties: string[] = []; // "declarations", "imports", "providers"
			for (const key in this.ngMetaEdits) {
				if (this.ngMetaEdits[key].length) {
					properties.push(key);
				}
			}
			if (node.kind === ts.SyntaxKind.ObjectLiteralExpression) {
				let obj = (node as ts.ObjectLiteralExpression);
				//TODO: test node.parent for ts.CallExpression NgModule
				const missingProperties = properties.filter(x => !obj.properties.find(o => o.name.getText() === x));

				// skip visiting if no declaration/imports/providers arrays exist:
				if (missingProperties.length !== properties.length) {
					obj = ts.visitEachChild(node, visitNgModule, context) as ts.ObjectLiteralExpression;
				}

				if (!missingProperties.length) {
					return obj;
				}

				const objProperties = ts.visitNodes(obj.properties, visitor);
				const newProps = [];
				for (const prop of missingProperties) {
					let arrayExpr;
					switch (prop) {
						case "imports":
							const importDeps = this.ngMetaEdits.imports;
							arrayExpr = ts.createArrayLiteral(
								importDeps.map(x =>  TsUtils.createIdentifier(x.name, x.root ? "forRoot" : ""))
							);
							break;
						case "declarations":
						case "providers":
							arrayExpr = ts.createArrayLiteral(
								this.ngMetaEdits[prop].map(x =>  ts.createIdentifier(x))
							);
							break;
					}
					newProps.push(ts.createPropertyAssignment(prop, arrayExpr));
				}

				return ts.updateObjectLiteral(obj, [
					...objProperties,
					...newProps
				]);
			} else if (node.kind === ts.SyntaxKind.ArrayLiteralExpression &&
				node.parent.kind === ts.SyntaxKind.PropertyAssignment &&
				properties.indexOf((node.parent as ts.PropertyAssignment).name.getText()) !== -1) {
					const initializer = (node as ts.ArrayLiteralExpression);
					const props = ts.visitNodes(initializer.elements, visitor);
					const alreadyImported = props.map(x => TsUtils.getIdentifierName(x));
					const prop = properties.find(x => x === (node.parent as ts.PropertyAssignment).name.getText());

					let identifiers = [];
					switch (prop) {
						case "imports":
							identifiers = this.ngMetaEdits.imports
								.filter(x => alreadyImported.indexOf(x.name) === -1)
								.map(x => TsUtils.createIdentifier(x.name, x.root ? "forRoot" : ""));
							break;
						case "declarations":
						case "providers":
							identifiers = this.ngMetaEdits[prop]
								.filter(x => alreadyImported.indexOf(x) === -1)
								.map(x => ts.createIdentifier(x));
							break;
					}
					const elements = ts.createNodeArray([
						...props,
						...identifiers
					]);

					return ts.updateArrayLiteral(initializer, elements);
			} else {
				node = ts.visitEachChild(node, visitNgModule, context);
			}
			return node;
		};
		return ts.visitNode(rootNode, visitor);
	}

	//#endregion ts.TransformerFactory

	/** Convert a string or string array union to array. Splits strings as comma delimited */
	private asArray(value: string | string[]): string[] {
		if (!value) {
			return [];
		}
		return typeof value === "string" ? value.split(/\s*,\s*/) : value;
	}

	//#region Formatting

	/** Format a TS source file, very TBD */
	private formatFile(filePath: string) {
		// formatting via LanguageService https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API
		// https://github.com/Microsoft/TypeScript/issues/1651

		const text = fs.readFileSync(filePath).toString();
		// create the language service files
		const services = ts.createLanguageService(this.getLanguageHost(filePath), ts.createDocumentRegistry());

		const textChanges = services.getFormattingEditsForDocument(filePath, this.getFormattingOptions());
		fs.writeFileSync(filePath, this.applyChanges(text, textChanges));
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
		const formatOptions: ts.FormatCodeSettings  = {
			indentSize: 4,
			tabSize: 4,
			// tslint:disable-next-line:object-literal-sort-keys
			convertTabsToSpaces: false,
			newLineCharacter: ts.sys.newLine,
			indentStyle: ts.IndentStyle.Smart,
			insertSpaceAfterCommaDelimiter: true,
			insertSpaceAfterSemicolonInForStatements: true,
			insertSpaceBeforeAndAfterBinaryOperators: true,
			insertSpaceAfterKeywordsInControlFlowStatements: true,
			insertSpaceAfterTypeAssertion: true
		};
		// TODO: these can be updated from project TSLint or other configuration
		return formatOptions;
	}

	/** Get language service host, sloppily */
	private getLanguageHost(filePath: string): ts.LanguageServiceHost {
		const files = {};
		files[filePath] = { version: 0 };
		// create the language service host to allow the LS to communicate with the host
		const servicesHost: ts.LanguageServiceHost = {
			fileExists: ts.sys.fileExists,
			getCompilationSettings: () => ({}),
			getCurrentDirectory: () => process.cwd(),
			getDefaultLibFileName: options => ts.getDefaultLibFilePath(options),
			getScriptFileNames: () => Object.keys(files),
			getScriptSnapshot: fileName => {
				if (!fs.existsSync(fileName)) {
					return undefined;
				}
				return ts.ScriptSnapshot.fromString(fs.readFileSync(fileName).toString());
			},
			getScriptVersion: fileName => files[fileName] && files[fileName].version.toString(),
			readDirectory: ts.sys.readDirectory,
			readFile: ts.sys.readFile
		};
		return servicesHost;
	}

	//#endregion
}
