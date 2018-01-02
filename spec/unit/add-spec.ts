
import * as fs from "fs-extra";
import { default as addCmd } from "../../lib/commands/add";
import { ProjectConfig } from "../../lib/ProjectConfig";
import { PromptSession } from "../../lib/PromptSession";
import { Util } from "../../lib/Util";

describe("Unit - Add command", () => {

	it("Should start prompt session with missing arg", async done => {
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
});
