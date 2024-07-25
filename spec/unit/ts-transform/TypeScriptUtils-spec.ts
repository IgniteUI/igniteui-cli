import { App, TypeScriptUtils } from "@igniteui/cli-core";
import * as fs from "fs";
import * as ts from "typescript";

describe("Unit - TypeScriptUtils", () => {
	describe("File read/write", () => {
		beforeAll(() => {
			App.initialize();
		});

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
			spyOn(TypeScriptUtils, "createSourceFile").and.callThrough();
			// tslint:disable-next-line:forin
			for (const key in newLines) {
				readFileSpy.and.returnValue(sourceText.join(newLines[key]));
				const result = TypeScriptUtils.getFileSource(`test/file${key}.ts`);
				expect(fs.readFileSync).toHaveBeenCalledWith(`test/file${key}.ts`);
				expect(TypeScriptUtils.createSourceFile).toHaveBeenCalledWith(
					`test/file${key}.ts`,
					expectedText.join(newLines[key]),
					ts.ScriptTarget.Latest, true, false
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
			const printerSpy = spyOn(TypeScriptUtils, "createPrinter");

			for (const key in newLines) {
				const printer = jasmine.createSpyObj("", { printFile: sourceText.join(newLines[key]) });
				const source = ts.createSourceFile("", "", ts.ScriptTarget.Latest, true);
				printerSpy.and.returnValue(printer);

				const _result = TypeScriptUtils.saveFile(`test/file${key}.ts`, source);
				expect(printer.printFile).toHaveBeenCalledWith(source);
				expect(fs.writeFileSync).toHaveBeenCalledWith(`test/file${key}.ts`, expectedText.join(newLines[key]));
			}
			done();
		});
	});
});
