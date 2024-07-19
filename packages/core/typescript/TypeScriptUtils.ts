// tslint:disable-next-line:no-implicit-dependencies
import * as ts from "typescript";
import { FS_TOKEN, IFileSystem } from "../types/FileSystem";
import { App } from "../util";
import { Util } from "../util/Util";
import { EOL } from "os";

export class TypeScriptUtils {

	public static newLinePlaceHolder = "//I keep the new line";

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
