import * as path from "path";
import { App, Config, copyAISkillsToProject, FS_TOKEN, IFileSystem, ProjectConfig, TEMPLATE_MANAGER, Util } from "@igniteui/cli-core";

function skillsDir(pkgName: string) {
	return `node_modules/${pkgName}/skills`;
}

function skillFile(pkgName: string, file: string) {
	return `${skillsDir(pkgName)}/${file}`;
}

function mockTemplateManager(templatePaths: string[]) {
	const mockProject = { templatePaths };
	const mockProjectLib = {
		projectIds: ["base"],
		getProject: jasmine.createSpy("getProject").and.returnValue(mockProject)
	};
	const mockTm = jasmine.createSpyObj("TemplateManager", ["getFrameworkById"]);
	mockTm.getFrameworkById.and.returnValue({ projectLibraries: [mockProjectLib] });
	App.container.set(TEMPLATE_MANAGER, mockTm);
	return mockTm;
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
	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(Util, "greenCheck").and.returnValue("✓");
	});

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
					return ""; // dest has different (older) content
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
			expect(Util.log).toHaveBeenCalledWith(jasmine.stringContaining("Updated .claude/skills/angular.md"));
		});

		it("should not write when destination content is already up-to-date", async () => {
			const angularSkillsDir = skillsDir("igniteui-angular");
			const skillFilePath = skillFile("igniteui-angular", "angular.md");
			const existingContent = "# Ignite UI for Angular skills";
			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) => {
					if (p === "ignite-ui-cli.json") return true;
					if (p === ".claude/skills/angular.md") return true;
					return false;
				}),
				readFile: jasmine.createSpy("readFile").and.returnValue(existingContent),
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

			const result = await copyAISkillsToProject();

			expect(fs.writeFile).not.toHaveBeenCalled();
			expect(result.found).toBe(1);
			expect(result.skipped).toBe(1);
			expect(result.failed).toBe(0);
			expect(Util.log).not.toHaveBeenCalled(); // no per-file Created/Updated logs emitted
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
			const wcPkg = "igniteui-webcomponents";
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

		it("should also scan igniteui-react in the fallback", async () => {
			const reactPkg = "igniteui-react";
			const dir = skillsDir(reactPkg);
			const file = skillFile(reactPkg, "overview.md");

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.returnValue(false),
				readFile: jasmine.createSpy("readFile").and.returnValue("react skill content"),
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

			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/overview.md", "react skill content");
		});

		it("should also scan igniteui-webcomponents in the fallback", async () => {
			const wcPkg = "igniteui-webcomponents";
			const dir = skillsDir(wcPkg);
			const file = skillFile(wcPkg, "webcomponents.md");

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.returnValue(false),
				readFile: jasmine.createSpy("readFile").and.returnValue("wc skill content"),
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

			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/webcomponents.md", "wc skill content");
		});
	});

	describe("No skills available", () => {
		it("should silently return when no npm skills exist and template paths also have no files", () => {
			const FAKE_TEMPLATE_PATH = "/no-skills/template";
			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
					p === "ignite-ui-cli.json"
				),
				directoryExists: jasmine.createSpy("directoryExists").and.returnValue(false),
				glob: jasmine.createSpy("glob").and.returnValue([]),
				writeFile: jasmine.createSpy("writeFile")
			});

			App.container.set(FS_TOKEN, fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);
			// Explicitly control the template fallback — glob returns nothing for the fake path too
			const mockTm = mockTemplateManager([FAKE_TEMPLATE_PATH]);

			const result = copyAISkillsToProject();

			expect(result.found).toBe(0);
			expect(fs.writeFile).not.toHaveBeenCalled();
			expect(mockTm.getFrameworkById).toHaveBeenCalledWith("angular");
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

	describe("Error handling", () => {
		it("should increment failed when writeFile throws creating a new file", async () => {
			const pkg = "igniteui-angular";
			const dir = skillsDir(pkg);
			const file = skillFile(pkg, "angular.md");

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) => {
					if (p === "ignite-ui-cli.json") return true;
					return false; // dest does not exist
				}),
				readFile: jasmine.createSpy("readFile").and.returnValue("skill content"),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === dir
				),
				glob: jasmine.createSpy("glob").and.callFake((d: string) =>
					d === dir ? [file] : []
				),
				writeFile: jasmine.createSpy("writeFile").and.throwError("EACCES: permission denied")
			});

			spyOn(App.container, "get").and.returnValue(fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			const result = await copyAISkillsToProject();

			expect(result.found).toBe(1);
			expect(result.skipped).toBe(0);
			expect(result.failed).toBe(1);
		});

		it("should increment failed when writeFile throws updating an existing file", async () => {
			const pkg = "igniteui-angular";
			const dir = skillsDir(pkg);
			const file = skillFile(pkg, "angular.md");
			const destFile = ".claude/skills/angular.md";

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) => {
					if (p === "ignite-ui-cli.json") return true;
					if (p === destFile) return true; // dest exists with different content
					return false;
				}),
				readFile: jasmine.createSpy("readFile").and.callFake((p: string) => {
					if (p === file) return "new content";
					return "old content"; // dest has different content
				}),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === dir
				),
				glob: jasmine.createSpy("glob").and.callFake((d: string) =>
					d === dir ? [file] : []
				),
				writeFile: jasmine.createSpy("writeFile").and.throwError("EACCES: permission denied")
			});

			spyOn(App.container, "get").and.returnValue(fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			const result = await copyAISkillsToProject();

			expect(result.found).toBe(1);
			expect(result.skipped).toBe(0);
			expect(result.failed).toBe(1);
		});

		it("should report correct counts when some writes fail and some succeed", async () => {
			const pkg = "igniteui-angular";
			const dir = skillsDir(pkg);
			const file1 = skillFile(pkg, "angular.md");
			const file2 = skillFile(pkg, "components.md");

			let writeCallCount = 0;
			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) => {
					if (p === "ignite-ui-cli.json") return true;
					return false;
				}),
				readFile: jasmine.createSpy("readFile").and.returnValue("skill content"),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === dir
				),
				glob: jasmine.createSpy("glob").and.callFake((d: string) =>
					d === dir ? [file1, file2] : []
				),
				writeFile: jasmine.createSpy("writeFile").and.callFake(() => {
					writeCallCount++;
					if (writeCallCount === 2) {
						throw new Error("ENOSPC: no space left on device");
					}
				})
			});

			spyOn(App.container, "get").and.returnValue(fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			const result = await copyAISkillsToProject();

			expect(result.found).toBe(2);
			expect(result.skipped).toBe(0);
			expect(result.failed).toBe(1);
			expect(fs.writeFile).toHaveBeenCalledTimes(2);
		});
	});

	describe("Template fallback (no package skills found)", () => {
		const FAKE_TEMPLATE_PATH = "/fake/template";
		// cwd-relative paths so both physical and virtual (schematics Tree) FS can use them
		const FAKE_SKILLS_ROOT = path.join(path.relative(process.cwd(), FAKE_TEMPLATE_PATH), "__dot__claude/skills");

		it("should use angular template paths when framework is in config and no npm skills are found", () => {
			const skillFile = path.join(FAKE_SKILLS_ROOT, "angular.md");
			const content = "# Angular skills from template";

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
					p === "ignite-ui-cli.json"
				),
				readFile: jasmine.createSpy("readFile").and.returnValue(content),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === FAKE_SKILLS_ROOT
				),
				glob: jasmine.createSpy("glob").and.callFake((dir: string) =>
					dir === FAKE_SKILLS_ROOT ? [skillFile] : []
				),
				writeFile: jasmine.createSpy("writeFile")
			});

			App.container.set(FS_TOKEN, fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);
			const mockTm = mockTemplateManager([FAKE_TEMPLATE_PATH]);

			copyAISkillsToProject();

			expect(mockTm.getFrameworkById).toHaveBeenCalledWith("angular");
			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/angular.md", content);
		});

		it("should detect react from package.json and use react template paths when no npm skills are found", () => {
			const skillFile = path.join(FAKE_SKILLS_ROOT, "react.md");
			const content = "# React skills from template";

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
					p === "./package.json"
				),
				readFile: jasmine.createSpy("readFile").and.callFake((p: string) => {
					if (p === "./package.json") return JSON.stringify({ dependencies: { "react": "^19.0.0" } });
					return content;
				}),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === FAKE_SKILLS_ROOT
				),
				glob: jasmine.createSpy("glob").and.callFake((dir: string) =>
					dir === FAKE_SKILLS_ROOT ? [skillFile] : []
				),
				writeFile: jasmine.createSpy("writeFile")
			});

			App.container.set(FS_TOKEN, fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);
			const mockTm = mockTemplateManager([FAKE_TEMPLATE_PATH]);

			copyAISkillsToProject();

			expect(mockTm.getFrameworkById).toHaveBeenCalledWith("react");
			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/react.md", content);
		});

		it("should use webcomponents (catch-all) template paths when no angular or react detected in package.json", () => {
			const skillFile = path.join(FAKE_SKILLS_ROOT, "webcomponents.md");
			const content = "# WC skills from template";

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
					p === "./package.json"
				),
				readFile: jasmine.createSpy("readFile").and.callFake((p: string) => {
					if (p === "./package.json") return JSON.stringify({ dependencies: { "lit": "^3.0.0" } });
					return content;
				}),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === FAKE_SKILLS_ROOT
				),
				glob: jasmine.createSpy("glob").and.callFake((dir: string) =>
					dir === FAKE_SKILLS_ROOT ? [skillFile] : []
				),
				writeFile: jasmine.createSpy("writeFile")
			});

			App.container.set(FS_TOKEN, fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);
			const mockTm = mockTemplateManager([FAKE_TEMPLATE_PATH]);

			copyAISkillsToProject();

			expect(mockTm.getFrameworkById).toHaveBeenCalledWith("webcomponents");
			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/webcomponents.md", content);
		});

		it("should return empty result when no package.json exists and no npm skills are found", () => {
			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.returnValue(false),
				directoryExists: jasmine.createSpy("directoryExists").and.returnValue(false),
				writeFile: jasmine.createSpy("writeFile")
			});

			App.container.set(FS_TOKEN, fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);
			// no package.json → detectFrameworkFromPackageJson returns null → no template fallback

			const result = copyAISkillsToProject();

			expect(result.found).toBe(0);
			expect(result.skipped).toBe(0);
			expect(result.failed).toBe(0);
			expect(fs.writeFile).not.toHaveBeenCalled();
		});

		it("should preserve nested directory structure from template skill paths", () => {
			const nestedFile = path.join(FAKE_SKILLS_ROOT, "grids", "grid.md");
			const content = "# Grid skills from template";

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
					p === "ignite-ui-cli.json"
				),
				readFile: jasmine.createSpy("readFile").and.returnValue(content),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === FAKE_SKILLS_ROOT
				),
				glob: jasmine.createSpy("glob").and.callFake((dir: string) =>
					dir === FAKE_SKILLS_ROOT ? [nestedFile] : []
				),
				writeFile: jasmine.createSpy("writeFile")
			});

			App.container.set(FS_TOKEN, fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);
			mockTemplateManager([FAKE_TEMPLATE_PATH]);

			copyAISkillsToProject();

			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/grids/grid.md", content);
		});

		it("should use config framework (not detectFrameworkFromPackageJson) when config has framework but npm skills absent", () => {
			// framework from config = "react"; package.json has @angular/core — config must win
			const skillFile = path.join(FAKE_SKILLS_ROOT, "react.md");
			const content = "# React skills from template";

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) => {
					if (p === "ignite-ui-cli.json") return true;
					if (p === "./package.json") return true;
					return false;
				}),
				readFile: jasmine.createSpy("readFile").and.callFake((p: string) => {
					if (p === "./package.json") return JSON.stringify({ dependencies: { "@angular/core": "^17.0.0" } });
					return content;
				}),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === FAKE_SKILLS_ROOT
				),
				glob: jasmine.createSpy("glob").and.callFake((dir: string) =>
					dir === FAKE_SKILLS_ROOT ? [skillFile] : []
				),
				writeFile: jasmine.createSpy("writeFile")
			});

			App.container.set(FS_TOKEN, fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "react" } // config says react, even though package.json has angular
			} as unknown as Config);
			const mockTm = mockTemplateManager([FAKE_TEMPLATE_PATH]);

			copyAISkillsToProject();

			// ??= must NOT overwrite already-set framework value
			expect(mockTm.getFrameworkById).toHaveBeenCalledWith("react");
			expect(mockTm.getFrameworkById).not.toHaveBeenCalledWith("angular");
		});

		it("should convert absolute template paths to relative so virtual FS (schematics Tree) can resolve them", () => {
			// SchematicsTemplateManager returns absolute paths (path.join(__dirname, "files")).
			// resolveSkillsRoots() converts them to cwd-relative both physical and virtual FS can glob/read them.
			const ABS_TEMPLATE_PATH = path.resolve("node_modules/fake-angular-templates/base/files");
			const REL_SKILLS_ROOT = path.join("node_modules/fake-angular-templates/base/files", "__dot__claude/skills");
			const ABS_SKILLS_ROOT = path.join(ABS_TEMPLATE_PATH, "__dot__claude/skills");
			const skillFilePath = path.join(REL_SKILLS_ROOT, "angular.md");
			const content = "# Angular skills from template";

			const fs = makeFs({
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
					p === "ignite-ui-cli.json"
				),
				readFile: jasmine.createSpy("readFile").and.returnValue(content),
				directoryExists: jasmine.createSpy("directoryExists").and.returnValue(false),
				// Virtual FS: glob only succeeds for the cwd-relative path
				glob: jasmine.createSpy("glob").and.callFake((dir: string) =>
					dir === REL_SKILLS_ROOT ? [skillFilePath] : []
				),
				writeFile: jasmine.createSpy("writeFile")
			});

			App.container.set(FS_TOKEN, fs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);
			// Template manager returns absolute path (as SchematicsTemplateManager does at runtime)
			mockTemplateManager([ABS_TEMPLATE_PATH]);

			copyAISkillsToProject();

			// glob must be called with the relative path, never with the original absolute path
			expect(fs.glob).not.toHaveBeenCalledWith(ABS_SKILLS_ROOT, jasmine.anything());
			expect(fs.glob).toHaveBeenCalledWith(REL_SKILLS_ROOT, jasmine.anything());
			expect(fs.writeFile).toHaveBeenCalledWith(".claude/skills/angular.md", content);
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
