import { App, Config, copyAISkillsToProject, IFileSystem, ProjectConfig } from "@igniteui/cli-core";

function skillsDir(pkgName: string) {
	return `node_modules/${pkgName}/skills`;
}

function skillFile(pkgName: string, file: string) {
	return `${skillsDir(pkgName)}/${file}`;
}

function makeFs(overrides: Partial<IFileSystem> = {}): IFileSystem {
	return {
		fileExists: jasmine.createSpy("fileExists").and.returnValue(false),
		readFile: jasmine.createSpy("readFile").and.returnValue(""),
		writeFile: jasmine.createSpy("writeFile"),
		directoryExists: jasmine.createSpy("directoryExists").and.returnValue(false),
		glob: jasmine.createSpy("glob").and.returnValue([]),
		...overrides
	} as unknown as IFileSystem;
}

describe("Unit - copyAISkillsToProject", () => {
	describe("Angular framework", () => {
		it("should copy skills from igniteui-angular into .claude/skills/", async () => {
			const angularSkillsDir = skillsDir("igniteui-angular");
			const skillFilePath = skillFile("igniteui-angular", "angular.md");
			const mockSkillContent = "# Ignite UI for Angular skills";

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) => {
					if (p === "ignite-ui-cli.json") return true;
					if (p === "./package.json") return false;
					return false; // dest file does not exist yet
				}),
				readFile: jasmine.createSpy("readFile").and.callFake((p: string) => {
					if (p === skillFilePath) return mockSkillContent;
					return "";
				}),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				),
				glob: jasmine.createSpy("glob").and.callFake((dir: string) =>
					dir === angularSkillsDir ? [skillFilePath] : []
				),
				writeFile: jasmine.createSpy("writeFile")
			});

			spyOn(App.container, "get").and.returnValue(fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			await copyAISkillsToProject();

			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/angular.md", mockSkillContent);
		});

		it("should prefer the licensed @infragistics/igniteui-angular package if installed", async () => {
			const licensedPkg = "@infragistics/igniteui-angular";
			const angularSkillsDir = skillsDir(licensedPkg);
			const skillFilePath = skillFile(licensedPkg, "angular.md");

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) => {
					if (p === "ignite-ui-cli.json") return true;
					if (p === "./package.json") return true;
					return false;
				}),
				readFile: jasmine.createSpy("readFile").and.callFake((p: string) => {
					if (p === "./package.json") {
						return JSON.stringify({ dependencies: { [licensedPkg]: "^18.0.0" } });
					}
					return "skill content";
				}),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				),
				glob: jasmine.createSpy("glob").and.callFake((dir: string) =>
					dir === angularSkillsDir ? [skillFilePath] : []
				),
				writeFile: jasmine.createSpy("writeFile")
			});

			spyOn(App.container, "get").and.returnValue(fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			await copyAISkillsToProject();

			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/angular.md", "skill content");
		});

		it("should overwrite an existing skill file with newer content", async () => {
			const angularSkillsDir = skillsDir("igniteui-angular");
			const skillFilePath = skillFile("igniteui-angular", "angular.md");
			const newContent = "# Updated Angular skills";
			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) => {
					if (p === "ignite-ui-cli.json") return true;
					if (p === ".claude/skills/angular.md") return true; // already exists
					return false;
				}),
				readFile: jasmine.createSpy("readFile").and.callFake((p: string) => {
					if (p === skillFilePath) return newContent;
					return "";
				}),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				),
				glob: jasmine.createSpy("glob").and.returnValue([skillFilePath]),
				writeFile: jasmine.createSpy("writeFile")
			});

			spyOn(App.container, "get").and.returnValue(fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			await copyAISkillsToProject();

			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/angular.md", newContent);
		});
	});

	describe("React framework", () => {
		it("should copy skills from igniteui-react into .claude/skills/", async () => {
			const reactPkg = "igniteui-react";
			const dir = skillsDir(reactPkg);
			const file = skillFile(reactPkg, "overview.md");
			const content = "# React overview";

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) => {
					if (p === "ignite-ui-cli.json") return true;
					if (p === "./package.json") return false;
					return false;
				}),
				readFile: jasmine.createSpy("readFile").and.callFake((p: string) => {
					if (p === file) return content;
					return "";
				}),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === dir
				),
				glob: jasmine.createSpy("glob").and.callFake((d: string) =>
					d === dir ? [file] : []
				),
				writeFile: jasmine.createSpy("writeFile")
			});

			spyOn(App.container, "get").and.returnValue(fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "react" }
			} as unknown as Config);

			await copyAISkillsToProject();

			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/overview.md", content);
		});
	});

	describe("WebComponents framework", () => {
		it("should copy skills from igniteui-webcomponents into .claude/skills/", async () => {
			const wcPkg = "igniteui-webcomponents-core";
			const dir = skillsDir(wcPkg);
			const file = skillFile(wcPkg, "webcomponents.md");
			const content = "# Ignite UI WebComponents skills";

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) => {
					if (p === "ignite-ui-cli.json") return true;
					if (p === "./package.json") return false;
					return false;
				}),
				readFile: jasmine.createSpy("readFile").and.callFake((p: string) => {
					if (p === file) return content;
					return "";
				}),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === dir
				),
				glob: jasmine.createSpy("glob").and.callFake((d: string) =>
					d === dir ? [file] : []
				),
				writeFile: jasmine.createSpy("writeFile")
			});

			spyOn(App.container, "get").and.returnValue(fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "webcomponents" }
			} as unknown as Config);

			await copyAISkillsToProject();

			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/webcomponents.md", content);
		});
	});

	describe("No local config (fallback)", () => {
		it("should scan all known packages when no ignite-ui-cli.json is present", async () => {
			const angularPkg = "igniteui-angular";
			const dir = skillsDir(angularPkg);
			const file = skillFile(angularPkg, "angular.md");

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) => {
					// no local config, no package.json, no dest file
					return false;
				}),
				readFile: jasmine.createSpy("readFile").and.returnValue("skill content"),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === dir
				),
				glob: jasmine.createSpy("glob").and.callFake((d: string) =>
					d === dir ? [file] : []
				),
				writeFile: jasmine.createSpy("writeFile")
			});

			spyOn(App.container, "get").and.returnValue(fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

			await copyAISkillsToProject();

			// With multiple roots, the dest path is prefixed; angular is the only root found here
			// but since we scan ALL packages and only one directory exists, roots.length === 1 → no prefix
			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/angular.md", "skill content");
		});
	});

	describe("No skills available", () => {
		it("should silently return when no skills directories are found", async () => {
			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
					p === "ignite-ui-cli.json"
				),
				directoryExists: jasmine.createSpy("directoryExists").and.returnValue(false),
				writeFile: jasmine.createSpy("writeFile")
			});

			spyOn(App.container, "get").and.returnValue(fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			await copyAISkillsToProject();

			expect(fs.writeFile).not.toHaveBeenCalled();
		});

		it("should silently return when skills directory exists but is empty", async () => {
			const dir = skillsDir("igniteui-angular");

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
					p === "ignite-ui-cli.json"
				),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === dir
				),
				glob: jasmine.createSpy("glob").and.returnValue([]),
				writeFile: jasmine.createSpy("writeFile")
			});

			spyOn(App.container, "get").and.returnValue(fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			await copyAISkillsToProject();

			expect(fs.writeFile).not.toHaveBeenCalled();
		});
	});

	describe("Nested skill files", () => {
		it("should preserve directory structure when copying nested skill files", async () => {
			const pkg = "igniteui-angular";
			const dir = skillsDir(pkg);
			const nestedFile = skillFile(pkg, "grids/grid.md");
			const content = "# Grid skills";

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) => {
					if (p === "ignite-ui-cli.json") return true;
					if (p === "./package.json") return false;
					return false;
				}),
				readFile: jasmine.createSpy("readFile").and.returnValue(content),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === dir
				),
				glob: jasmine.createSpy("glob").and.callFake((d: string) =>
					d === dir ? [nestedFile] : []
				),
				writeFile: jasmine.createSpy("writeFile")
			});

			spyOn(App.container, "get").and.returnValue(fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			await copyAISkillsToProject();

			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/grids/grid.md", content);
		});
	});
});
