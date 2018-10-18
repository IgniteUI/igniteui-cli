import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";
import { Util } from "../Util";

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
		const namedImport = ts.createNamedImports(
			identifierNames.map(x => ts.createImportSpecifier(undefined, ts.createIdentifier(x)))
		);
		const importClause = ts.createImportClause(undefined, namedImport);
		const importDeclaration = ts.createImportDeclaration(
			undefined,
			undefined,
			importClause,
			ts.createLiteral(importPath));
		return importDeclaration;
	}

	/**
	 * Creates a `ts.Expression` for an identifier with optional method call
	 * @param x Identifier text
	 * @param call Method to call, creating `x.call()`
	 */
	public static createIdentifier(x: string, call?: string) {
		if (call) {
			return ts.createCall(
				ts.createPropertyAccess(
					ts.createIdentifier(x),
					call
				),
				/*typeArgs*/undefined,
				/*argsArgs*/[]
			);
		} else {
			return ts.createIdentifier(x);
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
		if (x.kind === ts.SyntaxKind.CallExpression) {
			const prop = ((x as ts.CallExpression).expression as ts.PropertyAccessExpression);
			//pluck identifier from expression.name
			x = prop.expression;
		}
		return (x as ts.Identifier).text;
	}

	//#endregion Node manipulation utils

	//#region Utility functions

	/**
	 * Generate relative path from target file to another
	 * Adds "./" to avoid node module resolution conflicts
	 * @param targetPath Target file (root path)
	 * @param filePath File to generate relative path to
	 * @param posix Require path in posix style (/-separated)
	 * @param removeExt Strip file extension
	 */
	public static relativePath(targetPath: string, filePath: string, posix: boolean, removeExt = true): string {
		if (!targetPath.endsWith(path.win32.sep) && !targetPath.endsWith(path.posix.sep)) {
			// path.relative splits by fragments, must be dirname w/ trailing to work both down and up
			targetPath = path.win32.dirname(targetPath) + path.sep;
		}

		// use win32 api as it handles both formats
		let relativePath: string = path.win32.relative(targetPath, filePath);

		if (removeExt) {
			relativePath = relativePath.replace(path.win32.extname(relativePath), "");
		}

		if (posix) {
			relativePath = path.posix.join(...relativePath.split(path.win32.sep));
			relativePath = relativePath.startsWith(".") ? relativePath : "./" + relativePath;
		} else {
			relativePath = path.win32.join(...relativePath.split(path.win32.sep));
			relativePath = relativePath.startsWith(".") ? relativePath : ".\\" + relativePath;
		}

		return relativePath;
	}

	/**
	 * Returns an source file, adds new line placeholders as the TS parser won't add `SyntaxKind.NewLineTrivia` to the AST.
	 * @param filePath Path of file to read
	 */
	public static getFileSource(filePath: string): ts.SourceFile {
		let targetFile = fs.readFileSync(filePath).toString();
		targetFile = targetFile.replace(/(\r?\n)(\r?\n)/g, `$1${this.newLinePlaceHolder}$2`);
		const targetSource = ts.createSourceFile(filePath, targetFile, ts.ScriptTarget.Latest, true);
		return targetSource;
	}

	/**
	 * Prints source, removes new line placeholders and saves the output in a target file
	 * @param filePath File path
	 * @param source Source AST to print
	 */
	public static saveFile(filePath: string, source: ts.SourceFile) {
		// https://github.com/Microsoft/TypeScript/issues/10786#issuecomment-288987738
		const printer: ts.Printer = ts.createPrinter();
		let text = printer.printFile(source);
		text = text.replace(
			new RegExp(`(\r?\n)\\s*?${Util.escapeRegExp(this.newLinePlaceHolder)}(\r?\n)`, "g"),
			`$1$2`
		);
		fs.writeFileSync(filePath, text);
	}

	//#endregion Utility functions
}
