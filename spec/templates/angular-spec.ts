import { App, Framework, Util } from "@igniteui/cli-core";
import { IGNITEUI_ANGULAR_PACKAGE } from "../../packages/igx-templates/constants";
import path from "path/win32";
import * as fs from "fs";

const templatesLocation = "../../packages/cli/templates/angular";

describe("Angular templates", () => {
	beforeAll(() => {
		App.initialize();
	});

	it("Templates should have IDs", async function() {
		const angularFramework = require(templatesLocation);
		expect(angularFramework.projectLibraries[0]).toBeDefined();

		for (const template of angularFramework.projectLibraries[0].templates) {
			expect(template.id)
				.withContext("No ID: " + template.name + " type: " + template.projectType)
				.toBeDefined();
		}
	});

	it("Igx templates should have no internal collisions", async () => {
		const angularFramework: Framework = require(templatesLocation);
		const projLibrary = angularFramework.projectLibraries.find(x => x.projectType === "igx-ts");
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

	it("Igx templates and project package.json files should use the same igniteui-angular version as the const", async () => {
		const angularFramework: Framework = require(templatesLocation);
		const projLibrary = angularFramework.projectLibraries.find(x => x.projectType === "igx-ts");
		const [pkg, version] = IGNITEUI_ANGULAR_PACKAGE.split("@");

    	projLibrary.templates
			.flatMap(t => t.packages || [])
			.filter(p => typeof p === "string" && p.startsWith(`${pkg}@`))
			.forEach(p => expect(p).toBe(IGNITEUI_ANGULAR_PACKAGE));

		const roots = [
			path.resolve(process.cwd(), "packages/igx-templates/igx-ts/projects/_base/files"),
			path.resolve(process.cwd(), "packages/igx-templates/igx-ts/projects/side-nav-auth/files")
		];

		for (const root of roots) {
			const file = path.join(root, "package.json");
			if (!fs.existsSync(file)) continue;

			const { dependencies = {}, devDependencies = {} } = require(file);
			const deps = { ...dependencies, ...devDependencies };

			if (deps[pkg]) {
				expect(deps[pkg]).toBe(version);
			}
		}
	});
});
