import * as fs from "fs";
import * as ts from "typescript";
import { TypeScriptUtils } from "../../../lib/project-utility/TypeScriptUtils";

describe("Unit - TypeScriptUtils", () => {

	describe("Relative paths", () => {
		it("Creates correct relative path for child structure", async done => {

			// default use, shared root
			expect(TypeScriptUtils.relativePath(
				"C:\\src\\app\\app-routing.module.ts",
				"C:\\src\\app\\carousel\\carousel.component.ts", true, true
			))
			.toBe("./carousel/carousel.component", "Shared Win root, file to file => posix ");
			expect(TypeScriptUtils.relativePath(
				"/home/app/app.module.ts",
				"/home/app/grid/grid.component.ts", true, true
			))
			.toBe("./grid/grid.component", "Shared posix root, file to file => posix ");

			expect(TypeScriptUtils.relativePath(
				"C:\\home\\app-routing.module.ts",
				"C:/home/app/grid/grid.component.ts", true, false
			))
			.toBe("./app/grid/grid.component.ts", "Win style to posix file, keep ext => posix");
			done();
		});

		it("Creates correct relative path for parent dir", async done => {
			// going up levels
			expect(TypeScriptUtils.relativePath(
				"C:\\common\\folder1\\folder2\\folder3\\file.ts",
				"C:\\common\\dir1\\dir2\\target.ts", false
			))
			.toBe("..\\..\\..\\dir1\\dir2\\target", "Win style, file to file => win");

			expect(TypeScriptUtils.relativePath(
				"C:\\Work\\git\\Ignite-UI-CLI\\spec\\unit\\ts-transforms\\TypeScriptUtils-spec.ts",
				"C:\\Work\\git\\Ignite-UI-CLI\\lib\\project-utility\\TypeScriptUtils.ts", true
			))
			// same as top level import above
			.toBe("../../../lib/project-utility/TypeScriptUtils", "Win style, file to file => posix");

			expect(TypeScriptUtils.relativePath(
				"C:\\common\\folder1\\folder2\\folder3\\",
				"C:\\common\\dir1\\dir2\\target.ts", true
			))
			.toBe("../../../dir1/dir2/target", "Win style, folder to file => posix");

			expect(TypeScriptUtils.relativePath(
				"C:\\common\\folder1\\folder2\\folder3\\",
				"C:\\common\\dir1\\dir2\\target", true
			))
			.toBe("../../../dir1/dir2/target", "Win style, folder to file w/o ext => posix");

			expect(TypeScriptUtils.relativePath(
				"C:/common/folder1/folder2/folder3/",
				"C:\\common\\dir1\\dir2\\target.ts", true
			))
			.toBe("../../../dir1/dir2/target", "posix folder to Win style file => posix");

			expect(TypeScriptUtils.relativePath(
				"C:/common/folder1/folder2/folder3/",
				"C:\\common\\dir1\\dir2\\target.ts", true, false
			))
			.toBe("../../../dir1/dir2/target.ts", "posix folder to Win style file, keep ext => posix");

			done();
		});
	});

	describe("File read/write", () => {
		const newLines = {
			CRLF: "\r\n",
			LF: "\n"
		};
		it("Reads source file and adds new line ([CR]LF) placeholders", async done => {
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

			done();
		});

		it("Save source file and removes ([CR]LF) placeholders", async done => {
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

				const result = TypeScriptUtils.saveFile(`test/file${key}.ts`, source);
				expect(printer.printFile).toHaveBeenCalledWith(source);
				expect(fs.writeFileSync).toHaveBeenCalledWith(`test/file${key}.ts`, expectedText.join(newLines[key]));
			}
			done();
		});
	});

	describe("Node creation", () => {

		it("Creates correct identifier or method call", async done => {
			const printer = ts.createPrinter();
			const identifier = TypeScriptUtils.createIdentifier("Test");
			expect(identifier.kind).toBe(ts.SyntaxKind.Identifier);
			const identifierText = printer.printNode(ts.EmitHint.Unspecified, identifier, null);
			expect(identifierText).toBe("Test");

			const identifierCall = TypeScriptUtils.createIdentifier("Test", "method");
			expect(identifierCall.kind).toBe(ts.SyntaxKind.CallExpression);
			const identifierCallText = printer.printNode(ts.EmitHint.Unspecified, identifierCall, null);
			expect(identifierCallText).toBe("Test.method()");
			done();
		});

		it("Creates correct import node", async done => {
			const printer = ts.createPrinter();
			const nameImport = TypeScriptUtils.createIdentifierImport(["Name"], "package");
			expect(nameImport.kind).toBe(ts.SyntaxKind.ImportDeclaration);
			expect((nameImport.moduleSpecifier as ts.StringLiteral).text).toBe("package");
			expect(nameImport.importClause.namedBindings).toBeDefined();
			expect(printer.printNode(ts.EmitHint.Unspecified, nameImport, null)).toBe(`import { Name } from "package";`);

			const namesImport = TypeScriptUtils.createIdentifierImport(["Test1", "Test2"], "@namespace/package");
			expect((namesImport.moduleSpecifier as ts.StringLiteral).text).toBe("@namespace/package");
			expect(namesImport.importClause.namedBindings).toBeDefined();
			const namesImportText = printer.printNode(ts.EmitHint.Unspecified, namesImport, null);
			expect(namesImportText).toBe(`import { Test1, Test2 } from "@namespace/package";`);
			done();
		});
	});

	it("Gets class name", async done => {
		const classSource = ts.createSourceFile("",
			`export class TestClass {}`,
			ts.ScriptTarget.Latest, true);
		expect(TypeScriptUtils.getClassName(classSource.getChildren())).toBe("TestClass");

		const classDecoratorSource = ts.createSourceFile("",
			`@Component({
				prop
			})
			export class TestDecoratorClass {}`,
			ts.ScriptTarget.Latest, true);
		expect(TypeScriptUtils.getClassName(classDecoratorSource.getChildren())).toBe("TestDecoratorClass");

		const multipleClassSource = ts.createSourceFile("",
			`export class TestDecoratorClass1 {}
			export class TestDecoratorClass2 {}`,
			ts.ScriptTarget.Latest, true);
		expect(TypeScriptUtils.getClassName(multipleClassSource.getChildren())).toBe("TestDecoratorClass1");

		const noExportClassSource = ts.createSourceFile("",
			`function name() {
				class TestDecoratorClass1 {}
			}
			export class TestDecoratorClass2 {}`,
			ts.ScriptTarget.Latest, true);
		expect(TypeScriptUtils.getClassName(noExportClassSource.getChildren())).toBe("TestDecoratorClass2");
		done();
	});
});
