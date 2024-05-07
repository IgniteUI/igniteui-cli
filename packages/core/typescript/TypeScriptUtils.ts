// tslint:disable-next-line:no-implicit-dependencies
import * as ts from "typescript";
import { FS_TOKEN, IFileSystem } from "../types/FileSystem";
import { App } from "../util";
import { Util } from "../util/Util";
import { EOL } from "os";

export class TypeScriptUtils {

	public static newLinePlaceHolder = "//I keep the new line";

	//#region Node manipulation utils

	/**
	 * Create a node for named import (like `import { ${className} } from "${filePath}"`)
	 * @param identifierName Name of the identifier (class, variable)
	 * @param importPath Path to import from
	 */
	public static createIdentifierImport(identifierNames: string[], importPath: string): ts.ImportDeclaration {
		// started from createImportDeclaration, now we here...
		const namedImport = ts.factory.createNamedImports(
			identifierNames.map(x => ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier(x)))
		);
		const importClause = ts.factory.createImportClause(false, undefined, namedImport);
		const importDeclaration = ts.factory.createImportDeclaration(
			undefined,
			importClause,
			ts.factory.createStringLiteral(importPath),
			undefined);
		return importDeclaration;
	}

	/**
	 * Creates a `ts.Expression` for an identifier with optional method call
	 * @param x Identifier text
	 * @param call Method to call, creating `x.call()`
	 */
	public static createIdentifier(x: string, call?: string) {
		if (call) {
			return ts.factory.createCallExpression(
				ts.factory.createPropertyAccessExpression(
					ts.factory.createIdentifier(x),
					call
				),
				/*typeArgs*/undefined,
				/*argsArgs*/[]
			);
		} else {
			return ts.factory.createIdentifier(x);
		}
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

	/** True if this is visible outside this file, false otherwise */
	public static isNodeExported(node: ts.Node): boolean {
		return (node.flags & ts.NodeFlags.ExportContext) !== 0 ||
			(node.parent && node.parent.kind === ts.SyntaxKind.SourceFile);
	}

	/**
	 * Returns node identifier name. Either direct `ts.Identifier` equivalent or simple `ts.CallExpression` supported.
	 * Calls with single property access will return the first identifier name (eg. `returnText.propCall()`)
	 * @param x Node to extract identifier text from.
	 */
	public static getIdentifierName(x: ts.Node): string {
		if (ts.isCallExpression(x)) {
			const expression = x.expression;
			if (ts.isPropertyAccessExpression(expression)) {
				//pluck identifier from expression.name
				x = expression.expression;
			}
			if (ts.isIdentifier(expression)) {
				x = expression;
			}
		}
		return (x as ts.Identifier).text;
	}

	//#endregion Node manipulation utils

	//#region Utility functions
	/**
	 * Returns an source file, adds new line placeholders as the TS parser won't add `SyntaxKind.NewLineTrivia` to the AST.
	 * @param filePath Path of file to read
	 */
	public static getFileSource(filePath: string, useJSX: boolean = false): ts.SourceFile {
		const fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
		let targetFile = fileSystem.readFile(filePath);
		targetFile = targetFile.replace(/(\r?\n)(\r?\n)/g, `$1${this.newLinePlaceHolder}$2`);
		const targetSource = this.createSourceFile(filePath, targetFile, ts.ScriptTarget.Latest, true, useJSX);
		return targetSource;
	}

	/**
	 * Retrieves the source text, removes new line placeholders
	 * @param source The source AST to print
	 */
	public static getSourceText(source: ts.SourceFile): string {
		const printer = this.createPrinter();
		let text = printer.printFile(source);
		text = text.replace(
			new RegExp(`(\r?\n)\\s*?${Util.escapeRegExp(this.newLinePlaceHolder)}(\r?\n)`, "g"),
			`$1$2`
		);

		return text;
	}

	public static createSourceFile(filePath: string, text: string,
		scriptTarget: ts.ScriptTarget, setParentNodes?: boolean, useJSX: boolean = false): ts.SourceFile {
		return ts.createSourceFile(
			filePath,
			text,
			scriptTarget,
			setParentNodes,
			useJSX ? ts.ScriptKind.JS : ts.ScriptKind.TS);
	}

	public static createPrinter(): ts.Printer {
		const options: ts.PrinterOptions = {
			newLine: EOL === "\n" ? ts.NewLineKind.LineFeed : ts.NewLineKind.CarriageReturnLineFeed
		};
		return ts.createPrinter(options);
	}

	/**
	 * Saves the source to a target file
	 * @param filePath File path
	 * @param source Source AST to print
	 */
	public static saveFile(filePath: string, sourceFile: ts.SourceFile);
	public static saveFile(filePath: string, content: string);
	public static saveFile(filePath: string, sourceOrContent: ts.SourceFile | string) {
		const fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
		// https://github.com/Microsoft/TypeScript/issues/10786#issuecomment-288987738
		if (typeof sourceOrContent === "object" && ts.isSourceFile(sourceOrContent)) {
			const text = this.getSourceText(sourceOrContent);
			fileSystem.writeFile(filePath, text);
			return;
		}

		fileSystem.writeFile(filePath, sourceOrContent);
	}

	//#endregion Utility functions
}
