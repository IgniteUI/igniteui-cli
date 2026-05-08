import { AGENTS_TEMPLATE_FILE, AI_CONFIG_PROJECT_ID, AI_SKILLS_DIR_NAME, App, Framework, Util } from "@igniteui/cli-core";
import path from "path";
import * as fs from "fs";

const templatesLocation = "../../packages/cli/templates/react";
describe("React templates", () => {
	beforeAll(() => {
		App.initialize();
	});

	it("Templates should have IDs", async function() {
		const reactFramework = require(templatesLocation);
		expect(reactFramework.projectLibraries[0]).toBeDefined();

		for (const template of reactFramework.projectLibraries[0].templates) {
			expect(template.id).toBeDefined("No ID: " + template.name + " type: " + template.projectType);
		}
	});

	it("Templates should have no internal collisions", async () => {
		const reactFramework: Framework = require(templatesLocation);
		const projLibrary = reactFramework.projectLibraries.find(x => x.projectType === "igr-ts");
		for (let i = 0; i < projLibrary.templates.length; i++) {
			const element = projLibrary.templates[i];
			for (let j = i + 1; j < projLibrary.templates.length; j++) {
				const target = projLibrary.templates[j];
				// pass some __path__ so those won't match
				expect(
					(Util as any).validateTemplate(element["rootPath"] + "/files", target["rootPath"] + "/files", {path: "1"}, {})
				)
					.withContext(`Template ${element.id} can overwrite ${target.id}`)
					.toBeTruthy();
			}
		}
	});

	describe("ai-config template file presence", () => {
		it("ai-config project template must be registered", () => {
			const reactFramework: Framework = require(templatesLocation);
			const projLibrary = reactFramework.projectLibraries.find(x => x.projectType === "igr-ts");
			expect(projLibrary.getProject(AI_CONFIG_PROJECT_ID)).toBeDefined();
		});

		const filesDir = path.resolve(__dirname, "../..", `packages/cli/templates/react/igr-ts/projects/${AI_CONFIG_PROJECT_ID}/files`);

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
