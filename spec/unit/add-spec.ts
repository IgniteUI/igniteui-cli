
import * as fs from "fs-extra";
import { default as addCmd } from "../../lib/commands/add";
import { ProjectConfig } from "../../lib/ProjectConfig";
import { PromptSession } from "../../lib/PromptSession";
import { Util } from "../../lib/Util";
import { resetSpy } from "../helpers/utils";

describe("Unit - Add command", () => {

	it("Should start prompt session with missing arg", async done => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(ProjectConfig, "getConfig").and.returnValue({ project: {
			framework: "angular",
			theme: "infragistics"}});

		const mockProjLib = {};
		addCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: mockProjLib
		});

		const promptSession =  PromptSession.prototype;
		spyOn(promptSession, "chooseActionLoop");

		await addCmd.execute({});
		expect(promptSession.chooseActionLoop).toHaveBeenCalledWith(mockProjLib, "infragistics");
		done();
	});

	it("Should validate and trim name", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({ project: {
			framework: "angular",
			theme: "infragistics"}});
		spyOn(Util, "error");

		const mockTemplate = jasmine.createSpyObj("Template", ["generateFiles"]);

		const errorCombos = [
			{ name: "1 is not valid", inError: "1 is not valid" },
			{ name: "   1 is   not valid  \t   ", inError: "1 is   not valid" },
			{ name: "../editors", inError: "../editors" },
			{ name: "template/editors", inError: "template/editors" },
			{ name: "name!", inError: "name!" },
			{ name: "bits~and*bobs()", inError: "bits~and*bobs()" }
		];

		for (const item of errorCombos) {
			resetSpy(Util.error);
			await addCmd.addTemplate(item.name, mockTemplate);
			expect(Util.error).toHaveBeenCalledWith(`Name '${item.inError}' is not valid. `
			+ "Template names should start with a letter and can also contain numbers, dashes and spaces.", "red");
		}

		const validCombos = [
			{ name: "   valid  name  \t   ", valid: "valid  name" },
			{ name: "th1s is valid", valid: "th1s is valid" },
			{ name: "b1ts-and bobs ", valid: "b1ts-and bobs" },
			{ name: "a      name", valid: "a      name" }
		];

		for (const item of validCombos) {
			await addCmd.addTemplate(item.name, mockTemplate);
			expect(mockTemplate.generateFiles).toHaveBeenCalledWith(process.cwd(), item.valid);
		}

		done();
	});
});
