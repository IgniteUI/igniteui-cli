import { FsFileSystem, TypeScriptUtils } from "@igniteui/cli-core";
import * as fs from "fs";
import * as ts from "typescript";

describe("Unit - TypeScriptUtils", () => {
	const fileSystem = new FsFileSystem();

	describe("File read/write", () => {
		const newLines = {
			CRLF: "\r\n",
			LF: "\n"
		};
		it("Reads source file and adds new line ([CR]LF) placeholders", async () => {
			const sourceText = [
				`import * as fs from "fs";`,
				``, //new line
				`export class Test {}`
			];
			const expectedText = [
				`import * as fs from "fs";`,
				TypeScriptUtils.newLinePlaceHolder,
				`export class Test {}`
			];

			const readFileSpy = spyOn(fs, "readFileSync");
			spyOn(ts, "createSourceFile").and.callThrough();
			// tslint:disable-next-line:forin
			for (const key in newLines) {
				readFileSpy.and.returnValue(sourceText.join(newLines[key]));
				const result = TypeScriptUtils.getFileSource(`test/file${key}.ts`);
				expect(fs.readFileSync).toHaveBeenCalledWith(`test/file${key}.ts`);
				expect(ts.createSourceFile).toHaveBeenCalledWith(
					`test/file${key}.ts`,
					expectedText.join(newLines[key]),
					ts.ScriptTarget.Latest, true
				);
			}

		});

		it("Save source file and removes ([CR]LF) placeholders", async () => {
			const sourceText = [
				`import * as fs from "fs";`,
				TypeScriptUtils.newLinePlaceHolder,
				`export class Test {}`
			];
			const expectedText = [
				`import * as fs from "fs";`,
				``, //new line
				`export class Test {}`
			];

			spyOn(fs, "writeFileSync");
			const printerSpy = spyOn(ts, "createPrinter");

			// tslint:disable-next-line:forin
			for (const key in newLines) {
				const printer = jasmine.createSpyObj("", { printFile: sourceText.join(newLines[key]) });
				const source: ts.SourceFile = {} as any;
				printerSpy.and.returnValue(printer);

				TypeScriptUtils.saveFile(`test/file${key}.ts`, source as any);
				expect(printer.printFile).toHaveBeenCalledWith(source);
				expect(fs.writeFileSync).toHaveBeenCalledWith(`test/file${key}.ts`, expectedText.join(newLines[key]));
			}
		});
	});

	describe("Node creation", () => {

		it("Creates correct identifier or method call", async () => {
			const printer = ts.createPrinter();
			const identifier = TypeScriptUtils.createIdentifier("Test");
			expect(identifier.kind as ts.SyntaxKind.Identifier).toBe(ts.SyntaxKind.Identifier);
			const identifierText = printer.printNode(ts.EmitHint.Unspecified, (identifier as unknown) as ts.Node, null);
			expect(identifierText).toBe("Test");

			const identifierCall = TypeScriptUtils.createIdentifier("Test", "method");
			expect(identifierCall.kind as ts.SyntaxKind).toBe(ts.SyntaxKind.CallExpression);
			const identifierCallText = printer.printNode(
				ts.EmitHint.Unspecified,
				(identifierCall as unknown) as ts.Node,
				ts.createSourceFile("", "", ts.ScriptTarget.Latest)
			);
			expect(identifierCallText).toBe("Test.method()");
		});

		it("Creates correct import node", async () => {
			const printer = ts.createPrinter();
			const nameImport = TypeScriptUtils.createIdentifierImport(["Name"], "package");
			expect(nameImport.kind as ts.SyntaxKind).toBe(ts.SyntaxKind.ImportDeclaration);
			expect(((nameImport.moduleSpecifier as unknown) as ts.StringLiteral).text).toBe("package");
			expect(nameImport.importClause.namedBindings).toBeDefined();
			expect(printer.printNode(ts.EmitHint.Unspecified, (nameImport as unknown) as ts.Node, null)).toBe(`import { Name } from "package";`);

			const namesImport = TypeScriptUtils.createIdentifierImport(["Test1", "Test2"], "@namespace/package");
			expect(((namesImport.moduleSpecifier as unknown) as ts.StringLiteral).text).toBe("@namespace/package");
			expect(namesImport.importClause.namedBindings).toBeDefined();
			const namesImportText = printer.printNode(ts.EmitHint.Unspecified, (namesImport as unknown) as ts.Node, null);
			expect(namesImportText).toBe(`import { Test1, Test2 } from "@namespace/package";`);
		});
	});

	it("Gets class name", async () => {
		const classSource = ts.createSourceFile("",
			`export class TestClass {}`,
			ts.ScriptTarget.Latest, true);
		expect(TypeScriptUtils.getClassName(classSource.getChildren() as any)).toBe("TestClass");

		const classDecoratorSource = ts.createSourceFile("",
			`@Component({
				prop
			})
			export class TestDecoratorClass {}`,
			ts.ScriptTarget.Latest, true);
		expect(TypeScriptUtils.getClassName(classDecoratorSource.getChildren() as any)).toBe("TestDecoratorClass");

		const multipleClassSource = ts.createSourceFile("",
			`export class TestDecoratorClass1 {}
			export class TestDecoratorClass2 {}`,
			ts.ScriptTarget.Latest, true);
		expect(TypeScriptUtils.getClassName(multipleClassSource.getChildren() as any)).toBe("TestDecoratorClass1");

		const noExportClassSource = ts.createSourceFile("",
			`function name() {
				class TestDecoratorClass1 {}
			}
			export class TestDecoratorClass2 {}`,
			ts.ScriptTarget.Latest, true);
		expect(TypeScriptUtils.getClassName(noExportClassSource.getChildren() as any)).toBe("TestDecoratorClass2");
	});
});
