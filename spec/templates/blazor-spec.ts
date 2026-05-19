import { AGENTS_TEMPLATE_FILE, AI_CONFIG_PROJECT_ID, AI_SKILLS_DIR_NAME, App, Framework } from "@igniteui/cli-core";
import path from "path";
import * as fs from "fs";

const templatesLocation = "../../packages/cli/templates/blazor";
describe("Blazor templates", () => {
	beforeAll(() => {
		App.initialize();
	});

	it("Templates should have IDs", async function() {
		const blazorFramework = require(templatesLocation);
		expect(blazorFramework.projectLibraries[0]).toBeDefined();

		for (const template of blazorFramework.projectLibraries[0].templates) {
			expect(template.id)
				.withContext("No ID: " + template.name + " type: " + template.projectType)
				.toBeDefined();
		}
	});

	describe("ai-config template file presence", () => {
		it("ai-config project template must be registered", () => {
			const blazorFramework: Framework = require(templatesLocation);
			const projLibrary = blazorFramework.projectLibraries.find(x => x.projectType === "igb");
			expect(projLibrary.getProject(AI_CONFIG_PROJECT_ID)).toBeDefined();
		});

		const filesDir = path.resolve(__dirname, "../..", `packages/cli/templates/blazor/igb/projects/${AI_CONFIG_PROJECT_ID}/files`);

		it("AGENTS.md must exist in files/", () => {
			expect(fs.existsSync(path.join(filesDir, AGENTS_TEMPLATE_FILE)))
				.withContext(`Missing ${AGENTS_TEMPLATE_FILE} in ${filesDir}`)
				.toBeTrue();
		});

		it("skills/ directory must exist in files/", () => {
			expect(fs.existsSync(path.join(filesDir, AI_SKILLS_DIR_NAME)))
				.withContext(`Missing ${AI_SKILLS_DIR_NAME}/ in ${filesDir}`)
				.toBeTrue();
		});
	});
});
