import * as path from "path";
import { App, Config, FS_TOKEN, FsFileSystem, GoogleAnalytics, IFileSystem, InquirerWrapper, ProjectConfig, TEMPLATE_MANAGER, Util } from "@igniteui/cli-core";
import { configureMCP, configureSkills } from "../../packages/cli/lib/commands/ai-config";
import * as aiConfig  from "../../packages/cli/lib/commands/ai-config";

const IGNITEUI_SERVER_KEY = "igniteui-cli";
const IGNITEUI_THEMING_SERVER_KEY = "igniteui-theming";
const igniteuiServer = { command: "npx", args: ["-y", "igniteui-cli", "mcp"] };
const igniteuiThemingServer = { command: "npx", args: ["-y", "igniteui-theming", "igniteui-theming-mcp"] };

function createMockFs(existingContent?: string): IFileSystem {
	return {
		fileExists: jasmine.createSpy("fileExists"),
		readFile: existingContent
			? jasmine.createSpy("readFile").and.returnValue(existingContent)
			: jasmine.createSpy("readFile").and.throwError("ENOENT"),
		writeFile: jasmine.createSpy("writeFile"),
		directoryExists: jasmine.createSpy("directoryExists"),
		glob: jasmine.createSpy("glob").and.returnValue([])
	};
}

describe("Unit - ai-config command", () => {
	const configPath = path.join(process.cwd(), ".vscode", "mcp.json");

	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(Util, "greenCheck").and.returnValue("✓");
	});

	function writtenConfig(mockFs: IFileSystem): Record<string, unknown> {
		const content = (mockFs.writeFile as jasmine.Spy).calls.mostRecent().args[1] as string;
		return JSON.parse(content);
	}

	describe("configureMCP", () => {
		it("creates .vscode/mcp.json with both servers when file does not exist", () => {
			const mockFs = createMockFs();
			App.container.set(FS_TOKEN, mockFs);

			configureMCP();

			expect(mockFs.writeFile).toHaveBeenCalled();
			const config = writtenConfig(mockFs);
			expect((config.servers as any)[IGNITEUI_SERVER_KEY]).toEqual(igniteuiServer);
			expect((config.servers as any)[IGNITEUI_THEMING_SERVER_KEY]).toEqual(igniteuiThemingServer);
		});

		it("adds both servers when file exists but servers object is empty", () => {
			const mockFs = createMockFs(JSON.stringify({ servers: {} }));
			App.container.set(FS_TOKEN, mockFs);

			configureMCP();

			expect(mockFs.writeFile).toHaveBeenCalled();
			const config = writtenConfig(mockFs);
			expect((config.servers as any)[IGNITEUI_SERVER_KEY]).toEqual(igniteuiServer);
			expect((config.servers as any)[IGNITEUI_THEMING_SERVER_KEY]).toEqual(igniteuiThemingServer);
		});

		it("adds missing igniteui-theming server when only igniteui-cli is present", () => {
			const mockFs = createMockFs(JSON.stringify({
				servers: { [IGNITEUI_SERVER_KEY]: igniteuiServer }
			}));
			App.container.set(FS_TOKEN, mockFs);

			configureMCP();

			expect(mockFs.writeFile).toHaveBeenCalled();
			const config = writtenConfig(mockFs);
			expect((config.servers as any)[IGNITEUI_SERVER_KEY]).toEqual(igniteuiServer);
			expect((config.servers as any)[IGNITEUI_THEMING_SERVER_KEY]).toEqual(igniteuiThemingServer);
		});

		it("adds missing igniteui-cli server when only igniteui-theming is present", () => {
			const mockFs = createMockFs(JSON.stringify({
				servers: { [IGNITEUI_THEMING_SERVER_KEY]: igniteuiThemingServer }
			}));
			App.container.set(FS_TOKEN, mockFs);

			configureMCP();

			expect(mockFs.writeFile).toHaveBeenCalled();
			const config = writtenConfig(mockFs);
			expect((config.servers as any)[IGNITEUI_SERVER_KEY]).toEqual(igniteuiServer);
			expect((config.servers as any)[IGNITEUI_THEMING_SERVER_KEY]).toEqual(igniteuiThemingServer);
		});

		it("is a no-op and logs when both servers are already configured", () => {
			const mockFs = createMockFs(JSON.stringify({
				servers: {
					[IGNITEUI_SERVER_KEY]: igniteuiServer,
					[IGNITEUI_THEMING_SERVER_KEY]: igniteuiThemingServer
				}
			}));
			App.container.set(FS_TOKEN, mockFs);

			configureMCP();

			expect(mockFs.writeFile).not.toHaveBeenCalled();
			expect(Util.log).toHaveBeenCalledWith(jasmine.stringContaining("already configured"));
		});

		it("preserves existing third-party servers when adding igniteui servers", () => {
			const thirdPartyServer = { command: "node", args: ["server.js"] };
			const mockFs = createMockFs(JSON.stringify({
				servers: { "other-server": thirdPartyServer }
			}));
			App.container.set(FS_TOKEN, mockFs);

			configureMCP();

			expect(mockFs.writeFile).toHaveBeenCalled();
			const config = writtenConfig(mockFs);
			expect((config.servers as any)["other-server"]).toEqual(thirdPartyServer);
			expect((config.servers as any)[IGNITEUI_SERVER_KEY]).toEqual(igniteuiServer);
			expect((config.servers as any)[IGNITEUI_THEMING_SERVER_KEY]).toEqual(igniteuiThemingServer);
		});
	});

	describe("configureSkills", () => {
		const angularSkillsDir = "node_modules/igniteui-angular/skills";

		beforeEach(() => {
			spyOn(Util, "warn");
		});

		function setupAngularConfig() {
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "getConfig").and.returnValue({
				project: { framework: "angular" }
			} as unknown as Config);
		}

		it("warns when no skill files are found", () => {
			const mockFs: IFileSystem = {
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
					p === "ignite-ui-cli.json"
				),
				readFile: jasmine.createSpy("readFile").and.returnValue(""),
				writeFile: jasmine.createSpy("writeFile"),
				directoryExists: jasmine.createSpy("directoryExists").and.returnValue(false),
				glob: jasmine.createSpy("glob").and.returnValue([])
			} as unknown as IFileSystem;

			spyOn(App.container, "get").and.callFake(token => {
				if (token === FS_TOKEN) {
					return mockFs;
				}
				if (token === TEMPLATE_MANAGER) {
					return { getFrameworkById: () => null } as any;
				}
			})
			setupAngularConfig();

			configureSkills();

			expect(Util.warn).toHaveBeenCalledWith(jasmine.stringContaining("No AI skill files found"), "yellow");
			expect(Util.log).not.toHaveBeenCalled();
		});

		it("warns with failure count when some writes fail", () => {
			const skillFile = `${angularSkillsDir}/angular.md`;
			const mockFs: IFileSystem = {
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
					p === "ignite-ui-cli.json"
				),
				readFile: jasmine.createSpy("readFile").and.returnValue("skill content"),
				writeFile: jasmine.createSpy("writeFile").and.throwError("EACCES: permission denied"),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				),
				glob: jasmine.createSpy("glob").and.callFake((d: string) =>
					d === angularSkillsDir ? [skillFile] : []
				)
			} as unknown as IFileSystem;

			spyOn(App.container, "get").and.returnValue(mockFs);
			// srcFs reads (FsFileSystem.prototype) for source content
			spyOn(FsFileSystem.prototype, "glob").and.callFake((d: string) =>
				d === angularSkillsDir ? [skillFile] : []
			);
			spyOn(FsFileSystem.prototype, "readFile").and.returnValue("skill content");
			setupAngularConfig();

			configureSkills();

			expect(Util.warn).toHaveBeenCalledWith(jasmine.stringContaining("Failed to write 1 skill file(s) out of 1"), "yellow");
			expect(Util.log).not.toHaveBeenCalled();
		});

		it("logs up-to-date when all files are already current", () => {
			const skillFile = `${angularSkillsDir}/angular.md`;
			const destFile = ".claude/skills/angular.md";
			const content = "# Ignite UI skills";
			const mockFs: IFileSystem = {
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
					p === "ignite-ui-cli.json" || p === destFile
				),
				readFile: jasmine.createSpy("readFile").and.returnValue(content),
				writeFile: jasmine.createSpy("writeFile"),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				),
				glob: jasmine.createSpy("glob").and.callFake((d: string) =>
					d === angularSkillsDir ? [skillFile] : []
				)
			} as unknown as IFileSystem;

			spyOn(App.container, "get").and.returnValue(mockFs);
			// srcFs reads (FsFileSystem.prototype) for source content
			spyOn(FsFileSystem.prototype, "glob").and.callFake((d: string) =>
				d === angularSkillsDir ? [skillFile] : []
			);
			spyOn(FsFileSystem.prototype, "readFile").and.returnValue(content);
			setupAngularConfig();

			configureSkills();

			expect(Util.log).toHaveBeenCalledWith(jasmine.stringContaining("already up-to-date"));
			expect(Util.warn).not.toHaveBeenCalled();
		});

		it("logs created/updated count when skills are written successfully", () => {
			const skillFile = `${angularSkillsDir}/angular.md`;
			const mockFs: IFileSystem = {
				fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
					p === "ignite-ui-cli.json"
				),
				readFile: jasmine.createSpy("readFile").and.returnValue("skill content"),
				writeFile: jasmine.createSpy("writeFile"),
				directoryExists: jasmine.createSpy("directoryExists").and.callFake((p: string) =>
					p === angularSkillsDir
				),
				glob: jasmine.createSpy("glob").and.callFake((d: string) =>
					d === angularSkillsDir ? [skillFile] : []
				)
			} as unknown as IFileSystem;

			spyOn(App.container, "get").and.returnValue(mockFs);
			// srcFs reads (FsFileSystem.prototype) for source content
			spyOn(FsFileSystem.prototype, "glob").and.callFake((d: string) =>
				d === angularSkillsDir ? [skillFile] : []
			);
			spyOn(FsFileSystem.prototype, "readFile").and.returnValue("skill content");
			setupAngularConfig();

			configureSkills();

			expect(Util.log).toHaveBeenCalledWith(jasmine.stringContaining("1 AI skill file(s) created or updated"));
			expect(Util.warn).not.toHaveBeenCalled();
		});
	});

	describe("handler", () => {
		it("prompts for agent when neither --agent nor --skills-dir is provided", async () => {
			App.container.set(FS_TOKEN, createMockFs());
			spyOn(InquirerWrapper, "select").and.returnValue(Promise.resolve("claude"));

			await aiConfig.default.handler({ _: ["ai-config"], $0: "ig" });

			expect(InquirerWrapper.select).toHaveBeenCalledWith(jasmine.objectContaining({
				message: "Which AI agent are you using?"
			}));
			expect(GoogleAnalytics.post).toHaveBeenCalledWith(jasmine.objectContaining({ t: "screenview", cd: "MCP" }));
			expect(GoogleAnalytics.post).toHaveBeenCalledWith(jasmine.objectContaining({ t: "event", ea: "agent: claude", el: undefined }));
		});

		it("skips prompt when --agent is provided", async () => {
			App.container.set(FS_TOKEN, createMockFs());
			spyOn(InquirerWrapper, "select");

			await aiConfig.default.handler({ _: ["ai-config"], $0: "ig", agent: "cursor" });

			expect(InquirerWrapper.select).not.toHaveBeenCalled();
			expect(GoogleAnalytics.post).toHaveBeenCalledWith(jasmine.objectContaining({ ea: "agent: cursor", el: undefined }));
		});

		it("skips prompt when --skills-dir is provided", async () => {
			App.container.set(FS_TOKEN, createMockFs());
			spyOn(InquirerWrapper, "select");

			await aiConfig.default.handler({ _: ["ai-config"], $0: "ig", skillsDir: "custom/path" });

			expect(InquirerWrapper.select).not.toHaveBeenCalled();
			expect(GoogleAnalytics.post).toHaveBeenCalledWith(jasmine.objectContaining({ t: "event", ea: "agent: custom", el: "customSkillsDir" }));
		});
	});
});
