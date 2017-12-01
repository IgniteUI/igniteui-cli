import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";
import { Util } from "../Util";

export class TypeScriptFileUpdate {
	// https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API for general source parsing
	// http://blog.scottlogic.com/2017/05/02/typescript-compiler-api-revisited.html
	// for AST transformation API List: https://github.com/Microsoft/TypeScript/pull/13940

	/**
	 * Import class and add a new entry to the route variable of the routing module.
	 * @param targetPath Path of the file to import into
	 * @param filePath Path to the file to import
	 * @param linkPath Routing path to add
	 * @param linkName Name of the route to add
	 */
	public static addRoute(targetPath: string, filePath: string, linkPath: string, linkName: string) {
		let className: string;
		const relativePath: string = this.relativePath(targetPath, filePath, true, true);

		/* TODO: update: src/app/app-routing.module.ts */
			// 1) import the component class name,
		const fileSource = this.getFileSource(filePath);
		const targetSource = this.getFileSource(targetPath);

		className = this.getClassName(fileSource.getChildren());
		const importDeclaration = this.createIdentifierImport(className, relativePath);

		// https://github.com/Microsoft/TypeScript/issues/14419#issuecomment-307256171
		const transformer: ts.TransformerFactory<ts.Node> = <T extends ts.Node>(context: ts.TransformationContext) =>
			(rootNode: T) => {
			function visitor(node: ts.Node): ts.Node {
				if (node.kind === ts.SyntaxKind.SourceFile) {
					// visit just the source file main array (second visit)
					return visitSourceFile(node as ts.SourceFile);
				} else if (node.kind === ts.SyntaxKind.VariableDeclaration &&
					(node as ts.VariableDeclaration).name.getText() === "routes" &&
					(node as ts.VariableDeclaration).type.getText() === "Routes") {
					// found routes variable
					node = ts.visitEachChild(node, visitRoutesVariable, context);
				} else {
					// if something can be at the root dig down?
					node = ts.visitEachChild(node, visitor, context);
				}
				return node;
			}
			function visitRoutesVariable(node: ts.Node): ts.Node {
				if (node.kind === ts.SyntaxKind.ArrayLiteralExpression) {
					const array = (node as ts.ArrayLiteralExpression);
					//elements.concat(ts.visitNodes(array.elements, visitor));
					const routePath = ts.createPropertyAssignment("path", ts.createLiteral(linkPath));
					const routeComponent = ts.createPropertyAssignment("component", ts.createIdentifier(className));
					const routeDataInner =  ts.createPropertyAssignment("text", ts.createLiteral(linkName));
					const routeData = ts.createPropertyAssignment("data", ts.createObjectLiteral([routeDataInner]));
					const newObject = ts.createObjectLiteral([routePath, routeComponent, routeData]);

					const elements = ts.createNodeArray([
						...ts.visitNodes(array.elements, visitor),
						newObject
					]);

					//elements.push(newObject);
					return ts.updateArrayLiteral(array, elements);
				} else {
					node = ts.visitEachChild(node, visitRoutesVariable, context);
				}
				return node;
			}
			function visitSourceFile(node: ts.SourceFile) {
				let lastIndex = 0;
				let newStatements: ts.NodeArray<ts.Statement>; // because the visited ts.NodeArray is readonly

				const statements = ts.visitNodes(node.statements, visitor);
				for (let i = 0; i < statements.length; i++) {
					if (statements[i].kind === ts.SyntaxKind.ImportDeclaration ||
						statements[i].kind === ts.SyntaxKind.ImportEqualsDeclaration ||
						statements[i].kind === ts.SyntaxKind.NamespaceImport) {
						lastIndex = i + 1;
					}
				}
				/* TODO: Check for existing? */
				newStatements = ts.createNodeArray([
					...statements.slice(0, lastIndex),
					importDeclaration,
					...statements.slice(lastIndex)
				]);
				//statements.push(importDeclaration);
				//ts.createNode(ts.SyntaxKind.NewLineTrivia),
				return ts.updateSourceFileNode(node, newStatements);
			}
			context.enableSubstitution(ts.SyntaxKind.ClassDeclaration);
			return ts.visitNode(rootNode, visitor);
		};

		const result = ts.transform(targetSource, [ transformer ], {
			pretty: true // oh well..
		}).transformed[0] as ts.SourceFile;
		this.saveFile(targetPath, result);
	}

	/**
	 * Import class and add it to `NgModule` declarations.
	 * Creates `declarations` array if one is not present already.
	 * @param targetPath Path of the file to import into
	 * @param filePath Path to the file to import
	 */
	public static addDeclaration(targetPath: string, filePath: string) {
		let className: string;
		const relativePath: string = this.relativePath(targetPath, filePath, true, true);

		const fileSource = this.getFileSource(filePath);
		const targetSource = this.getFileSource(targetPath);

		className = this.getClassName(fileSource.getChildren());
		const importDeclaration = this.createIdentifierImport(className, relativePath);

		// https://github.com/Microsoft/TypeScript/issues/14419#issuecomment-307256171
		const transformer: ts.TransformerFactory<ts.Node> = <T extends ts.Node>(context: ts.TransformationContext) =>
			(rootNode: T) => {
			function visitor(node: ts.Node): ts.Node {
				if (node.kind === ts.SyntaxKind.SourceFile) {
					// visit just the source file main array (second visit)
					return visitSourceFile(node as ts.SourceFile);
				} else if (node.kind === ts.SyntaxKind.CallExpression &&
					node.parent.kind === ts.SyntaxKind.Decorator &&
					(node as ts.CallExpression).expression.getText() === "NgModule") {
					// found module declaration
					// expression: NgModule(arguments)
					node = ts.visitEachChild(node, visitNgModule, context);
				} else {
					// if something can be at the root dig down?
					node = ts.visitEachChild(node, visitor, context);
				}
				return node;
			}
			function visitNgModule(node: ts.Node): ts.Node {
				if (node.kind === ts.SyntaxKind.ObjectLiteralExpression) {
					const obj = (node as ts.ObjectLiteralExpression);
					const objProperties = ts.visitNodes(obj.properties, visitor);
					const hasDeclarations = objProperties.find(x => x.name.getText() === "declarations");

					if (hasDeclarations) {
						// has declaration array, continue:
						node = ts.visitEachChild(node, visitNgModule, context);
					} else {
						// create declaration array, TODO: multiple?
						const declarations = ts.createArrayLiteral([ ts.createIdentifier(className) ]);
						const declaration = ts.createPropertyAssignment("declarations", declarations);
						const properties = [
							...objProperties,
							declaration
						];
						return ts.updateObjectLiteral(obj, properties);
					}
				} else if (node.kind === ts.SyntaxKind.ArrayLiteralExpression &&
					node.parent.kind === ts.SyntaxKind.PropertyAssignment &&
					(node.parent as ts.PropertyAssignment).name.getText() === "declarations") {
						const initializer = (node as ts.ArrayLiteralExpression);

						const elements = ts.createNodeArray([
							...ts.visitNodes(initializer.elements, visitor),
							ts.createIdentifier(className)
						]);

						return ts.updateArrayLiteral(initializer, elements);
				} else {
					node = ts.visitEachChild(node, visitNgModule, context);
				}
				return node;
			}
			function visitSourceFile(node: ts.SourceFile) {
				let lastIndex = 0;
				let newStatements: ts.NodeArray<ts.Statement>; // because the visited ts.NodeArray is readonly

				const statements = ts.visitNodes(node.statements, visitor);
				for (let i = 0; i < statements.length; i++) {
					if (statements[i].kind === ts.SyntaxKind.ImportDeclaration ||
						statements[i].kind === ts.SyntaxKind.ImportEqualsDeclaration ||
						statements[i].kind === ts.SyntaxKind.NamespaceImport) {
						lastIndex = i + 1;
					}
				}
				/* TODO: Check for existing? */
				newStatements = ts.createNodeArray([
					...statements.slice(0, lastIndex),
					importDeclaration,
					...statements.slice(lastIndex)
				]);
				return ts.updateSourceFileNode(node, newStatements);
			}
			return ts.visitNode(rootNode, visitor);
		};

		const result = ts.transform(targetSource, [ transformer ]).transformed[0] as ts.SourceFile;
		this.saveFile(targetPath, result);
	}

	/**
	 * Add identifier to import and add it to `NgModule` imports.
	 * Creates `imports` array if one is not present already.
	 * @param targetPath Path of the file to import into
	 * @param identifier Path to the file to import
	 * @param modulePath Module path of the import
	 */
	public static addIgxImport(targetPath: string, identifiers: string[], modulePath: string) {
		const targetSource = this.getFileSource(targetPath);
		//const importDeclaration = this.createIdentifierImport(identifier, modulePath);

		// https://github.com/Microsoft/TypeScript/issues/14419#issuecomment-307256171
		const transformer: ts.TransformerFactory<ts.Node> = <T extends ts.Node>(context: ts.TransformationContext) =>
		(rootNode: T) => {
		function visitor(node: ts.Node): ts.Node {
			if (node.kind === ts.SyntaxKind.ImportDeclaration
				&& ((node as ts.ImportDeclaration).moduleSpecifier as ts.StringLiteral).text === modulePath
			) {
				// visit just the source file main array (second visit)
				return visitImport(node as ts.ImportDeclaration);
			} else if (node.kind === ts.SyntaxKind.CallExpression &&
				node.parent.kind === ts.SyntaxKind.Decorator &&
				(node as ts.CallExpression).expression.getText() === "NgModule") {
				// found module declaration
				// expression: NgModule(arguments)
				node = ts.visitEachChild(node, visitNgModule, context);
			} else {
				node = ts.visitEachChild(node, visitor, context);
			}
			return node;
		}
		function visitNgModule(node: ts.Node): ts.Node {
			if (node.kind === ts.SyntaxKind.ObjectLiteralExpression) {
				const obj = (node as ts.ObjectLiteralExpression);
				const objProperties = ts.visitNodes(obj.properties, visitor);
				const hasDeclarations = objProperties.find(x => x.name.getText() === "imports");

				if (hasDeclarations) {
					// has declaration array, continue:
					node = ts.visitEachChild(node, visitNgModule, context);
				} else {
					// create declaration array, TODO: multiple?
					const imports = ts.createArrayLiteral(identifiers.map(x => ts.createIdentifier(x)));
					const declaration = ts.createPropertyAssignment("imports", imports);
					const properties = [
						...objProperties,
						declaration
					];
					return ts.updateObjectLiteral(obj, properties);
				}
			} else if (node.kind === ts.SyntaxKind.ArrayLiteralExpression &&
				node.parent.kind === ts.SyntaxKind.PropertyAssignment &&
				(node.parent as ts.PropertyAssignment).name.getText() === "imports") {
					const initializer = (node as ts.ArrayLiteralExpression);

					const elements = ts.createNodeArray([
						...ts.visitNodes(initializer.elements, visitor),
						...identifiers.map(x => ts.createIdentifier(x))
					]);

					return ts.updateArrayLiteral(initializer, elements);
			} else {
				node = ts.visitEachChild(node, visitNgModule, context);
			}
			return node;
		}
		function visitImport(node: ts.Node) {
			if (node.kind === ts.SyntaxKind.NamedImports) {
				const namedImports = node as ts.NamedImports;
				const existing = ts.visitNodes(namedImports.elements, visitor);
				node = ts.updateNamedImports(namedImports, [
					...existing,
					...identifiers.map(x => ts.createImportSpecifier(undefined,	ts.createIdentifier(x)))
				]);
			} else {
				node = ts.visitEachChild(node, visitImport, context);
			}
			return node;
		}
		return ts.visitNode(rootNode, visitor);
	};

		const result = ts.transform(targetSource, [ transformer ]).transformed[0] as ts.SourceFile;
		this.saveFile(targetPath, result);
	}

	/**
	 * Checks based on https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#using-the-type-checker
	 * @param nodes Source nodes to iterate
	 */
	public static getClassName(nodes: ts.Node[]): string {
		for (const node of nodes) {
			if (node.kind === ts.SyntaxKind.ClassDeclaration && this.isNodeExported(node)) {
				const identifier = (node as ts.ClassDeclaration).name;
				return identifier.text;
			} else if (node.kind === ts.SyntaxKind.ModuleDeclaration ||
				node.kind === ts.SyntaxKind.SyntaxList) {
				// selective children check; checking getChildCount() throws
				const res = this.getClassName(node.getChildren());
				if (res !== null) {
					// stop and return
					return res;
				}
			}
		}
		return null;
	}

	/**
	 * Looks the last import node and inserts the new one after
	 * https://stackoverflow.com/a/44364508
	 * @param nodes
	 * @param importDeclaration
	 */
	private static insertImportNode(nodes: ts.Node[], importDeclaration: ts.ImportDeclaration): string {
		for (const node of nodes) {
			if (node.kind === ts.SyntaxKind.ImportClause ||
				node.kind === ts.SyntaxKind.ImportDeclaration ||
				node.kind === ts.SyntaxKind.ImportEqualsDeclaration) {
				// ts.visitNode(node, x => x, null, x => ts.createNodeArray(x.concat(importDeclaration)));
			} else if (node.kind === ts.SyntaxKind.ModuleDeclaration ||
				node.kind === ts.SyntaxKind.SyntaxList) {
				// selective children visit; checking getChildCount() throws
				this.insertImportNode(node.getChildren(), importDeclaration);
			}
		}
		return null;
	}

	//#region Node manipulation utils

	/**
	 * Create a node for named import (like `import { ${className} } from "${filePath}"`)
	 * @param identifierName Name of the identifier (class, variable)
	 * @param importPath Path to import from
	 */
	private static createIdentifierImport(identifierName: string, importPath: string): ts.ImportDeclaration {
		// started from createImportDeclaration, now we here...
		const namedImport = ts.createNamedImports([ts.createImportSpecifier(undefined,
			ts.createIdentifier(identifierName))]);
		const importClause = ts.createImportClause(undefined, namedImport);
		const importDeclaration = ts.createImportDeclaration(
			undefined,
			undefined,
			importClause,
			ts.createLiteral(importPath));
		return importDeclaration;
	}

	/** True if this is visible outside this file, false otherwise */
	private static isNodeExported(node: ts.Node): boolean {
		return (node.flags & ts.NodeFlags.ExportContext) !== 0 ||
			(node.parent && node.parent.kind === ts.SyntaxKind.SourceFile);
	}

	//#endregion

	//#region Utility functions

	/**
	 * Generate relative path from target file to another
	 * // TODO: Maybe move to Util?
	 * @param targetPath Target file (root path)
	 * @param filePath File to generate relative path to
	 * @param posix Require path in posix style (/-separated)
	 * @param removeExt Strip file extension
	 */
	private static relativePath(targetPath: string, filePath: string, posix: boolean, removeExt: boolean): string {
		let relativePath: string = path.relative(path.dirname(targetPath), filePath);
		if (posix) {
			relativePath = path.posix.join(...relativePath.split(path.sep));
		}
		if (removeExt) {
			relativePath = relativePath.replace(path.extname(relativePath), "");
		}
		return "./" + relativePath;
	}

	// tslint:disable-next-line:member-ordering
	protected static newLinePlaceHolder = "//I keep the new line";

	/**
	 * Returns an source file, adds new line placeholders as the TS parser won't add `SyntaxKind.NewLineTrivia` to the AST.
	 * @param filePath Path of file to read
	 */
	private static getFileSource(filePath: string): ts.SourceFile {
		let targetFile = fs.readFileSync(filePath).toString();
		targetFile = targetFile.replace(/\r\n\r\n/g, `\r\n${this.newLinePlaceHolder}\r\n`);
		const targetSource = ts.createSourceFile(filePath, targetFile, ts.ScriptTarget.Latest, true);
		return targetSource;
	}

	/**
	 * Prints source, removes new line placeholders and saves the output in a target file
	 * @param filePath File path
	 * @param source Source AST to print
	 * @returns Returns the final written source
	 */
	private static saveFile(filePath: string, source: ts.SourceFile) {
		// https://github.com/Microsoft/TypeScript/issues/10786#issuecomment-288987738
		const printer: ts.Printer = ts.createPrinter();
		let text = printer.printFile(source);
		text = text.replace(
			new RegExp(Util.escapeRegExp(`\r\n${this.newLinePlaceHolder}\r\n`), "g"),
			`\r\n\r\n`
		);
		fs.writeFileSync(filePath, text);
		text = this.formatFile(filePath, text);
		fs.writeFileSync(filePath, text);
	}

	//#endregion

	//#region Formatting

	/** Format a TS source file, very TBD */
	private static formatFile(filePath: string, text: string): string {
		// formatting via LanguageService https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API
		// https://github.com/Microsoft/TypeScript/issues/1651

		// create the language service files
		const services = ts.createLanguageService(this.getLanguageHost(filePath), ts.createDocumentRegistry());

		const textChanges = services.getFormattingEditsForDocument(filePath, this.getFormattingOptions());

		return this.applyChanges(text, textChanges);
	}

	/**
	 * Apply formatting changes (position based) in reverse
	 * from https://github.com/Microsoft/TypeScript/issues/1651#issuecomment-69877863
	 */
	private static applyChanges(orig: string, changes: ts.TextChange[]): string {
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
	private static getFormattingOptions(): ts.FormatCodeSettings {
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
	private static getLanguageHost(filePath: string): ts.LanguageServiceHost {
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
