import * as path from "path";
import { AI_AGENT_INSTRUCTION_FILES, AI_AGENT_SKILLS_DIRS, AIAgentTarget, App, Config, copyAgentInstructionFiles, copyAISkillsToProject, FS_TOKEN, FsFileSystem, getInstructionFilePath, getSkillsDir, IFileSystem, ProjectConfig, TEMPLATE_MANAGER, Util } from "@igniteui/cli-core";

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
		getProject: jasmine.createSpy("getProject").and.callFake((id: string) => {
			if (id === "ai-config") return mockProject;
			return null;
		})
	};
	const mockTm = jasmine.createSpyObj("TemplateManager", ["getFrameworkById"]);
	mockTm.getFrameworkById.and.returnValue({ projectLibraries: [mockProjectLib] });
	App.container.set(TEMPLATE_MANAGER, mockTm);
	return mockTm;
}

/** Creates a mock for the destination FS (injected via container, may be virtual Tree) */
function makeDestFs(overrides: Partial<IFileSystem> = {}): IFileSystem {
	return {
		fileExists: jasmine.createSpy("destFs.fileExists").and.returnValue(false),
		readFile: jasmine.createSpy("destFs.readFile").and.returnValue(""),
		writeFile: jasmine.createSpy("destFs.writeFile"),
		directoryExists: jasmine.createSpy("destFs.directoryExists").and.returnValue(false),
		glob: jasmine.createSpy("destFs.glob").and.returnValue([]),
		...overrides
	} as unknown as IFileSystem;
}

/**
 * Spies on FsFileSystem.prototype methods to mock the source FS (always real disk).
 * Returns spies dict so tests can configure callFake / returnValue.
 */
function spySrcFs(overrides: {
	directoryExists?: jasmine.Spy;
	glob?: jasmine.Spy;
	readFile?: jasmine.Spy;
	fileExists?: jasmine.Spy;
} = {}) {
	const spies = {
		directoryExists: overrides.directoryExists ??
			spyOn(FsFileSystem.prototype, "directoryExists").and.returnValue(false),
		glob: overrides.glob ??
			spyOn(FsFileSystem.prototype, "glob").and.returnValue([]),
		readFile: overrides.readFile ??
			spyOn(FsFileSystem.prototype, "readFile").and.returnValue(""),
		fileExists: overrides.fileExists ??
			spyOn(FsFileSystem.prototype, "fileExists").and.returnValue(false),
	};
	return spies;
}

describe("Unit - copyAISkillsToProject", () => {
	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(Util, "greenCheck").and.returnValue("✓");
	});

	describe("Angular framework", () => {
		it("should copy skills from igniteui-angular into .claude/skills/", () => {
			const angularSkillsDir = skillsDir("igniteui-angular");
			const skillFilePath = skillFile("igniteui-angular", "angular.md");
			const mockSkillContent = "# Ignite UI for Angular skills";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((dir: string) =>
					dir === angularSkillsDir ? [skillFilePath] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.callFake((p: string) => {
					if (p === skillFilePath) return mockSkillContent;
					return "";
				})
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			copyAISkillsToProject(".claude/skills");

			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/angular.md", mockSkillContent);
		});

		it("should prefer the licensed @infragistics/igniteui-angular package if installed", () => {
			const licensedPkg = "@infragistics/igniteui-angular";
			const angularSkillsDir = skillsDir(licensedPkg);
			const skillFilePath = skillFile(licensedPkg, "angular.md");

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((dir: string) =>
					dir === angularSkillsDir ? [skillFilePath] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue("skill content")
			});

			// resolvePackage + directoryExists use the container FS (destFs)
			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				),
				fileExists: jasmine.createSpy("destFs.fileExists").and.callFake((p: string) =>
					p === "./package.json"
				),
				readFile: jasmine.createSpy("destFs.readFile").and.callFake((p: string) => {
					if (p === "./package.json") return JSON.stringify({ dependencies: { [licensedPkg]: "^18.0.0" } });
					return "";
				})
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			copyAISkillsToProject(".claude/skills");

			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/angular.md", "skill content");
		});

		it("should overwrite an existing skill file with newer content", () => {
			const angularSkillsDir = skillsDir("igniteui-angular");
			const skillFilePath = skillFile("igniteui-angular", "angular.md");
			const newContent = "# Updated Angular skills";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.returnValue([skillFilePath]),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(newContent)
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				),
				fileExists: jasmine.createSpy("destFs.fileExists").and.callFake((p: string) =>
					p === ".claude/skills/angular.md"
				),
				readFile: jasmine.createSpy("destFs.readFile").and.returnValue("") // older content
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			copyAISkillsToProject(".claude/skills");

			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/angular.md", newContent);
			expect(Util.log).toHaveBeenCalledWith(jasmine.stringContaining("Updated .claude/skills/angular.md"));
		});

		it("should not write when destination content is already up-to-date", () => {
			const angularSkillsDir = skillsDir("igniteui-angular");
			const skillFilePath = skillFile("igniteui-angular", "angular.md");
			const existingContent = "# Ignite UI for Angular skills";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((dir: string) =>
					dir === angularSkillsDir ? [skillFilePath] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(existingContent)
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				),
				fileExists: jasmine.createSpy("destFs.fileExists").and.callFake((p: string) =>
					p === ".claude/skills/angular.md"
				),
				readFile: jasmine.createSpy("destFs.readFile").and.returnValue(existingContent)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			const result = copyAISkillsToProject(".claude/skills");

			expect(destFs.writeFile).not.toHaveBeenCalled();
			expect(result.found).toBe(1);
			expect(result.skipped).toBe(1);
			expect(result.failed).toBe(0);
			expect(Util.log).not.toHaveBeenCalled();
		});
	});

	describe("React framework", () => {
		it("should copy skills from igniteui-react into .claude/skills/", () => {
			const reactPkg = "igniteui-react";
			const dir = skillsDir(reactPkg);
			const file = skillFile(reactPkg, "overview.md");
			const content = "# React overview";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((d: string) =>
					d === dir ? [file] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.callFake((p: string) => {
					if (p === file) return content;
					return "";
				})
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === dir
				)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "react" }
			} as unknown as Config);

			copyAISkillsToProject(".claude/skills");

			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/overview.md", content);
		});
	});

	describe("WebComponents framework", () => {
		it("should copy skills from igniteui-webcomponents into .claude/skills/", () => {
			const wcPkg = "igniteui-webcomponents";
			const dir = skillsDir(wcPkg);
			const file = skillFile(wcPkg, "webcomponents.md");
			const content = "# Ignite UI WebComponents skills";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((d: string) =>
					d === dir ? [file] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.callFake((p: string) => {
					if (p === file) return content;
					return "";
				})
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === dir
				)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "webcomponents" }
			} as unknown as Config);

			copyAISkillsToProject(".claude/skills");

			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/webcomponents.md", content);
		});
	});

	describe("No local config (fallback)", () => {
		it("should scan all known packages when no ignite-ui-cli.json is present", () => {
			const angularPkg = "igniteui-angular";
			const dir = skillsDir(angularPkg);
			const file = skillFile(angularPkg, "angular.md");

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((d: string) =>
					d === dir ? [file] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue("skill content")
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === dir
				)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

			copyAISkillsToProject(".claude/skills");

			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/angular.md", "skill content");
		});

		it("should also scan igniteui-react in the fallback", () => {
			const reactPkg = "igniteui-react";
			const dir = skillsDir(reactPkg);
			const file = skillFile(reactPkg, "overview.md");

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((d: string) =>
					d === dir ? [file] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue("react skill content")
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === dir
				)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

			copyAISkillsToProject(".claude/skills");

			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/overview.md", "react skill content");
		});

		it("should also scan igniteui-webcomponents in the fallback", () => {
			const wcPkg = "igniteui-webcomponents";
			const dir = skillsDir(wcPkg);
			const file = skillFile(wcPkg, "webcomponents.md");

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((d: string) =>
					d === dir ? [file] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue("wc skill content")
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === dir
				)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

			copyAISkillsToProject(".claude/skills");

			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/webcomponents.md", "wc skill content");
		});
	});

	describe("No skills available", () => {
		it("should silently return when no npm skills exist and template paths also have no files", () => {
			const FAKE_TEMPLATE_PATH = "/no-skills/template";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.returnValue([])
			});

			const destFs = makeDestFs();
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);
			const mockTm = mockTemplateManager([FAKE_TEMPLATE_PATH]);

			const result = copyAISkillsToProject(".claude/skills");

			expect(result.found).toBe(0);
			expect(destFs.writeFile).not.toHaveBeenCalled();
			expect(mockTm.getFrameworkById).toHaveBeenCalledWith("angular");
		});

		it("should silently return when skills directory exists but is empty", () => {
			const dir = skillsDir("igniteui-angular");

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.returnValue([])
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === dir
				)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			copyAISkillsToProject(".claude/skills");

			expect(destFs.writeFile).not.toHaveBeenCalled();
		});
	});

	describe("Error handling", () => {
		it("should increment failed when writeFile throws creating a new file", () => {
			const pkg = "igniteui-angular";
			const dir = skillsDir(pkg);
			const file = skillFile(pkg, "angular.md");

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((d: string) =>
					d === dir ? [file] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue("skill content")
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === dir
				),
				writeFile: jasmine.createSpy("destFs.writeFile").and.throwError("EACCES: permission denied")
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			const result = copyAISkillsToProject(".claude/skills");

			expect(result.found).toBe(1);
			expect(result.skipped).toBe(0);
			expect(result.failed).toBe(1);
		});

		it("should increment failed when writeFile throws updating an existing file", () => {
			const pkg = "igniteui-angular";
			const dir = skillsDir(pkg);
			const file = skillFile(pkg, "angular.md");
			const destFile = ".claude/skills/angular.md";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((d: string) =>
					d === dir ? [file] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue("new content")
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === dir
				),
				fileExists: jasmine.createSpy("destFs.fileExists").and.callFake((p: string) =>
					p === destFile
				),
				readFile: jasmine.createSpy("destFs.readFile").and.returnValue("old content"),
				writeFile: jasmine.createSpy("destFs.writeFile").and.throwError("EACCES: permission denied")
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			const result = copyAISkillsToProject(".claude/skills");

			expect(result.found).toBe(1);
			expect(result.skipped).toBe(0);
			expect(result.failed).toBe(1);
		});

		it("should report correct counts when some writes fail and some succeed", () => {
			const pkg = "igniteui-angular";
			const dir = skillsDir(pkg);
			const file1 = skillFile(pkg, "angular.md");
			const file2 = skillFile(pkg, "components.md");

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((d: string) =>
					d === dir ? [file1, file2] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue("skill content")
			});

			let writeCallCount = 0;
			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === dir
				),
				writeFile: jasmine.createSpy("destFs.writeFile").and.callFake(() => {
					writeCallCount++;
					if (writeCallCount === 2) {
						throw new Error("ENOSPC: no space left on device");
					}
				})
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			const result = copyAISkillsToProject(".claude/skills");

			expect(result.found).toBe(2);
			expect(result.skipped).toBe(0);
			expect(result.failed).toBe(1);
			expect(destFs.writeFile).toHaveBeenCalledTimes(2);
		});
	});

	describe("Template fallback (no package skills found)", () => {
		const FAKE_TEMPLATE_PATH = "/fake/template";
		const FAKE_SKILLS_ROOT = path.join(FAKE_TEMPLATE_PATH, "..", "skills");

		it("should use angular template paths when framework is in config and no npm skills are found", () => {
			const skillFilePath = path.join(FAKE_SKILLS_ROOT, "angular.md");
			const content = "# Angular skills from template";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((dir: string) =>
					dir === FAKE_SKILLS_ROOT ? [skillFilePath] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(content),
				fileExists: spyOn(FsFileSystem.prototype, "fileExists").and.callFake((p: string) =>
					p === "ignite-ui-cli.json"
				)
			});

			const destFs = makeDestFs();
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);
			const mockTm = mockTemplateManager([FAKE_TEMPLATE_PATH]);

			copyAISkillsToProject(".claude/skills");

			expect(mockTm.getFrameworkById).toHaveBeenCalledWith("angular");
			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/angular.md", content);
		});

		it("should detect react from package.json and use react template paths when no npm skills are found", () => {
			const skillFilePath = path.join(FAKE_SKILLS_ROOT, "react.md");
			const content = "# React skills from template";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((dir: string) =>
					dir === FAKE_SKILLS_ROOT ? [skillFilePath] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(content)
			});

			// detectFrameworkFromPackageJson reads ./package.json via the container FS (destFs)
			const destFs = makeDestFs({
				fileExists: jasmine.createSpy("destFs.fileExists").and.callFake((p: string) =>
					p === "./package.json"
				),
				readFile: jasmine.createSpy("destFs.readFile").and.callFake((p: string) => {
					if (p === "./package.json") return JSON.stringify({ dependencies: { "react": "^19.0.0" } });
					return "";
				})
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);
			const mockTm = mockTemplateManager([FAKE_TEMPLATE_PATH]);

			copyAISkillsToProject(".claude/skills");

			expect(mockTm.getFrameworkById).toHaveBeenCalledWith("react");
			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/react.md", content);
		});

		it("should use webcomponents (catch-all) template paths when no angular or react detected in package.json", () => {
			const skillFilePath = path.join(FAKE_SKILLS_ROOT, "webcomponents.md");
			const content = "# WC skills from template";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((dir: string) =>
					dir === FAKE_SKILLS_ROOT ? [skillFilePath] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(content)
			});

			// detectFrameworkFromPackageJson reads ./package.json via the container FS (destFs)
			const destFs = makeDestFs({
				fileExists: jasmine.createSpy("destFs.fileExists").and.callFake((p: string) =>
					p === "./package.json"
				),
				readFile: jasmine.createSpy("destFs.readFile").and.callFake((p: string) => {
					if (p === "./package.json") return JSON.stringify({ dependencies: { "lit": "^3.0.0" } });
					return "";
				})
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);
			const mockTm = mockTemplateManager([FAKE_TEMPLATE_PATH]);

			copyAISkillsToProject(".claude/skills");

			expect(mockTm.getFrameworkById).toHaveBeenCalledWith("webcomponents");
			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/webcomponents.md", content);
		});

		it("should return empty result when no package.json exists and no npm skills are found", () => {
			spySrcFs({
				fileExists: spyOn(FsFileSystem.prototype, "fileExists").and.returnValue(false)
			});

			const destFs = makeDestFs();
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

			const result = copyAISkillsToProject(".claude/skills");

			expect(result.found).toBe(0);
			expect(result.skipped).toBe(0);
			expect(result.failed).toBe(0);
			expect(destFs.writeFile).not.toHaveBeenCalled();
		});

		it("should preserve nested directory structure from template skill paths", () => {
			const nestedFile = path.join(FAKE_SKILLS_ROOT, "grids", "grid.md");
			const content = "# Grid skills from template";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((dir: string) =>
					dir === FAKE_SKILLS_ROOT ? [nestedFile] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(content),
				fileExists: spyOn(FsFileSystem.prototype, "fileExists").and.callFake((p: string) =>
					p === "ignite-ui-cli.json"
				)
			});

			const destFs = makeDestFs();
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);
			mockTemplateManager([FAKE_TEMPLATE_PATH]);

			copyAISkillsToProject(".claude/skills");

			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/grids/grid.md", content);
		});

		it("should use config framework (not detectFrameworkFromPackageJson) when config has framework but npm skills absent", () => {
			const skillFilePath = path.join(FAKE_SKILLS_ROOT, "react.md");
			const content = "# React skills from template";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((dir: string) =>
					dir === FAKE_SKILLS_ROOT ? [skillFilePath] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.callFake((p: string) => {
					if (p === "./package.json") return JSON.stringify({ dependencies: { "@angular/core": "^17.0.0" } });
					return content;
				}),
				fileExists: spyOn(FsFileSystem.prototype, "fileExists").and.callFake((p: string) => {
					if (p === "ignite-ui-cli.json") return true;
					if (p === "./package.json") return true;
					return false;
				})
			});

			const destFs = makeDestFs();
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "react" }
			} as unknown as Config);
			const mockTm = mockTemplateManager([FAKE_TEMPLATE_PATH]);

			copyAISkillsToProject(".claude/skills");

			expect(mockTm.getFrameworkById).toHaveBeenCalledWith("react");
			expect(mockTm.getFrameworkById).not.toHaveBeenCalledWith("angular");
		});

		it("should read skill sources from real disk FS even when destFs is virtual", () => {
			// Simulates the schematics scenario: srcFs (FsFileSystem) reads from disk,
			// destFs (NgTreeFileSystem) writes into the virtual Tree.
			const ABS_TEMPLATE_PATH = path.resolve("/usr/lib/node_modules/fake-templates/base/files");
			const SKILLS_ROOT = path.join(ABS_TEMPLATE_PATH, "..", "skills");
			const skillFilePath = path.join(SKILLS_ROOT, "angular.md");
			const content = "# Angular skills from template";

			const srcSpies = spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((dir: string) =>
					dir === SKILLS_ROOT ? [skillFilePath] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(content),
				fileExists: spyOn(FsFileSystem.prototype, "fileExists").and.callFake((p: string) =>
					p === "ignite-ui-cli.json"
				)
			});

			const destFs = makeDestFs();
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);
			mockTemplateManager([ABS_TEMPLATE_PATH]);

			copyAISkillsToProject(".claude/skills");

			// Source reads go to real FsFileSystem (srcFs)
			expect(srcSpies.glob).toHaveBeenCalledWith(SKILLS_ROOT, "**/*");
			expect(srcSpies.readFile).toHaveBeenCalledWith(skillFilePath);
			// Dest writes go to the injected FS (virtual Tree)
			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/angular.md", content);
			// destFs.glob should NOT have been called — source ops use srcFs
			expect(destFs.glob).not.toHaveBeenCalled();
		});
	});

	describe("Nested skill files", () => {
		it("should preserve directory structure when copying nested skill files", () => {
			const pkg = "igniteui-angular";
			const dir = skillsDir(pkg);
			const nestedFile = skillFile(pkg, "grids/grid.md");
			const content = "# Grid skills";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((d: string) =>
					d === dir ? [nestedFile] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(content)
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === dir
				)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			copyAISkillsToProject(".claude/skills");

			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/grids/grid.md", content);
		});
	});

	describe("Agent-aware destination", () => {
		it("should copy skills to .cursor/skills/ when skillsDir targets cursor", () => {
			const angularSkillsDir = skillsDir("igniteui-angular");
			const skillFilePath = skillFile("igniteui-angular", "angular.md");
			const content = "# Angular skills";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((dir: string) =>
					dir === angularSkillsDir ? [skillFilePath] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(content)
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			copyAISkillsToProject(getSkillsDir("cursor"));

			expect(destFs.writeFile).toHaveBeenCalledWith(".cursor/skills/angular.md", content);
		});

		it("should copy skills to .agents/skills/ when skillsDir targets generic", () => {
			const angularSkillsDir = skillsDir("igniteui-angular");
			const skillFilePath = skillFile("igniteui-angular", "angular.md");
			const content = "# Angular skills";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((dir: string) =>
					dir === angularSkillsDir ? [skillFilePath] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(content)
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			copyAISkillsToProject(getSkillsDir("generic"));

			expect(destFs.writeFile).toHaveBeenCalledWith(".agents/skills/angular.md", content);
		});

		it("should copy skills to .github/skills/ when skillsDir targets copilot", () => {
			const reactPkg = "igniteui-react";
			const dir = skillsDir(reactPkg);
			const file = skillFile(reactPkg, "overview.md");
			const content = "# React overview";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((d: string) =>
					d === dir ? [file] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(content)
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === dir
				)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "react" }
			} as unknown as Config);

			copyAISkillsToProject(getSkillsDir("copilot"));

			expect(destFs.writeFile).toHaveBeenCalledWith(".github/skills/overview.md", content);
		});

		it("should support a custom skills directory path", () => {
			const angularSkillsDir = skillsDir("igniteui-angular");
			const skillFilePath = skillFile("igniteui-angular", "angular.md");
			const content = "# Angular skills";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((dir: string) =>
					dir === angularSkillsDir ? [skillFilePath] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(content)
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			copyAISkillsToProject("my-custom/ai-skills");

			expect(destFs.writeFile).toHaveBeenCalledWith("my-custom/ai-skills/angular.md", content);
		});

		it("should default to .claude/skills/ when no skillsDir is provided", () => {
			const angularSkillsDir = skillsDir("igniteui-angular");
			const skillFilePath = skillFile("igniteui-angular", "angular.md");
			const content = "# Angular skills";

			spySrcFs({
				glob: spyOn(FsFileSystem.prototype, "glob").and.callFake((dir: string) =>
					dir === angularSkillsDir ? [skillFilePath] : []
				),
				readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(content)
			});

			const destFs = makeDestFs({
				directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				)
			});
			App.container.set(FS_TOKEN, destFs);
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);

			copyAISkillsToProject(".claude/skills");

			expect(destFs.writeFile).toHaveBeenCalledWith(".claude/skills/angular.md", content);
		});
	});
});

describe("Unit - getSkillsDir", () => {
	it("should return .claude/skills for 'claude'", () => {
		expect(getSkillsDir("claude")).toBe(".claude/skills");
	});

	it("should return .github/skills for 'copilot'", () => {
		expect(getSkillsDir("copilot")).toBe(".github/skills");
	});

	it("should return .cursor/skills for 'cursor'", () => {
		expect(getSkillsDir("cursor")).toBe(".cursor/skills");
	});

	it("should return .codex/skills for 'codex'", () => {
		expect(getSkillsDir("codex")).toBe(".codex/skills");
	});

	it("should return .windsurf/skills for 'windsurf'", () => {
		expect(getSkillsDir("windsurf")).toBe(".windsurf/skills");
	});

	it("should return .gemini/skills for 'gemini'", () => {
		expect(getSkillsDir("gemini")).toBe(".gemini/skills");
	});

	it("should return .junie/skills for 'junie'", () => {
		expect(getSkillsDir("junie")).toBe(".junie/skills");
	});

	it("should return .agents/skills for 'generic'", () => {
		expect(getSkillsDir("generic")).toBe(".agents/skills");
	});
});

describe("Unit - AI_AGENT_SKILLS_DIRS", () => {
	it("should contain entries for all expected agents", () => {
		const expected: AIAgentTarget[] = ["claude", "copilot", "cursor", "codex", "windsurf", "gemini", "junie", "generic"];
		expect(Object.keys(AI_AGENT_SKILLS_DIRS).sort()).toEqual(expected.sort());
	});
});

describe("Unit - getInstructionFilePath", () => {
	it("should return .claude/CLAUDE.md for 'claude'", () => {
		expect(getInstructionFilePath("claude")).toBe(".claude/CLAUDE.md");
	});

	it("should return .github/copilot-instructions.md for 'copilot'", () => {
		expect(getInstructionFilePath("copilot")).toBe(".github/copilot-instructions.md");
	});

	it("should return .cursor/rules/cursor.mdc for 'cursor'", () => {
		expect(getInstructionFilePath("cursor")).toBe(".cursor/rules/cursor.mdc");
	});

	it("should return .codex/instructions.md for 'codex'", () => {
		expect(getInstructionFilePath("codex")).toBe(".codex/instructions.md");
	});

	it("should return .windsurf/rules/guidelines.md for 'windsurf'", () => {
		expect(getInstructionFilePath("windsurf")).toBe(".windsurf/rules/guidelines.md");
	});

	it("should return .gemini/GEMINI.md for 'gemini'", () => {
		expect(getInstructionFilePath("gemini")).toBe(".gemini/GEMINI.md");
	});

	it("should return .junie/guidelines.md for 'junie'", () => {
		expect(getInstructionFilePath("junie")).toBe(".junie/guidelines.md");
	});

	it("should return AGENTS.md for 'generic'", () => {
		expect(getInstructionFilePath("generic")).toBe("AGENTS.md");
	});
});

describe("Unit - AI_AGENT_INSTRUCTION_FILES", () => {
	it("should contain entries for all expected agents", () => {
		const expected: AIAgentTarget[] = ["claude", "copilot", "cursor", "codex", "windsurf", "gemini", "junie", "generic"];
		expect(Object.keys(AI_AGENT_INSTRUCTION_FILES).sort()).toEqual(expected.sort());
	});
});

describe("Unit - copyAgentInstructionFiles", () => {
	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(Util, "greenCheck").and.returnValue("✓");
	});

	it("should copy AGENTS.md content to each agent's instruction file path", () => {
		const agentsContent = "# AI Agent Instructions\nFollow these rules.";
		const angularSkillsDir = skillsDir("igniteui-angular");
		const agentsPath = path.join(path.dirname(angularSkillsDir), "AGENTS.md");

		spySrcFs({
			fileExists: spyOn(FsFileSystem.prototype, "fileExists").and.callFake((p: string) =>
				p === agentsPath
			),
			readFile: spyOn(FsFileSystem.prototype, "readFile").and.returnValue(agentsContent)
		});

		const destFs = makeDestFs({
			directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
				p === angularSkillsDir
			)
		});
		App.container.set(FS_TOKEN, destFs);
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			project: { framework: "angular" }
		} as unknown as Config);

		copyAgentInstructionFiles(["claude", "cursor"]);

		const cursorFrontmatter = "---\ncontext: true\npriority: high\nscope: project\n---\n";
		expect(destFs.writeFile).toHaveBeenCalledWith(".claude/CLAUDE.md", agentsContent);
		expect(destFs.writeFile).toHaveBeenCalledWith(".cursor/rules/cursor.mdc", cursorFrontmatter + agentsContent);
	});

	it("should skip writing when instruction file already has same content", () => {
		const agentsContent = "# AI Agent Instructions - same content";
		const angularSkillsDir = skillsDir("igniteui-angular");
		const agentsPath = path.join(path.dirname(angularSkillsDir), "AGENTS.md");
		const claudeDest = ".claude/CLAUDE.md";

		spySrcFs({
			fileExists: spyOn(FsFileSystem.prototype, "fileExists").and.callFake((p: string) =>
				p === agentsPath
			),
			readFile: spyOn(FsFileSystem.prototype, "readFile").and.callFake((p: string) => {
				if (p === agentsPath) return agentsContent;
				return "";
			})
		});

		const destFs = makeDestFs({
			directoryExists: jasmine.createSpy("destFs.directoryExists").and.callFake((p: string) =>
				p === angularSkillsDir
			),
			fileExists: jasmine.createSpy("destFs.fileExists").and.callFake((p: string) =>
				p === claudeDest
			),
			readFile: jasmine.createSpy("destFs.readFile").and.callFake((p: string) => {
				if (p === claudeDest) return agentsContent;
				return "{}";
			})
		});
		App.container.set(FS_TOKEN, destFs);
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			project: { framework: "angular" }
		} as unknown as Config);

		copyAgentInstructionFiles(["claude"]);

		expect(destFs.writeFile).not.toHaveBeenCalled();
	});

	it("should not write anything when AGENTS.md source is not found", () => {
		spySrcFs({
			fileExists: spyOn(FsFileSystem.prototype, "fileExists").and.returnValue(false)
		});

		const destFs = makeDestFs();
		App.container.set(FS_TOKEN, destFs);
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

		copyAgentInstructionFiles(["claude", "generic"]);

		expect(destFs.writeFile).not.toHaveBeenCalled();
	});
});
